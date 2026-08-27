/*
 * Filename: entry.ts
 * FullPath: apps/CWSP-explorer/src/frontend/web/crx/entry.ts
 * FIND:sku
 * Change date: 13.42.00_27.08.2026
 * Reason: Chrome-extension explorer host — bookmarks + OPFS via fl.ui backends.
 */

import { bootExplorerSku, showExplorerBootFailure } from "../sku-boot";

const mount = document.getElementById("app") || document.body;
void bootExplorerSku(mount, "crx").catch((error) => {
    showExplorerBootFailure(error, mount);
});
