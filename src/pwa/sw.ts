/// <reference lib="webworker" />
/*
 * Filename: sw.ts
 * FullPath: modules/views/explorer-view/src/pwa/sw.ts
 * Change date and time: 10.15.00_29.07.2026
 * Reason for changes: Slim online-first Explorer SW (share-target only).
 */
import "./sw-preamble";
import { stageShareFromFormData } from "./lib/share-stage";

declare const self: ServiceWorkerGlobalScope & {
    __WB_MANIFEST: Array<{ url: string; revision?: string | null }>;
};

// injectManifest injection point — v1 does not precache aggressively (online-first).
const _manifest = self.__WB_MANIFEST;
void _manifest;

const SHARE_PATHS = new Set(["/share-target", "/share_target"]);

self.addEventListener("install", (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

const isViteDevNoise = (url: URL): boolean => {
    const p = url.pathname;
    return (
        p.startsWith("/@vite") ||
        p.startsWith("/@fs") ||
        p.startsWith("/@id") ||
        p.startsWith("/node_modules") ||
        p.includes("vite") && p.includes("client")
    );
};

async function handleShareTarget(request: Request): Promise<Response> {
    try {
        const formData = await request.formData();
        await stageShareFromFormData(formData);
    } catch (err) {
        console.warn("[explorer-sw] share-target parse failed", err);
    }

    const redirectUrl = new URL("/", self.location.origin);
    redirectUrl.searchParams.set("shared", "1");

    const clientsList = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const client of clientsList) {
        if ("focus" in client) {
            try {
                await (client as WindowClient).focus();
                if ("navigate" in client) {
                    await (client as WindowClient).navigate(redirectUrl.href);
                } else {
                    await self.clients.openWindow(redirectUrl.href);
                }
                return Response.redirect(redirectUrl.href, 303);
            } catch {
                /* try next / openWindow */
            }
        }
    }
    await self.clients.openWindow(redirectUrl.href);
    return Response.redirect(redirectUrl.href, 303);
}

self.addEventListener("fetch", (event) => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin !== self.location.origin) return;
    if (isViteDevNoise(url)) return;

    if (req.method === "POST" && SHARE_PATHS.has(url.pathname)) {
        event.respondWith(handleShareTarget(req));
        return;
    }

    // Online-first: do not intercept GETs (network default).
});

self.addEventListener("message", (event) => {
    const data = event.data;
    if (!data || typeof data !== "object") return;
    if (data.type === "SKIP_WAITING") {
        void self.skipWaiting();
    }
});
