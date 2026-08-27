/*
 * Filename: entry.ts
 * FullPath: apps/CWSP-explorer/src/frontend/web/neutralino/entry.ts
 * FIND:sku
 * Change date: 13.42.00_27.08.2026
 * Reason: Neutralino desktop explorer — `/desktop/` maps to the user home tree.
 */

import { bootExplorerSku, showExplorerBootFailure } from "../sku-boot";

const mount = document.getElementById("app") || document.body;
void bootExplorerSku(mount, "neutralino").catch((error) => {
    showExplorerBootFailure(error, mount);
});
