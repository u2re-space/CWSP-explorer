/*
 * Filename: entry.ts
 * FullPath: apps/CWSP-explorer/src/frontend/web/capacitor/entry.ts
 * FIND:sku
 * Change date: 13.42.00_27.08.2026
 * Reason: Capacitor explorer SKU — shared sku-boot (also used by web/CRX/Neutralino).
 */

// WHY: this file lives at src/frontend/capacitor (web/capacitor is a symlink).
import { bootExplorerSku, showExplorerBootFailure } from "../web/sku-boot";

void bootExplorerSku(document.body, "capacitor").catch((error) => {
    showExplorerBootFailure(error, document.body);
});
