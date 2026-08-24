/*
 * Filename: vite.capacitor.js
 * FullPath: apps/CWSP-explorer/vite.capacitor.js
 * FIND:sku
 * Change date and time: 13.54.00_24.08.2026
 * Reason for changes: Explorer Capacitor web bundle uses CWSP-document host aliases + explorer views.
 */
export default async (env) => {
    const { createCapacitorSkuConfig } = await import("../CWSP-document/vite.config.js");
    return createCapacitorSkuConfig("explorer");
};
