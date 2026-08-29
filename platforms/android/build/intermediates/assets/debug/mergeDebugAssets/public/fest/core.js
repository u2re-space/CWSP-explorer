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
