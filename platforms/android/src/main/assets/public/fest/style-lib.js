import { $avoidTrigger as kt, $getValue as W, $set as Se, camelToKebab as te, deref as R, getOrInsertComputed as Mt, handleListeners as Le, hasValue as Ce, isNotEqual as $e, isVal as Et, isValueUnit as Tt, toRef as O, tryStringAsNumber as Xe } from "/fest/core.js";
import { DoubleWeakMap as Ge, addToCallChain as At, affected as Rt } from "/fest/object.js";
import { handleAttribute as Lt, handleProperty as $t, observeAttribute as Pt } from "/fest/dom.js";
var ee = (e) => {
  if (e == null || typeof e != "object") return !1;
  try {
    const t = globalThis.CSSStyleValue;
    if (typeof t == "function" && e instanceof t) return !0;
    for (let r = e; r; r = Object.getPrototypeOf(r)) if (r?.constructor?.name === "CSSStyleValue") return !0;
  } catch {
  }
  return !1;
}, Je = (e) => {
  if (e == null || typeof e != "object" || ee(e)) return !1;
  try {
    return "value" in e;
  } catch {
    return !1;
  }
}, et = (e, t) => e?.[t] ?? globalThis?.[t], Ut = (e) => {
  switch (e.toLowerCase()) {
    case "%":
      return "percent";
    case "q":
      return "Q";
    case "hz":
      return "Hz";
    case "khz":
      return "kHz";
    case "fr":
      return "flex";
    default:
      return e.toLowerCase();
  }
}, Ot = (e) => e.toLowerCase() === "%" ? "percent" : e.toLowerCase(), Vt = (e, t, r) => {
  const n = e?.CSS, o = Ut(t), s = n?.[o];
  if (typeof s == "function") return s.call(n, r);
  const i = et(e, "CSSUnitValue");
  if (typeof i != "function") throw new TypeError(`Typed OM does not support CSS unit "${t}"`);
  return new i(r, Ot(t));
}, It = (e) => {
  const t = [];
  let r = 0;
  for (; r < e.length; ) {
    const n = e.slice(r), o = /^\s+/.exec(n);
    if (o) {
      r += o[0].length;
      continue;
    }
    const s = /^(?:\d*\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/.exec(n);
    if (s) {
      r += s[0].length;
      const l = /^(%|[a-zA-Z]+)/.exec(e.slice(r)), f = l?.[0] ?? null;
      l && (r += l[0].length), t.push({
        kind: "number",
        value: Number(s[0]),
        unit: f == null ? null : f.toLowerCase()
      });
      continue;
    }
    const i = /^[a-zA-Z_][a-zA-Z0-9_-]*/.exec(n);
    if (i) {
      t.push({
        kind: "identifier",
        value: i[0].toLowerCase()
      }), r += i[0].length;
      continue;
    }
    const a = n[0];
    if ([
      "+",
      "-",
      "*",
      "/",
      "(",
      ")",
      ","
    ].includes(a)) {
      t.push({
        kind: "symbol",
        value: a
      }), r++;
      continue;
    }
    throw new SyntaxError(`Unsupported token near "${n}"`);
  }
  return t;
}, Bt = class {
  tokens;
  win;
  index = 0;
  constructor(e, t) {
    this.tokens = e, this.win = t;
  }
  parse() {
    const e = this.parseSum();
    if (this.index !== this.tokens.length) throw new SyntaxError("Unexpected trailing expression");
    return e;
  }
  current() {
    return this.tokens[this.index];
  }
  consume() {
    const e = this.tokens[this.index];
    if (!e) throw new SyntaxError("Unexpected end of expression");
    return this.index++, e;
  }
  consumeSymbol(e) {
    const t = this.consume();
    if (t.kind !== "symbol" || t.value !== e) throw new SyntaxError(`Expected "${e}"`);
  }
  matchesSymbol(e) {
    const t = this.current();
    return t?.kind === "symbol" && t.value === e;
  }
  createMath(e, ...t) {
    const r = et(this.win, e);
    if (typeof r != "function") throw new TypeError(`${e} is not supported`);
    return new r(...t);
  }
  parseSum() {
    let e = this.parseProduct();
    for (; this.matchesSymbol("+") || this.matchesSymbol("-"); ) {
      const t = this.consume(), r = this.parseProduct();
      if (t.kind !== "symbol") throw new SyntaxError("Expected sum operator");
      t.value === "+" ? e = this.createMath("CSSMathSum", e, r) : e = this.createMath("CSSMathSum", e, this.createMath("CSSMathNegate", r));
    }
    return e;
  }
  parseProduct() {
    let e = this.parseUnary();
    for (; this.matchesSymbol("*") || this.matchesSymbol("/"); ) {
      const t = this.consume(), r = this.parseUnary();
      if (t.kind !== "symbol") throw new SyntaxError("Expected product operator");
      t.value === "*" ? e = this.createMath("CSSMathProduct", e, r) : e = this.createMath("CSSMathProduct", e, this.createMath("CSSMathInvert", r));
    }
    return e;
  }
  parseUnary() {
    return this.matchesSymbol("+") ? (this.consume(), this.parseUnary()) : this.matchesSymbol("-") ? (this.consume(), this.createMath("CSSMathNegate", this.parseUnary())) : this.parsePrimary();
  }
  parsePrimary() {
    const e = this.consume();
    if (e.kind === "number") return Vt(this.win, e.unit ?? "number", e.value);
    if (e.kind === "symbol" && e.value === "(") {
      const t = this.parseSum();
      return this.consumeSymbol(")"), t;
    }
    if (e.kind === "identifier") return this.parseFunction(e.value);
    throw new SyntaxError("Expected a numeric value");
  }
  parseFunction(e) {
    if (this.consumeSymbol("("), e === "calc") {
      const r = this.parseSum();
      return this.consumeSymbol(")"), r;
    }
    const t = [];
    if (!this.matchesSymbol(")"))
      for (t.push(this.parseSum()); this.matchesSymbol(","); )
        this.consume(), t.push(this.parseSum());
    if (this.consumeSymbol(")"), e === "min") {
      if (t.length === 0) throw new SyntaxError("min() requires a value");
      return this.createMath("CSSMathMin", ...t);
    }
    if (e === "max") {
      if (t.length === 0) throw new SyntaxError("max() requires a value");
      return this.createMath("CSSMathMax", ...t);
    }
    if (e === "clamp") {
      if (t.length !== 3) throw new SyntaxError("clamp() requires three values");
      return this.createMath("CSSMathClamp", t[0], t[1], t[2]);
    }
    throw new SyntaxError(`Unsupported function "${e}"`);
  }
}, Nt = (e, t) => {
  try {
    const r = It(e);
    return new Bt(r, t).parse();
  } catch {
    return null;
  }
}, ke = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", X = (e) => ke && e instanceof CSSUnitValue, L = (e, t, r, n = "") => {
  if (!(!e || !t)) {
    if (r == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== r && e.setProperty(t, r, n);
  }
}, Ft = (e, t, r, n = "") => {
  if (!e || !t) return e;
  const o = te(t), s = e.style, i = e.attributeStyleMap ?? e.styleMap;
  if (!ke || !i) return tt(e, t, r, n);
  const a = e.ownerDocument?.defaultView ?? globalThis;
  let l = Ce(r) && Je(r) ? r.value : r;
  if (l == null)
    return i.delete?.(o), s && L(s, o, null, n), e;
  if (ee(l)) {
    const f = i.get(o);
    if (X(l) && X(f)) {
      if (f.value === l.value && f.unit === l.unit) return e;
    } else if (f === l) return e;
    return i.set(o, l), e;
  }
  if (typeof l == "number")
    if (CSS?.number && !o.startsWith("--")) {
      const f = CSS.number(l), u = i.get(o);
      return X(u) && u.value === f.value && u.unit === f.unit || i.set(o, f), e;
    } else
      return L(s, o, String(l), n), e;
  if (typeof l == "string") {
    if (/\b(calc|min|max|clamp)\s*\(/.test(l)) {
      const u = Nt(l, a);
      if (u) try {
        return i.set(o, u), e;
      } catch {
      }
    }
    const f = Xe(l);
    if (typeof f == "number" && CSS?.number && !o.startsWith("--")) {
      const u = CSS.number(f), d = i.get(o);
      return X(d) && d.value === u.value && d.unit === u.unit || i.set(o, u), e;
    }
    return L(s, o, l, n), e;
  }
  return L(s, o, String(l), n), e;
}, tt = (e, t, r, n = "") => {
  if (!e || !t) return e;
  const o = te(t), s = e.style;
  if (!s) return e;
  let i = Ce(r) && Je(r) ? r.value : r;
  return typeof i == "string" && !ee(i) && (i = Xe(i) ?? i), i == null ? (L(s, o, null, n), e) : (ee(i) || typeof i == "number", L(s, o, String(i), n), e);
}, re = (e, t, r, n = "") => ke ? Ft(e, t, r, n) : tt(e, t, r, n), sn = (e, t, r) => re(Me(e), t, r), zt = (e, t) => {
  const r = Me(e);
  return Object.entries(t).forEach(([n, o]) => re(r, n, o)), r;
}, an = async (e) => {
  const t = await crypto?.subtle?.digest("SHA-256", typeof e == "string" ? new TextEncoder().encode(e) : e instanceof ArrayBuffer ? e : await e?.arrayBuffer?.());
  return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
}, rt = (e, t, r = "", n) => {
  const o = fr(e), s = typeof e == "string" && URL.canParse(e) ? e : o;
  return t?.[0] && (t[0].fetchPriority = "high"), t && s && typeof s == "string" && Ve(t, s, r), t?.[0] && (!URL.canParse(e) || n) && t?.[0] instanceof HTMLLinkElement, ct(o, (i) => {
    t?.[0] && i && (Ve(t, i, r), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((i) => {
    console.warn("Failed to load style sheet:", i);
  });
}, Dt = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = "DOM", rt(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, A = (e, t = typeof document < "u" ? document?.head : null, r = "") => {
  const n = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && n instanceof HTMLHeadElement) return Dt(e);
  const o = typeof document < "u" ? document.createElement("style") : null;
  return o ? (o.dataset.owner = "DOM", rt(e, [o, "innerHTML"], r), n?.prepend?.(o), o) : null;
}, ln = (e, t, r, n = "") => re(e, t, r, n), un = (e) => it(e, ""), jt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedMap"), T = globalThis[jt] ??= /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedBlobMap"), P = globalThis[qt] ??= /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ Symbol.for("dom.ts@adoptedAppliedText"), V = globalThis[Wt] ??= /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ Symbol.for("dom.ts@adoptedFilled"), nt = globalThis[Ht] ??= /* @__PURE__ */ new WeakSet(), ne = (e, t) => t ? `@layer ${t} { ${e} }` : e, ot = (e) => {
  try {
    return e.cssRules.length;
  } catch {
    return null;
  }
}, me = (e, t) => {
  V.set(e, t), nt.add(e);
}, U = (e) => {
  if (!e) return null;
  const t = V.get(e);
  if (t) return t;
  for (const [r, n] of T) if (n === e && typeof r == "string") return r;
  return null;
}, cn = (e) => {
  if (!e) return !0;
  const t = ot(e);
  return t === null ? !1 : t === 0;
}, H = (e, t) => {
  if (!e) return !1;
  const r = t || U(e), n = ot(e);
  return n === null ? !1 : n > 0 ? (nt.add(e), r && !V.has(e) && V.set(e, r), !0) : r && ve(e, r) ? (me(e, r), !0) : !1;
}, _t = /* @__PURE__ */ Symbol.for("dom.ts@layerCounter"), fn = globalThis[_t] ??= 0, ve = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (r) {
    const n = String(r?.message || "").toLowerCase();
    return n.includes("@import rules are not allowed") || n.includes("@import") && n.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", r), !1;
  }
}, Zt = (e) => {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" && URL.canParse(e);
  } catch {
    return !1;
  }
}, Kt = (e) => {
  let t = P.get(e);
  return t || (t = new CSSStyleSheet(), P.set(e, t)), t;
}, it = (e, t = null) => {
  try {
    return Yt(e, t);
  } catch (r) {
    return console.warn("[DOM] loadAsAdopted failed", r), typeof e == "string" && A(e, void 0, t || ""), null;
  }
}, Yt = (e, t = null) => {
  if (!lt())
    return typeof e == "string" && A(e, void 0, t || ""), null;
  if (typeof e == "string" && Ue(e))
    return A(e, void 0, t || ""), null;
  if (typeof e == "string" && T?.has?.(e)) {
    const n = T.get(e), o = V.get(n) || ne(e, t);
    return H(n, o), typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), n;
  }
  if ((e instanceof Blob || e instanceof File) && P?.has?.(e)) {
    const n = P.get(e);
    return H(n), typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), n;
  }
  if (!e) return null;
  const r = typeof e == "string" ? Mt(T, e, () => new CSSStyleSheet()) : Kt(e);
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r), typeof e == "string" && !Zt(e)) {
    const n = ne(e, t);
    return T.set(e, r), ve(r, n) ? me(r, n) : (ie(r), T.delete(e), A(e)), r;
  } else ct(dr(e), (n) => {
    if (T.set(n, r), n) {
      if (Ue(n))
        return ie(r), T.delete(n), P.delete(e), A(n, void 0, t || ""), r;
      const o = ne(n, t);
      return ve(r, o) ? me(r, o) : (ie(r), T.delete(n), P.delete(e), A(n, void 0, t || "")), r;
    }
  });
  return r;
}, Qt = /* @__PURE__ */ Symbol.for("dom.ts@styleTreeHooks"), st = globalThis[Qt] ??= /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new WeakSet(), Xt = /* @__PURE__ */ new Set(), Gt = [
  "data-theme",
  "data-explorer-color-scheme",
  "data-color-scheme",
  "theme",
  "color-scheme"
], _ = (e) => !e || e.nodeType !== 1 ? !1 : !!(String(e.localName || "").includes("-") || e.shadowRoot || e.styles != null), at = (e, t) => {
  if (!(!e || e.nodeType === 3)) {
    if (e.nodeType === 11) {
      for (const r of e.childNodes || []) at(r, t);
      return;
    }
    if (_(e) && t.add(e), typeof e.querySelectorAll == "function")
      try {
        for (const r of e.querySelectorAll("*")) _(r) && t.add(r);
      } catch {
      }
  }
}, Jt = (e, t = "tree") => {
  for (const r of e)
    if (_(r))
      for (const n of st) n(r, t);
}, er = (e) => {
  typeof e == "function" && st.add(e);
}, dn = (e) => {
  if (!e || typeof MutationObserver > "u" || oe.has(e)) return e;
  oe.add(e), Xt.add(e);
  const t = new MutationObserver((r) => {
    const n = /* @__PURE__ */ new Set();
    for (const o of r) if (o.type === "childList") {
      for (const i of o.addedNodes) at(i, n);
      const s = o.target?.getRootNode?.();
      if (s instanceof ShadowRoot && _(s.host)) {
        const i = s.adoptedStyleSheets;
        (!i || i.length === 0) && n.add(s.host);
      }
    } else o.type === "attributes" && o.target && _(o.target) && n.add(o.target);
    Jt(n, "mutation");
  });
  try {
    t.observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: [...Gt]
    });
  } catch {
    return oe.delete(e), e;
  }
  return e;
}, pn = () => {
  if (typeof document > "u") return;
  const e = typeof URL < "u" && typeof URL.canParse == "function";
  for (const [t, r] of T) {
    if (!r || typeof t != "string" || e && URL.canParse(t)) continue;
    const n = V.get(r) || t;
    H(r, n), document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r);
  }
}, ie = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? T.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const r = document.adoptedStyleSheets, n = r.indexOf(t);
  return n !== -1 ? (r.splice(n, 1), !0) : !1;
}, tr = (e, t) => {
  const r = e.split(" ");
  return new DOMPoint(Pe(r[0], () => t.clientWidth), Pe(r[1], () => t.clientHeight));
}, Pe = (e, t) => e.endsWith("%") ? parseFloat(e) / 100 * t() : parseFloat(e), hn = (e) => {
  if (e?.computedStyleMap) {
    const t = e.computedStyleMap().get("transform")?.toMatrix?.();
    if (t) return t;
  } else if (e) {
    const t = getComputedStyle(e);
    return new DOMMatrix(t?.getPropertyValue?.("transform"));
  }
  return new DOMMatrix();
}, yn = (e) => {
  const t = getComputedStyle(e)?.getPropertyValue?.("transform-origin") || "50% 50%";
  return tr(t, e);
}, z = (e, t) => {
  if ("computedStyleMap" in e) {
    const r = e?.computedStyleMap?.()?.get(t);
    return r instanceof CSSUnitValue ? r?.value || 0 : r?.toString?.();
  }
  if (e instanceof HTMLElement) {
    const r = getComputedStyle?.(e, "");
    return parseFloat(r?.getPropertyValue?.(t)?.replace?.("px", "")) || 0;
  }
  return parseFloat((e?.style ?? e).getPropertyValue?.(t)?.replace?.("px", "")) || 0;
}, Sn = (e) => {
  let t = 1, r = e;
  for (; r; ) {
    if ("currentCSSZoom" in r) {
      const o = r.currentCSSZoom;
      if (typeof o == "number") return t *= o;
    }
    const n = getComputedStyle(r);
    if (n.zoom && n.zoom !== "normal") return t *= parseFloat(n.zoom);
    if (n.zoom && n.zoom !== "normal" || "currentCSSZoom" in r) return t;
    r = r?.offsetParent ?? r?.parentElement;
  }
  return t;
}, mn = (e, t) => z?.(e, t), vn = (e, t) => t == "inline" ? z(e, "padding-inline-start") + z(e, "padding-inline-end") : z(e, "padding-block-start") + z(e, "padding-block-end"), bn = "DOM", D = typeof document < "u" ? document.createElement("style") : null;
D && (document.querySelector("head")?.appendChild?.(D), D.dataset.owner = "DOM");
var lt = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", Ue = (e) => typeof e == "string" && /@import\b/i.test(e), Oe = (e) => typeof CSSLayerBlockRule < "u" && e instanceof CSSLayerBlockRule, ut = (e, t) => {
  if (!e || !t) return;
  const r = Array.from(e.cssRules || []), n = r.find((o) => Oe(o) && o.name === t);
  if (n) return n;
  try {
    const o = e.insertRule(`@layer ${t} {}`, r.length), s = e.cssRules?.[o];
    return Oe(s) ? s : void 0;
  } catch {
    return;
  }
}, Ve = (e, t, r = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${r && typeof r == "string" ? `layer(${r})` : ""};` : t;
}, wn = (e) => e?.map?.((t) => zt(...t)), rr = (e, t) => (t ||= D?.sheet, ut(t, e)), nr = 0, se = (e) => typeof ShadowRoot < "u" && e instanceof ShadowRoot, Ie = (e) => typeof Document < "u" && e instanceof Document, or = (e) => typeof Element < "u" && e instanceof Element, Be = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : Array.from(e).map((t) => `\\${t.codePointAt(0).toString(16)} `).join(""), ir = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `ux-${Date.now().toString(36)}-${(++nr).toString(36)}`, sr = (e, t) => (t = t.trim(), e ? t ? t.startsWith("::") ? `${e}${t}` : `${e} ${t}` : e : t), ar = (e, t, r, n) => {
  const o = Array.from(e?.cssRules || []), s = t.trim(), i = n.trim();
  return o.findIndex((a) => {
    if (!(a instanceof CSSStyleRule)) return !1;
    const l = a.selectorText?.trim?.() ?? "";
    return l === s ? !0 : i && l.endsWith(i) ? l.slice(0, l.length - i.length).trim() === r : !1;
  });
}, Me = (e, t, r = "ux-query", n = null) => {
  const o = se(n) || Ie(n) ? n : n?.getRootNode?.() ?? (typeof document < "u" ? document : null), s = or(n) ? n : null;
  let i = "";
  if (s?.id) i = `#${Be(s.id)}`;
  else if (s) {
    let u = s.getAttribute("data-style-id");
    u || (u = ir(), s.setAttribute("data-style-id", u)), i = `[data-style-id="${Be(u)}"]`;
  } else se(o) ? i = ":host" : Ie(o) && (i = ":root");
  let a = null;
  if (se(o) ? (a = o.querySelector("style[data-ux-query]"), !a && typeof document < "u" && (a = document.createElement("style"), a.setAttribute("data-ux-query", ""), o.appendChild(a))) : a = lr(), t ||= a?.sheet, !t) return;
  if (r) return Me(e, rr(r, t), null, n);
  const l = sr(i, e);
  let f = ar(t, l, i, e);
  return f === -1 && (f = t.insertRule(`${l} {}`)), t.cssRules?.[f];
};
function lr() {
  return D ?? null;
}
var ct = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), ur = /* @__PURE__ */ Symbol.for("dom.ts@blobURLMap"), B = globalThis[ur] ??= /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ Symbol.for("dom.ts@cacheMap"), $ = globalThis[cr] ??= /* @__PURE__ */ new Map(), fr = (e) => {
  if (!e) return null;
  if ($.has(e)) return $.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (B.has(e)) return B.get(e);
    const t = URL.createObjectURL(e);
    return B.set(e, t), $.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (r) => {
      const n = await r.blob(), o = URL.createObjectURL(n);
      return B.set(n, o), $.set(e, o), $.set(o, o), o;
    });
    return $.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), r = URL.createObjectURL(t);
    return B.set(t, r), $.set(r, r), r;
  }
  return e;
}, N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new WeakMap(), dr = (e) => {
  if (!e) return "";
  if (N.has(e)) return N.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (G.has(e)) return G.get(e) ?? "";
    const t = e?.text?.()?.then?.((r) => (G.set(e, r), r));
    return G.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (r) => {
      const n = await r.text();
      return N.set(e, n), n;
    });
    return N.set(e, t), t;
  }
  return typeof e == "string" && N.set(e, e), e;
}, pr = /* @__PURE__ */ Symbol.for("dom.ts@adoptedSelectorMap"), Ne = globalThis[pr] ??= /* @__PURE__ */ new Map(), hr = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowSelectorMap"), Fe = globalThis[hr] ??= /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ Symbol.for("dom.ts@adoptedLayerMap"), ze = globalThis[yr] ??= /* @__PURE__ */ new Map(), Sr = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowLayerMap"), J = globalThis[Sr] ??= /* @__PURE__ */ new WeakMap(), gn = (e, t = "ux-query", r = null) => {
  if (!e || !lt()) return null;
  const n = r instanceof ShadowRoot ? r : r?.getRootNode ? r.getRootNode({ composed: !0 }) : null, o = n instanceof ShadowRoot, s = o ? n.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
  if (!s) return null;
  const i = `${t || ""}:${e}`;
  let a;
  if (o) {
    let u = Fe.get(n);
    u || (u = /* @__PURE__ */ new Map(), Fe.set(n, u)), a = u.get(i), a || (a = new CSSStyleSheet(), u.set(i, a), s.includes(a) || s.push(a));
  } else
    a = Ne.get(i), a || (a = new CSSStyleSheet(), Ne.set(i, a), s.includes(a) || s.push(a));
  if (t) {
    let u;
    if (o) {
      let d = J.get(n);
      d || (d = /* @__PURE__ */ new Map(), J.set(n, d)), u = d.get(t);
    } else u = ze.get(t);
    if (!u && (u = ut(a, t), u))
      if (o) {
        let d = J.get(n);
        d || (d = /* @__PURE__ */ new Map(), J.set(n, d)), d.set(t, u);
      } else ze.set(t, u);
    if (u) {
      let d = Array.from(u.cssRules || []).findIndex((S) => S instanceof CSSStyleRule && S.selectorText?.trim?.() === e?.trim?.());
      if (d === -1) try {
        d = u.insertRule(`${e} {}`, u.cssRules.length);
      } catch {
        return null;
      }
      return u.cssRules[d];
    }
  }
  let l = Array.from(a.cssRules || []).findIndex((u) => u instanceof CSSStyleRule && u.selectorText?.trim?.() === e?.trim?.());
  if (l === -1) try {
    l = a.insertRule(`${e} {}`, a.cssRules.length);
  } catch {
    return null;
  }
  const f = a.cssRules[l];
  return f instanceof CSSStyleRule ? f : null;
}, ft = /* @__PURE__ */ Symbol.for("lur.e@adoptedStyleSheetsCache");
globalThis[ft] ??= /* @__PURE__ */ new WeakMap();
var be = globalThis[ft], dt = /* @__PURE__ */ Symbol.for("lur.e@styleCache");
globalThis[dt] ??= /* @__PURE__ */ new Map();
var mr = globalThis[dt], pt = /* @__PURE__ */ Symbol.for("lur.e@styleElementCache");
globalThis[pt] ??= /* @__PURE__ */ new WeakMap();
var vr = globalThis[pt], De = "data-glit-host-css", Ee = (e) => {
  const t = e?.shadowRoot;
  if (!t) return;
  const r = be.get(e) || [];
  for (const n of r) H(n);
  try {
    const n = t.adoptedStyleSheets || [];
    t.adoptedStyleSheets = [...r.filter((o) => !n.includes(o)), .../* @__PURE__ */ new Set([...n])];
  } catch {
  }
}, ae = (e, t) => {
  let r = be.get(e);
  r || be.set(e, r = []), t && r.indexOf(t) < 0 && r.push(t), H(t), Ee(e);
}, j = (e, t) => {
  const r = e?.shadowRoot;
  if (!r || !t) return null;
  let n = r.querySelector?.(`style[${De}]`);
  return n ? n.textContent !== t && (n.textContent = t) : (n = A(t, r, ""), n && n.setAttribute(De, "")), n;
}, xn = (e = typeof document < "u" ? document : null) => {
  if (!e) return;
  const t = (n) => {
    n?.shadowRoot && (j(n, ht(n)), Ee(n));
  };
  e.nodeType === 1 && t(e);
  const r = (n) => {
    let o = [];
    try {
      o = n.querySelectorAll("*");
    } catch {
      return;
    }
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      i.shadowRoot && (t(i), r(i.shadowRoot));
    }
  };
  r(e);
}, ht = (e) => {
  const t = e?.styles;
  if (typeof t == "string") return t;
  if (typeof t == "function") try {
    const r = t.call(e);
    return typeof r == "string" ? r : U(r);
  } catch {
    return null;
  }
  return U(t);
}, br = (e) => {
  e && (e.styles != null && yt(e, e.styles), Ee(e), j(e, ht(e)));
}, le = /* @__PURE__ */ new WeakSet(), ue = [], ce = !1, wr = (e) => {
  !e || !(e instanceof Element) || le.has(e) || (le.add(e), ue.push(e), !ce && (ce = !0, queueMicrotask(() => {
    ce = !1;
    const t = ue;
    ue = [];
    for (const r of t)
      le.delete(r), r.isConnected && br(r);
  })));
};
er((e) => wr(e));
var yt = (e, t) => {
  if (!t) return null;
  let r = t;
  if (typeof t == "function") try {
    const a = new WeakRef(e);
    r = t.call(e, a);
  } catch (a) {
    return console.warn("Error calling styles function:", a), null;
  }
  if (r && typeof CSSStyleSheet < "u" && r instanceof CSSStyleSheet)
    return ae(e, r), j(e, U(r));
  if (r instanceof Promise)
    return r.then((a) => {
      a instanceof CSSStyleSheet ? ae(e, a) : a != null && yt(e, a);
    }).catch((a) => {
      console.warn("Error loading adopted stylesheet:", a);
    }), null;
  if (typeof r == "string" || r instanceof Blob || r instanceof File) {
    const a = it(r, "");
    if (a) {
      const l = (f) => {
        ae(e, f);
      };
      return a instanceof Promise ? (a.then((f) => {
        l(f), j(e, typeof r == "string" ? r : U(f));
      }).catch((f) => {
        console.warn("Error loading adopted stylesheet:", f);
      }), null) : (l(a), j(e, typeof r == "string" ? r : U(a)));
    }
  }
  const n = typeof t == "function" || typeof t == "object" ? vr : mr, o = n.get(t);
  let s = o?.styleElement, i = o?.vars;
  if (!o) {
    let a = "", l = [];
    typeof r == "string" ? a = r || "" : typeof r == "object" && r != null && (r instanceof HTMLStyleElement ? s = r : (a = typeof r.css == "string" ? r.css : typeof r == "string" ? r : String(r), l = r?.props ?? l, i = r?.vars ?? i)), !s && a && (s = A(a, e, "ux-layer")), n.set(t, {
      css: a,
      props: l,
      vars: i,
      styleElement: s
    });
  }
  return s;
}, gr = /* @__PURE__ */ Symbol.for("lur.e@bank"), Cn = globalThis[gr] ??= new Ge(), xr = /* @__PURE__ */ Symbol.for("lur.e@elMap"), St = globalThis[xr] ??= new Ge(), Cr = /* @__PURE__ */ Symbol.for("lur.e@alives"), kr = globalThis[Cr] ??= new FinalizationRegistry((e) => e?.()), je = /* @__PURE__ */ Symbol.for("@behavior"), mt = (e) => !!e && typeof e == "object" && "ref" in e && typeof e?.unbind == "function", Mr = (e, t, r = "value") => {
  const n = O(e), o = O(t), s = (a) => {
    Se(o, "value", R(n)?.[r ?? "value"] ?? W(R(o)));
  }, i = {
    click: s,
    input: s,
    change: s
  };
  return s?.({ target: e }), Le?.(e, "addEventListener", i), Se(o, "value", e?.[r ?? "value"] ?? W(R(t))), () => Le?.(e, "removeEventListener", i);
}, Er = (e, t, r = "") => {
  O(e);
  const n = O(t), o = te(r);
  return Pt(e, o, (i) => {
    if (i.type == "attributes" && i.attributeName == o) {
      const a = i?.target?.getAttribute?.(i.attributeName), l = R(n), f = W(l);
      $e(i.oldValue, a) && l != null && (typeof l == "object" || typeof l == "function") && ($e(f, a) || f == null) && Se(l, "value", a);
    }
  });
}, Tr = (e, t, r) => {
  const n = St.get([e, t]);
  if (n) {
    const o = n[r]?.[1];
    delete n[r], o?.();
  }
}, Ar = (e, t, r, n) => {
  const o = St.getOrInsertComputed([e, t], () => ({}));
  return o?.[r]?.[1]?.(), o[r] = n, !0;
}, Rr = (e, t, r, n, o, s) => {
  const i = mt(t) ? t : null;
  i && (i.bind?.(), t = i.ref);
  const a = O(e);
  if (e = R(a), !e || !(e instanceof Node || e?.element instanceof Node)) return;
  let l;
  l && l?.abort?.(), l = new AbortController();
  const f = O(t);
  n?.(e, r, t);
  const u = Rt?.([t, "value"], (x, w, p) => {
    const y = R(f), v = R(o), C = R(a), h = W(y) ?? W(x);
    (!v || v?.[r] == y) && (typeof y?.[je] == "function" ? y?.[je]?.((c = x) => n(C, r, h), [
      x,
      r,
      p
    ], [
      l?.signal,
      r,
      a
    ]) : n(C, r, h));
  });
  let d = null;
  typeof s == "boolean" && s && (n == Lt && (d = Er(e, t, r)), n == $t && (d = Mr(e, t, r))), typeof s == "function" && (d = s(e, r, t));
  const S = () => {
    d?.disconnect?.(), d != null && typeof d == "function" && d?.(), i?.unbind?.(), u?.(), l?.abort?.(), Tr?.(e, n, r);
  };
  if (At(t, Symbol.dispose, S), kr.register(e, S), !Ar(e, n, r, [t, S])) return S;
}, we = (e, t, r, n, o, s) => (n(e, t, mt(r) ? r.ref : r), Rr(e, r, t, n, o, s)), Lr = (e, t) => e.style.removeProperty(te(t)), qe = (e, t, r) => {
  const n = e?.style;
  return !t || typeof t != "string" || !e || !n || kt(r, () => {
    Et(r) || Ce(r) || Tt(r) ? re(e, t, r) : r == null && Lr(e, t);
  }), e;
}, Z = (e, t = 0) => {
  if (typeof e == "number") return e;
  if (!e) return t;
  const r = String(e).trim();
  return r.endsWith("ms") ? parseFloat(r) : r.endsWith("s") ? parseFloat(r) * 1e3 : parseFloat(r) || t;
}, $r = (e) => e === void 0 ? 1 : e === -1 || e === 1 / 0 ? 1 / 0 : Math.max(1, Math.floor(e)), Pr = (e) => e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`), Te = (e) => {
  const t = [];
  if (typeof e.properties == "string") {
    const r = e.properties?.trim?.()?.split?.(";");
    t.push(...Array.from(r || [])?.map?.((n) => {
      if (n?.includes?.(":")) {
        const o = (n?.split?.(":") ?? [])?.slice?.(1, -1)?.join?.(":");
        return { [n?.[0]?.trim?.()]: o?.trim?.() };
      }
      return null;
    })?.filter?.((n) => n != null) || []);
  }
  return Array.from(Array.isArray(e.properties) ? e.properties : t);
}, Ur = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  let n = "";
  for (let s = 0; s < e.length; s++)
    n += e[s], s < t.length && (n += `__SLOT_${s}__`);
  const o = n.split(";").map((s) => s.trim()).filter(Boolean);
  for (const s of o) {
    const i = s.indexOf(":");
    if (i === -1) continue;
    const a = s.slice(0, i).trim(), l = s.slice(i + 1).trim(), f = /__SLOT_(\d+)__/.exec(l);
    if (!f) continue;
    const u = t[parseInt(f[1], 10)];
    if (!Array.isArray(u)) throw new TypeError(`A\`${a}\` expects an array of values, got ${typeof u}`);
    r.set(a, {
      property: a,
      values: u
    });
  }
  return { properties: r };
}, Ae = (e) => {
  const t = [], r = [];
  let n = !1;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    Re(s) ? (n = !0, r.push(o), t.push(s.value)) : (I(s), t.push(s));
  }
  return {
    resolved: t,
    hasReactive: n,
    reactiveIndices: r
  };
}, ge = (e) => {
  const t = e?.offsets, r = Te(e);
  if (r.length === 0) throw new Error("No animatable properties found in A template");
  const n = Math.max(...r.map((i) => i.values.length)), o = (t?.length > 1 ? t : null) || Array.from({ length: n }, (i, a) => a / (n - 1)), s = [];
  for (let i = 0; i < n; i++) {
    const a = { offset: o[i] ?? i / (n - 1) };
    for (const l of r) {
      const { resolved: f } = Ae(l.values), u = Pr(l.property);
      let d = f[Math.min(i, f.length - 1)];
      I(d) && (d = String(d)), a[u] = d;
    }
    s.push(a);
  }
  return s;
}, vt = (e) => {
  const t = Z(e.duration ?? 300), r = Z(e.delay ?? 0), n = $r(e.iterationCount);
  return {
    duration: t,
    delay: r,
    composite: e.composite || "replace",
    iterations: n === "Infinity" ? 1 / 0 : n,
    fill: e.fillMode ?? "none",
    direction: e.direction ?? "normal",
    easing: typeof e.easing == "string" ? e.easing : "linear",
    timeline: e.timeline
  };
}, Or = (e, t) => {
  const r = Te(t), n = [], o = ge(t), s = vt(t), i = e.animate(o, s);
  for (const l of r) {
    const { hasReactive: f, reactiveIndices: u } = Ae(l.values);
    if (f)
      for (const d of u) {
        const S = l.values[d], x = we(e, `--anim-${l.property}-${d}`, S, () => {
          const w = ge(t), p = i.currentTime;
          i.effect = new KeyframeEffect(e, w, s), p !== null && (i.currentTime = p);
        });
        n.push(x);
      }
  }
  return {
    animation: i,
    cleanup: () => {
      i.cancel(), n.forEach((l) => l());
    }
  };
}, kn = (e, ...t) => Ur(e, t), Q = (e, t, r) => {
  if (Te(t).some((a) => {
    const { hasReactive: l } = Ae(a.values);
    return l;
  })) return Or(e, t);
  const n = ge(t), o = vt(t), s = e.animate(n, o);
  return {
    animation: s,
    cleanup: () => {
      s.cancel();
    }
  };
}, Mn = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  for (const [n, o] of Object.entries(t.properties)) {
    if (!Array.isArray(o)) throw new TypeError(`animate() expects arrays of values, got ${typeof o} for ${n}`);
    r.set(n, {
      property: n,
      values: o
    });
  }
  return Q(e, { ...t }, r);
}, En = (e) => (t) => Q(t, e), Tn = async (e, t) => {
  for (const r of t) {
    const { animation: n } = Q(e, r);
    await n.finished;
  }
}, An = (e, t) => {
  const r = t.map((o) => Q(e, o)), n = () => {
    r.forEach((o) => o.cleanup());
  };
  return {
    animations: r.map((o) => o.animation),
    cleanup: n
  };
}, Rn = (e, t, r = 100) => e.map((n, o) => {
  const s = Z(t?.delay ?? 0) + o * r;
  return Q(n, {
    ...t,
    delay: s
  });
}), bt = /* @__PURE__ */ Symbol.for("fest.animatable"), Vr = (e) => e === -1 || e === 1 / 0 ? 1 / 0 : Math.max(1, e ?? 1), Ir = 0, Ln = (e = {}) => ({
  kind: "scroll",
  ...e
}), $n = (e = {}) => ({
  kind: "view",
  ...e
}), fe = (e) => e != null && typeof e == "object" && e.kind === "scroll", We = (e) => e != null && typeof e == "object" && e.kind === "view", Br = class {
  [bt] = !0;
  id = Ir++;
  #n;
  #e;
  #r;
  #o = /* @__PURE__ */ new Set();
  #i = /* @__PURE__ */ new Set();
  #s(e, t) {
    return e == null || e === "self" ? t : e === "root" ? t.ownerDocument.scrollingElement ?? t.ownerDocument.documentElement : typeof e == "object" && "value" in e && !(e instanceof Element) ? e.value ?? t : e;
  }
  #a(e) {
    for (let t = e.parentElement; t; t = t.parentElement) {
      const r = getComputedStyle(t);
      if (/(auto|scroll|overlay)/.test(r.overflow + r.overflowX + r.overflowY)) return t;
    }
    return e.ownerDocument.scrollingElement ?? e.ownerDocument.documentElement;
  }
  #f(e, t) {
    const r = e.ownerDocument.defaultView ?? globalThis;
    if (fe(t)) {
      const o = r.ScrollTimeline;
      return typeof o != "function" ? null : new o({
        source: t.source === "nearest" || t.source == null ? this.#a(e) : this.#s(t.source, e),
        axis: t.axis ?? "block"
      });
    }
    const n = r.ViewTimeline;
    return typeof n != "function" ? null : new n({
      subject: t.subject ? this.#s(t.subject, e) : e,
      axis: t.axis ?? "block",
      inset: t.inset
    });
  }
  #d(e, t, r, n) {
    const o = this.#f(e, n);
    if (!o) return this.#p(e, t, r, n);
    const s = this.#c(), i = e.animate(this.#u(r), {
      ...s,
      duration: "auto",
      delay: 0,
      endDelay: 0,
      iterations: 1,
      fill: this.#e.fill ?? "both",
      timeline: o
    });
    return n.rangeStart && (i.rangeStart = n.rangeStart), n.rangeEnd && (i.rangeEnd = n.rangeEnd), t.animation = i, () => i.cancel();
  }
  constructor(e, t = {}) {
    if (!Array.isArray(e) || e.length < 2) throw new TypeError("animatable() expects at least 2 steps");
    this.#n = e, this.#e = t, this.#r = this.#l(e[0]);
  }
  #p(e, t, r, n) {
    const s = e.animate(this.#u(r), {
      ...this.#c(),
      duration: 1e4,
      delay: 0,
      iterations: 1,
      fill: "both"
    });
    s.pause(), t.animation = s;
    const i = fe(n) ? n.source === "nearest" || n.source == null ? this.#a(e) : this.#s(n.source, e) : this.#a(e);
    let a = 0;
    const l = () => {
      if (We(n)) {
        const x = i === document.scrollingElement ? {
          top: 0,
          height: innerHeight
        } : i.getBoundingClientRect(), w = e.getBoundingClientRect(), p = x.height + w.height;
        return Math.min(1, Math.max(0, (x.top + x.height - w.top) / p));
      }
      const d = i, S = d.scrollHeight - d.clientHeight;
      return S > 0 ? d.scrollTop / S : 0;
    }, f = () => {
      cancelAnimationFrame(a), a = requestAnimationFrame(() => {
        s.currentTime = l() * 1e4;
      });
    }, u = i === document.scrollingElement ? window : i;
    return u.addEventListener("scroll", f, { passive: !0 }), f(), () => {
      cancelAnimationFrame(a), u.removeEventListener("scroll", f), s.cancel();
    };
  }
  get value() {
    return this.#r;
  }
  set value(e) {
    this.#r = e;
    for (const t of this.#o) t(e);
  }
  valueOf() {
    return this.#r;
  }
  toString() {
    const e = this.#r;
    return e == null ? "" : String(e);
  }
  [Symbol.toPrimitive](e) {
    if (e === "number") {
      const t = Number(this.#r);
      return Number.isFinite(t) ? t : 0;
    }
    return this.toString();
  }
  subscribe(e) {
    return this.#o.add(e), () => this.#o.delete(e);
  }
  get options() {
    return this.#e;
  }
  get steps() {
    return this.#n;
  }
  #l(e) {
    return e != null && typeof e == "object" && "value" in e ? e.value : e;
  }
  #u(e) {
    const t = this.#n.map((s) => this.#l(s)), r = t.length, n = this.#e.offsets, o = this.#e.easing;
    return t.map((s, i) => {
      const a = { offset: n?.[i] ?? (r > 1 ? i / (r - 1) : 0) };
      Array.isArray(o) && o[i] && (a.easing = o[i]);
      let l = s;
      return e.mode === "property" && e.unit != null && typeof s == "number" && (l = `${s}${e.unit}`), e.mode === "custom-property" && typeof s != "string" && (l = String(s)), a[e.target] = l, a;
    });
  }
  #c() {
    const e = this.#e;
    return {
      duration: Z(e.duration, 300),
      delay: Z(e.delay, 0),
      endDelay: e.endDelay ?? 0,
      iterations: Vr(e.iterations),
      direction: e.direction ?? "normal",
      fill: e.fill ?? "both",
      composite: e.composite,
      easing: Array.isArray(e.easing) ? "linear" : e.easing ?? "linear"
    };
  }
  attach(e, t) {
    const r = {
      element: e,
      animation: null,
      cleanup: () => {
      }
    }, n = this.#e.trigger ?? "mount";
    let o;
    if (fe(n) || We(n)) o = this.#d(e, r, t, n);
    else {
      const s = () => {
        r.animation?.cancel();
        const i = e.animate(this.#u(t), this.#c());
        return r.animation = i, this.#h(i, t), i;
      };
      o = this.#y(e, r, s);
    }
    return this.#i.add(r), r.cleanup = () => {
      o(), this.#i.delete(r);
    }, r.cleanup;
  }
  #h(e, t) {
    e.finished.then(() => {
      const r = this.#l(this.#n[this.#n.length - 1]);
      this.value = r;
    }).catch(() => {
    });
  }
  #y(e, t, r) {
    const n = this.#e.trigger ?? "mount", o = this.#e.reverseOnExit ?? !0, s = () => {
      !t.animation || t.animation.playState === "idle" ? r() : (t.animation.playbackRate = Math.abs(t.animation.playbackRate || 1), t.animation.play());
    }, i = () => {
      t.animation && t.animation.reverse();
    };
    if (n === "mount")
      return r(), () => {
      };
    if (n === "manual") return () => {
    };
    if (n === "hover" || n === "focus") {
      const a = n === "hover" ? "pointerenter" : "focusin", l = n === "hover" ? "pointerleave" : "focusout", f = () => s(), u = () => {
        o && i();
      };
      return e.addEventListener(a, f), e.addEventListener(l, u), () => {
        e.removeEventListener(a, f), e.removeEventListener(l, u);
      };
    }
    if (n === "click") {
      let a = !0;
      const l = () => {
        a ? s() : i(), a = !a;
      };
      return e.addEventListener("click", l), () => e.removeEventListener("click", l);
    }
    if (n === "visible") {
      if (typeof IntersectionObserver != "function")
        return r(), () => {
        };
      const a = new IntersectionObserver((l) => {
        for (const f of l) f.isIntersecting ? s() : o && t.animation && i();
      }, this.#e.intersection);
      return a.observe(e), () => a.disconnect();
    }
    if (n != null && typeof n == "object" && "value" in n) {
      const a = (f) => f ? s() : i();
      a(n.value);
      const l = typeof n.subscribe == "function" ? n.subscribe(a) : null;
      return () => l?.();
    }
    return () => {
    };
  }
  #t(e) {
    for (const t of this.#i) t.animation && e(t.animation);
    return this;
  }
  play() {
    return this.#t((e) => e.play());
  }
  pause() {
    return this.#t((e) => e.pause());
  }
  reverse() {
    return this.#t((e) => e.reverse());
  }
  cancel() {
    return this.#t((e) => e.cancel());
  }
  finish() {
    return this.#t((e) => e.finish());
  }
  set playbackRate(e) {
    this.#t((t) => {
      t.playbackRate = e;
    });
  }
  get finished() {
    const e = [];
    return this.#t((t) => e.push(t.finished.catch(() => {
    }))), Promise.all(e).then(() => {
    });
  }
}, Pn = (e, t) => new Br(e, t), Nr = (e) => e != null && typeof e == "object" && e[bt] === !0, Fr = (e) => Array.isArray(e) && typeof e[0] == "function", zr = 0, Dr = /* @__PURE__ */ new Set([
  "%",
  "px",
  "cm",
  "mm",
  "q",
  "in",
  "pc",
  "pt",
  "em",
  "ex",
  "ch",
  "cap",
  "ic",
  "lh",
  "rem",
  "rex",
  "rch",
  "rcap",
  "ric",
  "rlh",
  "vw",
  "vh",
  "vi",
  "vb",
  "vmin",
  "vmax",
  "svw",
  "svh",
  "svi",
  "svb",
  "svmin",
  "svmax",
  "lvw",
  "lvh",
  "lvi",
  "lvb",
  "lvmin",
  "lvmax",
  "dvw",
  "dvh",
  "dvi",
  "dvb",
  "dvmin",
  "dvmax",
  "cqw",
  "cqh",
  "cqi",
  "cqb",
  "cqmin",
  "cqmax",
  "deg",
  "grad",
  "rad",
  "turn",
  "s",
  "ms",
  "hz",
  "khz",
  "dpi",
  "dpcm",
  "dppx",
  "x",
  "fr"
]), wt = (e) => {
  const t = typeof e == "string" ? e.trim() : "";
  if (!t) return !0;
  for (const r of t.split(";")) {
    const n = r.trim();
    if (!n) continue;
    const o = n.indexOf(":");
    if (o < 0 || n.slice(o + 1).trim().length > 0) return !1;
  }
  return !0;
}, jr = (e) => {
  if (e == null) return;
  const t = e.getAttribute("style");
  t != null && wt(t) && (e.style.cssText = "", e.removeAttribute("style"));
}, qr = (e, t) => {
  if (wt(t)) {
    e.style.cssText = "", e.removeAttribute("style");
    return;
  }
  e.style.cssText = t;
}, I = (e) => {
  if (e == null || typeof e != "object") return !1;
  try {
    const t = globalThis.CSSStyleValue;
    if (typeof t == "function" && e instanceof t) return !0;
    for (let r = e; r; r = Object.getPrototypeOf(r)) if (r?.constructor?.name === "CSSStyleValue") return !0;
  } catch {
  }
  return !1;
}, Re = (e) => {
  if (e == null || typeof e != "object" || I(e)) return !1;
  try {
    return "value" in e;
  } catch {
    return !1;
  }
}, He = (e) => e == null || typeof e != "object" && typeof e != "function", K = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), _e = (e, t) => new RegExp(`var\\(\\s*${K(t)}\\s*\\)`).test(e), Wr = (e) => {
  const t = /^(%|[a-zA-Z]+)/.exec(e);
  if (!t) return null;
  const r = t[0], n = r.toLowerCase();
  return Dr.has(n) ? {
    authored: r,
    normalized: n,
    length: r.length
  } : null;
}, Hr = (e) => {
  switch (e.toLowerCase()) {
    case "%":
      return "percent";
    case "q":
      return "Q";
    case "hz":
      return "Hz";
    case "khz":
      return "kHz";
    case "fr":
      return "flex";
    default:
      return e.toLowerCase();
  }
}, _r = (e) => e.toLowerCase() === "%" ? "percent" : e.toLowerCase(), Y = (e, t) => e?.[t] ?? globalThis?.[t], M = (e, t, r) => {
  const n = e?.CSS, o = Hr(t), s = n?.[o];
  if (typeof s == "function") return s.call(n, r);
  const i = Y(e, "CSSUnitValue");
  if (typeof i != "function") throw new TypeError(`Typed OM does not support CSS unit "${t}"`);
  return new i(r, _r(t));
}, q = (e) => {
  const t = e.value?.value, r = typeof t == "number" ? t : Number(t);
  if (!Number.isFinite(r)) throw new TypeError(`Reactive CSS value "${String(t)}" is not finite`);
  return r;
}, Zr = (e) => {
  const t = Number(e?.value);
  return Number.isFinite(t) ? t : 0;
}, Ze = (e, t) => {
  let r = e;
  for (const n of t) r = r.replace(new RegExp(`var\\(\\s*${K(n.marker)}\\s*\\)`, "g"), String(n.value));
  return r;
}, de = (e, t) => {
  const r = K(t);
  return new RegExp(`^var\\(\\s*${r}\\s*\\)$`).test(e.trim());
}, Ke = (e, t) => {
  let r = e;
  return r != null && typeof r == "object" && "value" in r && !(r instanceof Element) && (r = r.value), r == null || r === "" ? t ? `0${t}` : "0" : t != null && typeof r == "number" ? `${r}${t}` : String(r);
}, pe = (e, t, r) => {
  if (!r) return !1;
  const n = K(t), o = K(r);
  return new RegExp(`^calc\\(\\s*var\\(\\s*${n}\\s*\\)\\s*\\*\\s*1${o}\\s*\\)$`, "i").test(e.trim());
}, Kr = (e, t, r, n) => {
  if (typeof t?.parseAll == "function") {
    const o = t.parseAll(r, n);
    e.set(r, ...o);
    return;
  }
  if (typeof t?.parse == "function") {
    e.set(r, t.parse(r, n));
    return;
  }
  e.set(r, n);
}, gt = (e) => {
  const t = [];
  let r = 0;
  for (; r < e.length; ) {
    const n = e.slice(r), o = /^\s+/.exec(n);
    if (o) {
      r += o[0].length;
      continue;
    }
    const s = /^var\(\s*(--[a-zA-Z0-9_-]+)\s*\)/.exec(n);
    if (s) {
      t.push({
        kind: "variable",
        marker: s[1]
      }), r += s[0].length;
      continue;
    }
    const i = /^(?:\d*\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/.exec(n);
    if (i) {
      r += i[0].length;
      const f = /^(%|[a-zA-Z]+)/.exec(e.slice(r)), u = f?.[0] ?? null;
      f && (r += f[0].length), t.push({
        kind: "number",
        value: Number(i[0]),
        unit: u == null ? null : u.toLowerCase()
      });
      continue;
    }
    const a = /^[a-zA-Z_][a-zA-Z0-9_-]*/.exec(n);
    if (a) {
      t.push({
        kind: "identifier",
        value: a[0].toLowerCase()
      }), r += a[0].length;
      continue;
    }
    const l = n[0];
    if (l === "+" || l === "-" || l === "*" || l === "/" || l === "(" || l === ")" || l === ",") {
      t.push({
        kind: "symbol",
        value: l
      }), r++;
      continue;
    }
    throw new SyntaxError(`Unsupported Typed OM numeric token near "${n}"`);
  }
  return t;
}, xt = class {
  tokens;
  win;
  reactiveByMarker;
  typedByMarker;
  index = 0;
  leaves = [];
  constructor(e, t, r, n) {
    this.tokens = e, this.win = t, this.reactiveByMarker = r, this.typedByMarker = n;
  }
  parse() {
    const e = this.parseSum();
    if (this.index !== this.tokens.length) throw new SyntaxError("Unexpected trailing Typed OM expression");
    return {
      root: e,
      leaves: this.leaves
    };
  }
  current() {
    return this.tokens[this.index];
  }
  consume() {
    const e = this.tokens[this.index];
    if (!e) throw new SyntaxError("Unexpected end of Typed OM expression");
    return this.index++, e;
  }
  consumeSymbol(e) {
    const t = this.consume();
    if (t.kind !== "symbol" || t.value !== e) throw new SyntaxError(`Expected "${e}"`);
  }
  matchesSymbol(e) {
    const t = this.current();
    return t?.kind === "symbol" && t.value === e;
  }
  createMath(e, ...t) {
    const r = Y(this.win, e);
    if (typeof r != "function") throw new TypeError(`${e} is not supported`);
    return new r(...t);
  }
  parseSum() {
    let e = this.parseProduct();
    for (; this.matchesSymbol("+") || this.matchesSymbol("-"); ) {
      const t = this.consume(), r = this.parseProduct();
      if (t.kind !== "symbol") throw new SyntaxError("Expected a sum operator");
      t.value === "+" ? e = this.createMath("CSSMathSum", e, r) : e = this.createMath("CSSMathSum", e, this.createMath("CSSMathNegate", r));
    }
    return e;
  }
  parseProduct() {
    let e = this.parseUnary();
    for (; this.matchesSymbol("*") || this.matchesSymbol("/"); ) {
      const t = this.consume(), r = this.parseUnary();
      if (t.kind !== "symbol") throw new SyntaxError("Expected a product operator");
      t.value === "*" ? e = this.createMath("CSSMathProduct", e, r) : e = this.createMath("CSSMathProduct", e, this.createMath("CSSMathInvert", r));
    }
    return e;
  }
  parseUnary() {
    return this.matchesSymbol("+") ? (this.consume(), this.parseUnary()) : this.matchesSymbol("-") ? (this.consume(), this.createMath("CSSMathNegate", this.parseUnary())) : this.parsePrimary();
  }
  parsePrimary() {
    const e = this.consume();
    if (e.kind === "number") return M(this.win, e.unit ?? "number", e.value);
    if (e.kind === "variable") {
      const t = this.reactiveByMarker.get(e.marker);
      if (t) {
        if (this.matchesSymbol("*")) {
          const o = this.index;
          this.consume();
          const s = this.current();
          if (s?.kind === "number" && s.value === 1 && typeof s.unit == "string" && (!t.multipliedByUnit || t.multipliedByUnit === s.unit.toLowerCase())) {
            this.consume();
            const i = M(this.win, s.unit.toLowerCase(), q(t));
            return this.leaves.push({
              slot: t,
              value: i
            }), i;
          }
          this.index = o;
        }
        const n = M(this.win, "number", q(t));
        return this.leaves.push({
          slot: t,
          value: n
        }), n;
      }
      const r = this.typedByMarker.get(e.marker);
      if (r) return r.value;
      throw new SyntaxError(`Unknown style slot "${e.marker}"`);
    }
    if (e.kind === "symbol" && e.value === "(") {
      const t = this.parseSum();
      return this.consumeSymbol(")"), t;
    }
    if (e.kind === "identifier") return this.parseFunction(e.value);
    throw new SyntaxError("Expected a Typed OM numeric value");
  }
  parseFunction(e) {
    if (this.consumeSymbol("("), e === "calc") {
      const r = this.parseSum();
      return this.consumeSymbol(")"), r;
    }
    const t = [];
    if (!this.matchesSymbol(")"))
      for (t.push(this.parseSum()); this.matchesSymbol(","); )
        this.consume(), t.push(this.parseSum());
    if (this.consumeSymbol(")"), e === "min") {
      if (t.length === 0) throw new SyntaxError("min() requires a value");
      return this.createMath("CSSMathMin", ...t);
    }
    if (e === "max") {
      if (t.length === 0) throw new SyntaxError("max() requires a value");
      return this.createMath("CSSMathMax", ...t);
    }
    if (e === "clamp") {
      if (t.length !== 3) throw new SyntaxError("clamp() requires three values");
      return this.createMath("CSSMathClamp", t[0], t[1], t[2]);
    }
    throw new SyntaxError(`Unsupported Typed OM function "${e}"`);
  }
}, Yr = (e, t, r, n) => {
  const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  for (const i of r) o.set(i.marker, i);
  for (const i of n) s.set(i.marker, i);
  return new xt(gt(e), t, o, s).parse();
}, Qr = (e) => e.trim().toLowerCase() === "transform", Xr = (e, t, r, n) => {
  const o = gt(e), s = [], i = [], a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const h of r) a.set(h.marker, h);
  for (const h of n) l.set(h.marker, h);
  const f = () => M(t, "px", 0), u = () => M(t, "number", 1);
  let d = 0;
  const S = () => o[d], x = () => {
    const h = o[d];
    if (!h) throw new SyntaxError("Unexpected end of transform expression");
    return d++, h;
  }, w = (h) => {
    const c = x();
    if (c.kind !== "symbol" || c.value !== h) throw new SyntaxError(`Expected "${h}"`);
  }, p = () => {
    const h = d;
    let c = 0;
    for (; d < o.length; ) {
      const E = o[d];
      if (E.kind === "symbol" && E.value === "(") {
        c++, d++;
        continue;
      }
      if (E.kind === "symbol" && E.value === ")") {
        if (c === 0) break;
        c--, d++;
        continue;
      }
      if (E.kind === "symbol" && E.value === "," && c === 0) break;
      d++;
    }
    const b = o.slice(h, d);
    if (b.length === 0) throw new SyntaxError("Empty transform function argument");
    const m = new xt(b, t, a, l).parse();
    return s.push(...m.leaves), m.root;
  }, y = () => {
    const h = [];
    if (w("("), !(S()?.kind === "symbol" && S()?.value === ")"))
      for (h.push(p()); S()?.kind === "symbol" && S()?.value === ","; )
        x(), h.push(p());
    return w(")"), h;
  }, v = (h, c) => {
    const b = (m) => {
      const E = Y(t, m);
      if (typeof E != "function") throw new TypeError(`${m} is not supported`);
      return E;
    };
    switch (h) {
      case "translate": {
        const m = b("CSSTranslate");
        if (c.length === 1) return new m(c[0], f());
        if (c.length === 2) return new m(c[0], c[1]);
        if (c.length === 3) return new m(c[0], c[1], c[2]);
        throw new SyntaxError("translate() expects 1..3 args");
      }
      case "translatex":
        return new (b("CSSTranslate"))(c[0], f());
      case "translatey":
        return new (b("CSSTranslate"))(f(), c[0]);
      case "translatez":
        return new (b("CSSTranslate"))(f(), f(), c[0]);
      case "translate3d":
        if (c.length !== 3) throw new SyntaxError("translate3d() expects 3 args");
        return new (b("CSSTranslate"))(c[0], c[1], c[2]);
      case "scale": {
        const m = b("CSSScale");
        if (c.length === 1) return new m(c[0], c[0]);
        if (c.length === 2) return new m(c[0], c[1]);
        if (c.length === 3) return new m(c[0], c[1], c[2]);
        throw new SyntaxError("scale() expects 1..3 args");
      }
      case "scalex":
        return new (b("CSSScale"))(c[0], u());
      case "scaley":
        return new (b("CSSScale"))(u(), c[0]);
      case "scalez":
        return new (b("CSSScale"))(u(), u(), c[0]);
      case "scale3d":
        if (c.length !== 3) throw new SyntaxError("scale3d() expects 3 args");
        return new (b("CSSScale"))(c[0], c[1], c[2]);
      case "rotate": {
        const m = b("CSSRotate");
        if (c.length === 1) return new m(c[0]);
        if (c.length === 4) return new m(c[0], c[1], c[2], c[3]);
        throw new SyntaxError("rotate() expects 1 or 4 args");
      }
      case "rotatex":
        return new (b("CSSRotate"))(u(), M(t, "number", 0), M(t, "number", 0), c[0]);
      case "rotatey":
        return new (b("CSSRotate"))(M(t, "number", 0), u(), M(t, "number", 0), c[0]);
      case "rotatez":
        return new (b("CSSRotate"))(M(t, "number", 0), M(t, "number", 0), u(), c[0]);
      case "rotate3d":
        if (c.length !== 4) throw new SyntaxError("rotate3d() expects 4 args");
        return new (b("CSSRotate"))(c[0], c[1], c[2], c[3]);
      case "skew": {
        const m = b("CSSSkew");
        if (c.length === 1) return new m(c[0], M(t, "deg", 0));
        if (c.length === 2) return new m(c[0], c[1]);
        throw new SyntaxError("skew() expects 1..2 args");
      }
      case "skewx":
        return new (b("CSSSkewX"))(c[0]);
      case "skewy":
        return new (b("CSSSkewY"))(c[0]);
      case "perspective":
        return new (b("CSSPerspective"))(c[0]);
      default:
        throw new SyntaxError(`Unsupported transform function "${h}"`);
    }
  };
  for (; d < o.length; ) {
    const h = x();
    if (h.kind !== "identifier") throw new SyntaxError("Expected a transform function name");
    const c = y();
    i.push(v(h.value, c));
  }
  if (i.length === 0) throw new SyntaxError("Empty transform list");
  const C = Y(t, "CSSTransformValue");
  if (typeof C != "function") throw new TypeError("CSSTransformValue is not supported");
  return {
    root: new C(i),
    leaves: s
  };
}, Ye = (e, t, r, n, o) => Qr(e) ? Xr(t, r, n, o) : Yr(t, r, n, o), he = (e, t) => {
  for (const r of t) {
    const n = e.get(r.slot.marker);
    n ? n.push(r) : e.set(r.slot.marker, [r]);
  }
}, ye = (e, t, r) => e.map((n) => ({
  slot: n.slot,
  value: n.value,
  property: t,
  root: r
})), Gr = (e, t, r, n, o, s) => {
  const i = e.ownerDocument.createElement("span");
  i.style.cssText = t, qr(e, "");
  const a = e, l = a.attributeStyleMap ?? a.styleMap, f = e.ownerDocument.defaultView ?? globalThis, u = f?.CSSStyleValue ?? globalThis.CSSStyleValue, d = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Set(), x = [], w = /* @__PURE__ */ new Set();
  for (const p of s) {
    let y = null;
    for (let v = 0; v < i.style.length; v++) {
      const C = i.style.item(v), h = i.style.getPropertyValue(C);
      if (de(h, p.marker)) {
        y = {
          mode: "property",
          target: C
        }, e.style.setProperty(C, Ke(p.value.value)), w.add(C);
        break;
      }
      if (pe(h, p.marker, p.multipliedByUnit)) {
        y = {
          mode: "property",
          target: C,
          unit: p.multipliedByUnit
        }, e.style.setProperty(C, Ke(p.value.value, p.multipliedByUnit)), w.add(C);
        break;
      }
    }
    if (!y) {
      const v = Number(p.value.value) || 0;
      tn(f, p.marker, v), e.style.setProperty(p.marker, String(v)), y = {
        mode: "custom-property",
        target: p.marker
      };
    }
    x.push(p.value.attach(e, y));
  }
  for (let p = 0; p < i.style.length; p++) {
    const y = i.style.item(p);
    if (w.has(y)) continue;
    const v = i.style.getPropertyValue(y), C = i.style.getPropertyPriority(y), h = r.filter((g) => _e(v, g.marker)), c = n.filter((g) => _e(v, g.marker));
    if (h.length === 0 && c.length === 0) {
      e.style.setProperty(y, v, C);
      continue;
    }
    const b = l?.set && !C && !y.startsWith("--");
    let m = !1;
    if (b && c.length > 0) try {
      const g = c.length === 1 && h.length === 0 ? c[0] : null;
      if (g && pe(v, g.marker, g.multipliedByUnit)) {
        const k = M(f, g.multipliedByUnit, q(g));
        l.set(y, k), he(d, ye([{
          slot: g,
          value: k
        }], y, k)), m = !0;
      } else if (g && de(v, g.marker)) {
        const k = M(f, "number", q(g));
        l.set(y, k), he(d, ye([{
          slot: g,
          value: k
        }], y, k)), m = !0;
      } else {
        const k = Ye(y, v, f, c, h);
        l.set(y, k.root), he(d, ye(k.leaves, y, k.root)), m = !0;
      }
    } catch {
    }
    if (m) continue;
    if (b && c.length === 0 && h.length > 0) try {
      const g = h.length === 1 ? h[0] : null;
      if (g && de(v, g.marker))
        l.set(y, g.value), m = !0;
      else if (g && pe(v, g.marker, g.multipliedByUnit)) {
        const k = Y(f, "CSSMathProduct");
        if (typeof k != "function") throw new TypeError("CSSMathProduct is not supported");
        const Ct = new k(g.value, M(f, g.multipliedByUnit, 1));
        l.set(y, Ct), m = !0;
      } else {
        try {
          const k = Ye(y, v, f, [], h);
          l.set(y, k.root);
        } catch {
          const k = Ze(v, h);
          Kr(l, u, y, k);
        }
        m = !0;
      }
    } catch {
    }
    if (m) continue;
    const E = Ze(v, h);
    e.style.setProperty(y, E, C);
    for (const g of c) S.add(g.marker);
  }
  for (const p of n) {
    const y = d.get(p.marker) ?? [], v = S.has(p.marker);
    if (y.length === 0 && !v) continue;
    const C = we(e, p.marker, p.value, function(...h) {
      if (y.length > 0) try {
        const c = q(p), b = /* @__PURE__ */ new Map();
        for (const m of y)
          m.value.value = c, b.set(m.property, m.root);
        if (l?.set) for (const [m, E] of b) l.set(m, E);
      } catch {
      }
      v && qe.apply(this, h);
    });
    x.push(C);
  }
  for (const p of S) {
    if (n.some((v) => v.marker === p)) continue;
    const y = o.get(p);
    y != null && x.push(we(e, p, y, qe));
  }
  return jr(e), () => {
    for (const p of x) p?.();
  };
}, F = (e) => {
  const [t, r, n] = e, o = document.createElement("div");
  return t(o), o.style.cssText;
}, xe = (e, ...t) => {
  const r = zr++, n = [], o = /* @__PURE__ */ new Map(), s = [], i = [], a = [], l = [], f = new Array(e.length).fill(0);
  for (let d = 0; d < e.length; d++) {
    if (a.push(e[d].slice(f[d])), d >= t.length) continue;
    const S = t[d], x = e[d + 1] ?? "", w = Wr(x);
    if (I(S)) {
      const p = `--fest-typed-${r}-${s.length}`;
      s.push({
        marker: p,
        value: S,
        multipliedByUnit: w?.normalized
      }), w ? (a.push(`calc(var(${p}) * 1${w.authored})`), f[d + 1] += w.length) : a.push(`var(${p})`);
      continue;
    }
    if (Nr(S)) {
      const p = `--fest-anim-${r}-${l.length}`;
      w ? (a.push(`calc(var(${p}) * 1${w.authored})`), f[d + 1] += w.length) : a.push(`var(${p})`), n.push(`@property ${p} { syntax: "<number>"; initial-value: ${Number(S.value) || 0}; inherits: false; };`), l.push({
        marker: p,
        value: S,
        multipliedByUnit: w?.normalized
      });
      continue;
    }
    if (Re(S)) {
      const p = `--fest-ref-${r}-${i.length}`;
      i.push({
        marker: p,
        value: S,
        multipliedByUnit: w?.normalized
      }), w ? (a.push(`calc(var(${p}) * 1${w.authored})`), f[d + 1] += w.length) : a.push(`var(${p})`);
      const y = Zr(S);
      n.push(`@property ${p} { syntax: "<number>"; initial-value: ${y}; inherits: true; };`), o.set(p, S);
      continue;
    }
    typeof S != "object" && typeof S != "function" && S != null && String(S).trim() !== "" && a.push(String(S));
  }
  const u = [
    (d) => Gr(d, a.join(""), s, i, o, l),
    n,
    o
  ];
  return u[Symbol.toStringTag] = () => F(u), u[Symbol.toPrimitive] = (d) => d === "string" ? F(u) : u[0], u.toString = () => F(u), u.valueOf = () => F(u), Object.defineProperty(u, "cssText", {
    get: () => F(u),
    set: (d) => {
      console.log("set cssText", d);
      const [S, x, w] = u, p = document.createElement("div");
      S(p), p.style.cssText = d;
    },
    configurable: !0,
    enumerable: !0
  }), u;
}, Un = (e, ...t) => xe(e, ...t), Jr = (e, t) => {
  const r = [], n = [], o = /#\{(\d+)\}/g;
  let s = 0, i;
  for (; (i = o.exec(e)) != null; ) {
    const a = Number.parseInt(i[1], 10);
    !Number.isSafeInteger(a) || a < 0 || (r.push(e.slice(s, i.index)), n.push(t[a]), s = i.index + i[0].length);
  }
  return n.length === 0 ? null : (r.push(e.slice(s)), {
    strings: r,
    values: n
  });
}, en = (e, t) => {
  let r = e[0] ?? "";
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    o != null && (r += String(o)), r += e[n + 1] ?? "";
  }
  return r;
}, On = (e, t) => {
  const r = Jr(e, t);
  if (!r) return null;
  const { strings: n, values: o } = r;
  return o.length === 1 && (n[0] ?? "").trim() === "" && (n[1] ?? "").trim() === "" && !He(o[0]) && !I(o[0]) ? Fr(o[0]) ? {
    kind: "template",
    binding: o[0]
  } : {
    kind: "direct",
    value: o[0]
  } : o.some((s) => Re(s) || I(s)) ? {
    kind: "template",
    binding: xe(n, ...o)
  } : o.every(He) ? {
    kind: "static",
    cssText: en(n, o)
  } : {
    kind: "template",
    binding: xe(n, ...o)
  };
}, Vn = (e, t) => {
  const r = Array.isArray(t) ? t[0] : t;
  if (typeof r != "function") return () => {
  };
  const n = r(e);
  return () => {
    if (typeof n == "function") {
      n();
      return;
    }
    n?.unbind?.();
  };
}, Qe = /* @__PURE__ */ new Set(), tn = (e, t, r) => {
  if (!Qe.has(t)) {
    Qe.add(t);
    try {
      (e?.CSS ?? CSS)?.registerProperty?.({
        name: t,
        syntax: "<number>",
        initialValue: String(r),
        inherits: !1
      });
    } catch {
    }
  }
};
export {
  kn as A,
  bt as ANIMATABLE_BRAND,
  Br as AnimatableValue,
  bn as OWNER,
  xe as S,
  ae as addAdoptedSheetToElement,
  P as adoptedBlobMap,
  ze as adoptedLayerMap,
  T as adoptedMap,
  Ne as adoptedSelectorMap,
  J as adoptedShadowLayerMap,
  Fe as adoptedShadowSelectorMap,
  be as adoptedStyleSheetsCache,
  Pn as animatable,
  Mn as animate,
  qr as applyNormalizedInlineStyle,
  Vn as bindStyle,
  B as blobURLMap,
  $ as cacheMap,
  On as compileInlineStyleAttribute,
  Un as css,
  U as cssTextForAdoptedSheet,
  Ue as cssTextRequiresInlineStyleElement,
  En as defineAnimation,
  Q as doAnimation,
  H as ensureAdoptedSheetContent,
  br as ensureHostStyles,
  fr as fetchAndCache,
  dr as fetchAsInline,
  gn as getAdoptedStyleRule,
  Sn as getElementZoom,
  vn as getPadding,
  z as getPropertyValue,
  mn as getPxValue,
  rr as getStyleLayer,
  Me as getStyleRule,
  hn as getTransform,
  yn as getTransformOrigin,
  an as hash,
  cn as isAdoptedSheetEmpty,
  Nr as isAnimatableValue,
  wt as isEffectivelyEmptyStyleText,
  I as isNativeCSSStyleValue,
  Re as isReactiveStyleValue,
  Fr as isStyleBinding,
  _ as isStyleHost,
  fn as layerCounter,
  it as loadAsAdopted,
  Dt as loadBlobStyle,
  yt as loadCachedStyles,
  A as loadInlineStyle,
  rt as loadStyleSheet,
  Jt as notifyStyleTreeHosts,
  dn as observeStyleTree,
  Ln as onScroll,
  $n as onView,
  An as parallelAnimations,
  Pe as parseLength,
  tr as parseOrigin,
  Z as parseTime,
  un as preloadStyle,
  ct as promiseOrDirect,
  jr as pruneEmptyStyleAttribute,
  er as registerStyleTreeHook,
  xn as rehydrateAdoptedStyleSheets,
  pn as rehydrateConstructableSheets,
  ie as removeAdopted,
  wr as scheduleEnsureHostStyles,
  Tn as sequenceAnimations,
  ln as setProperty,
  sn as setStyleInRule,
  re as setStyleProperty,
  tt as setStylePropertyFallback,
  Ft as setStylePropertyTyped,
  zt as setStyleRule,
  wn as setStyleRules,
  Ve as setStyleURL,
  Rn as staggerAnimation,
  mr as styleCache,
  vr as styleElementCache,
  lt as supportsConstructableStylesheet
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3R5bGUtbGliLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCAkZ2V0VmFsdWUsICRzZXQsIGNhbWVsVG9LZWJhYiwgZGVyZWYsIGdldE9ySW5zZXJ0Q29tcHV0ZWQsIGhhbmRsZUxpc3RlbmVycywgaGFzVmFsdWUsIGlzTm90RXF1YWwsIGlzVmFsLCBpc1ZhbHVlVW5pdCwgdG9SZWYsIHRyeVN0cmluZ0FzTnVtYmVyIH0gZnJvbSBcIkBmZXN0LWxpYi9jb3JlXCI7XG5pbXBvcnQgeyBEb3VibGVXZWFrTWFwLCBhZGRUb0NhbGxDaGFpbiwgYWZmZWN0ZWQgfSBmcm9tIFwiQGZlc3QtbGliL29iamVjdFwiO1xuaW1wb3J0IHsgaGFuZGxlQXR0cmlidXRlLCBoYW5kbGVQcm9wZXJ0eSwgb2JzZXJ2ZUF0dHJpYnV0ZSB9IGZyb20gXCJAZmVzdC1saWIvZG9tXCI7XG5cbi8vI3JlZ2lvbiBzcmMvcHJvcGVydHkudHNcbnZhciBpc05hdGl2ZUNTU1N0eWxlVmFsdWUkMSA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRjb25zdCBDU1NTdHlsZVZhbHVlQ3RvciA9IGdsb2JhbFRoaXMuQ1NTU3R5bGVWYWx1ZTtcblx0XHRpZiAodHlwZW9mIENTU1N0eWxlVmFsdWVDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlQ3RvcikgcmV0dXJuIHRydWU7XG5cdFx0Zm9yIChsZXQgcHJvdG90eXBlID0gdmFsdWU7IHByb3RvdHlwZTsgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkpIGlmIChwcm90b3R5cGU/LmNvbnN0cnVjdG9yPy5uYW1lID09PSBcIkNTU1N0eWxlVmFsdWVcIikgcmV0dXJuIHRydWU7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBpc1JlYWN0aXZlU3R5bGVWYWx1ZSQxID0gKHZhbHVlKSA9PiB7XG5cdGlmICh2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCBpc05hdGl2ZUNTU1N0eWxlVmFsdWUkMSh2YWx1ZSkpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gXCJ2YWx1ZVwiIGluIHZhbHVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgZ2V0V2luZG93Q29uc3RydWN0b3IkMSA9ICh3aW4sIG5hbWUpID0+IHtcblx0cmV0dXJuIHdpbj8uW25hbWVdID8/IGdsb2JhbFRoaXM/LltuYW1lXTtcbn07XG52YXIgZ2V0Q1NTVW5pdEZhY3RvcnlOYW1lJDEgPSAodW5pdCkgPT4ge1xuXHRzd2l0Y2ggKHVuaXQudG9Mb3dlckNhc2UoKSkge1xuXHRcdGNhc2UgXCIlXCI6IHJldHVybiBcInBlcmNlbnRcIjtcblx0XHRjYXNlIFwicVwiOiByZXR1cm4gXCJRXCI7XG5cdFx0Y2FzZSBcImh6XCI6IHJldHVybiBcIkh6XCI7XG5cdFx0Y2FzZSBcImtoelwiOiByZXR1cm4gXCJrSHpcIjtcblx0XHRjYXNlIFwiZnJcIjogcmV0dXJuIFwiZmxleFwiO1xuXHRcdGRlZmF1bHQ6IHJldHVybiB1bml0LnRvTG93ZXJDYXNlKCk7XG5cdH1cbn07XG52YXIgZ2V0Q1NTVW5pdENvbnN0cnVjdG9yTmFtZSQxID0gKHVuaXQpID0+IHtcblx0cmV0dXJuIHVuaXQudG9Mb3dlckNhc2UoKSA9PT0gXCIlXCIgPyBcInBlcmNlbnRcIiA6IHVuaXQudG9Mb3dlckNhc2UoKTtcbn07XG52YXIgY3JlYXRlVHlwZWRVbml0VmFsdWUkMSA9ICh3aW4sIHVuaXQsIHZhbHVlKSA9PiB7XG5cdGNvbnN0IENTU05hbWVzcGFjZSA9IHdpbj8uQ1NTO1xuXHRjb25zdCBmYWN0b3J5TmFtZSA9IGdldENTU1VuaXRGYWN0b3J5TmFtZSQxKHVuaXQpO1xuXHRjb25zdCBmYWN0b3J5ID0gQ1NTTmFtZXNwYWNlPy5bZmFjdG9yeU5hbWVdO1xuXHRpZiAodHlwZW9mIGZhY3RvcnkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhY3RvcnkuY2FsbChDU1NOYW1lc3BhY2UsIHZhbHVlKTtcblx0Y29uc3QgQ1NTVW5pdFZhbHVlQ3RvciA9IGdldFdpbmRvd0NvbnN0cnVjdG9yJDEod2luLCBcIkNTU1VuaXRWYWx1ZVwiKTtcblx0aWYgKHR5cGVvZiBDU1NVbml0VmFsdWVDdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYFR5cGVkIE9NIGRvZXMgbm90IHN1cHBvcnQgQ1NTIHVuaXQgXCIke3VuaXR9XCJgKTtcblx0cmV0dXJuIG5ldyBDU1NVbml0VmFsdWVDdG9yKHZhbHVlLCBnZXRDU1NVbml0Q29uc3RydWN0b3JOYW1lJDEodW5pdCkpO1xufTtcbnZhciB0b2tlbml6ZU51bWVyaWNDU1MkMSA9IChzb3VyY2UpID0+IHtcblx0Y29uc3QgdG9rZW5zID0gW107XG5cdGxldCBjdXJzb3IgPSAwO1xuXHR3aGlsZSAoY3Vyc29yIDwgc291cmNlLmxlbmd0aCkge1xuXHRcdGNvbnN0IHJlc3QgPSBzb3VyY2Uuc2xpY2UoY3Vyc29yKTtcblx0XHRjb25zdCB3aGl0ZXNwYWNlID0gL15cXHMrLy5leGVjKHJlc3QpO1xuXHRcdGlmICh3aGl0ZXNwYWNlKSB7XG5cdFx0XHRjdXJzb3IgKz0gd2hpdGVzcGFjZVswXS5sZW5ndGg7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgbnVtYmVyID0gL14oPzpcXGQqXFwuXFxkK3xcXGQrXFwuP1xcZCopKD86W2VFXVsrLV0/XFxkKyk/Ly5leGVjKHJlc3QpO1xuXHRcdGlmIChudW1iZXIpIHtcblx0XHRcdGN1cnNvciArPSBudW1iZXJbMF0ubGVuZ3RoO1xuXHRcdFx0Y29uc3QgdW5pdE1hdGNoID0gL14oJXxbYS16QS1aXSspLy5leGVjKHNvdXJjZS5zbGljZShjdXJzb3IpKTtcblx0XHRcdGNvbnN0IHVuaXQgPSB1bml0TWF0Y2g/LlswXSA/PyBudWxsO1xuXHRcdFx0aWYgKHVuaXRNYXRjaCkgY3Vyc29yICs9IHVuaXRNYXRjaFswXS5sZW5ndGg7XG5cdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdGtpbmQ6IFwibnVtYmVyXCIsXG5cdFx0XHRcdHZhbHVlOiBOdW1iZXIobnVtYmVyWzBdKSxcblx0XHRcdFx0dW5pdDogdW5pdCA9PSBudWxsID8gbnVsbCA6IHVuaXQudG9Mb3dlckNhc2UoKVxuXHRcdFx0fSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgaWRlbnRpZmllciA9IC9eW2EtekEtWl9dW2EtekEtWjAtOV8tXSovLmV4ZWMocmVzdCk7XG5cdFx0aWYgKGlkZW50aWZpZXIpIHtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0a2luZDogXCJpZGVudGlmaWVyXCIsXG5cdFx0XHRcdHZhbHVlOiBpZGVudGlmaWVyWzBdLnRvTG93ZXJDYXNlKClcblx0XHRcdH0pO1xuXHRcdFx0Y3Vyc29yICs9IGlkZW50aWZpZXJbMF0ubGVuZ3RoO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IHN5bWJvbCA9IHJlc3RbMF07XG5cdFx0aWYgKFtcblx0XHRcdFwiK1wiLFxuXHRcdFx0XCItXCIsXG5cdFx0XHRcIipcIixcblx0XHRcdFwiL1wiLFxuXHRcdFx0XCIoXCIsXG5cdFx0XHRcIilcIixcblx0XHRcdFwiLFwiXG5cdFx0XS5pbmNsdWRlcyhzeW1ib2wpKSB7XG5cdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdGtpbmQ6IFwic3ltYm9sXCIsXG5cdFx0XHRcdHZhbHVlOiBzeW1ib2xcblx0XHRcdH0pO1xuXHRcdFx0Y3Vyc29yKys7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbnN1cHBvcnRlZCB0b2tlbiBuZWFyIFwiJHtyZXN0fVwiYCk7XG5cdH1cblx0cmV0dXJuIHRva2Vucztcbn07XG52YXIgTnVtZXJpY1R5cGVkT01QYXJzZXIkMSA9IGNsYXNzIHtcblx0dG9rZW5zO1xuXHR3aW47XG5cdGluZGV4ID0gMDtcblx0Y29uc3RydWN0b3IodG9rZW5zLCB3aW4pIHtcblx0XHR0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLndpbiA9IHdpbjtcblx0fVxuXHRwYXJzZSgpIHtcblx0XHRjb25zdCByb290ID0gdGhpcy5wYXJzZVN1bSgpO1xuXHRcdGlmICh0aGlzLmluZGV4ICE9PSB0aGlzLnRva2Vucy5sZW5ndGgpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlVuZXhwZWN0ZWQgdHJhaWxpbmcgZXhwcmVzc2lvblwiKTtcblx0XHRyZXR1cm4gcm9vdDtcblx0fVxuXHRjdXJyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblx0fVxuXHRjb25zdW1lKCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cdFx0aWYgKCF0b2tlbikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvblwiKTtcblx0XHR0aGlzLmluZGV4Kys7XG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cdGNvbnN1bWVTeW1ib2woc3ltYm9sKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRpZiAodG9rZW4ua2luZCAhPT0gXCJzeW1ib2xcIiB8fCB0b2tlbi52YWx1ZSAhPT0gc3ltYm9sKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEV4cGVjdGVkIFwiJHtzeW1ib2x9XCJgKTtcblx0fVxuXHRtYXRjaGVzU3ltYm9sKHN5bWJvbCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cdFx0cmV0dXJuIHRva2VuPy5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBzeW1ib2w7XG5cdH1cblx0Y3JlYXRlTWF0aChuYW1lLCAuLi52YWx1ZXMpIHtcblx0XHRjb25zdCBDb25zdHJ1Y3RvciA9IGdldFdpbmRvd0NvbnN0cnVjdG9yJDEodGhpcy53aW4sIG5hbWUpO1xuXHRcdGlmICh0eXBlb2YgQ29uc3RydWN0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtuYW1lfSBpcyBub3Qgc3VwcG9ydGVkYCk7XG5cdFx0cmV0dXJuIG5ldyBDb25zdHJ1Y3RvciguLi52YWx1ZXMpO1xuXHR9XG5cdHBhcnNlU3VtKCkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMucGFyc2VQcm9kdWN0KCk7XG5cdFx0d2hpbGUgKHRoaXMubWF0Y2hlc1N5bWJvbChcIitcIikgfHwgdGhpcy5tYXRjaGVzU3ltYm9sKFwiLVwiKSkge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3IgPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRcdGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZVByb2R1Y3QoKTtcblx0XHRcdGlmIChvcGVyYXRvci5raW5kICE9PSBcInN5bWJvbFwiKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJFeHBlY3RlZCBzdW0gb3BlcmF0b3JcIik7XG5cdFx0XHRpZiAob3BlcmF0b3IudmFsdWUgPT09IFwiK1wiKSB2YWx1ZSA9IHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhTdW1cIiwgdmFsdWUsIHJpZ2h0KTtcblx0XHRcdGVsc2UgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoU3VtXCIsIHZhbHVlLCB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoTmVnYXRlXCIsIHJpZ2h0KSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRwYXJzZVByb2R1Y3QoKSB7XG5cdFx0bGV0IHZhbHVlID0gdGhpcy5wYXJzZVVuYXJ5KCk7XG5cdFx0d2hpbGUgKHRoaXMubWF0Y2hlc1N5bWJvbChcIipcIikgfHwgdGhpcy5tYXRjaGVzU3ltYm9sKFwiL1wiKSkge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3IgPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRcdGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZVVuYXJ5KCk7XG5cdFx0XHRpZiAob3BlcmF0b3Iua2luZCAhPT0gXCJzeW1ib2xcIikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRXhwZWN0ZWQgcHJvZHVjdCBvcGVyYXRvclwiKTtcblx0XHRcdGlmIChvcGVyYXRvci52YWx1ZSA9PT0gXCIqXCIpIHZhbHVlID0gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aFByb2R1Y3RcIiwgdmFsdWUsIHJpZ2h0KTtcblx0XHRcdGVsc2UgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoUHJvZHVjdFwiLCB2YWx1ZSwgdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aEludmVydFwiLCByaWdodCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0cGFyc2VVbmFyeSgpIHtcblx0XHRpZiAodGhpcy5tYXRjaGVzU3ltYm9sKFwiK1wiKSkge1xuXHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVVuYXJ5KCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm1hdGNoZXNTeW1ib2woXCItXCIpKSB7XG5cdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoTmVnYXRlXCIsIHRoaXMucGFyc2VVbmFyeSgpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyc2VQcmltYXJ5KCk7XG5cdH1cblx0cGFyc2VQcmltYXJ5KCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0aWYgKHRva2VuLmtpbmQgPT09IFwibnVtYmVyXCIpIHJldHVybiBjcmVhdGVUeXBlZFVuaXRWYWx1ZSQxKHRoaXMud2luLCB0b2tlbi51bml0ID8/IFwibnVtYmVyXCIsIHRva2VuLnZhbHVlKTtcblx0XHRpZiAodG9rZW4ua2luZCA9PT0gXCJzeW1ib2xcIiAmJiB0b2tlbi52YWx1ZSA9PT0gXCIoXCIpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZVN1bSgpO1xuXHRcdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHRva2VuLmtpbmQgPT09IFwiaWRlbnRpZmllclwiKSByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKHRva2VuLnZhbHVlKTtcblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJFeHBlY3RlZCBhIG51bWVyaWMgdmFsdWVcIik7XG5cdH1cblx0cGFyc2VGdW5jdGlvbihuYW1lKSB7XG5cdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKFwiKTtcblx0XHRpZiAobmFtZSA9PT0gXCJjYWxjXCIpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZVN1bSgpO1xuXHRcdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0Y29uc3QgdmFsdWVzID0gW107XG5cdFx0aWYgKCF0aGlzLm1hdGNoZXNTeW1ib2woXCIpXCIpKSB7XG5cdFx0XHR2YWx1ZXMucHVzaCh0aGlzLnBhcnNlU3VtKCkpO1xuXHRcdFx0d2hpbGUgKHRoaXMubWF0Y2hlc1N5bWJvbChcIixcIikpIHtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRcdHZhbHVlcy5wdXNoKHRoaXMucGFyc2VTdW0oKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY29uc3VtZVN5bWJvbChcIilcIik7XG5cdFx0aWYgKG5hbWUgPT09IFwibWluXCIpIHtcblx0XHRcdGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJtaW4oKSByZXF1aXJlcyBhIHZhbHVlXCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhNaW5cIiwgLi4udmFsdWVzKTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT09IFwibWF4XCIpIHtcblx0XHRcdGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJtYXgoKSByZXF1aXJlcyBhIHZhbHVlXCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhNYXhcIiwgLi4udmFsdWVzKTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT09IFwiY2xhbXBcIikge1xuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBTeW50YXhFcnJvcihcImNsYW1wKCkgcmVxdWlyZXMgdGhyZWUgdmFsdWVzXCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhDbGFtcFwiLCB2YWx1ZXNbMF0sIHZhbHVlc1sxXSwgdmFsdWVzWzJdKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbnN1cHBvcnRlZCBmdW5jdGlvbiBcIiR7bmFtZX1cImApO1xuXHR9XG59O1xudmFyIHBhcnNlVG9UeXBlZE9NID0gKGNzc1ZhbHVlLCB3aW4pID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB0b2tlbnMgPSB0b2tlbml6ZU51bWVyaWNDU1MkMShjc3NWYWx1ZSk7XG5cdFx0cmV0dXJuIG5ldyBOdW1lcmljVHlwZWRPTVBhcnNlciQxKHRva2Vucywgd2luKS5wYXJzZSgpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNUeXBlZE9NID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIENTU1VuaXRWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIjtcbnZhciBpc1VuaXRWYWx1ZSA9ICh2YWwpID0+IGhhc1R5cGVkT00gJiYgdmFsIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xudmFyIHNldFByb3BlcnR5SWZOb3RFcXVhbCA9IChzdHlsZVJlZiwga2ViYWIsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIXN0eWxlUmVmIHx8ICFrZWJhYikgcmV0dXJuO1xuXHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdGlmIChzdHlsZVJlZi5nZXRQcm9wZXJ0eVZhbHVlKGtlYmFiKSAhPT0gXCJcIikgc3R5bGVSZWYucmVtb3ZlUHJvcGVydHkoa2ViYWIpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3R5bGVSZWYuZ2V0UHJvcGVydHlWYWx1ZShrZWJhYikgIT09IHZhbHVlKSBzdHlsZVJlZi5zZXRQcm9wZXJ0eShrZWJhYiwgdmFsdWUsIGltcG9ydGFuY2UpO1xufTtcbnZhciBzZXRTdHlsZVByb3BlcnR5VHlwZWQgPSAoZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UgPSBcIlwiKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhbmFtZSkgcmV0dXJuIGVsZW1lbnQ7XG5cdGNvbnN0IGtlYmFiID0gY2FtZWxUb0tlYmFiKG5hbWUpO1xuXHRjb25zdCBzdHlsZVJlZiA9IGVsZW1lbnQuc3R5bGU7XG5cdGNvbnN0IHN0eWxlTWFwUmVmID0gZWxlbWVudC5hdHRyaWJ1dGVTdHlsZU1hcCA/PyBlbGVtZW50LnN0eWxlTWFwO1xuXHRpZiAoIWhhc1R5cGVkT00gfHwgIXN0eWxlTWFwUmVmKSByZXR1cm4gc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcblx0Y29uc3Qgd2luID0gZWxlbWVudC5vd25lckRvY3VtZW50Py5kZWZhdWx0VmlldyA/PyBnbG9iYWxUaGlzO1xuXHRsZXQgdmFsID0gaGFzVmFsdWUodmFsdWUpICYmIGlzUmVhY3RpdmVTdHlsZVZhbHVlJDEodmFsdWUpID8gdmFsdWUudmFsdWUgOiB2YWx1ZTtcblx0aWYgKHZhbCA9PSBudWxsKSB7XG5cdFx0c3R5bGVNYXBSZWYuZGVsZXRlPy4oa2ViYWIpO1xuXHRcdGlmIChzdHlsZVJlZikgc2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgbnVsbCwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0aWYgKGlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSQxKHZhbCkpIHtcblx0XHRjb25zdCBvbGQgPSBzdHlsZU1hcFJlZi5nZXQoa2ViYWIpO1xuXHRcdGlmIChpc1VuaXRWYWx1ZSh2YWwpICYmIGlzVW5pdFZhbHVlKG9sZCkpIHtcblx0XHRcdGlmIChvbGQudmFsdWUgPT09IHZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gdmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdH0gZWxzZSBpZiAob2xkID09PSB2YWwpIHJldHVybiBlbGVtZW50O1xuXHRcdHN0eWxlTWFwUmVmLnNldChrZWJhYiwgdmFsKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuXHRcdGlmIChDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKHZhbCk7XG5cdFx0XHRjb25zdCBvbGQgPSBzdHlsZU1hcFJlZi5nZXQoa2ViYWIpO1xuXHRcdFx0aWYgKGlzVW5pdFZhbHVlKG9sZCkgJiYgb2xkLnZhbHVlID09PSBuZXdWYWwudmFsdWUgJiYgb2xkLnVuaXQgPT09IG5ld1ZhbC51bml0KSByZXR1cm4gZWxlbWVudDtcblx0XHRcdHN0eWxlTWFwUmVmLnNldChrZWJhYiwgbmV3VmFsKTtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcblx0XHRpZiAoL1xcYihjYWxjfG1pbnxtYXh8Y2xhbXApXFxzKlxcKC8udGVzdCh2YWwpKSB7XG5cdFx0XHRjb25zdCBwYXJzZWQgPSBwYXJzZVRvVHlwZWRPTSh2YWwsIHdpbik7XG5cdFx0XHRpZiAocGFyc2VkKSB0cnkge1xuXHRcdFx0XHRzdHlsZU1hcFJlZi5zZXQoa2ViYWIsIHBhcnNlZCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0XHRjb25zdCBtYXliZU51bSA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCk7XG5cdFx0aWYgKHR5cGVvZiBtYXliZU51bSA9PT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKG1heWJlTnVtKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIHZhbCwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRpZiAoIXN0eWxlUmVmKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiBpc1JlYWN0aXZlU3R5bGVWYWx1ZSQxKHZhbHVlKSA/IHZhbHVlLnZhbHVlIDogdmFsdWU7XG5cdGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICYmICFpc05hdGl2ZUNTU1N0eWxlVmFsdWUkMSh2YWwpKSB2YWwgPSB0cnlTdHJpbmdBc051bWJlcih2YWwpID8/IHZhbDtcblx0aWYgKHZhbCA9PSBudWxsKSB7XG5cdFx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgbnVsbCwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0aWYgKGlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSQxKHZhbCkpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0cmV0dXJuIGhhc1R5cGVkT00gPyBzZXRTdHlsZVByb3BlcnR5VHlwZWQoZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpIDogc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9zaGVldHMudHNcbnZhciBzZXRTdHlsZUluUnVsZSA9IChzZWxlY3RvciwgbmFtZSwgdmFsdWUpID0+IHtcblx0cmV0dXJuIHNldFN0eWxlUHJvcGVydHkoZ2V0U3R5bGVSdWxlKHNlbGVjdG9yKSwgbmFtZSwgdmFsdWUpO1xufTtcbnZhciBzZXRTdHlsZVJ1bGUgPSAoc2VsZWN0b3IsIHNoZWV0KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBnZXRTdHlsZVJ1bGUoc2VsZWN0b3IpO1xuXHRPYmplY3QuZW50cmllcyhzaGVldCkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiBzZXRTdHlsZVByb3BlcnR5KHJ1bGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpKTtcblx0cmV0dXJuIHJ1bGU7XG59O1xudmFyIGhhc2ggPSBhc3luYyAoc3RyaW5nKSA9PiB7XG5cdGNvbnN0IGhhc2hCdWZmZXIgPSBhd2FpdCBjcnlwdG8/LnN1YnRsZT8uZGlnZXN0KFwiU0hBLTI1NlwiLCB0eXBlb2Ygc3RyaW5nID09IFwic3RyaW5nXCIgPyBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyaW5nKSA6IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gc3RyaW5nIDogYXdhaXQgc3RyaW5nPy5hcnJheUJ1ZmZlcj8uKCkpO1xuXHRyZXR1cm4gXCJzaGEyNTYtXCIgKyBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpKTtcbn07XG52YXIgbG9hZFN0eWxlU2hlZXQgPSAoaW5saW5lLCBiYXNlLCBsYXllciA9IFwiXCIsIGludGVncml0eSkgPT4ge1xuXHRjb25zdCBsb2FkID0gZmV0Y2hBbmRDYWNoZShpbmxpbmUpO1xuXHRjb25zdCB1cmwgPSB0eXBlb2YgaW5saW5lID09IFwic3RyaW5nXCIgPyBVUkwuY2FuUGFyc2UoaW5saW5lKSA/IGlubGluZSA6IGxvYWQgOiBsb2FkO1xuXHRpZiAoYmFzZT8uWzBdKSBiYXNlWzBdLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKGJhc2UgJiYgdXJsICYmIHR5cGVvZiB1cmwgPT0gXCJzdHJpbmdcIikgc2V0U3R5bGVVUkwoYmFzZSwgdXJsLCBsYXllcik7XG5cdGlmIChiYXNlPy5bMF0gJiYgKCFVUkwuY2FuUGFyc2UoaW5saW5lKSB8fCBpbnRlZ3JpdHkpICYmIGJhc2U/LlswXSBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge31cblx0cmV0dXJuIHByb21pc2VPckRpcmVjdChsb2FkLCAocmVzKSA9PiB7XG5cdFx0aWYgKGJhc2U/LlswXSAmJiByZXMpIHtcblx0XHRcdHNldFN0eWxlVVJMKGJhc2UsIHJlcywgbGF5ZXIpO1xuXHRcdFx0YmFzZT8uWzBdLnNldEF0dHJpYnV0ZShcImxvYWRlZFwiLCBcIlwiKTtcblx0XHR9XG5cdH0pPy5jYXRjaD8uKChlcnJvcikgPT4ge1xuXHRcdGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2FkIHN0eWxlIHNoZWV0OlwiLCBlcnJvcik7XG5cdH0pO1xufTtcbnZhciBsb2FkQmxvYlN0eWxlID0gKGlubGluZSkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIikgOiBudWxsO1xuXHRpZiAoc3R5bGUpIHN0eWxlLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcblx0aWYgKHN0eWxlKSB7XG5cdFx0T2JqZWN0LmFzc2lnbihzdHlsZSwge1xuXHRcdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRcdHR5cGU6IFwidGV4dC9jc3NcIixcblx0XHRcdGNyb3NzT3JpZ2luOiBcInNhbWUtb3JpZ2luXCJcblx0XHR9KTtcblx0XHRzdHlsZS5kYXRhc2V0Lm93bmVyID0gXCJET01cIjtcblx0XHRsb2FkU3R5bGVTaGVldChpbmxpbmUsIFtzdHlsZSwgXCJocmVmXCJdKTtcblx0XHR0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZSk7XG5cdFx0cmV0dXJuIHN0eWxlO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBsb2FkSW5saW5lU3R5bGUgPSAoaW5saW5lLCByb290RWxlbWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmhlYWQgOiBudWxsLCBsYXllciA9IFwiXCIpID0+IHtcblx0Y29uc3QgUExBQ0UgPSByb290RWxlbWVudD8ucXVlcnlTZWxlY3Rvcj8uKFwiaGVhZFwiKSA/PyByb290RWxlbWVudDtcblx0aWYgKHR5cGVvZiBIVE1MSGVhZEVsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBQTEFDRSBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCkgcmV0dXJuIGxvYWRCbG9iU3R5bGUoaW5saW5lKTtcblx0Y29uc3Qgc3R5bGUgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5cdGlmIChzdHlsZSkge1xuXHRcdHN0eWxlLmRhdGFzZXQub3duZXIgPSBcIkRPTVwiO1xuXHRcdGxvYWRTdHlsZVNoZWV0KGlubGluZSwgW3N0eWxlLCBcImlubmVySFRNTFwiXSwgbGF5ZXIpO1xuXHRcdFBMQUNFPy5wcmVwZW5kPy4oc3R5bGUpO1xuXHRcdHJldHVybiBzdHlsZTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgc2V0UHJvcGVydHkgPSAodGFyZ2V0LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0cmV0dXJuIHNldFN0eWxlUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG59O1xudmFyIHByZWxvYWRTdHlsZSA9IChzdHlsZXMpID0+IHtcblx0cmV0dXJuIGxvYWRBc0Fkb3B0ZWQoc3R5bGVzLCBcIlwiKTtcbn07XG52YXIgYWRvcHRlZE1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZE1hcFwiKTtcbnZhciBhZG9wdGVkTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBhZG9wdGVkQmxvYk1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYWRvcHRlZEJsb2JNYXBcIik7XG52YXIgYWRvcHRlZEJsb2JNYXAgPSBnbG9iYWxUaGlzW2Fkb3B0ZWRCbG9iTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYWRvcHRlZEFwcGxpZWRUZXh0U3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkQXBwbGllZFRleHRcIik7XG52YXIgYWRvcHRlZEFwcGxpZWRUZXh0ID0gZ2xvYmFsVGhpc1thZG9wdGVkQXBwbGllZFRleHRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBhZG9wdGVkRmlsbGVkU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkRmlsbGVkXCIpO1xudmFyIGFkb3B0ZWRGaWxsZWQgPSBnbG9iYWxUaGlzW2Fkb3B0ZWRGaWxsZWRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcbnZhciB3cmFwQWRvcHRlZExheWVyID0gKGNzc1RleHQsIGxheWVyTmFtZSkgPT4gbGF5ZXJOYW1lID8gYEBsYXllciAke2xheWVyTmFtZX0geyAke2Nzc1RleHR9IH1gIDogY3NzVGV4dDtcbnZhciByZWFkU2hlZXRSdWxlQ291bnQgPSAoc2hlZXQpID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciByZW1lbWJlckFkb3B0ZWRUZXh0ID0gKHNoZWV0LCBjc3NUZXh0KSA9PiB7XG5cdGFkb3B0ZWRBcHBsaWVkVGV4dC5zZXQoc2hlZXQsIGNzc1RleHQpO1xuXHRhZG9wdGVkRmlsbGVkLmFkZChzaGVldCk7XG59O1xudmFyIGNzc1RleHRGb3JBZG9wdGVkU2hlZXQgPSAoc2hlZXQpID0+IHtcblx0aWYgKCFzaGVldCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHN0b3JlZCA9IGFkb3B0ZWRBcHBsaWVkVGV4dC5nZXQoc2hlZXQpO1xuXHRpZiAoc3RvcmVkKSByZXR1cm4gc3RvcmVkO1xuXHRmb3IgKGNvbnN0IFtrZXksIG1hcHBlZF0gb2YgYWRvcHRlZE1hcCkgaWYgKG1hcHBlZCA9PT0gc2hlZXQgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGtleTtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGlzQWRvcHRlZFNoZWV0RW1wdHkgPSAoc2hlZXQpID0+IHtcblx0aWYgKCFzaGVldCkgcmV0dXJuIHRydWU7XG5cdGNvbnN0IGNvdW50ID0gcmVhZFNoZWV0UnVsZUNvdW50KHNoZWV0KTtcblx0aWYgKGNvdW50ID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBjb3VudCA9PT0gMDtcbn07XG52YXIgZW5zdXJlQWRvcHRlZFNoZWV0Q29udGVudCA9IChzaGVldCwgY3NzVGV4dCkgPT4ge1xuXHRpZiAoIXNoZWV0KSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHRleHQgPSBjc3NUZXh0IHx8IGNzc1RleHRGb3JBZG9wdGVkU2hlZXQoc2hlZXQpO1xuXHRjb25zdCBjb3VudCA9IHJlYWRTaGVldFJ1bGVDb3VudChzaGVldCk7XG5cdGlmIChjb3VudCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoY291bnQgPiAwKSB7XG5cdFx0YWRvcHRlZEZpbGxlZC5hZGQoc2hlZXQpO1xuXHRcdGlmICh0ZXh0ICYmICFhZG9wdGVkQXBwbGllZFRleHQuaGFzKHNoZWV0KSkgYWRvcHRlZEFwcGxpZWRUZXh0LnNldChzaGVldCwgdGV4dCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKCF0ZXh0KSByZXR1cm4gZmFsc2U7XG5cdGlmIChhcHBseUFkb3B0ZWRTdHlsZVRleHQoc2hlZXQsIHRleHQpKSB7XG5cdFx0cmVtZW1iZXJBZG9wdGVkVGV4dChzaGVldCwgdGV4dCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBsYXllckNvdW50ZXJTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGxheWVyQ291bnRlclwiKTtcbnZhciBsYXllckNvdW50ZXIgPSBnbG9iYWxUaGlzW2xheWVyQ291bnRlclN5bWJvbF0gPz89IDA7XG52YXIgYXBwbHlBZG9wdGVkU3R5bGVUZXh0ID0gKHNoZWV0LCBjc3NUZXh0KSA9PiB7XG5cdGlmICghc2hlZXQgfHwgIWNzc1RleHQpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRzaGVldC5yZXBsYWNlU3luYyhjc3NUZXh0KTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zdCBtZXNzYWdlID0gU3RyaW5nKGVycm9yPy5tZXNzYWdlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCEobWVzc2FnZS5pbmNsdWRlcyhcIkBpbXBvcnQgcnVsZXMgYXJlIG5vdCBhbGxvd2VkXCIpIHx8IG1lc3NhZ2UuaW5jbHVkZXMoXCJAaW1wb3J0XCIpICYmIG1lc3NhZ2UuaW5jbHVkZXMoXCJub3QgYWxsb3dlZFwiKSkpIGNvbnNvbGUud2FybihcIltET01dIEZhaWxlZCB0byBhcHBseSBhZG9wdGVkIHN0eWxlc2hlZXQ6XCIsIGVycm9yKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdXJsQ2FuUGFyc2UgPSAodmFsdWUpID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdHlwZW9mIFVSTCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgVVJMLmNhblBhcnNlID09PSBcImZ1bmN0aW9uXCIgJiYgVVJMLmNhblBhcnNlKHZhbHVlKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHNoZWV0Rm9yQmxvYiA9IChibG9iKSA9PiB7XG5cdGxldCBzaGVldCA9IGFkb3B0ZWRCbG9iTWFwLmdldChibG9iKTtcblx0aWYgKCFzaGVldCkge1xuXHRcdHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRhZG9wdGVkQmxvYk1hcC5zZXQoYmxvYiwgc2hlZXQpO1xuXHR9XG5cdHJldHVybiBzaGVldDtcbn07XG52YXIgbG9hZEFzQWRvcHRlZCA9IChzdHlsZXMsIGxheWVyTmFtZSA9IG51bGwpID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gbG9hZEFzQWRvcHRlZFVuc2FmZShzdHlsZXMsIGxheWVyTmFtZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiW0RPTV0gbG9hZEFzQWRvcHRlZCBmYWlsZWRcIiwgZXJyb3IpO1xuXHRcdGlmICh0eXBlb2Ygc3R5bGVzID09PSBcInN0cmluZ1wiKSBsb2FkSW5saW5lU3R5bGUoc3R5bGVzLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBsb2FkQXNBZG9wdGVkVW5zYWZlID0gKHN0eWxlcywgbGF5ZXJOYW1lID0gbnVsbCkgPT4ge1xuXHRpZiAoIXN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXQoKSkge1xuXHRcdGlmICh0eXBlb2Ygc3R5bGVzID09PSBcInN0cmluZ1wiKSBsb2FkSW5saW5lU3R5bGUoc3R5bGVzLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRpZiAodHlwZW9mIHN0eWxlcyA9PT0gXCJzdHJpbmdcIiAmJiBjc3NUZXh0UmVxdWlyZXNJbmxpbmVTdHlsZUVsZW1lbnQoc3R5bGVzKSkge1xuXHRcdGxvYWRJbmxpbmVTdHlsZShzdHlsZXMsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmICh0eXBlb2Ygc3R5bGVzID09IFwic3RyaW5nXCIgJiYgYWRvcHRlZE1hcD8uaGFzPy4oc3R5bGVzKSkge1xuXHRcdGNvbnN0IGNhY2hlZCA9IGFkb3B0ZWRNYXAuZ2V0KHN0eWxlcyk7XG5cdFx0Y29uc3QgYXBwbGllZCA9IGFkb3B0ZWRBcHBsaWVkVGV4dC5nZXQoY2FjaGVkKSB8fCB3cmFwQWRvcHRlZExheWVyKHN0eWxlcywgbGF5ZXJOYW1lKTtcblx0XHRlbnN1cmVBZG9wdGVkU2hlZXRDb250ZW50KGNhY2hlZCwgYXBwbGllZCk7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIWRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhjYWNoZWQpKSBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChjYWNoZWQpO1xuXHRcdHJldHVybiBjYWNoZWQ7XG5cdH1cblx0aWYgKChzdHlsZXMgaW5zdGFuY2VvZiBCbG9iIHx8IHN0eWxlcyBpbnN0YW5jZW9mIEZpbGUpICYmIGFkb3B0ZWRCbG9iTWFwPy5oYXM/LihzdHlsZXMpKSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gYWRvcHRlZEJsb2JNYXAuZ2V0KHN0eWxlcyk7XG5cdFx0ZW5zdXJlQWRvcHRlZFNoZWV0Q29udGVudChjYWNoZWQpO1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzICYmICFkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMuaW5jbHVkZXMoY2FjaGVkKSkgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goY2FjaGVkKTtcblx0XHRyZXR1cm4gY2FjaGVkO1xuXHR9XG5cdGlmICghc3R5bGVzKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgc2hlZXQgPSB0eXBlb2Ygc3R5bGVzID09IFwic3RyaW5nXCIgPyBnZXRPckluc2VydENvbXB1dGVkKGFkb3B0ZWRNYXAsIHN0eWxlcywgKCkgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSkgOiBzaGVldEZvckJsb2Ioc3R5bGVzKTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKHNoZWV0KSkgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRpZiAodHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiICYmICF1cmxDYW5QYXJzZShzdHlsZXMpKSB7XG5cdFx0Y29uc3QgbGF5ZXJXcmFwcGVkID0gd3JhcEFkb3B0ZWRMYXllcihzdHlsZXMsIGxheWVyTmFtZSk7XG5cdFx0YWRvcHRlZE1hcC5zZXQoc3R5bGVzLCBzaGVldCk7XG5cdFx0aWYgKCFhcHBseUFkb3B0ZWRTdHlsZVRleHQoc2hlZXQsIGxheWVyV3JhcHBlZCkpIHtcblx0XHRcdHJlbW92ZUFkb3B0ZWQoc2hlZXQpO1xuXHRcdFx0YWRvcHRlZE1hcC5kZWxldGUoc3R5bGVzKTtcblx0XHRcdGxvYWRJbmxpbmVTdHlsZShzdHlsZXMpO1xuXHRcdH0gZWxzZSByZW1lbWJlckFkb3B0ZWRUZXh0KHNoZWV0LCBsYXllcldyYXBwZWQpO1xuXHRcdHJldHVybiBzaGVldDtcblx0fSBlbHNlIHByb21pc2VPckRpcmVjdChmZXRjaEFzSW5saW5lKHN0eWxlcyksIChjYWNoZWQpID0+IHtcblx0XHRhZG9wdGVkTWFwLnNldChjYWNoZWQsIHNoZWV0KTtcblx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRpZiAoY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50KGNhY2hlZCkpIHtcblx0XHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRcdGFkb3B0ZWRNYXAuZGVsZXRlKGNhY2hlZCk7XG5cdFx0XHRcdGFkb3B0ZWRCbG9iTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0XHRsb2FkSW5saW5lU3R5bGUoY2FjaGVkLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGF5ZXJXcmFwcGVkID0gd3JhcEFkb3B0ZWRMYXllcihjYWNoZWQsIGxheWVyTmFtZSk7XG5cdFx0XHRpZiAoIWFwcGx5QWRvcHRlZFN0eWxlVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKSkge1xuXHRcdFx0XHRyZW1vdmVBZG9wdGVkKHNoZWV0KTtcblx0XHRcdFx0YWRvcHRlZE1hcC5kZWxldGUoY2FjaGVkKTtcblx0XHRcdFx0YWRvcHRlZEJsb2JNYXAuZGVsZXRlKHN0eWxlcyk7XG5cdFx0XHRcdGxvYWRJbmxpbmVTdHlsZShjYWNoZWQsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdFx0fSBlbHNlIHJlbWVtYmVyQWRvcHRlZFRleHQoc2hlZXQsIGxheWVyV3JhcHBlZCk7XG5cdFx0XHRyZXR1cm4gc2hlZXQ7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIHNoZWV0O1xufTtcbnZhciBzdHlsZVRyZWVIb29rU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BzdHlsZVRyZWVIb29rc1wiKTtcbnZhciBzdHlsZVRyZWVIb29rcyA9IGdsb2JhbFRoaXNbc3R5bGVUcmVlSG9va1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgc3R5bGVUcmVlT2JzZXJ2ZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcbnZhciBzdHlsZVRyZWVSb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgU1RZTEVfVFJFRV9BVFRSUyA9IFtcblx0XCJkYXRhLXRoZW1lXCIsXG5cdFwiZGF0YS1leHBsb3Jlci1jb2xvci1zY2hlbWVcIixcblx0XCJkYXRhLWNvbG9yLXNjaGVtZVwiLFxuXHRcInRoZW1lXCIsXG5cdFwiY29sb3Itc2NoZW1lXCJcbl07XG52YXIgaXNTdHlsZUhvc3QgPSAobm9kZSkgPT4ge1xuXHRpZiAoIW5vZGUgfHwgbm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoU3RyaW5nKG5vZGUubG9jYWxOYW1lIHx8IFwiXCIpLmluY2x1ZGVzKFwiLVwiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChub2RlLnNoYWRvd1Jvb3QpIHJldHVybiB0cnVlO1xuXHRpZiAobm9kZS5zdHlsZXMgIT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgY29sbGVjdFN0eWxlSG9zdHMgPSAobm9kZSwgaW50bykgPT4ge1xuXHRpZiAoIW5vZGUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gMykgcmV0dXJuO1xuXHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMTEpIHtcblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGROb2RlcyB8fCBbXSkgY29sbGVjdFN0eWxlSG9zdHMoY2hpbGQsIGludG8pO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoaXNTdHlsZUhvc3Qobm9kZSkpIGludG8uYWRkKG5vZGUpO1xuXHRpZiAodHlwZW9mIG5vZGUucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Zm9yIChjb25zdCBlbCBvZiBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKSBpZiAoaXNTdHlsZUhvc3QoZWwpKSBpbnRvLmFkZChlbCk7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgbm90aWZ5U3R5bGVUcmVlSG9zdHMgPSAoaG9zdHMsIHJlYXNvbiA9IFwidHJlZVwiKSA9PiB7XG5cdGZvciAoY29uc3QgZWwgb2YgaG9zdHMpIHtcblx0XHRpZiAoIWlzU3R5bGVIb3N0KGVsKSkgY29udGludWU7XG5cdFx0Zm9yIChjb25zdCBmbiBvZiBzdHlsZVRyZWVIb29rcykgZm4oZWwsIHJlYXNvbik7XG5cdH1cbn07XG52YXIgcmVnaXN0ZXJTdHlsZVRyZWVIb29rID0gKGZuKSA9PiB7XG5cdGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRzdHlsZVRyZWVIb29rcy5hZGQoZm4pO1xufTtcbnZhciBvYnNlcnZlU3R5bGVUcmVlID0gKHJvb3QpID0+IHtcblx0aWYgKCFyb290IHx8IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gcm9vdDtcblx0aWYgKHN0eWxlVHJlZU9ic2VydmVkLmhhcyhyb290KSkgcmV0dXJuIHJvb3Q7XG5cdHN0eWxlVHJlZU9ic2VydmVkLmFkZChyb290KTtcblx0c3R5bGVUcmVlUm9vdHMuYWRkKHJvb3QpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiB7XG5cdFx0Y29uc3QgaG9zdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdGZvciAoY29uc3QgcmVjIG9mIHJlY29yZHMpIGlmIChyZWMudHlwZSA9PT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIHJlYy5hZGRlZE5vZGVzKSBjb2xsZWN0U3R5bGVIb3N0cyhub2RlLCBob3N0cyk7XG5cdFx0XHRjb25zdCBzY29wZSA9IHJlYy50YXJnZXQ/LmdldFJvb3ROb2RlPy4oKTtcblx0XHRcdGlmIChzY29wZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgJiYgaXNTdHlsZUhvc3Qoc2NvcGUuaG9zdCkpIHtcblx0XHRcdFx0Y29uc3Qgc2hlZXRzID0gc2NvcGUuYWRvcHRlZFN0eWxlU2hlZXRzO1xuXHRcdFx0XHRpZiAoIXNoZWV0cyB8fCBzaGVldHMubGVuZ3RoID09PSAwKSBob3N0cy5hZGQoc2NvcGUuaG9zdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChyZWMudHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIgJiYgcmVjLnRhcmdldCkge1xuXHRcdFx0aWYgKGlzU3R5bGVIb3N0KHJlYy50YXJnZXQpKSBob3N0cy5hZGQocmVjLnRhcmdldCk7XG5cdFx0fVxuXHRcdG5vdGlmeVN0eWxlVHJlZUhvc3RzKGhvc3RzLCBcIm11dGF0aW9uXCIpO1xuXHR9KTtcblx0dHJ5IHtcblx0XHRvYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcblx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uU1RZTEVfVFJFRV9BVFRSU11cblx0XHR9KTtcblx0fSBjYXRjaCB7XG5cdFx0c3R5bGVUcmVlT2JzZXJ2ZWQuZGVsZXRlKHJvb3QpO1xuXHRcdHJldHVybiByb290O1xuXHR9XG5cdHJldHVybiByb290O1xufTtcbnZhciByZWh5ZHJhdGVDb25zdHJ1Y3RhYmxlU2hlZXRzID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdGNvbnN0IGNhblBhcnNlID0gdHlwZW9mIFVSTCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgVVJMLmNhblBhcnNlID09PSBcImZ1bmN0aW9uXCI7XG5cdGZvciAoY29uc3QgW2tleSwgc2hlZXRdIG9mIGFkb3B0ZWRNYXApIHtcblx0XHRpZiAoIXNoZWV0IHx8IHR5cGVvZiBrZXkgIT09IFwic3RyaW5nXCIpIGNvbnRpbnVlO1xuXHRcdGlmIChjYW5QYXJzZSAmJiBVUkwuY2FuUGFyc2Uoa2V5KSkgY29udGludWU7XG5cdFx0Y29uc3QgdGV4dCA9IGFkb3B0ZWRBcHBsaWVkVGV4dC5nZXQoc2hlZXQpIHx8IGtleTtcblx0XHRlbnN1cmVBZG9wdGVkU2hlZXRDb250ZW50KHNoZWV0LCB0ZXh0KTtcblx0XHRpZiAoZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzICYmICFkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGVldCk7XG5cdH1cbn07XG52YXIgcmVtb3ZlQWRvcHRlZCA9IChzaGVldCkgPT4ge1xuXHRpZiAoIXNoZWV0KSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHRhcmdldCA9IHR5cGVvZiBzaGVldCA9PT0gXCJzdHJpbmdcIiA/IGFkb3B0ZWRNYXAuZ2V0KHNoZWV0KSA6IHNoZWV0O1xuXHRpZiAoIXRhcmdldCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2hlZXRzID0gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzO1xuXHRjb25zdCBpZHggPSBzaGVldHMuaW5kZXhPZih0YXJnZXQpO1xuXHRpZiAoaWR4ICE9PSAtMSkge1xuXHRcdHNoZWV0cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xudmFyIHBhcnNlT3JpZ2luID0gKG9yaWdpbiwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSBvcmlnaW4uc3BsaXQoXCIgXCIpO1xuXHRyZXR1cm4gbmV3IERPTVBvaW50KHBhcnNlTGVuZ3RoKHZhbHVlc1swXSwgKCkgPT4gZWxlbWVudC5jbGllbnRXaWR0aCksIHBhcnNlTGVuZ3RoKHZhbHVlc1sxXSwgKCkgPT4gZWxlbWVudC5jbGllbnRIZWlnaHQpKTtcbn07XG52YXIgcGFyc2VMZW5ndGggPSAodmFsdWUsIHNpemUpID0+IHtcblx0aWYgKHZhbHVlLmVuZHNXaXRoKFwiJVwiKSkgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIC8gMTAwICogc2l6ZSgpO1xuXHRyZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59O1xudmFyIGdldFRyYW5zZm9ybSA9IChlbCkgPT4ge1xuXHRpZiAoZWw/LmNvbXB1dGVkU3R5bGVNYXApIHtcblx0XHRjb25zdCBtYXRyaXggPSBlbC5jb21wdXRlZFN0eWxlTWFwKCkuZ2V0KFwidHJhbnNmb3JtXCIpPy50b01hdHJpeD8uKCk7XG5cdFx0aWYgKG1hdHJpeCkgcmV0dXJuIG1hdHJpeDtcblx0fSBlbHNlIGlmIChlbCkge1xuXHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0cmV0dXJuIG5ldyBET01NYXRyaXgoc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybVwiKSk7XG5cdH1cblx0cmV0dXJuIG5ldyBET01NYXRyaXgoKTtcbn07XG52YXIgZ2V0VHJhbnNmb3JtT3JpZ2luID0gKGVsKSA9PiB7XG5cdGNvbnN0IGNzc09yaWdpbiA9IGdldENvbXB1dGVkU3R5bGUoZWwpPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCJ0cmFuc2Zvcm0tb3JpZ2luXCIpIHx8IGA1MCUgNTAlYDtcblx0cmV0dXJuIHBhcnNlT3JpZ2luKGNzc09yaWdpbiwgZWwpO1xufTtcbnZhciBnZXRQcm9wZXJ0eVZhbHVlID0gKHNyYywgbmFtZSkgPT4ge1xuXHRpZiAoXCJjb21wdXRlZFN0eWxlTWFwXCIgaW4gc3JjKSB7XG5cdFx0Y29uc3QgdmFsID0gc3JjPy5jb21wdXRlZFN0eWxlTWFwPy4oKT8uZ2V0KG5hbWUpO1xuXHRcdHJldHVybiB2YWwgaW5zdGFuY2VvZiBDU1NVbml0VmFsdWUgPyB2YWw/LnZhbHVlIHx8IDAgOiB2YWw/LnRvU3RyaW5nPy4oKTtcblx0fVxuXHRpZiAoc3JjIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRjb25zdCBjcyA9IGdldENvbXB1dGVkU3R5bGU/LihzcmMsIFwiXCIpO1xuXHRcdHJldHVybiBwYXJzZUZsb2F0KGNzPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnJlcGxhY2U/LihcInB4XCIsIFwiXCIpKSB8fCAwO1xuXHR9XG5cdHJldHVybiBwYXJzZUZsb2F0KChzcmM/LnN0eWxlID8/IHNyYykuZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy5yZXBsYWNlPy4oXCJweFwiLCBcIlwiKSkgfHwgMDtcbn07XG52YXIgZ2V0RWxlbWVudFpvb20gPSAoZWxlbWVudCkgPT4ge1xuXHRsZXQgem9vbSA9IDEsIGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcblx0d2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG5cdFx0aWYgKFwiY3VycmVudENTU1pvb21cIiBpbiBjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0Y29uc3QgY3VycmVudENTU1pvb20gPSBjdXJyZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbTtcblx0XHRcdGlmICh0eXBlb2YgY3VycmVudENTU1pvb20gPT09IFwibnVtYmVyXCIpIHJldHVybiB6b29tICo9IGN1cnJlbnRDU1Nab29tO1xuXHRcdH1cblx0XHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudEVsZW1lbnQpO1xuXHRcdGlmIChzdHlsZS56b29tICYmIHN0eWxlLnpvb20gIT09IFwibm9ybWFsXCIpIHJldHVybiB6b29tICo9IHBhcnNlRmxvYXQoc3R5bGUuem9vbSk7XG5cdFx0aWYgKHN0eWxlLnpvb20gJiYgc3R5bGUuem9vbSAhPT0gXCJub3JtYWxcIiB8fCBcImN1cnJlbnRDU1Nab29tXCIgaW4gY3VycmVudEVsZW1lbnQpIHJldHVybiB6b29tO1xuXHRcdGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBjdXJyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcblx0fVxuXHRyZXR1cm4gem9vbTtcbn07XG52YXIgZ2V0UHhWYWx1ZSA9IChlbGVtZW50LCBuYW1lKSA9PiB7XG5cdHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlPy4oZWxlbWVudCwgbmFtZSk7XG59O1xudmFyIGdldFBhZGRpbmcgPSAoc3JjLCBheGlzKSA9PiB7XG5cdGlmIChheGlzID09IFwiaW5saW5lXCIpIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWlubGluZS1zdGFydFwiKSArIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctaW5saW5lLWVuZFwiKTtcblx0cmV0dXJuIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctYmxvY2stc3RhcnRcIikgKyBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWJsb2NrLWVuZFwiKTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9jc3NvbS50c1xudmFyIE9XTkVSID0gXCJET01cIjtcbnZhciBzdHlsZUVsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSA6IG51bGw7XG5pZiAoc3R5bGVFbGVtZW50KSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpPy5hcHBlbmRDaGlsZD8uKHN0eWxlRWxlbWVudCk7XG5cdHN0eWxlRWxlbWVudC5kYXRhc2V0Lm93bmVyID0gXCJET01cIjtcbn1cbnZhciBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0ID0gKCkgPT4gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGdsb2JhbFRoaXMuQ1NTU3R5bGVTaGVldCA9PT0gXCJmdW5jdGlvblwiO1xudmFyIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudCA9IChjc3MpID0+IHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIgJiYgL0BpbXBvcnRcXGIvaS50ZXN0KGNzcyk7XG52YXIgaXNMYXllckJsb2NrUnVsZSA9IChydWxlKSA9PiB0eXBlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgcnVsZSBpbnN0YW5jZW9mIENTU0xheWVyQmxvY2tSdWxlO1xudmFyIGdldE9yQ3JlYXRlTGF5ZXJSdWxlID0gKHNoZWV0LCBsYXllck5hbWUpID0+IHtcblx0aWYgKCFzaGVldCB8fCAhbGF5ZXJOYW1lKSByZXR1cm4gdm9pZCAwO1xuXHRjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMgfHwgW10pO1xuXHRjb25zdCBleGlzdGluZyA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IGlzTGF5ZXJCbG9ja1J1bGUocnVsZSkgJiYgcnVsZS5uYW1lID09PSBsYXllck5hbWUpO1xuXHRpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcblx0dHJ5IHtcblx0XHRjb25zdCBydWxlSW5kZXggPSBzaGVldC5pbnNlcnRSdWxlKGBAbGF5ZXIgJHtsYXllck5hbWV9IHt9YCwgcnVsZXMubGVuZ3RoKTtcblx0XHRjb25zdCBjcmVhdGVkID0gc2hlZXQuY3NzUnVsZXM/LltydWxlSW5kZXhdO1xuXHRcdHJldHVybiBpc0xheWVyQmxvY2tSdWxlKGNyZWF0ZWQpID8gY3JlYXRlZCA6IHZvaWQgMDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuO1xuXHR9XG59O1xudmFyIHNldFN0eWxlVVJMID0gKGJhc2UsIHVybCwgbGF5ZXIgPSBcIlwiKSA9PiB7XG5cdGJhc2VbMF1bYmFzZVsxXV0gPSBiYXNlWzFdID09IFwiaW5uZXJIVE1MXCIgPyBgQGltcG9ydCB1cmwoXCIke3VybH1cIikgJHtsYXllciAmJiB0eXBlb2YgbGF5ZXIgPT0gXCJzdHJpbmdcIiA/IGBsYXllcigke2xheWVyfSlgIDogXCJcIn07YCA6IHVybDtcbn07XG52YXIgc2V0U3R5bGVSdWxlcyA9IChjbGFzc2VzKSA9PiB7XG5cdHJldHVybiBjbGFzc2VzPy5tYXA/LigoYXJncykgPT4gc2V0U3R5bGVSdWxlKC4uLmFyZ3MpKTtcbn07XG52YXIgZ2V0U3R5bGVMYXllciA9IChsYXllck5hbWUsIHNoZWV0KSA9PiB7XG5cdHNoZWV0IHx8PSBzdHlsZUVsZW1lbnQ/LnNoZWV0O1xuXHRyZXR1cm4gZ2V0T3JDcmVhdGVMYXllclJ1bGUoc2hlZXQsIGxheWVyTmFtZSk7XG59O1xudmFyIHN0eWxlSWRDb3VudGVyID0gMDtcbnZhciBpc1NoYWRvd1Jvb3QgPSAodmFsdWUpID0+IHR5cGVvZiBTaGFkb3dSb290ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbnZhciBpc0RvY3VtZW50ID0gKHZhbHVlKSA9PiB0eXBlb2YgRG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEb2N1bWVudDtcbnZhciBpc0VsZW1lbnQgPSAodmFsdWUpID0+IHR5cGVvZiBFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudDtcbnZhciBlc2NhcGVDU1NJZGVudGlmaWVyID0gKHZhbHVlKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBDU1MuZXNjYXBlID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBDU1MuZXNjYXBlKHZhbHVlKTtcblx0cmV0dXJuIEFycmF5LmZyb20odmFsdWUpLm1hcCgoY2hhcikgPT4gYFxcXFwke2NoYXIuY29kZVBvaW50QXQoMCkudG9TdHJpbmcoMTYpfSBgKS5qb2luKFwiXCIpO1xufTtcbnZhciBjcmVhdGVTdHlsZUlkID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGNyeXB0byAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY3J5cHRvLnJhbmRvbVVVSUQgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGNyeXB0by5yYW5kb21VVUlEKCk7XG5cdHJldHVybiBgdXgtJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX0tJHsoKytzdHlsZUlkQ291bnRlcikudG9TdHJpbmcoMzYpfWA7XG59O1xudmFyIGpvaW5TY29wZWRTZWxlY3RvciA9IChzY29wZSwgc2VsZWN0b3IpID0+IHtcblx0c2VsZWN0b3IgPSBzZWxlY3Rvci50cmltKCk7XG5cdGlmICghc2NvcGUpIHJldHVybiBzZWxlY3Rvcjtcblx0aWYgKCFzZWxlY3RvcikgcmV0dXJuIHNjb3BlO1xuXHRpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aChcIjo6XCIpKSByZXR1cm4gYCR7c2NvcGV9JHtzZWxlY3Rvcn1gO1xuXHRyZXR1cm4gYCR7c2NvcGV9ICR7c2VsZWN0b3J9YDtcbn07XG52YXIgZmluZFN0eWxlUnVsZSA9IChzaGVldCwgZnVsbFNlbGVjdG9yLCBzY29wZSwgc2VsZWN0b3IpID0+IHtcblx0Y29uc3QgcnVsZXMgPSBBcnJheS5mcm9tKHNoZWV0Py5jc3NSdWxlcyB8fCBbXSk7XG5cdGNvbnN0IGV4cGVjdGVkID0gZnVsbFNlbGVjdG9yLnRyaW0oKTtcblx0Y29uc3QgcmVxdWVzdGVkID0gc2VsZWN0b3IudHJpbSgpO1xuXHRyZXR1cm4gcnVsZXMuZmluZEluZGV4KChydWxlKSA9PiB7XG5cdFx0aWYgKCEocnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSkpIHJldHVybiBmYWxzZTtcblx0XHRjb25zdCBhY3R1YWwgPSBydWxlLnNlbGVjdG9yVGV4dD8udHJpbT8uKCkgPz8gXCJcIjtcblx0XHRpZiAoYWN0dWFsID09PSBleHBlY3RlZCkgcmV0dXJuIHRydWU7XG5cdFx0aWYgKHJlcXVlc3RlZCAmJiBhY3R1YWwuZW5kc1dpdGgocmVxdWVzdGVkKSkgcmV0dXJuIGFjdHVhbC5zbGljZSgwLCBhY3R1YWwubGVuZ3RoIC0gcmVxdWVzdGVkLmxlbmd0aCkudHJpbSgpID09PSBzY29wZTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xufTtcbnZhciBnZXRTdHlsZVJ1bGUgPSAoc2VsZWN0b3IsIHNoZWV0LCBsYXllck5hbWUgPSBcInV4LXF1ZXJ5XCIsIGJhc2lzID0gbnVsbCkgPT4ge1xuXHRjb25zdCByb290ID0gaXNTaGFkb3dSb290KGJhc2lzKSB8fCBpc0RvY3VtZW50KGJhc2lzKSA/IGJhc2lzIDogYmFzaXM/LmdldFJvb3ROb2RlPy4oKSA/PyAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKTtcblx0Y29uc3QgYmFzaXNFbGVtZW50ID0gaXNFbGVtZW50KGJhc2lzKSA/IGJhc2lzIDogbnVsbDtcblx0bGV0IHNjb3BlID0gXCJcIjtcblx0aWYgKGJhc2lzRWxlbWVudD8uaWQpIHNjb3BlID0gYCMke2VzY2FwZUNTU0lkZW50aWZpZXIoYmFzaXNFbGVtZW50LmlkKX1gO1xuXHRlbHNlIGlmIChiYXNpc0VsZW1lbnQpIHtcblx0XHRsZXQgc3R5bGVJZCA9IGJhc2lzRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlLWlkXCIpO1xuXHRcdGlmICghc3R5bGVJZCkge1xuXHRcdFx0c3R5bGVJZCA9IGNyZWF0ZVN0eWxlSWQoKTtcblx0XHRcdGJhc2lzRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlLWlkXCIsIHN0eWxlSWQpO1xuXHRcdH1cblx0XHRzY29wZSA9IGBbZGF0YS1zdHlsZS1pZD1cIiR7ZXNjYXBlQ1NTSWRlbnRpZmllcihzdHlsZUlkKX1cIl1gO1xuXHR9IGVsc2UgaWYgKGlzU2hhZG93Um9vdChyb290KSkgc2NvcGUgPSBcIjpob3N0XCI7XG5cdGVsc2UgaWYgKGlzRG9jdW1lbnQocm9vdCkpIHNjb3BlID0gXCI6cm9vdFwiO1xuXHRsZXQgc3R5bGVFbGVtZW50ID0gbnVsbDtcblx0aWYgKGlzU2hhZG93Um9vdChyb290KSkge1xuXHRcdHN0eWxlRWxlbWVudCA9IHJvb3QucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtdXgtcXVlcnldXCIpO1xuXHRcdGlmICghc3R5bGVFbGVtZW50ICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0c3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRcdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdXgtcXVlcnlcIiwgXCJcIik7XG5cdFx0XHRyb290LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHR9IGVsc2Ugc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50R2xvYmFsKCk7XG5cdHNoZWV0IHx8PSBzdHlsZUVsZW1lbnQ/LnNoZWV0O1xuXHRpZiAoIXNoZWV0KSByZXR1cm47XG5cdGlmIChsYXllck5hbWUpIHJldHVybiBnZXRTdHlsZVJ1bGUoc2VsZWN0b3IsIGdldFN0eWxlTGF5ZXIobGF5ZXJOYW1lLCBzaGVldCksIG51bGwsIGJhc2lzKTtcblx0Y29uc3QgZnVsbFNlbGVjdG9yID0gam9pblNjb3BlZFNlbGVjdG9yKHNjb3BlLCBzZWxlY3Rvcik7XG5cdGxldCBydWxlSWQgPSBmaW5kU3R5bGVSdWxlKHNoZWV0LCBmdWxsU2VsZWN0b3IsIHNjb3BlLCBzZWxlY3Rvcik7XG5cdGlmIChydWxlSWQgPT09IC0xKSBydWxlSWQgPSBzaGVldC5pbnNlcnRSdWxlKGAke2Z1bGxTZWxlY3Rvcn0ge31gKTtcblx0cmV0dXJuIHNoZWV0LmNzc1J1bGVzPy5bcnVsZUlkXTtcbn07XG5mdW5jdGlvbiBzdHlsZUVsZW1lbnRHbG9iYWwoKSB7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQgPz8gbnVsbDtcbn1cbnZhciBwcm9taXNlT3JEaXJlY3QgPSAocHJvbWlzZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBwcm9taXNlPy50aGVuID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHByb21pc2U/LnRoZW4/LihjYik7XG5cdHJldHVybiBjYihwcm9taXNlKTtcbn07XG52YXIgYmxvYlVSTE1hcFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYmxvYlVSTE1hcFwiKTtcbnZhciBibG9iVVJMTWFwID0gZ2xvYmFsVGhpc1tibG9iVVJMTWFwU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgY2FjaGVNYXBTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGNhY2hlTWFwXCIpO1xudmFyIGNhY2hlTWFwID0gZ2xvYmFsVGhpc1tjYWNoZU1hcFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZmV0Y2hBbmRDYWNoZSA9ICh1cmwpID0+IHtcblx0aWYgKCF1cmwpIHJldHVybiBudWxsO1xuXHRpZiAoY2FjaGVNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZU1hcC5nZXQodXJsKTtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChibG9iVVJMTWFwLmhhcyh1cmwpKSByZXR1cm4gYmxvYlVSTE1hcC5nZXQodXJsKTtcblx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh1cmwpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0Y2FjaGVNYXAuc2V0KGJ1cmwsIGJ1cmwpO1xuXHRcdHJldHVybiBidXJsO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG5cdFx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdFx0Y2FjaGVNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0XHRjYWNoZU1hcC5zZXQoYnVybCwgYnVybCk7XG5cdFx0XHRyZXR1cm4gYnVybDtcblx0XHR9KTtcblx0XHRjYWNoZU1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmICh0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpIHtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW3VybF0sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXHRcdGNvbnN0IGJ1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdGNhY2hlTWFwLnNldChidXJsLCBidXJsKTtcblx0XHRyZXR1cm4gYnVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBjYWNoZUNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGNhY2hlQmxvYkNvbnRlbnRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBmZXRjaEFzSW5saW5lID0gKHVybCkgPT4ge1xuXHRpZiAoIXVybCkgcmV0dXJuIFwiXCI7XG5cdGlmIChjYWNoZUNvbnRlbnRNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZUNvbnRlbnRNYXAuZ2V0KHVybCkgPz8gXCJcIjtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChjYWNoZUJsb2JDb250ZW50TWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVCbG9iQ29udGVudE1hcC5nZXQodXJsKSA/PyBcIlwiO1xuXHRcdGNvbnN0IHByb21pc2VkID0gdXJsPy50ZXh0Py4oKT8udGhlbj8uKCh0ZXh0KSA9PiB7XG5cdFx0XHRjYWNoZUJsb2JDb250ZW50TWFwLnNldCh1cmwsIHRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdFx0Y2FjaGVCbG9iQ29udGVudE1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgdGV4dCk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9KTtcblx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAodHlwZW9mIHVybCA9PSBcInN0cmluZ1wiKSB7XG5cdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHVybCk7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBhZG9wdGVkU2VsZWN0b3JNYXBTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGFkb3B0ZWRTZWxlY3Rvck1hcFwiKTtcbnZhciBhZG9wdGVkU2VsZWN0b3JNYXAgPSBnbG9iYWxUaGlzW2Fkb3B0ZWRTZWxlY3Rvck1hcFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXBcIik7XG52YXIgYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkU2hhZG93U2VsZWN0b3JNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBhZG9wdGVkTGF5ZXJNYXBTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGFkb3B0ZWRMYXllck1hcFwiKTtcbnZhciBhZG9wdGVkTGF5ZXJNYXAgPSBnbG9iYWxUaGlzW2Fkb3B0ZWRMYXllck1hcFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgYWRvcHRlZFNoYWRvd0xheWVyTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BhZG9wdGVkU2hhZG93TGF5ZXJNYXBcIik7XG52YXIgYWRvcHRlZFNoYWRvd0xheWVyTWFwID0gZ2xvYmFsVGhpc1thZG9wdGVkU2hhZG93TGF5ZXJNYXBTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBnZXRBZG9wdGVkU3R5bGVSdWxlID0gKHNlbGVjdG9yLCBsYXllck5hbWUgPSBcInV4LXF1ZXJ5XCIsIGJhc2lzID0gbnVsbCkgPT4ge1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gbnVsbDtcblx0aWYgKCFzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0KCkpIHJldHVybiBudWxsO1xuXHRjb25zdCByb290ID0gYmFzaXMgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gYmFzaXMgOiBiYXNpcz8uZ2V0Um9vdE5vZGUgPyBiYXNpcy5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pIDogbnVsbDtcblx0Y29uc3QgaXNTaGFkb3dSb290ID0gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG5cdGNvbnN0IHRhcmdldEFkb3B0ZWRTaGVldHMgPSBpc1NoYWRvd1Jvb3QgPyByb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA6IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzIDogbnVsbDtcblx0aWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgc2VsZWN0b3JLZXkgPSBgJHtsYXllck5hbWUgfHwgXCJcIn06JHtzZWxlY3Rvcn1gO1xuXHRsZXQgc2hlZXQ7XG5cdGlmIChpc1NoYWRvd1Jvb3QpIHtcblx0XHRsZXQgc2hhZG93TWFwID0gYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwLmdldChyb290KTtcblx0XHRpZiAoIXNoYWRvd01hcCkge1xuXHRcdFx0c2hhZG93TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcC5zZXQocm9vdCwgc2hhZG93TWFwKTtcblx0XHR9XG5cdFx0c2hlZXQgPSBzaGFkb3dNYXAuZ2V0KHNlbGVjdG9yS2V5KTtcblx0XHRpZiAoIXNoZWV0KSB7XG5cdFx0XHRzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG5cdFx0XHRzaGFkb3dNYXAuc2V0KHNlbGVjdG9yS2V5LCBzaGVldCk7XG5cdFx0XHRpZiAoIXRhcmdldEFkb3B0ZWRTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSB0YXJnZXRBZG9wdGVkU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRzaGVldCA9IGFkb3B0ZWRTZWxlY3Rvck1hcC5nZXQoc2VsZWN0b3JLZXkpO1xuXHRcdGlmICghc2hlZXQpIHtcblx0XHRcdHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdGFkb3B0ZWRTZWxlY3Rvck1hcC5zZXQoc2VsZWN0b3JLZXksIHNoZWV0KTtcblx0XHRcdGlmICghdGFyZ2V0QWRvcHRlZFNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIHRhcmdldEFkb3B0ZWRTaGVldHMucHVzaChzaGVldCk7XG5cdFx0fVxuXHR9XG5cdGlmIChsYXllck5hbWUpIHtcblx0XHRsZXQgbGF5ZXJSdWxlO1xuXHRcdGlmIChpc1NoYWRvd1Jvb3QpIHtcblx0XHRcdGxldCBzaGFkb3dMYXllck1hcCA9IGFkb3B0ZWRTaGFkb3dMYXllck1hcC5nZXQocm9vdCk7XG5cdFx0XHRpZiAoIXNoYWRvd0xheWVyTWFwKSB7XG5cdFx0XHRcdHNoYWRvd0xheWVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdFx0YWRvcHRlZFNoYWRvd0xheWVyTWFwLnNldChyb290LCBzaGFkb3dMYXllck1hcCk7XG5cdFx0XHR9XG5cdFx0XHRsYXllclJ1bGUgPSBzaGFkb3dMYXllck1hcC5nZXQobGF5ZXJOYW1lKTtcblx0XHR9IGVsc2UgbGF5ZXJSdWxlID0gYWRvcHRlZExheWVyTWFwLmdldChsYXllck5hbWUpO1xuXHRcdGlmICghbGF5ZXJSdWxlKSB7XG5cdFx0XHRsYXllclJ1bGUgPSBnZXRPckNyZWF0ZUxheWVyUnVsZShzaGVldCwgbGF5ZXJOYW1lKTtcblx0XHRcdGlmIChsYXllclJ1bGUpIHtcblx0XHRcdFx0aWYgKGlzU2hhZG93Um9vdCkge1xuXHRcdFx0XHRcdGxldCBzaGFkb3dMYXllck1hcCA9IGFkb3B0ZWRTaGFkb3dMYXllck1hcC5nZXQocm9vdCk7XG5cdFx0XHRcdFx0aWYgKCFzaGFkb3dMYXllck1hcCkge1xuXHRcdFx0XHRcdFx0c2hhZG93TGF5ZXJNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0XHRcdFx0YWRvcHRlZFNoYWRvd0xheWVyTWFwLnNldChyb290LCBzaGFkb3dMYXllck1hcCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNoYWRvd0xheWVyTWFwLnNldChsYXllck5hbWUsIGxheWVyUnVsZSk7XG5cdFx0XHRcdH0gZWxzZSBhZG9wdGVkTGF5ZXJNYXAuc2V0KGxheWVyTmFtZSwgbGF5ZXJSdWxlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGxheWVyUnVsZSkge1xuXHRcdFx0bGV0IGxheWVyUnVsZUluZGV4ID0gQXJyYXkuZnJvbShsYXllclJ1bGUuY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocikgPT4gciBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSAmJiByLnNlbGVjdG9yVGV4dD8udHJpbT8uKCkgPT09IHNlbGVjdG9yPy50cmltPy4oKSk7XG5cdFx0XHRpZiAobGF5ZXJSdWxlSW5kZXggPT09IC0xKSB0cnkge1xuXHRcdFx0XHRsYXllclJ1bGVJbmRleCA9IGxheWVyUnVsZS5pbnNlcnRSdWxlKGAke3NlbGVjdG9yfSB7fWAsIGxheWVyUnVsZS5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsYXllclJ1bGUuY3NzUnVsZXNbbGF5ZXJSdWxlSW5kZXhdO1xuXHRcdH1cblx0fVxuXHRsZXQgcnVsZUluZGV4ID0gQXJyYXkuZnJvbShzaGVldC5jc3NSdWxlcyB8fCBbXSkuZmluZEluZGV4KChydWxlKSA9PiBydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlICYmIHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA9PT0gc2VsZWN0b3I/LnRyaW0/LigpKTtcblx0aWYgKHJ1bGVJbmRleCA9PT0gLTEpIHRyeSB7XG5cdFx0cnVsZUluZGV4ID0gc2hlZXQuaW5zZXJ0UnVsZShgJHtzZWxlY3Rvcn0ge31gLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y29uc3QgcnVsZSA9IHNoZWV0LmNzc1J1bGVzW3J1bGVJbmRleF07XG5cdGlmIChydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKSByZXR1cm4gcnVsZTtcblx0cmV0dXJuIG51bGw7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvY29tcG9uZW50LnRzXG52YXIgYWRvcHRlZFNoZWV0c1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJsdXIuZUBhZG9wdGVkU3R5bGVTaGVldHNDYWNoZVwiKTtcbmdsb2JhbFRoaXNbYWRvcHRlZFNoZWV0c1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGFkb3B0ZWRTdHlsZVNoZWV0c0NhY2hlID0gZ2xvYmFsVGhpc1thZG9wdGVkU2hlZXRzU3ltYm9sXTtcbnZhciBzdHlsZUNhY2hlU3ltYm9sID0gU3ltYm9sLmZvcihcImx1ci5lQHN0eWxlQ2FjaGVcIik7XG5nbG9iYWxUaGlzW3N0eWxlQ2FjaGVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIHN0eWxlQ2FjaGUgPSBnbG9iYWxUaGlzW3N0eWxlQ2FjaGVTeW1ib2xdO1xudmFyIHN0eWxlRWxlbWVudENhY2hlU3ltYm9sID0gU3ltYm9sLmZvcihcImx1ci5lQHN0eWxlRWxlbWVudENhY2hlXCIpO1xuZ2xvYmFsVGhpc1tzdHlsZUVsZW1lbnRDYWNoZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHN0eWxlRWxlbWVudENhY2hlID0gZ2xvYmFsVGhpc1tzdHlsZUVsZW1lbnRDYWNoZVN5bWJvbF07XG52YXIgSE9TVF9DU1NfRkFMTEJBQ0sgPSBcImRhdGEtZ2xpdC1ob3N0LWNzc1wiO1xudmFyIHN5bmNBZG9wdGVkU2hlZXRzVG9TaGFkb3cgPSAoYlRvKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBiVG8/LnNoYWRvd1Jvb3Q7XG5cdGlmICghcm9vdCkgcmV0dXJuO1xuXHRjb25zdCBhZG9wdGVkU2hlZXRzID0gYWRvcHRlZFN0eWxlU2hlZXRzQ2FjaGUuZ2V0KGJUbykgfHwgW107XG5cdGZvciAoY29uc3Qgc2hlZXQgb2YgYWRvcHRlZFNoZWV0cykgZW5zdXJlQWRvcHRlZFNoZWV0Q29udGVudChzaGVldCk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgbGl2ZSA9IHJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzIHx8IFtdO1xuXHRcdHJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gWy4uLmFkb3B0ZWRTaGVldHMuZmlsdGVyKChzKSA9PiAhbGl2ZS5pbmNsdWRlcyhzKSksIC4uLi8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5saXZlXSldO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGFkZEFkb3B0ZWRTaGVldFRvRWxlbWVudCA9IChiVG8sIHNoZWV0KSA9PiB7XG5cdGxldCBhZG9wdGVkU2hlZXRzID0gYWRvcHRlZFN0eWxlU2hlZXRzQ2FjaGUuZ2V0KGJUbyk7XG5cdGlmICghYWRvcHRlZFNoZWV0cykgYWRvcHRlZFN0eWxlU2hlZXRzQ2FjaGUuc2V0KGJUbywgYWRvcHRlZFNoZWV0cyA9IFtdKTtcblx0aWYgKHNoZWV0ICYmIGFkb3B0ZWRTaGVldHMuaW5kZXhPZihzaGVldCkgPCAwKSBhZG9wdGVkU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRlbnN1cmVBZG9wdGVkU2hlZXRDb250ZW50KHNoZWV0KTtcblx0c3luY0Fkb3B0ZWRTaGVldHNUb1NoYWRvdyhiVG8pO1xufTtcbnZhciBlbnN1cmVTaGFkb3dDc3NGYWxsYmFjayA9IChiVG8sIGNzc1RleHQpID0+IHtcblx0Y29uc3Qgcm9vdCA9IGJUbz8uc2hhZG93Um9vdDtcblx0aWYgKCFyb290IHx8ICFjc3NUZXh0KSByZXR1cm4gbnVsbDtcblx0bGV0IHN0eWxlID0gcm9vdC5xdWVyeVNlbGVjdG9yPy4oYHN0eWxlWyR7SE9TVF9DU1NfRkFMTEJBQ0t9XWApO1xuXHRpZiAoIXN0eWxlKSB7XG5cdFx0c3R5bGUgPSBsb2FkSW5saW5lU3R5bGUoY3NzVGV4dCwgcm9vdCwgXCJcIik7XG5cdFx0aWYgKHN0eWxlKSBzdHlsZS5zZXRBdHRyaWJ1dGUoSE9TVF9DU1NfRkFMTEJBQ0ssIFwiXCIpO1xuXHR9IGVsc2UgaWYgKHN0eWxlLnRleHRDb250ZW50ICE9PSBjc3NUZXh0KSBzdHlsZS50ZXh0Q29udGVudCA9IGNzc1RleHQ7XG5cdHJldHVybiBzdHlsZTtcbn07XG52YXIgcmVoeWRyYXRlQWRvcHRlZFN0eWxlU2hlZXRzID0gKHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKCFyb290KSByZXR1cm47XG5cdGNvbnN0IHJlc3RvcmUgPSAoaG9zdCkgPT4ge1xuXHRcdGlmICghaG9zdD8uc2hhZG93Um9vdCkgcmV0dXJuO1xuXHRcdGVuc3VyZVNoYWRvd0Nzc0ZhbGxiYWNrKGhvc3QsIGhvc3RDc3NUZXh0KGhvc3QpKTtcblx0XHRzeW5jQWRvcHRlZFNoZWV0c1RvU2hhZG93KGhvc3QpO1xuXHR9O1xuXHRpZiAocm9vdC5ub2RlVHlwZSA9PT0gMSkgcmVzdG9yZShyb290KTtcblx0Y29uc3QgdmlzaXQgPSAobm9kZSkgPT4ge1xuXHRcdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHRjaGlsZHJlbiA9IG5vZGUucXVlcnlTZWxlY3RvckFsbChcIipcIik7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGhvc3QgPSBjaGlsZHJlbltpXTtcblx0XHRcdGlmIChob3N0LnNoYWRvd1Jvb3QpIHtcblx0XHRcdFx0cmVzdG9yZShob3N0KTtcblx0XHRcdFx0dmlzaXQoaG9zdC5zaGFkb3dSb290KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHZpc2l0KHJvb3QpO1xufTtcbnZhciBob3N0Q3NzVGV4dCA9IChiVG8pID0+IHtcblx0Y29uc3Qgc3JjID0gYlRvPy5zdHlsZXM7XG5cdGlmICh0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiKSByZXR1cm4gc3JjO1xuXHRpZiAodHlwZW9mIHNyYyA9PT0gXCJmdW5jdGlvblwiKSB0cnkge1xuXHRcdGNvbnN0IG91dCA9IHNyYy5jYWxsKGJUbyk7XG5cdFx0aWYgKHR5cGVvZiBvdXQgPT09IFwic3RyaW5nXCIpIHJldHVybiBvdXQ7XG5cdFx0cmV0dXJuIGNzc1RleHRGb3JBZG9wdGVkU2hlZXQob3V0KTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0cmV0dXJuIGNzc1RleHRGb3JBZG9wdGVkU2hlZXQoc3JjKTtcbn07XG52YXIgZW5zdXJlSG9zdFN0eWxlcyA9IChiVG8pID0+IHtcblx0aWYgKCFiVG8pIHJldHVybjtcblx0aWYgKGJUby5zdHlsZXMgIT0gbnVsbCkgbG9hZENhY2hlZFN0eWxlcyhiVG8sIGJUby5zdHlsZXMpO1xuXHRzeW5jQWRvcHRlZFNoZWV0c1RvU2hhZG93KGJUbyk7XG5cdGVuc3VyZVNoYWRvd0Nzc0ZhbGxiYWNrKGJUbywgaG9zdENzc1RleHQoYlRvKSk7XG59O1xudmFyIHN0eWxlRmx1c2hQZW5kaW5nID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG52YXIgc3R5bGVGbHVzaEJhdGNoID0gW107XG52YXIgc3R5bGVGbHVzaFNjaGVkdWxlZCA9IGZhbHNlO1xudmFyIHNjaGVkdWxlRW5zdXJlSG9zdFN0eWxlcyA9IChiVG8pID0+IHtcblx0aWYgKCFiVG8gfHwgIShiVG8gaW5zdGFuY2VvZiBFbGVtZW50KSB8fCBzdHlsZUZsdXNoUGVuZGluZy5oYXMoYlRvKSkgcmV0dXJuO1xuXHRzdHlsZUZsdXNoUGVuZGluZy5hZGQoYlRvKTtcblx0c3R5bGVGbHVzaEJhdGNoLnB1c2goYlRvKTtcblx0aWYgKHN0eWxlRmx1c2hTY2hlZHVsZWQpIHJldHVybjtcblx0c3R5bGVGbHVzaFNjaGVkdWxlZCA9IHRydWU7XG5cdHF1ZXVlTWljcm90YXNrKCgpID0+IHtcblx0XHRzdHlsZUZsdXNoU2NoZWR1bGVkID0gZmFsc2U7XG5cdFx0Y29uc3QgYmF0Y2ggPSBzdHlsZUZsdXNoQmF0Y2g7XG5cdFx0c3R5bGVGbHVzaEJhdGNoID0gW107XG5cdFx0Zm9yIChjb25zdCBob3N0IG9mIGJhdGNoKSB7XG5cdFx0XHRzdHlsZUZsdXNoUGVuZGluZy5kZWxldGUoaG9zdCk7XG5cdFx0XHRpZiAoaG9zdC5pc0Nvbm5lY3RlZCkgZW5zdXJlSG9zdFN0eWxlcyhob3N0KTtcblx0XHR9XG5cdH0pO1xufTtcbnJlZ2lzdGVyU3R5bGVUcmVlSG9vaygoZWwpID0+IHNjaGVkdWxlRW5zdXJlSG9zdFN0eWxlcyhlbCkpO1xudmFyIGxvYWRDYWNoZWRTdHlsZXMgPSAoYlRvLCBzcmMpID0+IHtcblx0aWYgKCFzcmMpIHJldHVybiBudWxsO1xuXHRsZXQgcmVzb2x2ZWRTcmMgPSBzcmM7XG5cdGlmICh0eXBlb2Ygc3JjID09IFwiZnVuY3Rpb25cIikgdHJ5IHtcblx0XHRjb25zdCB3ZWFrID0gbmV3IFdlYWtSZWYoYlRvKTtcblx0XHRyZXNvbHZlZFNyYyA9IHNyYy5jYWxsKGJUbywgd2Vhayk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLndhcm4oXCJFcnJvciBjYWxsaW5nIHN0eWxlcyBmdW5jdGlvbjpcIiwgZSk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHJlc29sdmVkU3JjICYmIHR5cGVvZiBDU1NTdHlsZVNoZWV0ICE9IFwidW5kZWZpbmVkXCIgJiYgcmVzb2x2ZWRTcmMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0KSB7XG5cdFx0YWRkQWRvcHRlZFNoZWV0VG9FbGVtZW50KGJUbywgcmVzb2x2ZWRTcmMpO1xuXHRcdHJldHVybiBlbnN1cmVTaGFkb3dDc3NGYWxsYmFjayhiVG8sIGNzc1RleHRGb3JBZG9wdGVkU2hlZXQocmVzb2x2ZWRTcmMpKTtcblx0fVxuXHRpZiAocmVzb2x2ZWRTcmMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0cmVzb2x2ZWRTcmMudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCkgYWRkQWRvcHRlZFNoZWV0VG9FbGVtZW50KGJUbywgcmVzdWx0KTtcblx0XHRcdGVsc2UgaWYgKHJlc3VsdCAhPSBudWxsKSBsb2FkQ2FjaGVkU3R5bGVzKGJUbywgcmVzdWx0KTtcblx0XHR9KS5jYXRjaCgoZSkgPT4ge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiRXJyb3IgbG9hZGluZyBhZG9wdGVkIHN0eWxlc2hlZXQ6XCIsIGUpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmICh0eXBlb2YgcmVzb2x2ZWRTcmMgPT0gXCJzdHJpbmdcIiB8fCByZXNvbHZlZFNyYyBpbnN0YW5jZW9mIEJsb2IgfHwgcmVzb2x2ZWRTcmMgaW5zdGFuY2VvZiBGaWxlKSB7XG5cdFx0Y29uc3QgYWRvcHRlZCA9IGxvYWRBc0Fkb3B0ZWQocmVzb2x2ZWRTcmMsIFwiXCIpO1xuXHRcdGlmIChhZG9wdGVkKSB7XG5cdFx0XHRjb25zdCBhZGRBZG9wdGVkU2hlZXQgPSAoc2hlZXQpID0+IHtcblx0XHRcdFx0YWRkQWRvcHRlZFNoZWV0VG9FbGVtZW50KGJUbywgc2hlZXQpO1xuXHRcdFx0fTtcblx0XHRcdGlmIChhZG9wdGVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHRcdFx0XHRhZG9wdGVkLnRoZW4oKHNoZWV0KSA9PiB7XG5cdFx0XHRcdFx0YWRkQWRvcHRlZFNoZWV0KHNoZWV0KTtcblx0XHRcdFx0XHRlbnN1cmVTaGFkb3dDc3NGYWxsYmFjayhiVG8sIHR5cGVvZiByZXNvbHZlZFNyYyA9PSBcInN0cmluZ1wiID8gcmVzb2x2ZWRTcmMgOiBjc3NUZXh0Rm9yQWRvcHRlZFNoZWV0KHNoZWV0KSk7XG5cdFx0XHRcdH0pLmNhdGNoKChlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKFwiRXJyb3IgbG9hZGluZyBhZG9wdGVkIHN0eWxlc2hlZXQ6XCIsIGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhZGRBZG9wdGVkU2hlZXQoYWRvcHRlZCk7XG5cdFx0XHRcdHJldHVybiBlbnN1cmVTaGFkb3dDc3NGYWxsYmFjayhiVG8sIHR5cGVvZiByZXNvbHZlZFNyYyA9PSBcInN0cmluZ1wiID8gcmVzb2x2ZWRTcmMgOiBjc3NUZXh0Rm9yQWRvcHRlZFNoZWV0KGFkb3B0ZWQpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y29uc3Qgc291cmNlID0gdHlwZW9mIHNyYyA9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHNyYyA9PSBcIm9iamVjdFwiID8gc3R5bGVFbGVtZW50Q2FjaGUgOiBzdHlsZUNhY2hlO1xuXHRjb25zdCBjYWNoZWQgPSBzb3VyY2UuZ2V0KHNyYyk7XG5cdGxldCBzdHlsZUVsZW1lbnQgPSBjYWNoZWQ/LnN0eWxlRWxlbWVudDtcblx0bGV0IHZhcnMgPSBjYWNoZWQ/LnZhcnM7XG5cdGlmICghY2FjaGVkKSB7XG5cdFx0bGV0IHN0eWxlcyA9IGBgO1xuXHRcdGxldCBwcm9wcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgcmVzb2x2ZWRTcmMgPT0gXCJzdHJpbmdcIikgc3R5bGVzID0gcmVzb2x2ZWRTcmMgfHwgXCJcIjtcblx0XHRlbHNlIGlmICh0eXBlb2YgcmVzb2x2ZWRTcmMgPT0gXCJvYmplY3RcIiAmJiByZXNvbHZlZFNyYyAhPSBudWxsKSB7XG5cdFx0XHRpZiAocmVzb2x2ZWRTcmMgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KSBzdHlsZUVsZW1lbnQgPSByZXNvbHZlZFNyYztcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdHlsZXMgPSB0eXBlb2YgcmVzb2x2ZWRTcmMuY3NzID09IFwic3RyaW5nXCIgPyByZXNvbHZlZFNyYy5jc3MgOiB0eXBlb2YgcmVzb2x2ZWRTcmMgPT0gXCJzdHJpbmdcIiA/IHJlc29sdmVkU3JjIDogU3RyaW5nKHJlc29sdmVkU3JjKTtcblx0XHRcdFx0cHJvcHMgPSByZXNvbHZlZFNyYz8ucHJvcHMgPz8gcHJvcHM7XG5cdFx0XHRcdHZhcnMgPSByZXNvbHZlZFNyYz8udmFycyA/PyB2YXJzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIXN0eWxlRWxlbWVudCAmJiBzdHlsZXMpIHN0eWxlRWxlbWVudCA9IGxvYWRJbmxpbmVTdHlsZShzdHlsZXMsIGJUbywgXCJ1eC1sYXllclwiKTtcblx0XHRzb3VyY2Uuc2V0KHNyYywge1xuXHRcdFx0Y3NzOiBzdHlsZXMsXG5cdFx0XHRwcm9wcyxcblx0XHRcdHZhcnMsXG5cdFx0XHRzdHlsZUVsZW1lbnRcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gLi4vbHVyLmUvc3JjL2x1cmUvY29yZS9CaW5kaW5nLnRzXG52YXIgYmFua1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJsdXIuZUBiYW5rXCIpO1xudmFyIGJhbmsgPSBnbG9iYWxUaGlzW2JhbmtTeW1ib2xdID8/PSBuZXcgRG91YmxlV2Vha01hcCgpO1xudmFyIGVsTWFwU3ltYm9sID0gU3ltYm9sLmZvcihcImx1ci5lQGVsTWFwXCIpO1xudmFyIGVsTWFwID0gZ2xvYmFsVGhpc1tlbE1hcFN5bWJvbF0gPz89IG5ldyBEb3VibGVXZWFrTWFwKCk7XG52YXIgYWxpdmVzU3ltYm9sID0gU3ltYm9sLmZvcihcImx1ci5lQGFsaXZlc1wiKTtcbnZhciBhbGl2ZXMgPSBnbG9iYWxUaGlzW2FsaXZlc1N5bWJvbF0gPz89IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgodW5zdWIpID0+IHVuc3ViPy4oKSk7XG52YXIgJGJlaGF2aW9yID0gU3ltYm9sLmZvcihcIkBiZWhhdmlvclwiKTtcbnZhciBpc0xpbmtlckxpa2UgPSAodmFsdWUpID0+IHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgJiYgXCJyZWZcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWU/LnVuYmluZCA9PSBcImZ1bmN0aW9uXCI7XG59O1xudmFyICRvYnNlcnZlSW5wdXQgPSAoZWxlbWVudCwgcmVmLCBwcm9wID0gXCJ2YWx1ZVwiKSA9PiB7XG5cdGNvbnN0IHdlbCA9IHRvUmVmKGVsZW1lbnQpO1xuXHRjb25zdCByZiA9IHRvUmVmKHJlZik7XG5cdGNvbnN0IGN0cmxDYiA9IChfZXYpID0+IHtcblx0XHQkc2V0KHJmLCBcInZhbHVlXCIsIGRlcmVmKHdlbCk/Lltwcm9wID8/IFwidmFsdWVcIl0gPz8gJGdldFZhbHVlKGRlcmVmKHJmKSkpO1xuXHR9O1xuXHRjb25zdCBoZGwgPSB7XG5cdFx0Y2xpY2s6IGN0cmxDYixcblx0XHRpbnB1dDogY3RybENiLFxuXHRcdGNoYW5nZTogY3RybENiXG5cdH07XG5cdGN0cmxDYj8uKHsgdGFyZ2V0OiBlbGVtZW50IH0pO1xuXHRoYW5kbGVMaXN0ZW5lcnM/LihlbGVtZW50LCBcImFkZEV2ZW50TGlzdGVuZXJcIiwgaGRsKTtcblx0JHNldChyZiwgXCJ2YWx1ZVwiLCBlbGVtZW50Py5bcHJvcCA/PyBcInZhbHVlXCJdID8/ICRnZXRWYWx1ZShkZXJlZihyZWYpKSk7XG5cdHJldHVybiAoKSA9PiBoYW5kbGVMaXN0ZW5lcnM/LihlbGVtZW50LCBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIiwgaGRsKTtcbn07XG52YXIgJG9ic2VydmVBdHRyaWJ1dGUgPSAoZWwsIHJlZiwgcHJvcCA9IFwiXCIpID0+IHtcblx0dG9SZWYoZWwpO1xuXHRjb25zdCB3diA9IHRvUmVmKHJlZik7XG5cdGNvbnN0IGF0dHJOYW1lID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRjb25zdCBjYiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGlmIChtdXRhdGlvbi50eXBlID09IFwiYXR0cmlidXRlc1wiICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT0gYXR0ck5hbWUpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gbXV0YXRpb24/LnRhcmdldD8uZ2V0QXR0cmlidXRlPy4obXV0YXRpb24uYXR0cmlidXRlTmFtZSk7XG5cdFx0XHRjb25zdCB2YWxSZWYgPSBkZXJlZih3diksIHJlVmFsID0gJGdldFZhbHVlKHZhbFJlZik7XG5cdFx0XHRpZiAoaXNOb3RFcXVhbChtdXRhdGlvbi5vbGRWYWx1ZSwgdmFsdWUpICYmIHZhbFJlZiAhPSBudWxsICYmICh0eXBlb2YgdmFsUmVmID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbFJlZiA9PSBcImZ1bmN0aW9uXCIpKSB7XG5cdFx0XHRcdGlmIChpc05vdEVxdWFsKHJlVmFsLCB2YWx1ZSkgfHwgcmVWYWwgPT0gbnVsbCkgJHNldCh2YWxSZWYsIFwidmFsdWVcIiwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIG9ic2VydmVBdHRyaWJ1dGUoZWwsIGF0dHJOYW1lLCBjYik7XG59O1xudmFyIHJlbW92ZUZyb21CYW5rID0gKGVsLCBoYW5kbGVyLCBwcm9wKSA9PiB7XG5cdGNvbnN0IGJhbmsgPSBlbE1hcC5nZXQoW2VsLCBoYW5kbGVyXSk7XG5cdGlmIChiYW5rKSB7XG5cdFx0Y29uc3Qgb2xkID0gYmFua1twcm9wXT8uWzFdO1xuXHRcdGRlbGV0ZSBiYW5rW3Byb3BdO1xuXHRcdG9sZD8uKCk7XG5cdH1cbn07XG52YXIgYWRkVG9CYW5rID0gKGVsLCBoYW5kbGVyLCBwcm9wLCBmb3JMaW5rKSA9PiB7XG5cdGNvbnN0IGJhbmsgPSBlbE1hcC5nZXRPckluc2VydENvbXB1dGVkKFtlbCwgaGFuZGxlcl0sICgpID0+ICh7fSkpO1xuXHRiYW5rPy5bcHJvcF0/LlsxXT8uKCk7XG5cdGJhbmtbcHJvcF0gPSBmb3JMaW5rO1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG52YXIgYmluZEhhbmRsZXIgPSAoZWxlbWVudCwgdmFsdWUsIHByb3AsIGhhbmRsZXIsIHNldCwgd2l0aE9ic2VydmVyKSA9PiB7XG5cdGNvbnN0IGxpbmtlciA9IGlzTGlua2VyTGlrZSh2YWx1ZSkgPyB2YWx1ZSA6IG51bGw7XG5cdGlmIChsaW5rZXIpIHtcblx0XHRsaW5rZXIuYmluZD8uKCk7XG5cdFx0dmFsdWUgPSBsaW5rZXIucmVmO1xuXHR9XG5cdGNvbnN0IHdlbCA9IHRvUmVmKGVsZW1lbnQpO1xuXHRlbGVtZW50ID0gZGVyZWYod2VsKTtcblx0aWYgKCFlbGVtZW50IHx8ICEoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUgfHwgZWxlbWVudD8uZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpKSByZXR1cm47XG5cdGxldCBjb250cm9sbGVyID0gdm9pZCAwO1xuXHRpZiAoY29udHJvbGxlcikgY29udHJvbGxlcj8uYWJvcnQ/LigpO1xuXHRjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRjb25zdCB3diA9IHRvUmVmKHZhbHVlKTtcblx0aGFuZGxlcj8uKGVsZW1lbnQsIHByb3AsIHZhbHVlKTtcblx0Y29uc3QgdW4gPSBhZmZlY3RlZD8uKFt2YWx1ZSwgXCJ2YWx1ZVwiXSwgKGN1cnIsIF9wLCBvbGQpID0+IHtcblx0XHRjb25zdCB2YWx1ZVJlZiA9IGRlcmVmKHd2KTtcblx0XHRjb25zdCBzZXRSZWYgPSBkZXJlZihzZXQpO1xuXHRcdGNvbnN0IGVsZW1lbnRSZWYgPSBkZXJlZih3ZWwpO1xuXHRcdGNvbnN0IHYgPSAkZ2V0VmFsdWUodmFsdWVSZWYpID8/ICRnZXRWYWx1ZShjdXJyKTtcblx0XHRpZiAoIXNldFJlZiB8fCBzZXRSZWY/Lltwcm9wXSA9PSB2YWx1ZVJlZikge1xuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZVJlZj8uWyRiZWhhdmlvcl0gPT0gXCJmdW5jdGlvblwiKSB2YWx1ZVJlZj8uWyRiZWhhdmlvcl0/LigoX3ZhbCA9IGN1cnIpID0+IGhhbmRsZXIoZWxlbWVudFJlZiwgcHJvcCwgdiksIFtcblx0XHRcdFx0Y3Vycixcblx0XHRcdFx0cHJvcCxcblx0XHRcdFx0b2xkXG5cdFx0XHRdLCBbXG5cdFx0XHRcdGNvbnRyb2xsZXI/LnNpZ25hbCxcblx0XHRcdFx0cHJvcCxcblx0XHRcdFx0d2VsXG5cdFx0XHRdKTtcblx0XHRcdGVsc2UgaGFuZGxlcihlbGVtZW50UmVmLCBwcm9wLCB2KTtcblx0XHR9XG5cdH0pO1xuXHRsZXQgb2JzID0gbnVsbDtcblx0aWYgKHR5cGVvZiB3aXRoT2JzZXJ2ZXIgPT0gXCJib29sZWFuXCIgJiYgd2l0aE9ic2VydmVyKSB7XG5cdFx0aWYgKGhhbmRsZXIgPT0gaGFuZGxlQXR0cmlidXRlKSBvYnMgPSAkb2JzZXJ2ZUF0dHJpYnV0ZShlbGVtZW50LCB2YWx1ZSwgcHJvcCk7XG5cdFx0aWYgKGhhbmRsZXIgPT0gaGFuZGxlUHJvcGVydHkpIG9icyA9ICRvYnNlcnZlSW5wdXQoZWxlbWVudCwgdmFsdWUsIHByb3ApO1xuXHR9XG5cdGlmICh0eXBlb2Ygd2l0aE9ic2VydmVyID09IFwiZnVuY3Rpb25cIikgb2JzID0gd2l0aE9ic2VydmVyKGVsZW1lbnQsIHByb3AsIHZhbHVlKTtcblx0Y29uc3QgdW5zdWIgPSAoKSA9PiB7XG5cdFx0b2JzPy5kaXNjb25uZWN0Py4oKTtcblx0XHRvYnMgIT0gbnVsbCAmJiB0eXBlb2Ygb2JzID09IFwiZnVuY3Rpb25cIiAmJiBvYnM/LigpO1xuXHRcdGxpbmtlcj8udW5iaW5kPy4oKTtcblx0XHR1bj8uKCk7XG5cdFx0Y29udHJvbGxlcj8uYWJvcnQ/LigpO1xuXHRcdHJlbW92ZUZyb21CYW5rPy4oZWxlbWVudCwgaGFuZGxlciwgcHJvcCk7XG5cdH07XG5cdGFkZFRvQ2FsbENoYWluKHZhbHVlLCBTeW1ib2wuZGlzcG9zZSwgdW5zdWIpO1xuXHRhbGl2ZXMucmVnaXN0ZXIoZWxlbWVudCwgdW5zdWIpO1xuXHRpZiAoIWFkZFRvQmFuayhlbGVtZW50LCBoYW5kbGVyLCBwcm9wLCBbdmFsdWUsIHVuc3ViXSkpIHJldHVybiB1bnN1Yjtcbn07XG52YXIgYmluZFdpdGggPSAoZWwsIHByb3AsIHZhbHVlLCBoYW5kbGVyLCBzZXQsIHdpdGhPYnNlcnZlcikgPT4ge1xuXHRoYW5kbGVyKGVsLCBwcm9wLCBpc0xpbmtlckxpa2UodmFsdWUpID8gdmFsdWUucmVmIDogdmFsdWUpO1xuXHRyZXR1cm4gYmluZEhhbmRsZXIoZWwsIHZhbHVlLCBwcm9wLCBoYW5kbGVyLCBzZXQsIHdpdGhPYnNlcnZlcik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiAuLi9kb20udHMvc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBkZWxldGVTdHlsZVByb3BlcnR5ID0gKGVsLCBuYW1lKSA9PiBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShjYW1lbFRvS2ViYWIobmFtZSkpO1xudmFyIGhhbmRsZVN0eWxlQ2hhbmdlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbD8uc3R5bGU7XG5cdGlmICghcHJvcCB8fCB0eXBlb2YgcHJvcCAhPSBcInN0cmluZ1wiIHx8ICFlbCB8fCAhc3R5bGVSZWYpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcih2YWwsICgpID0+IHtcblx0XHRpZiAoaXNWYWwodmFsKSB8fCBoYXNWYWx1ZSh2YWwpIHx8IGlzVmFsdWVVbml0KHZhbCkpIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3AsIHZhbCk7XG5cdFx0ZWxzZSBpZiAodmFsID09IG51bGwpIGRlbGV0ZVN0eWxlUHJvcGVydHkoZWwsIHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL0FuaW1hdGUudHNcbnZhciBwYXJzZVRpbWUgPSAodiwgZmFsbGJhY2sgPSAwKSA9PiB7XG5cdGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHY7XG5cdGlmICghdikgcmV0dXJuIGZhbGxiYWNrO1xuXHRjb25zdCB0ID0gU3RyaW5nKHYpLnRyaW0oKTtcblx0aWYgKHQuZW5kc1dpdGgoXCJtc1wiKSkgcmV0dXJuIHBhcnNlRmxvYXQodCk7XG5cdGlmICh0LmVuZHNXaXRoKFwic1wiKSkgcmV0dXJuIHBhcnNlRmxvYXQodCkgKiAxZTM7XG5cdHJldHVybiBwYXJzZUZsb2F0KHQpIHx8IGZhbGxiYWNrO1xufTtcbnZhciBub3JtYWxpemVJdGVyYXRpb25Db3VudCA9IChjb3VudCkgPT4ge1xuXHRpZiAoY291bnQgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG5cdGlmIChjb3VudCA9PT0gLTEgfHwgY291bnQgPT09IEluZmluaXR5KSByZXR1cm4gSW5maW5pdHk7XG5cdHJldHVybiBNYXRoLm1heCgxLCBNYXRoLmZsb29yKGNvdW50KSk7XG59O1xudmFyIGNhbWVsVG9LZWJhYiQxID0gKHN0cikgPT4ge1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL1tBLVpdL2csIChsZXR0ZXIpID0+IGAtJHtsZXR0ZXIudG9Mb3dlckNhc2UoKX1gKTtcbn07XG52YXIgcGFyc2VQcm9wZXJ0eUxpc3QgPSAob3B0aW9ucykgPT4ge1xuXHRjb25zdCBmcm9tU3RyaW5nID0gW107XG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5wcm9wZXJ0aWVzID09IFwic3RyaW5nXCIpIHtcblx0XHRjb25zdCBwcm9wcyA9IG9wdGlvbnMucHJvcGVydGllcz8udHJpbT8uKCk/LnNwbGl0Py4oXCI7XCIpO1xuXHRcdGZyb21TdHJpbmcucHVzaCguLi5BcnJheS5mcm9tKHByb3BzIHx8IFtdKT8ubWFwPy4oKCRwYWlyKSA9PiB7XG5cdFx0XHRpZiAoJHBhaXI/LmluY2x1ZGVzPy4oXCI6XCIpKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gKCRwYWlyPy5zcGxpdD8uKFwiOlwiKSA/PyBbXSk/LnNsaWNlPy4oMSwgLTEpPy5qb2luPy4oXCI6XCIpO1xuXHRcdFx0XHRyZXR1cm4geyBbKCRwYWlyPy5bMF0pPy50cmltPy4oKV06IHZhbHVlPy50cmltPy4oKSB9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSk/LmZpbHRlcj8uKChhKSA9PiBhICE9IG51bGwpIHx8IFtdKTtcblx0fVxuXHRyZXR1cm4gQXJyYXkuZnJvbShBcnJheS5pc0FycmF5KG9wdGlvbnMucHJvcGVydGllcykgPyBvcHRpb25zLnByb3BlcnRpZXMgOiBmcm9tU3RyaW5nKTtcbn07XG52YXIgcGFyc2VBbmltYXRpb25UZW1wbGF0ZSA9IChzdHJpbmdzLCB2YWx1ZXMpID0+IHtcblx0Y29uc3QgcHJvcGVydGllcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGxldCBmdWxsVGV4dCA9IFwiXCI7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdGZ1bGxUZXh0ICs9IHN0cmluZ3NbaV07XG5cdFx0aWYgKGkgPCB2YWx1ZXMubGVuZ3RoKSBmdWxsVGV4dCArPSBgX19TTE9UXyR7aX1fX2A7XG5cdH1cblx0Y29uc3QgZGVjbGFyYXRpb25zID0gZnVsbFRleHQuc3BsaXQoXCI7XCIpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcblx0Zm9yIChjb25zdCBkZWNsYXJhdGlvbiBvZiBkZWNsYXJhdGlvbnMpIHtcblx0XHRjb25zdCBjb2xvbkluZGV4ID0gZGVjbGFyYXRpb24uaW5kZXhPZihcIjpcIik7XG5cdFx0aWYgKGNvbG9uSW5kZXggPT09IC0xKSBjb250aW51ZTtcblx0XHRjb25zdCBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLnNsaWNlKDAsIGNvbG9uSW5kZXgpLnRyaW0oKTtcblx0XHRjb25zdCB2YWx1ZVRleHQgPSBkZWNsYXJhdGlvbi5zbGljZShjb2xvbkluZGV4ICsgMSkudHJpbSgpO1xuXHRcdGNvbnN0IHNsb3RNYXRjaCA9IC9fX1NMT1RfKFxcZCspX18vLmV4ZWModmFsdWVUZXh0KTtcblx0XHRpZiAoIXNsb3RNYXRjaCkgY29udGludWU7XG5cdFx0Y29uc3Qgc2xvdFZhbHVlID0gdmFsdWVzW3BhcnNlSW50KHNsb3RNYXRjaFsxXSwgMTApXTtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc2xvdFZhbHVlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihgQVxcYCR7cHJvcGVydHl9XFxgIGV4cGVjdHMgYW4gYXJyYXkgb2YgdmFsdWVzLCBnb3QgJHt0eXBlb2Ygc2xvdFZhbHVlfWApO1xuXHRcdHByb3BlcnRpZXMuc2V0KHByb3BlcnR5LCB7XG5cdFx0XHRwcm9wZXJ0eSxcblx0XHRcdHZhbHVlczogc2xvdFZhbHVlXG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHsgcHJvcGVydGllcyB9O1xufTtcbnZhciBwcm9jZXNzQW5pbWF0aW9uVmFsdWVzID0gKHZhbHVlcykgPT4ge1xuXHRjb25zdCByZXNvbHZlZCA9IFtdO1xuXHRjb25zdCByZWFjdGl2ZUluZGljZXMgPSBbXTtcblx0bGV0IGhhc1JlYWN0aXZlID0gZmFsc2U7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB2YWx1ZXNbaV07XG5cdFx0aWYgKGlzUmVhY3RpdmVTdHlsZVZhbHVlKHZhbHVlKSkge1xuXHRcdFx0aGFzUmVhY3RpdmUgPSB0cnVlO1xuXHRcdFx0cmVhY3RpdmVJbmRpY2VzLnB1c2goaSk7XG5cdFx0XHRyZXNvbHZlZC5wdXNoKHZhbHVlLnZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKGlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSh2YWx1ZSkpIHJlc29sdmVkLnB1c2godmFsdWUpO1xuXHRcdGVsc2UgcmVzb2x2ZWQucHVzaCh2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHtcblx0XHRyZXNvbHZlZCxcblx0XHRoYXNSZWFjdGl2ZSxcblx0XHRyZWFjdGl2ZUluZGljZXNcblx0fTtcbn07XG52YXIgYnVpbGRXZWJBbmltYXRpb25LZXlmcmFtZXMgPSAob3B0aW9ucykgPT4ge1xuXHRjb25zdCBnbG9iYWxPZmZzZXRzID0gb3B0aW9ucz8ub2Zmc2V0cztcblx0Y29uc3QgcHJvcGVydHlMaXN0ID0gcGFyc2VQcm9wZXJ0eUxpc3Qob3B0aW9ucyk7XG5cdGlmIChwcm9wZXJ0eUxpc3QubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBhbmltYXRhYmxlIHByb3BlcnRpZXMgZm91bmQgaW4gQSB0ZW1wbGF0ZVwiKTtcblx0Y29uc3QgbWF4TGVuZ3RoID0gTWF0aC5tYXgoLi4ucHJvcGVydHlMaXN0Lm1hcCgocCkgPT4gcC52YWx1ZXMubGVuZ3RoKSk7XG5cdGNvbnN0IG9mZnNldHMgPSAoZ2xvYmFsT2Zmc2V0cz8ubGVuZ3RoID4gMSA/IGdsb2JhbE9mZnNldHMgOiBudWxsKSB8fCBBcnJheS5mcm9tKHsgbGVuZ3RoOiBtYXhMZW5ndGggfSwgKF8sIGkpID0+IGkgLyAobWF4TGVuZ3RoIC0gMSkpO1xuXHRjb25zdCBmcmFtZXMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtYXhMZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGZyYW1lID0geyBvZmZzZXQ6IG9mZnNldHNbaV0gPz8gaSAvIChtYXhMZW5ndGggLSAxKSB9O1xuXHRcdGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0eUxpc3QpIHtcblx0XHRcdGNvbnN0IHsgcmVzb2x2ZWQgfSA9IHByb2Nlc3NBbmltYXRpb25WYWx1ZXMocHJvcC52YWx1ZXMpO1xuXHRcdFx0Y29uc3Qga2ViYWJQcm9wID0gY2FtZWxUb0tlYmFiJDEocHJvcC5wcm9wZXJ0eSk7XG5cdFx0XHRsZXQgdmFsdWUgPSByZXNvbHZlZFtNYXRoLm1pbihpLCByZXNvbHZlZC5sZW5ndGggLSAxKV07XG5cdFx0XHRpZiAoaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbHVlKSkgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuXHRcdFx0ZnJhbWVba2ViYWJQcm9wXSA9IHZhbHVlO1xuXHRcdH1cblx0XHRmcmFtZXMucHVzaChmcmFtZSk7XG5cdH1cblx0cmV0dXJuIGZyYW1lcztcbn07XG52YXIgYnVpbGRBbmltYXRpb25UaW1pbmcgPSAob3B0aW9ucykgPT4ge1xuXHRjb25zdCBkdXJhdGlvbiA9IHBhcnNlVGltZShvcHRpb25zLmR1cmF0aW9uID8/IDMwMCk7XG5cdGNvbnN0IGRlbGF5ID0gcGFyc2VUaW1lKG9wdGlvbnMuZGVsYXkgPz8gMCk7XG5cdGNvbnN0IGl0ZXJhdGlvbnMgPSBub3JtYWxpemVJdGVyYXRpb25Db3VudChvcHRpb25zLml0ZXJhdGlvbkNvdW50KTtcblx0cmV0dXJuIHtcblx0XHRkdXJhdGlvbixcblx0XHRkZWxheSxcblx0XHRjb21wb3NpdGU6IG9wdGlvbnMuY29tcG9zaXRlIHx8IFwicmVwbGFjZVwiLFxuXHRcdGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnMgPT09IFwiSW5maW5pdHlcIiA/IEluZmluaXR5IDogaXRlcmF0aW9ucyxcblx0XHRmaWxsOiBvcHRpb25zLmZpbGxNb2RlID8/IFwibm9uZVwiLFxuXHRcdGRpcmVjdGlvbjogb3B0aW9ucy5kaXJlY3Rpb24gPz8gXCJub3JtYWxcIixcblx0XHRlYXNpbmc6IHR5cGVvZiBvcHRpb25zLmVhc2luZyA9PT0gXCJzdHJpbmdcIiA/IG9wdGlvbnMuZWFzaW5nIDogXCJsaW5lYXJcIixcblx0XHR0aW1lbGluZTogb3B0aW9ucy50aW1lbGluZVxuXHR9O1xufTtcbnZhciBjcmVhdGVSZWFjdGl2ZUFuaW1hdGlvbiA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IHByb3BlcnR5TGlzdCA9IHBhcnNlUHJvcGVydHlMaXN0KG9wdGlvbnMpO1xuXHRjb25zdCBzdWJzY3JpcHRpb25zID0gW107XG5cdGNvbnN0IGZyYW1lcyA9IGJ1aWxkV2ViQW5pbWF0aW9uS2V5ZnJhbWVzKG9wdGlvbnMpO1xuXHRjb25zdCB0aW1pbmcgPSBidWlsZEFuaW1hdGlvblRpbWluZyhvcHRpb25zKTtcblx0Y29uc3QgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKGZyYW1lcywgdGltaW5nKTtcblx0Zm9yIChjb25zdCBwcm9wIG9mIHByb3BlcnR5TGlzdCkge1xuXHRcdGNvbnN0IHsgaGFzUmVhY3RpdmUsIHJlYWN0aXZlSW5kaWNlcyB9ID0gcHJvY2Vzc0FuaW1hdGlvblZhbHVlcyhwcm9wLnZhbHVlcyk7XG5cdFx0aWYgKCFoYXNSZWFjdGl2ZSkgY29udGludWU7XG5cdFx0Zm9yIChjb25zdCBpbmRleCBvZiByZWFjdGl2ZUluZGljZXMpIHtcblx0XHRcdGNvbnN0IHJlYWN0aXZlVmFsdWUgPSBwcm9wLnZhbHVlc1tpbmRleF07XG5cdFx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBiaW5kV2l0aChlbGVtZW50LCBgLS1hbmltLSR7cHJvcC5wcm9wZXJ0eX0tJHtpbmRleH1gLCByZWFjdGl2ZVZhbHVlLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5ld0ZyYW1lcyA9IGJ1aWxkV2ViQW5pbWF0aW9uS2V5ZnJhbWVzKG9wdGlvbnMpO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50VGltZSA9IGFuaW1hdGlvbi5jdXJyZW50VGltZTtcblx0XHRcdFx0YW5pbWF0aW9uLmVmZmVjdCA9IG5ldyBLZXlmcmFtZUVmZmVjdChlbGVtZW50LCBuZXdGcmFtZXMsIHRpbWluZyk7XG5cdFx0XHRcdGlmIChjdXJyZW50VGltZSAhPT0gbnVsbCkgYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG5cdFx0XHR9KTtcblx0XHRcdHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuXHRcdH1cblx0fVxuXHRjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuXHRcdGFuaW1hdGlvbi5jYW5jZWwoKTtcblx0XHRzdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YikgPT4gc3ViKCkpO1xuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdGFuaW1hdGlvbixcblx0XHRjbGVhbnVwXG5cdH07XG59O1xudmFyIEEgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG5cdHJldHVybiBwYXJzZUFuaW1hdGlvblRlbXBsYXRlKHN0cmluZ3MsIHZhbHVlcyk7XG59O1xudmFyIGRvQW5pbWF0aW9uID0gKGVsZW1lbnQsIGNvbmZpZywga2V5ZnJhbWVzKSA9PiB7XG5cdGlmIChwYXJzZVByb3BlcnR5TGlzdChjb25maWcpLnNvbWUoKHByb3ApID0+IHtcblx0XHRjb25zdCB7IGhhc1JlYWN0aXZlIH0gPSBwcm9jZXNzQW5pbWF0aW9uVmFsdWVzKHByb3AudmFsdWVzKTtcblx0XHRyZXR1cm4gaGFzUmVhY3RpdmU7XG5cdH0pKSByZXR1cm4gY3JlYXRlUmVhY3RpdmVBbmltYXRpb24oZWxlbWVudCwgY29uZmlnKTtcblx0Y29uc3QgZnJhbWVzID0gYnVpbGRXZWJBbmltYXRpb25LZXlmcmFtZXMoY29uZmlnKTtcblx0Y29uc3QgdGltaW5nID0gYnVpbGRBbmltYXRpb25UaW1pbmcoY29uZmlnKTtcblx0Y29uc3QgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKGZyYW1lcywgdGltaW5nKTtcblx0Y29uc3QgY2xlYW51cCA9ICgpID0+IHtcblx0XHRhbmltYXRpb24uY2FuY2VsKCk7XG5cdH07XG5cdHJldHVybiB7XG5cdFx0YW5pbWF0aW9uLFxuXHRcdGNsZWFudXBcblx0fTtcbn07XG52YXIgYW5pbWF0ZSA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IHByb3BlcnRpZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLnByb3BlcnRpZXMpKSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHRocm93IG5ldyBUeXBlRXJyb3IoYGFuaW1hdGUoKSBleHBlY3RzIGFycmF5cyBvZiB2YWx1ZXMsIGdvdCAke3R5cGVvZiB2YWx1ZXN9IGZvciAke3Byb3BlcnR5fWApO1xuXHRcdHByb3BlcnRpZXMuc2V0KHByb3BlcnR5LCB7XG5cdFx0XHRwcm9wZXJ0eSxcblx0XHRcdHZhbHVlc1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBkb0FuaW1hdGlvbihlbGVtZW50LCB7IC4uLm9wdGlvbnMgfSwgcHJvcGVydGllcyk7XG59O1xudmFyIGRlZmluZUFuaW1hdGlvbiA9IChvcHRpb25zKSA9PiB7XG5cdHJldHVybiAoZWxlbWVudCkgPT4ge1xuXHRcdHJldHVybiBkb0FuaW1hdGlvbihlbGVtZW50LCBvcHRpb25zKTtcblx0fTtcbn07XG52YXIgc2VxdWVuY2VBbmltYXRpb25zID0gYXN5bmMgKGVsZW1lbnQsIHNlcXVlbmNlKSA9PiB7XG5cdGZvciAoY29uc3QgY29uZmlnIG9mIHNlcXVlbmNlKSB7XG5cdFx0Y29uc3QgeyBhbmltYXRpb24gfSA9IGRvQW5pbWF0aW9uKGVsZW1lbnQsIGNvbmZpZyk7XG5cdFx0YXdhaXQgYW5pbWF0aW9uLmZpbmlzaGVkO1xuXHR9XG59O1xudmFyIHBhcmFsbGVsQW5pbWF0aW9ucyA9IChlbGVtZW50LCBhbmltYXRpb25zKSA9PiB7XG5cdGNvbnN0IHJlc3VsdHMgPSBhbmltYXRpb25zLm1hcCgoY29uZmlnKSA9PiBkb0FuaW1hdGlvbihlbGVtZW50LCBjb25maWcpKTtcblx0Y29uc3QgY2xlYW51cCA9ICgpID0+IHtcblx0XHRyZXN1bHRzLmZvckVhY2goKHIpID0+IHIuY2xlYW51cCgpKTtcblx0fTtcblx0cmV0dXJuIHtcblx0XHRhbmltYXRpb25zOiByZXN1bHRzLm1hcCgocikgPT4gci5hbmltYXRpb24pLFxuXHRcdGNsZWFudXBcblx0fTtcbn07XG52YXIgc3RhZ2dlckFuaW1hdGlvbiA9IChlbGVtZW50cywgb3B0aW9ucywgc3RhZ2dlckRlbGF5ID0gMTAwKSA9PiB7XG5cdHJldHVybiBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgZGVsYXkgPSBwYXJzZVRpbWUob3B0aW9ucz8uZGVsYXkgPz8gMCkgKyBpbmRleCAqIHN0YWdnZXJEZWxheTtcblx0XHRyZXR1cm4gZG9BbmltYXRpb24oZWxlbWVudCwge1xuXHRcdFx0Li4ub3B0aW9ucyxcblx0XHRcdGRlbGF5XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL0FuaW1hdGFibGUudHNcbnZhciBBTklNQVRBQkxFX0JSQU5EID0gU3ltYm9sLmZvcihcImZlc3QuYW5pbWF0YWJsZVwiKTtcbnZhciBub3JtYWxpemVJdGVyYXRpb25zID0gKG4pID0+IG4gPT09IC0xIHx8IG4gPT09IEluZmluaXR5ID8gSW5maW5pdHkgOiBNYXRoLm1heCgxLCBuID8/IDEpO1xudmFyIGFuaW1hdGFibGVJZCA9IDA7XG52YXIgb25TY3JvbGwgPSAobyA9IHt9KSA9PiAoe1xuXHRraW5kOiBcInNjcm9sbFwiLFxuXHQuLi5vXG59KTtcbnZhciBvblZpZXcgPSAobyA9IHt9KSA9PiAoe1xuXHRraW5kOiBcInZpZXdcIixcblx0Li4ub1xufSk7XG52YXIgaXNTY3JvbGxEcml2ZW4gPSAodCkgPT4gdCAhPSBudWxsICYmIHR5cGVvZiB0ID09PSBcIm9iamVjdFwiICYmIHQua2luZCA9PT0gXCJzY3JvbGxcIjtcbnZhciBpc1ZpZXdEcml2ZW4gPSAodCkgPT4gdCAhPSBudWxsICYmIHR5cGVvZiB0ID09PSBcIm9iamVjdFwiICYmIHQua2luZCA9PT0gXCJ2aWV3XCI7XG52YXIgQW5pbWF0YWJsZVZhbHVlID0gY2xhc3Mge1xuXHRbQU5JTUFUQUJMRV9CUkFORF0gPSB0cnVlO1xuXHRpZCA9IGFuaW1hdGFibGVJZCsrO1xuXHQjc3RlcHM7XG5cdCNvcHRpb25zO1xuXHQjY3VycmVudDtcblx0I3N1YnNjcmliZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0I2F0dGFjaG1lbnRzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0I3Jlc29sdmVFbGVtZW50UmVmKHYsIHNlbGYpIHtcblx0XHRpZiAodiA9PSBudWxsIHx8IHYgPT09IFwic2VsZlwiKSByZXR1cm4gc2VsZjtcblx0XHRpZiAodiA9PT0gXCJyb290XCIpIHJldHVybiBzZWxmLm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCA/PyBzZWxmLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdGlmICh0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiBcInZhbHVlXCIgaW4gdiAmJiAhKHYgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuIHYudmFsdWUgPz8gc2VsZjtcblx0XHRyZXR1cm4gdjtcblx0fVxuXHQjZmluZE5lYXJlc3RTY3JvbGxlcihlbCkge1xuXHRcdGZvciAobGV0IG5vZGUgPSBlbC5wYXJlbnRFbGVtZW50OyBub2RlOyBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50KSB7XG5cdFx0XHRjb25zdCBzID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0XHRcdGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KHMub3ZlcmZsb3cgKyBzLm92ZXJmbG93WCArIHMub3ZlcmZsb3dZKSkgcmV0dXJuIG5vZGU7XG5cdFx0fVxuXHRcdHJldHVybiBlbC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgPz8gZWwub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdH1cblx0I2NyZWF0ZVRpbWVsaW5lKGVsZW1lbnQsIHRyaWdnZXIpIHtcblx0XHRjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgPz8gZ2xvYmFsVGhpcztcblx0XHRpZiAoaXNTY3JvbGxEcml2ZW4odHJpZ2dlcikpIHtcblx0XHRcdGNvbnN0IFNjcm9sbFRpbWVsaW5lQ3RvciA9IHdpbi5TY3JvbGxUaW1lbGluZTtcblx0XHRcdGlmICh0eXBlb2YgU2Nyb2xsVGltZWxpbmVDdG9yICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuXHRcdFx0cmV0dXJuIG5ldyBTY3JvbGxUaW1lbGluZUN0b3Ioe1xuXHRcdFx0XHRzb3VyY2U6IHRyaWdnZXIuc291cmNlID09PSBcIm5lYXJlc3RcIiB8fCB0cmlnZ2VyLnNvdXJjZSA9PSBudWxsID8gdGhpcy4jZmluZE5lYXJlc3RTY3JvbGxlcihlbGVtZW50KSA6IHRoaXMuI3Jlc29sdmVFbGVtZW50UmVmKHRyaWdnZXIuc291cmNlLCBlbGVtZW50KSxcblx0XHRcdFx0YXhpczogdHJpZ2dlci5heGlzID8/IFwiYmxvY2tcIlxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNvbnN0IFZpZXdUaW1lbGluZUN0b3IgPSB3aW4uVmlld1RpbWVsaW5lO1xuXHRcdGlmICh0eXBlb2YgVmlld1RpbWVsaW5lQ3RvciAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gbmV3IFZpZXdUaW1lbGluZUN0b3Ioe1xuXHRcdFx0c3ViamVjdDogdHJpZ2dlci5zdWJqZWN0ID8gdGhpcy4jcmVzb2x2ZUVsZW1lbnRSZWYodHJpZ2dlci5zdWJqZWN0LCBlbGVtZW50KSA6IGVsZW1lbnQsXG5cdFx0XHRheGlzOiB0cmlnZ2VyLmF4aXMgPz8gXCJibG9ja1wiLFxuXHRcdFx0aW5zZXQ6IHRyaWdnZXIuaW5zZXRcblx0XHR9KTtcblx0fVxuXHQjc3RhcnRUaW1lbGluZURyaXZlbihlbGVtZW50LCBhdHRhY2htZW50LCBwbGFuLCB0cmlnZ2VyKSB7XG5cdFx0Y29uc3QgdGltZWxpbmUgPSB0aGlzLiNjcmVhdGVUaW1lbGluZShlbGVtZW50LCB0cmlnZ2VyKTtcblx0XHRpZiAoIXRpbWVsaW5lKSByZXR1cm4gdGhpcy4jc3RhcnRUaW1lbGluZUZhbGxiYWNrKGVsZW1lbnQsIGF0dGFjaG1lbnQsIHBsYW4sIHRyaWdnZXIpO1xuXHRcdGNvbnN0IHRpbWluZyA9IHRoaXMuI2J1aWxkVGltaW5nKCk7XG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKHRoaXMuI2J1aWxkS2V5ZnJhbWVzKHBsYW4pLCB7XG5cdFx0XHQuLi50aW1pbmcsXG5cdFx0XHRkdXJhdGlvbjogXCJhdXRvXCIsXG5cdFx0XHRkZWxheTogMCxcblx0XHRcdGVuZERlbGF5OiAwLFxuXHRcdFx0aXRlcmF0aW9uczogMSxcblx0XHRcdGZpbGw6IHRoaXMuI29wdGlvbnMuZmlsbCA/PyBcImJvdGhcIixcblx0XHRcdHRpbWVsaW5lXG5cdFx0fSk7XG5cdFx0aWYgKHRyaWdnZXIucmFuZ2VTdGFydCkgYW5pbWF0aW9uLnJhbmdlU3RhcnQgPSB0cmlnZ2VyLnJhbmdlU3RhcnQ7XG5cdFx0aWYgKHRyaWdnZXIucmFuZ2VFbmQpIGFuaW1hdGlvbi5yYW5nZUVuZCA9IHRyaWdnZXIucmFuZ2VFbmQ7XG5cdFx0YXR0YWNobWVudC5hbmltYXRpb24gPSBhbmltYXRpb247XG5cdFx0cmV0dXJuICgpID0+IGFuaW1hdGlvbi5jYW5jZWwoKTtcblx0fVxuXHRjb25zdHJ1Y3RvcihzdGVwcywgb3B0aW9ucyA9IHt9KSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHN0ZXBzKSB8fCBzdGVwcy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYW5pbWF0YWJsZSgpIGV4cGVjdHMgYXQgbGVhc3QgMiBzdGVwc1wiKTtcblx0XHR0aGlzLiNzdGVwcyA9IHN0ZXBzO1xuXHRcdHRoaXMuI29wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuI2N1cnJlbnQgPSB0aGlzLiNyZXNvbHZlU3RlcChzdGVwc1swXSk7XG5cdH1cblx0I3N0YXJ0VGltZWxpbmVGYWxsYmFjayhlbGVtZW50LCBhdHRhY2htZW50LCBwbGFuLCB0cmlnZ2VyKSB7XG5cdFx0Y29uc3QgRFVSQVRJT04gPSAxZTQ7XG5cdFx0Y29uc3QgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKHRoaXMuI2J1aWxkS2V5ZnJhbWVzKHBsYW4pLCB7XG5cdFx0XHQuLi50aGlzLiNidWlsZFRpbWluZygpLFxuXHRcdFx0ZHVyYXRpb246IERVUkFUSU9OLFxuXHRcdFx0ZGVsYXk6IDAsXG5cdFx0XHRpdGVyYXRpb25zOiAxLFxuXHRcdFx0ZmlsbDogXCJib3RoXCJcblx0XHR9KTtcblx0XHRhbmltYXRpb24ucGF1c2UoKTtcblx0XHRhdHRhY2htZW50LmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcblx0XHRjb25zdCBzY3JvbGxlciA9IGlzU2Nyb2xsRHJpdmVuKHRyaWdnZXIpID8gdHJpZ2dlci5zb3VyY2UgPT09IFwibmVhcmVzdFwiIHx8IHRyaWdnZXIuc291cmNlID09IG51bGwgPyB0aGlzLiNmaW5kTmVhcmVzdFNjcm9sbGVyKGVsZW1lbnQpIDogdGhpcy4jcmVzb2x2ZUVsZW1lbnRSZWYodHJpZ2dlci5zb3VyY2UsIGVsZW1lbnQpIDogdGhpcy4jZmluZE5lYXJlc3RTY3JvbGxlcihlbGVtZW50KTtcblx0XHRsZXQgcmFmSWQgPSAwO1xuXHRcdGNvbnN0IGNvbXB1dGVQcm9ncmVzcyA9ICgpID0+IHtcblx0XHRcdGlmIChpc1ZpZXdEcml2ZW4odHJpZ2dlcikpIHtcblx0XHRcdFx0Y29uc3QgdnAgPSBzY3JvbGxlciA9PT0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCA/IHtcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiBpbm5lckhlaWdodFxuXHRcdFx0XHR9IDogc2Nyb2xsZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRjb25zdCB0b3RhbCA9IHZwLmhlaWdodCArIHJlY3QuaGVpZ2h0O1xuXHRcdFx0XHRyZXR1cm4gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHZwLnRvcCArIHZwLmhlaWdodCAtIHJlY3QudG9wKSAvIHRvdGFsKSk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbCA9IHNjcm9sbGVyO1xuXHRcdFx0Y29uc3QgbWF4ID0gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0O1xuXHRcdFx0cmV0dXJuIG1heCA+IDAgPyBlbC5zY3JvbGxUb3AgLyBtYXggOiAwO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZCk7XG5cdFx0XHRyYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdGFuaW1hdGlvbi5jdXJyZW50VGltZSA9IGNvbXB1dGVQcm9ncmVzcygpICogRFVSQVRJT047XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGxpc3RlblRhcmdldCA9IHNjcm9sbGVyID09PSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50ID8gd2luZG93IDogc2Nyb2xsZXI7XG5cdFx0bGlzdGVuVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblx0XHRvblNjcm9sbCgpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZCk7XG5cdFx0XHRsaXN0ZW5UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG5cdFx0XHRhbmltYXRpb24uY2FuY2VsKCk7XG5cdFx0fTtcblx0fVxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2N1cnJlbnQ7XG5cdH1cblx0c2V0IHZhbHVlKG5leHQpIHtcblx0XHR0aGlzLiNjdXJyZW50ID0gbmV4dDtcblx0XHRmb3IgKGNvbnN0IGNiIG9mIHRoaXMuI3N1YnNjcmliZXJzKSBjYihuZXh0KTtcblx0fVxuXHR2YWx1ZU9mKCkge1xuXHRcdHJldHVybiB0aGlzLiNjdXJyZW50O1xuXHR9XG5cdHRvU3RyaW5nKCkge1xuXHRcdGNvbnN0IHYgPSB0aGlzLiNjdXJyZW50O1xuXHRcdHJldHVybiB2ID09IG51bGwgPyBcIlwiIDogU3RyaW5nKHYpO1xuXHR9XG5cdFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcblx0XHRpZiAoaGludCA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0Y29uc3QgbiA9IE51bWJlcih0aGlzLiNjdXJyZW50KTtcblx0XHRcdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogMDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcblx0fVxuXHRzdWJzY3JpYmUoY2IpIHtcblx0XHR0aGlzLiNzdWJzY3JpYmVycy5hZGQoY2IpO1xuXHRcdHJldHVybiAoKSA9PiB0aGlzLiNzdWJzY3JpYmVycy5kZWxldGUoY2IpO1xuXHR9XG5cdGdldCBvcHRpb25zKCkge1xuXHRcdHJldHVybiB0aGlzLiNvcHRpb25zO1xuXHR9XG5cdGdldCBzdGVwcygpIHtcblx0XHRyZXR1cm4gdGhpcy4jc3RlcHM7XG5cdH1cblx0I3Jlc29sdmVTdGVwKHN0ZXApIHtcblx0XHRpZiAoc3RlcCAhPSBudWxsICYmIHR5cGVvZiBzdGVwID09PSBcIm9iamVjdFwiICYmIFwidmFsdWVcIiBpbiBzdGVwKSByZXR1cm4gc3RlcC52YWx1ZTtcblx0XHRyZXR1cm4gc3RlcDtcblx0fVxuXHQjYnVpbGRLZXlmcmFtZXMocGxhbikge1xuXHRcdGNvbnN0IHN0ZXBzID0gdGhpcy4jc3RlcHMubWFwKChzKSA9PiB0aGlzLiNyZXNvbHZlU3RlcChzKSk7XG5cdFx0Y29uc3QgY291bnQgPSBzdGVwcy5sZW5ndGg7XG5cdFx0Y29uc3Qgb2Zmc2V0cyA9IHRoaXMuI29wdGlvbnMub2Zmc2V0cztcblx0XHRjb25zdCBlYXNpbmcgPSB0aGlzLiNvcHRpb25zLmVhc2luZztcblx0XHRyZXR1cm4gc3RlcHMubWFwKChyYXcsIGkpID0+IHtcblx0XHRcdGNvbnN0IGZyYW1lID0geyBvZmZzZXQ6IG9mZnNldHM/LltpXSA/PyAoY291bnQgPiAxID8gaSAvIChjb3VudCAtIDEpIDogMCkgfTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGVhc2luZykpIHtcblx0XHRcdFx0aWYgKGVhc2luZ1tpXSkgZnJhbWUuZWFzaW5nID0gZWFzaW5nW2ldO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHZhbHVlID0gcmF3O1xuXHRcdFx0aWYgKHBsYW4ubW9kZSA9PT0gXCJwcm9wZXJ0eVwiICYmIHBsYW4udW5pdCAhPSBudWxsICYmIHR5cGVvZiByYXcgPT09IFwibnVtYmVyXCIpIHZhbHVlID0gYCR7cmF3fSR7cGxhbi51bml0fWA7XG5cdFx0XHRpZiAocGxhbi5tb2RlID09PSBcImN1c3RvbS1wcm9wZXJ0eVwiICYmIHR5cGVvZiByYXcgIT09IFwic3RyaW5nXCIpIHZhbHVlID0gU3RyaW5nKHJhdyk7XG5cdFx0XHRmcmFtZVtwbGFuLnRhcmdldF0gPSB2YWx1ZTtcblx0XHRcdHJldHVybiBmcmFtZTtcblx0XHR9KTtcblx0fVxuXHQjYnVpbGRUaW1pbmcoKSB7XG5cdFx0Y29uc3QgbyA9IHRoaXMuI29wdGlvbnM7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGR1cmF0aW9uOiBwYXJzZVRpbWUoby5kdXJhdGlvbiwgMzAwKSxcblx0XHRcdGRlbGF5OiBwYXJzZVRpbWUoby5kZWxheSwgMCksXG5cdFx0XHRlbmREZWxheTogby5lbmREZWxheSA/PyAwLFxuXHRcdFx0aXRlcmF0aW9uczogbm9ybWFsaXplSXRlcmF0aW9ucyhvLml0ZXJhdGlvbnMpLFxuXHRcdFx0ZGlyZWN0aW9uOiBvLmRpcmVjdGlvbiA/PyBcIm5vcm1hbFwiLFxuXHRcdFx0ZmlsbDogby5maWxsID8/IFwiYm90aFwiLFxuXHRcdFx0Y29tcG9zaXRlOiBvLmNvbXBvc2l0ZSxcblx0XHRcdGVhc2luZzogQXJyYXkuaXNBcnJheShvLmVhc2luZykgPyBcImxpbmVhclwiIDogby5lYXNpbmcgPz8gXCJsaW5lYXJcIlxuXHRcdH07XG5cdH1cblx0YXR0YWNoKGVsZW1lbnQsIHBsYW4pIHtcblx0XHRjb25zdCBhdHRhY2htZW50ID0ge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdGFuaW1hdGlvbjogbnVsbCxcblx0XHRcdGNsZWFudXA6ICgpID0+IHt9XG5cdFx0fTtcblx0XHRjb25zdCB0cmlnZ2VyID0gdGhpcy4jb3B0aW9ucy50cmlnZ2VyID8/IFwibW91bnRcIjtcblx0XHRsZXQgaW5uZXI7XG5cdFx0aWYgKGlzU2Nyb2xsRHJpdmVuKHRyaWdnZXIpIHx8IGlzVmlld0RyaXZlbih0cmlnZ2VyKSkgaW5uZXIgPSB0aGlzLiNzdGFydFRpbWVsaW5lRHJpdmVuKGVsZW1lbnQsIGF0dGFjaG1lbnQsIHBsYW4sIHRyaWdnZXIpO1xuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc3Qgc3RhcnQgPSAoKSA9PiB7XG5cdFx0XHRcdGF0dGFjaG1lbnQuYW5pbWF0aW9uPy5jYW5jZWwoKTtcblx0XHRcdFx0Y29uc3QgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKHRoaXMuI2J1aWxkS2V5ZnJhbWVzKHBsYW4pLCB0aGlzLiNidWlsZFRpbWluZygpKTtcblx0XHRcdFx0YXR0YWNobWVudC5hbmltYXRpb24gPSBhbmltYXRpb247XG5cdFx0XHRcdHRoaXMuI3RyYWNrUHJvZ3Jlc3MoYW5pbWF0aW9uLCBwbGFuKTtcblx0XHRcdFx0cmV0dXJuIGFuaW1hdGlvbjtcblx0XHRcdH07XG5cdFx0XHRpbm5lciA9IHRoaXMuI3dpcmVUcmlnZ2VyKGVsZW1lbnQsIGF0dGFjaG1lbnQsIHN0YXJ0KTtcblx0XHR9XG5cdFx0dGhpcy4jYXR0YWNobWVudHMuYWRkKGF0dGFjaG1lbnQpO1xuXHRcdGF0dGFjaG1lbnQuY2xlYW51cCA9ICgpID0+IHtcblx0XHRcdGlubmVyKCk7XG5cdFx0XHR0aGlzLiNhdHRhY2htZW50cy5kZWxldGUoYXR0YWNobWVudCk7XG5cdFx0fTtcblx0XHRyZXR1cm4gYXR0YWNobWVudC5jbGVhbnVwO1xuXHR9XG5cdCN0cmFja1Byb2dyZXNzKGFuaW1hdGlvbiwgcGxhbikge1xuXHRcdGFuaW1hdGlvbi5maW5pc2hlZC50aGVuKCgpID0+IHtcblx0XHRcdGNvbnN0IGxhc3QgPSB0aGlzLiNyZXNvbHZlU3RlcCh0aGlzLiNzdGVwc1t0aGlzLiNzdGVwcy5sZW5ndGggLSAxXSk7XG5cdFx0XHR0aGlzLnZhbHVlID0gbGFzdDtcblx0XHR9KS5jYXRjaCgoKSA9PiB7fSk7XG5cdH1cblx0I3dpcmVUcmlnZ2VyKGVsZW1lbnQsIGF0dGFjaG1lbnQsIHN0YXJ0KSB7XG5cdFx0Y29uc3QgdHJpZ2dlciA9IHRoaXMuI29wdGlvbnMudHJpZ2dlciA/PyBcIm1vdW50XCI7XG5cdFx0Y29uc3QgcmV2ZXJzZU9uRXhpdCA9IHRoaXMuI29wdGlvbnMucmV2ZXJzZU9uRXhpdCA/PyB0cnVlO1xuXHRcdGNvbnN0IHBsYXlGb3J3YXJkID0gKCkgPT4ge1xuXHRcdFx0aWYgKCFhdHRhY2htZW50LmFuaW1hdGlvbiB8fCBhdHRhY2htZW50LmFuaW1hdGlvbi5wbGF5U3RhdGUgPT09IFwiaWRsZVwiKSBzdGFydCgpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGF0dGFjaG1lbnQuYW5pbWF0aW9uLnBsYXliYWNrUmF0ZSA9IE1hdGguYWJzKGF0dGFjaG1lbnQuYW5pbWF0aW9uLnBsYXliYWNrUmF0ZSB8fCAxKTtcblx0XHRcdFx0YXR0YWNobWVudC5hbmltYXRpb24ucGxheSgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcGxheUJhY2t3YXJkID0gKCkgPT4ge1xuXHRcdFx0aWYgKCFhdHRhY2htZW50LmFuaW1hdGlvbikgcmV0dXJuO1xuXHRcdFx0YXR0YWNobWVudC5hbmltYXRpb24ucmV2ZXJzZSgpO1xuXHRcdH07XG5cdFx0aWYgKHRyaWdnZXIgPT09IFwibW91bnRcIikge1xuXHRcdFx0c3RhcnQoKTtcblx0XHRcdHJldHVybiAoKSA9PiB7fTtcblx0XHR9XG5cdFx0aWYgKHRyaWdnZXIgPT09IFwibWFudWFsXCIpIHJldHVybiAoKSA9PiB7fTtcblx0XHRpZiAodHJpZ2dlciA9PT0gXCJob3ZlclwiIHx8IHRyaWdnZXIgPT09IFwiZm9jdXNcIikge1xuXHRcdFx0Y29uc3QgZW50ZXIgPSB0cmlnZ2VyID09PSBcImhvdmVyXCIgPyBcInBvaW50ZXJlbnRlclwiIDogXCJmb2N1c2luXCI7XG5cdFx0XHRjb25zdCBsZWF2ZSA9IHRyaWdnZXIgPT09IFwiaG92ZXJcIiA/IFwicG9pbnRlcmxlYXZlXCIgOiBcImZvY3Vzb3V0XCI7XG5cdFx0XHRjb25zdCBvbkVudGVyID0gKCkgPT4gcGxheUZvcndhcmQoKTtcblx0XHRcdGNvbnN0IG9uTGVhdmUgPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChyZXZlcnNlT25FeGl0KSBwbGF5QmFja3dhcmQoKTtcblx0XHRcdH07XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZW50ZXIsIG9uRW50ZXIpO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGxlYXZlLCBvbkxlYXZlKTtcblx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbnRlciwgb25FbnRlcik7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsZWF2ZSwgb25MZWF2ZSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAodHJpZ2dlciA9PT0gXCJjbGlja1wiKSB7XG5cdFx0XHRsZXQgZm9yd2FyZCA9IHRydWU7XG5cdFx0XHRjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRmb3J3YXJkID8gcGxheUZvcndhcmQoKSA6IHBsYXlCYWNrd2FyZCgpO1xuXHRcdFx0XHRmb3J3YXJkID0gIWZvcndhcmQ7XG5cdFx0XHR9O1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XG5cdFx0XHRyZXR1cm4gKCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XG5cdFx0fVxuXHRcdGlmICh0cmlnZ2VyID09PSBcInZpc2libGVcIikge1xuXHRcdFx0aWYgKHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHN0YXJ0KCk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiB7fTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBwbGF5Rm9yd2FyZCgpO1xuXHRcdFx0XHRlbHNlIGlmIChyZXZlcnNlT25FeGl0ICYmIGF0dGFjaG1lbnQuYW5pbWF0aW9uKSBwbGF5QmFja3dhcmQoKTtcblx0XHRcdH0sIHRoaXMuI29wdGlvbnMuaW50ZXJzZWN0aW9uKTtcblx0XHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG5cdFx0XHRyZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdH1cblx0XHRpZiAodHJpZ2dlciAhPSBudWxsICYmIHR5cGVvZiB0cmlnZ2VyID09PSBcIm9iamVjdFwiICYmIFwidmFsdWVcIiBpbiB0cmlnZ2VyKSB7XG5cdFx0XHRjb25zdCBhcHBseSA9ICh2KSA9PiB2ID8gcGxheUZvcndhcmQoKSA6IHBsYXlCYWNrd2FyZCgpO1xuXHRcdFx0YXBwbHkodHJpZ2dlci52YWx1ZSk7XG5cdFx0XHRjb25zdCB1bnN1YnNjcmliZSA9IHR5cGVvZiB0cmlnZ2VyLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiID8gdHJpZ2dlci5zdWJzY3JpYmUoYXBwbHkpIDogbnVsbDtcblx0XHRcdHJldHVybiAoKSA9PiB1bnN1YnNjcmliZT8uKCk7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7fTtcblx0fVxuXHQjZWFjaChmbikge1xuXHRcdGZvciAoY29uc3QgYXQgb2YgdGhpcy4jYXR0YWNobWVudHMpIGlmIChhdC5hbmltYXRpb24pIGZuKGF0LmFuaW1hdGlvbik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0cGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy4jZWFjaCgoYSkgPT4gYS5wbGF5KCkpO1xuXHR9XG5cdHBhdXNlKCkge1xuXHRcdHJldHVybiB0aGlzLiNlYWNoKChhKSA9PiBhLnBhdXNlKCkpO1xuXHR9XG5cdHJldmVyc2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2VhY2goKGEpID0+IGEucmV2ZXJzZSgpKTtcblx0fVxuXHRjYW5jZWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2VhY2goKGEpID0+IGEuY2FuY2VsKCkpO1xuXHR9XG5cdGZpbmlzaCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jZWFjaCgoYSkgPT4gYS5maW5pc2goKSk7XG5cdH1cblx0c2V0IHBsYXliYWNrUmF0ZShyYXRlKSB7XG5cdFx0dGhpcy4jZWFjaCgoYSkgPT4ge1xuXHRcdFx0YS5wbGF5YmFja1JhdGUgPSByYXRlO1xuXHRcdH0pO1xuXHR9XG5cdGdldCBmaW5pc2hlZCgpIHtcblx0XHRjb25zdCBsaXN0ID0gW107XG5cdFx0dGhpcy4jZWFjaCgoYSkgPT4gbGlzdC5wdXNoKGEuZmluaXNoZWQuY2F0Y2goKCkgPT4ge30pKSk7XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGxpc3QpLnRoZW4oKCkgPT4ge30pO1xuXHR9XG59O1xudmFyIGFuaW1hdGFibGUgPSAoc3RlcHMsIG9wdGlvbnMpID0+IG5ldyBBbmltYXRhYmxlVmFsdWUoc3RlcHMsIG9wdGlvbnMpO1xudmFyIGlzQW5pbWF0YWJsZVZhbHVlID0gKHZhbHVlKSA9PiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZVtBTklNQVRBQkxFX0JSQU5EXSA9PT0gdHJ1ZTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL1N0eWxlcy50c1xudmFyIGlzU3R5bGVCaW5kaW5nID0gKHN0eWxlcykgPT4ge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheShzdHlsZXMpICYmIHR5cGVvZiBzdHlsZXNbMF0gPT09IFwiZnVuY3Rpb25cIjtcbn07XG52YXIgc3R5bGVUZW1wbGF0ZUlkID0gMDtcbnZhciBDU1NfRElNRU5TSU9OX1VOSVRTID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1xuXHRcIiVcIixcblx0XCJweFwiLFxuXHRcImNtXCIsXG5cdFwibW1cIixcblx0XCJxXCIsXG5cdFwiaW5cIixcblx0XCJwY1wiLFxuXHRcInB0XCIsXG5cdFwiZW1cIixcblx0XCJleFwiLFxuXHRcImNoXCIsXG5cdFwiY2FwXCIsXG5cdFwiaWNcIixcblx0XCJsaFwiLFxuXHRcInJlbVwiLFxuXHRcInJleFwiLFxuXHRcInJjaFwiLFxuXHRcInJjYXBcIixcblx0XCJyaWNcIixcblx0XCJybGhcIixcblx0XCJ2d1wiLFxuXHRcInZoXCIsXG5cdFwidmlcIixcblx0XCJ2YlwiLFxuXHRcInZtaW5cIixcblx0XCJ2bWF4XCIsXG5cdFwic3Z3XCIsXG5cdFwic3ZoXCIsXG5cdFwic3ZpXCIsXG5cdFwic3ZiXCIsXG5cdFwic3ZtaW5cIixcblx0XCJzdm1heFwiLFxuXHRcImx2d1wiLFxuXHRcImx2aFwiLFxuXHRcImx2aVwiLFxuXHRcImx2YlwiLFxuXHRcImx2bWluXCIsXG5cdFwibHZtYXhcIixcblx0XCJkdndcIixcblx0XCJkdmhcIixcblx0XCJkdmlcIixcblx0XCJkdmJcIixcblx0XCJkdm1pblwiLFxuXHRcImR2bWF4XCIsXG5cdFwiY3F3XCIsXG5cdFwiY3FoXCIsXG5cdFwiY3FpXCIsXG5cdFwiY3FiXCIsXG5cdFwiY3FtaW5cIixcblx0XCJjcW1heFwiLFxuXHRcImRlZ1wiLFxuXHRcImdyYWRcIixcblx0XCJyYWRcIixcblx0XCJ0dXJuXCIsXG5cdFwic1wiLFxuXHRcIm1zXCIsXG5cdFwiaHpcIixcblx0XCJraHpcIixcblx0XCJkcGlcIixcblx0XCJkcGNtXCIsXG5cdFwiZHBweFwiLFxuXHRcInhcIixcblx0XCJmclwiXG5dKTtcbnZhciBpc0VmZmVjdGl2ZWx5RW1wdHlTdHlsZVRleHQgPSAoY3NzVGV4dCkgPT4ge1xuXHRjb25zdCBzb3VyY2UgPSB0eXBlb2YgY3NzVGV4dCA9PT0gXCJzdHJpbmdcIiA/IGNzc1RleHQudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzb3VyY2UpIHJldHVybiB0cnVlO1xuXHRmb3IgKGNvbnN0IGNodW5rIG9mIHNvdXJjZS5zcGxpdChcIjtcIikpIHtcblx0XHRjb25zdCBkZWNsYXJhdGlvbiA9IGNodW5rLnRyaW0oKTtcblx0XHRpZiAoIWRlY2xhcmF0aW9uKSBjb250aW51ZTtcblx0XHRjb25zdCBjb2xvbkluZGV4ID0gZGVjbGFyYXRpb24uaW5kZXhPZihcIjpcIik7XG5cdFx0aWYgKGNvbG9uSW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKGRlY2xhcmF0aW9uLnNsaWNlKGNvbG9uSW5kZXggKyAxKS50cmltKCkubGVuZ3RoID4gMCkgcmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcbnZhciBwcnVuZUVtcHR5U3R5bGVBdHRyaWJ1dGUgPSAoZWxlbWVudCkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsKSByZXR1cm47XG5cdGNvbnN0IHJhdyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik7XG5cdGlmIChyYXcgPT0gbnVsbCkgcmV0dXJuO1xuXHRpZiAoaXNFZmZlY3RpdmVseUVtcHR5U3R5bGVUZXh0KHJhdykpIHtcblx0XHRlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuXHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG5cdH1cbn07XG52YXIgYXBwbHlOb3JtYWxpemVkSW5saW5lU3R5bGUgPSAoZWxlbWVudCwgY3NzVGV4dCkgPT4ge1xuXHRpZiAoaXNFZmZlY3RpdmVseUVtcHR5U3R5bGVUZXh0KGNzc1RleHQpKSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIjtcblx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuXHRcdHJldHVybjtcblx0fVxuXHRlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xufTtcbnZhciBpc05hdGl2ZUNTU1N0eWxlVmFsdWUgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0Y29uc3QgQ1NTU3R5bGVWYWx1ZUN0b3IgPSBnbG9iYWxUaGlzLkNTU1N0eWxlVmFsdWU7XG5cdFx0aWYgKHR5cGVvZiBDU1NTdHlsZVZhbHVlQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHZhbHVlIGluc3RhbmNlb2YgQ1NTU3R5bGVWYWx1ZUN0b3IpIHJldHVybiB0cnVlO1xuXHRcdGZvciAobGV0IHByb3RvdHlwZSA9IHZhbHVlOyBwcm90b3R5cGU7IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpKSBpZiAocHJvdG90eXBlPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJDU1NTdHlsZVZhbHVlXCIpIHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgaXNSZWFjdGl2ZVN0eWxlVmFsdWUgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IGlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSh2YWx1ZSkpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gXCJ2YWx1ZVwiIGluIHZhbHVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgaXNTdGF0aWNTdHlsZUludGVycG9sYXRpb24gPSAodmFsdWUpID0+IHtcblx0cmV0dXJuIHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiO1xufTtcbnZhciBlc2NhcGVSZWdFeHAgPSAodmFsdWUpID0+IHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTtcbn07XG52YXIgY29udGFpbnNNYXJrZXIgPSAoY3NzVmFsdWUsIG1hcmtlcikgPT4ge1xuXHRyZXR1cm4gbmV3IFJlZ0V4cChgdmFyXFxcXChcXFxccyoke2VzY2FwZVJlZ0V4cChtYXJrZXIpfVxcXFxzKlxcXFwpYCkudGVzdChjc3NWYWx1ZSk7XG59O1xudmFyIHJlYWRBdHRhY2hlZENTU1VuaXQgPSAodGV4dCkgPT4ge1xuXHRjb25zdCBtYXRjaCA9IC9eKCV8W2EtekEtWl0rKS8uZXhlYyh0ZXh0KTtcblx0aWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGF1dGhvcmVkID0gbWF0Y2hbMF07XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBhdXRob3JlZC50b0xvd2VyQ2FzZSgpO1xuXHRpZiAoIUNTU19ESU1FTlNJT05fVU5JVFMuaGFzKG5vcm1hbGl6ZWQpKSByZXR1cm4gbnVsbDtcblx0cmV0dXJuIHtcblx0XHRhdXRob3JlZCxcblx0XHRub3JtYWxpemVkLFxuXHRcdGxlbmd0aDogYXV0aG9yZWQubGVuZ3RoXG5cdH07XG59O1xudmFyIGdldENTU1VuaXRGYWN0b3J5TmFtZSA9ICh1bml0KSA9PiB7XG5cdHN3aXRjaCAodW5pdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSBcIiVcIjogcmV0dXJuIFwicGVyY2VudFwiO1xuXHRcdGNhc2UgXCJxXCI6IHJldHVybiBcIlFcIjtcblx0XHRjYXNlIFwiaHpcIjogcmV0dXJuIFwiSHpcIjtcblx0XHRjYXNlIFwia2h6XCI6IHJldHVybiBcImtIelwiO1xuXHRcdGNhc2UgXCJmclwiOiByZXR1cm4gXCJmbGV4XCI7XG5cdFx0ZGVmYXVsdDogcmV0dXJuIHVuaXQudG9Mb3dlckNhc2UoKTtcblx0fVxufTtcbnZhciBnZXRDU1NVbml0Q29uc3RydWN0b3JOYW1lID0gKHVuaXQpID0+IHtcblx0c3dpdGNoICh1bml0LnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlIFwiJVwiOiByZXR1cm4gXCJwZXJjZW50XCI7XG5cdFx0ZGVmYXVsdDogcmV0dXJuIHVuaXQudG9Mb3dlckNhc2UoKTtcblx0fVxufTtcbnZhciBnZXRXaW5kb3dDb25zdHJ1Y3RvciA9ICh3aW4sIG5hbWUpID0+IHtcblx0cmV0dXJuIHdpbj8uW25hbWVdID8/IGdsb2JhbFRoaXM/LltuYW1lXTtcbn07XG52YXIgY3JlYXRlVHlwZWRVbml0VmFsdWUgPSAod2luLCB1bml0LCB2YWx1ZSkgPT4ge1xuXHRjb25zdCBDU1NOYW1lc3BhY2UgPSB3aW4/LkNTUztcblx0Y29uc3QgZmFjdG9yeU5hbWUgPSBnZXRDU1NVbml0RmFjdG9yeU5hbWUodW5pdCk7XG5cdGNvbnN0IGZhY3RvcnkgPSBDU1NOYW1lc3BhY2U/LltmYWN0b3J5TmFtZV07XG5cdGlmICh0eXBlb2YgZmFjdG9yeSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFjdG9yeS5jYWxsKENTU05hbWVzcGFjZSwgdmFsdWUpO1xuXHRjb25zdCBDU1NVbml0VmFsdWVDdG9yID0gZ2V0V2luZG93Q29uc3RydWN0b3Iod2luLCBcIkNTU1VuaXRWYWx1ZVwiKTtcblx0aWYgKHR5cGVvZiBDU1NVbml0VmFsdWVDdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYFR5cGVkIE9NIGRvZXMgbm90IHN1cHBvcnQgQ1NTIHVuaXQgXCIke3VuaXR9XCJgKTtcblx0cmV0dXJuIG5ldyBDU1NVbml0VmFsdWVDdG9yKHZhbHVlLCBnZXRDU1NVbml0Q29uc3RydWN0b3JOYW1lKHVuaXQpKTtcbn07XG52YXIgcmVhZFJlYWN0aXZlTnVtYmVyID0gKHNsb3QpID0+IHtcblx0Y29uc3QgY3VycmVudCA9IHNsb3QudmFsdWU/LnZhbHVlO1xuXHRjb25zdCBudW1iZXIgPSB0eXBlb2YgY3VycmVudCA9PT0gXCJudW1iZXJcIiA/IGN1cnJlbnQgOiBOdW1iZXIoY3VycmVudCk7XG5cdGlmICghTnVtYmVyLmlzRmluaXRlKG51bWJlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoYFJlYWN0aXZlIENTUyB2YWx1ZSBcIiR7U3RyaW5nKGN1cnJlbnQpfVwiIGlzIG5vdCBmaW5pdGVgKTtcblx0cmV0dXJuIG51bWJlcjtcbn07XG52YXIgZ2V0UmVhY3RpdmVJbml0aWFsTnVtYmVyID0gKHZhbHVlKSA9PiB7XG5cdGNvbnN0IG51bWJlciA9IE51bWJlcih2YWx1ZT8udmFsdWUpO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG51bWJlcikgPyBudW1iZXIgOiAwO1xufTtcbnZhciByZXBsYWNlVHlwZWRNYXJrZXJzID0gKGNzc1ZhbHVlLCBzbG90cykgPT4ge1xuXHRsZXQgcmVzdWx0ID0gY3NzVmFsdWU7XG5cdGZvciAoY29uc3Qgc2xvdCBvZiBzbG90cykgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobmV3IFJlZ0V4cChgdmFyXFxcXChcXFxccyoke2VzY2FwZVJlZ0V4cChzbG90Lm1hcmtlcil9XFxcXHMqXFxcXClgLCBcImdcIiksIFN0cmluZyhzbG90LnZhbHVlKSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xudmFyIGlzRGlyZWN0U2xvdFZhbHVlID0gKGNzc1ZhbHVlLCBtYXJrZXIpID0+IHtcblx0Y29uc3QgZXNjYXBlZE1hcmtlciA9IGVzY2FwZVJlZ0V4cChtYXJrZXIpO1xuXHRyZXR1cm4gbmV3IFJlZ0V4cChgXnZhclxcXFwoXFxcXHMqJHtlc2NhcGVkTWFya2VyfVxcXFxzKlxcXFwpJGApLnRlc3QoY3NzVmFsdWUudHJpbSgpKTtcbn07XG52YXIgc2VyaWFsaXplQW5pbWF0YWJsZUNzc1ZhbHVlID0gKHJhdywgdW5pdCkgPT4ge1xuXHRsZXQgdmFsdWUgPSByYXc7XG5cdGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBcInZhbHVlXCIgaW4gdmFsdWUgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB2YWx1ZSA9IHZhbHVlLnZhbHVlO1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gXCJcIikgcmV0dXJuIHVuaXQgPyBgMCR7dW5pdH1gIDogXCIwXCI7XG5cdGlmICh1bml0ICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSByZXR1cm4gYCR7dmFsdWV9JHt1bml0fWA7XG5cdHJldHVybiBTdHJpbmcodmFsdWUpO1xufTtcbnZhciBpc0RpcmVjdFNsb3RVbml0UHJvZHVjdCA9IChjc3NWYWx1ZSwgbWFya2VyLCB1bml0KSA9PiB7XG5cdGlmICghdW5pdCkgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBlc2NhcGVkTWFya2VyID0gZXNjYXBlUmVnRXhwKG1hcmtlcik7XG5cdGNvbnN0IGVzY2FwZWRVbml0ID0gZXNjYXBlUmVnRXhwKHVuaXQpO1xuXHRyZXR1cm4gbmV3IFJlZ0V4cChgXmNhbGNcXFxcKFxcXFxzKnZhclxcXFwoXFxcXHMqJHtlc2NhcGVkTWFya2VyfVxcXFxzKlxcXFwpXFxcXHMqXFxcXCpcXFxccyoxJHtlc2NhcGVkVW5pdH1cXFxccypcXFxcKSRgLCBcImlcIikudGVzdChjc3NWYWx1ZS50cmltKCkpO1xufTtcbnZhciBzZXRQYXJzZWRUeXBlZFZhbHVlID0gKHN0eWxlTWFwLCBDU1NTdHlsZVZhbHVlQ3RvciwgcHJvcGVydHksIGNzc1ZhbHVlKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTU3R5bGVWYWx1ZUN0b3I/LnBhcnNlQWxsID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCB2YWx1ZXMgPSBDU1NTdHlsZVZhbHVlQ3Rvci5wYXJzZUFsbChwcm9wZXJ0eSwgY3NzVmFsdWUpO1xuXHRcdHN0eWxlTWFwLnNldChwcm9wZXJ0eSwgLi4udmFsdWVzKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHR5cGVvZiBDU1NTdHlsZVZhbHVlQ3Rvcj8ucGFyc2UgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlTWFwLnNldChwcm9wZXJ0eSwgQ1NTU3R5bGVWYWx1ZUN0b3IucGFyc2UocHJvcGVydHksIGNzc1ZhbHVlKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHN0eWxlTWFwLnNldChwcm9wZXJ0eSwgY3NzVmFsdWUpO1xufTtcbnZhciB0b2tlbml6ZU51bWVyaWNDU1MgPSAoc291cmNlKSA9PiB7XG5cdGNvbnN0IHRva2VucyA9IFtdO1xuXHRsZXQgY3Vyc29yID0gMDtcblx0d2hpbGUgKGN1cnNvciA8IHNvdXJjZS5sZW5ndGgpIHtcblx0XHRjb25zdCByZXN0ID0gc291cmNlLnNsaWNlKGN1cnNvcik7XG5cdFx0Y29uc3Qgd2hpdGVzcGFjZSA9IC9eXFxzKy8uZXhlYyhyZXN0KTtcblx0XHRpZiAod2hpdGVzcGFjZSkge1xuXHRcdFx0Y3Vyc29yICs9IHdoaXRlc3BhY2VbMF0ubGVuZ3RoO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZhcmlhYmxlID0gL152YXJcXChcXHMqKC0tW2EtekEtWjAtOV8tXSspXFxzKlxcKS8uZXhlYyhyZXN0KTtcblx0XHRpZiAodmFyaWFibGUpIHtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0a2luZDogXCJ2YXJpYWJsZVwiLFxuXHRcdFx0XHRtYXJrZXI6IHZhcmlhYmxlWzFdXG5cdFx0XHR9KTtcblx0XHRcdGN1cnNvciArPSB2YXJpYWJsZVswXS5sZW5ndGg7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgbnVtYmVyID0gL14oPzpcXGQqXFwuXFxkK3xcXGQrXFwuP1xcZCopKD86W2VFXVsrLV0/XFxkKyk/Ly5leGVjKHJlc3QpO1xuXHRcdGlmIChudW1iZXIpIHtcblx0XHRcdGN1cnNvciArPSBudW1iZXJbMF0ubGVuZ3RoO1xuXHRcdFx0Y29uc3QgdW5pdE1hdGNoID0gL14oJXxbYS16QS1aXSspLy5leGVjKHNvdXJjZS5zbGljZShjdXJzb3IpKTtcblx0XHRcdGNvbnN0IHVuaXQgPSB1bml0TWF0Y2g/LlswXSA/PyBudWxsO1xuXHRcdFx0aWYgKHVuaXRNYXRjaCkgY3Vyc29yICs9IHVuaXRNYXRjaFswXS5sZW5ndGg7XG5cdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdGtpbmQ6IFwibnVtYmVyXCIsXG5cdFx0XHRcdHZhbHVlOiBOdW1iZXIobnVtYmVyWzBdKSxcblx0XHRcdFx0dW5pdDogdW5pdCA9PSBudWxsID8gbnVsbCA6IHVuaXQudG9Mb3dlckNhc2UoKVxuXHRcdFx0fSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgaWRlbnRpZmllciA9IC9eW2EtekEtWl9dW2EtekEtWjAtOV8tXSovLmV4ZWMocmVzdCk7XG5cdFx0aWYgKGlkZW50aWZpZXIpIHtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0a2luZDogXCJpZGVudGlmaWVyXCIsXG5cdFx0XHRcdHZhbHVlOiBpZGVudGlmaWVyWzBdLnRvTG93ZXJDYXNlKClcblx0XHRcdH0pO1xuXHRcdFx0Y3Vyc29yICs9IGlkZW50aWZpZXJbMF0ubGVuZ3RoO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IHN5bWJvbCA9IHJlc3RbMF07XG5cdFx0aWYgKHN5bWJvbCA9PT0gXCIrXCIgfHwgc3ltYm9sID09PSBcIi1cIiB8fCBzeW1ib2wgPT09IFwiKlwiIHx8IHN5bWJvbCA9PT0gXCIvXCIgfHwgc3ltYm9sID09PSBcIihcIiB8fCBzeW1ib2wgPT09IFwiKVwiIHx8IHN5bWJvbCA9PT0gXCIsXCIpIHtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0a2luZDogXCJzeW1ib2xcIixcblx0XHRcdFx0dmFsdWU6IHN5bWJvbFxuXHRcdFx0fSk7XG5cdFx0XHRjdXJzb3IrKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuc3VwcG9ydGVkIFR5cGVkIE9NIG51bWVyaWMgdG9rZW4gbmVhciBcIiR7cmVzdH1cImApO1xuXHR9XG5cdHJldHVybiB0b2tlbnM7XG59O1xudmFyIE51bWVyaWNUeXBlZE9NUGFyc2VyID0gY2xhc3Mge1xuXHR0b2tlbnM7XG5cdHdpbjtcblx0cmVhY3RpdmVCeU1hcmtlcjtcblx0dHlwZWRCeU1hcmtlcjtcblx0aW5kZXggPSAwO1xuXHRsZWF2ZXMgPSBbXTtcblx0Y29uc3RydWN0b3IodG9rZW5zLCB3aW4sIHJlYWN0aXZlQnlNYXJrZXIsIHR5cGVkQnlNYXJrZXIpIHtcblx0XHR0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLndpbiA9IHdpbjtcblx0XHR0aGlzLnJlYWN0aXZlQnlNYXJrZXIgPSByZWFjdGl2ZUJ5TWFya2VyO1xuXHRcdHRoaXMudHlwZWRCeU1hcmtlciA9IHR5cGVkQnlNYXJrZXI7XG5cdH1cblx0cGFyc2UoKSB7XG5cdFx0Y29uc3Qgcm9vdCA9IHRoaXMucGFyc2VTdW0oKTtcblx0XHRpZiAodGhpcy5pbmRleCAhPT0gdGhpcy50b2tlbnMubGVuZ3RoKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJVbmV4cGVjdGVkIHRyYWlsaW5nIFR5cGVkIE9NIGV4cHJlc3Npb25cIik7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJvb3QsXG5cdFx0XHRsZWF2ZXM6IHRoaXMubGVhdmVzXG5cdFx0fTtcblx0fVxuXHRjdXJyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblx0fVxuXHRjb25zdW1lKCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cdFx0aWYgKCF0b2tlbikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW5leHBlY3RlZCBlbmQgb2YgVHlwZWQgT00gZXhwcmVzc2lvblwiKTtcblx0XHR0aGlzLmluZGV4Kys7XG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cdGNvbnN1bWVTeW1ib2woc3ltYm9sKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRpZiAodG9rZW4ua2luZCAhPT0gXCJzeW1ib2xcIiB8fCB0b2tlbi52YWx1ZSAhPT0gc3ltYm9sKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEV4cGVjdGVkIFwiJHtzeW1ib2x9XCJgKTtcblx0fVxuXHRtYXRjaGVzU3ltYm9sKHN5bWJvbCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cdFx0cmV0dXJuIHRva2VuPy5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBzeW1ib2w7XG5cdH1cblx0Y3JlYXRlTWF0aChuYW1lLCAuLi52YWx1ZXMpIHtcblx0XHRjb25zdCBDb25zdHJ1Y3RvciA9IGdldFdpbmRvd0NvbnN0cnVjdG9yKHRoaXMud2luLCBuYW1lKTtcblx0XHRpZiAodHlwZW9mIENvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7bmFtZX0gaXMgbm90IHN1cHBvcnRlZGApO1xuXHRcdHJldHVybiBuZXcgQ29uc3RydWN0b3IoLi4udmFsdWVzKTtcblx0fVxuXHRwYXJzZVN1bSgpIHtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLnBhcnNlUHJvZHVjdCgpO1xuXHRcdHdoaWxlICh0aGlzLm1hdGNoZXNTeW1ib2woXCIrXCIpIHx8IHRoaXMubWF0Y2hlc1N5bWJvbChcIi1cIikpIHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0XHRjb25zdCByaWdodCA9IHRoaXMucGFyc2VQcm9kdWN0KCk7XG5cdFx0XHRpZiAob3BlcmF0b3Iua2luZCAhPT0gXCJzeW1ib2xcIikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRXhwZWN0ZWQgYSBzdW0gb3BlcmF0b3JcIik7XG5cdFx0XHRpZiAob3BlcmF0b3IudmFsdWUgPT09IFwiK1wiKSB2YWx1ZSA9IHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhTdW1cIiwgdmFsdWUsIHJpZ2h0KTtcblx0XHRcdGVsc2UgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoU3VtXCIsIHZhbHVlLCB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoTmVnYXRlXCIsIHJpZ2h0KSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRwYXJzZVByb2R1Y3QoKSB7XG5cdFx0bGV0IHZhbHVlID0gdGhpcy5wYXJzZVVuYXJ5KCk7XG5cdFx0d2hpbGUgKHRoaXMubWF0Y2hlc1N5bWJvbChcIipcIikgfHwgdGhpcy5tYXRjaGVzU3ltYm9sKFwiL1wiKSkge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3IgPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRcdGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZVVuYXJ5KCk7XG5cdFx0XHRpZiAob3BlcmF0b3Iua2luZCAhPT0gXCJzeW1ib2xcIikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRXhwZWN0ZWQgYSBwcm9kdWN0IG9wZXJhdG9yXCIpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLnZhbHVlID09PSBcIipcIikgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoUHJvZHVjdFwiLCB2YWx1ZSwgcmlnaHQpO1xuXHRcdFx0ZWxzZSB2YWx1ZSA9IHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhQcm9kdWN0XCIsIHZhbHVlLCB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoSW52ZXJ0XCIsIHJpZ2h0KSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRwYXJzZVVuYXJ5KCkge1xuXHRcdGlmICh0aGlzLm1hdGNoZXNTeW1ib2woXCIrXCIpKSB7XG5cdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlVW5hcnkoKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMubWF0Y2hlc1N5bWJvbChcIi1cIikpIHtcblx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhOZWdhdGVcIiwgdGhpcy5wYXJzZVVuYXJ5KCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJzZVByaW1hcnkoKTtcblx0fVxuXHRwYXJzZVByaW1hcnkoKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRpZiAodG9rZW4ua2luZCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHRoaXMud2luLCB0b2tlbi51bml0ID8/IFwibnVtYmVyXCIsIHRva2VuLnZhbHVlKTtcblx0XHRpZiAodG9rZW4ua2luZCA9PT0gXCJ2YXJpYWJsZVwiKSB7XG5cdFx0XHRjb25zdCByZWFjdGl2ZSA9IHRoaXMucmVhY3RpdmVCeU1hcmtlci5nZXQodG9rZW4ubWFya2VyKTtcblx0XHRcdGlmIChyZWFjdGl2ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5tYXRjaGVzU3ltYm9sKFwiKlwiKSkge1xuXHRcdFx0XHRcdGNvbnN0IGNoZWNrcG9pbnQgPSB0aGlzLmluZGV4O1xuXHRcdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHRcdGNvbnN0IHJocyA9IHRoaXMuY3VycmVudCgpO1xuXHRcdFx0XHRcdGlmIChyaHM/LmtpbmQgPT09IFwibnVtYmVyXCIgJiYgcmhzLnZhbHVlID09PSAxICYmIHR5cGVvZiByaHMudW5pdCA9PT0gXCJzdHJpbmdcIiAmJiAoIXJlYWN0aXZlLm11bHRpcGxpZWRCeVVuaXQgfHwgcmVhY3RpdmUubXVsdGlwbGllZEJ5VW5pdCA9PT0gcmhzLnVuaXQudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHRcdFx0Y29uc3QgbGVhZiA9IGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHRoaXMud2luLCByaHMudW5pdC50b0xvd2VyQ2FzZSgpLCByZWFkUmVhY3RpdmVOdW1iZXIocmVhY3RpdmUpKTtcblx0XHRcdFx0XHRcdHRoaXMubGVhdmVzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRzbG90OiByZWFjdGl2ZSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGxlYWZcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxlYWY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuaW5kZXggPSBjaGVja3BvaW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGxlYWYgPSBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh0aGlzLndpbiwgXCJudW1iZXJcIiwgcmVhZFJlYWN0aXZlTnVtYmVyKHJlYWN0aXZlKSk7XG5cdFx0XHRcdHRoaXMubGVhdmVzLnB1c2goe1xuXHRcdFx0XHRcdHNsb3Q6IHJlYWN0aXZlLFxuXHRcdFx0XHRcdHZhbHVlOiBsZWFmXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGVhZjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHR5cGVkID0gdGhpcy50eXBlZEJ5TWFya2VyLmdldCh0b2tlbi5tYXJrZXIpO1xuXHRcdFx0aWYgKHR5cGVkKSByZXR1cm4gdHlwZWQudmFsdWU7XG5cdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVua25vd24gc3R5bGUgc2xvdCBcIiR7dG9rZW4ubWFya2VyfVwiYCk7XG5cdFx0fVxuXHRcdGlmICh0b2tlbi5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBcIihcIikge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlU3VtKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIpXCIpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRpZiAodG9rZW4ua2luZCA9PT0gXCJpZGVudGlmaWVyXCIpIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24odG9rZW4udmFsdWUpO1xuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIkV4cGVjdGVkIGEgVHlwZWQgT00gbnVtZXJpYyB2YWx1ZVwiKTtcblx0fVxuXHRwYXJzZUZ1bmN0aW9uKG5hbWUpIHtcblx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIoXCIpO1xuXHRcdGlmIChuYW1lID09PSBcImNhbGNcIikge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlU3VtKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWVTeW1ib2woXCIpXCIpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRjb25zdCB2YWx1ZXMgPSBbXTtcblx0XHRpZiAoIXRoaXMubWF0Y2hlc1N5bWJvbChcIilcIikpIHtcblx0XHRcdHZhbHVlcy5wdXNoKHRoaXMucGFyc2VTdW0oKSk7XG5cdFx0XHR3aGlsZSAodGhpcy5tYXRjaGVzU3ltYm9sKFwiLFwiKSkge1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0dmFsdWVzLnB1c2godGhpcy5wYXJzZVN1bSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRpZiAobmFtZSA9PT0gXCJtaW5cIikge1xuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBTeW50YXhFcnJvcihcIm1pbigpIHJlcXVpcmVzIGEgdmFsdWVcIik7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE1pblwiLCAuLi52YWx1ZXMpO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PT0gXCJtYXhcIikge1xuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBTeW50YXhFcnJvcihcIm1heCgpIHJlcXVpcmVzIGEgdmFsdWVcIik7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE1heFwiLCAuLi52YWx1ZXMpO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PT0gXCJjbGFtcFwiKSB7XG5cdFx0XHRpZiAodmFsdWVzLmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiY2xhbXAoKSByZXF1aXJlcyB0aHJlZSB2YWx1ZXNcIik7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aENsYW1wXCIsIHZhbHVlc1swXSwgdmFsdWVzWzFdLCB2YWx1ZXNbMl0pO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuc3VwcG9ydGVkIFR5cGVkIE9NIGZ1bmN0aW9uIFwiJHtuYW1lfVwiYCk7XG5cdH1cbn07XG52YXIgYnVpbGROdW1lcmljVHlwZWRPTVRyZWUgPSAoY3NzVmFsdWUsIHdpbiwgcmVhY3RpdmVTbG90cywgdHlwZWRTbG90cykgPT4ge1xuXHRjb25zdCByZWFjdGl2ZUJ5TWFya2VyID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgdHlwZWRCeU1hcmtlciA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGZvciAoY29uc3Qgc2xvdCBvZiByZWFjdGl2ZVNsb3RzKSByZWFjdGl2ZUJ5TWFya2VyLnNldChzbG90Lm1hcmtlciwgc2xvdCk7XG5cdGZvciAoY29uc3Qgc2xvdCBvZiB0eXBlZFNsb3RzKSB0eXBlZEJ5TWFya2VyLnNldChzbG90Lm1hcmtlciwgc2xvdCk7XG5cdHJldHVybiBuZXcgTnVtZXJpY1R5cGVkT01QYXJzZXIodG9rZW5pemVOdW1lcmljQ1NTKGNzc1ZhbHVlKSwgd2luLCByZWFjdGl2ZUJ5TWFya2VyLCB0eXBlZEJ5TWFya2VyKS5wYXJzZSgpO1xufTtcbnZhciBpc1RyYW5zZm9ybVN0eWxlUHJvcGVydHkgPSAocHJvcGVydHkpID0+IHtcblx0cmV0dXJuIHByb3BlcnR5LnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBcInRyYW5zZm9ybVwiO1xufTtcbnZhciBidWlsZFRyYW5zZm9ybVR5cGVkT01UcmVlID0gKGNzc1ZhbHVlLCB3aW4sIHJlYWN0aXZlU2xvdHMsIHR5cGVkU2xvdHMpID0+IHtcblx0Y29uc3QgdG9rZW5zID0gdG9rZW5pemVOdW1lcmljQ1NTKGNzc1ZhbHVlKTtcblx0Y29uc3QgbGVhdmVzID0gW107XG5cdGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcblx0Y29uc3QgcmVhY3RpdmVCeU1hcmtlciA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IHR5cGVkQnlNYXJrZXIgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRmb3IgKGNvbnN0IHNsb3Qgb2YgcmVhY3RpdmVTbG90cykgcmVhY3RpdmVCeU1hcmtlci5zZXQoc2xvdC5tYXJrZXIsIHNsb3QpO1xuXHRmb3IgKGNvbnN0IHNsb3Qgb2YgdHlwZWRTbG90cykgdHlwZWRCeU1hcmtlci5zZXQoc2xvdC5tYXJrZXIsIHNsb3QpO1xuXHRjb25zdCB6ZXJvUHggPSAoKSA9PiBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh3aW4sIFwicHhcIiwgMCk7XG5cdGNvbnN0IG9uZU51bWJlciA9ICgpID0+IGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgXCJudW1iZXJcIiwgMSk7XG5cdGxldCBpbmRleCA9IDA7XG5cdGNvbnN0IGN1cnJlbnQgPSAoKSA9PiB0b2tlbnNbaW5kZXhdO1xuXHRjb25zdCBjb25zdW1lID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRva2VuID0gdG9rZW5zW2luZGV4XTtcblx0XHRpZiAoIXRva2VuKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJVbmV4cGVjdGVkIGVuZCBvZiB0cmFuc2Zvcm0gZXhwcmVzc2lvblwiKTtcblx0XHRpbmRleCsrO1xuXHRcdHJldHVybiB0b2tlbjtcblx0fTtcblx0Y29uc3QgY29uc3VtZVN5bWJvbCA9IChzeW1ib2wpID0+IHtcblx0XHRjb25zdCB0b2tlbiA9IGNvbnN1bWUoKTtcblx0XHRpZiAodG9rZW4ua2luZCAhPT0gXCJzeW1ib2xcIiB8fCB0b2tlbi52YWx1ZSAhPT0gc3ltYm9sKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEV4cGVjdGVkIFwiJHtzeW1ib2x9XCJgKTtcblx0fTtcblx0Y29uc3QgcGFyc2VBcmd1bWVudCA9ICgpID0+IHtcblx0XHRjb25zdCBzdGFydCA9IGluZGV4O1xuXHRcdGxldCBkZXB0aCA9IDA7XG5cdFx0d2hpbGUgKGluZGV4IDwgdG9rZW5zLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xuXHRcdFx0aWYgKHRva2VuLmtpbmQgPT09IFwic3ltYm9sXCIgJiYgdG9rZW4udmFsdWUgPT09IFwiKFwiKSB7XG5cdFx0XHRcdGRlcHRoKys7XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRva2VuLmtpbmQgPT09IFwic3ltYm9sXCIgJiYgdG9rZW4udmFsdWUgPT09IFwiKVwiKSB7XG5cdFx0XHRcdGlmIChkZXB0aCA9PT0gMCkgYnJlYWs7XG5cdFx0XHRcdGRlcHRoLS07XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRva2VuLmtpbmQgPT09IFwic3ltYm9sXCIgJiYgdG9rZW4udmFsdWUgPT09IFwiLFwiICYmIGRlcHRoID09PSAwKSBicmVhaztcblx0XHRcdGluZGV4Kys7XG5cdFx0fVxuXHRcdGNvbnN0IHNsaWNlID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBpbmRleCk7XG5cdFx0aWYgKHNsaWNlLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRW1wdHkgdHJhbnNmb3JtIGZ1bmN0aW9uIGFyZ3VtZW50XCIpO1xuXHRcdGNvbnN0IHRyZWUgPSBuZXcgTnVtZXJpY1R5cGVkT01QYXJzZXIoc2xpY2UsIHdpbiwgcmVhY3RpdmVCeU1hcmtlciwgdHlwZWRCeU1hcmtlcikucGFyc2UoKTtcblx0XHRsZWF2ZXMucHVzaCguLi50cmVlLmxlYXZlcyk7XG5cdFx0cmV0dXJuIHRyZWUucm9vdDtcblx0fTtcblx0Y29uc3QgcGFyc2VBcmd1bWVudExpc3QgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYXJncyA9IFtdO1xuXHRcdGNvbnN1bWVTeW1ib2woXCIoXCIpO1xuXHRcdGlmICghKGN1cnJlbnQoKT8ua2luZCA9PT0gXCJzeW1ib2xcIiAmJiBjdXJyZW50KCk/LnZhbHVlID09PSBcIilcIikpIHtcblx0XHRcdGFyZ3MucHVzaChwYXJzZUFyZ3VtZW50KCkpO1xuXHRcdFx0d2hpbGUgKGN1cnJlbnQoKT8ua2luZCA9PT0gXCJzeW1ib2xcIiAmJiBjdXJyZW50KCk/LnZhbHVlID09PSBcIixcIikge1xuXHRcdFx0XHRjb25zdW1lKCk7XG5cdFx0XHRcdGFyZ3MucHVzaChwYXJzZUFyZ3VtZW50KCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRyZXR1cm4gYXJncztcblx0fTtcblx0Y29uc3QgY3JlYXRlQ29tcG9uZW50ID0gKG5hbWUsIGFyZ3MpID0+IHtcblx0XHRjb25zdCBjdG9yID0gKGNsYXNzTmFtZSkgPT4ge1xuXHRcdFx0Y29uc3QgQ3RvciA9IGdldFdpbmRvd0NvbnN0cnVjdG9yKHdpbiwgY2xhc3NOYW1lKTtcblx0XHRcdGlmICh0eXBlb2YgQ3RvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2NsYXNzTmFtZX0gaXMgbm90IHN1cHBvcnRlZGApO1xuXHRcdFx0cmV0dXJuIEN0b3I7XG5cdFx0fTtcblx0XHRzd2l0Y2ggKG5hbWUpIHtcblx0XHRcdGNhc2UgXCJ0cmFuc2xhdGVcIjoge1xuXHRcdFx0XHRjb25zdCBUcmFuc2xhdGUgPSBjdG9yKFwiQ1NTVHJhbnNsYXRlXCIpO1xuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHJldHVybiBuZXcgVHJhbnNsYXRlKGFyZ3NbMF0sIHplcm9QeCgpKTtcblx0XHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAyKSByZXR1cm4gbmV3IFRyYW5zbGF0ZShhcmdzWzBdLCBhcmdzWzFdKTtcblx0XHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAzKSByZXR1cm4gbmV3IFRyYW5zbGF0ZShhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwidHJhbnNsYXRlKCkgZXhwZWN0cyAxLi4zIGFyZ3NcIik7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwidHJhbnNsYXRleFwiOiByZXR1cm4gbmV3IChjdG9yKFwiQ1NTVHJhbnNsYXRlXCIpKShhcmdzWzBdLCB6ZXJvUHgoKSk7XG5cdFx0XHRjYXNlIFwidHJhbnNsYXRleVwiOiByZXR1cm4gbmV3IChjdG9yKFwiQ1NTVHJhbnNsYXRlXCIpKSh6ZXJvUHgoKSwgYXJnc1swXSk7XG5cdFx0XHRjYXNlIFwidHJhbnNsYXRlelwiOiByZXR1cm4gbmV3IChjdG9yKFwiQ1NTVHJhbnNsYXRlXCIpKSh6ZXJvUHgoKSwgemVyb1B4KCksIGFyZ3NbMF0pO1xuXHRcdFx0Y2FzZSBcInRyYW5zbGF0ZTNkXCI6XG5cdFx0XHRcdGlmIChhcmdzLmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwidHJhbnNsYXRlM2QoKSBleHBlY3RzIDMgYXJnc1wiKTtcblx0XHRcdFx0cmV0dXJuIG5ldyAoY3RvcihcIkNTU1RyYW5zbGF0ZVwiKSkoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG5cdFx0XHRjYXNlIFwic2NhbGVcIjoge1xuXHRcdFx0XHRjb25zdCBTY2FsZSA9IGN0b3IoXCJDU1NTY2FsZVwiKTtcblx0XHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSByZXR1cm4gbmV3IFNjYWxlKGFyZ3NbMF0sIGFyZ3NbMF0pO1xuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDIpIHJldHVybiBuZXcgU2NhbGUoYXJnc1swXSwgYXJnc1sxXSk7XG5cdFx0XHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMykgcmV0dXJuIG5ldyBTY2FsZShhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwic2NhbGUoKSBleHBlY3RzIDEuLjMgYXJnc1wiKTtcblx0XHRcdH1cblx0XHRcdGNhc2UgXCJzY2FsZXhcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1NjYWxlXCIpKShhcmdzWzBdLCBvbmVOdW1iZXIoKSk7XG5cdFx0XHRjYXNlIFwic2NhbGV5XCI6IHJldHVybiBuZXcgKGN0b3IoXCJDU1NTY2FsZVwiKSkob25lTnVtYmVyKCksIGFyZ3NbMF0pO1xuXHRcdFx0Y2FzZSBcInNjYWxlelwiOiByZXR1cm4gbmV3IChjdG9yKFwiQ1NTU2NhbGVcIikpKG9uZU51bWJlcigpLCBvbmVOdW1iZXIoKSwgYXJnc1swXSk7XG5cdFx0XHRjYXNlIFwic2NhbGUzZFwiOlxuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBTeW50YXhFcnJvcihcInNjYWxlM2QoKSBleHBlY3RzIDMgYXJnc1wiKTtcblx0XHRcdFx0cmV0dXJuIG5ldyAoY3RvcihcIkNTU1NjYWxlXCIpKShhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcblx0XHRcdGNhc2UgXCJyb3RhdGVcIjoge1xuXHRcdFx0XHRjb25zdCBSb3RhdGUgPSBjdG9yKFwiQ1NTUm90YXRlXCIpO1xuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHJldHVybiBuZXcgUm90YXRlKGFyZ3NbMF0pO1xuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDQpIHJldHVybiBuZXcgUm90YXRlKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuXHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJyb3RhdGUoKSBleHBlY3RzIDEgb3IgNCBhcmdzXCIpO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcInJvdGF0ZXhcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1JvdGF0ZVwiKSkob25lTnVtYmVyKCksIGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgXCJudW1iZXJcIiwgMCksIGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgXCJudW1iZXJcIiwgMCksIGFyZ3NbMF0pO1xuXHRcdFx0Y2FzZSBcInJvdGF0ZXlcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1JvdGF0ZVwiKSkoY3JlYXRlVHlwZWRVbml0VmFsdWUod2luLCBcIm51bWJlclwiLCAwKSwgb25lTnVtYmVyKCksIGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgXCJudW1iZXJcIiwgMCksIGFyZ3NbMF0pO1xuXHRcdFx0Y2FzZSBcInJvdGF0ZXpcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1JvdGF0ZVwiKSkoY3JlYXRlVHlwZWRVbml0VmFsdWUod2luLCBcIm51bWJlclwiLCAwKSwgY3JlYXRlVHlwZWRVbml0VmFsdWUod2luLCBcIm51bWJlclwiLCAwKSwgb25lTnVtYmVyKCksIGFyZ3NbMF0pO1xuXHRcdFx0Y2FzZSBcInJvdGF0ZTNkXCI6XG5cdFx0XHRcdGlmIChhcmdzLmxlbmd0aCAhPT0gNCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwicm90YXRlM2QoKSBleHBlY3RzIDQgYXJnc1wiKTtcblx0XHRcdFx0cmV0dXJuIG5ldyAoY3RvcihcIkNTU1JvdGF0ZVwiKSkoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG5cdFx0XHRjYXNlIFwic2tld1wiOiB7XG5cdFx0XHRcdGNvbnN0IFNrZXcgPSBjdG9yKFwiQ1NTU2tld1wiKTtcblx0XHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSByZXR1cm4gbmV3IFNrZXcoYXJnc1swXSwgY3JlYXRlVHlwZWRVbml0VmFsdWUod2luLCBcImRlZ1wiLCAwKSk7XG5cdFx0XHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMikgcmV0dXJuIG5ldyBTa2V3KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuXHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJza2V3KCkgZXhwZWN0cyAxLi4yIGFyZ3NcIik7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwic2tld3hcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1NrZXdYXCIpKShhcmdzWzBdKTtcblx0XHRcdGNhc2UgXCJza2V3eVwiOiByZXR1cm4gbmV3IChjdG9yKFwiQ1NTU2tld1lcIikpKGFyZ3NbMF0pO1xuXHRcdFx0Y2FzZSBcInBlcnNwZWN0aXZlXCI6IHJldHVybiBuZXcgKGN0b3IoXCJDU1NQZXJzcGVjdGl2ZVwiKSkoYXJnc1swXSk7XG5cdFx0XHRkZWZhdWx0OiB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuc3VwcG9ydGVkIHRyYW5zZm9ybSBmdW5jdGlvbiBcIiR7bmFtZX1cImApO1xuXHRcdH1cblx0fTtcblx0d2hpbGUgKGluZGV4IDwgdG9rZW5zLmxlbmd0aCkge1xuXHRcdGNvbnN0IHRva2VuID0gY29uc3VtZSgpO1xuXHRcdGlmICh0b2tlbi5raW5kICE9PSBcImlkZW50aWZpZXJcIikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRXhwZWN0ZWQgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gbmFtZVwiKTtcblx0XHRjb25zdCBhcmdzID0gcGFyc2VBcmd1bWVudExpc3QoKTtcblx0XHRjb21wb25lbnRzLnB1c2goY3JlYXRlQ29tcG9uZW50KHRva2VuLnZhbHVlLCBhcmdzKSk7XG5cdH1cblx0aWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJFbXB0eSB0cmFuc2Zvcm0gbGlzdFwiKTtcblx0Y29uc3QgQ1NTVHJhbnNmb3JtVmFsdWVDdG9yID0gZ2V0V2luZG93Q29uc3RydWN0b3Iod2luLCBcIkNTU1RyYW5zZm9ybVZhbHVlXCIpO1xuXHRpZiAodHlwZW9mIENTU1RyYW5zZm9ybVZhbHVlQ3RvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ1NTVHJhbnNmb3JtVmFsdWUgaXMgbm90IHN1cHBvcnRlZFwiKTtcblx0cmV0dXJuIHtcblx0XHRyb290OiBuZXcgQ1NTVHJhbnNmb3JtVmFsdWVDdG9yKGNvbXBvbmVudHMpLFxuXHRcdGxlYXZlc1xuXHR9O1xufTtcbnZhciBidWlsZFR5cGVkT01TdHlsZVZhbHVlID0gKHByb3BlcnR5LCBjc3NWYWx1ZSwgd2luLCByZWFjdGl2ZVNsb3RzLCB0eXBlZFNsb3RzKSA9PiB7XG5cdGlmIChpc1RyYW5zZm9ybVN0eWxlUHJvcGVydHkocHJvcGVydHkpKSByZXR1cm4gYnVpbGRUcmFuc2Zvcm1UeXBlZE9NVHJlZShjc3NWYWx1ZSwgd2luLCByZWFjdGl2ZVNsb3RzLCB0eXBlZFNsb3RzKTtcblx0cmV0dXJuIGJ1aWxkTnVtZXJpY1R5cGVkT01UcmVlKGNzc1ZhbHVlLCB3aW4sIHJlYWN0aXZlU2xvdHMsIHR5cGVkU2xvdHMpO1xufTtcbnZhciBhZGRNdXRhYmxlTGVhdmVzID0gKHRhcmdldCwgbGVhdmVzKSA9PiB7XG5cdGZvciAoY29uc3QgbGVhZiBvZiBsZWF2ZXMpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gdGFyZ2V0LmdldChsZWFmLnNsb3QubWFya2VyKTtcblx0XHRpZiAoY3VycmVudCkgY3VycmVudC5wdXNoKGxlYWYpO1xuXHRcdGVsc2UgdGFyZ2V0LnNldChsZWFmLnNsb3QubWFya2VyLCBbbGVhZl0pO1xuXHR9XG59O1xudmFyIGF0dGFjaExlYWZUYXJnZXRzID0gKGxlYXZlcywgcHJvcGVydHksIHJvb3QpID0+IHtcblx0cmV0dXJuIGxlYXZlcy5tYXAoKGxlYWYpID0+ICh7XG5cdFx0c2xvdDogbGVhZi5zbG90LFxuXHRcdHZhbHVlOiBsZWFmLnZhbHVlLFxuXHRcdHByb3BlcnR5LFxuXHRcdHJvb3Rcblx0fSkpO1xufTtcbnZhciBhcHBseVN0eWxlVGVtcGxhdGUgPSAoZWxlbWVudCwgY3NzVGV4dCwgdHlwZWRTbG90cywgcmVhY3RpdmVTbG90cywgdmFyaWFibGVzLCBhbmltYXRhYmxlU2xvdHMpID0+IHtcblx0Y29uc3QgcHJvYmUgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHByb2JlLnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xuXHRhcHBseU5vcm1hbGl6ZWRJbmxpbmVTdHlsZShlbGVtZW50LCBcIlwiKTtcblx0Y29uc3QgdGFyZ2V0ID0gZWxlbWVudDtcblx0Y29uc3Qgc3R5bGVNYXAgPSB0YXJnZXQuYXR0cmlidXRlU3R5bGVNYXAgPz8gdGFyZ2V0LnN0eWxlTWFwO1xuXHRjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgPz8gZ2xvYmFsVGhpcztcblx0Y29uc3QgQ1NTU3R5bGVWYWx1ZUN0b3IgPSB3aW4/LkNTU1N0eWxlVmFsdWUgPz8gZ2xvYmFsVGhpcy5DU1NTdHlsZVZhbHVlO1xuXHRjb25zdCBtdXRhYmxlTGVhdmVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgcmVxdWlyZWRDU1NWYXJpYWJsZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRjb25zdCBzdWJzY3JpcHRpb25zID0gW107XG5cdGNvbnN0IHByb3BlcnR5TW9kZU93bmVkID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0Zm9yIChjb25zdCBzbG90IG9mIGFuaW1hdGFibGVTbG90cykge1xuXHRcdGxldCBwbGFuID0gbnVsbDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2JlLnN0eWxlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IHByb2JlLnN0eWxlLml0ZW0oaSk7XG5cdFx0XHRjb25zdCBwYXJzZWRWYWx1ZSA9IHByb2JlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpO1xuXHRcdFx0aWYgKGlzRGlyZWN0U2xvdFZhbHVlKHBhcnNlZFZhbHVlLCBzbG90Lm1hcmtlcikpIHtcblx0XHRcdFx0cGxhbiA9IHtcblx0XHRcdFx0XHRtb2RlOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcdFx0dGFyZ2V0OiBwcm9wZXJ0eVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBzZXJpYWxpemVBbmltYXRhYmxlQ3NzVmFsdWUoc2xvdC52YWx1ZS52YWx1ZSkpO1xuXHRcdFx0XHRwcm9wZXJ0eU1vZGVPd25lZC5hZGQocHJvcGVydHkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmIChpc0RpcmVjdFNsb3RVbml0UHJvZHVjdChwYXJzZWRWYWx1ZSwgc2xvdC5tYXJrZXIsIHNsb3QubXVsdGlwbGllZEJ5VW5pdCkpIHtcblx0XHRcdFx0cGxhbiA9IHtcblx0XHRcdFx0XHRtb2RlOiBcInByb3BlcnR5XCIsXG5cdFx0XHRcdFx0dGFyZ2V0OiBwcm9wZXJ0eSxcblx0XHRcdFx0XHR1bml0OiBzbG90Lm11bHRpcGxpZWRCeVVuaXRcblx0XHRcdFx0fTtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgc2VyaWFsaXplQW5pbWF0YWJsZUNzc1ZhbHVlKHNsb3QudmFsdWUudmFsdWUsIHNsb3QubXVsdGlwbGllZEJ5VW5pdCkpO1xuXHRcdFx0XHRwcm9wZXJ0eU1vZGVPd25lZC5hZGQocHJvcGVydHkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFwbGFuKSB7XG5cdFx0XHRjb25zdCBpbml0aWFsTnVtYmVyID0gTnVtYmVyKHNsb3QudmFsdWUudmFsdWUpIHx8IDA7XG5cdFx0XHRlbnN1cmVSZWdpc3RlcmVkTnVtYmVyUHJvcGVydHkod2luLCBzbG90Lm1hcmtlciwgaW5pdGlhbE51bWJlcik7XG5cdFx0XHRlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHNsb3QubWFya2VyLCBTdHJpbmcoaW5pdGlhbE51bWJlcikpO1xuXHRcdFx0cGxhbiA9IHtcblx0XHRcdFx0bW9kZTogXCJjdXN0b20tcHJvcGVydHlcIixcblx0XHRcdFx0dGFyZ2V0OiBzbG90Lm1hcmtlclxuXHRcdFx0fTtcblx0XHR9XG5cdFx0c3Vic2NyaXB0aW9ucy5wdXNoKHNsb3QudmFsdWUuYXR0YWNoKGVsZW1lbnQsIHBsYW4pKTtcblx0fVxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvYmUuc3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0Y29uc3QgcHJvcGVydHkgPSBwcm9iZS5zdHlsZS5pdGVtKGluZGV4KTtcblx0XHRpZiAocHJvcGVydHlNb2RlT3duZWQuaGFzKHByb3BlcnR5KSkgY29udGludWU7XG5cdFx0Y29uc3QgcGFyc2VkVmFsdWUgPSBwcm9iZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtcblx0XHRjb25zdCBwcmlvcml0eSA9IHByb2JlLnN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkocHJvcGVydHkpO1xuXHRcdGNvbnN0IHVzZWRUeXBlZFNsb3RzID0gdHlwZWRTbG90cy5maWx0ZXIoKHNsb3QpID0+IGNvbnRhaW5zTWFya2VyKHBhcnNlZFZhbHVlLCBzbG90Lm1hcmtlcikpO1xuXHRcdGNvbnN0IHVzZWRSZWFjdGl2ZVNsb3RzID0gcmVhY3RpdmVTbG90cy5maWx0ZXIoKHNsb3QpID0+IGNvbnRhaW5zTWFya2VyKHBhcnNlZFZhbHVlLCBzbG90Lm1hcmtlcikpO1xuXHRcdGlmICh1c2VkVHlwZWRTbG90cy5sZW5ndGggPT09IDAgJiYgdXNlZFJlYWN0aXZlU2xvdHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBwYXJzZWRWYWx1ZSwgcHJpb3JpdHkpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGNhblVzZVR5cGVkT00gPSBzdHlsZU1hcD8uc2V0ICYmICFwcmlvcml0eSAmJiAhcHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpO1xuXHRcdGxldCBhcHBsaWVkVGhyb3VnaFR5cGVkT00gPSBmYWxzZTtcblx0XHRpZiAoY2FuVXNlVHlwZWRPTSAmJiB1c2VkUmVhY3RpdmVTbG90cy5sZW5ndGggPiAwKSB0cnkge1xuXHRcdFx0Y29uc3QgZGlyZWN0U2xvdCA9IHVzZWRSZWFjdGl2ZVNsb3RzLmxlbmd0aCA9PT0gMSAmJiB1c2VkVHlwZWRTbG90cy5sZW5ndGggPT09IDAgPyB1c2VkUmVhY3RpdmVTbG90c1swXSA6IG51bGw7XG5cdFx0XHRpZiAoZGlyZWN0U2xvdCAmJiBpc0RpcmVjdFNsb3RVbml0UHJvZHVjdChwYXJzZWRWYWx1ZSwgZGlyZWN0U2xvdC5tYXJrZXIsIGRpcmVjdFNsb3QubXVsdGlwbGllZEJ5VW5pdCkpIHtcblx0XHRcdFx0Y29uc3QgbGlua2VkVmFsdWUgPSBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh3aW4sIGRpcmVjdFNsb3QubXVsdGlwbGllZEJ5VW5pdCwgcmVhZFJlYWN0aXZlTnVtYmVyKGRpcmVjdFNsb3QpKTtcblx0XHRcdFx0c3R5bGVNYXAuc2V0KHByb3BlcnR5LCBsaW5rZWRWYWx1ZSk7XG5cdFx0XHRcdGFkZE11dGFibGVMZWF2ZXMobXV0YWJsZUxlYXZlcywgYXR0YWNoTGVhZlRhcmdldHMoW3tcblx0XHRcdFx0XHRzbG90OiBkaXJlY3RTbG90LFxuXHRcdFx0XHRcdHZhbHVlOiBsaW5rZWRWYWx1ZVxuXHRcdFx0XHR9XSwgcHJvcGVydHksIGxpbmtlZFZhbHVlKSk7XG5cdFx0XHRcdGFwcGxpZWRUaHJvdWdoVHlwZWRPTSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGRpcmVjdFNsb3QgJiYgaXNEaXJlY3RTbG90VmFsdWUocGFyc2VkVmFsdWUsIGRpcmVjdFNsb3QubWFya2VyKSkge1xuXHRcdFx0XHRjb25zdCBsaW5rZWRWYWx1ZSA9IGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgXCJudW1iZXJcIiwgcmVhZFJlYWN0aXZlTnVtYmVyKGRpcmVjdFNsb3QpKTtcblx0XHRcdFx0c3R5bGVNYXAuc2V0KHByb3BlcnR5LCBsaW5rZWRWYWx1ZSk7XG5cdFx0XHRcdGFkZE11dGFibGVMZWF2ZXMobXV0YWJsZUxlYXZlcywgYXR0YWNoTGVhZlRhcmdldHMoW3tcblx0XHRcdFx0XHRzbG90OiBkaXJlY3RTbG90LFxuXHRcdFx0XHRcdHZhbHVlOiBsaW5rZWRWYWx1ZVxuXHRcdFx0XHR9XSwgcHJvcGVydHksIGxpbmtlZFZhbHVlKSk7XG5cdFx0XHRcdGFwcGxpZWRUaHJvdWdoVHlwZWRPTSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCB0cmVlID0gYnVpbGRUeXBlZE9NU3R5bGVWYWx1ZShwcm9wZXJ0eSwgcGFyc2VkVmFsdWUsIHdpbiwgdXNlZFJlYWN0aXZlU2xvdHMsIHVzZWRUeXBlZFNsb3RzKTtcblx0XHRcdFx0c3R5bGVNYXAuc2V0KHByb3BlcnR5LCB0cmVlLnJvb3QpO1xuXHRcdFx0XHRhZGRNdXRhYmxlTGVhdmVzKG11dGFibGVMZWF2ZXMsIGF0dGFjaExlYWZUYXJnZXRzKHRyZWUubGVhdmVzLCBwcm9wZXJ0eSwgdHJlZS5yb290KSk7XG5cdFx0XHRcdGFwcGxpZWRUaHJvdWdoVHlwZWRPTSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHRcdGlmIChhcHBsaWVkVGhyb3VnaFR5cGVkT00pIGNvbnRpbnVlO1xuXHRcdGlmIChjYW5Vc2VUeXBlZE9NICYmIHVzZWRSZWFjdGl2ZVNsb3RzLmxlbmd0aCA9PT0gMCAmJiB1c2VkVHlwZWRTbG90cy5sZW5ndGggPiAwKSB0cnkge1xuXHRcdFx0Y29uc3QgZGlyZWN0U2xvdCA9IHVzZWRUeXBlZFNsb3RzLmxlbmd0aCA9PT0gMSA/IHVzZWRUeXBlZFNsb3RzWzBdIDogbnVsbDtcblx0XHRcdGlmIChkaXJlY3RTbG90ICYmIGlzRGlyZWN0U2xvdFZhbHVlKHBhcnNlZFZhbHVlLCBkaXJlY3RTbG90Lm1hcmtlcikpIHtcblx0XHRcdFx0c3R5bGVNYXAuc2V0KHByb3BlcnR5LCBkaXJlY3RTbG90LnZhbHVlKTtcblx0XHRcdFx0YXBwbGllZFRocm91Z2hUeXBlZE9NID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0U2xvdCAmJiBpc0RpcmVjdFNsb3RVbml0UHJvZHVjdChwYXJzZWRWYWx1ZSwgZGlyZWN0U2xvdC5tYXJrZXIsIGRpcmVjdFNsb3QubXVsdGlwbGllZEJ5VW5pdCkpIHtcblx0XHRcdFx0Y29uc3QgQ1NTTWF0aFByb2R1Y3RDdG9yID0gZ2V0V2luZG93Q29uc3RydWN0b3Iod2luLCBcIkNTU01hdGhQcm9kdWN0XCIpO1xuXHRcdFx0XHRpZiAodHlwZW9mIENTU01hdGhQcm9kdWN0Q3RvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ1NTTWF0aFByb2R1Y3QgaXMgbm90IHN1cHBvcnRlZFwiKTtcblx0XHRcdFx0Y29uc3QgcHJvZHVjdCA9IG5ldyBDU1NNYXRoUHJvZHVjdEN0b3IoZGlyZWN0U2xvdC52YWx1ZSwgY3JlYXRlVHlwZWRVbml0VmFsdWUod2luLCBkaXJlY3RTbG90Lm11bHRpcGxpZWRCeVVuaXQsIDEpKTtcblx0XHRcdFx0c3R5bGVNYXAuc2V0KHByb3BlcnR5LCBwcm9kdWN0KTtcblx0XHRcdFx0YXBwbGllZFRocm91Z2hUeXBlZE9NID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgdHJlZSA9IGJ1aWxkVHlwZWRPTVN0eWxlVmFsdWUocHJvcGVydHksIHBhcnNlZFZhbHVlLCB3aW4sIFtdLCB1c2VkVHlwZWRTbG90cyk7XG5cdFx0XHRcdFx0c3R5bGVNYXAuc2V0KHByb3BlcnR5LCB0cmVlLnJvb3QpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRjb25zdCByZWNvbnN0cnVjdGVkID0gcmVwbGFjZVR5cGVkTWFya2VycyhwYXJzZWRWYWx1ZSwgdXNlZFR5cGVkU2xvdHMpO1xuXHRcdFx0XHRcdHNldFBhcnNlZFR5cGVkVmFsdWUoc3R5bGVNYXAsIENTU1N0eWxlVmFsdWVDdG9yLCBwcm9wZXJ0eSwgcmVjb25zdHJ1Y3RlZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXBwbGllZFRocm91Z2hUeXBlZE9NID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdFx0aWYgKGFwcGxpZWRUaHJvdWdoVHlwZWRPTSkgY29udGludWU7XG5cdFx0Y29uc3QgcmVjb25zdHJ1Y3RlZCA9IHJlcGxhY2VUeXBlZE1hcmtlcnMocGFyc2VkVmFsdWUsIHVzZWRUeXBlZFNsb3RzKTtcblx0XHRlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCByZWNvbnN0cnVjdGVkLCBwcmlvcml0eSk7XG5cdFx0Zm9yIChjb25zdCBzbG90IG9mIHVzZWRSZWFjdGl2ZVNsb3RzKSByZXF1aXJlZENTU1ZhcmlhYmxlcy5hZGQoc2xvdC5tYXJrZXIpO1xuXHR9XG5cdGZvciAoY29uc3Qgc2xvdCBvZiByZWFjdGl2ZVNsb3RzKSB7XG5cdFx0Y29uc3QgbGVhdmVzID0gbXV0YWJsZUxlYXZlcy5nZXQoc2xvdC5tYXJrZXIpID8/IFtdO1xuXHRcdGNvbnN0IG5lZWRzQ1NTVmFyaWFibGUgPSByZXF1aXJlZENTU1ZhcmlhYmxlcy5oYXMoc2xvdC5tYXJrZXIpO1xuXHRcdGlmIChsZWF2ZXMubGVuZ3RoID09PSAwICYmICFuZWVkc0NTU1ZhcmlhYmxlKSBjb250aW51ZTtcblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBiaW5kV2l0aChlbGVtZW50LCBzbG90Lm1hcmtlciwgc2xvdC52YWx1ZSwgZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdFx0aWYgKGxlYXZlcy5sZW5ndGggPiAwKSB0cnkge1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSByZWFkUmVhY3RpdmVOdW1iZXIoc2xvdCk7XG5cdFx0XHRcdGNvbnN0IGRpcnR5Um9vdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG5cdFx0XHRcdFx0bGVhZi52YWx1ZS52YWx1ZSA9IG5leHRWYWx1ZTtcblx0XHRcdFx0XHRkaXJ0eVJvb3RzLnNldChsZWFmLnByb3BlcnR5LCBsZWFmLnJvb3QpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdHlsZU1hcD8uc2V0KSBmb3IgKGNvbnN0IFtwcm9wZXJ0eU5hbWUsIHJvb3RdIG9mIGRpcnR5Um9vdHMpIHN0eWxlTWFwLnNldChwcm9wZXJ0eU5hbWUsIHJvb3QpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aWYgKG5lZWRzQ1NTVmFyaWFibGUpIGhhbmRsZVN0eWxlQ2hhbmdlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdH0pO1xuXHRcdHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuXHR9XG5cdGZvciAoY29uc3QgbmFtZSBvZiByZXF1aXJlZENTU1ZhcmlhYmxlcykge1xuXHRcdGlmIChyZWFjdGl2ZVNsb3RzLnNvbWUoKHNsb3QpID0+IHNsb3QubWFya2VyID09PSBuYW1lKSkgY29udGludWU7XG5cdFx0Y29uc3QgdmFsdWUgPSB2YXJpYWJsZXMuZ2V0KG5hbWUpO1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSBjb250aW51ZTtcblx0XHRzdWJzY3JpcHRpb25zLnB1c2goYmluZFdpdGgoZWxlbWVudCwgbmFtZSwgdmFsdWUsIGhhbmRsZVN0eWxlQ2hhbmdlKSk7XG5cdH1cblx0cHJ1bmVFbXB0eVN0eWxlQXR0cmlidXRlKGVsZW1lbnQpO1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHN1YnNjcmlwdGlvbnMpIHN1YnNjcmlwdGlvbj8uKCk7XG5cdH07XG59O1xudmFyIGNvbXBsaWxlU3RhdGljQ1NTVGV4dCA9IChmb3JSZXR1cm4pID0+IHtcblx0Y29uc3QgW2FwcGx5LCBwcm9wZXJ0aWVzLCB2YXJpYWJsZXNdID0gZm9yUmV0dXJuO1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YXBwbHkoZWxlbWVudCk7XG5cdHJldHVybiBlbGVtZW50LnN0eWxlLmNzc1RleHQ7XG59O1xudmFyIFMgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG5cdGNvbnN0IHRlbXBsYXRlSWQgPSBzdHlsZVRlbXBsYXRlSWQrKztcblx0Y29uc3QgcHJvcGVydGllcyA9IFtdO1xuXHRjb25zdCB2YXJpYWJsZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCB0eXBlZFNsb3RzID0gW107XG5cdGNvbnN0IHJlYWN0aXZlU2xvdHMgPSBbXTtcblx0Y29uc3QgcGFydHMgPSBbXTtcblx0Y29uc3QgYW5pbWF0YWJsZVNsb3RzID0gW107XG5cdGNvbnN0IGNvbnN1bWVkID0gbmV3IEFycmF5KHN0cmluZ3MubGVuZ3RoKS5maWxsKDApO1xuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RyaW5ncy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRwYXJ0cy5wdXNoKHN0cmluZ3NbaW5kZXhdLnNsaWNlKGNvbnN1bWVkW2luZGV4XSkpO1xuXHRcdGlmIChpbmRleCA+PSB2YWx1ZXMubGVuZ3RoKSBjb250aW51ZTtcblx0XHRjb25zdCB2YWx1ZSA9IHZhbHVlc1tpbmRleF07XG5cdFx0Y29uc3QgbmV4dFRleHQgPSBzdHJpbmdzW2luZGV4ICsgMV0gPz8gXCJcIjtcblx0XHRjb25zdCBhdHRhY2hlZFVuaXQgPSByZWFkQXR0YWNoZWRDU1NVbml0KG5leHRUZXh0KTtcblx0XHRpZiAoaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbHVlKSkge1xuXHRcdFx0Y29uc3QgbWFya2VyID0gYC0tZmVzdC10eXBlZC0ke3RlbXBsYXRlSWR9LSR7dHlwZWRTbG90cy5sZW5ndGh9YDtcblx0XHRcdHR5cGVkU2xvdHMucHVzaCh7XG5cdFx0XHRcdG1hcmtlcixcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdG11bHRpcGxpZWRCeVVuaXQ6IGF0dGFjaGVkVW5pdD8ubm9ybWFsaXplZFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAoYXR0YWNoZWRVbml0KSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYGNhbGModmFyKCR7bWFya2VyfSkgKiAxJHthdHRhY2hlZFVuaXQuYXV0aG9yZWR9KWApO1xuXHRcdFx0XHRjb25zdW1lZFtpbmRleCArIDFdICs9IGF0dGFjaGVkVW5pdC5sZW5ndGg7XG5cdFx0XHR9IGVsc2UgcGFydHMucHVzaChgdmFyKCR7bWFya2VyfSlgKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoaXNBbmltYXRhYmxlVmFsdWUodmFsdWUpKSB7XG5cdFx0XHRjb25zdCBtYXJrZXIgPSBgLS1mZXN0LWFuaW0tJHt0ZW1wbGF0ZUlkfS0ke2FuaW1hdGFibGVTbG90cy5sZW5ndGh9YDtcblx0XHRcdGlmIChhdHRhY2hlZFVuaXQpIHtcblx0XHRcdFx0cGFydHMucHVzaChgY2FsYyh2YXIoJHttYXJrZXJ9KSAqIDEke2F0dGFjaGVkVW5pdC5hdXRob3JlZH0pYCk7XG5cdFx0XHRcdGNvbnN1bWVkW2luZGV4ICsgMV0gKz0gYXR0YWNoZWRVbml0Lmxlbmd0aDtcblx0XHRcdH0gZWxzZSBwYXJ0cy5wdXNoKGB2YXIoJHttYXJrZXJ9KWApO1xuXHRcdFx0cHJvcGVydGllcy5wdXNoKGBAcHJvcGVydHkgJHttYXJrZXJ9IHsgc3ludGF4OiBcIjxudW1iZXI+XCI7IGluaXRpYWwtdmFsdWU6ICR7TnVtYmVyKHZhbHVlLnZhbHVlKSB8fCAwfTsgaW5oZXJpdHM6IGZhbHNlOyB9O2ApO1xuXHRcdFx0YW5pbWF0YWJsZVNsb3RzLnB1c2goe1xuXHRcdFx0XHRtYXJrZXIsXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRtdWx0aXBsaWVkQnlVbml0OiBhdHRhY2hlZFVuaXQ/Lm5vcm1hbGl6ZWRcblx0XHRcdH0pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChpc1JlYWN0aXZlU3R5bGVWYWx1ZSh2YWx1ZSkpIHtcblx0XHRcdGNvbnN0IG1hcmtlciA9IGAtLWZlc3QtcmVmLSR7dGVtcGxhdGVJZH0tJHtyZWFjdGl2ZVNsb3RzLmxlbmd0aH1gO1xuXHRcdFx0cmVhY3RpdmVTbG90cy5wdXNoKHtcblx0XHRcdFx0bWFya2VyLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0bXVsdGlwbGllZEJ5VW5pdDogYXR0YWNoZWRVbml0Py5ub3JtYWxpemVkXG5cdFx0XHR9KTtcblx0XHRcdGlmIChhdHRhY2hlZFVuaXQpIHtcblx0XHRcdFx0cGFydHMucHVzaChgY2FsYyh2YXIoJHttYXJrZXJ9KSAqIDEke2F0dGFjaGVkVW5pdC5hdXRob3JlZH0pYCk7XG5cdFx0XHRcdGNvbnN1bWVkW2luZGV4ICsgMV0gKz0gYXR0YWNoZWRVbml0Lmxlbmd0aDtcblx0XHRcdH0gZWxzZSBwYXJ0cy5wdXNoKGB2YXIoJHttYXJrZXJ9KWApO1xuXHRcdFx0Y29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0UmVhY3RpdmVJbml0aWFsTnVtYmVyKHZhbHVlKTtcblx0XHRcdHByb3BlcnRpZXMucHVzaChgQHByb3BlcnR5ICR7bWFya2VyfSB7IHN5bnRheDogXCI8bnVtYmVyPlwiOyBpbml0aWFsLXZhbHVlOiAke2luaXRpYWxWYWx1ZX07IGluaGVyaXRzOiB0cnVlOyB9O2ApO1xuXHRcdFx0dmFyaWFibGVzLnNldChtYXJrZXIsIHZhbHVlKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiICYmIHZhbHVlICE9IG51bGwgJiYgU3RyaW5nKHZhbHVlKS50cmltKCkgIT09IFwiXCIpIHBhcnRzLnB1c2goU3RyaW5nKHZhbHVlKSk7XG5cdH1cblx0Y29uc3QgZm9yUmV0dXJuID0gW1xuXHRcdChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gYXBwbHlTdHlsZVRlbXBsYXRlKGVsZW1lbnQsIHBhcnRzLmpvaW4oXCJcIiksIHR5cGVkU2xvdHMsIHJlYWN0aXZlU2xvdHMsIHZhcmlhYmxlcywgYW5pbWF0YWJsZVNsb3RzKTtcblx0XHR9LFxuXHRcdHByb3BlcnRpZXMsXG5cdFx0dmFyaWFibGVzXG5cdF07XG5cdGZvclJldHVybltTeW1ib2wudG9TdHJpbmdUYWddID0gKCkgPT4gY29tcGxpbGVTdGF0aWNDU1NUZXh0KGZvclJldHVybik7XG5cdGZvclJldHVybltTeW1ib2wudG9QcmltaXRpdmVdID0gKHR5cGUpID0+IHtcblx0XHRpZiAodHlwZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGNvbXBsaWxlU3RhdGljQ1NTVGV4dChmb3JSZXR1cm4pO1xuXHRcdHJldHVybiBmb3JSZXR1cm5bMF07XG5cdH07XG5cdGZvclJldHVybi50b1N0cmluZyA9ICgpID0+IGNvbXBsaWxlU3RhdGljQ1NTVGV4dChmb3JSZXR1cm4pO1xuXHRmb3JSZXR1cm4udmFsdWVPZiA9ICgpID0+IGNvbXBsaWxlU3RhdGljQ1NTVGV4dChmb3JSZXR1cm4pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm9yUmV0dXJuLCBcImNzc1RleHRcIiwge1xuXHRcdGdldDogKCkgPT4gY29tcGxpbGVTdGF0aWNDU1NUZXh0KGZvclJldHVybiksXG5cdFx0c2V0OiAodmFsdWUpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwic2V0IGNzc1RleHRcIiwgdmFsdWUpO1xuXHRcdFx0Y29uc3QgW2FwcGx5LCBwcm9wZXJ0aWVzLCB2YXJpYWJsZXNdID0gZm9yUmV0dXJuO1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRhcHBseShlbGVtZW50KTtcblx0XHRcdGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xuXHRcdH0sXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdGVudW1lcmFibGU6IHRydWVcblx0fSk7XG5cdHJldHVybiBmb3JSZXR1cm47XG59O1xudmFyIGNzcyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcblx0cmV0dXJuIFMoc3RyaW5ncywgLi4udmFsdWVzKTtcbn07XG52YXIgc3BsaXRJbmxpbmVTdHlsZVBsYWNlaG9sZGVycyA9IChzb3VyY2UsIGF0dHJpYnV0ZXMpID0+IHtcblx0Y29uc3Qgc3RyaW5ncyA9IFtdO1xuXHRjb25zdCB2YWx1ZXMgPSBbXTtcblx0Y29uc3QgcGF0dGVybiA9IC8jXFx7KFxcZCspXFx9L2c7XG5cdGxldCBjdXJzb3IgPSAwO1xuXHRsZXQgbWF0Y2g7XG5cdHdoaWxlICgobWF0Y2ggPSBwYXR0ZXJuLmV4ZWMoc291cmNlKSkgIT0gbnVsbCkge1xuXHRcdGNvbnN0IGF0dHJpYnV0ZUluZGV4ID0gTnVtYmVyLnBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG5cdFx0aWYgKCFOdW1iZXIuaXNTYWZlSW50ZWdlcihhdHRyaWJ1dGVJbmRleCkgfHwgYXR0cmlidXRlSW5kZXggPCAwKSBjb250aW51ZTtcblx0XHRzdHJpbmdzLnB1c2goc291cmNlLnNsaWNlKGN1cnNvciwgbWF0Y2guaW5kZXgpKTtcblx0XHR2YWx1ZXMucHVzaChhdHRyaWJ1dGVzW2F0dHJpYnV0ZUluZGV4XSk7XG5cdFx0Y3Vyc29yID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG5cdH1cblx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXHRzdHJpbmdzLnB1c2goc291cmNlLnNsaWNlKGN1cnNvcikpO1xuXHRyZXR1cm4ge1xuXHRcdHN0cmluZ3MsXG5cdFx0dmFsdWVzXG5cdH07XG59O1xudmFyIGpvaW5TdGF0aWNJbmxpbmVTdHlsZSA9IChzdHJpbmdzLCB2YWx1ZXMpID0+IHtcblx0bGV0IHJlc3VsdCA9IHN0cmluZ3NbMF0gPz8gXCJcIjtcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRjb25zdCB2YWx1ZSA9IHZhbHVlc1tpbmRleF07XG5cdFx0aWYgKHZhbHVlICE9IG51bGwpIHJlc3VsdCArPSBTdHJpbmcodmFsdWUpO1xuXHRcdHJlc3VsdCArPSBzdHJpbmdzW2luZGV4ICsgMV0gPz8gXCJcIjtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbnZhciBjb21waWxlSW5saW5lU3R5bGVBdHRyaWJ1dGUgPSAoc291cmNlLCBhdHRyaWJ1dGVzKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IHNwbGl0SW5saW5lU3R5bGVQbGFjZWhvbGRlcnMoc291cmNlLCBhdHRyaWJ1dGVzKTtcblx0aWYgKCFwYXJzZWQpIHJldHVybiBudWxsO1xuXHRjb25zdCB7IHN0cmluZ3MsIHZhbHVlcyB9ID0gcGFyc2VkO1xuXHRpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSAmJiAoc3RyaW5nc1swXSA/PyBcIlwiKS50cmltKCkgPT09IFwiXCIgJiYgKHN0cmluZ3NbMV0gPz8gXCJcIikudHJpbSgpID09PSBcIlwiICYmICFpc1N0YXRpY1N0eWxlSW50ZXJwb2xhdGlvbih2YWx1ZXNbMF0pICYmICFpc05hdGl2ZUNTU1N0eWxlVmFsdWUodmFsdWVzWzBdKSkge1xuXHRcdGlmIChpc1N0eWxlQmluZGluZyh2YWx1ZXNbMF0pKSByZXR1cm4ge1xuXHRcdFx0a2luZDogXCJ0ZW1wbGF0ZVwiLFxuXHRcdFx0YmluZGluZzogdmFsdWVzWzBdXG5cdFx0fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0a2luZDogXCJkaXJlY3RcIixcblx0XHRcdHZhbHVlOiB2YWx1ZXNbMF1cblx0XHR9O1xuXHR9XG5cdGlmICh2YWx1ZXMuc29tZSgodmFsdWUpID0+IGlzUmVhY3RpdmVTdHlsZVZhbHVlKHZhbHVlKSB8fCBpc05hdGl2ZUNTU1N0eWxlVmFsdWUodmFsdWUpKSkgcmV0dXJuIHtcblx0XHRraW5kOiBcInRlbXBsYXRlXCIsXG5cdFx0YmluZGluZzogUyhzdHJpbmdzLCAuLi52YWx1ZXMpXG5cdH07XG5cdGlmICh2YWx1ZXMuZXZlcnkoaXNTdGF0aWNTdHlsZUludGVycG9sYXRpb24pKSByZXR1cm4ge1xuXHRcdGtpbmQ6IFwic3RhdGljXCIsXG5cdFx0Y3NzVGV4dDogam9pblN0YXRpY0lubGluZVN0eWxlKHN0cmluZ3MsIHZhbHVlcylcblx0fTtcblx0cmV0dXJuIHtcblx0XHRraW5kOiBcInRlbXBsYXRlXCIsXG5cdFx0YmluZGluZzogUyhzdHJpbmdzLCAuLi52YWx1ZXMpXG5cdH07XG59O1xudmFyIGJpbmRTdHlsZSA9IChlbGVtZW50LCBzdHlsZWQpID0+IHtcblx0Y29uc3QgYXBwbHkgPSBBcnJheS5pc0FycmF5KHN0eWxlZCkgPyBzdHlsZWRbMF0gOiBzdHlsZWQ7XG5cdGlmICh0eXBlb2YgYXBwbHkgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuICgpID0+IHt9O1xuXHRjb25zdCByZXN1bHQgPSBhcHBseShlbGVtZW50KTtcblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRyZXN1bHQoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmVzdWx0Py51bmJpbmQ/LigpO1xuXHR9O1xufTtcbnZhciByZWdpc3RlcmVkUHJvcGVydGllcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgZW5zdXJlUmVnaXN0ZXJlZE51bWJlclByb3BlcnR5ID0gKHdpbiwgbmFtZSwgaW5pdGlhbFZhbHVlKSA9PiB7XG5cdGlmIChyZWdpc3RlcmVkUHJvcGVydGllcy5oYXMobmFtZSkpIHJldHVybjtcblx0cmVnaXN0ZXJlZFByb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR0cnkge1xuXHRcdCh3aW4/LkNTUyA/PyBDU1MpPy5yZWdpc3RlclByb3BlcnR5Py4oe1xuXHRcdFx0bmFtZSxcblx0XHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdFx0aW5pdGlhbFZhbHVlOiBTdHJpbmcoaW5pdGlhbFZhbHVlKSxcblx0XHRcdGluaGVyaXRzOiBmYWxzZVxuXHRcdH0pO1xuXHR9IGNhdGNoIHt9XG59O1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IEEsIEFOSU1BVEFCTEVfQlJBTkQsIEFuaW1hdGFibGVWYWx1ZSwgT1dORVIsIFMsIGFkZEFkb3B0ZWRTaGVldFRvRWxlbWVudCwgYWRvcHRlZEJsb2JNYXAsIGFkb3B0ZWRMYXllck1hcCwgYWRvcHRlZE1hcCwgYWRvcHRlZFNlbGVjdG9yTWFwLCBhZG9wdGVkU2hhZG93TGF5ZXJNYXAsIGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcCwgYWRvcHRlZFN0eWxlU2hlZXRzQ2FjaGUsIGFuaW1hdGFibGUsIGFuaW1hdGUsIGFwcGx5Tm9ybWFsaXplZElubGluZVN0eWxlLCBiaW5kU3R5bGUsIGJsb2JVUkxNYXAsIGNhY2hlTWFwLCBjb21waWxlSW5saW5lU3R5bGVBdHRyaWJ1dGUsIGNzcywgY3NzVGV4dEZvckFkb3B0ZWRTaGVldCwgY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50LCBkZWZpbmVBbmltYXRpb24sIGRvQW5pbWF0aW9uLCBlbnN1cmVBZG9wdGVkU2hlZXRDb250ZW50LCBlbnN1cmVIb3N0U3R5bGVzLCBmZXRjaEFuZENhY2hlLCBmZXRjaEFzSW5saW5lLCBnZXRBZG9wdGVkU3R5bGVSdWxlLCBnZXRFbGVtZW50Wm9vbSwgZ2V0UGFkZGluZywgZ2V0UHJvcGVydHlWYWx1ZSwgZ2V0UHhWYWx1ZSwgZ2V0U3R5bGVMYXllciwgZ2V0U3R5bGVSdWxlLCBnZXRUcmFuc2Zvcm0sIGdldFRyYW5zZm9ybU9yaWdpbiwgaGFzaCwgaXNBZG9wdGVkU2hlZXRFbXB0eSwgaXNBbmltYXRhYmxlVmFsdWUsIGlzRWZmZWN0aXZlbHlFbXB0eVN0eWxlVGV4dCwgaXNOYXRpdmVDU1NTdHlsZVZhbHVlLCBpc1JlYWN0aXZlU3R5bGVWYWx1ZSwgaXNTdHlsZUJpbmRpbmcsIGlzU3R5bGVIb3N0LCBsYXllckNvdW50ZXIsIGxvYWRBc0Fkb3B0ZWQsIGxvYWRCbG9iU3R5bGUsIGxvYWRDYWNoZWRTdHlsZXMsIGxvYWRJbmxpbmVTdHlsZSwgbG9hZFN0eWxlU2hlZXQsIG5vdGlmeVN0eWxlVHJlZUhvc3RzLCBvYnNlcnZlU3R5bGVUcmVlLCBvblNjcm9sbCwgb25WaWV3LCBwYXJhbGxlbEFuaW1hdGlvbnMsIHBhcnNlTGVuZ3RoLCBwYXJzZU9yaWdpbiwgcGFyc2VUaW1lLCBwcmVsb2FkU3R5bGUsIHByb21pc2VPckRpcmVjdCwgcHJ1bmVFbXB0eVN0eWxlQXR0cmlidXRlLCByZWdpc3RlclN0eWxlVHJlZUhvb2ssIHJlaHlkcmF0ZUFkb3B0ZWRTdHlsZVNoZWV0cywgcmVoeWRyYXRlQ29uc3RydWN0YWJsZVNoZWV0cywgcmVtb3ZlQWRvcHRlZCwgc2NoZWR1bGVFbnN1cmVIb3N0U3R5bGVzLCBzZXF1ZW5jZUFuaW1hdGlvbnMsIHNldFByb3BlcnR5LCBzZXRTdHlsZUluUnVsZSwgc2V0U3R5bGVQcm9wZXJ0eSwgc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrLCBzZXRTdHlsZVByb3BlcnR5VHlwZWQsIHNldFN0eWxlUnVsZSwgc2V0U3R5bGVSdWxlcywgc2V0U3R5bGVVUkwsIHN0YWdnZXJBbmltYXRpb24sIHN0eWxlQ2FjaGUsIHN0eWxlRWxlbWVudENhY2hlLCBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0IH07Il0sCiAgIm1hcHBpbmdzIjog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R0FDSXNnQixLQUFZLENBQUN4ZixHQUFTeWYsTUFBVztBQUNwQyxRQUFNdkgsSUFBUSxNQUFNLFFBQVF1SCxDQUFNLElBQUlBLEVBQU8sQ0FBQyxJQUFJQTtBQUNsRCxNQUFJLE9BQU92SCxLQUFVLFdBQVksUUFBTyxNQUFNO0FBQUEsRUFBQztBQUMvQyxRQUFNakwsSUFBU2lMLEVBQU1sWSxDQUFPO0FBQzVCLFNBQU8sTUFBTTtBQUNaLFFBQUksT0FBT2lOLEtBQVcsWUFBWTtBQUNqQyxNQUFBQSxFQUFPO0FBQ1A7QUFBQSxJQUNEO0FBQ0EsSUFBQUEsR0FBUSxTQUFTO0FBQUEsRUFDbEI7QUFDRCxHQUNJeVMsS0FBdUMsb0JBQUksSUFBSSxHQUMvQ2pDLEtBQWlDLENBQUM5ZixHQUFLQyxHQUFNb2hCLE1BQWlCO0FBQ2pFLE1BQUksQ0FBQVUsR0FBcUIsSUFBSTloQixDQUFJLEdBQ2pDO0FBQUEsSUFBQThoQixHQUFxQixJQUFJOWhCLENBQUk7QUFDN0IsUUFBSTtBQUNILE9BQUNELEdBQUssT0FBTyxNQUFNLG1CQUFtQjtBQUFBLFFBQ3JDLE1BQUFDO0FBQUEsUUFDQSxRQUFRO0FBQUEsUUFDUixjQUFjLE9BQU9vaEIsQ0FBWTtBQUFBLFFBQ2pDLFVBQVU7QUFBQSxNQUNYLENBQUM7QUFBQSxJQUNGLFFBQVE7QUFBQSxJQUFDO0FBQUE7QUFDVjsiLAogICJuYW1lcyI6IFsiJGF2b2lkVHJpZ2dlciIsICIkZ2V0VmFsdWUiLCAiJHNldCIsICJjYW1lbFRvS2ViYWIiLCAiZGVyZWYiLCAiZ2V0T3JJbnNlcnRDb21wdXRlZCIsICJoYW5kbGVMaXN0ZW5lcnMiLCAiaGFzVmFsdWUiLCAiaXNOb3RFcXVhbCIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJ0b1JlZiIsICJ0cnlTdHJpbmdBc051bWJlciIsICJEb3VibGVXZWFrTWFwIiwgImFkZFRvQ2FsbENoYWluIiwgImFmZmVjdGVkIiwgImhhbmRsZUF0dHJpYnV0ZSIsICJoYW5kbGVQcm9wZXJ0eSIsICJvYnNlcnZlQXR0cmlidXRlIiwgImlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSQxIiwgInZhbHVlIiwgIkNTU1N0eWxlVmFsdWVDdG9yIiwgInByb3RvdHlwZSIsICJpc1JlYWN0aXZlU3R5bGVWYWx1ZSQxIiwgImdldFdpbmRvd0NvbnN0cnVjdG9yJDEiLCAid2luIiwgIm5hbWUiLCAiZ2V0Q1NTVW5pdEZhY3RvcnlOYW1lJDEiLCAidW5pdCIsICJnZXRDU1NVbml0Q29uc3RydWN0b3JOYW1lJDEiLCAiY3JlYXRlVHlwZWRVbml0VmFsdWUkMSIsICJDU1NOYW1lc3BhY2UiLCAiZmFjdG9yeU5hbWUiLCAiZmFjdG9yeSIsICJDU1NVbml0VmFsdWVDdG9yIiwgInRva2VuaXplTnVtZXJpY0NTUyQxIiwgInNvdXJjZSIsICJ0b2tlbnMiLCAiY3Vyc29yIiwgInJlc3QiLCAid2hpdGVzcGFjZSIsICJudW1iZXIiLCAidW5pdE1hdGNoIiwgImlkZW50aWZpZXIiLCAic3ltYm9sIiwgIk51bWVyaWNUeXBlZE9NUGFyc2VyJDEiLCAicm9vdCIsICJ0b2tlbiIsICJ2YWx1ZXMiLCAiQ29uc3RydWN0b3IiLCAib3BlcmF0b3IiLCAicmlnaHQiLCAicGFyc2VUb1R5cGVkT00iLCAiY3NzVmFsdWUiLCAiaGFzVHlwZWRPTSIsICJpc1VuaXRWYWx1ZSIsICJ2YWwiLCAic2V0UHJvcGVydHlJZk5vdEVxdWFsIiwgInN0eWxlUmVmIiwgImtlYmFiIiwgImltcG9ydGFuY2UiLCAic2V0U3R5bGVQcm9wZXJ0eVR5cGVkIiwgImVsZW1lbnQiLCAic3R5bGVNYXBSZWYiLCAic2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrIiwgIm9sZCIsICJuZXdWYWwiLCAicGFyc2VkIiwgIm1heWJlTnVtIiwgInNldFN0eWxlUHJvcGVydHkiLCAic2V0U3R5bGVJblJ1bGUiLCAic2VsZWN0b3IiLCAiZ2V0U3R5bGVSdWxlIiwgInNldFN0eWxlUnVsZSIsICJzaGVldCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJoYXNoIiwgInN0cmluZyIsICJoYXNoQnVmZmVyIiwgImxvYWRTdHlsZVNoZWV0IiwgImlubGluZSIsICJiYXNlIiwgImxheWVyIiwgImludGVncml0eSIsICJsb2FkIiwgImZldGNoQW5kQ2FjaGUiLCAidXJsIiwgInNldFN0eWxlVVJMIiwgInByb21pc2VPckRpcmVjdCIsICJyZXMiLCAiZXJyb3IiLCAibG9hZEJsb2JTdHlsZSIsICJzdHlsZSIsICJsb2FkSW5saW5lU3R5bGUiLCAicm9vdEVsZW1lbnQiLCAiUExBQ0UiLCAic2V0UHJvcGVydHkiLCAidGFyZ2V0IiwgInByZWxvYWRTdHlsZSIsICJzdHlsZXMiLCAibG9hZEFzQWRvcHRlZCIsICJhZG9wdGVkTWFwU3ltYm9sIiwgImFkb3B0ZWRNYXAiLCAiYWRvcHRlZEJsb2JNYXBTeW1ib2wiLCAiYWRvcHRlZEJsb2JNYXAiLCAiYWRvcHRlZEFwcGxpZWRUZXh0U3ltYm9sIiwgImFkb3B0ZWRBcHBsaWVkVGV4dCIsICJhZG9wdGVkRmlsbGVkU3ltYm9sIiwgImFkb3B0ZWRGaWxsZWQiLCAid3JhcEFkb3B0ZWRMYXllciIsICJjc3NUZXh0IiwgImxheWVyTmFtZSIsICJyZWFkU2hlZXRSdWxlQ291bnQiLCAicmVtZW1iZXJBZG9wdGVkVGV4dCIsICJjc3NUZXh0Rm9yQWRvcHRlZFNoZWV0IiwgInN0b3JlZCIsICJrZXkiLCAibWFwcGVkIiwgImlzQWRvcHRlZFNoZWV0RW1wdHkiLCAiY291bnQiLCAiZW5zdXJlQWRvcHRlZFNoZWV0Q29udGVudCIsICJ0ZXh0IiwgImFwcGx5QWRvcHRlZFN0eWxlVGV4dCIsICJsYXllckNvdW50ZXJTeW1ib2wiLCAibGF5ZXJDb3VudGVyIiwgIm1lc3NhZ2UiLCAidXJsQ2FuUGFyc2UiLCAic2hlZXRGb3JCbG9iIiwgImJsb2IiLCAibG9hZEFzQWRvcHRlZFVuc2FmZSIsICJzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0IiwgImNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudCIsICJjYWNoZWQiLCAiYXBwbGllZCIsICJsYXllcldyYXBwZWQiLCAicmVtb3ZlQWRvcHRlZCIsICJmZXRjaEFzSW5saW5lIiwgInN0eWxlVHJlZUhvb2tTeW1ib2wiLCAic3R5bGVUcmVlSG9va3MiLCAic3R5bGVUcmVlT2JzZXJ2ZWQiLCAic3R5bGVUcmVlUm9vdHMiLCAiU1RZTEVfVFJFRV9BVFRSUyIsICJpc1N0eWxlSG9zdCIsICJub2RlIiwgImNvbGxlY3RTdHlsZUhvc3RzIiwgImludG8iLCAiY2hpbGQiLCAiZWwiLCAibm90aWZ5U3R5bGVUcmVlSG9zdHMiLCAiaG9zdHMiLCAicmVhc29uIiwgImZuIiwgInJlZ2lzdGVyU3R5bGVUcmVlSG9vayIsICJvYnNlcnZlU3R5bGVUcmVlIiwgIm9ic2VydmVyIiwgInJlY29yZHMiLCAicmVjIiwgInNjb3BlIiwgInNoZWV0cyIsICJyZWh5ZHJhdGVDb25zdHJ1Y3RhYmxlU2hlZXRzIiwgImNhblBhcnNlIiwgImlkeCIsICJwYXJzZU9yaWdpbiIsICJvcmlnaW4iLCAicGFyc2VMZW5ndGgiLCAic2l6ZSIsICJnZXRUcmFuc2Zvcm0iLCAibWF0cml4IiwgImdldFRyYW5zZm9ybU9yaWdpbiIsICJjc3NPcmlnaW4iLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJzcmMiLCAiY3MiLCAiZ2V0RWxlbWVudFpvb20iLCAiem9vbSIsICJjdXJyZW50RWxlbWVudCIsICJjdXJyZW50Q1NTWm9vbSIsICJnZXRQeFZhbHVlIiwgImdldFBhZGRpbmciLCAiYXhpcyIsICJPV05FUiIsICJzdHlsZUVsZW1lbnQiLCAiY3NzIiwgImlzTGF5ZXJCbG9ja1J1bGUiLCAiZ2V0T3JDcmVhdGVMYXllclJ1bGUiLCAicnVsZXMiLCAiZXhpc3RpbmciLCAicnVsZUluZGV4IiwgImNyZWF0ZWQiLCAic2V0U3R5bGVSdWxlcyIsICJjbGFzc2VzIiwgImFyZ3MiLCAiZ2V0U3R5bGVMYXllciIsICJzdHlsZUlkQ291bnRlciIsICJpc1NoYWRvd1Jvb3QiLCAiaXNEb2N1bWVudCIsICJpc0VsZW1lbnQiLCAiZXNjYXBlQ1NTSWRlbnRpZmllciIsICJjaGFyIiwgImNyZWF0ZVN0eWxlSWQiLCAiam9pblNjb3BlZFNlbGVjdG9yIiwgImZpbmRTdHlsZVJ1bGUiLCAiZnVsbFNlbGVjdG9yIiwgImV4cGVjdGVkIiwgInJlcXVlc3RlZCIsICJhY3R1YWwiLCAiYmFzaXMiLCAiYmFzaXNFbGVtZW50IiwgInN0eWxlSWQiLCAic3R5bGVFbGVtZW50R2xvYmFsIiwgInJ1bGVJZCIsICJwcm9taXNlIiwgImNiIiwgImJsb2JVUkxNYXBTeW1ib2wiLCAiYmxvYlVSTE1hcCIsICJjYWNoZU1hcFN5bWJvbCIsICJjYWNoZU1hcCIsICJidXJsIiwgInByb21pc2VkIiwgImNhY2hlQ29udGVudE1hcCIsICJjYWNoZUJsb2JDb250ZW50TWFwIiwgImFkb3B0ZWRTZWxlY3Rvck1hcFN5bWJvbCIsICJhZG9wdGVkU2VsZWN0b3JNYXAiLCAiYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwU3ltYm9sIiwgImFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcCIsICJhZG9wdGVkTGF5ZXJNYXBTeW1ib2wiLCAiYWRvcHRlZExheWVyTWFwIiwgImFkb3B0ZWRTaGFkb3dMYXllck1hcFN5bWJvbCIsICJhZG9wdGVkU2hhZG93TGF5ZXJNYXAiLCAiZ2V0QWRvcHRlZFN0eWxlUnVsZSIsICJ0YXJnZXRBZG9wdGVkU2hlZXRzIiwgInNlbGVjdG9yS2V5IiwgInNoYWRvd01hcCIsICJsYXllclJ1bGUiLCAic2hhZG93TGF5ZXJNYXAiLCAibGF5ZXJSdWxlSW5kZXgiLCAiciIsICJhZG9wdGVkU2hlZXRzU3ltYm9sIiwgImFkb3B0ZWRTdHlsZVNoZWV0c0NhY2hlIiwgInN0eWxlQ2FjaGVTeW1ib2wiLCAic3R5bGVDYWNoZSIsICJzdHlsZUVsZW1lbnRDYWNoZVN5bWJvbCIsICJzdHlsZUVsZW1lbnRDYWNoZSIsICJIT1NUX0NTU19GQUxMQkFDSyIsICJzeW5jQWRvcHRlZFNoZWV0c1RvU2hhZG93IiwgImJUbyIsICJhZG9wdGVkU2hlZXRzIiwgImxpdmUiLCAicyIsICJhZGRBZG9wdGVkU2hlZXRUb0VsZW1lbnQiLCAiZW5zdXJlU2hhZG93Q3NzRmFsbGJhY2siLCAicmVoeWRyYXRlQWRvcHRlZFN0eWxlU2hlZXRzIiwgInJlc3RvcmUiLCAiaG9zdCIsICJob3N0Q3NzVGV4dCIsICJ2aXNpdCIsICJjaGlsZHJlbiIsICJpIiwgIm91dCIsICJlbnN1cmVIb3N0U3R5bGVzIiwgImxvYWRDYWNoZWRTdHlsZXMiLCAic3R5bGVGbHVzaFBlbmRpbmciLCAic3R5bGVGbHVzaEJhdGNoIiwgInN0eWxlRmx1c2hTY2hlZHVsZWQiLCAic2NoZWR1bGVFbnN1cmVIb3N0U3R5bGVzIiwgImJhdGNoIiwgInJlc29sdmVkU3JjIiwgIndlYWsiLCAiZSIsICJyZXN1bHQiLCAiYWRvcHRlZCIsICJhZGRBZG9wdGVkU2hlZXQiLCAidmFycyIsICJwcm9wcyIsICJiYW5rU3ltYm9sIiwgImJhbmsiLCAiZWxNYXBTeW1ib2wiLCAiZWxNYXAiLCAiYWxpdmVzU3ltYm9sIiwgImFsaXZlcyIsICJ1bnN1YiIsICIkYmVoYXZpb3IiLCAiaXNMaW5rZXJMaWtlIiwgIiRvYnNlcnZlSW5wdXQiLCAicmVmIiwgInByb3AiLCAid2VsIiwgInJmIiwgImN0cmxDYiIsICJfZXYiLCAiaGRsIiwgIiRvYnNlcnZlQXR0cmlidXRlIiwgInd2IiwgImF0dHJOYW1lIiwgIm11dGF0aW9uIiwgInZhbFJlZiIsICJyZVZhbCIsICJyZW1vdmVGcm9tQmFuayIsICJoYW5kbGVyIiwgImFkZFRvQmFuayIsICJmb3JMaW5rIiwgImJpbmRIYW5kbGVyIiwgInNldCIsICJ3aXRoT2JzZXJ2ZXIiLCAibGlua2VyIiwgImNvbnRyb2xsZXIiLCAidW4iLCAiY3VyciIsICJfcCIsICJ2YWx1ZVJlZiIsICJzZXRSZWYiLCAiZWxlbWVudFJlZiIsICJ2IiwgIl92YWwiLCAib2JzIiwgImJpbmRXaXRoIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAicGFyc2VUaW1lIiwgImZhbGxiYWNrIiwgInQiLCAibm9ybWFsaXplSXRlcmF0aW9uQ291bnQiLCAiY2FtZWxUb0tlYmFiJDEiLCAic3RyIiwgImxldHRlciIsICJwYXJzZVByb3BlcnR5TGlzdCIsICJvcHRpb25zIiwgImZyb21TdHJpbmciLCAiJHBhaXIiLCAiYSIsICJwYXJzZUFuaW1hdGlvblRlbXBsYXRlIiwgInN0cmluZ3MiLCAicHJvcGVydGllcyIsICJmdWxsVGV4dCIsICJkZWNsYXJhdGlvbnMiLCAiZGVjbGFyYXRpb24iLCAiY29sb25JbmRleCIsICJwcm9wZXJ0eSIsICJ2YWx1ZVRleHQiLCAic2xvdE1hdGNoIiwgInNsb3RWYWx1ZSIsICJwcm9jZXNzQW5pbWF0aW9uVmFsdWVzIiwgInJlc29sdmVkIiwgInJlYWN0aXZlSW5kaWNlcyIsICJoYXNSZWFjdGl2ZSIsICJpc1JlYWN0aXZlU3R5bGVWYWx1ZSIsICJpc05hdGl2ZUNTU1N0eWxlVmFsdWUiLCAiYnVpbGRXZWJBbmltYXRpb25LZXlmcmFtZXMiLCAiZ2xvYmFsT2Zmc2V0cyIsICJwcm9wZXJ0eUxpc3QiLCAibWF4TGVuZ3RoIiwgInAiLCAib2Zmc2V0cyIsICJfIiwgImZyYW1lcyIsICJmcmFtZSIsICJrZWJhYlByb3AiLCAiYnVpbGRBbmltYXRpb25UaW1pbmciLCAiZHVyYXRpb24iLCAiZGVsYXkiLCAiaXRlcmF0aW9ucyIsICJjcmVhdGVSZWFjdGl2ZUFuaW1hdGlvbiIsICJzdWJzY3JpcHRpb25zIiwgInRpbWluZyIsICJhbmltYXRpb24iLCAiaW5kZXgiLCAicmVhY3RpdmVWYWx1ZSIsICJzdWJzY3JpcHRpb24iLCAibmV3RnJhbWVzIiwgImN1cnJlbnRUaW1lIiwgInN1YiIsICJBIiwgImRvQW5pbWF0aW9uIiwgImNvbmZpZyIsICJrZXlmcmFtZXMiLCAiYW5pbWF0ZSIsICJkZWZpbmVBbmltYXRpb24iLCAic2VxdWVuY2VBbmltYXRpb25zIiwgInNlcXVlbmNlIiwgInBhcmFsbGVsQW5pbWF0aW9ucyIsICJhbmltYXRpb25zIiwgInJlc3VsdHMiLCAiY2xlYW51cCIsICJzdGFnZ2VyQW5pbWF0aW9uIiwgImVsZW1lbnRzIiwgInN0YWdnZXJEZWxheSIsICJBTklNQVRBQkxFX0JSQU5EIiwgIm5vcm1hbGl6ZUl0ZXJhdGlvbnMiLCAibiIsICJhbmltYXRhYmxlSWQiLCAib25TY3JvbGwiLCAibyIsICJvblZpZXciLCAiaXNTY3JvbGxEcml2ZW4iLCAiaXNWaWV3RHJpdmVuIiwgIkFuaW1hdGFibGVWYWx1ZSIsICIjc3RlcHMiLCAiI29wdGlvbnMiLCAiI2N1cnJlbnQiLCAiI3N1YnNjcmliZXJzIiwgIiNhdHRhY2htZW50cyIsICIjcmVzb2x2ZUVsZW1lbnRSZWYiLCAic2VsZiIsICIjZmluZE5lYXJlc3RTY3JvbGxlciIsICIjY3JlYXRlVGltZWxpbmUiLCAidHJpZ2dlciIsICJTY3JvbGxUaW1lbGluZUN0b3IiLCAiVmlld1RpbWVsaW5lQ3RvciIsICIjc3RhcnRUaW1lbGluZURyaXZlbiIsICJhdHRhY2htZW50IiwgInBsYW4iLCAidGltZWxpbmUiLCAiI3N0YXJ0VGltZWxpbmVGYWxsYmFjayIsICIjYnVpbGRUaW1pbmciLCAiI2J1aWxkS2V5ZnJhbWVzIiwgInN0ZXBzIiwgIiNyZXNvbHZlU3RlcCIsICJzY3JvbGxlciIsICJyYWZJZCIsICJjb21wdXRlUHJvZ3Jlc3MiLCAidnAiLCAicmVjdCIsICJ0b3RhbCIsICJtYXgiLCAibGlzdGVuVGFyZ2V0IiwgIm5leHQiLCAiaGludCIsICJzdGVwIiwgImVhc2luZyIsICJyYXciLCAiaW5uZXIiLCAic3RhcnQiLCAiI3RyYWNrUHJvZ3Jlc3MiLCAiI3dpcmVUcmlnZ2VyIiwgImxhc3QiLCAicmV2ZXJzZU9uRXhpdCIsICJwbGF5Rm9yd2FyZCIsICJwbGF5QmFja3dhcmQiLCAiZW50ZXIiLCAibGVhdmUiLCAib25FbnRlciIsICJvbkxlYXZlIiwgImZvcndhcmQiLCAib25DbGljayIsICJlbnRyaWVzIiwgImVudHJ5IiwgImFwcGx5IiwgInVuc3Vic2NyaWJlIiwgIiNlYWNoIiwgImF0IiwgInJhdGUiLCAibGlzdCIsICJhbmltYXRhYmxlIiwgImlzQW5pbWF0YWJsZVZhbHVlIiwgImlzU3R5bGVCaW5kaW5nIiwgInN0eWxlVGVtcGxhdGVJZCIsICJDU1NfRElNRU5TSU9OX1VOSVRTIiwgImlzRWZmZWN0aXZlbHlFbXB0eVN0eWxlVGV4dCIsICJjaHVuayIsICJwcnVuZUVtcHR5U3R5bGVBdHRyaWJ1dGUiLCAiYXBwbHlOb3JtYWxpemVkSW5saW5lU3R5bGUiLCAiaXNTdGF0aWNTdHlsZUludGVycG9sYXRpb24iLCAiZXNjYXBlUmVnRXhwIiwgImNvbnRhaW5zTWFya2VyIiwgIm1hcmtlciIsICJyZWFkQXR0YWNoZWRDU1NVbml0IiwgIm1hdGNoIiwgImF1dGhvcmVkIiwgIm5vcm1hbGl6ZWQiLCAiZ2V0Q1NTVW5pdEZhY3RvcnlOYW1lIiwgImdldENTU1VuaXRDb25zdHJ1Y3Rvck5hbWUiLCAiZ2V0V2luZG93Q29uc3RydWN0b3IiLCAiY3JlYXRlVHlwZWRVbml0VmFsdWUiLCAicmVhZFJlYWN0aXZlTnVtYmVyIiwgInNsb3QiLCAiY3VycmVudCIsICJnZXRSZWFjdGl2ZUluaXRpYWxOdW1iZXIiLCAicmVwbGFjZVR5cGVkTWFya2VycyIsICJzbG90cyIsICJpc0RpcmVjdFNsb3RWYWx1ZSIsICJlc2NhcGVkTWFya2VyIiwgInNlcmlhbGl6ZUFuaW1hdGFibGVDc3NWYWx1ZSIsICJpc0RpcmVjdFNsb3RVbml0UHJvZHVjdCIsICJlc2NhcGVkVW5pdCIsICJzZXRQYXJzZWRUeXBlZFZhbHVlIiwgInN0eWxlTWFwIiwgInRva2VuaXplTnVtZXJpY0NTUyIsICJ2YXJpYWJsZSIsICJOdW1lcmljVHlwZWRPTVBhcnNlciIsICJyZWFjdGl2ZUJ5TWFya2VyIiwgInR5cGVkQnlNYXJrZXIiLCAicmVhY3RpdmUiLCAiY2hlY2twb2ludCIsICJyaHMiLCAibGVhZiIsICJ0eXBlZCIsICJidWlsZE51bWVyaWNUeXBlZE9NVHJlZSIsICJyZWFjdGl2ZVNsb3RzIiwgInR5cGVkU2xvdHMiLCAiaXNUcmFuc2Zvcm1TdHlsZVByb3BlcnR5IiwgImJ1aWxkVHJhbnNmb3JtVHlwZWRPTVRyZWUiLCAibGVhdmVzIiwgImNvbXBvbmVudHMiLCAiemVyb1B4IiwgIm9uZU51bWJlciIsICJjb25zdW1lIiwgImNvbnN1bWVTeW1ib2wiLCAicGFyc2VBcmd1bWVudCIsICJkZXB0aCIsICJzbGljZSIsICJ0cmVlIiwgInBhcnNlQXJndW1lbnRMaXN0IiwgImNyZWF0ZUNvbXBvbmVudCIsICJjdG9yIiwgImNsYXNzTmFtZSIsICJDdG9yIiwgIlRyYW5zbGF0ZSIsICJTY2FsZSIsICJSb3RhdGUiLCAiU2tldyIsICJDU1NUcmFuc2Zvcm1WYWx1ZUN0b3IiLCAiYnVpbGRUeXBlZE9NU3R5bGVWYWx1ZSIsICJhZGRNdXRhYmxlTGVhdmVzIiwgImF0dGFjaExlYWZUYXJnZXRzIiwgImFwcGx5U3R5bGVUZW1wbGF0ZSIsICJ2YXJpYWJsZXMiLCAiYW5pbWF0YWJsZVNsb3RzIiwgInByb2JlIiwgIm11dGFibGVMZWF2ZXMiLCAicmVxdWlyZWRDU1NWYXJpYWJsZXMiLCAicHJvcGVydHlNb2RlT3duZWQiLCAicGFyc2VkVmFsdWUiLCAiaW5pdGlhbE51bWJlciIsICJlbnN1cmVSZWdpc3RlcmVkTnVtYmVyUHJvcGVydHkiLCAicHJpb3JpdHkiLCAidXNlZFR5cGVkU2xvdHMiLCAidXNlZFJlYWN0aXZlU2xvdHMiLCAiY2FuVXNlVHlwZWRPTSIsICJhcHBsaWVkVGhyb3VnaFR5cGVkT00iLCAiZGlyZWN0U2xvdCIsICJsaW5rZWRWYWx1ZSIsICJDU1NNYXRoUHJvZHVjdEN0b3IiLCAicHJvZHVjdCIsICJyZWNvbnN0cnVjdGVkIiwgIm5lZWRzQ1NTVmFyaWFibGUiLCAibmV4dFZhbHVlIiwgImRpcnR5Um9vdHMiLCAicHJvcGVydHlOYW1lIiwgImNvbXBsaWxlU3RhdGljQ1NTVGV4dCIsICJmb3JSZXR1cm4iLCAiUyIsICJ0ZW1wbGF0ZUlkIiwgInBhcnRzIiwgImNvbnN1bWVkIiwgIm5leHRUZXh0IiwgImF0dGFjaGVkVW5pdCIsICJpbml0aWFsVmFsdWUiLCAidHlwZSIsICJzcGxpdElubGluZVN0eWxlUGxhY2Vob2xkZXJzIiwgImF0dHJpYnV0ZXMiLCAicGF0dGVybiIsICJhdHRyaWJ1dGVJbmRleCIsICJqb2luU3RhdGljSW5saW5lU3R5bGUiLCAiY29tcGlsZUlubGluZVN0eWxlQXR0cmlidXRlIiwgImJpbmRTdHlsZSIsICJzdHlsZWQiLCAicmVnaXN0ZXJlZFByb3BlcnRpZXMiXQp9Cg==
