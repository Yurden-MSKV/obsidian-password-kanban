const { Plugin, Modal, ItemView, Notice, setIcon, getLanguage } = require("obsidian");

const DB_PATH = ".password-kanban.enc";
const CONFLICT_DIR = ".password-kanban-conflicts";
const VIEW_TYPE = "password-kanban-view";
const KDF_ITERATIONS = 600000;
const AUTO_LOCK_MS = 5 * 60 * 1000;
const CLIPBOARD_CLEAR_MS = 2 * 60 * 1000;
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const UI_LANGUAGE = (getLanguage?.() || "ru").toLowerCase().startsWith("en") ? "en" : "ru";

function t(ru, en, values = {}) {
  const text = UI_LANGUAGE === "en" ? en : ru;
  return text.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}

function makeEl(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function makeButton(parent, label, onClick, className = "") {
  const button = makeEl("button", className, label);
  button.type = "button";
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    onClick(event);
  });
  parent.appendChild(button);
  return button;
}

function makeIconButton(parent, icon, label, onClick, className = "") {
  const button = makeEl("button", `clickable-icon ${className}`);
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.title = label;
  setIcon(button, icon);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    onClick(event);
  });
  parent.appendChild(button);
  return button;
}

function bytesToBase64(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function base64ToBytes(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function randomBytes(length) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

async function deriveKey(password, salt, iterations) {
  const material = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

async function fingerprint(value) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return bytesToBase64(new Uint8Array(digest));
}

function newDatabase() {
  return {
    formatVersion: 1,
    categories: [
      { id: crypto.randomUUID(), name: t("Финансы", "Finance") },
      { id: crypto.randomUUID(), name: t("Работа", "Work") },
      { id: crypto.randomUUID(), name: t("Покупки", "Shopping") },
      { id: crypto.randomUUID(), name: t("Прочее", "Other") },
    ],
    entries: [],
  };
}

function normalizeDatabase(value) {
  if (!value || value.formatVersion !== 1 || !Array.isArray(value.categories) || !Array.isArray(value.entries)) {
    throw new Error(t(
      "Файл не похож на базу Password Kanban или его формат не поддерживается.",
      "This file is not a Password Kanban database or its format is unsupported.",
    ));
  }
  const categories = value.categories
    .filter((item) => item && typeof item.id === "string" && typeof item.name === "string")
    .map((item) => ({ id: item.id, name: item.name }));
  const categoryIds = new Set(categories.map((item) => item.id));
  const entries = value.entries
    .filter((item) => item && typeof item.id === "string" && typeof item.title === "string")
    .map((item) => ({
      id: item.id,
      categoryId: categoryIds.has(item.categoryId) ? item.categoryId : categories[0]?.id,
      title: item.title,
      fields: Array.isArray(item.fields)
        ? item.fields
            .filter((field) => field && typeof field.label === "string")
            .map((field) => ({
              id: typeof field.id === "string" ? field.id : crypto.randomUUID(),
              label: field.label,
              value: typeof field.value === "string" ? field.value : "",
            }))
        : [],
      createdAt: Number(item.createdAt) || Date.now(),
      updatedAt: Number(item.updatedAt) || Date.now(),
    }));
  return { formatVersion: 1, categories, entries };
}

function generatePassword() {
  // Avoid common visual confusables: 0/O, 1/I/l/L, 2/Z, 5/S, 6/G, 8/B and 9/Q.
  const groups = [
    "acdefhjkmnprtuvwxy",
    "ACDEFHJKMNPRTUVWXY",
    "347",
  ];
  const alphabet = groups.join("");
  const randomIndex = (max) => {
    const limit = Math.floor(256 / max) * max;
    const byte = new Uint8Array(1);
    do crypto.getRandomValues(byte); while (byte[0] >= limit);
    return byte[0] % max;
  };
  const length = 11 + randomIndex(5);
  const chars = groups.map((group) => group[randomIndex(group.length)]);
  while (chars.length < length) chars.push(alphabet[randomIndex(alphabet.length)]);
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomIndex(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}

function isPasswordField(field) {
  return /^(пароль|password)$/i.test(field.label.trim());
}

class PasswordKanbanPlugin extends Plugin {
  async onload() {
    this.db = null;
    this.key = null;
    this.salt = null;
    this.diskFingerprint = null;
    this.boardView = null;
    this.entryEditorModal = null;
    this.conflictRecoveryModal = null;
    this.lockTimer = null;
    this.editingModeTimer = null;
    this.editingMode = false;
    this.clipboardTimer = null;
    this.clipboardSequence = 0;
    this.saveQueue = Promise.resolve();

    this.registerView(VIEW_TYPE, (leaf) => new PasswordBoardView(leaf, this));
    this.addRibbonIcon("key-round", t("Открыть Password Kanban", "Open Password Kanban"), () => this.openGate());
    this.addCommand({
      id: "open-password-kanban",
      name: t("Открыть Password Kanban", "Open Password Kanban"),
      callback: () => this.openGate(),
    });
    this.addCommand({
      id: "lock-password-kanban",
      name: t("Заблокировать Password Kanban", "Lock Password Kanban"),
      callback: () => this.lock(true),
    });
    this.addCommand({
      id: "recover-password-kanban-conflict",
      name: t("Восстановить локальную копию после конфликта", "Restore a local copy after a sync conflict"),
      callback: () => this.openConflictRecovery(),
    });
    this.addCommand({
      id: "open-password-kanban-help",
      name: t("Открыть справку Password Kanban", "Open Password Kanban help"),
      callback: () => this.openHelp(),
    });

    this.activityHandler = () => this.resetLockTimer();
    this.activityEvents = ["pointerdown", "keydown", "input", "change", "wheel"];
    for (const eventName of this.activityEvents) {
      window.addEventListener(eventName, this.activityHandler, true);
    }
    this.blurHandler = () => {
      if (this.db && this.key && !this.editingMode) this.lock(true);
    };
    window.addEventListener("blur", this.blurHandler);

    // Запрашиваем мастер-пароль при загрузке Obsidian.
    window.setTimeout(() => this.openGate(), 700);
  }

  onunload() {
    for (const eventName of this.activityEvents) {
      window.removeEventListener(eventName, this.activityHandler, true);
    }
    window.removeEventListener("blur", this.blurHandler);
    this.entryEditorModal?.close();
    this.conflictRecoveryModal?.close();
    window.clearTimeout(this.lockTimer);
    window.clearTimeout(this.editingModeTimer);
    window.clearTimeout(this.clipboardTimer);
    this.clipboardSequence++;
    this.boardView = null;
    this.db = null;
    this.key = null;
    this.salt = null;
    this.editingMode = false;
  }

  async copyToClipboard(value, label) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      new Notice(t("Не удалось скопировать. Проверьте разрешения буфера обмена.", "Could not copy. Check clipboard permissions."));
      return;
    }

    const sequence = ++this.clipboardSequence;
    window.clearTimeout(this.clipboardTimer);
    this.clipboardTimer = window.setTimeout(async () => {
      if (sequence !== this.clipboardSequence) return;
      try {
        const currentValue = await navigator.clipboard.readText();
        if (sequence !== this.clipboardSequence) return;
        if (currentValue === value) {
          await navigator.clipboard.writeText("");
          new Notice(t("Скопированное значение удалено из буфера обмена.", "Copied value cleared from the clipboard."));
        }
      } catch {
        new Notice(t("Не удалось очистить буфер автоматически. Очистите его вручную.", "Could not clear the clipboard automatically. Please clear it manually."));
      } finally {
        if (sequence === this.clipboardSequence) this.clipboardTimer = null;
      }
    }, CLIPBOARD_CLEAR_MS);

    new Notice(t(
      "Скопировано: {label}. Очистка через 2 минуты, если значение останется в буфере.",
      "Copied: {label}. It will be cleared in 2 minutes if it is still on the clipboard.",
      { label },
    ));
  }

  async openGate() {
    if (this.db && this.key) {
      this.openBoard();
      return;
    }
    const adapter = this.app.vault.adapter;
    const exists = await adapter.exists(DB_PATH);
    if (exists) new UnlockModal(this.app, this).open();
    else new SetupModal(this.app, this).open();
  }

  async createVault(password) {
    if (!globalThis.crypto?.subtle) throw new Error(t("В этой версии Obsidian недоступна Web Crypto API.", "Web Crypto API is unavailable in this version of Obsidian."));
    this.salt = randomBytes(16);
    this.key = await deriveKey(password, this.salt, KDF_ITERATIONS);
    this.db = newDatabase();
    this.diskFingerprint = null;
    const saved = await this.persist();
    if (!saved) throw new Error(t("Не удалось создать зашифрованную базу.", "Could not create the encrypted database."));
    this.resetLockTimer();
  }

  async unlockVault(password) {
    if (!globalThis.crypto?.subtle) throw new Error(t("В этой версии Obsidian недоступна Web Crypto API.", "Web Crypto API is unavailable in this version of Obsidian."));
    const raw = await this.app.vault.adapter.read(DB_PATH);
    const envelope = JSON.parse(raw);
    if (
      envelope.formatVersion !== 1 ||
      envelope.kdf?.name !== "PBKDF2" ||
      envelope.cipher?.name !== "AES-GCM"
    ) {
      throw new Error(t("Неизвестный формат зашифрованной базы.", "Unknown encrypted database format."));
    }
    const iterations = Number(envelope.kdf.iterations);
    if (!Number.isInteger(iterations) || iterations < 100000 || iterations > 2000000) {
      throw new Error(t("Некорректные параметры шифрования.", "Invalid encryption parameters."));
    }
    const salt = base64ToBytes(envelope.kdf.salt);
    const key = await deriveKey(password, salt, iterations);
    const clear = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: base64ToBytes(envelope.cipher.iv) },
      key,
      base64ToBytes(envelope.cipher.data),
    );
    const db = normalizeDatabase(JSON.parse(decoder.decode(clear)));
    this.db = db;
    this.key = key;
    this.salt = salt;
    this.diskFingerprint = await fingerprint(raw);
    this.resetLockTimer();
    this.notifyConflictCopies();
    return true;
  }

  async notifyConflictCopies() {
    try {
      const adapter = this.app.vault.adapter;
      if (!(await adapter.exists(CONFLICT_DIR))) return;
      const files = (await adapter.list(CONFLICT_DIR)).files.filter((path) => path.endsWith(".enc"));
      if (files.length) new Notice(t(
        "Найдено конфликтных копий: {count}. Восстановление — в командах Password Kanban.",
        "Found {count} conflict copy/copies. Restore them from Password Kanban commands.",
        { count: files.length },
      ));
    } catch (error) {
      console.warn(t("Password Kanban не удалось проверить конфликтные копии", "Password Kanban could not inspect conflict copies"), error);
    }
  }

  async encryptedEnvelope(db = this.db) {
    const iv = randomBytes(12);
    const clear = encoder.encode(JSON.stringify(db));
    const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, this.key, clear);
    return JSON.stringify({
      formatVersion: 1,
      kdf: {
        name: "PBKDF2",
        hash: "SHA-256",
        iterations: KDF_ITERATIONS,
        salt: bytesToBase64(this.salt),
      },
      cipher: {
        name: "AES-GCM",
        iv: bytesToBase64(iv),
        data: bytesToBase64(new Uint8Array(encrypted)),
      },
    });
  }

  async persist() {
    const task = this.saveQueue.then(() => this.persistOnce());
    this.saveQueue = task.catch(() => false);
    return task;
  }

  async persistOnce() {
    if (!this.db || !this.key) return false;
    const adapter = this.app.vault.adapter;
    if (this.diskFingerprint) {
      const exists = await adapter.exists(DB_PATH);
      const currentRaw = exists ? await adapter.read(DB_PATH) : "";
      const currentFingerprint = exists ? await fingerprint(currentRaw) : null;
      if (!exists || currentFingerprint !== this.diskFingerprint) {
        // Сохраняем локальную версию отдельно, не затирая файл, изменённый синхронизацией.
        const localEnvelope = await this.encryptedEnvelope();
        if (!(await adapter.exists(CONFLICT_DIR))) await adapter.mkdir(CONFLICT_DIR);
        const conflictPath = `${CONFLICT_DIR}/local-${new Date().toISOString().replace(/[:.]/g, "-")}.enc`;
        await adapter.write(conflictPath, localEnvelope);
        this.lock(false);
        new Notice(t(
          "Обнаружен конфликт синхронизации. Локальная версия сохранена в {path}; основная база не перезаписана.",
          "A sync conflict was detected. The local copy was saved to {path}; the main database was not overwritten.",
          { path: conflictPath },
        ));
        return false;
      }
    }
    const raw = await this.encryptedEnvelope();
    await adapter.write(DB_PATH, raw);
    this.diskFingerprint = await fingerprint(raw);
    return true;
  }

  async saveAndNotify() {
    try {
      return await this.persist();
    } catch (error) {
      console.error(t("Не удалось сохранить Password Kanban", "Password Kanban save failed"), error);
      new Notice(t("Не удалось сохранить зашифрованную базу: {message}", "Could not save the encrypted database: {message}", { message: error.message }));
      return false;
    }
  }

  async openBoard() {
    if (!this.db || !this.key) {
      this.openGate();
      return;
    }
    let leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    this.app.workspace.revealLeaf(leaf);
    this.boardView = leaf.view;
    this.boardView?.render();
    this.resetLockTimer();
  }

  resetLockTimer() {
    if (!this.db || !this.key) return;
    if (this.editingMode) {
      window.clearTimeout(this.editingModeTimer);
      this.editingModeTimer = window.setTimeout(() => {
        this.editingMode = false;
        this.editingModeTimer = null;
        this.lock(true);
      }, AUTO_LOCK_MS);
      return;
    }
    window.clearTimeout(this.lockTimer);
    this.lockTimer = window.setTimeout(() => this.lock(true), AUTO_LOCK_MS);
  }

  toggleEditingMode() {
    if (!this.db || !this.key) return;

    if (this.editingMode) {
      this.editingMode = false;
      window.clearTimeout(this.editingModeTimer);
      this.editingModeTimer = null;
      this.resetLockTimer();
      this.boardView?.render();
      new Notice(t(
        "Обычный режим включён. Блокировка при потере фокуса активна.",
        "Normal mode enabled. Locking on focus loss is active.",
      ));
      return;
    }

    this.editingMode = true;
    window.clearTimeout(this.lockTimer);
    this.lockTimer = null;
    this.resetLockTimer();
    this.boardView?.render();
    new Notice(t(
      "Режим редактирования включён. Хранилище заблокируется через 5 минут бездействия.",
      "Editing mode enabled. The vault will lock after 5 minutes of inactivity.",
    ));
  }

  lock(showNotice) {
    window.clearTimeout(this.lockTimer);
    window.clearTimeout(this.editingModeTimer);
    this.editingModeTimer = null;
    this.editingMode = false;
    const hadUnsavedEditor = Boolean(this.entryEditorModal);
    this.db = null;
    this.key = null;
    this.salt = null;
    this.diskFingerprint = null;
    this.entryEditorModal?.close();
    this.conflictRecoveryModal?.close();
    if (this.boardView) {
      this.boardView.expandedEntryId = null;
      this.boardView.revealedPasswords.clear();
      this.boardView.render();
    }
    if (showNotice) {
      new Notice(hadUnsavedEditor
        ? t("Хранилище заблокировано. Несохранённые изменения карточки потеряны.", "The vault is locked. Unsaved card changes were discarded.")
        : t("Password Kanban заблокирован.", "Password Kanban is locked."));
    }
  }

  async openConflictRecovery() {
    if (!this.db || !this.key) {
      new Notice(t("Сначала разблокируйте основную базу, затем запустите восстановление ещё раз.", "Unlock the main database first, then run recovery again."));
      this.openGate();
      return;
    }
    const adapter = this.app.vault.adapter;
    if (!(await adapter.exists(CONFLICT_DIR))) {
      new Notice(t("Локальных копий после конфликтов не найдено.", "No local conflict copies were found."));
      return;
    }
    const listing = await adapter.list(CONFLICT_DIR);
    const files = listing.files.filter((path) => path.endsWith(".enc"));
    if (!files.length) {
      new Notice(t("Локальных копий после конфликтов не найдено.", "No local conflict copies were found."));
      return;
    }
    new ConflictRecoveryModal(this.app, this, files).open();
  }

  openHelp() {
    new HelpModal(this.app, this).open();
  }

  async mergeConflictCopy(path, password) {
    if (!this.db || !this.key) throw new Error(t("Сначала разблокируйте основную базу.", "Unlock the main database first."));
    const raw = await this.app.vault.adapter.read(path);
    const envelope = JSON.parse(raw);
    const iterations = Number(envelope.kdf?.iterations);
    if (!Number.isInteger(iterations) || iterations < 100000 || iterations > 2000000) {
      throw new Error(t("Некорректные параметры копии.", "Invalid conflict-copy parameters."));
    }
    const salt = base64ToBytes(envelope.kdf.salt);
    const key = await deriveKey(password, salt, iterations);
    const clear = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: base64ToBytes(envelope.cipher.iv) },
      key,
      base64ToBytes(envelope.cipher.data),
    );
    const recovered = normalizeDatabase(JSON.parse(decoder.decode(clear)));

    const categoryMap = new Map();
    for (const category of recovered.categories) {
      let target = this.db.categories.find((item) => item.name === category.name);
      if (!target) {
        target = { id: crypto.randomUUID(), name: category.name };
        this.db.categories.push(target);
      }
      categoryMap.set(category.id, target.id);
    }
    for (const entry of recovered.entries) {
      this.db.entries.push({
        ...entry,
        id: crypto.randomUUID(),
        categoryId: categoryMap.get(entry.categoryId) || this.db.categories[0]?.id,
        title: `${entry.title} ${t("(восстановлено)", "(restored)")}`,
        fields: entry.fields.map((field) => ({ ...field, id: crypto.randomUUID() })),
      });
    }

    const saved = await this.persist();
    if (!saved) throw new Error(t(
      "Основная база изменилась во время восстановления. Копия сохранена; повторите после синхронизации.",
      "The main database changed during recovery. The copy was preserved; retry after syncing.",
    ));
    await this.app.vault.adapter.remove(path);
    new Notice(t("Копия восстановлена. Записи добавлены с пометкой «восстановлено».", "Conflict copy restored. Recovered entries were added with “restored” in their titles."));
    this.openBoard();
  }
}

class SetupModal extends Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }

  onOpen() {
    this.modalEl.classList.add("vkp-shell");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h2", "", t("Создать зашифрованное хранилище", "Create encrypted vault")));
    this.contentEl.appendChild(makeEl("p", "vkp-muted", t(
      "Задайте мастер-пароль. Он не сохраняется в vault; восстановить его нельзя.",
      "Set a master password. It is never stored in the vault and cannot be recovered.",
    )));
    const password = makeEl("input", "vkp-input");
    password.type = "password";
    password.autocomplete = "new-password";
    password.placeholder = t("Мастер-пароль (не менее 12 символов)", "Master password (at least 12 characters)");
    const confirm = makeEl("input", "vkp-input");
    confirm.type = "password";
    confirm.autocomplete = "new-password";
    confirm.placeholder = t("Повторите мастер-пароль", "Confirm master password");
    const error = makeEl("div", "vkp-error");
    this.contentEl.append(password, confirm, error);
    makeButton(this.contentEl, t("Создать хранилище", "Create vault"), async () => {
      error.textContent = "";
      if (password.value.length < 12) {
        error.textContent = t("Используйте мастер-пароль длиной не менее 12 символов.", "Use a master password with at least 12 characters.");
        return;
      }
      if (password.value !== confirm.value) {
        error.textContent = t("Пароли не совпадают.", "Passwords do not match.");
        return;
      }
      try {
        await this.plugin.createVault(password.value);
        this.close();
        this.plugin.openBoard();
      } catch (e) {
        error.textContent = e.message;
      }
    }, "mod-cta");
    password.focus();
  }

}

class UnlockModal extends Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }

  onOpen() {
    this.modalEl.classList.add("vkp-shell");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h2", "", t("Разблокировать Password Kanban", "Unlock Password Kanban")));
    const password = makeEl("input", "vkp-input");
    password.type = "password";
    password.autocomplete = "current-password";
    password.placeholder = t("Мастер-пароль", "Master password");
    const error = makeEl("div", "vkp-error");
    this.contentEl.append(password, error);
    makeButton(this.contentEl, t("Разблокировать", "Unlock"), async () => {
      error.textContent = "";
      try {
        await this.plugin.unlockVault(password.value);
        this.close();
        this.plugin.openBoard();
      } catch {
        error.textContent = t("Не удалось открыть базу. Проверьте мастер-пароль или целостность файла.", "Could not open the database. Check the master password or file integrity.");
        password.select();
      }
    }, "mod-cta");
    password.addEventListener("keydown", (event) => {
      if (event.key === "Enter") this.contentEl.querySelector("button")?.click();
    });
    password.focus();
  }

}

class TextPromptModal extends Modal {
  constructor(app, title, initialValue, onSubmit) {
    super(app);
    this.titleText = title;
    this.initialValue = initialValue;
    this.onSubmit = onSubmit;
  }

  onOpen() {
    this.modalEl.classList.add("vkp-shell");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h3", "", this.titleText));
    const input = makeEl("input", "vkp-input");
    input.value = this.initialValue || "";
    const error = makeEl("div", "vkp-error");
    this.contentEl.append(input, error);
    makeButton(this.contentEl, t("Сохранить", "Save"), async () => {
      const value = input.value.trim();
      if (!value) {
        error.textContent = t("Введите название.", "Enter a name.");
        return;
      }
      await this.onSubmit(value);
      this.close();
    }, "mod-cta");
    input.focus();
  }
}

class EntryEditorModal extends Modal {
  constructor(app, plugin, entry, defaultCategoryId, onSave) {
    super(app);
    this.plugin = plugin;
    this.entry = entry;
    this.defaultCategoryId = defaultCategoryId;
    this.onSave = onSave;
  }

  addFieldRow(container, field = {}) {
    const row = makeEl("div", "vkp-field-edit-row");
    row.dataset.id = field.id || crypto.randomUUID();
    const label = makeEl("input", "vkp-input vkp-field-label");
    label.placeholder = t("Название поля", "Field name");
    label.value = field.label || "";
    const value = makeEl("textarea", "vkp-input vkp-field-value");
    value.placeholder = t("Значение", "Value");
    value.value = field.value || "";
    const grip = makeEl("button", "clickable-icon vkp-field-grip");
    grip.type = "button";
    grip.setAttribute("aria-label", t("Перетащить поле", "Drag field"));
    grip.title = t("Перетащить поле", "Drag field");
    setIcon(grip, "grip-vertical");
    grip.addEventListener("pointerdown", (event) => this.startFieldDrag(event, row, container));
    const generate = makeEl("button", "vkp-small", t("Генерировать", "Generate"));
    generate.type = "button";
    generate.classList.add("vkp-field-generate");
    generate.setAttribute("aria-label", t("Сгенерировать пароль", "Generate password"));
    generate.title = t("Сгенерировать пароль (11–15 символов)", "Generate password (11–15 characters)");
    const updateGeneratorVisibility = () => {
      const fieldName = label.value.trim().toLocaleLowerCase();
      const available = fieldName === "пароль" || fieldName === "password";
      generate.disabled = !available;
      generate.classList.toggle("is-placeholder", !available);
      generate.setAttribute("aria-hidden", String(!available));
    };
    label.addEventListener("input", updateGeneratorVisibility);
    generate.addEventListener("click", () => {
      value.value = generatePassword();
      value.dispatchEvent(new Event("input", { bubbles: true }));
    });
    updateGeneratorVisibility();
    const remove = makeEl("button", "vkp-small vkp-danger", "×");
    remove.type = "button";
    remove.setAttribute("aria-label", t("Удалить поле", "Delete field"));
    remove.title = t("Удалить поле", "Delete field");
    remove.addEventListener("click", () => {
      row.remove();
    });
    row.append(label, value, grip, generate, remove);
    container.appendChild(row);
  }

  startFieldDrag(event, row, container) {
    if (event.button !== 0) return;
    event.preventDefault();
    const pointerId = event.pointerId;
    const startX = event.clientX;
    const startY = event.clientY;
    let dragging = false;

    const finish = (upEvent) => {
      if (upEvent.pointerId !== pointerId) return;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", finish);
      window.removeEventListener("pointercancel", finish);
      row.classList.remove("is-dragging");
      container.querySelectorAll(".is-drop-target").forEach((item) => item.classList.remove("is-drop-target"));
    };

    const move = (moveEvent) => {
      if (moveEvent.pointerId !== pointerId) return;
      if (!dragging && Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY) < 5) return;
      dragging = true;
      moveEvent.preventDefault();
      row.classList.add("is-dragging");

      const hit = document.elementFromPoint(moveEvent.clientX, moveEvent.clientY);
      const target = hit?.closest(".vkp-field-edit-row");
      container.querySelectorAll(".is-drop-target").forEach((item) => item.classList.remove("is-drop-target"));
      if (!target || target === row || target.parentElement !== container) return;

      const rect = target.getBoundingClientRect();
      const insertBefore = moveEvent.clientY < rect.top + rect.height / 2;
      container.insertBefore(row, insertBefore ? target : target.nextSibling);
      target.classList.add("is-drop-target");
    };

    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", finish);
    window.addEventListener("pointercancel", finish);
  }

  onOpen() {
    this.plugin.entryEditorModal = this;
    this.modalEl.classList.add("vkp-shell", "vkp-editor");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h2", "", this.entry ? t("Изменить аккаунт", "Edit account") : t("Новый аккаунт", "New account")));

    const title = makeEl("input", "vkp-input");
    title.classList.add("vkp-card-title-input");
    title.placeholder = t("Название карточки", "Card title");
    title.value = this.entry?.title || "";
    const fields = makeEl("div", "vkp-editor-fields");
    const initial = this.entry?.fields || [
      { label: t("Сайт", "Website"), value: "" },
      { label: t("Логин", "Username"), value: "" },
      { label: t("Пароль", "Password"), value: "" },
      { label: t("Заметки", "Notes"), value: "" },
    ];
    for (const field of initial) this.addFieldRow(fields, field);
    const error = makeEl("div", "vkp-error");
    this.contentEl.append(title, makeEl("h3", "vkp-editor-fields-heading", t("Поля", "Fields")), fields, error);
    const actions = makeEl("div", "vkp-editor-actions");
    makeButton(actions, t("+ Добавить поле", "+ Add field"), () => this.addFieldRow(fields), "vkp-secondary");
    this.saveButton = makeButton(actions, this.entry ? t("Сохранить изменения", "Save changes") : t("Создать карточку", "Create card"), async () => {
      const name = title.value.trim();
      if (!name) {
        error.textContent = t("Введите название карточки.", "Enter a card title.");
        return;
      }
      const fieldValues = [...fields.querySelectorAll(".vkp-field-edit-row")].map((row) => ({
        id: row.dataset.id,
        label: row.querySelector("input").value.trim(),
        value: row.querySelector("textarea").value,
      })).filter((field) => field.label);
      const now = Date.now();
      const result = {
        id: this.entry?.id || crypto.randomUUID(),
        categoryId: this.entry?.categoryId || this.defaultCategoryId || this.plugin.db.categories[0]?.id || "",
        title: name,
        fields: fieldValues,
        createdAt: this.entry?.createdAt || now,
        updatedAt: now,
      };
      await this.onSave(result);
      this.close();
    }, "mod-cta");
    this.contentEl.appendChild(actions);
    this.editorKeyHandler = (event) => {
      if (event.key === "Tab") {
        const inputs = [...this.contentEl.querySelectorAll("input.vkp-input:not(.vkp-field-label), select.vkp-input, textarea.vkp-input")];
        if (!inputs.length) return;
        event.preventDefault();
        const currentIndex = inputs.indexOf(document.activeElement);
        const direction = event.shiftKey ? -1 : 1;
        const nextIndex = currentIndex < 0
          ? (direction > 0 ? 0 : inputs.length - 1)
          : (currentIndex + direction + inputs.length) % inputs.length;
        inputs[nextIndex].focus();
        return;
      }

      if (
        event.key === "Enter" &&
        !event.isComposing &&
        event.keyCode !== 229 &&
        event.target.matches("input.vkp-input, select.vkp-input, textarea.vkp-input")
      ) {
        // Shift+Enter inserts a line break in multi-line values.
        if (event.target.matches("textarea") && event.shiftKey) return;
        event.preventDefault();
        this.saveButton?.click();
      }
    };
    this.contentEl.addEventListener("keydown", this.editorKeyHandler);
  }

  onClose() {
    if (this.editorKeyHandler) this.contentEl.removeEventListener("keydown", this.editorKeyHandler);
    if (this.plugin.entryEditorModal === this) this.plugin.entryEditorModal = null;
    this.contentEl.replaceChildren();
  }
}

class ConflictRecoveryModal extends Modal {
  constructor(app, plugin, files) {
    super(app);
    this.plugin = plugin;
    this.files = files;
  }

  onOpen() {
    this.plugin.conflictRecoveryModal = this;
    this.modalEl.classList.add("vkp-shell");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h2", "", t("Восстановить конфликтную копию", "Restore conflict copy")));
    this.contentEl.appendChild(makeEl("p", "vkp-muted", t(
      "Выберите копию и введите мастер-пароль. Записи будут добавлены к основной базе, а исходная копия удалится только после успешного сохранения.",
      "Choose a copy and enter the master password. Its entries will be added to the main database; the source copy is removed only after a successful save.",
    )));
    const select = makeEl("select", "vkp-input");
    for (const file of this.files) {
      const option = makeEl("option", "", file.split("/").pop());
      option.value = file;
      select.appendChild(option);
    }
    const password = makeEl("input", "vkp-input");
    password.type = "password";
    password.placeholder = t("Мастер-пароль", "Master password");
    const error = makeEl("div", "vkp-error");
    this.contentEl.append(select, password, error);
    makeButton(this.contentEl, t("Восстановить копию", "Restore copy"), async () => {
      try {
        await this.plugin.mergeConflictCopy(select.value, password.value);
        this.close();
      } catch (e) {
        error.textContent = e.message || t("Не удалось восстановить копию.", "Could not restore the copy.");
      }
    }, "mod-cta");
  }

  onClose() {
    if (this.plugin.conflictRecoveryModal === this) this.plugin.conflictRecoveryModal = null;
    this.contentEl.replaceChildren();
  }
}

class HelpModal extends Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }

  onOpen() {
    this.modalEl.classList.add("vkp-shell", "vkp-help-modal");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h2", "", t("Справка Password Kanban", "Password Kanban help")));
    this.contentEl.appendChild(makeEl("p", "vkp-muted", t("Версия {version}", "Version {version}", { version: this.plugin.manifest.version })));

    const addSection = (title, items) => {
      const section = makeEl("section", "vkp-help-section");
      section.appendChild(makeEl("h3", "", title));
      const list = makeEl("ul", "vkp-help-list");
      for (const item of items) list.appendChild(makeEl("li", "", item));
      section.appendChild(list);
      this.contentEl.appendChild(section);
    };

    addSection(t("Доска и карточки", "Board and cards"), [
      t("Добавляйте аккаунты в нужную колонку. Карточка раскрывается нажатием на её название.", "Add accounts to the appropriate column. Click a card title to expand it."),
      t("Переносите карточки в другую категорию перетаскиванием по доске. Порядок полей меняется за ручку в редакторе.", "Drag cards between categories. Reorder fields by dragging their handle in the editor."),
      t("Поиск работает по названию карточки и значениям полей, пока хранилище разблокировано.", "Search matches card titles and field values while the vault is unlocked."),
    ]);
    addSection(t("Поля и генератор", "Fields and generator"), [
      t("В новых карточках поле «Сайт» идёт первым. Поля можно добавлять, переименовывать и менять их порядок отдельно в каждой карточке.", "New cards start with the Website field. Add, rename, and reorder fields independently in each card."),
      t("Генератор доступен только для поля «Пароль». Он создаёт 11–15 латинских букв и цифр без распространённых визуально похожих символов.", "The generator is available only for the Password field. It creates 11–15 Latin letters and digits, excluding commonly confused characters."),
      t("Поле «Пароль» скрыто по умолчанию. Нажмите на значок глаза, чтобы показать его; при сворачивании карточки пароль снова скрывается.", "Password fields are hidden by default. Use the eye icon to reveal one; collapsing the card hides it again."),
      t("Enter сохраняет карточку; Tab и Shift+Tab перемещаются по значениям, пропуская кнопки и названия полей. Shift+Enter вставляет новую строку.", "Enter saves the card. Tab and Shift+Tab move between values, skipping buttons and field names. Shift+Enter inserts a new line."),
    ]);
    addSection(t("Копирование и блокировка", "Clipboard and locking"), [
      t("После копирования плагин через 2 минуты попытается очистить буфер, но только если там осталось то же значение. Если доступ к буферу запрещён, значение изменилось или Obsidian закрыт, очистка не выполняется.", "Two minutes after copying, the plugin tries to clear the clipboard only if the copied value is still there. It leaves the clipboard untouched if access is denied or its contents changed; the timer does not run after Obsidian closes."),
      t("Хранилище блокируется при потере фокуса Obsidian или после 5 минут бездействия. В режиме редактирования блокировка при потере фокуса отключена, а таймер на 5 минут обновляется при действиях в Obsidian; если действий нет, хранилище блокируется. При блокировке открытая карточка скрывается; несохранённые изменения редактора теряются.", "The vault locks when Obsidian loses focus or after 5 minutes of inactivity. Editing mode disables focus-loss locking; its 5-minute timer resets whenever you interact with Obsidian and locks the vault after 5 minutes without activity. The open card is hidden; unsaved editor changes are discarded."),
      t("Мастер-пароль запрашивается при запуске Obsidian и нигде не сохраняется.", "The master password is requested when Obsidian starts and is never stored."),
    ]);
    addSection(t("Хранение и синхронизация", "Storage and sync"), [
      t("Данные хранятся в корне vault в файле .password-kanban.enc: AES-256-GCM, ключ — PBKDF2-HMAC-SHA-256 с 600 000 итерациями.", "Data is stored in .password-kanban.enc at the vault root, encrypted with AES-256-GCM. The key is derived using PBKDF2-HMAC-SHA-256 with 600,000 iterations."),
      t("Пароли и карточки не записываются в Markdown. При обнаруженном конфликте синхронизации локальная копия сохраняется в .password-kanban-conflicts; её можно восстановить командой Password Kanban.", "Passwords and cards are never written to Markdown. Detected sync conflicts are saved in .password-kanban-conflicts and can be restored with a Password Kanban command."),
      t("Потерянный мастер-пароль восстановить нельзя. Используйте надёжную фразу-пароль и проверяйте синхронизацию на всех устройствах.", "A lost master password cannot be recovered. Use a strong passphrase and verify that sync completes on all devices."),
    ]);

    const notice = makeEl("p", "vkp-help-warning", t(
      "Плагин не проходил независимый аудит безопасности. Он защищает файл vault в закрытом состоянии, но не защищает от вредоносных программ на разблокированном устройстве.",
      "This plugin has not been independently security-audited. It protects the vault file at rest, but cannot protect against malware on an unlocked device.",
    ));
    this.contentEl.appendChild(notice);
    makeButton(this.contentEl, t("Закрыть", "Close"), () => this.close(), "mod-cta");
  }
}

class PasswordBoardView extends ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.query = "";
    this.categoryFilter = "";
    this.expandedEntryId = null;
    this.revealedPasswords = new Set();
  }

  getViewType() {
    return VIEW_TYPE;
  }

  getDisplayText() {
    return "Password Kanban";
  }

  getIcon() {
    return "key-round";
  }

  onOpen() {
    this.containerEl.classList.add("vkp-view-container");
    this.contentEl.classList.add("vkp-view-content");
    this.plugin.boardView = this;
    this.render();
  }

  onClose() {
    this.contentEl.replaceChildren();
    this.expandedEntryId = null;
    this.revealedPasswords.clear();
    if (this.plugin.boardView === this) this.plugin.boardView = null;
  }

  async commitAndRender() {
    const saved = await this.plugin.saveAndNotify();
    if (saved && this.plugin.db) this.render();
  }

  render() {
    this.contentEl.replaceChildren();
    if (!this.plugin.db || !this.plugin.key) {
      const locked = makeEl("div", "vkp-locked");
      locked.appendChild(makeEl("h2", "", t("Password Kanban заблокирован", "Password Kanban is locked")));
      locked.appendChild(makeEl("p", "vkp-muted", t("Разблокируйте хранилище, чтобы открыть доску.", "Unlock the vault to open the board.")));
      makeButton(locked, t("Разблокировать", "Unlock"), () => this.plugin.openGate(), "mod-cta");
      this.contentEl.appendChild(locked);
      return;
    }

    const board = makeEl("div", "vkp-kanban");
    const toolbar = makeEl("div", "vkp-toolbar");
    const search = makeEl("input", "vkp-input vkp-search");
    search.placeholder = t("Поиск по названию, логину, сайту и полям…", "Search titles, usernames, websites, and fields…");
    search.value = this.query;
    const filter = makeEl("select", "vkp-input vkp-filter");
    const all = makeEl("option", "", t("Все категории", "All categories"));
    all.value = "";
    filter.appendChild(all);
    for (const category of this.plugin.db.categories) {
      const option = makeEl("option", "", category.name);
      option.value = category.id;
      filter.appendChild(option);
    }
    filter.value = this.categoryFilter;
    search.addEventListener("input", () => {
      this.query = search.value;
      this.renderColumns();
    });
    filter.addEventListener("change", () => {
      this.categoryFilter = filter.value;
      this.renderColumns();
    });
    toolbar.append(search, filter);
    makeButton(toolbar, t("+ Категория", "+ Category"), () => this.addCategory(), "vkp-toolbar-button mod-cta");
    makeButton(toolbar, t("Восстановить копию", "Restore copy"), () => this.plugin.openConflictRecovery(), "vkp-toolbar-button");
    makeButton(
      toolbar,
      this.plugin.editingMode ? t("Обычный режим", "Normal mode") : t("Режим редактирования", "Editing mode"),
      () => this.plugin.toggleEditingMode(),
      "vkp-toolbar-button",
    );
    makeButton(toolbar, t("Заблокировать", "Lock"), () => this.plugin.lock(true), "vkp-toolbar-button");
    makeIconButton(toolbar, "circle-help", t("Справка Password Kanban", "Password Kanban help"), () => this.plugin.openHelp(), "vkp-toolbar-help");
    board.appendChild(toolbar);
    this.columnsEl = makeEl("div", "vkp-columns");
    board.appendChild(this.columnsEl);
    this.contentEl.appendChild(board);
    this.renderColumns();
  }

  renderColumns() {
    if (!this.columnsEl || !this.plugin.db) return;
    this.columnsEl.replaceChildren();
    const categories = this.plugin.db.categories.filter((item) => !this.categoryFilter || item.id === this.categoryFilter);
    for (const category of categories) {
      const column = makeEl("section", "vkp-lane");
      column.dataset.categoryId = category.id;
      const header = makeEl("div", "vkp-lane-header");
      const titleWrap = makeEl("div", "vkp-lane-title");
      const title = makeEl("div", "vkp-lane-title-text", category.name);
      const index = this.plugin.db.categories.findIndex((item) => item.id === category.id);
      const entries = this.plugin.db.entries.filter((entry) => {
        if (entry.categoryId !== category.id) return false;
        if (!this.query) return true;
        const haystack = [entry.title, ...entry.fields.flatMap((field) => [field.label, field.value])].join(" ").toLocaleLowerCase();
        return haystack.includes(this.query.toLocaleLowerCase());
      });
      const count = makeEl("span", "vkp-lane-count", String(entries.length));
      titleWrap.append(title, count);
      const controls = makeEl("div", "vkp-lane-controls");
      makeIconButton(controls, "arrow-left", t("Сдвинуть категорию влево", "Move category left"), () => this.moveCategory(index, -1), "vkp-icon-button");
      makeIconButton(controls, "arrow-right", t("Сдвинуть категорию вправо", "Move category right"), () => this.moveCategory(index, 1), "vkp-icon-button");
      makeIconButton(controls, "pencil", t("Переименовать категорию", "Rename category"), () => this.renameCategory(category), "vkp-icon-button");
      makeIconButton(controls, "trash-2", t("Удалить категорию", "Delete category"), () => this.deleteCategory(category), "vkp-icon-button vkp-danger");
      header.append(titleWrap, controls);
      column.appendChild(header);
      column.addEventListener("dragenter", (event) => {
        event.preventDefault();
        column.classList.add("is-dropping");
      });
      column.addEventListener("dragover", (event) => event.preventDefault());
      column.addEventListener("dragleave", (event) => {
        if (!column.contains(event.relatedTarget)) column.classList.remove("is-dropping");
      });
      column.addEventListener("drop", async (event) => {
        event.preventDefault();
        column.classList.remove("is-dropping");
        const entryId = event.dataTransfer?.getData("text/plain");
        const entry = this.plugin.db.entries.find((item) => item.id === entryId);
        if (entry && entry.categoryId !== category.id) {
          entry.categoryId = category.id;
          entry.updatedAt = Date.now();
          await this.commitAndRender();
        }
      });
      const items = makeEl("div", "vkp-lane-items");
      for (const entry of entries) items.appendChild(this.renderEntry(entry));
      column.appendChild(items);
      const add = makeEl("div", "vkp-lane-add");
      makeButton(add, t("+ Добавить аккаунт", "+ Add account"), () => this.addEntry(category.id), "vkp-new-card-button");
      column.appendChild(add);
      const wrapper = makeEl("div", "vkp-lane-wrapper");
      wrapper.appendChild(column);
      this.columnsEl.appendChild(wrapper);
    }
    if (!categories.length) this.columnsEl.appendChild(makeEl("p", "vkp-muted", t("Категорий пока нет. Добавьте первую кнопкой «Категория».", "No categories yet. Add one with the “Category” button.")));
    const addLane = makeEl("div", "vkp-lane-wrapper vkp-add-lane-wrapper");
    const addLaneButton = makeButton(addLane, t("+ Добавить категорию", "+ Add category"), () => this.addCategory(), "vkp-new-card-button");
    addLaneButton.classList.add("vkp-add-lane");
    this.columnsEl.appendChild(addLane);
  }

  renderEntry(entry) {
    const card = makeEl("article", `vkp-card${this.expandedEntryId === entry.id ? " is-expanded" : ""}`);
    card.draggable = true;
    card.addEventListener("dragstart", (event) => event.dataTransfer?.setData("text/plain", entry.id));
    const heading = makeEl("div", "vkp-card-heading");
    const name = makeEl("button", "vkp-card-title", entry.title);
    name.addEventListener("click", () => {
      this.revealedPasswords.clear();
      this.expandedEntryId = this.expandedEntryId === entry.id ? null : entry.id;
      this.renderColumns();
    });
    const actions = makeEl("div", "vkp-card-actions");
    makeIconButton(actions, "pencil", t("Изменить карточку", "Edit card"), () => this.editEntry(entry), "vkp-icon-button");
    makeIconButton(actions, "trash-2", t("Удалить карточку", "Delete card"), () => this.deleteEntry(entry), "vkp-icon-button vkp-danger");
    heading.append(name, actions);
    card.appendChild(heading);
    if (this.expandedEntryId === entry.id) {
      const details = makeEl("div", "vkp-details");
      for (const field of entry.fields) {
        const row = makeEl("div", "vkp-detail-row");
        const label = makeEl("div", "vkp-detail-label", field.label);
        const isPassword = isPasswordField(field);
        const revealKey = `${entry.id}:${field.id}`;
        const isRevealed = isPassword && this.revealedPasswords.has(revealKey);
        const valueText = field.value || "—";
        const value = makeEl("div", "vkp-detail-value", isPassword && field.value && !isRevealed ? "••••••••" : valueText);
        row.append(label, value);
        if (isPassword) {
          makeIconButton(
            row,
            isRevealed ? "eye-off" : "eye",
            isRevealed ? t("Скрыть пароль", "Hide password") : t("Показать пароль", "Show password"),
            () => {
              if (isRevealed) this.revealedPasswords.delete(revealKey);
              else this.revealedPasswords.add(revealKey);
              this.renderColumns();
            },
            "vkp-reveal",
          );
        } else {
          row.appendChild(makeEl("span", "vkp-reveal-placeholder"));
        }
        makeIconButton(row, "copy", t("Скопировать: {label}", "Copy: {label}", { label: field.label }), () => this.plugin.copyToClipboard(field.value, field.label), "vkp-copy");
        details.appendChild(row);
      }
      card.appendChild(details);
    }
    return card;
  }

  async addCategory() {
    new TextPromptModal(this.app, t("Новая категория", "New category"), "", async (name) => {
      this.plugin.db.categories.push({ id: crypto.randomUUID(), name });
      await this.commitAndRender();
    }).open();
  }

  async renameCategory(category) {
    new TextPromptModal(this.app, t("Переименовать категорию", "Rename category"), category.name, async (name) => {
      category.name = name;
      await this.commitAndRender();
    }).open();
  }

  async deleteCategory(category) {
    if (this.plugin.db.entries.some((entry) => entry.categoryId === category.id)) {
      new Notice(t("Сначала переместите или удалите карточки из этой категории.", "Move or delete this category's cards first."));
      return;
    }
    this.plugin.db.categories = this.plugin.db.categories.filter((item) => item.id !== category.id);
    await this.commitAndRender();
  }

  async moveCategory(index, delta) {
    const target = index + delta;
    if (target < 0 || target >= this.plugin.db.categories.length) return;
    const categories = this.plugin.db.categories;
    [categories[index], categories[target]] = [categories[target], categories[index]];
    await this.commitAndRender();
  }

  addEntry(categoryId) {
    new EntryEditorModal(this.app, this.plugin, null, categoryId, async (entry) => {
      this.plugin.db.entries.push(entry);
      await this.commitAndRender();
    }).open();
  }

  editEntry(entry) {
    new EntryEditorModal(this.app, this.plugin, entry, entry.categoryId, async (updated) => {
      const index = this.plugin.db.entries.findIndex((item) => item.id === entry.id);
      if (index >= 0) this.plugin.db.entries[index] = updated;
      this.expandedEntryId = updated.id;
      this.revealedPasswords.clear();
      await this.commitAndRender();
    }).open();
  }

  async deleteEntry(entry) {
    new ConfirmModal(this.app, t("Удалить карточку «{title}»?", "Delete card “{title}”?", { title: entry.title }), async () => {
      this.plugin.db.entries = this.plugin.db.entries.filter((item) => item.id !== entry.id);
      if (this.expandedEntryId === entry.id) this.expandedEntryId = null;
      await this.commitAndRender();
    }).open();
  }
}

class ConfirmModal extends Modal {
  constructor(app, message, onConfirm) {
    super(app);
    this.message = message;
    this.onConfirm = onConfirm;
  }

  onOpen() {
    this.modalEl.classList.add("vkp-shell");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("p", "", this.message));
    makeButton(this.contentEl, t("Удалить", "Delete"), async () => {
      await this.onConfirm();
      this.close();
    }, "mod-warning");
    makeButton(this.contentEl, t("Отмена", "Cancel"), () => this.close(), "vkp-secondary");
  }
}

module.exports = PasswordKanbanPlugin;
