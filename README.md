# Password Kanban

An encrypted, category-based password manager that opens as an Obsidian Kanban-style board. The interface follows the active Obsidian theme, including its interface and text fonts, and supports English and Russian based on Obsidian's language setting.

## Features

- Kanban columns for categories and draggable account cards.
- Expand cards inline; add, rename, and reorder custom fields per card.
- Search, a password generator, and one-click field copying.
- Password fields are masked by default and can be revealed on demand.
- The vault locks when Obsidian loses focus or after five minutes of inactivity.
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

Russian documentation: [README.ru.md](README.ru.md).
