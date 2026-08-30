function X() {
  const e = globalThis;
  if (typeof e.HTMLElement == "function") return;
  const t = class {
  }, r = (n) => {
    typeof e[n] != "function" && (e[n] = t);
  };
  r("EventTarget"), r("Node"), r("Element"), r("HTMLElement"), r("SVGElement"), r("Text"), r("Comment"), r("DocumentFragment"), r("ShadowRoot"), r("HTMLDocument"), r("Document"), r("HTMLBodyElement"), r("HTMLHeadElement"), r("HTMLCanvasElement"), r("HTMLInputElement"), r("HTMLLinkElement"), r("HTMLStyleElement"), r("HTMLPreElement"), r("HTMLDivElement"), r("CSSStyleRule"), r("CSSLayerBlockRule");
}
function Te() {
  let e, t, r = !1, n = !1;
  return {
    promise: new Promise((i, s) => {
      e = (f) => {
        !r && !n && (r = !0, i(f));
      }, t = (f) => {
        !r && !n && (n = !0, s(f));
      };
    }),
    resolve: e,
    reject: t,
    get isResolved() {
      return r;
    },
    get isRejected() {
      return n;
    }
  };
}
var Re = class {
  queue = [];
  processing = !1;
  async add(e) {
    return new Promise((t, r) => {
      this.queue.push(async () => {
        try {
          t(await e());
        } catch (n) {
          r(n);
        }
      }), this.process();
    });
  }
  async process() {
    if (!(this.processing || this.queue.length === 0)) {
      for (this.processing = !0; this.queue.length > 0; ) await this.queue.shift()();
      this.processing = !1;
    }
  }
  get length() {
    return this.queue.length;
  }
  get isProcessing() {
    return this.processing;
  }
};
function Ee(e, t, r = "Operation timed out") {
  const n = new Promise((i, s) => {
    setTimeout(() => s(new Error(r)), t);
  });
  return Promise.race([e, n]);
}
async function Ie(e, t = 3, r = 1e3, n = 2) {
  let i;
  for (let s = 0; s <= t; s++) try {
    return await e();
  } catch (f) {
    if (i = f, s < t) {
      const o = r * Math.pow(n, s);
      await new Promise((a) => setTimeout(a, o));
    }
  }
  throw i;
}
async function _e(e, t) {
  const r = [], n = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i], f = Promise.resolve().then(async () => {
      try {
        const o = await s();
        r[i] = o;
      } catch (o) {
        throw o;
      }
    });
    r[i] = void 0, n.push(f), n.length >= t && (await Promise.race(n), n.splice(n.findIndex((o) => o === f), 1));
  }
  return await Promise.all(n), r;
}
var Z = class {
  channels = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Map();
  register(e, t) {
    this.channels.set(e, t);
    const r = this.listeners.get(e);
    if (r) for (const n of r) try {
      n(t);
    } catch (i) {
      console.error(`[ChannelRegistry] Listener error for ${e}:`, i);
    }
    return t;
  }
  get(e) {
    return this.channels.get(e);
  }
  has(e) {
    return this.channels.has(e);
  }
  unregister(e) {
    const t = this.channels.delete(e);
    if (t) {
      const r = this.listeners.get(e);
      if (r) for (const n of r) try {
        n(null);
      } catch (i) {
        console.error(`[ChannelRegistry] Unregister listener error for ${e}:`, i);
      }
    }
    return t;
  }
  onChannelChange(e, t) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set());
    const r = this.listeners.get(e);
    if (r.add(t), this.channels.has(e)) try {
      t(this.channels.get(e));
    } catch (n) {
      console.error(`[ChannelRegistry] Initial listener error for ${e}:`, n);
    }
    return () => {
      r.delete(t), r.size === 0 && this.listeners.delete(e);
    };
  }
  getChannelNames() {
    return Array.from(this.channels.keys());
  }
  clear() {
    this.channels.clear(), this.listeners.clear();
  }
}, De = new Z();
function We(e, t) {
  const r = {};
  for (const n of t) r[n] = (...i) => e.request(n, i);
  return r;
}
var Y = class {
  healthChecks = /* @__PURE__ */ new Map();
  intervals = /* @__PURE__ */ new Map();
  healthStatus = /* @__PURE__ */ new Map();
  registerHealthCheck(e, t, r = 3e4) {
    this.healthChecks.set(e, t);
    const n = this.intervals.get(e);
    n && clearInterval(n);
    const i = setInterval(async () => {
      try {
        const s = await t();
        this.healthStatus.set(e, s), s || console.warn(`[ChannelHealth] Channel '${e}' is unhealthy`);
      } catch (s) {
        console.error(`[ChannelHealth] Health check failed for '${e}':`, s), this.healthStatus.set(e, !1);
      }
    }, r);
    this.intervals.set(e, i), t().then((s) => {
      this.healthStatus.set(e, s);
    }).catch(() => {
      this.healthStatus.set(e, !1);
    });
  }
  isHealthy(e) {
    return this.healthStatus.get(e) ?? !1;
  }
  getAllHealthStatuses() {
    const e = {};
    for (const [t, r] of this.healthStatus) e[t] = r;
    return e;
  }
  stopMonitoring(e) {
    const t = this.intervals.get(e);
    t && (clearInterval(t), this.intervals.delete(e)), this.healthChecks.delete(e), this.healthStatus.delete(e);
  }
  stopAllMonitoring() {
    for (const e of this.intervals.values()) clearInterval(e);
    this.intervals.clear(), this.healthChecks.clear(), this.healthStatus.clear();
  }
}, Ne = new Y();
WeakMap.prototype.getOrInsert ??= function(e, t) {
  return this.has(e) || this.set(e, t), this.get(e);
};
WeakMap.prototype.getOrInsertComputed ??= function(e, t) {
  return this.has(e) || this.set(e, t(e)), this.get(e);
};
Map.prototype.getOrInsert ??= function(e, t) {
  return this.has(e) || this.set(e, t), this.get(e);
};
Map.prototype.getOrInsertComputed ??= function(e, t) {
  return this.has(e) || this.set(e, t(e)), this.get(e);
};
var ke = (e, t, r = () => null) => (e?.has?.(t) || e?.set?.(t, r?.()), e?.get?.(t)), He = (e, t, r = () => null) => (e?.has?.(t) || e?.set?.(t, r?.(t)), e?.get?.(t)), F = /* @__PURE__ */ Symbol.for("@fix"), Le = (e) => e?.some?.(g), ze = (e) => Array.isArray(e) || e instanceof Set || e instanceof Map, g = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint" || typeof e > "u" || e == null, Q = (e, t) => g(e) ? t == "number" ? Number(e) || 0 : t == "string" ? String(e) || "" : t == "boolean" ? !!e : e : null, k = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), B = (e) => k(e, "value"), ee = (e) => g(e) ? e : B(e) ? e?.value : e, c = (e, t) => e?.[F] ?? e ?? t ?? t, E = (e) => e != null && (typeof e == "object" || typeof e == "function") && (e instanceof WeakRef || typeof e?.deref == "function") ? E(e?.deref?.()) : e, te = (e) => {
  if (typeof e == "function" || e == null) return e;
  const t = function() {
  };
  return t[F] = e, t;
}, Fe = (e, t, r) => (e = E(e), e != null && (typeof e == "object" || typeof e == "function") ? e[t] = ee(r = E(r)) : e), re = (e) => crypto?.getRandomValues ? crypto?.getRandomValues?.(e) : (() => {
  const t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) t[r] = Math.floor(Math.random() * 256);
  return t;
})();
function Be(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var Ue = (e, t, r) => Math.max(e, Math.min(t, r)), Ve = (e, t) => typeof t == "function" ? t?.bind?.(e) ?? t : t, $e = () => crypto?.randomUUID ? crypto?.randomUUID?.() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (+e ^ re?.(/* @__PURE__ */ new Uint8Array(1))?.[0] & 15 >> +e / 4).toString(16)), Ge = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), qe = (e) => e && e?.replace?.(/-([a-z])/g, (t, r) => r.toUpperCase()), je = (e, t = 0) => {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}, Je = (e, t) => !Number.isFinite(t) || t <= 0 || !Number.isFinite(e) ? 0 : Math.min(Math.max(e, 0), t), S = (e, t = 1) => Math.round(e * t) / t, Ke = (e, t = 1) => Math.floor(e * t) / t, Xe = (e, t = 1) => Math.ceil(e * t) / t, Ze = (e) => typeof CSSStyleValue < "u" && e instanceof CSSStyleValue, Ye = (e) => e != null && (typeof e == "boolean" ? e !== !1 : !0) && typeof e != "object" && typeof e != "function", Qe = (e) => typeof e == "boolean" ? e ? "" : null : typeof e == "number" ? String(e) : e, I = /* @__PURE__ */ Symbol.for("@trigger-lock"), et = (e, t, r = "value") => {
  k(e, r) && (e[I] = !0);
  let n;
  try {
    n = t?.();
  } finally {
    k(e, r) && delete e[I];
  }
  return n;
}, tt = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const r = parseFloat(t[0][0]);
  return !Number.isNaN(r) && Number.isFinite(r) ? r : null;
}, ne = /^\d+$/g, ie = (e) => {
  if (typeof e != "string" || (e = e?.trim?.(), e == "" || e == null)) return null;
  const t = [...e?.matchAll?.(ne)];
  if (t?.length != 1) return null;
  const r = parseInt(t[0][0]);
  return !Number.isNaN(r) && Number.isInteger(r) ? r : null;
}, rt = (e) => typeof e == "number" && !Number.isNaN(e), nt = (e) => typeof e == "string" ? ie(e) != null : typeof e == "number" && Number.isInteger(e) && e >= 0, it = (e) => Array.isArray(e) || e != null && typeof e == "object" && typeof e[Symbol.iterator] == "function", st = (e, t, r) => {
  e = e instanceof WeakRef ? e.deref() : e;
  const n = [...Object.entries(r)].map?.(([i, s]) => e?.[t]?.call?.(e, i, s));
  return () => {
    n?.forEach?.((i) => i?.());
  };
}, U = (e) => e instanceof WeakRef || typeof e?.deref == "function", ot = (e) => U(e) ? E(e) : e, ft = (e) => e != null ? U(e) ? e : typeof e == "function" || typeof e == "object" ? new WeakRef(e) : e : e, at = (e) => (typeof e == "object" || typeof e == "function") && (e?.value != null || e != null && "value" in e), ut = (e) => e != null && (typeof e == "object" || typeof e == "function"), ct = (e) => B(e) ? e?.value : e, lt = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), yt = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), ht = function(e) {
  return (t) => {
    e[I] = !0;
    let r;
    try {
      r = t?.();
    } finally {
      e[I] = !1;
    }
    return r;
  };
}, V = (e) => Array.isArray(e) ? e?.flatMap?.((t) => Array.isArray(t) ? V(t) : t) : e, se = (e) => V(e)?.every?.(b), b = (e) => g(e) || typeof SharedArrayBuffer == "function" && e instanceof SharedArrayBuffer || oe(e) || Array.isArray(e) && se(e), oe = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), mt = (e) => typeof e == "symbol" || typeof e == "object" && Object.prototype.toString.call(e) == "[object Symbol]", dt = (e) => e instanceof Promise || typeof e?.then == "function", pt = (e) => g(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || typeof MessagePort == "function" && e instanceof MessagePort || typeof ReadableStream == "function" && e instanceof ReadableStream || typeof WritableStream == "function" && e instanceof WritableStream || typeof TransformStream == "function" && e instanceof TransformStream || typeof ImageBitmap == "function" && e instanceof ImageBitmap || typeof VideoFrame == "function" && e instanceof VideoFrame || typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas || typeof RTCDataChannel == "function" && e instanceof RTCDataChannel || typeof AudioData == "function" && e instanceof AudioData || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream || typeof WebTransportSendStream == "function" && e instanceof WebTransportSendStream || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream, gt = (e) => {
  switch (typeof e) {
    case "number":
      return 0;
    case "string":
      return "";
    case "boolean":
      return !1;
    case "object":
      return null;
    case "function":
      return null;
    case "symbol":
      return null;
    case "bigint":
      return 0n;
  }
}, C = (e) => typeof e?.[Symbol.iterator] == "function", St = (e) => [
  "symbol",
  "string",
  "number"
].indexOf(typeof e) >= 0, vt = (e) => e != null && (typeof e == "function" || typeof e == "object") && !(e instanceof WeakRef), Mt = (e, t = "id") => {
  const r = Array.from(e?.values?.()).map((i) => [i?.[t], i]), n = new Map(r);
  return Array.from(n?.values?.() || []);
}, fe = (e, t, r = null) => {
  const n = r != null && (typeof e == "object" || typeof e == "function") ? e?.[r] ?? e : e;
  let i = [];
  t instanceof Set || t instanceof Map || Array.isArray(t) || C(t) ? i = (n instanceof Set || n instanceof WeakSet ? t?.values?.() : t?.entries?.()) || (Array.isArray(t) || C(t) ? t : []) : (typeof t == "object" || typeof t == "function") && (i = n instanceof Set || n instanceof WeakSet ? Object.values(t) : Object.entries(t));
  let s = [];
  Array.isArray(n) ? s = n.entries() : n instanceof Map || n instanceof WeakMap ? s = n?.entries?.() : n instanceof Set || n instanceof WeakSet ? s = n?.values?.() : (typeof n == "object" || typeof n == "function") && (s = Object.entries(n));
  const f = new Set(Array.from(i).map((u) => u?.[0])), o = new Set(Array.from(s).map((u) => u?.[0])), a = f?.difference?.(o);
  if (Array.isArray(n)) {
    const u = n.filter((y, M) => !a.has(M));
    n.splice(0, n.length), n.push(...u);
  } else if (n instanceof Map || n instanceof Set || n instanceof WeakMap || n instanceof WeakSet) for (const u of a) n.delete(u);
  else if (typeof n == "function" || typeof n == "object") for (const u of a) delete n[u];
  return n;
}, ae = (e, t, r = null, n = !0, i = "id") => {
  const s = r != null && (typeof e == "object" || typeof e == "function") ? e?.[r] ?? e : e;
  let f = null;
  if (n && fe(s, t), t instanceof Set || t instanceof Map || Array.isArray(t) || C(t) ? f = (s instanceof Set || s instanceof WeakSet ? t?.values?.() : t?.entries?.()) || (Array.isArray(t) || C(t) ? t : []) : (typeof t == "object" || typeof t == "function") && (f = s instanceof Set || s instanceof WeakSet ? Object.values(t) : Object.entries(t)), s && f && (typeof f == "object" || typeof f == "function")) {
    if (s instanceof Map || s instanceof WeakMap) {
      for (const o of f) s.set(...o);
      return s;
    }
    if (s instanceof Set || s instanceof WeakSet) {
      for (const o of f) {
        const a = o?.[i] ? Array.from(s?.values?.() || []).find((u) => !_?.(u?.[i], o?.[i])) : null;
        a != null ? ae(a, o, null, n, i) : s.add(o);
      }
      return s;
    }
    if (typeof s == "object" || typeof s == "function") {
      if (Array.isArray(s) || C(s)) {
        let o = 0;
        for (const a of f) o < s.length ? s[o++] = a?.[1] : s?.push?.(a?.[1]);
        return s;
      }
      return Object.assign(s, Object.fromEntries([...f || []].filter((o) => typeof o != "symbol")));
    }
  }
  return r != null ? (Reflect.set(e, r, t), e) : typeof t == "object" || typeof t == "function" ? Object.assign(e, t) : t;
}, ue = (e, t) => le.getOrInsert(e, /* @__PURE__ */ new WeakMap()).getOrInsert(t, t?.bind?.(e)), At = (e, t) => (typeof t == "function" ? ue(e, t) : t) ?? t, W = (e, t, r, n) => {
  if (t == Symbol.iterator) return ce(e, r, n);
  if (t == null || typeof t == "symbol" || typeof t == "object" || typeof t == "function") return;
  const i = (s, ...f) => {
    if (s != null) return r?.(s, ...f);
  };
  if (e instanceof Map || e instanceof WeakMap) {
    if (e.has(t)) return i?.(e.get(t), t, null, "@set");
  } else if (e instanceof Set || e instanceof WeakSet) {
    if (e.has(t)) return i?.(t, t, null, "@add");
  } else if (Array.isArray(e) && typeof t == "string" && [...t?.matchAll?.(/^\d+$/g)].length == 1 && Number.isInteger(typeof t == "string" ? parseInt(t) : t)) {
    const s = typeof t == "string" ? parseInt(t) : t;
    return i?.(e?.[s], s, null, "@add");
  } else if (typeof e == "function" || typeof e == "object") return i?.(e?.[t], t, null, "@set");
}, Pt = (e, t = {}) => (Object.entries(t)?.forEach?.(([r, n]) => {
  _(n, e[r]) && (e[r] = n);
}), e), ce = (e, t, r) => {
  if (e == null) return;
  let n = [];
  if (e instanceof Set || e instanceof Map || typeof e?.keys == "function") return [...e?.keys?.() || n].forEach?.((i) => W(e, i, t, r));
  if (Array.isArray(e) || C(e)) return [...e].forEach?.((i, s) => W(e, s, t, r));
  if (typeof e == "object" || typeof e == "function") return [...Object.keys(e) || n].forEach?.((i) => W(e, i, t, r));
}, Ct = (e, t) => e == null && t == null ? !1 : e == null || t == null ? !0 : e instanceof Map || e instanceof WeakMap ? e.size != t.size || Array.from(e.entries()).some(([r, n]) => !t.has(r) || !_(n, t.get(r))) : e instanceof Set || e instanceof WeakSet ? e.size != t.size || Array.from(e.values()).some((r) => !t.has(r)) : Array.isArray(e) || Array.isArray(t) ? e.length != t.length || e.some((r, n) => !_(r, t[n])) : typeof e == "object" || typeof t == "object" ? JSON.stringify(e) != JSON.stringify(t) : e != t, _ = (e, t) => e == null && t == null ? !1 : e == null || t == null ? !0 : typeof e == "boolean" && typeof t == "boolean" ? e != t : typeof e == "number" && typeof t == "number" ? !(e == t || Math.abs(e - t) < 1e-9) : typeof e == "string" && typeof t == "string" ? e != "" && t != "" && e != t || e !== t : typeof e != typeof t ? e !== t : e && t && e != t || e !== t, $ = /* @__PURE__ */ Symbol.for("object.boundCtx");
globalThis[$] ??= /* @__PURE__ */ new WeakMap();
var le = globalThis[$], wt = (e, t) => {
  const r = e == null || e < 0 || typeof e != "number" || e == Symbol.iterator || (t != null ? e >= (t?.length || 0) : !1);
  return t != null ? Array.isArray(t) && r : !1;
}, bt = /* @__PURE__ */ new WeakMap(), xt = (e, t) => typeof e?.[t] == "function" ? e?.[t]?.bind?.(e) : e?.[t], O = (e, t, r) => {
  if (Array.isArray(e))
    return e.every(b) ? e.map(t) : e.map((n, i) => O(n, t, [e, i]));
  if (e instanceof Map) {
    const n = Array.from(e.entries());
    return n.map(([i, s]) => s).every(b) ? new Map(n.map(([i, s]) => [i, t(s, i, e)])) : new Map(n.map(([i, s]) => [i, O(s, t, [e, i])]));
  }
  if (e instanceof Set) {
    const n = Array.from(e.entries()), i = n.map(([s, f]) => f);
    return n.every(b) ? new Set(i.map(t)) : new Set(i.map((s) => O(s, t, [e, s])));
  }
  if (typeof e == "object" && e?.constructor == Object && Object.prototype.toString.call(e) == "[object Object]") {
    const n = Array.from(Object.entries(e));
    return n.map(([i, s]) => s).every(b) ? Object.fromEntries(n.map(([i, s]) => [i, t(s, i, e)])) : Object.fromEntries(n.map(([i, s]) => [i, O(s, t, [e, i])]));
  }
  return t(e, r?.[1] ?? "", r?.[0] ?? null);
}, Ot = (e, t, r) => {
  if (e?.[t] != null) {
    const n = e[t];
    return Array.isArray(r) ? n.add(...r) : typeof r == "function" && n.add(r), e;
  }
  return e[t] ??= Array.isArray(r) ? new Set(r) : typeof r == "function" ? /* @__PURE__ */ new Set([r]) : r, e;
}, p = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), m = (e, t) => e instanceof Promise || typeof e?.then == "function" ? p?.has?.(e) ? t(p?.get?.(e)) : Promise.try?.(async () => {
  const r = await e;
  return p?.set?.(e, r), r;
})?.then?.(t) : t(e), ye = class {
  #e;
  #t;
  constructor(e, t) {
    this.#e = e, this.#t = t;
  }
  defineProperty(e, t, r) {
    return c(e) instanceof Promise ? Reflect.defineProperty(e, t, r) : m(c(e), (n) => Reflect.defineProperty(n, t, r));
  }
  deleteProperty(e, t) {
    return c(e) instanceof Promise ? Reflect.deleteProperty(e, t) : m(c(e), (r) => Reflect.deleteProperty(r, t));
  }
  getPrototypeOf(e) {
    return c(e) instanceof Promise ? Reflect.getPrototypeOf(e) : m(c(e), (t) => Reflect.getPrototypeOf(t));
  }
  setPrototypeOf(e, t) {
    return c(e) instanceof Promise ? Reflect.setPrototypeOf(e, t) : m(c(e), (r) => Reflect.setPrototypeOf(r, t));
  }
  isExtensible(e) {
    return c(e) instanceof Promise ? Reflect.isExtensible(e) : m(c(e), (t) => Reflect.isExtensible(t));
  }
  preventExtensions(e) {
    return c(e) instanceof Promise ? Reflect.ownKeys(e) : m(c(e), (t) => Reflect.preventExtensions(t));
  }
  ownKeys(e) {
    const t = c(e);
    return t instanceof Promise ? Object.keys(t) : m(t, (r) => (typeof r == "object" || typeof r == "function") && r != null ? Object.keys(r) : []) ?? [];
  }
  getOwnPropertyDescriptor(e, t) {
    return c(e) instanceof Promise ? Reflect.getOwnPropertyDescriptor(e, t) : m(c(e), (r) => Reflect.getOwnPropertyDescriptor(r, t));
  }
  construct(e, t, r) {
    return m(c(e), (n) => Reflect.construct(n, t, r));
  }
  has(e, t) {
    return c(e) instanceof Promise ? Reflect.has(e, t) : m(c(e), (r) => Reflect.has(r, t));
  }
  get(e, t, r) {
    if (e = c(e), t == "promise") return e;
    if (t == "resolve" && this.#e) return (...i) => {
      const s = this.#e?.(...i);
      return this.#e = null, s;
    };
    if (t == "reject" && this.#t) return (...i) => {
      const s = this.#t?.(...i);
      return this.#t = null, s;
    };
    if (t == "then" || t == "catch" || t == "finally") {
      if (e instanceof Promise) return e?.[t]?.bind?.(e);
      {
        const i = Promise.try(() => e);
        return i?.[t]?.bind?.(i);
      }
    }
    let n;
    return p?.has?.(e) && (n = p?.get?.(e))?.[t] != null ? n = p?.get?.(e)?.[t] : n = he(m(e, async (i) => {
      if (c(i) instanceof Promise) return Reflect.get(i, t, r);
      if (g(i)) return t == Symbol.toPrimitive || t == Symbol.toStringTag ? i : void 0;
      let s;
      try {
        s = Reflect.get(i, t, r);
      } catch {
        s = e?.[t];
      }
      return typeof s == "function" ? s?.bind?.(i) : s;
    })), t == Symbol.toStringTag ? g(n) ? String(n ?? "") || "" : n?.[Symbol.toStringTag]?.() || String(n ?? "") || "" : t == Symbol.toPrimitive ? (i) => {
      if (g(n)) return Q(n, i);
    } : n;
  }
  set(e, t, r) {
    return m(c(e), (n) => Reflect.set(n, t, r));
  }
  apply(e, t, r) {
    if (this.#e) {
      const n = this.#e?.(...r);
      return this.#e = null, n;
    }
    return m(c(e, this.#e), (n) => {
      if (typeof n == "function")
        return c(n) instanceof Promise, Reflect.apply(n, t, r);
    });
  }
};
function he(e, t, r) {
  return e instanceof Promise || typeof e?.then == "function" ? p?.has?.(e) ? p?.get?.(e) : (H?.has?.(e) || e?.then?.((n) => p?.set?.(e, n)), H?.getOrInsertComputed?.(e, () => new Proxy(te(e), new ye(t, r)))) : e;
}
var N = /* @__PURE__ */ new WeakMap(), me = class {
  _deref(e) {
    return e instanceof WeakRef || typeof e?.deref == "function" ? e?.deref?.() : e;
  }
  get(e, t, r) {
    const n = this._deref(e), i = n?.[t];
    return (t == "element" || t == "value") && n && (i == null || !(t in n)) ? n : t == "deref" ? () => this._deref(e) : typeof i == "function" ? (...s) => this._deref(e)?.[t]?.(...s) : i;
  }
  set(e, t, r, n) {
    const i = this._deref(e);
    return i ? Reflect.set(i, t, r) : !0;
  }
  has(e, t) {
    const r = this._deref(e);
    return r ? t in r : !1;
  }
  ownKeys(e) {
    const t = this._deref(e);
    return t ? Reflect.ownKeys(t) : [];
  }
  getOwnPropertyDescriptor(e, t) {
    const r = this._deref(e);
    if (r)
      return Object.getOwnPropertyDescriptor(r, t);
  }
  deleteProperty(e, t) {
    const r = this._deref(e);
    return r ? Reflect.deleteProperty(r, t) : !0;
  }
  defineProperty(e, t, r) {
    const n = this._deref(e);
    return n ? Reflect.defineProperty(n, t, r) : !0;
  }
  getPrototypeOf(e) {
    const t = this._deref(e);
    return t ? Object.getPrototypeOf(t) : null;
  }
  setPrototypeOf(e, t) {
    const r = this._deref(e);
    return r ? Reflect.setPrototypeOf(r, t) : !0;
  }
  isExtensible(e) {
    const t = this._deref(e);
    return t ? Reflect.isExtensible(t) : !1;
  }
  preventExtensions(e) {
    const t = this._deref(e);
    return t ? Reflect.preventExtensions(t) : !0;
  }
};
function Tt(e) {
  if (!(typeof e == "object" || typeof e == "function") || typeof e == "symbol") return e;
  const t = e instanceof WeakRef || typeof e?.deref == "function";
  if (e = t ? e?.deref?.() : e, e != null && N.has(e)) return N.get(e);
  const r = new me(), n = new Proxy(t ? e : new WeakRef(e), r);
  return N.set(e, n), n;
}
var G = (e, t, r = 0) => {
  const n = [...t], i = [...e];
  return r % 2 && (i.reverse(), n.reverse()), [(r == 0 || r == 3 ? i[0] : n[0] - i[0]) || 0, (r == 0 || r == 1 ? i[1] : n[1] - i[1]) || 0];
}, Rt = (e, t, r = 0) => {
  const n = [...t], i = [...e];
  r % 2 && n.reverse();
  const s = [(r == 0 || r == 3 ? i[0] : n[0] - i[0]) || 0, (r == 0 || r == 1 ? i[1] : n[1] - i[1]) || 0];
  return r % 2 && s.reverse(), s;
}, Et = (e, t = 0) => {
  const r = [...e];
  return t % 2 && r.reverse(), [(t == 0 || t == 3 ? r[0] : -r[0]) || 0, (t == 0 || t == 1 ? r[1] : -r[1]) || 0];
}, It = (e, t = 0) => {
  const r = [...e], n = [(t == 0 || t == 3 ? r[0] : -r[0]) || 0, (t == 0 || t == 1 ? r[1] : -r[1]) || 0];
  return t % 2 && n.reverse(), n;
}, v = (e, t = [4, 8]) => {
  if (Array.isArray(e) && e.length >= 2) return [Math.max(1, Math.floor(Number(e[0]) || t[0])), Math.max(1, Math.floor(Number(e[1]) || t[1]))];
  if (e && typeof e == "object") {
    const r = e;
    return [Math.max(1, Math.floor(Number(r.columns) || t[0])), Math.max(1, Math.floor(Number(r.rows) || t[1]))];
  }
  return [t[0], t[1]];
}, de = (e, t) => {
  const [r, n] = v(t);
  return [Math.max(0, Math.min(r - 1, Math.floor(Number(e[0]) || 0))), Math.max(0, Math.min(n - 1, Math.floor(Number(e[1]) || 0)))];
}, _t = (e, t, r, n, i) => {
  const s = v(r), f = Math.max(1, t[0] || 1), o = Math.max(1, t[1] || 1), a = G(e, [f, o], n), u = {
    item: i?.redirect?.item ?? { id: "" },
    list: i?.redirect?.list ?? [],
    items: i?.redirect?.items ?? /* @__PURE__ */ new Map(),
    layout: s,
    size: [f, o]
  }, y = Se(a, u, n), M = (i?.mode ?? "floor") === "round" ? [Math.round(y[0]), Math.round(y[1])] : [Math.floor(y[0]), Math.floor(y[1])], P = ge(M, u);
  return de(P, s);
}, pe = (e) => e == null ? [] : Array.isArray(e) ? e : e instanceof Map ? Array.from(e.values()) : e instanceof Set || typeof e[Symbol.iterator] == "function" ? Array.from(e) : [], Dt = (e, t) => {
  const r = e.style.getPropertyValue(["--ox-c-span", "--ox-r-span"][t]), n = (parseFloat(r || "1") || 1) - 1;
  return Math.min(Math.max(n - 1, 0), 1);
}, ge = (e, t) => {
  const r = v(t?.layout ?? [4, 8]), n = {
    ...t,
    layout: r
  }, i = pe(n?.items), s = n?.item || {}, f = (d) => i.filter((w) => !(w == s || w?.id == s?.id)).some((w) => (w?.cell?.[0] || 0) == (d[0] || 0) && (w?.cell?.[1] || 0) == (d[1] || 0)), o = [...e];
  if (!f(o)) return [...o];
  const a = r[0] || 4, u = r[1] || 8, y = ([
    [o[0] + 1, o[1]],
    [o[0] - 1, o[1]],
    [o[0], o[1] + 1],
    [o[0], o[1] - 1]
  ].filter((d) => d[0] >= 0 && d[0] < a && d[1] >= 0 && d[1] < u) || []).find((d) => !f(d));
  if (y) return [...y];
  let M = 0, P = !0, h = [...o];
  for (; P && M++ < a * u; ) {
    if (!(P = f(h))) return [...h];
    h[0]++, h[0] >= a && (h[0] = 0, h[1]++, h[1] >= u && (h[1] = 0));
  }
  return [...o];
}, Wt = (e, t, r = 0) => {
  const n = [...t.size], i = [...e], s = v(t.layout ?? [4, 8]);
  return r % 2 && n.reverse(), [S(i[0], n[0] / s[0]), S(i[1], n[1] / s[1])];
}, Se = (e, t, r = 0) => {
  const n = [...t.size], i = [...e], s = v(t.layout ?? [4, 8]);
  r % 2 && n.reverse();
  const f = [s[0] / n[0], s[1] / n[1]];
  return [i[0] * f[0], i[1] * f[1]];
}, Nt = (e, t, r = 0) => {
  const n = [...e], i = [...t.size], s = v(t.layout ?? [4, 8]);
  r % 2 && i.reverse();
  const f = [i[0] / s[0], i[1] / s[1]];
  return [S(n[0], f[0]), S(n[1], f[1])];
}, kt = (e, t) => {
  const r = v(t.layout ?? [4, 8]);
  return [Math.min(Math.max(S(e[0]), 0), r[0] - 1), Math.min(Math.max(S(e[1]), 0), r[1] - 1)];
}, Ht = (e, t, r = 0) => {
  const n = [...e], i = [...t.size], s = v(t.layout ?? [4, 8]), f = G(n, i, r), o = r % 2 ? [i[1], i[0]] : [i[0], i[1]];
  return [Math.min(Math.max(S(f[0] / o[0] * s[0], 1), 0), s[0] - 1), Math.min(Math.max(S(f[1] / o[1] * s[1], 1), 0), s[1] - 1)];
}, D = (e) => {
  const t = String(e ?? "").trim();
  return t ? (t.startsWith("/") ? t : `/${t}`).replace(/\/+/g, "/") : "/";
}, q = (e) => {
  const t = D(e);
  return t === "/user" || t.startsWith("/user/");
}, j = (e) => {
  const t = D(e);
  return t === "/user" ? "/" : t.startsWith("/user/") ? t.slice(5) || "/" : t;
}, Lt = (e) => j(e).replace(/^\/+/, ""), zt = (e) => {
  const t = D(e);
  return q(t) ? t : t === "/" ? "/user/" : `/user${t}`;
}, Ft = (e) => {
  const t = D(e), r = j(t);
  return q(t) ? Array.from(/* @__PURE__ */ new Set([r, t])) : [r];
}, Bt = (e) => e ? (e = e?.replace?.(/_/g, " ") || e, e = e?.charAt?.(0)?.toUpperCase?.() + e?.slice?.(1) || e, e) : "", Ut = (e, t, r = -1, n = null) => {
  e?.indexOf?.(t) >= 0 ? e.splice(e.indexOf(t), 1) : r >= 0 && r < e?.length && e.splice(r, 1);
}, Vt = (e, t) => {
  e?.indexOf?.(t) >= 0 && e.splice(e.indexOf(t), 1);
}, ve = (e, t) => {
  e?.indexOf?.(t) < 0 && e.push(t);
}, $t = (e, t, r = -1) => {
  typeof r != "number" || r < 0 || r >= e?.length ? ve(e, t) : typeof r == "number" && e?.indexOf?.(t) < 0 && e.splice(r, 0, t);
}, T = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new Map(), Me = async (e) => {
  try {
    e = await e;
  } catch (n) {
    e = null, console.warn(n);
  }
  if (e == null) return null;
  if (T.has(e) || e?.type != "application/json") return T.get(e);
  const t = await e?.text?.()?.catch?.(console.warn.bind(console)) || "{}";
  let r = {};
  try {
    r = JSON.parse(t);
  } catch {
    try {
      r = JSON.parse(t);
    } catch (i) {
      console.warn(i);
    }
  }
  return e && T.set(e, r), r;
}, Gt = async (e, t) => {
  try {
    t = await t;
  } catch (n) {
    t = null, console.warn(n);
  }
  if (e == null) return null;
  if (R.has(e)) return R.get(e);
  const r = t != null ? await Me(t) : R?.get(e);
  return e && R.set(e, r), r;
}, qt = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  e.forEach((i, s) => {
    i?.name && r.set(i.name, {
      item: i,
      index: s
    });
  });
  const n = /* @__PURE__ */ new Map();
  t.forEach((i) => {
    i?.name && n.set(i.name, i);
  });
  for (const [i, { index: s }] of r) {
    const f = n.get(i);
    f && (e[s] = f);
  }
  for (const [i, s] of n) r.has(i) || e.push(s);
  for (let i = e.length - 1; i >= 0; i--) {
    const s = e[i];
    s?.name && !n.has(s.name) && e.splice(i, 1);
  }
  return e.sort((i, s) => i?.name?.localeCompare?.(s?.name ?? "")), e;
}, Ae = /\+?\d[\d\s().\-]{4,}\d/g, Pe = /(доб\.?|доп\.?|ext\.?|extension)\s*[:#\-x]*\s*\d+.*/i, J = {
  defaultTrunk: "8",
  countryCode: "7",
  cityCode: null,
  stripExtensions: !0,
  minLocal: 5,
  maxLocal: 7
}, x = (e, t = {}) => {
  if (e == null) return null;
  const r = {
    ...J,
    ...t
  };
  let n = String(e).trim();
  if (!n) return null;
  r.stripExtensions && (n = n.replace(Pe, ""));
  const i = /^\+/.test(n);
  let s = n.replace(/\D/g, "");
  if (!s) return null;
  if (i && s.startsWith(r.countryCode)) s = r.defaultTrunk + s.slice(r.countryCode.length);
  else if (s.length === 11 && s.startsWith(r.countryCode)) s = r.defaultTrunk + s.slice(1);
  else if (s.length === 10) s = r.defaultTrunk + s;
  else if (r.cityCode && s.length >= r.minLocal && s.length <= r.maxLocal) s = r.defaultTrunk + r.cityCode + s;
  else if (!(s.length === 11 && s.startsWith(r.defaultTrunk)))
    if (r.cityCode && s.length === r.cityCode.length + 7) s = r.defaultTrunk + s;
    else return null;
  return /^\d{11}$/.test(s) ? s : null;
}, L = (e) => {
  if (e == null) return [];
  const t = String(e), r = t.match(Ae);
  return r?.length ? r : t.split(/[;,/|]+/).map((n) => n.trim()).filter(Boolean);
}, Ce = (e, t = {}) => {
  const r = /* @__PURE__ */ new Set();
  if (Array.isArray(e)) for (const n of e) if (typeof n == "string") for (const i of L(n)) {
    const s = x(i, t);
    s && r.add(s);
  }
  else {
    const i = x(n, t);
    i && r.add(i);
  }
  else if (typeof e == "string") for (const n of L(e)) {
    const i = x(n, t);
    i && r.add(i);
  }
  else {
    const n = x(e, t);
    n && r.add(n);
  }
  return [...r];
}, we = (e, t) => Array.isArray(e) && typeof e[1] == "number" ? e[1] : e && typeof e == "object" && typeof e.index == "number" ? e.index : t, be = (e) => {
  if (Array.isArray(e)) return e[0];
  if (e && typeof e == "object") {
    if ("phones" in e) return e.phones;
    if ("phone" in e) return e.phone;
  }
  return e;
};
function jt(e, t = {}) {
  const r = {
    ...J,
    ...t
  }, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  e.forEach((o, a) => {
    const u = we(o, a), y = be(o), M = Ce(y, r);
    i.has(u) || i.set(u, /* @__PURE__ */ new Set());
    const P = i.get(u);
    for (const h of M)
      P.add(h), n.has(h) || n.set(h, /* @__PURE__ */ new Set()), n.get(h).add(u);
  });
  const s = {};
  for (const [o, a] of n.entries()) a.size > 1 && (s[o] = [...a].sort((u, y) => u - y));
  const f = {};
  for (const [o, a] of i.entries()) {
    const u = [...a].filter((y) => s[y]);
    u.length && (f[o] = u.sort());
  }
  return {
    duplicatesByNumber: s,
    pairs: Object.entries(f).map(([o, a]) => [Number(o), a]).sort((o, a) => o[0] - a[0]),
    duplicatesByIndex: f,
    normalize: (o) => x(o, r)
  };
}
var K = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
function xe(e) {
  return e ? /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(e).trim()) : !1;
}
function A(e) {
  if (!e) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "object" && e?.timestamp) return A(e.timestamp);
  if (typeof e == "object" && e?.iso_date) return A(e.iso_date);
  if (typeof e == "object" && e?.date) return A(e.date);
  if (typeof e == "number") {
    if (e >= 1e12) return new Date(e);
    const t = Math.pow(10, 11 - (String(e | 0)?.length || 11)) | 0;
    return new Date(e * t);
  }
  if (typeof e == "string" && xe(e)) {
    const t = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(e.trim());
    if (!t) return /* @__PURE__ */ new Date();
    const [, r, n] = t, i = /* @__PURE__ */ new Date();
    return new Date(i.getFullYear(), i.getMonth(), i.getDate(), Number(r), Number(n), 0, 0);
  }
  return new Date(String(e));
}
function Jt(e) {
  return e ? typeof e == "number" ? e >= 1e12 ? e : e * (Math.pow(10, 11 - (String(e | 0)?.length || 11)) | 0) : e instanceof Date ? e.getTime() : A(e)?.getTime?.() ?? Date.now() : Date.now();
}
var Kt = (e) => {
  if (!e) return null;
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())), r = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - r);
  const n = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t.getTime() - n.getTime()) / 864e5 + 1) / 7);
}, Oe = (e) => e ? typeof e == "object" && (e.date || e.iso_date || e.timestamp) ? e : { iso_date: String(e) } : null, Xt = (e) => {
  const t = Oe(e);
  return t && A(t)?.toLocaleTimeString?.("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
    timeZone: K()
  }) || "";
}, Zt = (e) => A(e)?.toLocaleDateString?.("en-GB", {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric",
  timeZone: K()
}) || "", Yt = (e) => {
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? "" : t.toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}, l = (e) => {
  if (e == null) return NaN;
  if (typeof e == "number" && Number.isFinite(e)) return e;
  const t = A(e);
  if (t && !Number.isNaN(t?.getTime())) return t?.getTime() ?? 0;
  const r = String(e).match(/^(\d{1,2})(?::(\d{2}))?(?::(\d{2}))?/);
  if (r) {
    const i = Number(r[1]) || 0, s = Number(r[2]) || 0, f = Number(r[3]) || 0;
    return ((i * 60 + s) * 60 + f) * 1e3;
  }
  const n = Number(e);
  return Number.isFinite(n) ? n : NaN;
}, Qt = (e) => {
  const t = e instanceof Date || typeof e == "string" && e.match(/^\d{4}-\d{2}-\d{2}$/);
  let r = !1;
  try {
    r = l(e) > 0;
  } catch {
    r = !1;
  }
  return !!((t && r) ?? !1);
}, er = (e, t, r) => e && t ? l(e) < l(r) && l(r) < l(t) : e ? l(e) < l(r) : t ? l(r) < l(t) : !1, tr = (e, t, r, n = 7) => {
  let i = !0;
  if (e && (i &&= l(r) <= l(e)), t && (i &&= l(r) < l(t)), n) {
    const s = l(r) + n * 24 * 60 * 60 * 1e3;
    i &&= l(e) < l(s);
  }
  return i;
}, rr = (e, t) => {
  const r = l(e) || 0, n = (Number.isFinite(r) ? r : 0) - (t || 0);
  return Math.round(n / 864e5);
};
function nr(e, t) {
  let r;
  return (...n) => {
    clearTimeout(r), r = setTimeout(() => e(...n), t);
  };
}
function ir(e, t) {
  let r = !1;
  return (...n) => {
    r || (e(...n), r = !0, setTimeout(() => r = !1, t));
  };
}
function sr(e) {
  return new Promise((t) => setTimeout(t, e));
}
function or(e = "") {
  return `${e}${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}
function z(e) {
  if (e === null || typeof e != "object") return e;
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof Array) return e.map((t) => z(t));
  if (e instanceof Object) {
    const t = {};
    for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = z(e[r]));
    return t;
  }
  return e;
}
function fr(e) {
  return e == null ? !0 : typeof e == "string" ? e.trim().length === 0 : Array.isArray(e) ? e.length === 0 : typeof e == "object" ? Object.keys(e).length === 0 : !1;
}
function ar() {
  return typeof window < "u" && typeof document < "u";
}
function ur() {
  return typeof self < "u" && typeof window > "u";
}
X();
export {
  et as $avoidTrigger,
  F as $fxy,
  ee as $getValue,
  Fe as $set,
  I as $triggerLock,
  Re as AsyncQueue,
  Y as ChannelHealthMonitor,
  Z as ChannelRegistry,
  Pe as EXT_CUT_RE,
  Me as GET_OR_CACHE,
  Gt as GET_OR_CACHE_BY_NAME,
  ne as INTEGER_REGEXP,
  Ae as PHONE_CANDIDATE_RE,
  ve as PUSH_ONCE,
  he as Promised,
  Vt as REMOVE_IF_HAS,
  Ut as REMOVE_IF_HAS_SIMILAR,
  $t as SPLICE_INTO_ONCE,
  $e as UUIDv4,
  Tt as WRef,
  At as bindCtx,
  Ot as bindEvent,
  ue as bindFx,
  le as boundCtx,
  T as cachedPerFile,
  R as cachedPerFileName,
  ce as callByAllProp,
  W as callByProp,
  Ge as camelToKebab,
  nt as canBeInteger,
  Xe as ceilNearest,
  er as checkInTimeRange,
  tr as checkRemainsTime,
  Ue as clamp,
  Je as clampDimension,
  de as clampGridCellTuple,
  Ht as clientSpaceInOrientCX,
  rr as computeTimelineOrderInGeneral,
  _e as concurrentLimit,
  xt as contextify,
  Se as convertOrientPxToCX,
  We as createChannelProxy,
  Te as createDeferred,
  G as cvt_cs_to_os,
  Rt as cvt_os_to_cs,
  Et as cvt_rel_cs_to_os,
  It as cvt_rel_os_to_cs,
  nr as debounce,
  z as deepClone,
  O as deepOperateAndClone,
  gt as defaultByType,
  E as deref,
  jt as findDuplicatePhones,
  te as fixFx,
  kt as floorInCX,
  Nt as floorInOrientPx,
  Ke as floorNearest,
  Zt as formatAsDate,
  Xt as formatAsTime,
  Yt as formatDateTime,
  l as getComparableTimeValue,
  Kt as getISOWeekNumber,
  we as getIndexForRow,
  ke as getOrInsert,
  He as getOrInsertComputed,
  be as getPhonesFromRow,
  re as getRandomValues,
  Dt as getSpan,
  K as getTimeZone,
  ct as getValue,
  Ne as globalChannelHealthMonitor,
  De as globalChannelRegistry,
  pe as gridItemsAsArray,
  st as handleListeners,
  k as hasProperty,
  B as hasValue,
  bt as inProxy,
  wt as isArrayInvalidKey,
  it as isArrayOrIterable,
  ar as isBrowser,
  b as isCanJustReturn,
  pt as isCanTransfer,
  Qt as isDate,
  fr as isEmpty,
  Le as isHasPrimitives,
  C as isIterable,
  St as isKeyType,
  se as isNotComplexArray,
  _ as isNotEqual,
  ut as isObject,
  Ct as isObjectNotEqual,
  ze as isObservable,
  g as isPrimitive,
  dt as isPromise,
  xe as isPureHHMM,
  U as isRef,
  mt as isSymbol,
  oe as isTypedArray,
  q as isUserScopePath,
  Ye as isVal,
  rt as isValidNumber,
  vt as isValidObj,
  at as isValueRef,
  Ze as isValueUnit,
  ur as isWorker,
  qe as kebabToCamel,
  Wt as makeOrientInset,
  ht as makeTriggerLess,
  qt as mergeByExists,
  Mt as mergeByKey,
  v as normalizeGridLayout,
  x as normalizeOne,
  Ce as normalizePhones,
  Qe as normalizePrimitive,
  Oe as normalizeSchedule,
  ae as objectAssign,
  Pt as objectAssignNotEqual,
  Jt as parseAndGetCorrectTime,
  A as parseDateCorrectly,
  lt as potentiallyAsync,
  yt as potentiallyAsyncMap,
  ge as redirectCell,
  fe as removeExtra,
  Bt as renderTabName,
  _t as resolveLocalPointToGridCell,
  Ie as retry,
  S as roundNearest,
  sr as sleep,
  L as splitCandidates,
  j as stripUserScopePrefix,
  ir as throttle,
  je as toFiniteNumber,
  ft as toRef,
  Lt as toUserRelativePath,
  zt as toUserScopePath,
  Q as tryParseByHint,
  ie as tryStringAsInteger,
  tt as tryStringAsNumber,
  or as uniqueId,
  ot as unref,
  c as unwrap,
  V as unwrapArray,
  Ft as userPathCandidates,
  Be as valueClamp,
  Ve as withCtx,
  Ee as withTimeout
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY29yZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8jcmVnaW9uIHNyYy9ydW50aW1lL2RvbS1nbG9iYWxzLXBvbHlmaWxsLnRzXG5mdW5jdGlvbiBpbnN0YWxsRG9tQ29uc3RydWN0b3JQb2x5ZmlsbHMoKSB7XG5cdGNvbnN0IGcgPSBnbG9iYWxUaGlzO1xuXHRpZiAodHlwZW9mIGcuSFRNTEVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCBzdHViID0gY2xhc3Mge307XG5cdGNvbnN0IGVuc3VyZSA9IChuYW1lKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBnW25hbWVdICE9PSBcImZ1bmN0aW9uXCIpIGdbbmFtZV0gPSBzdHViO1xuXHR9O1xuXHRlbnN1cmUoXCJFdmVudFRhcmdldFwiKTtcblx0ZW5zdXJlKFwiTm9kZVwiKTtcblx0ZW5zdXJlKFwiRWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTEVsZW1lbnRcIik7XG5cdGVuc3VyZShcIlNWR0VsZW1lbnRcIik7XG5cdGVuc3VyZShcIlRleHRcIik7XG5cdGVuc3VyZShcIkNvbW1lbnRcIik7XG5cdGVuc3VyZShcIkRvY3VtZW50RnJhZ21lbnRcIik7XG5cdGVuc3VyZShcIlNoYWRvd1Jvb3RcIik7XG5cdGVuc3VyZShcIkhUTUxEb2N1bWVudFwiKTtcblx0ZW5zdXJlKFwiRG9jdW1lbnRcIik7XG5cdGVuc3VyZShcIkhUTUxCb2R5RWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTEhlYWRFbGVtZW50XCIpO1xuXHRlbnN1cmUoXCJIVE1MQ2FudmFzRWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTElucHV0RWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTExpbmtFbGVtZW50XCIpO1xuXHRlbnN1cmUoXCJIVE1MU3R5bGVFbGVtZW50XCIpO1xuXHRlbnN1cmUoXCJIVE1MUHJlRWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTERpdkVsZW1lbnRcIik7XG5cdGVuc3VyZShcIkNTU1N0eWxlUnVsZVwiKTtcblx0ZW5zdXJlKFwiQ1NTTGF5ZXJCbG9ja1J1bGVcIik7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9Qcm9taXNlVXRpbHMudHNcbmZ1bmN0aW9uIGNyZWF0ZURlZmVycmVkKCkge1xuXHRsZXQgcmVzb2x2ZTtcblx0bGV0IHJlamVjdDtcblx0bGV0IGlzUmVzb2x2ZWQgPSBmYWxzZTtcblx0bGV0IGlzUmVqZWN0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHtcblx0XHRwcm9taXNlOiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcblx0XHRcdHJlc29sdmUgPSAodmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKCFpc1Jlc29sdmVkICYmICFpc1JlamVjdGVkKSB7XG5cdFx0XHRcdFx0aXNSZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRcdFx0cmVzKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHJlamVjdCA9IChlcnJvcikgPT4ge1xuXHRcdFx0XHRpZiAoIWlzUmVzb2x2ZWQgJiYgIWlzUmVqZWN0ZWQpIHtcblx0XHRcdFx0XHRpc1JlamVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRyZWooZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH0pLFxuXHRcdHJlc29sdmUsXG5cdFx0cmVqZWN0LFxuXHRcdGdldCBpc1Jlc29sdmVkKCkge1xuXHRcdFx0cmV0dXJuIGlzUmVzb2x2ZWQ7XG5cdFx0fSxcblx0XHRnZXQgaXNSZWplY3RlZCgpIHtcblx0XHRcdHJldHVybiBpc1JlamVjdGVkO1xuXHRcdH1cblx0fTtcbn1cbnZhciBBc3luY1F1ZXVlID0gY2xhc3Mge1xuXHRxdWV1ZSA9IFtdO1xuXHRwcm9jZXNzaW5nID0gZmFsc2U7XG5cdGFzeW5jIGFkZChvcGVyYXRpb24pIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5xdWV1ZS5wdXNoKGFzeW5jICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXNvbHZlKGF3YWl0IG9wZXJhdGlvbigpKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucHJvY2VzcygpO1xuXHRcdH0pO1xuXHR9XG5cdGFzeW5jIHByb2Nlc3MoKSB7XG5cdFx0aWYgKHRoaXMucHJvY2Vzc2luZyB8fCB0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXHRcdHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cdFx0d2hpbGUgKHRoaXMucXVldWUubGVuZ3RoID4gMCkgYXdhaXQgdGhpcy5xdWV1ZS5zaGlmdCgpKCk7XG5cdFx0dGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cdH1cblx0Z2V0IGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5sZW5ndGg7XG5cdH1cblx0Z2V0IGlzUHJvY2Vzc2luZygpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9jZXNzaW5nO1xuXHR9XG59O1xuZnVuY3Rpb24gd2l0aFRpbWVvdXQocHJvbWlzZSwgdGltZW91dE1zLCB0aW1lb3V0TWVzc2FnZSA9IFwiT3BlcmF0aW9uIHRpbWVkIG91dFwiKSB7XG5cdGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBFcnJvcih0aW1lb3V0TWVzc2FnZSkpLCB0aW1lb3V0TXMpO1xuXHR9KTtcblx0cmV0dXJuIFByb21pc2UucmFjZShbcHJvbWlzZSwgdGltZW91dFByb21pc2VdKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHJldHJ5KG9wZXJhdGlvbiwgbWF4UmV0cmllcyA9IDMsIGluaXRpYWxEZWxheSA9IDFlMywgYmFja29mZk11bHRpcGxpZXIgPSAyKSB7XG5cdGxldCBsYXN0RXJyb3I7XG5cdGZvciAobGV0IGF0dGVtcHQgPSAwOyBhdHRlbXB0IDw9IG1heFJldHJpZXM7IGF0dGVtcHQrKykgdHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgb3BlcmF0aW9uKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bGFzdEVycm9yID0gZXJyb3I7XG5cdFx0aWYgKGF0dGVtcHQgPCBtYXhSZXRyaWVzKSB7XG5cdFx0XHRjb25zdCBkZWxheSA9IGluaXRpYWxEZWxheSAqIE1hdGgucG93KGJhY2tvZmZNdWx0aXBsaWVyLCBhdHRlbXB0KTtcblx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cdFx0fVxuXHR9XG5cdHRocm93IGxhc3RFcnJvcjtcbn1cbmFzeW5jIGZ1bmN0aW9uIGNvbmN1cnJlbnRMaW1pdChvcGVyYXRpb25zLCBsaW1pdCkge1xuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGNvbnN0IGV4ZWN1dGluZyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG9wZXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2ldO1xuXHRcdGNvbnN0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9wZXJhdGlvbigpO1xuXHRcdFx0XHRyZXN1bHRzW2ldID0gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmVzdWx0c1tpXSA9IHZvaWQgMDtcblx0XHRleGVjdXRpbmcucHVzaChwcm9taXNlKTtcblx0XHRpZiAoZXhlY3V0aW5nLmxlbmd0aCA+PSBsaW1pdCkge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5yYWNlKGV4ZWN1dGluZyk7XG5cdFx0XHRleGVjdXRpbmcuc3BsaWNlKGV4ZWN1dGluZy5maW5kSW5kZXgoKHApID0+IHAgPT09IHByb21pc2UpLCAxKTtcblx0XHR9XG5cdH1cblx0YXdhaXQgUHJvbWlzZS5hbGwoZXhlY3V0aW5nKTtcblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9DaGFubmVsVXRpbHMudHNcbnZhciBDaGFubmVsUmVnaXN0cnkgPSBjbGFzcyB7XG5cdGNoYW5uZWxzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0bGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0cmVnaXN0ZXIobmFtZSwgY2hhbm5lbCkge1xuXHRcdHRoaXMuY2hhbm5lbHMuc2V0KG5hbWUsIGNoYW5uZWwpO1xuXHRcdGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmdldChuYW1lKTtcblx0XHRpZiAobGlzdGVuZXJzKSBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykgdHJ5IHtcblx0XHRcdGxpc3RlbmVyKGNoYW5uZWwpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBbQ2hhbm5lbFJlZ2lzdHJ5XSBMaXN0ZW5lciBlcnJvciBmb3IgJHtuYW1lfTpgLCBlcnJvcik7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFubmVsO1xuXHR9XG5cdGdldChuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbm5lbHMuZ2V0KG5hbWUpO1xuXHR9XG5cdGhhcyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbm5lbHMuaGFzKG5hbWUpO1xuXHR9XG5cdHVucmVnaXN0ZXIobmFtZSkge1xuXHRcdGNvbnN0IGV4aXN0ZWQgPSB0aGlzLmNoYW5uZWxzLmRlbGV0ZShuYW1lKTtcblx0XHRpZiAoZXhpc3RlZCkge1xuXHRcdFx0Y29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpO1xuXHRcdFx0aWYgKGxpc3RlbmVycykgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHRyeSB7XG5cdFx0XHRcdGxpc3RlbmVyKG51bGwpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgW0NoYW5uZWxSZWdpc3RyeV0gVW5yZWdpc3RlciBsaXN0ZW5lciBlcnJvciBmb3IgJHtuYW1lfTpgLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBleGlzdGVkO1xuXHR9XG5cdG9uQ2hhbm5lbENoYW5nZShuYW1lLCBsaXN0ZW5lcikge1xuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKG5hbWUpKSB0aGlzLmxpc3RlbmVycy5zZXQobmFtZSwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG5cdFx0Y29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpO1xuXHRcdGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuXHRcdGlmICh0aGlzLmNoYW5uZWxzLmhhcyhuYW1lKSkgdHJ5IHtcblx0XHRcdGxpc3RlbmVyKHRoaXMuY2hhbm5lbHMuZ2V0KG5hbWUpKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgW0NoYW5uZWxSZWdpc3RyeV0gSW5pdGlhbCBsaXN0ZW5lciBlcnJvciBmb3IgJHtuYW1lfTpgLCBlcnJvcik7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHRcdGlmIChsaXN0ZW5lcnMuc2l6ZSA9PT0gMCkgdGhpcy5saXN0ZW5lcnMuZGVsZXRlKG5hbWUpO1xuXHRcdH07XG5cdH1cblx0Z2V0Q2hhbm5lbE5hbWVzKCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hhbm5lbHMua2V5cygpKTtcblx0fVxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmNoYW5uZWxzLmNsZWFyKCk7XG5cdFx0dGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcblx0fVxufTtcbnZhciBnbG9iYWxDaGFubmVsUmVnaXN0cnkgPSBuZXcgQ2hhbm5lbFJlZ2lzdHJ5KCk7XG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsUHJveHkoY2hhbm5lbCwgbWV0aG9kcykge1xuXHRjb25zdCBwcm94eSA9IHt9O1xuXHRmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSBwcm94eVttZXRob2RdID0gKC4uLmFyZ3MpID0+IHtcblx0XHRyZXR1cm4gY2hhbm5lbC5yZXF1ZXN0KG1ldGhvZCwgYXJncyk7XG5cdH07XG5cdHJldHVybiBwcm94eTtcbn1cbnZhciBDaGFubmVsSGVhbHRoTW9uaXRvciA9IGNsYXNzIHtcblx0aGVhbHRoQ2hlY2tzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0aW50ZXJ2YWxzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0aGVhbHRoU3RhdHVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0cmVnaXN0ZXJIZWFsdGhDaGVjayhjaGFubmVsTmFtZSwgaGVhbHRoQ2hlY2ssIGludGVydmFsTXMgPSAzZTQpIHtcblx0XHR0aGlzLmhlYWx0aENoZWNrcy5zZXQoY2hhbm5lbE5hbWUsIGhlYWx0aENoZWNrKTtcblx0XHRjb25zdCBleGlzdGluZ0ludGVydmFsID0gdGhpcy5pbnRlcnZhbHMuZ2V0KGNoYW5uZWxOYW1lKTtcblx0XHRpZiAoZXhpc3RpbmdJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbChleGlzdGluZ0ludGVydmFsKTtcblx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGlzSGVhbHRoeSA9IGF3YWl0IGhlYWx0aENoZWNrKCk7XG5cdFx0XHRcdHRoaXMuaGVhbHRoU3RhdHVzLnNldChjaGFubmVsTmFtZSwgaXNIZWFsdGh5KTtcblx0XHRcdFx0aWYgKCFpc0hlYWx0aHkpIGNvbnNvbGUud2FybihgW0NoYW5uZWxIZWFsdGhdIENoYW5uZWwgJyR7Y2hhbm5lbE5hbWV9JyBpcyB1bmhlYWx0aHlgKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtDaGFubmVsSGVhbHRoXSBIZWFsdGggY2hlY2sgZmFpbGVkIGZvciAnJHtjaGFubmVsTmFtZX0nOmAsIGVycm9yKTtcblx0XHRcdFx0dGhpcy5oZWFsdGhTdGF0dXMuc2V0KGNoYW5uZWxOYW1lLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSwgaW50ZXJ2YWxNcyk7XG5cdFx0dGhpcy5pbnRlcnZhbHMuc2V0KGNoYW5uZWxOYW1lLCBpbnRlcnZhbCk7XG5cdFx0aGVhbHRoQ2hlY2soKS50aGVuKChpc0hlYWx0aHkpID0+IHtcblx0XHRcdHRoaXMuaGVhbHRoU3RhdHVzLnNldChjaGFubmVsTmFtZSwgaXNIZWFsdGh5KTtcblx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHR0aGlzLmhlYWx0aFN0YXR1cy5zZXQoY2hhbm5lbE5hbWUsIGZhbHNlKTtcblx0XHR9KTtcblx0fVxuXHRpc0hlYWx0aHkoY2hhbm5lbE5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFsdGhTdGF0dXMuZ2V0KGNoYW5uZWxOYW1lKSA/PyBmYWxzZTtcblx0fVxuXHRnZXRBbGxIZWFsdGhTdGF0dXNlcygpIHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IFtuYW1lLCBzdGF0dXNdIG9mIHRoaXMuaGVhbHRoU3RhdHVzKSByZXN1bHRbbmFtZV0gPSBzdGF0dXM7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRzdG9wTW9uaXRvcmluZyhjaGFubmVsTmFtZSkge1xuXHRcdGNvbnN0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbHMuZ2V0KGNoYW5uZWxOYW1lKTtcblx0XHRpZiAoaW50ZXJ2YWwpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5pbnRlcnZhbHMuZGVsZXRlKGNoYW5uZWxOYW1lKTtcblx0XHR9XG5cdFx0dGhpcy5oZWFsdGhDaGVja3MuZGVsZXRlKGNoYW5uZWxOYW1lKTtcblx0XHR0aGlzLmhlYWx0aFN0YXR1cy5kZWxldGUoY2hhbm5lbE5hbWUpO1xuXHR9XG5cdHN0b3BBbGxNb25pdG9yaW5nKCkge1xuXHRcdGZvciAoY29uc3QgaW50ZXJ2YWwgb2YgdGhpcy5pbnRlcnZhbHMudmFsdWVzKCkpIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdHRoaXMuaW50ZXJ2YWxzLmNsZWFyKCk7XG5cdFx0dGhpcy5oZWFsdGhDaGVja3MuY2xlYXIoKTtcblx0XHR0aGlzLmhlYWx0aFN0YXR1cy5jbGVhcigpO1xuXHR9XG59O1xudmFyIGdsb2JhbENoYW5uZWxIZWFsdGhNb25pdG9yID0gbmV3IENoYW5uZWxIZWFsdGhNb25pdG9yKCk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9VcHNlcnQudHNcbldlYWtNYXAucHJvdG90eXBlLmdldE9ySW5zZXJ0ID8/PSBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuXHRpZiAoIXRoaXMuaGFzKGtleSkpIHRoaXMuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcblx0cmV0dXJuIHRoaXMuZ2V0KGtleSk7XG59O1xuV2Vha01hcC5wcm90b3R5cGUuZ2V0T3JJbnNlcnRDb21wdXRlZCA/Pz0gZnVuY3Rpb24oa2V5LCBjYWxsYmFja0Z1bmN0aW9uKSB7XG5cdGlmICghdGhpcy5oYXMoa2V5KSkgdGhpcy5zZXQoa2V5LCBjYWxsYmFja0Z1bmN0aW9uKGtleSkpO1xuXHRyZXR1cm4gdGhpcy5nZXQoa2V5KTtcbn07XG5NYXAucHJvdG90eXBlLmdldE9ySW5zZXJ0ID8/PSBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuXHRpZiAoIXRoaXMuaGFzKGtleSkpIHRoaXMuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcblx0cmV0dXJuIHRoaXMuZ2V0KGtleSk7XG59O1xuTWFwLnByb3RvdHlwZS5nZXRPckluc2VydENvbXB1dGVkID8/PSBmdW5jdGlvbihrZXksIGNhbGxiYWNrRnVuY3Rpb24pIHtcblx0aWYgKCF0aGlzLmhhcyhrZXkpKSB0aGlzLnNldChrZXksIGNhbGxiYWNrRnVuY3Rpb24oa2V5KSk7XG5cdHJldHVybiB0aGlzLmdldChrZXkpO1xufTtcbnZhciBnZXRPckluc2VydCA9IChtYXAsIGtleSwgZGVmYXVsdFZhbHVlID0gKCkgPT4gbnVsbCkgPT4ge1xuXHRpZiAoIW1hcD8uaGFzPy4oa2V5KSkgbWFwPy5zZXQ/LihrZXksIGRlZmF1bHRWYWx1ZT8uKCkpO1xuXHRyZXR1cm4gbWFwPy5nZXQ/LihrZXkpO1xufTtcbnZhciBnZXRPckluc2VydENvbXB1dGVkID0gKG1hcCwga2V5LCBjYWxsYmFja0Z1bmN0aW9uID0gKCkgPT4gbnVsbCkgPT4ge1xuXHRpZiAoIW1hcD8uaGFzPy4oa2V5KSkgbWFwPy5zZXQ/LihrZXksIGNhbGxiYWNrRnVuY3Rpb24/LihrZXkpKTtcblx0cmV0dXJuIG1hcD8uZ2V0Py4oa2V5KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9QcmltaXRpdmUudHNcbnZhciAkZnh5ID0gU3ltYm9sLmZvcihcIkBmaXhcIik7XG52YXIgaXNIYXNQcmltaXRpdmVzID0gKG9ic2VydmFibGUpID0+IHtcblx0cmV0dXJuIG9ic2VydmFibGU/LnNvbWU/Lihpc1ByaW1pdGl2ZSk7XG59O1xudmFyIGlzT2JzZXJ2YWJsZSA9IChvYnNlcnZhYmxlKSA9PiB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KG9ic2VydmFibGUpIHx8IG9ic2VydmFibGUgaW5zdGFuY2VvZiBTZXQgfHwgb2JzZXJ2YWJsZSBpbnN0YW5jZW9mIE1hcDtcbn07XG52YXIgaXNQcmltaXRpdmUgPSAob2JqKSA9PiB7XG5cdHJldHVybiB0eXBlb2Ygb2JqID09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG9iaiA9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBvYmogPT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIG9iaiA9PSBcImJpZ2ludFwiIHx8IHR5cGVvZiBvYmogPT0gXCJ1bmRlZmluZWRcIiB8fCBvYmogPT0gbnVsbDtcbn07XG52YXIgdHJ5UGFyc2VCeUhpbnQgPSAodmFsdWUsIGhpbnQpID0+IHtcblx0aWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpIHJldHVybiBudWxsO1xuXHRpZiAoaGludCA9PSBcIm51bWJlclwiKSByZXR1cm4gTnVtYmVyKHZhbHVlKSB8fCAwO1xuXHRpZiAoaGludCA9PSBcInN0cmluZ1wiKSByZXR1cm4gU3RyaW5nKHZhbHVlKSB8fCBcIlwiO1xuXHRpZiAoaGludCA9PSBcImJvb2xlYW5cIikgcmV0dXJuICEhdmFsdWU7XG5cdHJldHVybiB2YWx1ZTtcbn07XG52YXIgaGFzUHJvcGVydHkgPSAodiwgcHJvcCA9IFwidmFsdWVcIikgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiB2ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHYgPT0gXCJmdW5jdGlvblwiKSAmJiB2ICE9IG51bGwgJiYgKHByb3AgaW4gdiB8fCB2Py5bcHJvcF0gIT0gbnVsbCk7XG59O1xudmFyIGhhc1ZhbHVlID0gKHYpID0+IHtcblx0cmV0dXJuIGhhc1Byb3BlcnR5KHYsIFwidmFsdWVcIik7XG59O1xudmFyICRnZXRWYWx1ZSA9ICgkb2JqT3JQbGFpbikgPT4ge1xuXHRpZiAoaXNQcmltaXRpdmUoJG9iak9yUGxhaW4pKSByZXR1cm4gJG9iak9yUGxhaW47XG5cdHJldHVybiBoYXNWYWx1ZSgkb2JqT3JQbGFpbikgPyAkb2JqT3JQbGFpbj8udmFsdWUgOiAkb2JqT3JQbGFpbjtcbn07XG52YXIgdW53cmFwID0gKG9iaiwgZmFsbGJhY2spID0+IHtcblx0cmV0dXJuIG9iaj8uWyRmeHldID8/IChvYmogIT0gbnVsbCA/IG9iaiA6IGZhbGxiYWNrKSA/PyBmYWxsYmFjaztcbn07XG52YXIgZGVyZWYgPSAob2JqKSA9PiB7XG5cdGlmIChvYmogIT0gbnVsbCAmJiAodHlwZW9mIG9iaiA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT0gXCJmdW5jdGlvblwiKSAmJiAob2JqIGluc3RhbmNlb2YgV2Vha1JlZiB8fCB0eXBlb2Ygb2JqPy5kZXJlZiA9PSBcImZ1bmN0aW9uXCIpKSByZXR1cm4gZGVyZWYob2JqPy5kZXJlZj8uKCkpO1xuXHRyZXR1cm4gb2JqO1xufTtcbnZhciBmaXhGeCA9IChvYmopID0+IHtcblx0aWYgKHR5cGVvZiBvYmogPT0gXCJmdW5jdGlvblwiIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuXHRjb25zdCBmeCA9IGZ1bmN0aW9uKCkge307XG5cdGZ4WyRmeHldID0gb2JqO1xuXHRyZXR1cm4gZng7XG59O1xudmFyICRzZXQgPSAocnYsIGtleSwgdmFsKSA9PiB7XG5cdHJ2ID0gZGVyZWYocnYpO1xuXHRpZiAocnYgIT0gbnVsbCAmJiAodHlwZW9mIHJ2ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHJ2ID09IFwiZnVuY3Rpb25cIikpIHJldHVybiBydltrZXldID0gJGdldFZhbHVlKHZhbCA9IGRlcmVmKHZhbCkpO1xuXHRyZXR1cm4gcnY7XG59O1xudmFyIGdldFJhbmRvbVZhbHVlcyA9IChhcnJheSkgPT4ge1xuXHRyZXR1cm4gY3J5cHRvPy5nZXRSYW5kb21WYWx1ZXMgPyBjcnlwdG8/LmdldFJhbmRvbVZhbHVlcz8uKGFycmF5KSA6ICgoKSA9PiB7XG5cdFx0Y29uc3QgdmFsdWVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkubGVuZ3RoKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB2YWx1ZXNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xuXHRcdHJldHVybiB2YWx1ZXM7XG5cdH0pKCk7XG59O1xuZnVuY3Rpb24gdmFsdWVDbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufVxudmFyIGNsYW1wID0gKG1pbiwgdmFsLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsLCBtYXgpKTtcbnZhciB3aXRoQ3R4ID0gKHRhcmdldCwgZ290KSA9PiB7XG5cdGlmICh0eXBlb2YgZ290ID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdvdD8uYmluZD8uKHRhcmdldCkgPz8gZ290O1xuXHRyZXR1cm4gZ290O1xufTtcbnZhciBVVUlEdjQgPSAoKSA9PiBjcnlwdG8/LnJhbmRvbVVVSUQgPyBjcnlwdG8/LnJhbmRvbVVVSUQ/LigpIDogXCIxMDAwMDAwMC0xMDAwLTQwMDAtODAwMC0xMDAwMDAwMDAwMDBcIi5yZXBsYWNlKC9bMDE4XS9nLCAoYykgPT4gKCtjIF4gZ2V0UmFuZG9tVmFsdWVzPy4oLyogQF9fUFVSRV9fICovIG5ldyBVaW50OEFycmF5KDEpKT8uWzBdICYgMTUgPj4gK2MgLyA0KS50b1N0cmluZygxNikpO1xudmFyIGNhbWVsVG9LZWJhYiA9IChzdHIpID0+IHtcblx0aWYgKCFzdHIpIHJldHVybiBzdHI7XG5cdHJldHVybiBzdHI/LnJlcGxhY2U/LigvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpO1xufTtcbnZhciBrZWJhYlRvQ2FtZWwgPSAoc3RyKSA9PiB7XG5cdGlmICghc3RyKSByZXR1cm4gc3RyO1xuXHRyZXR1cm4gc3RyPy5yZXBsYWNlPy4oLy0oW2Etel0pL2csIChfLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufTtcbnZhciB0b0Zpbml0ZU51bWJlciA9ICh2YWx1ZSwgZmFsbGJhY2sgPSAwKSA9PiB7XG5cdGNvbnN0IG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKSA/IG51bWJlciA6IGZhbGxiYWNrO1xufTtcbnZhciBjbGFtcERpbWVuc2lvbiA9ICh2YWx1ZSwgbWF4KSA9PiB7XG5cdGlmICghTnVtYmVyLmlzRmluaXRlKG1heCkgfHwgbWF4IDw9IDApIHJldHVybiAwO1xuXHRpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiAwO1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIDApLCBtYXgpO1xufTtcbnZhciByb3VuZE5lYXJlc3QgPSAobnVtYmVyLCBOID0gMSkgPT4gTWF0aC5yb3VuZChudW1iZXIgKiBOKSAvIE47XG52YXIgZmxvb3JOZWFyZXN0ID0gKG51bWJlciwgTiA9IDEpID0+IE1hdGguZmxvb3IobnVtYmVyICogTikgLyBOO1xudmFyIGNlaWxOZWFyZXN0ID0gKG51bWJlciwgTiA9IDEpID0+IE1hdGguY2VpbChudW1iZXIgKiBOKSAvIE47XG52YXIgaXNWYWx1ZVVuaXQgPSAodmFsKSA9PiB0eXBlb2YgQ1NTU3R5bGVWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWwgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIGlzVmFsID0gKHYpID0+IHYgIT0gbnVsbCAmJiAodHlwZW9mIHYgPT0gXCJib29sZWFuXCIgPyB2ICE9PSBmYWxzZSA6IHRydWUpICYmIHR5cGVvZiB2ICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHYgIT0gXCJmdW5jdGlvblwiO1xudmFyIG5vcm1hbGl6ZVByaW1pdGl2ZSA9ICh2YWwpID0+IHtcblx0cmV0dXJuIHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPyBcIlwiIDogbnVsbCA6IHR5cGVvZiB2YWwgPT0gXCJudW1iZXJcIiA/IFN0cmluZyh2YWwpIDogdmFsO1xufTtcbnZhciAkdHJpZ2dlckxvY2sgPSBTeW1ib2wuZm9yKFwiQHRyaWdnZXItbG9ja1wiKTtcbnZhciAkYXZvaWRUcmlnZ2VyID0gKHJlZiwgY2IsICRwcm9wID0gXCJ2YWx1ZVwiKSA9PiB7XG5cdGlmIChoYXNQcm9wZXJ0eShyZWYsICRwcm9wKSkgcmVmWyR0cmlnZ2VyTG9ja10gPSB0cnVlO1xuXHRsZXQgcmVzdWx0O1xuXHR0cnkge1xuXHRcdHJlc3VsdCA9IGNiPy4oKTtcblx0fSBmaW5hbGx5IHtcblx0XHRpZiAoaGFzUHJvcGVydHkocmVmLCAkcHJvcCkpIGRlbGV0ZSByZWZbJHRyaWdnZXJMb2NrXTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbnZhciB0cnlTdHJpbmdBc051bWJlciA9ICh2YWwpID0+IHtcblx0aWYgKHR5cGVvZiB2YWwgIT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG5cdGNvbnN0IG1hdGNoZXMgPSBbLi4udmFsPy5tYXRjaEFsbD8uKC9eXFxkKyhcXC5cXGQrKT8kL2cpXTtcblx0aWYgKG1hdGNoZXM/Lmxlbmd0aCAhPSAxKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgdHJpZWRUb1BhcnNlID0gcGFyc2VGbG9hdChtYXRjaGVzWzBdWzBdKTtcblx0aWYgKCFOdW1iZXIuaXNOYU4odHJpZWRUb1BhcnNlKSAmJiBOdW1iZXIuaXNGaW5pdGUodHJpZWRUb1BhcnNlKSkgcmV0dXJuIHRyaWVkVG9QYXJzZTtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIElOVEVHRVJfUkVHRVhQID0gL15cXGQrJC9nO1xudmFyIHRyeVN0cmluZ0FzSW50ZWdlciA9ICh2YWwpID0+IHtcblx0aWYgKHR5cGVvZiB2YWwgIT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG5cdHZhbCA9IHZhbD8udHJpbT8uKCk7XG5cdGlmICh2YWwgPT0gXCJcIiB8fCB2YWwgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IG1hdGNoZXMgPSBbLi4udmFsPy5tYXRjaEFsbD8uKElOVEVHRVJfUkVHRVhQKV07XG5cdGlmIChtYXRjaGVzPy5sZW5ndGggIT0gMSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHRyaWVkVG9QYXJzZSA9IHBhcnNlSW50KG1hdGNoZXNbMF1bMF0pO1xuXHRpZiAoIU51bWJlci5pc05hTih0cmllZFRvUGFyc2UpICYmIE51bWJlci5pc0ludGVnZXIodHJpZWRUb1BhcnNlKSkgcmV0dXJuIHRyaWVkVG9QYXJzZTtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGlzVmFsaWROdW1iZXIgPSAodmFsKSA9PiB7XG5cdHJldHVybiB0eXBlb2YgdmFsID09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2YWwpO1xufTtcbnZhciBjYW5CZUludGVnZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSByZXR1cm4gdHJ5U3RyaW5nQXNJbnRlZ2VyKHZhbHVlKSAhPSBudWxsO1xuXHRlbHNlIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiB2YWx1ZSA+PSAwO1xufTtcbnZhciBpc0FycmF5T3JJdGVyYWJsZSA9IChvYmopID0+IEFycmF5LmlzQXJyYXkob2JqKSB8fCBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9ialtTeW1ib2wuaXRlcmF0b3JdID09IFwiZnVuY3Rpb25cIjtcbnZhciBoYW5kbGVMaXN0ZW5lcnMgPSAocm9vdCwgZm4sIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdGNvbnN0IHVzdWJzID0gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IHJvb3Q/Lltmbl0/LmNhbGw/Lihyb290LCBuYW1lLCBjYikpO1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdHVzdWJzPy5mb3JFYWNoPy4oKHVuc3ViKSA9PiB1bnN1Yj8uKCkpO1xuXHR9O1xufTtcbnZhciBpc1JlZiA9IChyZWYpID0+IHtcblx0cmV0dXJuIHJlZiBpbnN0YW5jZW9mIFdlYWtSZWYgfHwgdHlwZW9mIHJlZj8uZGVyZWYgPT0gXCJmdW5jdGlvblwiO1xufTtcbnZhciB1bnJlZiA9IChyZWYpID0+IHtcblx0cmV0dXJuIGlzUmVmKHJlZikgPyBkZXJlZihyZWYpIDogcmVmO1xufTtcbnZhciB0b1JlZiA9IChyZWYpID0+IHtcblx0cmV0dXJuIHJlZiAhPSBudWxsID8gaXNSZWYocmVmKSA/IHJlZiA6IHR5cGVvZiByZWYgPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWYgPT0gXCJvYmplY3RcIiA/IG5ldyBXZWFrUmVmKHJlZikgOiByZWYgOiByZWY7XG59O1xudmFyIGlzVmFsdWVSZWYgPSAoZXhpc3RzKSA9PiB7XG5cdHJldHVybiAodHlwZW9mIGV4aXN0cyA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBleGlzdHMgPT0gXCJmdW5jdGlvblwiKSAmJiAoZXhpc3RzPy52YWx1ZSAhPSBudWxsIHx8IGV4aXN0cyAhPSBudWxsICYmIFwidmFsdWVcIiBpbiBleGlzdHMpO1xufTtcbnZhciBpc09iamVjdCA9IChleGlzdHMpID0+IHtcblx0cmV0dXJuIGV4aXN0cyAhPSBudWxsICYmICh0eXBlb2YgZXhpc3RzID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGV4aXN0cyA9PSBcImZ1bmN0aW9uXCIpO1xufTtcbnZhciBnZXRWYWx1ZSA9ICh2YWwpID0+IHtcblx0cmV0dXJuIGhhc1ZhbHVlKHZhbCkgPyB2YWw/LnZhbHVlIDogdmFsO1xufTtcbnZhciBwb3RlbnRpYWxseUFzeW5jID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmIChwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRlbHNlIHJldHVybiBjYj8uKHByb21pc2UpO1xufTtcbnZhciBwb3RlbnRpYWxseUFzeW5jTWFwID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmIChwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRlbHNlIHJldHVybiBjYj8uKHByb21pc2UpO1xufTtcbnZhciBtYWtlVHJpZ2dlckxlc3MgPSBmdW5jdGlvbihzZWxmKSB7XG5cdHJldHVybiAoY2IpID0+IHtcblx0XHRzZWxmWyR0cmlnZ2VyTG9ja10gPSB0cnVlO1xuXHRcdGxldCByZXN1bHQ7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IGNiPy4oKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2VsZlskdHJpZ2dlckxvY2tdID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59O1xudmFyIHVud3JhcEFycmF5ID0gKGFycikgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyPy5mbGF0TWFwPy4oKGVsKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZWwpKSByZXR1cm4gdW53cmFwQXJyYXkoZWwpO1xuXHRcdHJldHVybiBlbDtcblx0fSk7XG5cdGVsc2UgcmV0dXJuIGFycjtcbn07XG52YXIgaXNOb3RDb21wbGV4QXJyYXkgPSAoYXJyKSA9PiB7XG5cdHJldHVybiB1bndyYXBBcnJheShhcnIpPy5ldmVyeT8uKGlzQ2FuSnVzdFJldHVybik7XG59O1xudmFyIGlzQ2FuSnVzdFJldHVybiA9IChvYmopID0+IHtcblx0cmV0dXJuIGlzUHJpbWl0aXZlKG9iaikgfHwgdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09IFwiZnVuY3Rpb25cIiAmJiBvYmogaW5zdGFuY2VvZiBTaGFyZWRBcnJheUJ1ZmZlciB8fCBpc1R5cGVkQXJyYXkob2JqKSB8fCBBcnJheS5pc0FycmF5KG9iaikgJiYgaXNOb3RDb21wbGV4QXJyYXkob2JqKTtcbn07XG52YXIgaXNUeXBlZEFycmF5ID0gKHZhbHVlKSA9PiB7XG5cdHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59O1xudmFyIGlzU3ltYm9sID0gKHN5bSkgPT4gdHlwZW9mIHN5bSA9PT0gXCJzeW1ib2xcIiB8fCB0eXBlb2Ygc3ltID09IFwib2JqZWN0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgPT0gXCJbb2JqZWN0IFN5bWJvbF1cIjtcbnZhciBpc1Byb21pc2UgPSAodGFyZ2V0KSA9PiB7XG5cdHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiB0YXJnZXQ/LnRoZW4gPT0gXCJmdW5jdGlvblwiO1xufTtcbnZhciBpc0NhblRyYW5zZmVyID0gKG9iaikgPT4ge1xuXHRyZXR1cm4gaXNQcmltaXRpdmUob2JqKSB8fCB0eXBlb2YgQXJyYXlCdWZmZXIgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IHR5cGVvZiBNZXNzYWdlUG9ydCA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgTWVzc2FnZVBvcnQgfHwgdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09IFwiZnVuY3Rpb25cIiAmJiBvYmogaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbSB8fCB0eXBlb2YgV3JpdGFibGVTdHJlYW0gPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIFdyaXRhYmxlU3RyZWFtIHx8IHR5cGVvZiBUcmFuc2Zvcm1TdHJlYW0gPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIFRyYW5zZm9ybVN0cmVhbSB8fCB0eXBlb2YgSW1hZ2VCaXRtYXAgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIEltYWdlQml0bWFwIHx8IHR5cGVvZiBWaWRlb0ZyYW1lID09IFwiZnVuY3Rpb25cIiAmJiBvYmogaW5zdGFuY2VvZiBWaWRlb0ZyYW1lIHx8IHR5cGVvZiBPZmZzY3JlZW5DYW52YXMgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcyB8fCB0eXBlb2YgUlRDRGF0YUNoYW5uZWwgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIFJUQ0RhdGFDaGFubmVsIHx8IHR5cGVvZiBBdWRpb0RhdGEgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIEF1ZGlvRGF0YSB8fCB0eXBlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbSA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbSB8fCB0eXBlb2YgV2ViVHJhbnNwb3J0U2VuZFN0cmVhbSA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgV2ViVHJhbnNwb3J0U2VuZFN0cmVhbSB8fCB0eXBlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbSA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbTtcbn07XG52YXIgZGVmYXVsdEJ5VHlwZSA9IChhKSA9PiB7XG5cdHN3aXRjaCAodHlwZW9mIGEpIHtcblx0XHRjYXNlIFwibnVtYmVyXCI6IHJldHVybiAwO1xuXHRcdGNhc2UgXCJzdHJpbmdcIjogcmV0dXJuIFwiXCI7XG5cdFx0Y2FzZSBcImJvb2xlYW5cIjogcmV0dXJuIGZhbHNlO1xuXHRcdGNhc2UgXCJvYmplY3RcIjogcmV0dXJuIG51bGw7XG5cdFx0Y2FzZSBcImZ1bmN0aW9uXCI6IHJldHVybiBudWxsO1xuXHRcdGNhc2UgXCJzeW1ib2xcIjogcmV0dXJuIG51bGw7XG5cdFx0Y2FzZSBcImJpZ2ludFwiOiByZXR1cm4gMG47XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9PYmplY3QudHNcbnZhciBpc0l0ZXJhYmxlID0gKG9iaikgPT4gdHlwZW9mIG9iaj8uW1N5bWJvbC5pdGVyYXRvcl0gPT0gXCJmdW5jdGlvblwiO1xudmFyIGlzS2V5VHlwZSA9IChwcm9wKSA9PiBbXG5cdFwic3ltYm9sXCIsXG5cdFwic3RyaW5nXCIsXG5cdFwibnVtYmVyXCJcbl0uaW5kZXhPZih0eXBlb2YgcHJvcCkgPj0gMDtcbnZhciBpc1ZhbGlkT2JqID0gKG9iaikgPT4ge1xuXHRyZXR1cm4gb2JqICE9IG51bGwgJiYgKHR5cGVvZiBvYmogPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBvYmogPT0gXCJvYmplY3RcIikgJiYgIShvYmogaW5zdGFuY2VvZiBXZWFrUmVmKTtcbn07XG52YXIgbWVyZ2VCeUtleSA9IChpdGVtcywga2V5ID0gXCJpZFwiKSA9PiB7XG5cdGNvbnN0IGVudHJpZXMgPSBBcnJheS5mcm9tKGl0ZW1zPy52YWx1ZXM/LigpKS5tYXAoKEkpID0+IFtJPy5ba2V5XSwgSV0pO1xuXHRjb25zdCBtYXAgPSBuZXcgTWFwKGVudHJpZXMpO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShtYXA/LnZhbHVlcz8uKCkgfHwgW10pO1xufTtcbnZhciByZW1vdmVFeHRyYSA9ICh0YXJnZXQsIHZhbHVlLCBuYW1lID0gbnVsbCkgPT4ge1xuXHRjb25zdCBleGlzdHMgPSBuYW1lICE9IG51bGwgJiYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ID09IFwiZnVuY3Rpb25cIikgPyB0YXJnZXQ/LltuYW1lXSA/PyB0YXJnZXQgOiB0YXJnZXQ7XG5cdGxldCBlbnRyaWVzID0gW107XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNldCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE1hcCB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc0l0ZXJhYmxlKHZhbHVlKSkgZW50cmllcyA9IChleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha1NldCA/IHZhbHVlPy52YWx1ZXM/LigpIDogdmFsdWU/LmVudHJpZXM/LigpKSB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNJdGVyYWJsZSh2YWx1ZSkgPyB2YWx1ZSA6IFtdKTtcblx0ZWxzZSBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikgZW50cmllcyA9IGV4aXN0cyBpbnN0YW5jZW9mIFNldCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrU2V0ID8gT2JqZWN0LnZhbHVlcyh2YWx1ZSkgOiBPYmplY3QuZW50cmllcyh2YWx1ZSk7XG5cdGxldCBleEVudHJpZXMgPSBbXTtcblx0aWYgKEFycmF5LmlzQXJyYXkoZXhpc3RzKSkgZXhFbnRyaWVzID0gZXhpc3RzLmVudHJpZXMoKTtcblx0ZWxzZSBpZiAoZXhpc3RzIGluc3RhbmNlb2YgTWFwIHx8IGV4aXN0cyBpbnN0YW5jZW9mIFdlYWtNYXApIGV4RW50cmllcyA9IGV4aXN0cz8uZW50cmllcz8uKCk7XG5cdGVsc2UgaWYgKGV4aXN0cyBpbnN0YW5jZW9mIFNldCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrU2V0KSBleEVudHJpZXMgPSBleGlzdHM/LnZhbHVlcz8uKCk7XG5cdGVsc2UgaWYgKHR5cGVvZiBleGlzdHMgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZXhpc3RzID09IFwiZnVuY3Rpb25cIikgZXhFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZXhpc3RzKTtcblx0Y29uc3Qga2V5cyA9IG5ldyBTZXQoQXJyYXkuZnJvbShlbnRyaWVzKS5tYXAoKGUpID0+IGU/LlswXSkpO1xuXHRjb25zdCBleGUgPSBuZXcgU2V0KEFycmF5LmZyb20oZXhFbnRyaWVzKS5tYXAoKGUpID0+IGU/LlswXSkpO1xuXHRjb25zdCBleGNsdWRlID0ga2V5cz8uZGlmZmVyZW5jZT8uKGV4ZSk7XG5cdGlmIChBcnJheS5pc0FycmF5KGV4aXN0cykpIHtcblx0XHRjb25zdCBudyA9IGV4aXN0cy5maWx0ZXIoKF8sIEkpID0+ICFleGNsdWRlLmhhcyhJKSk7XG5cdFx0ZXhpc3RzLnNwbGljZSgwLCBleGlzdHMubGVuZ3RoKTtcblx0XHRleGlzdHMucHVzaCguLi5udyk7XG5cdH0gZWxzZSBpZiAoZXhpc3RzIGluc3RhbmNlb2YgTWFwIHx8IGV4aXN0cyBpbnN0YW5jZW9mIFNldCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrTWFwIHx8IGV4aXN0cyBpbnN0YW5jZW9mIFdlYWtTZXQpIGZvciAoY29uc3QgayBvZiBleGNsdWRlKSBleGlzdHMuZGVsZXRlKGspO1xuXHRlbHNlIGlmICh0eXBlb2YgZXhpc3RzID09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgZXhpc3RzID09IFwib2JqZWN0XCIpIGZvciAoY29uc3QgayBvZiBleGNsdWRlKSBkZWxldGUgZXhpc3RzW2tdO1xuXHRyZXR1cm4gZXhpc3RzO1xufTtcbnZhciBvYmplY3RBc3NpZ24gPSAodGFyZ2V0LCB2YWx1ZSwgbmFtZSA9IG51bGwsIHJlbW92ZU5vdEV4aXN0cyA9IHRydWUsIG1lcmdlS2V5ID0gXCJpZFwiKSA9PiB7XG5cdGNvbnN0IGV4aXN0cyA9IG5hbWUgIT0gbnVsbCAmJiAodHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiKSA/IHRhcmdldD8uW25hbWVdID8/IHRhcmdldCA6IHRhcmdldDtcblx0bGV0IGVudHJpZXMgPSBudWxsO1xuXHRpZiAocmVtb3ZlTm90RXhpc3RzKSByZW1vdmVFeHRyYShleGlzdHMsIHZhbHVlKTtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgU2V0IHx8IHZhbHVlIGluc3RhbmNlb2YgTWFwIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzSXRlcmFibGUodmFsdWUpKSBlbnRyaWVzID0gKGV4aXN0cyBpbnN0YW5jZW9mIFNldCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrU2V0ID8gdmFsdWU/LnZhbHVlcz8uKCkgOiB2YWx1ZT8uZW50cmllcz8uKCkpIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc0l0ZXJhYmxlKHZhbHVlKSA/IHZhbHVlIDogW10pO1xuXHRlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdmFsdWUgPT0gXCJmdW5jdGlvblwiKSBlbnRyaWVzID0gZXhpc3RzIGluc3RhbmNlb2YgU2V0IHx8IGV4aXN0cyBpbnN0YW5jZW9mIFdlYWtTZXQgPyBPYmplY3QudmFsdWVzKHZhbHVlKSA6IE9iamVjdC5lbnRyaWVzKHZhbHVlKTtcblx0aWYgKGV4aXN0cyAmJiBlbnRyaWVzICYmICh0eXBlb2YgZW50cmllcyA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlbnRyaWVzID09IFwiZnVuY3Rpb25cIikpIHtcblx0XHRpZiAoZXhpc3RzIGluc3RhbmNlb2YgTWFwIHx8IGV4aXN0cyBpbnN0YW5jZW9mIFdlYWtNYXApIHtcblx0XHRcdGZvciAoY29uc3QgRSBvZiBlbnRyaWVzKSBleGlzdHMuc2V0KC4uLkUpO1xuXHRcdFx0cmV0dXJuIGV4aXN0cztcblx0XHR9XG5cdFx0aWYgKGV4aXN0cyBpbnN0YW5jZW9mIFNldCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrU2V0KSB7XG5cdFx0XHRmb3IgKGNvbnN0IEUgb2YgZW50cmllcykge1xuXHRcdFx0XHRjb25zdCBtZXJnZU9iaiA9IEU/LlttZXJnZUtleV0gPyBBcnJheS5mcm9tKGV4aXN0cz8udmFsdWVzPy4oKSB8fCBbXSkuZmluZCgoSSkgPT4gIWlzTm90RXF1YWw/LihJPy5bbWVyZ2VLZXldLCBFPy5bbWVyZ2VLZXldKSkgOiBudWxsO1xuXHRcdFx0XHRpZiAobWVyZ2VPYmogIT0gbnVsbCkgb2JqZWN0QXNzaWduKG1lcmdlT2JqLCBFLCBudWxsLCByZW1vdmVOb3RFeGlzdHMsIG1lcmdlS2V5KTtcblx0XHRcdFx0ZWxzZSBleGlzdHMuYWRkKEUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV4aXN0cztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBleGlzdHMgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZXhpc3RzID09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoZXhpc3RzKSB8fCBpc0l0ZXJhYmxlKGV4aXN0cykpIHtcblx0XHRcdFx0bGV0IEkgPSAwO1xuXHRcdFx0XHRmb3IgKGNvbnN0IEUgb2YgZW50cmllcykgaWYgKEkgPCBleGlzdHMubGVuZ3RoKSBleGlzdHNbSSsrXSA9IEU/LlsxXTtcblx0XHRcdFx0ZWxzZSBleGlzdHM/LnB1c2g/LihFPy5bMV0pO1xuXHRcdFx0XHRyZXR1cm4gZXhpc3RzO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oZXhpc3RzLCBPYmplY3QuZnJvbUVudHJpZXMoWy4uLmVudHJpZXMgfHwgW11dLmZpbHRlcigoSykgPT4gdHlwZW9mIEsgIT0gXCJzeW1ib2xcIikpKTtcblx0XHR9XG5cdH1cblx0aWYgKG5hbWUgIT0gbnVsbCkge1xuXHRcdFJlZmxlY3Quc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpO1xuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB2YWx1ZSk7XG5cdHJldHVybiB2YWx1ZTtcbn07XG52YXIgYmluZEZ4ID0gKHRhcmdldCwgZngpID0+IHtcblx0cmV0dXJuIGJvdW5kQ3R4LmdldE9ySW5zZXJ0KHRhcmdldCwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpLmdldE9ySW5zZXJ0KGZ4LCBmeD8uYmluZD8uKHRhcmdldCkpO1xufTtcbnZhciBiaW5kQ3R4ID0gKHRhcmdldCwgZngpID0+ICh0eXBlb2YgZnggPT0gXCJmdW5jdGlvblwiID8gYmluZEZ4KHRhcmdldCwgZngpIDogZngpID8/IGZ4O1xudmFyIGNhbGxCeVByb3AgPSAodW53cmFwLCBwcm9wLCBjYiwgY3R4KSA9PiB7XG5cdGlmIChwcm9wID09IFN5bWJvbC5pdGVyYXRvcikgcmV0dXJuIGNhbGxCeUFsbFByb3AodW53cmFwLCBjYiwgY3R4KTtcblx0aWYgKHByb3AgPT0gbnVsbCB8fCB0eXBlb2YgcHJvcCA9PSBcInN5bWJvbFwiIHx8IHR5cGVvZiBwcm9wID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHByb3AgPT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdGNvbnN0IGNhbGxJZk5vdE51bGwgPSAodiwgLi4uYXJncykgPT4ge1xuXHRcdGlmICh2ICE9IG51bGwpIHJldHVybiBjYj8uKHYsIC4uLmFyZ3MpO1xuXHR9O1xuXHRpZiAodW53cmFwIGluc3RhbmNlb2YgTWFwIHx8IHVud3JhcCBpbnN0YW5jZW9mIFdlYWtNYXApIHtcblx0XHRpZiAodW53cmFwLmhhcyhwcm9wKSkgcmV0dXJuIGNhbGxJZk5vdE51bGw/Lih1bndyYXAuZ2V0KHByb3ApLCBwcm9wLCBudWxsLCBcIkBzZXRcIik7XG5cdH0gZWxzZSBpZiAodW53cmFwIGluc3RhbmNlb2YgU2V0IHx8IHVud3JhcCBpbnN0YW5jZW9mIFdlYWtTZXQpIHtcblx0XHRpZiAodW53cmFwLmhhcyhwcm9wKSkgcmV0dXJuIGNhbGxJZk5vdE51bGw/Lihwcm9wLCBwcm9wLCBudWxsLCBcIkBhZGRcIik7XG5cdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh1bndyYXApICYmIHR5cGVvZiBwcm9wID09IFwic3RyaW5nXCIgJiYgWy4uLnByb3A/Lm1hdGNoQWxsPy4oL15cXGQrJC9nKV0ubGVuZ3RoID09IDEgJiYgTnVtYmVyLmlzSW50ZWdlcih0eXBlb2YgcHJvcCA9PSBcInN0cmluZ1wiID8gcGFyc2VJbnQocHJvcCkgOiBwcm9wKSkge1xuXHRcdGNvbnN0IGluZGV4ID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KHByb3ApIDogcHJvcDtcblx0XHRyZXR1cm4gY2FsbElmTm90TnVsbD8uKHVud3JhcD8uW2luZGV4XSwgaW5kZXgsIG51bGwsIFwiQGFkZFwiKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgdW53cmFwID09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgdW53cmFwID09IFwib2JqZWN0XCIpIHJldHVybiBjYWxsSWZOb3ROdWxsPy4odW53cmFwPy5bcHJvcF0sIHByb3AsIG51bGwsIFwiQHNldFwiKTtcbn07XG52YXIgb2JqZWN0QXNzaWduTm90RXF1YWwgPSAoZHN0LCBzcmMgPSB7fSkgPT4ge1xuXHRPYmplY3QuZW50cmllcyhzcmMpPy5mb3JFYWNoPy4oKFtrLCB2XSkgPT4ge1xuXHRcdGlmIChpc05vdEVxdWFsKHYsIGRzdFtrXSkpIGRzdFtrXSA9IHY7XG5cdH0pO1xuXHRyZXR1cm4gZHN0O1xufTtcbnZhciBjYWxsQnlBbGxQcm9wID0gKHVud3JhcCwgY2IsIGN0eCkgPT4ge1xuXHRpZiAodW53cmFwID09IG51bGwpIHJldHVybjtcblx0bGV0IGtleXMgPSBbXTtcblx0aWYgKHVud3JhcCBpbnN0YW5jZW9mIFNldCB8fCB1bndyYXAgaW5zdGFuY2VvZiBNYXAgfHwgdHlwZW9mIHVud3JhcD8ua2V5cyA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBbLi4udW53cmFwPy5rZXlzPy4oKSB8fCBrZXlzXS5mb3JFYWNoPy4oKHByb3ApID0+IGNhbGxCeVByb3AodW53cmFwLCBwcm9wLCBjYiwgY3R4KSk7XG5cdGlmIChBcnJheS5pc0FycmF5KHVud3JhcCkgfHwgaXNJdGVyYWJsZSh1bndyYXApKSByZXR1cm4gWy4uLnVud3JhcF0uZm9yRWFjaD8uKCh2LCBJKSA9PiBjYWxsQnlQcm9wKHVud3JhcCwgSSwgY2IsIGN0eCkpO1xuXHRpZiAodHlwZW9mIHVud3JhcCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB1bndyYXAgPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gWy4uLk9iamVjdC5rZXlzKHVud3JhcCkgfHwga2V5c10uZm9yRWFjaD8uKChwcm9wKSA9PiBjYWxsQnlQcm9wKHVud3JhcCwgcHJvcCwgY2IsIGN0eCkpO1xufTtcbnZhciBpc09iamVjdE5vdEVxdWFsID0gKGEsIGIpID0+IHtcblx0aWYgKGEgPT0gbnVsbCAmJiBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiB0cnVlO1xuXHRpZiAoYSBpbnN0YW5jZW9mIE1hcCB8fCBhIGluc3RhbmNlb2YgV2Vha01hcCkgcmV0dXJuIGEuc2l6ZSAhPSBiLnNpemUgfHwgQXJyYXkuZnJvbShhLmVudHJpZXMoKSkuc29tZSgoW2ssIHZdKSA9PiAhYi5oYXMoaykgfHwgIWlzTm90RXF1YWwodiwgYi5nZXQoaykpKTtcblx0aWYgKGEgaW5zdGFuY2VvZiBTZXQgfHwgYSBpbnN0YW5jZW9mIFdlYWtTZXQpIHJldHVybiBhLnNpemUgIT0gYi5zaXplIHx8IEFycmF5LmZyb20oYS52YWx1ZXMoKSkuc29tZSgodikgPT4gIWIuaGFzKHYpKTtcblx0aWYgKEFycmF5LmlzQXJyYXkoYSkgfHwgQXJyYXkuaXNBcnJheShiKSkgcmV0dXJuIGEubGVuZ3RoICE9IGIubGVuZ3RoIHx8IGEuc29tZSgodiwgaSkgPT4gIWlzTm90RXF1YWwodiwgYltpXSkpO1xuXHRpZiAodHlwZW9mIGEgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgYiA9PSBcIm9iamVjdFwiKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT0gSlNPTi5zdHJpbmdpZnkoYik7XG5cdHJldHVybiBhICE9IGI7XG59O1xudmFyIGlzTm90RXF1YWwgPSAoYSwgYikgPT4ge1xuXHRpZiAoYSA9PSBudWxsICYmIGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cdGlmICh0eXBlb2YgYSA9PSBcImJvb2xlYW5cIiAmJiB0eXBlb2YgYiA9PSBcImJvb2xlYW5cIikgcmV0dXJuIGEgIT0gYjtcblx0aWYgKHR5cGVvZiBhID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGIgPT0gXCJudW1iZXJcIikgcmV0dXJuICEoYSA9PSBiIHx8IE1hdGguYWJzKGEgLSBiKSA8IDFlLTkpO1xuXHRpZiAodHlwZW9mIGEgPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgYiA9PSBcInN0cmluZ1wiKSByZXR1cm4gYSAhPSBcIlwiICYmIGIgIT0gXCJcIiAmJiBhICE9IGIgfHwgYSAhPT0gYjtcblx0aWYgKHR5cGVvZiBhICE9IHR5cGVvZiBiKSByZXR1cm4gYSAhPT0gYjtcblx0cmV0dXJuIGEgJiYgYiAmJiBhICE9IGIgfHwgYSAhPT0gYjtcbn07XG52YXIgYm91bmRDdHhTeW1ib2wgPSBTeW1ib2wuZm9yKFwib2JqZWN0LmJvdW5kQ3R4XCIpO1xuZ2xvYmFsVGhpc1tib3VuZEN0eFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJvdW5kQ3R4ID0gZ2xvYmFsVGhpc1tib3VuZEN0eFN5bWJvbF07XG52YXIgaXNBcnJheUludmFsaWRLZXkgPSAoa2V5LCBzcmMpID0+IHtcblx0Y29uc3QgaW52YWxpZEZvckFycmF5ID0ga2V5ID09IG51bGwgfHwga2V5IDwgMCB8fCB0eXBlb2Yga2V5ICE9IFwibnVtYmVyXCIgfHwga2V5ID09IFN5bWJvbC5pdGVyYXRvciB8fCAoc3JjICE9IG51bGwgPyBrZXkgPj0gKHNyYz8ubGVuZ3RoIHx8IDApIDogZmFsc2UpO1xuXHRyZXR1cm4gc3JjICE9IG51bGwgPyBBcnJheS5pc0FycmF5KHNyYykgJiYgaW52YWxpZEZvckFycmF5IDogZmFsc2U7XG59O1xudmFyIGluUHJveHkgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBjb250ZXh0aWZ5ID0gKHBjLCBuYW1lKSA9PiB7XG5cdHJldHVybiB0eXBlb2YgcGM/LltuYW1lXSA9PSBcImZ1bmN0aW9uXCIgPyBwYz8uW25hbWVdPy5iaW5kPy4ocGMpIDogcGM/LltuYW1lXTtcbn07XG52YXIgZGVlcE9wZXJhdGVBbmRDbG9uZSA9IChvYmosIG9wZXJhdGlvbiwgJHByZXYpID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuXHRcdGlmIChvYmouZXZlcnkoaXNDYW5KdXN0UmV0dXJuKSkgcmV0dXJuIG9iai5tYXAob3BlcmF0aW9uKTtcblx0XHRyZXR1cm4gb2JqLm1hcCgodmFsdWUsIGluZGV4KSA9PiBkZWVwT3BlcmF0ZUFuZENsb25lKHZhbHVlLCBvcGVyYXRpb24sIFtvYmosIGluZGV4XSkpO1xuXHR9XG5cdGlmIChvYmogaW5zdGFuY2VvZiBNYXApIHtcblx0XHRjb25zdCBlbnRyaWVzID0gQXJyYXkuZnJvbShvYmouZW50cmllcygpKTtcblx0XHRpZiAoZW50cmllcy5tYXAoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUpLmV2ZXJ5KGlzQ2FuSnVzdFJldHVybikpIHJldHVybiBuZXcgTWFwKGVudHJpZXMubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIG9wZXJhdGlvbih2YWx1ZSwga2V5LCBvYmopXSkpO1xuXHRcdHJldHVybiBuZXcgTWFwKGVudHJpZXMubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIGRlZXBPcGVyYXRlQW5kQ2xvbmUodmFsdWUsIG9wZXJhdGlvbiwgW29iaiwga2V5XSldKSk7XG5cdH1cblx0aWYgKG9iaiBpbnN0YW5jZW9mIFNldCkge1xuXHRcdGNvbnN0IGVudHJpZXMgPSBBcnJheS5mcm9tKG9iai5lbnRyaWVzKCkpO1xuXHRcdGNvbnN0IHZhbHVlcyA9IGVudHJpZXMubWFwKChba2V5LCB2YWx1ZV0pID0+IHZhbHVlKTtcblx0XHRpZiAoZW50cmllcy5ldmVyeShpc0Nhbkp1c3RSZXR1cm4pKSByZXR1cm4gbmV3IFNldCh2YWx1ZXMubWFwKG9wZXJhdGlvbikpO1xuXHRcdHJldHVybiBuZXcgU2V0KHZhbHVlcy5tYXAoKHZhbHVlKSA9PiBkZWVwT3BlcmF0ZUFuZENsb25lKHZhbHVlLCBvcGVyYXRpb24sIFtvYmosIHZhbHVlXSkpKTtcblx0fVxuXHRpZiAodHlwZW9mIG9iaiA9PSBcIm9iamVjdFwiICYmIG9iaj8uY29uc3RydWN0b3IgPT0gT2JqZWN0ICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRjb25zdCBlbnRyaWVzID0gQXJyYXkuZnJvbShPYmplY3QuZW50cmllcyhvYmopKTtcblx0XHRpZiAoZW50cmllcy5tYXAoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUpLmV2ZXJ5KGlzQ2FuSnVzdFJldHVybikpIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoZW50cmllcy5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgb3BlcmF0aW9uKHZhbHVlLCBrZXksIG9iaildKSk7XG5cdFx0cmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhlbnRyaWVzLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBkZWVwT3BlcmF0ZUFuZENsb25lKHZhbHVlLCBvcGVyYXRpb24sIFtvYmosIGtleV0pXSkpO1xuXHR9XG5cdHJldHVybiBvcGVyYXRpb24ob2JqLCAkcHJldj8uWzFdID8/IFwiXCIsICRwcmV2Py5bMF0gPz8gbnVsbCk7XG59O1xudmFyIGJpbmRFdmVudCA9IChvbiwga2V5LCB2YWx1ZSkgPT4ge1xuXHRpZiAob24/LltrZXldICE9IG51bGwpIHtcblx0XHRjb25zdCBleGlzdHMgPSBvbltrZXldO1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgZXhpc3RzLmFkZCguLi52YWx1ZSk7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikgZXhpc3RzLmFkZCh2YWx1ZSk7XG5cdFx0cmV0dXJuIG9uO1xuXHR9XG5cdG9uW2tleV0gPz89IEFycmF5LmlzQXJyYXkodmFsdWUpID8gbmV3IFNldCh2YWx1ZSkgOiB0eXBlb2YgdmFsdWUgPT0gXCJmdW5jdGlvblwiID8gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW3ZhbHVlXSkgOiB2YWx1ZTtcblx0cmV0dXJuIG9uO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL1Byb21pc2VkLnRzXG52YXIgcmVzb2x2ZWRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBoYW5kbGVkTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYWN0V2l0aCA9IChwcm9taXNlT3JQbGFpbiwgY2IpID0+IHtcblx0aWYgKHByb21pc2VPclBsYWluIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgcHJvbWlzZU9yUGxhaW4/LnRoZW4gPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0aWYgKHJlc29sdmVkTWFwPy5oYXM/Lihwcm9taXNlT3JQbGFpbikpIHJldHVybiBjYihyZXNvbHZlZE1hcD8uZ2V0Py4ocHJvbWlzZU9yUGxhaW4pKTtcblx0XHRyZXR1cm4gUHJvbWlzZS50cnk/Lihhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBpdGVtID0gYXdhaXQgcHJvbWlzZU9yUGxhaW47XG5cdFx0XHRyZXNvbHZlZE1hcD8uc2V0Py4ocHJvbWlzZU9yUGxhaW4sIGl0ZW0pO1xuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fSk/LnRoZW4/LihjYik7XG5cdH1cblx0cmV0dXJuIGNiKHByb21pc2VPclBsYWluKTtcbn07XG52YXIgUHJvbWlzZUhhbmRsZXIgPSBjbGFzcyB7XG5cdCNyZXNvbHZlO1xuXHQjcmVqZWN0O1xuXHRjb25zdHJ1Y3RvcihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR0aGlzLiNyZXNvbHZlID0gcmVzb2x2ZTtcblx0XHR0aGlzLiNyZWplY3QgPSByZWplY3Q7XG5cdH1cblx0ZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yKSB7XG5cdFx0aWYgKHVud3JhcCh0YXJnZXQpIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yKTtcblx0XHRyZXR1cm4gYWN0V2l0aCh1bndyYXAodGFyZ2V0KSwgKG9iaikgPT4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2NyaXB0b3IpKTtcblx0fVxuXHRkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHtcblx0XHRpZiAodW53cmFwKHRhcmdldCkgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KG9iaiwgcHJvcCkpO1xuXHR9XG5cdGdldFByb3RvdHlwZU9mKHRhcmdldCkge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCksIChvYmopID0+IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSk7XG5cdH1cblx0c2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bykge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LnNldFByb3RvdHlwZU9mKG9iaiwgcHJvdG8pKTtcblx0fVxuXHRpc0V4dGVuc2libGUodGFyZ2V0KSB7XG5cdFx0aWYgKHVud3JhcCh0YXJnZXQpIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldCk7XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCksIChvYmopID0+IFJlZmxlY3QuaXNFeHRlbnNpYmxlKG9iaikpO1xuXHR9XG5cdHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCkge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcblx0XHRyZXR1cm4gYWN0V2l0aCh1bndyYXAodGFyZ2V0KSwgKG9iaikgPT4gUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhvYmopKTtcblx0fVxuXHRvd25LZXlzKHRhcmdldCkge1xuXHRcdGNvbnN0IHV3cCA9IHVud3JhcCh0YXJnZXQpO1xuXHRcdGlmICh1d3AgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gT2JqZWN0LmtleXModXdwKTtcblx0XHRyZXR1cm4gYWN0V2l0aCh1d3AsIChvYmopID0+IHtcblx0XHRcdHJldHVybiAodHlwZW9mIG9iaiA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT0gXCJmdW5jdGlvblwiKSAmJiBvYmogIT0gbnVsbCA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcblx0XHR9KSA/PyBbXTtcblx0fVxuXHRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKSB7XG5cdFx0aWYgKHVud3JhcCh0YXJnZXQpIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk7XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCksIChvYmopID0+IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCkpO1xuXHR9XG5cdGNvbnN0cnVjdCh0YXJnZXQsIGFyZ3MsIG5ld1RhcmdldCkge1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAoY3QpID0+IFJlZmxlY3QuY29uc3RydWN0KGN0LCBhcmdzLCBuZXdUYXJnZXQpKTtcblx0fVxuXHRoYXModGFyZ2V0LCBwcm9wKSB7XG5cdFx0aWYgKHVud3JhcCh0YXJnZXQpIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCksIChvYmopID0+IFJlZmxlY3QuaGFzKG9iaiwgcHJvcCkpO1xuXHR9XG5cdGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG5cdFx0dGFyZ2V0ID0gdW53cmFwKHRhcmdldCk7XG5cdFx0aWYgKHByb3AgPT0gXCJwcm9taXNlXCIpIHJldHVybiB0YXJnZXQ7XG5cdFx0aWYgKHByb3AgPT0gXCJyZXNvbHZlXCIgJiYgdGhpcy4jcmVzb2x2ZSkgcmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSB0aGlzLiNyZXNvbHZlPy4oLi4uYXJncyk7XG5cdFx0XHR0aGlzLiNyZXNvbHZlID0gbnVsbDtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0XHRpZiAocHJvcCA9PSBcInJlamVjdFwiICYmIHRoaXMuI3JlamVjdCkgcmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSB0aGlzLiNyZWplY3Q/LiguLi5hcmdzKTtcblx0XHRcdHRoaXMuI3JlamVjdCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdFx0aWYgKHByb3AgPT0gXCJ0aGVuXCIgfHwgcHJvcCA9PSBcImNhdGNoXCIgfHwgcHJvcCA9PSBcImZpbmFsbHlcIikge1xuXHRcdFx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiB0YXJnZXQ/Lltwcm9wXT8uYmluZD8uKHRhcmdldCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgJHRtcCA9IFByb21pc2UudHJ5KCgpID0+IHRhcmdldCk7XG5cdFx0XHRcdHJldHVybiAkdG1wPy5bcHJvcF0/LmJpbmQ/LigkdG1wKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bGV0IHJlc3VsdCA9IHZvaWQgMDtcblx0XHRpZiAocmVzb2x2ZWRNYXA/Lmhhcz8uKHRhcmdldCkgJiYgKHJlc3VsdCA9IHJlc29sdmVkTWFwPy5nZXQ/Lih0YXJnZXQpKT8uW3Byb3BdICE9IG51bGwpIHJlc3VsdCA9IHJlc29sdmVkTWFwPy5nZXQ/Lih0YXJnZXQpPy5bcHJvcF07XG5cdFx0ZWxzZSByZXN1bHQgPSBQcm9taXNlZChhY3RXaXRoKHRhcmdldCwgYXN5bmMgKG9iaikgPT4ge1xuXHRcdFx0aWYgKHVud3JhcChvYmopIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIFJlZmxlY3QuZ2V0KG9iaiwgcHJvcCwgcmVjZWl2ZXIpO1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKG9iaikpIHJldHVybiBwcm9wID09IFN5bWJvbC50b1ByaW1pdGl2ZSB8fCBwcm9wID09IFN5bWJvbC50b1N0cmluZ1RhZyA/IG9iaiA6IHZvaWQgMDtcblx0XHRcdGxldCB2YWx1ZSA9IHZvaWQgMDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhbHVlID0gUmVmbGVjdC5nZXQob2JqLCBwcm9wLCByZWNlaXZlcik7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHZhbHVlID0gdGFyZ2V0Py5bcHJvcF07XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHZhbHVlPy5iaW5kPy4ob2JqKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9KSk7XG5cdFx0aWYgKHByb3AgPT0gU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkgcmV0dXJuIFN0cmluZyhyZXN1bHQgPz8gXCJcIikgfHwgXCJcIjtcblx0XHRcdHJldHVybiByZXN1bHQ/LltTeW1ib2wudG9TdHJpbmdUYWddPy4oKSB8fCBTdHJpbmcocmVzdWx0ID8/IFwiXCIpIHx8IFwiXCI7XG5cdFx0fVxuXHRcdGlmIChwcm9wID09IFN5bWJvbC50b1ByaW1pdGl2ZSkgcmV0dXJuIChoaW50KSA9PiB7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkgcmV0dXJuIHRyeVBhcnNlQnlIaW50KHJlc3VsdCwgaGludCk7XG5cdFx0fTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCksIChvYmopID0+IFJlZmxlY3Quc2V0KG9iaiwgcHJvcCwgdmFsdWUpKTtcblx0fVxuXHRhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3MpIHtcblx0XHRpZiAodGhpcy4jcmVzb2x2ZSkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy4jcmVzb2x2ZT8uKC4uLmFyZ3MpO1xuXHRcdFx0dGhpcy4jcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRyZXR1cm4gYWN0V2l0aCh1bndyYXAodGFyZ2V0LCB0aGlzLiNyZXNvbHZlKSwgKG9iaikgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiBvYmogPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdGlmICh1bndyYXAob2JqKSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmFwcGx5KG9iaiwgdGhpc0FyZywgYXJncyk7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KG9iaiwgdGhpc0FyZywgYXJncyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5mdW5jdGlvbiBQcm9taXNlZChwcm9taXNlLCByZXNvbHZlLCByZWplY3QpIHtcblx0aWYgKCEocHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgfHwgdHlwZW9mIHByb21pc2U/LnRoZW4gPT0gXCJmdW5jdGlvblwiKSkgcmV0dXJuIHByb21pc2U7XG5cdGlmIChyZXNvbHZlZE1hcD8uaGFzPy4ocHJvbWlzZSkpIHJldHVybiByZXNvbHZlZE1hcD8uZ2V0Py4ocHJvbWlzZSk7XG5cdGlmICghaGFuZGxlZE1hcD8uaGFzPy4ocHJvbWlzZSkpIHByb21pc2U/LnRoZW4/LigoaXRlbSkgPT4gcmVzb2x2ZWRNYXA/LnNldD8uKHByb21pc2UsIGl0ZW0pKTtcblx0cmV0dXJuIGhhbmRsZWRNYXA/LmdldE9ySW5zZXJ0Q29tcHV0ZWQ/Lihwcm9taXNlLCAoKSA9PiBuZXcgUHJveHkoZml4RngocHJvbWlzZSksIG5ldyBQcm9taXNlSGFuZGxlcihyZXNvbHZlLCByZWplY3QpKSk7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9XUmVmLnRzXG52YXIgZXhpc3RzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgV2Vha1JlZlByb3h5SGFuZGxlciA9IGNsYXNzIHtcblx0X2RlcmVmKHRhcmdldCkge1xuXHRcdHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBXZWFrUmVmIHx8IHR5cGVvZiB0YXJnZXQ/LmRlcmVmID09IFwiZnVuY3Rpb25cIiA/IHRhcmdldD8uZGVyZWY/LigpIDogdGFyZ2V0O1xuXHR9XG5cdGdldCh0ZywgcHJvcCwgX3JlY2VpdmVyKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpLCB2YWx1ZSA9IG9iaj8uW3Byb3BdO1xuXHRcdGlmICgocHJvcCA9PSBcImVsZW1lbnRcIiB8fCBwcm9wID09IFwidmFsdWVcIikgJiYgb2JqICYmICh2YWx1ZSA9PSBudWxsIHx8ICEocHJvcCBpbiBvYmopKSkgcmV0dXJuIG9iajtcblx0XHRpZiAocHJvcCA9PSBcImRlcmVmXCIpIHJldHVybiAoKSA9PiB0aGlzLl9kZXJlZih0Zyk7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiAoLi4uYXJncykgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2RlcmVmKHRnKT8uW3Byb3BdPy4oLi4uYXJncyk7XG5cdFx0fTtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0c2V0KHRnLCBwcm9wLCB2YWx1ZSwgX3JlY2VpdmVyKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmIChvYmopIHJldHVybiBSZWZsZWN0LnNldChvYmosIHByb3AsIHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRoYXModGcsIHByb3ApIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLl9kZXJlZih0Zyk7XG5cdFx0aWYgKCFvYmopIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gcHJvcCBpbiBvYmo7XG5cdH1cblx0b3duS2V5cyh0Zykge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIFtdO1xuXHRcdHJldHVybiBSZWZsZWN0Lm93bktleXMob2JqKTtcblx0fVxuXHRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGcsIHByb3ApIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLl9kZXJlZih0Zyk7XG5cdFx0aWYgKCFvYmopIHJldHVybiB2b2lkIDA7XG5cdFx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcblx0fVxuXHRkZWxldGVQcm9wZXJ0eSh0ZywgcHJvcCkge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkob2JqLCBwcm9wKTtcblx0fVxuXHRkZWZpbmVQcm9wZXJ0eSh0ZywgcHJvcCwgZGVzY3JpcHRvcikge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjcmlwdG9yKTtcblx0fVxuXHRnZXRQcm90b3R5cGVPZih0Zykge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXHR9XG5cdHNldFByb3RvdHlwZU9mKHRnLCBwcm90bykge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIFJlZmxlY3Quc2V0UHJvdG90eXBlT2Yob2JqLCBwcm90byk7XG5cdH1cblx0aXNFeHRlbnNpYmxlKHRnKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIFJlZmxlY3QuaXNFeHRlbnNpYmxlKG9iaik7XG5cdH1cblx0cHJldmVudEV4dGVuc2lvbnModGcpIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLl9kZXJlZih0Zyk7XG5cdFx0aWYgKCFvYmopIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKG9iaik7XG5cdH1cbn07XG5mdW5jdGlvbiBXUmVmKHRhcmdldCkge1xuXHRpZiAoISh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCIpIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJzeW1ib2xcIikgcmV0dXJuIHRhcmdldDtcblx0Y29uc3QgaXNXZWFrUmVmID0gdGFyZ2V0IGluc3RhbmNlb2YgV2Vha1JlZiB8fCB0eXBlb2YgdGFyZ2V0Py5kZXJlZiA9PSBcImZ1bmN0aW9uXCI7XG5cdHRhcmdldCA9IGlzV2Vha1JlZiA/IHRhcmdldD8uZGVyZWY/LigpIDogdGFyZ2V0O1xuXHRpZiAodGFyZ2V0ICE9IG51bGwgJiYgZXhpc3RzTWFwLmhhcyh0YXJnZXQpKSByZXR1cm4gZXhpc3RzTWFwLmdldCh0YXJnZXQpO1xuXHRjb25zdCBoYW5kbGVyID0gbmV3IFdlYWtSZWZQcm94eUhhbmRsZXIoKTtcblx0Y29uc3QgcG0gPSBuZXcgUHJveHkoaXNXZWFrUmVmID8gdGFyZ2V0IDogbmV3IFdlYWtSZWYodGFyZ2V0KSwgaGFuZGxlcik7XG5cdGV4aXN0c01hcC5zZXQodGFyZ2V0LCBwbSk7XG5cdHJldHVybiBwbTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL0NvbnZlcnQudHNcbnZhciBjdnRfY3NfdG9fb3MgPSAocG9zX2luX2NzLCBzaXplX2luX2NzLCBvcl9pID0gMCkgPT4ge1xuXHRjb25zdCBzaXplX2luX29zID0gWy4uLnNpemVfaW5fY3NdO1xuXHRjb25zdCBwb3NfaW5fc3dhcCA9IFsuLi5wb3NfaW5fY3NdO1xuXHRpZiAob3JfaSAlIDIpIHtcblx0XHRwb3NfaW5fc3dhcC5yZXZlcnNlKCk7XG5cdFx0c2l6ZV9pbl9vcy5yZXZlcnNlKCk7XG5cdH1cblx0cmV0dXJuIFsob3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IHBvc19pbl9zd2FwWzBdIDogc2l6ZV9pbl9vc1swXSAtIHBvc19pbl9zd2FwWzBdKSB8fCAwLCAob3JfaSA9PSAwIHx8IG9yX2kgPT0gMSA/IHBvc19pbl9zd2FwWzFdIDogc2l6ZV9pbl9vc1sxXSAtIHBvc19pbl9zd2FwWzFdKSB8fCAwXTtcbn07XG52YXIgY3Z0X29zX3RvX2NzID0gKHBvc19pbl9vcywgc2l6ZV9pbl9jcywgb3JfaSA9IDApID0+IHtcblx0Y29uc3Qgc2l6ZV9pbl9vcyA9IFsuLi5zaXplX2luX2NzXTtcblx0Y29uc3QgcG9zX2luX2NwID0gWy4uLnBvc19pbl9vc107XG5cdGlmIChvcl9pICUgMikgc2l6ZV9pbl9vcy5yZXZlcnNlKCk7XG5cdGNvbnN0IHBvc19pbl9jcyA9IFsob3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IHBvc19pbl9jcFswXSA6IHNpemVfaW5fb3NbMF0gLSBwb3NfaW5fY3BbMF0pIHx8IDAsIChvcl9pID09IDAgfHwgb3JfaSA9PSAxID8gcG9zX2luX2NwWzFdIDogc2l6ZV9pbl9vc1sxXSAtIHBvc19pbl9jcFsxXSkgfHwgMF07XG5cdGlmIChvcl9pICUgMikgcG9zX2luX2NzLnJldmVyc2UoKTtcblx0cmV0dXJuIHBvc19pbl9jcztcbn07XG52YXIgY3Z0X3JlbF9jc190b19vcyA9IChyZWxfaW5fY3MsIG9yX2kgPSAwKSA9PiB7XG5cdGNvbnN0IHJlbF9pbl9zd2FwID0gWy4uLnJlbF9pbl9jc107XG5cdGlmIChvcl9pICUgMikgcmVsX2luX3N3YXAucmV2ZXJzZSgpO1xuXHRyZXR1cm4gWyhvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gcmVsX2luX3N3YXBbMF0gOiAtcmVsX2luX3N3YXBbMF0pIHx8IDAsIChvcl9pID09IDAgfHwgb3JfaSA9PSAxID8gcmVsX2luX3N3YXBbMV0gOiAtcmVsX2luX3N3YXBbMV0pIHx8IDBdO1xufTtcbnZhciBjdnRfcmVsX29zX3RvX2NzID0gKHJlbF9pbl9vcywgb3JfaSA9IDApID0+IHtcblx0Y29uc3QgcmVsX2luX2NwID0gWy4uLnJlbF9pbl9vc107XG5cdGNvbnN0IHBvc19pbl9jcyA9IFsob3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IHJlbF9pbl9jcFswXSA6IC1yZWxfaW5fY3BbMF0pIHx8IDAsIChvcl9pID09IDAgfHwgb3JfaSA9PSAxID8gcmVsX2luX2NwWzFdIDogLXJlbF9pbl9jcFsxXSkgfHwgMF07XG5cdGlmIChvcl9pICUgMikgcG9zX2luX2NzLnJldmVyc2UoKTtcblx0cmV0dXJuIHBvc19pbl9jcztcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9HcmlkSXRlbVV0aWxzLnRzXG52YXIgbm9ybWFsaXplR3JpZExheW91dCA9IChsYXlvdXQsIGZhbGxiYWNrID0gWzQsIDhdKSA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KGxheW91dCkgJiYgbGF5b3V0Lmxlbmd0aCA+PSAyKSByZXR1cm4gW01hdGgubWF4KDEsIE1hdGguZmxvb3IoTnVtYmVyKGxheW91dFswXSkgfHwgZmFsbGJhY2tbMF0pKSwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihOdW1iZXIobGF5b3V0WzFdKSB8fCBmYWxsYmFja1sxXSkpXTtcblx0aWYgKGxheW91dCAmJiB0eXBlb2YgbGF5b3V0ID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Y29uc3QgbyA9IGxheW91dDtcblx0XHRyZXR1cm4gW01hdGgubWF4KDEsIE1hdGguZmxvb3IoTnVtYmVyKG8uY29sdW1ucykgfHwgZmFsbGJhY2tbMF0pKSwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihOdW1iZXIoby5yb3dzKSB8fCBmYWxsYmFja1sxXSkpXTtcblx0fVxuXHRyZXR1cm4gW2ZhbGxiYWNrWzBdLCBmYWxsYmFja1sxXV07XG59O1xudmFyIGNsYW1wR3JpZENlbGxUdXBsZSA9IChjZWxsLCBsYXlvdXQpID0+IHtcblx0Y29uc3QgW2NvbHMsIHJvd3NdID0gbm9ybWFsaXplR3JpZExheW91dChsYXlvdXQpO1xuXHRyZXR1cm4gW01hdGgubWF4KDAsIE1hdGgubWluKGNvbHMgLSAxLCBNYXRoLmZsb29yKE51bWJlcihjZWxsWzBdKSB8fCAwKSkpLCBNYXRoLm1heCgwLCBNYXRoLm1pbihyb3dzIC0gMSwgTWF0aC5mbG9vcihOdW1iZXIoY2VsbFsxXSkgfHwgMCkpKV07XG59O1xudmFyIHJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbCA9IChsb2NhbFB4LCBzaXplLCBsYXlvdXQsIG9yaWVudCwgb3B0aW9ucykgPT4ge1xuXHRjb25zdCBMID0gbm9ybWFsaXplR3JpZExheW91dChsYXlvdXQpO1xuXHRjb25zdCB3ID0gTWF0aC5tYXgoMSwgc2l6ZVswXSB8fCAxKTtcblx0Y29uc3QgaCA9IE1hdGgubWF4KDEsIHNpemVbMV0gfHwgMSk7XG5cdGNvbnN0IG9zQ29vcmQgPSBjdnRfY3NfdG9fb3MobG9jYWxQeCwgW3csIGhdLCBvcmllbnQpO1xuXHRjb25zdCBub3JtYWxpemVkQXJncyA9IHtcblx0XHRpdGVtOiBvcHRpb25zPy5yZWRpcmVjdD8uaXRlbSA/PyB7IGlkOiBcIlwiIH0sXG5cdFx0bGlzdDogb3B0aW9ucz8ucmVkaXJlY3Q/Lmxpc3QgPz8gW10sXG5cdFx0aXRlbXM6IG9wdGlvbnM/LnJlZGlyZWN0Py5pdGVtcyA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuXHRcdGxheW91dDogTCxcblx0XHRzaXplOiBbdywgaF1cblx0fTtcblx0Y29uc3QgcHJvamVjdGVkID0gY29udmVydE9yaWVudFB4VG9DWChvc0Nvb3JkLCBub3JtYWxpemVkQXJncywgb3JpZW50KTtcblx0Y29uc3Qgbm9ybWFsaXplZENlbGwgPSAob3B0aW9ucz8ubW9kZSA/PyBcImZsb29yXCIpID09PSBcInJvdW5kXCIgPyBbTWF0aC5yb3VuZChwcm9qZWN0ZWRbMF0pLCBNYXRoLnJvdW5kKHByb2plY3RlZFsxXSldIDogW01hdGguZmxvb3IocHJvamVjdGVkWzBdKSwgTWF0aC5mbG9vcihwcm9qZWN0ZWRbMV0pXTtcblx0Y29uc3QgcmVkaXJlY3RlZCA9IHJlZGlyZWN0Q2VsbChub3JtYWxpemVkQ2VsbCwgbm9ybWFsaXplZEFyZ3MpO1xuXHRyZXR1cm4gY2xhbXBHcmlkQ2VsbFR1cGxlKHJlZGlyZWN0ZWQsIEwpO1xufTtcbnZhciBncmlkSXRlbXNBc0FycmF5ID0gKGl0ZW1zKSA9PiB7XG5cdGlmIChpdGVtcyA9PSBudWxsKSByZXR1cm4gW107XG5cdGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSkgcmV0dXJuIGl0ZW1zO1xuXHRpZiAoaXRlbXMgaW5zdGFuY2VvZiBNYXApIHJldHVybiBBcnJheS5mcm9tKGl0ZW1zLnZhbHVlcygpKTtcblx0aWYgKGl0ZW1zIGluc3RhbmNlb2YgU2V0KSByZXR1cm4gQXJyYXkuZnJvbShpdGVtcyk7XG5cdGlmICh0eXBlb2YgaXRlbXNbU3ltYm9sLml0ZXJhdG9yXSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVtcyk7XG5cdHJldHVybiBbXTtcbn07XG52YXIgZ2V0U3BhbiA9IChlbCwgYXgpID0+IHtcblx0Y29uc3QgcHJvcCA9IGVsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoW1wiLS1veC1jLXNwYW5cIiwgXCItLW94LXItc3BhblwiXVtheF0pLCBmYWN0b3IgPSAocGFyc2VGbG9hdChwcm9wIHx8IFwiMVwiKSB8fCAxKSAtIDE7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChmYWN0b3IgLSAxLCAwKSwgMSk7XG59O1xudmFyIHJlZGlyZWN0Q2VsbCA9ICgkcHJlQ2VsbCwgZ3JpZEFyZ3MpID0+IHtcblx0Y29uc3QgbGF5b3V0ID0gbm9ybWFsaXplR3JpZExheW91dChncmlkQXJncz8ubGF5b3V0ID8/IFs0LCA4XSk7XG5cdGNvbnN0IG5vcm1hbGl6ZWRBcmdzID0ge1xuXHRcdC4uLmdyaWRBcmdzLFxuXHRcdGxheW91dFxuXHR9O1xuXHRjb25zdCBpY29ucyA9IGdyaWRJdGVtc0FzQXJyYXkobm9ybWFsaXplZEFyZ3M/Lml0ZW1zKTtcblx0Y29uc3QgaXRlbSA9IG5vcm1hbGl6ZWRBcmdzPy5pdGVtIHx8IHt9O1xuXHRjb25zdCBjaGVja0J1c3kgPSAoY2VsbCkgPT4ge1xuXHRcdHJldHVybiBpY29ucy5maWx0ZXIoKGUpID0+ICEoZSA9PSBpdGVtIHx8IGU/LmlkID09IGl0ZW0/LmlkKSkuc29tZSgob25lKSA9PiAob25lPy5jZWxsPy5bMF0gfHwgMCkgPT0gKGNlbGxbMF0gfHwgMCkgJiYgKG9uZT8uY2VsbD8uWzFdIHx8IDApID09IChjZWxsWzFdIHx8IDApKTtcblx0fTtcblx0Y29uc3QgcHJlQ2VsbCA9IFsuLi4kcHJlQ2VsbF07XG5cdGlmICghY2hlY2tCdXN5KHByZUNlbGwpKSByZXR1cm4gWy4uLnByZUNlbGxdO1xuXHRjb25zdCBjb2x1bW5zID0gbGF5b3V0WzBdIHx8IDQ7XG5cdGNvbnN0IHJvd3MgPSBsYXlvdXRbMV0gfHwgODtcblx0Y29uc3Qgc3VpdGFibGUgPSAoW1xuXHRcdFtwcmVDZWxsWzBdICsgMSwgcHJlQ2VsbFsxXV0sXG5cdFx0W3ByZUNlbGxbMF0gLSAxLCBwcmVDZWxsWzFdXSxcblx0XHRbcHJlQ2VsbFswXSwgcHJlQ2VsbFsxXSArIDFdLFxuXHRcdFtwcmVDZWxsWzBdLCBwcmVDZWxsWzFdIC0gMV1cblx0XS5maWx0ZXIoKHYpID0+IHtcblx0XHRyZXR1cm4gdlswXSA+PSAwICYmIHZbMF0gPCBjb2x1bW5zICYmIHZbMV0gPj0gMCAmJiB2WzFdIDwgcm93cztcblx0fSkgfHwgW10pLmZpbmQoKHYpID0+ICFjaGVja0J1c3kodikpO1xuXHRpZiAoc3VpdGFibGUpIHJldHVybiBbLi4uc3VpdGFibGVdO1xuXHRsZXQgZXhjZWVkID0gMCwgYnVzeSA9IHRydWUsIGNvbXAgPSBbLi4ucHJlQ2VsbF07XG5cdHdoaWxlIChidXN5ICYmIGV4Y2VlZCsrIDwgY29sdW1ucyAqIHJvd3MpIHtcblx0XHRpZiAoIShidXN5ID0gY2hlY2tCdXN5KGNvbXApKSkgcmV0dXJuIFsuLi5jb21wXTtcblx0XHRjb21wWzBdKys7XG5cdFx0aWYgKGNvbXBbMF0gPj0gY29sdW1ucykge1xuXHRcdFx0Y29tcFswXSA9IDA7XG5cdFx0XHRjb21wWzFdKys7XG5cdFx0XHRpZiAoY29tcFsxXSA+PSByb3dzKSBjb21wWzFdID0gMDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIFsuLi5wcmVDZWxsXTtcbn07XG52YXIgbWFrZU9yaWVudEluc2V0ID0gKCRvcmllbnRQeCwgZ3JpZEFyZ3MsIG9yaWVudCA9IDApID0+IHtcblx0Y29uc3QgYm94SW5QeCA9IFsuLi5ncmlkQXJncy5zaXplXTtcblx0Y29uc3Qgb3JpZW50UHggPSBbLi4uJG9yaWVudFB4XTtcblx0Y29uc3QgbGF5b3V0ID0gbm9ybWFsaXplR3JpZExheW91dChncmlkQXJncy5sYXlvdXQgPz8gWzQsIDhdKTtcblx0aWYgKG9yaWVudCAlIDIpIGJveEluUHgucmV2ZXJzZSgpO1xuXHRyZXR1cm4gW3JvdW5kTmVhcmVzdChvcmllbnRQeFswXSwgYm94SW5QeFswXSAvIGxheW91dFswXSksIHJvdW5kTmVhcmVzdChvcmllbnRQeFsxXSwgYm94SW5QeFsxXSAvIGxheW91dFsxXSldO1xufTtcbnZhciBjb252ZXJ0T3JpZW50UHhUb0NYID0gKCRvcmllbnRQeCwgZ3JpZEFyZ3MsIG9yaWVudCA9IDApID0+IHtcblx0Y29uc3QgYm94SW5QeCA9IFsuLi5ncmlkQXJncy5zaXplXTtcblx0Y29uc3Qgb3JpZW50UHggPSBbLi4uJG9yaWVudFB4XTtcblx0Y29uc3QgbGF5b3V0ID0gbm9ybWFsaXplR3JpZExheW91dChncmlkQXJncy5sYXlvdXQgPz8gWzQsIDhdKTtcblx0aWYgKG9yaWVudCAlIDIpIGJveEluUHgucmV2ZXJzZSgpO1xuXHRjb25zdCBncmlkUHhUb0NYID0gW2xheW91dFswXSAvIGJveEluUHhbMF0sIGxheW91dFsxXSAvIGJveEluUHhbMV1dO1xuXHRyZXR1cm4gW29yaWVudFB4WzBdICogZ3JpZFB4VG9DWFswXSwgb3JpZW50UHhbMV0gKiBncmlkUHhUb0NYWzFdXTtcbn07XG52YXIgZmxvb3JJbk9yaWVudFB4ID0gKCRvcmllbnRQeCwgZ3JpZEFyZ3MsIG9yaWVudCA9IDApID0+IHtcblx0Y29uc3Qgb3JpZW50UHggPSBbLi4uJG9yaWVudFB4XTtcblx0Y29uc3QgYm94SW5QeCA9IFsuLi5ncmlkQXJncy5zaXplXTtcblx0Y29uc3QgbGF5b3V0ID0gbm9ybWFsaXplR3JpZExheW91dChncmlkQXJncy5sYXlvdXQgPz8gWzQsIDhdKTtcblx0aWYgKG9yaWVudCAlIDIpIGJveEluUHgucmV2ZXJzZSgpO1xuXHRjb25zdCBpbkJveCA9IFtib3hJblB4WzBdIC8gbGF5b3V0WzBdLCBib3hJblB4WzFdIC8gbGF5b3V0WzFdXTtcblx0cmV0dXJuIFtyb3VuZE5lYXJlc3Qob3JpZW50UHhbMF0sIGluQm94WzBdKSwgcm91bmROZWFyZXN0KG9yaWVudFB4WzFdLCBpbkJveFsxXSldO1xufTtcbnZhciBmbG9vckluQ1ggPSAoJENYLCBncmlkQXJncykgPT4ge1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzLmxheW91dCA/PyBbNCwgOF0pO1xuXHRyZXR1cm4gW01hdGgubWluKE1hdGgubWF4KHJvdW5kTmVhcmVzdCgkQ1hbMF0pLCAwKSwgbGF5b3V0WzBdIC0gMSksIE1hdGgubWluKE1hdGgubWF4KHJvdW5kTmVhcmVzdCgkQ1hbMV0pLCAwKSwgbGF5b3V0WzFdIC0gMSldO1xufTtcbnZhciBjbGllbnRTcGFjZUluT3JpZW50Q1ggPSAoJGNsaWVudFB4LCBncmlkQXJncywgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBjbGllbnRQeCA9IFsuLi4kY2xpZW50UHhdO1xuXHRjb25zdCBzaXplID0gWy4uLmdyaWRBcmdzLnNpemVdO1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzLmxheW91dCA/PyBbNCwgOF0pO1xuXHRjb25zdCBvcmllbnRQeCA9IGN2dF9jc190b19vcyhjbGllbnRQeCwgc2l6ZSwgb3JpZW50KTtcblx0Y29uc3Qgb3NTaXplID0gb3JpZW50ICUgMiA/IFtzaXplWzFdLCBzaXplWzBdXSA6IFtzaXplWzBdLCBzaXplWzFdXTtcblx0cmV0dXJuIFtNYXRoLm1pbihNYXRoLm1heChyb3VuZE5lYXJlc3Qob3JpZW50UHhbMF0gLyBvc1NpemVbMF0gKiBsYXlvdXRbMF0sIDEpLCAwKSwgbGF5b3V0WzBdIC0gMSksIE1hdGgubWluKE1hdGgubWF4KHJvdW5kTmVhcmVzdChvcmllbnRQeFsxXSAvIG9zU2l6ZVsxXSAqIGxheW91dFsxXSwgMSksIDApLCBsYXlvdXRbMV0gLSAxKV07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvdXRpbHMvVXNlclBhdGgudHNcbnZhciBub3JtYWxpemVTbGFzaGVzID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IHZhbHVlID0gU3RyaW5nKGlucHV0ID8/IFwiXCIpLnRyaW0oKTtcblx0aWYgKCF2YWx1ZSkgcmV0dXJuIFwiL1wiO1xuXHRyZXR1cm4gKHZhbHVlLnN0YXJ0c1dpdGgoXCIvXCIpID8gdmFsdWUgOiBgLyR7dmFsdWV9YCkucmVwbGFjZSgvXFwvKy9nLCBcIi9cIik7XG59O1xudmFyIGlzVXNlclNjb3BlUGF0aCA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2xhc2hlcyhpbnB1dCk7XG5cdHJldHVybiBub3JtYWxpemVkID09PSBcIi91c2VyXCIgfHwgbm9ybWFsaXplZC5zdGFydHNXaXRoKFwiL3VzZXIvXCIpO1xufTtcbnZhciBzdHJpcFVzZXJTY29wZVByZWZpeCA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2xhc2hlcyhpbnB1dCk7XG5cdGlmIChub3JtYWxpemVkID09PSBcIi91c2VyXCIpIHJldHVybiBcIi9cIjtcblx0aWYgKG5vcm1hbGl6ZWQuc3RhcnRzV2l0aChcIi91c2VyL1wiKSkgcmV0dXJuIG5vcm1hbGl6ZWQuc2xpY2UoNSkgfHwgXCIvXCI7XG5cdHJldHVybiBub3JtYWxpemVkO1xufTtcbnZhciB0b1VzZXJSZWxhdGl2ZVBhdGggPSAoaW5wdXQpID0+IHtcblx0cmV0dXJuIHN0cmlwVXNlclNjb3BlUHJlZml4KGlucHV0KS5yZXBsYWNlKC9eXFwvKy8sIFwiXCIpO1xufTtcbnZhciB0b1VzZXJTY29wZVBhdGggPSAoaW5wdXQpID0+IHtcblx0Y29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVNsYXNoZXMoaW5wdXQpO1xuXHRpZiAoaXNVc2VyU2NvcGVQYXRoKG5vcm1hbGl6ZWQpKSByZXR1cm4gbm9ybWFsaXplZDtcblx0aWYgKG5vcm1hbGl6ZWQgPT09IFwiL1wiKSByZXR1cm4gXCIvdXNlci9cIjtcblx0cmV0dXJuIGAvdXNlciR7bm9ybWFsaXplZH1gO1xufTtcbnZhciB1c2VyUGF0aENhbmRpZGF0ZXMgPSAoaW5wdXQpID0+IHtcblx0Y29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVNsYXNoZXMoaW5wdXQpO1xuXHRjb25zdCBzdHJpcHBlZCA9IHN0cmlwVXNlclNjb3BlUHJlZml4KG5vcm1hbGl6ZWQpO1xuXHRpZiAoaXNVc2VyU2NvcGVQYXRoKG5vcm1hbGl6ZWQpKSByZXR1cm4gQXJyYXkuZnJvbSgvKiBAX19QVVJFX18gKi8gbmV3IFNldChbc3RyaXBwZWQsIG5vcm1hbGl6ZWRdKSk7XG5cdHJldHVybiBbc3RyaXBwZWRdO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL01hcHBlZC50c1xudmFyIHJlbmRlclRhYk5hbWUgPSAodGFiTmFtZSkgPT4ge1xuXHRpZiAoIXRhYk5hbWUpIHJldHVybiBcIlwiO1xuXHR0YWJOYW1lID0gdGFiTmFtZT8ucmVwbGFjZT8uKC9fL2csIFwiIFwiKSB8fCB0YWJOYW1lO1xuXHR0YWJOYW1lID0gdGFiTmFtZT8uY2hhckF0Py4oMCk/LnRvVXBwZXJDYXNlPy4oKSArIHRhYk5hbWU/LnNsaWNlPy4oMSkgfHwgdGFiTmFtZTtcblx0cmV0dXJuIHRhYk5hbWU7XG59O1xudmFyIFJFTU9WRV9JRl9IQVNfU0lNSUxBUiA9IChhcnJheSwgb2xkLCBpZHggPSAtMSwgc3JjT2JqID0gbnVsbCkgPT4ge1xuXHRpZiAoYXJyYXk/LmluZGV4T2Y/LihvbGQpID49IDApIGFycmF5LnNwbGljZShhcnJheS5pbmRleE9mKG9sZCksIDEpO1xuXHRlbHNlIGlmIChpZHggPj0gMCAmJiBpZHggPCBhcnJheT8ubGVuZ3RoKSBhcnJheS5zcGxpY2UoaWR4LCAxKTtcbn07XG52YXIgUkVNT1ZFX0lGX0hBUyA9IChhcnJheSwgaXRlbSkgPT4ge1xuXHRpZiAoYXJyYXk/LmluZGV4T2Y/LihpdGVtKSA+PSAwKSBhcnJheS5zcGxpY2UoYXJyYXkuaW5kZXhPZihpdGVtKSwgMSk7XG59O1xudmFyIFBVU0hfT05DRSA9IChhcnJheSwgaXRlbSkgPT4ge1xuXHRpZiAoYXJyYXk/LmluZGV4T2Y/LihpdGVtKSA8IDApIGFycmF5LnB1c2goaXRlbSk7XG59O1xudmFyIFNQTElDRV9JTlRPX09OQ0UgPSAoYXJyYXksIGl0ZW0sIGluZGV4ID0gLTEpID0+IHtcblx0aWYgKHR5cGVvZiBpbmRleCAhPSBcIm51bWJlclwiIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+PSBhcnJheT8ubGVuZ3RoKSBQVVNIX09OQ0UoYXJyYXksIGl0ZW0pO1xuXHRlbHNlIGlmICh0eXBlb2YgaW5kZXggPT0gXCJudW1iZXJcIiAmJiBhcnJheT8uaW5kZXhPZj8uKGl0ZW0pIDwgMCkgYXJyYXkuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbn07XG52YXIgY2FjaGVkUGVyRmlsZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGNhY2hlZFBlckZpbGVOYW1lID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBHRVRfT1JfQ0FDSEUgPSBhc3luYyAoZmlsZSkgPT4ge1xuXHR0cnkge1xuXHRcdGZpbGUgPSBhd2FpdCBmaWxlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0ZmlsZSA9IG51bGw7XG5cdFx0Y29uc29sZS53YXJuKGUpO1xuXHR9XG5cdGlmIChmaWxlID09IG51bGwpIHJldHVybiBudWxsO1xuXHRpZiAoY2FjaGVkUGVyRmlsZS5oYXMoZmlsZSkpIHJldHVybiBjYWNoZWRQZXJGaWxlLmdldChmaWxlKTtcblx0aWYgKGZpbGU/LnR5cGUgIT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHJldHVybiBjYWNoZWRQZXJGaWxlLmdldChmaWxlKTtcblx0Y29uc3QgcmF3ID0gYXdhaXQgZmlsZT8udGV4dD8uKCk/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpIHx8IFwie31cIjtcblx0bGV0IG9iaiA9IHt9O1xuXHR0cnkge1xuXHRcdG9iaiA9IEpTT04ucGFyc2UocmF3KTtcblx0fSBjYXRjaCAoXykge1xuXHRcdHRyeSB7XG5cdFx0XHRvYmogPSBKU09OLnBhcnNlKHJhdyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdH1cblx0fVxuXHRpZiAoZmlsZSkgY2FjaGVkUGVyRmlsZS5zZXQoZmlsZSwgb2JqKTtcblx0cmV0dXJuIG9iajtcbn07XG52YXIgR0VUX09SX0NBQ0hFX0JZX05BTUUgPSBhc3luYyAoZmlsZU5hbWUsIGZpbGUpID0+IHtcblx0dHJ5IHtcblx0XHRmaWxlID0gYXdhaXQgZmlsZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGZpbGUgPSBudWxsO1xuXHRcdGNvbnNvbGUud2FybihlKTtcblx0fVxuXHRpZiAoZmlsZU5hbWUgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdGlmIChjYWNoZWRQZXJGaWxlTmFtZS5oYXMoZmlsZU5hbWUpKSByZXR1cm4gY2FjaGVkUGVyRmlsZU5hbWUuZ2V0KGZpbGVOYW1lKTtcblx0Y29uc3Qgb2JqID0gZmlsZSAhPSBudWxsID8gYXdhaXQgR0VUX09SX0NBQ0hFKGZpbGUpIDogY2FjaGVkUGVyRmlsZU5hbWU/LmdldChmaWxlTmFtZSk7XG5cdGlmIChmaWxlTmFtZSkgY2FjaGVkUGVyRmlsZU5hbWUuc2V0KGZpbGVOYW1lLCBvYmopO1xuXHRyZXR1cm4gb2JqO1xufTtcbnZhciBtZXJnZUJ5RXhpc3RzID0gKGRhdGFSZWYsIHJlZnMpID0+IHtcblx0Y29uc3QgZGF0YU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGRhdGFSZWYuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRpZiAoaXRlbT8ubmFtZSkgZGF0YU1hcC5zZXQoaXRlbS5uYW1lLCB7XG5cdFx0XHRpdGVtLFxuXHRcdFx0aW5kZXhcblx0XHR9KTtcblx0fSk7XG5cdGNvbnN0IHJlZnNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRyZWZzLmZvckVhY2goKHJlZikgPT4ge1xuXHRcdGlmIChyZWY/Lm5hbWUpIHJlZnNNYXAuc2V0KHJlZi5uYW1lLCByZWYpO1xuXHR9KTtcblx0Zm9yIChjb25zdCBbbmFtZSwgeyBpbmRleCB9XSBvZiBkYXRhTWFwKSB7XG5cdFx0Y29uc3QgcmVmID0gcmVmc01hcC5nZXQobmFtZSk7XG5cdFx0aWYgKHJlZikgZGF0YVJlZltpbmRleF0gPSByZWY7XG5cdH1cblx0Zm9yIChjb25zdCBbbmFtZSwgcmVmXSBvZiByZWZzTWFwKSBpZiAoIWRhdGFNYXAuaGFzKG5hbWUpKSBkYXRhUmVmLnB1c2gocmVmKTtcblx0Zm9yIChsZXQgaSA9IGRhdGFSZWYubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRjb25zdCBpdGVtID0gZGF0YVJlZltpXTtcblx0XHRpZiAoaXRlbT8ubmFtZSAmJiAhcmVmc01hcC5oYXMoaXRlbS5uYW1lKSkgZGF0YVJlZi5zcGxpY2UoaSwgMSk7XG5cdH1cblx0ZGF0YVJlZi5zb3J0KChhLCBiKSA9PiBhPy5uYW1lPy5sb2NhbGVDb21wYXJlPy4oYj8ubmFtZSA/PyBcIlwiKSk7XG5cdHJldHVybiBkYXRhUmVmO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL1Bob25lLnRzXG52YXIgUEhPTkVfQ0FORElEQVRFX1JFID0gL1xcKz9cXGRbXFxkXFxzKCkuXFwtXXs0LH1cXGQvZztcbnZhciBFWFRfQ1VUX1JFID0gLyjQtNC+0LFcXC4/fNC00L7Qv1xcLj98ZXh0XFwuP3xleHRlbnNpb24pXFxzKls6I1xcLXhdKlxccypcXGQrLiovaTtcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG5cdGRlZmF1bHRUcnVuazogXCI4XCIsXG5cdGNvdW50cnlDb2RlOiBcIjdcIixcblx0Y2l0eUNvZGU6IG51bGwsXG5cdHN0cmlwRXh0ZW5zaW9uczogdHJ1ZSxcblx0bWluTG9jYWw6IDUsXG5cdG1heExvY2FsOiA3XG59O1xudmFyIG5vcm1hbGl6ZU9uZSA9IChpbnB1dCwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGlmIChpbnB1dCA9PSBudWxsKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgb3B0cyA9IHtcblx0XHQuLi5ERUZBVUxUX09QVElPTlMsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXHRsZXQgcyA9IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuXHRpZiAoIXMpIHJldHVybiBudWxsO1xuXHRpZiAob3B0cy5zdHJpcEV4dGVuc2lvbnMpIHMgPSBzLnJlcGxhY2UoRVhUX0NVVF9SRSwgXCJcIik7XG5cdGNvbnN0IGhhc1BsdXNJblN0YXJ0ID0gL15cXCsvLnRlc3Qocyk7XG5cdGxldCBkaWdpdHMgPSBzLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcblx0aWYgKCFkaWdpdHMpIHJldHVybiBudWxsO1xuXHRpZiAoaGFzUGx1c0luU3RhcnQgJiYgZGlnaXRzLnN0YXJ0c1dpdGgob3B0cy5jb3VudHJ5Q29kZSkpIGRpZ2l0cyA9IG9wdHMuZGVmYXVsdFRydW5rICsgZGlnaXRzLnNsaWNlKG9wdHMuY291bnRyeUNvZGUubGVuZ3RoKTtcblx0ZWxzZSBpZiAoZGlnaXRzLmxlbmd0aCA9PT0gMTEgJiYgZGlnaXRzLnN0YXJ0c1dpdGgob3B0cy5jb3VudHJ5Q29kZSkpIGRpZ2l0cyA9IG9wdHMuZGVmYXVsdFRydW5rICsgZGlnaXRzLnNsaWNlKDEpO1xuXHRlbHNlIGlmIChkaWdpdHMubGVuZ3RoID09PSAxMCkgZGlnaXRzID0gb3B0cy5kZWZhdWx0VHJ1bmsgKyBkaWdpdHM7XG5cdGVsc2UgaWYgKG9wdHMuY2l0eUNvZGUgJiYgZGlnaXRzLmxlbmd0aCA+PSBvcHRzLm1pbkxvY2FsICYmIGRpZ2l0cy5sZW5ndGggPD0gb3B0cy5tYXhMb2NhbCkgZGlnaXRzID0gb3B0cy5kZWZhdWx0VHJ1bmsgKyBvcHRzLmNpdHlDb2RlICsgZGlnaXRzO1xuXHRlbHNlIGlmIChkaWdpdHMubGVuZ3RoID09PSAxMSAmJiBkaWdpdHMuc3RhcnRzV2l0aChvcHRzLmRlZmF1bHRUcnVuaykpIHt9IGVsc2UgaWYgKG9wdHMuY2l0eUNvZGUgJiYgZGlnaXRzLmxlbmd0aCA9PT0gb3B0cy5jaXR5Q29kZS5sZW5ndGggKyA3KSBkaWdpdHMgPSBvcHRzLmRlZmF1bHRUcnVuayArIGRpZ2l0cztcblx0ZWxzZSByZXR1cm4gbnVsbDtcblx0cmV0dXJuIC9eXFxkezExfSQvLnRlc3QoZGlnaXRzKSA/IGRpZ2l0cyA6IG51bGw7XG59O1xudmFyIHNwbGl0Q2FuZGlkYXRlcyA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIFtdO1xuXHRjb25zdCBzID0gU3RyaW5nKHZhbHVlKTtcblx0Y29uc3QgbWF0Y2hlcyA9IHMubWF0Y2goUEhPTkVfQ0FORElEQVRFX1JFKTtcblx0aWYgKG1hdGNoZXM/Lmxlbmd0aCkgcmV0dXJuIG1hdGNoZXM7XG5cdHJldHVybiBzLnNwbGl0KC9bOywvfF0rLykubWFwKCh4KSA9PiB4LnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xufTtcbnZhciBub3JtYWxpemVQaG9uZXMgPSAodmFsdWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuXHRjb25zdCBvdXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGZvciAoY29uc3QgdiBvZiB2YWx1ZSkgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKSBmb3IgKGNvbnN0IGNhbmQgb2Ygc3BsaXRDYW5kaWRhdGVzKHYpKSB7XG5cdFx0Y29uc3QgbiA9IG5vcm1hbGl6ZU9uZShjYW5kLCBvcHRpb25zKTtcblx0XHRpZiAobikgb3V0LmFkZChuKTtcblx0fVxuXHRlbHNlIHtcblx0XHRjb25zdCBuID0gbm9ybWFsaXplT25lKHYsIG9wdGlvbnMpO1xuXHRcdGlmIChuKSBvdXQuYWRkKG4pO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikgZm9yIChjb25zdCBjIG9mIHNwbGl0Q2FuZGlkYXRlcyh2YWx1ZSkpIHtcblx0XHRjb25zdCBuID0gbm9ybWFsaXplT25lKGMsIG9wdGlvbnMpO1xuXHRcdGlmIChuKSBvdXQuYWRkKG4pO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGNvbnN0IG4gPSBub3JtYWxpemVPbmUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdGlmIChuKSBvdXQuYWRkKG4pO1xuXHR9XG5cdHJldHVybiBbLi4ub3V0XTtcbn07XG52YXIgZ2V0SW5kZXhGb3JSb3cgPSAocm93LCBwb3MpID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkocm93KSAmJiB0eXBlb2Ygcm93WzFdID09PSBcIm51bWJlclwiKSByZXR1cm4gcm93WzFdO1xuXHRpZiAocm93ICYmIHR5cGVvZiByb3cgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJvdy5pbmRleCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHJvdy5pbmRleDtcblx0cmV0dXJuIHBvcztcbn07XG52YXIgZ2V0UGhvbmVzRnJvbVJvdyA9IChyb3cpID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkocm93KSkgcmV0dXJuIHJvd1swXTtcblx0aWYgKHJvdyAmJiB0eXBlb2Ygcm93ID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYgKFwicGhvbmVzXCIgaW4gcm93KSByZXR1cm4gcm93LnBob25lcztcblx0XHRpZiAoXCJwaG9uZVwiIGluIHJvdykgcmV0dXJuIHJvdy5waG9uZTtcblx0fVxuXHRyZXR1cm4gcm93O1xufTtcbmZ1bmN0aW9uIGZpbmREdXBsaWNhdGVQaG9uZXMocm93cywgdXNlck9wdGlvbnMgPSB7fSkge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdC4uLkRFRkFVTFRfT1BUSU9OUyxcblx0XHQuLi51c2VyT3B0aW9uc1xuXHR9O1xuXHRjb25zdCBudW1iZXJUb0luZGljZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCBpbmRleFRvTnVtYmVyc0FsbCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdHJvd3MuZm9yRWFjaCgocm93LCBwb3MpID0+IHtcblx0XHRjb25zdCBpZHggPSBnZXRJbmRleEZvclJvdyhyb3csIHBvcyk7XG5cdFx0Y29uc3QgcGhvbmVzUmF3ID0gZ2V0UGhvbmVzRnJvbVJvdyhyb3cpO1xuXHRcdGNvbnN0IHBob25lcyA9IG5vcm1hbGl6ZVBob25lcyhwaG9uZXNSYXcsIG9wdGlvbnMpO1xuXHRcdGlmICghaW5kZXhUb051bWJlcnNBbGwuaGFzKGlkeCkpIGluZGV4VG9OdW1iZXJzQWxsLnNldChpZHgsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuXHRcdGNvbnN0IHNldEZvckluZGV4ID0gaW5kZXhUb051bWJlcnNBbGwuZ2V0KGlkeCk7XG5cdFx0Zm9yIChjb25zdCBwIG9mIHBob25lcykge1xuXHRcdFx0c2V0Rm9ySW5kZXguYWRkKHApO1xuXHRcdFx0aWYgKCFudW1iZXJUb0luZGljZXMuaGFzKHApKSBudW1iZXJUb0luZGljZXMuc2V0KHAsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuXHRcdFx0bnVtYmVyVG9JbmRpY2VzLmdldChwKS5hZGQoaWR4KTtcblx0XHR9XG5cdH0pO1xuXHRjb25zdCBkdXBsaWNhdGVzQnlOdW1iZXIgPSB7fTtcblx0Zm9yIChjb25zdCBbbnVtLCBzZXRdIG9mIG51bWJlclRvSW5kaWNlcy5lbnRyaWVzKCkpIGlmIChzZXQuc2l6ZSA+IDEpIGR1cGxpY2F0ZXNCeU51bWJlcltudW1dID0gWy4uLnNldF0uc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXHRjb25zdCBkdXBsaWNhdGVzQnlJbmRleCA9IHt9O1xuXHRmb3IgKGNvbnN0IFtpZHgsIHNldF0gb2YgaW5kZXhUb051bWJlcnNBbGwuZW50cmllcygpKSB7XG5cdFx0Y29uc3QgZHVwcyA9IFsuLi5zZXRdLmZpbHRlcigobikgPT4gZHVwbGljYXRlc0J5TnVtYmVyW25dKTtcblx0XHRpZiAoZHVwcy5sZW5ndGgpIGR1cGxpY2F0ZXNCeUluZGV4W2lkeF0gPSBkdXBzLnNvcnQoKTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGR1cGxpY2F0ZXNCeU51bWJlcixcblx0XHRwYWlyczogT2JqZWN0LmVudHJpZXMoZHVwbGljYXRlc0J5SW5kZXgpLm1hcCgoW2lkeCwgbnVtc10pID0+IFtOdW1iZXIoaWR4KSwgbnVtc10pLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKSxcblx0XHRkdXBsaWNhdGVzQnlJbmRleCxcblx0XHRub3JtYWxpemU6IChzKSA9PiBub3JtYWxpemVPbmUocywgb3B0aW9ucylcblx0fTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL1RpbWUudHNcbnZhciBnZXRUaW1lWm9uZSA9ICgpID0+IHtcblx0cmV0dXJuIEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbn07XG5mdW5jdGlvbiBpc1B1cmVISE1NKHN0cikge1xuXHRpZiAoIXN0cikgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gL14oWzAxXVxcZHwyWzAtM10pOihbMC01XVxcZCkkLy50ZXN0KFN0cmluZyhzdHIpLnRyaW0oKSk7XG59XG5mdW5jdGlvbiBwYXJzZURhdGVDb3JyZWN0bHkoc3RyKSB7XG5cdGlmICghc3RyKSByZXR1cm4gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG5cdGlmIChzdHIgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gbmV3IERhdGUoc3RyKTtcblx0aWYgKHR5cGVvZiBzdHIgPT0gXCJvYmplY3RcIiAmJiBzdHI/LnRpbWVzdGFtcCkgcmV0dXJuIHBhcnNlRGF0ZUNvcnJlY3RseShzdHIudGltZXN0YW1wKTtcblx0aWYgKHR5cGVvZiBzdHIgPT0gXCJvYmplY3RcIiAmJiBzdHI/Lmlzb19kYXRlKSByZXR1cm4gcGFyc2VEYXRlQ29ycmVjdGx5KHN0ci5pc29fZGF0ZSk7XG5cdGlmICh0eXBlb2Ygc3RyID09IFwib2JqZWN0XCIgJiYgc3RyPy5kYXRlKSByZXR1cm4gcGFyc2VEYXRlQ29ycmVjdGx5KHN0ci5kYXRlKTtcblx0aWYgKHR5cGVvZiBzdHIgPT0gXCJudW1iZXJcIikge1xuXHRcdGlmIChzdHIgPj0gMHhlOGQ0YTUxMDAwKSByZXR1cm4gbmV3IERhdGUoc3RyKTtcblx0XHRjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIDExIC0gKFN0cmluZyhzdHIgfCAwKT8ubGVuZ3RoIHx8IDExKSkgfCAwO1xuXHRcdHJldHVybiBuZXcgRGF0ZShzdHIgKiBtdWx0aXBsaWVyKTtcblx0fVxuXHRpZiAodHlwZW9mIHN0ciA9PSBcInN0cmluZ1wiICYmIGlzUHVyZUhITU0oc3RyKSkge1xuXHRcdGNvbnN0IG0gPSAvXihbMDFdXFxkfDJbMC0zXSk6KFswLTVdXFxkKSQvLmV4ZWMoc3RyLnRyaW0oKSk7XG5cdFx0aWYgKCFtKSByZXR1cm4gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgWywgaGgsIG1tXSA9IG07XG5cdFx0Y29uc3Qgbm93ID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSwgTnVtYmVyKGhoKSwgTnVtYmVyKG1tKSwgMCwgMCk7XG5cdH1cblx0cmV0dXJuIG5ldyBEYXRlKFN0cmluZyhzdHIpKTtcbn1cbmZ1bmN0aW9uIHBhcnNlQW5kR2V0Q29ycmVjdFRpbWUoc3RyKSB7XG5cdGlmICghc3RyKSByZXR1cm4gRGF0ZS5ub3coKTtcblx0aWYgKHR5cGVvZiBzdHIgPT0gXCJudW1iZXJcIikge1xuXHRcdGlmIChzdHIgPj0gMHhlOGQ0YTUxMDAwKSByZXR1cm4gc3RyO1xuXHRcdHJldHVybiBzdHIgKiAoTWF0aC5wb3coMTAsIDExIC0gKFN0cmluZyhzdHIgfCAwKT8ubGVuZ3RoIHx8IDExKSkgfCAwKTtcblx0fVxuXHRpZiAoc3RyIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHN0ci5nZXRUaW1lKCk7XG5cdHJldHVybiBwYXJzZURhdGVDb3JyZWN0bHkoc3RyKT8uZ2V0VGltZT8uKCkgPz8gRGF0ZS5ub3coKTtcbn1cbnZhciBnZXRJU09XZWVrTnVtYmVyID0gKGlucHV0KSA9PiB7XG5cdGlmICghaW5wdXQpIHJldHVybiBudWxsO1xuXHRjb25zdCB0YXJnZXQgPSBuZXcgRGF0ZShEYXRlLlVUQyhpbnB1dC5nZXRGdWxsWWVhcigpLCBpbnB1dC5nZXRNb250aCgpLCBpbnB1dC5nZXREYXRlKCkpKTtcblx0Y29uc3QgZGF5TnVtYmVyID0gdGFyZ2V0LmdldFVUQ0RheSgpIHx8IDc7XG5cdHRhcmdldC5zZXRVVENEYXRlKHRhcmdldC5nZXRVVENEYXRlKCkgKyA0IC0gZGF5TnVtYmVyKTtcblx0Y29uc3QgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEModGFyZ2V0LmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKTtcblx0cmV0dXJuIE1hdGguY2VpbCgoKHRhcmdldC5nZXRUaW1lKCkgLSB5ZWFyU3RhcnQuZ2V0VGltZSgpKSAvIDg2NGU1ICsgMSkgLyA3KTtcbn07XG52YXIgbm9ybWFsaXplU2NoZWR1bGUgPSAodmFsdWUpID0+IHtcblx0aWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgKHZhbHVlLmRhdGUgfHwgdmFsdWUuaXNvX2RhdGUgfHwgdmFsdWUudGltZXN0YW1wKSkgcmV0dXJuIHZhbHVlO1xuXHRyZXR1cm4geyBpc29fZGF0ZTogU3RyaW5nKHZhbHVlKSB9O1xufTtcbnZhciBmb3JtYXRBc1RpbWUgPSAodGltZSkgPT4ge1xuXHRjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2NoZWR1bGUodGltZSk7XG5cdGlmICghbm9ybWFsaXplZCkgcmV0dXJuIFwiXCI7XG5cdHJldHVybiBwYXJzZURhdGVDb3JyZWN0bHkobm9ybWFsaXplZCk/LnRvTG9jYWxlVGltZVN0cmluZz8uKFwiZW4tR0JcIiwge1xuXHRcdGhvdXI6IFwiMi1kaWdpdFwiLFxuXHRcdG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG5cdFx0aG91cjEyOiBmYWxzZSxcblx0XHR0aW1lWm9uZTogZ2V0VGltZVpvbmUoKVxuXHR9KSB8fCBcIlwiO1xufTtcbnZhciBmb3JtYXRBc0RhdGUgPSAoZGF0ZSkgPT4ge1xuXHRyZXR1cm4gcGFyc2VEYXRlQ29ycmVjdGx5KGRhdGUpPy50b0xvY2FsZURhdGVTdHJpbmc/LihcImVuLUdCXCIsIHtcblx0XHRkYXk6IFwibnVtZXJpY1wiLFxuXHRcdG1vbnRoOiBcImxvbmdcIixcblx0XHR3ZWVrZGF5OiBcImxvbmdcIixcblx0XHR5ZWFyOiBcIm51bWVyaWNcIixcblx0XHR0aW1lWm9uZTogZ2V0VGltZVpvbmUoKVxuXHR9KSB8fCBcIlwiO1xufTtcbnZhciBmb3JtYXREYXRlVGltZSA9ICh0aW1lc3RhbXApID0+IHtcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cdGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSByZXR1cm4gXCJcIjtcblx0cmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcodm9pZCAwLCB7XG5cdFx0eWVhcjogXCJudW1lcmljXCIsXG5cdFx0bW9udGg6IFwic2hvcnRcIixcblx0XHRkYXk6IFwiMi1kaWdpdFwiLFxuXHRcdGhvdXI6IFwiMi1kaWdpdFwiLFxuXHRcdG1pbnV0ZTogXCIyLWRpZ2l0XCJcblx0fSk7XG59O1xudmFyIGdldENvbXBhcmFibGVUaW1lVmFsdWUgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlID09IG51bGwpIHJldHVybiBOYU47XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuXHRjb25zdCBkYXRlID0gcGFyc2VEYXRlQ29ycmVjdGx5KHZhbHVlKTtcblx0aWYgKGRhdGUgJiYgIU51bWJlci5pc05hTihkYXRlPy5nZXRUaW1lKCkpKSByZXR1cm4gZGF0ZT8uZ2V0VGltZSgpID8/IDA7XG5cdGNvbnN0IG1hdGNoID0gU3RyaW5nKHZhbHVlKS5tYXRjaCgvXihcXGR7MSwyfSkoPzo6KFxcZHsyfSkpPyg/OjooXFxkezJ9KSk/Lyk7XG5cdGlmIChtYXRjaCkge1xuXHRcdGNvbnN0IGhvdXJzID0gTnVtYmVyKG1hdGNoWzFdKSB8fCAwO1xuXHRcdGNvbnN0IG1pbnV0ZXMgPSBOdW1iZXIobWF0Y2hbMl0pIHx8IDA7XG5cdFx0Y29uc3Qgc2Vjb25kcyA9IE51bWJlcihtYXRjaFszXSkgfHwgMDtcblx0XHRyZXR1cm4gKChob3VycyAqIDYwICsgbWludXRlcykgKiA2MCArIHNlY29uZHMpICogMWUzO1xuXHR9XG5cdGNvbnN0IG51bWVyaWMgPSBOdW1iZXIodmFsdWUpO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG51bWVyaWMpID8gbnVtZXJpYyA6IE5hTjtcbn07XG52YXIgaXNEYXRlID0gKGRhdGUpID0+IHtcblx0Y29uc3QgZmlyc3RTdGVwID0gZGF0ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGRhdGUgPT0gXCJzdHJpbmdcIiAmJiBkYXRlLm1hdGNoKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLyk7XG5cdGxldCBzZWNvbmRTdGVwID0gZmFsc2U7XG5cdHRyeSB7XG5cdFx0c2Vjb25kU3RlcCA9IGdldENvbXBhcmFibGVUaW1lVmFsdWUoZGF0ZSkgPiAwO1xuXHR9IGNhdGNoIHtcblx0XHRzZWNvbmRTdGVwID0gZmFsc2U7XG5cdH1cblx0cmV0dXJuIEJvb2xlYW4oKGZpcnN0U3RlcCAmJiBzZWNvbmRTdGVwKSA/PyBmYWxzZSk7XG59O1xudmFyIGNoZWNrSW5UaW1lUmFuZ2UgPSAoYmVnaW5UaW1lLCBlbmRUaW1lLCBjdXJyZW50VGltZSkgPT4ge1xuXHRpZiAoYmVnaW5UaW1lICYmIGVuZFRpbWUpIHJldHVybiBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGJlZ2luVGltZSkgPCBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGN1cnJlbnRUaW1lKSAmJiBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGN1cnJlbnRUaW1lKSA8IGdldENvbXBhcmFibGVUaW1lVmFsdWUoZW5kVGltZSk7XG5cdGlmIChiZWdpblRpbWUpIHJldHVybiBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGJlZ2luVGltZSkgPCBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGN1cnJlbnRUaW1lKTtcblx0aWYgKGVuZFRpbWUpIHJldHVybiBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGN1cnJlbnRUaW1lKSA8IGdldENvbXBhcmFibGVUaW1lVmFsdWUoZW5kVGltZSk7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgY2hlY2tSZW1haW5zVGltZSA9IChiZWdpblRpbWUsIGVuZFRpbWUsIGN1cnJlbnRUaW1lLCBtYXhEYXlzID0gNykgPT4ge1xuXHRsZXQgZmFjdG9yTWFza2VkID0gdHJ1ZTtcblx0aWYgKGJlZ2luVGltZSkgZmFjdG9yTWFza2VkICYmPSBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGN1cnJlbnRUaW1lKSA8PSBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGJlZ2luVGltZSk7XG5cdGlmIChlbmRUaW1lKSBmYWN0b3JNYXNrZWQgJiY9IGdldENvbXBhcmFibGVUaW1lVmFsdWUoY3VycmVudFRpbWUpIDwgZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShlbmRUaW1lKTtcblx0aWYgKG1heERheXMpIHtcblx0XHRjb25zdCBkYXRlTGltaXQgPSBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGN1cnJlbnRUaW1lKSArIG1heERheXMgKiAyNCAqIDYwICogNjAgKiAxZTM7XG5cdFx0ZmFjdG9yTWFza2VkICYmPSBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGJlZ2luVGltZSkgPCBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGRhdGVMaW1pdCk7XG5cdH1cblx0cmV0dXJuIGZhY3Rvck1hc2tlZDtcbn07XG52YXIgY29tcHV0ZVRpbWVsaW5lT3JkZXJJbkdlbmVyYWwgPSAodGltZU9mRGF5LCBtaW5UaW1lc3RhbXApID0+IHtcblx0Y29uc3QgZGF5U3RhcnQgPSBnZXRDb21wYXJhYmxlVGltZVZhbHVlKHRpbWVPZkRheSkgfHwgMDtcblx0Y29uc3Qgbm9ybWFsaXplZCA9IChOdW1iZXIuaXNGaW5pdGUoZGF5U3RhcnQpID8gZGF5U3RhcnQgOiAwKSAtIChtaW5UaW1lc3RhbXAgfHwgMCk7XG5cdHJldHVybiBNYXRoLnJvdW5kKG5vcm1hbGl6ZWQgLyA4NjRlNSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvdXRpbHMvTWlzYy50c1xuZnVuY3Rpb24gZGVib3VuY2UoZm4sIGRlbGF5KSB7XG5cdGxldCB0aW1lb3V0SWQ7XG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuXHRcdHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gZm4oLi4uYXJncyksIGRlbGF5KTtcblx0fTtcbn1cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCBsaW1pdCkge1xuXHRsZXQgaW5UaHJvdHRsZSA9IGZhbHNlO1xuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcblx0XHRpZiAoIWluVGhyb3R0bGUpIHtcblx0XHRcdGZuKC4uLmFyZ3MpO1xuXHRcdFx0aW5UaHJvdHRsZSA9IHRydWU7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IGluVGhyb3R0bGUgPSBmYWxzZSwgbGltaXQpO1xuXHRcdH1cblx0fTtcbn1cbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuZnVuY3Rpb24gdW5pcXVlSWQocHJlZml4ID0gXCJcIikge1xuXHRyZXR1cm4gYCR7cHJlZml4fSR7RGF0ZS5ub3coKS50b1N0cmluZygzNil9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgOSl9YDtcbn1cbmZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcblx0aWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSByZXR1cm4gb2JqO1xuXHRpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIG5ldyBEYXRlKG9iai5nZXRUaW1lKCkpO1xuXHRpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBvYmoubWFwKChpdGVtKSA9PiBkZWVwQ2xvbmUoaXRlbSkpO1xuXHRpZiAob2JqIGluc3RhbmNlb2YgT2JqZWN0KSB7XG5cdFx0Y29uc3QgY2xvbmVkID0ge307XG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgY2xvbmVkW2tleV0gPSBkZWVwQ2xvbmUob2JqW2tleV0pO1xuXHRcdHJldHVybiBjbG9uZWQ7XG5cdH1cblx0cmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcblx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDApIHJldHVybiB0cnVlO1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSByZXR1cm4gdmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMDtcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcblx0cmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuXHRyZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG59XG5mdW5jdGlvbiBpc1dvcmtlcigpIHtcblx0cmV0dXJuIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9pbmRleC50c1xuaW5zdGFsbERvbUNvbnN0cnVjdG9yUG9seWZpbGxzKCk7XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgJGF2b2lkVHJpZ2dlciwgJGZ4eSwgJGdldFZhbHVlLCAkc2V0LCAkdHJpZ2dlckxvY2ssIEFzeW5jUXVldWUsIENoYW5uZWxIZWFsdGhNb25pdG9yLCBDaGFubmVsUmVnaXN0cnksIEVYVF9DVVRfUkUsIEdFVF9PUl9DQUNIRSwgR0VUX09SX0NBQ0hFX0JZX05BTUUsIElOVEVHRVJfUkVHRVhQLCBQSE9ORV9DQU5ESURBVEVfUkUsIFBVU0hfT05DRSwgUHJvbWlzZWQsIFJFTU9WRV9JRl9IQVMsIFJFTU9WRV9JRl9IQVNfU0lNSUxBUiwgU1BMSUNFX0lOVE9fT05DRSwgVVVJRHY0LCBXUmVmLCBiaW5kQ3R4LCBiaW5kRXZlbnQsIGJpbmRGeCwgYm91bmRDdHgsIGNhY2hlZFBlckZpbGUsIGNhY2hlZFBlckZpbGVOYW1lLCBjYWxsQnlBbGxQcm9wLCBjYWxsQnlQcm9wLCBjYW1lbFRvS2ViYWIsIGNhbkJlSW50ZWdlciwgY2VpbE5lYXJlc3QsIGNoZWNrSW5UaW1lUmFuZ2UsIGNoZWNrUmVtYWluc1RpbWUsIGNsYW1wLCBjbGFtcERpbWVuc2lvbiwgY2xhbXBHcmlkQ2VsbFR1cGxlLCBjbGllbnRTcGFjZUluT3JpZW50Q1gsIGNvbXB1dGVUaW1lbGluZU9yZGVySW5HZW5lcmFsLCBjb25jdXJyZW50TGltaXQsIGNvbnRleHRpZnksIGNvbnZlcnRPcmllbnRQeFRvQ1gsIGNyZWF0ZUNoYW5uZWxQcm94eSwgY3JlYXRlRGVmZXJyZWQsIGN2dF9jc190b19vcywgY3Z0X29zX3RvX2NzLCBjdnRfcmVsX2NzX3RvX29zLCBjdnRfcmVsX29zX3RvX2NzLCBkZWJvdW5jZSwgZGVlcENsb25lLCBkZWVwT3BlcmF0ZUFuZENsb25lLCBkZWZhdWx0QnlUeXBlLCBkZXJlZiwgZmluZER1cGxpY2F0ZVBob25lcywgZml4RngsIGZsb29ySW5DWCwgZmxvb3JJbk9yaWVudFB4LCBmbG9vck5lYXJlc3QsIGZvcm1hdEFzRGF0ZSwgZm9ybWF0QXNUaW1lLCBmb3JtYXREYXRlVGltZSwgZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZSwgZ2V0SVNPV2Vla051bWJlciwgZ2V0SW5kZXhGb3JSb3csIGdldE9ySW5zZXJ0LCBnZXRPckluc2VydENvbXB1dGVkLCBnZXRQaG9uZXNGcm9tUm93LCBnZXRSYW5kb21WYWx1ZXMsIGdldFNwYW4sIGdldFRpbWVab25lLCBnZXRWYWx1ZSwgZ2xvYmFsQ2hhbm5lbEhlYWx0aE1vbml0b3IsIGdsb2JhbENoYW5uZWxSZWdpc3RyeSwgZ3JpZEl0ZW1zQXNBcnJheSwgaGFuZGxlTGlzdGVuZXJzLCBoYXNQcm9wZXJ0eSwgaGFzVmFsdWUsIGluUHJveHksIGlzQXJyYXlJbnZhbGlkS2V5LCBpc0FycmF5T3JJdGVyYWJsZSwgaXNCcm93c2VyLCBpc0Nhbkp1c3RSZXR1cm4sIGlzQ2FuVHJhbnNmZXIsIGlzRGF0ZSwgaXNFbXB0eSwgaXNIYXNQcmltaXRpdmVzLCBpc0l0ZXJhYmxlLCBpc0tleVR5cGUsIGlzTm90Q29tcGxleEFycmF5LCBpc05vdEVxdWFsLCBpc09iamVjdCwgaXNPYmplY3ROb3RFcXVhbCwgaXNPYnNlcnZhYmxlLCBpc1ByaW1pdGl2ZSwgaXNQcm9taXNlLCBpc1B1cmVISE1NLCBpc1JlZiwgaXNTeW1ib2wsIGlzVHlwZWRBcnJheSwgaXNVc2VyU2NvcGVQYXRoLCBpc1ZhbCwgaXNWYWxpZE51bWJlciwgaXNWYWxpZE9iaiwgaXNWYWx1ZVJlZiwgaXNWYWx1ZVVuaXQsIGlzV29ya2VyLCBrZWJhYlRvQ2FtZWwsIG1ha2VPcmllbnRJbnNldCwgbWFrZVRyaWdnZXJMZXNzLCBtZXJnZUJ5RXhpc3RzLCBtZXJnZUJ5S2V5LCBub3JtYWxpemVHcmlkTGF5b3V0LCBub3JtYWxpemVPbmUsIG5vcm1hbGl6ZVBob25lcywgbm9ybWFsaXplUHJpbWl0aXZlLCBub3JtYWxpemVTY2hlZHVsZSwgb2JqZWN0QXNzaWduLCBvYmplY3RBc3NpZ25Ob3RFcXVhbCwgcGFyc2VBbmRHZXRDb3JyZWN0VGltZSwgcGFyc2VEYXRlQ29ycmVjdGx5LCBwb3RlbnRpYWxseUFzeW5jLCBwb3RlbnRpYWxseUFzeW5jTWFwLCByZWRpcmVjdENlbGwsIHJlbW92ZUV4dHJhLCByZW5kZXJUYWJOYW1lLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwsIHJldHJ5LCByb3VuZE5lYXJlc3QsIHNsZWVwLCBzcGxpdENhbmRpZGF0ZXMsIHN0cmlwVXNlclNjb3BlUHJlZml4LCB0aHJvdHRsZSwgdG9GaW5pdGVOdW1iZXIsIHRvUmVmLCB0b1VzZXJSZWxhdGl2ZVBhdGgsIHRvVXNlclNjb3BlUGF0aCwgdHJ5UGFyc2VCeUhpbnQsIHRyeVN0cmluZ0FzSW50ZWdlciwgdHJ5U3RyaW5nQXNOdW1iZXIsIHVuaXF1ZUlkLCB1bnJlZiwgdW53cmFwLCB1bndyYXBBcnJheSwgdXNlclBhdGhDYW5kaWRhdGVzLCB2YWx1ZUNsYW1wLCB3aXRoQ3R4LCB3aXRoVGltZW91dCB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUNBLFNBQVNBLElBQWlDO0FBQ3pDLFFBQU1DLElBQUk7QUFDVixNQUFJLE9BQU9BLEVBQUUsZUFBZ0IsV0FBWTtBQUN6QyxRQUFNQyxJQUFPLE1BQU07QUFBQSxFQUFDLEdBQ2RDLElBQVMsQ0FBQ0MsTUFBUztBQUN4QixJQUFJLE9BQU9ILEVBQUVHLENBQUksS0FBTSxlQUFZSCxFQUFFRyxDQUFJLElBQUlGO0FBQUEsRUFDOUM7QUFDQSxFQUFBQyxFQUFPLGFBQWEsR0FDcEJB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V0FBVyxJQUMxRCxNQUFNLFFBQVFBLENBQUssSUFBVUEsRUFBTSxXQUFXLElBQzlDLE9BQU9BLEtBQVUsV0FBaUIsT0FBTyxLQUFLQSxDQUFLLEVBQUUsV0FBVyxJQUM3RDtBQUNSO0FBQ0EsU0FBU29ZLEtBQVk7QUFDcEIsU0FBTyxPQUFPLFNBQVcsT0FBZSxPQUFPLFdBQWE7QUFDN0Q7QUFDQSxTQUFTQyxLQUFXO0FBQ25CLFNBQU8sT0FBTyxPQUFTLE9BQWUsT0FBTyxTQUFXO0FBQ3pEO0FBSUFqWixFQUErQjsiLAogICJuYW1lcyI6IFsiaW5zdGFsbERvbUNvbnN0cnVjdG9yUG9seWZpbGxzIiwgImciLCAic3R1YiIsICJlbnN1cmUiLCAibmFtZSIsICJjcmVhdGVEZWZlcnJlZCIsICJyZXNvbHZlIiwgInJlamVjdCIsICJpc1Jlc29sdmVkIiwgImlzUmVqZWN0ZWQiLCAicmVzIiwgInJlaiIsICJ2YWx1ZSIsICJlcnJvciIsICJBc3luY1F1ZXVlIiwgIm9wZXJhdGlvbiIsICJ3aXRoVGltZW91dCIsICJwcm9taXNlIiwgInRpbWVvdXRNcyIsICJ0aW1lb3V0TWVzc2FnZSIsICJ0aW1lb3V0UHJvbWlzZSIsICJfIiwgInJldHJ5IiwgIm1heFJldHJpZXMiLCAiaW5pdGlhbERlbGF5IiwgImJhY2tvZmZNdWx0aXBsaWVyIiwgImxhc3RFcnJvciIsICJhdHRlbXB0IiwgImRlbGF5IiwgImNvbmN1cnJlbnRMaW1pdCIsICJvcGVyYXRpb25zIiwgImxpbWl0IiwgInJlc3VsdHMiLCAiZXhlY3V0aW5nIiwgInJlc3VsdCIsICJwIiwgIkNoYW5uZWxSZWdpc3RyeSIsICJjaGFubmVsIiwgImxpc3RlbmVycyIsICJsaXN0ZW5lciIsICJleGlzdGVkIiwgImdsb2JhbENoYW5uZWxSZWdpc3RyeSIsICJjcmVhdGVDaGFubmVsUHJveHkiLCAibWV0aG9kcyIsICJwcm94eSIsICJtZXRob2QiLCAiYXJncyIsICJDaGFubmVsSGVhbHRoTW9uaXRvciIsICJjaGFubmVsTmFtZSIsICJoZWFsdGhDaGVjayIsICJpbnRlcnZhbE1zIiwgImV4aXN0aW5nSW50ZXJ2YWwiLCAiaW50ZXJ2YWwiLCAiaXNIZWFsdGh5IiwgInN0YXR1cyIsICJnbG9iYWxDaGFubmVsSGVhbHRoTW9uaXRvciIsICJrZXkiLCAiZGVmYXVsdFZhbHVlIiwgImNhbGxiYWNrRnVuY3Rpb24iLCAiZ2V0T3JJbnNlcnQiLCAibWFwIiwgImdldE9ySW5zZXJ0Q29tcHV0ZWQiLCAiJGZ4eSIsICJpc0hhc1ByaW1pdGl2ZXMiLCAib2JzZXJ2YWJsZSIsICJpc1ByaW1pdGl2ZSIsICJpc09ic2VydmFibGUiLCAib2JqIiwgInRyeVBhcnNlQnlIaW50IiwgImhpbnQiLCAiaGFzUHJvcGVydHkiLCAidiIsICJwcm9wIiwgImhhc1ZhbHVlIiwgIiRnZXRWYWx1ZSIsICIkb2JqT3JQbGFpbiIsICJ1bndyYXAiLCAiZmFsbGJhY2siLCAiZGVyZWYiLCAiZml4RngiLCAiZngiLCAiJHNldCIsICJydiIsICJ2YWwiLCAiZ2V0UmFuZG9tVmFsdWVzIiwgImFycmF5IiwgInZhbHVlcyIsICJpIiwgInZhbHVlQ2xhbXAiLCAibWluIiwgIm1heCIsICJjbGFtcCIsICJ3aXRoQ3R4IiwgInRhcmdldCIsICJnb3QiLCAiVVVJRHY0IiwgImMiLCAiY2FtZWxUb0tlYmFiIiwgInN0ciIsICJrZWJhYlRvQ2FtZWwiLCAiY2hhciIsICJ0b0Zpbml0ZU51bWJlciIsICJudW1iZXIiLCAiY2xhbXBEaW1lbnNpb24iLCAicm91bmROZWFyZXN0IiwgIk4iLCAiZmxvb3JOZWFyZXN0IiwgImNlaWxOZWFyZXN0IiwgImlzVmFsdWVVbml0IiwgImlzVmFsIiwgIm5vcm1hbGl6ZVByaW1pdGl2ZSIsICIkdHJpZ2dlckxvY2siLCAiJGF2b2lkVHJpZ2dlciIsICJyZWYiLCAiY2IiLCAiJHByb3AiLCAidHJ5U3RyaW5nQXNOdW1iZXIiLCAibWF0Y2hlcyIsICJ0cmllZFRvUGFyc2UiLCAiSU5URUdFUl9SRUdFWFAiLCAidHJ5U3RyaW5nQXNJbnRlZ2VyIiwgImlzVmFsaWROdW1iZXIiLCAiY2FuQmVJbnRlZ2VyIiwgImlzQXJyYXlPckl0ZXJhYmxlIiwgImhhbmRsZUxpc3RlbmVycyIsICJyb290IiwgImZuIiwgImhhbmRsZXJzIiwgInVzdWJzIiwgInVuc3ViIiwgImlzUmVmIiwgInVucmVmIiwgInRvUmVmIiwgImlzVmFsdWVSZWYiLCAiZXhpc3RzIiwgImlzT2JqZWN0IiwgImdldFZhbHVlIiwgInBvdGVudGlhbGx5QXN5bmMiLCAicG90ZW50aWFsbHlBc3luY01hcCIsICJtYWtlVHJpZ2dlckxlc3MiLCAic2VsZiIsICJ1bndyYXBBcnJheSIsICJhcnIiLCAiZWwiLCAiaXNOb3RDb21wbGV4QXJyYXkiLCAiaXNDYW5KdXN0UmV0dXJuIiwgImlzVHlwZWRBcnJheSIsICJpc1N5bWJvbCIsICJzeW0iLCAiaXNQcm9taXNlIiwgImlzQ2FuVHJhbnNmZXIiLCAiZGVmYXVsdEJ5VHlwZSIsICJhIiwgImlzSXRlcmFibGUiLCAiaXNLZXlUeXBlIiwgImlzVmFsaWRPYmoiLCAibWVyZ2VCeUtleSIsICJpdGVtcyIsICJlbnRyaWVzIiwgIkkiLCAicmVtb3ZlRXh0cmEiLCAiZXhFbnRyaWVzIiwgImtleXMiLCAiZSIsICJleGUiLCAiZXhjbHVkZSIsICJudyIsICJrIiwgIm9iamVjdEFzc2lnbiIsICJyZW1vdmVOb3RFeGlzdHMiLCAibWVyZ2VLZXkiLCAiRSIsICJtZXJnZU9iaiIsICJpc05vdEVxdWFsIiwgIksiLCAiYmluZEZ4IiwgImJvdW5kQ3R4IiwgImJpbmRDdHgiLCAiY2FsbEJ5UHJvcCIsICJjdHgiLCAiY2FsbEJ5QWxsUHJvcCIsICJjYWxsSWZOb3ROdWxsIiwgImluZGV4IiwgIm9iamVjdEFzc2lnbk5vdEVxdWFsIiwgImRzdCIsICJzcmMiLCAiaXNPYmplY3ROb3RFcXVhbCIsICJiIiwgImJvdW5kQ3R4U3ltYm9sIiwgImlzQXJyYXlJbnZhbGlkS2V5IiwgImludmFsaWRGb3JBcnJheSIsICJpblByb3h5IiwgImNvbnRleHRpZnkiLCAicGMiLCAiZGVlcE9wZXJhdGVBbmRDbG9uZSIsICIkcHJldiIsICJiaW5kRXZlbnQiLCAib24iLCAicmVzb2x2ZWRNYXAiLCAiaGFuZGxlZE1hcCIsICJhY3RXaXRoIiwgInByb21pc2VPclBsYWluIiwgIml0ZW0iLCAiUHJvbWlzZUhhbmRsZXIiLCAiI3Jlc29sdmUiLCAiI3JlamVjdCIsICJkZXNjcmlwdG9yIiwgInByb3RvIiwgInV3cCIsICJuZXdUYXJnZXQiLCAiY3QiLCAicmVjZWl2ZXIiLCAiJHRtcCIsICJQcm9taXNlZCIsICJ0aGlzQXJnIiwgImV4aXN0c01hcCIsICJXZWFrUmVmUHJveHlIYW5kbGVyIiwgInRnIiwgIl9yZWNlaXZlciIsICJXUmVmIiwgImlzV2Vha1JlZiIsICJoYW5kbGVyIiwgInBtIiwgImN2dF9jc190b19vcyIsICJwb3NfaW5fY3MiLCAic2l6ZV9pbl9jcyIsICJvcl9pIiwgInNpemVfaW5fb3MiLCAicG9zX2luX3N3YXAiLCAiY3Z0X29zX3RvX2NzIiwgInBvc19pbl9vcyIsICJwb3NfaW5fY3AiLCAiY3Z0X3JlbF9jc190b19vcyIsICJyZWxfaW5fY3MiLCAicmVsX2luX3N3YXAiLCAiY3Z0X3JlbF9vc190b19jcyIsICJyZWxfaW5fb3MiLCAicmVsX2luX2NwIiwgIm5vcm1hbGl6ZUdyaWRMYXlvdXQiLCAibGF5b3V0IiwgIm8iLCAiY2xhbXBHcmlkQ2VsbFR1cGxlIiwgImNlbGwiLCAiY29scyIsICJyb3dzIiwgInJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbCIsICJsb2NhbFB4IiwgInNpemUiLCAib3JpZW50IiwgIm9wdGlvbnMiLCAiTCIsICJ3IiwgImgiLCAib3NDb29yZCIsICJub3JtYWxpemVkQXJncyIsICJwcm9qZWN0ZWQiLCAiY29udmVydE9yaWVudFB4VG9DWCIsICJub3JtYWxpemVkQ2VsbCIsICJyZWRpcmVjdGVkIiwgInJlZGlyZWN0Q2VsbCIsICJncmlkSXRlbXNBc0FycmF5IiwgImdldFNwYW4iLCAiYXgiLCAiZmFjdG9yIiwgIiRwcmVDZWxsIiwgImdyaWRBcmdzIiwgImljb25zIiwgImNoZWNrQnVzeSIsICJvbmUiLCAicHJlQ2VsbCIsICJjb2x1bW5zIiwgInN1aXRhYmxlIiwgImV4Y2VlZCIsICJidXN5IiwgImNvbXAiLCAibWFrZU9yaWVudEluc2V0IiwgIiRvcmllbnRQeCIsICJib3hJblB4IiwgIm9yaWVudFB4IiwgImdyaWRQeFRvQ1giLCAiZmxvb3JJbk9yaWVudFB4IiwgImluQm94IiwgImZsb29ySW5DWCIsICIkQ1giLCAiY2xpZW50U3BhY2VJbk9yaWVudENYIiwgIiRjbGllbnRQeCIsICJjbGllbnRQeCIsICJvc1NpemUiLCAibm9ybWFsaXplU2xhc2hlcyIsICJpbnB1dCIsICJpc1VzZXJTY29wZVBhdGgiLCAibm9ybWFsaXplZCIsICJzdHJpcFVzZXJTY29wZVByZWZpeCIsICJ0b1VzZXJSZWxhdGl2ZVBhdGgiLCAidG9Vc2VyU2NvcGVQYXRoIiwgInVzZXJQYXRoQ2FuZGlkYXRlcyIsICJzdHJpcHBlZCIsICJyZW5kZXJUYWJOYW1lIiwgInRhYk5hbWUiLCAiUkVNT1ZFX0lGX0hBU19TSU1JTEFSIiwgIm9sZCIsICJpZHgiLCAic3JjT2JqIiwgIlJFTU9WRV9JRl9IQVMiLCAiUFVTSF9PTkNFIiwgIlNQTElDRV9JTlRPX09OQ0UiLCAiY2FjaGVkUGVyRmlsZSIsICJjYWNoZWRQZXJGaWxlTmFtZSIsICJHRVRfT1JfQ0FDSEUiLCAiZmlsZSIsICJyYXciLCAiR0VUX09SX0NBQ0hFX0JZX05BTUUiLCAiZmlsZU5hbWUiLCAibWVyZ2VCeUV4aXN0cyIsICJkYXRhUmVmIiwgInJlZnMiLCAiZGF0YU1hcCIsICJyZWZzTWFwIiwgIlBIT05FX0NBTkRJREFURV9SRSIsICJFWFRfQ1VUX1JFIiwgIkRFRkFVTFRfT1BUSU9OUyIsICJub3JtYWxpemVPbmUiLCAib3B0cyIsICJzIiwgImhhc1BsdXNJblN0YXJ0IiwgImRpZ2l0cyIsICJzcGxpdENhbmRpZGF0ZXMiLCAieCIsICJub3JtYWxpemVQaG9uZXMiLCAib3V0IiwgImNhbmQiLCAibiIsICJnZXRJbmRleEZvclJvdyIsICJyb3ciLCAicG9zIiwgImdldFBob25lc0Zyb21Sb3ciLCAiZmluZER1cGxpY2F0ZVBob25lcyIsICJ1c2VyT3B0aW9ucyIsICJudW1iZXJUb0luZGljZXMiLCAiaW5kZXhUb051bWJlcnNBbGwiLCAicGhvbmVzUmF3IiwgInBob25lcyIsICJzZXRGb3JJbmRleCIsICJkdXBsaWNhdGVzQnlOdW1iZXIiLCAibnVtIiwgInNldCIsICJkdXBsaWNhdGVzQnlJbmRleCIsICJkdXBzIiwgIm51bXMiLCAiZ2V0VGltZVpvbmUiLCAiaXNQdXJlSEhNTSIsICJwYXJzZURhdGVDb3JyZWN0bHkiLCAibXVsdGlwbGllciIsICJtIiwgImhoIiwgIm1tIiwgIm5vdyIsICJwYXJzZUFuZEdldENvcnJlY3RUaW1lIiwgImdldElTT1dlZWtOdW1iZXIiLCAiZGF5TnVtYmVyIiwgInllYXJTdGFydCIsICJub3JtYWxpemVTY2hlZHVsZSIsICJmb3JtYXRBc1RpbWUiLCAidGltZSIsICJmb3JtYXRBc0RhdGUiLCAiZGF0ZSIsICJmb3JtYXREYXRlVGltZSIsICJ0aW1lc3RhbXAiLCAiZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZSIsICJtYXRjaCIsICJob3VycyIsICJtaW51dGVzIiwgInNlY29uZHMiLCAibnVtZXJpYyIsICJpc0RhdGUiLCAiZmlyc3RTdGVwIiwgInNlY29uZFN0ZXAiLCAiY2hlY2tJblRpbWVSYW5nZSIsICJiZWdpblRpbWUiLCAiZW5kVGltZSIsICJjdXJyZW50VGltZSIsICJjaGVja1JlbWFpbnNUaW1lIiwgIm1heERheXMiLCAiZmFjdG9yTWFza2VkIiwgImRhdGVMaW1pdCIsICJjb21wdXRlVGltZWxpbmVPcmRlckluR2VuZXJhbCIsICJ0aW1lT2ZEYXkiLCAibWluVGltZXN0YW1wIiwgImRheVN0YXJ0IiwgImRlYm91bmNlIiwgInRpbWVvdXRJZCIsICJ0aHJvdHRsZSIsICJpblRocm90dGxlIiwgInNsZWVwIiwgIm1zIiwgInVuaXF1ZUlkIiwgInByZWZpeCIsICJkZWVwQ2xvbmUiLCAiY2xvbmVkIiwgImlzRW1wdHkiLCAiaXNCcm93c2VyIiwgImlzV29ya2VyIl0KfQo=
