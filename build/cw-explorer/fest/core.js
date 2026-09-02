function fe() {
  const e = globalThis;
  if (typeof e.HTMLElement == "function") return;
  const t = class {
  }, r = (n) => {
    typeof e[n] != "function" && (e[n] = t);
  };
  r("EventTarget"), r("Node"), r("Element"), r("HTMLElement"), r("SVGElement"), r("Text"), r("Comment"), r("DocumentFragment"), r("ShadowRoot"), r("HTMLDocument"), r("Document"), r("HTMLBodyElement"), r("HTMLHeadElement"), r("HTMLCanvasElement"), r("HTMLInputElement"), r("HTMLLinkElement"), r("HTMLStyleElement"), r("HTMLPreElement"), r("HTMLDivElement"), r("CSSStyleRule"), r("CSSLayerBlockRule");
}
var j = /* @__PURE__ */ Symbol.for("@fix"), Be = (e) => e?.some?.(d), Ue = (e) => Array.isArray(e) || e instanceof Set || e instanceof Map, d = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint" || typeof e > "u" || e == null, ae = (e, t) => d(e) ? t == "number" ? Number(e) || 0 : t == "string" ? String(e) || "" : t == "boolean" ? !!e : e : null, B = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), J = (e) => B(e, "value"), le = (e) => d(e) ? e : J(e) ? e?.value : e, c = (e, t) => e?.[j] ?? e ?? t ?? t, W = (e) => e != null && (typeof e == "object" || typeof e == "function") && (e instanceof WeakRef || typeof e?.deref == "function") ? W(e?.deref?.()) : e, ce = (e) => {
  if (typeof e == "function" || e == null) return e;
  const t = function() {
  };
  return t[j] = e, t;
}, Ke = (e, t, r) => (e = W(e), e != null && (typeof e == "object" || typeof e == "function") ? e[t] = le(r = W(r)) : e), ue = (e) => crypto?.getRandomValues ? crypto?.getRandomValues?.(e) : (() => {
  const t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) t[r] = Math.floor(Math.random() * 256);
  return t;
})();
function $e(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var Ve = (e, t, r) => Math.max(e, Math.min(t, r)), qe = (e, t) => typeof t == "function" ? t?.bind?.(e) ?? t : t, Ge = () => crypto?.randomUUID ? crypto?.randomUUID?.() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (+e ^ ue?.(/* @__PURE__ */ new Uint8Array(1))?.[0] & 15 >> +e / 4).toString(16)), je = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Je = (e) => e && e?.replace?.(/-([a-z])/g, (t, r) => r.toUpperCase()), Xe = (e, t = 0) => {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}, Ye = (e, t) => !Number.isFinite(t) || t <= 0 || !Number.isFinite(e) ? 0 : Math.min(Math.max(e, 0), t), P = (e, t = 1) => Math.round(e * t) / t, Ze = (e, t = 1) => Math.floor(e * t) / t, Qe = (e, t = 1) => Math.ceil(e * t) / t, et = (e) => typeof CSSStyleValue < "u" && e instanceof CSSStyleValue, tt = (e) => e != null && (typeof e == "boolean" ? e !== !1 : !0) && typeof e != "object" && typeof e != "function", rt = (e) => typeof e == "boolean" ? e ? "" : null : typeof e == "number" ? String(e) : e, N = /* @__PURE__ */ Symbol.for("@trigger-lock"), nt = (e, t, r = "value") => {
  B(e, r) && (e[N] = !0);
  let n;
  try {
    n = t?.();
  } finally {
    B(e, r) && delete e[N];
  }
  return n;
}, it = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const r = parseFloat(t[0][0]);
  return !Number.isNaN(r) && Number.isFinite(r) ? r : null;
}, ye = /^\d+$/g, he = (e) => {
  if (typeof e != "string" || (e = e?.trim?.(), e == "" || e == null)) return null;
  const t = [...e?.matchAll?.(ye)];
  if (t?.length != 1) return null;
  const r = parseInt(t[0][0]);
  return !Number.isNaN(r) && Number.isInteger(r) ? r : null;
}, st = (e) => typeof e == "number" && !Number.isNaN(e), ot = (e) => typeof e == "string" ? he(e) != null : typeof e == "number" && Number.isInteger(e) && e >= 0, ft = (e) => Array.isArray(e) || e != null && typeof e == "object" && typeof e[Symbol.iterator] == "function", at = (e, t, r) => {
  e = e instanceof WeakRef ? e.deref() : e;
  const n = [...Object.entries(r)].map?.(([i, s]) => e?.[t]?.call?.(e, i, s));
  return () => {
    n?.forEach?.((i) => i?.());
  };
}, X = (e) => e instanceof WeakRef || typeof e?.deref == "function", lt = (e) => X(e) ? W(e) : e, ct = (e) => e != null ? X(e) ? e : typeof e == "function" || typeof e == "object" ? new WeakRef(e) : e : e, ut = (e) => (typeof e == "object" || typeof e == "function") && (e?.value != null || e != null && "value" in e), yt = (e) => e != null && (typeof e == "object" || typeof e == "function"), ht = (e) => J(e) ? e?.value : e, mt = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), dt = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), pt = function(e) {
  return (t) => {
    e[N] = !0;
    let r;
    try {
      r = t?.();
    } finally {
      e[N] = !1;
    }
    return r;
  };
}, Y = (e) => Array.isArray(e) ? e?.flatMap?.((t) => Array.isArray(t) ? Y(t) : t) : e, me = (e) => Y(e)?.every?.(R), R = (e) => d(e) || typeof SharedArrayBuffer == "function" && e instanceof SharedArrayBuffer || de(e) || Array.isArray(e) && me(e), de = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), St = (e) => typeof e == "symbol" || typeof e == "object" && Object.prototype.toString.call(e) == "[object Symbol]", gt = (e) => e instanceof Promise || typeof e?.then == "function", Pt = (e) => d(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || typeof MessagePort == "function" && e instanceof MessagePort || typeof ReadableStream == "function" && e instanceof ReadableStream || typeof WritableStream == "function" && e instanceof WritableStream || typeof TransformStream == "function" && e instanceof TransformStream || typeof ImageBitmap == "function" && e instanceof ImageBitmap || typeof VideoFrame == "function" && e instanceof VideoFrame || typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas || typeof RTCDataChannel == "function" && e instanceof RTCDataChannel || typeof AudioData == "function" && e instanceof AudioData || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream || typeof WebTransportSendStream == "function" && e instanceof WebTransportSendStream || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream, bt = (e) => {
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
}, K = /* @__PURE__ */ Symbol.for("@promise"), pe = /* @__PURE__ */ new Set([
  /* @__PURE__ */ Symbol.for("@extract"),
  /* @__PURE__ */ Symbol.for("@origin"),
  /* @__PURE__ */ Symbol.for("@registry"),
  /* @__PURE__ */ Symbol.for("@value"),
  /* @__PURE__ */ Symbol.for("@promise"),
  /* @__PURE__ */ Symbol.for("@behavior"),
  /* @__PURE__ */ Symbol.for("@trigger"),
  /* @__PURE__ */ Symbol.for("@subscribe"),
  /* @__PURE__ */ Symbol.for("@realProp"),
  /* @__PURE__ */ Symbol.for("@trigger-lock"),
  /* @__PURE__ */ Symbol.for("@trigger-less"),
  /* @__PURE__ */ Symbol.for("@trigger-control"),
  /* @__PURE__ */ Symbol.for("@isNotEqual"),
  /* @__PURE__ */ Symbol.for("@fix"),
  /* @__PURE__ */ Symbol.for("@target"),
  /* @__PURE__ */ Symbol.for("@resolved")
]), T = (e) => e instanceof Promise || typeof e?.then == "function", $ = (e) => Promise.resolve(e).then((t) => ({
  status: "fulfilled",
  value: t
}), (t) => ({
  status: "rejected",
  reason: t
})), Z = (e) => Reflect.ownKeys(e).filter((t) => {
  if (pe.has(t)) return !1;
  const r = Object.getOwnPropertyDescriptor(e, t);
  return r !== void 0 && r.enumerable;
}), C = (e, t) => {
  if (e == null || d(e)) return !1;
  if (T(e) || T(e?.[K])) return !0;
  if (typeof e != "object" && typeof e != "function") return !1;
  const r = t ?? /* @__PURE__ */ new WeakSet();
  return r.has(e) ? !1 : (r.add(e), Array.isArray(e) ? e.some((n) => C(n, r)) : e instanceof Map ? [...e.values()].some((n) => C(n, r)) : e instanceof Set ? [...e.values()].some((n) => C(n, r)) : Z(e).some((n) => C(e[n], r)));
};
function E(e, t, r) {
  if (e == null || d(e) || typeof e == "symbol" || T(e)) return e;
  const n = e?.[K];
  if (T(n)) return n;
  if (typeof e != "object" && typeof e != "function" || r.has(e)) return e;
  if (r.add(e), Array.isArray(e)) {
    const s = e.map((o) => E(o, t, r));
    return t == "settled" ? Promise.allSettled(s) : Promise.all(s);
  }
  if (e instanceof Set) {
    const s = [...e.values()].map((o) => E(o, t, r));
    return t == "settled" ? Promise.allSettled(s) : Promise.all(s);
  }
  const i = {};
  if (e instanceof Map) for (const [s, o] of e.entries()) i[s] = E(o, t, r);
  else for (const s of Z(e)) i[s] = E(e[s], t, r);
  return t == "settled" ? Promise.allSettledKeyed(i) : Promise.allKeyed(i);
}
function p(e, t = "all") {
  if (T(e)) return t == "settled" ? $(e) : Promise.resolve(e);
  const r = e?.[K];
  return T(r) ? t == "settled" ? $(r) : Promise.resolve(r) : Promise.resolve(E(e, t, /* @__PURE__ */ new WeakSet()));
}
p.all = (e) => p(e, "all");
p.allSettled = (e) => p(e, "settled");
p.allKeyed = (e) => Promise.allKeyed(e);
p.allSettledKeyed = (e) => Promise.allSettledKeyed(e);
p.try = (e, ...t) => Promise.try(e, ...t).then((r) => p(r, "all"));
var Se = (e) => e instanceof Promise || typeof e?.then == "function";
function Mt(e) {
  return Promise.allKeyed(e);
}
function vt(e) {
  return Promise.allSettledKeyed(e);
}
function At() {
  let e, t, r = !1, n = !1;
  return {
    promise: new Promise((i, s) => {
      e = (o) => {
        !r && !n && (r = !0, i(o));
      }, t = (o) => {
        !r && !n && (n = !0, s(o));
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
var wt = class {
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
function Ct(e, t, r = "Operation timed out") {
  const n = Se(e) ? e : p(e), i = new Promise((s, o) => {
    setTimeout(() => o(new Error(r)), t);
  });
  return Promise.race([n, i]);
}
async function xt(e, t = 3, r = 1e3, n = 2) {
  let i;
  for (let s = 0; s <= t; s++) try {
    return await e();
  } catch (o) {
    if (i = o, s < t) {
      const f = r * Math.pow(n, s);
      await new Promise((a) => setTimeout(a, f));
    }
  }
  throw i;
}
async function Tt(e, t) {
  const r = [], n = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Promise.resolve().then(async () => {
      try {
        const f = await s();
        r[i] = f;
      } catch (f) {
        throw f;
      }
    });
    r[i] = void 0, n.push(o), n.length >= t && (await Promise.race(n), n.splice(n.findIndex((f) => f === o), 1));
  }
  return await Promise.all(n), r;
}
var ge = class {
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
}, Ot = new ge();
function Rt(e, t) {
  const r = {};
  for (const n of t) r[n] = (...i) => e.request(n, i);
  return r;
}
var Pe = class {
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
}, Et = new Pe(), It = (e, t, r = () => null) => e?.getOrInsertComputed?.(t, () => r?.()), _t = (e, t, r = () => null) => e?.getOrInsertComputed?.(t, r), x = (e) => typeof e?.[Symbol.iterator] == "function", Dt = (e) => [
  "symbol",
  "string",
  "number"
].indexOf(typeof e) >= 0, kt = (e) => e != null && (typeof e == "function" || typeof e == "object") && !(e instanceof WeakRef), Wt = (e, t = "id") => {
  const r = Array.from(e?.values?.()).map((i) => [i?.[t], i]), n = new Map(r);
  return Array.from(n?.values?.() || []);
}, be = (e, t, r = null) => {
  const n = r != null && (typeof e == "object" || typeof e == "function") ? e?.[r] ?? e : e;
  let i = [];
  t instanceof Set || t instanceof Map || Array.isArray(t) || x(t) ? i = (n instanceof Set || n instanceof WeakSet ? t?.values?.() : t?.entries?.()) || (Array.isArray(t) || x(t) ? t : []) : (typeof t == "object" || typeof t == "function") && (i = n instanceof Set || n instanceof WeakSet ? Object.values(t) : Object.entries(t));
  let s = [];
  Array.isArray(n) ? s = n.entries() : n instanceof Map || n instanceof WeakMap ? s = n?.entries?.() : n instanceof Set || n instanceof WeakSet ? s = n?.values?.() : (typeof n == "object" || typeof n == "function") && (s = Object.entries(n));
  const o = new Set(Array.from(i).map((l) => l?.[0])), f = new Set(Array.from(s).map((l) => l?.[0])), a = o?.difference?.(f);
  if (Array.isArray(n)) {
    const l = n.filter((y, M) => !a.has(M));
    n.splice(0, n.length), n.push(...l);
  } else if (n instanceof Map || n instanceof Set || n instanceof WeakMap || n instanceof WeakSet) for (const l of a) n.delete(l);
  else if (typeof n == "function" || typeof n == "object") for (const l of a) delete n[l];
  return n;
}, Me = (e, t, r = null, n = !0, i = "id") => {
  const s = r != null && (typeof e == "object" || typeof e == "function") ? e?.[r] ?? e : e;
  let o = null;
  if (n && be(s, t), t instanceof Set || t instanceof Map || Array.isArray(t) || x(t) ? o = (s instanceof Set || s instanceof WeakSet ? t?.values?.() : t?.entries?.()) || (Array.isArray(t) || x(t) ? t : []) : (typeof t == "object" || typeof t == "function") && (o = s instanceof Set || s instanceof WeakSet ? Object.values(t) : Object.entries(t)), s && o && (typeof o == "object" || typeof o == "function")) {
    if (s instanceof Map || s instanceof WeakMap) {
      for (const f of o) s.set(...f);
      return s;
    }
    if (s instanceof Set || s instanceof WeakSet) {
      for (const f of o) {
        const a = f?.[i] ? Array.from(s?.values?.() || []).find((l) => !H?.(l?.[i], f?.[i])) : null;
        a != null ? Me(a, f, null, n, i) : s.add(f);
      }
      return s;
    }
    if (typeof s == "object" || typeof s == "function") {
      if (Array.isArray(s) || x(s)) {
        let f = 0;
        for (const a of o) f < s.length ? s[f++] = a?.[1] : s?.push?.(a?.[1]);
        return s;
      }
      return Object.assign(s, Object.fromEntries([...o || []].filter((f) => typeof f != "symbol")));
    }
  }
  return r != null ? (Reflect.set(e, r, t), e) : typeof t == "object" || typeof t == "function" ? Object.assign(e, t) : t;
}, ve = (e, t) => we.getOrInsert(e, /* @__PURE__ */ new WeakMap()).getOrInsert(t, t?.bind?.(e)), Nt = (e, t) => (typeof t == "function" ? ve(e, t) : t) ?? t, z = (e, t, r, n) => {
  if (t == Symbol.iterator) return Ae(e, r, n);
  if (t == null || typeof t == "symbol" || typeof t == "object" || typeof t == "function") return;
  const i = (s, ...o) => {
    if (s != null) return r?.(s, ...o);
  };
  if (e instanceof Map || e instanceof WeakMap) {
    if (e.has(t)) return i?.(e.get(t), t, null, "@set");
  } else if (e instanceof Set || e instanceof WeakSet) {
    if (e.has(t)) return i?.(t, t, null, "@add");
  } else if (Array.isArray(e) && typeof t == "string" && [...t?.matchAll?.(/^\d+$/g)].length == 1 && Number.isInteger(typeof t == "string" ? parseInt(t) : t)) {
    const s = typeof t == "string" ? parseInt(t) : t;
    return i?.(e?.[s], s, null, "@add");
  } else if (typeof e == "function" || typeof e == "object") return i?.(e?.[t], t, null, "@set");
}, Ht = (e, t = {}) => (Object.entries(t)?.forEach?.(([r, n]) => {
  H(n, e[r]) && (e[r] = n);
}), e), Ae = (e, t, r) => {
  if (e == null) return;
  let n = [];
  if (e instanceof Set || e instanceof Map || typeof e?.keys == "function") return [...e?.keys?.() || n].forEach?.((i) => z(e, i, t, r));
  if (Array.isArray(e) || x(e)) return [...e].forEach?.((i, s) => z(e, s, t, r));
  if (typeof e == "object" || typeof e == "function") return [...Object.keys(e) || n].forEach?.((i) => z(e, i, t, r));
}, Lt = (e, t) => e == null && t == null ? !1 : e == null || t == null ? !0 : e instanceof Map || e instanceof WeakMap ? e.size != t.size || Array.from(e.entries()).some(([r, n]) => !t.has(r) || !H(n, t.get(r))) : e instanceof Set || e instanceof WeakSet ? e.size != t.size || Array.from(e.values()).some((r) => !t.has(r)) : Array.isArray(e) || Array.isArray(t) ? e.length != t.length || e.some((r, n) => !H(r, t[n])) : typeof e == "object" || typeof t == "object" ? JSON.stringify(e) != JSON.stringify(t) : e != t, H = (e, t) => e == null && t == null ? !1 : e == null || t == null ? !0 : typeof e == "boolean" && typeof t == "boolean" ? e != t : typeof e == "number" && typeof t == "number" ? !(e == t || Math.abs(e - t) < 1e-9) : typeof e == "string" && typeof t == "string" ? e != "" && t != "" && e != t || e !== t : typeof e != typeof t ? e !== t : e && t && e != t || e !== t, Q = /* @__PURE__ */ Symbol.for("object.boundCtx");
globalThis[Q] ??= /* @__PURE__ */ new WeakMap();
var we = globalThis[Q], zt = (e, t) => {
  const r = e == null || e < 0 || typeof e != "number" || e == Symbol.iterator || (t != null ? e >= (t?.length || 0) : !1);
  return t != null ? Array.isArray(t) && r : !1;
}, Ft = /* @__PURE__ */ new WeakMap(), Bt = (e, t) => typeof e?.[t] == "function" ? e?.[t]?.bind?.(e) : e?.[t], _ = (e, t, r) => {
  if (Array.isArray(e))
    return e.every(R) ? e.map(t) : e.map((n, i) => _(n, t, [e, i]));
  if (e instanceof Map) {
    const n = Array.from(e.entries());
    return n.map(([i, s]) => s).every(R) ? new Map(n.map(([i, s]) => [i, t(s, i, e)])) : new Map(n.map(([i, s]) => [i, _(s, t, [e, i])]));
  }
  if (e instanceof Set) {
    const n = Array.from(e.entries()), i = n.map(([s, o]) => o);
    return n.every(R) ? new Set(i.map(t)) : new Set(i.map((s) => _(s, t, [e, s])));
  }
  if (typeof e == "object" && e?.constructor == Object && Object.prototype.toString.call(e) == "[object Object]") {
    const n = Array.from(Object.entries(e));
    return n.map(([i, s]) => s).every(R) ? Object.fromEntries(n.map(([i, s]) => [i, t(s, i, e)])) : Object.fromEntries(n.map(([i, s]) => [i, _(s, t, [e, i])]));
  }
  return t(e, r?.[1] ?? "", r?.[0] ?? null);
}, Ut = (e, t, r) => {
  if (e?.[t] != null) {
    const n = e[t];
    return Array.isArray(r) ? n.add(...r) : typeof r == "function" && n.add(r), e;
  }
  return e[t] ??= Array.isArray(r) ? new Set(r) : typeof r == "function" ? /* @__PURE__ */ new Set([r]) : r, e;
}, ee = /* @__PURE__ */ Symbol.for("@resolved-promise"), te = /* @__PURE__ */ Symbol.for("@handled-promise");
globalThis[ee] ??= /* @__PURE__ */ new WeakMap();
globalThis[te] ??= /* @__PURE__ */ new WeakMap();
var g = globalThis[ee], V = globalThis[te], Ce = /* @__PURE__ */ Symbol.for("@extract"), U = (e) => e instanceof Promise || typeof e?.then == "function", m = (e, t) => U(e) ? g?.has?.(e) ? t(g?.get?.(e)) : Promise.try?.(async () => {
  const r = await e;
  return g?.set?.(e, r), r;
})?.then?.(t) : t(e), xe = class {
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
    return g?.has?.(e) && (n = g?.get?.(e))?.[t] != null ? n = g?.get?.(e)?.[t] : n = A(m(e, async (i) => {
      if (c(i) instanceof Promise) return Reflect.get(i, t, r);
      if (d(i)) return t == Symbol.toPrimitive || t == Symbol.toStringTag ? i : void 0;
      let s;
      try {
        s = Reflect.get(i, t, r);
      } catch {
        s = e?.[t];
      }
      return typeof s == "function" ? s?.bind?.(i) : s;
    })), t == Symbol.toStringTag ? d(n) ? String(n ?? "") || "" : n?.[Symbol.toStringTag]?.() || String(n ?? "") || "" : t == Symbol.toPrimitive ? (i) => {
      if (d(n)) return ae(n, i);
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
function A(e, t, r) {
  return e != null && typeof e?.resolved == "function" && e[Ce] != null && C(e) ? A(e.resolved(), t, r) : !U(e) && C(e) ? A(p(e), t, r) : U(e) ? g?.has?.(e) ? g?.get?.(e) : (V?.has?.(e) || e?.then?.((n) => g?.set?.(e, n)), V.getOrInsertComputed(e, () => new Proxy(ce(e), new xe(t, r)))) : e;
}
A.allKeyed = function(e, t, r) {
  return A(Promise.allKeyed(e), t, r);
};
A.allSettledKeyed = function(e, t, r) {
  return A(Promise.allSettledKeyed(e), t, r);
};
var F = /* @__PURE__ */ new WeakMap(), Te = class {
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
function Kt(e) {
  if (!(typeof e == "object" || typeof e == "function") || typeof e == "symbol") return e;
  const t = e instanceof WeakRef || typeof e?.deref == "function";
  if (e = t ? e?.deref?.() : e, e != null && F.has(e)) return F.get(e);
  const r = new Te(), n = new Proxy(t ? e : new WeakRef(e), r);
  return F.set(e, n), n;
}
var re = (e, t, r = 0) => {
  const n = [...t], i = [...e];
  return r % 2 && (i.reverse(), n.reverse()), [(r == 0 || r == 3 ? i[0] : n[0] - i[0]) || 0, (r == 0 || r == 1 ? i[1] : n[1] - i[1]) || 0];
}, $t = (e, t, r = 0) => {
  const n = [...t], i = [...e];
  r % 2 && n.reverse();
  const s = [(r == 0 || r == 3 ? i[0] : n[0] - i[0]) || 0, (r == 0 || r == 1 ? i[1] : n[1] - i[1]) || 0];
  return r % 2 && s.reverse(), s;
}, Vt = (e, t = 0) => {
  const r = [...e];
  return t % 2 && r.reverse(), [(t == 0 || t == 3 ? r[0] : -r[0]) || 0, (t == 0 || t == 1 ? r[1] : -r[1]) || 0];
}, qt = (e, t = 0) => {
  const r = [...e], n = [(t == 0 || t == 3 ? r[0] : -r[0]) || 0, (t == 0 || t == 1 ? r[1] : -r[1]) || 0];
  return t % 2 && n.reverse(), n;
}, b = (e, t = [4, 8]) => {
  if (Array.isArray(e) && e.length >= 2) return [Math.max(1, Math.floor(Number(e[0]) || t[0])), Math.max(1, Math.floor(Number(e[1]) || t[1]))];
  if (e && typeof e == "object") {
    const r = e;
    return [Math.max(1, Math.floor(Number(r.columns) || t[0])), Math.max(1, Math.floor(Number(r.rows) || t[1]))];
  }
  return [t[0], t[1]];
}, Oe = (e, t) => {
  const [r, n] = b(t);
  return [Math.max(0, Math.min(r - 1, Math.floor(Number(e[0]) || 0))), Math.max(0, Math.min(n - 1, Math.floor(Number(e[1]) || 0)))];
}, Gt = (e, t, r, n, i) => {
  const s = b(r), o = Math.max(1, t[0] || 1), f = Math.max(1, t[1] || 1), a = re(e, [o, f], n), l = {
    item: i?.redirect?.item ?? { id: "" },
    list: i?.redirect?.list ?? [],
    items: i?.redirect?.items ?? /* @__PURE__ */ new Map(),
    layout: s,
    size: [o, f]
  }, y = Ie(a, l, n), M = (i?.mode ?? "floor") === "round" ? [Math.round(y[0]), Math.round(y[1])] : [Math.floor(y[0]), Math.floor(y[1])], w = Ee(M, l);
  return Oe(w, s);
}, Re = (e) => e == null ? [] : Array.isArray(e) ? e : e instanceof Map ? Array.from(e.values()) : e instanceof Set || typeof e[Symbol.iterator] == "function" ? Array.from(e) : [], jt = (e, t) => {
  const r = e.style.getPropertyValue(["--ox-c-span", "--ox-r-span"][t]), n = (parseFloat(r || "1") || 1) - 1;
  return Math.min(Math.max(n - 1, 0), 1);
}, Ee = (e, t) => {
  const r = b(t?.layout ?? [4, 8]), n = {
    ...t,
    layout: r
  }, i = Re(n?.items), s = n?.item || {}, o = (S) => i.filter((O) => !(O == s || O?.id == s?.id)).some((O) => (O?.cell?.[0] || 0) == (S[0] || 0) && (O?.cell?.[1] || 0) == (S[1] || 0)), f = [...e];
  if (!o(f)) return [...f];
  const a = r[0] || 4, l = r[1] || 8, y = ([
    [f[0] + 1, f[1]],
    [f[0] - 1, f[1]],
    [f[0], f[1] + 1],
    [f[0], f[1] - 1]
  ].filter((S) => S[0] >= 0 && S[0] < a && S[1] >= 0 && S[1] < l) || []).find((S) => !o(S));
  if (y) return [...y];
  let M = 0, w = !0, h = [...f];
  for (; w && M++ < a * l; ) {
    if (!(w = o(h))) return [...h];
    h[0]++, h[0] >= a && (h[0] = 0, h[1]++, h[1] >= l && (h[1] = 0));
  }
  return [...f];
}, Jt = (e, t, r = 0) => {
  const n = [...t.size], i = [...e], s = b(t.layout ?? [4, 8]);
  return r % 2 && n.reverse(), [P(i[0], n[0] / s[0]), P(i[1], n[1] / s[1])];
}, Ie = (e, t, r = 0) => {
  const n = [...t.size], i = [...e], s = b(t.layout ?? [4, 8]);
  r % 2 && n.reverse();
  const o = [s[0] / n[0], s[1] / n[1]];
  return [i[0] * o[0], i[1] * o[1]];
}, Xt = (e, t, r = 0) => {
  const n = [...e], i = [...t.size], s = b(t.layout ?? [4, 8]);
  r % 2 && i.reverse();
  const o = [i[0] / s[0], i[1] / s[1]];
  return [P(n[0], o[0]), P(n[1], o[1])];
}, Yt = (e, t) => {
  const r = b(t.layout ?? [4, 8]);
  return [Math.min(Math.max(P(e[0]), 0), r[0] - 1), Math.min(Math.max(P(e[1]), 0), r[1] - 1)];
}, Zt = (e, t, r = 0) => {
  const n = [...e], i = [...t.size], s = b(t.layout ?? [4, 8]), o = re(n, i, r), f = r % 2 ? [i[1], i[0]] : [i[0], i[1]];
  return [Math.min(Math.max(P(o[0] / f[0] * s[0], 1), 0), s[0] - 1), Math.min(Math.max(P(o[1] / f[1] * s[1], 1), 0), s[1] - 1)];
}, L = (e) => {
  const t = String(e ?? "").trim();
  return t ? (t.startsWith("/") ? t : `/${t}`).replace(/\/+/g, "/") : "/";
}, ne = (e) => {
  const t = L(e);
  return t === "/user" || t.startsWith("/user/");
}, ie = (e) => {
  const t = L(e);
  return t === "/user" ? "/" : t.startsWith("/user/") ? t.slice(5) || "/" : t;
}, Qt = (e) => ie(e).replace(/^\/+/, ""), er = (e) => {
  const t = L(e);
  return ne(t) ? t : t === "/" ? "/user/" : `/user${t}`;
}, tr = (e) => {
  const t = L(e), r = ie(t);
  return ne(t) ? Array.from(/* @__PURE__ */ new Set([r, t])) : [r];
}, rr = (e) => e ? (e = e?.replace?.(/_/g, " ") || e, e = e?.charAt?.(0)?.toUpperCase?.() + e?.slice?.(1) || e, e) : "", nr = (e, t, r = -1, n = null) => {
  e?.indexOf?.(t) >= 0 ? e.splice(e.indexOf(t), 1) : r >= 0 && r < e?.length && e.splice(r, 1);
}, ir = (e, t) => {
  e?.indexOf?.(t) >= 0 && e.splice(e.indexOf(t), 1);
}, _e = (e, t) => {
  e?.indexOf?.(t) < 0 && e.push(t);
}, sr = (e, t, r = -1) => {
  typeof r != "number" || r < 0 || r >= e?.length ? _e(e, t) : typeof r == "number" && e?.indexOf?.(t) < 0 && e.splice(r, 0, t);
}, D = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new Map(), De = async (e) => {
  try {
    e = await e;
  } catch (n) {
    e = null, console.warn(n);
  }
  if (e == null) return null;
  if (D.has(e) || e?.type != "application/json") return D.get(e);
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
  return e && D.set(e, r), r;
}, or = async (e, t) => {
  try {
    t = await t;
  } catch (n) {
    t = null, console.warn(n);
  }
  if (e == null) return null;
  if (k.has(e)) return k.get(e);
  const r = t != null ? await De(t) : k?.get(e);
  return e && k.set(e, r), r;
}, fr = (e, t) => {
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
    const o = n.get(i);
    o && (e[s] = o);
  }
  for (const [i, s] of n) r.has(i) || e.push(s);
  for (let i = e.length - 1; i >= 0; i--) {
    const s = e[i];
    s?.name && !n.has(s.name) && e.splice(i, 1);
  }
  return e.sort((i, s) => i?.name?.localeCompare?.(s?.name ?? "")), e;
}, ke = /\+?\d[\d\s().\-]{4,}\d/g, We = /(доб\.?|доп\.?|ext\.?|extension)\s*[:#\-x]*\s*\d+.*/i, se = {
  defaultTrunk: "8",
  countryCode: "7",
  cityCode: null,
  stripExtensions: !0,
  minLocal: 5,
  maxLocal: 7
}, I = (e, t = {}) => {
  if (e == null) return null;
  const r = {
    ...se,
    ...t
  };
  let n = String(e).trim();
  if (!n) return null;
  r.stripExtensions && (n = n.replace(We, ""));
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
}, q = (e) => {
  if (e == null) return [];
  const t = String(e), r = t.match(ke);
  return r?.length ? r : t.split(/[;,/|]+/).map((n) => n.trim()).filter(Boolean);
}, Ne = (e, t = {}) => {
  const r = /* @__PURE__ */ new Set();
  if (Array.isArray(e)) for (const n of e) if (typeof n == "string") for (const i of q(n)) {
    const s = I(i, t);
    s && r.add(s);
  }
  else {
    const i = I(n, t);
    i && r.add(i);
  }
  else if (typeof e == "string") for (const n of q(e)) {
    const i = I(n, t);
    i && r.add(i);
  }
  else {
    const n = I(e, t);
    n && r.add(n);
  }
  return [...r];
}, He = (e, t) => Array.isArray(e) && typeof e[1] == "number" ? e[1] : e && typeof e == "object" && typeof e.index == "number" ? e.index : t, Le = (e) => {
  if (Array.isArray(e)) return e[0];
  if (e && typeof e == "object") {
    if ("phones" in e) return e.phones;
    if ("phone" in e) return e.phone;
  }
  return e;
};
function ar(e, t = {}) {
  const r = {
    ...se,
    ...t
  }, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  e.forEach((f, a) => {
    const l = He(f, a), y = Le(f), M = Ne(y, r);
    i.has(l) || i.set(l, /* @__PURE__ */ new Set());
    const w = i.get(l);
    for (const h of M)
      w.add(h), n.has(h) || n.set(h, /* @__PURE__ */ new Set()), n.get(h).add(l);
  });
  const s = {};
  for (const [f, a] of n.entries()) a.size > 1 && (s[f] = [...a].sort((l, y) => l - y));
  const o = {};
  for (const [f, a] of i.entries()) {
    const l = [...a].filter((y) => s[y]);
    l.length && (o[f] = l.sort());
  }
  return {
    duplicatesByNumber: s,
    pairs: Object.entries(o).map(([f, a]) => [Number(f), a]).sort((f, a) => f[0] - a[0]),
    duplicatesByIndex: o,
    normalize: (f) => I(f, r)
  };
}
var oe = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
function ze(e) {
  return e ? /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(e).trim()) : !1;
}
function v(e) {
  if (!e) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "object" && e?.timestamp) return v(e.timestamp);
  if (typeof e == "object" && e?.iso_date) return v(e.iso_date);
  if (typeof e == "object" && e?.date) return v(e.date);
  if (typeof e == "number") {
    if (e >= 1e12) return new Date(e);
    const t = Math.pow(10, 11 - (String(e | 0)?.length || 11)) | 0;
    return new Date(e * t);
  }
  if (typeof e == "string" && ze(e)) {
    const t = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(e.trim());
    if (!t) return /* @__PURE__ */ new Date();
    const [, r, n] = t, i = /* @__PURE__ */ new Date();
    return new Date(i.getFullYear(), i.getMonth(), i.getDate(), Number(r), Number(n), 0, 0);
  }
  return new Date(String(e));
}
function lr(e) {
  return e ? typeof e == "number" ? e >= 1e12 ? e : e * (Math.pow(10, 11 - (String(e | 0)?.length || 11)) | 0) : e instanceof Date ? e.getTime() : v(e)?.getTime?.() ?? Date.now() : Date.now();
}
var cr = (e) => {
  if (!e) return null;
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())), r = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - r);
  const n = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t.getTime() - n.getTime()) / 864e5 + 1) / 7);
}, Fe = (e) => e ? typeof e == "object" && (e.date || e.iso_date || e.timestamp) ? e : { iso_date: String(e) } : null, ur = (e) => {
  const t = Fe(e);
  return t && v(t)?.toLocaleTimeString?.("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
    timeZone: oe()
  }) || "";
}, yr = (e) => v(e)?.toLocaleDateString?.("en-GB", {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric",
  timeZone: oe()
}) || "", hr = (e) => {
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? "" : t.toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}, u = (e) => {
  if (e == null) return NaN;
  if (typeof e == "number" && Number.isFinite(e)) return e;
  const t = v(e);
  if (t && !Number.isNaN(t?.getTime())) return t?.getTime() ?? 0;
  const r = String(e).match(/^(\d{1,2})(?::(\d{2}))?(?::(\d{2}))?/);
  if (r) {
    const i = Number(r[1]) || 0, s = Number(r[2]) || 0, o = Number(r[3]) || 0;
    return ((i * 60 + s) * 60 + o) * 1e3;
  }
  const n = Number(e);
  return Number.isFinite(n) ? n : NaN;
}, mr = (e) => {
  const t = e instanceof Date || typeof e == "string" && e.match(/^\d{4}-\d{2}-\d{2}$/);
  let r = !1;
  try {
    r = u(e) > 0;
  } catch {
    r = !1;
  }
  return !!((t && r) ?? !1);
}, dr = (e, t, r) => e && t ? u(e) < u(r) && u(r) < u(t) : e ? u(e) < u(r) : t ? u(r) < u(t) : !1, pr = (e, t, r, n = 7) => {
  let i = !0;
  if (e && (i &&= u(r) <= u(e)), t && (i &&= u(r) < u(t)), n) {
    const s = u(r) + n * 24 * 60 * 60 * 1e3;
    i &&= u(e) < u(s);
  }
  return i;
}, Sr = (e, t) => {
  const r = u(e) || 0, n = (Number.isFinite(r) ? r : 0) - (t || 0);
  return Math.round(n / 864e5);
};
function gr(e, t) {
  let r;
  return (...n) => {
    clearTimeout(r), r = setTimeout(() => e(...n), t);
  };
}
function Pr(e, t) {
  let r = !1;
  return (...n) => {
    r || (e(...n), r = !0, setTimeout(() => r = !1, t));
  };
}
function br(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Mr(e = "") {
  return `${e}${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}
function G(e) {
  if (e === null || typeof e != "object") return e;
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof Array) return e.map((t) => G(t));
  if (e instanceof Object) {
    const t = {};
    for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = G(e[r]));
    return t;
  }
  return e;
}
function vr(e) {
  return e == null ? !0 : typeof e == "string" ? e.trim().length === 0 : Array.isArray(e) ? e.length === 0 : typeof e == "object" ? Object.keys(e).length === 0 : !1;
}
function Ar() {
  return typeof window < "u" && typeof document < "u";
}
function wr() {
  return typeof self < "u" && typeof window > "u";
}
fe();
export {
  nt as $avoidTrigger,
  j as $fxy,
  le as $getValue,
  Ke as $set,
  N as $triggerLock,
  wt as AsyncQueue,
  Pe as ChannelHealthMonitor,
  ge as ChannelRegistry,
  We as EXT_CUT_RE,
  De as GET_OR_CACHE,
  or as GET_OR_CACHE_BY_NAME,
  ye as INTEGER_REGEXP,
  ke as PHONE_CANDIDATE_RE,
  _e as PUSH_ONCE,
  A as Promised,
  ir as REMOVE_IF_HAS,
  nr as REMOVE_IF_HAS_SIMILAR,
  sr as SPLICE_INTO_ONCE,
  Ge as UUIDv4,
  Kt as WRef,
  Mt as allKeyed,
  vt as allSettledKeyed,
  Nt as bindCtx,
  Ut as bindEvent,
  ve as bindFx,
  we as boundCtx,
  D as cachedPerFile,
  k as cachedPerFileName,
  Ae as callByAllProp,
  z as callByProp,
  je as camelToKebab,
  ot as canBeInteger,
  Qe as ceilNearest,
  dr as checkInTimeRange,
  pr as checkRemainsTime,
  Ve as clamp,
  Ye as clampDimension,
  Oe as clampGridCellTuple,
  Zt as clientSpaceInOrientCX,
  Sr as computeTimelineOrderInGeneral,
  Tt as concurrentLimit,
  Bt as contextify,
  Ie as convertOrientPxToCX,
  Rt as createChannelProxy,
  At as createDeferred,
  re as cvt_cs_to_os,
  $t as cvt_os_to_cs,
  Vt as cvt_rel_cs_to_os,
  qt as cvt_rel_os_to_cs,
  gr as debounce,
  G as deepClone,
  _ as deepOperateAndClone,
  bt as defaultByType,
  W as deref,
  ar as findDuplicatePhones,
  ce as fixFx,
  Yt as floorInCX,
  Xt as floorInOrientPx,
  Ze as floorNearest,
  yr as formatAsDate,
  ur as formatAsTime,
  hr as formatDateTime,
  u as getComparableTimeValue,
  cr as getISOWeekNumber,
  He as getIndexForRow,
  It as getOrInsert,
  _t as getOrInsertComputed,
  Le as getPhonesFromRow,
  ue as getRandomValues,
  jt as getSpan,
  oe as getTimeZone,
  ht as getValue,
  Et as globalChannelHealthMonitor,
  Ot as globalChannelRegistry,
  Re as gridItemsAsArray,
  at as handleListeners,
  C as hasPendingPromises,
  B as hasProperty,
  J as hasValue,
  Ft as inProxy,
  zt as isArrayInvalidKey,
  ft as isArrayOrIterable,
  Ar as isBrowser,
  R as isCanJustReturn,
  Pt as isCanTransfer,
  mr as isDate,
  vr as isEmpty,
  Be as isHasPrimitives,
  x as isIterable,
  Dt as isKeyType,
  me as isNotComplexArray,
  H as isNotEqual,
  yt as isObject,
  Lt as isObjectNotEqual,
  Ue as isObservable,
  d as isPrimitive,
  gt as isPromise,
  ze as isPureHHMM,
  X as isRef,
  St as isSymbol,
  de as isTypedArray,
  ne as isUserScopePath,
  tt as isVal,
  st as isValidNumber,
  kt as isValidObj,
  ut as isValueRef,
  et as isValueUnit,
  wr as isWorker,
  Je as kebabToCamel,
  Jt as makeOrientInset,
  pt as makeTriggerLess,
  fr as mergeByExists,
  Wt as mergeByKey,
  b as normalizeGridLayout,
  I as normalizeOne,
  Ne as normalizePhones,
  rt as normalizePrimitive,
  Fe as normalizeSchedule,
  Me as objectAssign,
  Ht as objectAssignNotEqual,
  lr as parseAndGetCorrectTime,
  v as parseDateCorrectly,
  mt as potentiallyAsync,
  dt as potentiallyAsyncMap,
  Ee as redirectCell,
  be as removeExtra,
  rr as renderTabName,
  Gt as resolveLocalPointToGridCell,
  p as resolved,
  xt as retry,
  P as roundNearest,
  br as sleep,
  q as splitCandidates,
  ie as stripUserScopePrefix,
  Pr as throttle,
  Xe as toFiniteNumber,
  ct as toRef,
  Qt as toUserRelativePath,
  er as toUserScopePath,
  ae as tryParseByHint,
  he as tryStringAsInteger,
  it as tryStringAsNumber,
  Mr as uniqueId,
  lt as unref,
  c as unwrap,
  Y as unwrapArray,
  tr as userPathCandidates,
  $e as valueClamp,
  qe as withCtx,
  Ct as withTimeout
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY29yZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8jcmVnaW9uIHNyYy9ydW50aW1lL2RvbS1nbG9iYWxzLXBvbHlmaWxsLnRzXG5mdW5jdGlvbiBpbnN0YWxsRG9tQ29uc3RydWN0b3JQb2x5ZmlsbHMoKSB7XG5cdGNvbnN0IGcgPSBnbG9iYWxUaGlzO1xuXHRpZiAodHlwZW9mIGcuSFRNTEVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCBzdHViID0gY2xhc3Mge307XG5cdGNvbnN0IGVuc3VyZSA9IChuYW1lKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBnW25hbWVdICE9PSBcImZ1bmN0aW9uXCIpIGdbbmFtZV0gPSBzdHViO1xuXHR9O1xuXHRlbnN1cmUoXCJFdmVudFRhcmdldFwiKTtcblx0ZW5zdXJlKFwiTm9kZVwiKTtcblx0ZW5zdXJlKFwiRWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTEVsZW1lbnRcIik7XG5cdGVuc3VyZShcIlNWR0VsZW1lbnRcIik7XG5cdGVuc3VyZShcIlRleHRcIik7XG5cdGVuc3VyZShcIkNvbW1lbnRcIik7XG5cdGVuc3VyZShcIkRvY3VtZW50RnJhZ21lbnRcIik7XG5cdGVuc3VyZShcIlNoYWRvd1Jvb3RcIik7XG5cdGVuc3VyZShcIkhUTUxEb2N1bWVudFwiKTtcblx0ZW5zdXJlKFwiRG9jdW1lbnRcIik7XG5cdGVuc3VyZShcIkhUTUxCb2R5RWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTEhlYWRFbGVtZW50XCIpO1xuXHRlbnN1cmUoXCJIVE1MQ2FudmFzRWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTElucHV0RWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTExpbmtFbGVtZW50XCIpO1xuXHRlbnN1cmUoXCJIVE1MU3R5bGVFbGVtZW50XCIpO1xuXHRlbnN1cmUoXCJIVE1MUHJlRWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTERpdkVsZW1lbnRcIik7XG5cdGVuc3VyZShcIkNTU1N0eWxlUnVsZVwiKTtcblx0ZW5zdXJlKFwiQ1NTTGF5ZXJCbG9ja1J1bGVcIik7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9QcmltaXRpdmUudHNcbnZhciAkZnh5ID0gU3ltYm9sLmZvcihcIkBmaXhcIik7XG52YXIgaXNIYXNQcmltaXRpdmVzID0gKG9ic2VydmFibGUpID0+IHtcblx0cmV0dXJuIG9ic2VydmFibGU/LnNvbWU/Lihpc1ByaW1pdGl2ZSk7XG59O1xudmFyIGlzT2JzZXJ2YWJsZSA9IChvYnNlcnZhYmxlKSA9PiB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KG9ic2VydmFibGUpIHx8IG9ic2VydmFibGUgaW5zdGFuY2VvZiBTZXQgfHwgb2JzZXJ2YWJsZSBpbnN0YW5jZW9mIE1hcDtcbn07XG52YXIgaXNQcmltaXRpdmUgPSAob2JqKSA9PiB7XG5cdHJldHVybiB0eXBlb2Ygb2JqID09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG9iaiA9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBvYmogPT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIG9iaiA9PSBcImJpZ2ludFwiIHx8IHR5cGVvZiBvYmogPT0gXCJ1bmRlZmluZWRcIiB8fCBvYmogPT0gbnVsbDtcbn07XG52YXIgdHJ5UGFyc2VCeUhpbnQgPSAodmFsdWUsIGhpbnQpID0+IHtcblx0aWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpIHJldHVybiBudWxsO1xuXHRpZiAoaGludCA9PSBcIm51bWJlclwiKSByZXR1cm4gTnVtYmVyKHZhbHVlKSB8fCAwO1xuXHRpZiAoaGludCA9PSBcInN0cmluZ1wiKSByZXR1cm4gU3RyaW5nKHZhbHVlKSB8fCBcIlwiO1xuXHRpZiAoaGludCA9PSBcImJvb2xlYW5cIikgcmV0dXJuICEhdmFsdWU7XG5cdHJldHVybiB2YWx1ZTtcbn07XG52YXIgaGFzUHJvcGVydHkgPSAodiwgcHJvcCA9IFwidmFsdWVcIikgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiB2ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHYgPT0gXCJmdW5jdGlvblwiKSAmJiB2ICE9IG51bGwgJiYgKHByb3AgaW4gdiB8fCB2Py5bcHJvcF0gIT0gbnVsbCk7XG59O1xudmFyIGhhc1ZhbHVlID0gKHYpID0+IHtcblx0cmV0dXJuIGhhc1Byb3BlcnR5KHYsIFwidmFsdWVcIik7XG59O1xudmFyICRnZXRWYWx1ZSA9ICgkb2JqT3JQbGFpbikgPT4ge1xuXHRpZiAoaXNQcmltaXRpdmUoJG9iak9yUGxhaW4pKSByZXR1cm4gJG9iak9yUGxhaW47XG5cdHJldHVybiBoYXNWYWx1ZSgkb2JqT3JQbGFpbikgPyAkb2JqT3JQbGFpbj8udmFsdWUgOiAkb2JqT3JQbGFpbjtcbn07XG52YXIgdW53cmFwID0gKG9iaiwgZmFsbGJhY2spID0+IHtcblx0cmV0dXJuIG9iaj8uWyRmeHldID8/IChvYmogIT0gbnVsbCA/IG9iaiA6IGZhbGxiYWNrKSA/PyBmYWxsYmFjaztcbn07XG52YXIgZGVyZWYgPSAob2JqKSA9PiB7XG5cdGlmIChvYmogIT0gbnVsbCAmJiAodHlwZW9mIG9iaiA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT0gXCJmdW5jdGlvblwiKSAmJiAob2JqIGluc3RhbmNlb2YgV2Vha1JlZiB8fCB0eXBlb2Ygb2JqPy5kZXJlZiA9PSBcImZ1bmN0aW9uXCIpKSByZXR1cm4gZGVyZWYob2JqPy5kZXJlZj8uKCkpO1xuXHRyZXR1cm4gb2JqO1xufTtcbnZhciBmaXhGeCA9IChvYmopID0+IHtcblx0aWYgKHR5cGVvZiBvYmogPT0gXCJmdW5jdGlvblwiIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuXHRjb25zdCBmeCA9IGZ1bmN0aW9uKCkge307XG5cdGZ4WyRmeHldID0gb2JqO1xuXHRyZXR1cm4gZng7XG59O1xudmFyICRzZXQgPSAocnYsIGtleSwgdmFsKSA9PiB7XG5cdHJ2ID0gZGVyZWYocnYpO1xuXHRpZiAocnYgIT0gbnVsbCAmJiAodHlwZW9mIHJ2ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHJ2ID09IFwiZnVuY3Rpb25cIikpIHJldHVybiBydltrZXldID0gJGdldFZhbHVlKHZhbCA9IGRlcmVmKHZhbCkpO1xuXHRyZXR1cm4gcnY7XG59O1xudmFyIGdldFJhbmRvbVZhbHVlcyA9IChhcnJheSkgPT4ge1xuXHRyZXR1cm4gY3J5cHRvPy5nZXRSYW5kb21WYWx1ZXMgPyBjcnlwdG8/LmdldFJhbmRvbVZhbHVlcz8uKGFycmF5KSA6ICgoKSA9PiB7XG5cdFx0Y29uc3QgdmFsdWVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkubGVuZ3RoKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB2YWx1ZXNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xuXHRcdHJldHVybiB2YWx1ZXM7XG5cdH0pKCk7XG59O1xuZnVuY3Rpb24gdmFsdWVDbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufVxudmFyIGNsYW1wID0gKG1pbiwgdmFsLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsLCBtYXgpKTtcbnZhciB3aXRoQ3R4ID0gKHRhcmdldCwgZ290KSA9PiB7XG5cdGlmICh0eXBlb2YgZ290ID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdvdD8uYmluZD8uKHRhcmdldCkgPz8gZ290O1xuXHRyZXR1cm4gZ290O1xufTtcbnZhciBVVUlEdjQgPSAoKSA9PiBjcnlwdG8/LnJhbmRvbVVVSUQgPyBjcnlwdG8/LnJhbmRvbVVVSUQ/LigpIDogXCIxMDAwMDAwMC0xMDAwLTQwMDAtODAwMC0xMDAwMDAwMDAwMDBcIi5yZXBsYWNlKC9bMDE4XS9nLCAoYykgPT4gKCtjIF4gZ2V0UmFuZG9tVmFsdWVzPy4oLyogQF9fUFVSRV9fICovIG5ldyBVaW50OEFycmF5KDEpKT8uWzBdICYgMTUgPj4gK2MgLyA0KS50b1N0cmluZygxNikpO1xudmFyIGNhbWVsVG9LZWJhYiA9IChzdHIpID0+IHtcblx0aWYgKCFzdHIpIHJldHVybiBzdHI7XG5cdHJldHVybiBzdHI/LnJlcGxhY2U/LigvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpO1xufTtcbnZhciBrZWJhYlRvQ2FtZWwgPSAoc3RyKSA9PiB7XG5cdGlmICghc3RyKSByZXR1cm4gc3RyO1xuXHRyZXR1cm4gc3RyPy5yZXBsYWNlPy4oLy0oW2Etel0pL2csIChfLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufTtcbnZhciB0b0Zpbml0ZU51bWJlciA9ICh2YWx1ZSwgZmFsbGJhY2sgPSAwKSA9PiB7XG5cdGNvbnN0IG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKSA/IG51bWJlciA6IGZhbGxiYWNrO1xufTtcbnZhciBjbGFtcERpbWVuc2lvbiA9ICh2YWx1ZSwgbWF4KSA9PiB7XG5cdGlmICghTnVtYmVyLmlzRmluaXRlKG1heCkgfHwgbWF4IDw9IDApIHJldHVybiAwO1xuXHRpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiAwO1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIDApLCBtYXgpO1xufTtcbnZhciByb3VuZE5lYXJlc3QgPSAobnVtYmVyLCBOID0gMSkgPT4gTWF0aC5yb3VuZChudW1iZXIgKiBOKSAvIE47XG52YXIgZmxvb3JOZWFyZXN0ID0gKG51bWJlciwgTiA9IDEpID0+IE1hdGguZmxvb3IobnVtYmVyICogTikgLyBOO1xudmFyIGNlaWxOZWFyZXN0ID0gKG51bWJlciwgTiA9IDEpID0+IE1hdGguY2VpbChudW1iZXIgKiBOKSAvIE47XG52YXIgaXNWYWx1ZVVuaXQgPSAodmFsKSA9PiB0eXBlb2YgQ1NTU3R5bGVWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWwgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIGlzVmFsID0gKHYpID0+IHYgIT0gbnVsbCAmJiAodHlwZW9mIHYgPT0gXCJib29sZWFuXCIgPyB2ICE9PSBmYWxzZSA6IHRydWUpICYmIHR5cGVvZiB2ICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHYgIT0gXCJmdW5jdGlvblwiO1xudmFyIG5vcm1hbGl6ZVByaW1pdGl2ZSA9ICh2YWwpID0+IHtcblx0cmV0dXJuIHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPyBcIlwiIDogbnVsbCA6IHR5cGVvZiB2YWwgPT0gXCJudW1iZXJcIiA/IFN0cmluZyh2YWwpIDogdmFsO1xufTtcbnZhciAkdHJpZ2dlckxvY2sgPSBTeW1ib2wuZm9yKFwiQHRyaWdnZXItbG9ja1wiKTtcbnZhciAkYXZvaWRUcmlnZ2VyID0gKHJlZiwgY2IsICRwcm9wID0gXCJ2YWx1ZVwiKSA9PiB7XG5cdGlmIChoYXNQcm9wZXJ0eShyZWYsICRwcm9wKSkgcmVmWyR0cmlnZ2VyTG9ja10gPSB0cnVlO1xuXHRsZXQgcmVzdWx0O1xuXHR0cnkge1xuXHRcdHJlc3VsdCA9IGNiPy4oKTtcblx0fSBmaW5hbGx5IHtcblx0XHRpZiAoaGFzUHJvcGVydHkocmVmLCAkcHJvcCkpIGRlbGV0ZSByZWZbJHRyaWdnZXJMb2NrXTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbnZhciB0cnlTdHJpbmdBc051bWJlciA9ICh2YWwpID0+IHtcblx0aWYgKHR5cGVvZiB2YWwgIT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG5cdGNvbnN0IG1hdGNoZXMgPSBbLi4udmFsPy5tYXRjaEFsbD8uKC9eXFxkKyhcXC5cXGQrKT8kL2cpXTtcblx0aWYgKG1hdGNoZXM/Lmxlbmd0aCAhPSAxKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgdHJpZWRUb1BhcnNlID0gcGFyc2VGbG9hdChtYXRjaGVzWzBdWzBdKTtcblx0aWYgKCFOdW1iZXIuaXNOYU4odHJpZWRUb1BhcnNlKSAmJiBOdW1iZXIuaXNGaW5pdGUodHJpZWRUb1BhcnNlKSkgcmV0dXJuIHRyaWVkVG9QYXJzZTtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIElOVEVHRVJfUkVHRVhQID0gL15cXGQrJC9nO1xudmFyIHRyeVN0cmluZ0FzSW50ZWdlciA9ICh2YWwpID0+IHtcblx0aWYgKHR5cGVvZiB2YWwgIT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG5cdHZhbCA9IHZhbD8udHJpbT8uKCk7XG5cdGlmICh2YWwgPT0gXCJcIiB8fCB2YWwgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IG1hdGNoZXMgPSBbLi4udmFsPy5tYXRjaEFsbD8uKElOVEVHRVJfUkVHRVhQKV07XG5cdGlmIChtYXRjaGVzPy5sZW5ndGggIT0gMSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHRyaWVkVG9QYXJzZSA9IHBhcnNlSW50KG1hdGNoZXNbMF1bMF0pO1xuXHRpZiAoIU51bWJlci5pc05hTih0cmllZFRvUGFyc2UpICYmIE51bWJlci5pc0ludGVnZXIodHJpZWRUb1BhcnNlKSkgcmV0dXJuIHRyaWVkVG9QYXJzZTtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGlzVmFsaWROdW1iZXIgPSAodmFsKSA9PiB7XG5cdHJldHVybiB0eXBlb2YgdmFsID09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2YWwpO1xufTtcbnZhciBjYW5CZUludGVnZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSByZXR1cm4gdHJ5U3RyaW5nQXNJbnRlZ2VyKHZhbHVlKSAhPSBudWxsO1xuXHRlbHNlIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiB2YWx1ZSA+PSAwO1xufTtcbnZhciBpc0FycmF5T3JJdGVyYWJsZSA9IChvYmopID0+IEFycmF5LmlzQXJyYXkob2JqKSB8fCBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9ialtTeW1ib2wuaXRlcmF0b3JdID09IFwiZnVuY3Rpb25cIjtcbnZhciBoYW5kbGVMaXN0ZW5lcnMgPSAocm9vdCwgZm4sIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdGNvbnN0IHVzdWJzID0gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IHJvb3Q/Lltmbl0/LmNhbGw/Lihyb290LCBuYW1lLCBjYikpO1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdHVzdWJzPy5mb3JFYWNoPy4oKHVuc3ViKSA9PiB1bnN1Yj8uKCkpO1xuXHR9O1xufTtcbnZhciBpc1JlZiA9IChyZWYpID0+IHtcblx0cmV0dXJuIHJlZiBpbnN0YW5jZW9mIFdlYWtSZWYgfHwgdHlwZW9mIHJlZj8uZGVyZWYgPT0gXCJmdW5jdGlvblwiO1xufTtcbnZhciB1bnJlZiA9IChyZWYpID0+IHtcblx0cmV0dXJuIGlzUmVmKHJlZikgPyBkZXJlZihyZWYpIDogcmVmO1xufTtcbnZhciB0b1JlZiA9IChyZWYpID0+IHtcblx0cmV0dXJuIHJlZiAhPSBudWxsID8gaXNSZWYocmVmKSA/IHJlZiA6IHR5cGVvZiByZWYgPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWYgPT0gXCJvYmplY3RcIiA/IG5ldyBXZWFrUmVmKHJlZikgOiByZWYgOiByZWY7XG59O1xudmFyIGlzVmFsdWVSZWYgPSAoZXhpc3RzKSA9PiB7XG5cdHJldHVybiAodHlwZW9mIGV4aXN0cyA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBleGlzdHMgPT0gXCJmdW5jdGlvblwiKSAmJiAoZXhpc3RzPy52YWx1ZSAhPSBudWxsIHx8IGV4aXN0cyAhPSBudWxsICYmIFwidmFsdWVcIiBpbiBleGlzdHMpO1xufTtcbnZhciBpc09iamVjdCA9IChleGlzdHMpID0+IHtcblx0cmV0dXJuIGV4aXN0cyAhPSBudWxsICYmICh0eXBlb2YgZXhpc3RzID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGV4aXN0cyA9PSBcImZ1bmN0aW9uXCIpO1xufTtcbnZhciBnZXRWYWx1ZSA9ICh2YWwpID0+IHtcblx0cmV0dXJuIGhhc1ZhbHVlKHZhbCkgPyB2YWw/LnZhbHVlIDogdmFsO1xufTtcbnZhciBwb3RlbnRpYWxseUFzeW5jID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmIChwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRlbHNlIHJldHVybiBjYj8uKHByb21pc2UpO1xufTtcbnZhciBwb3RlbnRpYWxseUFzeW5jTWFwID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmIChwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRlbHNlIHJldHVybiBjYj8uKHByb21pc2UpO1xufTtcbnZhciBtYWtlVHJpZ2dlckxlc3MgPSBmdW5jdGlvbihzZWxmKSB7XG5cdHJldHVybiAoY2IpID0+IHtcblx0XHRzZWxmWyR0cmlnZ2VyTG9ja10gPSB0cnVlO1xuXHRcdGxldCByZXN1bHQ7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IGNiPy4oKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2VsZlskdHJpZ2dlckxvY2tdID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59O1xudmFyIHVud3JhcEFycmF5ID0gKGFycikgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyPy5mbGF0TWFwPy4oKGVsKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZWwpKSByZXR1cm4gdW53cmFwQXJyYXkoZWwpO1xuXHRcdHJldHVybiBlbDtcblx0fSk7XG5cdGVsc2UgcmV0dXJuIGFycjtcbn07XG52YXIgaXNOb3RDb21wbGV4QXJyYXkgPSAoYXJyKSA9PiB7XG5cdHJldHVybiB1bndyYXBBcnJheShhcnIpPy5ldmVyeT8uKGlzQ2FuSnVzdFJldHVybik7XG59O1xudmFyIGlzQ2FuSnVzdFJldHVybiA9IChvYmopID0+IHtcblx0cmV0dXJuIGlzUHJpbWl0aXZlKG9iaikgfHwgdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09IFwiZnVuY3Rpb25cIiAmJiBvYmogaW5zdGFuY2VvZiBTaGFyZWRBcnJheUJ1ZmZlciB8fCBpc1R5cGVkQXJyYXkob2JqKSB8fCBBcnJheS5pc0FycmF5KG9iaikgJiYgaXNOb3RDb21wbGV4QXJyYXkob2JqKTtcbn07XG52YXIgaXNUeXBlZEFycmF5ID0gKHZhbHVlKSA9PiB7XG5cdHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59O1xudmFyIGlzU3ltYm9sID0gKHN5bSkgPT4gdHlwZW9mIHN5bSA9PT0gXCJzeW1ib2xcIiB8fCB0eXBlb2Ygc3ltID09IFwib2JqZWN0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgPT0gXCJbb2JqZWN0IFN5bWJvbF1cIjtcbnZhciBpc1Byb21pc2UgPSAodGFyZ2V0KSA9PiB7XG5cdHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiB0YXJnZXQ/LnRoZW4gPT0gXCJmdW5jdGlvblwiO1xufTtcbnZhciBpc0NhblRyYW5zZmVyID0gKG9iaikgPT4ge1xuXHRyZXR1cm4gaXNQcmltaXRpdmUob2JqKSB8fCB0eXBlb2YgQXJyYXlCdWZmZXIgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IHR5cGVvZiBNZXNzYWdlUG9ydCA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgTWVzc2FnZVBvcnQgfHwgdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09IFwiZnVuY3Rpb25cIiAmJiBvYmogaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbSB8fCB0eXBlb2YgV3JpdGFibGVTdHJlYW0gPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIFdyaXRhYmxlU3RyZWFtIHx8IHR5cGVvZiBUcmFuc2Zvcm1TdHJlYW0gPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIFRyYW5zZm9ybVN0cmVhbSB8fCB0eXBlb2YgSW1hZ2VCaXRtYXAgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIEltYWdlQml0bWFwIHx8IHR5cGVvZiBWaWRlb0ZyYW1lID09IFwiZnVuY3Rpb25cIiAmJiBvYmogaW5zdGFuY2VvZiBWaWRlb0ZyYW1lIHx8IHR5cGVvZiBPZmZzY3JlZW5DYW52YXMgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcyB8fCB0eXBlb2YgUlRDRGF0YUNoYW5uZWwgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIFJUQ0RhdGFDaGFubmVsIHx8IHR5cGVvZiBBdWRpb0RhdGEgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIEF1ZGlvRGF0YSB8fCB0eXBlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbSA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbSB8fCB0eXBlb2YgV2ViVHJhbnNwb3J0U2VuZFN0cmVhbSA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgV2ViVHJhbnNwb3J0U2VuZFN0cmVhbSB8fCB0eXBlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbSA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbTtcbn07XG52YXIgZGVmYXVsdEJ5VHlwZSA9IChhKSA9PiB7XG5cdHN3aXRjaCAodHlwZW9mIGEpIHtcblx0XHRjYXNlIFwibnVtYmVyXCI6IHJldHVybiAwO1xuXHRcdGNhc2UgXCJzdHJpbmdcIjogcmV0dXJuIFwiXCI7XG5cdFx0Y2FzZSBcImJvb2xlYW5cIjogcmV0dXJuIGZhbHNlO1xuXHRcdGNhc2UgXCJvYmplY3RcIjogcmV0dXJuIG51bGw7XG5cdFx0Y2FzZSBcImZ1bmN0aW9uXCI6IHJldHVybiBudWxsO1xuXHRcdGNhc2UgXCJzeW1ib2xcIjogcmV0dXJuIG51bGw7XG5cdFx0Y2FzZSBcImJpZ2ludFwiOiByZXR1cm4gMG47XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9SZXNvbHZlZC50c1xudmFyICRwcm9taXNlID0gU3ltYm9sLmZvcihcIkBwcm9taXNlXCIpO1xudmFyIFNLSVBfS0VZUyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcblx0U3ltYm9sLmZvcihcIkBleHRyYWN0XCIpLFxuXHRTeW1ib2wuZm9yKFwiQG9yaWdpblwiKSxcblx0U3ltYm9sLmZvcihcIkByZWdpc3RyeVwiKSxcblx0U3ltYm9sLmZvcihcIkB2YWx1ZVwiKSxcblx0U3ltYm9sLmZvcihcIkBwcm9taXNlXCIpLFxuXHRTeW1ib2wuZm9yKFwiQGJlaGF2aW9yXCIpLFxuXHRTeW1ib2wuZm9yKFwiQHRyaWdnZXJcIiksXG5cdFN5bWJvbC5mb3IoXCJAc3Vic2NyaWJlXCIpLFxuXHRTeW1ib2wuZm9yKFwiQHJlYWxQcm9wXCIpLFxuXHRTeW1ib2wuZm9yKFwiQHRyaWdnZXItbG9ja1wiKSxcblx0U3ltYm9sLmZvcihcIkB0cmlnZ2VyLWxlc3NcIiksXG5cdFN5bWJvbC5mb3IoXCJAdHJpZ2dlci1jb250cm9sXCIpLFxuXHRTeW1ib2wuZm9yKFwiQGlzTm90RXF1YWxcIiksXG5cdFN5bWJvbC5mb3IoXCJAZml4XCIpLFxuXHRTeW1ib2wuZm9yKFwiQHRhcmdldFwiKSxcblx0U3ltYm9sLmZvcihcIkByZXNvbHZlZFwiKVxuXSk7XG52YXIgaXNUaGVuYWJsZSQyID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgfHwgdHlwZW9mIHZhbHVlPy50aGVuID09IFwiZnVuY3Rpb25cIjtcbnZhciBzZXR0bGVPbmUgPSAodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbigodikgPT4gKHtcblx0c3RhdHVzOiBcImZ1bGZpbGxlZFwiLFxuXHR2YWx1ZTogdlxufSksIChyZWFzb24pID0+ICh7XG5cdHN0YXR1czogXCJyZWplY3RlZFwiLFxuXHRyZWFzb25cbn0pKTtcbnZhciBvd25FbnVtZXJhYmxlS2V5cyA9IChvYmopID0+IFJlZmxlY3Qub3duS2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XG5cdGlmIChTS0lQX0tFWVMuaGFzKGtleSkpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXHRyZXR1cm4gZGVzYyAhPT0gdm9pZCAwICYmIGRlc2MuZW51bWVyYWJsZTtcbn0pO1xudmFyIGhhc1BlbmRpbmdQcm9taXNlcyA9ICh2YWx1ZSwgc2VlbikgPT4ge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCBpc1ByaW1pdGl2ZSh2YWx1ZSkpIHJldHVybiBmYWxzZTtcblx0aWYgKGlzVGhlbmFibGUkMih2YWx1ZSkgfHwgaXNUaGVuYWJsZSQyKHZhbHVlPy5bJHByb21pc2VdKSkgcmV0dXJuIHRydWU7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHNlZW5TZXQgPSBzZWVuID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRpZiAoc2VlblNldC5oYXModmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdHNlZW5TZXQuYWRkKHZhbHVlKTtcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUuc29tZSgoaXRlbSkgPT4gaGFzUGVuZGluZ1Byb21pc2VzKGl0ZW0sIHNlZW5TZXQpKTtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSByZXR1cm4gWy4uLnZhbHVlLnZhbHVlcygpXS5zb21lKChpdGVtKSA9PiBoYXNQZW5kaW5nUHJvbWlzZXMoaXRlbSwgc2VlblNldCkpO1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHJldHVybiBbLi4udmFsdWUudmFsdWVzKCldLnNvbWUoKGl0ZW0pID0+IGhhc1BlbmRpbmdQcm9taXNlcyhpdGVtLCBzZWVuU2V0KSk7XG5cdHJldHVybiBvd25FbnVtZXJhYmxlS2V5cyh2YWx1ZSkuc29tZSgoa2V5KSA9PiBoYXNQZW5kaW5nUHJvbWlzZXModmFsdWVba2V5XSwgc2VlblNldCkpO1xufTtcbmZ1bmN0aW9uIHJlc29sdmVkRGVlcCh2YWx1ZSwgbW9kZSwgc2Vlbikge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCBpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09IFwic3ltYm9sXCIpIHJldHVybiB2YWx1ZTtcblx0aWYgKGlzVGhlbmFibGUkMih2YWx1ZSkpIHJldHVybiB2YWx1ZTtcblx0Y29uc3Qgc2xvdCA9IHZhbHVlPy5bJHByb21pc2VdO1xuXHRpZiAoaXNUaGVuYWJsZSQyKHNsb3QpKSByZXR1cm4gc2xvdDtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybiB2YWx1ZTtcblx0aWYgKHNlZW4uaGFzKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuXHRzZWVuLmFkZCh2YWx1ZSk7XG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdmFsdWUubWFwKChpdGVtKSA9PiByZXNvbHZlZERlZXAoaXRlbSwgbW9kZSwgc2VlbikpO1xuXHRcdHJldHVybiBtb2RlID09IFwic2V0dGxlZFwiID8gUHJvbWlzZS5hbGxTZXR0bGVkKGl0ZW1zKSA6IFByb21pc2UuYWxsKGl0ZW1zKTtcblx0fVxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRjb25zdCBpdGVtcyA9IFsuLi52YWx1ZS52YWx1ZXMoKV0ubWFwKChpdGVtKSA9PiByZXNvbHZlZERlZXAoaXRlbSwgbW9kZSwgc2VlbikpO1xuXHRcdHJldHVybiBtb2RlID09IFwic2V0dGxlZFwiID8gUHJvbWlzZS5hbGxTZXR0bGVkKGl0ZW1zKSA6IFByb21pc2UuYWxsKGl0ZW1zKTtcblx0fVxuXHRjb25zdCByZWNvcmQgPSB7fTtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSBmb3IgKGNvbnN0IFtrZXksIGl0ZW1dIG9mIHZhbHVlLmVudHJpZXMoKSkgcmVjb3JkW2tleV0gPSByZXNvbHZlZERlZXAoaXRlbSwgbW9kZSwgc2Vlbik7XG5cdGVsc2UgZm9yIChjb25zdCBrZXkgb2Ygb3duRW51bWVyYWJsZUtleXModmFsdWUpKSByZWNvcmRba2V5XSA9IHJlc29sdmVkRGVlcCh2YWx1ZVtrZXldLCBtb2RlLCBzZWVuKTtcblx0cmV0dXJuIG1vZGUgPT0gXCJzZXR0bGVkXCIgPyBQcm9taXNlLmFsbFNldHRsZWRLZXllZChyZWNvcmQpIDogUHJvbWlzZS5hbGxLZXllZChyZWNvcmQpO1xufVxuZnVuY3Rpb24gcmVzb2x2ZWQodmFsdWUsIG1vZGUgPSBcImFsbFwiKSB7XG5cdGlmIChpc1RoZW5hYmxlJDIodmFsdWUpKSByZXR1cm4gbW9kZSA9PSBcInNldHRsZWRcIiA/IHNldHRsZU9uZSh2YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuXHRjb25zdCBzbG90ID0gdmFsdWU/LlskcHJvbWlzZV07XG5cdGlmIChpc1RoZW5hYmxlJDIoc2xvdCkpIHJldHVybiBtb2RlID09IFwic2V0dGxlZFwiID8gc2V0dGxlT25lKHNsb3QpIDogUHJvbWlzZS5yZXNvbHZlKHNsb3QpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc29sdmVkRGVlcCh2YWx1ZSwgbW9kZSwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpKTtcbn1cbnJlc29sdmVkLmFsbCA9ICh2YWx1ZSkgPT4gcmVzb2x2ZWQodmFsdWUsIFwiYWxsXCIpO1xucmVzb2x2ZWQuYWxsU2V0dGxlZCA9ICh2YWx1ZSkgPT4gcmVzb2x2ZWQodmFsdWUsIFwic2V0dGxlZFwiKTtcbnJlc29sdmVkLmFsbEtleWVkID0gKHZhbHVlKSA9PiBQcm9taXNlLmFsbEtleWVkKHZhbHVlKTtcbnJlc29sdmVkLmFsbFNldHRsZWRLZXllZCA9ICh2YWx1ZSkgPT4gUHJvbWlzZS5hbGxTZXR0bGVkS2V5ZWQodmFsdWUpO1xucmVzb2x2ZWQudHJ5ID0gKGNhbGxiYWNrT3JWYWx1ZSwgLi4uYXJncykgPT4gUHJvbWlzZS50cnkoY2FsbGJhY2tPclZhbHVlLCAuLi5hcmdzKS50aGVuKCh2YWx1ZSkgPT4gcmVzb2x2ZWQodmFsdWUsIFwiYWxsXCIpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL1Byb21pc2VVdGlscy50c1xudmFyIGlzVGhlbmFibGUkMSA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiB2YWx1ZT8udGhlbiA9PSBcImZ1bmN0aW9uXCI7XG5mdW5jdGlvbiBhbGxLZXllZChwcm9taXNlcykge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGxLZXllZChwcm9taXNlcyk7XG59XG5mdW5jdGlvbiBhbGxTZXR0bGVkS2V5ZWQocHJvbWlzZXMpIHtcblx0cmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZEtleWVkKHByb21pc2VzKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURlZmVycmVkKCkge1xuXHRsZXQgcmVzb2x2ZTtcblx0bGV0IHJlamVjdDtcblx0bGV0IGlzUmVzb2x2ZWQgPSBmYWxzZTtcblx0bGV0IGlzUmVqZWN0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHtcblx0XHRwcm9taXNlOiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcblx0XHRcdHJlc29sdmUgPSAodmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKCFpc1Jlc29sdmVkICYmICFpc1JlamVjdGVkKSB7XG5cdFx0XHRcdFx0aXNSZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRcdFx0cmVzKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHJlamVjdCA9IChlcnJvcikgPT4ge1xuXHRcdFx0XHRpZiAoIWlzUmVzb2x2ZWQgJiYgIWlzUmVqZWN0ZWQpIHtcblx0XHRcdFx0XHRpc1JlamVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRyZWooZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH0pLFxuXHRcdHJlc29sdmUsXG5cdFx0cmVqZWN0LFxuXHRcdGdldCBpc1Jlc29sdmVkKCkge1xuXHRcdFx0cmV0dXJuIGlzUmVzb2x2ZWQ7XG5cdFx0fSxcblx0XHRnZXQgaXNSZWplY3RlZCgpIHtcblx0XHRcdHJldHVybiBpc1JlamVjdGVkO1xuXHRcdH1cblx0fTtcbn1cbnZhciBBc3luY1F1ZXVlID0gY2xhc3Mge1xuXHRxdWV1ZSA9IFtdO1xuXHRwcm9jZXNzaW5nID0gZmFsc2U7XG5cdGFzeW5jIGFkZChvcGVyYXRpb24pIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5xdWV1ZS5wdXNoKGFzeW5jICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXNvbHZlKGF3YWl0IG9wZXJhdGlvbigpKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucHJvY2VzcygpO1xuXHRcdH0pO1xuXHR9XG5cdGFzeW5jIHByb2Nlc3MoKSB7XG5cdFx0aWYgKHRoaXMucHJvY2Vzc2luZyB8fCB0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXHRcdHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cdFx0d2hpbGUgKHRoaXMucXVldWUubGVuZ3RoID4gMCkgYXdhaXQgdGhpcy5xdWV1ZS5zaGlmdCgpKCk7XG5cdFx0dGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cdH1cblx0Z2V0IGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5sZW5ndGg7XG5cdH1cblx0Z2V0IGlzUHJvY2Vzc2luZygpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9jZXNzaW5nO1xuXHR9XG59O1xuZnVuY3Rpb24gd2l0aFRpbWVvdXQocHJvbWlzZSwgdGltZW91dE1zLCB0aW1lb3V0TWVzc2FnZSA9IFwiT3BlcmF0aW9uIHRpbWVkIG91dFwiKSB7XG5cdGNvbnN0IHBlbmRpbmcgPSBpc1RoZW5hYmxlJDEocHJvbWlzZSkgPyBwcm9taXNlIDogcmVzb2x2ZWQocHJvbWlzZSk7XG5cdGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBFcnJvcih0aW1lb3V0TWVzc2FnZSkpLCB0aW1lb3V0TXMpO1xuXHR9KTtcblx0cmV0dXJuIFByb21pc2UucmFjZShbcGVuZGluZywgdGltZW91dFByb21pc2VdKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHJldHJ5KG9wZXJhdGlvbiwgbWF4UmV0cmllcyA9IDMsIGluaXRpYWxEZWxheSA9IDFlMywgYmFja29mZk11bHRpcGxpZXIgPSAyKSB7XG5cdGxldCBsYXN0RXJyb3I7XG5cdGZvciAobGV0IGF0dGVtcHQgPSAwOyBhdHRlbXB0IDw9IG1heFJldHJpZXM7IGF0dGVtcHQrKykgdHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgb3BlcmF0aW9uKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bGFzdEVycm9yID0gZXJyb3I7XG5cdFx0aWYgKGF0dGVtcHQgPCBtYXhSZXRyaWVzKSB7XG5cdFx0XHRjb25zdCBkZWxheSA9IGluaXRpYWxEZWxheSAqIE1hdGgucG93KGJhY2tvZmZNdWx0aXBsaWVyLCBhdHRlbXB0KTtcblx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cdFx0fVxuXHR9XG5cdHRocm93IGxhc3RFcnJvcjtcbn1cbmFzeW5jIGZ1bmN0aW9uIGNvbmN1cnJlbnRMaW1pdChvcGVyYXRpb25zLCBsaW1pdCkge1xuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGNvbnN0IGV4ZWN1dGluZyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG9wZXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2ldO1xuXHRcdGNvbnN0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9wZXJhdGlvbigpO1xuXHRcdFx0XHRyZXN1bHRzW2ldID0gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmVzdWx0c1tpXSA9IHZvaWQgMDtcblx0XHRleGVjdXRpbmcucHVzaChwcm9taXNlKTtcblx0XHRpZiAoZXhlY3V0aW5nLmxlbmd0aCA+PSBsaW1pdCkge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5yYWNlKGV4ZWN1dGluZyk7XG5cdFx0XHRleGVjdXRpbmcuc3BsaWNlKGV4ZWN1dGluZy5maW5kSW5kZXgoKHApID0+IHAgPT09IHByb21pc2UpLCAxKTtcblx0XHR9XG5cdH1cblx0YXdhaXQgUHJvbWlzZS5hbGwoZXhlY3V0aW5nKTtcblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9DaGFubmVsVXRpbHMudHNcbnZhciBDaGFubmVsUmVnaXN0cnkgPSBjbGFzcyB7XG5cdGNoYW5uZWxzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0bGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0cmVnaXN0ZXIobmFtZSwgY2hhbm5lbCkge1xuXHRcdHRoaXMuY2hhbm5lbHMuc2V0KG5hbWUsIGNoYW5uZWwpO1xuXHRcdGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmdldChuYW1lKTtcblx0XHRpZiAobGlzdGVuZXJzKSBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykgdHJ5IHtcblx0XHRcdGxpc3RlbmVyKGNoYW5uZWwpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBbQ2hhbm5lbFJlZ2lzdHJ5XSBMaXN0ZW5lciBlcnJvciBmb3IgJHtuYW1lfTpgLCBlcnJvcik7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFubmVsO1xuXHR9XG5cdGdldChuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbm5lbHMuZ2V0KG5hbWUpO1xuXHR9XG5cdGhhcyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbm5lbHMuaGFzKG5hbWUpO1xuXHR9XG5cdHVucmVnaXN0ZXIobmFtZSkge1xuXHRcdGNvbnN0IGV4aXN0ZWQgPSB0aGlzLmNoYW5uZWxzLmRlbGV0ZShuYW1lKTtcblx0XHRpZiAoZXhpc3RlZCkge1xuXHRcdFx0Y29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpO1xuXHRcdFx0aWYgKGxpc3RlbmVycykgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHRyeSB7XG5cdFx0XHRcdGxpc3RlbmVyKG51bGwpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgW0NoYW5uZWxSZWdpc3RyeV0gVW5yZWdpc3RlciBsaXN0ZW5lciBlcnJvciBmb3IgJHtuYW1lfTpgLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBleGlzdGVkO1xuXHR9XG5cdG9uQ2hhbm5lbENoYW5nZShuYW1lLCBsaXN0ZW5lcikge1xuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKG5hbWUpKSB0aGlzLmxpc3RlbmVycy5zZXQobmFtZSwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG5cdFx0Y29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpO1xuXHRcdGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuXHRcdGlmICh0aGlzLmNoYW5uZWxzLmhhcyhuYW1lKSkgdHJ5IHtcblx0XHRcdGxpc3RlbmVyKHRoaXMuY2hhbm5lbHMuZ2V0KG5hbWUpKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgW0NoYW5uZWxSZWdpc3RyeV0gSW5pdGlhbCBsaXN0ZW5lciBlcnJvciBmb3IgJHtuYW1lfTpgLCBlcnJvcik7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHRcdGlmIChsaXN0ZW5lcnMuc2l6ZSA9PT0gMCkgdGhpcy5saXN0ZW5lcnMuZGVsZXRlKG5hbWUpO1xuXHRcdH07XG5cdH1cblx0Z2V0Q2hhbm5lbE5hbWVzKCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hhbm5lbHMua2V5cygpKTtcblx0fVxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmNoYW5uZWxzLmNsZWFyKCk7XG5cdFx0dGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcblx0fVxufTtcbnZhciBnbG9iYWxDaGFubmVsUmVnaXN0cnkgPSBuZXcgQ2hhbm5lbFJlZ2lzdHJ5KCk7XG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsUHJveHkoY2hhbm5lbCwgbWV0aG9kcykge1xuXHRjb25zdCBwcm94eSA9IHt9O1xuXHRmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSBwcm94eVttZXRob2RdID0gKC4uLmFyZ3MpID0+IHtcblx0XHRyZXR1cm4gY2hhbm5lbC5yZXF1ZXN0KG1ldGhvZCwgYXJncyk7XG5cdH07XG5cdHJldHVybiBwcm94eTtcbn1cbnZhciBDaGFubmVsSGVhbHRoTW9uaXRvciA9IGNsYXNzIHtcblx0aGVhbHRoQ2hlY2tzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0aW50ZXJ2YWxzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0aGVhbHRoU3RhdHVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0cmVnaXN0ZXJIZWFsdGhDaGVjayhjaGFubmVsTmFtZSwgaGVhbHRoQ2hlY2ssIGludGVydmFsTXMgPSAzZTQpIHtcblx0XHR0aGlzLmhlYWx0aENoZWNrcy5zZXQoY2hhbm5lbE5hbWUsIGhlYWx0aENoZWNrKTtcblx0XHRjb25zdCBleGlzdGluZ0ludGVydmFsID0gdGhpcy5pbnRlcnZhbHMuZ2V0KGNoYW5uZWxOYW1lKTtcblx0XHRpZiAoZXhpc3RpbmdJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbChleGlzdGluZ0ludGVydmFsKTtcblx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGlzSGVhbHRoeSA9IGF3YWl0IGhlYWx0aENoZWNrKCk7XG5cdFx0XHRcdHRoaXMuaGVhbHRoU3RhdHVzLnNldChjaGFubmVsTmFtZSwgaXNIZWFsdGh5KTtcblx0XHRcdFx0aWYgKCFpc0hlYWx0aHkpIGNvbnNvbGUud2FybihgW0NoYW5uZWxIZWFsdGhdIENoYW5uZWwgJyR7Y2hhbm5lbE5hbWV9JyBpcyB1bmhlYWx0aHlgKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtDaGFubmVsSGVhbHRoXSBIZWFsdGggY2hlY2sgZmFpbGVkIGZvciAnJHtjaGFubmVsTmFtZX0nOmAsIGVycm9yKTtcblx0XHRcdFx0dGhpcy5oZWFsdGhTdGF0dXMuc2V0KGNoYW5uZWxOYW1lLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSwgaW50ZXJ2YWxNcyk7XG5cdFx0dGhpcy5pbnRlcnZhbHMuc2V0KGNoYW5uZWxOYW1lLCBpbnRlcnZhbCk7XG5cdFx0aGVhbHRoQ2hlY2soKS50aGVuKChpc0hlYWx0aHkpID0+IHtcblx0XHRcdHRoaXMuaGVhbHRoU3RhdHVzLnNldChjaGFubmVsTmFtZSwgaXNIZWFsdGh5KTtcblx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHR0aGlzLmhlYWx0aFN0YXR1cy5zZXQoY2hhbm5lbE5hbWUsIGZhbHNlKTtcblx0XHR9KTtcblx0fVxuXHRpc0hlYWx0aHkoY2hhbm5lbE5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFsdGhTdGF0dXMuZ2V0KGNoYW5uZWxOYW1lKSA/PyBmYWxzZTtcblx0fVxuXHRnZXRBbGxIZWFsdGhTdGF0dXNlcygpIHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IFtuYW1lLCBzdGF0dXNdIG9mIHRoaXMuaGVhbHRoU3RhdHVzKSByZXN1bHRbbmFtZV0gPSBzdGF0dXM7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRzdG9wTW9uaXRvcmluZyhjaGFubmVsTmFtZSkge1xuXHRcdGNvbnN0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbHMuZ2V0KGNoYW5uZWxOYW1lKTtcblx0XHRpZiAoaW50ZXJ2YWwpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5pbnRlcnZhbHMuZGVsZXRlKGNoYW5uZWxOYW1lKTtcblx0XHR9XG5cdFx0dGhpcy5oZWFsdGhDaGVja3MuZGVsZXRlKGNoYW5uZWxOYW1lKTtcblx0XHR0aGlzLmhlYWx0aFN0YXR1cy5kZWxldGUoY2hhbm5lbE5hbWUpO1xuXHR9XG5cdHN0b3BBbGxNb25pdG9yaW5nKCkge1xuXHRcdGZvciAoY29uc3QgaW50ZXJ2YWwgb2YgdGhpcy5pbnRlcnZhbHMudmFsdWVzKCkpIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdHRoaXMuaW50ZXJ2YWxzLmNsZWFyKCk7XG5cdFx0dGhpcy5oZWFsdGhDaGVja3MuY2xlYXIoKTtcblx0XHR0aGlzLmhlYWx0aFN0YXR1cy5jbGVhcigpO1xuXHR9XG59O1xudmFyIGdsb2JhbENoYW5uZWxIZWFsdGhNb25pdG9yID0gbmV3IENoYW5uZWxIZWFsdGhNb25pdG9yKCk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9VcHNlcnQudHNcbnZhciBnZXRPckluc2VydCA9IChtYXAsIGtleSwgZGVmYXVsdFZhbHVlID0gKCkgPT4gbnVsbCkgPT4ge1xuXHRyZXR1cm4gbWFwPy5nZXRPckluc2VydENvbXB1dGVkPy4oa2V5LCAoKSA9PiBkZWZhdWx0VmFsdWU/LigpKTtcbn07XG52YXIgZ2V0T3JJbnNlcnRDb21wdXRlZCA9IChtYXAsIGtleSwgY2FsbGJhY2tGdW5jdGlvbiA9ICgpID0+IG51bGwpID0+IHtcblx0cmV0dXJuIG1hcD8uZ2V0T3JJbnNlcnRDb21wdXRlZD8uKGtleSwgY2FsbGJhY2tGdW5jdGlvbik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvdXRpbHMvT2JqZWN0LnRzXG52YXIgaXNJdGVyYWJsZSA9IChvYmopID0+IHR5cGVvZiBvYmo/LltTeW1ib2wuaXRlcmF0b3JdID09IFwiZnVuY3Rpb25cIjtcbnZhciBpc0tleVR5cGUgPSAocHJvcCkgPT4gW1xuXHRcInN5bWJvbFwiLFxuXHRcInN0cmluZ1wiLFxuXHRcIm51bWJlclwiXG5dLmluZGV4T2YodHlwZW9mIHByb3ApID49IDA7XG52YXIgaXNWYWxpZE9iaiA9IChvYmopID0+IHtcblx0cmV0dXJuIG9iaiAhPSBudWxsICYmICh0eXBlb2Ygb2JqID09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2Ygb2JqID09IFwib2JqZWN0XCIpICYmICEob2JqIGluc3RhbmNlb2YgV2Vha1JlZik7XG59O1xudmFyIG1lcmdlQnlLZXkgPSAoaXRlbXMsIGtleSA9IFwiaWRcIikgPT4ge1xuXHRjb25zdCBlbnRyaWVzID0gQXJyYXkuZnJvbShpdGVtcz8udmFsdWVzPy4oKSkubWFwKChJKSA9PiBbST8uW2tleV0sIEldKTtcblx0Y29uc3QgbWFwID0gbmV3IE1hcChlbnRyaWVzKTtcblx0cmV0dXJuIEFycmF5LmZyb20obWFwPy52YWx1ZXM/LigpIHx8IFtdKTtcbn07XG52YXIgcmVtb3ZlRXh0cmEgPSAodGFyZ2V0LCB2YWx1ZSwgbmFtZSA9IG51bGwpID0+IHtcblx0Y29uc3QgZXhpc3RzID0gbmFtZSAhPSBudWxsICYmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCIpID8gdGFyZ2V0Py5bbmFtZV0gPz8gdGFyZ2V0IDogdGFyZ2V0O1xuXHRsZXQgZW50cmllcyA9IFtdO1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQgfHwgdmFsdWUgaW5zdGFuY2VvZiBNYXAgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNJdGVyYWJsZSh2YWx1ZSkpIGVudHJpZXMgPSAoZXhpc3RzIGluc3RhbmNlb2YgU2V0IHx8IGV4aXN0cyBpbnN0YW5jZW9mIFdlYWtTZXQgPyB2YWx1ZT8udmFsdWVzPy4oKSA6IHZhbHVlPy5lbnRyaWVzPy4oKSkgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzSXRlcmFibGUodmFsdWUpID8gdmFsdWUgOiBbXSk7XG5cdGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIGVudHJpZXMgPSBleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha1NldCA/IE9iamVjdC52YWx1ZXModmFsdWUpIDogT2JqZWN0LmVudHJpZXModmFsdWUpO1xuXHRsZXQgZXhFbnRyaWVzID0gW107XG5cdGlmIChBcnJheS5pc0FycmF5KGV4aXN0cykpIGV4RW50cmllcyA9IGV4aXN0cy5lbnRyaWVzKCk7XG5cdGVsc2UgaWYgKGV4aXN0cyBpbnN0YW5jZW9mIE1hcCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrTWFwKSBleEVudHJpZXMgPSBleGlzdHM/LmVudHJpZXM/LigpO1xuXHRlbHNlIGlmIChleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha1NldCkgZXhFbnRyaWVzID0gZXhpc3RzPy52YWx1ZXM/LigpO1xuXHRlbHNlIGlmICh0eXBlb2YgZXhpc3RzID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGV4aXN0cyA9PSBcImZ1bmN0aW9uXCIpIGV4RW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGV4aXN0cyk7XG5cdGNvbnN0IGtleXMgPSBuZXcgU2V0KEFycmF5LmZyb20oZW50cmllcykubWFwKChlKSA9PiBlPy5bMF0pKTtcblx0Y29uc3QgZXhlID0gbmV3IFNldChBcnJheS5mcm9tKGV4RW50cmllcykubWFwKChlKSA9PiBlPy5bMF0pKTtcblx0Y29uc3QgZXhjbHVkZSA9IGtleXM/LmRpZmZlcmVuY2U/LihleGUpO1xuXHRpZiAoQXJyYXkuaXNBcnJheShleGlzdHMpKSB7XG5cdFx0Y29uc3QgbncgPSBleGlzdHMuZmlsdGVyKChfLCBJKSA9PiAhZXhjbHVkZS5oYXMoSSkpO1xuXHRcdGV4aXN0cy5zcGxpY2UoMCwgZXhpc3RzLmxlbmd0aCk7XG5cdFx0ZXhpc3RzLnB1c2goLi4ubncpO1xuXHR9IGVsc2UgaWYgKGV4aXN0cyBpbnN0YW5jZW9mIE1hcCB8fCBleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha01hcCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrU2V0KSBmb3IgKGNvbnN0IGsgb2YgZXhjbHVkZSkgZXhpc3RzLmRlbGV0ZShrKTtcblx0ZWxzZSBpZiAodHlwZW9mIGV4aXN0cyA9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIGV4aXN0cyA9PSBcIm9iamVjdFwiKSBmb3IgKGNvbnN0IGsgb2YgZXhjbHVkZSkgZGVsZXRlIGV4aXN0c1trXTtcblx0cmV0dXJuIGV4aXN0cztcbn07XG52YXIgb2JqZWN0QXNzaWduID0gKHRhcmdldCwgdmFsdWUsIG5hbWUgPSBudWxsLCByZW1vdmVOb3RFeGlzdHMgPSB0cnVlLCBtZXJnZUtleSA9IFwiaWRcIikgPT4ge1xuXHRjb25zdCBleGlzdHMgPSBuYW1lICE9IG51bGwgJiYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ID09IFwiZnVuY3Rpb25cIikgPyB0YXJnZXQ/LltuYW1lXSA/PyB0YXJnZXQgOiB0YXJnZXQ7XG5cdGxldCBlbnRyaWVzID0gbnVsbDtcblx0aWYgKHJlbW92ZU5vdEV4aXN0cykgcmVtb3ZlRXh0cmEoZXhpc3RzLCB2YWx1ZSk7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNldCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE1hcCB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc0l0ZXJhYmxlKHZhbHVlKSkgZW50cmllcyA9IChleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha1NldCA/IHZhbHVlPy52YWx1ZXM/LigpIDogdmFsdWU/LmVudHJpZXM/LigpKSB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNJdGVyYWJsZSh2YWx1ZSkgPyB2YWx1ZSA6IFtdKTtcblx0ZWxzZSBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikgZW50cmllcyA9IGV4aXN0cyBpbnN0YW5jZW9mIFNldCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrU2V0ID8gT2JqZWN0LnZhbHVlcyh2YWx1ZSkgOiBPYmplY3QuZW50cmllcyh2YWx1ZSk7XG5cdGlmIChleGlzdHMgJiYgZW50cmllcyAmJiAodHlwZW9mIGVudHJpZXMgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZW50cmllcyA9PSBcImZ1bmN0aW9uXCIpKSB7XG5cdFx0aWYgKGV4aXN0cyBpbnN0YW5jZW9mIE1hcCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrTWFwKSB7XG5cdFx0XHRmb3IgKGNvbnN0IEUgb2YgZW50cmllcykgZXhpc3RzLnNldCguLi5FKTtcblx0XHRcdHJldHVybiBleGlzdHM7XG5cdFx0fVxuXHRcdGlmIChleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha1NldCkge1xuXHRcdFx0Zm9yIChjb25zdCBFIG9mIGVudHJpZXMpIHtcblx0XHRcdFx0Y29uc3QgbWVyZ2VPYmogPSBFPy5bbWVyZ2VLZXldID8gQXJyYXkuZnJvbShleGlzdHM/LnZhbHVlcz8uKCkgfHwgW10pLmZpbmQoKEkpID0+ICFpc05vdEVxdWFsPy4oST8uW21lcmdlS2V5XSwgRT8uW21lcmdlS2V5XSkpIDogbnVsbDtcblx0XHRcdFx0aWYgKG1lcmdlT2JqICE9IG51bGwpIG9iamVjdEFzc2lnbihtZXJnZU9iaiwgRSwgbnVsbCwgcmVtb3ZlTm90RXhpc3RzLCBtZXJnZUtleSk7XG5cdFx0XHRcdGVsc2UgZXhpc3RzLmFkZChFKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBleGlzdHM7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZXhpc3RzID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGV4aXN0cyA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGV4aXN0cykgfHwgaXNJdGVyYWJsZShleGlzdHMpKSB7XG5cdFx0XHRcdGxldCBJID0gMDtcblx0XHRcdFx0Zm9yIChjb25zdCBFIG9mIGVudHJpZXMpIGlmIChJIDwgZXhpc3RzLmxlbmd0aCkgZXhpc3RzW0krK10gPSBFPy5bMV07XG5cdFx0XHRcdGVsc2UgZXhpc3RzPy5wdXNoPy4oRT8uWzFdKTtcblx0XHRcdFx0cmV0dXJuIGV4aXN0cztcblx0XHRcdH1cblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKGV4aXN0cywgT2JqZWN0LmZyb21FbnRyaWVzKFsuLi5lbnRyaWVzIHx8IFtdXS5maWx0ZXIoKEspID0+IHR5cGVvZiBLICE9IFwic3ltYm9sXCIpKSk7XG5cdFx0fVxuXHR9XG5cdGlmIChuYW1lICE9IG51bGwpIHtcblx0XHRSZWZsZWN0LnNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKTtcblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBPYmplY3QuYXNzaWduKHRhcmdldCwgdmFsdWUpO1xuXHRyZXR1cm4gdmFsdWU7XG59O1xudmFyIGJpbmRGeCA9ICh0YXJnZXQsIGZ4KSA9PiB7XG5cdHJldHVybiBib3VuZEN0eC5nZXRPckluc2VydCh0YXJnZXQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpKS5nZXRPckluc2VydChmeCwgZng/LmJpbmQ/Lih0YXJnZXQpKTtcbn07XG52YXIgYmluZEN0eCA9ICh0YXJnZXQsIGZ4KSA9PiAodHlwZW9mIGZ4ID09IFwiZnVuY3Rpb25cIiA/IGJpbmRGeCh0YXJnZXQsIGZ4KSA6IGZ4KSA/PyBmeDtcbnZhciBjYWxsQnlQcm9wID0gKHVud3JhcCwgcHJvcCwgY2IsIGN0eCkgPT4ge1xuXHRpZiAocHJvcCA9PSBTeW1ib2wuaXRlcmF0b3IpIHJldHVybiBjYWxsQnlBbGxQcm9wKHVud3JhcCwgY2IsIGN0eCk7XG5cdGlmIChwcm9wID09IG51bGwgfHwgdHlwZW9mIHByb3AgPT0gXCJzeW1ib2xcIiB8fCB0eXBlb2YgcHJvcCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBwcm9wID09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCBjYWxsSWZOb3ROdWxsID0gKHYsIC4uLmFyZ3MpID0+IHtcblx0XHRpZiAodiAhPSBudWxsKSByZXR1cm4gY2I/Lih2LCAuLi5hcmdzKTtcblx0fTtcblx0aWYgKHVud3JhcCBpbnN0YW5jZW9mIE1hcCB8fCB1bndyYXAgaW5zdGFuY2VvZiBXZWFrTWFwKSB7XG5cdFx0aWYgKHVud3JhcC5oYXMocHJvcCkpIHJldHVybiBjYWxsSWZOb3ROdWxsPy4odW53cmFwLmdldChwcm9wKSwgcHJvcCwgbnVsbCwgXCJAc2V0XCIpO1xuXHR9IGVsc2UgaWYgKHVud3JhcCBpbnN0YW5jZW9mIFNldCB8fCB1bndyYXAgaW5zdGFuY2VvZiBXZWFrU2V0KSB7XG5cdFx0aWYgKHVud3JhcC5oYXMocHJvcCkpIHJldHVybiBjYWxsSWZOb3ROdWxsPy4ocHJvcCwgcHJvcCwgbnVsbCwgXCJAYWRkXCIpO1xuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodW53cmFwKSAmJiB0eXBlb2YgcHJvcCA9PSBcInN0cmluZ1wiICYmIFsuLi5wcm9wPy5tYXRjaEFsbD8uKC9eXFxkKyQvZyldLmxlbmd0aCA9PSAxICYmIE51bWJlci5pc0ludGVnZXIodHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KHByb3ApIDogcHJvcCkpIHtcblx0XHRjb25zdCBpbmRleCA9IHR5cGVvZiBwcm9wID09IFwic3RyaW5nXCIgPyBwYXJzZUludChwcm9wKSA6IHByb3A7XG5cdFx0cmV0dXJuIGNhbGxJZk5vdE51bGw/Lih1bndyYXA/LltpbmRleF0sIGluZGV4LCBudWxsLCBcIkBhZGRcIik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHVud3JhcCA9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHVud3JhcCA9PSBcIm9iamVjdFwiKSByZXR1cm4gY2FsbElmTm90TnVsbD8uKHVud3JhcD8uW3Byb3BdLCBwcm9wLCBudWxsLCBcIkBzZXRcIik7XG59O1xudmFyIG9iamVjdEFzc2lnbk5vdEVxdWFsID0gKGRzdCwgc3JjID0ge30pID0+IHtcblx0T2JqZWN0LmVudHJpZXMoc3JjKT8uZm9yRWFjaD8uKChbaywgdl0pID0+IHtcblx0XHRpZiAoaXNOb3RFcXVhbCh2LCBkc3Rba10pKSBkc3Rba10gPSB2O1xuXHR9KTtcblx0cmV0dXJuIGRzdDtcbn07XG52YXIgY2FsbEJ5QWxsUHJvcCA9ICh1bndyYXAsIGNiLCBjdHgpID0+IHtcblx0aWYgKHVud3JhcCA9PSBudWxsKSByZXR1cm47XG5cdGxldCBrZXlzID0gW107XG5cdGlmICh1bndyYXAgaW5zdGFuY2VvZiBTZXQgfHwgdW53cmFwIGluc3RhbmNlb2YgTWFwIHx8IHR5cGVvZiB1bndyYXA/LmtleXMgPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gWy4uLnVud3JhcD8ua2V5cz8uKCkgfHwga2V5c10uZm9yRWFjaD8uKChwcm9wKSA9PiBjYWxsQnlQcm9wKHVud3JhcCwgcHJvcCwgY2IsIGN0eCkpO1xuXHRpZiAoQXJyYXkuaXNBcnJheSh1bndyYXApIHx8IGlzSXRlcmFibGUodW53cmFwKSkgcmV0dXJuIFsuLi51bndyYXBdLmZvckVhY2g/LigodiwgSSkgPT4gY2FsbEJ5UHJvcCh1bndyYXAsIEksIGNiLCBjdHgpKTtcblx0aWYgKHR5cGVvZiB1bndyYXAgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdW53cmFwID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFsuLi5PYmplY3Qua2V5cyh1bndyYXApIHx8IGtleXNdLmZvckVhY2g/LigocHJvcCkgPT4gY2FsbEJ5UHJvcCh1bndyYXAsIHByb3AsIGNiLCBjdHgpKTtcbn07XG52YXIgaXNPYmplY3ROb3RFcXVhbCA9IChhLCBiKSA9PiB7XG5cdGlmIChhID09IG51bGwgJiYgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGEgaW5zdGFuY2VvZiBNYXAgfHwgYSBpbnN0YW5jZW9mIFdlYWtNYXApIHJldHVybiBhLnNpemUgIT0gYi5zaXplIHx8IEFycmF5LmZyb20oYS5lbnRyaWVzKCkpLnNvbWUoKFtrLCB2XSkgPT4gIWIuaGFzKGspIHx8ICFpc05vdEVxdWFsKHYsIGIuZ2V0KGspKSk7XG5cdGlmIChhIGluc3RhbmNlb2YgU2V0IHx8IGEgaW5zdGFuY2VvZiBXZWFrU2V0KSByZXR1cm4gYS5zaXplICE9IGIuc2l6ZSB8fCBBcnJheS5mcm9tKGEudmFsdWVzKCkpLnNvbWUoKHYpID0+ICFiLmhhcyh2KSk7XG5cdGlmIChBcnJheS5pc0FycmF5KGEpIHx8IEFycmF5LmlzQXJyYXkoYikpIHJldHVybiBhLmxlbmd0aCAhPSBiLmxlbmd0aCB8fCBhLnNvbWUoKHYsIGkpID0+ICFpc05vdEVxdWFsKHYsIGJbaV0pKTtcblx0aWYgKHR5cGVvZiBhID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGIgPT0gXCJvYmplY3RcIikgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpICE9IEpTT04uc3RyaW5naWZ5KGIpO1xuXHRyZXR1cm4gYSAhPSBiO1xufTtcbnZhciBpc05vdEVxdWFsID0gKGEsIGIpID0+IHtcblx0aWYgKGEgPT0gbnVsbCAmJiBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiB0cnVlO1xuXHRpZiAodHlwZW9mIGEgPT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGIgPT0gXCJib29sZWFuXCIpIHJldHVybiBhICE9IGI7XG5cdGlmICh0eXBlb2YgYSA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBiID09IFwibnVtYmVyXCIpIHJldHVybiAhKGEgPT0gYiB8fCBNYXRoLmFicyhhIC0gYikgPCAxZS05KTtcblx0aWYgKHR5cGVvZiBhID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGIgPT0gXCJzdHJpbmdcIikgcmV0dXJuIGEgIT0gXCJcIiAmJiBiICE9IFwiXCIgJiYgYSAhPSBiIHx8IGEgIT09IGI7XG5cdGlmICh0eXBlb2YgYSAhPSB0eXBlb2YgYikgcmV0dXJuIGEgIT09IGI7XG5cdHJldHVybiBhICYmIGIgJiYgYSAhPSBiIHx8IGEgIT09IGI7XG59O1xudmFyIGJvdW5kQ3R4U3ltYm9sID0gU3ltYm9sLmZvcihcIm9iamVjdC5ib3VuZEN0eFwiKTtcbmdsb2JhbFRoaXNbYm91bmRDdHhTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBib3VuZEN0eCA9IGdsb2JhbFRoaXNbYm91bmRDdHhTeW1ib2xdO1xudmFyIGlzQXJyYXlJbnZhbGlkS2V5ID0gKGtleSwgc3JjKSA9PiB7XG5cdGNvbnN0IGludmFsaWRGb3JBcnJheSA9IGtleSA9PSBudWxsIHx8IGtleSA8IDAgfHwgdHlwZW9mIGtleSAhPSBcIm51bWJlclwiIHx8IGtleSA9PSBTeW1ib2wuaXRlcmF0b3IgfHwgKHNyYyAhPSBudWxsID8ga2V5ID49IChzcmM/Lmxlbmd0aCB8fCAwKSA6IGZhbHNlKTtcblx0cmV0dXJuIHNyYyAhPSBudWxsID8gQXJyYXkuaXNBcnJheShzcmMpICYmIGludmFsaWRGb3JBcnJheSA6IGZhbHNlO1xufTtcbnZhciBpblByb3h5ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgY29udGV4dGlmeSA9IChwYywgbmFtZSkgPT4ge1xuXHRyZXR1cm4gdHlwZW9mIHBjPy5bbmFtZV0gPT0gXCJmdW5jdGlvblwiID8gcGM/LltuYW1lXT8uYmluZD8uKHBjKSA6IHBjPy5bbmFtZV07XG59O1xudmFyIGRlZXBPcGVyYXRlQW5kQ2xvbmUgPSAob2JqLCBvcGVyYXRpb24sICRwcmV2KSA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcblx0XHRpZiAob2JqLmV2ZXJ5KGlzQ2FuSnVzdFJldHVybikpIHJldHVybiBvYmoubWFwKG9wZXJhdGlvbik7XG5cdFx0cmV0dXJuIG9iai5tYXAoKHZhbHVlLCBpbmRleCkgPT4gZGVlcE9wZXJhdGVBbmRDbG9uZSh2YWx1ZSwgb3BlcmF0aW9uLCBbb2JqLCBpbmRleF0pKTtcblx0fVxuXHRpZiAob2JqIGluc3RhbmNlb2YgTWFwKSB7XG5cdFx0Y29uc3QgZW50cmllcyA9IEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSk7XG5cdFx0aWYgKGVudHJpZXMubWFwKChba2V5LCB2YWx1ZV0pID0+IHZhbHVlKS5ldmVyeShpc0Nhbkp1c3RSZXR1cm4pKSByZXR1cm4gbmV3IE1hcChlbnRyaWVzLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBvcGVyYXRpb24odmFsdWUsIGtleSwgb2JqKV0pKTtcblx0XHRyZXR1cm4gbmV3IE1hcChlbnRyaWVzLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBkZWVwT3BlcmF0ZUFuZENsb25lKHZhbHVlLCBvcGVyYXRpb24sIFtvYmosIGtleV0pXSkpO1xuXHR9XG5cdGlmIChvYmogaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRjb25zdCBlbnRyaWVzID0gQXJyYXkuZnJvbShvYmouZW50cmllcygpKTtcblx0XHRjb25zdCB2YWx1ZXMgPSBlbnRyaWVzLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB2YWx1ZSk7XG5cdFx0aWYgKGVudHJpZXMuZXZlcnkoaXNDYW5KdXN0UmV0dXJuKSkgcmV0dXJuIG5ldyBTZXQodmFsdWVzLm1hcChvcGVyYXRpb24pKTtcblx0XHRyZXR1cm4gbmV3IFNldCh2YWx1ZXMubWFwKCh2YWx1ZSkgPT4gZGVlcE9wZXJhdGVBbmRDbG9uZSh2YWx1ZSwgb3BlcmF0aW9uLCBbb2JqLCB2YWx1ZV0pKSk7XG5cdH1cblx0aWYgKHR5cGVvZiBvYmogPT0gXCJvYmplY3RcIiAmJiBvYmo/LmNvbnN0cnVjdG9yID09IE9iamVjdCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG5cdFx0Y29uc3QgZW50cmllcyA9IEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMob2JqKSk7XG5cdFx0aWYgKGVudHJpZXMubWFwKChba2V5LCB2YWx1ZV0pID0+IHZhbHVlKS5ldmVyeShpc0Nhbkp1c3RSZXR1cm4pKSByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIG9wZXJhdGlvbih2YWx1ZSwga2V5LCBvYmopXSkpO1xuXHRcdHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoZW50cmllcy5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgZGVlcE9wZXJhdGVBbmRDbG9uZSh2YWx1ZSwgb3BlcmF0aW9uLCBbb2JqLCBrZXldKV0pKTtcblx0fVxuXHRyZXR1cm4gb3BlcmF0aW9uKG9iaiwgJHByZXY/LlsxXSA/PyBcIlwiLCAkcHJldj8uWzBdID8/IG51bGwpO1xufTtcbnZhciBiaW5kRXZlbnQgPSAob24sIGtleSwgdmFsdWUpID0+IHtcblx0aWYgKG9uPy5ba2V5XSAhPSBudWxsKSB7XG5cdFx0Y29uc3QgZXhpc3RzID0gb25ba2V5XTtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGV4aXN0cy5hZGQoLi4udmFsdWUpO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIGV4aXN0cy5hZGQodmFsdWUpO1xuXHRcdHJldHVybiBvbjtcblx0fVxuXHRvbltrZXldID8/PSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IG5ldyBTZXQodmFsdWUpIDogdHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIiA/IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFt2YWx1ZV0pIDogdmFsdWU7XG5cdHJldHVybiBvbjtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9Qcm9taXNlZC50c1xudmFyIHJlc29sdmVkU3ltYm9sID0gU3ltYm9sLmZvcihcIkByZXNvbHZlZC1wcm9taXNlXCIpO1xudmFyIGhhbmRsZWRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiQGhhbmRsZWQtcHJvbWlzZVwiKTtcbmdsb2JhbFRoaXNbcmVzb2x2ZWRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmdsb2JhbFRoaXNbaGFuZGxlZFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHJlc29sdmVkTWFwID0gZ2xvYmFsVGhpc1tyZXNvbHZlZFN5bWJvbF07XG52YXIgaGFuZGxlZE1hcCA9IGdsb2JhbFRoaXNbaGFuZGxlZFN5bWJvbF07XG52YXIgJGV4dHJhY3RLZXkkID0gU3ltYm9sLmZvcihcIkBleHRyYWN0XCIpO1xudmFyIGlzVGhlbmFibGUgPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgdmFsdWU/LnRoZW4gPT0gXCJmdW5jdGlvblwiO1xudmFyIGFjdFdpdGggPSAocHJvbWlzZU9yUGxhaW4sIGNiKSA9PiB7XG5cdGlmIChpc1RoZW5hYmxlKHByb21pc2VPclBsYWluKSkge1xuXHRcdGlmIChyZXNvbHZlZE1hcD8uaGFzPy4ocHJvbWlzZU9yUGxhaW4pKSByZXR1cm4gY2IocmVzb2x2ZWRNYXA/LmdldD8uKHByb21pc2VPclBsYWluKSk7XG5cdFx0cmV0dXJuIFByb21pc2UudHJ5Py4oYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbSA9IGF3YWl0IHByb21pc2VPclBsYWluO1xuXHRcdFx0cmVzb2x2ZWRNYXA/LnNldD8uKHByb21pc2VPclBsYWluLCBpdGVtKTtcblx0XHRcdHJldHVybiBpdGVtO1xuXHRcdH0pPy50aGVuPy4oY2IpO1xuXHR9XG5cdHJldHVybiBjYihwcm9taXNlT3JQbGFpbik7XG59O1xudmFyIFByb21pc2VIYW5kbGVyID0gY2xhc3Mge1xuXHQjcmVzb2x2ZTtcblx0I3JlamVjdDtcblx0Y29uc3RydWN0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dGhpcy4jcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0dGhpcy4jcmVqZWN0ID0gcmVqZWN0O1xuXHR9XG5cdGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvcikge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvcik7XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCksIChvYmopID0+IFJlZmxlY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjcmlwdG9yKSk7XG5cdH1cblx0ZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wKSB7XG5cdFx0aWYgKHVud3JhcCh0YXJnZXQpIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcblx0XHRyZXR1cm4gYWN0V2l0aCh1bndyYXAodGFyZ2V0KSwgKG9iaikgPT4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShvYmosIHByb3ApKTtcblx0fVxuXHRnZXRQcm90b3R5cGVPZih0YXJnZXQpIHtcblx0XHRpZiAodW53cmFwKHRhcmdldCkgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKG9iaikpO1xuXHR9XG5cdHNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pIHtcblx0XHRpZiAodW53cmFwKHRhcmdldCkgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKTtcblx0XHRyZXR1cm4gYWN0V2l0aCh1bndyYXAodGFyZ2V0KSwgKG9iaikgPT4gUmVmbGVjdC5zZXRQcm90b3R5cGVPZihvYmosIHByb3RvKSk7XG5cdH1cblx0aXNFeHRlbnNpYmxlKHRhcmdldCkge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LmlzRXh0ZW5zaWJsZShvYmopKTtcblx0fVxuXHRwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpIHtcblx0XHRpZiAodW53cmFwKHRhcmdldCkgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCksIChvYmopID0+IFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnMob2JqKSk7XG5cdH1cblx0b3duS2V5cyh0YXJnZXQpIHtcblx0XHRjb25zdCB1d3AgPSB1bndyYXAodGFyZ2V0KTtcblx0XHRpZiAodXdwIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIE9iamVjdC5rZXlzKHV3cCk7XG5cdFx0cmV0dXJuIGFjdFdpdGgodXdwLCAob2JqKSA9PiB7XG5cdFx0XHRyZXR1cm4gKHR5cGVvZiBvYmogPT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09IFwiZnVuY3Rpb25cIikgJiYgb2JqICE9IG51bGwgPyBPYmplY3Qua2V5cyhvYmopIDogW107XG5cdFx0fSkgPz8gW107XG5cdH1cblx0Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcCkge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApKTtcblx0fVxuXHRjb25zdHJ1Y3QodGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpIHtcblx0XHRyZXR1cm4gYWN0V2l0aCh1bndyYXAodGFyZ2V0KSwgKGN0KSA9PiBSZWZsZWN0LmNvbnN0cnVjdChjdCwgYXJncywgbmV3VGFyZ2V0KSk7XG5cdH1cblx0aGFzKHRhcmdldCwgcHJvcCkge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LmhhcyhvYmosIHByb3ApKTtcblx0fVxuXHRnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuXHRcdHRhcmdldCA9IHVud3JhcCh0YXJnZXQpO1xuXHRcdGlmIChwcm9wID09IFwicHJvbWlzZVwiKSByZXR1cm4gdGFyZ2V0O1xuXHRcdGlmIChwcm9wID09IFwicmVzb2x2ZVwiICYmIHRoaXMuI3Jlc29sdmUpIHJldHVybiAoLi4uYXJncykgPT4ge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy4jcmVzb2x2ZT8uKC4uLmFyZ3MpO1xuXHRcdFx0dGhpcy4jcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdFx0aWYgKHByb3AgPT0gXCJyZWplY3RcIiAmJiB0aGlzLiNyZWplY3QpIHJldHVybiAoLi4uYXJncykgPT4ge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy4jcmVqZWN0Py4oLi4uYXJncyk7XG5cdFx0XHR0aGlzLiNyZWplY3QgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHRcdGlmIChwcm9wID09IFwidGhlblwiIHx8IHByb3AgPT0gXCJjYXRjaFwiIHx8IHByb3AgPT0gXCJmaW5hbGx5XCIpIHtcblx0XHRcdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gdGFyZ2V0Py5bcHJvcF0/LmJpbmQ/Lih0YXJnZXQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0ICR0bXAgPSBQcm9taXNlLnRyeSgoKSA9PiB0YXJnZXQpO1xuXHRcdFx0XHRyZXR1cm4gJHRtcD8uW3Byb3BdPy5iaW5kPy4oJHRtcCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQgPSB2b2lkIDA7XG5cdFx0aWYgKHJlc29sdmVkTWFwPy5oYXM/Lih0YXJnZXQpICYmIChyZXN1bHQgPSByZXNvbHZlZE1hcD8uZ2V0Py4odGFyZ2V0KSk/Lltwcm9wXSAhPSBudWxsKSByZXN1bHQgPSByZXNvbHZlZE1hcD8uZ2V0Py4odGFyZ2V0KT8uW3Byb3BdO1xuXHRcdGVsc2UgcmVzdWx0ID0gUHJvbWlzZWQoYWN0V2l0aCh0YXJnZXQsIGFzeW5jIChvYmopID0+IHtcblx0XHRcdGlmICh1bndyYXAob2JqKSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmdldChvYmosIHByb3AsIHJlY2VpdmVyKTtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShvYmopKSByZXR1cm4gcHJvcCA9PSBTeW1ib2wudG9QcmltaXRpdmUgfHwgcHJvcCA9PSBTeW1ib2wudG9TdHJpbmdUYWcgPyBvYmogOiB2b2lkIDA7XG5cdFx0XHRsZXQgdmFsdWUgPSB2b2lkIDA7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YWx1ZSA9IFJlZmxlY3QuZ2V0KG9iaiwgcHJvcCwgcmVjZWl2ZXIpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHR2YWx1ZSA9IHRhcmdldD8uW3Byb3BdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB2YWx1ZT8uYmluZD8uKG9iaik7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSkpO1xuXHRcdGlmIChwcm9wID09IFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHJldHVybiBTdHJpbmcocmVzdWx0ID8/IFwiXCIpIHx8IFwiXCI7XG5cdFx0XHRyZXR1cm4gcmVzdWx0Py5bU3ltYm9sLnRvU3RyaW5nVGFnXT8uKCkgfHwgU3RyaW5nKHJlc3VsdCA/PyBcIlwiKSB8fCBcIlwiO1xuXHRcdH1cblx0XHRpZiAocHJvcCA9PSBTeW1ib2wudG9QcmltaXRpdmUpIHJldHVybiAoaGludCkgPT4ge1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHJldHVybiB0cnlQYXJzZUJ5SGludChyZXN1bHQsIGhpbnQpO1xuXHRcdH07XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LnNldChvYmosIHByb3AsIHZhbHVlKSk7XG5cdH1cblx0YXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmdzKSB7XG5cdFx0aWYgKHRoaXMuI3Jlc29sdmUpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuI3Jlc29sdmU/LiguLi5hcmdzKTtcblx0XHRcdHRoaXMuI3Jlc29sdmUgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCwgdGhpcy4jcmVzb2x2ZSksIChvYmopID0+IHtcblx0XHRcdGlmICh0eXBlb2Ygb2JqID09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRpZiAodW53cmFwKG9iaikgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gUmVmbGVjdC5hcHBseShvYmosIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShvYmosIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59O1xuZnVuY3Rpb24gUHJvbWlzZWQocHJvbWlzZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdGlmIChwcm9taXNlICE9IG51bGwgJiYgdHlwZW9mIHByb21pc2U/LnJlc29sdmVkID09IFwiZnVuY3Rpb25cIiAmJiBwcm9taXNlWyRleHRyYWN0S2V5JF0gIT0gbnVsbCAmJiBoYXNQZW5kaW5nUHJvbWlzZXMocHJvbWlzZSkpIHJldHVybiBQcm9taXNlZChwcm9taXNlLnJlc29sdmVkKCksIHJlc29sdmUsIHJlamVjdCk7XG5cdGlmICghaXNUaGVuYWJsZShwcm9taXNlKSAmJiBoYXNQZW5kaW5nUHJvbWlzZXMocHJvbWlzZSkpIHJldHVybiBQcm9taXNlZChyZXNvbHZlZChwcm9taXNlKSwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0aWYgKCFpc1RoZW5hYmxlKHByb21pc2UpKSByZXR1cm4gcHJvbWlzZTtcblx0aWYgKHJlc29sdmVkTWFwPy5oYXM/Lihwcm9taXNlKSkgcmV0dXJuIHJlc29sdmVkTWFwPy5nZXQ/Lihwcm9taXNlKTtcblx0aWYgKCFoYW5kbGVkTWFwPy5oYXM/Lihwcm9taXNlKSkgcHJvbWlzZT8udGhlbj8uKChpdGVtKSA9PiByZXNvbHZlZE1hcD8uc2V0Py4ocHJvbWlzZSwgaXRlbSkpO1xuXHRyZXR1cm4gaGFuZGxlZE1hcC5nZXRPckluc2VydENvbXB1dGVkKHByb21pc2UsICgpID0+IG5ldyBQcm94eShmaXhGeChwcm9taXNlKSwgbmV3IFByb21pc2VIYW5kbGVyKHJlc29sdmUsIHJlamVjdCkpKTtcbn1cblByb21pc2VkLmFsbEtleWVkID0gZnVuY3Rpb24ocHJvbWlzZXMsIHJlc29sdmUsIHJlamVjdCkge1xuXHRyZXR1cm4gUHJvbWlzZWQoUHJvbWlzZS5hbGxLZXllZChwcm9taXNlcyksIHJlc29sdmUsIHJlamVjdCk7XG59O1xuUHJvbWlzZWQuYWxsU2V0dGxlZEtleWVkID0gZnVuY3Rpb24ocHJvbWlzZXMsIHJlc29sdmUsIHJlamVjdCkge1xuXHRyZXR1cm4gUHJvbWlzZWQoUHJvbWlzZS5hbGxTZXR0bGVkS2V5ZWQocHJvbWlzZXMpLCByZXNvbHZlLCByZWplY3QpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL1dSZWYudHNcbnZhciBleGlzdHNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBXZWFrUmVmUHJveHlIYW5kbGVyID0gY2xhc3Mge1xuXHRfZGVyZWYodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIFdlYWtSZWYgfHwgdHlwZW9mIHRhcmdldD8uZGVyZWYgPT0gXCJmdW5jdGlvblwiID8gdGFyZ2V0Py5kZXJlZj8uKCkgOiB0YXJnZXQ7XG5cdH1cblx0Z2V0KHRnLCBwcm9wLCBfcmVjZWl2ZXIpIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLl9kZXJlZih0ZyksIHZhbHVlID0gb2JqPy5bcHJvcF07XG5cdFx0aWYgKChwcm9wID09IFwiZWxlbWVudFwiIHx8IHByb3AgPT0gXCJ2YWx1ZVwiKSAmJiBvYmogJiYgKHZhbHVlID09IG51bGwgfHwgIShwcm9wIGluIG9iaikpKSByZXR1cm4gb2JqO1xuXHRcdGlmIChwcm9wID09IFwiZGVyZWZcIikgcmV0dXJuICgpID0+IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikgcmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fZGVyZWYodGcpPy5bcHJvcF0/LiguLi5hcmdzKTtcblx0XHR9O1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRzZXQodGcsIHByb3AsIHZhbHVlLCBfcmVjZWl2ZXIpIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLl9kZXJlZih0Zyk7XG5cdFx0aWYgKG9iaikgcmV0dXJuIFJlZmxlY3Quc2V0KG9iaiwgcHJvcCwgdmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGhhcyh0ZywgcHJvcCkge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiBwcm9wIGluIG9iajtcblx0fVxuXHRvd25LZXlzKHRnKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gW107XG5cdFx0cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhvYmopO1xuXHR9XG5cdGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0ZywgcHJvcCkge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIHZvaWQgMDtcblx0XHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuXHR9XG5cdGRlbGV0ZVByb3BlcnR5KHRnLCBwcm9wKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gdHJ1ZTtcblx0XHRyZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShvYmosIHByb3ApO1xuXHR9XG5cdGRlZmluZVByb3BlcnR5KHRnLCBwcm9wLCBkZXNjcmlwdG9yKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gdHJ1ZTtcblx0XHRyZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2NyaXB0b3IpO1xuXHR9XG5cdGdldFByb3RvdHlwZU9mKHRnKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cdH1cblx0c2V0UHJvdG90eXBlT2YodGcsIHByb3RvKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gdHJ1ZTtcblx0XHRyZXR1cm4gUmVmbGVjdC5zZXRQcm90b3R5cGVPZihvYmosIHByb3RvKTtcblx0fVxuXHRpc0V4dGVuc2libGUodGcpIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLl9kZXJlZih0Zyk7XG5cdFx0aWYgKCFvYmopIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUob2JqKTtcblx0fVxuXHRwcmV2ZW50RXh0ZW5zaW9ucyh0Zykge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnMob2JqKTtcblx0fVxufTtcbmZ1bmN0aW9uIFdSZWYodGFyZ2V0KSB7XG5cdGlmICghKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ID09IFwiZnVuY3Rpb25cIikgfHwgdHlwZW9mIHRhcmdldCA9PSBcInN5bWJvbFwiKSByZXR1cm4gdGFyZ2V0O1xuXHRjb25zdCBpc1dlYWtSZWYgPSB0YXJnZXQgaW5zdGFuY2VvZiBXZWFrUmVmIHx8IHR5cGVvZiB0YXJnZXQ/LmRlcmVmID09IFwiZnVuY3Rpb25cIjtcblx0dGFyZ2V0ID0gaXNXZWFrUmVmID8gdGFyZ2V0Py5kZXJlZj8uKCkgOiB0YXJnZXQ7XG5cdGlmICh0YXJnZXQgIT0gbnVsbCAmJiBleGlzdHNNYXAuaGFzKHRhcmdldCkpIHJldHVybiBleGlzdHNNYXAuZ2V0KHRhcmdldCk7XG5cdGNvbnN0IGhhbmRsZXIgPSBuZXcgV2Vha1JlZlByb3h5SGFuZGxlcigpO1xuXHRjb25zdCBwbSA9IG5ldyBQcm94eShpc1dlYWtSZWYgPyB0YXJnZXQgOiBuZXcgV2Vha1JlZih0YXJnZXQpLCBoYW5kbGVyKTtcblx0ZXhpc3RzTWFwLnNldCh0YXJnZXQsIHBtKTtcblx0cmV0dXJuIHBtO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvdXRpbHMvQ29udmVydC50c1xudmFyIGN2dF9jc190b19vcyA9IChwb3NfaW5fY3MsIHNpemVfaW5fY3MsIG9yX2kgPSAwKSA9PiB7XG5cdGNvbnN0IHNpemVfaW5fb3MgPSBbLi4uc2l6ZV9pbl9jc107XG5cdGNvbnN0IHBvc19pbl9zd2FwID0gWy4uLnBvc19pbl9jc107XG5cdGlmIChvcl9pICUgMikge1xuXHRcdHBvc19pbl9zd2FwLnJldmVyc2UoKTtcblx0XHRzaXplX2luX29zLnJldmVyc2UoKTtcblx0fVxuXHRyZXR1cm4gWyhvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gcG9zX2luX3N3YXBbMF0gOiBzaXplX2luX29zWzBdIC0gcG9zX2luX3N3YXBbMF0pIHx8IDAsIChvcl9pID09IDAgfHwgb3JfaSA9PSAxID8gcG9zX2luX3N3YXBbMV0gOiBzaXplX2luX29zWzFdIC0gcG9zX2luX3N3YXBbMV0pIHx8IDBdO1xufTtcbnZhciBjdnRfb3NfdG9fY3MgPSAocG9zX2luX29zLCBzaXplX2luX2NzLCBvcl9pID0gMCkgPT4ge1xuXHRjb25zdCBzaXplX2luX29zID0gWy4uLnNpemVfaW5fY3NdO1xuXHRjb25zdCBwb3NfaW5fY3AgPSBbLi4ucG9zX2luX29zXTtcblx0aWYgKG9yX2kgJSAyKSBzaXplX2luX29zLnJldmVyc2UoKTtcblx0Y29uc3QgcG9zX2luX2NzID0gWyhvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gcG9zX2luX2NwWzBdIDogc2l6ZV9pbl9vc1swXSAtIHBvc19pbl9jcFswXSkgfHwgMCwgKG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBwb3NfaW5fY3BbMV0gOiBzaXplX2luX29zWzFdIC0gcG9zX2luX2NwWzFdKSB8fCAwXTtcblx0aWYgKG9yX2kgJSAyKSBwb3NfaW5fY3MucmV2ZXJzZSgpO1xuXHRyZXR1cm4gcG9zX2luX2NzO1xufTtcbnZhciBjdnRfcmVsX2NzX3RvX29zID0gKHJlbF9pbl9jcywgb3JfaSA9IDApID0+IHtcblx0Y29uc3QgcmVsX2luX3N3YXAgPSBbLi4ucmVsX2luX2NzXTtcblx0aWYgKG9yX2kgJSAyKSByZWxfaW5fc3dhcC5yZXZlcnNlKCk7XG5cdHJldHVybiBbKG9yX2kgPT0gMCB8fCBvcl9pID09IDMgPyByZWxfaW5fc3dhcFswXSA6IC1yZWxfaW5fc3dhcFswXSkgfHwgMCwgKG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyByZWxfaW5fc3dhcFsxXSA6IC1yZWxfaW5fc3dhcFsxXSkgfHwgMF07XG59O1xudmFyIGN2dF9yZWxfb3NfdG9fY3MgPSAocmVsX2luX29zLCBvcl9pID0gMCkgPT4ge1xuXHRjb25zdCByZWxfaW5fY3AgPSBbLi4ucmVsX2luX29zXTtcblx0Y29uc3QgcG9zX2luX2NzID0gWyhvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gcmVsX2luX2NwWzBdIDogLXJlbF9pbl9jcFswXSkgfHwgMCwgKG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyByZWxfaW5fY3BbMV0gOiAtcmVsX2luX2NwWzFdKSB8fCAwXTtcblx0aWYgKG9yX2kgJSAyKSBwb3NfaW5fY3MucmV2ZXJzZSgpO1xuXHRyZXR1cm4gcG9zX2luX2NzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL0dyaWRJdGVtVXRpbHMudHNcbnZhciBub3JtYWxpemVHcmlkTGF5b3V0ID0gKGxheW91dCwgZmFsbGJhY2sgPSBbNCwgOF0pID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkobGF5b3V0KSAmJiBsYXlvdXQubGVuZ3RoID49IDIpIHJldHVybiBbTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihOdW1iZXIobGF5b3V0WzBdKSB8fCBmYWxsYmFja1swXSkpLCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKE51bWJlcihsYXlvdXRbMV0pIHx8IGZhbGxiYWNrWzFdKSldO1xuXHRpZiAobGF5b3V0ICYmIHR5cGVvZiBsYXlvdXQgPT09IFwib2JqZWN0XCIpIHtcblx0XHRjb25zdCBvID0gbGF5b3V0O1xuXHRcdHJldHVybiBbTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihOdW1iZXIoby5jb2x1bW5zKSB8fCBmYWxsYmFja1swXSkpLCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKE51bWJlcihvLnJvd3MpIHx8IGZhbGxiYWNrWzFdKSldO1xuXHR9XG5cdHJldHVybiBbZmFsbGJhY2tbMF0sIGZhbGxiYWNrWzFdXTtcbn07XG52YXIgY2xhbXBHcmlkQ2VsbFR1cGxlID0gKGNlbGwsIGxheW91dCkgPT4ge1xuXHRjb25zdCBbY29scywgcm93c10gPSBub3JtYWxpemVHcmlkTGF5b3V0KGxheW91dCk7XG5cdHJldHVybiBbTWF0aC5tYXgoMCwgTWF0aC5taW4oY29scyAtIDEsIE1hdGguZmxvb3IoTnVtYmVyKGNlbGxbMF0pIHx8IDApKSksIE1hdGgubWF4KDAsIE1hdGgubWluKHJvd3MgLSAxLCBNYXRoLmZsb29yKE51bWJlcihjZWxsWzFdKSB8fCAwKSkpXTtcbn07XG52YXIgcmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsID0gKGxvY2FsUHgsIHNpemUsIGxheW91dCwgb3JpZW50LCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IEwgPSBub3JtYWxpemVHcmlkTGF5b3V0KGxheW91dCk7XG5cdGNvbnN0IHcgPSBNYXRoLm1heCgxLCBzaXplWzBdIHx8IDEpO1xuXHRjb25zdCBoID0gTWF0aC5tYXgoMSwgc2l6ZVsxXSB8fCAxKTtcblx0Y29uc3Qgb3NDb29yZCA9IGN2dF9jc190b19vcyhsb2NhbFB4LCBbdywgaF0sIG9yaWVudCk7XG5cdGNvbnN0IG5vcm1hbGl6ZWRBcmdzID0ge1xuXHRcdGl0ZW06IG9wdGlvbnM/LnJlZGlyZWN0Py5pdGVtID8/IHsgaWQ6IFwiXCIgfSxcblx0XHRsaXN0OiBvcHRpb25zPy5yZWRpcmVjdD8ubGlzdCA/PyBbXSxcblx0XHRpdGVtczogb3B0aW9ucz8ucmVkaXJlY3Q/Lml0ZW1zID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksXG5cdFx0bGF5b3V0OiBMLFxuXHRcdHNpemU6IFt3LCBoXVxuXHR9O1xuXHRjb25zdCBwcm9qZWN0ZWQgPSBjb252ZXJ0T3JpZW50UHhUb0NYKG9zQ29vcmQsIG5vcm1hbGl6ZWRBcmdzLCBvcmllbnQpO1xuXHRjb25zdCBub3JtYWxpemVkQ2VsbCA9IChvcHRpb25zPy5tb2RlID8/IFwiZmxvb3JcIikgPT09IFwicm91bmRcIiA/IFtNYXRoLnJvdW5kKHByb2plY3RlZFswXSksIE1hdGgucm91bmQocHJvamVjdGVkWzFdKV0gOiBbTWF0aC5mbG9vcihwcm9qZWN0ZWRbMF0pLCBNYXRoLmZsb29yKHByb2plY3RlZFsxXSldO1xuXHRjb25zdCByZWRpcmVjdGVkID0gcmVkaXJlY3RDZWxsKG5vcm1hbGl6ZWRDZWxsLCBub3JtYWxpemVkQXJncyk7XG5cdHJldHVybiBjbGFtcEdyaWRDZWxsVHVwbGUocmVkaXJlY3RlZCwgTCk7XG59O1xudmFyIGdyaWRJdGVtc0FzQXJyYXkgPSAoaXRlbXMpID0+IHtcblx0aWYgKGl0ZW1zID09IG51bGwpIHJldHVybiBbXTtcblx0aWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpKSByZXR1cm4gaXRlbXM7XG5cdGlmIChpdGVtcyBpbnN0YW5jZW9mIE1hcCkgcmV0dXJuIEFycmF5LmZyb20oaXRlbXMudmFsdWVzKCkpO1xuXHRpZiAoaXRlbXMgaW5zdGFuY2VvZiBTZXQpIHJldHVybiBBcnJheS5mcm9tKGl0ZW1zKTtcblx0aWYgKHR5cGVvZiBpdGVtc1tTeW1ib2wuaXRlcmF0b3JdID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZW1zKTtcblx0cmV0dXJuIFtdO1xufTtcbnZhciBnZXRTcGFuID0gKGVsLCBheCkgPT4ge1xuXHRjb25zdCBwcm9wID0gZWwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShbXCItLW94LWMtc3BhblwiLCBcIi0tb3gtci1zcGFuXCJdW2F4XSksIGZhY3RvciA9IChwYXJzZUZsb2F0KHByb3AgfHwgXCIxXCIpIHx8IDEpIC0gMTtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGZhY3RvciAtIDEsIDApLCAxKTtcbn07XG52YXIgcmVkaXJlY3RDZWxsID0gKCRwcmVDZWxsLCBncmlkQXJncykgPT4ge1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzPy5sYXlvdXQgPz8gWzQsIDhdKTtcblx0Y29uc3Qgbm9ybWFsaXplZEFyZ3MgPSB7XG5cdFx0Li4uZ3JpZEFyZ3MsXG5cdFx0bGF5b3V0XG5cdH07XG5cdGNvbnN0IGljb25zID0gZ3JpZEl0ZW1zQXNBcnJheShub3JtYWxpemVkQXJncz8uaXRlbXMpO1xuXHRjb25zdCBpdGVtID0gbm9ybWFsaXplZEFyZ3M/Lml0ZW0gfHwge307XG5cdGNvbnN0IGNoZWNrQnVzeSA9IChjZWxsKSA9PiB7XG5cdFx0cmV0dXJuIGljb25zLmZpbHRlcigoZSkgPT4gIShlID09IGl0ZW0gfHwgZT8uaWQgPT0gaXRlbT8uaWQpKS5zb21lKChvbmUpID0+IChvbmU/LmNlbGw/LlswXSB8fCAwKSA9PSAoY2VsbFswXSB8fCAwKSAmJiAob25lPy5jZWxsPy5bMV0gfHwgMCkgPT0gKGNlbGxbMV0gfHwgMCkpO1xuXHR9O1xuXHRjb25zdCBwcmVDZWxsID0gWy4uLiRwcmVDZWxsXTtcblx0aWYgKCFjaGVja0J1c3kocHJlQ2VsbCkpIHJldHVybiBbLi4ucHJlQ2VsbF07XG5cdGNvbnN0IGNvbHVtbnMgPSBsYXlvdXRbMF0gfHwgNDtcblx0Y29uc3Qgcm93cyA9IGxheW91dFsxXSB8fCA4O1xuXHRjb25zdCBzdWl0YWJsZSA9IChbXG5cdFx0W3ByZUNlbGxbMF0gKyAxLCBwcmVDZWxsWzFdXSxcblx0XHRbcHJlQ2VsbFswXSAtIDEsIHByZUNlbGxbMV1dLFxuXHRcdFtwcmVDZWxsWzBdLCBwcmVDZWxsWzFdICsgMV0sXG5cdFx0W3ByZUNlbGxbMF0sIHByZUNlbGxbMV0gLSAxXVxuXHRdLmZpbHRlcigodikgPT4ge1xuXHRcdHJldHVybiB2WzBdID49IDAgJiYgdlswXSA8IGNvbHVtbnMgJiYgdlsxXSA+PSAwICYmIHZbMV0gPCByb3dzO1xuXHR9KSB8fCBbXSkuZmluZCgodikgPT4gIWNoZWNrQnVzeSh2KSk7XG5cdGlmIChzdWl0YWJsZSkgcmV0dXJuIFsuLi5zdWl0YWJsZV07XG5cdGxldCBleGNlZWQgPSAwLCBidXN5ID0gdHJ1ZSwgY29tcCA9IFsuLi5wcmVDZWxsXTtcblx0d2hpbGUgKGJ1c3kgJiYgZXhjZWVkKysgPCBjb2x1bW5zICogcm93cykge1xuXHRcdGlmICghKGJ1c3kgPSBjaGVja0J1c3koY29tcCkpKSByZXR1cm4gWy4uLmNvbXBdO1xuXHRcdGNvbXBbMF0rKztcblx0XHRpZiAoY29tcFswXSA+PSBjb2x1bW5zKSB7XG5cdFx0XHRjb21wWzBdID0gMDtcblx0XHRcdGNvbXBbMV0rKztcblx0XHRcdGlmIChjb21wWzFdID49IHJvd3MpIGNvbXBbMV0gPSAwO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gWy4uLnByZUNlbGxdO1xufTtcbnZhciBtYWtlT3JpZW50SW5zZXQgPSAoJG9yaWVudFB4LCBncmlkQXJncywgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBib3hJblB4ID0gWy4uLmdyaWRBcmdzLnNpemVdO1xuXHRjb25zdCBvcmllbnRQeCA9IFsuLi4kb3JpZW50UHhdO1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzLmxheW91dCA/PyBbNCwgOF0pO1xuXHRpZiAob3JpZW50ICUgMikgYm94SW5QeC5yZXZlcnNlKCk7XG5cdHJldHVybiBbcm91bmROZWFyZXN0KG9yaWVudFB4WzBdLCBib3hJblB4WzBdIC8gbGF5b3V0WzBdKSwgcm91bmROZWFyZXN0KG9yaWVudFB4WzFdLCBib3hJblB4WzFdIC8gbGF5b3V0WzFdKV07XG59O1xudmFyIGNvbnZlcnRPcmllbnRQeFRvQ1ggPSAoJG9yaWVudFB4LCBncmlkQXJncywgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBib3hJblB4ID0gWy4uLmdyaWRBcmdzLnNpemVdO1xuXHRjb25zdCBvcmllbnRQeCA9IFsuLi4kb3JpZW50UHhdO1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzLmxheW91dCA/PyBbNCwgOF0pO1xuXHRpZiAob3JpZW50ICUgMikgYm94SW5QeC5yZXZlcnNlKCk7XG5cdGNvbnN0IGdyaWRQeFRvQ1ggPSBbbGF5b3V0WzBdIC8gYm94SW5QeFswXSwgbGF5b3V0WzFdIC8gYm94SW5QeFsxXV07XG5cdHJldHVybiBbb3JpZW50UHhbMF0gKiBncmlkUHhUb0NYWzBdLCBvcmllbnRQeFsxXSAqIGdyaWRQeFRvQ1hbMV1dO1xufTtcbnZhciBmbG9vckluT3JpZW50UHggPSAoJG9yaWVudFB4LCBncmlkQXJncywgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBvcmllbnRQeCA9IFsuLi4kb3JpZW50UHhdO1xuXHRjb25zdCBib3hJblB4ID0gWy4uLmdyaWRBcmdzLnNpemVdO1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzLmxheW91dCA/PyBbNCwgOF0pO1xuXHRpZiAob3JpZW50ICUgMikgYm94SW5QeC5yZXZlcnNlKCk7XG5cdGNvbnN0IGluQm94ID0gW2JveEluUHhbMF0gLyBsYXlvdXRbMF0sIGJveEluUHhbMV0gLyBsYXlvdXRbMV1dO1xuXHRyZXR1cm4gW3JvdW5kTmVhcmVzdChvcmllbnRQeFswXSwgaW5Cb3hbMF0pLCByb3VuZE5lYXJlc3Qob3JpZW50UHhbMV0sIGluQm94WzFdKV07XG59O1xudmFyIGZsb29ySW5DWCA9ICgkQ1gsIGdyaWRBcmdzKSA9PiB7XG5cdGNvbnN0IGxheW91dCA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQoZ3JpZEFyZ3MubGF5b3V0ID8/IFs0LCA4XSk7XG5cdHJldHVybiBbTWF0aC5taW4oTWF0aC5tYXgocm91bmROZWFyZXN0KCRDWFswXSksIDApLCBsYXlvdXRbMF0gLSAxKSwgTWF0aC5taW4oTWF0aC5tYXgocm91bmROZWFyZXN0KCRDWFsxXSksIDApLCBsYXlvdXRbMV0gLSAxKV07XG59O1xudmFyIGNsaWVudFNwYWNlSW5PcmllbnRDWCA9ICgkY2xpZW50UHgsIGdyaWRBcmdzLCBvcmllbnQgPSAwKSA9PiB7XG5cdGNvbnN0IGNsaWVudFB4ID0gWy4uLiRjbGllbnRQeF07XG5cdGNvbnN0IHNpemUgPSBbLi4uZ3JpZEFyZ3Muc2l6ZV07XG5cdGNvbnN0IGxheW91dCA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQoZ3JpZEFyZ3MubGF5b3V0ID8/IFs0LCA4XSk7XG5cdGNvbnN0IG9yaWVudFB4ID0gY3Z0X2NzX3RvX29zKGNsaWVudFB4LCBzaXplLCBvcmllbnQpO1xuXHRjb25zdCBvc1NpemUgPSBvcmllbnQgJSAyID8gW3NpemVbMV0sIHNpemVbMF1dIDogW3NpemVbMF0sIHNpemVbMV1dO1xuXHRyZXR1cm4gW01hdGgubWluKE1hdGgubWF4KHJvdW5kTmVhcmVzdChvcmllbnRQeFswXSAvIG9zU2l6ZVswXSAqIGxheW91dFswXSwgMSksIDApLCBsYXlvdXRbMF0gLSAxKSwgTWF0aC5taW4oTWF0aC5tYXgocm91bmROZWFyZXN0KG9yaWVudFB4WzFdIC8gb3NTaXplWzFdICogbGF5b3V0WzFdLCAxKSwgMCksIGxheW91dFsxXSAtIDEpXTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9Vc2VyUGF0aC50c1xudmFyIG5vcm1hbGl6ZVNsYXNoZXMgPSAoaW5wdXQpID0+IHtcblx0Y29uc3QgdmFsdWUgPSBTdHJpbmcoaW5wdXQgPz8gXCJcIikudHJpbSgpO1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gXCIvXCI7XG5cdHJldHVybiAodmFsdWUuc3RhcnRzV2l0aChcIi9cIikgPyB2YWx1ZSA6IGAvJHt2YWx1ZX1gKS5yZXBsYWNlKC9cXC8rL2csIFwiL1wiKTtcbn07XG52YXIgaXNVc2VyU2NvcGVQYXRoID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTbGFzaGVzKGlucHV0KTtcblx0cmV0dXJuIG5vcm1hbGl6ZWQgPT09IFwiL3VzZXJcIiB8fCBub3JtYWxpemVkLnN0YXJ0c1dpdGgoXCIvdXNlci9cIik7XG59O1xudmFyIHN0cmlwVXNlclNjb3BlUHJlZml4ID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTbGFzaGVzKGlucHV0KTtcblx0aWYgKG5vcm1hbGl6ZWQgPT09IFwiL3VzZXJcIikgcmV0dXJuIFwiL1wiO1xuXHRpZiAobm9ybWFsaXplZC5zdGFydHNXaXRoKFwiL3VzZXIvXCIpKSByZXR1cm4gbm9ybWFsaXplZC5zbGljZSg1KSB8fCBcIi9cIjtcblx0cmV0dXJuIG5vcm1hbGl6ZWQ7XG59O1xudmFyIHRvVXNlclJlbGF0aXZlUGF0aCA9IChpbnB1dCkgPT4ge1xuXHRyZXR1cm4gc3RyaXBVc2VyU2NvcGVQcmVmaXgoaW5wdXQpLnJlcGxhY2UoL15cXC8rLywgXCJcIik7XG59O1xudmFyIHRvVXNlclNjb3BlUGF0aCA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2xhc2hlcyhpbnB1dCk7XG5cdGlmIChpc1VzZXJTY29wZVBhdGgobm9ybWFsaXplZCkpIHJldHVybiBub3JtYWxpemVkO1xuXHRpZiAobm9ybWFsaXplZCA9PT0gXCIvXCIpIHJldHVybiBcIi91c2VyL1wiO1xuXHRyZXR1cm4gYC91c2VyJHtub3JtYWxpemVkfWA7XG59O1xudmFyIHVzZXJQYXRoQ2FuZGlkYXRlcyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2xhc2hlcyhpbnB1dCk7XG5cdGNvbnN0IHN0cmlwcGVkID0gc3RyaXBVc2VyU2NvcGVQcmVmaXgobm9ybWFsaXplZCk7XG5cdGlmIChpc1VzZXJTY29wZVBhdGgobm9ybWFsaXplZCkpIHJldHVybiBBcnJheS5mcm9tKC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtzdHJpcHBlZCwgbm9ybWFsaXplZF0pKTtcblx0cmV0dXJuIFtzdHJpcHBlZF07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvdXRpbHMvTWFwcGVkLnRzXG52YXIgcmVuZGVyVGFiTmFtZSA9ICh0YWJOYW1lKSA9PiB7XG5cdGlmICghdGFiTmFtZSkgcmV0dXJuIFwiXCI7XG5cdHRhYk5hbWUgPSB0YWJOYW1lPy5yZXBsYWNlPy4oL18vZywgXCIgXCIpIHx8IHRhYk5hbWU7XG5cdHRhYk5hbWUgPSB0YWJOYW1lPy5jaGFyQXQ/LigwKT8udG9VcHBlckNhc2U/LigpICsgdGFiTmFtZT8uc2xpY2U/LigxKSB8fCB0YWJOYW1lO1xuXHRyZXR1cm4gdGFiTmFtZTtcbn07XG52YXIgUkVNT1ZFX0lGX0hBU19TSU1JTEFSID0gKGFycmF5LCBvbGQsIGlkeCA9IC0xLCBzcmNPYmogPSBudWxsKSA9PiB7XG5cdGlmIChhcnJheT8uaW5kZXhPZj8uKG9sZCkgPj0gMCkgYXJyYXkuc3BsaWNlKGFycmF5LmluZGV4T2Yob2xkKSwgMSk7XG5cdGVsc2UgaWYgKGlkeCA+PSAwICYmIGlkeCA8IGFycmF5Py5sZW5ndGgpIGFycmF5LnNwbGljZShpZHgsIDEpO1xufTtcbnZhciBSRU1PVkVfSUZfSEFTID0gKGFycmF5LCBpdGVtKSA9PiB7XG5cdGlmIChhcnJheT8uaW5kZXhPZj8uKGl0ZW0pID49IDApIGFycmF5LnNwbGljZShhcnJheS5pbmRleE9mKGl0ZW0pLCAxKTtcbn07XG52YXIgUFVTSF9PTkNFID0gKGFycmF5LCBpdGVtKSA9PiB7XG5cdGlmIChhcnJheT8uaW5kZXhPZj8uKGl0ZW0pIDwgMCkgYXJyYXkucHVzaChpdGVtKTtcbn07XG52YXIgU1BMSUNFX0lOVE9fT05DRSA9IChhcnJheSwgaXRlbSwgaW5kZXggPSAtMSkgPT4ge1xuXHRpZiAodHlwZW9mIGluZGV4ICE9IFwibnVtYmVyXCIgfHwgaW5kZXggPCAwIHx8IGluZGV4ID49IGFycmF5Py5sZW5ndGgpIFBVU0hfT05DRShhcnJheSwgaXRlbSk7XG5cdGVsc2UgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiICYmIGFycmF5Py5pbmRleE9mPy4oaXRlbSkgPCAwKSBhcnJheS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xufTtcbnZhciBjYWNoZWRQZXJGaWxlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgY2FjaGVkUGVyRmlsZU5hbWUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIEdFVF9PUl9DQUNIRSA9IGFzeW5jIChmaWxlKSA9PiB7XG5cdHRyeSB7XG5cdFx0ZmlsZSA9IGF3YWl0IGZpbGU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRmaWxlID0gbnVsbDtcblx0XHRjb25zb2xlLndhcm4oZSk7XG5cdH1cblx0aWYgKGZpbGUgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdGlmIChjYWNoZWRQZXJGaWxlLmhhcyhmaWxlKSkgcmV0dXJuIGNhY2hlZFBlckZpbGUuZ2V0KGZpbGUpO1xuXHRpZiAoZmlsZT8udHlwZSAhPSBcImFwcGxpY2F0aW9uL2pzb25cIikgcmV0dXJuIGNhY2hlZFBlckZpbGUuZ2V0KGZpbGUpO1xuXHRjb25zdCByYXcgPSBhd2FpdCBmaWxlPy50ZXh0Py4oKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkgfHwgXCJ7fVwiO1xuXHRsZXQgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0b2JqID0gSlNPTi5wYXJzZShyYXcpO1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0dHJ5IHtcblx0XHRcdG9iaiA9IEpTT04ucGFyc2UocmF3KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZSk7XG5cdFx0fVxuXHR9XG5cdGlmIChmaWxlKSBjYWNoZWRQZXJGaWxlLnNldChmaWxlLCBvYmopO1xuXHRyZXR1cm4gb2JqO1xufTtcbnZhciBHRVRfT1JfQ0FDSEVfQllfTkFNRSA9IGFzeW5jIChmaWxlTmFtZSwgZmlsZSkgPT4ge1xuXHR0cnkge1xuXHRcdGZpbGUgPSBhd2FpdCBmaWxlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0ZmlsZSA9IG51bGw7XG5cdFx0Y29uc29sZS53YXJuKGUpO1xuXHR9XG5cdGlmIChmaWxlTmFtZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcblx0aWYgKGNhY2hlZFBlckZpbGVOYW1lLmhhcyhmaWxlTmFtZSkpIHJldHVybiBjYWNoZWRQZXJGaWxlTmFtZS5nZXQoZmlsZU5hbWUpO1xuXHRjb25zdCBvYmogPSBmaWxlICE9IG51bGwgPyBhd2FpdCBHRVRfT1JfQ0FDSEUoZmlsZSkgOiBjYWNoZWRQZXJGaWxlTmFtZT8uZ2V0KGZpbGVOYW1lKTtcblx0aWYgKGZpbGVOYW1lKSBjYWNoZWRQZXJGaWxlTmFtZS5zZXQoZmlsZU5hbWUsIG9iaik7XG5cdHJldHVybiBvYmo7XG59O1xudmFyIG1lcmdlQnlFeGlzdHMgPSAoZGF0YVJlZiwgcmVmcykgPT4ge1xuXHRjb25zdCBkYXRhTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0ZGF0YVJlZi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdGlmIChpdGVtPy5uYW1lKSBkYXRhTWFwLnNldChpdGVtLm5hbWUsIHtcblx0XHRcdGl0ZW0sXG5cdFx0XHRpbmRleFxuXHRcdH0pO1xuXHR9KTtcblx0Y29uc3QgcmVmc01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdHJlZnMuZm9yRWFjaCgocmVmKSA9PiB7XG5cdFx0aWYgKHJlZj8ubmFtZSkgcmVmc01hcC5zZXQocmVmLm5hbWUsIHJlZik7XG5cdH0pO1xuXHRmb3IgKGNvbnN0IFtuYW1lLCB7IGluZGV4IH1dIG9mIGRhdGFNYXApIHtcblx0XHRjb25zdCByZWYgPSByZWZzTWFwLmdldChuYW1lKTtcblx0XHRpZiAocmVmKSBkYXRhUmVmW2luZGV4XSA9IHJlZjtcblx0fVxuXHRmb3IgKGNvbnN0IFtuYW1lLCByZWZdIG9mIHJlZnNNYXApIGlmICghZGF0YU1hcC5oYXMobmFtZSkpIGRhdGFSZWYucHVzaChyZWYpO1xuXHRmb3IgKGxldCBpID0gZGF0YVJlZi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdGNvbnN0IGl0ZW0gPSBkYXRhUmVmW2ldO1xuXHRcdGlmIChpdGVtPy5uYW1lICYmICFyZWZzTWFwLmhhcyhpdGVtLm5hbWUpKSBkYXRhUmVmLnNwbGljZShpLCAxKTtcblx0fVxuXHRkYXRhUmVmLnNvcnQoKGEsIGIpID0+IGE/Lm5hbWU/LmxvY2FsZUNvbXBhcmU/LihiPy5uYW1lID8/IFwiXCIpKTtcblx0cmV0dXJuIGRhdGFSZWY7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvdXRpbHMvUGhvbmUudHNcbnZhciBQSE9ORV9DQU5ESURBVEVfUkUgPSAvXFwrP1xcZFtcXGRcXHMoKS5cXC1dezQsfVxcZC9nO1xudmFyIEVYVF9DVVRfUkUgPSAvKNC00L7QsVxcLj980LTQvtC/XFwuP3xleHRcXC4/fGV4dGVuc2lvbilcXHMqWzojXFwteF0qXFxzKlxcZCsuKi9pO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcblx0ZGVmYXVsdFRydW5rOiBcIjhcIixcblx0Y291bnRyeUNvZGU6IFwiN1wiLFxuXHRjaXR5Q29kZTogbnVsbCxcblx0c3RyaXBFeHRlbnNpb25zOiB0cnVlLFxuXHRtaW5Mb2NhbDogNSxcblx0bWF4TG9jYWw6IDdcbn07XG52YXIgbm9ybWFsaXplT25lID0gKGlucHV0LCBvcHRpb25zID0ge30pID0+IHtcblx0aWYgKGlucHV0ID09IG51bGwpIHJldHVybiBudWxsO1xuXHRjb25zdCBvcHRzID0ge1xuXHRcdC4uLkRFRkFVTFRfT1BUSU9OUyxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cdGxldCBzID0gU3RyaW5nKGlucHV0KS50cmltKCk7XG5cdGlmICghcykgcmV0dXJuIG51bGw7XG5cdGlmIChvcHRzLnN0cmlwRXh0ZW5zaW9ucykgcyA9IHMucmVwbGFjZShFWFRfQ1VUX1JFLCBcIlwiKTtcblx0Y29uc3QgaGFzUGx1c0luU3RhcnQgPSAvXlxcKy8udGVzdChzKTtcblx0bGV0IGRpZ2l0cyA9IHMucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuXHRpZiAoIWRpZ2l0cykgcmV0dXJuIG51bGw7XG5cdGlmIChoYXNQbHVzSW5TdGFydCAmJiBkaWdpdHMuc3RhcnRzV2l0aChvcHRzLmNvdW50cnlDb2RlKSkgZGlnaXRzID0gb3B0cy5kZWZhdWx0VHJ1bmsgKyBkaWdpdHMuc2xpY2Uob3B0cy5jb3VudHJ5Q29kZS5sZW5ndGgpO1xuXHRlbHNlIGlmIChkaWdpdHMubGVuZ3RoID09PSAxMSAmJiBkaWdpdHMuc3RhcnRzV2l0aChvcHRzLmNvdW50cnlDb2RlKSkgZGlnaXRzID0gb3B0cy5kZWZhdWx0VHJ1bmsgKyBkaWdpdHMuc2xpY2UoMSk7XG5cdGVsc2UgaWYgKGRpZ2l0cy5sZW5ndGggPT09IDEwKSBkaWdpdHMgPSBvcHRzLmRlZmF1bHRUcnVuayArIGRpZ2l0cztcblx0ZWxzZSBpZiAob3B0cy5jaXR5Q29kZSAmJiBkaWdpdHMubGVuZ3RoID49IG9wdHMubWluTG9jYWwgJiYgZGlnaXRzLmxlbmd0aCA8PSBvcHRzLm1heExvY2FsKSBkaWdpdHMgPSBvcHRzLmRlZmF1bHRUcnVuayArIG9wdHMuY2l0eUNvZGUgKyBkaWdpdHM7XG5cdGVsc2UgaWYgKGRpZ2l0cy5sZW5ndGggPT09IDExICYmIGRpZ2l0cy5zdGFydHNXaXRoKG9wdHMuZGVmYXVsdFRydW5rKSkge30gZWxzZSBpZiAob3B0cy5jaXR5Q29kZSAmJiBkaWdpdHMubGVuZ3RoID09PSBvcHRzLmNpdHlDb2RlLmxlbmd0aCArIDcpIGRpZ2l0cyA9IG9wdHMuZGVmYXVsdFRydW5rICsgZGlnaXRzO1xuXHRlbHNlIHJldHVybiBudWxsO1xuXHRyZXR1cm4gL15cXGR7MTF9JC8udGVzdChkaWdpdHMpID8gZGlnaXRzIDogbnVsbDtcbn07XG52YXIgc3BsaXRDYW5kaWRhdGVzID0gKHZhbHVlKSA9PiB7XG5cdGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gW107XG5cdGNvbnN0IHMgPSBTdHJpbmcodmFsdWUpO1xuXHRjb25zdCBtYXRjaGVzID0gcy5tYXRjaChQSE9ORV9DQU5ESURBVEVfUkUpO1xuXHRpZiAobWF0Y2hlcz8ubGVuZ3RoKSByZXR1cm4gbWF0Y2hlcztcblx0cmV0dXJuIHMuc3BsaXQoL1s7LC98XSsvKS5tYXAoKHgpID0+IHgudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG59O1xudmFyIG5vcm1hbGl6ZVBob25lcyA9ICh2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGNvbnN0IG91dCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgZm9yIChjb25zdCB2IG9mIHZhbHVlKSBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIGZvciAoY29uc3QgY2FuZCBvZiBzcGxpdENhbmRpZGF0ZXModikpIHtcblx0XHRjb25zdCBuID0gbm9ybWFsaXplT25lKGNhbmQsIG9wdGlvbnMpO1xuXHRcdGlmIChuKSBvdXQuYWRkKG4pO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGNvbnN0IG4gPSBub3JtYWxpemVPbmUodiwgb3B0aW9ucyk7XG5cdFx0aWYgKG4pIG91dC5hZGQobik7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSBmb3IgKGNvbnN0IGMgb2Ygc3BsaXRDYW5kaWRhdGVzKHZhbHVlKSkge1xuXHRcdGNvbnN0IG4gPSBub3JtYWxpemVPbmUoYywgb3B0aW9ucyk7XG5cdFx0aWYgKG4pIG91dC5hZGQobik7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Y29uc3QgbiA9IG5vcm1hbGl6ZU9uZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0aWYgKG4pIG91dC5hZGQobik7XG5cdH1cblx0cmV0dXJuIFsuLi5vdXRdO1xufTtcbnZhciBnZXRJbmRleEZvclJvdyA9IChyb3csIHBvcykgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheShyb3cpICYmIHR5cGVvZiByb3dbMV0gPT09IFwibnVtYmVyXCIpIHJldHVybiByb3dbMV07XG5cdGlmIChyb3cgJiYgdHlwZW9mIHJvdyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygcm93LmluZGV4ID09PSBcIm51bWJlclwiKSByZXR1cm4gcm93LmluZGV4O1xuXHRyZXR1cm4gcG9zO1xufTtcbnZhciBnZXRQaG9uZXNGcm9tUm93ID0gKHJvdykgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheShyb3cpKSByZXR1cm4gcm93WzBdO1xuXHRpZiAocm93ICYmIHR5cGVvZiByb3cgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZiAoXCJwaG9uZXNcIiBpbiByb3cpIHJldHVybiByb3cucGhvbmVzO1xuXHRcdGlmIChcInBob25lXCIgaW4gcm93KSByZXR1cm4gcm93LnBob25lO1xuXHR9XG5cdHJldHVybiByb3c7XG59O1xuZnVuY3Rpb24gZmluZER1cGxpY2F0ZVBob25lcyhyb3dzLCB1c2VyT3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0Li4uREVGQVVMVF9PUFRJT05TLFxuXHRcdC4uLnVzZXJPcHRpb25zXG5cdH07XG5cdGNvbnN0IG51bWJlclRvSW5kaWNlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IGluZGV4VG9OdW1iZXJzQWxsID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0cm93cy5mb3JFYWNoKChyb3csIHBvcykgPT4ge1xuXHRcdGNvbnN0IGlkeCA9IGdldEluZGV4Rm9yUm93KHJvdywgcG9zKTtcblx0XHRjb25zdCBwaG9uZXNSYXcgPSBnZXRQaG9uZXNGcm9tUm93KHJvdyk7XG5cdFx0Y29uc3QgcGhvbmVzID0gbm9ybWFsaXplUGhvbmVzKHBob25lc1Jhdywgb3B0aW9ucyk7XG5cdFx0aWYgKCFpbmRleFRvTnVtYmVyc0FsbC5oYXMoaWR4KSkgaW5kZXhUb051bWJlcnNBbGwuc2V0KGlkeCwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG5cdFx0Y29uc3Qgc2V0Rm9ySW5kZXggPSBpbmRleFRvTnVtYmVyc0FsbC5nZXQoaWR4KTtcblx0XHRmb3IgKGNvbnN0IHAgb2YgcGhvbmVzKSB7XG5cdFx0XHRzZXRGb3JJbmRleC5hZGQocCk7XG5cdFx0XHRpZiAoIW51bWJlclRvSW5kaWNlcy5oYXMocCkpIG51bWJlclRvSW5kaWNlcy5zZXQocCwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG5cdFx0XHRudW1iZXJUb0luZGljZXMuZ2V0KHApLmFkZChpZHgpO1xuXHRcdH1cblx0fSk7XG5cdGNvbnN0IGR1cGxpY2F0ZXNCeU51bWJlciA9IHt9O1xuXHRmb3IgKGNvbnN0IFtudW0sIHNldF0gb2YgbnVtYmVyVG9JbmRpY2VzLmVudHJpZXMoKSkgaWYgKHNldC5zaXplID4gMSkgZHVwbGljYXRlc0J5TnVtYmVyW251bV0gPSBbLi4uc2V0XS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cdGNvbnN0IGR1cGxpY2F0ZXNCeUluZGV4ID0ge307XG5cdGZvciAoY29uc3QgW2lkeCwgc2V0XSBvZiBpbmRleFRvTnVtYmVyc0FsbC5lbnRyaWVzKCkpIHtcblx0XHRjb25zdCBkdXBzID0gWy4uLnNldF0uZmlsdGVyKChuKSA9PiBkdXBsaWNhdGVzQnlOdW1iZXJbbl0pO1xuXHRcdGlmIChkdXBzLmxlbmd0aCkgZHVwbGljYXRlc0J5SW5kZXhbaWR4XSA9IGR1cHMuc29ydCgpO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0ZHVwbGljYXRlc0J5TnVtYmVyLFxuXHRcdHBhaXJzOiBPYmplY3QuZW50cmllcyhkdXBsaWNhdGVzQnlJbmRleCkubWFwKChbaWR4LCBudW1zXSkgPT4gW051bWJlcihpZHgpLCBudW1zXSkuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pLFxuXHRcdGR1cGxpY2F0ZXNCeUluZGV4LFxuXHRcdG5vcm1hbGl6ZTogKHMpID0+IG5vcm1hbGl6ZU9uZShzLCBvcHRpb25zKVxuXHR9O1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvdXRpbHMvVGltZS50c1xudmFyIGdldFRpbWVab25lID0gKCkgPT4ge1xuXHRyZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xufTtcbmZ1bmN0aW9uIGlzUHVyZUhITU0oc3RyKSB7XG5cdGlmICghc3RyKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiAvXihbMDFdXFxkfDJbMC0zXSk6KFswLTVdXFxkKSQvLnRlc3QoU3RyaW5nKHN0cikudHJpbSgpKTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZUNvcnJlY3RseShzdHIpIHtcblx0aWYgKCFzdHIpIHJldHVybiAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcblx0aWYgKHN0ciBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBuZXcgRGF0ZShzdHIpO1xuXHRpZiAodHlwZW9mIHN0ciA9PSBcIm9iamVjdFwiICYmIHN0cj8udGltZXN0YW1wKSByZXR1cm4gcGFyc2VEYXRlQ29ycmVjdGx5KHN0ci50aW1lc3RhbXApO1xuXHRpZiAodHlwZW9mIHN0ciA9PSBcIm9iamVjdFwiICYmIHN0cj8uaXNvX2RhdGUpIHJldHVybiBwYXJzZURhdGVDb3JyZWN0bHkoc3RyLmlzb19kYXRlKTtcblx0aWYgKHR5cGVvZiBzdHIgPT0gXCJvYmplY3RcIiAmJiBzdHI/LmRhdGUpIHJldHVybiBwYXJzZURhdGVDb3JyZWN0bHkoc3RyLmRhdGUpO1xuXHRpZiAodHlwZW9mIHN0ciA9PSBcIm51bWJlclwiKSB7XG5cdFx0aWYgKHN0ciA+PSAweGU4ZDRhNTEwMDApIHJldHVybiBuZXcgRGF0ZShzdHIpO1xuXHRcdGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgMTEgLSAoU3RyaW5nKHN0ciB8IDApPy5sZW5ndGggfHwgMTEpKSB8IDA7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHN0ciAqIG11bHRpcGxpZXIpO1xuXHR9XG5cdGlmICh0eXBlb2Ygc3RyID09IFwic3RyaW5nXCIgJiYgaXNQdXJlSEhNTShzdHIpKSB7XG5cdFx0Y29uc3QgbSA9IC9eKFswMV1cXGR8MlswLTNdKTooWzAtNV1cXGQpJC8uZXhlYyhzdHIudHJpbSgpKTtcblx0XHRpZiAoIW0pIHJldHVybiAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcblx0XHRjb25zdCBbLCBoaCwgbW1dID0gbTtcblx0XHRjb25zdCBub3cgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcblx0XHRyZXR1cm4gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpLCBOdW1iZXIoaGgpLCBOdW1iZXIobW0pLCAwLCAwKTtcblx0fVxuXHRyZXR1cm4gbmV3IERhdGUoU3RyaW5nKHN0cikpO1xufVxuZnVuY3Rpb24gcGFyc2VBbmRHZXRDb3JyZWN0VGltZShzdHIpIHtcblx0aWYgKCFzdHIpIHJldHVybiBEYXRlLm5vdygpO1xuXHRpZiAodHlwZW9mIHN0ciA9PSBcIm51bWJlclwiKSB7XG5cdFx0aWYgKHN0ciA+PSAweGU4ZDRhNTEwMDApIHJldHVybiBzdHI7XG5cdFx0cmV0dXJuIHN0ciAqIChNYXRoLnBvdygxMCwgMTEgLSAoU3RyaW5nKHN0ciB8IDApPy5sZW5ndGggfHwgMTEpKSB8IDApO1xuXHR9XG5cdGlmIChzdHIgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gc3RyLmdldFRpbWUoKTtcblx0cmV0dXJuIHBhcnNlRGF0ZUNvcnJlY3RseShzdHIpPy5nZXRUaW1lPy4oKSA/PyBEYXRlLm5vdygpO1xufVxudmFyIGdldElTT1dlZWtOdW1iZXIgPSAoaW5wdXQpID0+IHtcblx0aWYgKCFpbnB1dCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHRhcmdldCA9IG5ldyBEYXRlKERhdGUuVVRDKGlucHV0LmdldEZ1bGxZZWFyKCksIGlucHV0LmdldE1vbnRoKCksIGlucHV0LmdldERhdGUoKSkpO1xuXHRjb25zdCBkYXlOdW1iZXIgPSB0YXJnZXQuZ2V0VVRDRGF5KCkgfHwgNztcblx0dGFyZ2V0LnNldFVUQ0RhdGUodGFyZ2V0LmdldFVUQ0RhdGUoKSArIDQgLSBkYXlOdW1iZXIpO1xuXHRjb25zdCB5ZWFyU3RhcnQgPSBuZXcgRGF0ZShEYXRlLlVUQyh0YXJnZXQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXHRyZXR1cm4gTWF0aC5jZWlsKCgodGFyZ2V0LmdldFRpbWUoKSAtIHllYXJTdGFydC5nZXRUaW1lKCkpIC8gODY0ZTUgKyAxKSAvIDcpO1xufTtcbnZhciBub3JtYWxpemVTY2hlZHVsZSA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAodmFsdWUuZGF0ZSB8fCB2YWx1ZS5pc29fZGF0ZSB8fCB2YWx1ZS50aW1lc3RhbXApKSByZXR1cm4gdmFsdWU7XG5cdHJldHVybiB7IGlzb19kYXRlOiBTdHJpbmcodmFsdWUpIH07XG59O1xudmFyIGZvcm1hdEFzVGltZSA9ICh0aW1lKSA9PiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTY2hlZHVsZSh0aW1lKTtcblx0aWYgKCFub3JtYWxpemVkKSByZXR1cm4gXCJcIjtcblx0cmV0dXJuIHBhcnNlRGF0ZUNvcnJlY3RseShub3JtYWxpemVkKT8udG9Mb2NhbGVUaW1lU3RyaW5nPy4oXCJlbi1HQlwiLCB7XG5cdFx0aG91cjogXCIyLWRpZ2l0XCIsXG5cdFx0bWludXRlOiBcIjItZGlnaXRcIixcblx0XHRob3VyMTI6IGZhbHNlLFxuXHRcdHRpbWVab25lOiBnZXRUaW1lWm9uZSgpXG5cdH0pIHx8IFwiXCI7XG59O1xudmFyIGZvcm1hdEFzRGF0ZSA9IChkYXRlKSA9PiB7XG5cdHJldHVybiBwYXJzZURhdGVDb3JyZWN0bHkoZGF0ZSk/LnRvTG9jYWxlRGF0ZVN0cmluZz8uKFwiZW4tR0JcIiwge1xuXHRcdGRheTogXCJudW1lcmljXCIsXG5cdFx0bW9udGg6IFwibG9uZ1wiLFxuXHRcdHdlZWtkYXk6IFwibG9uZ1wiLFxuXHRcdHllYXI6IFwibnVtZXJpY1wiLFxuXHRcdHRpbWVab25lOiBnZXRUaW1lWm9uZSgpXG5cdH0pIHx8IFwiXCI7XG59O1xudmFyIGZvcm1hdERhdGVUaW1lID0gKHRpbWVzdGFtcCkgPT4ge1xuXHRjb25zdCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcblx0aWYgKE51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSkpIHJldHVybiBcIlwiO1xuXHRyZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZyh2b2lkIDAsIHtcblx0XHR5ZWFyOiBcIm51bWVyaWNcIixcblx0XHRtb250aDogXCJzaG9ydFwiLFxuXHRcdGRheTogXCIyLWRpZ2l0XCIsXG5cdFx0aG91cjogXCIyLWRpZ2l0XCIsXG5cdFx0bWludXRlOiBcIjItZGlnaXRcIlxuXHR9KTtcbn07XG52YXIgZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIE5hTjtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSByZXR1cm4gdmFsdWU7XG5cdGNvbnN0IGRhdGUgPSBwYXJzZURhdGVDb3JyZWN0bHkodmFsdWUpO1xuXHRpZiAoZGF0ZSAmJiAhTnVtYmVyLmlzTmFOKGRhdGU/LmdldFRpbWUoKSkpIHJldHVybiBkYXRlPy5nZXRUaW1lKCkgPz8gMDtcblx0Y29uc3QgbWF0Y2ggPSBTdHJpbmcodmFsdWUpLm1hdGNoKC9eKFxcZHsxLDJ9KSg/OjooXFxkezJ9KSk/KD86OihcXGR7Mn0pKT8vKTtcblx0aWYgKG1hdGNoKSB7XG5cdFx0Y29uc3QgaG91cnMgPSBOdW1iZXIobWF0Y2hbMV0pIHx8IDA7XG5cdFx0Y29uc3QgbWludXRlcyA9IE51bWJlcihtYXRjaFsyXSkgfHwgMDtcblx0XHRjb25zdCBzZWNvbmRzID0gTnVtYmVyKG1hdGNoWzNdKSB8fCAwO1xuXHRcdHJldHVybiAoKGhvdXJzICogNjAgKyBtaW51dGVzKSAqIDYwICsgc2Vjb25kcykgKiAxZTM7XG5cdH1cblx0Y29uc3QgbnVtZXJpYyA9IE51bWJlcih2YWx1ZSk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobnVtZXJpYykgPyBudW1lcmljIDogTmFOO1xufTtcbnZhciBpc0RhdGUgPSAoZGF0ZSkgPT4ge1xuXHRjb25zdCBmaXJzdFN0ZXAgPSBkYXRlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgZGF0ZSA9PSBcInN0cmluZ1wiICYmIGRhdGUubWF0Y2goL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvKTtcblx0bGV0IHNlY29uZFN0ZXAgPSBmYWxzZTtcblx0dHJ5IHtcblx0XHRzZWNvbmRTdGVwID0gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShkYXRlKSA+IDA7XG5cdH0gY2F0Y2gge1xuXHRcdHNlY29uZFN0ZXAgPSBmYWxzZTtcblx0fVxuXHRyZXR1cm4gQm9vbGVhbigoZmlyc3RTdGVwICYmIHNlY29uZFN0ZXApID8/IGZhbHNlKTtcbn07XG52YXIgY2hlY2tJblRpbWVSYW5nZSA9IChiZWdpblRpbWUsIGVuZFRpbWUsIGN1cnJlbnRUaW1lKSA9PiB7XG5cdGlmIChiZWdpblRpbWUgJiYgZW5kVGltZSkgcmV0dXJuIGdldENvbXBhcmFibGVUaW1lVmFsdWUoYmVnaW5UaW1lKSA8IGdldENvbXBhcmFibGVUaW1lVmFsdWUoY3VycmVudFRpbWUpICYmIGdldENvbXBhcmFibGVUaW1lVmFsdWUoY3VycmVudFRpbWUpIDwgZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShlbmRUaW1lKTtcblx0aWYgKGJlZ2luVGltZSkgcmV0dXJuIGdldENvbXBhcmFibGVUaW1lVmFsdWUoYmVnaW5UaW1lKSA8IGdldENvbXBhcmFibGVUaW1lVmFsdWUoY3VycmVudFRpbWUpO1xuXHRpZiAoZW5kVGltZSkgcmV0dXJuIGdldENvbXBhcmFibGVUaW1lVmFsdWUoY3VycmVudFRpbWUpIDwgZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShlbmRUaW1lKTtcblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBjaGVja1JlbWFpbnNUaW1lID0gKGJlZ2luVGltZSwgZW5kVGltZSwgY3VycmVudFRpbWUsIG1heERheXMgPSA3KSA9PiB7XG5cdGxldCBmYWN0b3JNYXNrZWQgPSB0cnVlO1xuXHRpZiAoYmVnaW5UaW1lKSBmYWN0b3JNYXNrZWQgJiY9IGdldENvbXBhcmFibGVUaW1lVmFsdWUoY3VycmVudFRpbWUpIDw9IGdldENvbXBhcmFibGVUaW1lVmFsdWUoYmVnaW5UaW1lKTtcblx0aWYgKGVuZFRpbWUpIGZhY3Rvck1hc2tlZCAmJj0gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShjdXJyZW50VGltZSkgPCBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGVuZFRpbWUpO1xuXHRpZiAobWF4RGF5cykge1xuXHRcdGNvbnN0IGRhdGVMaW1pdCA9IGdldENvbXBhcmFibGVUaW1lVmFsdWUoY3VycmVudFRpbWUpICsgbWF4RGF5cyAqIDI0ICogNjAgKiA2MCAqIDFlMztcblx0XHRmYWN0b3JNYXNrZWQgJiY9IGdldENvbXBhcmFibGVUaW1lVmFsdWUoYmVnaW5UaW1lKSA8IGdldENvbXBhcmFibGVUaW1lVmFsdWUoZGF0ZUxpbWl0KTtcblx0fVxuXHRyZXR1cm4gZmFjdG9yTWFza2VkO1xufTtcbnZhciBjb21wdXRlVGltZWxpbmVPcmRlckluR2VuZXJhbCA9ICh0aW1lT2ZEYXksIG1pblRpbWVzdGFtcCkgPT4ge1xuXHRjb25zdCBkYXlTdGFydCA9IGdldENvbXBhcmFibGVUaW1lVmFsdWUodGltZU9mRGF5KSB8fCAwO1xuXHRjb25zdCBub3JtYWxpemVkID0gKE51bWJlci5pc0Zpbml0ZShkYXlTdGFydCkgPyBkYXlTdGFydCA6IDApIC0gKG1pblRpbWVzdGFtcCB8fCAwKTtcblx0cmV0dXJuIE1hdGgucm91bmQobm9ybWFsaXplZCAvIDg2NGU1KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9NaXNjLnRzXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgZGVsYXkpIHtcblx0bGV0IHRpbWVvdXRJZDtcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG5cdFx0dGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBmbiguLi5hcmdzKSwgZGVsYXkpO1xuXHR9O1xufVxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIGxpbWl0KSB7XG5cdGxldCBpblRocm90dGxlID0gZmFsc2U7XG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xuXHRcdGlmICghaW5UaHJvdHRsZSkge1xuXHRcdFx0Zm4oLi4uYXJncyk7XG5cdFx0XHRpblRocm90dGxlID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gaW5UaHJvdHRsZSA9IGZhbHNlLCBsaW1pdCk7XG5cdFx0fVxuXHR9O1xufVxuZnVuY3Rpb24gc2xlZXAobXMpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5mdW5jdGlvbiB1bmlxdWVJZChwcmVmaXggPSBcIlwiKSB7XG5cdHJldHVybiBgJHtwcmVmaXh9JHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA5KX1gO1xufVxuZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xuXHRpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHJldHVybiBvYmo7XG5cdGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gbmV3IERhdGUob2JqLmdldFRpbWUoKSk7XG5cdGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IGRlZXBDbG9uZShpdGVtKSk7XG5cdGlmIChvYmogaW5zdGFuY2VvZiBPYmplY3QpIHtcblx0XHRjb25zdCBjbG9uZWQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBjbG9uZWRba2V5XSA9IGRlZXBDbG9uZShvYmpba2V5XSk7XG5cdFx0cmV0dXJuIGNsb25lZDtcblx0fVxuXHRyZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuXHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCkgcmV0dXJuIHRydWU7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHJldHVybiB2YWx1ZS50cmltKCkubGVuZ3RoID09PSAwO1xuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuXHRyZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG5cdHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcbn1cbmZ1bmN0aW9uIGlzV29ya2VyKCkge1xuXHRyZXR1cm4gdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2luZGV4LnRzXG5pbnN0YWxsRG9tQ29uc3RydWN0b3JQb2x5ZmlsbHMoKTtcblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyAkYXZvaWRUcmlnZ2VyLCAkZnh5LCAkZ2V0VmFsdWUsICRzZXQsICR0cmlnZ2VyTG9jaywgQXN5bmNRdWV1ZSwgQ2hhbm5lbEhlYWx0aE1vbml0b3IsIENoYW5uZWxSZWdpc3RyeSwgRVhUX0NVVF9SRSwgR0VUX09SX0NBQ0hFLCBHRVRfT1JfQ0FDSEVfQllfTkFNRSwgSU5URUdFUl9SRUdFWFAsIFBIT05FX0NBTkRJREFURV9SRSwgUFVTSF9PTkNFLCBQcm9taXNlZCwgUkVNT1ZFX0lGX0hBUywgUkVNT1ZFX0lGX0hBU19TSU1JTEFSLCBTUExJQ0VfSU5UT19PTkNFLCBVVUlEdjQsIFdSZWYsIGFsbEtleWVkLCBhbGxTZXR0bGVkS2V5ZWQsIGJpbmRDdHgsIGJpbmRFdmVudCwgYmluZEZ4LCBib3VuZEN0eCwgY2FjaGVkUGVyRmlsZSwgY2FjaGVkUGVyRmlsZU5hbWUsIGNhbGxCeUFsbFByb3AsIGNhbGxCeVByb3AsIGNhbWVsVG9LZWJhYiwgY2FuQmVJbnRlZ2VyLCBjZWlsTmVhcmVzdCwgY2hlY2tJblRpbWVSYW5nZSwgY2hlY2tSZW1haW5zVGltZSwgY2xhbXAsIGNsYW1wRGltZW5zaW9uLCBjbGFtcEdyaWRDZWxsVHVwbGUsIGNsaWVudFNwYWNlSW5PcmllbnRDWCwgY29tcHV0ZVRpbWVsaW5lT3JkZXJJbkdlbmVyYWwsIGNvbmN1cnJlbnRMaW1pdCwgY29udGV4dGlmeSwgY29udmVydE9yaWVudFB4VG9DWCwgY3JlYXRlQ2hhbm5lbFByb3h5LCBjcmVhdGVEZWZlcnJlZCwgY3Z0X2NzX3RvX29zLCBjdnRfb3NfdG9fY3MsIGN2dF9yZWxfY3NfdG9fb3MsIGN2dF9yZWxfb3NfdG9fY3MsIGRlYm91bmNlLCBkZWVwQ2xvbmUsIGRlZXBPcGVyYXRlQW5kQ2xvbmUsIGRlZmF1bHRCeVR5cGUsIGRlcmVmLCBmaW5kRHVwbGljYXRlUGhvbmVzLCBmaXhGeCwgZmxvb3JJbkNYLCBmbG9vckluT3JpZW50UHgsIGZsb29yTmVhcmVzdCwgZm9ybWF0QXNEYXRlLCBmb3JtYXRBc1RpbWUsIGZvcm1hdERhdGVUaW1lLCBnZXRDb21wYXJhYmxlVGltZVZhbHVlLCBnZXRJU09XZWVrTnVtYmVyLCBnZXRJbmRleEZvclJvdywgZ2V0T3JJbnNlcnQsIGdldE9ySW5zZXJ0Q29tcHV0ZWQsIGdldFBob25lc0Zyb21Sb3csIGdldFJhbmRvbVZhbHVlcywgZ2V0U3BhbiwgZ2V0VGltZVpvbmUsIGdldFZhbHVlLCBnbG9iYWxDaGFubmVsSGVhbHRoTW9uaXRvciwgZ2xvYmFsQ2hhbm5lbFJlZ2lzdHJ5LCBncmlkSXRlbXNBc0FycmF5LCBoYW5kbGVMaXN0ZW5lcnMsIGhhc1BlbmRpbmdQcm9taXNlcywgaGFzUHJvcGVydHksIGhhc1ZhbHVlLCBpblByb3h5LCBpc0FycmF5SW52YWxpZEtleSwgaXNBcnJheU9ySXRlcmFibGUsIGlzQnJvd3NlciwgaXNDYW5KdXN0UmV0dXJuLCBpc0NhblRyYW5zZmVyLCBpc0RhdGUsIGlzRW1wdHksIGlzSGFzUHJpbWl0aXZlcywgaXNJdGVyYWJsZSwgaXNLZXlUeXBlLCBpc05vdENvbXBsZXhBcnJheSwgaXNOb3RFcXVhbCwgaXNPYmplY3QsIGlzT2JqZWN0Tm90RXF1YWwsIGlzT2JzZXJ2YWJsZSwgaXNQcmltaXRpdmUsIGlzUHJvbWlzZSwgaXNQdXJlSEhNTSwgaXNSZWYsIGlzU3ltYm9sLCBpc1R5cGVkQXJyYXksIGlzVXNlclNjb3BlUGF0aCwgaXNWYWwsIGlzVmFsaWROdW1iZXIsIGlzVmFsaWRPYmosIGlzVmFsdWVSZWYsIGlzVmFsdWVVbml0LCBpc1dvcmtlciwga2ViYWJUb0NhbWVsLCBtYWtlT3JpZW50SW5zZXQsIG1ha2VUcmlnZ2VyTGVzcywgbWVyZ2VCeUV4aXN0cywgbWVyZ2VCeUtleSwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplT25lLCBub3JtYWxpemVQaG9uZXMsIG5vcm1hbGl6ZVByaW1pdGl2ZSwgbm9ybWFsaXplU2NoZWR1bGUsIG9iamVjdEFzc2lnbiwgb2JqZWN0QXNzaWduTm90RXF1YWwsIHBhcnNlQW5kR2V0Q29ycmVjdFRpbWUsIHBhcnNlRGF0ZUNvcnJlY3RseSwgcG90ZW50aWFsbHlBc3luYywgcG90ZW50aWFsbHlBc3luY01hcCwgcmVkaXJlY3RDZWxsLCByZW1vdmVFeHRyYSwgcmVuZGVyVGFiTmFtZSwgcmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsLCByZXNvbHZlZCwgcmV0cnksIHJvdW5kTmVhcmVzdCwgc2xlZXAsIHNwbGl0Q2FuZGlkYXRlcywgc3RyaXBVc2VyU2NvcGVQcmVmaXgsIHRocm90dGxlLCB0b0Zpbml0ZU51bWJlciwgdG9SZWYsIHRvVXNlclJlbGF0aXZlUGF0aCwgdG9Vc2VyU2NvcGVQYXRoLCB0cnlQYXJzZUJ5SGludCwgdHJ5U3RyaW5nQXNJbnRlZ2VyLCB0cnlTdHJpbmdBc051bWJlciwgdW5pcXVlSWQsIHVucmVmLCB1bndyYXAsIHVud3JhcEFycmF5LCB1c2VyUGF0aENhbmRpZGF0ZXMsIHZhbHVlQ2xhbXAsIHdpdGhDdHgsIHdpdGhUaW1lb3V0IH07Il0sCiAgIm1hcHBpbmdzIjogIkFBQ0EsU0FBU0EsS0FBaUM7QUFDekMsUUFBTUMsSUFBSTtBQUNWLE1BQUksT0FBT0EsRUFBRSxlQUFnQixXQUFZO0FBQ3pDLFFBQU1DLElBQU8sTUFBTTtBQUFBLEVBQUMsR0FDZEMsSUFBUyxDQUFDQyxNQUFTO0FBQ3hCLElBQUksT0FBT0gsRUFBRUcsQ0FBSSxLQUFNLGVBQVlILEVBQUVHLENBQUksSUFBSUY7QUFBQSxFQUM5QztBQUNBLEVBQUFDLEVBQU8sYUFBYSxHQUNwQkEsRUFBTyxNQUFNLEdBQ2JBLEVBQU8sU0FBUyxHQUNoQkEsRUFBTyxhQUFhLEdBQ3BCQSxFQUFPLFlBQVksR0FDbkJBLEVBQU8sTUFBTSxHQUNiQSxFQUFPLFNBQVMsR0FDaEJBLEVBQU8sa0JBQWtCLEdBQ3pCQSxFQUFPLFlBQVksR0FDbkJBLEVBQU8sY0FBYyxHQUNyQkEsRUFBTyxVQUFVLEdBQ2pCQSxFQUFPLGlCQUFpQixHQUN4QkEsRUFBTyxpQkFBaUIsR0FDeEJBLEVBQU8sbUJBQW1CLEdBQzFCQSxFQUFPLGtCQUFrQixHQUN6QkEsRUFBTyxpQkFBaUIsR0FDeEJBLEVBQU8sa0JBQWtCLEdBQ3pCQSxFQUFPLGdCQUFnQixHQUN2QkEsRUFBTyxnQkFBZ0IsR0FDdkJBLEVBQU8sY0FBYyxHQUNyQkEsRUFBTyxtQkFBbUI7QUFDM0I7QUFJQSxJQUFJRSxJQUFPLHVCQUFPLElBQUksTUFBTSxHQUN4QkMsS0FBa0IsQ0FBQ0MsTUFDZkEsR0FBWSxPQUFPQyxDQUFXLEdBRWxDQyxLQUFlLENBQUNGLE1BQ1osTUFBTSxRQUFRQSxDQUFVLEtBQUtBLGFBQXNCLE9BQU9BLGFBQXNCLEtBRXBGQyxJQUFjLENBQUNFLE1BQ1gsT0FBT0EsS0FBTyxZQUFZLE9BQU9BLEtBQU8sWUFBWSxPQUFPQSxLQUFPLGFBQWEsT0FBT0EsS0FBTyxZQUFZLE9BQU9BLElBQU8sT0FBZUEsS0FBTyxNQUVqSkMsS0FBaUIsQ0FBQ0MsR0FBT0MsTUFDdkJMLEVBQVlJLENBQUssSUFDbEJDLEtBQVEsV0FBaUIsT0FBT0QsQ0FBSyxLQUFLLElBQzFDQyxLQUFRLFdBQWlCLE9BQU9ELENBQUssS0FBSyxLQUMxQ0MsS0FBUSxZQUFrQixDQUFDLENBQUNELElBQ3pCQSxJQUp5QixNQU03QkUsSUFBYyxDQUFDQyxHQUFHQyxJQUFPLGFBQ3BCLE9BQU9ELEtBQUssWUFBWSxPQUFPQSxLQUFLLGVBQWVBLEtBQUssU0FBU0MsS0FBUUQsS0FBS0EsSUFBSUMsQ0FBSSxLQUFLLE9BRWhHQyxJQUFXLENBQUNGLE1BQ1JELEVBQVlDLEdBQUcsT0FBTyxHQUUxQkcsS0FBWSxDQUFDQyxNQUNaWCxFQUFZVyxDQUFXLElBQVVBLElBQzlCRixFQUFTRSxDQUFXLElBQUlBLEdBQWEsUUFBUUEsR0FFakRDLElBQVMsQ0FBQ1YsR0FBS1csTUFDWFgsSUFBTUwsQ0FBSSxLQUFNSyxLQUFvQlcsS0FBYUEsR0FFckRDLElBQVEsQ0FBQ1osTUFDUkEsS0FBTyxTQUFTLE9BQU9BLEtBQU8sWUFBWSxPQUFPQSxLQUFPLGdCQUFnQkEsYUFBZSxXQUFXLE9BQU9BLEdBQUssU0FBUyxjQUFvQlksRUFBTVosR0FBSyxRQUFRLENBQUMsSUFDNUpBLEdBRUphLEtBQVEsQ0FBQ2IsTUFBUTtBQUNwQixNQUFJLE9BQU9BLEtBQU8sY0FBY0EsS0FBTyxLQUFNLFFBQU9BO0FBQ3BELFFBQU1jLElBQUssV0FBVztBQUFBLEVBQUM7QUFDdkIsU0FBQUEsRUFBR25CLENBQUksSUFBSUssR0FDSmM7QUFDUixHQUNJQyxLQUFPLENBQUNDLEdBQUlDLEdBQUtDLE9BQ3BCRixJQUFLSixFQUFNSSxDQUFFLEdBQ1RBLEtBQU0sU0FBUyxPQUFPQSxLQUFNLFlBQVksT0FBT0EsS0FBTSxjQUFvQkEsRUFBR0MsQ0FBRyxJQUFJVCxHQUFVVSxJQUFNTixFQUFNTSxDQUFHLENBQUMsSUFDMUdGLElBRUpHLEtBQWtCLENBQUNDLE1BQ2YsUUFBUSxrQkFBa0IsUUFBUSxrQkFBa0JBLENBQUssS0FBSyxNQUFNO0FBQzFFLFFBQU1DLElBQVMsSUFBSSxXQUFXRCxFQUFNLE1BQU07QUFDMUMsV0FBU0UsSUFBSSxHQUFHQSxJQUFJRixFQUFNLFFBQVFFLElBQUssQ0FBQUQsRUFBT0MsQ0FBQyxJQUFJLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxHQUFHO0FBQ2pGLFNBQU9EO0FBQ1IsR0FBRztBQUVKLFNBQVNFLEdBQVdyQixHQUFPc0IsR0FBS0MsR0FBSztBQUNwQyxTQUFPLEtBQUssSUFBSSxLQUFLLElBQUl2QixHQUFPc0IsQ0FBRyxHQUFHQyxDQUFHO0FBQzFDO0FBQ0EsSUFBSUMsS0FBUSxDQUFDRixHQUFLTixHQUFLTyxNQUFRLEtBQUssSUFBSUQsR0FBSyxLQUFLLElBQUlOLEdBQUtPLENBQUcsQ0FBQyxHQUMzREUsS0FBVSxDQUFDQyxHQUFRQyxNQUNsQixPQUFPQSxLQUFPLGFBQW1CQSxHQUFLLE9BQU9ELENBQU0sS0FBS0MsSUFDckRBLEdBRUpDLEtBQVMsTUFBTSxRQUFRLGFBQWEsUUFBUSxhQUFhLElBQUksdUNBQXVDLFFBQVEsVUFBVSxDQUFDQyxPQUFPLENBQUNBLElBQUlaLEtBQWtDLG9CQUFJLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQ1ksSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQ3pOQyxLQUFlLENBQUNDLE1BQ2RBLEtBQ0VBLEdBQUssVUFBVSxtQkFBbUIsT0FBTyxFQUFFLFlBQVksR0FFM0RDLEtBQWUsQ0FBQ0QsTUFDZEEsS0FDRUEsR0FBSyxVQUFVLGFBQWEsQ0FBQ0UsR0FBR0MsTUFBU0EsRUFBSyxZQUFZLENBQUMsR0FFL0RDLEtBQWlCLENBQUNuQyxHQUFPUyxJQUFXLE1BQU07QUFDN0MsUUFBTTJCLElBQVMsT0FBT3BDLENBQUs7QUFDM0IsU0FBTyxPQUFPLFNBQVNvQyxDQUFNLElBQUlBLElBQVMzQjtBQUMzQyxHQUNJNEIsS0FBaUIsQ0FBQ3JDLEdBQU91QixNQUN4QixDQUFDLE9BQU8sU0FBU0EsQ0FBRyxLQUFLQSxLQUFPLEtBQ2hDLENBQUMsT0FBTyxTQUFTdkIsQ0FBSyxJQUFVLElBQzdCLEtBQUssSUFBSSxLQUFLLElBQUlBLEdBQU8sQ0FBQyxHQUFHdUIsQ0FBRyxHQUVwQ2UsSUFBZSxDQUFDRixHQUFRRyxJQUFJLE1BQU0sS0FBSyxNQUFNSCxJQUFTRyxDQUFDLElBQUlBLEdBQzNEQyxLQUFlLENBQUNKLEdBQVFHLElBQUksTUFBTSxLQUFLLE1BQU1ILElBQVNHLENBQUMsSUFBSUEsR0FDM0RFLEtBQWMsQ0FBQ0wsR0FBUUcsSUFBSSxNQUFNLEtBQUssS0FBS0gsSUFBU0csQ0FBQyxJQUFJQSxHQUN6REcsS0FBYyxDQUFDMUIsTUFBUSxPQUFPLGdCQUFrQixPQUFlQSxhQUFlLGVBQzlFMkIsS0FBUSxDQUFDeEMsTUFBTUEsS0FBSyxTQUFTLE9BQU9BLEtBQUssWUFBWUEsTUFBTSxLQUFRLE9BQVMsT0FBT0EsS0FBSyxZQUFZLE9BQU9BLEtBQUssWUFDaEh5QyxLQUFxQixDQUFDNUIsTUFDbEIsT0FBT0EsS0FBTyxZQUFZQSxJQUFNLEtBQUssT0FBTyxPQUFPQSxLQUFPLFdBQVcsT0FBT0EsQ0FBRyxJQUFJQSxHQUV2RjZCLElBQWUsdUJBQU8sSUFBSSxlQUFlLEdBQ3pDQyxLQUFnQixDQUFDQyxHQUFLQyxHQUFJQyxJQUFRLFlBQVk7QUFDakQsRUFBSS9DLEVBQVk2QyxHQUFLRSxDQUFLLE1BQUdGLEVBQUlGLENBQVksSUFBSTtBQUNqRCxNQUFJSztBQUNKLE1BQUk7QUFDSCxJQUFBQSxJQUFTRixJQUFLO0FBQUEsRUFDZixVQUFFO0FBQ0QsSUFBSTlDLEVBQVk2QyxHQUFLRSxDQUFLLEtBQUcsT0FBT0YsRUFBSUYsQ0FBWTtBQUFBLEVBQ3JEO0FBQ0EsU0FBT0s7QUFDUixHQUNJQyxLQUFvQixDQUFDbkMsTUFBUTtBQUNoQyxNQUFJLE9BQU9BLEtBQU8sU0FBVSxRQUFPO0FBQ25DLFFBQU1vQyxJQUFVLENBQUMsR0FBR3BDLEdBQUssV0FBVyxnQkFBZ0IsQ0FBQztBQUNyRCxNQUFJb0MsR0FBUyxVQUFVLEVBQUcsUUFBTztBQUNqQyxRQUFNQyxJQUFlLFdBQVdELEVBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3QyxTQUFJLENBQUMsT0FBTyxNQUFNQyxDQUFZLEtBQUssT0FBTyxTQUFTQSxDQUFZLElBQVVBLElBQ2xFO0FBQ1IsR0FDSUMsS0FBaUIsVUFDakJDLEtBQXFCLENBQUN2QyxNQUFRO0FBR2pDLE1BRkksT0FBT0EsS0FBTyxhQUNsQkEsSUFBTUEsR0FBSyxPQUFPLEdBQ2RBLEtBQU8sTUFBTUEsS0FBTyxNQUFNLFFBQU87QUFDckMsUUFBTW9DLElBQVUsQ0FBQyxHQUFHcEMsR0FBSyxXQUFXc0MsRUFBYyxDQUFDO0FBQ25ELE1BQUlGLEdBQVMsVUFBVSxFQUFHLFFBQU87QUFDakMsUUFBTUMsSUFBZSxTQUFTRCxFQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0MsU0FBSSxDQUFDLE9BQU8sTUFBTUMsQ0FBWSxLQUFLLE9BQU8sVUFBVUEsQ0FBWSxJQUFVQSxJQUNuRTtBQUNSLEdBQ0lHLEtBQWdCLENBQUN4QyxNQUNiLE9BQU9BLEtBQU8sWUFBWSxDQUFDLE9BQU8sTUFBTUEsQ0FBRyxHQUUvQ3lDLEtBQWUsQ0FBQ3pELE1BQ2YsT0FBT0EsS0FBUyxXQUFpQnVELEdBQW1CdkQsQ0FBSyxLQUFLLE9BQ3RELE9BQU9BLEtBQVMsWUFBWSxPQUFPLFVBQVVBLENBQUssS0FBS0EsS0FBUyxHQUV6RTBELEtBQW9CLENBQUM1RCxNQUFRLE1BQU0sUUFBUUEsQ0FBRyxLQUFLQSxLQUFPLFFBQVEsT0FBT0EsS0FBTyxZQUFZLE9BQU9BLEVBQUksT0FBTyxRQUFRLEtBQUssWUFDM0g2RCxLQUFrQixDQUFDQyxHQUFNQyxHQUFJQyxNQUFhO0FBQzdDLEVBQUFGLElBQU9BLGFBQWdCLFVBQVVBLEVBQUssTUFBTSxJQUFJQTtBQUNoRCxRQUFNRyxJQUFRLENBQUMsR0FBRyxPQUFPLFFBQVFELENBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDdEUsR0FBTXdELENBQUUsTUFBTVksSUFBT0MsQ0FBRSxHQUFHLE9BQU9ELEdBQU1wRSxHQUFNd0QsQ0FBRSxDQUFDO0FBQ3BHLFNBQU8sTUFBTTtBQUNaLElBQUFlLEdBQU8sVUFBVSxDQUFDQyxNQUFVQSxJQUFRLENBQUM7QUFBQSxFQUN0QztBQUNELEdBQ0lDLElBQVEsQ0FBQ2xCLE1BQ0xBLGFBQWUsV0FBVyxPQUFPQSxHQUFLLFNBQVMsWUFFbkRtQixLQUFRLENBQUNuQixNQUNMa0IsRUFBTWxCLENBQUcsSUFBSXJDLEVBQU1xQyxDQUFHLElBQUlBLEdBRTlCb0IsS0FBUSxDQUFDcEIsTUFDTEEsS0FBTyxPQUFPa0IsRUFBTWxCLENBQUcsSUFBSUEsSUFBTSxPQUFPQSxLQUFPLGNBQWMsT0FBT0EsS0FBTyxXQUFXLElBQUksUUFBUUEsQ0FBRyxJQUFJQSxJQUFNQSxHQUVuSHFCLEtBQWEsQ0FBQ0MsT0FDVCxPQUFPQSxLQUFVLFlBQVksT0FBT0EsS0FBVSxnQkFBZ0JBLEdBQVEsU0FBUyxRQUFRQSxLQUFVLFFBQVEsV0FBV0EsSUFFekhDLEtBQVcsQ0FBQ0QsTUFDUkEsS0FBVSxTQUFTLE9BQU9BLEtBQVUsWUFBWSxPQUFPQSxLQUFVLGFBRXJFRSxLQUFXLENBQUN2RCxNQUNSWCxFQUFTVyxDQUFHLElBQUlBLEdBQUssUUFBUUEsR0FFakN3RCxLQUFtQixDQUFDQyxHQUFTekIsTUFDNUJ5QixhQUFtQixXQUFXLE9BQU9BLEdBQVMsUUFBUSxhQUFtQkEsR0FBUyxPQUFPekIsQ0FBRSxJQUNuRkEsSUFBS3lCLENBQU8sR0FFckJDLEtBQXNCLENBQUNELEdBQVN6QixNQUMvQnlCLGFBQW1CLFdBQVcsT0FBT0EsR0FBUyxRQUFRLGFBQW1CQSxHQUFTLE9BQU96QixDQUFFLElBQ25GQSxJQUFLeUIsQ0FBTyxHQUVyQkUsS0FBa0IsU0FBU0MsR0FBTTtBQUNwQyxTQUFPLENBQUM1QixNQUFPO0FBQ2QsSUFBQTRCLEVBQUsvQixDQUFZLElBQUk7QUFDckIsUUFBSUs7QUFDSixRQUFJO0FBQ0gsTUFBQUEsSUFBU0YsSUFBSztBQUFBLElBQ2YsVUFBRTtBQUNELE1BQUE0QixFQUFLL0IsQ0FBWSxJQUFJO0FBQUEsSUFDdEI7QUFDQSxXQUFPSztBQUFBLEVBQ1I7QUFDRCxHQUNJMkIsSUFBYyxDQUFDQyxNQUNkLE1BQU0sUUFBUUEsQ0FBRyxJQUFVQSxHQUFLLFVBQVUsQ0FBQ0MsTUFDMUMsTUFBTSxRQUFRQSxDQUFFLElBQVVGLEVBQVlFLENBQUUsSUFDckNBLENBQ1AsSUFDV0QsR0FFVEUsS0FBb0IsQ0FBQ0YsTUFDakJELEVBQVlDLENBQUcsR0FBRyxRQUFRRyxDQUFlLEdBRTdDQSxJQUFrQixDQUFDbkYsTUFDZkYsRUFBWUUsQ0FBRyxLQUFLLE9BQU8scUJBQXFCLGNBQWNBLGFBQWUscUJBQXFCb0YsR0FBYXBGLENBQUcsS0FBSyxNQUFNLFFBQVFBLENBQUcsS0FBS2tGLEdBQWtCbEYsQ0FBRyxHQUV0S29GLEtBQWUsQ0FBQ2xGLE1BQ1osWUFBWSxPQUFPQSxDQUFLLEtBQUssRUFBRUEsYUFBaUIsV0FFcERtRixLQUFXLENBQUNDLE1BQVEsT0FBT0EsS0FBUSxZQUFZLE9BQU9BLEtBQU8sWUFBWSxPQUFPLFVBQVUsU0FBUyxLQUFLQSxDQUFHLEtBQUssbUJBQ2hIQyxLQUFZLENBQUMzRCxNQUNUQSxhQUFrQixXQUFXLE9BQU9BLEdBQVEsUUFBUSxZQUV4RDRELEtBQWdCLENBQUN4RixNQUNiRixFQUFZRSxDQUFHLEtBQUssT0FBTyxlQUFlLGNBQWNBLGFBQWUsZUFBZSxPQUFPLGVBQWUsY0FBY0EsYUFBZSxlQUFlLE9BQU8sa0JBQWtCLGNBQWNBLGFBQWUsa0JBQWtCLE9BQU8sa0JBQWtCLGNBQWNBLGFBQWUsa0JBQWtCLE9BQU8sbUJBQW1CLGNBQWNBLGFBQWUsbUJBQW1CLE9BQU8sZUFBZSxjQUFjQSxhQUFlLGVBQWUsT0FBTyxjQUFjLGNBQWNBLGFBQWUsY0FBYyxPQUFPLG1CQUFtQixjQUFjQSxhQUFlLG1CQUFtQixPQUFPLGtCQUFrQixjQUFjQSxhQUFlLGtCQUFrQixPQUFPLGFBQWEsY0FBY0EsYUFBZSxhQUFhLE9BQU8sNkJBQTZCLGNBQWNBLGFBQWUsNkJBQTZCLE9BQU8sMEJBQTBCLGNBQWNBLGFBQWUsMEJBQTBCLE9BQU8sNkJBQTZCLGNBQWNBLGFBQWUsMkJBRS83QnlGLEtBQWdCLENBQUNDLE1BQU07QUFDMUIsVUFBUSxPQUFPQSxHQUFHO0FBQUEsSUFDakIsS0FBSztBQUFVLGFBQU87QUFBQSxJQUN0QixLQUFLO0FBQVUsYUFBTztBQUFBLElBQ3RCLEtBQUs7QUFBVyxhQUFPO0FBQUEsSUFDdkIsS0FBSztBQUFVLGFBQU87QUFBQSxJQUN0QixLQUFLO0FBQVksYUFBTztBQUFBLElBQ3hCLEtBQUs7QUFBVSxhQUFPO0FBQUEsSUFDdEIsS0FBSztBQUFVLGFBQU87QUFBQSxFQUN2QjtBQUNELEdBSUlDLElBQVcsdUJBQU8sSUFBSSxVQUFVLEdBQ2hDQyxLQUE0QixvQkFBSSxJQUFJO0FBQUEsRUFDdkMsdUJBQU8sSUFBSSxVQUFVO0FBQUEsRUFDckIsdUJBQU8sSUFBSSxTQUFTO0FBQUEsRUFDcEIsdUJBQU8sSUFBSSxXQUFXO0FBQUEsRUFDdEIsdUJBQU8sSUFBSSxRQUFRO0FBQUEsRUFDbkIsdUJBQU8sSUFBSSxVQUFVO0FBQUEsRUFDckIsdUJBQU8sSUFBSSxXQUFXO0FBQUEsRUFDdEIsdUJBQU8sSUFBSSxVQUFVO0FBQUEsRUFDckIsdUJBQU8sSUFBSSxZQUFZO0FBQUEsRUFDdkIsdUJBQU8sSUFBSSxXQUFXO0FBQUEsRUFDdEIsdUJBQU8sSUFBSSxlQUFlO0FBQUEsRUFDMUIsdUJBQU8sSUFBSSxlQUFlO0FBQUEsRUFDMUIsdUJBQU8sSUFBSSxrQkFBa0I7QUFBQSxFQUM3Qix1QkFBTyxJQUFJLGFBQWE7QUFBQSxFQUN4Qix1QkFBTyxJQUFJLE1BQU07QUFBQSxFQUNqQix1QkFBTyxJQUFJLFNBQVM7QUFBQSxFQUNwQix1QkFBTyxJQUFJLFdBQVc7QUFDdkIsQ0FBQyxHQUNHQyxJQUFlLENBQUMzRixNQUFVQSxhQUFpQixXQUFXLE9BQU9BLEdBQU8sUUFBUSxZQUM1RTRGLElBQVksQ0FBQzVGLE1BQVUsUUFBUSxRQUFRQSxDQUFLLEVBQUUsS0FBSyxDQUFDRyxPQUFPO0FBQUEsRUFDOUQsUUFBUTtBQUFBLEVBQ1IsT0FBT0E7QUFDUixJQUFJLENBQUMwRixPQUFZO0FBQUEsRUFDaEIsUUFBUTtBQUFBLEVBQ1IsUUFBQUE7QUFDRCxFQUFFLEdBQ0VDLElBQW9CLENBQUNoRyxNQUFRLFFBQVEsUUFBUUEsQ0FBRyxFQUFFLE9BQU8sQ0FBQ2lCLE1BQVE7QUFDckUsTUFBSTJFLEdBQVUsSUFBSTNFLENBQUcsRUFBRyxRQUFPO0FBQy9CLFFBQU1nRixJQUFPLE9BQU8seUJBQXlCakcsR0FBS2lCLENBQUc7QUFDckQsU0FBT2dGLE1BQVMsVUFBVUEsRUFBSztBQUNoQyxDQUFDLEdBQ0dDLElBQXFCLENBQUNoRyxHQUFPaUcsTUFBUztBQUN6QyxNQUFJakcsS0FBUyxRQUFRSixFQUFZSSxDQUFLLEVBQUcsUUFBTztBQUNoRCxNQUFJMkYsRUFBYTNGLENBQUssS0FBSzJGLEVBQWEzRixJQUFReUYsQ0FBUSxDQUFDLEVBQUcsUUFBTztBQUNuRSxNQUFJLE9BQU96RixLQUFTLFlBQVksT0FBT0EsS0FBUyxXQUFZLFFBQU87QUFDbkUsUUFBTWtHLElBQVVELEtBQXdCLG9CQUFJLFFBQVE7QUFDcEQsU0FBSUMsRUFBUSxJQUFJbEcsQ0FBSyxJQUFVLE1BQy9Ca0csRUFBUSxJQUFJbEcsQ0FBSyxHQUNiLE1BQU0sUUFBUUEsQ0FBSyxJQUFVQSxFQUFNLEtBQUssQ0FBQ21HLE1BQVNILEVBQW1CRyxHQUFNRCxDQUFPLENBQUMsSUFDbkZsRyxhQUFpQixNQUFZLENBQUMsR0FBR0EsRUFBTSxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUNtRyxNQUFTSCxFQUFtQkcsR0FBTUQsQ0FBTyxDQUFDLElBQ2pHbEcsYUFBaUIsTUFBWSxDQUFDLEdBQUdBLEVBQU0sT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDbUcsTUFBU0gsRUFBbUJHLEdBQU1ELENBQU8sQ0FBQyxJQUM5RkosRUFBa0I5RixDQUFLLEVBQUUsS0FBSyxDQUFDZSxNQUFRaUYsRUFBbUJoRyxFQUFNZSxDQUFHLEdBQUdtRixDQUFPLENBQUM7QUFDdEY7QUFDQSxTQUFTRSxFQUFhcEcsR0FBT3FHLEdBQU1KLEdBQU07QUFFeEMsTUFESWpHLEtBQVMsUUFBUUosRUFBWUksQ0FBSyxLQUFLLE9BQU9BLEtBQVMsWUFDdkQyRixFQUFhM0YsQ0FBSyxFQUFHLFFBQU9BO0FBQ2hDLFFBQU1zRyxJQUFPdEcsSUFBUXlGLENBQVE7QUFDN0IsTUFBSUUsRUFBYVcsQ0FBSSxFQUFHLFFBQU9BO0FBRS9CLE1BREksT0FBT3RHLEtBQVMsWUFBWSxPQUFPQSxLQUFTLGNBQzVDaUcsRUFBSyxJQUFJakcsQ0FBSyxFQUFHLFFBQU9BO0FBRTVCLE1BREFpRyxFQUFLLElBQUlqRyxDQUFLLEdBQ1YsTUFBTSxRQUFRQSxDQUFLLEdBQUc7QUFDekIsVUFBTXVHLElBQVF2RyxFQUFNLElBQUksQ0FBQ21HLE1BQVNDLEVBQWFELEdBQU1FLEdBQU1KLENBQUksQ0FBQztBQUNoRSxXQUFPSSxLQUFRLFlBQVksUUFBUSxXQUFXRSxDQUFLLElBQUksUUFBUSxJQUFJQSxDQUFLO0FBQUEsRUFDekU7QUFDQSxNQUFJdkcsYUFBaUIsS0FBSztBQUN6QixVQUFNdUcsSUFBUSxDQUFDLEdBQUd2RyxFQUFNLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQ21HLE1BQVNDLEVBQWFELEdBQU1FLEdBQU1KLENBQUksQ0FBQztBQUM5RSxXQUFPSSxLQUFRLFlBQVksUUFBUSxXQUFXRSxDQUFLLElBQUksUUFBUSxJQUFJQSxDQUFLO0FBQUEsRUFDekU7QUFDQSxRQUFNQyxJQUFTLENBQUM7QUFDaEIsTUFBSXhHLGFBQWlCLElBQUssWUFBVyxDQUFDZSxHQUFLb0YsQ0FBSSxLQUFLbkcsRUFBTSxRQUFRLEVBQUcsQ0FBQXdHLEVBQU96RixDQUFHLElBQUlxRixFQUFhRCxHQUFNRSxHQUFNSixDQUFJO0FBQUEsTUFDM0csWUFBV2xGLEtBQU8rRSxFQUFrQjlGLENBQUssRUFBRyxDQUFBd0csRUFBT3pGLENBQUcsSUFBSXFGLEVBQWFwRyxFQUFNZSxDQUFHLEdBQUdzRixHQUFNSixDQUFJO0FBQ2xHLFNBQU9JLEtBQVEsWUFBWSxRQUFRLGdCQUFnQkcsQ0FBTSxJQUFJLFFBQVEsU0FBU0EsQ0FBTTtBQUNyRjtBQUNBLFNBQVNDLEVBQVN6RyxHQUFPcUcsSUFBTyxPQUFPO0FBQ3RDLE1BQUlWLEVBQWEzRixDQUFLLEVBQUcsUUFBT3FHLEtBQVEsWUFBWVQsRUFBVTVGLENBQUssSUFBSSxRQUFRLFFBQVFBLENBQUs7QUFDNUYsUUFBTXNHLElBQU90RyxJQUFReUYsQ0FBUTtBQUM3QixTQUFJRSxFQUFhVyxDQUFJLElBQVVELEtBQVEsWUFBWVQsRUFBVVUsQ0FBSSxJQUFJLFFBQVEsUUFBUUEsQ0FBSSxJQUNsRixRQUFRLFFBQVFGLEVBQWFwRyxHQUFPcUcsR0FBc0Isb0JBQUksUUFBUSxDQUFDLENBQUM7QUFDaEY7QUFDQUksRUFBUyxNQUFNLENBQUN6RyxNQUFVeUcsRUFBU3pHLEdBQU8sS0FBSztBQUMvQ3lHLEVBQVMsYUFBYSxDQUFDekcsTUFBVXlHLEVBQVN6RyxHQUFPLFNBQVM7QUFDMUR5RyxFQUFTLFdBQVcsQ0FBQ3pHLE1BQVUsUUFBUSxTQUFTQSxDQUFLO0FBQ3JEeUcsRUFBUyxrQkFBa0IsQ0FBQ3pHLE1BQVUsUUFBUSxnQkFBZ0JBLENBQUs7QUFDbkV5RyxFQUFTLE1BQU0sQ0FBQ0MsTUFBb0JDLE1BQVMsUUFBUSxJQUFJRCxHQUFpQixHQUFHQyxDQUFJLEVBQUUsS0FBSyxDQUFDM0csTUFBVXlHLEVBQVN6RyxHQUFPLEtBQUssQ0FBQztBQUl6SCxJQUFJNEcsS0FBZSxDQUFDNUcsTUFBVUEsYUFBaUIsV0FBVyxPQUFPQSxHQUFPLFFBQVE7QUFDaEYsU0FBUzZHLEdBQVNDLEdBQVU7QUFDM0IsU0FBTyxRQUFRLFNBQVNBLENBQVE7QUFDakM7QUFDQSxTQUFTQyxHQUFnQkQsR0FBVTtBQUNsQyxTQUFPLFFBQVEsZ0JBQWdCQSxDQUFRO0FBQ3hDO0FBQ0EsU0FBU0UsS0FBaUI7QUFDekIsTUFBSUMsR0FDQUMsR0FDQUMsSUFBYSxJQUNiQyxJQUFhO0FBQ2pCLFNBQU87QUFBQSxJQUNOLFNBQVMsSUFBSSxRQUFRLENBQUNDLEdBQUtDLE1BQVE7QUFDbEMsTUFBQUwsSUFBVSxDQUFDakgsTUFBVTtBQUNwQixRQUFJLENBQUNtSCxLQUFjLENBQUNDLE1BQ25CRCxJQUFhLElBQ2JFLEVBQUlySCxDQUFLO0FBQUEsTUFFWCxHQUNBa0gsSUFBUyxDQUFDSyxNQUFVO0FBQ25CLFFBQUksQ0FBQ0osS0FBYyxDQUFDQyxNQUNuQkEsSUFBYSxJQUNiRSxFQUFJQyxDQUFLO0FBQUEsTUFFWDtBQUFBLElBQ0QsQ0FBQztBQUFBLElBQ0QsU0FBQU47QUFBQSxJQUNBLFFBQUFDO0FBQUEsSUFDQSxJQUFJLGFBQWE7QUFDaEIsYUFBT0M7QUFBQSxJQUNSO0FBQUEsSUFDQSxJQUFJLGFBQWE7QUFDaEIsYUFBT0M7QUFBQSxJQUNSO0FBQUEsRUFDRDtBQUNEO0FBQ0EsSUFBSUksS0FBYSxNQUFNO0FBQUEsRUFDdEIsUUFBUSxDQUFDO0FBQUEsRUFDVCxhQUFhO0FBQUEsRUFDYixNQUFNLElBQUlDLEdBQVc7QUFDcEIsV0FBTyxJQUFJLFFBQVEsQ0FBQ1IsR0FBU0MsTUFBVztBQUN2QyxXQUFLLE1BQU0sS0FBSyxZQUFZO0FBQzNCLFlBQUk7QUFDSCxVQUFBRCxFQUFRLE1BQU1RLEVBQVUsQ0FBQztBQUFBLFFBQzFCLFNBQVNGLEdBQU87QUFDZixVQUFBTCxFQUFPSyxDQUFLO0FBQUEsUUFDYjtBQUFBLE1BQ0QsQ0FBQyxHQUNELEtBQUssUUFBUTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU0sVUFBVTtBQUNmLFFBQUksT0FBSyxjQUFjLEtBQUssTUFBTSxXQUFXLElBRTdDO0FBQUEsV0FEQSxLQUFLLGFBQWEsSUFDWCxLQUFLLE1BQU0sU0FBUyxJQUFHLE9BQU0sS0FBSyxNQUFNLE1BQU0sRUFBRTtBQUN2RCxXQUFLLGFBQWE7QUFBQTtBQUFBLEVBQ25CO0FBQUEsRUFDQSxJQUFJLFNBQVM7QUFDWixXQUFPLEtBQUssTUFBTTtBQUFBLEVBQ25CO0FBQUEsRUFDQSxJQUFJLGVBQWU7QUFDbEIsV0FBTyxLQUFLO0FBQUEsRUFDYjtBQUNEO0FBQ0EsU0FBU0csR0FBWWpELEdBQVNrRCxHQUFXQyxJQUFpQix1QkFBdUI7QUFDaEYsUUFBTUMsSUFBVWpCLEdBQWFuQyxDQUFPLElBQUlBLElBQVVnQyxFQUFTaEMsQ0FBTyxHQUM1RHFELElBQWlCLElBQUksUUFBUSxDQUFDN0YsR0FBR2lGLE1BQVc7QUFDakQsZUFBVyxNQUFNQSxFQUFPLElBQUksTUFBTVUsQ0FBYyxDQUFDLEdBQUdELENBQVM7QUFBQSxFQUM5RCxDQUFDO0FBQ0QsU0FBTyxRQUFRLEtBQUssQ0FBQ0UsR0FBU0MsQ0FBYyxDQUFDO0FBQzlDO0FBQ0EsZUFBZUMsR0FBTU4sR0FBV08sSUFBYSxHQUFHQyxJQUFlLEtBQUtDLElBQW9CLEdBQUc7QUFDMUYsTUFBSUM7QUFDSixXQUFTQyxJQUFVLEdBQUdBLEtBQVdKLEdBQVlJLElBQVcsS0FBSTtBQUMzRCxXQUFPLE1BQU1YLEVBQVU7QUFBQSxFQUN4QixTQUFTRixHQUFPO0FBRWYsUUFEQVksSUFBWVosR0FDUmEsSUFBVUosR0FBWTtBQUN6QixZQUFNSyxJQUFRSixJQUFlLEtBQUssSUFBSUMsR0FBbUJFLENBQU87QUFDaEUsWUFBTSxJQUFJLFFBQVEsQ0FBQ25CLE1BQVksV0FBV0EsR0FBU29CLENBQUssQ0FBQztBQUFBLElBQzFEO0FBQUEsRUFDRDtBQUNBLFFBQU1GO0FBQ1A7QUFDQSxlQUFlRyxHQUFnQkMsR0FBWUMsR0FBTztBQUNqRCxRQUFNQyxJQUFVLENBQUMsR0FDWEMsSUFBWSxDQUFDO0FBQ25CLFdBQVMsSUFBSSxHQUFHLElBQUlILEVBQVcsUUFBUSxLQUFLO0FBQzNDLFVBQU1kLElBQVljLEVBQVcsQ0FBQyxHQUN4QjlELElBQVUsUUFBUSxRQUFRLEVBQUUsS0FBSyxZQUFZO0FBQ2xELFVBQUk7QUFDSCxjQUFNdkIsSUFBUyxNQUFNdUUsRUFBVTtBQUMvQixRQUFBZ0IsRUFBUSxDQUFDLElBQUl2RjtBQUFBLE1BQ2QsU0FBU3FFLEdBQU87QUFDZixjQUFNQTtBQUFBLE1BQ1A7QUFBQSxJQUNELENBQUM7QUFDRCxJQUFBa0IsRUFBUSxDQUFDLElBQUksUUFDYkMsRUFBVSxLQUFLakUsQ0FBTyxHQUNsQmlFLEVBQVUsVUFBVUYsTUFDdkIsTUFBTSxRQUFRLEtBQUtFLENBQVMsR0FDNUJBLEVBQVUsT0FBT0EsRUFBVSxVQUFVLENBQUNDLE1BQU1BLE1BQU1sRSxDQUFPLEdBQUcsQ0FBQztBQUFBLEVBRS9EO0FBQ0EsZUFBTSxRQUFRLElBQUlpRSxDQUFTLEdBQ3BCRDtBQUNSO0FBSUEsSUFBSUcsS0FBa0IsTUFBTTtBQUFBLEVBQzNCLFdBQTJCLG9CQUFJLElBQUk7QUFBQSxFQUNuQyxZQUE0QixvQkFBSSxJQUFJO0FBQUEsRUFDcEMsU0FBU3BKLEdBQU1xSixHQUFTO0FBQ3ZCLFNBQUssU0FBUyxJQUFJckosR0FBTXFKLENBQU87QUFDL0IsVUFBTUMsSUFBWSxLQUFLLFVBQVUsSUFBSXRKLENBQUk7QUFDekMsUUFBSXNKLEVBQVcsWUFBV0MsS0FBWUQsRUFBVyxLQUFJO0FBQ3BELE1BQUFDLEVBQVNGLENBQU87QUFBQSxJQUNqQixTQUFTdEIsR0FBTztBQUNmLGNBQVEsTUFBTSx3Q0FBd0MvSCxDQUFJLEtBQUsrSCxDQUFLO0FBQUEsSUFDckU7QUFDQSxXQUFPc0I7QUFBQSxFQUNSO0FBQUEsRUFDQSxJQUFJckosR0FBTTtBQUNULFdBQU8sS0FBSyxTQUFTLElBQUlBLENBQUk7QUFBQSxFQUM5QjtBQUFBLEVBQ0EsSUFBSUEsR0FBTTtBQUNULFdBQU8sS0FBSyxTQUFTLElBQUlBLENBQUk7QUFBQSxFQUM5QjtBQUFBLEVBQ0EsV0FBV0EsR0FBTTtBQUNoQixVQUFNd0osSUFBVSxLQUFLLFNBQVMsT0FBT3hKLENBQUk7QUFDekMsUUFBSXdKLEdBQVM7QUFDWixZQUFNRixJQUFZLEtBQUssVUFBVSxJQUFJdEosQ0FBSTtBQUN6QyxVQUFJc0osRUFBVyxZQUFXQyxLQUFZRCxFQUFXLEtBQUk7QUFDcEQsUUFBQUMsRUFBUyxJQUFJO0FBQUEsTUFDZCxTQUFTeEIsR0FBTztBQUNmLGdCQUFRLE1BQU0sbURBQW1EL0gsQ0FBSSxLQUFLK0gsQ0FBSztBQUFBLE1BQ2hGO0FBQUEsSUFDRDtBQUNBLFdBQU95QjtBQUFBLEVBQ1I7QUFBQSxFQUNBLGdCQUFnQnhKLEdBQU11SixHQUFVO0FBQy9CLElBQUssS0FBSyxVQUFVLElBQUl2SixDQUFJLEtBQUcsS0FBSyxVQUFVLElBQUlBLEdBQXNCLG9CQUFJLElBQUksQ0FBQztBQUNqRixVQUFNc0osSUFBWSxLQUFLLFVBQVUsSUFBSXRKLENBQUk7QUFFekMsUUFEQXNKLEVBQVUsSUFBSUMsQ0FBUSxHQUNsQixLQUFLLFNBQVMsSUFBSXZKLENBQUksRUFBRyxLQUFJO0FBQ2hDLE1BQUF1SixFQUFTLEtBQUssU0FBUyxJQUFJdkosQ0FBSSxDQUFDO0FBQUEsSUFDakMsU0FBUytILEdBQU87QUFDZixjQUFRLE1BQU0sZ0RBQWdEL0gsQ0FBSSxLQUFLK0gsQ0FBSztBQUFBLElBQzdFO0FBQ0EsV0FBTyxNQUFNO0FBQ1osTUFBQXVCLEVBQVUsT0FBT0MsQ0FBUSxHQUNyQkQsRUFBVSxTQUFTLEtBQUcsS0FBSyxVQUFVLE9BQU90SixDQUFJO0FBQUEsSUFDckQ7QUFBQSxFQUNEO0FBQUEsRUFDQSxrQkFBa0I7QUFDakIsV0FBTyxNQUFNLEtBQUssS0FBSyxTQUFTLEtBQUssQ0FBQztBQUFBLEVBQ3ZDO0FBQUEsRUFDQSxRQUFRO0FBQ1AsU0FBSyxTQUFTLE1BQU0sR0FDcEIsS0FBSyxVQUFVLE1BQU07QUFBQSxFQUN0QjtBQUNELEdBQ0l5SixLQUF3QixJQUFJTCxHQUFnQjtBQUNoRCxTQUFTTSxHQUFtQkwsR0FBU00sR0FBUztBQUM3QyxRQUFNQyxJQUFRLENBQUM7QUFDZixhQUFXQyxLQUFVRixFQUFTLENBQUFDLEVBQU1DLENBQU0sSUFBSSxJQUFJMUMsTUFDMUNrQyxFQUFRLFFBQVFRLEdBQVExQyxDQUFJO0FBRXBDLFNBQU95QztBQUNSO0FBQ0EsSUFBSUUsS0FBdUIsTUFBTTtBQUFBLEVBQ2hDLGVBQStCLG9CQUFJLElBQUk7QUFBQSxFQUN2QyxZQUE0QixvQkFBSSxJQUFJO0FBQUEsRUFDcEMsZUFBK0Isb0JBQUksSUFBSTtBQUFBLEVBQ3ZDLG9CQUFvQkMsR0FBYUMsR0FBYUMsSUFBYSxLQUFLO0FBQy9ELFNBQUssYUFBYSxJQUFJRixHQUFhQyxDQUFXO0FBQzlDLFVBQU1FLElBQW1CLEtBQUssVUFBVSxJQUFJSCxDQUFXO0FBQ3ZELElBQUlHLEtBQWtCLGNBQWNBLENBQWdCO0FBQ3BELFVBQU1DLElBQVcsWUFBWSxZQUFZO0FBQ3hDLFVBQUk7QUFDSCxjQUFNQyxJQUFZLE1BQU1KLEVBQVk7QUFDcEMsYUFBSyxhQUFhLElBQUlELEdBQWFLLENBQVMsR0FDdkNBLEtBQVcsUUFBUSxLQUFLLDRCQUE0QkwsQ0FBVyxnQkFBZ0I7QUFBQSxNQUNyRixTQUFTaEMsR0FBTztBQUNmLGdCQUFRLE1BQU0sNENBQTRDZ0MsQ0FBVyxNQUFNaEMsQ0FBSyxHQUNoRixLQUFLLGFBQWEsSUFBSWdDLEdBQWEsRUFBSztBQUFBLE1BQ3pDO0FBQUEsSUFDRCxHQUFHRSxDQUFVO0FBQ2IsU0FBSyxVQUFVLElBQUlGLEdBQWFJLENBQVEsR0FDeENILEVBQVksRUFBRSxLQUFLLENBQUNJLE1BQWM7QUFDakMsV0FBSyxhQUFhLElBQUlMLEdBQWFLLENBQVM7QUFBQSxJQUM3QyxDQUFDLEVBQUUsTUFBTSxNQUFNO0FBQ2QsV0FBSyxhQUFhLElBQUlMLEdBQWEsRUFBSztBQUFBLElBQ3pDLENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVQSxHQUFhO0FBQ3RCLFdBQU8sS0FBSyxhQUFhLElBQUlBLENBQVcsS0FBSztBQUFBLEVBQzlDO0FBQUEsRUFDQSx1QkFBdUI7QUFDdEIsVUFBTXJHLElBQVMsQ0FBQztBQUNoQixlQUFXLENBQUMxRCxHQUFNcUssQ0FBTSxLQUFLLEtBQUssYUFBYyxDQUFBM0csRUFBTzFELENBQUksSUFBSXFLO0FBQy9ELFdBQU8zRztBQUFBLEVBQ1I7QUFBQSxFQUNBLGVBQWVxRyxHQUFhO0FBQzNCLFVBQU1JLElBQVcsS0FBSyxVQUFVLElBQUlKLENBQVc7QUFDL0MsSUFBSUksTUFDSCxjQUFjQSxDQUFRLEdBQ3RCLEtBQUssVUFBVSxPQUFPSixDQUFXLElBRWxDLEtBQUssYUFBYSxPQUFPQSxDQUFXLEdBQ3BDLEtBQUssYUFBYSxPQUFPQSxDQUFXO0FBQUEsRUFDckM7QUFBQSxFQUNBLG9CQUFvQjtBQUNuQixlQUFXSSxLQUFZLEtBQUssVUFBVSxPQUFPLEVBQUcsZUFBY0EsQ0FBUTtBQUN0RSxTQUFLLFVBQVUsTUFBTSxHQUNyQixLQUFLLGFBQWEsTUFBTSxHQUN4QixLQUFLLGFBQWEsTUFBTTtBQUFBLEVBQ3pCO0FBQ0QsR0FDSUcsS0FBNkIsSUFBSVIsR0FBcUIsR0FJdERTLEtBQWMsQ0FBQ0MsR0FBS2pKLEdBQUtrSixJQUFlLE1BQU0sU0FDMUNELEdBQUssc0JBQXNCakosR0FBSyxNQUFNa0osSUFBZSxDQUFDLEdBRTFEQyxLQUFzQixDQUFDRixHQUFLakosR0FBS29KLElBQW1CLE1BQU0sU0FDdERILEdBQUssc0JBQXNCakosR0FBS29KLENBQWdCLEdBS3BEQyxJQUFhLENBQUN0SyxNQUFRLE9BQU9BLElBQU0sT0FBTyxRQUFRLEtBQUssWUFDdkR1SyxLQUFZLENBQUNqSyxNQUFTO0FBQUEsRUFDekI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNELEVBQUUsUUFBUSxPQUFPQSxDQUFJLEtBQUssR0FDdEJrSyxLQUFhLENBQUN4SyxNQUNWQSxLQUFPLFNBQVMsT0FBT0EsS0FBTyxjQUFjLE9BQU9BLEtBQU8sYUFBYSxFQUFFQSxhQUFlLFVBRTVGeUssS0FBYSxDQUFDaEUsR0FBT3hGLElBQU0sU0FBUztBQUN2QyxRQUFNeUosSUFBVSxNQUFNLEtBQUtqRSxHQUFPLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQ2tFLE1BQU0sQ0FBQ0EsSUFBSTFKLENBQUcsR0FBRzBKLENBQUMsQ0FBQyxHQUNoRVQsSUFBTSxJQUFJLElBQUlRLENBQU87QUFDM0IsU0FBTyxNQUFNLEtBQUtSLEdBQUssU0FBUyxLQUFLLENBQUMsQ0FBQztBQUN4QyxHQUNJVSxLQUFjLENBQUNoSixHQUFRMUIsR0FBT1IsSUFBTyxTQUFTO0FBQ2pELFFBQU02RSxJQUFTN0UsS0FBUSxTQUFTLE9BQU9rQyxLQUFVLFlBQVksT0FBT0EsS0FBVSxjQUFjQSxJQUFTbEMsQ0FBSSxLQUFLa0MsSUFBU0E7QUFDdkgsTUFBSThJLElBQVUsQ0FBQztBQUNmLEVBQUl4SyxhQUFpQixPQUFPQSxhQUFpQixPQUFPLE1BQU0sUUFBUUEsQ0FBSyxLQUFLb0ssRUFBV3BLLENBQUssSUFBR3dLLEtBQVduRyxhQUFrQixPQUFPQSxhQUFrQixVQUFVckUsR0FBTyxTQUFTLElBQUlBLEdBQU8sVUFBVSxPQUFPLE1BQU0sUUFBUUEsQ0FBSyxLQUFLb0ssRUFBV3BLLENBQUssSUFBSUEsSUFBUSxDQUFDLE1BQ3ZQLE9BQU9BLEtBQVMsWUFBWSxPQUFPQSxLQUFTLGdCQUFZd0ssSUFBVW5HLGFBQWtCLE9BQU9BLGFBQWtCLFVBQVUsT0FBTyxPQUFPckUsQ0FBSyxJQUFJLE9BQU8sUUFBUUEsQ0FBSztBQUMzSyxNQUFJMkssSUFBWSxDQUFDO0FBQ2pCLEVBQUksTUFBTSxRQUFRdEcsQ0FBTSxJQUFHc0csSUFBWXRHLEVBQU8sUUFBUSxJQUM3Q0EsYUFBa0IsT0FBT0EsYUFBa0IsVUFBU3NHLElBQVl0RyxHQUFRLFVBQVUsSUFDbEZBLGFBQWtCLE9BQU9BLGFBQWtCLFVBQVNzRyxJQUFZdEcsR0FBUSxTQUFTLEtBQ2pGLE9BQU9BLEtBQVUsWUFBWSxPQUFPQSxLQUFVLGdCQUFZc0csSUFBWSxPQUFPLFFBQVF0RyxDQUFNO0FBQ3BHLFFBQU11RyxJQUFPLElBQUksSUFBSSxNQUFNLEtBQUtKLENBQU8sRUFBRSxJQUFJLENBQUNLLE1BQU1BLElBQUksQ0FBQyxDQUFDLENBQUMsR0FDckRDLElBQU0sSUFBSSxJQUFJLE1BQU0sS0FBS0gsQ0FBUyxFQUFFLElBQUksQ0FBQ0UsTUFBTUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUN0REUsSUFBVUgsR0FBTSxhQUFhRSxDQUFHO0FBQ3RDLE1BQUksTUFBTSxRQUFRekcsQ0FBTSxHQUFHO0FBQzFCLFVBQU0yRyxJQUFLM0csRUFBTyxPQUFPLENBQUNwQyxHQUFHd0ksTUFBTSxDQUFDTSxFQUFRLElBQUlOLENBQUMsQ0FBQztBQUNsRCxJQUFBcEcsRUFBTyxPQUFPLEdBQUdBLEVBQU8sTUFBTSxHQUM5QkEsRUFBTyxLQUFLLEdBQUcyRyxDQUFFO0FBQUEsRUFDbEIsV0FBVzNHLGFBQWtCLE9BQU9BLGFBQWtCLE9BQU9BLGFBQWtCLFdBQVdBLGFBQWtCLFFBQVMsWUFBVzRHLEtBQUtGLEVBQVMsQ0FBQTFHLEVBQU8sT0FBTzRHLENBQUM7QUFBQSxXQUNwSixPQUFPNUcsS0FBVSxjQUFjLE9BQU9BLEtBQVUsU0FBVSxZQUFXNEcsS0FBS0YsRUFBUyxRQUFPMUcsRUFBTzRHLENBQUM7QUFDM0csU0FBTzVHO0FBQ1IsR0FDSTZHLEtBQWUsQ0FBQ3hKLEdBQVExQixHQUFPUixJQUFPLE1BQU0yTCxJQUFrQixJQUFNQyxJQUFXLFNBQVM7QUFDM0YsUUFBTS9HLElBQVM3RSxLQUFRLFNBQVMsT0FBT2tDLEtBQVUsWUFBWSxPQUFPQSxLQUFVLGNBQWNBLElBQVNsQyxDQUFJLEtBQUtrQyxJQUFTQTtBQUN2SCxNQUFJOEksSUFBVTtBQUlkLE1BSElXLEtBQWlCVCxHQUFZckcsR0FBUXJFLENBQUssR0FDMUNBLGFBQWlCLE9BQU9BLGFBQWlCLE9BQU8sTUFBTSxRQUFRQSxDQUFLLEtBQUtvSyxFQUFXcEssQ0FBSyxJQUFHd0ssS0FBV25HLGFBQWtCLE9BQU9BLGFBQWtCLFVBQVVyRSxHQUFPLFNBQVMsSUFBSUEsR0FBTyxVQUFVLE9BQU8sTUFBTSxRQUFRQSxDQUFLLEtBQUtvSyxFQUFXcEssQ0FBSyxJQUFJQSxJQUFRLENBQUMsTUFDdlAsT0FBT0EsS0FBUyxZQUFZLE9BQU9BLEtBQVMsZ0JBQVl3SyxJQUFVbkcsYUFBa0IsT0FBT0EsYUFBa0IsVUFBVSxPQUFPLE9BQU9yRSxDQUFLLElBQUksT0FBTyxRQUFRQSxDQUFLLElBQ3ZLcUUsS0FBVW1HLE1BQVksT0FBT0EsS0FBVyxZQUFZLE9BQU9BLEtBQVcsYUFBYTtBQUN0RixRQUFJbkcsYUFBa0IsT0FBT0EsYUFBa0IsU0FBUztBQUN2RCxpQkFBV2dILEtBQUtiLEVBQVMsQ0FBQW5HLEVBQU8sSUFBSSxHQUFHZ0gsQ0FBQztBQUN4QyxhQUFPaEg7QUFBQSxJQUNSO0FBQ0EsUUFBSUEsYUFBa0IsT0FBT0EsYUFBa0IsU0FBUztBQUN2RCxpQkFBV2dILEtBQUtiLEdBQVM7QUFDeEIsY0FBTWMsSUFBV0QsSUFBSUQsQ0FBUSxJQUFJLE1BQU0sS0FBSy9HLEdBQVEsU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQ29HLE1BQU0sQ0FBQ2MsSUFBYWQsSUFBSVcsQ0FBUSxHQUFHQyxJQUFJRCxDQUFRLENBQUMsQ0FBQyxJQUFJO0FBQ2pJLFFBQUlFLEtBQVksT0FBTUosR0FBYUksR0FBVUQsR0FBRyxNQUFNRixHQUFpQkMsQ0FBUSxJQUMxRS9HLEVBQU8sSUFBSWdILENBQUM7QUFBQSxNQUNsQjtBQUNBLGFBQU9oSDtBQUFBLElBQ1I7QUFDQSxRQUFJLE9BQU9BLEtBQVUsWUFBWSxPQUFPQSxLQUFVLFlBQVk7QUFDN0QsVUFBSSxNQUFNLFFBQVFBLENBQU0sS0FBSytGLEVBQVcvRixDQUFNLEdBQUc7QUFDaEQsWUFBSW9HLElBQUk7QUFDUixtQkFBV1ksS0FBS2IsRUFBUyxDQUFJQyxJQUFJcEcsRUFBTyxTQUFRQSxFQUFPb0csR0FBRyxJQUFJWSxJQUFJLENBQUMsSUFDOURoSCxHQUFRLE9BQU9nSCxJQUFJLENBQUMsQ0FBQztBQUMxQixlQUFPaEg7QUFBQSxNQUNSO0FBQ0EsYUFBTyxPQUFPLE9BQU9BLEdBQVEsT0FBTyxZQUFZLENBQUMsR0FBR21HLEtBQVcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDZ0IsTUFBTSxPQUFPQSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0FBQUEsSUFDeEc7QUFBQSxFQUNEO0FBQ0EsU0FBSWhNLEtBQVEsUUFDWCxRQUFRLElBQUlrQyxHQUFRbEMsR0FBTVEsQ0FBSyxHQUN4QjBCLEtBQ0csT0FBTzFCLEtBQVMsWUFBWSxPQUFPQSxLQUFTLGFBQW1CLE9BQU8sT0FBTzBCLEdBQVExQixDQUFLLElBQzlGQTtBQUNSLEdBQ0l5TCxLQUFTLENBQUMvSixHQUFRZCxNQUNkOEssR0FBUyxZQUFZaEssR0FBd0Isb0JBQUksUUFBUSxDQUFDLEVBQUUsWUFBWWQsR0FBSUEsR0FBSSxPQUFPYyxDQUFNLENBQUMsR0FFbEdpSyxLQUFVLENBQUNqSyxHQUFRZCxPQUFRLE9BQU9BLEtBQU0sYUFBYTZLLEdBQU8vSixHQUFRZCxDQUFFLElBQUlBLE1BQU9BLEdBQ2pGZ0wsSUFBYSxDQUFDcEwsR0FBUUosR0FBTTRDLEdBQUk2SSxNQUFRO0FBQzNDLE1BQUl6TCxLQUFRLE9BQU8sU0FBVSxRQUFPMEwsR0FBY3RMLEdBQVF3QyxHQUFJNkksQ0FBRztBQUNqRSxNQUFJekwsS0FBUSxRQUFRLE9BQU9BLEtBQVEsWUFBWSxPQUFPQSxLQUFRLFlBQVksT0FBT0EsS0FBUSxXQUFZO0FBQ3JHLFFBQU0yTCxJQUFnQixDQUFDNUwsTUFBTXdHLE1BQVM7QUFDckMsUUFBSXhHLEtBQUssS0FBTSxRQUFPNkMsSUFBSzdDLEdBQUcsR0FBR3dHLENBQUk7QUFBQSxFQUN0QztBQUNBLE1BQUluRyxhQUFrQixPQUFPQSxhQUFrQjtBQUM5QyxRQUFJQSxFQUFPLElBQUlKLENBQUksRUFBRyxRQUFPMkwsSUFBZ0J2TCxFQUFPLElBQUlKLENBQUksR0FBR0EsR0FBTSxNQUFNLE1BQU07QUFBQSxhQUN2RUksYUFBa0IsT0FBT0EsYUFBa0I7QUFDckQsUUFBSUEsRUFBTyxJQUFJSixDQUFJLEVBQUcsUUFBTzJMLElBQWdCM0wsR0FBTUEsR0FBTSxNQUFNLE1BQU07QUFBQSxhQUMzRCxNQUFNLFFBQVFJLENBQU0sS0FBSyxPQUFPSixLQUFRLFlBQVksQ0FBQyxHQUFHQSxHQUFNLFdBQVcsUUFBUSxDQUFDLEVBQUUsVUFBVSxLQUFLLE9BQU8sVUFBVSxPQUFPQSxLQUFRLFdBQVcsU0FBU0EsQ0FBSSxJQUFJQSxDQUFJLEdBQUc7QUFDaEwsVUFBTTRMLElBQVEsT0FBTzVMLEtBQVEsV0FBVyxTQUFTQSxDQUFJLElBQUlBO0FBQ3pELFdBQU8yTCxJQUFnQnZMLElBQVN3TCxDQUFLLEdBQUdBLEdBQU8sTUFBTSxNQUFNO0FBQUEsRUFDNUQsV0FBVyxPQUFPeEwsS0FBVSxjQUFjLE9BQU9BLEtBQVUsU0FBVSxRQUFPdUwsSUFBZ0J2TCxJQUFTSixDQUFJLEdBQUdBLEdBQU0sTUFBTSxNQUFNO0FBQy9ILEdBQ0k2TCxLQUF1QixDQUFDQyxHQUFLQyxJQUFNLENBQUMsT0FDdkMsT0FBTyxRQUFRQSxDQUFHLEdBQUcsVUFBVSxDQUFDLENBQUNsQixHQUFHOUssQ0FBQyxNQUFNO0FBQzFDLEVBQUlvTCxFQUFXcEwsR0FBRytMLEVBQUlqQixDQUFDLENBQUMsTUFBR2lCLEVBQUlqQixDQUFDLElBQUk5SztBQUNyQyxDQUFDLEdBQ00rTCxJQUVKSixLQUFnQixDQUFDdEwsR0FBUXdDLEdBQUk2SSxNQUFRO0FBQ3hDLE1BQUlyTCxLQUFVLEtBQU07QUFDcEIsTUFBSW9LLElBQU8sQ0FBQztBQUNaLE1BQUlwSyxhQUFrQixPQUFPQSxhQUFrQixPQUFPLE9BQU9BLEdBQVEsUUFBUSxXQUFZLFFBQU8sQ0FBQyxHQUFHQSxHQUFRLE9BQU8sS0FBS29LLENBQUksRUFBRSxVQUFVLENBQUN4SyxNQUFTd0wsRUFBV3BMLEdBQVFKLEdBQU00QyxHQUFJNkksQ0FBRyxDQUFDO0FBQ25MLE1BQUksTUFBTSxRQUFRckwsQ0FBTSxLQUFLNEosRUFBVzVKLENBQU0sRUFBRyxRQUFPLENBQUMsR0FBR0EsQ0FBTSxFQUFFLFVBQVUsQ0FBQ0wsR0FBR3NLLE1BQU1tQixFQUFXcEwsR0FBUWlLLEdBQUd6SCxHQUFJNkksQ0FBRyxDQUFDO0FBQ3RILE1BQUksT0FBT3JMLEtBQVUsWUFBWSxPQUFPQSxLQUFVLFdBQVksUUFBTyxDQUFDLEdBQUcsT0FBTyxLQUFLQSxDQUFNLEtBQUtvSyxDQUFJLEVBQUUsVUFBVSxDQUFDeEssTUFBU3dMLEVBQVdwTCxHQUFRSixHQUFNNEMsR0FBSTZJLENBQUcsQ0FBQztBQUM1SixHQUNJTyxLQUFtQixDQUFDNUcsR0FBRzZHLE1BQ3RCN0csS0FBSyxRQUFRNkcsS0FBSyxPQUFhLEtBQy9CN0csS0FBSyxRQUFRNkcsS0FBSyxPQUFhLEtBQy9CN0csYUFBYSxPQUFPQSxhQUFhLFVBQWdCQSxFQUFFLFFBQVE2RyxFQUFFLFFBQVEsTUFBTSxLQUFLN0csRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQ3lGLEdBQUc5SyxDQUFDLE1BQU0sQ0FBQ2tNLEVBQUUsSUFBSXBCLENBQUMsS0FBSyxDQUFDTSxFQUFXcEwsR0FBR2tNLEVBQUUsSUFBSXBCLENBQUMsQ0FBQyxDQUFDLElBQ25KekYsYUFBYSxPQUFPQSxhQUFhLFVBQWdCQSxFQUFFLFFBQVE2RyxFQUFFLFFBQVEsTUFBTSxLQUFLN0csRUFBRSxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUNyRixNQUFNLENBQUNrTSxFQUFFLElBQUlsTSxDQUFDLENBQUMsSUFDakgsTUFBTSxRQUFRcUYsQ0FBQyxLQUFLLE1BQU0sUUFBUTZHLENBQUMsSUFBVTdHLEVBQUUsVUFBVTZHLEVBQUUsVUFBVTdHLEVBQUUsS0FBSyxDQUFDckYsR0FBR2lCLE1BQU0sQ0FBQ21LLEVBQVdwTCxHQUFHa00sRUFBRWpMLENBQUMsQ0FBQyxDQUFDLElBQzFHLE9BQU9vRSxLQUFLLFlBQVksT0FBTzZHLEtBQUssV0FBaUIsS0FBSyxVQUFVN0csQ0FBQyxLQUFLLEtBQUssVUFBVTZHLENBQUMsSUFDdkY3RyxLQUFLNkcsR0FFVGQsSUFBYSxDQUFDL0YsR0FBRzZHLE1BQ2hCN0csS0FBSyxRQUFRNkcsS0FBSyxPQUFhLEtBQy9CN0csS0FBSyxRQUFRNkcsS0FBSyxPQUFhLEtBQy9CLE9BQU83RyxLQUFLLGFBQWEsT0FBTzZHLEtBQUssWUFBa0I3RyxLQUFLNkcsSUFDNUQsT0FBTzdHLEtBQUssWUFBWSxPQUFPNkcsS0FBSyxXQUFpQixFQUFFN0csS0FBSzZHLEtBQUssS0FBSyxJQUFJN0csSUFBSTZHLENBQUMsSUFBSSxRQUNuRixPQUFPN0csS0FBSyxZQUFZLE9BQU82RyxLQUFLLFdBQWlCN0csS0FBSyxNQUFNNkcsS0FBSyxNQUFNN0csS0FBSzZHLEtBQUs3RyxNQUFNNkcsSUFDM0YsT0FBTzdHLEtBQUssT0FBTzZHLElBQVU3RyxNQUFNNkcsSUFDaEM3RyxLQUFLNkcsS0FBSzdHLEtBQUs2RyxLQUFLN0csTUFBTTZHLEdBRTlCQyxJQUFpQix1QkFBTyxJQUFJLGlCQUFpQjtBQUNqRCxXQUFXQSxDQUFjLE1BQXNCLG9CQUFJLFFBQVE7QUFDM0QsSUFBSVosS0FBVyxXQUFXWSxDQUFjLEdBQ3BDQyxLQUFvQixDQUFDeEwsR0FBS29MLE1BQVE7QUFDckMsUUFBTUssSUFBa0J6TCxLQUFPLFFBQVFBLElBQU0sS0FBSyxPQUFPQSxLQUFPLFlBQVlBLEtBQU8sT0FBTyxhQUFhb0wsS0FBTyxPQUFPcEwsTUFBUW9MLEdBQUssVUFBVSxLQUFLO0FBQ2pKLFNBQU9BLEtBQU8sT0FBTyxNQUFNLFFBQVFBLENBQUcsS0FBS0ssSUFBa0I7QUFDOUQsR0FDSUMsS0FBMEIsb0JBQUksUUFBUSxHQUN0Q0MsS0FBYSxDQUFDQyxHQUFJbk4sTUFDZCxPQUFPbU4sSUFBS25OLENBQUksS0FBSyxhQUFhbU4sSUFBS25OLENBQUksR0FBRyxPQUFPbU4sQ0FBRSxJQUFJQSxJQUFLbk4sQ0FBSSxHQUV4RW9OLElBQXNCLENBQUM5TSxHQUFLMkgsR0FBV29GLE1BQVU7QUFDcEQsTUFBSSxNQUFNLFFBQVEvTSxDQUFHO0FBQ3BCLFdBQUlBLEVBQUksTUFBTW1GLENBQWUsSUFBVW5GLEVBQUksSUFBSTJILENBQVMsSUFDakQzSCxFQUFJLElBQUksQ0FBQ0UsR0FBT2dNLE1BQVVZLEVBQW9CNU0sR0FBT3lILEdBQVcsQ0FBQzNILEdBQUtrTSxDQUFLLENBQUMsQ0FBQztBQUVyRixNQUFJbE0sYUFBZSxLQUFLO0FBQ3ZCLFVBQU0wSyxJQUFVLE1BQU0sS0FBSzFLLEVBQUksUUFBUSxDQUFDO0FBQ3hDLFdBQUkwSyxFQUFRLElBQUksQ0FBQyxDQUFDekosR0FBS2YsQ0FBSyxNQUFNQSxDQUFLLEVBQUUsTUFBTWlGLENBQWUsSUFBVSxJQUFJLElBQUl1RixFQUFRLElBQUksQ0FBQyxDQUFDekosR0FBS2YsQ0FBSyxNQUFNLENBQUNlLEdBQUswRyxFQUFVekgsR0FBT2UsR0FBS2pCLENBQUcsQ0FBQyxDQUFDLENBQUMsSUFDekksSUFBSSxJQUFJMEssRUFBUSxJQUFJLENBQUMsQ0FBQ3pKLEdBQUtmLENBQUssTUFBTSxDQUFDZSxHQUFLNkwsRUFBb0I1TSxHQUFPeUgsR0FBVyxDQUFDM0gsR0FBS2lCLENBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ3ZHO0FBQ0EsTUFBSWpCLGFBQWUsS0FBSztBQUN2QixVQUFNMEssSUFBVSxNQUFNLEtBQUsxSyxFQUFJLFFBQVEsQ0FBQyxHQUNsQ3FCLElBQVNxSixFQUFRLElBQUksQ0FBQyxDQUFDekosR0FBS2YsQ0FBSyxNQUFNQSxDQUFLO0FBQ2xELFdBQUl3SyxFQUFRLE1BQU12RixDQUFlLElBQVUsSUFBSSxJQUFJOUQsRUFBTyxJQUFJc0csQ0FBUyxDQUFDLElBQ2pFLElBQUksSUFBSXRHLEVBQU8sSUFBSSxDQUFDbkIsTUFBVTRNLEVBQW9CNU0sR0FBT3lILEdBQVcsQ0FBQzNILEdBQUtFLENBQUssQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMxRjtBQUNBLE1BQUksT0FBT0YsS0FBTyxZQUFZQSxHQUFLLGVBQWUsVUFBVSxPQUFPLFVBQVUsU0FBUyxLQUFLQSxDQUFHLEtBQUssbUJBQW1CO0FBQ3JILFVBQU0wSyxJQUFVLE1BQU0sS0FBSyxPQUFPLFFBQVExSyxDQUFHLENBQUM7QUFDOUMsV0FBSTBLLEVBQVEsSUFBSSxDQUFDLENBQUN6SixHQUFLZixDQUFLLE1BQU1BLENBQUssRUFBRSxNQUFNaUYsQ0FBZSxJQUFVLE9BQU8sWUFBWXVGLEVBQVEsSUFBSSxDQUFDLENBQUN6SixHQUFLZixDQUFLLE1BQU0sQ0FBQ2UsR0FBSzBHLEVBQVV6SCxHQUFPZSxHQUFLakIsQ0FBRyxDQUFDLENBQUMsQ0FBQyxJQUNwSixPQUFPLFlBQVkwSyxFQUFRLElBQUksQ0FBQyxDQUFDekosR0FBS2YsQ0FBSyxNQUFNLENBQUNlLEdBQUs2TCxFQUFvQjVNLEdBQU95SCxHQUFXLENBQUMzSCxHQUFLaUIsQ0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDbEg7QUFDQSxTQUFPMEcsRUFBVTNILEdBQUsrTSxJQUFRLENBQUMsS0FBSyxJQUFJQSxJQUFRLENBQUMsS0FBSyxJQUFJO0FBQzNELEdBQ0lDLEtBQVksQ0FBQ0MsR0FBSWhNLEdBQUtmLE1BQVU7QUFDbkMsTUFBSStNLElBQUtoTSxDQUFHLEtBQUssTUFBTTtBQUN0QixVQUFNc0QsSUFBUzBJLEVBQUdoTSxDQUFHO0FBQ3JCLFdBQUksTUFBTSxRQUFRZixDQUFLLElBQUdxRSxFQUFPLElBQUksR0FBR3JFLENBQUssSUFDcEMsT0FBT0EsS0FBUyxjQUFZcUUsRUFBTyxJQUFJckUsQ0FBSyxHQUM5QytNO0FBQUEsRUFDUjtBQUNBLFNBQUFBLEVBQUdoTSxDQUFHLE1BQU0sTUFBTSxRQUFRZixDQUFLLElBQUksSUFBSSxJQUFJQSxDQUFLLElBQUksT0FBT0EsS0FBUyxhQUE2QixvQkFBSSxJQUFJLENBQUNBLENBQUssQ0FBQyxJQUFJQSxHQUM3RytNO0FBQ1IsR0FJSUMsS0FBaUIsdUJBQU8sSUFBSSxtQkFBbUIsR0FDL0NDLEtBQWdCLHVCQUFPLElBQUksa0JBQWtCO0FBQ2pELFdBQVdELEVBQWMsTUFBc0Isb0JBQUksUUFBUTtBQUMzRCxXQUFXQyxFQUFhLE1BQXNCLG9CQUFJLFFBQVE7QUFDMUQsSUFBSUMsSUFBYyxXQUFXRixFQUFjLEdBQ3ZDRyxJQUFhLFdBQVdGLEVBQWEsR0FDckNHLEtBQWUsdUJBQU8sSUFBSSxVQUFVLEdBQ3BDQyxJQUFhLENBQUNyTixNQUFVQSxhQUFpQixXQUFXLE9BQU9BLEdBQU8sUUFBUSxZQUMxRXNOLElBQVUsQ0FBQ0MsR0FBZ0J2SyxNQUMxQnFLLEVBQVdFLENBQWMsSUFDeEJMLEdBQWEsTUFBTUssQ0FBYyxJQUFVdkssRUFBR2tLLEdBQWEsTUFBTUssQ0FBYyxDQUFDLElBQzdFLFFBQVEsTUFBTSxZQUFZO0FBQ2hDLFFBQU1wSCxJQUFPLE1BQU1vSDtBQUNuQixTQUFBTCxHQUFhLE1BQU1LLEdBQWdCcEgsQ0FBSSxHQUNoQ0E7QUFDUixDQUFDLEdBQUcsT0FBT25ELENBQUUsSUFFUEEsRUFBR3VLLENBQWMsR0FFckJDLEtBQWlCLE1BQU07QUFBQSxFQUMxQkM7QUFBQSxFQUNBQztBQUFBLEVBQ0EsWUFBWXpHLEdBQVNDLEdBQVE7QUFDNUIsU0FBS3VHLEtBQVd4RyxHQUNoQixLQUFLeUcsS0FBVXhHO0FBQUEsRUFDaEI7QUFBQSxFQUNBLGVBQWV4RixHQUFRdEIsR0FBTXVOLEdBQVk7QUFDeEMsV0FBSW5OLEVBQU9rQixDQUFNLGFBQWEsVUFBZ0IsUUFBUSxlQUFlQSxHQUFRdEIsR0FBTXVOLENBQVUsSUFDdEZMLEVBQVE5TSxFQUFPa0IsQ0FBTSxHQUFHLENBQUM1QixNQUFRLFFBQVEsZUFBZUEsR0FBS00sR0FBTXVOLENBQVUsQ0FBQztBQUFBLEVBQ3RGO0FBQUEsRUFDQSxlQUFlak0sR0FBUXRCLEdBQU07QUFDNUIsV0FBSUksRUFBT2tCLENBQU0sYUFBYSxVQUFnQixRQUFRLGVBQWVBLEdBQVF0QixDQUFJLElBQzFFa04sRUFBUTlNLEVBQU9rQixDQUFNLEdBQUcsQ0FBQzVCLE1BQVEsUUFBUSxlQUFlQSxHQUFLTSxDQUFJLENBQUM7QUFBQSxFQUMxRTtBQUFBLEVBQ0EsZUFBZXNCLEdBQVE7QUFDdEIsV0FBSWxCLEVBQU9rQixDQUFNLGFBQWEsVUFBZ0IsUUFBUSxlQUFlQSxDQUFNLElBQ3BFNEwsRUFBUTlNLEVBQU9rQixDQUFNLEdBQUcsQ0FBQzVCLE1BQVEsUUFBUSxlQUFlQSxDQUFHLENBQUM7QUFBQSxFQUNwRTtBQUFBLEVBQ0EsZUFBZTRCLEdBQVFrTSxHQUFPO0FBQzdCLFdBQUlwTixFQUFPa0IsQ0FBTSxhQUFhLFVBQWdCLFFBQVEsZUFBZUEsR0FBUWtNLENBQUssSUFDM0VOLEVBQVE5TSxFQUFPa0IsQ0FBTSxHQUFHLENBQUM1QixNQUFRLFFBQVEsZUFBZUEsR0FBSzhOLENBQUssQ0FBQztBQUFBLEVBQzNFO0FBQUEsRUFDQSxhQUFhbE0sR0FBUTtBQUNwQixXQUFJbEIsRUFBT2tCLENBQU0sYUFBYSxVQUFnQixRQUFRLGFBQWFBLENBQU0sSUFDbEU0TCxFQUFROU0sRUFBT2tCLENBQU0sR0FBRyxDQUFDNUIsTUFBUSxRQUFRLGFBQWFBLENBQUcsQ0FBQztBQUFBLEVBQ2xFO0FBQUEsRUFDQSxrQkFBa0I0QixHQUFRO0FBQ3pCLFdBQUlsQixFQUFPa0IsQ0FBTSxhQUFhLFVBQWdCLFFBQVEsUUFBUUEsQ0FBTSxJQUM3RDRMLEVBQVE5TSxFQUFPa0IsQ0FBTSxHQUFHLENBQUM1QixNQUFRLFFBQVEsa0JBQWtCQSxDQUFHLENBQUM7QUFBQSxFQUN2RTtBQUFBLEVBQ0EsUUFBUTRCLEdBQVE7QUFDZixVQUFNbU0sSUFBTXJOLEVBQU9rQixDQUFNO0FBQ3pCLFdBQUltTSxhQUFlLFVBQWdCLE9BQU8sS0FBS0EsQ0FBRyxJQUMzQ1AsRUFBUU8sR0FBSyxDQUFDL04sT0FDWixPQUFPQSxLQUFPLFlBQVksT0FBT0EsS0FBTyxlQUFlQSxLQUFPLE9BQU8sT0FBTyxLQUFLQSxDQUFHLElBQUksQ0FBQyxDQUNqRyxLQUFLLENBQUM7QUFBQSxFQUNSO0FBQUEsRUFDQSx5QkFBeUI0QixHQUFRdEIsR0FBTTtBQUN0QyxXQUFJSSxFQUFPa0IsQ0FBTSxhQUFhLFVBQWdCLFFBQVEseUJBQXlCQSxHQUFRdEIsQ0FBSSxJQUNwRmtOLEVBQVE5TSxFQUFPa0IsQ0FBTSxHQUFHLENBQUM1QixNQUFRLFFBQVEseUJBQXlCQSxHQUFLTSxDQUFJLENBQUM7QUFBQSxFQUNwRjtBQUFBLEVBQ0EsVUFBVXNCLEdBQVFpRixHQUFNbUgsR0FBVztBQUNsQyxXQUFPUixFQUFROU0sRUFBT2tCLENBQU0sR0FBRyxDQUFDcU0sTUFBTyxRQUFRLFVBQVVBLEdBQUlwSCxHQUFNbUgsQ0FBUyxDQUFDO0FBQUEsRUFDOUU7QUFBQSxFQUNBLElBQUlwTSxHQUFRdEIsR0FBTTtBQUNqQixXQUFJSSxFQUFPa0IsQ0FBTSxhQUFhLFVBQWdCLFFBQVEsSUFBSUEsR0FBUXRCLENBQUksSUFDL0RrTixFQUFROU0sRUFBT2tCLENBQU0sR0FBRyxDQUFDNUIsTUFBUSxRQUFRLElBQUlBLEdBQUtNLENBQUksQ0FBQztBQUFBLEVBQy9EO0FBQUEsRUFDQSxJQUFJc0IsR0FBUXRCLEdBQU00TixHQUFVO0FBRTNCLFFBREF0TSxJQUFTbEIsRUFBT2tCLENBQU0sR0FDbEJ0QixLQUFRLFVBQVcsUUFBT3NCO0FBQzlCLFFBQUl0QixLQUFRLGFBQWEsS0FBS3FOLEdBQVUsUUFBTyxJQUFJOUcsTUFBUztBQUMzRCxZQUFNekQsSUFBUyxLQUFLdUssS0FBVyxHQUFHOUcsQ0FBSTtBQUN0QyxrQkFBSzhHLEtBQVcsTUFDVHZLO0FBQUEsSUFDUjtBQUNBLFFBQUk5QyxLQUFRLFlBQVksS0FBS3NOLEdBQVMsUUFBTyxJQUFJL0csTUFBUztBQUN6RCxZQUFNekQsSUFBUyxLQUFLd0ssS0FBVSxHQUFHL0csQ0FBSTtBQUNyQyxrQkFBSytHLEtBQVUsTUFDUnhLO0FBQUEsSUFDUjtBQUNBLFFBQUk5QyxLQUFRLFVBQVVBLEtBQVEsV0FBV0EsS0FBUSxXQUFXO0FBQzNELFVBQUlzQixhQUFrQixRQUFTLFFBQU9BLElBQVN0QixDQUFJLEdBQUcsT0FBT3NCLENBQU07QUFDOUQ7QUFDSixjQUFNdU0sSUFBTyxRQUFRLElBQUksTUFBTXZNLENBQU07QUFDckMsZUFBT3VNLElBQU83TixDQUFJLEdBQUcsT0FBTzZOLENBQUk7QUFBQSxNQUNqQztBQUFBLElBQ0Q7QUFDQSxRQUFJL0s7QUFjSixXQWJJZ0ssR0FBYSxNQUFNeEwsQ0FBTSxNQUFNd0IsSUFBU2dLLEdBQWEsTUFBTXhMLENBQU0sS0FBS3RCLENBQUksS0FBSyxPQUFNOEMsSUFBU2dLLEdBQWEsTUFBTXhMLENBQU0sSUFBSXRCLENBQUksSUFDOUg4QyxJQUFTZ0wsRUFBU1osRUFBUTVMLEdBQVEsT0FBTzVCLE1BQVE7QUFDckQsVUFBSVUsRUFBT1YsQ0FBRyxhQUFhLFFBQVMsUUFBTyxRQUFRLElBQUlBLEdBQUtNLEdBQU00TixDQUFRO0FBQzFFLFVBQUlwTyxFQUFZRSxDQUFHLEVBQUcsUUFBT00sS0FBUSxPQUFPLGVBQWVBLEtBQVEsT0FBTyxjQUFjTixJQUFNO0FBQzlGLFVBQUlFO0FBQ0osVUFBSTtBQUNILFFBQUFBLElBQVEsUUFBUSxJQUFJRixHQUFLTSxHQUFNNE4sQ0FBUTtBQUFBLE1BQ3hDLFFBQVk7QUFDWCxRQUFBaE8sSUFBUTBCLElBQVN0QixDQUFJO0FBQUEsTUFDdEI7QUFDQSxhQUFJLE9BQU9KLEtBQVMsYUFBbUJBLEdBQU8sT0FBT0YsQ0FBRyxJQUNqREU7QUFBQSxJQUNSLENBQUMsQ0FBQyxHQUNFSSxLQUFRLE9BQU8sY0FDZFIsRUFBWXNELENBQU0sSUFBVSxPQUFPQSxLQUFVLEVBQUUsS0FBSyxLQUNqREEsSUFBUyxPQUFPLFdBQVcsSUFBSSxLQUFLLE9BQU9BLEtBQVUsRUFBRSxLQUFLLEtBRWhFOUMsS0FBUSxPQUFPLGNBQW9CLENBQUNILE1BQVM7QUFDaEQsVUFBSUwsRUFBWXNELENBQU0sRUFBRyxRQUFPbkQsR0FBZW1ELEdBQVFqRCxDQUFJO0FBQUEsSUFDNUQsSUFDT2lEO0FBQUEsRUFDUjtBQUFBLEVBQ0EsSUFBSXhCLEdBQVF0QixHQUFNSixHQUFPO0FBQ3hCLFdBQU9zTixFQUFROU0sRUFBT2tCLENBQU0sR0FBRyxDQUFDNUIsTUFBUSxRQUFRLElBQUlBLEdBQUtNLEdBQU1KLENBQUssQ0FBQztBQUFBLEVBQ3RFO0FBQUEsRUFDQSxNQUFNMEIsR0FBUXlNLEdBQVN4SCxHQUFNO0FBQzVCLFFBQUksS0FBSzhHLElBQVU7QUFDbEIsWUFBTXZLLElBQVMsS0FBS3VLLEtBQVcsR0FBRzlHLENBQUk7QUFDdEMsa0JBQUs4RyxLQUFXLE1BQ1R2SztBQUFBLElBQ1I7QUFDQSxXQUFPb0ssRUFBUTlNLEVBQU9rQixHQUFRLEtBQUsrTCxFQUFRLEdBQUcsQ0FBQzNOLE1BQVE7QUFDdEQsVUFBSSxPQUFPQSxLQUFPO0FBQ2pCLGVBQUlVLEVBQU9WLENBQUcsYUFBYSxTQUFnQixRQUFRLE1BQU1BLEdBQUtxTyxHQUFTeEgsQ0FBSTtBQUFBLElBRzdFLENBQUM7QUFBQSxFQUNGO0FBQ0Q7QUFDQSxTQUFTdUgsRUFBU3pKLEdBQVN3QyxHQUFTQyxHQUFRO0FBQzNDLFNBQUl6QyxLQUFXLFFBQVEsT0FBT0EsR0FBUyxZQUFZLGNBQWNBLEVBQVEySSxFQUFZLEtBQUssUUFBUXBILEVBQW1CdkIsQ0FBTyxJQUFVeUosRUFBU3pKLEVBQVEsU0FBUyxHQUFHd0MsR0FBU0MsQ0FBTSxJQUM5SyxDQUFDbUcsRUFBVzVJLENBQU8sS0FBS3VCLEVBQW1CdkIsQ0FBTyxJQUFVeUosRUFBU3pILEVBQVNoQyxDQUFPLEdBQUd3QyxHQUFTQyxDQUFNLElBQ3RHbUcsRUFBVzVJLENBQU8sSUFDbkJ5SSxHQUFhLE1BQU16SSxDQUFPLElBQVV5SSxHQUFhLE1BQU16SSxDQUFPLEtBQzdEMEksR0FBWSxNQUFNMUksQ0FBTyxLQUFHQSxHQUFTLE9BQU8sQ0FBQzBCLE1BQVMrRyxHQUFhLE1BQU16SSxHQUFTMEIsQ0FBSSxDQUFDLEdBQ3JGZ0gsRUFBVyxvQkFBb0IxSSxHQUFTLE1BQU0sSUFBSSxNQUFNOUQsR0FBTThELENBQU8sR0FBRyxJQUFJK0ksR0FBZXZHLEdBQVNDLENBQU0sQ0FBQyxDQUFDLEtBSGxGekM7QUFJbEM7QUFDQXlKLEVBQVMsV0FBVyxTQUFTcEgsR0FBVUcsR0FBU0MsR0FBUTtBQUN2RCxTQUFPZ0gsRUFBUyxRQUFRLFNBQVNwSCxDQUFRLEdBQUdHLEdBQVNDLENBQU07QUFDNUQ7QUFDQWdILEVBQVMsa0JBQWtCLFNBQVNwSCxHQUFVRyxHQUFTQyxHQUFRO0FBQzlELFNBQU9nSCxFQUFTLFFBQVEsZ0JBQWdCcEgsQ0FBUSxHQUFHRyxHQUFTQyxDQUFNO0FBQ25FO0FBSUEsSUFBSWtILElBQTRCLG9CQUFJLFFBQVEsR0FDeENDLEtBQXNCLE1BQU07QUFBQSxFQUMvQixPQUFPM00sR0FBUTtBQUNkLFdBQU9BLGFBQWtCLFdBQVcsT0FBT0EsR0FBUSxTQUFTLGFBQWFBLEdBQVEsUUFBUSxJQUFJQTtBQUFBLEVBQzlGO0FBQUEsRUFDQSxJQUFJNE0sR0FBSWxPLEdBQU1tTyxHQUFXO0FBQ3hCLFVBQU16TyxJQUFNLEtBQUssT0FBT3dPLENBQUUsR0FBR3RPLElBQVFGLElBQU1NLENBQUk7QUFDL0MsWUFBS0EsS0FBUSxhQUFhQSxLQUFRLFlBQVlOLE1BQVFFLEtBQVMsUUFBUSxFQUFFSSxLQUFRTixNQUFjQSxJQUMzRk0sS0FBUSxVQUFnQixNQUFNLEtBQUssT0FBT2tPLENBQUUsSUFDNUMsT0FBT3RPLEtBQVMsYUFBbUIsSUFBSTJHLE1BQ25DLEtBQUssT0FBTzJILENBQUUsSUFBSWxPLENBQUksSUFBSSxHQUFHdUcsQ0FBSSxJQUVsQzNHO0FBQUEsRUFDUjtBQUFBLEVBQ0EsSUFBSXNPLEdBQUlsTyxHQUFNSixHQUFPdU8sR0FBVztBQUMvQixVQUFNek8sSUFBTSxLQUFLLE9BQU93TyxDQUFFO0FBQzFCLFdBQUl4TyxJQUFZLFFBQVEsSUFBSUEsR0FBS00sR0FBTUosQ0FBSyxJQUNyQztBQUFBLEVBQ1I7QUFBQSxFQUNBLElBQUlzTyxHQUFJbE8sR0FBTTtBQUNiLFVBQU1OLElBQU0sS0FBSyxPQUFPd08sQ0FBRTtBQUMxQixXQUFLeE8sSUFDRU0sS0FBUU4sSUFERTtBQUFBLEVBRWxCO0FBQUEsRUFDQSxRQUFRd08sR0FBSTtBQUNYLFVBQU14TyxJQUFNLEtBQUssT0FBT3dPLENBQUU7QUFDMUIsV0FBS3hPLElBQ0UsUUFBUSxRQUFRQSxDQUFHLElBRFQsQ0FBQztBQUFBLEVBRW5CO0FBQUEsRUFDQSx5QkFBeUJ3TyxHQUFJbE8sR0FBTTtBQUNsQyxVQUFNTixJQUFNLEtBQUssT0FBT3dPLENBQUU7QUFDMUIsUUFBS3hPO0FBQ0wsYUFBTyxPQUFPLHlCQUF5QkEsR0FBS00sQ0FBSTtBQUFBLEVBQ2pEO0FBQUEsRUFDQSxlQUFla08sR0FBSWxPLEdBQU07QUFDeEIsVUFBTU4sSUFBTSxLQUFLLE9BQU93TyxDQUFFO0FBQzFCLFdBQUt4TyxJQUNFLFFBQVEsZUFBZUEsR0FBS00sQ0FBSSxJQUR0QjtBQUFBLEVBRWxCO0FBQUEsRUFDQSxlQUFla08sR0FBSWxPLEdBQU11TixHQUFZO0FBQ3BDLFVBQU03TixJQUFNLEtBQUssT0FBT3dPLENBQUU7QUFDMUIsV0FBS3hPLElBQ0UsUUFBUSxlQUFlQSxHQUFLTSxHQUFNdU4sQ0FBVSxJQURsQztBQUFBLEVBRWxCO0FBQUEsRUFDQSxlQUFlVyxHQUFJO0FBQ2xCLFVBQU14TyxJQUFNLEtBQUssT0FBT3dPLENBQUU7QUFDMUIsV0FBS3hPLElBQ0UsT0FBTyxlQUFlQSxDQUFHLElBRGY7QUFBQSxFQUVsQjtBQUFBLEVBQ0EsZUFBZXdPLEdBQUlWLEdBQU87QUFDekIsVUFBTTlOLElBQU0sS0FBSyxPQUFPd08sQ0FBRTtBQUMxQixXQUFLeE8sSUFDRSxRQUFRLGVBQWVBLEdBQUs4TixDQUFLLElBRHZCO0FBQUEsRUFFbEI7QUFBQSxFQUNBLGFBQWFVLEdBQUk7QUFDaEIsVUFBTXhPLElBQU0sS0FBSyxPQUFPd08sQ0FBRTtBQUMxQixXQUFLeE8sSUFDRSxRQUFRLGFBQWFBLENBQUcsSUFEZDtBQUFBLEVBRWxCO0FBQUEsRUFDQSxrQkFBa0J3TyxHQUFJO0FBQ3JCLFVBQU14TyxJQUFNLEtBQUssT0FBT3dPLENBQUU7QUFDMUIsV0FBS3hPLElBQ0UsUUFBUSxrQkFBa0JBLENBQUcsSUFEbkI7QUFBQSxFQUVsQjtBQUNEO0FBQ0EsU0FBUzBPLEdBQUs5TSxHQUFRO0FBQ3JCLE1BQUksRUFBRSxPQUFPQSxLQUFVLFlBQVksT0FBT0EsS0FBVSxlQUFlLE9BQU9BLEtBQVUsU0FBVSxRQUFPQTtBQUNyRyxRQUFNK00sSUFBWS9NLGFBQWtCLFdBQVcsT0FBT0EsR0FBUSxTQUFTO0FBRXZFLE1BREFBLElBQVMrTSxJQUFZL00sR0FBUSxRQUFRLElBQUlBLEdBQ3JDQSxLQUFVLFFBQVEwTSxFQUFVLElBQUkxTSxDQUFNLEVBQUcsUUFBTzBNLEVBQVUsSUFBSTFNLENBQU07QUFDeEUsUUFBTWdOLElBQVUsSUFBSUwsR0FBb0IsR0FDbENNLElBQUssSUFBSSxNQUFNRixJQUFZL00sSUFBUyxJQUFJLFFBQVFBLENBQU0sR0FBR2dOLENBQU87QUFDdEUsU0FBQU4sRUFBVSxJQUFJMU0sR0FBUWlOLENBQUUsR0FDakJBO0FBQ1I7QUFJQSxJQUFJQyxLQUFlLENBQUNDLEdBQVdDLEdBQVlDLElBQU8sTUFBTTtBQUN2RCxRQUFNQyxJQUFhLENBQUMsR0FBR0YsQ0FBVSxHQUMzQkcsSUFBYyxDQUFDLEdBQUdKLENBQVM7QUFDakMsU0FBSUUsSUFBTyxNQUNWRSxFQUFZLFFBQVEsR0FDcEJELEVBQVcsUUFBUSxJQUViLEVBQUVELEtBQVEsS0FBS0EsS0FBUSxJQUFJRSxFQUFZLENBQUMsSUFBSUQsRUFBVyxDQUFDLElBQUlDLEVBQVksQ0FBQyxNQUFNLElBQUlGLEtBQVEsS0FBS0EsS0FBUSxJQUFJRSxFQUFZLENBQUMsSUFBSUQsRUFBVyxDQUFDLElBQUlDLEVBQVksQ0FBQyxNQUFNLENBQUM7QUFDekssR0FDSUMsS0FBZSxDQUFDQyxHQUFXTCxHQUFZQyxJQUFPLE1BQU07QUFDdkQsUUFBTUMsSUFBYSxDQUFDLEdBQUdGLENBQVUsR0FDM0JNLElBQVksQ0FBQyxHQUFHRCxDQUFTO0FBQy9CLEVBQUlKLElBQU8sS0FBR0MsRUFBVyxRQUFRO0FBQ2pDLFFBQU1ILElBQVksRUFBRUUsS0FBUSxLQUFLQSxLQUFRLElBQUlLLEVBQVUsQ0FBQyxJQUFJSixFQUFXLENBQUMsSUFBSUksRUFBVSxDQUFDLE1BQU0sSUFBSUwsS0FBUSxLQUFLQSxLQUFRLElBQUlLLEVBQVUsQ0FBQyxJQUFJSixFQUFXLENBQUMsSUFBSUksRUFBVSxDQUFDLE1BQU0sQ0FBQztBQUMzSyxTQUFJTCxJQUFPLEtBQUdGLEVBQVUsUUFBUSxHQUN6QkE7QUFDUixHQUNJUSxLQUFtQixDQUFDQyxHQUFXUCxJQUFPLE1BQU07QUFDL0MsUUFBTVEsSUFBYyxDQUFDLEdBQUdELENBQVM7QUFDakMsU0FBSVAsSUFBTyxLQUFHUSxFQUFZLFFBQVEsR0FDM0IsRUFBRVIsS0FBUSxLQUFLQSxLQUFRLElBQUlRLEVBQVksQ0FBQyxJQUFJLENBQUNBLEVBQVksQ0FBQyxNQUFNLElBQUlSLEtBQVEsS0FBS0EsS0FBUSxJQUFJUSxFQUFZLENBQUMsSUFBSSxDQUFDQSxFQUFZLENBQUMsTUFBTSxDQUFDO0FBQzNJLEdBQ0lDLEtBQW1CLENBQUNDLEdBQVdWLElBQU8sTUFBTTtBQUMvQyxRQUFNVyxJQUFZLENBQUMsR0FBR0QsQ0FBUyxHQUN6QlosSUFBWSxFQUFFRSxLQUFRLEtBQUtBLEtBQVEsSUFBSVcsRUFBVSxDQUFDLElBQUksQ0FBQ0EsRUFBVSxDQUFDLE1BQU0sSUFBSVgsS0FBUSxLQUFLQSxLQUFRLElBQUlXLEVBQVUsQ0FBQyxJQUFJLENBQUNBLEVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDN0ksU0FBSVgsSUFBTyxLQUFHRixFQUFVLFFBQVEsR0FDekJBO0FBQ1IsR0FJSWMsSUFBc0IsQ0FBQ0MsR0FBUW5QLElBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTTtBQUN4RCxNQUFJLE1BQU0sUUFBUW1QLENBQU0sS0FBS0EsRUFBTyxVQUFVLEVBQUcsUUFBTyxDQUFDLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxPQUFPQSxFQUFPLENBQUMsQ0FBQyxLQUFLblAsRUFBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxPQUFPbVAsRUFBTyxDQUFDLENBQUMsS0FBS25QLEVBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3SyxNQUFJbVAsS0FBVSxPQUFPQSxLQUFXLFVBQVU7QUFDekMsVUFBTUMsSUFBSUQ7QUFDVixXQUFPLENBQUMsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLE9BQU9DLEVBQUUsT0FBTyxLQUFLcFAsRUFBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxPQUFPb1AsRUFBRSxJQUFJLEtBQUtwUCxFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMxSDtBQUNBLFNBQU8sQ0FBQ0EsRUFBUyxDQUFDLEdBQUdBLEVBQVMsQ0FBQyxDQUFDO0FBQ2pDLEdBQ0lxUCxLQUFxQixDQUFDQyxHQUFNSCxNQUFXO0FBQzFDLFFBQU0sQ0FBQ0ksR0FBTUMsQ0FBSSxJQUFJTixFQUFvQkMsQ0FBTTtBQUMvQyxTQUFPLENBQUMsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJSSxJQUFPLEdBQUcsS0FBSyxNQUFNLE9BQU9ELEVBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUlFLElBQU8sR0FBRyxLQUFLLE1BQU0sT0FBT0YsRUFBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdJLEdBQ0lHLEtBQThCLENBQUNDLEdBQVNDLEdBQU1SLEdBQVFTLEdBQVFDLE1BQVk7QUFDN0UsUUFBTUMsSUFBSVosRUFBb0JDLENBQU0sR0FDOUJZLElBQUksS0FBSyxJQUFJLEdBQUdKLEVBQUssQ0FBQyxLQUFLLENBQUMsR0FDNUJLLElBQUksS0FBSyxJQUFJLEdBQUdMLEVBQUssQ0FBQyxLQUFLLENBQUMsR0FDNUJNLElBQVU5QixHQUFhdUIsR0FBUyxDQUFDSyxHQUFHQyxDQUFDLEdBQUdKLENBQU0sR0FDOUNNLElBQWlCO0FBQUEsSUFDdEIsTUFBTUwsR0FBUyxVQUFVLFFBQVEsRUFBRSxJQUFJLEdBQUc7QUFBQSxJQUMxQyxNQUFNQSxHQUFTLFVBQVUsUUFBUSxDQUFDO0FBQUEsSUFDbEMsT0FBT0EsR0FBUyxVQUFVLFNBQXlCLG9CQUFJLElBQUk7QUFBQSxJQUMzRCxRQUFRQztBQUFBLElBQ1IsTUFBTSxDQUFDQyxHQUFHQyxDQUFDO0FBQUEsRUFDWixHQUNNRyxJQUFZQyxHQUFvQkgsR0FBU0MsR0FBZ0JOLENBQU0sR0FDL0RTLEtBQWtCUixHQUFTLFFBQVEsYUFBYSxVQUFVLENBQUMsS0FBSyxNQUFNTSxFQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssTUFBTUEsRUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNQSxFQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssTUFBTUEsRUFBVSxDQUFDLENBQUMsQ0FBQyxHQUNwS0csSUFBYUMsR0FBYUYsR0FBZ0JILENBQWM7QUFDOUQsU0FBT2IsR0FBbUJpQixHQUFZUixDQUFDO0FBQ3hDLEdBQ0lVLEtBQW1CLENBQUMxSyxNQUNuQkEsS0FBUyxPQUFhLENBQUMsSUFDdkIsTUFBTSxRQUFRQSxDQUFLLElBQVVBLElBQzdCQSxhQUFpQixNQUFZLE1BQU0sS0FBS0EsRUFBTSxPQUFPLENBQUMsSUFDdERBLGFBQWlCLE9BQ2pCLE9BQU9BLEVBQU0sT0FBTyxRQUFRLEtBQU0sYUFBbUIsTUFBTSxLQUFLQSxDQUFLLElBQ2xFLENBQUMsR0FFTDJLLEtBQVUsQ0FBQ25NLEdBQUlvTSxNQUFPO0FBQ3pCLFFBQU0vUSxJQUFPMkUsRUFBRyxNQUFNLGlCQUFpQixDQUFDLGVBQWUsYUFBYSxFQUFFb00sQ0FBRSxDQUFDLEdBQUdDLEtBQVUsV0FBV2hSLEtBQVEsR0FBRyxLQUFLLEtBQUs7QUFDdEgsU0FBTyxLQUFLLElBQUksS0FBSyxJQUFJZ1IsSUFBUyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzNDLEdBQ0lKLEtBQWUsQ0FBQ0ssR0FBVUMsTUFBYTtBQUMxQyxRQUFNMUIsSUFBU0QsRUFBb0IyQixHQUFVLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUN2RFgsSUFBaUI7QUFBQSxJQUN0QixHQUFHVztBQUFBLElBQ0gsUUFBQTFCO0FBQUEsRUFDRCxHQUNNMkIsSUFBUU4sR0FBaUJOLEdBQWdCLEtBQUssR0FDOUN4SyxJQUFPd0ssR0FBZ0IsUUFBUSxDQUFDLEdBQ2hDYSxJQUFZLENBQUN6QixNQUNYd0IsRUFBTSxPQUFPLENBQUMxRyxNQUFNLEVBQUVBLEtBQUsxRSxLQUFRMEUsR0FBRyxNQUFNMUUsR0FBTSxHQUFHLEVBQUUsS0FBSyxDQUFDc0wsT0FBU0EsR0FBSyxPQUFPLENBQUMsS0FBSyxPQUFPMUIsRUFBSyxDQUFDLEtBQUssT0FBTzBCLEdBQUssT0FBTyxDQUFDLEtBQUssT0FBTzFCLEVBQUssQ0FBQyxLQUFLLEVBQUUsR0FFekoyQixJQUFVLENBQUMsR0FBR0wsQ0FBUTtBQUM1QixNQUFJLENBQUNHLEVBQVVFLENBQU8sRUFBRyxRQUFPLENBQUMsR0FBR0EsQ0FBTztBQUMzQyxRQUFNQyxJQUFVL0IsRUFBTyxDQUFDLEtBQUssR0FDdkJLLElBQU9MLEVBQU8sQ0FBQyxLQUFLLEdBQ3BCZ0MsS0FBWTtBQUFBLElBQ2pCLENBQUNGLEVBQVEsQ0FBQyxJQUFJLEdBQUdBLEVBQVEsQ0FBQyxDQUFDO0FBQUEsSUFDM0IsQ0FBQ0EsRUFBUSxDQUFDLElBQUksR0FBR0EsRUFBUSxDQUFDLENBQUM7QUFBQSxJQUMzQixDQUFDQSxFQUFRLENBQUMsR0FBR0EsRUFBUSxDQUFDLElBQUksQ0FBQztBQUFBLElBQzNCLENBQUNBLEVBQVEsQ0FBQyxHQUFHQSxFQUFRLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDNUIsRUFBRSxPQUFPLENBQUN2UixNQUNGQSxFQUFFLENBQUMsS0FBSyxLQUFLQSxFQUFFLENBQUMsSUFBSXdSLEtBQVd4UixFQUFFLENBQUMsS0FBSyxLQUFLQSxFQUFFLENBQUMsSUFBSThQLENBQzFELEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQzlQLE1BQU0sQ0FBQ3FSLEVBQVVyUixDQUFDLENBQUM7QUFDbkMsTUFBSXlSLEVBQVUsUUFBTyxDQUFDLEdBQUdBLENBQVE7QUFDakMsTUFBSUMsSUFBUyxHQUFHQyxJQUFPLElBQU1DLElBQU8sQ0FBQyxHQUFHTCxDQUFPO0FBQy9DLFNBQU9JLEtBQVFELE1BQVdGLElBQVUxQixLQUFNO0FBQ3pDLFFBQUksRUFBRTZCLElBQU9OLEVBQVVPLENBQUksR0FBSSxRQUFPLENBQUMsR0FBR0EsQ0FBSTtBQUM5QyxJQUFBQSxFQUFLLENBQUMsS0FDRkEsRUFBSyxDQUFDLEtBQUtKLE1BQ2RJLEVBQUssQ0FBQyxJQUFJLEdBQ1ZBLEVBQUssQ0FBQyxLQUNGQSxFQUFLLENBQUMsS0FBSzlCLE1BQU04QixFQUFLLENBQUMsSUFBSTtBQUFBLEVBRWpDO0FBQ0EsU0FBTyxDQUFDLEdBQUdMLENBQU87QUFDbkIsR0FDSU0sS0FBa0IsQ0FBQ0MsR0FBV1gsR0FBVWpCLElBQVMsTUFBTTtBQUMxRCxRQUFNNkIsSUFBVSxDQUFDLEdBQUdaLEVBQVMsSUFBSSxHQUMzQmEsSUFBVyxDQUFDLEdBQUdGLENBQVMsR0FDeEJyQyxJQUFTRCxFQUFvQjJCLEVBQVMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVELFNBQUlqQixJQUFTLEtBQUc2QixFQUFRLFFBQVEsR0FDekIsQ0FBQzVQLEVBQWE2UCxFQUFTLENBQUMsR0FBR0QsRUFBUSxDQUFDLElBQUl0QyxFQUFPLENBQUMsQ0FBQyxHQUFHdE4sRUFBYTZQLEVBQVMsQ0FBQyxHQUFHRCxFQUFRLENBQUMsSUFBSXRDLEVBQU8sQ0FBQyxDQUFDLENBQUM7QUFDN0csR0FDSWlCLEtBQXNCLENBQUNvQixHQUFXWCxHQUFVakIsSUFBUyxNQUFNO0FBQzlELFFBQU02QixJQUFVLENBQUMsR0FBR1osRUFBUyxJQUFJLEdBQzNCYSxJQUFXLENBQUMsR0FBR0YsQ0FBUyxHQUN4QnJDLElBQVNELEVBQW9CMkIsRUFBUyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUQsRUFBSWpCLElBQVMsS0FBRzZCLEVBQVEsUUFBUTtBQUNoQyxRQUFNRSxJQUFhLENBQUN4QyxFQUFPLENBQUMsSUFBSXNDLEVBQVEsQ0FBQyxHQUFHdEMsRUFBTyxDQUFDLElBQUlzQyxFQUFRLENBQUMsQ0FBQztBQUNsRSxTQUFPLENBQUNDLEVBQVMsQ0FBQyxJQUFJQyxFQUFXLENBQUMsR0FBR0QsRUFBUyxDQUFDLElBQUlDLEVBQVcsQ0FBQyxDQUFDO0FBQ2pFLEdBQ0lDLEtBQWtCLENBQUNKLEdBQVdYLEdBQVVqQixJQUFTLE1BQU07QUFDMUQsUUFBTThCLElBQVcsQ0FBQyxHQUFHRixDQUFTLEdBQ3hCQyxJQUFVLENBQUMsR0FBR1osRUFBUyxJQUFJLEdBQzNCMUIsSUFBU0QsRUFBb0IyQixFQUFTLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1RCxFQUFJakIsSUFBUyxLQUFHNkIsRUFBUSxRQUFRO0FBQ2hDLFFBQU1JLElBQVEsQ0FBQ0osRUFBUSxDQUFDLElBQUl0QyxFQUFPLENBQUMsR0FBR3NDLEVBQVEsQ0FBQyxJQUFJdEMsRUFBTyxDQUFDLENBQUM7QUFDN0QsU0FBTyxDQUFDdE4sRUFBYTZQLEVBQVMsQ0FBQyxHQUFHRyxFQUFNLENBQUMsQ0FBQyxHQUFHaFEsRUFBYTZQLEVBQVMsQ0FBQyxHQUFHRyxFQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLEdBQ0lDLEtBQVksQ0FBQ0MsR0FBS2xCLE1BQWE7QUFDbEMsUUFBTTFCLElBQVNELEVBQW9CMkIsRUFBUyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUQsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUloUCxFQUFha1EsRUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUc1QyxFQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSXROLEVBQWFrUSxFQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRzVDLEVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvSCxHQUNJNkMsS0FBd0IsQ0FBQ0MsR0FBV3BCLEdBQVVqQixJQUFTLE1BQU07QUFDaEUsUUFBTXNDLElBQVcsQ0FBQyxHQUFHRCxDQUFTLEdBQ3hCdEMsSUFBTyxDQUFDLEdBQUdrQixFQUFTLElBQUksR0FDeEIxQixJQUFTRCxFQUFvQjJCLEVBQVMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQ3REYSxJQUFXdkQsR0FBYStELEdBQVV2QyxHQUFNQyxDQUFNLEdBQzlDdUMsSUFBU3ZDLElBQVMsSUFBSSxDQUFDRCxFQUFLLENBQUMsR0FBR0EsRUFBSyxDQUFDLENBQUMsSUFBSSxDQUFDQSxFQUFLLENBQUMsR0FBR0EsRUFBSyxDQUFDLENBQUM7QUFDbEUsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUk5TixFQUFhNlAsRUFBUyxDQUFDLElBQUlTLEVBQU8sQ0FBQyxJQUFJaEQsRUFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR0EsRUFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxLQUFLLElBQUl0TixFQUFhNlAsRUFBUyxDQUFDLElBQUlTLEVBQU8sQ0FBQyxJQUFJaEQsRUFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR0EsRUFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9MLEdBSUlpRCxJQUFtQixDQUFDQyxNQUFVO0FBQ2pDLFFBQU05UyxJQUFRLE9BQU84UyxLQUFTLEVBQUUsRUFBRSxLQUFLO0FBQ3ZDLFNBQUs5UyxLQUNHQSxFQUFNLFdBQVcsR0FBRyxJQUFJQSxJQUFRLElBQUlBLENBQUssSUFBSSxRQUFRLFFBQVEsR0FBRyxJQURyRDtBQUVwQixHQUNJK1MsS0FBa0IsQ0FBQ0QsTUFBVTtBQUNoQyxRQUFNRSxJQUFhSCxFQUFpQkMsQ0FBSztBQUN6QyxTQUFPRSxNQUFlLFdBQVdBLEVBQVcsV0FBVyxRQUFRO0FBQ2hFLEdBQ0lDLEtBQXVCLENBQUNILE1BQVU7QUFDckMsUUFBTUUsSUFBYUgsRUFBaUJDLENBQUs7QUFDekMsU0FBSUUsTUFBZSxVQUFnQixNQUMvQkEsRUFBVyxXQUFXLFFBQVEsSUFBVUEsRUFBVyxNQUFNLENBQUMsS0FBSyxNQUM1REE7QUFDUixHQUNJRSxLQUFxQixDQUFDSixNQUNsQkcsR0FBcUJILENBQUssRUFBRSxRQUFRLFFBQVEsRUFBRSxHQUVsREssS0FBa0IsQ0FBQ0wsTUFBVTtBQUNoQyxRQUFNRSxJQUFhSCxFQUFpQkMsQ0FBSztBQUN6QyxTQUFJQyxHQUFnQkMsQ0FBVSxJQUFVQSxJQUNwQ0EsTUFBZSxNQUFZLFdBQ3hCLFFBQVFBLENBQVU7QUFDMUIsR0FDSUksS0FBcUIsQ0FBQ04sTUFBVTtBQUNuQyxRQUFNRSxJQUFhSCxFQUFpQkMsQ0FBSyxHQUNuQ08sSUFBV0osR0FBcUJELENBQVU7QUFDaEQsU0FBSUQsR0FBZ0JDLENBQVUsSUFBVSxNQUFNLEtBQXFCLG9CQUFJLElBQUksQ0FBQ0ssR0FBVUwsQ0FBVSxDQUFDLENBQUMsSUFDM0YsQ0FBQ0ssQ0FBUTtBQUNqQixHQUlJQyxLQUFnQixDQUFDQyxNQUNmQSxLQUNMQSxJQUFVQSxHQUFTLFVBQVUsTUFBTSxHQUFHLEtBQUtBLEdBQzNDQSxJQUFVQSxHQUFTLFNBQVMsQ0FBQyxHQUFHLGNBQWMsSUFBSUEsR0FBUyxRQUFRLENBQUMsS0FBS0EsR0FDbEVBLEtBSGMsSUFLbEJDLEtBQXdCLENBQUN0UyxHQUFPdVMsR0FBS0MsSUFBTSxJQUFJQyxJQUFTLFNBQVM7QUFDcEUsRUFBSXpTLEdBQU8sVUFBVXVTLENBQUcsS0FBSyxJQUFHdlMsRUFBTSxPQUFPQSxFQUFNLFFBQVF1UyxDQUFHLEdBQUcsQ0FBQyxJQUN6REMsS0FBTyxLQUFLQSxJQUFNeFMsR0FBTyxVQUFRQSxFQUFNLE9BQU93UyxHQUFLLENBQUM7QUFDOUQsR0FDSUUsS0FBZ0IsQ0FBQzFTLEdBQU9pRixNQUFTO0FBQ3BDLEVBQUlqRixHQUFPLFVBQVVpRixDQUFJLEtBQUssS0FBR2pGLEVBQU0sT0FBT0EsRUFBTSxRQUFRaUYsQ0FBSSxHQUFHLENBQUM7QUFDckUsR0FDSTBOLEtBQVksQ0FBQzNTLEdBQU9pRixNQUFTO0FBQ2hDLEVBQUlqRixHQUFPLFVBQVVpRixDQUFJLElBQUksS0FBR2pGLEVBQU0sS0FBS2lGLENBQUk7QUFDaEQsR0FDSTJOLEtBQW1CLENBQUM1UyxHQUFPaUYsR0FBTTZGLElBQVEsT0FBTztBQUNuRCxFQUFJLE9BQU9BLEtBQVMsWUFBWUEsSUFBUSxLQUFLQSxLQUFTOUssR0FBTyxTQUFRMlMsR0FBVTNTLEdBQU9pRixDQUFJLElBQ2pGLE9BQU82RixLQUFTLFlBQVk5SyxHQUFPLFVBQVVpRixDQUFJLElBQUksS0FBR2pGLEVBQU0sT0FBTzhLLEdBQU8sR0FBRzdGLENBQUk7QUFDN0YsR0FDSTROLElBQWdDLG9CQUFJLFFBQVEsR0FDNUNDLElBQW9DLG9CQUFJLElBQUksR0FDNUNDLEtBQWUsT0FBT0MsTUFBUztBQUNsQyxNQUFJO0FBQ0gsSUFBQUEsSUFBTyxNQUFNQTtBQUFBLEVBQ2QsU0FBU3JKLEdBQUc7QUFDWCxJQUFBcUosSUFBTyxNQUNQLFFBQVEsS0FBS3JKLENBQUM7QUFBQSxFQUNmO0FBQ0EsTUFBSXFKLEtBQVEsS0FBTSxRQUFPO0FBRXpCLE1BRElILEVBQWMsSUFBSUcsQ0FBSSxLQUN0QkEsR0FBTSxRQUFRLG1CQUFvQixRQUFPSCxFQUFjLElBQUlHLENBQUk7QUFDbkUsUUFBTUMsSUFBTSxNQUFNRCxHQUFNLE9BQU8sR0FBRyxRQUFRLFFBQVEsS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLO0FBQ3pFLE1BQUlwVSxJQUFNLENBQUM7QUFDWCxNQUFJO0FBQ0gsSUFBQUEsSUFBTSxLQUFLLE1BQU1xVSxDQUFHO0FBQUEsRUFDckIsUUFBWTtBQUNYLFFBQUk7QUFDSCxNQUFBclUsSUFBTSxLQUFLLE1BQU1xVSxDQUFHO0FBQUEsSUFDckIsU0FBU3RKLEdBQUc7QUFDWCxjQUFRLEtBQUtBLENBQUM7QUFBQSxJQUNmO0FBQUEsRUFDRDtBQUNBLFNBQUlxSixLQUFNSCxFQUFjLElBQUlHLEdBQU1wVSxDQUFHLEdBQzlCQTtBQUNSLEdBQ0lzVSxLQUF1QixPQUFPQyxHQUFVSCxNQUFTO0FBQ3BELE1BQUk7QUFDSCxJQUFBQSxJQUFPLE1BQU1BO0FBQUEsRUFDZCxTQUFTckosR0FBRztBQUNYLElBQUFxSixJQUFPLE1BQ1AsUUFBUSxLQUFLckosQ0FBQztBQUFBLEVBQ2Y7QUFDQSxNQUFJd0osS0FBWSxLQUFNLFFBQU87QUFDN0IsTUFBSUwsRUFBa0IsSUFBSUssQ0FBUSxFQUFHLFFBQU9MLEVBQWtCLElBQUlLLENBQVE7QUFDMUUsUUFBTXZVLElBQU1vVSxLQUFRLE9BQU8sTUFBTUQsR0FBYUMsQ0FBSSxJQUFJRixHQUFtQixJQUFJSyxDQUFRO0FBQ3JGLFNBQUlBLEtBQVVMLEVBQWtCLElBQUlLLEdBQVV2VSxDQUFHLEdBQzFDQTtBQUNSLEdBQ0l3VSxLQUFnQixDQUFDQyxHQUFTQyxNQUFTO0FBQ3RDLFFBQU1DLElBQTBCLG9CQUFJLElBQUk7QUFDeEMsRUFBQUYsRUFBUSxRQUFRLENBQUNwTyxHQUFNNkYsTUFBVTtBQUNoQyxJQUFJN0YsR0FBTSxRQUFNc08sRUFBUSxJQUFJdE8sRUFBSyxNQUFNO0FBQUEsTUFDdEMsTUFBQUE7QUFBQSxNQUNBLE9BQUE2RjtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0YsQ0FBQztBQUNELFFBQU0wSSxJQUEwQixvQkFBSSxJQUFJO0FBQ3hDLEVBQUFGLEVBQUssUUFBUSxDQUFDelIsTUFBUTtBQUNyQixJQUFJQSxHQUFLLFFBQU0yUixFQUFRLElBQUkzUixFQUFJLE1BQU1BLENBQUc7QUFBQSxFQUN6QyxDQUFDO0FBQ0QsYUFBVyxDQUFDdkQsR0FBTSxFQUFFLE9BQUF3TSxFQUFNLENBQUMsS0FBS3lJLEdBQVM7QUFDeEMsVUFBTTFSLElBQU0yUixFQUFRLElBQUlsVixDQUFJO0FBQzVCLElBQUl1RCxNQUFLd1IsRUFBUXZJLENBQUssSUFBSWpKO0FBQUEsRUFDM0I7QUFDQSxhQUFXLENBQUN2RCxHQUFNdUQsQ0FBRyxLQUFLMlIsRUFBUyxDQUFLRCxFQUFRLElBQUlqVixDQUFJLEtBQUcrVSxFQUFRLEtBQUt4UixDQUFHO0FBQzNFLFdBQVMsSUFBSXdSLEVBQVEsU0FBUyxHQUFHLEtBQUssR0FBRyxLQUFLO0FBQzdDLFVBQU1wTyxJQUFPb08sRUFBUSxDQUFDO0FBQ3RCLElBQUlwTyxHQUFNLFFBQVEsQ0FBQ3VPLEVBQVEsSUFBSXZPLEVBQUssSUFBSSxLQUFHb08sRUFBUSxPQUFPLEdBQUcsQ0FBQztBQUFBLEVBQy9EO0FBQ0EsU0FBQUEsRUFBUSxLQUFLLENBQUMvTyxHQUFHNkcsTUFBTTdHLEdBQUcsTUFBTSxnQkFBZ0I2RyxHQUFHLFFBQVEsRUFBRSxDQUFDLEdBQ3ZEa0k7QUFDUixHQUlJSSxLQUFxQiwyQkFDckJDLEtBQWEsd0RBQ2JDLEtBQWtCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsYUFBYTtBQUFBLEVBQ2IsVUFBVTtBQUFBLEVBQ1YsaUJBQWlCO0FBQUEsRUFDakIsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUNYLEdBQ0lDLElBQWUsQ0FBQ2hDLEdBQU94QyxJQUFVLENBQUMsTUFBTTtBQUMzQyxNQUFJd0MsS0FBUyxLQUFNLFFBQU87QUFDMUIsUUFBTWlDLElBQU87QUFBQSxJQUNaLEdBQUdGO0FBQUEsSUFDSCxHQUFHdkU7QUFBQSxFQUNKO0FBQ0EsTUFBSTBFLElBQUksT0FBT2xDLENBQUssRUFBRSxLQUFLO0FBQzNCLE1BQUksQ0FBQ2tDLEVBQUcsUUFBTztBQUNmLEVBQUlELEVBQUssb0JBQWlCQyxJQUFJQSxFQUFFLFFBQVFKLElBQVksRUFBRTtBQUN0RCxRQUFNSyxJQUFpQixNQUFNLEtBQUtELENBQUM7QUFDbkMsTUFBSUUsSUFBU0YsRUFBRSxRQUFRLE9BQU8sRUFBRTtBQUNoQyxNQUFJLENBQUNFLEVBQVEsUUFBTztBQUNwQixNQUFJRCxLQUFrQkMsRUFBTyxXQUFXSCxFQUFLLFdBQVcsRUFBRyxDQUFBRyxJQUFTSCxFQUFLLGVBQWVHLEVBQU8sTUFBTUgsRUFBSyxZQUFZLE1BQU07QUFBQSxXQUNuSEcsRUFBTyxXQUFXLE1BQU1BLEVBQU8sV0FBV0gsRUFBSyxXQUFXLEVBQUcsQ0FBQUcsSUFBU0gsRUFBSyxlQUFlRyxFQUFPLE1BQU0sQ0FBQztBQUFBLFdBQ3hHQSxFQUFPLFdBQVcsR0FBSSxDQUFBQSxJQUFTSCxFQUFLLGVBQWVHO0FBQUEsV0FDbkRILEVBQUssWUFBWUcsRUFBTyxVQUFVSCxFQUFLLFlBQVlHLEVBQU8sVUFBVUgsRUFBSyxTQUFVLENBQUFHLElBQVNILEVBQUssZUFBZUEsRUFBSyxXQUFXRztBQUFBLFdBQ2hJLEVBQUFBLEVBQU8sV0FBVyxNQUFNQSxFQUFPLFdBQVdILEVBQUssWUFBWTtBQUFXLFFBQUlBLEVBQUssWUFBWUcsRUFBTyxXQUFXSCxFQUFLLFNBQVMsU0FBUyxFQUFHLENBQUFHLElBQVNILEVBQUssZUFBZUc7QUFBQSxRQUN4SyxRQUFPO0FBQ1osU0FBTyxXQUFXLEtBQUtBLENBQU0sSUFBSUEsSUFBUztBQUMzQyxHQUNJQyxJQUFrQixDQUFDblYsTUFBVTtBQUNoQyxNQUFJQSxLQUFTLEtBQU0sUUFBTyxDQUFDO0FBQzNCLFFBQU1nVixJQUFJLE9BQU9oVixDQUFLLEdBQ2hCb0QsSUFBVTRSLEVBQUUsTUFBTUwsRUFBa0I7QUFDMUMsU0FBSXZSLEdBQVMsU0FBZUEsSUFDckI0UixFQUFFLE1BQU0sU0FBUyxFQUFFLElBQUksQ0FBQ0ksTUFBTUEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLE9BQU87QUFDOUQsR0FDSUMsS0FBa0IsQ0FBQ3JWLEdBQU9zUSxJQUFVLENBQUMsTUFBTTtBQUM5QyxRQUFNZ0YsSUFBc0Isb0JBQUksSUFBSTtBQUNwQyxNQUFJLE1BQU0sUUFBUXRWLENBQUssRUFBRyxZQUFXRyxLQUFLSCxFQUFPLEtBQUksT0FBT0csS0FBTSxTQUFVLFlBQVdvVixLQUFRSixFQUFnQmhWLENBQUMsR0FBRztBQUNsSCxVQUFNcVYsSUFBSVYsRUFBYVMsR0FBTWpGLENBQU87QUFDcEMsSUFBSWtGLEtBQUdGLEVBQUksSUFBSUUsQ0FBQztBQUFBLEVBQ2pCO0FBQUEsT0FDSztBQUNKLFVBQU1BLElBQUlWLEVBQWEzVSxHQUFHbVEsQ0FBTztBQUNqQyxJQUFJa0YsS0FBR0YsRUFBSSxJQUFJRSxDQUFDO0FBQUEsRUFDakI7QUFBQSxXQUNTLE9BQU94VixLQUFVLFNBQVUsWUFBVzZCLEtBQUtzVCxFQUFnQm5WLENBQUssR0FBRztBQUMzRSxVQUFNd1YsSUFBSVYsRUFBYWpULEdBQUd5TyxDQUFPO0FBQ2pDLElBQUlrRixLQUFHRixFQUFJLElBQUlFLENBQUM7QUFBQSxFQUNqQjtBQUFBLE9BQ0s7QUFDSixVQUFNLElBQUlWLEVBQWE5VSxHQUFPc1EsQ0FBTztBQUNyQyxJQUFJLEtBQUdnRixFQUFJLElBQUksQ0FBQztBQUFBLEVBQ2pCO0FBQ0EsU0FBTyxDQUFDLEdBQUdBLENBQUc7QUFDZixHQUNJRyxLQUFpQixDQUFDQyxHQUFLQyxNQUN0QixNQUFNLFFBQVFELENBQUcsS0FBSyxPQUFPQSxFQUFJLENBQUMsS0FBTSxXQUFpQkEsRUFBSSxDQUFDLElBQzlEQSxLQUFPLE9BQU9BLEtBQVEsWUFBWSxPQUFPQSxFQUFJLFNBQVUsV0FBaUJBLEVBQUksUUFDekVDLEdBRUpDLEtBQW1CLENBQUNGLE1BQVE7QUFDL0IsTUFBSSxNQUFNLFFBQVFBLENBQUcsRUFBRyxRQUFPQSxFQUFJLENBQUM7QUFDcEMsTUFBSUEsS0FBTyxPQUFPQSxLQUFRLFVBQVU7QUFDbkMsUUFBSSxZQUFZQSxFQUFLLFFBQU9BLEVBQUk7QUFDaEMsUUFBSSxXQUFXQSxFQUFLLFFBQU9BLEVBQUk7QUFBQSxFQUNoQztBQUNBLFNBQU9BO0FBQ1I7QUFDQSxTQUFTRyxHQUFvQjVGLEdBQU02RixJQUFjLENBQUMsR0FBRztBQUNwRCxRQUFNeEYsSUFBVTtBQUFBLElBQ2YsR0FBR3VFO0FBQUEsSUFDSCxHQUFHaUI7QUFBQSxFQUNKLEdBQ01DLElBQWtDLG9CQUFJLElBQUksR0FDMUNDLElBQW9DLG9CQUFJLElBQUk7QUFDbEQsRUFBQS9GLEVBQUssUUFBUSxDQUFDeUYsR0FBS0MsTUFBUTtBQUMxQixVQUFNakMsSUFBTStCLEdBQWVDLEdBQUtDLENBQUcsR0FDN0JNLElBQVlMLEdBQWlCRixDQUFHLEdBQ2hDUSxJQUFTYixHQUFnQlksR0FBVzNGLENBQU87QUFDakQsSUFBSzBGLEVBQWtCLElBQUl0QyxDQUFHLEtBQUdzQyxFQUFrQixJQUFJdEMsR0FBcUIsb0JBQUksSUFBSSxDQUFDO0FBQ3JGLFVBQU15QyxJQUFjSCxFQUFrQixJQUFJdEMsQ0FBRztBQUM3QyxlQUFXL0ssS0FBS3VOO0FBQ2YsTUFBQUMsRUFBWSxJQUFJeE4sQ0FBQyxHQUNab04sRUFBZ0IsSUFBSXBOLENBQUMsS0FBR29OLEVBQWdCLElBQUlwTixHQUFtQixvQkFBSSxJQUFJLENBQUMsR0FDN0VvTixFQUFnQixJQUFJcE4sQ0FBQyxFQUFFLElBQUkrSyxDQUFHO0FBQUEsRUFFaEMsQ0FBQztBQUNELFFBQU0wQyxJQUFxQixDQUFDO0FBQzVCLGFBQVcsQ0FBQ0MsR0FBS0MsQ0FBRyxLQUFLUCxFQUFnQixRQUFRLEVBQUcsQ0FBSU8sRUFBSSxPQUFPLE1BQUdGLEVBQW1CQyxDQUFHLElBQUksQ0FBQyxHQUFHQyxDQUFHLEVBQUUsS0FBSyxDQUFDOVEsR0FBRzZHLE1BQU03RyxJQUFJNkcsQ0FBQztBQUM3SCxRQUFNa0ssSUFBb0IsQ0FBQztBQUMzQixhQUFXLENBQUM3QyxHQUFLNEMsQ0FBRyxLQUFLTixFQUFrQixRQUFRLEdBQUc7QUFDckQsVUFBTVEsSUFBTyxDQUFDLEdBQUdGLENBQUcsRUFBRSxPQUFPLENBQUNkLE1BQU1ZLEVBQW1CWixDQUFDLENBQUM7QUFDekQsSUFBSWdCLEVBQUssV0FBUUQsRUFBa0I3QyxDQUFHLElBQUk4QyxFQUFLLEtBQUs7QUFBQSxFQUNyRDtBQUNBLFNBQU87QUFBQSxJQUNOLG9CQUFBSjtBQUFBLElBQ0EsT0FBTyxPQUFPLFFBQVFHLENBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM3QyxHQUFLK0MsQ0FBSSxNQUFNLENBQUMsT0FBTy9DLENBQUcsR0FBRytDLENBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQ2pSLEdBQUc2RyxNQUFNN0csRUFBRSxDQUFDLElBQUk2RyxFQUFFLENBQUMsQ0FBQztBQUFBLElBQzdHLG1CQUFBa0s7QUFBQSxJQUNBLFdBQVcsQ0FBQ3ZCLE1BQU1GLEVBQWFFLEdBQUcxRSxDQUFPO0FBQUEsRUFDMUM7QUFDRDtBQUlBLElBQUlvRyxLQUFjLE1BQ1YsS0FBSyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFFaEQsU0FBU0MsR0FBVzVVLEdBQUs7QUFDeEIsU0FBS0EsSUFDRSw4QkFBOEIsS0FBSyxPQUFPQSxDQUFHLEVBQUUsS0FBSyxDQUFDLElBRDNDO0FBRWxCO0FBQ0EsU0FBUzZVLEVBQW1CN1UsR0FBSztBQUNoQyxNQUFJLENBQUNBLEVBQUssUUFBdUIsb0JBQUksS0FBSztBQUMxQyxNQUFJQSxhQUFlLEtBQU0sUUFBTyxJQUFJLEtBQUtBLENBQUc7QUFDNUMsTUFBSSxPQUFPQSxLQUFPLFlBQVlBLEdBQUssVUFBVyxRQUFPNlUsRUFBbUI3VSxFQUFJLFNBQVM7QUFDckYsTUFBSSxPQUFPQSxLQUFPLFlBQVlBLEdBQUssU0FBVSxRQUFPNlUsRUFBbUI3VSxFQUFJLFFBQVE7QUFDbkYsTUFBSSxPQUFPQSxLQUFPLFlBQVlBLEdBQUssS0FBTSxRQUFPNlUsRUFBbUI3VSxFQUFJLElBQUk7QUFDM0UsTUFBSSxPQUFPQSxLQUFPLFVBQVU7QUFDM0IsUUFBSUEsS0FBTyxLQUFjLFFBQU8sSUFBSSxLQUFLQSxDQUFHO0FBQzVDLFVBQU04VSxJQUFhLEtBQUssSUFBSSxJQUFJLE1BQU0sT0FBTzlVLElBQU0sQ0FBQyxHQUFHLFVBQVUsR0FBRyxJQUFJO0FBQ3hFLFdBQU8sSUFBSSxLQUFLQSxJQUFNOFUsQ0FBVTtBQUFBLEVBQ2pDO0FBQ0EsTUFBSSxPQUFPOVUsS0FBTyxZQUFZNFUsR0FBVzVVLENBQUcsR0FBRztBQUM5QyxVQUFNK1UsSUFBSSw4QkFBOEIsS0FBSy9VLEVBQUksS0FBSyxDQUFDO0FBQ3ZELFFBQUksQ0FBQytVLEVBQUcsUUFBdUIsb0JBQUksS0FBSztBQUN4QyxVQUFNLENBQUMsRUFBRUMsR0FBSUMsQ0FBRSxJQUFJRixHQUNiRyxJQUFzQixvQkFBSSxLQUFLO0FBQ3JDLFdBQU8sSUFBSSxLQUFLQSxFQUFJLFlBQVksR0FBR0EsRUFBSSxTQUFTLEdBQUdBLEVBQUksUUFBUSxHQUFHLE9BQU9GLENBQUUsR0FBRyxPQUFPQyxDQUFFLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDL0Y7QUFDQSxTQUFPLElBQUksS0FBSyxPQUFPalYsQ0FBRyxDQUFDO0FBQzVCO0FBQ0EsU0FBU21WLEdBQXVCblYsR0FBSztBQUNwQyxTQUFLQSxJQUNELE9BQU9BLEtBQU8sV0FDYkEsS0FBTyxPQUFxQkEsSUFDekJBLEtBQU8sS0FBSyxJQUFJLElBQUksTUFBTSxPQUFPQSxJQUFNLENBQUMsR0FBRyxVQUFVLEdBQUcsSUFBSSxLQUVoRUEsYUFBZSxPQUFhQSxFQUFJLFFBQVEsSUFDckM2VSxFQUFtQjdVLENBQUcsR0FBRyxVQUFVLEtBQUssS0FBSyxJQUFJLElBTnZDLEtBQUssSUFBSTtBQU8zQjtBQUNBLElBQUlvVixLQUFtQixDQUFDckUsTUFBVTtBQUNqQyxNQUFJLENBQUNBLEVBQU8sUUFBTztBQUNuQixRQUFNcFIsSUFBUyxJQUFJLEtBQUssS0FBSyxJQUFJb1IsRUFBTSxZQUFZLEdBQUdBLEVBQU0sU0FBUyxHQUFHQSxFQUFNLFFBQVEsQ0FBQyxDQUFDLEdBQ2xGc0UsSUFBWTFWLEVBQU8sVUFBVSxLQUFLO0FBQ3hDLEVBQUFBLEVBQU8sV0FBV0EsRUFBTyxXQUFXLElBQUksSUFBSTBWLENBQVM7QUFDckQsUUFBTUMsSUFBWSxJQUFJLEtBQUssS0FBSyxJQUFJM1YsRUFBTyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDbEUsU0FBTyxLQUFLLE9BQU9BLEVBQU8sUUFBUSxJQUFJMlYsRUFBVSxRQUFRLEtBQUssUUFBUSxLQUFLLENBQUM7QUFDNUUsR0FDSUMsS0FBb0IsQ0FBQ3RYLE1BQ25CQSxJQUNELE9BQU9BLEtBQVUsYUFBYUEsRUFBTSxRQUFRQSxFQUFNLFlBQVlBLEVBQU0sYUFBbUJBLElBQ3BGLEVBQUUsVUFBVSxPQUFPQSxDQUFLLEVBQUUsSUFGZCxNQUloQnVYLEtBQWUsQ0FBQ0MsTUFBUztBQUM1QixRQUFNeEUsSUFBYXNFLEdBQWtCRSxDQUFJO0FBQ3pDLFNBQUt4RSxLQUNFNEQsRUFBbUI1RCxDQUFVLEdBQUcscUJBQXFCLFNBQVM7QUFBQSxJQUNwRSxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixVQUFVMEQsR0FBWTtBQUFBLEVBQ3ZCLENBQUMsS0FBSztBQUNQLEdBQ0llLEtBQWUsQ0FBQ0MsTUFDWmQsRUFBbUJjLENBQUksR0FBRyxxQkFBcUIsU0FBUztBQUFBLEVBQzlELEtBQUs7QUFBQSxFQUNMLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLFVBQVVoQixHQUFZO0FBQ3ZCLENBQUMsS0FBSyxJQUVIaUIsS0FBaUIsQ0FBQ0MsTUFBYztBQUNuQyxRQUFNRixJQUFPLElBQUksS0FBS0UsQ0FBUztBQUMvQixTQUFJLE9BQU8sTUFBTUYsRUFBSyxRQUFRLENBQUMsSUFBVSxLQUNsQ0EsRUFBSyxlQUFlLFFBQVE7QUFBQSxJQUNsQyxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsRUFDVCxDQUFDO0FBQ0YsR0FDSUcsSUFBeUIsQ0FBQzdYLE1BQVU7QUFDdkMsTUFBSUEsS0FBUyxLQUFNLFFBQU87QUFDMUIsTUFBSSxPQUFPQSxLQUFVLFlBQVksT0FBTyxTQUFTQSxDQUFLLEVBQUcsUUFBT0E7QUFDaEUsUUFBTTBYLElBQU9kLEVBQW1CNVcsQ0FBSztBQUNyQyxNQUFJMFgsS0FBUSxDQUFDLE9BQU8sTUFBTUEsR0FBTSxRQUFRLENBQUMsRUFBRyxRQUFPQSxHQUFNLFFBQVEsS0FBSztBQUN0RSxRQUFNSSxJQUFRLE9BQU85WCxDQUFLLEVBQUUsTUFBTSxzQ0FBc0M7QUFDeEUsTUFBSThYLEdBQU87QUFDVixVQUFNQyxJQUFRLE9BQU9ELEVBQU0sQ0FBQyxDQUFDLEtBQUssR0FDNUJFLElBQVUsT0FBT0YsRUFBTSxDQUFDLENBQUMsS0FBSyxHQUM5QkcsSUFBVSxPQUFPSCxFQUFNLENBQUMsQ0FBQyxLQUFLO0FBQ3BDLGFBQVNDLElBQVEsS0FBS0MsS0FBVyxLQUFLQyxLQUFXO0FBQUEsRUFDbEQ7QUFDQSxRQUFNQyxJQUFVLE9BQU9sWSxDQUFLO0FBQzVCLFNBQU8sT0FBTyxTQUFTa1ksQ0FBTyxJQUFJQSxJQUFVO0FBQzdDLEdBQ0lDLEtBQVMsQ0FBQ1QsTUFBUztBQUN0QixRQUFNVSxJQUFZVixhQUFnQixRQUFRLE9BQU9BLEtBQVEsWUFBWUEsRUFBSyxNQUFNLHFCQUFxQjtBQUNyRyxNQUFJVyxJQUFhO0FBQ2pCLE1BQUk7QUFDSCxJQUFBQSxJQUFhUixFQUF1QkgsQ0FBSSxJQUFJO0FBQUEsRUFDN0MsUUFBUTtBQUNQLElBQUFXLElBQWE7QUFBQSxFQUNkO0FBQ0EsU0FBTyxJQUFTRCxLQUFhQyxNQUFlO0FBQzdDLEdBQ0lDLEtBQW1CLENBQUNDLEdBQVdDLEdBQVNDLE1BQ3ZDRixLQUFhQyxJQUFnQlgsRUFBdUJVLENBQVMsSUFBSVYsRUFBdUJZLENBQVcsS0FBS1osRUFBdUJZLENBQVcsSUFBSVosRUFBdUJXLENBQU8sSUFDNUtELElBQWtCVixFQUF1QlUsQ0FBUyxJQUFJVixFQUF1QlksQ0FBVyxJQUN4RkQsSUFBZ0JYLEVBQXVCWSxDQUFXLElBQUlaLEVBQXVCVyxDQUFPLElBQ2pGLElBRUpFLEtBQW1CLENBQUNILEdBQVdDLEdBQVNDLEdBQWFFLElBQVUsTUFBTTtBQUN4RSxNQUFJQyxJQUFlO0FBR25CLE1BRklMLE1BQVdLLE1BQWlCZixFQUF1QlksQ0FBVyxLQUFLWixFQUF1QlUsQ0FBUyxJQUNuR0MsTUFBU0ksTUFBaUJmLEVBQXVCWSxDQUFXLElBQUlaLEVBQXVCVyxDQUFPLElBQzlGRyxHQUFTO0FBQ1osVUFBTUUsSUFBWWhCLEVBQXVCWSxDQUFXLElBQUlFLElBQVUsS0FBSyxLQUFLLEtBQUs7QUFDakYsSUFBQUMsTUFBaUJmLEVBQXVCVSxDQUFTLElBQUlWLEVBQXVCZ0IsQ0FBUztBQUFBLEVBQ3RGO0FBQ0EsU0FBT0Q7QUFDUixHQUNJRSxLQUFnQyxDQUFDQyxHQUFXQyxNQUFpQjtBQUNoRSxRQUFNQyxJQUFXcEIsRUFBdUJrQixDQUFTLEtBQUssR0FDaEQvRixLQUFjLE9BQU8sU0FBU2lHLENBQVEsSUFBSUEsSUFBVyxNQUFNRCxLQUFnQjtBQUNqRixTQUFPLEtBQUssTUFBTWhHLElBQWEsS0FBSztBQUNyQztBQUlBLFNBQVNrRyxHQUFTclYsR0FBSXdFLEdBQU87QUFDNUIsTUFBSThRO0FBQ0osU0FBTyxJQUFJeFMsTUFBUztBQUNuQixpQkFBYXdTLENBQVMsR0FDdEJBLElBQVksV0FBVyxNQUFNdFYsRUFBRyxHQUFHOEMsQ0FBSSxHQUFHMEIsQ0FBSztBQUFBLEVBQ2hEO0FBQ0Q7QUFDQSxTQUFTK1EsR0FBU3ZWLEdBQUkyRSxHQUFPO0FBQzVCLE1BQUk2USxJQUFhO0FBQ2pCLFNBQU8sSUFBSTFTLE1BQVM7QUFDbkIsSUFBSzBTLE1BQ0p4VixFQUFHLEdBQUc4QyxDQUFJLEdBQ1YwUyxJQUFhLElBQ2IsV0FBVyxNQUFNQSxJQUFhLElBQU83USxDQUFLO0FBQUEsRUFFNUM7QUFDRDtBQUNBLFNBQVM4USxHQUFNQyxHQUFJO0FBQ2xCLFNBQU8sSUFBSSxRQUFRLENBQUN0UyxNQUFZLFdBQVdBLEdBQVNzUyxDQUFFLENBQUM7QUFDeEQ7QUFDQSxTQUFTQyxHQUFTQyxJQUFTLElBQUk7QUFDOUIsU0FBTyxHQUFHQSxDQUFNLEdBQUcsS0FBSyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3JGO0FBQ0EsU0FBU0MsRUFBVTVaLEdBQUs7QUFDdkIsTUFBSUEsTUFBUSxRQUFRLE9BQU9BLEtBQVEsU0FBVSxRQUFPQTtBQUNwRCxNQUFJQSxhQUFlLEtBQU0sUUFBTyxJQUFJLEtBQUtBLEVBQUksUUFBUSxDQUFDO0FBQ3RELE1BQUlBLGFBQWUsTUFBTyxRQUFPQSxFQUFJLElBQUksQ0FBQ3FHLE1BQVN1VCxFQUFVdlQsQ0FBSSxDQUFDO0FBQ2xFLE1BQUlyRyxhQUFlLFFBQVE7QUFDMUIsVUFBTTZaLElBQVMsQ0FBQztBQUNoQixlQUFXNVksS0FBT2pCLEVBQUssQ0FBSSxPQUFPLFVBQVUsZUFBZSxLQUFLQSxHQUFLaUIsQ0FBRyxNQUFHNFksRUFBTzVZLENBQUcsSUFBSTJZLEVBQVU1WixFQUFJaUIsQ0FBRyxDQUFDO0FBQzNHLFdBQU80WTtBQUFBLEVBQ1I7QUFDQSxTQUFPN1o7QUFDUjtBQUNBLFNBQVM4WixHQUFRNVosR0FBTztBQUN2QixTQUFJQSxLQUFVLE9BQWlDLEtBQzNDLE9BQU9BLEtBQVUsV0FBaUJBLEVBQU0sS0FBSyxFQUFFLFdBQVcsSUFDMUQsTUFBTSxRQUFRQSxDQUFLLElBQVVBLEVBQU0sV0FBVyxJQUM5QyxPQUFPQSxLQUFVLFdBQWlCLE9BQU8sS0FBS0EsQ0FBSyxFQUFFLFdBQVcsSUFDN0Q7QUFDUjtBQUNBLFNBQVM2WixLQUFZO0FBQ3BCLFNBQU8sT0FBTyxTQUFXLE9BQWUsT0FBTyxXQUFhO0FBQzdEO0FBQ0EsU0FBU0MsS0FBVztBQUNuQixTQUFPLE9BQU8sT0FBUyxPQUFlLE9BQU8sU0FBVztBQUN6RDtBQUlBMWEsR0FBK0I7IiwKICAibmFtZXMiOiBbImluc3RhbGxEb21Db25zdHJ1Y3RvclBvbHlmaWxscyIsICJnIiwgInN0dWIiLCAiZW5zdXJlIiwgIm5hbWUiLCAiJGZ4eSIsICJpc0hhc1ByaW1pdGl2ZXMiLCAib2JzZXJ2YWJsZSIsICJpc1ByaW1pdGl2ZSIsICJpc09ic2VydmFibGUiLCAib2JqIiwgInRyeVBhcnNlQnlIaW50IiwgInZhbHVlIiwgImhpbnQiLCAiaGFzUHJvcGVydHkiLCAidiIsICJwcm9wIiwgImhhc1ZhbHVlIiwgIiRnZXRWYWx1ZSIsICIkb2JqT3JQbGFpbiIsICJ1bndyYXAiLCAiZmFsbGJhY2siLCAiZGVyZWYiLCAiZml4RngiLCAiZngiLCAiJHNldCIsICJydiIsICJrZXkiLCAidmFsIiwgImdldFJhbmRvbVZhbHVlcyIsICJhcnJheSIsICJ2YWx1ZXMiLCAiaSIsICJ2YWx1ZUNsYW1wIiwgIm1pbiIsICJtYXgiLCAiY2xhbXAiLCAid2l0aEN0eCIsICJ0YXJnZXQiLCAiZ290IiwgIlVVSUR2NCIsICJjIiwgImNhbWVsVG9LZWJhYiIsICJzdHIiLCAia2ViYWJUb0NhbWVsIiwgIl8iLCAiY2hhciIsICJ0b0Zpbml0ZU51bWJlciIsICJudW1iZXIiLCAiY2xhbXBEaW1lbnNpb24iLCAicm91bmROZWFyZXN0IiwgIk4iLCAiZmxvb3JOZWFyZXN0IiwgImNlaWxOZWFyZXN0IiwgImlzVmFsdWVVbml0IiwgImlzVmFsIiwgIm5vcm1hbGl6ZVByaW1pdGl2ZSIsICIkdHJpZ2dlckxvY2siLCAiJGF2b2lkVHJpZ2dlciIsICJyZWYiLCAiY2IiLCAiJHByb3AiLCAicmVzdWx0IiwgInRyeVN0cmluZ0FzTnVtYmVyIiwgIm1hdGNoZXMiLCAidHJpZWRUb1BhcnNlIiwgIklOVEVHRVJfUkVHRVhQIiwgInRyeVN0cmluZ0FzSW50ZWdlciIsICJpc1ZhbGlkTnVtYmVyIiwgImNhbkJlSW50ZWdlciIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJoYW5kbGVMaXN0ZW5lcnMiLCAicm9vdCIsICJmbiIsICJoYW5kbGVycyIsICJ1c3VicyIsICJ1bnN1YiIsICJpc1JlZiIsICJ1bnJlZiIsICJ0b1JlZiIsICJpc1ZhbHVlUmVmIiwgImV4aXN0cyIsICJpc09iamVjdCIsICJnZXRWYWx1ZSIsICJwb3RlbnRpYWxseUFzeW5jIiwgInByb21pc2UiLCAicG90ZW50aWFsbHlBc3luY01hcCIsICJtYWtlVHJpZ2dlckxlc3MiLCAic2VsZiIsICJ1bndyYXBBcnJheSIsICJhcnIiLCAiZWwiLCAiaXNOb3RDb21wbGV4QXJyYXkiLCAiaXNDYW5KdXN0UmV0dXJuIiwgImlzVHlwZWRBcnJheSIsICJpc1N5bWJvbCIsICJzeW0iLCAiaXNQcm9taXNlIiwgImlzQ2FuVHJhbnNmZXIiLCAiZGVmYXVsdEJ5VHlwZSIsICJhIiwgIiRwcm9taXNlIiwgIlNLSVBfS0VZUyIsICJpc1RoZW5hYmxlJDIiLCAic2V0dGxlT25lIiwgInJlYXNvbiIsICJvd25FbnVtZXJhYmxlS2V5cyIsICJkZXNjIiwgImhhc1BlbmRpbmdQcm9taXNlcyIsICJzZWVuIiwgInNlZW5TZXQiLCAiaXRlbSIsICJyZXNvbHZlZERlZXAiLCAibW9kZSIsICJzbG90IiwgIml0ZW1zIiwgInJlY29yZCIsICJyZXNvbHZlZCIsICJjYWxsYmFja09yVmFsdWUiLCAiYXJncyIsICJpc1RoZW5hYmxlJDEiLCAiYWxsS2V5ZWQiLCAicHJvbWlzZXMiLCAiYWxsU2V0dGxlZEtleWVkIiwgImNyZWF0ZURlZmVycmVkIiwgInJlc29sdmUiLCAicmVqZWN0IiwgImlzUmVzb2x2ZWQiLCAiaXNSZWplY3RlZCIsICJyZXMiLCAicmVqIiwgImVycm9yIiwgIkFzeW5jUXVldWUiLCAib3BlcmF0aW9uIiwgIndpdGhUaW1lb3V0IiwgInRpbWVvdXRNcyIsICJ0aW1lb3V0TWVzc2FnZSIsICJwZW5kaW5nIiwgInRpbWVvdXRQcm9taXNlIiwgInJldHJ5IiwgIm1heFJldHJpZXMiLCAiaW5pdGlhbERlbGF5IiwgImJhY2tvZmZNdWx0aXBsaWVyIiwgImxhc3RFcnJvciIsICJhdHRlbXB0IiwgImRlbGF5IiwgImNvbmN1cnJlbnRMaW1pdCIsICJvcGVyYXRpb25zIiwgImxpbWl0IiwgInJlc3VsdHMiLCAiZXhlY3V0aW5nIiwgInAiLCAiQ2hhbm5lbFJlZ2lzdHJ5IiwgImNoYW5uZWwiLCAibGlzdGVuZXJzIiwgImxpc3RlbmVyIiwgImV4aXN0ZWQiLCAiZ2xvYmFsQ2hhbm5lbFJlZ2lzdHJ5IiwgImNyZWF0ZUNoYW5uZWxQcm94eSIsICJtZXRob2RzIiwgInByb3h5IiwgIm1ldGhvZCIsICJDaGFubmVsSGVhbHRoTW9uaXRvciIsICJjaGFubmVsTmFtZSIsICJoZWFsdGhDaGVjayIsICJpbnRlcnZhbE1zIiwgImV4aXN0aW5nSW50ZXJ2YWwiLCAiaW50ZXJ2YWwiLCAiaXNIZWFsdGh5IiwgInN0YXR1cyIsICJnbG9iYWxDaGFubmVsSGVhbHRoTW9uaXRvciIsICJnZXRPckluc2VydCIsICJtYXAiLCAiZGVmYXVsdFZhbHVlIiwgImdldE9ySW5zZXJ0Q29tcHV0ZWQiLCAiY2FsbGJhY2tGdW5jdGlvbiIsICJpc0l0ZXJhYmxlIiwgImlzS2V5VHlwZSIsICJpc1ZhbGlkT2JqIiwgIm1lcmdlQnlLZXkiLCAiZW50cmllcyIsICJJIiwgInJlbW92ZUV4dHJhIiwgImV4RW50cmllcyIsICJrZXlzIiwgImUiLCAiZXhlIiwgImV4Y2x1ZGUiLCAibnciLCAiayIsICJvYmplY3RBc3NpZ24iLCAicmVtb3ZlTm90RXhpc3RzIiwgIm1lcmdlS2V5IiwgIkUiLCAibWVyZ2VPYmoiLCAiaXNOb3RFcXVhbCIsICJLIiwgImJpbmRGeCIsICJib3VuZEN0eCIsICJiaW5kQ3R4IiwgImNhbGxCeVByb3AiLCAiY3R4IiwgImNhbGxCeUFsbFByb3AiLCAiY2FsbElmTm90TnVsbCIsICJpbmRleCIsICJvYmplY3RBc3NpZ25Ob3RFcXVhbCIsICJkc3QiLCAic3JjIiwgImlzT2JqZWN0Tm90RXF1YWwiLCAiYiIsICJib3VuZEN0eFN5bWJvbCIsICJpc0FycmF5SW52YWxpZEtleSIsICJpbnZhbGlkRm9yQXJyYXkiLCAiaW5Qcm94eSIsICJjb250ZXh0aWZ5IiwgInBjIiwgImRlZXBPcGVyYXRlQW5kQ2xvbmUiLCAiJHByZXYiLCAiYmluZEV2ZW50IiwgIm9uIiwgInJlc29sdmVkU3ltYm9sIiwgImhhbmRsZWRTeW1ib2wiLCAicmVzb2x2ZWRNYXAiLCAiaGFuZGxlZE1hcCIsICIkZXh0cmFjdEtleSQiLCAiaXNUaGVuYWJsZSIsICJhY3RXaXRoIiwgInByb21pc2VPclBsYWluIiwgIlByb21pc2VIYW5kbGVyIiwgIiNyZXNvbHZlIiwgIiNyZWplY3QiLCAiZGVzY3JpcHRvciIsICJwcm90byIsICJ1d3AiLCAibmV3VGFyZ2V0IiwgImN0IiwgInJlY2VpdmVyIiwgIiR0bXAiLCAiUHJvbWlzZWQiLCAidGhpc0FyZyIsICJleGlzdHNNYXAiLCAiV2Vha1JlZlByb3h5SGFuZGxlciIsICJ0ZyIsICJfcmVjZWl2ZXIiLCAiV1JlZiIsICJpc1dlYWtSZWYiLCAiaGFuZGxlciIsICJwbSIsICJjdnRfY3NfdG9fb3MiLCAicG9zX2luX2NzIiwgInNpemVfaW5fY3MiLCAib3JfaSIsICJzaXplX2luX29zIiwgInBvc19pbl9zd2FwIiwgImN2dF9vc190b19jcyIsICJwb3NfaW5fb3MiLCAicG9zX2luX2NwIiwgImN2dF9yZWxfY3NfdG9fb3MiLCAicmVsX2luX2NzIiwgInJlbF9pbl9zd2FwIiwgImN2dF9yZWxfb3NfdG9fY3MiLCAicmVsX2luX29zIiwgInJlbF9pbl9jcCIsICJub3JtYWxpemVHcmlkTGF5b3V0IiwgImxheW91dCIsICJvIiwgImNsYW1wR3JpZENlbGxUdXBsZSIsICJjZWxsIiwgImNvbHMiLCAicm93cyIsICJyZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwiLCAibG9jYWxQeCIsICJzaXplIiwgIm9yaWVudCIsICJvcHRpb25zIiwgIkwiLCAidyIsICJoIiwgIm9zQ29vcmQiLCAibm9ybWFsaXplZEFyZ3MiLCAicHJvamVjdGVkIiwgImNvbnZlcnRPcmllbnRQeFRvQ1giLCAibm9ybWFsaXplZENlbGwiLCAicmVkaXJlY3RlZCIsICJyZWRpcmVjdENlbGwiLCAiZ3JpZEl0ZW1zQXNBcnJheSIsICJnZXRTcGFuIiwgImF4IiwgImZhY3RvciIsICIkcHJlQ2VsbCIsICJncmlkQXJncyIsICJpY29ucyIsICJjaGVja0J1c3kiLCAib25lIiwgInByZUNlbGwiLCAiY29sdW1ucyIsICJzdWl0YWJsZSIsICJleGNlZWQiLCAiYnVzeSIsICJjb21wIiwgIm1ha2VPcmllbnRJbnNldCIsICIkb3JpZW50UHgiLCAiYm94SW5QeCIsICJvcmllbnRQeCIsICJncmlkUHhUb0NYIiwgImZsb29ySW5PcmllbnRQeCIsICJpbkJveCIsICJmbG9vckluQ1giLCAiJENYIiwgImNsaWVudFNwYWNlSW5PcmllbnRDWCIsICIkY2xpZW50UHgiLCAiY2xpZW50UHgiLCAib3NTaXplIiwgIm5vcm1hbGl6ZVNsYXNoZXMiLCAiaW5wdXQiLCAiaXNVc2VyU2NvcGVQYXRoIiwgIm5vcm1hbGl6ZWQiLCAic3RyaXBVc2VyU2NvcGVQcmVmaXgiLCAidG9Vc2VyUmVsYXRpdmVQYXRoIiwgInRvVXNlclNjb3BlUGF0aCIsICJ1c2VyUGF0aENhbmRpZGF0ZXMiLCAic3RyaXBwZWQiLCAicmVuZGVyVGFiTmFtZSIsICJ0YWJOYW1lIiwgIlJFTU9WRV9JRl9IQVNfU0lNSUxBUiIsICJvbGQiLCAiaWR4IiwgInNyY09iaiIsICJSRU1PVkVfSUZfSEFTIiwgIlBVU0hfT05DRSIsICJTUExJQ0VfSU5UT19PTkNFIiwgImNhY2hlZFBlckZpbGUiLCAiY2FjaGVkUGVyRmlsZU5hbWUiLCAiR0VUX09SX0NBQ0hFIiwgImZpbGUiLCAicmF3IiwgIkdFVF9PUl9DQUNIRV9CWV9OQU1FIiwgImZpbGVOYW1lIiwgIm1lcmdlQnlFeGlzdHMiLCAiZGF0YVJlZiIsICJyZWZzIiwgImRhdGFNYXAiLCAicmVmc01hcCIsICJQSE9ORV9DQU5ESURBVEVfUkUiLCAiRVhUX0NVVF9SRSIsICJERUZBVUxUX09QVElPTlMiLCAibm9ybWFsaXplT25lIiwgIm9wdHMiLCAicyIsICJoYXNQbHVzSW5TdGFydCIsICJkaWdpdHMiLCAic3BsaXRDYW5kaWRhdGVzIiwgIngiLCAibm9ybWFsaXplUGhvbmVzIiwgIm91dCIsICJjYW5kIiwgIm4iLCAiZ2V0SW5kZXhGb3JSb3ciLCAicm93IiwgInBvcyIsICJnZXRQaG9uZXNGcm9tUm93IiwgImZpbmREdXBsaWNhdGVQaG9uZXMiLCAidXNlck9wdGlvbnMiLCAibnVtYmVyVG9JbmRpY2VzIiwgImluZGV4VG9OdW1iZXJzQWxsIiwgInBob25lc1JhdyIsICJwaG9uZXMiLCAic2V0Rm9ySW5kZXgiLCAiZHVwbGljYXRlc0J5TnVtYmVyIiwgIm51bSIsICJzZXQiLCAiZHVwbGljYXRlc0J5SW5kZXgiLCAiZHVwcyIsICJudW1zIiwgImdldFRpbWVab25lIiwgImlzUHVyZUhITU0iLCAicGFyc2VEYXRlQ29ycmVjdGx5IiwgIm11bHRpcGxpZXIiLCAibSIsICJoaCIsICJtbSIsICJub3ciLCAicGFyc2VBbmRHZXRDb3JyZWN0VGltZSIsICJnZXRJU09XZWVrTnVtYmVyIiwgImRheU51bWJlciIsICJ5ZWFyU3RhcnQiLCAibm9ybWFsaXplU2NoZWR1bGUiLCAiZm9ybWF0QXNUaW1lIiwgInRpbWUiLCAiZm9ybWF0QXNEYXRlIiwgImRhdGUiLCAiZm9ybWF0RGF0ZVRpbWUiLCAidGltZXN0YW1wIiwgImdldENvbXBhcmFibGVUaW1lVmFsdWUiLCAibWF0Y2giLCAiaG91cnMiLCAibWludXRlcyIsICJzZWNvbmRzIiwgIm51bWVyaWMiLCAiaXNEYXRlIiwgImZpcnN0U3RlcCIsICJzZWNvbmRTdGVwIiwgImNoZWNrSW5UaW1lUmFuZ2UiLCAiYmVnaW5UaW1lIiwgImVuZFRpbWUiLCAiY3VycmVudFRpbWUiLCAiY2hlY2tSZW1haW5zVGltZSIsICJtYXhEYXlzIiwgImZhY3Rvck1hc2tlZCIsICJkYXRlTGltaXQiLCAiY29tcHV0ZVRpbWVsaW5lT3JkZXJJbkdlbmVyYWwiLCAidGltZU9mRGF5IiwgIm1pblRpbWVzdGFtcCIsICJkYXlTdGFydCIsICJkZWJvdW5jZSIsICJ0aW1lb3V0SWQiLCAidGhyb3R0bGUiLCAiaW5UaHJvdHRsZSIsICJzbGVlcCIsICJtcyIsICJ1bmlxdWVJZCIsICJwcmVmaXgiLCAiZGVlcENsb25lIiwgImNsb25lZCIsICJpc0VtcHR5IiwgImlzQnJvd3NlciIsICJpc1dvcmtlciJdCn0K
