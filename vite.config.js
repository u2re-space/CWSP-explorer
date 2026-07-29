/*
 * Filename: vite.config.js
 * FullPath: modules/views/explorer-view/vite.config.js
 * Change date and time: 09.58.00_29.07.2026
 * Reason for changes: Prefer CrossWord/CWSP-shared multi TLS for LAN hosts; keep certs/ fallback.
 */
import { defineViewProject } from "./vite.view.config.js";

/**
 * TLS order: VITE_SSL_* → certs/{cert,key}.pem → certs/multi.* →
 * apps/CrossWord/private/https/local/multi.* → apps/CWSP-shared/... → basic-ssl.
 * Port 443 may need CAP_NET_BIND_SERVICE or `npm run dev:8434`.
 */
export default defineViewProject({
    name: "explorer-view",
    root: import.meta.dirname,
    defaultDevPort: 443,
    sslDir: "certs",
    pwa: true
});
