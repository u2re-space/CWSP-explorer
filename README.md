# CWSP-explorer

Отдельный SKU проводника (не alias хаба). Файловый UI SoT: `modules/projects/fl.ui/src/ui/explorer`. На хосте — `explorer.` / `/explorer`; `u2re.space/explorer` остаётся in-process на хабе.

## Поверхности

| Поверхность | Вход | Скрипт |
| --- | --- | --- |
| Web / PWA | `src/web/cw-explorer/` | `npm run build:cw-explorer` |
| Capacitor | `src/web/capacitor/` | `npm run build:capacitor` |
| Chrome extension | `src/web/crx/` | `npm run build:crx` |
| Neutralino | `src/web/neutralino/` | `npm run build:neutralino` |

```bash
cd apps/CWSP-explorer
npm run dev
npm run dev:8434          # если 443 недоступен
npm run build:cw-explorer
npm run build:capacitor
```

## Бэкенды путей

| Префикс | Где |
| --- | --- |
| `/user/` | OPFS (web, CRX, PWA) |
| `/bookmarks/` | `chrome.bookmarks` (CRX) |
| `/downloads/` | `chrome.downloads` (CRX, только чтение) |
| `/sdcard/` `/saf/` | Capacitor |
| `/desktop/` | Neutralino home (`filesystem.*`) |
| `/mounts/` | File System Access (выбор папки) |
