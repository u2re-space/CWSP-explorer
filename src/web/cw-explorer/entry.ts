/*
 * Filename: entry.ts
 * FullPath: apps/CWSP-explorer/src/web/cw-explorer/entry.ts
 * FIND:sku
 * Change date: 13.42.00_27.08.2026
 * Reason: explorer.u2re.space / /explorer PWA — dedicated SKU, not hub alias.
 */

import { bootExplorerSku, showExplorerBootFailure } from "../sku-boot";

const mount = document.getElementById("app") || document.body;
void bootExplorerSku(mount, "web").catch((error) => {
    showExplorerBootFailure(error, mount);
});
