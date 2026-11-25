# Password Kanban

**English first · Русский ниже**

## English

An encrypted, category-based password manager that opens as an Obsidian Kanban-style board. The interface follows the active Obsidian theme, including its interface and text fonts, and supports English and Russian based on Obsidian's language setting.

## Features

- Kanban columns for categories and draggable account cards.
- Expand cards inline; add, rename, and reorder custom fields per card.
- Search, a password generator, and one-click field copying.
- Password fields are masked by default and can be revealed on demand.
- The vault locks when Obsidian loses focus or after five minutes of inactivity. Temporary Editing mode disables focus-loss locking and resets its five-minute lock timer whenever you interact with Obsidian.
- Clipboard contents are cleared after two minutes when the copied value is still present.

## Installation

This plugin is installed in `.obsidian/plugins/password-kanban`. Enable **Password Kanban** in Obsidian's Community plugins settings. On first launch, create a master password of at least 12 characters.

## Security

- Database file: `.password-kanban.enc` in the vault root.
- Encryption: AES-256-GCM; the key is derived with PBKDF2-HMAC-SHA-256 (600,000 iterations).
- Passwords and card data are not written to Markdown, and the master password is not stored.
- A forgotten master password cannot be recovered.
- The plugin has not received an independent security audit. It protects the vault file at rest, but cannot protect against malware running on an unlocked device.

Clipboard cleanup checks that the clipboard still contains the copied value before clearing it. If Obsidian cannot read the clipboard, or its contents changed, it leaves the clipboard untouched and shows a notice. The timer does not run after Obsidian closes.

## Sync and limitations

Sync conflicts are detected on a best-effort basis. A local conflict copy is saved in `.password-kanban-conflicts` and can be restored with the **Restore a local copy after a sync conflict** command.

Import, export, automatic backups, and master-password changes are not included in this version. Check that vault sync has completed before using the same database on another device.

## Русский

Зашифрованный менеджер паролей по категориям в виде канбан-доски. Интерфейс следует активной теме Obsidian, включая шрифты, и автоматически переключается между русским и английским языками по настройке языка Obsidian.

### Возможности

- Канбан-колонки для категорий и карточки аккаунтов, которые можно перетаскивать.
- Просмотр карточек без открытия отдельного окна; добавление, переименование и сортировка полей.
- Поиск, генератор паролей и копирование значений полей.
- Пароли скрыты по умолчанию и отображаются по запросу.
- Хранилище блокируется при потере фокуса Obsidian или после пяти минут бездействия. Временный режим редактирования отключает блокировку при потере фокуса и обновляет таймер блокировки на пять минут при каждом действии в Obsidian.
- Через две минуты плагин очищает буфер обмена, если скопированное значение всё ещё находится в нём.

### Установка

Плагин устанавливается в `.obsidian/plugins/password-kanban`. Включите **Password Kanban** в настройках плагинов Obsidian. При первом запуске задайте мастер-пароль длиной не менее 12 символов.

### Безопасность

- Файл базы: `.password-kanban.enc` в корне vault.
- Шифрование: AES-256-GCM; ключ выводится с помощью PBKDF2-HMAC-SHA-256 (600 000 итераций).
- Пароли и данные карточек не записываются в Markdown; мастер-пароль не сохраняется.
- Восстановить забытый мастер-пароль нельзя.
- Плагин не проходил независимый аудит безопасности. Он защищает файл vault в закрытом состоянии, но не от вредоносных программ на разблокированном устройстве.

При очистке буфера плагин сначала проверяет, осталось ли в нём скопированное значение. Если Obsidian не может прочитать буфер или его содержимое изменилось, плагин не очищает его. Таймер не срабатывает после закрытия Obsidian.

### Синхронизация и ограничения

Обнаружение конфликтов синхронизации работает по возможности. Локальная копия сохраняется в `.password-kanban-conflicts`; её можно восстановить командой **Restore a local copy after a sync conflict**.

Импорт, экспорт, автоматическое резервное копирование и смена мастер-пароля пока не поддерживаются. Перед использованием базы на другом устройстве убедитесь, что синхронизация vault завершилась.

Полная русская документация также доступна в файле `README.ru.md` репозитория.
