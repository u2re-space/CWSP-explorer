# CWSP-explorer

Dedicated explorer SKU (not the hub alias). File manager SoT is `modules/projects/fl.ui/src/ui/explorer`.

## Hosts

| Surface | Entry | Script |
|---|---|---|
| Web / PWA | `src/web/cw-explorer/` | `npm run build:cw-explorer` |
| Capacitor | `src/web/capacitor/` | `npm run build:capacitor` |
| Chrome extension | `src/web/crx/` | `npm run build:crx` |
| Neutralino | `src/web/neutralino/` | `npm run build:neutralino` |

`u2re.space/explorer` stays in-process on the hub. `explorer.u2re.space` stages from this package.

## Backends

- `/user/` — OPFS (web, CRX, PWA)
- `/bookmarks/` — `chrome.bookmarks` (CRX)
- `/downloads/` — `chrome.downloads` (CRX, read-only)
- `/sdcard/` `/saf/` — Capacitor native storage
- `/desktop/` — Neutralino home tree (`filesystem.*` in `neutralino.config.json`)
- `/mounts/` — File System Access directory picker
