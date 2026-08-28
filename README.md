# explorer-view

Представление проводника. View id: **`explorer`**. Файловый UI SoT: `fest/fl-ui` `src/ui/explorer`. Здесь — view-адаптер и playground.

Продуктовый SKU (PWA / Capacitor / хост `explorer.`) — [`apps/CWSP-explorer`](../../../apps/CWSP-explorer/README.md). Не править копии под `*/views/explorer`.

Префиксы путей (как у SKU): `/user/` OPFS · `/mounts/` FSA · `/bookmarks/` `/downloads/` (CRX) · `/sdcard/` `/saf/` (Cap) · `/desktop/` (Neutralino).

## Запуск

```bash
cd modules/views/explorer-view
npm run dev
npm run dev:8434
npm run build
```

На этом пакете также лежат скрипты стейджа (`build:cw-explorer`, `build:capacitor`) — канонический хост для выкладки всё равно `apps/CWSP-explorer`.
