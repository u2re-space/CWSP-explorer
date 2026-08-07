/*
 * Filename: boot.ts
 * FullPath: apps/CWSP-explorer/demo/boot.ts
 * Change date and time: 10.24.00_29.07.2026
 * Reason for changes: Call onShow so explorer layout CSS loads; fill native window.
 */
/**
 * WHY: Dedicated explorer host mounts the view inside `<ui-window native-mode>` so
 * installed PWA + WCO / mobile standalone can be smoked without the full CWSP shell.
 *
 * Test: `npm run dev` here, or CWSP-shell `/explorer?native=1&shell=environment`.
 */
import "@fest-lib/icon";
import { Windows2 } from "@fest-lib/fl-ui";
import { initPWA } from "core/pwa/pwa-handling";
import { createExplorerView } from "../src/index";
import { drainShareTargetIntoExplorer } from "../src/pwa/client-share-drain";

void Windows2;

const app = document.getElementById("app") ?? document.body;

const win = document.createElement("ui-window") as Windows2 & HTMLElement;
win.toggleAttribute("native-mode", true);
win.className = "explorer-native-window";

const title = document.createElement("span");
title.slot = "title";
title.textContent = "Explorer";

const body = document.createElement("div");
body.slot = "content";
body.className = "explorer-native-window__body";
body.style.cssText =
    "display:flex;flex:1;flex-direction:column;min-height:0;min-width:0;height:100%;width:100%;overflow:hidden;";

win.append(title, body);
app.replaceChildren(win);

const view = createExplorerView({
    shellContext: {
        shellId: "environment",
        showMessage: (msg) => console.info("[explorer-demo]", msg),
        navigate: (id) => console.info("[explorer-demo] navigate", id),
        openView: (id) => console.info("[explorer-demo] openView", id)
    } as any
});

const root = view.render();
body.appendChild(root);

try {
    // Shell normally calls mount then show; demo must do both so layout CSS + wire attach.
    view.lifecycle?.onMount?.();
    view.lifecycle?.onShow?.();
} catch (err) {
    console.warn("[explorer-demo] mount/show failed", err);
}

void initPWA()
    .then((reg) => {
        console.info("[explorer-demo] PWA ready", reg?.scope ?? "(no registration)");
    })
    .catch((err) => {
        console.warn("[explorer-demo] initPWA failed", err);
    });

const maybeDrainShare = () => {
    void drainShareTargetIntoExplorer(view as any, "/user/").catch((err) => {
        console.warn("[explorer-demo] share drain failed", err);
    });
};

// FileManager wire happens on mount; retry briefly for share-target cold open.
maybeDrainShare();
window.setTimeout(maybeDrainShare, 400);
window.setTimeout(maybeDrainShare, 1200);

if ("launchQueue" in window && (window as any).launchQueue?.setConsumer) {
    try {
        (window as any).launchQueue.setConsumer(async (launchParams: { files?: FileSystemFileHandle[] }) => {
            const handles = launchParams?.files || [];
            if (!handles.length) return;
            const fm = (view as any).getExplorerFileManager?.();
            const ingest = fm?.operative?.ingestFileIntoWorkspace;
            if (!ingest) return;
            for (const handle of handles) {
                try {
                    const file = await handle.getFile();
                    await ingest.call(fm.operative, file, "/user/");
                } catch (err) {
                    console.warn("[explorer-demo] launchQueue ingest failed", err);
                }
            }
            try {
                await fm?.navigate?.("/user/");
            } catch {
                /* ignore */
            }
        });
    } catch (err) {
        console.warn("[explorer-demo] launchQueue unavailable", err);
    }
}

console.info(
    "[explorer-demo] native-mode ui-window + PWA ready — Install for WCO; Share Target → OPFS /user/"
);
