import { $avoidTrigger as Qt, $getValue as Ye, camelToKebab as pe, deref as Ze, getOrInsertComputed as Xt, hasValue as Ve, isVal as Jt, isValueUnit as er, toRef as Ge, tryStringAsNumber as vt } from "/fest/core.js";
import { addToCallChain as tr, affected as rr } from "/fest/object.js";
var g = (e, t) => globalThis[Symbol.for(e)] ??= t(), q = g("dom.ts@blobURLMap", () => /* @__PURE__ */ new WeakMap()), I = g("dom.ts@cacheMap", () => /* @__PURE__ */ new Map()), z = g("dom.ts@cacheContentMap", () => /* @__PURE__ */ new Map()), le = g("dom.ts@cacheBlobContentMap", () => /* @__PURE__ */ new WeakMap()), Qe = g("dom.ts@adoptedSelectorMap", () => /* @__PURE__ */ new Map()), Xe = g("dom.ts@adoptedShadowSelectorMap", () => /* @__PURE__ */ new WeakMap()), Je = g("dom.ts@adoptedLayerMap", () => /* @__PURE__ */ new Map()), ce = g("dom.ts@adoptedShadowLayerMap", () => /* @__PURE__ */ new WeakMap()), A = g("dom.ts@adoptedMap", () => /* @__PURE__ */ new Map()), B = g("dom.ts@adoptedBlobMap", () => /* @__PURE__ */ new WeakMap()), V = g("dom.ts@adoptedAppliedText", () => /* @__PURE__ */ new WeakMap()), gt = g("dom.ts@adoptedFilled", () => /* @__PURE__ */ new WeakSet()), Un = g("dom.ts@layerCounter", () => 0), wt = g("dom.ts@styleTreeHooks", () => /* @__PURE__ */ new Set()), me = g("dom.ts@styleTreeObserved", () => /* @__PURE__ */ new WeakSet()), nr = g("dom.ts@styleTreeRoots", () => /* @__PURE__ */ new Set()), T = g("style-lib@bakedStyle", () => /* @__PURE__ */ new WeakMap()), U = g("style-lib@bakedLive", () => /* @__PURE__ */ new Set()), L = g("style-lib@bakedCache", () => /* @__PURE__ */ new Map()), Ae = g("style-lib@rebakeBatch", () => /* @__PURE__ */ new Set()), K = g("style-lib@bakedFollowers", () => /* @__PURE__ */ new WeakMap()), Le = g("lur.e@adoptedStyleSheetsCache", () => /* @__PURE__ */ new WeakMap()), or = g("lur.e@styleCache", () => /* @__PURE__ */ new Map()), sr = g("lur.e@styleElementCache", () => /* @__PURE__ */ new WeakMap()), Se = g("style-lib@styleFlushPending", () => /* @__PURE__ */ new WeakSet()), et = g("style-lib@registeredProperties", () => /* @__PURE__ */ new Set()), ir = [
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
], ar = new Set(ir), lr = {
  "%": "percent",
  q: "Q",
  hz: "Hz",
  khz: "kHz",
  fr: "flex"
}, bt = /^(%|[a-zA-Z]+)/, xt = [
  "color",
  "background-color",
  "border-color",
  "border-top-color",
  "border-right-color",
  "border-bottom-color",
  "border-left-color",
  "outline-color",
  "accent-color",
  "caret-color",
  "text-decoration-color",
  "column-rule-color",
  "fill",
  "stroke",
  "flood-color",
  "lighting-color",
  "stop-color"
], cr = [
  "font-family",
  "font-size",
  "font-weight",
  "font-style",
  "font-stretch",
  "line-height",
  "letter-spacing",
  "word-spacing"
], ur = [
  "transition-duration",
  "transition-timing-function",
  "animation-duration",
  "animation-timing-function"
], Ct = [
  "data-theme",
  "data-explorer-color-scheme",
  "data-color-scheme",
  "theme",
  "color-scheme"
], fr = [
  ...Ct,
  "style",
  "class"
], In = [
  "tokens",
  "colors",
  "typography",
  "motion"
], dr = [
  "tokens",
  "base",
  "layout",
  "components",
  "utilities",
  "theme",
  "overrides",
  "print"
], pr = ["ux-preload", "ux-layer"], hr = [
  "rs-md-base",
  "rs-md-system",
  "rs-md-modules",
  "rs-md-user",
  "rs-md-print",
  "rs-md-user-print"
], Bn = hr, yr = /^[a-zA-Z0-9_.-]+$/, mr = /^@layer\s+([a-zA-Z0-9_.-]+)\s*\{/, _n = "DOM", tt = "data-glit-host-css", Et = "ux-baked", Sr = ["colors", "tokens"], Fe = 3e4, se = "screen", vr = [
  "ui-window-frame",
  "ui-modal",
  "app-box",
  ".ui-modal-dialog",
  ".ui-modal-panel"
], kt = [
  ".row.c2-surface",
  ".row.c2-surface[data-kind=directory]",
  ".row.c2-surface[data-kind=file]",
  ".row.c2-surface .c.name",
  ".fm-grid-header"
], Mt = [
  ".field",
  ".form-input",
  ".form-select",
  ".field-control"
], gr = [...kt, ...Mt], Rt = /* @__PURE__ */ Symbol.for("fest.animatable"), he = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", wr = (e) => lr[e.toLowerCase()] ?? e.toLowerCase(), br = (e) => e.toLowerCase() === "%" ? "percent" : e.toLowerCase(), Vn = (e) => yr.test(e), xr = (e) => `@layer ${e} {}`, Cr = (e) => {
  let t = String(e || "").trim();
  t = t.replace(/^(@charset\s+[^;]+;\s*)+/i, "");
  for (let r = 0; r < 8; r++) {
    const n = t.replace(/^\/\*[\s\S]*?\*\/\s*/, "");
    if (n === t) break;
    t = n.trim();
  }
  return t;
}, rt = (e) => typeof CSSLayerBlockRule < "u" && e instanceof CSSLayerBlockRule, D = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", nt = (e) => typeof e == "string" && /@import\b/i.test(e), Tt = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), Y = (e) => typeof ShadowRoot < "u" && e instanceof ShadowRoot, ot = (e) => typeof Document < "u" && e instanceof Document, Er = (e) => typeof Element < "u" && e instanceof Element, st = (e) => typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : Array.from(e).map((t) => `\\${t.codePointAt(0).toString(16)} `).join(""), kr = 0, Mr = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `ux-${Date.now().toString(36)}-${(++kr).toString(36)}`, Rr = (e) => {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" && URL.canParse(e);
  } catch {
    return !1;
  }
}, Fn = async (e) => {
  const t = await crypto?.subtle?.digest("SHA-256", typeof e == "string" ? new TextEncoder().encode(e) : e instanceof ArrayBuffer ? e : await e?.arrayBuffer?.());
  return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
}, it = (e, t) => e.endsWith("%") ? parseFloat(e) / 100 * t() : parseFloat(e), Tr = (e, t) => {
  const r = e.split(" ");
  return new DOMPoint(it(r[0], () => t.clientWidth), it(r[1], () => t.clientHeight));
}, J = (e, t = 0) => {
  if (typeof e == "number") return e;
  if (!e) return t;
  const r = String(e).trim();
  return r.endsWith("ms") ? parseFloat(r) : r.endsWith("s") ? parseFloat(r) * 1e3 : parseFloat(r) || t;
}, Ar = (e) => e === void 0 ? 1 : e === -1 || e === 1 / 0 ? 1 / 0 : Math.max(1, Math.floor(e)), Lr = (e) => e === -1 || e === 1 / 0 ? 1 / 0 : Math.max(1, e ?? 1), ve = (e) => e != null && typeof e == "object" && e.kind === "scroll", at = (e) => e != null && typeof e == "object" && e.kind === "view", ee = (e) => !e || e.nodeType !== 1 ? !1 : !!(String(e.localName || "").includes("-") || e.shadowRoot || e.styles != null), At = (e) => {
  try {
    return e.cssRules.length;
  } catch {
    return null;
  }
}, Nn = (e) => {
  if (!e) return !0;
  const t = At(e);
  return t === null ? !1 : t === 0;
}, Pr = (e) => e === "--base-color" || e.startsWith("--color-") || e.endsWith("-color") || e.endsWith("-fg") || e.endsWith("-bg"), Or = (e) => {
  if (!e.isConnected) return !1;
  if (typeof e.getClientRects != "function") return !0;
  try {
    return e.getClientRects().length > 0;
  } catch {
    return !0;
  }
}, $r = (e) => Array.isArray(e) && typeof e[0] == "function", Lt = (e) => {
  const t = typeof e == "string" ? e.trim() : "";
  if (!t) return !0;
  for (const r of t.split(";")) {
    const n = r.trim();
    if (!n) continue;
    const o = n.indexOf(":");
    if (o < 0 || n.slice(o + 1).trim().length > 0) return !1;
  }
  return !0;
}, Ur = (e) => {
  if (e == null) return;
  const t = e.getAttribute("style");
  t != null && Lt(t) && (e.style.cssText = "", e.removeAttribute("style"));
}, Ir = (e, t) => {
  if (Lt(t)) {
    e.style.cssText = "", e.removeAttribute("style");
    return;
  }
  e.style.cssText = t;
}, P = (e) => {
  if (e == null || typeof e != "object") return !1;
  try {
    const t = globalThis.CSSStyleValue;
    if (typeof t == "function" && e instanceof t) return !0;
    for (let r = e; r; r = Object.getPrototypeOf(r)) if (r?.constructor?.name === "CSSStyleValue") return !0;
  } catch {
  }
  return !1;
}, ie = (e) => {
  if (e == null || typeof e != "object" || P(e)) return !1;
  try {
    return "value" in e;
  } catch {
    return !1;
  }
}, lt = (e) => e == null || typeof e != "object" && typeof e != "function", te = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ct = (e, t) => new RegExp(`var\\(\\s*${te(t)}\\s*\\)`).test(e), Br = (e) => {
  const t = bt.exec(e);
  if (!t) return null;
  const r = t[0], n = r.toLowerCase();
  return ar.has(n) ? {
    authored: r,
    normalized: n,
    length: r.length
  } : null;
}, F = (e, t) => e?.[t] ?? globalThis?.[t], M = (e, t, r) => {
  const n = e?.CSS, o = wr(t), i = n?.[o];
  if (typeof i == "function") return i.call(n, r);
  const s = F(e, "CSSUnitValue");
  if (typeof s != "function") throw new TypeError(`Typed OM does not support CSS unit "${t}"`);
  return new s(r, br(t));
}, Dn = (e) => he && e instanceof CSSStyleValue, ue = (e) => he && e instanceof CSSUnitValue, de = (e, t) => {
  if (!e || !t) return null;
  const n = ((o) => {
    try {
      const i = o.querySelector?.(t);
      return i instanceof HTMLElement ? i : null;
    } catch {
      return null;
    }
  })(e);
  if (n) return n;
  if (e instanceof Element && e.shadowRoot) {
    const o = de(e.shadowRoot, t);
    if (o) return o;
  }
  if (typeof e.querySelectorAll != "function") return null;
  for (const o of e.querySelectorAll("*")) {
    if (!o.shadowRoot) continue;
    const i = de(o.shadowRoot, t);
    if (i) return i;
  }
  return null;
}, Ne = (...e) => {
  const t = /* @__PURE__ */ new Set(), r = [];
  for (const n of e) {
    if (n == null) continue;
    const o = typeof n == "string" ? [n] : n;
    for (const i of o) {
      const s = String(i || "").trim();
      !s || t.has(s) || (t.add(s), r.push(s));
    }
  }
  return r.length ? `@layer ${r.join(", ")};` : "";
}, qn = () => Ne(dr), zn = (e) => Ne(pr, e), De = (e, t) => {
  const r = (t || "").trim();
  return !e || !r ? "" : `@layer ${e} {
${r}
}`;
}, ge = (e, t) => t ? `@layer ${t} { ${e} }` : e, Wn = (e, t) => {
  const r = (t || "").trim();
  return r ? /^@layer\b/.test(r) ? r : De(e, r) : "";
}, _r = (e, t) => {
  const r = e.match(mr);
  if (!r || t && r[1] !== t) return null;
  const n = r[0].lastIndexOf("{");
  let o = 0;
  for (let i = n; i < e.length; i++) {
    const s = e[i];
    if (s === "{") o++;
    else if (s === "}" && (o--, o === 0))
      return e.slice(i + 1).trim() ? null : e.slice(n + 1, i).trim();
  }
  return null;
}, Hn = (e, t) => {
  const r = Cr(e);
  return _r(r, t) ?? r;
}, Vr = (e, t = "") => `@import url("${e}") ${t && typeof t == "string" ? `layer(${t})` : ""};`, jn = De("ux-preload", ":host { box-sizing: border-box; }"), Pt = (e, t) => {
  if (!e || !t) return;
  const r = Array.from(e.cssRules || []), n = r.find((o) => rt(o) && o.name === t);
  if (n) return n;
  try {
    const o = e.insertRule(xr(t), r.length), i = e.cssRules?.[o];
    return rt(i) ? i : void 0;
  } catch {
    return;
  }
}, Fr = (e) => {
  const t = [];
  let r = 0;
  for (; r < e.length; ) {
    const n = e.slice(r), o = /^\s+/.exec(n);
    if (o) {
      r += o[0].length;
      continue;
    }
    const i = /^(?:\d*\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/.exec(n);
    if (i) {
      r += i[0].length;
      const l = bt.exec(e.slice(r)), c = l?.[0] ?? null;
      l && (r += l[0].length), t.push({
        kind: "number",
        value: Number(i[0]),
        unit: c == null ? null : c.toLowerCase()
      });
      continue;
    }
    const s = /^[a-zA-Z_][a-zA-Z0-9_-]*/.exec(n);
    if (s) {
      t.push({
        kind: "identifier",
        value: s[0].toLowerCase()
      }), r += s[0].length;
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
}, Nr = class {
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
    const r = F(this.win, e);
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
    if (e.kind === "number") return M(this.win, e.unit ?? "number", e.value);
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
}, Dr = (e, t) => {
  try {
    const r = Fr(e);
    return new Nr(r, t).parse();
  } catch {
    return null;
  }
}, $ = (e, t, r, n = "") => {
  if (!(!e || !t)) {
    if (r == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== r && e.setProperty(t, r, n);
  }
}, qr = (e, t, r, n = "") => {
  if (!e || !t) return e;
  const o = pe(t), i = e.style, s = e.attributeStyleMap ?? e.styleMap;
  if (!he || !s) return Ot(e, t, r, n);
  const a = e.ownerDocument?.defaultView ?? globalThis;
  let l = Ve(r) && ie(r) ? r.value : r;
  if (l == null)
    return s.delete?.(o), i && $(i, o, null, n), e;
  if (P(l)) {
    const c = s.get(o);
    if (ue(l) && ue(c)) {
      if (c.value === l.value && c.unit === l.unit) return e;
    } else if (c === l) return e;
    return s.set(o, l), e;
  }
  if (typeof l == "number")
    if (CSS?.number && !o.startsWith("--")) {
      const c = CSS.number(l), u = s.get(o);
      return ue(u) && u.value === c.value && u.unit === c.unit || s.set(o, c), e;
    } else
      return $(i, o, String(l), n), e;
  if (typeof l == "string") {
    if (/\b(calc|min|max|clamp)\s*\(/.test(l)) {
      const u = Dr(l, a);
      if (u) try {
        return s.set(o, u), e;
      } catch {
      }
    }
    const c = vt(l);
    if (typeof c == "number" && CSS?.number && !o.startsWith("--")) {
      const u = CSS.number(c), d = s.get(o);
      return ue(d) && d.value === u.value && d.unit === u.unit || s.set(o, u), e;
    }
    return $(i, o, l, n), e;
  }
  return $(i, o, String(l), n), e;
}, Ot = (e, t, r, n = "") => {
  if (!e || !t) return e;
  const o = pe(t), i = e.style;
  if (!i) return e;
  let s = Ve(r) && ie(r) ? r.value : r;
  return typeof s == "string" && !P(s) && (s = vt(s) ?? s), s == null ? ($(i, o, null, n), e) : (P(s) || typeof s == "number", $(i, o, String(s), n), e);
}, ye = (e, t, r, n = "") => he ? qr(e, t, r, n) : Ot(e, t, r, n), ut = (e, t, r) => {
  const n = e?.style;
  return !t || typeof t != "string" || !e || !n || Qt(r, () => {
    Jt(r) || Ve(r) || er(r) ? ye(e, t, r) : r == null && e.style.removeProperty(pe(t));
  }), e;
}, Kn = (e, t, r) => ye(ze(e), t, r), zr = (e, t) => {
  const r = ze(e);
  return Object.entries(t).forEach(([n, o]) => ye(r, n, o)), r;
}, $t = (e, t, r = "", n) => {
  const o = Xr(e), i = typeof e == "string" && URL.canParse(e) ? e : o;
  return t?.[0] && (t[0].fetchPriority = "high"), t && i && typeof i == "string" && ft(t, i, r), t?.[0] && (!URL.canParse(e) || n) && t?.[0] instanceof HTMLLinkElement, Tt(o, (s) => {
    t?.[0] && s && (ft(t, s, r), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((s) => {
    console.warn("Failed to load style sheet:", s);
  });
}, Wr = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = "DOM", $t(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, O = (e, t = typeof document < "u" ? document?.head : null, r = "") => {
  const n = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && n instanceof HTMLHeadElement) return Wr(e);
  const o = typeof document < "u" ? document.createElement("style") : null;
  return o ? (o.dataset.owner = "DOM", $t(e, [o, "innerHTML"], r), n?.prepend?.(o), o) : null;
}, Yn = (e, t, r, n = "") => ye(e, t, r, n), Zn = (e) => Ut(e, ""), Pe = (e, t) => {
  V.set(e, t), gt.add(e);
}, _ = (e) => {
  if (!e) return null;
  const t = V.get(e);
  if (t) return t;
  for (const [r, n] of A) if (n === e && typeof r == "string") return r;
  return null;
}, re = (e, t) => {
  if (!e) return !1;
  const r = t || _(e), n = At(e);
  return n === null ? !1 : n > 0 ? (gt.add(e), r && !V.has(e) && V.set(e, r), !0) : r && Oe(e, r) ? (Pe(e, r), !0) : !1;
}, Oe = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (r) {
    const n = String(r?.message || "").toLowerCase();
    return n.includes("@import rules are not allowed") || n.includes("@import") && n.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", r), !1;
  }
}, Hr = (e) => {
  let t = B.get(e);
  return t || (t = new CSSStyleSheet(), B.set(e, t)), t;
}, Ut = (e, t = null) => {
  try {
    return jr(e, t);
  } catch (r) {
    return console.warn("[DOM] loadAsAdopted failed", r), typeof e == "string" && O(e, void 0, t || ""), null;
  }
}, jr = (e, t = null) => {
  if (!D())
    return typeof e == "string" && O(e, void 0, t || ""), null;
  if (typeof e == "string" && nt(e))
    return O(e, void 0, t || ""), null;
  if (typeof e == "string" && A?.has?.(e)) {
    const n = A.get(e), o = V.get(n) || ge(e, t);
    return re(n, o), typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), n;
  }
  if ((e instanceof Blob || e instanceof File) && B?.has?.(e)) {
    const n = B.get(e);
    return re(n), typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), n;
  }
  if (!e) return null;
  const r = typeof e == "string" ? Xt(A, e, () => new CSSStyleSheet()) : Hr(e);
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r), typeof e == "string" && !Rr(e)) {
    const n = ge(e, t);
    return A.set(e, r), Oe(r, n) ? Pe(r, n) : (we(r), A.delete(e), O(e)), r;
  } else Tt(Jr(e), (n) => {
    if (A.set(n, r), n) {
      if (nt(n))
        return we(r), A.delete(n), B.delete(e), O(n, void 0, t || ""), r;
      const o = ge(n, t);
      return Oe(r, o) ? Pe(r, o) : (we(r), A.delete(n), B.delete(e), O(n, void 0, t || "")), r;
    }
  });
  return r;
}, It = (e, t) => {
  if (!(!e || e.nodeType === 3)) {
    if (e.nodeType === 11) {
      for (const r of e.childNodes || []) It(r, t);
      return;
    }
    if (ee(e) && t.add(e), typeof e.querySelectorAll == "function")
      try {
        for (const r of e.querySelectorAll("*")) ee(r) && t.add(r);
      } catch {
      }
  }
}, Kr = (e, t = "tree") => {
  for (const r of e)
    if (ee(r))
      for (const n of wt) n(r, t);
}, Bt = (e) => {
  typeof e == "function" && wt.add(e);
}, Gn = (e) => {
  if (!e || typeof MutationObserver > "u" || me.has(e)) return e;
  me.add(e), nr.add(e);
  const t = new MutationObserver((r) => {
    const n = /* @__PURE__ */ new Set();
    for (const o of r) if (o.type === "childList") {
      for (const s of o.addedNodes) It(s, n);
      const i = o.target?.getRootNode?.();
      if (i instanceof ShadowRoot && ee(i.host)) {
        const s = i.adoptedStyleSheets;
        (!s || s.length === 0) && n.add(i.host);
      }
    } else o.type === "attributes" && o.target && ee(o.target) && n.add(o.target);
    Kr(n, "mutation");
  });
  try {
    t.observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: [...Ct]
    });
  } catch {
    return me.delete(e), e;
  }
  return e;
}, Qn = () => {
  if (typeof document > "u") return;
  const e = typeof URL < "u" && typeof URL.canParse == "function";
  for (const [t, r] of A) {
    if (!r || typeof t != "string" || e && URL.canParse(t)) continue;
    const n = V.get(r) || t;
    re(r, n), document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(r) && document.adoptedStyleSheets.push(r);
  }
}, we = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? A.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const r = document.adoptedStyleSheets, n = r.indexOf(t);
  return n !== -1 ? (r.splice(n, 1), !0) : !1;
}, Xn = (e) => {
  if (e?.computedStyleMap) {
    const t = e.computedStyleMap().get("transform")?.toMatrix?.();
    if (t) return t;
  } else if (e) {
    const t = getComputedStyle(e);
    return new DOMMatrix(t?.getPropertyValue?.("transform"));
  }
  return new DOMMatrix();
}, Jn = (e) => {
  const t = getComputedStyle(e)?.getPropertyValue?.("transform-origin") || "50% 50%";
  return Tr(t, e);
}, H = (e, t) => {
  if ("computedStyleMap" in e) {
    const r = e?.computedStyleMap?.()?.get(t);
    return r instanceof CSSUnitValue ? r?.value || 0 : r?.toString?.();
  }
  if (e instanceof HTMLElement) {
    const r = getComputedStyle?.(e, "");
    return parseFloat(r?.getPropertyValue?.(t)?.replace?.("px", "")) || 0;
  }
  return parseFloat((e?.style ?? e).getPropertyValue?.(t)?.replace?.("px", "")) || 0;
}, eo = (e) => {
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
}, to = (e, t) => H?.(e, t), ro = (e, t) => t == "inline" ? H(e, "padding-inline-start") + H(e, "padding-inline-end") : H(e, "padding-block-start") + H(e, "padding-block-end"), Z = typeof document < "u" ? document.createElement("style") : null;
Z && (document.querySelector("head")?.appendChild?.(Z), Z.dataset.owner = "DOM");
var ft = (e, t, r = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? Vr(t, r) : t;
}, no = (e) => e?.map?.((t) => zr(...t)), Yr = (e, t) => (t ||= Z?.sheet, Pt(t, e)), qe = (e) => {
  if (e.id) return `#${st(e.id)}`;
  let t = e.getAttribute("data-style-id");
  return t || (t = Mr(), e.setAttribute("data-style-id", t)), `[data-style-id="${st(t)}"]`;
}, Zr = (e, t) => (t = t.trim(), e ? t ? t.startsWith("::") ? `${e}${t}` : `${e} ${t}` : e : t), Gr = (e, t, r, n) => {
  const o = Array.from(e?.cssRules || []), i = t.trim(), s = n.trim();
  return o.findIndex((a) => {
    if (!(a instanceof CSSStyleRule)) return !1;
    const l = a.selectorText?.trim?.() ?? "";
    return l === i ? !0 : s && l.endsWith(s) ? l.slice(0, l.length - s.length).trim() === r : !1;
  });
}, ze = (e, t, r = "ux-query", n = null) => {
  const o = Y(n) || ot(n) ? n : n?.getRootNode?.() ?? (typeof document < "u" ? document : null), i = Er(n) ? n : null;
  let s = "";
  i ? s = qe(i) : Y(o) ? s = ":host" : ot(o) && (s = ":root");
  let a = null;
  if (Y(o) ? (a = o.querySelector("style[data-ux-query]"), !a && typeof document < "u" && (a = document.createElement("style"), a.setAttribute("data-ux-query", ""), o.appendChild(a))) : a = Qr(), t ||= a?.sheet, !t) return;
  if (r) return ze(e, Yr(r, t), null, n);
  const l = Zr(s, e);
  let c = Gr(t, l, s, e);
  return c === -1 && (c = t.insertRule(`${l} {}`)), t.cssRules?.[c];
};
function Qr() {
  return Z ?? null;
}
var Xr = (e) => {
  if (!e) return null;
  if (I.has(e)) return I.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (q.has(e)) return q.get(e);
    const t = URL.createObjectURL(e);
    return q.set(e, t), I.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (r) => {
      const n = await r.blob(), o = URL.createObjectURL(n);
      return q.set(n, o), I.set(e, o), I.set(o, o), o;
    });
    return I.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), r = URL.createObjectURL(t);
    return q.set(t, r), I.set(r, r), r;
  }
  return e;
}, Jr = (e) => {
  if (!e) return "";
  if (z.has(e)) return z.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (le.has(e)) return le.get(e) ?? "";
    const t = e?.text?.()?.then?.((r) => (le.set(e, r), r));
    return le.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (r) => {
      const n = await r.text();
      return z.set(e, n), n;
    });
    return z.set(e, t), t;
  }
  return typeof e == "string" && z.set(e, e), e;
}, oo = (e, t = "ux-query", r = null) => {
  if (!e || !D()) return null;
  const n = Y(r) ? r : r?.getRootNode ? r.getRootNode({ composed: !0 }) : null, o = Y(n), i = o ? n.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
  if (!i) return null;
  const s = `${t || ""}:${e}`;
  let a;
  if (o) {
    let u = Xe.get(n);
    u || (u = /* @__PURE__ */ new Map(), Xe.set(n, u)), a = u.get(s), a || (a = new CSSStyleSheet(), u.set(s, a), i.includes(a) || i.push(a));
  } else
    a = Qe.get(s), a || (a = new CSSStyleSheet(), Qe.set(s, a), i.includes(a) || i.push(a));
  if (t) {
    let u;
    if (o) {
      let d = ce.get(n);
      d || (d = /* @__PURE__ */ new Map(), ce.set(n, d)), u = d.get(t);
    } else u = Je.get(t);
    if (!u && (u = Pt(a, t), u))
      if (o) {
        let d = ce.get(n);
        d || (d = /* @__PURE__ */ new Map(), ce.set(n, d)), d.set(t, u);
      } else Je.set(t, u);
    if (u) {
      let d = Array.from(u.cssRules || []).findIndex((y) => y instanceof CSSStyleRule && y.selectorText?.trim?.() === e?.trim?.());
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
  const c = a.cssRules[l];
  return c instanceof CSSStyleRule ? c : null;
}, dt = !1, G = "", $e = !1, en = (e) => {
  const t = [...e?.length ? e : Sr];
  return [...new Set(t.filter(Boolean))];
}, pt = (e, t, r = se) => `${e}\0${[...t].sort().join(",")}\0${r === !1 ? "" : r}`, ne = (e = typeof document < "u" ? document.documentElement : null, t) => {
  if (!e || typeof getComputedStyle != "function") return "";
  const r = getComputedStyle(e), n = [
    e.getAttribute?.("data-theme") || e.getAttribute?.("theme") || "",
    e.getAttribute?.("data-color-scheme") || e.getAttribute?.("color-scheme") || r.colorScheme || "",
    r.getPropertyValue("--base-color").trim(),
    r.getPropertyValue("--color-primary").trim()
  ];
  if (t && t !== e) {
    const o = getComputedStyle(t);
    n.push(t.getAttribute?.("data-theme") || "", o.getPropertyValue("--base-color").trim());
  }
  return n.join("|");
}, fe = (e, t, r) => {
  const n = t.getPropertyValue(r)?.trim();
  n && e.set(r, n);
}, tn = new Set(xt), ht = (e) => e.startsWith("--") ? 2 : tn.has(e) ? 0 : 1, rn = (e, t) => {
  const r = /* @__PURE__ */ new Map(), n = new Set(t);
  if (n.has("colors")) for (const o of xt) fe(r, e, o);
  if (n.has("typography")) for (const o of cr) fe(r, e, o);
  if (n.has("motion")) for (const o of ur) fe(r, e, o);
  if (n.has("tokens") || n.has("colors")) for (let o = 0; o < e.length; o++) {
    const i = e.item(o);
    i.startsWith("--") && (n.has("tokens") || Pr(i)) && fe(r, e, i);
  }
  return r;
}, nn = (e, t, r = Et, n = se) => {
  const o = [], i = [...t].sort((l, c) => ht(l[0]) - ht(c[0]));
  for (const [l, c] of i) {
    if (!l || !c) continue;
    const u = c.replace(/\s*!important\s*$/i, "").trim();
    u && o.push(`${l}: ${u} !important;`);
  }
  if (!o.length) return "";
  const s = `${e} {
${o.join(`
`)}
}`, a = n ? `@media ${n} {
${s}
}` : s;
  return [Ne(r), De(r, a)].filter(Boolean).join("");
}, _t = (e) => {
  if (!e || e.nodeType !== 1) return [];
  const t = /* @__PURE__ */ new Set([e]), r = e.closest?.(vr.join(", "));
  return r instanceof HTMLElement && t.add(r), [...t];
}, Vt = (e) => e ? e.classList?.contains("view-settings") || e.closest?.(".view-settings") ? Mt : e.classList?.contains("view-explorer") || e.closest?.(".view-explorer") || e.querySelector?.("ui-file-manager") ? kt : [] : [], on = (e, t = gr, r = !0) => {
  if (!e || !t.length) return [];
  const n = qe(e), o = r ? de : (s, a) => {
    try {
      const l = s.querySelector(a);
      return l instanceof HTMLElement ? l : null;
    } catch {
      return null;
    }
  }, i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = String(s || "").trim();
    if (!a) continue;
    const l = o(e, a);
    if (!l || l === e) continue;
    const c = l.getRootNode() === e.getRootNode() ? `${n} ${a}` : a, u = i.get(l);
    u ? u.includes(c) || u.push(c) : i.set(l, [c]);
  }
  return [...i].map(([s, a]) => ({
    el: s,
    selector: a.join(", ")
  }));
}, Ft = (e) => {
  const t = e.getRootNode?.();
  return typeof ShadowRoot < "u" && t instanceof ShadowRoot ? t.adoptedStyleSheets ?? null : typeof document < "u" ? document.adoptedStyleSheets ?? null : null;
}, Nt = (e, t) => {
  const r = e.getRootNode?.();
  try {
    if (typeof ShadowRoot < "u" && r instanceof ShadowRoot) {
      r.adoptedStyleSheets = t;
      return;
    }
    typeof document < "u" && (document.adoptedStyleSheets = t);
  } catch {
  }
}, Dt = (e, t) => {
  if (t.sheet && D()) {
    const r = Ft(e);
    if (!r) return;
    if (r.includes(t.sheet)) {
      t.adopted = !0;
      return;
    }
    try {
      r.push(t.sheet), t.adopted = !0;
      return;
    } catch {
      Nt(e, [...r, t.sheet]), t.adopted = !0;
      return;
    }
  }
  t.styleEl && typeof document < "u" && (t.styleEl.isConnected || document.head?.append(t.styleEl), t.adopted = !0);
}, N = (e, t) => {
  if (t.sheet && D()) {
    const r = Ft(e);
    if (r) {
      const n = r.indexOf(t.sheet);
      if (n !== -1) try {
        r.splice(n, 1);
      } catch {
        Nt(e, r.filter((o) => o !== t.sheet));
      }
    }
  }
  t.styleEl?.remove(), t.adopted = !1;
}, qt = (e, t) => {
  if (e.cssText = t, !t) return !1;
  if (e.sheet && D()) try {
    return e.sheet.replaceSync(t), !0;
  } catch (r) {
    return console.warn("[style-lib] bake replaceSync failed", r), !1;
  }
  return e.styleEl ? (e.styleEl.textContent = t, !0) : !1;
}, We = (e, t) => {
  const r = L.get(e.cacheKey);
  r?.timer && clearTimeout(r.timer);
  const n = {
    cssText: e.cssText,
    fingerprint: e.fingerprint,
    categories: e.categories,
    selector: e.selector,
    expires: Date.now() + t
  };
  t > 0 && typeof setTimeout == "function" && (n.timer = setTimeout(() => {
    L.get(e.cacheKey) === n && L.delete(e.cacheKey);
  }, t)), L.set(e.cacheKey, n);
}, zt = (e) => {
  const t = L.get(e);
  t?.timer && clearTimeout(t.timer), L.delete(e);
}, sn = () => {
  for (const e of L.values()) e.timer && clearTimeout(e.timer);
  L.clear();
}, an = (e, t = Fe) => {
  const r = T.get(e);
  r && (r.adopted && N(e, r), U.delete(e), r.cssText && We(r, t));
}, ln = (e, t = Fe) => {
  const r = T.get(e);
  if (!r || !e.isConnected) return;
  const n = ne(void 0, e), o = L.get(r.cacheKey);
  if (!r.cssText && o && o.fingerprint === n && (qt(r, o.cssText), r.fingerprint = o.fingerprint), !r.cssText || r.fingerprint !== n) {
    oe(e, {
      categories: r.categories,
      cacheMs: t,
      layer: Et
    });
    return;
  }
  Dt(e, r), U.add(e);
}, j = null, cn = () => (j || typeof IntersectionObserver > "u" || (j = new IntersectionObserver((e) => {
  for (const t of e) {
    const r = t.target;
    T.has(r) && (t.isIntersecting && r.isConnected ? ln(r) : an(r));
  }
}, { threshold: 0 })), j), un = (e, t, r, n = se) => {
  let o = T.get(e);
  if (o)
    return o.selector = t, o.categories = r, o.media = n, o.cacheKey = pt(t, r, n), o;
  const i = D();
  return o = {
    sheet: i ? new CSSStyleSheet() : null,
    styleEl: i || typeof document > "u" ? null : document.createElement("style"),
    selector: t,
    categories: r,
    cssText: "",
    fingerprint: "",
    adopted: !1,
    cacheKey: pt(t, r, n),
    media: n
  }, o.styleEl && (o.styleEl.dataset.uxBaked = "", o.styleEl.dataset.owner = "style-lib"), T.set(e, o), cn()?.observe(e), o;
}, fn = () => {
  $e = !1;
  const e = [...Ae];
  Ae.clear();
  for (const t of e) {
    if (!t.isConnected || !T.has(t)) continue;
    const r = T.get(t);
    oe(t, r ? {
      categories: r.categories,
      selector: r.selector,
      media: r.media
    } : {});
  }
}, Wt = (e) => {
  Ae.add(e), !$e && ($e = !0, queueMicrotask(fn));
}, be = (e = "theme") => {
  const t = ne();
  if (!(e !== "force" && t === G && G)) {
    G = t, sn();
    for (const r of [...U]) {
      const n = T.get(r);
      if (!n) {
        U.delete(r);
        continue;
      }
      N(r, n), n.cssText = "", n.fingerprint = "", Wt(r);
    }
  }
}, dn = () => {
  if (!(dt || typeof document > "u")) {
    dt = !0, G = ne(), Bt((e) => {
      if (ne() !== G) {
        be("style-tree");
        return;
      }
      e instanceof HTMLElement && T.has(e) && Wt(e);
    });
    try {
      new MutationObserver(() => be("theme-attr")).observe(document.documentElement, {
        attributes: !0,
        attributeFilter: [...fr]
      });
    } catch {
    }
    try {
      matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener?.("change", () => be("color-scheme"));
    } catch {
    }
  }
}, oe = (e, t = {}) => {
  if (!e || e.nodeType !== 1 || typeof getComputedStyle != "function") return null;
  dn();
  const r = en(t.categories), n = t.layer || "ux-baked", o = t.cacheMs ?? 3e4, i = t.media === void 0 ? se : t.media, s = t.selector?.trim() || qe(e), a = ne(void 0, e), l = un(e, s, r, i);
  l.fingerprint = a;
  const c = L.get(l.cacheKey);
  let u = "";
  if (c && c.fingerprint === a && c.cssText) u = c.cssText;
  else {
    const d = getComputedStyle(e);
    u = nn(s, rn(d, r), n, i);
  }
  return u ? (qt(l, u), We(l, o), Or(e) ? (Dt(e, l), U.add(e)) : (N(e, l), U.delete(e)), l) : (N(e, l), U.delete(e), l);
}, Ue = (e, t = !0) => {
  if (!e) return;
  const r = T.get(e);
  r && (N(e, r), U.delete(e), j?.unobserve(e), t && r.cssText ? We(r, Fe) : zt(r.cacheKey), T.delete(e));
}, so = (e, t) => {
  if (!e) return null;
  const r = T.get(e);
  return r && (N(e, r), r.cssText = "", zt(r.cacheKey)), oe(e, t ?? (r ? {
    categories: r.categories,
    selector: r.selector,
    media: r.media
  } : {}));
}, io = (e) => e ? T.get(e) : void 0, pn = (e, t = {}) => {
  const r = {
    media: se,
    pierceShadow: t.pierceShadow !== !1,
    ...t
  }, n = _t(e), o = on(e, r.also ?? Vt(e), r.pierceShadow !== !1), i = [], s = /* @__PURE__ */ new Set();
  for (const a of n) {
    const l = oe(a, r);
    l && i.push(l);
  }
  for (const { el: a, selector: l } of o) {
    if (n.includes(a)) continue;
    const c = oe(a, {
      ...r,
      selector: l
    });
    c && i.push(c), s.add(a);
  }
  if (e) {
    const a = K.get(e);
    if (a)
      for (const l of a) !s.has(l) && !n.includes(l) && Ue(l, !0);
    s.size ? K.set(e, s) : K.delete(e);
  }
  return i;
}, ao = (e, t = !0) => {
  if (!e) return;
  const r = K.get(e);
  K.delete(e);
  for (const n of _t(e)) Ue(n, t);
  if (r) for (const n of r) Ue(n, t);
}, lo = (e, t) => {
  const r = (n = !0) => {
    if (pn(e, t), !n || !e) return;
    const o = t?.also ?? Vt(e), i = t?.pierceShadow !== !1;
    o.length && o.some((s) => !(i ? de(e, s) : e.querySelector(s))) && typeof requestAnimationFrame == "function" && requestAnimationFrame(() => r(!1));
  };
  if (!e || typeof requestAnimationFrame != "function") {
    r(!1);
    return;
  }
  requestAnimationFrame(() => r(!0));
}, He = (e) => {
  const t = e?.shadowRoot;
  if (!t) return;
  const r = Le.get(e) || [];
  for (const n of r) re(n);
  try {
    const n = t.adoptedStyleSheets || [];
    t.adoptedStyleSheets = [...r.filter((o) => !n.includes(o)), .../* @__PURE__ */ new Set([...n])];
  } catch {
  }
}, xe = (e, t) => {
  let r = Le.get(e);
  r || Le.set(e, r = []), t && r.indexOf(t) < 0 && r.push(t), re(t), He(e);
}, Q = (e, t) => {
  const r = e?.shadowRoot;
  if (!r || !t) return null;
  let n = r.querySelector?.(`style[${tt}]`);
  return n ? n.textContent !== t && (n.textContent = t) : (n = O(t, r, ""), n && n.setAttribute(tt, "")), n;
}, co = (e = typeof document < "u" ? document : null) => {
  if (!e) return;
  const t = (n) => {
    n?.shadowRoot && (Q(n, Ht(n)), He(n));
  };
  e.nodeType === 1 && t(e);
  const r = (n) => {
    let o = [];
    try {
      o = n.querySelectorAll("*");
    } catch {
      return;
    }
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      s.shadowRoot && (t(s), r(s.shadowRoot));
    }
  };
  r(e);
}, Ht = (e) => {
  const t = e?.styles;
  if (typeof t == "string") return t;
  if (typeof t == "function") try {
    const r = t.call(e);
    return typeof r == "string" ? r : _(r);
  } catch {
    return null;
  }
  return _(t);
}, hn = (e) => {
  e && (e.styles != null && jt(e, e.styles), He(e), Q(e, Ht(e)));
}, Ce = [], Ee = !1, yn = (e) => {
  !e || !(e instanceof Element) || Se.has(e) || (Se.add(e), Ce.push(e), !Ee && (Ee = !0, queueMicrotask(() => {
    Ee = !1;
    const t = Ce;
    Ce = [];
    for (const r of t)
      Se.delete(r), r.isConnected && hn(r);
  })));
};
Bt((e) => yn(e));
var jt = (e, t) => {
  if (!t) return null;
  let r = t;
  if (typeof t == "function") try {
    const a = new WeakRef(e);
    r = t.call(e, a);
  } catch (a) {
    return console.warn("Error calling styles function:", a), null;
  }
  if (r && typeof CSSStyleSheet < "u" && r instanceof CSSStyleSheet)
    return xe(e, r), Q(e, _(r));
  if (r instanceof Promise)
    return r.then((a) => {
      a instanceof CSSStyleSheet ? xe(e, a) : a != null && jt(e, a);
    }).catch((a) => {
      console.warn("Error loading adopted stylesheet:", a);
    }), null;
  if (typeof r == "string" || r instanceof Blob || r instanceof File) {
    const a = Ut(r, "");
    if (a) {
      const l = (c) => {
        xe(e, c);
      };
      return a instanceof Promise ? (a.then((c) => {
        l(c), Q(e, typeof r == "string" ? r : _(c));
      }).catch((c) => {
        console.warn("Error loading adopted stylesheet:", c);
      }), null) : (l(a), Q(e, typeof r == "string" ? r : _(a)));
    }
  }
  const n = typeof t == "function" || typeof t == "object" ? sr : or, o = n.get(t);
  let i = o?.styleElement, s = o?.vars;
  if (!o) {
    let a = "", l = [];
    typeof r == "string" ? a = r || "" : typeof r == "object" && r != null && (r instanceof HTMLStyleElement ? i = r : (a = typeof r.css == "string" ? r.css : typeof r == "string" ? r : String(r), l = r?.props ?? l, s = r?.vars ?? s)), !i && a && (i = O(a, e, "ux-layer")), n.set(t, {
      css: a,
      props: l,
      vars: s,
      styleElement: i
    });
  }
  return i;
}, mn = (e) => !!e && typeof e == "object" && "ref" in e && typeof e?.unbind == "function", Ie = (e, t, r, n) => {
  const o = mn(r) ? r : null;
  o && (o.bind?.(), r = o.ref), n?.(e, t, r);
  const i = Ge(e), s = Ge(r), a = rr?.([r, "value"], (c) => {
    const u = Ze(i), d = Ze(s), y = Ye(d) ?? Ye(c);
    n?.(u, t, y);
  }), l = () => {
    o?.unbind?.(), a?.();
  };
  return tr(r, Symbol.dispose, l), l;
}, Sn = 0, uo = (e = {}) => ({
  kind: "scroll",
  ...e
}), fo = (e = {}) => ({
  kind: "view",
  ...e
}), vn = class {
  [Rt] = !0;
  id = Sn++;
  #n;
  #e;
  #r;
  #o = /* @__PURE__ */ new Set();
  #s = /* @__PURE__ */ new Set();
  #i(e, t) {
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
    if (ve(t)) {
      const o = r.ScrollTimeline;
      return typeof o != "function" ? null : new o({
        source: t.source === "nearest" || t.source == null ? this.#a(e) : this.#i(t.source, e),
        axis: t.axis ?? "block"
      });
    }
    const n = r.ViewTimeline;
    return typeof n != "function" ? null : new n({
      subject: t.subject ? this.#i(t.subject, e) : e,
      axis: t.axis ?? "block",
      inset: t.inset
    });
  }
  #d(e, t, r, n) {
    const o = this.#f(e, n);
    if (!o) return this.#p(e, t, r, n);
    const i = this.#u(), s = e.animate(this.#c(r), {
      ...i,
      duration: "auto",
      delay: 0,
      endDelay: 0,
      iterations: 1,
      fill: this.#e.fill ?? "both",
      timeline: o
    });
    return n.rangeStart && (s.rangeStart = n.rangeStart), n.rangeEnd && (s.rangeEnd = n.rangeEnd), t.animation = s, () => s.cancel();
  }
  constructor(e, t = {}) {
    if (!Array.isArray(e) || e.length < 2) throw new TypeError("animatable() expects at least 2 steps");
    this.#n = e, this.#e = t, this.#r = this.#l(e[0]);
  }
  #p(e, t, r, n) {
    const i = e.animate(this.#c(r), {
      ...this.#u(),
      duration: 1e4,
      delay: 0,
      iterations: 1,
      fill: "both"
    });
    i.pause(), t.animation = i;
    const s = ve(n) ? n.source === "nearest" || n.source == null ? this.#a(e) : this.#i(n.source, e) : this.#a(e);
    let a = 0;
    const l = () => {
      if (at(n)) {
        const E = s === document.scrollingElement ? {
          top: 0,
          height: innerHeight
        } : s.getBoundingClientRect(), w = e.getBoundingClientRect(), p = E.height + w.height;
        return Math.min(1, Math.max(0, (E.top + E.height - w.top) / p));
      }
      const d = s, y = d.scrollHeight - d.clientHeight;
      return y > 0 ? d.scrollTop / y : 0;
    }, c = () => {
      cancelAnimationFrame(a), a = requestAnimationFrame(() => {
        i.currentTime = l() * 1e4;
      });
    }, u = s === document.scrollingElement ? window : s;
    return u.addEventListener("scroll", c, { passive: !0 }), c(), () => {
      cancelAnimationFrame(a), u.removeEventListener("scroll", c), i.cancel();
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
  #c(e) {
    const t = this.#n.map((i) => this.#l(i)), r = t.length, n = this.#e.offsets, o = this.#e.easing;
    return t.map((i, s) => {
      const a = { offset: n?.[s] ?? (r > 1 ? s / (r - 1) : 0) };
      Array.isArray(o) && o[s] && (a.easing = o[s]);
      let l = i;
      return e.mode === "property" && e.unit != null && typeof i == "number" && (l = `${i}${e.unit}`), e.mode === "custom-property" && typeof i != "string" && (l = String(i)), a[e.target] = l, a;
    });
  }
  #u() {
    const e = this.#e;
    return {
      duration: J(e.duration, 300),
      delay: J(e.delay, 0),
      endDelay: e.endDelay ?? 0,
      iterations: Lr(e.iterations),
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
    if (ve(n) || at(n)) o = this.#d(e, r, t, n);
    else {
      const i = () => {
        r.animation?.cancel();
        const s = e.animate(this.#c(t), this.#u());
        return r.animation = s, this.#h(s, t), s;
      };
      o = this.#y(e, r, i);
    }
    return this.#s.add(r), r.cleanup = () => {
      o(), this.#s.delete(r);
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
    const n = this.#e.trigger ?? "mount", o = this.#e.reverseOnExit ?? !0, i = () => {
      !t.animation || t.animation.playState === "idle" ? r() : (t.animation.playbackRate = Math.abs(t.animation.playbackRate || 1), t.animation.play());
    }, s = () => {
      t.animation && t.animation.reverse();
    };
    if (n === "mount")
      return r(), () => {
      };
    if (n === "manual") return () => {
    };
    if (n === "hover" || n === "focus") {
      const a = n === "hover" ? "pointerenter" : "focusin", l = n === "hover" ? "pointerleave" : "focusout", c = () => i(), u = () => {
        o && s();
      };
      return e.addEventListener(a, c), e.addEventListener(l, u), () => {
        e.removeEventListener(a, c), e.removeEventListener(l, u);
      };
    }
    if (n === "click") {
      let a = !0;
      const l = () => {
        a ? i() : s(), a = !a;
      };
      return e.addEventListener("click", l), () => e.removeEventListener("click", l);
    }
    if (n === "visible") {
      if (typeof IntersectionObserver != "function")
        return r(), () => {
        };
      const a = new IntersectionObserver((l) => {
        for (const c of l) c.isIntersecting ? i() : o && t.animation && s();
      }, this.#e.intersection);
      return a.observe(e), () => a.disconnect();
    }
    if (n != null && typeof n == "object" && "value" in n) {
      const a = (c) => c ? i() : s();
      a(n.value);
      const l = typeof n.subscribe == "function" ? n.subscribe(a) : null;
      return () => l?.();
    }
    return () => {
    };
  }
  #t(e) {
    for (const t of this.#s) t.animation && e(t.animation);
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
}, po = (e, t) => new vn(e, t), gn = (e) => e != null && typeof e == "object" && e[Rt] === !0, wn = 0, X = (e) => {
  const t = e.value?.value, r = typeof t == "number" ? t : Number(t);
  if (!Number.isFinite(r)) throw new TypeError(`Reactive CSS value "${String(t)}" is not finite`);
  return r;
}, bn = (e) => {
  const t = Number(e?.value);
  return Number.isFinite(t) ? t : 0;
}, yt = (e, t) => {
  let r = e;
  for (const n of t) r = r.replace(new RegExp(`var\\(\\s*${te(n.marker)}\\s*\\)`, "g"), String(n.value));
  return r;
}, ke = (e, t) => {
  const r = te(t);
  return new RegExp(`^var\\(\\s*${r}\\s*\\)$`).test(e.trim());
}, mt = (e, t) => {
  let r = e;
  return r != null && typeof r == "object" && "value" in r && !(r instanceof Element) && (r = r.value), r == null || r === "" ? t ? `0${t}` : "0" : t != null && typeof r == "number" ? `${r}${t}` : String(r);
}, Me = (e, t, r) => {
  if (!r) return !1;
  const n = te(t), o = te(r);
  return new RegExp(`^calc\\(\\s*var\\(\\s*${n}\\s*\\)\\s*\\*\\s*1${o}\\s*\\)$`, "i").test(e.trim());
}, xn = (e, t, r, n) => {
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
}, Kt = (e) => {
  const t = [];
  let r = 0;
  for (; r < e.length; ) {
    const n = e.slice(r), o = /^\s+/.exec(n);
    if (o) {
      r += o[0].length;
      continue;
    }
    const i = /^var\(\s*(--[a-zA-Z0-9_-]+)\s*\)/.exec(n);
    if (i) {
      t.push({
        kind: "variable",
        marker: i[1]
      }), r += i[0].length;
      continue;
    }
    const s = /^(?:\d*\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/.exec(n);
    if (s) {
      r += s[0].length;
      const c = /^(%|[a-zA-Z]+)/.exec(e.slice(r)), u = c?.[0] ?? null;
      c && (r += c[0].length), t.push({
        kind: "number",
        value: Number(s[0]),
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
}, Yt = class {
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
    const r = F(this.win, e);
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
          const i = this.current();
          if (i?.kind === "number" && i.value === 1 && typeof i.unit == "string" && (!t.multipliedByUnit || t.multipliedByUnit === i.unit.toLowerCase())) {
            this.consume();
            const s = M(this.win, i.unit.toLowerCase(), X(t));
            return this.leaves.push({
              slot: t,
              value: s
            }), s;
          }
          this.index = o;
        }
        const n = M(this.win, "number", X(t));
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
}, Cn = (e, t, r, n) => {
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (const s of r) o.set(s.marker, s);
  for (const s of n) i.set(s.marker, s);
  return new Yt(Kt(e), t, o, i).parse();
}, En = (e) => e.trim().toLowerCase() === "transform", kn = (e, t, r, n) => {
  const o = Kt(e), i = [], s = [], a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const h of r) a.set(h.marker, h);
  for (const h of n) l.set(h.marker, h);
  const c = () => M(t, "px", 0), u = () => M(t, "number", 1);
  let d = 0;
  const y = () => o[d], E = () => {
    const h = o[d];
    if (!h) throw new SyntaxError("Unexpected end of transform expression");
    return d++, h;
  }, w = (h) => {
    const f = E();
    if (f.kind !== "symbol" || f.value !== h) throw new SyntaxError(`Expected "${h}"`);
  }, p = () => {
    const h = d;
    let f = 0;
    for (; d < o.length; ) {
      const R = o[d];
      if (R.kind === "symbol" && R.value === "(") {
        f++, d++;
        continue;
      }
      if (R.kind === "symbol" && R.value === ")") {
        if (f === 0) break;
        f--, d++;
        continue;
      }
      if (R.kind === "symbol" && R.value === "," && f === 0) break;
      d++;
    }
    const v = o.slice(h, d);
    if (v.length === 0) throw new SyntaxError("Empty transform function argument");
    const S = new Yt(v, t, a, l).parse();
    return i.push(...S.leaves), S.root;
  }, m = () => {
    const h = [];
    if (w("("), !(y()?.kind === "symbol" && y()?.value === ")"))
      for (h.push(p()); y()?.kind === "symbol" && y()?.value === ","; )
        E(), h.push(p());
    return w(")"), h;
  }, b = (h, f) => {
    const v = (S) => {
      const R = F(t, S);
      if (typeof R != "function") throw new TypeError(`${S} is not supported`);
      return R;
    };
    switch (h) {
      case "translate": {
        const S = v("CSSTranslate");
        if (f.length === 1) return new S(f[0], c());
        if (f.length === 2) return new S(f[0], f[1]);
        if (f.length === 3) return new S(f[0], f[1], f[2]);
        throw new SyntaxError("translate() expects 1..3 args");
      }
      case "translatex":
        return new (v("CSSTranslate"))(f[0], c());
      case "translatey":
        return new (v("CSSTranslate"))(c(), f[0]);
      case "translatez":
        return new (v("CSSTranslate"))(c(), c(), f[0]);
      case "translate3d":
        if (f.length !== 3) throw new SyntaxError("translate3d() expects 3 args");
        return new (v("CSSTranslate"))(f[0], f[1], f[2]);
      case "scale": {
        const S = v("CSSScale");
        if (f.length === 1) return new S(f[0], f[0]);
        if (f.length === 2) return new S(f[0], f[1]);
        if (f.length === 3) return new S(f[0], f[1], f[2]);
        throw new SyntaxError("scale() expects 1..3 args");
      }
      case "scalex":
        return new (v("CSSScale"))(f[0], u());
      case "scaley":
        return new (v("CSSScale"))(u(), f[0]);
      case "scalez":
        return new (v("CSSScale"))(u(), u(), f[0]);
      case "scale3d":
        if (f.length !== 3) throw new SyntaxError("scale3d() expects 3 args");
        return new (v("CSSScale"))(f[0], f[1], f[2]);
      case "rotate": {
        const S = v("CSSRotate");
        if (f.length === 1) return new S(f[0]);
        if (f.length === 4) return new S(f[0], f[1], f[2], f[3]);
        throw new SyntaxError("rotate() expects 1 or 4 args");
      }
      case "rotatex":
        return new (v("CSSRotate"))(u(), M(t, "number", 0), M(t, "number", 0), f[0]);
      case "rotatey":
        return new (v("CSSRotate"))(M(t, "number", 0), u(), M(t, "number", 0), f[0]);
      case "rotatez":
        return new (v("CSSRotate"))(M(t, "number", 0), M(t, "number", 0), u(), f[0]);
      case "rotate3d":
        if (f.length !== 4) throw new SyntaxError("rotate3d() expects 4 args");
        return new (v("CSSRotate"))(f[0], f[1], f[2], f[3]);
      case "skew": {
        const S = v("CSSSkew");
        if (f.length === 1) return new S(f[0], M(t, "deg", 0));
        if (f.length === 2) return new S(f[0], f[1]);
        throw new SyntaxError("skew() expects 1..2 args");
      }
      case "skewx":
        return new (v("CSSSkewX"))(f[0]);
      case "skewy":
        return new (v("CSSSkewY"))(f[0]);
      case "perspective":
        return new (v("CSSPerspective"))(f[0]);
      default:
        throw new SyntaxError(`Unsupported transform function "${h}"`);
    }
  };
  for (; d < o.length; ) {
    const h = E();
    if (h.kind !== "identifier") throw new SyntaxError("Expected a transform function name");
    const f = m();
    s.push(b(h.value, f));
  }
  if (s.length === 0) throw new SyntaxError("Empty transform list");
  const k = F(t, "CSSTransformValue");
  if (typeof k != "function") throw new TypeError("CSSTransformValue is not supported");
  return {
    root: new k(s),
    leaves: i
  };
}, St = (e, t, r, n, o) => En(e) ? kn(t, r, n, o) : Cn(t, r, n, o), Re = (e, t) => {
  for (const r of t) {
    const n = e.get(r.slot.marker);
    n ? n.push(r) : e.set(r.slot.marker, [r]);
  }
}, Te = (e, t, r) => e.map((n) => ({
  slot: n.slot,
  value: n.value,
  property: t,
  root: r
})), Mn = (e, t, r, n, o, i) => {
  const s = e.ownerDocument.createElement("span");
  s.style.cssText = t, Ir(e, "");
  const a = e, l = a.attributeStyleMap ?? a.styleMap, c = e.ownerDocument.defaultView ?? globalThis, u = c?.CSSStyleValue ?? globalThis.CSSStyleValue, d = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), E = [], w = /* @__PURE__ */ new Set();
  for (const p of i) {
    let m = null;
    for (let b = 0; b < s.style.length; b++) {
      const k = s.style.item(b), h = s.style.getPropertyValue(k);
      if (ke(h, p.marker)) {
        m = {
          mode: "property",
          target: k
        }, e.style.setProperty(k, mt(p.value.value)), w.add(k);
        break;
      }
      if (Me(h, p.marker, p.multipliedByUnit)) {
        m = {
          mode: "property",
          target: k,
          unit: p.multipliedByUnit
        }, e.style.setProperty(k, mt(p.value.value, p.multipliedByUnit)), w.add(k);
        break;
      }
    }
    if (!m) {
      const b = Number(p.value.value) || 0;
      An(c, p.marker, b), e.style.setProperty(p.marker, String(b)), m = {
        mode: "custom-property",
        target: p.marker
      };
    }
    E.push(p.value.attach(e, m));
  }
  for (let p = 0; p < s.style.length; p++) {
    const m = s.style.item(p);
    if (w.has(m)) continue;
    const b = s.style.getPropertyValue(m), k = s.style.getPropertyPriority(m), h = r.filter((x) => ct(b, x.marker)), f = n.filter((x) => ct(b, x.marker));
    if (h.length === 0 && f.length === 0) {
      e.style.setProperty(m, b, k);
      continue;
    }
    const v = l?.set && !k && !m.startsWith("--");
    let S = !1;
    if (v && f.length > 0) try {
      const x = f.length === 1 && h.length === 0 ? f[0] : null;
      if (x && Me(b, x.marker, x.multipliedByUnit)) {
        const C = M(c, x.multipliedByUnit, X(x));
        l.set(m, C), Re(d, Te([{
          slot: x,
          value: C
        }], m, C)), S = !0;
      } else if (x && ke(b, x.marker)) {
        const C = M(c, "number", X(x));
        l.set(m, C), Re(d, Te([{
          slot: x,
          value: C
        }], m, C)), S = !0;
      } else {
        const C = St(m, b, c, f, h);
        l.set(m, C.root), Re(d, Te(C.leaves, m, C.root)), S = !0;
      }
    } catch {
    }
    if (S) continue;
    if (v && f.length === 0 && h.length > 0) try {
      const x = h.length === 1 ? h[0] : null;
      if (x && ke(b, x.marker))
        l.set(m, x.value), S = !0;
      else if (x && Me(b, x.marker, x.multipliedByUnit)) {
        const C = F(c, "CSSMathProduct");
        if (typeof C != "function") throw new TypeError("CSSMathProduct is not supported");
        const Gt = new C(x.value, M(c, x.multipliedByUnit, 1));
        l.set(m, Gt), S = !0;
      } else {
        try {
          const C = St(m, b, c, [], h);
          l.set(m, C.root);
        } catch {
          const C = yt(b, h);
          xn(l, u, m, C);
        }
        S = !0;
      }
    } catch {
    }
    if (S) continue;
    const R = yt(b, h);
    e.style.setProperty(m, R, k);
    for (const x of f) y.add(x.marker);
  }
  for (const p of n) {
    const m = d.get(p.marker) ?? [], b = y.has(p.marker);
    if (m.length === 0 && !b) continue;
    const k = Ie(e, p.marker, p.value, function(...h) {
      if (m.length > 0) try {
        const f = X(p), v = /* @__PURE__ */ new Map();
        for (const S of m)
          S.value.value = f, v.set(S.property, S.root);
        if (l?.set) for (const [S, R] of v) l.set(S, R);
      } catch {
      }
      b && ut.apply(this, h);
    });
    E.push(k);
  }
  for (const p of y) {
    if (n.some((b) => b.marker === p)) continue;
    const m = o.get(p);
    m != null && E.push(Ie(e, p, m, ut));
  }
  return Ur(e), () => {
    for (const p of E) p?.();
  };
}, W = (e) => {
  const [t, r, n] = e, o = document.createElement("div");
  return t(o), o.style.cssText;
}, Be = (e, ...t) => {
  const r = wn++, n = [], o = /* @__PURE__ */ new Map(), i = [], s = [], a = [], l = [], c = new Array(e.length).fill(0);
  for (let d = 0; d < e.length; d++) {
    if (a.push(e[d].slice(c[d])), d >= t.length) continue;
    const y = t[d], E = e[d + 1] ?? "", w = Br(E);
    if (P(y)) {
      const p = `--fest-typed-${r}-${i.length}`;
      i.push({
        marker: p,
        value: y,
        multipliedByUnit: w?.normalized
      }), w ? (a.push(`calc(var(${p}) * 1${w.authored})`), c[d + 1] += w.length) : a.push(`var(${p})`);
      continue;
    }
    if (gn(y)) {
      const p = `--fest-anim-${r}-${l.length}`;
      w ? (a.push(`calc(var(${p}) * 1${w.authored})`), c[d + 1] += w.length) : a.push(`var(${p})`), n.push(`@property ${p} { syntax: "<number>"; initial-value: ${Number(y.value) || 0}; inherits: false; };`), l.push({
        marker: p,
        value: y,
        multipliedByUnit: w?.normalized
      });
      continue;
    }
    if (ie(y)) {
      const p = `--fest-ref-${r}-${s.length}`;
      s.push({
        marker: p,
        value: y,
        multipliedByUnit: w?.normalized
      }), w ? (a.push(`calc(var(${p}) * 1${w.authored})`), c[d + 1] += w.length) : a.push(`var(${p})`);
      const m = bn(y);
      n.push(`@property ${p} { syntax: "<number>"; initial-value: ${m}; inherits: true; };`), o.set(p, y);
      continue;
    }
    typeof y != "object" && typeof y != "function" && y != null && String(y).trim() !== "" && a.push(String(y));
  }
  const u = [
    (d) => Mn(d, a.join(""), i, s, o, l),
    n,
    o
  ];
  return u[Symbol.toStringTag] = () => W(u), u[Symbol.toPrimitive] = (d) => d === "string" ? W(u) : u[0], u.toString = () => W(u), u.valueOf = () => W(u), Object.defineProperty(u, "cssText", {
    get: () => W(u),
    set: (d) => {
      console.log("set cssText", d);
      const [y, E, w] = u, p = document.createElement("div");
      y(p), p.style.cssText = d;
    },
    configurable: !0,
    enumerable: !0
  }), u;
}, ho = (e, ...t) => Be(e, ...t), Rn = (e, t) => {
  const r = [], n = [], o = /#\{(\d+)\}/g;
  let i = 0, s;
  for (; (s = o.exec(e)) != null; ) {
    const a = Number.parseInt(s[1], 10);
    !Number.isSafeInteger(a) || a < 0 || (r.push(e.slice(i, s.index)), n.push(t[a]), i = s.index + s[0].length);
  }
  return n.length === 0 ? null : (r.push(e.slice(i)), {
    strings: r,
    values: n
  });
}, Tn = (e, t) => {
  let r = e[0] ?? "";
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    o != null && (r += String(o)), r += e[n + 1] ?? "";
  }
  return r;
}, yo = (e, t) => {
  const r = Rn(e, t);
  if (!r) return null;
  const { strings: n, values: o } = r;
  return o.length === 1 && (n[0] ?? "").trim() === "" && (n[1] ?? "").trim() === "" && !lt(o[0]) && !P(o[0]) ? $r(o[0]) ? {
    kind: "template",
    binding: o[0]
  } : {
    kind: "direct",
    value: o[0]
  } : o.some((i) => ie(i) || P(i)) ? {
    kind: "template",
    binding: Be(n, ...o)
  } : o.every(lt) ? {
    kind: "static",
    cssText: Tn(n, o)
  } : {
    kind: "template",
    binding: Be(n, ...o)
  };
}, mo = (e, t) => {
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
}, An = (e, t, r) => {
  if (!et.has(t)) {
    et.add(t);
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
}, je = (e) => {
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
}, Ln = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  let n = "";
  for (let i = 0; i < e.length; i++)
    n += e[i], i < t.length && (n += `__SLOT_${i}__`);
  const o = n.split(";").map((i) => i.trim()).filter(Boolean);
  for (const i of o) {
    const s = i.indexOf(":");
    if (s === -1) continue;
    const a = i.slice(0, s).trim(), l = i.slice(s + 1).trim(), c = /__SLOT_(\d+)__/.exec(l);
    if (!c) continue;
    const u = t[parseInt(c[1], 10)];
    if (!Array.isArray(u)) throw new TypeError(`A\`${a}\` expects an array of values, got ${typeof u}`);
    r.set(a, {
      property: a,
      values: u
    });
  }
  return { properties: r };
}, Ke = (e) => {
  const t = [], r = [];
  let n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    ie(i) ? (n = !0, r.push(o), t.push(i.value)) : (P(i), t.push(i));
  }
  return {
    resolved: t,
    hasReactive: n,
    reactiveIndices: r
  };
}, _e = (e) => {
  const t = e?.offsets, r = je(e);
  if (r.length === 0) throw new Error("No animatable properties found in A template");
  const n = Math.max(...r.map((s) => s.values.length)), o = (t?.length > 1 ? t : null) || Array.from({ length: n }, (s, a) => a / (n - 1)), i = [];
  for (let s = 0; s < n; s++) {
    const a = { offset: o[s] ?? s / (n - 1) };
    for (const l of r) {
      const { resolved: c } = Ke(l.values), u = pe(l.property);
      let d = c[Math.min(s, c.length - 1)];
      P(d) && (d = String(d)), a[u] = d;
    }
    i.push(a);
  }
  return i;
}, Zt = (e) => {
  const t = J(e.duration ?? 300), r = J(e.delay ?? 0), n = Ar(e.iterationCount);
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
}, Pn = (e, t) => {
  const r = je(t), n = [], o = _e(t), i = Zt(t), s = e.animate(o, i);
  for (const l of r) {
    const { hasReactive: c, reactiveIndices: u } = Ke(l.values);
    if (c)
      for (const d of u) {
        const y = l.values[d], E = Ie(e, `--anim-${l.property}-${d}`, y, () => {
          const w = _e(t), p = s.currentTime;
          s.effect = new KeyframeEffect(e, w, i), p !== null && (s.currentTime = p);
        });
        n.push(E);
      }
  }
  return {
    animation: s,
    cleanup: () => {
      s.cancel(), n.forEach((l) => l());
    }
  };
}, So = (e, ...t) => Ln(e, t), ae = (e, t, r) => {
  if (je(t).some((a) => {
    const { hasReactive: l } = Ke(a.values);
    return l;
  })) return Pn(e, t);
  const n = _e(t), o = Zt(t), i = e.animate(n, o);
  return {
    animation: i,
    cleanup: () => {
      i.cancel();
    }
  };
}, vo = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  for (const [n, o] of Object.entries(t.properties)) {
    if (!Array.isArray(o)) throw new TypeError(`animate() expects arrays of values, got ${typeof o} for ${n}`);
    r.set(n, {
      property: n,
      values: o
    });
  }
  return ae(e, { ...t }, r);
}, go = (e) => (t) => ae(t, e), wo = async (e, t) => {
  for (const r of t) {
    const { animation: n } = ae(e, r);
    await n.finished;
  }
}, bo = (e, t) => {
  const r = t.map((o) => ae(e, o)), n = () => {
    r.forEach((o) => o.cleanup());
  };
  return {
    animations: r.map((o) => o.animation),
    cleanup: n
  };
}, xo = (e, t, r = 100) => e.map((n, o) => {
  const i = J(t?.delay ?? 0) + o * r;
  return ae(n, {
    ...t,
    delay: i
  });
});
export {
  So as A,
  Rt as ANIMATABLE_BRAND,
  vn as AnimatableValue,
  In as BAKE_CATEGORIES,
  Et as BAKE_LAYER,
  gr as BAKE_SCREEN_ALSO,
  kt as BAKE_SCREEN_ALSO_EXPLORER,
  Mt as BAKE_SCREEN_ALSO_SETTINGS,
  vr as BAKE_SCREEN_CHROME,
  se as BAKE_SCREEN_MEDIA,
  xt as CSS_COLOR_PROPERTIES,
  ar as CSS_DIMENSION_UNITS,
  ir as CSS_DIMENSION_UNITS_LIST,
  ur as CSS_MOTION_PROPERTIES,
  cr as CSS_TYPOGRAPHY_PROPERTIES,
  lr as CSS_UNIT_FACTORY_ALIASES,
  bt as CSS_UNIT_TOKEN_RE,
  Fe as DEFAULT_CACHE_MS,
  Sr as DEFAULT_CATEGORIES,
  tt as HOST_CSS_FALLBACK,
  yr as LAYER_NAME,
  mr as LAYER_OPEN,
  _n as OWNER,
  Be as S,
  Ct as STYLE_THEME_ATTRS,
  fr as STYLE_THEME_OBSERVE_ATTRS,
  pr as UX_HOST_LAYERS,
  jn as UX_PRELOAD_HOST_CSS,
  dr as VEELA_CASCADE_LAYERS,
  Bn as VIEWER_CSS_LAYER_ORDER,
  hr as VIEWER_RUNTIME_LAYERS,
  xe as addAdoptedSheetToElement,
  V as adoptedAppliedText,
  B as adoptedBlobMap,
  gt as adoptedFilled,
  Je as adoptedLayerMap,
  A as adoptedMap,
  Qe as adoptedSelectorMap,
  ce as adoptedShadowLayerMap,
  Xe as adoptedShadowSelectorMap,
  Le as adoptedStyleSheetsCache,
  po as animatable,
  vo as animate,
  Ir as applyNormalizedInlineStyle,
  Vt as bakeAlsoQueriesFor,
  oe as bakeComputedStyle,
  pn as bakeScreenColors,
  ne as bakeThemeFingerprint,
  L as bakedCache,
  K as bakedFollowers,
  U as bakedLive,
  T as bakedStyles,
  mo as bindStyle,
  q as blobURLMap,
  nn as buildBakedCssText,
  le as cacheBlobContentMap,
  z as cacheContentMap,
  I as cacheMap,
  on as collectBakeAlsoHosts,
  _t as collectBakeScreenHosts,
  rn as collectBakedDeclarations,
  yo as compileInlineStyleAttribute,
  ct as containsMarker,
  Mr as createStyleId,
  M as createTypedUnitValue,
  ho as css,
  xr as cssEmptyLayerRule,
  Vr as cssImportWithLayer,
  De as cssLayerBlock,
  Ne as cssLayerOrder,
  _ as cssTextForAdoptedSheet,
  nt as cssTextRequiresInlineStyleElement,
  br as cssUnitConstructorName,
  wr as cssUnitFactoryName,
  go as defineAnimation,
  ae as doAnimation,
  re as ensureAdoptedSheetContent,
  hn as ensureHostStyles,
  qe as ensureStyleScopeSelector,
  st as escapeCSSIdentifier,
  te as escapeRegExp,
  Xr as fetchAndCache,
  Jr as fetchAsInline,
  oo as getAdoptedStyleRule,
  io as getBakedStyle,
  eo as getElementZoom,
  Pt as getOrCreateLayerRule,
  ro as getPadding,
  H as getPropertyValue,
  to as getPxValue,
  Yr as getStyleLayer,
  ze as getStyleRule,
  Xn as getTransform,
  Jn as getTransformOrigin,
  F as getWindowConstructor,
  he as hasTypedOM,
  Fn as hash,
  be as invalidateBakedStyles,
  Nn as isAdoptedSheetEmpty,
  gn as isAnimatableValue,
  Pr as isColorToken,
  Er as isCssElement,
  Vn as isCssLayerName,
  ot as isDocument,
  Lt as isEffectivelyEmptyStyleText,
  Or as isElementVisible,
  rt as isLayerBlockRule,
  P as isNativeCSSStyleValue,
  ie as isReactiveStyleValue,
  ve as isScrollDriven,
  Y as isShadowRoot,
  lt as isStaticStyleInterpolation,
  $r as isStyleBinding,
  ee as isStyleHost,
  Dn as isStyleValue,
  ue as isUnitValue,
  at as isViewDriven,
  Un as layerCounter,
  Ut as loadAsAdopted,
  Wr as loadBlobStyle,
  jt as loadCachedStyles,
  O as loadInlineStyle,
  $t as loadStyleSheet,
  zn as makeHostLayerOrder,
  Wn as normalizeCssForLayer,
  Ar as normalizeIterationCount,
  Lr as normalizeIterations,
  Kr as notifyStyleTreeHosts,
  Gn as observeStyleTree,
  uo as onScroll,
  fo as onView,
  bo as parallelAnimations,
  it as parseLength,
  Tr as parseOrigin,
  J as parseTime,
  Zn as preloadStyle,
  Tt as promiseOrDirect,
  Ur as pruneEmptyStyleAttribute,
  de as queryFirstDeep,
  Br as readAttachedCSSUnit,
  At as readSheetRuleCount,
  Ae as rebakeBatch,
  so as rebakeComputedStyle,
  Bt as registerStyleTreeHook,
  et as registeredProperties,
  co as rehydrateAdoptedStyleSheets,
  Qn as rehydrateConstructableSheets,
  we as removeAdopted,
  lo as scheduleBakeScreenColors,
  yn as scheduleEnsureHostStyles,
  wo as sequenceAnimations,
  Yn as setProperty,
  Kn as setStyleInRule,
  ye as setStyleProperty,
  Ot as setStylePropertyFallback,
  qr as setStylePropertyTyped,
  zr as setStyleRule,
  no as setStyleRules,
  ft as setStyleURL,
  xo as staggerAnimation,
  Cr as stripCssPreamble,
  or as styleCache,
  sr as styleElementCache,
  Se as styleFlushPending,
  wt as styleTreeHooks,
  me as styleTreeObserved,
  nr as styleTreeRoots,
  D as supportsConstructableStylesheet,
  Ue as unbakeComputedStyle,
  ao as unbakeScreenColors,
  Hn as unwrapCssLayer,
  Rr as urlCanParse,
  qn as veelaCascadeOrder,
  ge as wrapCssLayer
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3R5bGUtbGliLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCAkZ2V0VmFsdWUsIGNhbWVsVG9LZWJhYiwgZGVyZWYsIGdldE9ySW5zZXJ0Q29tcHV0ZWQsIGhhc1ZhbHVlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIHRvUmVmLCB0cnlTdHJpbmdBc051bWJlciB9IGZyb20gXCJAZmVzdC1saWIvY29yZVwiO1xuaW1wb3J0IHsgYWRkVG9DYWxsQ2hhaW4sIGFmZmVjdGVkIH0gZnJvbSBcIkBmZXN0LWxpYi9vYmplY3RcIjtcblxuLy8jcmVnaW9uIHNyYy9tYXBzLnRzXG52YXIgc2hhcmVkID0gKGtleSwgY3JlYXRlKSA9PiBnbG9iYWxUaGlzW1N5bWJvbC5mb3Ioa2V5KV0gPz89IGNyZWF0ZSgpO1xudmFyIGJsb2JVUkxNYXAgPSBzaGFyZWQoXCJkb20udHNAYmxvYlVSTE1hcFwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSk7XG52YXIgY2FjaGVNYXAgPSBzaGFyZWQoXCJkb20udHNAY2FjaGVNYXBcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG52YXIgY2FjaGVDb250ZW50TWFwID0gc2hhcmVkKFwiZG9tLnRzQGNhY2hlQ29udGVudE1hcFwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbnZhciBjYWNoZUJsb2JDb250ZW50TWFwID0gc2hhcmVkKFwiZG9tLnRzQGNhY2hlQmxvYkNvbnRlbnRNYXBcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xudmFyIGFkb3B0ZWRTZWxlY3Rvck1hcCA9IHNoYXJlZChcImRvbS50c0BhZG9wdGVkU2VsZWN0b3JNYXBcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG52YXIgYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwID0gc2hhcmVkKFwiZG9tLnRzQGFkb3B0ZWRTaGFkb3dTZWxlY3Rvck1hcFwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSk7XG52YXIgYWRvcHRlZExheWVyTWFwID0gc2hhcmVkKFwiZG9tLnRzQGFkb3B0ZWRMYXllck1hcFwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbnZhciBhZG9wdGVkU2hhZG93TGF5ZXJNYXAgPSBzaGFyZWQoXCJkb20udHNAYWRvcHRlZFNoYWRvd0xheWVyTWFwXCIsICgpID0+IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpKTtcbnZhciBhZG9wdGVkTWFwID0gc2hhcmVkKFwiZG9tLnRzQGFkb3B0ZWRNYXBcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG52YXIgYWRvcHRlZEJsb2JNYXAgPSBzaGFyZWQoXCJkb20udHNAYWRvcHRlZEJsb2JNYXBcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xudmFyIGFkb3B0ZWRBcHBsaWVkVGV4dCA9IHNoYXJlZChcImRvbS50c0BhZG9wdGVkQXBwbGllZFRleHRcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xudmFyIGFkb3B0ZWRGaWxsZWQgPSBzaGFyZWQoXCJkb20udHNAYWRvcHRlZEZpbGxlZFwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSk7XG52YXIgbGF5ZXJDb3VudGVyID0gc2hhcmVkKFwiZG9tLnRzQGxheWVyQ291bnRlclwiLCAoKSA9PiAwKTtcbnZhciBzdHlsZVRyZWVIb29rcyA9IHNoYXJlZChcImRvbS50c0BzdHlsZVRyZWVIb29rc1wiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcbnZhciBzdHlsZVRyZWVPYnNlcnZlZCA9IHNoYXJlZChcImRvbS50c0BzdHlsZVRyZWVPYnNlcnZlZFwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSk7XG52YXIgc3R5bGVUcmVlUm9vdHMgPSBzaGFyZWQoXCJkb20udHNAc3R5bGVUcmVlUm9vdHNcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG52YXIgYmFrZWRTdHlsZXMgPSBzaGFyZWQoXCJzdHlsZS1saWJAYmFrZWRTdHlsZVwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSk7XG52YXIgYmFrZWRMaXZlID0gc2hhcmVkKFwic3R5bGUtbGliQGJha2VkTGl2ZVwiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcbnZhciBiYWtlZENhY2hlID0gc2hhcmVkKFwic3R5bGUtbGliQGJha2VkQ2FjaGVcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG52YXIgcmViYWtlQmF0Y2ggPSBzaGFyZWQoXCJzdHlsZS1saWJAcmViYWtlQmF0Y2hcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG52YXIgYmFrZWRGb2xsb3dlcnMgPSBzaGFyZWQoXCJzdHlsZS1saWJAYmFrZWRGb2xsb3dlcnNcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xudmFyIGFkb3B0ZWRTdHlsZVNoZWV0c0NhY2hlID0gc2hhcmVkKFwibHVyLmVAYWRvcHRlZFN0eWxlU2hlZXRzQ2FjaGVcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xudmFyIHN0eWxlQ2FjaGUgPSBzaGFyZWQoXCJsdXIuZUBzdHlsZUNhY2hlXCIsICgpID0+IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xudmFyIHN0eWxlRWxlbWVudENhY2hlID0gc2hhcmVkKFwibHVyLmVAc3R5bGVFbGVtZW50Q2FjaGVcIiwgKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xudmFyIHN0eWxlRmx1c2hQZW5kaW5nID0gc2hhcmVkKFwic3R5bGUtbGliQHN0eWxlRmx1c2hQZW5kaW5nXCIsICgpID0+IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcbnZhciByZWdpc3RlcmVkUHJvcGVydGllcyA9IHNoYXJlZChcInN0eWxlLWxpYkByZWdpc3RlcmVkUHJvcGVydGllc1wiLCAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2NvbnN0YW50cy50c1xudmFyIENTU19ESU1FTlNJT05fVU5JVFNfTElTVCA9IFtcblx0XCIlXCIsXG5cdFwicHhcIixcblx0XCJjbVwiLFxuXHRcIm1tXCIsXG5cdFwicVwiLFxuXHRcImluXCIsXG5cdFwicGNcIixcblx0XCJwdFwiLFxuXHRcImVtXCIsXG5cdFwiZXhcIixcblx0XCJjaFwiLFxuXHRcImNhcFwiLFxuXHRcImljXCIsXG5cdFwibGhcIixcblx0XCJyZW1cIixcblx0XCJyZXhcIixcblx0XCJyY2hcIixcblx0XCJyY2FwXCIsXG5cdFwicmljXCIsXG5cdFwicmxoXCIsXG5cdFwidndcIixcblx0XCJ2aFwiLFxuXHRcInZpXCIsXG5cdFwidmJcIixcblx0XCJ2bWluXCIsXG5cdFwidm1heFwiLFxuXHRcInN2d1wiLFxuXHRcInN2aFwiLFxuXHRcInN2aVwiLFxuXHRcInN2YlwiLFxuXHRcInN2bWluXCIsXG5cdFwic3ZtYXhcIixcblx0XCJsdndcIixcblx0XCJsdmhcIixcblx0XCJsdmlcIixcblx0XCJsdmJcIixcblx0XCJsdm1pblwiLFxuXHRcImx2bWF4XCIsXG5cdFwiZHZ3XCIsXG5cdFwiZHZoXCIsXG5cdFwiZHZpXCIsXG5cdFwiZHZiXCIsXG5cdFwiZHZtaW5cIixcblx0XCJkdm1heFwiLFxuXHRcImNxd1wiLFxuXHRcImNxaFwiLFxuXHRcImNxaVwiLFxuXHRcImNxYlwiLFxuXHRcImNxbWluXCIsXG5cdFwiY3FtYXhcIixcblx0XCJkZWdcIixcblx0XCJncmFkXCIsXG5cdFwicmFkXCIsXG5cdFwidHVyblwiLFxuXHRcInNcIixcblx0XCJtc1wiLFxuXHRcImh6XCIsXG5cdFwia2h6XCIsXG5cdFwiZHBpXCIsXG5cdFwiZHBjbVwiLFxuXHRcImRwcHhcIixcblx0XCJ4XCIsXG5cdFwiZnJcIlxuXTtcbnZhciBDU1NfRElNRU5TSU9OX1VOSVRTID0gbmV3IFNldChDU1NfRElNRU5TSU9OX1VOSVRTX0xJU1QpO1xudmFyIENTU19VTklUX0ZBQ1RPUllfQUxJQVNFUyA9IHtcblx0XCIlXCI6IFwicGVyY2VudFwiLFxuXHRxOiBcIlFcIixcblx0aHo6IFwiSHpcIixcblx0a2h6OiBcImtIelwiLFxuXHRmcjogXCJmbGV4XCJcbn07XG52YXIgQ1NTX1VOSVRfVE9LRU5fUkUgPSAvXiglfFthLXpBLVpdKykvO1xudmFyIENTU19DT0xPUl9QUk9QRVJUSUVTID0gW1xuXHRcImNvbG9yXCIsXG5cdFwiYmFja2dyb3VuZC1jb2xvclwiLFxuXHRcImJvcmRlci1jb2xvclwiLFxuXHRcImJvcmRlci10b3AtY29sb3JcIixcblx0XCJib3JkZXItcmlnaHQtY29sb3JcIixcblx0XCJib3JkZXItYm90dG9tLWNvbG9yXCIsXG5cdFwiYm9yZGVyLWxlZnQtY29sb3JcIixcblx0XCJvdXRsaW5lLWNvbG9yXCIsXG5cdFwiYWNjZW50LWNvbG9yXCIsXG5cdFwiY2FyZXQtY29sb3JcIixcblx0XCJ0ZXh0LWRlY29yYXRpb24tY29sb3JcIixcblx0XCJjb2x1bW4tcnVsZS1jb2xvclwiLFxuXHRcImZpbGxcIixcblx0XCJzdHJva2VcIixcblx0XCJmbG9vZC1jb2xvclwiLFxuXHRcImxpZ2h0aW5nLWNvbG9yXCIsXG5cdFwic3RvcC1jb2xvclwiXG5dO1xudmFyIENTU19UWVBPR1JBUEhZX1BST1BFUlRJRVMgPSBbXG5cdFwiZm9udC1mYW1pbHlcIixcblx0XCJmb250LXNpemVcIixcblx0XCJmb250LXdlaWdodFwiLFxuXHRcImZvbnQtc3R5bGVcIixcblx0XCJmb250LXN0cmV0Y2hcIixcblx0XCJsaW5lLWhlaWdodFwiLFxuXHRcImxldHRlci1zcGFjaW5nXCIsXG5cdFwid29yZC1zcGFjaW5nXCJcbl07XG52YXIgQ1NTX01PVElPTl9QUk9QRVJUSUVTID0gW1xuXHRcInRyYW5zaXRpb24tZHVyYXRpb25cIixcblx0XCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiLFxuXHRcImFuaW1hdGlvbi1kdXJhdGlvblwiLFxuXHRcImFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIlxuXTtcbnZhciBTVFlMRV9USEVNRV9BVFRSUyA9IFtcblx0XCJkYXRhLXRoZW1lXCIsXG5cdFwiZGF0YS1leHBsb3Jlci1jb2xvci1zY2hlbWVcIixcblx0XCJkYXRhLWNvbG9yLXNjaGVtZVwiLFxuXHRcInRoZW1lXCIsXG5cdFwiY29sb3Itc2NoZW1lXCJcbl07XG52YXIgU1RZTEVfVEhFTUVfT0JTRVJWRV9BVFRSUyA9IFtcblx0Li4uU1RZTEVfVEhFTUVfQVRUUlMsXG5cdFwic3R5bGVcIixcblx0XCJjbGFzc1wiXG5dO1xudmFyIEJBS0VfQ0FURUdPUklFUyA9IFtcblx0XCJ0b2tlbnNcIixcblx0XCJjb2xvcnNcIixcblx0XCJ0eXBvZ3JhcGh5XCIsXG5cdFwibW90aW9uXCJcbl07XG52YXIgVkVFTEFfQ0FTQ0FERV9MQVlFUlMgPSBbXG5cdFwidG9rZW5zXCIsXG5cdFwiYmFzZVwiLFxuXHRcImxheW91dFwiLFxuXHRcImNvbXBvbmVudHNcIixcblx0XCJ1dGlsaXRpZXNcIixcblx0XCJ0aGVtZVwiLFxuXHRcIm92ZXJyaWRlc1wiLFxuXHRcInByaW50XCJcbl07XG52YXIgVVhfSE9TVF9MQVlFUlMgPSBbXCJ1eC1wcmVsb2FkXCIsIFwidXgtbGF5ZXJcIl07XG52YXIgVklFV0VSX1JVTlRJTUVfTEFZRVJTID0gW1xuXHRcInJzLW1kLWJhc2VcIixcblx0XCJycy1tZC1zeXN0ZW1cIixcblx0XCJycy1tZC1tb2R1bGVzXCIsXG5cdFwicnMtbWQtdXNlclwiLFxuXHRcInJzLW1kLXByaW50XCIsXG5cdFwicnMtbWQtdXNlci1wcmludFwiXG5dO1xudmFyIFZJRVdFUl9DU1NfTEFZRVJfT1JERVIgPSBWSUVXRVJfUlVOVElNRV9MQVlFUlM7XG52YXIgTEFZRVJfTkFNRSA9IC9eW2EtekEtWjAtOV8uLV0rJC87XG52YXIgTEFZRVJfT1BFTiA9IC9eQGxheWVyXFxzKyhbYS16QS1aMC05Xy4tXSspXFxzKlxcey87XG52YXIgT1dORVIgPSBcIkRPTVwiO1xudmFyIEhPU1RfQ1NTX0ZBTExCQUNLID0gXCJkYXRhLWdsaXQtaG9zdC1jc3NcIjtcbnZhciBCQUtFX0xBWUVSID0gXCJ1eC1iYWtlZFwiO1xudmFyIERFRkFVTFRfQ0FURUdPUklFUyA9IFtcImNvbG9yc1wiLCBcInRva2Vuc1wiXTtcbnZhciBERUZBVUxUX0NBQ0hFX01TID0gM2U0O1xudmFyIEJBS0VfU0NSRUVOX01FRElBID0gXCJzY3JlZW5cIjtcbnZhciBCQUtFX1NDUkVFTl9DSFJPTUUgPSBbXG5cdFwidWktd2luZG93LWZyYW1lXCIsXG5cdFwidWktbW9kYWxcIixcblx0XCJhcHAtYm94XCIsXG5cdFwiLnVpLW1vZGFsLWRpYWxvZ1wiLFxuXHRcIi51aS1tb2RhbC1wYW5lbFwiXG5dO1xudmFyIEJBS0VfU0NSRUVOX0FMU09fRVhQTE9SRVIgPSBbXG5cdFwiLnJvdy5jMi1zdXJmYWNlXCIsXG5cdFwiLnJvdy5jMi1zdXJmYWNlW2RhdGEta2luZD1kaXJlY3RvcnldXCIsXG5cdFwiLnJvdy5jMi1zdXJmYWNlW2RhdGEta2luZD1maWxlXVwiLFxuXHRcIi5yb3cuYzItc3VyZmFjZSAuYy5uYW1lXCIsXG5cdFwiLmZtLWdyaWQtaGVhZGVyXCJcbl07XG52YXIgQkFLRV9TQ1JFRU5fQUxTT19TRVRUSU5HUyA9IFtcblx0XCIuZmllbGRcIixcblx0XCIuZm9ybS1pbnB1dFwiLFxuXHRcIi5mb3JtLXNlbGVjdFwiLFxuXHRcIi5maWVsZC1jb250cm9sXCJcbl07XG52YXIgQkFLRV9TQ1JFRU5fQUxTTyA9IFsuLi5CQUtFX1NDUkVFTl9BTFNPX0VYUExPUkVSLCAuLi5CQUtFX1NDUkVFTl9BTFNPX1NFVFRJTkdTXTtcbnZhciBBTklNQVRBQkxFX0JSQU5EID0gU3ltYm9sLmZvcihcImZlc3QuYW5pbWF0YWJsZVwiKTtcbnZhciBoYXNUeXBlZE9NID0gdHlwZW9mIENTU1N0eWxlVmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIENTU1VuaXRWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzLnRzXG52YXIgY3NzVW5pdEZhY3RvcnlOYW1lID0gKHVuaXQpID0+IENTU19VTklUX0ZBQ1RPUllfQUxJQVNFU1t1bml0LnRvTG93ZXJDYXNlKCldID8/IHVuaXQudG9Mb3dlckNhc2UoKTtcbnZhciBjc3NVbml0Q29uc3RydWN0b3JOYW1lID0gKHVuaXQpID0+IHVuaXQudG9Mb3dlckNhc2UoKSA9PT0gXCIlXCIgPyBcInBlcmNlbnRcIiA6IHVuaXQudG9Mb3dlckNhc2UoKTtcbnZhciBpc0Nzc0xheWVyTmFtZSA9IChuYW1lKSA9PiBMQVlFUl9OQU1FLnRlc3QobmFtZSk7XG52YXIgY3NzRW1wdHlMYXllclJ1bGUgPSAobGF5ZXJOYW1lKSA9PiBgQGxheWVyICR7bGF5ZXJOYW1lfSB7fWA7XG52YXIgc3RyaXBDc3NQcmVhbWJsZSA9IChjc3MpID0+IHtcblx0bGV0IG91dCA9IFN0cmluZyhjc3MgfHwgXCJcIikudHJpbSgpO1xuXHRvdXQgPSBvdXQucmVwbGFjZSgvXihAY2hhcnNldFxccytbXjtdKztcXHMqKSsvaSwgXCJcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0Y29uc3QgbmV4dCA9IG91dC5yZXBsYWNlKC9eXFwvXFwqW1xcc1xcU10qP1xcKlxcL1xccyovLCBcIlwiKTtcblx0XHRpZiAobmV4dCA9PT0gb3V0KSBicmVhaztcblx0XHRvdXQgPSBuZXh0LnRyaW0oKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufTtcbnZhciBpc0xheWVyQmxvY2tSdWxlID0gKHJ1bGUpID0+IHR5cGVvZiBDU1NMYXllckJsb2NrUnVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBydWxlIGluc3RhbmNlb2YgQ1NTTGF5ZXJCbG9ja1J1bGU7XG52YXIgc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCA9ICgpID0+IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBnbG9iYWxUaGlzLkNTU1N0eWxlU2hlZXQgPT09IFwiZnVuY3Rpb25cIjtcbnZhciBjc3NUZXh0UmVxdWlyZXNJbmxpbmVTdHlsZUVsZW1lbnQgPSAoY3NzKSA9PiB0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiICYmIC9AaW1wb3J0XFxiL2kudGVzdChjc3MpO1xudmFyIHByb21pc2VPckRpcmVjdCA9IChwcm9taXNlLCBjYikgPT4ge1xuXHRpZiAodHlwZW9mIHByb21pc2U/LnRoZW4gPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gcHJvbWlzZT8udGhlbj8uKGNiKTtcblx0cmV0dXJuIGNiKHByb21pc2UpO1xufTtcbnZhciBpc1NoYWRvd1Jvb3QgPSAodmFsdWUpID0+IHR5cGVvZiBTaGFkb3dSb290ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbnZhciBpc0RvY3VtZW50ID0gKHZhbHVlKSA9PiB0eXBlb2YgRG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBEb2N1bWVudDtcbnZhciBpc0Nzc0VsZW1lbnQgPSAodmFsdWUpID0+IHR5cGVvZiBFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudDtcbnZhciBlc2NhcGVDU1NJZGVudGlmaWVyID0gKHZhbHVlKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBDU1MuZXNjYXBlID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBDU1MuZXNjYXBlKHZhbHVlKTtcblx0cmV0dXJuIEFycmF5LmZyb20odmFsdWUpLm1hcCgoY2hhcikgPT4gYFxcXFwke2NoYXIuY29kZVBvaW50QXQoMCkudG9TdHJpbmcoMTYpfSBgKS5qb2luKFwiXCIpO1xufTtcbnZhciBzdHlsZUlkQ291bnRlciA9IDA7XG52YXIgY3JlYXRlU3R5bGVJZCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNyeXB0by5yYW5kb21VVUlEID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHRyZXR1cm4gYHV4LSR7RGF0ZS5ub3coKS50b1N0cmluZygzNil9LSR7KCsrc3R5bGVJZENvdW50ZXIpLnRvU3RyaW5nKDM2KX1gO1xufTtcbnZhciB1cmxDYW5QYXJzZSA9ICh2YWx1ZSkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiB0eXBlb2YgVVJMICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBVUkwuY2FuUGFyc2UgPT09IFwiZnVuY3Rpb25cIiAmJiBVUkwuY2FuUGFyc2UodmFsdWUpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgaGFzaCA9IGFzeW5jIChzdHJpbmcpID0+IHtcblx0Y29uc3QgaGFzaEJ1ZmZlciA9IGF3YWl0IGNyeXB0bz8uc3VidGxlPy5kaWdlc3QoXCJTSEEtMjU2XCIsIHR5cGVvZiBzdHJpbmcgPT0gXCJzdHJpbmdcIiA/IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzdHJpbmcpIDogc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBzdHJpbmcgOiBhd2FpdCBzdHJpbmc/LmFycmF5QnVmZmVyPy4oKSk7XG5cdHJldHVybiBcInNoYTI1Ni1cIiArIGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShoYXNoQnVmZmVyKSkpO1xufTtcbnZhciBwYXJzZUxlbmd0aCA9ICh2YWx1ZSwgc2l6ZSkgPT4ge1xuXHRpZiAodmFsdWUuZW5kc1dpdGgoXCIlXCIpKSByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgLyAxMDAgKiBzaXplKCk7XG5cdHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbn07XG52YXIgcGFyc2VPcmlnaW4gPSAob3JpZ2luLCBlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHZhbHVlcyA9IG9yaWdpbi5zcGxpdChcIiBcIik7XG5cdHJldHVybiBuZXcgRE9NUG9pbnQocGFyc2VMZW5ndGgodmFsdWVzWzBdLCAoKSA9PiBlbGVtZW50LmNsaWVudFdpZHRoKSwgcGFyc2VMZW5ndGgodmFsdWVzWzFdLCAoKSA9PiBlbGVtZW50LmNsaWVudEhlaWdodCkpO1xufTtcbnZhciBwYXJzZVRpbWUgPSAodiwgZmFsbGJhY2sgPSAwKSA9PiB7XG5cdGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHY7XG5cdGlmICghdikgcmV0dXJuIGZhbGxiYWNrO1xuXHRjb25zdCB0ID0gU3RyaW5nKHYpLnRyaW0oKTtcblx0aWYgKHQuZW5kc1dpdGgoXCJtc1wiKSkgcmV0dXJuIHBhcnNlRmxvYXQodCk7XG5cdGlmICh0LmVuZHNXaXRoKFwic1wiKSkgcmV0dXJuIHBhcnNlRmxvYXQodCkgKiAxZTM7XG5cdHJldHVybiBwYXJzZUZsb2F0KHQpIHx8IGZhbGxiYWNrO1xufTtcbnZhciBub3JtYWxpemVJdGVyYXRpb25Db3VudCA9IChjb3VudCkgPT4ge1xuXHRpZiAoY291bnQgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG5cdGlmIChjb3VudCA9PT0gLTEgfHwgY291bnQgPT09IEluZmluaXR5KSByZXR1cm4gSW5maW5pdHk7XG5cdHJldHVybiBNYXRoLm1heCgxLCBNYXRoLmZsb29yKGNvdW50KSk7XG59O1xudmFyIG5vcm1hbGl6ZUl0ZXJhdGlvbnMgPSAobikgPT4gbiA9PT0gLTEgfHwgbiA9PT0gSW5maW5pdHkgPyBJbmZpbml0eSA6IE1hdGgubWF4KDEsIG4gPz8gMSk7XG52YXIgaXNTY3JvbGxEcml2ZW4gPSAodCkgPT4gdCAhPSBudWxsICYmIHR5cGVvZiB0ID09PSBcIm9iamVjdFwiICYmIHQua2luZCA9PT0gXCJzY3JvbGxcIjtcbnZhciBpc1ZpZXdEcml2ZW4gPSAodCkgPT4gdCAhPSBudWxsICYmIHR5cGVvZiB0ID09PSBcIm9iamVjdFwiICYmIHQua2luZCA9PT0gXCJ2aWV3XCI7XG52YXIgaXNTdHlsZUhvc3QgPSAobm9kZSkgPT4ge1xuXHRpZiAoIW5vZGUgfHwgbm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoU3RyaW5nKG5vZGUubG9jYWxOYW1lIHx8IFwiXCIpLmluY2x1ZGVzKFwiLVwiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChub2RlLnNoYWRvd1Jvb3QpIHJldHVybiB0cnVlO1xuXHRpZiAobm9kZS5zdHlsZXMgIT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgcmVhZFNoZWV0UnVsZUNvdW50ID0gKHNoZWV0KSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgaXNBZG9wdGVkU2hlZXRFbXB0eSA9IChzaGVldCkgPT4ge1xuXHRpZiAoIXNoZWV0KSByZXR1cm4gdHJ1ZTtcblx0Y29uc3QgY291bnQgPSByZWFkU2hlZXRSdWxlQ291bnQoc2hlZXQpO1xuXHRpZiAoY291bnQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIGNvdW50ID09PSAwO1xufTtcbnZhciBpc0NvbG9yVG9rZW4gPSAobmFtZSkgPT4gbmFtZSA9PT0gXCItLWJhc2UtY29sb3JcIiB8fCBuYW1lLnN0YXJ0c1dpdGgoXCItLWNvbG9yLVwiKSB8fCBuYW1lLmVuZHNXaXRoKFwiLWNvbG9yXCIpIHx8IG5hbWUuZW5kc1dpdGgoXCItZmdcIikgfHwgbmFtZS5lbmRzV2l0aChcIi1iZ1wiKTtcbnZhciBpc0VsZW1lbnRWaXNpYmxlID0gKGVsKSA9PiB7XG5cdGlmICghZWwuaXNDb25uZWN0ZWQpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBlbC5nZXRDbGllbnRSZWN0cyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPiAwO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcbnZhciBpc1N0eWxlQmluZGluZyA9IChzdHlsZXMpID0+IHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkoc3R5bGVzKSAmJiB0eXBlb2Ygc3R5bGVzWzBdID09PSBcImZ1bmN0aW9uXCI7XG59O1xudmFyIGlzRWZmZWN0aXZlbHlFbXB0eVN0eWxlVGV4dCA9IChjc3NUZXh0KSA9PiB7XG5cdGNvbnN0IHNvdXJjZSA9IHR5cGVvZiBjc3NUZXh0ID09PSBcInN0cmluZ1wiID8gY3NzVGV4dC50cmltKCkgOiBcIlwiO1xuXHRpZiAoIXNvdXJjZSkgcmV0dXJuIHRydWU7XG5cdGZvciAoY29uc3QgY2h1bmsgb2Ygc291cmNlLnNwbGl0KFwiO1wiKSkge1xuXHRcdGNvbnN0IGRlY2xhcmF0aW9uID0gY2h1bmsudHJpbSgpO1xuXHRcdGlmICghZGVjbGFyYXRpb24pIGNvbnRpbnVlO1xuXHRcdGNvbnN0IGNvbG9uSW5kZXggPSBkZWNsYXJhdGlvbi5pbmRleE9mKFwiOlwiKTtcblx0XHRpZiAoY29sb25JbmRleCA8IDApIHJldHVybiBmYWxzZTtcblx0XHRpZiAoZGVjbGFyYXRpb24uc2xpY2UoY29sb25JbmRleCArIDEpLnRyaW0oKS5sZW5ndGggPiAwKSByZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xudmFyIHBydW5lRW1wdHlTdHlsZUF0dHJpYnV0ZSA9IChlbGVtZW50KSA9PiB7XG5cdGlmIChlbGVtZW50ID09IG51bGwpIHJldHVybjtcblx0Y29uc3QgcmF3ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcblx0aWYgKHJhdyA9PSBudWxsKSByZXR1cm47XG5cdGlmIChpc0VmZmVjdGl2ZWx5RW1wdHlTdHlsZVRleHQocmF3KSkge1xuXHRcdGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG5cdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcblx0fVxufTtcbnZhciBhcHBseU5vcm1hbGl6ZWRJbmxpbmVTdHlsZSA9IChlbGVtZW50LCBjc3NUZXh0KSA9PiB7XG5cdGlmIChpc0VmZmVjdGl2ZWx5RW1wdHlTdHlsZVRleHQoY3NzVGV4dCkpIHtcblx0XHRlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuXHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG59O1xudmFyIGlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRjb25zdCBDU1NTdHlsZVZhbHVlQ3RvciA9IGdsb2JhbFRoaXMuQ1NTU3R5bGVWYWx1ZTtcblx0XHRpZiAodHlwZW9mIENTU1N0eWxlVmFsdWVDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlQ3RvcikgcmV0dXJuIHRydWU7XG5cdFx0Zm9yIChsZXQgcHJvdG90eXBlID0gdmFsdWU7IHByb3RvdHlwZTsgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkpIGlmIChwcm90b3R5cGU/LmNvbnN0cnVjdG9yPy5uYW1lID09PSBcIkNTU1N0eWxlVmFsdWVcIikgcmV0dXJuIHRydWU7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciBpc1JlYWN0aXZlU3R5bGVWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbHVlKSkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdHJldHVybiBcInZhbHVlXCIgaW4gdmFsdWU7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBpc1N0YXRpY1N0eWxlSW50ZXJwb2xhdGlvbiA9ICh2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCI7XG59O1xudmFyIGVzY2FwZVJlZ0V4cCA9ICh2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xufTtcbnZhciBjb250YWluc01hcmtlciA9IChjc3NWYWx1ZSwgbWFya2VyKSA9PiB7XG5cdHJldHVybiBuZXcgUmVnRXhwKGB2YXJcXFxcKFxcXFxzKiR7ZXNjYXBlUmVnRXhwKG1hcmtlcil9XFxcXHMqXFxcXClgKS50ZXN0KGNzc1ZhbHVlKTtcbn07XG52YXIgcmVhZEF0dGFjaGVkQ1NTVW5pdCA9ICh0ZXh0KSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gQ1NTX1VOSVRfVE9LRU5fUkUuZXhlYyh0ZXh0KTtcblx0aWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IGF1dGhvcmVkID0gbWF0Y2hbMF07XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBhdXRob3JlZC50b0xvd2VyQ2FzZSgpO1xuXHRpZiAoIUNTU19ESU1FTlNJT05fVU5JVFMuaGFzKG5vcm1hbGl6ZWQpKSByZXR1cm4gbnVsbDtcblx0cmV0dXJuIHtcblx0XHRhdXRob3JlZCxcblx0XHRub3JtYWxpemVkLFxuXHRcdGxlbmd0aDogYXV0aG9yZWQubGVuZ3RoXG5cdH07XG59O1xudmFyIGdldFdpbmRvd0NvbnN0cnVjdG9yID0gKHdpbiwgbmFtZSkgPT4ge1xuXHRyZXR1cm4gd2luPy5bbmFtZV0gPz8gZ2xvYmFsVGhpcz8uW25hbWVdO1xufTtcbnZhciBjcmVhdGVUeXBlZFVuaXRWYWx1ZSA9ICh3aW4sIHVuaXQsIHZhbHVlKSA9PiB7XG5cdGNvbnN0IENTU05hbWVzcGFjZSA9IHdpbj8uQ1NTO1xuXHRjb25zdCBmYWN0b3J5TmFtZSA9IGNzc1VuaXRGYWN0b3J5TmFtZSh1bml0KTtcblx0Y29uc3QgZmFjdG9yeSA9IENTU05hbWVzcGFjZT8uW2ZhY3RvcnlOYW1lXTtcblx0aWYgKHR5cGVvZiBmYWN0b3J5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWN0b3J5LmNhbGwoQ1NTTmFtZXNwYWNlLCB2YWx1ZSk7XG5cdGNvbnN0IENTU1VuaXRWYWx1ZUN0b3IgPSBnZXRXaW5kb3dDb25zdHJ1Y3Rvcih3aW4sIFwiQ1NTVW5pdFZhbHVlXCIpO1xuXHRpZiAodHlwZW9mIENTU1VuaXRWYWx1ZUN0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgVHlwZWQgT00gZG9lcyBub3Qgc3VwcG9ydCBDU1MgdW5pdCBcIiR7dW5pdH1cImApO1xuXHRyZXR1cm4gbmV3IENTU1VuaXRWYWx1ZUN0b3IodmFsdWUsIGNzc1VuaXRDb25zdHJ1Y3Rvck5hbWUodW5pdCkpO1xufTtcbnZhciBpc1N0eWxlVmFsdWUgPSAodmFsKSA9PiBoYXNUeXBlZE9NICYmIHZhbCBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG52YXIgaXNVbml0VmFsdWUgPSAodmFsKSA9PiBoYXNUeXBlZE9NICYmIHZhbCBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZTtcbnZhciBxdWVyeUZpcnN0RGVlcCA9IChyb290LCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIXJvb3QgfHwgIXNlbGVjdG9yKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgdHJ5UXVlcnkgPSAoc2NvcGUpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgaGl0ID0gc2NvcGUucXVlcnlTZWxlY3Rvcj8uKHNlbGVjdG9yKTtcblx0XHRcdHJldHVybiBoaXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGhpdCA6IG51bGw7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGRpcmVjdCA9IHRyeVF1ZXJ5KHJvb3QpO1xuXHRpZiAoZGlyZWN0KSByZXR1cm4gZGlyZWN0O1xuXHRpZiAocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgcm9vdC5zaGFkb3dSb290KSB7XG5cdFx0Y29uc3QgaW5uZXIgPSBxdWVyeUZpcnN0RGVlcChyb290LnNoYWRvd1Jvb3QsIHNlbGVjdG9yKTtcblx0XHRpZiAoaW5uZXIpIHJldHVybiBpbm5lcjtcblx0fVxuXHRpZiAodHlwZW9mIHJvb3QucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcblx0Zm9yIChjb25zdCBlbCBvZiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKSB7XG5cdFx0aWYgKCFlbC5zaGFkb3dSb290KSBjb250aW51ZTtcblx0XHRjb25zdCBoaXQgPSBxdWVyeUZpcnN0RGVlcChlbC5zaGFkb3dSb290LCBzZWxlY3Rvcik7XG5cdFx0aWYgKGhpdCkgcmV0dXJuIGhpdDtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9sYXllcnMudHNcbnZhciBjc3NMYXllck9yZGVyID0gKC4uLmdyb3VwcykgPT4ge1xuXHRjb25zdCBzZWVuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0Y29uc3QgbmFtZXMgPSBbXTtcblx0Zm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcblx0XHRpZiAoZ3JvdXAgPT0gbnVsbCkgY29udGludWU7XG5cdFx0Y29uc3QgbGlzdCA9IHR5cGVvZiBncm91cCA9PT0gXCJzdHJpbmdcIiA/IFtncm91cF0gOiBncm91cDtcblx0XHRmb3IgKGNvbnN0IHJhdyBvZiBsaXN0KSB7XG5cdFx0XHRjb25zdCBuYW1lID0gU3RyaW5nKHJhdyB8fCBcIlwiKS50cmltKCk7XG5cdFx0XHRpZiAoIW5hbWUgfHwgc2Vlbi5oYXMobmFtZSkpIGNvbnRpbnVlO1xuXHRcdFx0c2Vlbi5hZGQobmFtZSk7XG5cdFx0XHRuYW1lcy5wdXNoKG5hbWUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmFtZXMubGVuZ3RoID8gYEBsYXllciAke25hbWVzLmpvaW4oXCIsIFwiKX07YCA6IFwiXCI7XG59O1xudmFyIHZlZWxhQ2FzY2FkZU9yZGVyID0gKCkgPT4gY3NzTGF5ZXJPcmRlcihWRUVMQV9DQVNDQURFX0xBWUVSUyk7XG52YXIgbWFrZUhvc3RMYXllck9yZGVyID0gKGV4dHJhKSA9PiBjc3NMYXllck9yZGVyKFVYX0hPU1RfTEFZRVJTLCBleHRyYSk7XG52YXIgY3NzTGF5ZXJCbG9jayA9IChsYXllck5hbWUsIGNzc1RleHQpID0+IHtcblx0Y29uc3QgYm9keSA9IChjc3NUZXh0IHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFsYXllck5hbWUgfHwgIWJvZHkpIHJldHVybiBcIlwiO1xuXHRyZXR1cm4gYEBsYXllciAke2xheWVyTmFtZX0ge1xcbiR7Ym9keX1cXG59YDtcbn07XG52YXIgd3JhcENzc0xheWVyID0gKGNzc1RleHQsIGxheWVyTmFtZSkgPT4gbGF5ZXJOYW1lID8gYEBsYXllciAke2xheWVyTmFtZX0geyAke2Nzc1RleHR9IH1gIDogY3NzVGV4dDtcbnZhciBub3JtYWxpemVDc3NGb3JMYXllciA9IChsYXllck5hbWUsIGNzc1RleHQpID0+IHtcblx0Y29uc3QgdHJpbW1lZCA9IChjc3NUZXh0IHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCF0cmltbWVkKSByZXR1cm4gXCJcIjtcblx0aWYgKC9eQGxheWVyXFxiLy50ZXN0KHRyaW1tZWQpKSByZXR1cm4gdHJpbW1lZDtcblx0cmV0dXJuIGNzc0xheWVyQmxvY2sobGF5ZXJOYW1lLCB0cmltbWVkKTtcbn07XG52YXIgdW53cmFwT3V0ZXJMYXllckJsb2NrID0gKGNzcywgZXhwZWN0ZWROYW1lKSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gY3NzLm1hdGNoKExBWUVSX09QRU4pO1xuXHRpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblx0aWYgKGV4cGVjdGVkTmFtZSAmJiBtYXRjaFsxXSAhPT0gZXhwZWN0ZWROYW1lKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgb3BlbiA9IG1hdGNoWzBdLmxhc3RJbmRleE9mKFwie1wiKTtcblx0bGV0IGRlcHRoID0gMDtcblx0Zm9yIChsZXQgaSA9IG9wZW47IGkgPCBjc3MubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjaCA9IGNzc1tpXTtcblx0XHRpZiAoY2ggPT09IFwie1wiKSBkZXB0aCsrO1xuXHRcdGVsc2UgaWYgKGNoID09PSBcIn1cIikge1xuXHRcdFx0ZGVwdGgtLTtcblx0XHRcdGlmIChkZXB0aCA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3NzLnNsaWNlKGkgKyAxKS50cmltKCkpIHJldHVybiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gY3NzLnNsaWNlKG9wZW4gKyAxLCBpKS50cmltKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciB1bndyYXBDc3NMYXllciA9IChjc3NUZXh0LCBsYXllck5hbWUpID0+IHtcblx0Y29uc3Qgc3RyaXBwZWQgPSBzdHJpcENzc1ByZWFtYmxlKGNzc1RleHQpO1xuXHRyZXR1cm4gdW53cmFwT3V0ZXJMYXllckJsb2NrKHN0cmlwcGVkLCBsYXllck5hbWUpID8/IHN0cmlwcGVkO1xufTtcbnZhciBjc3NJbXBvcnRXaXRoTGF5ZXIgPSAodXJsLCBsYXllciA9IFwiXCIpID0+IGBAaW1wb3J0IHVybChcIiR7dXJsfVwiKSAke2xheWVyICYmIHR5cGVvZiBsYXllciA9PT0gXCJzdHJpbmdcIiA/IGBsYXllcigke2xheWVyfSlgIDogXCJcIn07YDtcbnZhciBVWF9QUkVMT0FEX0hPU1RfQ1NTID0gY3NzTGF5ZXJCbG9jayhcInV4LXByZWxvYWRcIiwgXCI6aG9zdCB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cIik7XG52YXIgZ2V0T3JDcmVhdGVMYXllclJ1bGUgPSAoc2hlZXQsIGxheWVyTmFtZSkgPT4ge1xuXHRpZiAoIXNoZWV0IHx8ICFsYXllck5hbWUpIHJldHVybiB2b2lkIDA7XG5cdGNvbnN0IHJ1bGVzID0gQXJyYXkuZnJvbShzaGVldC5jc3NSdWxlcyB8fCBbXSk7XG5cdGNvbnN0IGV4aXN0aW5nID0gcnVsZXMuZmluZCgocnVsZSkgPT4gaXNMYXllckJsb2NrUnVsZShydWxlKSAmJiBydWxlLm5hbWUgPT09IGxheWVyTmFtZSk7XG5cdGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJ1bGVJbmRleCA9IHNoZWV0Lmluc2VydFJ1bGUoY3NzRW1wdHlMYXllclJ1bGUobGF5ZXJOYW1lKSwgcnVsZXMubGVuZ3RoKTtcblx0XHRjb25zdCBjcmVhdGVkID0gc2hlZXQuY3NzUnVsZXM/LltydWxlSW5kZXhdO1xuXHRcdHJldHVybiBpc0xheWVyQmxvY2tSdWxlKGNyZWF0ZWQpID8gY3JlYXRlZCA6IHZvaWQgMDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvcHJvcGVydHkudHNcbnZhciB0b2tlbml6ZU51bWVyaWNDU1MkMSA9IChzb3VyY2UpID0+IHtcblx0Y29uc3QgdG9rZW5zID0gW107XG5cdGxldCBjdXJzb3IgPSAwO1xuXHR3aGlsZSAoY3Vyc29yIDwgc291cmNlLmxlbmd0aCkge1xuXHRcdGNvbnN0IHJlc3QgPSBzb3VyY2Uuc2xpY2UoY3Vyc29yKTtcblx0XHRjb25zdCB3aGl0ZXNwYWNlID0gL15cXHMrLy5leGVjKHJlc3QpO1xuXHRcdGlmICh3aGl0ZXNwYWNlKSB7XG5cdFx0XHRjdXJzb3IgKz0gd2hpdGVzcGFjZVswXS5sZW5ndGg7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgbnVtYmVyID0gL14oPzpcXGQqXFwuXFxkK3xcXGQrXFwuP1xcZCopKD86W2VFXVsrLV0/XFxkKyk/Ly5leGVjKHJlc3QpO1xuXHRcdGlmIChudW1iZXIpIHtcblx0XHRcdGN1cnNvciArPSBudW1iZXJbMF0ubGVuZ3RoO1xuXHRcdFx0Y29uc3QgdW5pdE1hdGNoID0gQ1NTX1VOSVRfVE9LRU5fUkUuZXhlYyhzb3VyY2Uuc2xpY2UoY3Vyc29yKSk7XG5cdFx0XHRjb25zdCB1bml0ID0gdW5pdE1hdGNoPy5bMF0gPz8gbnVsbDtcblx0XHRcdGlmICh1bml0TWF0Y2gpIGN1cnNvciArPSB1bml0TWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRraW5kOiBcIm51bWJlclwiLFxuXHRcdFx0XHR2YWx1ZTogTnVtYmVyKG51bWJlclswXSksXG5cdFx0XHRcdHVuaXQ6IHVuaXQgPT0gbnVsbCA/IG51bGwgOiB1bml0LnRvTG93ZXJDYXNlKClcblx0XHRcdH0pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGlkZW50aWZpZXIgPSAvXlthLXpBLVpfXVthLXpBLVowLTlfLV0qLy5leGVjKHJlc3QpO1xuXHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdGtpbmQ6IFwiaWRlbnRpZmllclwiLFxuXHRcdFx0XHR2YWx1ZTogaWRlbnRpZmllclswXS50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KTtcblx0XHRcdGN1cnNvciArPSBpZGVudGlmaWVyWzBdLmxlbmd0aDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBzeW1ib2wgPSByZXN0WzBdO1xuXHRcdGlmIChbXG5cdFx0XHRcIitcIixcblx0XHRcdFwiLVwiLFxuXHRcdFx0XCIqXCIsXG5cdFx0XHRcIi9cIixcblx0XHRcdFwiKFwiLFxuXHRcdFx0XCIpXCIsXG5cdFx0XHRcIixcIlxuXHRcdF0uaW5jbHVkZXMoc3ltYm9sKSkge1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRraW5kOiBcInN5bWJvbFwiLFxuXHRcdFx0XHR2YWx1ZTogc3ltYm9sXG5cdFx0XHR9KTtcblx0XHRcdGN1cnNvcisrO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5zdXBwb3J0ZWQgdG9rZW4gbmVhciBcIiR7cmVzdH1cImApO1xuXHR9XG5cdHJldHVybiB0b2tlbnM7XG59O1xudmFyIE51bWVyaWNUeXBlZE9NUGFyc2VyJDEgPSBjbGFzcyB7XG5cdHRva2Vucztcblx0d2luO1xuXHRpbmRleCA9IDA7XG5cdGNvbnN0cnVjdG9yKHRva2Vucywgd2luKSB7XG5cdFx0dGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy53aW4gPSB3aW47XG5cdH1cblx0cGFyc2UoKSB7XG5cdFx0Y29uc3Qgcm9vdCA9IHRoaXMucGFyc2VTdW0oKTtcblx0XHRpZiAodGhpcy5pbmRleCAhPT0gdGhpcy50b2tlbnMubGVuZ3RoKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJVbmV4cGVjdGVkIHRyYWlsaW5nIGV4cHJlc3Npb25cIik7XG5cdFx0cmV0dXJuIHJvb3Q7XG5cdH1cblx0Y3VycmVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cdH1cblx0Y29uc3VtZSgpIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXHRcdGlmICghdG9rZW4pIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb25cIik7XG5cdFx0dGhpcy5pbmRleCsrO1xuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXHRjb25zdW1lU3ltYm9sKHN5bWJvbCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0aWYgKHRva2VuLmtpbmQgIT09IFwic3ltYm9sXCIgfHwgdG9rZW4udmFsdWUgIT09IHN5bWJvbCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBFeHBlY3RlZCBcIiR7c3ltYm9sfVwiYCk7XG5cdH1cblx0bWF0Y2hlc1N5bWJvbChzeW1ib2wpIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXHRcdHJldHVybiB0b2tlbj8ua2luZCA9PT0gXCJzeW1ib2xcIiAmJiB0b2tlbi52YWx1ZSA9PT0gc3ltYm9sO1xuXHR9XG5cdGNyZWF0ZU1hdGgobmFtZSwgLi4udmFsdWVzKSB7XG5cdFx0Y29uc3QgQ29uc3RydWN0b3IgPSBnZXRXaW5kb3dDb25zdHJ1Y3Rvcih0aGlzLndpbiwgbmFtZSk7XG5cdFx0aWYgKHR5cGVvZiBDb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGAke25hbWV9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKC4uLnZhbHVlcyk7XG5cdH1cblx0cGFyc2VTdW0oKSB7XG5cdFx0bGV0IHZhbHVlID0gdGhpcy5wYXJzZVByb2R1Y3QoKTtcblx0XHR3aGlsZSAodGhpcy5tYXRjaGVzU3ltYm9sKFwiK1wiKSB8fCB0aGlzLm1hdGNoZXNTeW1ib2woXCItXCIpKSB7XG5cdFx0XHRjb25zdCBvcGVyYXRvciA9IHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0Y29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlUHJvZHVjdCgpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLmtpbmQgIT09IFwic3ltYm9sXCIpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkV4cGVjdGVkIHN1bSBvcGVyYXRvclwiKTtcblx0XHRcdGlmIChvcGVyYXRvci52YWx1ZSA9PT0gXCIrXCIpIHZhbHVlID0gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aFN1bVwiLCB2YWx1ZSwgcmlnaHQpO1xuXHRcdFx0ZWxzZSB2YWx1ZSA9IHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhTdW1cIiwgdmFsdWUsIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhOZWdhdGVcIiwgcmlnaHQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdHBhcnNlUHJvZHVjdCgpIHtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLnBhcnNlVW5hcnkoKTtcblx0XHR3aGlsZSAodGhpcy5tYXRjaGVzU3ltYm9sKFwiKlwiKSB8fCB0aGlzLm1hdGNoZXNTeW1ib2woXCIvXCIpKSB7XG5cdFx0XHRjb25zdCBvcGVyYXRvciA9IHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0Y29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlVW5hcnkoKTtcblx0XHRcdGlmIChvcGVyYXRvci5raW5kICE9PSBcInN5bWJvbFwiKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJFeHBlY3RlZCBwcm9kdWN0IG9wZXJhdG9yXCIpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLnZhbHVlID09PSBcIipcIikgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoUHJvZHVjdFwiLCB2YWx1ZSwgcmlnaHQpO1xuXHRcdFx0ZWxzZSB2YWx1ZSA9IHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhQcm9kdWN0XCIsIHZhbHVlLCB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoSW52ZXJ0XCIsIHJpZ2h0KSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRwYXJzZVVuYXJ5KCkge1xuXHRcdGlmICh0aGlzLm1hdGNoZXNTeW1ib2woXCIrXCIpKSB7XG5cdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlVW5hcnkoKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMubWF0Y2hlc1N5bWJvbChcIi1cIikpIHtcblx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhOZWdhdGVcIiwgdGhpcy5wYXJzZVVuYXJ5KCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJzZVByaW1hcnkoKTtcblx0fVxuXHRwYXJzZVByaW1hcnkoKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcblx0XHRpZiAodG9rZW4ua2luZCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHRoaXMud2luLCB0b2tlbi51bml0ID8/IFwibnVtYmVyXCIsIHRva2VuLnZhbHVlKTtcblx0XHRpZiAodG9rZW4ua2luZCA9PT0gXCJzeW1ib2xcIiAmJiB0b2tlbi52YWx1ZSA9PT0gXCIoXCIpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZVN1bSgpO1xuXHRcdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHRva2VuLmtpbmQgPT09IFwiaWRlbnRpZmllclwiKSByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKHRva2VuLnZhbHVlKTtcblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJFeHBlY3RlZCBhIG51bWVyaWMgdmFsdWVcIik7XG5cdH1cblx0cGFyc2VGdW5jdGlvbihuYW1lKSB7XG5cdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKFwiKTtcblx0XHRpZiAobmFtZSA9PT0gXCJjYWxjXCIpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZVN1bSgpO1xuXHRcdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0Y29uc3QgdmFsdWVzID0gW107XG5cdFx0aWYgKCF0aGlzLm1hdGNoZXNTeW1ib2woXCIpXCIpKSB7XG5cdFx0XHR2YWx1ZXMucHVzaCh0aGlzLnBhcnNlU3VtKCkpO1xuXHRcdFx0d2hpbGUgKHRoaXMubWF0Y2hlc1N5bWJvbChcIixcIikpIHtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRcdHZhbHVlcy5wdXNoKHRoaXMucGFyc2VTdW0oKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY29uc3VtZVN5bWJvbChcIilcIik7XG5cdFx0aWYgKG5hbWUgPT09IFwibWluXCIpIHtcblx0XHRcdGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJtaW4oKSByZXF1aXJlcyBhIHZhbHVlXCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhNaW5cIiwgLi4udmFsdWVzKTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT09IFwibWF4XCIpIHtcblx0XHRcdGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJtYXgoKSByZXF1aXJlcyBhIHZhbHVlXCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhNYXhcIiwgLi4udmFsdWVzKTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT09IFwiY2xhbXBcIikge1xuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBTeW50YXhFcnJvcihcImNsYW1wKCkgcmVxdWlyZXMgdGhyZWUgdmFsdWVzXCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhDbGFtcFwiLCB2YWx1ZXNbMF0sIHZhbHVlc1sxXSwgdmFsdWVzWzJdKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbnN1cHBvcnRlZCBmdW5jdGlvbiBcIiR7bmFtZX1cImApO1xuXHR9XG59O1xudmFyIHBhcnNlVG9UeXBlZE9NID0gKGNzc1ZhbHVlLCB3aW4pID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB0b2tlbnMgPSB0b2tlbml6ZU51bWVyaWNDU1MkMShjc3NWYWx1ZSk7XG5cdFx0cmV0dXJuIG5ldyBOdW1lcmljVHlwZWRPTVBhcnNlciQxKHRva2Vucywgd2luKS5wYXJzZSgpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBzZXRQcm9wZXJ0eUlmTm90RXF1YWwgPSAoc3R5bGVSZWYsIGtlYmFiLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0aWYgKCFzdHlsZVJlZiB8fCAha2ViYWIpIHJldHVybjtcblx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRpZiAoc3R5bGVSZWYuZ2V0UHJvcGVydHlWYWx1ZShrZWJhYikgIT09IFwiXCIpIHN0eWxlUmVmLnJlbW92ZVByb3BlcnR5KGtlYmFiKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN0eWxlUmVmLmdldFByb3BlcnR5VmFsdWUoa2ViYWIpICE9PSB2YWx1ZSkgc3R5bGVSZWYuc2V0UHJvcGVydHkoa2ViYWIsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eVR5cGVkID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRjb25zdCBzdHlsZU1hcFJlZiA9IGVsZW1lbnQuYXR0cmlidXRlU3R5bGVNYXAgPz8gZWxlbWVudC5zdHlsZU1hcDtcblx0aWYgKCFoYXNUeXBlZE9NIHx8ICFzdHlsZU1hcFJlZikgcmV0dXJuIHNldFN0eWxlUHJvcGVydHlGYWxsYmFjayhlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG5cdGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudD8uZGVmYXVsdFZpZXcgPz8gZ2xvYmFsVGhpcztcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiBpc1JlYWN0aXZlU3R5bGVWYWx1ZSh2YWx1ZSkgPyB2YWx1ZS52YWx1ZSA6IHZhbHVlO1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHRzdHlsZU1hcFJlZi5kZWxldGU/LihrZWJhYik7XG5cdFx0aWYgKHN0eWxlUmVmKSBzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBudWxsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAoaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRjb25zdCBvbGQgPSBzdHlsZU1hcFJlZi5nZXQoa2ViYWIpO1xuXHRcdGlmIChpc1VuaXRWYWx1ZSh2YWwpICYmIGlzVW5pdFZhbHVlKG9sZCkpIHtcblx0XHRcdGlmIChvbGQudmFsdWUgPT09IHZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gdmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdH0gZWxzZSBpZiAob2xkID09PSB2YWwpIHJldHVybiBlbGVtZW50O1xuXHRcdHN0eWxlTWFwUmVmLnNldChrZWJhYiwgdmFsKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuXHRcdGlmIChDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKHZhbCk7XG5cdFx0XHRjb25zdCBvbGQgPSBzdHlsZU1hcFJlZi5nZXQoa2ViYWIpO1xuXHRcdFx0aWYgKGlzVW5pdFZhbHVlKG9sZCkgJiYgb2xkLnZhbHVlID09PSBuZXdWYWwudmFsdWUgJiYgb2xkLnVuaXQgPT09IG5ld1ZhbC51bml0KSByZXR1cm4gZWxlbWVudDtcblx0XHRcdHN0eWxlTWFwUmVmLnNldChrZWJhYiwgbmV3VmFsKTtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcblx0XHRpZiAoL1xcYihjYWxjfG1pbnxtYXh8Y2xhbXApXFxzKlxcKC8udGVzdCh2YWwpKSB7XG5cdFx0XHRjb25zdCBwYXJzZWQgPSBwYXJzZVRvVHlwZWRPTSh2YWwsIHdpbik7XG5cdFx0XHRpZiAocGFyc2VkKSB0cnkge1xuXHRcdFx0XHRzdHlsZU1hcFJlZi5zZXQoa2ViYWIsIHBhcnNlZCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0XHRjb25zdCBtYXliZU51bSA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCk7XG5cdFx0aWYgKHR5cGVvZiBtYXliZU51bSA9PT0gXCJudW1iZXJcIiAmJiBDU1M/Lm51bWJlciAmJiAha2ViYWIuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG5cdFx0XHRjb25zdCBuZXdWYWwgPSBDU1MubnVtYmVyKG1heWJlTnVtKTtcblx0XHRcdGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG5cdFx0XHRpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHJldHVybiBlbGVtZW50O1xuXHRcdFx0c3R5bGVNYXBSZWYuc2V0KGtlYmFiLCBuZXdWYWwpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXHRcdHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIHZhbCwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXHRjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuXHRpZiAoIXN0eWxlUmVmKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHZhbCA9IGhhc1ZhbHVlKHZhbHVlKSAmJiBpc1JlYWN0aXZlU3R5bGVWYWx1ZSh2YWx1ZSkgPyB2YWx1ZS52YWx1ZSA6IHZhbHVlO1xuXHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbCkpIHZhbCA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCkgPz8gdmFsO1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBudWxsLCBpbXBvcnRhbmNlKTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXHRpZiAoaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbCkpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0aWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblx0c2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcblx0cmV0dXJuIGhhc1R5cGVkT00gPyBzZXRTdHlsZVByb3BlcnR5VHlwZWQoZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpIDogc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgaGFuZGxlU3R5bGVDaGFuZ2UgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBzdHlsZVJlZiA9IGVsPy5zdHlsZTtcblx0aWYgKCFwcm9wIHx8IHR5cGVvZiBwcm9wICE9PSBcInN0cmluZ1wiIHx8ICFlbCB8fCAhc3R5bGVSZWYpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcih2YWwsICgpID0+IHtcblx0XHRpZiAoaXNWYWwodmFsKSB8fCBoYXNWYWx1ZSh2YWwpIHx8IGlzVmFsdWVVbml0KHZhbCkpIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3AsIHZhbCk7XG5cdFx0ZWxzZSBpZiAodmFsID09IG51bGwpIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KGNhbWVsVG9LZWJhYihwcm9wKSk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvc2hlZXRzLnRzXG52YXIgc2V0U3R5bGVJblJ1bGUgPSAoc2VsZWN0b3IsIG5hbWUsIHZhbHVlKSA9PiB7XG5cdHJldHVybiBzZXRTdHlsZVByb3BlcnR5KGdldFN0eWxlUnVsZShzZWxlY3RvciksIG5hbWUsIHZhbHVlKTtcbn07XG52YXIgc2V0U3R5bGVSdWxlID0gKHNlbGVjdG9yLCBzaGVldCkgPT4ge1xuXHRjb25zdCBydWxlID0gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yKTtcblx0T2JqZWN0LmVudHJpZXMoc2hlZXQpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4gc2V0U3R5bGVQcm9wZXJ0eShydWxlLCBwcm9wTmFtZSwgcHJvcFZhbHVlKSk7XG5cdHJldHVybiBydWxlO1xufTtcbnZhciBsb2FkU3R5bGVTaGVldCA9IChpbmxpbmUsIGJhc2UsIGxheWVyID0gXCJcIiwgaW50ZWdyaXR5KSA9PiB7XG5cdGNvbnN0IGxvYWQgPSBmZXRjaEFuZENhY2hlKGlubGluZSk7XG5cdGNvbnN0IHVybCA9IHR5cGVvZiBpbmxpbmUgPT0gXCJzdHJpbmdcIiA/IFVSTC5jYW5QYXJzZShpbmxpbmUpID8gaW5saW5lIDogbG9hZCA6IGxvYWQ7XG5cdGlmIChiYXNlPy5bMF0pIGJhc2VbMF0uZmV0Y2hQcmlvcml0eSA9IFwiaGlnaFwiO1xuXHRpZiAoYmFzZSAmJiB1cmwgJiYgdHlwZW9mIHVybCA9PSBcInN0cmluZ1wiKSBzZXRTdHlsZVVSTChiYXNlLCB1cmwsIGxheWVyKTtcblx0aWYgKGJhc2U/LlswXSAmJiAoIVVSTC5jYW5QYXJzZShpbmxpbmUpIHx8IGludGVncml0eSkgJiYgYmFzZT8uWzBdIGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50KSB7fVxuXHRyZXR1cm4gcHJvbWlzZU9yRGlyZWN0KGxvYWQsIChyZXMpID0+IHtcblx0XHRpZiAoYmFzZT8uWzBdICYmIHJlcykge1xuXHRcdFx0c2V0U3R5bGVVUkwoYmFzZSwgcmVzLCBsYXllcik7XG5cdFx0XHRiYXNlPy5bMF0uc2V0QXR0cmlidXRlKFwibG9hZGVkXCIsIFwiXCIpO1xuXHRcdH1cblx0fSk/LmNhdGNoPy4oKGVycm9yKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFwiRmFpbGVkIHRvIGxvYWQgc3R5bGUgc2hlZXQ6XCIsIGVycm9yKTtcblx0fSk7XG59O1xudmFyIGxvYWRCbG9iU3R5bGUgPSAoaW5saW5lKSA9PiB7XG5cdGNvbnN0IHN0eWxlID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKSA6IG51bGw7XG5cdGlmIChzdHlsZSkgc3R5bGUuZmV0Y2hQcmlvcml0eSA9IFwiaGlnaFwiO1xuXHRpZiAoc3R5bGUpIHtcblx0XHRPYmplY3QuYXNzaWduKHN0eWxlLCB7XG5cdFx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdFx0dHlwZTogXCJ0ZXh0L2Nzc1wiLFxuXHRcdFx0Y3Jvc3NPcmlnaW46IFwic2FtZS1vcmlnaW5cIlxuXHRcdH0pO1xuXHRcdHN0eWxlLmRhdGFzZXQub3duZXIgPSBcIkRPTVwiO1xuXHRcdGxvYWRTdHlsZVNoZWV0KGlubGluZSwgW3N0eWxlLCBcImhyZWZcIl0pO1xuXHRcdHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlKTtcblx0XHRyZXR1cm4gc3R5bGU7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGxvYWRJbmxpbmVTdHlsZSA9IChpbmxpbmUsIHJvb3RFbGVtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudD8uaGVhZCA6IG51bGwsIGxheWVyID0gXCJcIikgPT4ge1xuXHRjb25zdCBQTEFDRSA9IHJvb3RFbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oXCJoZWFkXCIpID8/IHJvb3RFbGVtZW50O1xuXHRpZiAodHlwZW9mIEhUTUxIZWFkRWxlbWVudCAhPSBcInVuZGVmaW5lZFwiICYmIFBMQUNFIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50KSByZXR1cm4gbG9hZEJsb2JTdHlsZShpbmxpbmUpO1xuXHRjb25zdCBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcblx0aWYgKHN0eWxlKSB7XG5cdFx0c3R5bGUuZGF0YXNldC5vd25lciA9IFwiRE9NXCI7XG5cdFx0bG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaW5uZXJIVE1MXCJdLCBsYXllcik7XG5cdFx0UExBQ0U/LnByZXBlbmQ/LihzdHlsZSk7XG5cdFx0cmV0dXJuIHN0eWxlO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBzZXRQcm9wZXJ0eSA9ICh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlID0gXCJcIikgPT4ge1xuXHRyZXR1cm4gc2V0U3R5bGVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbn07XG52YXIgcHJlbG9hZFN0eWxlID0gKHN0eWxlcykgPT4ge1xuXHRyZXR1cm4gbG9hZEFzQWRvcHRlZChzdHlsZXMsIFwiXCIpO1xufTtcbnZhciByZW1lbWJlckFkb3B0ZWRUZXh0ID0gKHNoZWV0LCBjc3NUZXh0KSA9PiB7XG5cdGFkb3B0ZWRBcHBsaWVkVGV4dC5zZXQoc2hlZXQsIGNzc1RleHQpO1xuXHRhZG9wdGVkRmlsbGVkLmFkZChzaGVldCk7XG59O1xudmFyIGNzc1RleHRGb3JBZG9wdGVkU2hlZXQgPSAoc2hlZXQpID0+IHtcblx0aWYgKCFzaGVldCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHN0b3JlZCA9IGFkb3B0ZWRBcHBsaWVkVGV4dC5nZXQoc2hlZXQpO1xuXHRpZiAoc3RvcmVkKSByZXR1cm4gc3RvcmVkO1xuXHRmb3IgKGNvbnN0IFtrZXksIG1hcHBlZF0gb2YgYWRvcHRlZE1hcCkgaWYgKG1hcHBlZCA9PT0gc2hlZXQgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGtleTtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGVuc3VyZUFkb3B0ZWRTaGVldENvbnRlbnQgPSAoc2hlZXQsIGNzc1RleHQpID0+IHtcblx0aWYgKCFzaGVldCkgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCB0ZXh0ID0gY3NzVGV4dCB8fCBjc3NUZXh0Rm9yQWRvcHRlZFNoZWV0KHNoZWV0KTtcblx0Y29uc3QgY291bnQgPSByZWFkU2hlZXRSdWxlQ291bnQoc2hlZXQpO1xuXHRpZiAoY291bnQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGNvdW50ID4gMCkge1xuXHRcdGFkb3B0ZWRGaWxsZWQuYWRkKHNoZWV0KTtcblx0XHRpZiAodGV4dCAmJiAhYWRvcHRlZEFwcGxpZWRUZXh0LmhhcyhzaGVldCkpIGFkb3B0ZWRBcHBsaWVkVGV4dC5zZXQoc2hlZXQsIHRleHQpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmICghdGV4dCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoYXBwbHlBZG9wdGVkU3R5bGVUZXh0KHNoZWV0LCB0ZXh0KSkge1xuXHRcdHJlbWVtYmVyQWRvcHRlZFRleHQoc2hlZXQsIHRleHQpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgYXBwbHlBZG9wdGVkU3R5bGVUZXh0ID0gKHNoZWV0LCBjc3NUZXh0KSA9PiB7XG5cdGlmICghc2hlZXQgfHwgIWNzc1RleHQpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRzaGVldC5yZXBsYWNlU3luYyhjc3NUZXh0KTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zdCBtZXNzYWdlID0gU3RyaW5nKGVycm9yPy5tZXNzYWdlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCEobWVzc2FnZS5pbmNsdWRlcyhcIkBpbXBvcnQgcnVsZXMgYXJlIG5vdCBhbGxvd2VkXCIpIHx8IG1lc3NhZ2UuaW5jbHVkZXMoXCJAaW1wb3J0XCIpICYmIG1lc3NhZ2UuaW5jbHVkZXMoXCJub3QgYWxsb3dlZFwiKSkpIGNvbnNvbGUud2FybihcIltET01dIEZhaWxlZCB0byBhcHBseSBhZG9wdGVkIHN0eWxlc2hlZXQ6XCIsIGVycm9yKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgc2hlZXRGb3JCbG9iID0gKGJsb2IpID0+IHtcblx0bGV0IHNoZWV0ID0gYWRvcHRlZEJsb2JNYXAuZ2V0KGJsb2IpO1xuXHRpZiAoIXNoZWV0KSB7XG5cdFx0c2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdGFkb3B0ZWRCbG9iTWFwLnNldChibG9iLCBzaGVldCk7XG5cdH1cblx0cmV0dXJuIHNoZWV0O1xufTtcbnZhciBsb2FkQXNBZG9wdGVkID0gKHN0eWxlcywgbGF5ZXJOYW1lID0gbnVsbCkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBsb2FkQXNBZG9wdGVkVW5zYWZlKHN0eWxlcywgbGF5ZXJOYW1lKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLndhcm4oXCJbRE9NXSBsb2FkQXNBZG9wdGVkIGZhaWxlZFwiLCBlcnJvcik7XG5cdFx0aWYgKHR5cGVvZiBzdHlsZXMgPT09IFwic3RyaW5nXCIpIGxvYWRJbmxpbmVTdHlsZShzdHlsZXMsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xudmFyIGxvYWRBc0Fkb3B0ZWRVbnNhZmUgPSAoc3R5bGVzLCBsYXllck5hbWUgPSBudWxsKSA9PiB7XG5cdGlmICghc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHlsZXMgPT09IFwic3RyaW5nXCIpIGxvYWRJbmxpbmVTdHlsZShzdHlsZXMsIHZvaWQgMCwgbGF5ZXJOYW1lIHx8IFwiXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmICh0eXBlb2Ygc3R5bGVzID09PSBcInN0cmluZ1wiICYmIGNzc1RleHRSZXF1aXJlc0lubGluZVN0eWxlRWxlbWVudChzdHlsZXMpKSB7XG5cdFx0bG9hZElubGluZVN0eWxlKHN0eWxlcywgdm9pZCAwLCBsYXllck5hbWUgfHwgXCJcIik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiBhZG9wdGVkTWFwPy5oYXM/LihzdHlsZXMpKSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gYWRvcHRlZE1hcC5nZXQoc3R5bGVzKTtcblx0XHRjb25zdCBhcHBsaWVkID0gYWRvcHRlZEFwcGxpZWRUZXh0LmdldChjYWNoZWQpIHx8IHdyYXBDc3NMYXllcihzdHlsZXMsIGxheWVyTmFtZSk7XG5cdFx0ZW5zdXJlQWRvcHRlZFNoZWV0Q29udGVudChjYWNoZWQsIGFwcGxpZWQpO1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzICYmICFkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMuaW5jbHVkZXMoY2FjaGVkKSkgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goY2FjaGVkKTtcblx0XHRyZXR1cm4gY2FjaGVkO1xuXHR9XG5cdGlmICgoc3R5bGVzIGluc3RhbmNlb2YgQmxvYiB8fCBzdHlsZXMgaW5zdGFuY2VvZiBGaWxlKSAmJiBhZG9wdGVkQmxvYk1hcD8uaGFzPy4oc3R5bGVzKSkge1xuXHRcdGNvbnN0IGNhY2hlZCA9IGFkb3B0ZWRCbG9iTWFwLmdldChzdHlsZXMpO1xuXHRcdGVuc3VyZUFkb3B0ZWRTaGVldENvbnRlbnQoY2FjaGVkKTtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyAmJiAhZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKGNhY2hlZCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGNhY2hlZCk7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXHRpZiAoIXN0eWxlcykgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHNoZWV0ID0gdHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiID8gZ2V0T3JJbnNlcnRDb21wdXRlZChhZG9wdGVkTWFwLCBzdHlsZXMsICgpID0+IG5ldyBDU1NTdHlsZVNoZWV0KCkpIDogc2hlZXRGb3JCbG9iKHN0eWxlcyk7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIWRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoZWV0KTtcblx0aWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiAhdXJsQ2FuUGFyc2Uoc3R5bGVzKSkge1xuXHRcdGNvbnN0IGxheWVyV3JhcHBlZCA9IHdyYXBDc3NMYXllcihzdHlsZXMsIGxheWVyTmFtZSk7XG5cdFx0YWRvcHRlZE1hcC5zZXQoc3R5bGVzLCBzaGVldCk7XG5cdFx0aWYgKCFhcHBseUFkb3B0ZWRTdHlsZVRleHQoc2hlZXQsIGxheWVyV3JhcHBlZCkpIHtcblx0XHRcdHJlbW92ZUFkb3B0ZWQoc2hlZXQpO1xuXHRcdFx0YWRvcHRlZE1hcC5kZWxldGUoc3R5bGVzKTtcblx0XHRcdGxvYWRJbmxpbmVTdHlsZShzdHlsZXMpO1xuXHRcdH0gZWxzZSByZW1lbWJlckFkb3B0ZWRUZXh0KHNoZWV0LCBsYXllcldyYXBwZWQpO1xuXHRcdHJldHVybiBzaGVldDtcblx0fSBlbHNlIHByb21pc2VPckRpcmVjdChmZXRjaEFzSW5saW5lKHN0eWxlcyksIChjYWNoZWQpID0+IHtcblx0XHRhZG9wdGVkTWFwLnNldChjYWNoZWQsIHNoZWV0KTtcblx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRpZiAoY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50KGNhY2hlZCkpIHtcblx0XHRcdFx0cmVtb3ZlQWRvcHRlZChzaGVldCk7XG5cdFx0XHRcdGFkb3B0ZWRNYXAuZGVsZXRlKGNhY2hlZCk7XG5cdFx0XHRcdGFkb3B0ZWRCbG9iTWFwLmRlbGV0ZShzdHlsZXMpO1xuXHRcdFx0XHRsb2FkSW5saW5lU3R5bGUoY2FjaGVkLCB2b2lkIDAsIGxheWVyTmFtZSB8fCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIHNoZWV0O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGF5ZXJXcmFwcGVkID0gd3JhcENzc0xheWVyKGNhY2hlZCwgbGF5ZXJOYW1lKTtcblx0XHRcdGlmICghYXBwbHlBZG9wdGVkU3R5bGVUZXh0KHNoZWV0LCBsYXllcldyYXBwZWQpKSB7XG5cdFx0XHRcdHJlbW92ZUFkb3B0ZWQoc2hlZXQpO1xuXHRcdFx0XHRhZG9wdGVkTWFwLmRlbGV0ZShjYWNoZWQpO1xuXHRcdFx0XHRhZG9wdGVkQmxvYk1hcC5kZWxldGUoc3R5bGVzKTtcblx0XHRcdFx0bG9hZElubGluZVN0eWxlKGNhY2hlZCwgdm9pZCAwLCBsYXllck5hbWUgfHwgXCJcIik7XG5cdFx0XHR9IGVsc2UgcmVtZW1iZXJBZG9wdGVkVGV4dChzaGVldCwgbGF5ZXJXcmFwcGVkKTtcblx0XHRcdHJldHVybiBzaGVldDtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gc2hlZXQ7XG59O1xudmFyIGNvbGxlY3RTdHlsZUhvc3RzID0gKG5vZGUsIGludG8pID0+IHtcblx0aWYgKCFub2RlIHx8IG5vZGUubm9kZVR5cGUgPT09IDMpIHJldHVybjtcblx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDExKSB7XG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkTm9kZXMgfHwgW10pIGNvbGxlY3RTdHlsZUhvc3RzKGNoaWxkLCBpbnRvKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGlzU3R5bGVIb3N0KG5vZGUpKSBpbnRvLmFkZChub2RlKTtcblx0aWYgKHR5cGVvZiBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGZvciAoY29uc3QgZWwgb2Ygbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSkgaWYgKGlzU3R5bGVIb3N0KGVsKSkgaW50by5hZGQoZWwpO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIG5vdGlmeVN0eWxlVHJlZUhvc3RzID0gKGhvc3RzLCByZWFzb24gPSBcInRyZWVcIikgPT4ge1xuXHRmb3IgKGNvbnN0IGVsIG9mIGhvc3RzKSB7XG5cdFx0aWYgKCFpc1N0eWxlSG9zdChlbCkpIGNvbnRpbnVlO1xuXHRcdGZvciAoY29uc3QgZm4gb2Ygc3R5bGVUcmVlSG9va3MpIGZuKGVsLCByZWFzb24pO1xuXHR9XG59O1xudmFyIHJlZ2lzdGVyU3R5bGVUcmVlSG9vayA9IChmbikgPT4ge1xuXHRpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0c3R5bGVUcmVlSG9va3MuYWRkKGZuKTtcbn07XG52YXIgb2JzZXJ2ZVN0eWxlVHJlZSA9IChyb290KSA9PiB7XG5cdGlmICghcm9vdCB8fCB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJvb3Q7XG5cdGlmIChzdHlsZVRyZWVPYnNlcnZlZC5oYXMocm9vdCkpIHJldHVybiByb290O1xuXHRzdHlsZVRyZWVPYnNlcnZlZC5hZGQocm9vdCk7XG5cdHN0eWxlVHJlZVJvb3RzLmFkZChyb290KTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkcykgPT4ge1xuXHRcdGNvbnN0IGhvc3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0XHRmb3IgKGNvbnN0IHJlYyBvZiByZWNvcmRzKSBpZiAocmVjLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiByZWMuYWRkZWROb2RlcykgY29sbGVjdFN0eWxlSG9zdHMobm9kZSwgaG9zdHMpO1xuXHRcdFx0Y29uc3Qgc2NvcGUgPSByZWMudGFyZ2V0Py5nZXRSb290Tm9kZT8uKCk7XG5cdFx0XHRpZiAoc2NvcGUgaW5zdGFuY2VvZiBTaGFkb3dSb290ICYmIGlzU3R5bGVIb3N0KHNjb3BlLmhvc3QpKSB7XG5cdFx0XHRcdGNvbnN0IHNoZWV0cyA9IHNjb3BlLmFkb3B0ZWRTdHlsZVNoZWV0cztcblx0XHRcdFx0aWYgKCFzaGVldHMgfHwgc2hlZXRzLmxlbmd0aCA9PT0gMCkgaG9zdHMuYWRkKHNjb3BlLmhvc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocmVjLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiICYmIHJlYy50YXJnZXQpIHtcblx0XHRcdGlmIChpc1N0eWxlSG9zdChyZWMudGFyZ2V0KSkgaG9zdHMuYWRkKHJlYy50YXJnZXQpO1xuXHRcdH1cblx0XHRub3RpZnlTdHlsZVRyZWVIb3N0cyhob3N0cywgXCJtdXRhdGlvblwiKTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLlNUWUxFX1RIRU1FX0FUVFJTXVxuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHRzdHlsZVRyZWVPYnNlcnZlZC5kZWxldGUocm9vdCk7XG5cdFx0cmV0dXJuIHJvb3Q7XG5cdH1cblx0cmV0dXJuIHJvb3Q7XG59O1xudmFyIHJlaHlkcmF0ZUNvbnN0cnVjdGFibGVTaGVldHMgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgY2FuUGFyc2UgPSB0eXBlb2YgVVJMICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBVUkwuY2FuUGFyc2UgPT09IFwiZnVuY3Rpb25cIjtcblx0Zm9yIChjb25zdCBba2V5LCBzaGVldF0gb2YgYWRvcHRlZE1hcCkge1xuXHRcdGlmICghc2hlZXQgfHwgdHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIikgY29udGludWU7XG5cdFx0aWYgKGNhblBhcnNlICYmIFVSTC5jYW5QYXJzZShrZXkpKSBjb250aW51ZTtcblx0XHRjb25zdCB0ZXh0ID0gYWRvcHRlZEFwcGxpZWRUZXh0LmdldChzaGVldCkgfHwga2V5O1xuXHRcdGVuc3VyZUFkb3B0ZWRTaGVldENvbnRlbnQoc2hlZXQsIHRleHQpO1xuXHRcdGlmIChkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIWRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoZWV0KTtcblx0fVxufTtcbnZhciByZW1vdmVBZG9wdGVkID0gKHNoZWV0KSA9PiB7XG5cdGlmICghc2hlZXQpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgdGFyZ2V0ID0gdHlwZW9mIHNoZWV0ID09PSBcInN0cmluZ1wiID8gYWRvcHRlZE1hcC5nZXQoc2hlZXQpIDogc2hlZXQ7XG5cdGlmICghdGFyZ2V0IHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBzaGVldHMgPSBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHM7XG5cdGNvbnN0IGlkeCA9IHNoZWV0cy5pbmRleE9mKHRhcmdldCk7XG5cdGlmIChpZHggIT09IC0xKSB7XG5cdFx0c2hlZXRzLnNwbGljZShpZHgsIDEpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgZ2V0VHJhbnNmb3JtID0gKGVsKSA9PiB7XG5cdGlmIChlbD8uY29tcHV0ZWRTdHlsZU1hcCkge1xuXHRcdGNvbnN0IG1hdHJpeCA9IGVsLmNvbXB1dGVkU3R5bGVNYXAoKS5nZXQoXCJ0cmFuc2Zvcm1cIik/LnRvTWF0cml4Py4oKTtcblx0XHRpZiAobWF0cml4KSByZXR1cm4gbWF0cml4O1xuXHR9IGVsc2UgaWYgKGVsKSB7XG5cdFx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblx0XHRyZXR1cm4gbmV3IERPTU1hdHJpeChzdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZT8uKFwidHJhbnNmb3JtXCIpKTtcblx0fVxuXHRyZXR1cm4gbmV3IERPTU1hdHJpeCgpO1xufTtcbnZhciBnZXRUcmFuc2Zvcm1PcmlnaW4gPSAoZWwpID0+IHtcblx0Y29uc3QgY3NzT3JpZ2luID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybS1vcmlnaW5cIikgfHwgYDUwJSA1MCVgO1xuXHRyZXR1cm4gcGFyc2VPcmlnaW4oY3NzT3JpZ2luLCBlbCk7XG59O1xudmFyIGdldFByb3BlcnR5VmFsdWUgPSAoc3JjLCBuYW1lKSA9PiB7XG5cdGlmIChcImNvbXB1dGVkU3R5bGVNYXBcIiBpbiBzcmMpIHtcblx0XHRjb25zdCB2YWwgPSBzcmM/LmNvbXB1dGVkU3R5bGVNYXA/LigpPy5nZXQobmFtZSk7XG5cdFx0cmV0dXJuIHZhbCBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZSA/IHZhbD8udmFsdWUgfHwgMCA6IHZhbD8udG9TdHJpbmc/LigpO1xuXHR9XG5cdGlmIChzcmMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdGNvbnN0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZT8uKHNyYywgXCJcIik7XG5cdFx0cmV0dXJuIHBhcnNlRmxvYXQoY3M/LmdldFByb3BlcnR5VmFsdWU/LihuYW1lKT8ucmVwbGFjZT8uKFwicHhcIiwgXCJcIikpIHx8IDA7XG5cdH1cblx0cmV0dXJuIHBhcnNlRmxvYXQoKHNyYz8uc3R5bGUgPz8gc3JjKS5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnJlcGxhY2U/LihcInB4XCIsIFwiXCIpKSB8fCAwO1xufTtcbnZhciBnZXRFbGVtZW50Wm9vbSA9IChlbGVtZW50KSA9PiB7XG5cdGxldCB6b29tID0gMSwgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudEVsZW1lbnQpIHtcblx0XHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGN1cnJlbnRFbGVtZW50KSB7XG5cdFx0XHRjb25zdCBjdXJyZW50Q1NTWm9vbSA9IGN1cnJlbnRFbGVtZW50LmN1cnJlbnRDU1Nab29tO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXJyZW50Q1NTWm9vbSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHpvb20gKj0gY3VycmVudENTU1pvb207XG5cdFx0fVxuXHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50RWxlbWVudCk7XG5cdFx0aWYgKHN0eWxlLnpvb20gJiYgc3R5bGUuem9vbSAhPT0gXCJub3JtYWxcIikgcmV0dXJuIHpvb20gKj0gcGFyc2VGbG9hdChzdHlsZS56b29tKTtcblx0XHRpZiAoc3R5bGUuem9vbSAmJiBzdHlsZS56b29tICE9PSBcIm5vcm1hbFwiIHx8IFwiY3VycmVudENTU1pvb21cIiBpbiBjdXJyZW50RWxlbWVudCkgcmV0dXJuIHpvb207XG5cdFx0Y3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudD8ub2Zmc2V0UGFyZW50ID8/IGN1cnJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuXHR9XG5cdHJldHVybiB6b29tO1xufTtcbnZhciBnZXRQeFZhbHVlID0gKGVsZW1lbnQsIG5hbWUpID0+IHtcblx0cmV0dXJuIGdldFByb3BlcnR5VmFsdWU/LihlbGVtZW50LCBuYW1lKTtcbn07XG52YXIgZ2V0UGFkZGluZyA9IChzcmMsIGF4aXMpID0+IHtcblx0aWYgKGF4aXMgPT0gXCJpbmxpbmVcIikgcmV0dXJuIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctaW5saW5lLXN0YXJ0XCIpICsgZ2V0UHJvcGVydHlWYWx1ZShzcmMsIFwicGFkZGluZy1pbmxpbmUtZW5kXCIpO1xuXHRyZXR1cm4gZ2V0UHJvcGVydHlWYWx1ZShzcmMsIFwicGFkZGluZy1ibG9jay1zdGFydFwiKSArIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctYmxvY2stZW5kXCIpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2Nzc29tLnRzXG52YXIgc3R5bGVFbGVtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikgOiBudWxsO1xuaWYgKHN0eWxlRWxlbWVudCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKT8uYXBwZW5kQ2hpbGQ/LihzdHlsZUVsZW1lbnQpO1xuXHRzdHlsZUVsZW1lbnQuZGF0YXNldC5vd25lciA9IFwiRE9NXCI7XG59XG52YXIgc2V0U3R5bGVVUkwgPSAoYmFzZSwgdXJsLCBsYXllciA9IFwiXCIpID0+IHtcblx0YmFzZVswXVtiYXNlWzFdXSA9IGJhc2VbMV0gPT0gXCJpbm5lckhUTUxcIiA/IGNzc0ltcG9ydFdpdGhMYXllcih1cmwsIGxheWVyKSA6IHVybDtcbn07XG52YXIgc2V0U3R5bGVSdWxlcyA9IChjbGFzc2VzKSA9PiB7XG5cdHJldHVybiBjbGFzc2VzPy5tYXA/LigoYXJncykgPT4gc2V0U3R5bGVSdWxlKC4uLmFyZ3MpKTtcbn07XG52YXIgZ2V0U3R5bGVMYXllciA9IChsYXllck5hbWUsIHNoZWV0KSA9PiB7XG5cdHNoZWV0IHx8PSBzdHlsZUVsZW1lbnQ/LnNoZWV0O1xuXHRyZXR1cm4gZ2V0T3JDcmVhdGVMYXllclJ1bGUoc2hlZXQsIGxheWVyTmFtZSk7XG59O1xudmFyIGVuc3VyZVN0eWxlU2NvcGVTZWxlY3RvciA9IChlbGVtZW50KSA9PiB7XG5cdGlmIChlbGVtZW50LmlkKSByZXR1cm4gYCMke2VzY2FwZUNTU0lkZW50aWZpZXIoZWxlbWVudC5pZCl9YDtcblx0bGV0IHN0eWxlSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtc3R5bGUtaWRcIik7XG5cdGlmICghc3R5bGVJZCkge1xuXHRcdHN0eWxlSWQgPSBjcmVhdGVTdHlsZUlkKCk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlLWlkXCIsIHN0eWxlSWQpO1xuXHR9XG5cdHJldHVybiBgW2RhdGEtc3R5bGUtaWQ9XCIke2VzY2FwZUNTU0lkZW50aWZpZXIoc3R5bGVJZCl9XCJdYDtcbn07XG52YXIgam9pblNjb3BlZFNlbGVjdG9yID0gKHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKTtcblx0aWYgKCFzY29wZSkgcmV0dXJuIHNlbGVjdG9yO1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2NvcGU7XG5cdGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKFwiOjpcIikpIHJldHVybiBgJHtzY29wZX0ke3NlbGVjdG9yfWA7XG5cdHJldHVybiBgJHtzY29wZX0gJHtzZWxlY3Rvcn1gO1xufTtcbnZhciBmaW5kU3R5bGVSdWxlID0gKHNoZWV0LCBmdWxsU2VsZWN0b3IsIHNjb3BlLCBzZWxlY3RvcikgPT4ge1xuXHRjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQ/LmNzc1J1bGVzIHx8IFtdKTtcblx0Y29uc3QgZXhwZWN0ZWQgPSBmdWxsU2VsZWN0b3IudHJpbSgpO1xuXHRjb25zdCByZXF1ZXN0ZWQgPSBzZWxlY3Rvci50cmltKCk7XG5cdHJldHVybiBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+IHtcblx0XHRpZiAoIShydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGNvbnN0IGFjdHVhbCA9IHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA/PyBcIlwiO1xuXHRcdGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSByZXR1cm4gdHJ1ZTtcblx0XHRpZiAocmVxdWVzdGVkICYmIGFjdHVhbC5lbmRzV2l0aChyZXF1ZXN0ZWQpKSByZXR1cm4gYWN0dWFsLnNsaWNlKDAsIGFjdHVhbC5sZW5ndGggLSByZXF1ZXN0ZWQubGVuZ3RoKS50cmltKCkgPT09IHNjb3BlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59O1xudmFyIGdldFN0eWxlUnVsZSA9IChzZWxlY3Rvciwgc2hlZXQsIGxheWVyTmFtZSA9IFwidXgtcXVlcnlcIiwgYmFzaXMgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBpc1NoYWRvd1Jvb3QoYmFzaXMpIHx8IGlzRG9jdW1lbnQoYmFzaXMpID8gYmFzaXMgOiBiYXNpcz8uZ2V0Um9vdE5vZGU/LigpID8/ICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xuXHRjb25zdCBiYXNpc0VsZW1lbnQgPSBpc0Nzc0VsZW1lbnQoYmFzaXMpID8gYmFzaXMgOiBudWxsO1xuXHRsZXQgc2NvcGUgPSBcIlwiO1xuXHRpZiAoYmFzaXNFbGVtZW50KSBzY29wZSA9IGVuc3VyZVN0eWxlU2NvcGVTZWxlY3RvcihiYXNpc0VsZW1lbnQpO1xuXHRlbHNlIGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHNjb3BlID0gXCI6aG9zdFwiO1xuXHRlbHNlIGlmIChpc0RvY3VtZW50KHJvb3QpKSBzY29wZSA9IFwiOnJvb3RcIjtcblx0bGV0IHN0eWxlRWxlbWVudCA9IG51bGw7XG5cdGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLXV4LXF1ZXJ5XVwiKTtcblx0XHRpZiAoIXN0eWxlRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0XHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXV4LXF1ZXJ5XCIsIFwiXCIpO1xuXHRcdFx0cm9vdC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0fSBlbHNlIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudEdsb2JhbCgpO1xuXHRzaGVldCB8fD0gc3R5bGVFbGVtZW50Py5zaGVldDtcblx0aWYgKCFzaGVldCkgcmV0dXJuO1xuXHRpZiAobGF5ZXJOYW1lKSByZXR1cm4gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yLCBnZXRTdHlsZUxheWVyKGxheWVyTmFtZSwgc2hlZXQpLCBudWxsLCBiYXNpcyk7XG5cdGNvbnN0IGZ1bGxTZWxlY3RvciA9IGpvaW5TY29wZWRTZWxlY3RvcihzY29wZSwgc2VsZWN0b3IpO1xuXHRsZXQgcnVsZUlkID0gZmluZFN0eWxlUnVsZShzaGVldCwgZnVsbFNlbGVjdG9yLCBzY29wZSwgc2VsZWN0b3IpO1xuXHRpZiAocnVsZUlkID09PSAtMSkgcnVsZUlkID0gc2hlZXQuaW5zZXJ0UnVsZShgJHtmdWxsU2VsZWN0b3J9IHt9YCk7XG5cdHJldHVybiBzaGVldC5jc3NSdWxlcz8uW3J1bGVJZF07XG59O1xuZnVuY3Rpb24gc3R5bGVFbGVtZW50R2xvYmFsKCkge1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50ID8/IG51bGw7XG59XG52YXIgZmV0Y2hBbmRDYWNoZSA9ICh1cmwpID0+IHtcblx0aWYgKCF1cmwpIHJldHVybiBudWxsO1xuXHRpZiAoY2FjaGVNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZU1hcC5nZXQodXJsKTtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChibG9iVVJMTWFwLmhhcyh1cmwpKSByZXR1cm4gYmxvYlVSTE1hcC5nZXQodXJsKTtcblx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh1cmwpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0Y2FjaGVNYXAuc2V0KGJ1cmwsIGJ1cmwpO1xuXHRcdHJldHVybiBidXJsO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG5cdFx0XHRjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdFx0Y2FjaGVNYXAuc2V0KHVybCwgYnVybCk7XG5cdFx0XHRjYWNoZU1hcC5zZXQoYnVybCwgYnVybCk7XG5cdFx0XHRyZXR1cm4gYnVybDtcblx0XHR9KTtcblx0XHRjYWNoZU1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmICh0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpIHtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW3VybF0sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXHRcdGNvbnN0IGJ1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdGJsb2JVUkxNYXAuc2V0KGJsb2IsIGJ1cmwpO1xuXHRcdGNhY2hlTWFwLnNldChidXJsLCBidXJsKTtcblx0XHRyZXR1cm4gYnVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBmZXRjaEFzSW5saW5lID0gKHVybCkgPT4ge1xuXHRpZiAoIXVybCkgcmV0dXJuIFwiXCI7XG5cdGlmIChjYWNoZUNvbnRlbnRNYXAuaGFzKHVybCkpIHJldHVybiBjYWNoZUNvbnRlbnRNYXAuZ2V0KHVybCkgPz8gXCJcIjtcblx0aWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgdXJsIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGlmIChjYWNoZUJsb2JDb250ZW50TWFwLmhhcyh1cmwpKSByZXR1cm4gY2FjaGVCbG9iQ29udGVudE1hcC5nZXQodXJsKSA/PyBcIlwiO1xuXHRcdGNvbnN0IHByb21pc2VkID0gdXJsPy50ZXh0Py4oKT8udGhlbj8uKCh0ZXh0KSA9PiB7XG5cdFx0XHRjYWNoZUJsb2JDb250ZW50TWFwLnNldCh1cmwsIHRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdFx0Y2FjaGVCbG9iQ29udGVudE1hcC5zZXQodXJsLCBwcm9taXNlZCk7XG5cdFx0cmV0dXJuIHByb21pc2VkO1xuXHR9XG5cdGlmIChVUkwuY2FuUGFyc2UodXJsKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuXHRcdGNvbnN0IHByb21pc2VkID0gZmV0Y2godXJsPy5yZXBsYWNlPy4oXCI/dXJsXCIsIFwiP3Jhd1wiKSwge1xuXHRcdFx0Y2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcblx0XHRcdG1vZGU6IFwic2FtZS1vcmlnaW5cIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIlxuXHRcdH0pPy50aGVuPy4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgdGV4dCk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9KTtcblx0XHRjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCwgcHJvbWlzZWQpO1xuXHRcdHJldHVybiBwcm9taXNlZDtcblx0fVxuXHRpZiAodHlwZW9mIHVybCA9PSBcInN0cmluZ1wiKSB7XG5cdFx0Y2FjaGVDb250ZW50TWFwLnNldCh1cmwsIHVybCk7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcbnZhciBnZXRBZG9wdGVkU3R5bGVSdWxlID0gKHNlbGVjdG9yLCBsYXllck5hbWUgPSBcInV4LXF1ZXJ5XCIsIGJhc2lzID0gbnVsbCkgPT4ge1xuXHRpZiAoIXNlbGVjdG9yKSByZXR1cm4gbnVsbDtcblx0aWYgKCFzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0KCkpIHJldHVybiBudWxsO1xuXHRjb25zdCByb290ID0gaXNTaGFkb3dSb290KGJhc2lzKSA/IGJhc2lzIDogYmFzaXM/LmdldFJvb3ROb2RlID8gYmFzaXMuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA6IG51bGw7XG5cdGNvbnN0IGluU2hhZG93ID0gaXNTaGFkb3dSb290KHJvb3QpO1xuXHRjb25zdCB0YXJnZXRBZG9wdGVkU2hlZXRzID0gaW5TaGFkb3cgPyByb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA6IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzIDogbnVsbDtcblx0aWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgc2VsZWN0b3JLZXkgPSBgJHtsYXllck5hbWUgfHwgXCJcIn06JHtzZWxlY3Rvcn1gO1xuXHRsZXQgc2hlZXQ7XG5cdGlmIChpblNoYWRvdykge1xuXHRcdGxldCBzaGFkb3dNYXAgPSBhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAuZ2V0KHJvb3QpO1xuXHRcdGlmICghc2hhZG93TWFwKSB7XG5cdFx0XHRzaGFkb3dNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0YWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwLnNldChyb290LCBzaGFkb3dNYXApO1xuXHRcdH1cblx0XHRzaGVldCA9IHNoYWRvd01hcC5nZXQoc2VsZWN0b3JLZXkpO1xuXHRcdGlmICghc2hlZXQpIHtcblx0XHRcdHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcblx0XHRcdHNoYWRvd01hcC5zZXQoc2VsZWN0b3JLZXksIHNoZWV0KTtcblx0XHRcdGlmICghdGFyZ2V0QWRvcHRlZFNoZWV0cy5pbmNsdWRlcyhzaGVldCkpIHRhcmdldEFkb3B0ZWRTaGVldHMucHVzaChzaGVldCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHNoZWV0ID0gYWRvcHRlZFNlbGVjdG9yTWFwLmdldChzZWxlY3RvcktleSk7XG5cdFx0aWYgKCFzaGVldCkge1xuXHRcdFx0c2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuXHRcdFx0YWRvcHRlZFNlbGVjdG9yTWFwLnNldChzZWxlY3RvcktleSwgc2hlZXQpO1xuXHRcdFx0aWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzLmluY2x1ZGVzKHNoZWV0KSkgdGFyZ2V0QWRvcHRlZFNoZWV0cy5wdXNoKHNoZWV0KTtcblx0XHR9XG5cdH1cblx0aWYgKGxheWVyTmFtZSkge1xuXHRcdGxldCBsYXllclJ1bGU7XG5cdFx0aWYgKGluU2hhZG93KSB7XG5cdFx0XHRsZXQgc2hhZG93TGF5ZXJNYXAgPSBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuZ2V0KHJvb3QpO1xuXHRcdFx0aWYgKCFzaGFkb3dMYXllck1hcCkge1xuXHRcdFx0XHRzaGFkb3dMYXllck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdFx0XHRcdGFkb3B0ZWRTaGFkb3dMYXllck1hcC5zZXQocm9vdCwgc2hhZG93TGF5ZXJNYXApO1xuXHRcdFx0fVxuXHRcdFx0bGF5ZXJSdWxlID0gc2hhZG93TGF5ZXJNYXAuZ2V0KGxheWVyTmFtZSk7XG5cdFx0fSBlbHNlIGxheWVyUnVsZSA9IGFkb3B0ZWRMYXllck1hcC5nZXQobGF5ZXJOYW1lKTtcblx0XHRpZiAoIWxheWVyUnVsZSkge1xuXHRcdFx0bGF5ZXJSdWxlID0gZ2V0T3JDcmVhdGVMYXllclJ1bGUoc2hlZXQsIGxheWVyTmFtZSk7XG5cdFx0XHRpZiAobGF5ZXJSdWxlKSB7XG5cdFx0XHRcdGlmIChpblNoYWRvdykge1xuXHRcdFx0XHRcdGxldCBzaGFkb3dMYXllck1hcCA9IGFkb3B0ZWRTaGFkb3dMYXllck1hcC5nZXQocm9vdCk7XG5cdFx0XHRcdFx0aWYgKCFzaGFkb3dMYXllck1hcCkge1xuXHRcdFx0XHRcdFx0c2hhZG93TGF5ZXJNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdFx0XHRcdFx0YWRvcHRlZFNoYWRvd0xheWVyTWFwLnNldChyb290LCBzaGFkb3dMYXllck1hcCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNoYWRvd0xheWVyTWFwLnNldChsYXllck5hbWUsIGxheWVyUnVsZSk7XG5cdFx0XHRcdH0gZWxzZSBhZG9wdGVkTGF5ZXJNYXAuc2V0KGxheWVyTmFtZSwgbGF5ZXJSdWxlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGxheWVyUnVsZSkge1xuXHRcdFx0bGV0IGxheWVyUnVsZUluZGV4ID0gQXJyYXkuZnJvbShsYXllclJ1bGUuY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocikgPT4gciBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSAmJiByLnNlbGVjdG9yVGV4dD8udHJpbT8uKCkgPT09IHNlbGVjdG9yPy50cmltPy4oKSk7XG5cdFx0XHRpZiAobGF5ZXJSdWxlSW5kZXggPT09IC0xKSB0cnkge1xuXHRcdFx0XHRsYXllclJ1bGVJbmRleCA9IGxheWVyUnVsZS5pbnNlcnRSdWxlKGAke3NlbGVjdG9yfSB7fWAsIGxheWVyUnVsZS5jc3NSdWxlcy5sZW5ndGgpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsYXllclJ1bGUuY3NzUnVsZXNbbGF5ZXJSdWxlSW5kZXhdO1xuXHRcdH1cblx0fVxuXHRsZXQgcnVsZUluZGV4ID0gQXJyYXkuZnJvbShzaGVldC5jc3NSdWxlcyB8fCBbXSkuZmluZEluZGV4KChydWxlKSA9PiBydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlICYmIHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA9PT0gc2VsZWN0b3I/LnRyaW0/LigpKTtcblx0aWYgKHJ1bGVJbmRleCA9PT0gLTEpIHRyeSB7XG5cdFx0cnVsZUluZGV4ID0gc2hlZXQuaW5zZXJ0UnVsZShgJHtzZWxlY3Rvcn0ge31gLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y29uc3QgcnVsZSA9IHNoZWV0LmNzc1J1bGVzW3J1bGVJbmRleF07XG5cdGlmIChydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlKSByZXR1cm4gcnVsZTtcblx0cmV0dXJuIG51bGw7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYmFrZXIudHNcbnZhciBpbnZhbGlkYXRpb25SZWFkeSA9IGZhbHNlO1xudmFyIGxhc3RGaW5nZXJwcmludCA9IFwiXCI7XG52YXIgcmViYWtlUXVldWVkID0gZmFsc2U7XG52YXIgbm9ybWFsaXplQ2F0ZWdvcmllcyA9IChjYXRlZ29yaWVzKSA9PiB7XG5cdGNvbnN0IGxpc3QgPSBbLi4uY2F0ZWdvcmllcz8ubGVuZ3RoID8gY2F0ZWdvcmllcyA6IERFRkFVTFRfQ0FURUdPUklFU107XG5cdHJldHVybiBbLi4ubmV3IFNldChsaXN0LmZpbHRlcihCb29sZWFuKSldO1xufTtcbnZhciBjYWNoZUtleUZvciA9IChzZWxlY3RvciwgY2F0ZWdvcmllcywgbWVkaWEgPSBCQUtFX1NDUkVFTl9NRURJQSkgPT4gYCR7c2VsZWN0b3J9XFwwJHtbLi4uY2F0ZWdvcmllc10uc29ydCgpLmpvaW4oXCIsXCIpfVxcMCR7bWVkaWEgPT09IGZhbHNlID8gXCJcIiA6IG1lZGlhfWA7XG52YXIgYmFrZVRoZW1lRmluZ2VycHJpbnQgPSAocm9vdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IG51bGwsIGVsKSA9PiB7XG5cdGlmICghcm9vdCB8fCB0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gXCJcIjtcblx0Y29uc3QgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpO1xuXHRjb25zdCBwYXJ0cyA9IFtcblx0XHRyb290LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS10aGVtZVwiKSB8fCByb290LmdldEF0dHJpYnV0ZT8uKFwidGhlbWVcIikgfHwgXCJcIixcblx0XHRyb290LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1jb2xvci1zY2hlbWVcIikgfHwgcm9vdC5nZXRBdHRyaWJ1dGU/LihcImNvbG9yLXNjaGVtZVwiKSB8fCBjcy5jb2xvclNjaGVtZSB8fCBcIlwiLFxuXHRcdGNzLmdldFByb3BlcnR5VmFsdWUoXCItLWJhc2UtY29sb3JcIikudHJpbSgpLFxuXHRcdGNzLmdldFByb3BlcnR5VmFsdWUoXCItLWNvbG9yLXByaW1hcnlcIikudHJpbSgpXG5cdF07XG5cdGlmIChlbCAmJiBlbCAhPT0gcm9vdCkge1xuXHRcdGNvbnN0IGxvY2FsID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0cGFydHMucHVzaChlbC5nZXRBdHRyaWJ1dGU/LihcImRhdGEtdGhlbWVcIikgfHwgXCJcIiwgbG9jYWwuZ2V0UHJvcGVydHlWYWx1ZShcIi0tYmFzZS1jb2xvclwiKS50cmltKCkpO1xuXHR9XG5cdHJldHVybiBwYXJ0cy5qb2luKFwifFwiKTtcbn07XG52YXIgdGFrZVByb3AgPSAoaW50bywgY3MsIG5hbWUpID0+IHtcblx0Y29uc3QgdmFsdWUgPSBjcy5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpPy50cmltKCk7XG5cdGlmICghdmFsdWUpIHJldHVybjtcblx0aW50by5zZXQobmFtZSwgdmFsdWUpO1xufTtcbnZhciBDT0xPUl9QUk9QX1NFVCA9IG5ldyBTZXQoQ1NTX0NPTE9SX1BST1BFUlRJRVMpO1xudmFyIGJha2VEZWNsUmFuayA9IChuYW1lKSA9PiB7XG5cdGlmIChuYW1lLnN0YXJ0c1dpdGgoXCItLVwiKSkgcmV0dXJuIDI7XG5cdGlmIChDT0xPUl9QUk9QX1NFVC5oYXMobmFtZSkpIHJldHVybiAwO1xuXHRyZXR1cm4gMTtcbn07XG52YXIgY29sbGVjdEJha2VkRGVjbGFyYXRpb25zID0gKGNzLCBjYXRlZ29yaWVzKSA9PiB7XG5cdGNvbnN0IGludG8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCBzZXQgPSBuZXcgU2V0KGNhdGVnb3JpZXMpO1xuXHRpZiAoc2V0LmhhcyhcImNvbG9yc1wiKSkgZm9yIChjb25zdCBuYW1lIG9mIENTU19DT0xPUl9QUk9QRVJUSUVTKSB0YWtlUHJvcChpbnRvLCBjcywgbmFtZSk7XG5cdGlmIChzZXQuaGFzKFwidHlwb2dyYXBoeVwiKSkgZm9yIChjb25zdCBuYW1lIG9mIENTU19UWVBPR1JBUEhZX1BST1BFUlRJRVMpIHRha2VQcm9wKGludG8sIGNzLCBuYW1lKTtcblx0aWYgKHNldC5oYXMoXCJtb3Rpb25cIikpIGZvciAoY29uc3QgbmFtZSBvZiBDU1NfTU9USU9OX1BST1BFUlRJRVMpIHRha2VQcm9wKGludG8sIGNzLCBuYW1lKTtcblx0aWYgKHNldC5oYXMoXCJ0b2tlbnNcIikgfHwgc2V0LmhhcyhcImNvbG9yc1wiKSkgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IG5hbWUgPSBjcy5pdGVtKGkpO1xuXHRcdGlmICghbmFtZS5zdGFydHNXaXRoKFwiLS1cIikpIGNvbnRpbnVlO1xuXHRcdGlmIChzZXQuaGFzKFwidG9rZW5zXCIpIHx8IGlzQ29sb3JUb2tlbihuYW1lKSkgdGFrZVByb3AoaW50bywgY3MsIG5hbWUpO1xuXHR9XG5cdHJldHVybiBpbnRvO1xufTtcbnZhciBidWlsZEJha2VkQ3NzVGV4dCA9IChzZWxlY3RvciwgZGVjbGFyYXRpb25zLCBsYXllciA9IEJBS0VfTEFZRVIsIG1lZGlhID0gQkFLRV9TQ1JFRU5fTUVESUEpID0+IHtcblx0Y29uc3QgYm9keSA9IFtdO1xuXHRjb25zdCByb3dzID0gWy4uLmRlY2xhcmF0aW9uc10uc29ydCgoYSwgYikgPT4gYmFrZURlY2xSYW5rKGFbMF0pIC0gYmFrZURlY2xSYW5rKGJbMF0pKTtcblx0Zm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIHJvd3MpIHtcblx0XHRpZiAoIW5hbWUgfHwgIXZhbHVlKSBjb250aW51ZTtcblx0XHRjb25zdCBiYWtlZCA9IHZhbHVlLnJlcGxhY2UoL1xccyohaW1wb3J0YW50XFxzKiQvaSwgXCJcIikudHJpbSgpO1xuXHRcdGlmICghYmFrZWQpIGNvbnRpbnVlO1xuXHRcdGJvZHkucHVzaChgJHtuYW1lfTogJHtiYWtlZH0gIWltcG9ydGFudDtgKTtcblx0fVxuXHRpZiAoIWJvZHkubGVuZ3RoKSByZXR1cm4gXCJcIjtcblx0Y29uc3QgcnVsZSA9IGAke3NlbGVjdG9yfSB7XFxuJHtib2R5LmpvaW4oXCJcXG5cIil9XFxufWA7XG5cdGNvbnN0IGlubmVyID0gbWVkaWEgPyBgQG1lZGlhICR7bWVkaWF9IHtcXG4ke3J1bGV9XFxufWAgOiBydWxlO1xuXHRyZXR1cm4gW2Nzc0xheWVyT3JkZXIobGF5ZXIpLCBjc3NMYXllckJsb2NrKGxheWVyLCBpbm5lcildLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXCIpO1xufTtcbnZhciBjb2xsZWN0QmFrZVNjcmVlbkhvc3RzID0gKHJvb3QpID0+IHtcblx0aWYgKCFyb290IHx8IHJvb3Qubm9kZVR5cGUgIT09IDEpIHJldHVybiBbXTtcblx0Y29uc3QgaG9zdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbcm9vdF0pO1xuXHRjb25zdCBjaHJvbWUgPSByb290LmNsb3Nlc3Q/LihCQUtFX1NDUkVFTl9DSFJPTUUuam9pbihcIiwgXCIpKTtcblx0aWYgKGNocm9tZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSBob3N0cy5hZGQoY2hyb21lKTtcblx0cmV0dXJuIFsuLi5ob3N0c107XG59O1xudmFyIGJha2VBbHNvUXVlcmllc0ZvciA9IChyb290KSA9PiB7XG5cdGlmICghcm9vdCkgcmV0dXJuIFtdO1xuXHRpZiAocm9vdC5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwidmlldy1zZXR0aW5nc1wiKSB8fCByb290LmNsb3Nlc3Q/LihcIi52aWV3LXNldHRpbmdzXCIpKSByZXR1cm4gQkFLRV9TQ1JFRU5fQUxTT19TRVRUSU5HUztcblx0aWYgKHJvb3QuY2xhc3NMaXN0Py5jb250YWlucyhcInZpZXctZXhwbG9yZXJcIikgfHwgcm9vdC5jbG9zZXN0Py4oXCIudmlldy1leHBsb3JlclwiKSB8fCByb290LnF1ZXJ5U2VsZWN0b3I/LihcInVpLWZpbGUtbWFuYWdlclwiKSkgcmV0dXJuIEJBS0VfU0NSRUVOX0FMU09fRVhQTE9SRVI7XG5cdHJldHVybiBbXTtcbn07XG52YXIgY29sbGVjdEJha2VBbHNvSG9zdHMgPSAocm9vdCwgcXVlcmllcyA9IEJBS0VfU0NSRUVOX0FMU08sIHBpZXJjZVNoYWRvdyA9IHRydWUpID0+IHtcblx0aWYgKCFyb290IHx8ICFxdWVyaWVzLmxlbmd0aCkgcmV0dXJuIFtdO1xuXHRjb25zdCByb290U2VsID0gZW5zdXJlU3R5bGVTY29wZVNlbGVjdG9yKHJvb3QpO1xuXHRjb25zdCBmaW5kID0gcGllcmNlU2hhZG93ID8gcXVlcnlGaXJzdERlZXAgOiAoc2NvcGUsIHNlbCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBoaXQgPSBzY29wZS5xdWVyeVNlbGVjdG9yKHNlbCk7XG5cdFx0XHRyZXR1cm4gaGl0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBoaXQgOiBudWxsO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBncm91cGVkID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Zm9yIChjb25zdCBxdWVyeSBvZiBxdWVyaWVzKSB7XG5cdFx0Y29uc3QgcSA9IFN0cmluZyhxdWVyeSB8fCBcIlwiKS50cmltKCk7XG5cdFx0aWYgKCFxKSBjb250aW51ZTtcblx0XHRjb25zdCBlbCA9IGZpbmQocm9vdCwgcSk7XG5cdFx0aWYgKCFlbCB8fCBlbCA9PT0gcm9vdCkgY29udGludWU7XG5cdFx0Y29uc3Qgc2VsID0gZWwuZ2V0Um9vdE5vZGUoKSA9PT0gcm9vdC5nZXRSb290Tm9kZSgpID8gYCR7cm9vdFNlbH0gJHtxfWAgOiBxO1xuXHRcdGNvbnN0IGxpc3QgPSBncm91cGVkLmdldChlbCk7XG5cdFx0aWYgKGxpc3QpIHtcblx0XHRcdGlmICghbGlzdC5pbmNsdWRlcyhzZWwpKSBsaXN0LnB1c2goc2VsKTtcblx0XHR9IGVsc2UgZ3JvdXBlZC5zZXQoZWwsIFtzZWxdKTtcblx0fVxuXHRyZXR1cm4gWy4uLmdyb3VwZWRdLm1hcCgoW2VsLCBzZWxzXSkgPT4gKHtcblx0XHRlbCxcblx0XHRzZWxlY3Rvcjogc2Vscy5qb2luKFwiLCBcIilcblx0fSkpO1xufTtcbnZhciBhZG9wdGVkTGlzdCA9IChlbCkgPT4ge1xuXHRjb25zdCByb290ID0gZWwuZ2V0Um9vdE5vZGU/LigpO1xuXHRpZiAodHlwZW9mIFNoYWRvd1Jvb3QgIT09IFwidW5kZWZpbmVkXCIgJiYgcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHJldHVybiByb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA/PyBudWxsO1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzID8/IG51bGw7XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBhc3NpZ25BZG9wdGVkID0gKGVsLCBuZXh0KSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBlbC5nZXRSb290Tm9kZT8uKCk7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBTaGFkb3dSb290ICE9PSBcInVuZGVmaW5lZFwiICYmIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG5cdFx0XHRyb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IG5leHQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IG5leHQ7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgYWRvcHRTaGVldCA9IChlbCwgYmFrZWQpID0+IHtcblx0aWYgKGJha2VkLnNoZWV0ICYmIHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXQoKSkge1xuXHRcdGNvbnN0IGxpc3QgPSBhZG9wdGVkTGlzdChlbCk7XG5cdFx0aWYgKCFsaXN0KSByZXR1cm47XG5cdFx0aWYgKGxpc3QuaW5jbHVkZXMoYmFrZWQuc2hlZXQpKSB7XG5cdFx0XHRiYWtlZC5hZG9wdGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGxpc3QucHVzaChiYWtlZC5zaGVldCk7XG5cdFx0XHRiYWtlZC5hZG9wdGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGFzc2lnbkFkb3B0ZWQoZWwsIFsuLi5saXN0LCBiYWtlZC5zaGVldF0pO1xuXHRcdFx0YmFrZWQuYWRvcHRlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cdGlmIChiYWtlZC5zdHlsZUVsICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGlmICghYmFrZWQuc3R5bGVFbC5pc0Nvbm5lY3RlZCkgZG9jdW1lbnQuaGVhZD8uYXBwZW5kKGJha2VkLnN0eWxlRWwpO1xuXHRcdGJha2VkLmFkb3B0ZWQgPSB0cnVlO1xuXHR9XG59O1xudmFyIHVuYWRvcHRTaGVldCA9IChlbCwgYmFrZWQpID0+IHtcblx0aWYgKGJha2VkLnNoZWV0ICYmIHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXQoKSkge1xuXHRcdGNvbnN0IGxpc3QgPSBhZG9wdGVkTGlzdChlbCk7XG5cdFx0aWYgKGxpc3QpIHtcblx0XHRcdGNvbnN0IGlkeCA9IGxpc3QuaW5kZXhPZihiYWtlZC5zaGVldCk7XG5cdFx0XHRpZiAoaWR4ICE9PSAtMSkgdHJ5IHtcblx0XHRcdFx0bGlzdC5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRhc3NpZ25BZG9wdGVkKGVsLCBsaXN0LmZpbHRlcigoc2hlZXQpID0+IHNoZWV0ICE9PSBiYWtlZC5zaGVldCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRiYWtlZC5zdHlsZUVsPy5yZW1vdmUoKTtcblx0YmFrZWQuYWRvcHRlZCA9IGZhbHNlO1xufTtcbnZhciB3cml0ZUJha2VkQ3NzID0gKGJha2VkLCBjc3NUZXh0KSA9PiB7XG5cdGJha2VkLmNzc1RleHQgPSBjc3NUZXh0O1xuXHRpZiAoIWNzc1RleHQpIHJldHVybiBmYWxzZTtcblx0aWYgKGJha2VkLnNoZWV0ICYmIHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXQoKSkgdHJ5IHtcblx0XHRiYWtlZC5zaGVldC5yZXBsYWNlU3luYyhjc3NUZXh0KTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLndhcm4oXCJbc3R5bGUtbGliXSBiYWtlIHJlcGxhY2VTeW5jIGZhaWxlZFwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmIChiYWtlZC5zdHlsZUVsKSB7XG5cdFx0YmFrZWQuc3R5bGVFbC50ZXh0Q29udGVudCA9IGNzc1RleHQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcbnZhciByZW1lbWJlckNhY2hlID0gKGJha2VkLCBjYWNoZU1zKSA9PiB7XG5cdGNvbnN0IHByZXYgPSBiYWtlZENhY2hlLmdldChiYWtlZC5jYWNoZUtleSk7XG5cdGlmIChwcmV2Py50aW1lcikgY2xlYXJUaW1lb3V0KHByZXYudGltZXIpO1xuXHRjb25zdCBlbnRyeSA9IHtcblx0XHRjc3NUZXh0OiBiYWtlZC5jc3NUZXh0LFxuXHRcdGZpbmdlcnByaW50OiBiYWtlZC5maW5nZXJwcmludCxcblx0XHRjYXRlZ29yaWVzOiBiYWtlZC5jYXRlZ29yaWVzLFxuXHRcdHNlbGVjdG9yOiBiYWtlZC5zZWxlY3Rvcixcblx0XHRleHBpcmVzOiBEYXRlLm5vdygpICsgY2FjaGVNc1xuXHR9O1xuXHRpZiAoY2FjaGVNcyA+IDAgJiYgdHlwZW9mIHNldFRpbWVvdXQgPT09IFwiZnVuY3Rpb25cIikgZW50cnkudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRpZiAoYmFrZWRDYWNoZS5nZXQoYmFrZWQuY2FjaGVLZXkpID09PSBlbnRyeSkgYmFrZWRDYWNoZS5kZWxldGUoYmFrZWQuY2FjaGVLZXkpO1xuXHR9LCBjYWNoZU1zKTtcblx0YmFrZWRDYWNoZS5zZXQoYmFrZWQuY2FjaGVLZXksIGVudHJ5KTtcbn07XG52YXIgZHJvcENhY2hlID0gKGNhY2hlS2V5KSA9PiB7XG5cdGNvbnN0IHByZXYgPSBiYWtlZENhY2hlLmdldChjYWNoZUtleSk7XG5cdGlmIChwcmV2Py50aW1lcikgY2xlYXJUaW1lb3V0KHByZXYudGltZXIpO1xuXHRiYWtlZENhY2hlLmRlbGV0ZShjYWNoZUtleSk7XG59O1xudmFyIGNsZWFyQWxsQ2FjaGUgPSAoKSA9PiB7XG5cdGZvciAoY29uc3QgZW50cnkgb2YgYmFrZWRDYWNoZS52YWx1ZXMoKSkgaWYgKGVudHJ5LnRpbWVyKSBjbGVhclRpbWVvdXQoZW50cnkudGltZXIpO1xuXHRiYWtlZENhY2hlLmNsZWFyKCk7XG59O1xudmFyIHBhcmtCYWtlZCA9IChlbCwgY2FjaGVNcyA9IERFRkFVTFRfQ0FDSEVfTVMpID0+IHtcblx0Y29uc3QgYmFrZWQgPSBiYWtlZFN0eWxlcy5nZXQoZWwpO1xuXHRpZiAoIWJha2VkKSByZXR1cm47XG5cdGlmIChiYWtlZC5hZG9wdGVkKSB1bmFkb3B0U2hlZXQoZWwsIGJha2VkKTtcblx0YmFrZWRMaXZlLmRlbGV0ZShlbCk7XG5cdGlmIChiYWtlZC5jc3NUZXh0KSByZW1lbWJlckNhY2hlKGJha2VkLCBjYWNoZU1zKTtcbn07XG52YXIgcmVzdW1lQmFrZWQgPSAoZWwsIGNhY2hlTXMgPSBERUZBVUxUX0NBQ0hFX01TKSA9PiB7XG5cdGNvbnN0IGJha2VkID0gYmFrZWRTdHlsZXMuZ2V0KGVsKTtcblx0aWYgKCFiYWtlZCB8fCAhZWwuaXNDb25uZWN0ZWQpIHJldHVybjtcblx0Y29uc3QgZmluZ2VycHJpbnQgPSBiYWtlVGhlbWVGaW5nZXJwcmludCh2b2lkIDAsIGVsKTtcblx0Y29uc3QgY2FjaGVkID0gYmFrZWRDYWNoZS5nZXQoYmFrZWQuY2FjaGVLZXkpO1xuXHRpZiAoIWJha2VkLmNzc1RleHQgJiYgY2FjaGVkICYmIGNhY2hlZC5maW5nZXJwcmludCA9PT0gZmluZ2VycHJpbnQpIHtcblx0XHR3cml0ZUJha2VkQ3NzKGJha2VkLCBjYWNoZWQuY3NzVGV4dCk7XG5cdFx0YmFrZWQuZmluZ2VycHJpbnQgPSBjYWNoZWQuZmluZ2VycHJpbnQ7XG5cdH1cblx0aWYgKCFiYWtlZC5jc3NUZXh0IHx8IGJha2VkLmZpbmdlcnByaW50ICE9PSBmaW5nZXJwcmludCkge1xuXHRcdGJha2VDb21wdXRlZFN0eWxlKGVsLCB7XG5cdFx0XHRjYXRlZ29yaWVzOiBiYWtlZC5jYXRlZ29yaWVzLFxuXHRcdFx0Y2FjaGVNcyxcblx0XHRcdGxheWVyOiBCQUtFX0xBWUVSXG5cdFx0fSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGFkb3B0U2hlZXQoZWwsIGJha2VkKTtcblx0YmFrZWRMaXZlLmFkZChlbCk7XG59O1xudmFyIGJha2VJTyA9IG51bGw7XG52YXIgZW5zdXJlQmFrZUlPID0gKCkgPT4ge1xuXHRpZiAoYmFrZUlPIHx8IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGJha2VJTztcblx0YmFrZUlPID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0XHRjb25zdCBlbCA9IGVudHJ5LnRhcmdldDtcblx0XHRcdGlmICghYmFrZWRTdHlsZXMuaGFzKGVsKSkgY29udGludWU7XG5cdFx0XHRpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZWwuaXNDb25uZWN0ZWQpIHJlc3VtZUJha2VkKGVsKTtcblx0XHRcdGVsc2UgcGFya0Jha2VkKGVsKTtcblx0XHR9XG5cdH0sIHsgdGhyZXNob2xkOiAwIH0pO1xuXHRyZXR1cm4gYmFrZUlPO1xufTtcbnZhciBlbnN1cmVCYWtlZFJlY29yZCA9IChlbCwgc2VsZWN0b3IsIGNhdGVnb3JpZXMsIG1lZGlhID0gQkFLRV9TQ1JFRU5fTUVESUEpID0+IHtcblx0bGV0IGJha2VkID0gYmFrZWRTdHlsZXMuZ2V0KGVsKTtcblx0aWYgKGJha2VkKSB7XG5cdFx0YmFrZWQuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0XHRiYWtlZC5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcblx0XHRiYWtlZC5tZWRpYSA9IG1lZGlhO1xuXHRcdGJha2VkLmNhY2hlS2V5ID0gY2FjaGVLZXlGb3Ioc2VsZWN0b3IsIGNhdGVnb3JpZXMsIG1lZGlhKTtcblx0XHRyZXR1cm4gYmFrZWQ7XG5cdH1cblx0Y29uc3QgY2FuQ29uc3RydWN0ID0gc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCgpO1xuXHRiYWtlZCA9IHtcblx0XHRzaGVldDogY2FuQ29uc3RydWN0ID8gbmV3IENTU1N0eWxlU2hlZXQoKSA6IG51bGwsXG5cdFx0c3R5bGVFbDogY2FuQ29uc3RydWN0IHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksXG5cdFx0c2VsZWN0b3IsXG5cdFx0Y2F0ZWdvcmllcyxcblx0XHRjc3NUZXh0OiBcIlwiLFxuXHRcdGZpbmdlcnByaW50OiBcIlwiLFxuXHRcdGFkb3B0ZWQ6IGZhbHNlLFxuXHRcdGNhY2hlS2V5OiBjYWNoZUtleUZvcihzZWxlY3RvciwgY2F0ZWdvcmllcywgbWVkaWEpLFxuXHRcdG1lZGlhXG5cdH07XG5cdGlmIChiYWtlZC5zdHlsZUVsKSB7XG5cdFx0YmFrZWQuc3R5bGVFbC5kYXRhc2V0LnV4QmFrZWQgPSBcIlwiO1xuXHRcdGJha2VkLnN0eWxlRWwuZGF0YXNldC5vd25lciA9IFwic3R5bGUtbGliXCI7XG5cdH1cblx0YmFrZWRTdHlsZXMuc2V0KGVsLCBiYWtlZCk7XG5cdGVuc3VyZUJha2VJTygpPy5vYnNlcnZlKGVsKTtcblx0cmV0dXJuIGJha2VkO1xufTtcbnZhciBmbHVzaFJlYmFrZSA9ICgpID0+IHtcblx0cmViYWtlUXVldWVkID0gZmFsc2U7XG5cdGNvbnN0IGJhdGNoID0gWy4uLnJlYmFrZUJhdGNoXTtcblx0cmViYWtlQmF0Y2guY2xlYXIoKTtcblx0Zm9yIChjb25zdCBlbCBvZiBiYXRjaCkge1xuXHRcdGlmICghZWwuaXNDb25uZWN0ZWQgfHwgIWJha2VkU3R5bGVzLmhhcyhlbCkpIGNvbnRpbnVlO1xuXHRcdGNvbnN0IGJha2VkID0gYmFrZWRTdHlsZXMuZ2V0KGVsKTtcblx0XHRiYWtlQ29tcHV0ZWRTdHlsZShlbCwgYmFrZWQgPyB7XG5cdFx0XHRjYXRlZ29yaWVzOiBiYWtlZC5jYXRlZ29yaWVzLFxuXHRcdFx0c2VsZWN0b3I6IGJha2VkLnNlbGVjdG9yLFxuXHRcdFx0bWVkaWE6IGJha2VkLm1lZGlhXG5cdFx0fSA6IHt9KTtcblx0fVxufTtcbnZhciBzY2hlZHVsZVJlYmFrZSA9IChlbCkgPT4ge1xuXHRyZWJha2VCYXRjaC5hZGQoZWwpO1xuXHRpZiAocmViYWtlUXVldWVkKSByZXR1cm47XG5cdHJlYmFrZVF1ZXVlZCA9IHRydWU7XG5cdHF1ZXVlTWljcm90YXNrKGZsdXNoUmViYWtlKTtcbn07XG52YXIgaW52YWxpZGF0ZUJha2VkU3R5bGVzID0gKHJlYXNvbiA9IFwidGhlbWVcIikgPT4ge1xuXHRjb25zdCBmaW5nZXJwcmludCA9IGJha2VUaGVtZUZpbmdlcnByaW50KCk7XG5cdGlmIChyZWFzb24gIT09IFwiZm9yY2VcIiAmJiBmaW5nZXJwcmludCA9PT0gbGFzdEZpbmdlcnByaW50ICYmIGxhc3RGaW5nZXJwcmludCkgcmV0dXJuO1xuXHRsYXN0RmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDtcblx0Y2xlYXJBbGxDYWNoZSgpO1xuXHRmb3IgKGNvbnN0IGVsIG9mIFsuLi5iYWtlZExpdmVdKSB7XG5cdFx0Y29uc3QgYmFrZWQgPSBiYWtlZFN0eWxlcy5nZXQoZWwpO1xuXHRcdGlmICghYmFrZWQpIHtcblx0XHRcdGJha2VkTGl2ZS5kZWxldGUoZWwpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHVuYWRvcHRTaGVldChlbCwgYmFrZWQpO1xuXHRcdGJha2VkLmNzc1RleHQgPSBcIlwiO1xuXHRcdGJha2VkLmZpbmdlcnByaW50ID0gXCJcIjtcblx0XHRzY2hlZHVsZVJlYmFrZShlbCk7XG5cdH1cbn07XG52YXIgZW5zdXJlQmFrZUludmFsaWRhdGlvbiA9ICgpID0+IHtcblx0aWYgKGludmFsaWRhdGlvblJlYWR5IHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpbnZhbGlkYXRpb25SZWFkeSA9IHRydWU7XG5cdGxhc3RGaW5nZXJwcmludCA9IGJha2VUaGVtZUZpbmdlcnByaW50KCk7XG5cdHJlZ2lzdGVyU3R5bGVUcmVlSG9vaygoaG9zdCkgPT4ge1xuXHRcdGlmIChiYWtlVGhlbWVGaW5nZXJwcmludCgpICE9PSBsYXN0RmluZ2VycHJpbnQpIHtcblx0XHRcdGludmFsaWRhdGVCYWtlZFN0eWxlcyhcInN0eWxlLXRyZWVcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChob3N0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgYmFrZWRTdHlsZXMuaGFzKGhvc3QpKSBzY2hlZHVsZVJlYmFrZShob3N0KTtcblx0fSk7XG5cdHRyeSB7XG5cdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gaW52YWxpZGF0ZUJha2VkU3R5bGVzKFwidGhlbWUtYXR0clwiKSkub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcblx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5TVFlMRV9USEVNRV9PQlNFUlZFX0FUVFJTXVxuXHRcdH0pO1xuXHR9IGNhdGNoIHt9XG5cdHRyeSB7XG5cdFx0KG1hdGNoTWVkaWE/LihcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikpPy5hZGRFdmVudExpc3RlbmVyPy4oXCJjaGFuZ2VcIiwgKCkgPT4gaW52YWxpZGF0ZUJha2VkU3R5bGVzKFwiY29sb3Itc2NoZW1lXCIpKTtcblx0fSBjYXRjaCB7fVxufTtcbnZhciBiYWtlQ29tcHV0ZWRTdHlsZSA9IChlbCwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGlmICghZWwgfHwgZWwubm9kZVR5cGUgIT09IDEpIHJldHVybiBudWxsO1xuXHRpZiAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG5cdGVuc3VyZUJha2VJbnZhbGlkYXRpb24oKTtcblx0Y29uc3QgY2F0ZWdvcmllcyA9IG5vcm1hbGl6ZUNhdGVnb3JpZXMob3B0aW9ucy5jYXRlZ29yaWVzKTtcblx0Y29uc3QgbGF5ZXIgPSBvcHRpb25zLmxheWVyIHx8IFwidXgtYmFrZWRcIjtcblx0Y29uc3QgY2FjaGVNcyA9IG9wdGlvbnMuY2FjaGVNcyA/PyAzZTQ7XG5cdGNvbnN0IG1lZGlhID0gb3B0aW9ucy5tZWRpYSA9PT0gdm9pZCAwID8gQkFLRV9TQ1JFRU5fTUVESUEgOiBvcHRpb25zLm1lZGlhO1xuXHRjb25zdCBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3I/LnRyaW0oKSB8fCBlbnN1cmVTdHlsZVNjb3BlU2VsZWN0b3IoZWwpO1xuXHRjb25zdCBmaW5nZXJwcmludCA9IGJha2VUaGVtZUZpbmdlcnByaW50KHZvaWQgMCwgZWwpO1xuXHRjb25zdCBiYWtlZCA9IGVuc3VyZUJha2VkUmVjb3JkKGVsLCBzZWxlY3RvciwgY2F0ZWdvcmllcywgbWVkaWEpO1xuXHRiYWtlZC5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuXHRjb25zdCBjYWNoZWQgPSBiYWtlZENhY2hlLmdldChiYWtlZC5jYWNoZUtleSk7XG5cdGxldCBjc3NUZXh0ID0gXCJcIjtcblx0aWYgKGNhY2hlZCAmJiBjYWNoZWQuZmluZ2VycHJpbnQgPT09IGZpbmdlcnByaW50ICYmIGNhY2hlZC5jc3NUZXh0KSBjc3NUZXh0ID0gY2FjaGVkLmNzc1RleHQ7XG5cdGVsc2Uge1xuXHRcdGNvbnN0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0Y3NzVGV4dCA9IGJ1aWxkQmFrZWRDc3NUZXh0KHNlbGVjdG9yLCBjb2xsZWN0QmFrZWREZWNsYXJhdGlvbnMoY3MsIGNhdGVnb3JpZXMpLCBsYXllciwgbWVkaWEpO1xuXHR9XG5cdGlmICghY3NzVGV4dCkge1xuXHRcdHVuYWRvcHRTaGVldChlbCwgYmFrZWQpO1xuXHRcdGJha2VkTGl2ZS5kZWxldGUoZWwpO1xuXHRcdHJldHVybiBiYWtlZDtcblx0fVxuXHR3cml0ZUJha2VkQ3NzKGJha2VkLCBjc3NUZXh0KTtcblx0cmVtZW1iZXJDYWNoZShiYWtlZCwgY2FjaGVNcyk7XG5cdGlmIChpc0VsZW1lbnRWaXNpYmxlKGVsKSkge1xuXHRcdGFkb3B0U2hlZXQoZWwsIGJha2VkKTtcblx0XHRiYWtlZExpdmUuYWRkKGVsKTtcblx0fSBlbHNlIHtcblx0XHR1bmFkb3B0U2hlZXQoZWwsIGJha2VkKTtcblx0XHRiYWtlZExpdmUuZGVsZXRlKGVsKTtcblx0fVxuXHRyZXR1cm4gYmFrZWQ7XG59O1xudmFyIHVuYmFrZUNvbXB1dGVkU3R5bGUgPSAoZWwsIGtlZXBDYWNoZSA9IHRydWUpID0+IHtcblx0aWYgKCFlbCkgcmV0dXJuO1xuXHRjb25zdCBiYWtlZCA9IGJha2VkU3R5bGVzLmdldChlbCk7XG5cdGlmICghYmFrZWQpIHJldHVybjtcblx0dW5hZG9wdFNoZWV0KGVsLCBiYWtlZCk7XG5cdGJha2VkTGl2ZS5kZWxldGUoZWwpO1xuXHRiYWtlSU8/LnVub2JzZXJ2ZShlbCk7XG5cdGlmIChrZWVwQ2FjaGUgJiYgYmFrZWQuY3NzVGV4dCkgcmVtZW1iZXJDYWNoZShiYWtlZCwgREVGQVVMVF9DQUNIRV9NUyk7XG5cdGVsc2UgZHJvcENhY2hlKGJha2VkLmNhY2hlS2V5KTtcblx0YmFrZWRTdHlsZXMuZGVsZXRlKGVsKTtcbn07XG52YXIgcmViYWtlQ29tcHV0ZWRTdHlsZSA9IChlbCwgb3B0aW9ucykgPT4ge1xuXHRpZiAoIWVsKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgYmFrZWQgPSBiYWtlZFN0eWxlcy5nZXQoZWwpO1xuXHRpZiAoYmFrZWQpIHtcblx0XHR1bmFkb3B0U2hlZXQoZWwsIGJha2VkKTtcblx0XHRiYWtlZC5jc3NUZXh0ID0gXCJcIjtcblx0XHRkcm9wQ2FjaGUoYmFrZWQuY2FjaGVLZXkpO1xuXHR9XG5cdHJldHVybiBiYWtlQ29tcHV0ZWRTdHlsZShlbCwgb3B0aW9ucyA/PyAoYmFrZWQgPyB7XG5cdFx0Y2F0ZWdvcmllczogYmFrZWQuY2F0ZWdvcmllcyxcblx0XHRzZWxlY3RvcjogYmFrZWQuc2VsZWN0b3IsXG5cdFx0bWVkaWE6IGJha2VkLm1lZGlhXG5cdH0gOiB7fSkpO1xufTtcbnZhciBnZXRCYWtlZFN0eWxlID0gKGVsKSA9PiBlbCA/IGJha2VkU3R5bGVzLmdldChlbCkgOiB2b2lkIDA7XG52YXIgYmFrZVNjcmVlbkNvbG9ycyA9IChyb290LCBvcHRpb25zID0ge30pID0+IHtcblx0Y29uc3Qgb3B0cyA9IHtcblx0XHRtZWRpYTogQkFLRV9TQ1JFRU5fTUVESUEsXG5cdFx0cGllcmNlU2hhZG93OiBvcHRpb25zLnBpZXJjZVNoYWRvdyAhPT0gZmFsc2UsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXHRjb25zdCBob3N0cyA9IGNvbGxlY3RCYWtlU2NyZWVuSG9zdHMocm9vdCk7XG5cdGNvbnN0IGV4dHJhcyA9IGNvbGxlY3RCYWtlQWxzb0hvc3RzKHJvb3QsIG9wdHMuYWxzbyA/PyBiYWtlQWxzb1F1ZXJpZXNGb3Iocm9vdCksIG9wdHMucGllcmNlU2hhZG93ICE9PSBmYWxzZSk7XG5cdGNvbnN0IG91dCA9IFtdO1xuXHRjb25zdCBmb2xsb3dlcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRmb3IgKGNvbnN0IGVsIG9mIGhvc3RzKSB7XG5cdFx0Y29uc3QgYmFrZWQgPSBiYWtlQ29tcHV0ZWRTdHlsZShlbCwgb3B0cyk7XG5cdFx0aWYgKGJha2VkKSBvdXQucHVzaChiYWtlZCk7XG5cdH1cblx0Zm9yIChjb25zdCB7IGVsLCBzZWxlY3RvciB9IG9mIGV4dHJhcykge1xuXHRcdGlmIChob3N0cy5pbmNsdWRlcyhlbCkpIGNvbnRpbnVlO1xuXHRcdGNvbnN0IGJha2VkID0gYmFrZUNvbXB1dGVkU3R5bGUoZWwsIHtcblx0XHRcdC4uLm9wdHMsXG5cdFx0XHRzZWxlY3RvclxuXHRcdH0pO1xuXHRcdGlmIChiYWtlZCkgb3V0LnB1c2goYmFrZWQpO1xuXHRcdGZvbGxvd2Vycy5hZGQoZWwpO1xuXHR9XG5cdGlmIChyb290KSB7XG5cdFx0Y29uc3QgcHJldiA9IGJha2VkRm9sbG93ZXJzLmdldChyb290KTtcblx0XHRpZiAocHJldikge1xuXHRcdFx0Zm9yIChjb25zdCBlbCBvZiBwcmV2KSBpZiAoIWZvbGxvd2Vycy5oYXMoZWwpICYmICFob3N0cy5pbmNsdWRlcyhlbCkpIHVuYmFrZUNvbXB1dGVkU3R5bGUoZWwsIHRydWUpO1xuXHRcdH1cblx0XHRpZiAoZm9sbG93ZXJzLnNpemUpIGJha2VkRm9sbG93ZXJzLnNldChyb290LCBmb2xsb3dlcnMpO1xuXHRcdGVsc2UgYmFrZWRGb2xsb3dlcnMuZGVsZXRlKHJvb3QpO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59O1xudmFyIHVuYmFrZVNjcmVlbkNvbG9ycyA9IChyb290LCBrZWVwQ2FjaGUgPSB0cnVlKSA9PiB7XG5cdGlmICghcm9vdCkgcmV0dXJuO1xuXHRjb25zdCBmb2xsb3dlcnMgPSBiYWtlZEZvbGxvd2Vycy5nZXQocm9vdCk7XG5cdGJha2VkRm9sbG93ZXJzLmRlbGV0ZShyb290KTtcblx0Zm9yIChjb25zdCBlbCBvZiBjb2xsZWN0QmFrZVNjcmVlbkhvc3RzKHJvb3QpKSB1bmJha2VDb21wdXRlZFN0eWxlKGVsLCBrZWVwQ2FjaGUpO1xuXHRpZiAoZm9sbG93ZXJzKSBmb3IgKGNvbnN0IGVsIG9mIGZvbGxvd2VycykgdW5iYWtlQ29tcHV0ZWRTdHlsZShlbCwga2VlcENhY2hlKTtcbn07XG52YXIgc2NoZWR1bGVCYWtlU2NyZWVuQ29sb3JzID0gKHJvb3QsIG9wdGlvbnMpID0+IHtcblx0Y29uc3QgcnVuID0gKHJldHJ5TWlzcyA9IHRydWUpID0+IHtcblx0XHRiYWtlU2NyZWVuQ29sb3JzKHJvb3QsIG9wdGlvbnMpO1xuXHRcdGlmICghcmV0cnlNaXNzIHx8ICFyb290KSByZXR1cm47XG5cdFx0Y29uc3QgcXVlcmllcyA9IG9wdGlvbnM/LmFsc28gPz8gYmFrZUFsc29RdWVyaWVzRm9yKHJvb3QpO1xuXHRcdGNvbnN0IHBpZXJjZSA9IG9wdGlvbnM/LnBpZXJjZVNoYWRvdyAhPT0gZmFsc2U7XG5cdFx0aWYgKCFxdWVyaWVzLmxlbmd0aCkgcmV0dXJuO1xuXHRcdGlmIChxdWVyaWVzLnNvbWUoKHNlbCkgPT4gIShwaWVyY2UgPyBxdWVyeUZpcnN0RGVlcChyb290LCBzZWwpIDogcm9vdC5xdWVyeVNlbGVjdG9yKHNlbCkpKSAmJiB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSBcImZ1bmN0aW9uXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBydW4oZmFsc2UpKTtcblx0fTtcblx0aWYgKCFyb290IHx8IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHJ1bihmYWxzZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBydW4odHJ1ZSkpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2NvbXBvbmVudC50c1xudmFyIHN5bmNBZG9wdGVkU2hlZXRzVG9TaGFkb3cgPSAoYlRvKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBiVG8/LnNoYWRvd1Jvb3Q7XG5cdGlmICghcm9vdCkgcmV0dXJuO1xuXHRjb25zdCBhZG9wdGVkU2hlZXRzID0gYWRvcHRlZFN0eWxlU2hlZXRzQ2FjaGUuZ2V0KGJUbykgfHwgW107XG5cdGZvciAoY29uc3Qgc2hlZXQgb2YgYWRvcHRlZFNoZWV0cykgZW5zdXJlQWRvcHRlZFNoZWV0Q29udGVudChzaGVldCk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgbGl2ZSA9IHJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzIHx8IFtdO1xuXHRcdHJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gWy4uLmFkb3B0ZWRTaGVldHMuZmlsdGVyKChzKSA9PiAhbGl2ZS5pbmNsdWRlcyhzKSksIC4uLi8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5saXZlXSldO1xuXHR9IGNhdGNoIHt9XG59O1xudmFyIGFkZEFkb3B0ZWRTaGVldFRvRWxlbWVudCA9IChiVG8sIHNoZWV0KSA9PiB7XG5cdGxldCBhZG9wdGVkU2hlZXRzID0gYWRvcHRlZFN0eWxlU2hlZXRzQ2FjaGUuZ2V0KGJUbyk7XG5cdGlmICghYWRvcHRlZFNoZWV0cykgYWRvcHRlZFN0eWxlU2hlZXRzQ2FjaGUuc2V0KGJUbywgYWRvcHRlZFNoZWV0cyA9IFtdKTtcblx0aWYgKHNoZWV0ICYmIGFkb3B0ZWRTaGVldHMuaW5kZXhPZihzaGVldCkgPCAwKSBhZG9wdGVkU2hlZXRzLnB1c2goc2hlZXQpO1xuXHRlbnN1cmVBZG9wdGVkU2hlZXRDb250ZW50KHNoZWV0KTtcblx0c3luY0Fkb3B0ZWRTaGVldHNUb1NoYWRvdyhiVG8pO1xufTtcbnZhciBlbnN1cmVTaGFkb3dDc3NGYWxsYmFjayA9IChiVG8sIGNzc1RleHQpID0+IHtcblx0Y29uc3Qgcm9vdCA9IGJUbz8uc2hhZG93Um9vdDtcblx0aWYgKCFyb290IHx8ICFjc3NUZXh0KSByZXR1cm4gbnVsbDtcblx0bGV0IHN0eWxlID0gcm9vdC5xdWVyeVNlbGVjdG9yPy4oYHN0eWxlWyR7SE9TVF9DU1NfRkFMTEJBQ0t9XWApO1xuXHRpZiAoIXN0eWxlKSB7XG5cdFx0c3R5bGUgPSBsb2FkSW5saW5lU3R5bGUoY3NzVGV4dCwgcm9vdCwgXCJcIik7XG5cdFx0aWYgKHN0eWxlKSBzdHlsZS5zZXRBdHRyaWJ1dGUoSE9TVF9DU1NfRkFMTEJBQ0ssIFwiXCIpO1xuXHR9IGVsc2UgaWYgKHN0eWxlLnRleHRDb250ZW50ICE9PSBjc3NUZXh0KSBzdHlsZS50ZXh0Q29udGVudCA9IGNzc1RleHQ7XG5cdHJldHVybiBzdHlsZTtcbn07XG52YXIgcmVoeWRyYXRlQWRvcHRlZFN0eWxlU2hlZXRzID0gKHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKCFyb290KSByZXR1cm47XG5cdGNvbnN0IHJlc3RvcmUgPSAoaG9zdCkgPT4ge1xuXHRcdGlmICghaG9zdD8uc2hhZG93Um9vdCkgcmV0dXJuO1xuXHRcdGVuc3VyZVNoYWRvd0Nzc0ZhbGxiYWNrKGhvc3QsIGhvc3RDc3NUZXh0KGhvc3QpKTtcblx0XHRzeW5jQWRvcHRlZFNoZWV0c1RvU2hhZG93KGhvc3QpO1xuXHR9O1xuXHRpZiAocm9vdC5ub2RlVHlwZSA9PT0gMSkgcmVzdG9yZShyb290KTtcblx0Y29uc3QgdmlzaXQgPSAobm9kZSkgPT4ge1xuXHRcdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHRjaGlsZHJlbiA9IG5vZGUucXVlcnlTZWxlY3RvckFsbChcIipcIik7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGhvc3QgPSBjaGlsZHJlbltpXTtcblx0XHRcdGlmIChob3N0LnNoYWRvd1Jvb3QpIHtcblx0XHRcdFx0cmVzdG9yZShob3N0KTtcblx0XHRcdFx0dmlzaXQoaG9zdC5zaGFkb3dSb290KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHZpc2l0KHJvb3QpO1xufTtcbnZhciBob3N0Q3NzVGV4dCA9IChiVG8pID0+IHtcblx0Y29uc3Qgc3JjID0gYlRvPy5zdHlsZXM7XG5cdGlmICh0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiKSByZXR1cm4gc3JjO1xuXHRpZiAodHlwZW9mIHNyYyA9PT0gXCJmdW5jdGlvblwiKSB0cnkge1xuXHRcdGNvbnN0IG91dCA9IHNyYy5jYWxsKGJUbyk7XG5cdFx0aWYgKHR5cGVvZiBvdXQgPT09IFwic3RyaW5nXCIpIHJldHVybiBvdXQ7XG5cdFx0cmV0dXJuIGNzc1RleHRGb3JBZG9wdGVkU2hlZXQob3V0KTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0cmV0dXJuIGNzc1RleHRGb3JBZG9wdGVkU2hlZXQoc3JjKTtcbn07XG52YXIgZW5zdXJlSG9zdFN0eWxlcyA9IChiVG8pID0+IHtcblx0aWYgKCFiVG8pIHJldHVybjtcblx0aWYgKGJUby5zdHlsZXMgIT0gbnVsbCkgbG9hZENhY2hlZFN0eWxlcyhiVG8sIGJUby5zdHlsZXMpO1xuXHRzeW5jQWRvcHRlZFNoZWV0c1RvU2hhZG93KGJUbyk7XG5cdGVuc3VyZVNoYWRvd0Nzc0ZhbGxiYWNrKGJUbywgaG9zdENzc1RleHQoYlRvKSk7XG59O1xudmFyIHN0eWxlRmx1c2hCYXRjaCA9IFtdO1xudmFyIHN0eWxlRmx1c2hTY2hlZHVsZWQgPSBmYWxzZTtcbnZhciBzY2hlZHVsZUVuc3VyZUhvc3RTdHlsZXMgPSAoYlRvKSA9PiB7XG5cdGlmICghYlRvIHx8ICEoYlRvIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgc3R5bGVGbHVzaFBlbmRpbmcuaGFzKGJUbykpIHJldHVybjtcblx0c3R5bGVGbHVzaFBlbmRpbmcuYWRkKGJUbyk7XG5cdHN0eWxlRmx1c2hCYXRjaC5wdXNoKGJUbyk7XG5cdGlmIChzdHlsZUZsdXNoU2NoZWR1bGVkKSByZXR1cm47XG5cdHN0eWxlRmx1c2hTY2hlZHVsZWQgPSB0cnVlO1xuXHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG5cdFx0c3R5bGVGbHVzaFNjaGVkdWxlZCA9IGZhbHNlO1xuXHRcdGNvbnN0IGJhdGNoID0gc3R5bGVGbHVzaEJhdGNoO1xuXHRcdHN0eWxlRmx1c2hCYXRjaCA9IFtdO1xuXHRcdGZvciAoY29uc3QgaG9zdCBvZiBiYXRjaCkge1xuXHRcdFx0c3R5bGVGbHVzaFBlbmRpbmcuZGVsZXRlKGhvc3QpO1xuXHRcdFx0aWYgKGhvc3QuaXNDb25uZWN0ZWQpIGVuc3VyZUhvc3RTdHlsZXMoaG9zdCk7XG5cdFx0fVxuXHR9KTtcbn07XG5yZWdpc3RlclN0eWxlVHJlZUhvb2soKGVsKSA9PiBzY2hlZHVsZUVuc3VyZUhvc3RTdHlsZXMoZWwpKTtcbnZhciBsb2FkQ2FjaGVkU3R5bGVzID0gKGJUbywgc3JjKSA9PiB7XG5cdGlmICghc3JjKSByZXR1cm4gbnVsbDtcblx0bGV0IHJlc29sdmVkU3JjID0gc3JjO1xuXHRpZiAodHlwZW9mIHNyYyA9PSBcImZ1bmN0aW9uXCIpIHRyeSB7XG5cdFx0Y29uc3Qgd2VhayA9IG5ldyBXZWFrUmVmKGJUbyk7XG5cdFx0cmVzb2x2ZWRTcmMgPSBzcmMuY2FsbChiVG8sIHdlYWspO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiRXJyb3IgY2FsbGluZyBzdHlsZXMgZnVuY3Rpb246XCIsIGUpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmIChyZXNvbHZlZFNyYyAmJiB0eXBlb2YgQ1NTU3R5bGVTaGVldCAhPSBcInVuZGVmaW5lZFwiICYmIHJlc29sdmVkU3JjIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCkge1xuXHRcdGFkZEFkb3B0ZWRTaGVldFRvRWxlbWVudChiVG8sIHJlc29sdmVkU3JjKTtcblx0XHRyZXR1cm4gZW5zdXJlU2hhZG93Q3NzRmFsbGJhY2soYlRvLCBjc3NUZXh0Rm9yQWRvcHRlZFNoZWV0KHJlc29sdmVkU3JjKSk7XG5cdH1cblx0aWYgKHJlc29sdmVkU3JjIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHRcdHJlc29sdmVkU3JjLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpIGFkZEFkb3B0ZWRTaGVldFRvRWxlbWVudChiVG8sIHJlc3VsdCk7XG5cdFx0XHRlbHNlIGlmIChyZXN1bHQgIT0gbnVsbCkgbG9hZENhY2hlZFN0eWxlcyhiVG8sIHJlc3VsdCk7XG5cdFx0fSkuY2F0Y2goKGUpID0+IHtcblx0XHRcdGNvbnNvbGUud2FybihcIkVycm9yIGxvYWRpbmcgYWRvcHRlZCBzdHlsZXNoZWV0OlwiLCBlKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRpZiAodHlwZW9mIHJlc29sdmVkU3JjID09IFwic3RyaW5nXCIgfHwgcmVzb2x2ZWRTcmMgaW5zdGFuY2VvZiBCbG9iIHx8IHJlc29sdmVkU3JjIGluc3RhbmNlb2YgRmlsZSkge1xuXHRcdGNvbnN0IGFkb3B0ZWQgPSBsb2FkQXNBZG9wdGVkKHJlc29sdmVkU3JjLCBcIlwiKTtcblx0XHRpZiAoYWRvcHRlZCkge1xuXHRcdFx0Y29uc3QgYWRkQWRvcHRlZFNoZWV0ID0gKHNoZWV0KSA9PiB7XG5cdFx0XHRcdGFkZEFkb3B0ZWRTaGVldFRvRWxlbWVudChiVG8sIHNoZWV0KTtcblx0XHRcdH07XG5cdFx0XHRpZiAoYWRvcHRlZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcblx0XHRcdFx0YWRvcHRlZC50aGVuKChzaGVldCkgPT4ge1xuXHRcdFx0XHRcdGFkZEFkb3B0ZWRTaGVldChzaGVldCk7XG5cdFx0XHRcdFx0ZW5zdXJlU2hhZG93Q3NzRmFsbGJhY2soYlRvLCB0eXBlb2YgcmVzb2x2ZWRTcmMgPT0gXCJzdHJpbmdcIiA/IHJlc29sdmVkU3JjIDogY3NzVGV4dEZvckFkb3B0ZWRTaGVldChzaGVldCkpO1xuXHRcdFx0XHR9KS5jYXRjaCgoZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybihcIkVycm9yIGxvYWRpbmcgYWRvcHRlZCBzdHlsZXNoZWV0OlwiLCBlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkQWRvcHRlZFNoZWV0KGFkb3B0ZWQpO1xuXHRcdFx0XHRyZXR1cm4gZW5zdXJlU2hhZG93Q3NzRmFsbGJhY2soYlRvLCB0eXBlb2YgcmVzb2x2ZWRTcmMgPT0gXCJzdHJpbmdcIiA/IHJlc29sdmVkU3JjIDogY3NzVGV4dEZvckFkb3B0ZWRTaGVldChhZG9wdGVkKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGNvbnN0IHNvdXJjZSA9IHR5cGVvZiBzcmMgPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBzcmMgPT0gXCJvYmplY3RcIiA/IHN0eWxlRWxlbWVudENhY2hlIDogc3R5bGVDYWNoZTtcblx0Y29uc3QgY2FjaGVkID0gc291cmNlLmdldChzcmMpO1xuXHRsZXQgc3R5bGVFbGVtZW50ID0gY2FjaGVkPy5zdHlsZUVsZW1lbnQ7XG5cdGxldCB2YXJzID0gY2FjaGVkPy52YXJzO1xuXHRpZiAoIWNhY2hlZCkge1xuXHRcdGxldCBzdHlsZXMgPSBgYDtcblx0XHRsZXQgcHJvcHMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHJlc29sdmVkU3JjID09IFwic3RyaW5nXCIpIHN0eWxlcyA9IHJlc29sdmVkU3JjIHx8IFwiXCI7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIHJlc29sdmVkU3JjID09IFwib2JqZWN0XCIgJiYgcmVzb2x2ZWRTcmMgIT0gbnVsbCkge1xuXHRcdFx0aWYgKHJlc29sdmVkU3JjIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCkgc3R5bGVFbGVtZW50ID0gcmVzb2x2ZWRTcmM7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3R5bGVzID0gdHlwZW9mIHJlc29sdmVkU3JjLmNzcyA9PSBcInN0cmluZ1wiID8gcmVzb2x2ZWRTcmMuY3NzIDogdHlwZW9mIHJlc29sdmVkU3JjID09IFwic3RyaW5nXCIgPyByZXNvbHZlZFNyYyA6IFN0cmluZyhyZXNvbHZlZFNyYyk7XG5cdFx0XHRcdHByb3BzID0gcmVzb2x2ZWRTcmM/LnByb3BzID8/IHByb3BzO1xuXHRcdFx0XHR2YXJzID0gcmVzb2x2ZWRTcmM/LnZhcnMgPz8gdmFycztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFzdHlsZUVsZW1lbnQgJiYgc3R5bGVzKSBzdHlsZUVsZW1lbnQgPSBsb2FkSW5saW5lU3R5bGUoc3R5bGVzLCBiVG8sIFwidXgtbGF5ZXJcIik7XG5cdFx0c291cmNlLnNldChzcmMsIHtcblx0XHRcdGNzczogc3R5bGVzLFxuXHRcdFx0cHJvcHMsXG5cdFx0XHR2YXJzLFxuXHRcdFx0c3R5bGVFbGVtZW50XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9iaW5kLnRzXG52YXIgaXNMaW5rZXJMaWtlID0gKHZhbHVlKSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBcInJlZlwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZT8udW5iaW5kID09PSBcImZ1bmN0aW9uXCI7XG52YXIgYmluZFdpdGggPSAoZWwsIHByb3AsIHZhbHVlLCBoYW5kbGVyKSA9PiB7XG5cdGNvbnN0IGxpbmtlciA9IGlzTGlua2VyTGlrZSh2YWx1ZSkgPyB2YWx1ZSA6IG51bGw7XG5cdGlmIChsaW5rZXIpIHtcblx0XHRsaW5rZXIuYmluZD8uKCk7XG5cdFx0dmFsdWUgPSBsaW5rZXIucmVmO1xuXHR9XG5cdGhhbmRsZXI/LihlbCwgcHJvcCwgdmFsdWUpO1xuXHRjb25zdCB3ZWwgPSB0b1JlZihlbCk7XG5cdGNvbnN0IHd2ID0gdG9SZWYodmFsdWUpO1xuXHRjb25zdCB1biA9IGFmZmVjdGVkPy4oW3ZhbHVlLCBcInZhbHVlXCJdLCAoY3VycikgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnRSZWYgPSBkZXJlZih3ZWwpO1xuXHRcdGNvbnN0IHZhbHVlUmVmID0gZGVyZWYod3YpO1xuXHRcdGNvbnN0IHYgPSAkZ2V0VmFsdWUodmFsdWVSZWYpID8/ICRnZXRWYWx1ZShjdXJyKTtcblx0XHRoYW5kbGVyPy4oZWxlbWVudFJlZiwgcHJvcCwgdik7XG5cdH0pO1xuXHRjb25zdCB1bnN1YiA9ICgpID0+IHtcblx0XHRsaW5rZXI/LnVuYmluZD8uKCk7XG5cdFx0dW4/LigpO1xuXHR9O1xuXHRhZGRUb0NhbGxDaGFpbih2YWx1ZSwgU3ltYm9sLmRpc3Bvc2UsIHVuc3ViKTtcblx0cmV0dXJuIHVuc3ViO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL0FuaW1hdGFibGUudHNcbnZhciBhbmltYXRhYmxlSWQgPSAwO1xudmFyIG9uU2Nyb2xsID0gKG8gPSB7fSkgPT4gKHtcblx0a2luZDogXCJzY3JvbGxcIixcblx0Li4ub1xufSk7XG52YXIgb25WaWV3ID0gKG8gPSB7fSkgPT4gKHtcblx0a2luZDogXCJ2aWV3XCIsXG5cdC4uLm9cbn0pO1xudmFyIEFuaW1hdGFibGVWYWx1ZSA9IGNsYXNzIHtcblx0W0FOSU1BVEFCTEVfQlJBTkRdID0gdHJ1ZTtcblx0aWQgPSBhbmltYXRhYmxlSWQrKztcblx0I3N0ZXBzO1xuXHQjb3B0aW9ucztcblx0I2N1cnJlbnQ7XG5cdCNzdWJzY3JpYmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdCNhdHRhY2htZW50cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdCNyZXNvbHZlRWxlbWVudFJlZih2LCBzZWxmKSB7XG5cdFx0aWYgKHYgPT0gbnVsbCB8fCB2ID09PSBcInNlbGZcIikgcmV0dXJuIHNlbGY7XG5cdFx0aWYgKHYgPT09IFwicm9vdFwiKSByZXR1cm4gc2VsZi5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgPz8gc2VsZi5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRpZiAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgXCJ2YWx1ZVwiIGluIHYgJiYgISh2IGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybiB2LnZhbHVlID8/IHNlbGY7XG5cdFx0cmV0dXJuIHY7XG5cdH1cblx0I2ZpbmROZWFyZXN0U2Nyb2xsZXIoZWwpIHtcblx0XHRmb3IgKGxldCBub2RlID0gZWwucGFyZW50RWxlbWVudDsgbm9kZTsgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudCkge1xuXHRcdFx0Y29uc3QgcyA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdFx0XHRpZiAoLyhhdXRvfHNjcm9sbHxvdmVybGF5KS8udGVzdChzLm92ZXJmbG93ICsgcy5vdmVyZmxvd1ggKyBzLm92ZXJmbG93WSkpIHJldHVybiBub2RlO1xuXHRcdH1cblx0XHRyZXR1cm4gZWwub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50ID8/IGVsLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHR9XG5cdCNjcmVhdGVUaW1lbGluZShlbGVtZW50LCB0cmlnZ2VyKSB7XG5cdFx0Y29uc3Qgd2luID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3ID8/IGdsb2JhbFRoaXM7XG5cdFx0aWYgKGlzU2Nyb2xsRHJpdmVuKHRyaWdnZXIpKSB7XG5cdFx0XHRjb25zdCBTY3JvbGxUaW1lbGluZUN0b3IgPSB3aW4uU2Nyb2xsVGltZWxpbmU7XG5cdFx0XHRpZiAodHlwZW9mIFNjcm9sbFRpbWVsaW5lQ3RvciAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcblx0XHRcdHJldHVybiBuZXcgU2Nyb2xsVGltZWxpbmVDdG9yKHtcblx0XHRcdFx0c291cmNlOiB0cmlnZ2VyLnNvdXJjZSA9PT0gXCJuZWFyZXN0XCIgfHwgdHJpZ2dlci5zb3VyY2UgPT0gbnVsbCA/IHRoaXMuI2ZpbmROZWFyZXN0U2Nyb2xsZXIoZWxlbWVudCkgOiB0aGlzLiNyZXNvbHZlRWxlbWVudFJlZih0cmlnZ2VyLnNvdXJjZSwgZWxlbWVudCksXG5cdFx0XHRcdGF4aXM6IHRyaWdnZXIuYXhpcyA/PyBcImJsb2NrXCJcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjb25zdCBWaWV3VGltZWxpbmVDdG9yID0gd2luLlZpZXdUaW1lbGluZTtcblx0XHRpZiAodHlwZW9mIFZpZXdUaW1lbGluZUN0b3IgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIG5ldyBWaWV3VGltZWxpbmVDdG9yKHtcblx0XHRcdHN1YmplY3Q6IHRyaWdnZXIuc3ViamVjdCA/IHRoaXMuI3Jlc29sdmVFbGVtZW50UmVmKHRyaWdnZXIuc3ViamVjdCwgZWxlbWVudCkgOiBlbGVtZW50LFxuXHRcdFx0YXhpczogdHJpZ2dlci5heGlzID8/IFwiYmxvY2tcIixcblx0XHRcdGluc2V0OiB0cmlnZ2VyLmluc2V0XG5cdFx0fSk7XG5cdH1cblx0I3N0YXJ0VGltZWxpbmVEcml2ZW4oZWxlbWVudCwgYXR0YWNobWVudCwgcGxhbiwgdHJpZ2dlcikge1xuXHRcdGNvbnN0IHRpbWVsaW5lID0gdGhpcy4jY3JlYXRlVGltZWxpbmUoZWxlbWVudCwgdHJpZ2dlcik7XG5cdFx0aWYgKCF0aW1lbGluZSkgcmV0dXJuIHRoaXMuI3N0YXJ0VGltZWxpbmVGYWxsYmFjayhlbGVtZW50LCBhdHRhY2htZW50LCBwbGFuLCB0cmlnZ2VyKTtcblx0XHRjb25zdCB0aW1pbmcgPSB0aGlzLiNidWlsZFRpbWluZygpO1xuXHRcdGNvbnN0IGFuaW1hdGlvbiA9IGVsZW1lbnQuYW5pbWF0ZSh0aGlzLiNidWlsZEtleWZyYW1lcyhwbGFuKSwge1xuXHRcdFx0Li4udGltaW5nLFxuXHRcdFx0ZHVyYXRpb246IFwiYXV0b1wiLFxuXHRcdFx0ZGVsYXk6IDAsXG5cdFx0XHRlbmREZWxheTogMCxcblx0XHRcdGl0ZXJhdGlvbnM6IDEsXG5cdFx0XHRmaWxsOiB0aGlzLiNvcHRpb25zLmZpbGwgPz8gXCJib3RoXCIsXG5cdFx0XHR0aW1lbGluZVxuXHRcdH0pO1xuXHRcdGlmICh0cmlnZ2VyLnJhbmdlU3RhcnQpIGFuaW1hdGlvbi5yYW5nZVN0YXJ0ID0gdHJpZ2dlci5yYW5nZVN0YXJ0O1xuXHRcdGlmICh0cmlnZ2VyLnJhbmdlRW5kKSBhbmltYXRpb24ucmFuZ2VFbmQgPSB0cmlnZ2VyLnJhbmdlRW5kO1xuXHRcdGF0dGFjaG1lbnQuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuXHRcdHJldHVybiAoKSA9PiBhbmltYXRpb24uY2FuY2VsKCk7XG5cdH1cblx0Y29uc3RydWN0b3Ioc3RlcHMsIG9wdGlvbnMgPSB7fSkge1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShzdGVwcykgfHwgc3RlcHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFuaW1hdGFibGUoKSBleHBlY3RzIGF0IGxlYXN0IDIgc3RlcHNcIik7XG5cdFx0dGhpcy4jc3RlcHMgPSBzdGVwcztcblx0XHR0aGlzLiNvcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLiNjdXJyZW50ID0gdGhpcy4jcmVzb2x2ZVN0ZXAoc3RlcHNbMF0pO1xuXHR9XG5cdCNzdGFydFRpbWVsaW5lRmFsbGJhY2soZWxlbWVudCwgYXR0YWNobWVudCwgcGxhbiwgdHJpZ2dlcikge1xuXHRcdGNvbnN0IERVUkFUSU9OID0gMWU0O1xuXHRcdGNvbnN0IGFuaW1hdGlvbiA9IGVsZW1lbnQuYW5pbWF0ZSh0aGlzLiNidWlsZEtleWZyYW1lcyhwbGFuKSwge1xuXHRcdFx0Li4udGhpcy4jYnVpbGRUaW1pbmcoKSxcblx0XHRcdGR1cmF0aW9uOiBEVVJBVElPTixcblx0XHRcdGRlbGF5OiAwLFxuXHRcdFx0aXRlcmF0aW9uczogMSxcblx0XHRcdGZpbGw6IFwiYm90aFwiXG5cdFx0fSk7XG5cdFx0YW5pbWF0aW9uLnBhdXNlKCk7XG5cdFx0YXR0YWNobWVudC5hbmltYXRpb24gPSBhbmltYXRpb247XG5cdFx0Y29uc3Qgc2Nyb2xsZXIgPSBpc1Njcm9sbERyaXZlbih0cmlnZ2VyKSA/IHRyaWdnZXIuc291cmNlID09PSBcIm5lYXJlc3RcIiB8fCB0cmlnZ2VyLnNvdXJjZSA9PSBudWxsID8gdGhpcy4jZmluZE5lYXJlc3RTY3JvbGxlcihlbGVtZW50KSA6IHRoaXMuI3Jlc29sdmVFbGVtZW50UmVmKHRyaWdnZXIuc291cmNlLCBlbGVtZW50KSA6IHRoaXMuI2ZpbmROZWFyZXN0U2Nyb2xsZXIoZWxlbWVudCk7XG5cdFx0bGV0IHJhZklkID0gMDtcblx0XHRjb25zdCBjb21wdXRlUHJvZ3Jlc3MgPSAoKSA9PiB7XG5cdFx0XHRpZiAoaXNWaWV3RHJpdmVuKHRyaWdnZXIpKSB7XG5cdFx0XHRcdGNvbnN0IHZwID0gc2Nyb2xsZXIgPT09IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgPyB7XG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdGhlaWdodDogaW5uZXJIZWlnaHRcblx0XHRcdFx0fSA6IHNjcm9sbGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0Y29uc3QgdG90YWwgPSB2cC5oZWlnaHQgKyByZWN0LmhlaWdodDtcblx0XHRcdFx0cmV0dXJuIE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh2cC50b3AgKyB2cC5oZWlnaHQgLSByZWN0LnRvcCkgLyB0b3RhbCkpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZWwgPSBzY3JvbGxlcjtcblx0XHRcdGNvbnN0IG1heCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodDtcblx0XHRcdHJldHVybiBtYXggPiAwID8gZWwuc2Nyb2xsVG9wIC8gbWF4IDogMDtcblx0XHR9O1xuXHRcdGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWQpO1xuXHRcdFx0cmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHRhbmltYXRpb24uY3VycmVudFRpbWUgPSBjb21wdXRlUHJvZ3Jlc3MoKSAqIERVUkFUSU9OO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBsaXN0ZW5UYXJnZXQgPSBzY3JvbGxlciA9PT0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCA/IHdpbmRvdyA6IHNjcm9sbGVyO1xuXHRcdGxpc3RlblRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cdFx0b25TY3JvbGwoKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWQpO1xuXHRcdFx0bGlzdGVuVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuXHRcdFx0YW5pbWF0aW9uLmNhbmNlbCgpO1xuXHRcdH07XG5cdH1cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLiNjdXJyZW50O1xuXHR9XG5cdHNldCB2YWx1ZShuZXh0KSB7XG5cdFx0dGhpcy4jY3VycmVudCA9IG5leHQ7XG5cdFx0Zm9yIChjb25zdCBjYiBvZiB0aGlzLiNzdWJzY3JpYmVycykgY2IobmV4dCk7XG5cdH1cblx0dmFsdWVPZigpIHtcblx0XHRyZXR1cm4gdGhpcy4jY3VycmVudDtcblx0fVxuXHR0b1N0cmluZygpIHtcblx0XHRjb25zdCB2ID0gdGhpcy4jY3VycmVudDtcblx0XHRyZXR1cm4gdiA9PSBudWxsID8gXCJcIiA6IFN0cmluZyh2KTtcblx0fVxuXHRbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG5cdFx0aWYgKGhpbnQgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdGNvbnN0IG4gPSBOdW1iZXIodGhpcy4jY3VycmVudCk7XG5cdFx0XHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdH1cblx0c3Vic2NyaWJlKGNiKSB7XG5cdFx0dGhpcy4jc3Vic2NyaWJlcnMuYWRkKGNiKTtcblx0XHRyZXR1cm4gKCkgPT4gdGhpcy4jc3Vic2NyaWJlcnMuZGVsZXRlKGNiKTtcblx0fVxuXHRnZXQgb3B0aW9ucygpIHtcblx0XHRyZXR1cm4gdGhpcy4jb3B0aW9ucztcblx0fVxuXHRnZXQgc3RlcHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI3N0ZXBzO1xuXHR9XG5cdCNyZXNvbHZlU3RlcChzdGVwKSB7XG5cdFx0aWYgKHN0ZXAgIT0gbnVsbCAmJiB0eXBlb2Ygc3RlcCA9PT0gXCJvYmplY3RcIiAmJiBcInZhbHVlXCIgaW4gc3RlcCkgcmV0dXJuIHN0ZXAudmFsdWU7XG5cdFx0cmV0dXJuIHN0ZXA7XG5cdH1cblx0I2J1aWxkS2V5ZnJhbWVzKHBsYW4pIHtcblx0XHRjb25zdCBzdGVwcyA9IHRoaXMuI3N0ZXBzLm1hcCgocykgPT4gdGhpcy4jcmVzb2x2ZVN0ZXAocykpO1xuXHRcdGNvbnN0IGNvdW50ID0gc3RlcHMubGVuZ3RoO1xuXHRcdGNvbnN0IG9mZnNldHMgPSB0aGlzLiNvcHRpb25zLm9mZnNldHM7XG5cdFx0Y29uc3QgZWFzaW5nID0gdGhpcy4jb3B0aW9ucy5lYXNpbmc7XG5cdFx0cmV0dXJuIHN0ZXBzLm1hcCgocmF3LCBpKSA9PiB7XG5cdFx0XHRjb25zdCBmcmFtZSA9IHsgb2Zmc2V0OiBvZmZzZXRzPy5baV0gPz8gKGNvdW50ID4gMSA/IGkgLyAoY291bnQgLSAxKSA6IDApIH07XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShlYXNpbmcpKSB7XG5cdFx0XHRcdGlmIChlYXNpbmdbaV0pIGZyYW1lLmVhc2luZyA9IGVhc2luZ1tpXTtcblx0XHRcdH1cblx0XHRcdGxldCB2YWx1ZSA9IHJhdztcblx0XHRcdGlmIChwbGFuLm1vZGUgPT09IFwicHJvcGVydHlcIiAmJiBwbGFuLnVuaXQgIT0gbnVsbCAmJiB0eXBlb2YgcmF3ID09PSBcIm51bWJlclwiKSB2YWx1ZSA9IGAke3Jhd30ke3BsYW4udW5pdH1gO1xuXHRcdFx0aWYgKHBsYW4ubW9kZSA9PT0gXCJjdXN0b20tcHJvcGVydHlcIiAmJiB0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSB2YWx1ZSA9IFN0cmluZyhyYXcpO1xuXHRcdFx0ZnJhbWVbcGxhbi50YXJnZXRdID0gdmFsdWU7XG5cdFx0XHRyZXR1cm4gZnJhbWU7XG5cdFx0fSk7XG5cdH1cblx0I2J1aWxkVGltaW5nKCkge1xuXHRcdGNvbnN0IG8gPSB0aGlzLiNvcHRpb25zO1xuXHRcdHJldHVybiB7XG5cdFx0XHRkdXJhdGlvbjogcGFyc2VUaW1lKG8uZHVyYXRpb24sIDMwMCksXG5cdFx0XHRkZWxheTogcGFyc2VUaW1lKG8uZGVsYXksIDApLFxuXHRcdFx0ZW5kRGVsYXk6IG8uZW5kRGVsYXkgPz8gMCxcblx0XHRcdGl0ZXJhdGlvbnM6IG5vcm1hbGl6ZUl0ZXJhdGlvbnMoby5pdGVyYXRpb25zKSxcblx0XHRcdGRpcmVjdGlvbjogby5kaXJlY3Rpb24gPz8gXCJub3JtYWxcIixcblx0XHRcdGZpbGw6IG8uZmlsbCA/PyBcImJvdGhcIixcblx0XHRcdGNvbXBvc2l0ZTogby5jb21wb3NpdGUsXG5cdFx0XHRlYXNpbmc6IEFycmF5LmlzQXJyYXkoby5lYXNpbmcpID8gXCJsaW5lYXJcIiA6IG8uZWFzaW5nID8/IFwibGluZWFyXCJcblx0XHR9O1xuXHR9XG5cdGF0dGFjaChlbGVtZW50LCBwbGFuKSB7XG5cdFx0Y29uc3QgYXR0YWNobWVudCA9IHtcblx0XHRcdGVsZW1lbnQsXG5cdFx0XHRhbmltYXRpb246IG51bGwsXG5cdFx0XHRjbGVhbnVwOiAoKSA9PiB7fVxuXHRcdH07XG5cdFx0Y29uc3QgdHJpZ2dlciA9IHRoaXMuI29wdGlvbnMudHJpZ2dlciA/PyBcIm1vdW50XCI7XG5cdFx0bGV0IGlubmVyO1xuXHRcdGlmIChpc1Njcm9sbERyaXZlbih0cmlnZ2VyKSB8fCBpc1ZpZXdEcml2ZW4odHJpZ2dlcikpIGlubmVyID0gdGhpcy4jc3RhcnRUaW1lbGluZURyaXZlbihlbGVtZW50LCBhdHRhY2htZW50LCBwbGFuLCB0cmlnZ2VyKTtcblx0XHRlbHNlIHtcblx0XHRcdGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuXHRcdFx0XHRhdHRhY2htZW50LmFuaW1hdGlvbj8uY2FuY2VsKCk7XG5cdFx0XHRcdGNvbnN0IGFuaW1hdGlvbiA9IGVsZW1lbnQuYW5pbWF0ZSh0aGlzLiNidWlsZEtleWZyYW1lcyhwbGFuKSwgdGhpcy4jYnVpbGRUaW1pbmcoKSk7XG5cdFx0XHRcdGF0dGFjaG1lbnQuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuXHRcdFx0XHR0aGlzLiN0cmFja1Byb2dyZXNzKGFuaW1hdGlvbiwgcGxhbik7XG5cdFx0XHRcdHJldHVybiBhbmltYXRpb247XG5cdFx0XHR9O1xuXHRcdFx0aW5uZXIgPSB0aGlzLiN3aXJlVHJpZ2dlcihlbGVtZW50LCBhdHRhY2htZW50LCBzdGFydCk7XG5cdFx0fVxuXHRcdHRoaXMuI2F0dGFjaG1lbnRzLmFkZChhdHRhY2htZW50KTtcblx0XHRhdHRhY2htZW50LmNsZWFudXAgPSAoKSA9PiB7XG5cdFx0XHRpbm5lcigpO1xuXHRcdFx0dGhpcy4jYXR0YWNobWVudHMuZGVsZXRlKGF0dGFjaG1lbnQpO1xuXHRcdH07XG5cdFx0cmV0dXJuIGF0dGFjaG1lbnQuY2xlYW51cDtcblx0fVxuXHQjdHJhY2tQcm9ncmVzcyhhbmltYXRpb24sIHBsYW4pIHtcblx0XHRhbmltYXRpb24uZmluaXNoZWQudGhlbigoKSA9PiB7XG5cdFx0XHRjb25zdCBsYXN0ID0gdGhpcy4jcmVzb2x2ZVN0ZXAodGhpcy4jc3RlcHNbdGhpcy4jc3RlcHMubGVuZ3RoIC0gMV0pO1xuXHRcdFx0dGhpcy52YWx1ZSA9IGxhc3Q7XG5cdFx0fSkuY2F0Y2goKCkgPT4ge30pO1xuXHR9XG5cdCN3aXJlVHJpZ2dlcihlbGVtZW50LCBhdHRhY2htZW50LCBzdGFydCkge1xuXHRcdGNvbnN0IHRyaWdnZXIgPSB0aGlzLiNvcHRpb25zLnRyaWdnZXIgPz8gXCJtb3VudFwiO1xuXHRcdGNvbnN0IHJldmVyc2VPbkV4aXQgPSB0aGlzLiNvcHRpb25zLnJldmVyc2VPbkV4aXQgPz8gdHJ1ZTtcblx0XHRjb25zdCBwbGF5Rm9yd2FyZCA9ICgpID0+IHtcblx0XHRcdGlmICghYXR0YWNobWVudC5hbmltYXRpb24gfHwgYXR0YWNobWVudC5hbmltYXRpb24ucGxheVN0YXRlID09PSBcImlkbGVcIikgc3RhcnQoKTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRhdHRhY2htZW50LmFuaW1hdGlvbi5wbGF5YmFja1JhdGUgPSBNYXRoLmFicyhhdHRhY2htZW50LmFuaW1hdGlvbi5wbGF5YmFja1JhdGUgfHwgMSk7XG5cdFx0XHRcdGF0dGFjaG1lbnQuYW5pbWF0aW9uLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHBsYXlCYWNrd2FyZCA9ICgpID0+IHtcblx0XHRcdGlmICghYXR0YWNobWVudC5hbmltYXRpb24pIHJldHVybjtcblx0XHRcdGF0dGFjaG1lbnQuYW5pbWF0aW9uLnJldmVyc2UoKTtcblx0XHR9O1xuXHRcdGlmICh0cmlnZ2VyID09PSBcIm1vdW50XCIpIHtcblx0XHRcdHN0YXJ0KCk7XG5cdFx0XHRyZXR1cm4gKCkgPT4ge307XG5cdFx0fVxuXHRcdGlmICh0cmlnZ2VyID09PSBcIm1hbnVhbFwiKSByZXR1cm4gKCkgPT4ge307XG5cdFx0aWYgKHRyaWdnZXIgPT09IFwiaG92ZXJcIiB8fCB0cmlnZ2VyID09PSBcImZvY3VzXCIpIHtcblx0XHRcdGNvbnN0IGVudGVyID0gdHJpZ2dlciA9PT0gXCJob3ZlclwiID8gXCJwb2ludGVyZW50ZXJcIiA6IFwiZm9jdXNpblwiO1xuXHRcdFx0Y29uc3QgbGVhdmUgPSB0cmlnZ2VyID09PSBcImhvdmVyXCIgPyBcInBvaW50ZXJsZWF2ZVwiIDogXCJmb2N1c291dFwiO1xuXHRcdFx0Y29uc3Qgb25FbnRlciA9ICgpID0+IHBsYXlGb3J3YXJkKCk7XG5cdFx0XHRjb25zdCBvbkxlYXZlID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAocmV2ZXJzZU9uRXhpdCkgcGxheUJhY2t3YXJkKCk7XG5cdFx0XHR9O1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGVudGVyLCBvbkVudGVyKTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsZWF2ZSwgb25MZWF2ZSk7XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZW50ZXIsIG9uRW50ZXIpO1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGVhdmUsIG9uTGVhdmUpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKHRyaWdnZXIgPT09IFwiY2xpY2tcIikge1xuXHRcdFx0bGV0IGZvcndhcmQgPSB0cnVlO1xuXHRcdFx0Y29uc3Qgb25DbGljayA9ICgpID0+IHtcblx0XHRcdFx0Zm9yd2FyZCA/IHBsYXlGb3J3YXJkKCkgOiBwbGF5QmFja3dhcmQoKTtcblx0XHRcdFx0Zm9yd2FyZCA9ICFmb3J3YXJkO1xuXHRcdFx0fTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xuXHRcdFx0cmV0dXJuICgpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xuXHRcdH1cblx0XHRpZiAodHJpZ2dlciA9PT0gXCJ2aXNpYmxlXCIpIHtcblx0XHRcdGlmICh0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRzdGFydCgpO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4ge307XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgcGxheUZvcndhcmQoKTtcblx0XHRcdFx0ZWxzZSBpZiAocmV2ZXJzZU9uRXhpdCAmJiBhdHRhY2htZW50LmFuaW1hdGlvbikgcGxheUJhY2t3YXJkKCk7XG5cdFx0XHR9LCB0aGlzLiNvcHRpb25zLmludGVyc2VjdGlvbik7XG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuXHRcdFx0cmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR9XG5cdFx0aWYgKHRyaWdnZXIgIT0gbnVsbCAmJiB0eXBlb2YgdHJpZ2dlciA9PT0gXCJvYmplY3RcIiAmJiBcInZhbHVlXCIgaW4gdHJpZ2dlcikge1xuXHRcdFx0Y29uc3QgYXBwbHkgPSAodikgPT4gdiA/IHBsYXlGb3J3YXJkKCkgOiBwbGF5QmFja3dhcmQoKTtcblx0XHRcdGFwcGx5KHRyaWdnZXIudmFsdWUpO1xuXHRcdFx0Y29uc3QgdW5zdWJzY3JpYmUgPSB0eXBlb2YgdHJpZ2dlci5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIiA/IHRyaWdnZXIuc3Vic2NyaWJlKGFwcGx5KSA6IG51bGw7XG5cdFx0XHRyZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmU/LigpO1xuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4ge307XG5cdH1cblx0I2VhY2goZm4pIHtcblx0XHRmb3IgKGNvbnN0IGF0IG9mIHRoaXMuI2F0dGFjaG1lbnRzKSBpZiAoYXQuYW5pbWF0aW9uKSBmbihhdC5hbmltYXRpb24pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2VhY2goKGEpID0+IGEucGxheSgpKTtcblx0fVxuXHRwYXVzZSgpIHtcblx0XHRyZXR1cm4gdGhpcy4jZWFjaCgoYSkgPT4gYS5wYXVzZSgpKTtcblx0fVxuXHRyZXZlcnNlKCkge1xuXHRcdHJldHVybiB0aGlzLiNlYWNoKChhKSA9PiBhLnJldmVyc2UoKSk7XG5cdH1cblx0Y2FuY2VsKCkge1xuXHRcdHJldHVybiB0aGlzLiNlYWNoKChhKSA9PiBhLmNhbmNlbCgpKTtcblx0fVxuXHRmaW5pc2goKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2VhY2goKGEpID0+IGEuZmluaXNoKCkpO1xuXHR9XG5cdHNldCBwbGF5YmFja1JhdGUocmF0ZSkge1xuXHRcdHRoaXMuI2VhY2goKGEpID0+IHtcblx0XHRcdGEucGxheWJhY2tSYXRlID0gcmF0ZTtcblx0XHR9KTtcblx0fVxuXHRnZXQgZmluaXNoZWQoKSB7XG5cdFx0Y29uc3QgbGlzdCA9IFtdO1xuXHRcdHRoaXMuI2VhY2goKGEpID0+IGxpc3QucHVzaChhLmZpbmlzaGVkLmNhdGNoKCgpID0+IHt9KSkpO1xuXHRcdHJldHVybiBQcm9taXNlLmFsbChsaXN0KS50aGVuKCgpID0+IHt9KTtcblx0fVxufTtcbnZhciBhbmltYXRhYmxlID0gKHN0ZXBzLCBvcHRpb25zKSA9PiBuZXcgQW5pbWF0YWJsZVZhbHVlKHN0ZXBzLCBvcHRpb25zKTtcbnZhciBpc0FuaW1hdGFibGVWYWx1ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWVbQU5JTUFUQUJMRV9CUkFORF0gPT09IHRydWU7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9TdHlsZXMudHNcbnZhciBzdHlsZVRlbXBsYXRlSWQgPSAwO1xudmFyIHJlYWRSZWFjdGl2ZU51bWJlciA9IChzbG90KSA9PiB7XG5cdGNvbnN0IGN1cnJlbnQgPSBzbG90LnZhbHVlPy52YWx1ZTtcblx0Y29uc3QgbnVtYmVyID0gdHlwZW9mIGN1cnJlbnQgPT09IFwibnVtYmVyXCIgPyBjdXJyZW50IDogTnVtYmVyKGN1cnJlbnQpO1xuXHRpZiAoIU51bWJlci5pc0Zpbml0ZShudW1iZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBSZWFjdGl2ZSBDU1MgdmFsdWUgXCIke1N0cmluZyhjdXJyZW50KX1cIiBpcyBub3QgZmluaXRlYCk7XG5cdHJldHVybiBudW1iZXI7XG59O1xudmFyIGdldFJlYWN0aXZlSW5pdGlhbE51bWJlciA9ICh2YWx1ZSkgPT4ge1xuXHRjb25zdCBudW1iZXIgPSBOdW1iZXIodmFsdWU/LnZhbHVlKTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShudW1iZXIpID8gbnVtYmVyIDogMDtcbn07XG52YXIgcmVwbGFjZVR5cGVkTWFya2VycyA9IChjc3NWYWx1ZSwgc2xvdHMpID0+IHtcblx0bGV0IHJlc3VsdCA9IGNzc1ZhbHVlO1xuXHRmb3IgKGNvbnN0IHNsb3Qgb2Ygc2xvdHMpIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKG5ldyBSZWdFeHAoYHZhclxcXFwoXFxcXHMqJHtlc2NhcGVSZWdFeHAoc2xvdC5tYXJrZXIpfVxcXFxzKlxcXFwpYCwgXCJnXCIpLCBTdHJpbmcoc2xvdC52YWx1ZSkpO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbnZhciBpc0RpcmVjdFNsb3RWYWx1ZSA9IChjc3NWYWx1ZSwgbWFya2VyKSA9PiB7XG5cdGNvbnN0IGVzY2FwZWRNYXJrZXIgPSBlc2NhcGVSZWdFeHAobWFya2VyKTtcblx0cmV0dXJuIG5ldyBSZWdFeHAoYF52YXJcXFxcKFxcXFxzKiR7ZXNjYXBlZE1hcmtlcn1cXFxccypcXFxcKSRgKS50ZXN0KGNzc1ZhbHVlLnRyaW0oKSk7XG59O1xudmFyIHNlcmlhbGl6ZUFuaW1hdGFibGVDc3NWYWx1ZSA9IChyYXcsIHVuaXQpID0+IHtcblx0bGV0IHZhbHVlID0gcmF3O1xuXHRpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgXCJ2YWx1ZVwiIGluIHZhbHVlICYmICEodmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50KSkgdmFsdWUgPSB2YWx1ZS52YWx1ZTtcblx0aWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIpIHJldHVybiB1bml0ID8gYDAke3VuaXR9YCA6IFwiMFwiO1xuXHRpZiAodW5pdCAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIGAke3ZhbHVlfSR7dW5pdH1gO1xuXHRyZXR1cm4gU3RyaW5nKHZhbHVlKTtcbn07XG52YXIgaXNEaXJlY3RTbG90VW5pdFByb2R1Y3QgPSAoY3NzVmFsdWUsIG1hcmtlciwgdW5pdCkgPT4ge1xuXHRpZiAoIXVuaXQpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgZXNjYXBlZE1hcmtlciA9IGVzY2FwZVJlZ0V4cChtYXJrZXIpO1xuXHRjb25zdCBlc2NhcGVkVW5pdCA9IGVzY2FwZVJlZ0V4cCh1bml0KTtcblx0cmV0dXJuIG5ldyBSZWdFeHAoYF5jYWxjXFxcXChcXFxccyp2YXJcXFxcKFxcXFxzKiR7ZXNjYXBlZE1hcmtlcn1cXFxccypcXFxcKVxcXFxzKlxcXFwqXFxcXHMqMSR7ZXNjYXBlZFVuaXR9XFxcXHMqXFxcXCkkYCwgXCJpXCIpLnRlc3QoY3NzVmFsdWUudHJpbSgpKTtcbn07XG52YXIgc2V0UGFyc2VkVHlwZWRWYWx1ZSA9IChzdHlsZU1hcCwgQ1NTU3R5bGVWYWx1ZUN0b3IsIHByb3BlcnR5LCBjc3NWYWx1ZSkgPT4ge1xuXHRpZiAodHlwZW9mIENTU1N0eWxlVmFsdWVDdG9yPy5wYXJzZUFsbCA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gQ1NTU3R5bGVWYWx1ZUN0b3IucGFyc2VBbGwocHJvcGVydHksIGNzc1ZhbHVlKTtcblx0XHRzdHlsZU1hcC5zZXQocHJvcGVydHksIC4uLnZhbHVlcyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICh0eXBlb2YgQ1NTU3R5bGVWYWx1ZUN0b3I/LnBhcnNlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZU1hcC5zZXQocHJvcGVydHksIENTU1N0eWxlVmFsdWVDdG9yLnBhcnNlKHByb3BlcnR5LCBjc3NWYWx1ZSkpO1xuXHRcdHJldHVybjtcblx0fVxuXHRzdHlsZU1hcC5zZXQocHJvcGVydHksIGNzc1ZhbHVlKTtcbn07XG52YXIgdG9rZW5pemVOdW1lcmljQ1NTID0gKHNvdXJjZSkgPT4ge1xuXHRjb25zdCB0b2tlbnMgPSBbXTtcblx0bGV0IGN1cnNvciA9IDA7XG5cdHdoaWxlIChjdXJzb3IgPCBzb3VyY2UubGVuZ3RoKSB7XG5cdFx0Y29uc3QgcmVzdCA9IHNvdXJjZS5zbGljZShjdXJzb3IpO1xuXHRcdGNvbnN0IHdoaXRlc3BhY2UgPSAvXlxccysvLmV4ZWMocmVzdCk7XG5cdFx0aWYgKHdoaXRlc3BhY2UpIHtcblx0XHRcdGN1cnNvciArPSB3aGl0ZXNwYWNlWzBdLmxlbmd0aDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCB2YXJpYWJsZSA9IC9edmFyXFwoXFxzKigtLVthLXpBLVowLTlfLV0rKVxccypcXCkvLmV4ZWMocmVzdCk7XG5cdFx0aWYgKHZhcmlhYmxlKSB7XG5cdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdGtpbmQ6IFwidmFyaWFibGVcIixcblx0XHRcdFx0bWFya2VyOiB2YXJpYWJsZVsxXVxuXHRcdFx0fSk7XG5cdFx0XHRjdXJzb3IgKz0gdmFyaWFibGVbMF0ubGVuZ3RoO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IG51bWJlciA9IC9eKD86XFxkKlxcLlxcZCt8XFxkK1xcLj9cXGQqKSg/OltlRV1bKy1dP1xcZCspPy8uZXhlYyhyZXN0KTtcblx0XHRpZiAobnVtYmVyKSB7XG5cdFx0XHRjdXJzb3IgKz0gbnVtYmVyWzBdLmxlbmd0aDtcblx0XHRcdGNvbnN0IHVuaXRNYXRjaCA9IC9eKCV8W2EtekEtWl0rKS8uZXhlYyhzb3VyY2Uuc2xpY2UoY3Vyc29yKSk7XG5cdFx0XHRjb25zdCB1bml0ID0gdW5pdE1hdGNoPy5bMF0gPz8gbnVsbDtcblx0XHRcdGlmICh1bml0TWF0Y2gpIGN1cnNvciArPSB1bml0TWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRraW5kOiBcIm51bWJlclwiLFxuXHRcdFx0XHR2YWx1ZTogTnVtYmVyKG51bWJlclswXSksXG5cdFx0XHRcdHVuaXQ6IHVuaXQgPT0gbnVsbCA/IG51bGwgOiB1bml0LnRvTG93ZXJDYXNlKClcblx0XHRcdH0pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGlkZW50aWZpZXIgPSAvXlthLXpBLVpfXVthLXpBLVowLTlfLV0qLy5leGVjKHJlc3QpO1xuXHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdGtpbmQ6IFwiaWRlbnRpZmllclwiLFxuXHRcdFx0XHR2YWx1ZTogaWRlbnRpZmllclswXS50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KTtcblx0XHRcdGN1cnNvciArPSBpZGVudGlmaWVyWzBdLmxlbmd0aDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBzeW1ib2wgPSByZXN0WzBdO1xuXHRcdGlmIChzeW1ib2wgPT09IFwiK1wiIHx8IHN5bWJvbCA9PT0gXCItXCIgfHwgc3ltYm9sID09PSBcIipcIiB8fCBzeW1ib2wgPT09IFwiL1wiIHx8IHN5bWJvbCA9PT0gXCIoXCIgfHwgc3ltYm9sID09PSBcIilcIiB8fCBzeW1ib2wgPT09IFwiLFwiKSB7XG5cdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdGtpbmQ6IFwic3ltYm9sXCIsXG5cdFx0XHRcdHZhbHVlOiBzeW1ib2xcblx0XHRcdH0pO1xuXHRcdFx0Y3Vyc29yKys7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbnN1cHBvcnRlZCBUeXBlZCBPTSBudW1lcmljIHRva2VuIG5lYXIgXCIke3Jlc3R9XCJgKTtcblx0fVxuXHRyZXR1cm4gdG9rZW5zO1xufTtcbnZhciBOdW1lcmljVHlwZWRPTVBhcnNlciA9IGNsYXNzIHtcblx0dG9rZW5zO1xuXHR3aW47XG5cdHJlYWN0aXZlQnlNYXJrZXI7XG5cdHR5cGVkQnlNYXJrZXI7XG5cdGluZGV4ID0gMDtcblx0bGVhdmVzID0gW107XG5cdGNvbnN0cnVjdG9yKHRva2Vucywgd2luLCByZWFjdGl2ZUJ5TWFya2VyLCB0eXBlZEJ5TWFya2VyKSB7XG5cdFx0dGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy53aW4gPSB3aW47XG5cdFx0dGhpcy5yZWFjdGl2ZUJ5TWFya2VyID0gcmVhY3RpdmVCeU1hcmtlcjtcblx0XHR0aGlzLnR5cGVkQnlNYXJrZXIgPSB0eXBlZEJ5TWFya2VyO1xuXHR9XG5cdHBhcnNlKCkge1xuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnBhcnNlU3VtKCk7XG5cdFx0aWYgKHRoaXMuaW5kZXggIT09IHRoaXMudG9rZW5zLmxlbmd0aCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW5leHBlY3RlZCB0cmFpbGluZyBUeXBlZCBPTSBleHByZXNzaW9uXCIpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRyb290LFxuXHRcdFx0bGVhdmVzOiB0aGlzLmxlYXZlc1xuXHRcdH07XG5cdH1cblx0Y3VycmVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG5cdH1cblx0Y29uc3VtZSgpIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuXHRcdGlmICghdG9rZW4pIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIFR5cGVkIE9NIGV4cHJlc3Npb25cIik7XG5cdFx0dGhpcy5pbmRleCsrO1xuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXHRjb25zdW1lU3ltYm9sKHN5bWJvbCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0aWYgKHRva2VuLmtpbmQgIT09IFwic3ltYm9sXCIgfHwgdG9rZW4udmFsdWUgIT09IHN5bWJvbCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBFeHBlY3RlZCBcIiR7c3ltYm9sfVwiYCk7XG5cdH1cblx0bWF0Y2hlc1N5bWJvbChzeW1ib2wpIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXHRcdHJldHVybiB0b2tlbj8ua2luZCA9PT0gXCJzeW1ib2xcIiAmJiB0b2tlbi52YWx1ZSA9PT0gc3ltYm9sO1xuXHR9XG5cdGNyZWF0ZU1hdGgobmFtZSwgLi4udmFsdWVzKSB7XG5cdFx0Y29uc3QgQ29uc3RydWN0b3IgPSBnZXRXaW5kb3dDb25zdHJ1Y3Rvcih0aGlzLndpbiwgbmFtZSk7XG5cdFx0aWYgKHR5cGVvZiBDb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGAke25hbWV9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKC4uLnZhbHVlcyk7XG5cdH1cblx0cGFyc2VTdW0oKSB7XG5cdFx0bGV0IHZhbHVlID0gdGhpcy5wYXJzZVByb2R1Y3QoKTtcblx0XHR3aGlsZSAodGhpcy5tYXRjaGVzU3ltYm9sKFwiK1wiKSB8fCB0aGlzLm1hdGNoZXNTeW1ib2woXCItXCIpKSB7XG5cdFx0XHRjb25zdCBvcGVyYXRvciA9IHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0Y29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlUHJvZHVjdCgpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLmtpbmQgIT09IFwic3ltYm9sXCIpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkV4cGVjdGVkIGEgc3VtIG9wZXJhdG9yXCIpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLnZhbHVlID09PSBcIitcIikgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoU3VtXCIsIHZhbHVlLCByaWdodCk7XG5cdFx0XHRlbHNlIHZhbHVlID0gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aFN1bVwiLCB2YWx1ZSwgdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aE5lZ2F0ZVwiLCByaWdodCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0cGFyc2VQcm9kdWN0KCkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMucGFyc2VVbmFyeSgpO1xuXHRcdHdoaWxlICh0aGlzLm1hdGNoZXNTeW1ib2woXCIqXCIpIHx8IHRoaXMubWF0Y2hlc1N5bWJvbChcIi9cIikpIHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0XHRjb25zdCByaWdodCA9IHRoaXMucGFyc2VVbmFyeSgpO1xuXHRcdFx0aWYgKG9wZXJhdG9yLmtpbmQgIT09IFwic3ltYm9sXCIpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkV4cGVjdGVkIGEgcHJvZHVjdCBvcGVyYXRvclwiKTtcblx0XHRcdGlmIChvcGVyYXRvci52YWx1ZSA9PT0gXCIqXCIpIHZhbHVlID0gdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aFByb2R1Y3RcIiwgdmFsdWUsIHJpZ2h0KTtcblx0XHRcdGVsc2UgdmFsdWUgPSB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoUHJvZHVjdFwiLCB2YWx1ZSwgdGhpcy5jcmVhdGVNYXRoKFwiQ1NTTWF0aEludmVydFwiLCByaWdodCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0cGFyc2VVbmFyeSgpIHtcblx0XHRpZiAodGhpcy5tYXRjaGVzU3ltYm9sKFwiK1wiKSkge1xuXHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVVuYXJ5KCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm1hdGNoZXNTeW1ib2woXCItXCIpKSB7XG5cdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZU1hdGgoXCJDU1NNYXRoTmVnYXRlXCIsIHRoaXMucGFyc2VVbmFyeSgpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyc2VQcmltYXJ5KCk7XG5cdH1cblx0cGFyc2VQcmltYXJ5KCkge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG5cdFx0aWYgKHRva2VuLmtpbmQgPT09IFwibnVtYmVyXCIpIHJldHVybiBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh0aGlzLndpbiwgdG9rZW4udW5pdCA/PyBcIm51bWJlclwiLCB0b2tlbi52YWx1ZSk7XG5cdFx0aWYgKHRva2VuLmtpbmQgPT09IFwidmFyaWFibGVcIikge1xuXHRcdFx0Y29uc3QgcmVhY3RpdmUgPSB0aGlzLnJlYWN0aXZlQnlNYXJrZXIuZ2V0KHRva2VuLm1hcmtlcik7XG5cdFx0XHRpZiAocmVhY3RpdmUpIHtcblx0XHRcdFx0aWYgKHRoaXMubWF0Y2hlc1N5bWJvbChcIipcIikpIHtcblx0XHRcdFx0XHRjb25zdCBjaGVja3BvaW50ID0gdGhpcy5pbmRleDtcblx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHRjb25zdCByaHMgPSB0aGlzLmN1cnJlbnQoKTtcblx0XHRcdFx0XHRpZiAocmhzPy5raW5kID09PSBcIm51bWJlclwiICYmIHJocy52YWx1ZSA9PT0gMSAmJiB0eXBlb2YgcmhzLnVuaXQgPT09IFwic3RyaW5nXCIgJiYgKCFyZWFjdGl2ZS5tdWx0aXBsaWVkQnlVbml0IHx8IHJlYWN0aXZlLm11bHRpcGxpZWRCeVVuaXQgPT09IHJocy51bml0LnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHRcdGNvbnN0IGxlYWYgPSBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh0aGlzLndpbiwgcmhzLnVuaXQudG9Mb3dlckNhc2UoKSwgcmVhZFJlYWN0aXZlTnVtYmVyKHJlYWN0aXZlKSk7XG5cdFx0XHRcdFx0XHR0aGlzLmxlYXZlcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0c2xvdDogcmVhY3RpdmUsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBsZWFmXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHJldHVybiBsZWFmO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmluZGV4ID0gY2hlY2twb2ludDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBsZWFmID0gY3JlYXRlVHlwZWRVbml0VmFsdWUodGhpcy53aW4sIFwibnVtYmVyXCIsIHJlYWRSZWFjdGl2ZU51bWJlcihyZWFjdGl2ZSkpO1xuXHRcdFx0XHR0aGlzLmxlYXZlcy5wdXNoKHtcblx0XHRcdFx0XHRzbG90OiByZWFjdGl2ZSxcblx0XHRcdFx0XHR2YWx1ZTogbGVhZlxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGxlYWY7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0eXBlZCA9IHRoaXMudHlwZWRCeU1hcmtlci5nZXQodG9rZW4ubWFya2VyKTtcblx0XHRcdGlmICh0eXBlZCkgcmV0dXJuIHR5cGVkLnZhbHVlO1xuXHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmtub3duIHN0eWxlIHNsb3QgXCIke3Rva2VuLm1hcmtlcn1cImApO1xuXHRcdH1cblx0XHRpZiAodG9rZW4ua2luZCA9PT0gXCJzeW1ib2xcIiAmJiB0b2tlbi52YWx1ZSA9PT0gXCIoXCIpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZVN1bSgpO1xuXHRcdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHRva2VuLmtpbmQgPT09IFwiaWRlbnRpZmllclwiKSByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKHRva2VuLnZhbHVlKTtcblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJFeHBlY3RlZCBhIFR5cGVkIE9NIG51bWVyaWMgdmFsdWVcIik7XG5cdH1cblx0cGFyc2VGdW5jdGlvbihuYW1lKSB7XG5cdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKFwiKTtcblx0XHRpZiAobmFtZSA9PT0gXCJjYWxjXCIpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZVN1bSgpO1xuXHRcdFx0dGhpcy5jb25zdW1lU3ltYm9sKFwiKVwiKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0Y29uc3QgdmFsdWVzID0gW107XG5cdFx0aWYgKCF0aGlzLm1hdGNoZXNTeW1ib2woXCIpXCIpKSB7XG5cdFx0XHR2YWx1ZXMucHVzaCh0aGlzLnBhcnNlU3VtKCkpO1xuXHRcdFx0d2hpbGUgKHRoaXMubWF0Y2hlc1N5bWJvbChcIixcIikpIHtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRcdHZhbHVlcy5wdXNoKHRoaXMucGFyc2VTdW0oKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY29uc3VtZVN5bWJvbChcIilcIik7XG5cdFx0aWYgKG5hbWUgPT09IFwibWluXCIpIHtcblx0XHRcdGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJtaW4oKSByZXF1aXJlcyBhIHZhbHVlXCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhNaW5cIiwgLi4udmFsdWVzKTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT09IFwibWF4XCIpIHtcblx0XHRcdGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJtYXgoKSByZXF1aXJlcyBhIHZhbHVlXCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhNYXhcIiwgLi4udmFsdWVzKTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT09IFwiY2xhbXBcIikge1xuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBTeW50YXhFcnJvcihcImNsYW1wKCkgcmVxdWlyZXMgdGhyZWUgdmFsdWVzXCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTWF0aChcIkNTU01hdGhDbGFtcFwiLCB2YWx1ZXNbMF0sIHZhbHVlc1sxXSwgdmFsdWVzWzJdKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbnN1cHBvcnRlZCBUeXBlZCBPTSBmdW5jdGlvbiBcIiR7bmFtZX1cImApO1xuXHR9XG59O1xudmFyIGJ1aWxkTnVtZXJpY1R5cGVkT01UcmVlID0gKGNzc1ZhbHVlLCB3aW4sIHJlYWN0aXZlU2xvdHMsIHR5cGVkU2xvdHMpID0+IHtcblx0Y29uc3QgcmVhY3RpdmVCeU1hcmtlciA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IHR5cGVkQnlNYXJrZXIgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRmb3IgKGNvbnN0IHNsb3Qgb2YgcmVhY3RpdmVTbG90cykgcmVhY3RpdmVCeU1hcmtlci5zZXQoc2xvdC5tYXJrZXIsIHNsb3QpO1xuXHRmb3IgKGNvbnN0IHNsb3Qgb2YgdHlwZWRTbG90cykgdHlwZWRCeU1hcmtlci5zZXQoc2xvdC5tYXJrZXIsIHNsb3QpO1xuXHRyZXR1cm4gbmV3IE51bWVyaWNUeXBlZE9NUGFyc2VyKHRva2VuaXplTnVtZXJpY0NTUyhjc3NWYWx1ZSksIHdpbiwgcmVhY3RpdmVCeU1hcmtlciwgdHlwZWRCeU1hcmtlcikucGFyc2UoKTtcbn07XG52YXIgaXNUcmFuc2Zvcm1TdHlsZVByb3BlcnR5ID0gKHByb3BlcnR5KSA9PiB7XG5cdHJldHVybiBwcm9wZXJ0eS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cmFuc2Zvcm1cIjtcbn07XG52YXIgYnVpbGRUcmFuc2Zvcm1UeXBlZE9NVHJlZSA9IChjc3NWYWx1ZSwgd2luLCByZWFjdGl2ZVNsb3RzLCB0eXBlZFNsb3RzKSA9PiB7XG5cdGNvbnN0IHRva2VucyA9IHRva2VuaXplTnVtZXJpY0NTUyhjc3NWYWx1ZSk7XG5cdGNvbnN0IGxlYXZlcyA9IFtdO1xuXHRjb25zdCBjb21wb25lbnRzID0gW107XG5cdGNvbnN0IHJlYWN0aXZlQnlNYXJrZXIgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCB0eXBlZEJ5TWFya2VyID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Zm9yIChjb25zdCBzbG90IG9mIHJlYWN0aXZlU2xvdHMpIHJlYWN0aXZlQnlNYXJrZXIuc2V0KHNsb3QubWFya2VyLCBzbG90KTtcblx0Zm9yIChjb25zdCBzbG90IG9mIHR5cGVkU2xvdHMpIHR5cGVkQnlNYXJrZXIuc2V0KHNsb3QubWFya2VyLCBzbG90KTtcblx0Y29uc3QgemVyb1B4ID0gKCkgPT4gY3JlYXRlVHlwZWRVbml0VmFsdWUod2luLCBcInB4XCIsIDApO1xuXHRjb25zdCBvbmVOdW1iZXIgPSAoKSA9PiBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh3aW4sIFwibnVtYmVyXCIsIDEpO1xuXHRsZXQgaW5kZXggPSAwO1xuXHRjb25zdCBjdXJyZW50ID0gKCkgPT4gdG9rZW5zW2luZGV4XTtcblx0Y29uc3QgY29uc3VtZSA9ICgpID0+IHtcblx0XHRjb25zdCB0b2tlbiA9IHRva2Vuc1tpbmRleF07XG5cdFx0aWYgKCF0b2tlbikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW5leHBlY3RlZCBlbmQgb2YgdHJhbnNmb3JtIGV4cHJlc3Npb25cIik7XG5cdFx0aW5kZXgrKztcblx0XHRyZXR1cm4gdG9rZW47XG5cdH07XG5cdGNvbnN0IGNvbnN1bWVTeW1ib2wgPSAoc3ltYm9sKSA9PiB7XG5cdFx0Y29uc3QgdG9rZW4gPSBjb25zdW1lKCk7XG5cdFx0aWYgKHRva2VuLmtpbmQgIT09IFwic3ltYm9sXCIgfHwgdG9rZW4udmFsdWUgIT09IHN5bWJvbCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBFeHBlY3RlZCBcIiR7c3ltYm9sfVwiYCk7XG5cdH07XG5cdGNvbnN0IHBhcnNlQXJndW1lbnQgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc3RhcnQgPSBpbmRleDtcblx0XHRsZXQgZGVwdGggPSAwO1xuXHRcdHdoaWxlIChpbmRleCA8IHRva2Vucy5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IHRva2VuID0gdG9rZW5zW2luZGV4XTtcblx0XHRcdGlmICh0b2tlbi5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBcIihcIikge1xuXHRcdFx0XHRkZXB0aCsrO1xuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0b2tlbi5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBcIilcIikge1xuXHRcdFx0XHRpZiAoZGVwdGggPT09IDApIGJyZWFrO1xuXHRcdFx0XHRkZXB0aC0tO1xuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0b2tlbi5raW5kID09PSBcInN5bWJvbFwiICYmIHRva2VuLnZhbHVlID09PSBcIixcIiAmJiBkZXB0aCA9PT0gMCkgYnJlYWs7XG5cdFx0XHRpbmRleCsrO1xuXHRcdH1cblx0XHRjb25zdCBzbGljZSA9IHRva2Vucy5zbGljZShzdGFydCwgaW5kZXgpO1xuXHRcdGlmIChzbGljZS5sZW5ndGggPT09IDApIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkVtcHR5IHRyYW5zZm9ybSBmdW5jdGlvbiBhcmd1bWVudFwiKTtcblx0XHRjb25zdCB0cmVlID0gbmV3IE51bWVyaWNUeXBlZE9NUGFyc2VyKHNsaWNlLCB3aW4sIHJlYWN0aXZlQnlNYXJrZXIsIHR5cGVkQnlNYXJrZXIpLnBhcnNlKCk7XG5cdFx0bGVhdmVzLnB1c2goLi4udHJlZS5sZWF2ZXMpO1xuXHRcdHJldHVybiB0cmVlLnJvb3Q7XG5cdH07XG5cdGNvbnN0IHBhcnNlQXJndW1lbnRMaXN0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGFyZ3MgPSBbXTtcblx0XHRjb25zdW1lU3ltYm9sKFwiKFwiKTtcblx0XHRpZiAoIShjdXJyZW50KCk/LmtpbmQgPT09IFwic3ltYm9sXCIgJiYgY3VycmVudCgpPy52YWx1ZSA9PT0gXCIpXCIpKSB7XG5cdFx0XHRhcmdzLnB1c2gocGFyc2VBcmd1bWVudCgpKTtcblx0XHRcdHdoaWxlIChjdXJyZW50KCk/LmtpbmQgPT09IFwic3ltYm9sXCIgJiYgY3VycmVudCgpPy52YWx1ZSA9PT0gXCIsXCIpIHtcblx0XHRcdFx0Y29uc3VtZSgpO1xuXHRcdFx0XHRhcmdzLnB1c2gocGFyc2VBcmd1bWVudCgpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3VtZVN5bWJvbChcIilcIik7XG5cdFx0cmV0dXJuIGFyZ3M7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZUNvbXBvbmVudCA9IChuYW1lLCBhcmdzKSA9PiB7XG5cdFx0Y29uc3QgY3RvciA9IChjbGFzc05hbWUpID0+IHtcblx0XHRcdGNvbnN0IEN0b3IgPSBnZXRXaW5kb3dDb25zdHJ1Y3Rvcih3aW4sIGNsYXNzTmFtZSk7XG5cdFx0XHRpZiAodHlwZW9mIEN0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjbGFzc05hbWV9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcblx0XHRcdHJldHVybiBDdG9yO1xuXHRcdH07XG5cdFx0c3dpdGNoIChuYW1lKSB7XG5cdFx0XHRjYXNlIFwidHJhbnNsYXRlXCI6IHtcblx0XHRcdFx0Y29uc3QgVHJhbnNsYXRlID0gY3RvcihcIkNTU1RyYW5zbGF0ZVwiKTtcblx0XHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSByZXR1cm4gbmV3IFRyYW5zbGF0ZShhcmdzWzBdLCB6ZXJvUHgoKSk7XG5cdFx0XHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMikgcmV0dXJuIG5ldyBUcmFuc2xhdGUoYXJnc1swXSwgYXJnc1sxXSk7XG5cdFx0XHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMykgcmV0dXJuIG5ldyBUcmFuc2xhdGUoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG5cdFx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcInRyYW5zbGF0ZSgpIGV4cGVjdHMgMS4uMyBhcmdzXCIpO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcInRyYW5zbGF0ZXhcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1RyYW5zbGF0ZVwiKSkoYXJnc1swXSwgemVyb1B4KCkpO1xuXHRcdFx0Y2FzZSBcInRyYW5zbGF0ZXlcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1RyYW5zbGF0ZVwiKSkoemVyb1B4KCksIGFyZ3NbMF0pO1xuXHRcdFx0Y2FzZSBcInRyYW5zbGF0ZXpcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1RyYW5zbGF0ZVwiKSkoemVyb1B4KCksIHplcm9QeCgpLCBhcmdzWzBdKTtcblx0XHRcdGNhc2UgXCJ0cmFuc2xhdGUzZFwiOlxuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBTeW50YXhFcnJvcihcInRyYW5zbGF0ZTNkKCkgZXhwZWN0cyAzIGFyZ3NcIik7XG5cdFx0XHRcdHJldHVybiBuZXcgKGN0b3IoXCJDU1NUcmFuc2xhdGVcIikpKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuXHRcdFx0Y2FzZSBcInNjYWxlXCI6IHtcblx0XHRcdFx0Y29uc3QgU2NhbGUgPSBjdG9yKFwiQ1NTU2NhbGVcIik7XG5cdFx0XHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIG5ldyBTY2FsZShhcmdzWzBdLCBhcmdzWzBdKTtcblx0XHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAyKSByZXR1cm4gbmV3IFNjYWxlKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDMpIHJldHVybiBuZXcgU2NhbGUoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG5cdFx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcInNjYWxlKCkgZXhwZWN0cyAxLi4zIGFyZ3NcIik7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIFwic2NhbGV4XCI6IHJldHVybiBuZXcgKGN0b3IoXCJDU1NTY2FsZVwiKSkoYXJnc1swXSwgb25lTnVtYmVyKCkpO1xuXHRcdFx0Y2FzZSBcInNjYWxleVwiOiByZXR1cm4gbmV3IChjdG9yKFwiQ1NTU2NhbGVcIikpKG9uZU51bWJlcigpLCBhcmdzWzBdKTtcblx0XHRcdGNhc2UgXCJzY2FsZXpcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1NjYWxlXCIpKShvbmVOdW1iZXIoKSwgb25lTnVtYmVyKCksIGFyZ3NbMF0pO1xuXHRcdFx0Y2FzZSBcInNjYWxlM2RcIjpcblx0XHRcdFx0aWYgKGFyZ3MubGVuZ3RoICE9PSAzKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJzY2FsZTNkKCkgZXhwZWN0cyAzIGFyZ3NcIik7XG5cdFx0XHRcdHJldHVybiBuZXcgKGN0b3IoXCJDU1NTY2FsZVwiKSkoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG5cdFx0XHRjYXNlIFwicm90YXRlXCI6IHtcblx0XHRcdFx0Y29uc3QgUm90YXRlID0gY3RvcihcIkNTU1JvdGF0ZVwiKTtcblx0XHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSByZXR1cm4gbmV3IFJvdGF0ZShhcmdzWzBdKTtcblx0XHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09PSA0KSByZXR1cm4gbmV3IFJvdGF0ZShhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwicm90YXRlKCkgZXhwZWN0cyAxIG9yIDQgYXJnc1wiKTtcblx0XHRcdH1cblx0XHRcdGNhc2UgXCJyb3RhdGV4XCI6IHJldHVybiBuZXcgKGN0b3IoXCJDU1NSb3RhdGVcIikpKG9uZU51bWJlcigpLCBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh3aW4sIFwibnVtYmVyXCIsIDApLCBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh3aW4sIFwibnVtYmVyXCIsIDApLCBhcmdzWzBdKTtcblx0XHRcdGNhc2UgXCJyb3RhdGV5XCI6IHJldHVybiBuZXcgKGN0b3IoXCJDU1NSb3RhdGVcIikpKGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgXCJudW1iZXJcIiwgMCksIG9uZU51bWJlcigpLCBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh3aW4sIFwibnVtYmVyXCIsIDApLCBhcmdzWzBdKTtcblx0XHRcdGNhc2UgXCJyb3RhdGV6XCI6IHJldHVybiBuZXcgKGN0b3IoXCJDU1NSb3RhdGVcIikpKGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgXCJudW1iZXJcIiwgMCksIGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgXCJudW1iZXJcIiwgMCksIG9uZU51bWJlcigpLCBhcmdzWzBdKTtcblx0XHRcdGNhc2UgXCJyb3RhdGUzZFwiOlxuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggIT09IDQpIHRocm93IG5ldyBTeW50YXhFcnJvcihcInJvdGF0ZTNkKCkgZXhwZWN0cyA0IGFyZ3NcIik7XG5cdFx0XHRcdHJldHVybiBuZXcgKGN0b3IoXCJDU1NSb3RhdGVcIikpKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuXHRcdFx0Y2FzZSBcInNrZXdcIjoge1xuXHRcdFx0XHRjb25zdCBTa2V3ID0gY3RvcihcIkNTU1NrZXdcIik7XG5cdFx0XHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIG5ldyBTa2V3KGFyZ3NbMF0sIGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgXCJkZWdcIiwgMCkpO1xuXHRcdFx0XHRpZiAoYXJncy5sZW5ndGggPT09IDIpIHJldHVybiBuZXcgU2tldyhhcmdzWzBdLCBhcmdzWzFdKTtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwic2tldygpIGV4cGVjdHMgMS4uMiBhcmdzXCIpO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBcInNrZXd4XCI6IHJldHVybiBuZXcgKGN0b3IoXCJDU1NTa2V3WFwiKSkoYXJnc1swXSk7XG5cdFx0XHRjYXNlIFwic2tld3lcIjogcmV0dXJuIG5ldyAoY3RvcihcIkNTU1NrZXdZXCIpKShhcmdzWzBdKTtcblx0XHRcdGNhc2UgXCJwZXJzcGVjdGl2ZVwiOiByZXR1cm4gbmV3IChjdG9yKFwiQ1NTUGVyc3BlY3RpdmVcIikpKGFyZ3NbMF0pO1xuXHRcdFx0ZGVmYXVsdDogdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbnN1cHBvcnRlZCB0cmFuc2Zvcm0gZnVuY3Rpb24gXCIke25hbWV9XCJgKTtcblx0XHR9XG5cdH07XG5cdHdoaWxlIChpbmRleCA8IHRva2Vucy5sZW5ndGgpIHtcblx0XHRjb25zdCB0b2tlbiA9IGNvbnN1bWUoKTtcblx0XHRpZiAodG9rZW4ua2luZCAhPT0gXCJpZGVudGlmaWVyXCIpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkV4cGVjdGVkIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIG5hbWVcIik7XG5cdFx0Y29uc3QgYXJncyA9IHBhcnNlQXJndW1lbnRMaXN0KCk7XG5cdFx0Y29tcG9uZW50cy5wdXNoKGNyZWF0ZUNvbXBvbmVudCh0b2tlbi52YWx1ZSwgYXJncykpO1xuXHR9XG5cdGlmIChjb21wb25lbnRzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRW1wdHkgdHJhbnNmb3JtIGxpc3RcIik7XG5cdGNvbnN0IENTU1RyYW5zZm9ybVZhbHVlQ3RvciA9IGdldFdpbmRvd0NvbnN0cnVjdG9yKHdpbiwgXCJDU1NUcmFuc2Zvcm1WYWx1ZVwiKTtcblx0aWYgKHR5cGVvZiBDU1NUcmFuc2Zvcm1WYWx1ZUN0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNTU1RyYW5zZm9ybVZhbHVlIGlzIG5vdCBzdXBwb3J0ZWRcIik7XG5cdHJldHVybiB7XG5cdFx0cm9vdDogbmV3IENTU1RyYW5zZm9ybVZhbHVlQ3Rvcihjb21wb25lbnRzKSxcblx0XHRsZWF2ZXNcblx0fTtcbn07XG52YXIgYnVpbGRUeXBlZE9NU3R5bGVWYWx1ZSA9IChwcm9wZXJ0eSwgY3NzVmFsdWUsIHdpbiwgcmVhY3RpdmVTbG90cywgdHlwZWRTbG90cykgPT4ge1xuXHRpZiAoaXNUcmFuc2Zvcm1TdHlsZVByb3BlcnR5KHByb3BlcnR5KSkgcmV0dXJuIGJ1aWxkVHJhbnNmb3JtVHlwZWRPTVRyZWUoY3NzVmFsdWUsIHdpbiwgcmVhY3RpdmVTbG90cywgdHlwZWRTbG90cyk7XG5cdHJldHVybiBidWlsZE51bWVyaWNUeXBlZE9NVHJlZShjc3NWYWx1ZSwgd2luLCByZWFjdGl2ZVNsb3RzLCB0eXBlZFNsb3RzKTtcbn07XG52YXIgYWRkTXV0YWJsZUxlYXZlcyA9ICh0YXJnZXQsIGxlYXZlcykgPT4ge1xuXHRmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IHRhcmdldC5nZXQobGVhZi5zbG90Lm1hcmtlcik7XG5cdFx0aWYgKGN1cnJlbnQpIGN1cnJlbnQucHVzaChsZWFmKTtcblx0XHRlbHNlIHRhcmdldC5zZXQobGVhZi5zbG90Lm1hcmtlciwgW2xlYWZdKTtcblx0fVxufTtcbnZhciBhdHRhY2hMZWFmVGFyZ2V0cyA9IChsZWF2ZXMsIHByb3BlcnR5LCByb290KSA9PiB7XG5cdHJldHVybiBsZWF2ZXMubWFwKChsZWFmKSA9PiAoe1xuXHRcdHNsb3Q6IGxlYWYuc2xvdCxcblx0XHR2YWx1ZTogbGVhZi52YWx1ZSxcblx0XHRwcm9wZXJ0eSxcblx0XHRyb290XG5cdH0pKTtcbn07XG52YXIgYXBwbHlTdHlsZVRlbXBsYXRlID0gKGVsZW1lbnQsIGNzc1RleHQsIHR5cGVkU2xvdHMsIHJlYWN0aXZlU2xvdHMsIHZhcmlhYmxlcywgYW5pbWF0YWJsZVNsb3RzKSA9PiB7XG5cdGNvbnN0IHByb2JlID0gZWxlbWVudC5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRwcm9iZS5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDtcblx0YXBwbHlOb3JtYWxpemVkSW5saW5lU3R5bGUoZWxlbWVudCwgXCJcIik7XG5cdGNvbnN0IHRhcmdldCA9IGVsZW1lbnQ7XG5cdGNvbnN0IHN0eWxlTWFwID0gdGFyZ2V0LmF0dHJpYnV0ZVN0eWxlTWFwID8/IHRhcmdldC5zdHlsZU1hcDtcblx0Y29uc3Qgd2luID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3ID8/IGdsb2JhbFRoaXM7XG5cdGNvbnN0IENTU1N0eWxlVmFsdWVDdG9yID0gd2luPy5DU1NTdHlsZVZhbHVlID8/IGdsb2JhbFRoaXMuQ1NTU3R5bGVWYWx1ZTtcblx0Y29uc3QgbXV0YWJsZUxlYXZlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IHJlcXVpcmVkQ1NTVmFyaWFibGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0Y29uc3Qgc3Vic2NyaXB0aW9ucyA9IFtdO1xuXHRjb25zdCBwcm9wZXJ0eU1vZGVPd25lZCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5cdGZvciAoY29uc3Qgc2xvdCBvZiBhbmltYXRhYmxlU2xvdHMpIHtcblx0XHRsZXQgcGxhbiA9IG51bGw7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9iZS5zdHlsZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcHJvcGVydHkgPSBwcm9iZS5zdHlsZS5pdGVtKGkpO1xuXHRcdFx0Y29uc3QgcGFyc2VkVmFsdWUgPSBwcm9iZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtcblx0XHRcdGlmIChpc0RpcmVjdFNsb3RWYWx1ZShwYXJzZWRWYWx1ZSwgc2xvdC5tYXJrZXIpKSB7XG5cdFx0XHRcdHBsYW4gPSB7XG5cdFx0XHRcdFx0bW9kZTogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XHRcdHRhcmdldDogcHJvcGVydHlcblx0XHRcdFx0fTtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgc2VyaWFsaXplQW5pbWF0YWJsZUNzc1ZhbHVlKHNsb3QudmFsdWUudmFsdWUpKTtcblx0XHRcdFx0cHJvcGVydHlNb2RlT3duZWQuYWRkKHByb3BlcnR5KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNEaXJlY3RTbG90VW5pdFByb2R1Y3QocGFyc2VkVmFsdWUsIHNsb3QubWFya2VyLCBzbG90Lm11bHRpcGxpZWRCeVVuaXQpKSB7XG5cdFx0XHRcdHBsYW4gPSB7XG5cdFx0XHRcdFx0bW9kZTogXCJwcm9wZXJ0eVwiLFxuXHRcdFx0XHRcdHRhcmdldDogcHJvcGVydHksXG5cdFx0XHRcdFx0dW5pdDogc2xvdC5tdWx0aXBsaWVkQnlVbml0XG5cdFx0XHRcdH07XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHNlcmlhbGl6ZUFuaW1hdGFibGVDc3NWYWx1ZShzbG90LnZhbHVlLnZhbHVlLCBzbG90Lm11bHRpcGxpZWRCeVVuaXQpKTtcblx0XHRcdFx0cHJvcGVydHlNb2RlT3duZWQuYWRkKHByb3BlcnR5KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghcGxhbikge1xuXHRcdFx0Y29uc3QgaW5pdGlhbE51bWJlciA9IE51bWJlcihzbG90LnZhbHVlLnZhbHVlKSB8fCAwO1xuXHRcdFx0ZW5zdXJlUmVnaXN0ZXJlZE51bWJlclByb3BlcnR5KHdpbiwgc2xvdC5tYXJrZXIsIGluaXRpYWxOdW1iZXIpO1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzbG90Lm1hcmtlciwgU3RyaW5nKGluaXRpYWxOdW1iZXIpKTtcblx0XHRcdHBsYW4gPSB7XG5cdFx0XHRcdG1vZGU6IFwiY3VzdG9tLXByb3BlcnR5XCIsXG5cdFx0XHRcdHRhcmdldDogc2xvdC5tYXJrZXJcblx0XHRcdH07XG5cdFx0fVxuXHRcdHN1YnNjcmlwdGlvbnMucHVzaChzbG90LnZhbHVlLmF0dGFjaChlbGVtZW50LCBwbGFuKSk7XG5cdH1cblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2JlLnN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdGNvbnN0IHByb3BlcnR5ID0gcHJvYmUuc3R5bGUuaXRlbShpbmRleCk7XG5cdFx0aWYgKHByb3BlcnR5TW9kZU93bmVkLmhhcyhwcm9wZXJ0eSkpIGNvbnRpbnVlO1xuXHRcdGNvbnN0IHBhcnNlZFZhbHVlID0gcHJvYmUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7XG5cdFx0Y29uc3QgcHJpb3JpdHkgPSBwcm9iZS5zdHlsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KHByb3BlcnR5KTtcblx0XHRjb25zdCB1c2VkVHlwZWRTbG90cyA9IHR5cGVkU2xvdHMuZmlsdGVyKChzbG90KSA9PiBjb250YWluc01hcmtlcihwYXJzZWRWYWx1ZSwgc2xvdC5tYXJrZXIpKTtcblx0XHRjb25zdCB1c2VkUmVhY3RpdmVTbG90cyA9IHJlYWN0aXZlU2xvdHMuZmlsdGVyKChzbG90KSA9PiBjb250YWluc01hcmtlcihwYXJzZWRWYWx1ZSwgc2xvdC5tYXJrZXIpKTtcblx0XHRpZiAodXNlZFR5cGVkU2xvdHMubGVuZ3RoID09PSAwICYmIHVzZWRSZWFjdGl2ZVNsb3RzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgcGFyc2VkVmFsdWUsIHByaW9yaXR5KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBjYW5Vc2VUeXBlZE9NID0gc3R5bGVNYXA/LnNldCAmJiAhcHJpb3JpdHkgJiYgIXByb3BlcnR5LnN0YXJ0c1dpdGgoXCItLVwiKTtcblx0XHRsZXQgYXBwbGllZFRocm91Z2hUeXBlZE9NID0gZmFsc2U7XG5cdFx0aWYgKGNhblVzZVR5cGVkT00gJiYgdXNlZFJlYWN0aXZlU2xvdHMubGVuZ3RoID4gMCkgdHJ5IHtcblx0XHRcdGNvbnN0IGRpcmVjdFNsb3QgPSB1c2VkUmVhY3RpdmVTbG90cy5sZW5ndGggPT09IDEgJiYgdXNlZFR5cGVkU2xvdHMubGVuZ3RoID09PSAwID8gdXNlZFJlYWN0aXZlU2xvdHNbMF0gOiBudWxsO1xuXHRcdFx0aWYgKGRpcmVjdFNsb3QgJiYgaXNEaXJlY3RTbG90VW5pdFByb2R1Y3QocGFyc2VkVmFsdWUsIGRpcmVjdFNsb3QubWFya2VyLCBkaXJlY3RTbG90Lm11bHRpcGxpZWRCeVVuaXQpKSB7XG5cdFx0XHRcdGNvbnN0IGxpbmtlZFZhbHVlID0gY3JlYXRlVHlwZWRVbml0VmFsdWUod2luLCBkaXJlY3RTbG90Lm11bHRpcGxpZWRCeVVuaXQsIHJlYWRSZWFjdGl2ZU51bWJlcihkaXJlY3RTbG90KSk7XG5cdFx0XHRcdHN0eWxlTWFwLnNldChwcm9wZXJ0eSwgbGlua2VkVmFsdWUpO1xuXHRcdFx0XHRhZGRNdXRhYmxlTGVhdmVzKG11dGFibGVMZWF2ZXMsIGF0dGFjaExlYWZUYXJnZXRzKFt7XG5cdFx0XHRcdFx0c2xvdDogZGlyZWN0U2xvdCxcblx0XHRcdFx0XHR2YWx1ZTogbGlua2VkVmFsdWVcblx0XHRcdFx0fV0sIHByb3BlcnR5LCBsaW5rZWRWYWx1ZSkpO1xuXHRcdFx0XHRhcHBsaWVkVGhyb3VnaFR5cGVkT00gPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChkaXJlY3RTbG90ICYmIGlzRGlyZWN0U2xvdFZhbHVlKHBhcnNlZFZhbHVlLCBkaXJlY3RTbG90Lm1hcmtlcikpIHtcblx0XHRcdFx0Y29uc3QgbGlua2VkVmFsdWUgPSBjcmVhdGVUeXBlZFVuaXRWYWx1ZSh3aW4sIFwibnVtYmVyXCIsIHJlYWRSZWFjdGl2ZU51bWJlcihkaXJlY3RTbG90KSk7XG5cdFx0XHRcdHN0eWxlTWFwLnNldChwcm9wZXJ0eSwgbGlua2VkVmFsdWUpO1xuXHRcdFx0XHRhZGRNdXRhYmxlTGVhdmVzKG11dGFibGVMZWF2ZXMsIGF0dGFjaExlYWZUYXJnZXRzKFt7XG5cdFx0XHRcdFx0c2xvdDogZGlyZWN0U2xvdCxcblx0XHRcdFx0XHR2YWx1ZTogbGlua2VkVmFsdWVcblx0XHRcdFx0fV0sIHByb3BlcnR5LCBsaW5rZWRWYWx1ZSkpO1xuXHRcdFx0XHRhcHBsaWVkVGhyb3VnaFR5cGVkT00gPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgdHJlZSA9IGJ1aWxkVHlwZWRPTVN0eWxlVmFsdWUocHJvcGVydHksIHBhcnNlZFZhbHVlLCB3aW4sIHVzZWRSZWFjdGl2ZVNsb3RzLCB1c2VkVHlwZWRTbG90cyk7XG5cdFx0XHRcdHN0eWxlTWFwLnNldChwcm9wZXJ0eSwgdHJlZS5yb290KTtcblx0XHRcdFx0YWRkTXV0YWJsZUxlYXZlcyhtdXRhYmxlTGVhdmVzLCBhdHRhY2hMZWFmVGFyZ2V0cyh0cmVlLmxlYXZlcywgcHJvcGVydHksIHRyZWUucm9vdCkpO1xuXHRcdFx0XHRhcHBsaWVkVGhyb3VnaFR5cGVkT00gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0XHRpZiAoYXBwbGllZFRocm91Z2hUeXBlZE9NKSBjb250aW51ZTtcblx0XHRpZiAoY2FuVXNlVHlwZWRPTSAmJiB1c2VkUmVhY3RpdmVTbG90cy5sZW5ndGggPT09IDAgJiYgdXNlZFR5cGVkU2xvdHMubGVuZ3RoID4gMCkgdHJ5IHtcblx0XHRcdGNvbnN0IGRpcmVjdFNsb3QgPSB1c2VkVHlwZWRTbG90cy5sZW5ndGggPT09IDEgPyB1c2VkVHlwZWRTbG90c1swXSA6IG51bGw7XG5cdFx0XHRpZiAoZGlyZWN0U2xvdCAmJiBpc0RpcmVjdFNsb3RWYWx1ZShwYXJzZWRWYWx1ZSwgZGlyZWN0U2xvdC5tYXJrZXIpKSB7XG5cdFx0XHRcdHN0eWxlTWFwLnNldChwcm9wZXJ0eSwgZGlyZWN0U2xvdC52YWx1ZSk7XG5cdFx0XHRcdGFwcGxpZWRUaHJvdWdoVHlwZWRPTSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGRpcmVjdFNsb3QgJiYgaXNEaXJlY3RTbG90VW5pdFByb2R1Y3QocGFyc2VkVmFsdWUsIGRpcmVjdFNsb3QubWFya2VyLCBkaXJlY3RTbG90Lm11bHRpcGxpZWRCeVVuaXQpKSB7XG5cdFx0XHRcdGNvbnN0IENTU01hdGhQcm9kdWN0Q3RvciA9IGdldFdpbmRvd0NvbnN0cnVjdG9yKHdpbiwgXCJDU1NNYXRoUHJvZHVjdFwiKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBDU1NNYXRoUHJvZHVjdEN0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNTU01hdGhQcm9kdWN0IGlzIG5vdCBzdXBwb3J0ZWRcIik7XG5cdFx0XHRcdGNvbnN0IHByb2R1Y3QgPSBuZXcgQ1NTTWF0aFByb2R1Y3RDdG9yKGRpcmVjdFNsb3QudmFsdWUsIGNyZWF0ZVR5cGVkVW5pdFZhbHVlKHdpbiwgZGlyZWN0U2xvdC5tdWx0aXBsaWVkQnlVbml0LCAxKSk7XG5cdFx0XHRcdHN0eWxlTWFwLnNldChwcm9wZXJ0eSwgcHJvZHVjdCk7XG5cdFx0XHRcdGFwcGxpZWRUaHJvdWdoVHlwZWRPTSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHRyZWUgPSBidWlsZFR5cGVkT01TdHlsZVZhbHVlKHByb3BlcnR5LCBwYXJzZWRWYWx1ZSwgd2luLCBbXSwgdXNlZFR5cGVkU2xvdHMpO1xuXHRcdFx0XHRcdHN0eWxlTWFwLnNldChwcm9wZXJ0eSwgdHJlZS5yb290KTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Y29uc3QgcmVjb25zdHJ1Y3RlZCA9IHJlcGxhY2VUeXBlZE1hcmtlcnMocGFyc2VkVmFsdWUsIHVzZWRUeXBlZFNsb3RzKTtcblx0XHRcdFx0XHRzZXRQYXJzZWRUeXBlZFZhbHVlKHN0eWxlTWFwLCBDU1NTdHlsZVZhbHVlQ3RvciwgcHJvcGVydHksIHJlY29uc3RydWN0ZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFwcGxpZWRUaHJvdWdoVHlwZWRPTSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHRcdGlmIChhcHBsaWVkVGhyb3VnaFR5cGVkT00pIGNvbnRpbnVlO1xuXHRcdGNvbnN0IHJlY29uc3RydWN0ZWQgPSByZXBsYWNlVHlwZWRNYXJrZXJzKHBhcnNlZFZhbHVlLCB1c2VkVHlwZWRTbG90cyk7XG5cdFx0ZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgcmVjb25zdHJ1Y3RlZCwgcHJpb3JpdHkpO1xuXHRcdGZvciAoY29uc3Qgc2xvdCBvZiB1c2VkUmVhY3RpdmVTbG90cykgcmVxdWlyZWRDU1NWYXJpYWJsZXMuYWRkKHNsb3QubWFya2VyKTtcblx0fVxuXHRmb3IgKGNvbnN0IHNsb3Qgb2YgcmVhY3RpdmVTbG90cykge1xuXHRcdGNvbnN0IGxlYXZlcyA9IG11dGFibGVMZWF2ZXMuZ2V0KHNsb3QubWFya2VyKSA/PyBbXTtcblx0XHRjb25zdCBuZWVkc0NTU1ZhcmlhYmxlID0gcmVxdWlyZWRDU1NWYXJpYWJsZXMuaGFzKHNsb3QubWFya2VyKTtcblx0XHRpZiAobGVhdmVzLmxlbmd0aCA9PT0gMCAmJiAhbmVlZHNDU1NWYXJpYWJsZSkgY29udGludWU7XG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gYmluZFdpdGgoZWxlbWVudCwgc2xvdC5tYXJrZXIsIHNsb3QudmFsdWUsIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0XHRcdGlmIChsZWF2ZXMubGVuZ3RoID4gMCkgdHJ5IHtcblx0XHRcdFx0Y29uc3QgbmV4dFZhbHVlID0gcmVhZFJlYWN0aXZlTnVtYmVyKHNsb3QpO1xuXHRcdFx0XHRjb25zdCBkaXJ0eVJvb3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdFx0Zm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuXHRcdFx0XHRcdGxlYWYudmFsdWUudmFsdWUgPSBuZXh0VmFsdWU7XG5cdFx0XHRcdFx0ZGlydHlSb290cy5zZXQobGVhZi5wcm9wZXJ0eSwgbGVhZi5yb290KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3R5bGVNYXA/LnNldCkgZm9yIChjb25zdCBbcHJvcGVydHlOYW1lLCByb290XSBvZiBkaXJ0eVJvb3RzKSBzdHlsZU1hcC5zZXQocHJvcGVydHlOYW1lLCByb290KTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGlmIChuZWVkc0NTU1ZhcmlhYmxlKSBoYW5kbGVTdHlsZUNoYW5nZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHR9KTtcblx0XHRzdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcblx0fVxuXHRmb3IgKGNvbnN0IG5hbWUgb2YgcmVxdWlyZWRDU1NWYXJpYWJsZXMpIHtcblx0XHRpZiAocmVhY3RpdmVTbG90cy5zb21lKChzbG90KSA9PiBzbG90Lm1hcmtlciA9PT0gbmFtZSkpIGNvbnRpbnVlO1xuXHRcdGNvbnN0IHZhbHVlID0gdmFyaWFibGVzLmdldChuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgY29udGludWU7XG5cdFx0c3Vic2NyaXB0aW9ucy5wdXNoKGJpbmRXaXRoKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBoYW5kbGVTdHlsZUNoYW5nZSkpO1xuXHR9XG5cdHBydW5lRW1wdHlTdHlsZUF0dHJpYnV0ZShlbGVtZW50KTtcblx0cmV0dXJuICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHN1YnNjcmlwdGlvbiBvZiBzdWJzY3JpcHRpb25zKSBzdWJzY3JpcHRpb24/LigpO1xuXHR9O1xufTtcbnZhciBjb21wbGlsZVN0YXRpY0NTU1RleHQgPSAoZm9yUmV0dXJuKSA9PiB7XG5cdGNvbnN0IFthcHBseSwgcHJvcGVydGllcywgdmFyaWFibGVzXSA9IGZvclJldHVybjtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFwcGx5KGVsZW1lbnQpO1xuXHRyZXR1cm4gZWxlbWVudC5zdHlsZS5jc3NUZXh0O1xufTtcbnZhciBTID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuXHRjb25zdCB0ZW1wbGF0ZUlkID0gc3R5bGVUZW1wbGF0ZUlkKys7XG5cdGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblx0Y29uc3QgdmFyaWFibGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgdHlwZWRTbG90cyA9IFtdO1xuXHRjb25zdCByZWFjdGl2ZVNsb3RzID0gW107XG5cdGNvbnN0IHBhcnRzID0gW107XG5cdGNvbnN0IGFuaW1hdGFibGVTbG90cyA9IFtdO1xuXHRjb25zdCBjb25zdW1lZCA9IG5ldyBBcnJheShzdHJpbmdzLmxlbmd0aCkuZmlsbCgwKTtcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0cmluZ3MubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0cGFydHMucHVzaChzdHJpbmdzW2luZGV4XS5zbGljZShjb25zdW1lZFtpbmRleF0pKTtcblx0XHRpZiAoaW5kZXggPj0gdmFsdWVzLmxlbmd0aCkgY29udGludWU7XG5cdFx0Y29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xuXHRcdGNvbnN0IG5leHRUZXh0ID0gc3RyaW5nc1tpbmRleCArIDFdID8/IFwiXCI7XG5cdFx0Y29uc3QgYXR0YWNoZWRVbml0ID0gcmVhZEF0dGFjaGVkQ1NTVW5pdChuZXh0VGV4dCk7XG5cdFx0aWYgKGlzTmF0aXZlQ1NTU3R5bGVWYWx1ZSh2YWx1ZSkpIHtcblx0XHRcdGNvbnN0IG1hcmtlciA9IGAtLWZlc3QtdHlwZWQtJHt0ZW1wbGF0ZUlkfS0ke3R5cGVkU2xvdHMubGVuZ3RofWA7XG5cdFx0XHR0eXBlZFNsb3RzLnB1c2goe1xuXHRcdFx0XHRtYXJrZXIsXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRtdWx0aXBsaWVkQnlVbml0OiBhdHRhY2hlZFVuaXQ/Lm5vcm1hbGl6ZWRcblx0XHRcdH0pO1xuXHRcdFx0aWYgKGF0dGFjaGVkVW5pdCkge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGBjYWxjKHZhcigke21hcmtlcn0pICogMSR7YXR0YWNoZWRVbml0LmF1dGhvcmVkfSlgKTtcblx0XHRcdFx0Y29uc3VtZWRbaW5kZXggKyAxXSArPSBhdHRhY2hlZFVuaXQubGVuZ3RoO1xuXHRcdFx0fSBlbHNlIHBhcnRzLnB1c2goYHZhcigke21hcmtlcn0pYCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGlzQW5pbWF0YWJsZVZhbHVlKHZhbHVlKSkge1xuXHRcdFx0Y29uc3QgbWFya2VyID0gYC0tZmVzdC1hbmltLSR7dGVtcGxhdGVJZH0tJHthbmltYXRhYmxlU2xvdHMubGVuZ3RofWA7XG5cdFx0XHRpZiAoYXR0YWNoZWRVbml0KSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYGNhbGModmFyKCR7bWFya2VyfSkgKiAxJHthdHRhY2hlZFVuaXQuYXV0aG9yZWR9KWApO1xuXHRcdFx0XHRjb25zdW1lZFtpbmRleCArIDFdICs9IGF0dGFjaGVkVW5pdC5sZW5ndGg7XG5cdFx0XHR9IGVsc2UgcGFydHMucHVzaChgdmFyKCR7bWFya2VyfSlgKTtcblx0XHRcdHByb3BlcnRpZXMucHVzaChgQHByb3BlcnR5ICR7bWFya2VyfSB7IHN5bnRheDogXCI8bnVtYmVyPlwiOyBpbml0aWFsLXZhbHVlOiAke051bWJlcih2YWx1ZS52YWx1ZSkgfHwgMH07IGluaGVyaXRzOiBmYWxzZTsgfTtgKTtcblx0XHRcdGFuaW1hdGFibGVTbG90cy5wdXNoKHtcblx0XHRcdFx0bWFya2VyLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0bXVsdGlwbGllZEJ5VW5pdDogYXR0YWNoZWRVbml0Py5ub3JtYWxpemVkXG5cdFx0XHR9KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoaXNSZWFjdGl2ZVN0eWxlVmFsdWUodmFsdWUpKSB7XG5cdFx0XHRjb25zdCBtYXJrZXIgPSBgLS1mZXN0LXJlZi0ke3RlbXBsYXRlSWR9LSR7cmVhY3RpdmVTbG90cy5sZW5ndGh9YDtcblx0XHRcdHJlYWN0aXZlU2xvdHMucHVzaCh7XG5cdFx0XHRcdG1hcmtlcixcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdG11bHRpcGxpZWRCeVVuaXQ6IGF0dGFjaGVkVW5pdD8ubm9ybWFsaXplZFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAoYXR0YWNoZWRVbml0KSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYGNhbGModmFyKCR7bWFya2VyfSkgKiAxJHthdHRhY2hlZFVuaXQuYXV0aG9yZWR9KWApO1xuXHRcdFx0XHRjb25zdW1lZFtpbmRleCArIDFdICs9IGF0dGFjaGVkVW5pdC5sZW5ndGg7XG5cdFx0XHR9IGVsc2UgcGFydHMucHVzaChgdmFyKCR7bWFya2VyfSlgKTtcblx0XHRcdGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldFJlYWN0aXZlSW5pdGlhbE51bWJlcih2YWx1ZSk7XG5cdFx0XHRwcm9wZXJ0aWVzLnB1c2goYEBwcm9wZXJ0eSAke21hcmtlcn0geyBzeW50YXg6IFwiPG51bWJlcj5cIjsgaW5pdGlhbC12YWx1ZTogJHtpbml0aWFsVmFsdWV9OyBpbmhlcml0czogdHJ1ZTsgfTtgKTtcblx0XHRcdHZhcmlhYmxlcy5zZXQobWFya2VyLCB2YWx1ZSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIiAmJiB2YWx1ZSAhPSBudWxsICYmIFN0cmluZyh2YWx1ZSkudHJpbSgpICE9PSBcIlwiKSBwYXJ0cy5wdXNoKFN0cmluZyh2YWx1ZSkpO1xuXHR9XG5cdGNvbnN0IGZvclJldHVybiA9IFtcblx0XHQoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIGFwcGx5U3R5bGVUZW1wbGF0ZShlbGVtZW50LCBwYXJ0cy5qb2luKFwiXCIpLCB0eXBlZFNsb3RzLCByZWFjdGl2ZVNsb3RzLCB2YXJpYWJsZXMsIGFuaW1hdGFibGVTbG90cyk7XG5cdFx0fSxcblx0XHRwcm9wZXJ0aWVzLFxuXHRcdHZhcmlhYmxlc1xuXHRdO1xuXHRmb3JSZXR1cm5bU3ltYm9sLnRvU3RyaW5nVGFnXSA9ICgpID0+IGNvbXBsaWxlU3RhdGljQ1NTVGV4dChmb3JSZXR1cm4pO1xuXHRmb3JSZXR1cm5bU3ltYm9sLnRvUHJpbWl0aXZlXSA9ICh0eXBlKSA9PiB7XG5cdFx0aWYgKHR5cGUgPT09IFwic3RyaW5nXCIpIHJldHVybiBjb21wbGlsZVN0YXRpY0NTU1RleHQoZm9yUmV0dXJuKTtcblx0XHRyZXR1cm4gZm9yUmV0dXJuWzBdO1xuXHR9O1xuXHRmb3JSZXR1cm4udG9TdHJpbmcgPSAoKSA9PiBjb21wbGlsZVN0YXRpY0NTU1RleHQoZm9yUmV0dXJuKTtcblx0Zm9yUmV0dXJuLnZhbHVlT2YgPSAoKSA9PiBjb21wbGlsZVN0YXRpY0NTU1RleHQoZm9yUmV0dXJuKTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZvclJldHVybiwgXCJjc3NUZXh0XCIsIHtcblx0XHRnZXQ6ICgpID0+IGNvbXBsaWxlU3RhdGljQ1NTVGV4dChmb3JSZXR1cm4pLFxuXHRcdHNldDogKHZhbHVlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInNldCBjc3NUZXh0XCIsIHZhbHVlKTtcblx0XHRcdGNvbnN0IFthcHBseSwgcHJvcGVydGllcywgdmFyaWFibGVzXSA9IGZvclJldHVybjtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0YXBwbHkoZWxlbWVudCk7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9LFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdH0pO1xuXHRyZXR1cm4gZm9yUmV0dXJuO1xufTtcbnZhciBjc3MgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG5cdHJldHVybiBTKHN0cmluZ3MsIC4uLnZhbHVlcyk7XG59O1xudmFyIHNwbGl0SW5saW5lU3R5bGVQbGFjZWhvbGRlcnMgPSAoc291cmNlLCBhdHRyaWJ1dGVzKSA9PiB7XG5cdGNvbnN0IHN0cmluZ3MgPSBbXTtcblx0Y29uc3QgdmFsdWVzID0gW107XG5cdGNvbnN0IHBhdHRlcm4gPSAvI1xceyhcXGQrKVxcfS9nO1xuXHRsZXQgY3Vyc29yID0gMDtcblx0bGV0IG1hdGNoO1xuXHR3aGlsZSAoKG1hdGNoID0gcGF0dGVybi5leGVjKHNvdXJjZSkpICE9IG51bGwpIHtcblx0XHRjb25zdCBhdHRyaWJ1dGVJbmRleCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSwgMTApO1xuXHRcdGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIoYXR0cmlidXRlSW5kZXgpIHx8IGF0dHJpYnV0ZUluZGV4IDwgMCkgY29udGludWU7XG5cdFx0c3RyaW5ncy5wdXNoKHNvdXJjZS5zbGljZShjdXJzb3IsIG1hdGNoLmluZGV4KSk7XG5cdFx0dmFsdWVzLnB1c2goYXR0cmlidXRlc1thdHRyaWJ1dGVJbmRleF0pO1xuXHRcdGN1cnNvciA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoO1xuXHR9XG5cdGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblx0c3RyaW5ncy5wdXNoKHNvdXJjZS5zbGljZShjdXJzb3IpKTtcblx0cmV0dXJuIHtcblx0XHRzdHJpbmdzLFxuXHRcdHZhbHVlc1xuXHR9O1xufTtcbnZhciBqb2luU3RhdGljSW5saW5lU3R5bGUgPSAoc3RyaW5ncywgdmFsdWVzKSA9PiB7XG5cdGxldCByZXN1bHQgPSBzdHJpbmdzWzBdID8/IFwiXCI7XG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xuXHRcdGlmICh2YWx1ZSAhPSBudWxsKSByZXN1bHQgKz0gU3RyaW5nKHZhbHVlKTtcblx0XHRyZXN1bHQgKz0gc3RyaW5nc1tpbmRleCArIDFdID8/IFwiXCI7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG52YXIgY29tcGlsZUlubGluZVN0eWxlQXR0cmlidXRlID0gKHNvdXJjZSwgYXR0cmlidXRlcykgPT4ge1xuXHRjb25zdCBwYXJzZWQgPSBzcGxpdElubGluZVN0eWxlUGxhY2Vob2xkZXJzKHNvdXJjZSwgYXR0cmlidXRlcyk7XG5cdGlmICghcGFyc2VkKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgeyBzdHJpbmdzLCB2YWx1ZXMgfSA9IHBhcnNlZDtcblx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDEgJiYgKHN0cmluZ3NbMF0gPz8gXCJcIikudHJpbSgpID09PSBcIlwiICYmIChzdHJpbmdzWzFdID8/IFwiXCIpLnRyaW0oKSA9PT0gXCJcIiAmJiAhaXNTdGF0aWNTdHlsZUludGVycG9sYXRpb24odmFsdWVzWzBdKSAmJiAhaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbHVlc1swXSkpIHtcblx0XHRpZiAoaXNTdHlsZUJpbmRpbmcodmFsdWVzWzBdKSkgcmV0dXJuIHtcblx0XHRcdGtpbmQ6IFwidGVtcGxhdGVcIixcblx0XHRcdGJpbmRpbmc6IHZhbHVlc1swXVxuXHRcdH07XG5cdFx0cmV0dXJuIHtcblx0XHRcdGtpbmQ6IFwiZGlyZWN0XCIsXG5cdFx0XHR2YWx1ZTogdmFsdWVzWzBdXG5cdFx0fTtcblx0fVxuXHRpZiAodmFsdWVzLnNvbWUoKHZhbHVlKSA9PiBpc1JlYWN0aXZlU3R5bGVWYWx1ZSh2YWx1ZSkgfHwgaXNOYXRpdmVDU1NTdHlsZVZhbHVlKHZhbHVlKSkpIHJldHVybiB7XG5cdFx0a2luZDogXCJ0ZW1wbGF0ZVwiLFxuXHRcdGJpbmRpbmc6IFMoc3RyaW5ncywgLi4udmFsdWVzKVxuXHR9O1xuXHRpZiAodmFsdWVzLmV2ZXJ5KGlzU3RhdGljU3R5bGVJbnRlcnBvbGF0aW9uKSkgcmV0dXJuIHtcblx0XHRraW5kOiBcInN0YXRpY1wiLFxuXHRcdGNzc1RleHQ6IGpvaW5TdGF0aWNJbmxpbmVTdHlsZShzdHJpbmdzLCB2YWx1ZXMpXG5cdH07XG5cdHJldHVybiB7XG5cdFx0a2luZDogXCJ0ZW1wbGF0ZVwiLFxuXHRcdGJpbmRpbmc6IFMoc3RyaW5ncywgLi4udmFsdWVzKVxuXHR9O1xufTtcbnZhciBiaW5kU3R5bGUgPSAoZWxlbWVudCwgc3R5bGVkKSA9PiB7XG5cdGNvbnN0IGFwcGx5ID0gQXJyYXkuaXNBcnJheShzdHlsZWQpID8gc3R5bGVkWzBdIDogc3R5bGVkO1xuXHRpZiAodHlwZW9mIGFwcGx5ICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiAoKSA9PiB7fTtcblx0Y29uc3QgcmVzdWx0ID0gYXBwbHkoZWxlbWVudCk7XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0cmVzdWx0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJlc3VsdD8udW5iaW5kPy4oKTtcblx0fTtcbn07XG52YXIgZW5zdXJlUmVnaXN0ZXJlZE51bWJlclByb3BlcnR5ID0gKHdpbiwgbmFtZSwgaW5pdGlhbFZhbHVlKSA9PiB7XG5cdGlmIChyZWdpc3RlcmVkUHJvcGVydGllcy5oYXMobmFtZSkpIHJldHVybjtcblx0cmVnaXN0ZXJlZFByb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR0cnkge1xuXHRcdCh3aW4/LkNTUyA/PyBDU1MpPy5yZWdpc3RlclByb3BlcnR5Py4oe1xuXHRcdFx0bmFtZSxcblx0XHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdFx0aW5pdGlhbFZhbHVlOiBTdHJpbmcoaW5pdGlhbFZhbHVlKSxcblx0XHRcdGluaGVyaXRzOiBmYWxzZVxuXHRcdH0pO1xuXHR9IGNhdGNoIHt9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvQW5pbWF0ZS50c1xudmFyIHBhcnNlUHJvcGVydHlMaXN0ID0gKG9wdGlvbnMpID0+IHtcblx0Y29uc3QgZnJvbVN0cmluZyA9IFtdO1xuXHRpZiAodHlwZW9mIG9wdGlvbnMucHJvcGVydGllcyA9PSBcInN0cmluZ1wiKSB7XG5cdFx0Y29uc3QgcHJvcHMgPSBvcHRpb25zLnByb3BlcnRpZXM/LnRyaW0/LigpPy5zcGxpdD8uKFwiO1wiKTtcblx0XHRmcm9tU3RyaW5nLnB1c2goLi4uQXJyYXkuZnJvbShwcm9wcyB8fCBbXSk/Lm1hcD8uKCgkcGFpcikgPT4ge1xuXHRcdFx0aWYgKCRwYWlyPy5pbmNsdWRlcz8uKFwiOlwiKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9ICgkcGFpcj8uc3BsaXQ/LihcIjpcIikgPz8gW10pPy5zbGljZT8uKDEsIC0xKT8uam9pbj8uKFwiOlwiKTtcblx0XHRcdFx0cmV0dXJuIHsgWygkcGFpcj8uWzBdKT8udHJpbT8uKCldOiB2YWx1ZT8udHJpbT8uKCkgfTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0pPy5maWx0ZXI/LigoYSkgPT4gYSAhPSBudWxsKSB8fCBbXSk7XG5cdH1cblx0cmV0dXJuIEFycmF5LmZyb20oQXJyYXkuaXNBcnJheShvcHRpb25zLnByb3BlcnRpZXMpID8gb3B0aW9ucy5wcm9wZXJ0aWVzIDogZnJvbVN0cmluZyk7XG59O1xudmFyIHBhcnNlQW5pbWF0aW9uVGVtcGxhdGUgPSAoc3RyaW5ncywgdmFsdWVzKSA9PiB7XG5cdGNvbnN0IHByb3BlcnRpZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRsZXQgZnVsbFRleHQgPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRmdWxsVGV4dCArPSBzdHJpbmdzW2ldO1xuXHRcdGlmIChpIDwgdmFsdWVzLmxlbmd0aCkgZnVsbFRleHQgKz0gYF9fU0xPVF8ke2l9X19gO1xuXHR9XG5cdGNvbnN0IGRlY2xhcmF0aW9ucyA9IGZ1bGxUZXh0LnNwbGl0KFwiO1wiKS5tYXAoKHMpID0+IHMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG5cdGZvciAoY29uc3QgZGVjbGFyYXRpb24gb2YgZGVjbGFyYXRpb25zKSB7XG5cdFx0Y29uc3QgY29sb25JbmRleCA9IGRlY2xhcmF0aW9uLmluZGV4T2YoXCI6XCIpO1xuXHRcdGlmIChjb2xvbkluZGV4ID09PSAtMSkgY29udGludWU7XG5cdFx0Y29uc3QgcHJvcGVydHkgPSBkZWNsYXJhdGlvbi5zbGljZSgwLCBjb2xvbkluZGV4KS50cmltKCk7XG5cdFx0Y29uc3QgdmFsdWVUZXh0ID0gZGVjbGFyYXRpb24uc2xpY2UoY29sb25JbmRleCArIDEpLnRyaW0oKTtcblx0XHRjb25zdCBzbG90TWF0Y2ggPSAvX19TTE9UXyhcXGQrKV9fLy5leGVjKHZhbHVlVGV4dCk7XG5cdFx0aWYgKCFzbG90TWF0Y2gpIGNvbnRpbnVlO1xuXHRcdGNvbnN0IHNsb3RWYWx1ZSA9IHZhbHVlc1twYXJzZUludChzbG90TWF0Y2hbMV0sIDEwKV07XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHNsb3RWYWx1ZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoYEFcXGAke3Byb3BlcnR5fVxcYCBleHBlY3RzIGFuIGFycmF5IG9mIHZhbHVlcywgZ290ICR7dHlwZW9mIHNsb3RWYWx1ZX1gKTtcblx0XHRwcm9wZXJ0aWVzLnNldChwcm9wZXJ0eSwge1xuXHRcdFx0cHJvcGVydHksXG5cdFx0XHR2YWx1ZXM6IHNsb3RWYWx1ZVxuXHRcdH0pO1xuXHR9XG5cdHJldHVybiB7IHByb3BlcnRpZXMgfTtcbn07XG52YXIgcHJvY2Vzc0FuaW1hdGlvblZhbHVlcyA9ICh2YWx1ZXMpID0+IHtcblx0Y29uc3QgcmVzb2x2ZWQgPSBbXTtcblx0Y29uc3QgcmVhY3RpdmVJbmRpY2VzID0gW107XG5cdGxldCBoYXNSZWFjdGl2ZSA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHZhbHVlID0gdmFsdWVzW2ldO1xuXHRcdGlmIChpc1JlYWN0aXZlU3R5bGVWYWx1ZSh2YWx1ZSkpIHtcblx0XHRcdGhhc1JlYWN0aXZlID0gdHJ1ZTtcblx0XHRcdHJlYWN0aXZlSW5kaWNlcy5wdXNoKGkpO1xuXHRcdFx0cmVzb2x2ZWQucHVzaCh2YWx1ZS52YWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChpc05hdGl2ZUNTU1N0eWxlVmFsdWUodmFsdWUpKSByZXNvbHZlZC5wdXNoKHZhbHVlKTtcblx0XHRlbHNlIHJlc29sdmVkLnB1c2godmFsdWUpO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0cmVzb2x2ZWQsXG5cdFx0aGFzUmVhY3RpdmUsXG5cdFx0cmVhY3RpdmVJbmRpY2VzXG5cdH07XG59O1xudmFyIGJ1aWxkV2ViQW5pbWF0aW9uS2V5ZnJhbWVzID0gKG9wdGlvbnMpID0+IHtcblx0Y29uc3QgZ2xvYmFsT2Zmc2V0cyA9IG9wdGlvbnM/Lm9mZnNldHM7XG5cdGNvbnN0IHByb3BlcnR5TGlzdCA9IHBhcnNlUHJvcGVydHlMaXN0KG9wdGlvbnMpO1xuXHRpZiAocHJvcGVydHlMaXN0Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gYW5pbWF0YWJsZSBwcm9wZXJ0aWVzIGZvdW5kIGluIEEgdGVtcGxhdGVcIik7XG5cdGNvbnN0IG1heExlbmd0aCA9IE1hdGgubWF4KC4uLnByb3BlcnR5TGlzdC5tYXAoKHApID0+IHAudmFsdWVzLmxlbmd0aCkpO1xuXHRjb25zdCBvZmZzZXRzID0gKGdsb2JhbE9mZnNldHM/Lmxlbmd0aCA+IDEgPyBnbG9iYWxPZmZzZXRzIDogbnVsbCkgfHwgQXJyYXkuZnJvbSh7IGxlbmd0aDogbWF4TGVuZ3RoIH0sIChfLCBpKSA9PiBpIC8gKG1heExlbmd0aCAtIDEpKTtcblx0Y29uc3QgZnJhbWVzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWF4TGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBmcmFtZSA9IHsgb2Zmc2V0OiBvZmZzZXRzW2ldID8/IGkgLyAobWF4TGVuZ3RoIC0gMSkgfTtcblx0XHRmb3IgKGNvbnN0IHByb3Agb2YgcHJvcGVydHlMaXN0KSB7XG5cdFx0XHRjb25zdCB7IHJlc29sdmVkIH0gPSBwcm9jZXNzQW5pbWF0aW9uVmFsdWVzKHByb3AudmFsdWVzKTtcblx0XHRcdGNvbnN0IGtlYmFiUHJvcCA9IGNhbWVsVG9LZWJhYihwcm9wLnByb3BlcnR5KTtcblx0XHRcdGxldCB2YWx1ZSA9IHJlc29sdmVkW01hdGgubWluKGksIHJlc29sdmVkLmxlbmd0aCAtIDEpXTtcblx0XHRcdGlmIChpc05hdGl2ZUNTU1N0eWxlVmFsdWUodmFsdWUpKSB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG5cdFx0XHRmcmFtZVtrZWJhYlByb3BdID0gdmFsdWU7XG5cdFx0fVxuXHRcdGZyYW1lcy5wdXNoKGZyYW1lKTtcblx0fVxuXHRyZXR1cm4gZnJhbWVzO1xufTtcbnZhciBidWlsZEFuaW1hdGlvblRpbWluZyA9IChvcHRpb25zKSA9PiB7XG5cdGNvbnN0IGR1cmF0aW9uID0gcGFyc2VUaW1lKG9wdGlvbnMuZHVyYXRpb24gPz8gMzAwKTtcblx0Y29uc3QgZGVsYXkgPSBwYXJzZVRpbWUob3B0aW9ucy5kZWxheSA/PyAwKTtcblx0Y29uc3QgaXRlcmF0aW9ucyA9IG5vcm1hbGl6ZUl0ZXJhdGlvbkNvdW50KG9wdGlvbnMuaXRlcmF0aW9uQ291bnQpO1xuXHRyZXR1cm4ge1xuXHRcdGR1cmF0aW9uLFxuXHRcdGRlbGF5LFxuXHRcdGNvbXBvc2l0ZTogb3B0aW9ucy5jb21wb3NpdGUgfHwgXCJyZXBsYWNlXCIsXG5cdFx0aXRlcmF0aW9uczogaXRlcmF0aW9ucyA9PT0gXCJJbmZpbml0eVwiID8gSW5maW5pdHkgOiBpdGVyYXRpb25zLFxuXHRcdGZpbGw6IG9wdGlvbnMuZmlsbE1vZGUgPz8gXCJub25lXCIsXG5cdFx0ZGlyZWN0aW9uOiBvcHRpb25zLmRpcmVjdGlvbiA/PyBcIm5vcm1hbFwiLFxuXHRcdGVhc2luZzogdHlwZW9mIG9wdGlvbnMuZWFzaW5nID09PSBcInN0cmluZ1wiID8gb3B0aW9ucy5lYXNpbmcgOiBcImxpbmVhclwiLFxuXHRcdHRpbWVsaW5lOiBvcHRpb25zLnRpbWVsaW5lXG5cdH07XG59O1xudmFyIGNyZWF0ZVJlYWN0aXZlQW5pbWF0aW9uID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcblx0Y29uc3QgcHJvcGVydHlMaXN0ID0gcGFyc2VQcm9wZXJ0eUxpc3Qob3B0aW9ucyk7XG5cdGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBbXTtcblx0Y29uc3QgZnJhbWVzID0gYnVpbGRXZWJBbmltYXRpb25LZXlmcmFtZXMob3B0aW9ucyk7XG5cdGNvbnN0IHRpbWluZyA9IGJ1aWxkQW5pbWF0aW9uVGltaW5nKG9wdGlvbnMpO1xuXHRjb25zdCBhbmltYXRpb24gPSBlbGVtZW50LmFuaW1hdGUoZnJhbWVzLCB0aW1pbmcpO1xuXHRmb3IgKGNvbnN0IHByb3Agb2YgcHJvcGVydHlMaXN0KSB7XG5cdFx0Y29uc3QgeyBoYXNSZWFjdGl2ZSwgcmVhY3RpdmVJbmRpY2VzIH0gPSBwcm9jZXNzQW5pbWF0aW9uVmFsdWVzKHByb3AudmFsdWVzKTtcblx0XHRpZiAoIWhhc1JlYWN0aXZlKSBjb250aW51ZTtcblx0XHRmb3IgKGNvbnN0IGluZGV4IG9mIHJlYWN0aXZlSW5kaWNlcykge1xuXHRcdFx0Y29uc3QgcmVhY3RpdmVWYWx1ZSA9IHByb3AudmFsdWVzW2luZGV4XTtcblx0XHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IGJpbmRXaXRoKGVsZW1lbnQsIGAtLWFuaW0tJHtwcm9wLnByb3BlcnR5fS0ke2luZGV4fWAsIHJlYWN0aXZlVmFsdWUsICgpID0+IHtcblx0XHRcdFx0Y29uc3QgbmV3RnJhbWVzID0gYnVpbGRXZWJBbmltYXRpb25LZXlmcmFtZXMob3B0aW9ucyk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRUaW1lID0gYW5pbWF0aW9uLmN1cnJlbnRUaW1lO1xuXHRcdFx0XHRhbmltYXRpb24uZWZmZWN0ID0gbmV3IEtleWZyYW1lRWZmZWN0KGVsZW1lbnQsIG5ld0ZyYW1lcywgdGltaW5nKTtcblx0XHRcdFx0aWYgKGN1cnJlbnRUaW1lICE9PSBudWxsKSBhbmltYXRpb24uY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcblx0XHRcdH0pO1xuXHRcdFx0c3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG5cdFx0YW5pbWF0aW9uLmNhbmNlbCgpO1xuXHRcdHN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3ViKSA9PiBzdWIoKSk7XG5cdH07XG5cdHJldHVybiB7XG5cdFx0YW5pbWF0aW9uLFxuXHRcdGNsZWFudXBcblx0fTtcbn07XG52YXIgQSA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcblx0cmV0dXJuIHBhcnNlQW5pbWF0aW9uVGVtcGxhdGUoc3RyaW5ncywgdmFsdWVzKTtcbn07XG52YXIgZG9BbmltYXRpb24gPSAoZWxlbWVudCwgY29uZmlnLCBrZXlmcmFtZXMpID0+IHtcblx0aWYgKHBhcnNlUHJvcGVydHlMaXN0KGNvbmZpZykuc29tZSgocHJvcCkgPT4ge1xuXHRcdGNvbnN0IHsgaGFzUmVhY3RpdmUgfSA9IHByb2Nlc3NBbmltYXRpb25WYWx1ZXMocHJvcC52YWx1ZXMpO1xuXHRcdHJldHVybiBoYXNSZWFjdGl2ZTtcblx0fSkpIHJldHVybiBjcmVhdGVSZWFjdGl2ZUFuaW1hdGlvbihlbGVtZW50LCBjb25maWcpO1xuXHRjb25zdCBmcmFtZXMgPSBidWlsZFdlYkFuaW1hdGlvbktleWZyYW1lcyhjb25maWcpO1xuXHRjb25zdCB0aW1pbmcgPSBidWlsZEFuaW1hdGlvblRpbWluZyhjb25maWcpO1xuXHRjb25zdCBhbmltYXRpb24gPSBlbGVtZW50LmFuaW1hdGUoZnJhbWVzLCB0aW1pbmcpO1xuXHRjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuXHRcdGFuaW1hdGlvbi5jYW5jZWwoKTtcblx0fTtcblx0cmV0dXJuIHtcblx0XHRhbmltYXRpb24sXG5cdFx0Y2xlYW51cFxuXHR9O1xufTtcbnZhciBhbmltYXRlID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcblx0Y29uc3QgcHJvcGVydGllcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMucHJvcGVydGllcykpIHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihgYW5pbWF0ZSgpIGV4cGVjdHMgYXJyYXlzIG9mIHZhbHVlcywgZ290ICR7dHlwZW9mIHZhbHVlc30gZm9yICR7cHJvcGVydHl9YCk7XG5cdFx0cHJvcGVydGllcy5zZXQocHJvcGVydHksIHtcblx0XHRcdHByb3BlcnR5LFxuXHRcdFx0dmFsdWVzXG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGRvQW5pbWF0aW9uKGVsZW1lbnQsIHsgLi4ub3B0aW9ucyB9LCBwcm9wZXJ0aWVzKTtcbn07XG52YXIgZGVmaW5lQW5pbWF0aW9uID0gKG9wdGlvbnMpID0+IHtcblx0cmV0dXJuIChlbGVtZW50KSA9PiB7XG5cdFx0cmV0dXJuIGRvQW5pbWF0aW9uKGVsZW1lbnQsIG9wdGlvbnMpO1xuXHR9O1xufTtcbnZhciBzZXF1ZW5jZUFuaW1hdGlvbnMgPSBhc3luYyAoZWxlbWVudCwgc2VxdWVuY2UpID0+IHtcblx0Zm9yIChjb25zdCBjb25maWcgb2Ygc2VxdWVuY2UpIHtcblx0XHRjb25zdCB7IGFuaW1hdGlvbiB9ID0gZG9BbmltYXRpb24oZWxlbWVudCwgY29uZmlnKTtcblx0XHRhd2FpdCBhbmltYXRpb24uZmluaXNoZWQ7XG5cdH1cbn07XG52YXIgcGFyYWxsZWxBbmltYXRpb25zID0gKGVsZW1lbnQsIGFuaW1hdGlvbnMpID0+IHtcblx0Y29uc3QgcmVzdWx0cyA9IGFuaW1hdGlvbnMubWFwKChjb25maWcpID0+IGRvQW5pbWF0aW9uKGVsZW1lbnQsIGNvbmZpZykpO1xuXHRjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuXHRcdHJlc3VsdHMuZm9yRWFjaCgocikgPT4gci5jbGVhbnVwKCkpO1xuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdGFuaW1hdGlvbnM6IHJlc3VsdHMubWFwKChyKSA9PiByLmFuaW1hdGlvbiksXG5cdFx0Y2xlYW51cFxuXHR9O1xufTtcbnZhciBzdGFnZ2VyQW5pbWF0aW9uID0gKGVsZW1lbnRzLCBvcHRpb25zLCBzdGFnZ2VyRGVsYXkgPSAxMDApID0+IHtcblx0cmV0dXJuIGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRjb25zdCBkZWxheSA9IHBhcnNlVGltZShvcHRpb25zPy5kZWxheSA/PyAwKSArIGluZGV4ICogc3RhZ2dlckRlbGF5O1xuXHRcdHJldHVybiBkb0FuaW1hdGlvbihlbGVtZW50LCB7XG5cdFx0XHQuLi5vcHRpb25zLFxuXHRcdFx0ZGVsYXlcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IEEsIEFOSU1BVEFCTEVfQlJBTkQsIEFuaW1hdGFibGVWYWx1ZSwgQkFLRV9DQVRFR09SSUVTLCBCQUtFX0xBWUVSLCBCQUtFX1NDUkVFTl9BTFNPLCBCQUtFX1NDUkVFTl9BTFNPX0VYUExPUkVSLCBCQUtFX1NDUkVFTl9BTFNPX1NFVFRJTkdTLCBCQUtFX1NDUkVFTl9DSFJPTUUsIEJBS0VfU0NSRUVOX01FRElBLCBDU1NfQ09MT1JfUFJPUEVSVElFUywgQ1NTX0RJTUVOU0lPTl9VTklUUywgQ1NTX0RJTUVOU0lPTl9VTklUU19MSVNULCBDU1NfTU9USU9OX1BST1BFUlRJRVMsIENTU19UWVBPR1JBUEhZX1BST1BFUlRJRVMsIENTU19VTklUX0ZBQ1RPUllfQUxJQVNFUywgQ1NTX1VOSVRfVE9LRU5fUkUsIERFRkFVTFRfQ0FDSEVfTVMsIERFRkFVTFRfQ0FURUdPUklFUywgSE9TVF9DU1NfRkFMTEJBQ0ssIExBWUVSX05BTUUsIExBWUVSX09QRU4sIE9XTkVSLCBTLCBTVFlMRV9USEVNRV9BVFRSUywgU1RZTEVfVEhFTUVfT0JTRVJWRV9BVFRSUywgVVhfSE9TVF9MQVlFUlMsIFVYX1BSRUxPQURfSE9TVF9DU1MsIFZFRUxBX0NBU0NBREVfTEFZRVJTLCBWSUVXRVJfQ1NTX0xBWUVSX09SREVSLCBWSUVXRVJfUlVOVElNRV9MQVlFUlMsIGFkZEFkb3B0ZWRTaGVldFRvRWxlbWVudCwgYWRvcHRlZEFwcGxpZWRUZXh0LCBhZG9wdGVkQmxvYk1hcCwgYWRvcHRlZEZpbGxlZCwgYWRvcHRlZExheWVyTWFwLCBhZG9wdGVkTWFwLCBhZG9wdGVkU2VsZWN0b3JNYXAsIGFkb3B0ZWRTaGFkb3dMYXllck1hcCwgYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwLCBhZG9wdGVkU3R5bGVTaGVldHNDYWNoZSwgYW5pbWF0YWJsZSwgYW5pbWF0ZSwgYXBwbHlOb3JtYWxpemVkSW5saW5lU3R5bGUsIGJha2VBbHNvUXVlcmllc0ZvciwgYmFrZUNvbXB1dGVkU3R5bGUsIGJha2VTY3JlZW5Db2xvcnMsIGJha2VUaGVtZUZpbmdlcnByaW50LCBiYWtlZENhY2hlLCBiYWtlZEZvbGxvd2VycywgYmFrZWRMaXZlLCBiYWtlZFN0eWxlcywgYmluZFN0eWxlLCBibG9iVVJMTWFwLCBidWlsZEJha2VkQ3NzVGV4dCwgY2FjaGVCbG9iQ29udGVudE1hcCwgY2FjaGVDb250ZW50TWFwLCBjYWNoZU1hcCwgY29sbGVjdEJha2VBbHNvSG9zdHMsIGNvbGxlY3RCYWtlU2NyZWVuSG9zdHMsIGNvbGxlY3RCYWtlZERlY2xhcmF0aW9ucywgY29tcGlsZUlubGluZVN0eWxlQXR0cmlidXRlLCBjb250YWluc01hcmtlciwgY3JlYXRlU3R5bGVJZCwgY3JlYXRlVHlwZWRVbml0VmFsdWUsIGNzcywgY3NzRW1wdHlMYXllclJ1bGUsIGNzc0ltcG9ydFdpdGhMYXllciwgY3NzTGF5ZXJCbG9jaywgY3NzTGF5ZXJPcmRlciwgY3NzVGV4dEZvckFkb3B0ZWRTaGVldCwgY3NzVGV4dFJlcXVpcmVzSW5saW5lU3R5bGVFbGVtZW50LCBjc3NVbml0Q29uc3RydWN0b3JOYW1lLCBjc3NVbml0RmFjdG9yeU5hbWUsIGRlZmluZUFuaW1hdGlvbiwgZG9BbmltYXRpb24sIGVuc3VyZUFkb3B0ZWRTaGVldENvbnRlbnQsIGVuc3VyZUhvc3RTdHlsZXMsIGVuc3VyZVN0eWxlU2NvcGVTZWxlY3RvciwgZXNjYXBlQ1NTSWRlbnRpZmllciwgZXNjYXBlUmVnRXhwLCBmZXRjaEFuZENhY2hlLCBmZXRjaEFzSW5saW5lLCBnZXRBZG9wdGVkU3R5bGVSdWxlLCBnZXRCYWtlZFN0eWxlLCBnZXRFbGVtZW50Wm9vbSwgZ2V0T3JDcmVhdGVMYXllclJ1bGUsIGdldFBhZGRpbmcsIGdldFByb3BlcnR5VmFsdWUsIGdldFB4VmFsdWUsIGdldFN0eWxlTGF5ZXIsIGdldFN0eWxlUnVsZSwgZ2V0VHJhbnNmb3JtLCBnZXRUcmFuc2Zvcm1PcmlnaW4sIGdldFdpbmRvd0NvbnN0cnVjdG9yLCBoYXNUeXBlZE9NLCBoYXNoLCBpbnZhbGlkYXRlQmFrZWRTdHlsZXMsIGlzQWRvcHRlZFNoZWV0RW1wdHksIGlzQW5pbWF0YWJsZVZhbHVlLCBpc0NvbG9yVG9rZW4sIGlzQ3NzRWxlbWVudCwgaXNDc3NMYXllck5hbWUsIGlzRG9jdW1lbnQsIGlzRWZmZWN0aXZlbHlFbXB0eVN0eWxlVGV4dCwgaXNFbGVtZW50VmlzaWJsZSwgaXNMYXllckJsb2NrUnVsZSwgaXNOYXRpdmVDU1NTdHlsZVZhbHVlLCBpc1JlYWN0aXZlU3R5bGVWYWx1ZSwgaXNTY3JvbGxEcml2ZW4sIGlzU2hhZG93Um9vdCwgaXNTdGF0aWNTdHlsZUludGVycG9sYXRpb24sIGlzU3R5bGVCaW5kaW5nLCBpc1N0eWxlSG9zdCwgaXNTdHlsZVZhbHVlLCBpc1VuaXRWYWx1ZSwgaXNWaWV3RHJpdmVuLCBsYXllckNvdW50ZXIsIGxvYWRBc0Fkb3B0ZWQsIGxvYWRCbG9iU3R5bGUsIGxvYWRDYWNoZWRTdHlsZXMsIGxvYWRJbmxpbmVTdHlsZSwgbG9hZFN0eWxlU2hlZXQsIG1ha2VIb3N0TGF5ZXJPcmRlciwgbm9ybWFsaXplQ3NzRm9yTGF5ZXIsIG5vcm1hbGl6ZUl0ZXJhdGlvbkNvdW50LCBub3JtYWxpemVJdGVyYXRpb25zLCBub3RpZnlTdHlsZVRyZWVIb3N0cywgb2JzZXJ2ZVN0eWxlVHJlZSwgb25TY3JvbGwsIG9uVmlldywgcGFyYWxsZWxBbmltYXRpb25zLCBwYXJzZUxlbmd0aCwgcGFyc2VPcmlnaW4sIHBhcnNlVGltZSwgcHJlbG9hZFN0eWxlLCBwcm9taXNlT3JEaXJlY3QsIHBydW5lRW1wdHlTdHlsZUF0dHJpYnV0ZSwgcXVlcnlGaXJzdERlZXAsIHJlYWRBdHRhY2hlZENTU1VuaXQsIHJlYWRTaGVldFJ1bGVDb3VudCwgcmViYWtlQmF0Y2gsIHJlYmFrZUNvbXB1dGVkU3R5bGUsIHJlZ2lzdGVyU3R5bGVUcmVlSG9vaywgcmVnaXN0ZXJlZFByb3BlcnRpZXMsIHJlaHlkcmF0ZUFkb3B0ZWRTdHlsZVNoZWV0cywgcmVoeWRyYXRlQ29uc3RydWN0YWJsZVNoZWV0cywgcmVtb3ZlQWRvcHRlZCwgc2NoZWR1bGVCYWtlU2NyZWVuQ29sb3JzLCBzY2hlZHVsZUVuc3VyZUhvc3RTdHlsZXMsIHNlcXVlbmNlQW5pbWF0aW9ucywgc2V0UHJvcGVydHksIHNldFN0eWxlSW5SdWxlLCBzZXRTdHlsZVByb3BlcnR5LCBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2ssIHNldFN0eWxlUHJvcGVydHlUeXBlZCwgc2V0U3R5bGVSdWxlLCBzZXRTdHlsZVJ1bGVzLCBzZXRTdHlsZVVSTCwgc3RhZ2dlckFuaW1hdGlvbiwgc3RyaXBDc3NQcmVhbWJsZSwgc3R5bGVDYWNoZSwgc3R5bGVFbGVtZW50Q2FjaGUsIHN0eWxlRmx1c2hQZW5kaW5nLCBzdHlsZVRyZWVIb29rcywgc3R5bGVUcmVlT2JzZXJ2ZWQsIHN0eWxlVHJlZVJvb3RzLCBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0LCB1bmJha2VDb21wdXRlZFN0eWxlLCB1bmJha2VTY3JlZW5Db2xvcnMsIHVud3JhcENzc0xheWVyLCB1cmxDYW5QYXJzZSwgdmVlbGFDYXNjYWRlT3JkZXIsIHdyYXBDc3NMYXllciB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsaUJBQUFBLElBQWUsYUFBQUMsSUFBVyxnQkFBQUMsSUFBYyxTQUFBQyxJQUFPLHVCQUFBQyxJQUFxQixZQUFBQyxJQUFVLFNBQUFDLElBQU8sZUFBQUMsSUFBYSxTQUFBQyxJQUFPLHFCQUFBQyxVQUF5QjtBQUMzSSxTQUFTLGtCQUFBQyxJQUFnQixZQUFBQyxVQUFnQjtBQUd6QyxJQUFJQyxJQUFTLENBQUNDLEdBQUtDLE1BQVcsV0FBVyxPQUFPLElBQUlELENBQUcsQ0FBQyxNQUFNQyxFQUFPLEdBQ2pFQyxJQUFhSCxFQUFPLHFCQUFxQixNQUFzQixvQkFBSSxRQUFRLENBQUMsR0FDNUVJLElBQVdKLEVBQU8sbUJBQW1CLE1BQXNCLG9CQUFJLElBQUksQ0FBQyxHQUNwRUssSUFBa0JMLEVBQU8sMEJBQTBCLE1BQXNCLG9CQUFJLElBQUksQ0FBQyxHQUNsRk0sS0FBc0JOLEVBQU8sOEJBQThCLE1BQXNCLG9CQUFJLFFBQVEsQ0FBQyxHQUM5Rk8sS0FBcUJQLEVBQU8sNkJBQTZCLE1BQXNCLG9CQUFJLElBQUksQ0FBQyxHQUN4RlEsS0FBMkJSLEVBQU8sbUNBQW1DLE1BQXNCLG9CQUFJLFFBQVEsQ0FBQyxHQUN4R1MsS0FBa0JULEVBQU8sMEJBQTBCLE1BQXNCLG9CQUFJLElBQUksQ0FBQyxHQUNsRlUsS0FBd0JWLEVBQU8sZ0NBQWdDLE1BQXNCLG9CQUFJLFFBQVEsQ0FBQyxHQUNsR1csSUFBYVgsRUFBTyxxQkFBcUIsTUFBc0Isb0JBQUksSUFBSSxDQUFDLEdBQ3hFWSxJQUFpQlosRUFBTyx5QkFBeUIsTUFBc0Isb0JBQUksUUFBUSxDQUFDLEdBQ3BGYSxJQUFxQmIsRUFBTyw2QkFBNkIsTUFBc0Isb0JBQUksUUFBUSxDQUFDLEdBQzVGYyxLQUFnQmQsRUFBTyx3QkFBd0IsTUFBc0Isb0JBQUksUUFBUSxDQUFDLEdBQ2xGZSxLQUFlZixFQUFPLHVCQUF1QixNQUFNLENBQUMsR0FDcERnQixLQUFpQmhCLEVBQU8seUJBQXlCLE1BQXNCLG9CQUFJLElBQUksQ0FBQyxHQUNoRmlCLEtBQW9CakIsRUFBTyw0QkFBNEIsTUFBc0Isb0JBQUksUUFBUSxDQUFDLEdBQzFGa0IsS0FBaUJsQixFQUFPLHlCQUF5QixNQUFzQixvQkFBSSxJQUFJLENBQUMsR0FDaEZtQixJQUFjbkIsRUFBTyx3QkFBd0IsTUFBc0Isb0JBQUksUUFBUSxDQUFDLEdBQ2hGb0IsSUFBWXBCLEVBQU8sdUJBQXVCLE1BQXNCLG9CQUFJLElBQUksQ0FBQyxHQUN6RXFCLElBQWFyQixFQUFPLHdCQUF3QixNQUFzQixvQkFBSSxJQUFJLENBQUMsR0FDM0VzQixLQUFjdEIsRUFBTyx5QkFBeUIsTUFBc0Isb0JBQUksSUFBSSxDQUFDLEdBQzdFdUIsSUFBaUJ2QixFQUFPLDRCQUE0QixNQUFzQixvQkFBSSxRQUFRLENBQUMsR0FDdkZ3QixLQUEwQnhCLEVBQU8saUNBQWlDLE1BQXNCLG9CQUFJLFFBQVEsQ0FBQyxHQUNyR3lCLEtBQWF6QixFQUFPLG9CQUFvQixNQUFzQixvQkFBSSxJQUFJLENBQUMsR0FDdkUwQixLQUFvQjFCLEVBQU8sMkJBQTJCLE1BQXNCLG9CQUFJLFFBQVEsQ0FBQyxHQUN6RjJCLEtBQW9CM0IsRUFBTywrQkFBK0IsTUFBc0Isb0JBQUksUUFBUSxDQUFDLEdBQzdGNEIsS0FBdUI1QixFQUFPLGtDQUFrQyxNQUFzQixvQkFBSSxJQUFJLENBQUMsR0FJL0Y2QixLQUEyQjtBQUFBLEVBQzlCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRCxHQUNJQyxLQUFzQixJQUFJLElBQUlELEVBQXdCLEdBQ3RERSxLQUEyQjtBQUFBLEVBQzlCLEtBQUs7QUFBQSxFQUNMLEdBQUc7QUFBQSxFQUNILElBQUk7QUFBQSxFQUNKLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTCxHQUNJQyxLQUFvQixrQkFDcEJDLEtBQXVCO0FBQUEsRUFDMUI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0QsR0FDSUMsS0FBNEI7QUFBQSxFQUMvQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRCxHQUNJQyxLQUF3QjtBQUFBLEVBQzNCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0QsR0FDSUMsS0FBb0I7QUFBQSxFQUN2QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRCxHQUNJQyxLQUE0QjtBQUFBLEVBQy9CLEdBQUdEO0FBQUEsRUFDSDtBQUFBLEVBQ0E7QUFDRCxHQUNJRSxLQUFrQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0QsR0FDSUMsS0FBdUI7QUFBQSxFQUMxQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRCxHQUNJQyxLQUFpQixDQUFDLGNBQWMsVUFBVSxHQUMxQ0MsS0FBd0I7QUFBQSxFQUMzQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0QsR0FDSUMsS0FBeUJELElBQ3pCRSxLQUFhLHFCQUNiQyxLQUFhLG9DQUNiQyxLQUFRLE9BQ1JDLEtBQW9CLHNCQUNwQkMsS0FBYSxZQUNiQyxLQUFxQixDQUFDLFVBQVUsUUFBUSxHQUN4Q0MsS0FBbUIsS0FDbkJDLEtBQW9CLFVBQ3BCQyxLQUFxQjtBQUFBLEVBQ3hCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNELEdBQ0lDLEtBQTRCO0FBQUEsRUFDL0I7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0QsR0FDSUMsS0FBNEI7QUFBQSxFQUMvQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNELEdBQ0lDLEtBQW1CLENBQUMsR0FBR0YsSUFBMkIsR0FBR0MsRUFBeUIsR0FDOUVFLEtBQW1CLHVCQUFPLElBQUksaUJBQWlCLEdBQy9DQyxLQUFhLE9BQU8sZ0JBQWtCLE9BQWUsT0FBTyxlQUFpQixLQUk3RUMsS0FBcUIsQ0FBQ0MsTUFBUzNCLEdBQXlCMkIsRUFBSyxZQUFZLENBQUMsS0FBS0EsRUFBSyxZQUFZLEdBQ2hHQyxLQUF5QixDQUFDRCxNQUFTQSxFQUFLLFlBQVksTUFBTSxNQUFNLFlBQVlBLEVBQUssWUFBWSxHQUM3RkUsS0FBaUIsQ0FBQ0MsTUFBU2xCLEdBQVcsS0FBS2tCLENBQUksR0FDL0NDLEtBQW9CLENBQUNDLE1BQWMsVUFBVUEsQ0FBUyxPQUN0REMsS0FBbUIsQ0FBQ0MsTUFBUTtBQUMvQixNQUFJQyxJQUFNLE9BQU9ELEtBQU8sRUFBRSxFQUFFLEtBQUs7QUFDakMsRUFBQUMsSUFBTUEsRUFBSSxRQUFRLDZCQUE2QixFQUFFO0FBQ2pELFdBQVNDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxLQUFLO0FBQzNCLFVBQU1DLElBQU9GLEVBQUksUUFBUSx3QkFBd0IsRUFBRTtBQUNuRCxRQUFJRSxNQUFTRixFQUFLO0FBQ2xCLElBQUFBLElBQU1FLEVBQUssS0FBSztBQUFBLEVBQ2pCO0FBQ0EsU0FBT0Y7QUFDUixHQUNJRyxLQUFtQixDQUFDQyxNQUFTLE9BQU8sb0JBQXNCLE9BQWVBLGFBQWdCLG1CQUN6RkMsSUFBa0MsTUFBTSxPQUFPLGFBQWUsT0FBZSxPQUFPLFdBQVcsaUJBQWtCLFlBQ2pIQyxLQUFvQyxDQUFDUCxNQUFRLE9BQU9BLEtBQVEsWUFBWSxhQUFhLEtBQUtBLENBQUcsR0FDN0ZRLEtBQWtCLENBQUNDLEdBQVNDLE1BQzNCLE9BQU9ELEdBQVMsUUFBUSxhQUFtQkEsR0FBUyxPQUFPQyxDQUFFLElBQzFEQSxFQUFHRCxDQUFPLEdBRWRFLElBQWUsQ0FBQ0MsTUFBVSxPQUFPLGFBQWUsT0FBZUEsYUFBaUIsWUFDaEZDLEtBQWEsQ0FBQ0QsTUFBVSxPQUFPLFdBQWEsT0FBZUEsYUFBaUIsVUFDNUVFLEtBQWUsQ0FBQ0YsTUFBVSxPQUFPLFVBQVksT0FBZUEsYUFBaUIsU0FDN0VHLEtBQXNCLENBQUNILE1BQ3RCLE9BQU8sTUFBUSxPQUFlLE9BQU8sSUFBSSxVQUFXLGFBQW1CLElBQUksT0FBT0EsQ0FBSyxJQUNwRixNQUFNLEtBQUtBLENBQUssRUFBRSxJQUFJLENBQUNJLE1BQVMsS0FBS0EsRUFBSyxZQUFZLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBRXJGQyxLQUFpQixHQUNqQkMsS0FBZ0IsTUFDZixPQUFPLFNBQVcsT0FBZSxPQUFPLE9BQU8sY0FBZSxhQUFtQixPQUFPLFdBQVcsSUFDaEcsTUFBTSxLQUFLLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUVELElBQWdCLFNBQVMsRUFBRSxDQUFDLElBRXBFRSxLQUFjLENBQUNQLE1BQVU7QUFDNUIsTUFBSTtBQUNILFdBQU8sT0FBTyxNQUFRLE9BQWUsT0FBTyxJQUFJLFlBQWEsY0FBYyxJQUFJLFNBQVNBLENBQUs7QUFBQSxFQUM5RixRQUFRO0FBQ1AsV0FBTztBQUFBLEVBQ1I7QUFDRCxHQUNJUSxLQUFPLE9BQU9DLE1BQVc7QUFDNUIsUUFBTUMsSUFBYSxNQUFNLFFBQVEsUUFBUSxPQUFPLFdBQVcsT0FBT0QsS0FBVSxXQUFXLElBQUksWUFBWSxFQUFFLE9BQU9BLENBQU0sSUFBSUEsYUFBa0IsY0FBY0EsSUFBUyxNQUFNQSxHQUFRLGNBQWMsQ0FBQztBQUNoTSxTQUFPLFlBQVksS0FBSyxPQUFPLGFBQWEsTUFBTSxNQUFNLElBQUksV0FBV0MsQ0FBVSxDQUFDLENBQUM7QUFDcEYsR0FDSUMsS0FBYyxDQUFDWCxHQUFPWSxNQUNyQlosRUFBTSxTQUFTLEdBQUcsSUFBVSxXQUFXQSxDQUFLLElBQUksTUFBTVksRUFBSyxJQUN4RCxXQUFXWixDQUFLLEdBRXBCYSxLQUFjLENBQUNDLEdBQVFDLE1BQVk7QUFDdEMsUUFBTUMsSUFBU0YsRUFBTyxNQUFNLEdBQUc7QUFDL0IsU0FBTyxJQUFJLFNBQVNILEdBQVlLLEVBQU8sQ0FBQyxHQUFHLE1BQU1ELEVBQVEsV0FBVyxHQUFHSixHQUFZSyxFQUFPLENBQUMsR0FBRyxNQUFNRCxFQUFRLFlBQVksQ0FBQztBQUMxSCxHQUNJRSxJQUFZLENBQUNDLEdBQUdDLElBQVcsTUFBTTtBQUNwQyxNQUFJLE9BQU9ELEtBQU0sU0FBVSxRQUFPQTtBQUNsQyxNQUFJLENBQUNBLEVBQUcsUUFBT0M7QUFDZixRQUFNQyxJQUFJLE9BQU9GLENBQUMsRUFBRSxLQUFLO0FBQ3pCLFNBQUlFLEVBQUUsU0FBUyxJQUFJLElBQVUsV0FBV0EsQ0FBQyxJQUNyQ0EsRUFBRSxTQUFTLEdBQUcsSUFBVSxXQUFXQSxDQUFDLElBQUksTUFDckMsV0FBV0EsQ0FBQyxLQUFLRDtBQUN6QixHQUNJRSxLQUEwQixDQUFDQyxNQUMxQkEsTUFBVSxTQUFlLElBQ3pCQSxNQUFVLE1BQU1BLE1BQVUsUUFBaUIsUUFDeEMsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNQSxDQUFLLENBQUMsR0FFakNDLEtBQXNCLENBQUNDLE1BQU1BLE1BQU0sTUFBTUEsTUFBTSxRQUFXLFFBQVcsS0FBSyxJQUFJLEdBQUdBLEtBQUssQ0FBQyxHQUN2RkMsS0FBaUIsQ0FBQ0wsTUFBTUEsS0FBSyxRQUFRLE9BQU9BLEtBQU0sWUFBWUEsRUFBRSxTQUFTLFVBQ3pFTSxLQUFlLENBQUNOLE1BQU1BLEtBQUssUUFBUSxPQUFPQSxLQUFNLFlBQVlBLEVBQUUsU0FBUyxRQUN2RU8sS0FBYyxDQUFDQyxNQUNkLENBQUNBLEtBQVFBLEVBQUssYUFBYSxJQUFVLEtBQ3JDLFVBQU9BLEVBQUssYUFBYSxFQUFFLEVBQUUsU0FBUyxHQUFHLEtBQ3pDQSxFQUFLLGNBQ0xBLEVBQUssVUFBVSxPQUdoQkMsS0FBcUIsQ0FBQ0MsTUFBVTtBQUNuQyxNQUFJO0FBQ0gsV0FBT0EsRUFBTSxTQUFTO0FBQUEsRUFDdkIsUUFBUTtBQUNQLFdBQU87QUFBQSxFQUNSO0FBQ0QsR0FDSUMsS0FBc0IsQ0FBQ0QsTUFBVTtBQUNwQyxNQUFJLENBQUNBLEVBQU8sUUFBTztBQUNuQixRQUFNUixJQUFRTyxHQUFtQkMsQ0FBSztBQUN0QyxTQUFJUixNQUFVLE9BQWEsS0FDcEJBLE1BQVU7QUFDbEIsR0FDSVUsS0FBZSxDQUFDaEQsTUFBU0EsTUFBUyxrQkFBa0JBLEVBQUssV0FBVyxVQUFVLEtBQUtBLEVBQUssU0FBUyxRQUFRLEtBQUtBLEVBQUssU0FBUyxLQUFLLEtBQUtBLEVBQUssU0FBUyxLQUFLLEdBQ3pKaUQsS0FBbUIsQ0FBQ0MsTUFBTztBQUM5QixNQUFJLENBQUNBLEVBQUcsWUFBYSxRQUFPO0FBQzVCLE1BQUksT0FBT0EsRUFBRyxrQkFBbUIsV0FBWSxRQUFPO0FBQ3BELE1BQUk7QUFDSCxXQUFPQSxFQUFHLGVBQWUsRUFBRSxTQUFTO0FBQUEsRUFDckMsUUFBUTtBQUNQLFdBQU87QUFBQSxFQUNSO0FBQ0QsR0FDSUMsS0FBaUIsQ0FBQ0MsTUFDZCxNQUFNLFFBQVFBLENBQU0sS0FBSyxPQUFPQSxFQUFPLENBQUMsS0FBTSxZQUVsREMsS0FBOEIsQ0FBQ0MsTUFBWTtBQUM5QyxRQUFNQyxJQUFTLE9BQU9ELEtBQVksV0FBV0EsRUFBUSxLQUFLLElBQUk7QUFDOUQsTUFBSSxDQUFDQyxFQUFRLFFBQU87QUFDcEIsYUFBV0MsS0FBU0QsRUFBTyxNQUFNLEdBQUcsR0FBRztBQUN0QyxVQUFNRSxJQUFjRCxFQUFNLEtBQUs7QUFDL0IsUUFBSSxDQUFDQyxFQUFhO0FBQ2xCLFVBQU1DLElBQWFELEVBQVksUUFBUSxHQUFHO0FBRTFDLFFBRElDLElBQWEsS0FDYkQsRUFBWSxNQUFNQyxJQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFHLFFBQU87QUFBQSxFQUNqRTtBQUNBLFNBQU87QUFDUixHQUNJQyxLQUEyQixDQUFDNUIsTUFBWTtBQUMzQyxNQUFJQSxLQUFXLEtBQU07QUFDckIsUUFBTTZCLElBQU03QixFQUFRLGFBQWEsT0FBTztBQUN4QyxFQUFJNkIsS0FBTyxRQUNQUCxHQUE0Qk8sQ0FBRyxNQUNsQzdCLEVBQVEsTUFBTSxVQUFVLElBQ3hCQSxFQUFRLGdCQUFnQixPQUFPO0FBRWpDLEdBQ0k4QixLQUE2QixDQUFDOUIsR0FBU3VCLE1BQVk7QUFDdEQsTUFBSUQsR0FBNEJDLENBQU8sR0FBRztBQUN6QyxJQUFBdkIsRUFBUSxNQUFNLFVBQVUsSUFDeEJBLEVBQVEsZ0JBQWdCLE9BQU87QUFDL0I7QUFBQSxFQUNEO0FBQ0EsRUFBQUEsRUFBUSxNQUFNLFVBQVV1QjtBQUN6QixHQUNJUSxJQUF3QixDQUFDOUMsTUFBVTtBQUN0QyxNQUFJQSxLQUFTLFFBQVEsT0FBT0EsS0FBVSxTQUFVLFFBQU87QUFDdkQsTUFBSTtBQUNILFVBQU0rQyxJQUFvQixXQUFXO0FBQ3JDLFFBQUksT0FBT0EsS0FBc0IsY0FBYy9DLGFBQWlCK0MsRUFBbUIsUUFBTztBQUMxRixhQUFTQyxJQUFZaEQsR0FBT2dELEdBQVdBLElBQVksT0FBTyxlQUFlQSxDQUFTLEVBQUcsS0FBSUEsR0FBVyxhQUFhLFNBQVMsZ0JBQWlCLFFBQU87QUFBQSxFQUNuSixRQUFRO0FBQUEsRUFBQztBQUNULFNBQU87QUFDUixHQUNJQyxLQUF1QixDQUFDakQsTUFBVTtBQUNyQyxNQUFJQSxLQUFTLFFBQVEsT0FBT0EsS0FBVSxZQUFZOEMsRUFBc0I5QyxDQUFLLEVBQUcsUUFBTztBQUN2RixNQUFJO0FBQ0gsV0FBTyxXQUFXQTtBQUFBLEVBQ25CLFFBQVE7QUFDUCxXQUFPO0FBQUEsRUFDUjtBQUNELEdBQ0lrRCxLQUE2QixDQUFDbEQsTUFDMUJBLEtBQVMsUUFBUSxPQUFPQSxLQUFVLFlBQVksT0FBT0EsS0FBVSxZQUVuRW1ELEtBQWUsQ0FBQ25ELE1BQ1pBLEVBQU0sUUFBUSx1QkFBdUIsTUFBTSxHQUUvQ29ELEtBQWlCLENBQUNDLEdBQVVDLE1BQ3hCLElBQUksT0FBTyxhQUFhSCxHQUFhRyxDQUFNLENBQUMsU0FBUyxFQUFFLEtBQUtELENBQVEsR0FFeEVFLEtBQXNCLENBQUNDLE1BQVM7QUFDbkMsUUFBTUMsSUFBUXRHLEdBQWtCLEtBQUtxRyxDQUFJO0FBQ3pDLE1BQUksQ0FBQ0MsRUFBTyxRQUFPO0FBQ25CLFFBQU1DLElBQVdELEVBQU0sQ0FBQyxHQUNsQkUsSUFBYUQsRUFBUyxZQUFZO0FBQ3hDLFNBQUt6RyxHQUFvQixJQUFJMEcsQ0FBVSxJQUNoQztBQUFBLElBQ04sVUFBQUQ7QUFBQSxJQUNBLFlBQUFDO0FBQUEsSUFDQSxRQUFRRCxFQUFTO0FBQUEsRUFDbEIsSUFMaUQ7QUFNbEQsR0FDSUUsSUFBdUIsQ0FBQ0MsR0FBSzdFLE1BQ3pCNkUsSUFBTTdFLENBQUksS0FBSyxhQUFhQSxDQUFJLEdBRXBDOEUsSUFBdUIsQ0FBQ0QsR0FBS2hGLEdBQU1tQixNQUFVO0FBQ2hELFFBQU0rRCxJQUFlRixHQUFLLEtBQ3BCRyxJQUFjcEYsR0FBbUJDLENBQUksR0FDckNvRixJQUFVRixJQUFlQyxDQUFXO0FBQzFDLE1BQUksT0FBT0MsS0FBWSxXQUFZLFFBQU9BLEVBQVEsS0FBS0YsR0FBYy9ELENBQUs7QUFDMUUsUUFBTWtFLElBQW1CTixFQUFxQkMsR0FBSyxjQUFjO0FBQ2pFLE1BQUksT0FBT0ssS0FBcUIsV0FBWSxPQUFNLElBQUksVUFBVSx1Q0FBdUNyRixDQUFJLEdBQUc7QUFDOUcsU0FBTyxJQUFJcUYsRUFBaUJsRSxHQUFPbEIsR0FBdUJELENBQUksQ0FBQztBQUNoRSxHQUNJc0YsS0FBZSxDQUFDQyxNQUFRekYsTUFBY3lGLGFBQWUsZUFDckRDLEtBQWMsQ0FBQ0QsTUFBUXpGLE1BQWN5RixhQUFlLGNBQ3BERSxLQUFpQixDQUFDQyxHQUFNQyxNQUFhO0FBQ3hDLE1BQUksQ0FBQ0QsS0FBUSxDQUFDQyxFQUFVLFFBQU87QUFTL0IsUUFBTUMsS0FSVyxDQUFDQyxNQUFVO0FBQzNCLFFBQUk7QUFDSCxZQUFNQyxJQUFNRCxFQUFNLGdCQUFnQkYsQ0FBUTtBQUMxQyxhQUFPRyxhQUFlLGNBQWNBLElBQU07QUFBQSxJQUMzQyxRQUFRO0FBQ1AsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNELEdBQ3dCSixDQUFJO0FBQzVCLE1BQUlFLEVBQVEsUUFBT0E7QUFDbkIsTUFBSUYsYUFBZ0IsV0FBV0EsRUFBSyxZQUFZO0FBQy9DLFVBQU1LLElBQVFOLEdBQWVDLEVBQUssWUFBWUMsQ0FBUTtBQUN0RCxRQUFJSSxFQUFPLFFBQU9BO0FBQUEsRUFDbkI7QUFDQSxNQUFJLE9BQU9MLEVBQUssb0JBQXFCLFdBQVksUUFBTztBQUN4RCxhQUFXckMsS0FBTXFDLEVBQUssaUJBQWlCLEdBQUcsR0FBRztBQUM1QyxRQUFJLENBQUNyQyxFQUFHLFdBQVk7QUFDcEIsVUFBTXlDLElBQU1MLEdBQWVwQyxFQUFHLFlBQVlzQyxDQUFRO0FBQ2xELFFBQUlHLEVBQUssUUFBT0E7QUFBQSxFQUNqQjtBQUNBLFNBQU87QUFDUixHQUlJRSxLQUFnQixJQUFJQyxNQUFXO0FBQ2xDLFFBQU1DLElBQXVCLG9CQUFJLElBQUksR0FDL0JDLElBQVEsQ0FBQztBQUNmLGFBQVdDLEtBQVNILEdBQVE7QUFDM0IsUUFBSUcsS0FBUyxLQUFNO0FBQ25CLFVBQU1DLElBQU8sT0FBT0QsS0FBVSxXQUFXLENBQUNBLENBQUssSUFBSUE7QUFDbkQsZUFBV3JDLEtBQU9zQyxHQUFNO0FBQ3ZCLFlBQU1sRyxJQUFPLE9BQU80RCxLQUFPLEVBQUUsRUFBRSxLQUFLO0FBQ3BDLE1BQUksQ0FBQzVELEtBQVErRixFQUFLLElBQUkvRixDQUFJLE1BQzFCK0YsRUFBSyxJQUFJL0YsQ0FBSSxHQUNiZ0csRUFBTSxLQUFLaEcsQ0FBSTtBQUFBLElBQ2hCO0FBQUEsRUFDRDtBQUNBLFNBQU9nRyxFQUFNLFNBQVMsVUFBVUEsRUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNO0FBQ3ZELEdBQ0lHLEtBQW9CLE1BQU1OLEdBQWNuSCxFQUFvQixHQUM1RDBILEtBQXFCLENBQUNDLE1BQVVSLEdBQWNsSCxJQUFnQjBILENBQUssR0FDbkVDLEtBQWdCLENBQUNwRyxHQUFXb0QsTUFBWTtBQUMzQyxRQUFNaUQsS0FBUWpELEtBQVcsSUFBSSxLQUFLO0FBQ2xDLFNBQUksQ0FBQ3BELEtBQWEsQ0FBQ3FHLElBQWEsS0FDekIsVUFBVXJHLENBQVM7QUFBQSxFQUFPcUcsQ0FBSTtBQUFBO0FBQ3RDLEdBQ0lDLEtBQWUsQ0FBQ2xELEdBQVNwRCxNQUFjQSxJQUFZLFVBQVVBLENBQVMsTUFBTW9ELENBQU8sT0FBT0EsR0FDMUZtRCxLQUF1QixDQUFDdkcsR0FBV29ELE1BQVk7QUFDbEQsUUFBTW9ELEtBQVdwRCxLQUFXLElBQUksS0FBSztBQUNyQyxTQUFLb0QsSUFDRCxZQUFZLEtBQUtBLENBQU8sSUFBVUEsSUFDL0JKLEdBQWNwRyxHQUFXd0csQ0FBTyxJQUZsQjtBQUd0QixHQUNJQyxLQUF3QixDQUFDdkcsR0FBS3dHLE1BQWlCO0FBQ2xELFFBQU1uQyxJQUFRckUsRUFBSSxNQUFNckIsRUFBVTtBQUVsQyxNQURJLENBQUMwRixLQUNEbUMsS0FBZ0JuQyxFQUFNLENBQUMsTUFBTW1DLEVBQWMsUUFBTztBQUN0RCxRQUFNQyxJQUFPcEMsRUFBTSxDQUFDLEVBQUUsWUFBWSxHQUFHO0FBQ3JDLE1BQUlxQyxJQUFRO0FBQ1osV0FBUyxJQUFJRCxHQUFNLElBQUl6RyxFQUFJLFFBQVEsS0FBSztBQUN2QyxVQUFNMkcsSUFBSzNHLEVBQUksQ0FBQztBQUNoQixRQUFJMkcsTUFBTyxJQUFLLENBQUFEO0FBQUEsYUFDUEMsTUFBTyxRQUNmRCxLQUNJQSxNQUFVO0FBQ2IsYUFBSTFHLEVBQUksTUFBTSxJQUFJLENBQUMsRUFBRSxLQUFLLElBQVUsT0FDN0JBLEVBQUksTUFBTXlHLElBQU8sR0FBRyxDQUFDLEVBQUUsS0FBSztBQUFBLEVBR3RDO0FBQ0EsU0FBTztBQUNSLEdBQ0lHLEtBQWlCLENBQUMxRCxHQUFTcEQsTUFBYztBQUM1QyxRQUFNK0csSUFBVzlHLEdBQWlCbUQsQ0FBTztBQUN6QyxTQUFPcUQsR0FBc0JNLEdBQVUvRyxDQUFTLEtBQUsrRztBQUN0RCxHQUNJQyxLQUFxQixDQUFDQyxHQUFLQyxJQUFRLE9BQU8sZ0JBQWdCRCxDQUFHLE1BQU1DLEtBQVMsT0FBT0EsS0FBVSxXQUFXLFNBQVNBLENBQUssTUFBTSxFQUFFLEtBQzlIQyxLQUFzQmYsR0FBYyxjQUFjLG1DQUFtQyxHQUNyRmdCLEtBQXVCLENBQUN4RSxHQUFPNUMsTUFBYztBQUNoRCxNQUFJLENBQUM0QyxLQUFTLENBQUM1QyxFQUFXO0FBQzFCLFFBQU1xSCxJQUFRLE1BQU0sS0FBS3pFLEVBQU0sWUFBWSxDQUFDLENBQUMsR0FDdkMwRSxJQUFXRCxFQUFNLEtBQUssQ0FBQzlHLE1BQVNELEdBQWlCQyxDQUFJLEtBQUtBLEVBQUssU0FBU1AsQ0FBUztBQUN2RixNQUFJc0gsRUFBVSxRQUFPQTtBQUNyQixNQUFJO0FBQ0gsVUFBTUMsSUFBWTNFLEVBQU0sV0FBVzdDLEdBQWtCQyxDQUFTLEdBQUdxSCxFQUFNLE1BQU0sR0FDdkVHLElBQVU1RSxFQUFNLFdBQVcyRSxDQUFTO0FBQzFDLFdBQU9qSCxHQUFpQmtILENBQU8sSUFBSUEsSUFBVTtBQUFBLEVBQzlDLFFBQVE7QUFDUDtBQUFBLEVBQ0Q7QUFDRCxHQUlJQyxLQUF1QixDQUFDcEUsTUFBVztBQUN0QyxRQUFNcUUsSUFBUyxDQUFDO0FBQ2hCLE1BQUlDLElBQVM7QUFDYixTQUFPQSxJQUFTdEUsRUFBTyxVQUFRO0FBQzlCLFVBQU11RSxJQUFPdkUsRUFBTyxNQUFNc0UsQ0FBTSxHQUMxQkUsSUFBYSxPQUFPLEtBQUtELENBQUk7QUFDbkMsUUFBSUMsR0FBWTtBQUNmLE1BQUFGLEtBQVVFLEVBQVcsQ0FBQyxFQUFFO0FBQ3hCO0FBQUEsSUFDRDtBQUNBLFVBQU1DLElBQVMsMkNBQTJDLEtBQUtGLENBQUk7QUFDbkUsUUFBSUUsR0FBUTtBQUNYLE1BQUFILEtBQVVHLEVBQU8sQ0FBQyxFQUFFO0FBQ3BCLFlBQU1DLElBQVk5SixHQUFrQixLQUFLb0YsRUFBTyxNQUFNc0UsQ0FBTSxDQUFDLEdBQ3ZEaEksSUFBT29JLElBQVksQ0FBQyxLQUFLO0FBQy9CLE1BQUlBLE1BQVdKLEtBQVVJLEVBQVUsQ0FBQyxFQUFFLFNBQ3RDTCxFQUFPLEtBQUs7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE9BQU8sT0FBT0ksRUFBTyxDQUFDLENBQUM7QUFBQSxRQUN2QixNQUFNbkksS0FBUSxPQUFPLE9BQU9BLEVBQUssWUFBWTtBQUFBLE1BQzlDLENBQUM7QUFDRDtBQUFBLElBQ0Q7QUFDQSxVQUFNcUksSUFBYSwyQkFBMkIsS0FBS0osQ0FBSTtBQUN2RCxRQUFJSSxHQUFZO0FBQ2YsTUFBQU4sRUFBTyxLQUFLO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixPQUFPTSxFQUFXLENBQUMsRUFBRSxZQUFZO0FBQUEsTUFDbEMsQ0FBQyxHQUNETCxLQUFVSyxFQUFXLENBQUMsRUFBRTtBQUN4QjtBQUFBLElBQ0Q7QUFDQSxVQUFNQyxJQUFTTCxFQUFLLENBQUM7QUFDckIsUUFBSTtBQUFBLE1BQ0g7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNELEVBQUUsU0FBU0ssQ0FBTSxHQUFHO0FBQ25CLE1BQUFQLEVBQU8sS0FBSztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sT0FBT087QUFBQSxNQUNSLENBQUMsR0FDRE47QUFDQTtBQUFBLElBQ0Q7QUFDQSxVQUFNLElBQUksWUFBWSwyQkFBMkJDLENBQUksR0FBRztBQUFBLEVBQ3pEO0FBQ0EsU0FBT0Y7QUFDUixHQUNJUSxLQUF5QixNQUFNO0FBQUEsRUFDbEM7QUFBQSxFQUNBO0FBQUEsRUFDQSxRQUFRO0FBQUEsRUFDUixZQUFZUixHQUFRL0MsR0FBSztBQUN4QixTQUFLLFNBQVMrQyxHQUNkLEtBQUssTUFBTS9DO0FBQUEsRUFDWjtBQUFBLEVBQ0EsUUFBUTtBQUNQLFVBQU1VLElBQU8sS0FBSyxTQUFTO0FBQzNCLFFBQUksS0FBSyxVQUFVLEtBQUssT0FBTyxPQUFRLE9BQU0sSUFBSSxZQUFZLGdDQUFnQztBQUM3RixXQUFPQTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFVBQVU7QUFDVCxXQUFPLEtBQUssT0FBTyxLQUFLLEtBQUs7QUFBQSxFQUM5QjtBQUFBLEVBQ0EsVUFBVTtBQUNULFVBQU04QyxJQUFRLEtBQUssT0FBTyxLQUFLLEtBQUs7QUFDcEMsUUFBSSxDQUFDQSxFQUFPLE9BQU0sSUFBSSxZQUFZLDhCQUE4QjtBQUNoRSxnQkFBSyxTQUNFQTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGNBQWNGLEdBQVE7QUFDckIsVUFBTUUsSUFBUSxLQUFLLFFBQVE7QUFDM0IsUUFBSUEsRUFBTSxTQUFTLFlBQVlBLEVBQU0sVUFBVUYsRUFBUSxPQUFNLElBQUksWUFBWSxhQUFhQSxDQUFNLEdBQUc7QUFBQSxFQUNwRztBQUFBLEVBQ0EsY0FBY0EsR0FBUTtBQUNyQixVQUFNRSxJQUFRLEtBQUssUUFBUTtBQUMzQixXQUFPQSxHQUFPLFNBQVMsWUFBWUEsRUFBTSxVQUFVRjtBQUFBLEVBQ3BEO0FBQUEsRUFDQSxXQUFXbkksTUFBU2dDLEdBQVE7QUFDM0IsVUFBTXNHLElBQWMxRCxFQUFxQixLQUFLLEtBQUs1RSxDQUFJO0FBQ3ZELFFBQUksT0FBT3NJLEtBQWdCLFdBQVksT0FBTSxJQUFJLFVBQVUsR0FBR3RJLENBQUksbUJBQW1CO0FBQ3JGLFdBQU8sSUFBSXNJLEVBQVksR0FBR3RHLENBQU07QUFBQSxFQUNqQztBQUFBLEVBQ0EsV0FBVztBQUNWLFFBQUloQixJQUFRLEtBQUssYUFBYTtBQUM5QixXQUFPLEtBQUssY0FBYyxHQUFHLEtBQUssS0FBSyxjQUFjLEdBQUcsS0FBRztBQUMxRCxZQUFNdUgsSUFBVyxLQUFLLFFBQVEsR0FDeEJDLElBQVEsS0FBSyxhQUFhO0FBQ2hDLFVBQUlELEVBQVMsU0FBUyxTQUFVLE9BQU0sSUFBSSxZQUFZLHVCQUF1QjtBQUM3RSxNQUFJQSxFQUFTLFVBQVUsTUFBS3ZILElBQVEsS0FBSyxXQUFXLGNBQWNBLEdBQU93SCxDQUFLLElBQ3pFeEgsSUFBUSxLQUFLLFdBQVcsY0FBY0EsR0FBTyxLQUFLLFdBQVcsaUJBQWlCd0gsQ0FBSyxDQUFDO0FBQUEsSUFDMUY7QUFDQSxXQUFPeEg7QUFBQSxFQUNSO0FBQUEsRUFDQSxlQUFlO0FBQ2QsUUFBSUEsSUFBUSxLQUFLLFdBQVc7QUFDNUIsV0FBTyxLQUFLLGNBQWMsR0FBRyxLQUFLLEtBQUssY0FBYyxHQUFHLEtBQUc7QUFDMUQsWUFBTXVILElBQVcsS0FBSyxRQUFRLEdBQ3hCQyxJQUFRLEtBQUssV0FBVztBQUM5QixVQUFJRCxFQUFTLFNBQVMsU0FBVSxPQUFNLElBQUksWUFBWSwyQkFBMkI7QUFDakYsTUFBSUEsRUFBUyxVQUFVLE1BQUt2SCxJQUFRLEtBQUssV0FBVyxrQkFBa0JBLEdBQU93SCxDQUFLLElBQzdFeEgsSUFBUSxLQUFLLFdBQVcsa0JBQWtCQSxHQUFPLEtBQUssV0FBVyxpQkFBaUJ3SCxDQUFLLENBQUM7QUFBQSxJQUM5RjtBQUNBLFdBQU94SDtBQUFBLEVBQ1I7QUFBQSxFQUNBLGFBQWE7QUFDWixXQUFJLEtBQUssY0FBYyxHQUFHLEtBQ3pCLEtBQUssUUFBUSxHQUNOLEtBQUssV0FBVyxLQUVwQixLQUFLLGNBQWMsR0FBRyxLQUN6QixLQUFLLFFBQVEsR0FDTixLQUFLLFdBQVcsaUJBQWlCLEtBQUssV0FBVyxDQUFDLEtBRW5ELEtBQUssYUFBYTtBQUFBLEVBQzFCO0FBQUEsRUFDQSxlQUFlO0FBQ2QsVUFBTXFILElBQVEsS0FBSyxRQUFRO0FBQzNCLFFBQUlBLEVBQU0sU0FBUyxTQUFVLFFBQU92RCxFQUFxQixLQUFLLEtBQUt1RCxFQUFNLFFBQVEsVUFBVUEsRUFBTSxLQUFLO0FBQ3RHLFFBQUlBLEVBQU0sU0FBUyxZQUFZQSxFQUFNLFVBQVUsS0FBSztBQUNuRCxZQUFNckgsSUFBUSxLQUFLLFNBQVM7QUFDNUIsa0JBQUssY0FBYyxHQUFHLEdBQ2ZBO0FBQUEsSUFDUjtBQUNBLFFBQUlxSCxFQUFNLFNBQVMsYUFBYyxRQUFPLEtBQUssY0FBY0EsRUFBTSxLQUFLO0FBQ3RFLFVBQU0sSUFBSSxZQUFZLDBCQUEwQjtBQUFBLEVBQ2pEO0FBQUEsRUFDQSxjQUFjckksR0FBTTtBQUVuQixRQURBLEtBQUssY0FBYyxHQUFHLEdBQ2xCQSxNQUFTLFFBQVE7QUFDcEIsWUFBTWdCLElBQVEsS0FBSyxTQUFTO0FBQzVCLGtCQUFLLGNBQWMsR0FBRyxHQUNmQTtBQUFBLElBQ1I7QUFDQSxVQUFNZ0IsSUFBUyxDQUFDO0FBQ2hCLFFBQUksQ0FBQyxLQUFLLGNBQWMsR0FBRztBQUUxQixXQURBQSxFQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsR0FDcEIsS0FBSyxjQUFjLEdBQUc7QUFDNUIsYUFBSyxRQUFRLEdBQ2JBLEVBQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUk3QixRQURBLEtBQUssY0FBYyxHQUFHLEdBQ2xCaEMsTUFBUyxPQUFPO0FBQ25CLFVBQUlnQyxFQUFPLFdBQVcsRUFBRyxPQUFNLElBQUksWUFBWSx3QkFBd0I7QUFDdkUsYUFBTyxLQUFLLFdBQVcsY0FBYyxHQUFHQSxDQUFNO0FBQUEsSUFDL0M7QUFDQSxRQUFJaEMsTUFBUyxPQUFPO0FBQ25CLFVBQUlnQyxFQUFPLFdBQVcsRUFBRyxPQUFNLElBQUksWUFBWSx3QkFBd0I7QUFDdkUsYUFBTyxLQUFLLFdBQVcsY0FBYyxHQUFHQSxDQUFNO0FBQUEsSUFDL0M7QUFDQSxRQUFJaEMsTUFBUyxTQUFTO0FBQ3JCLFVBQUlnQyxFQUFPLFdBQVcsRUFBRyxPQUFNLElBQUksWUFBWSwrQkFBK0I7QUFDOUUsYUFBTyxLQUFLLFdBQVcsZ0JBQWdCQSxFQUFPLENBQUMsR0FBR0EsRUFBTyxDQUFDLEdBQUdBLEVBQU8sQ0FBQyxDQUFDO0FBQUEsSUFDdkU7QUFDQSxVQUFNLElBQUksWUFBWSx5QkFBeUJoQyxDQUFJLEdBQUc7QUFBQSxFQUN2RDtBQUNELEdBQ0l5SSxLQUFpQixDQUFDcEUsR0FBVVEsTUFBUTtBQUN2QyxNQUFJO0FBQ0gsVUFBTStDLElBQVNELEdBQXFCdEQsQ0FBUTtBQUM1QyxXQUFPLElBQUkrRCxHQUF1QlIsR0FBUS9DLENBQUcsRUFBRSxNQUFNO0FBQUEsRUFDdEQsUUFBUTtBQUNQLFdBQU87QUFBQSxFQUNSO0FBQ0QsR0FDSTZELElBQXdCLENBQUNDLEdBQVVDLEdBQU81SCxHQUFPNkgsSUFBYSxPQUFPO0FBQ3hFLE1BQUksR0FBQ0YsS0FBWSxDQUFDQyxJQUNsQjtBQUFBLFFBQUk1SCxLQUFTLE1BQU07QUFDbEIsTUFBSTJILEVBQVMsaUJBQWlCQyxDQUFLLE1BQU0sTUFBSUQsRUFBUyxlQUFlQyxDQUFLO0FBQzFFO0FBQUEsSUFDRDtBQUNBLElBQUlELEVBQVMsaUJBQWlCQyxDQUFLLE1BQU01SCxLQUFPMkgsRUFBUyxZQUFZQyxHQUFPNUgsR0FBTzZILENBQVU7QUFBQTtBQUM5RixHQUNJQyxLQUF3QixDQUFDL0csR0FBUy9CLEdBQU1nQixHQUFPNkgsSUFBYSxPQUFPO0FBQ3RFLE1BQUksQ0FBQzlHLEtBQVcsQ0FBQy9CLEVBQU0sUUFBTytCO0FBQzlCLFFBQU02RyxJQUFRbk4sR0FBYXVFLENBQUksR0FDekIySSxJQUFXNUcsRUFBUSxPQUNuQmdILElBQWNoSCxFQUFRLHFCQUFxQkEsRUFBUTtBQUN6RCxNQUFJLENBQUNwQyxNQUFjLENBQUNvSixFQUFhLFFBQU9DLEdBQXlCakgsR0FBUy9CLEdBQU1nQixHQUFPNkgsQ0FBVTtBQUNqRyxRQUFNaEUsSUFBTTlDLEVBQVEsZUFBZSxlQUFlO0FBQ2xELE1BQUlxRCxJQUFNeEosR0FBU29GLENBQUssS0FBS2lELEdBQXFCakQsQ0FBSyxJQUFJQSxFQUFNLFFBQVFBO0FBQ3pFLE1BQUlvRSxLQUFPO0FBQ1YsV0FBQTJELEVBQVksU0FBU0gsQ0FBSyxHQUN0QkQsS0FBVUQsRUFBc0JDLEdBQVVDLEdBQU8sTUFBTUMsQ0FBVSxHQUM5RDlHO0FBRVIsTUFBSStCLEVBQXNCc0IsQ0FBRyxHQUFHO0FBQy9CLFVBQU02RCxJQUFNRixFQUFZLElBQUlILENBQUs7QUFDakMsUUFBSXZELEdBQVlELENBQUcsS0FBS0MsR0FBWTRELENBQUc7QUFDdEMsVUFBSUEsRUFBSSxVQUFVN0QsRUFBSSxTQUFTNkQsRUFBSSxTQUFTN0QsRUFBSSxLQUFNLFFBQU9yRDtBQUFBLGVBQ25Ea0gsTUFBUTdELEVBQUssUUFBT3JEO0FBQy9CLFdBQUFnSCxFQUFZLElBQUlILEdBQU94RCxDQUFHLEdBQ25CckQ7QUFBQSxFQUNSO0FBQ0EsTUFBSSxPQUFPcUQsS0FBUTtBQUNsQixRQUFJLEtBQUssVUFBVSxDQUFDd0QsRUFBTSxXQUFXLElBQUksR0FBRztBQUMzQyxZQUFNTSxJQUFTLElBQUksT0FBTzlELENBQUcsR0FDdkI2RCxJQUFNRixFQUFZLElBQUlILENBQUs7QUFDakMsYUFBSXZELEdBQVk0RCxDQUFHLEtBQUtBLEVBQUksVUFBVUMsRUFBTyxTQUFTRCxFQUFJLFNBQVNDLEVBQU8sUUFDMUVILEVBQVksSUFBSUgsR0FBT00sQ0FBTSxHQUN0Qm5IO0FBQUEsSUFDUjtBQUNDLGFBQUEyRyxFQUFzQkMsR0FBVUMsR0FBTyxPQUFPeEQsQ0FBRyxHQUFHeUQsQ0FBVSxHQUN2RDlHO0FBR1QsTUFBSSxPQUFPcUQsS0FBUSxVQUFVO0FBQzVCLFFBQUksOEJBQThCLEtBQUtBLENBQUcsR0FBRztBQUM1QyxZQUFNK0QsSUFBU1YsR0FBZXJELEdBQUtQLENBQUc7QUFDdEMsVUFBSXNFLEVBQVEsS0FBSTtBQUNmLGVBQUFKLEVBQVksSUFBSUgsR0FBT08sQ0FBTSxHQUN0QnBIO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFBQztBQUFBLElBQ1Y7QUFDQSxVQUFNcUgsSUFBV3BOLEdBQWtCb0osQ0FBRztBQUN0QyxRQUFJLE9BQU9nRSxLQUFhLFlBQVksS0FBSyxVQUFVLENBQUNSLEVBQU0sV0FBVyxJQUFJLEdBQUc7QUFDM0UsWUFBTU0sSUFBUyxJQUFJLE9BQU9FLENBQVEsR0FDNUJILElBQU1GLEVBQVksSUFBSUgsQ0FBSztBQUNqQyxhQUFJdkQsR0FBWTRELENBQUcsS0FBS0EsRUFBSSxVQUFVQyxFQUFPLFNBQVNELEVBQUksU0FBU0MsRUFBTyxRQUMxRUgsRUFBWSxJQUFJSCxHQUFPTSxDQUFNLEdBQ3RCbkg7QUFBQSxJQUNSO0FBQ0EsV0FBQTJHLEVBQXNCQyxHQUFVQyxHQUFPeEQsR0FBS3lELENBQVUsR0FDL0M5RztBQUFBLEVBQ1I7QUFDQSxTQUFBMkcsRUFBc0JDLEdBQVVDLEdBQU8sT0FBT3hELENBQUcsR0FBR3lELENBQVUsR0FDdkQ5RztBQUNSLEdBQ0lpSCxLQUEyQixDQUFDakgsR0FBUy9CLEdBQU1nQixHQUFPNkgsSUFBYSxPQUFPO0FBQ3pFLE1BQUksQ0FBQzlHLEtBQVcsQ0FBQy9CLEVBQU0sUUFBTytCO0FBQzlCLFFBQU02RyxJQUFRbk4sR0FBYXVFLENBQUksR0FDekIySSxJQUFXNUcsRUFBUTtBQUN6QixNQUFJLENBQUM0RyxFQUFVLFFBQU81RztBQUN0QixNQUFJcUQsSUFBTXhKLEdBQVNvRixDQUFLLEtBQUtpRCxHQUFxQmpELENBQUssSUFBSUEsRUFBTSxRQUFRQTtBQUV6RSxTQURJLE9BQU9vRSxLQUFRLFlBQVksQ0FBQ3RCLEVBQXNCc0IsQ0FBRyxNQUFHQSxJQUFNcEosR0FBa0JvSixDQUFHLEtBQUtBLElBQ3hGQSxLQUFPLFFBQ1ZzRCxFQUFzQkMsR0FBVUMsR0FBTyxNQUFNQyxDQUFVLEdBQ2hEOUcsTUFFSitCLEVBQXNCc0IsQ0FBRyxLQUl6QixPQUFPQSxLQUFRLFVBQ2xCc0QsRUFBc0JDLEdBQVVDLEdBQU8sT0FBT3hELENBQUcsR0FBR3lELENBQVUsR0FDdkQ5RztBQUlULEdBQ0lzSCxLQUFtQixDQUFDdEgsR0FBUy9CLEdBQU1nQixHQUFPNkgsSUFBYSxPQUNuRGxKLEtBQWFtSixHQUFzQi9HLEdBQVMvQixHQUFNZ0IsR0FBTzZILENBQVUsSUFBSUcsR0FBeUJqSCxHQUFTL0IsR0FBTWdCLEdBQU82SCxDQUFVLEdBRXBJUyxLQUFvQixDQUFDcEcsR0FBSXFHLEdBQU1uRSxNQUFRO0FBQzFDLFFBQU11RCxJQUFXekYsR0FBSTtBQUNyQixTQUFJLENBQUNxRyxLQUFRLE9BQU9BLEtBQVMsWUFBWSxDQUFDckcsS0FBTSxDQUFDeUYsS0FDakRwTixHQUFjNkosR0FBSyxNQUFNO0FBQ3hCLElBQUl2SixHQUFNdUosQ0FBRyxLQUFLeEosR0FBU3dKLENBQUcsS0FBS3RKLEdBQVlzSixDQUFHLElBQUdpRSxHQUFpQm5HLEdBQUlxRyxHQUFNbkUsQ0FBRyxJQUMxRUEsS0FBTyxRQUFNbEMsRUFBRyxNQUFNLGVBQWV6SCxHQUFhOE4sQ0FBSSxDQUFDO0FBQUEsRUFDakUsQ0FBQyxHQUNNckc7QUFDUixHQUlJc0csS0FBaUIsQ0FBQ2hFLEdBQVV4RixHQUFNZ0IsTUFDOUJxSSxHQUFpQkksR0FBYWpFLENBQVEsR0FBR3hGLEdBQU1nQixDQUFLLEdBRXhEMEksS0FBZSxDQUFDbEUsR0FBVTFDLE1BQVU7QUFDdkMsUUFBTXJDLElBQU9nSixHQUFhakUsQ0FBUTtBQUNsQyxnQkFBTyxRQUFRMUMsQ0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDNkcsR0FBVUMsQ0FBUyxNQUFNUCxHQUFpQjVJLEdBQU1rSixHQUFVQyxDQUFTLENBQUMsR0FDN0ZuSjtBQUNSLEdBQ0lvSixLQUFpQixDQUFDQyxHQUFRQyxHQUFNM0MsSUFBUSxJQUFJNEMsTUFBYztBQUM3RCxRQUFNQyxJQUFPQyxHQUFjSixDQUFNLEdBQzNCM0MsSUFBTSxPQUFPMkMsS0FBVSxZQUFXLElBQUksU0FBU0EsQ0FBTSxJQUFJQSxJQUFnQkc7QUFDL0UsU0FBSUYsSUFBTyxDQUFDLE1BQUdBLEVBQUssQ0FBQyxFQUFFLGdCQUFnQixTQUNuQ0EsS0FBUTVDLEtBQU8sT0FBT0EsS0FBTyxZQUFVZ0QsR0FBWUosR0FBTTVDLEdBQUtDLENBQUssR0FDbkUyQyxJQUFPLENBQUMsTUFBTSxDQUFDLElBQUksU0FBU0QsQ0FBTSxLQUFLRSxNQUFjRCxJQUFPLENBQUMsYUFBYSxpQkFDdkVuSixHQUFnQnFKLEdBQU0sQ0FBQ0csTUFBUTtBQUNyQyxJQUFJTCxJQUFPLENBQUMsS0FBS0ssTUFDaEJELEdBQVlKLEdBQU1LLEdBQUtoRCxDQUFLLEdBQzVCMkMsSUFBTyxDQUFDLEVBQUUsYUFBYSxVQUFVLEVBQUU7QUFBQSxFQUVyQyxDQUFDLEdBQUcsUUFBUSxDQUFDTSxNQUFVO0FBQ3RCLFlBQVEsS0FBSywrQkFBK0JBLENBQUs7QUFBQSxFQUNsRCxDQUFDO0FBQ0YsR0FDSUMsS0FBZ0IsQ0FBQ1IsTUFBVztBQUMvQixRQUFNUyxJQUFRLE9BQU8sV0FBWSxNQUFjLFNBQVMsY0FBYyxNQUFNLElBQUk7QUFFaEYsU0FESUEsTUFBT0EsRUFBTSxnQkFBZ0IsU0FDN0JBLEtBQ0gsT0FBTyxPQUFPQSxHQUFPO0FBQUEsSUFDcEIsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLEVBQ2QsQ0FBQyxHQUNEQSxFQUFNLFFBQVEsUUFBUSxPQUN0QlYsR0FBZUMsR0FBUSxDQUFDUyxHQUFPLE1BQU0sQ0FBQyxHQUN0QyxPQUFPLFdBQVksT0FBZSxTQUFTLEtBQUssT0FBT0EsQ0FBSyxHQUNyREEsS0FFRDtBQUNSLEdBQ0lDLElBQWtCLENBQUNWLEdBQVFXLElBQWMsT0FBTyxXQUFZLE1BQWMsVUFBVSxPQUFPLE1BQU1yRCxJQUFRLE9BQU87QUFDbkgsUUFBTXNELElBQVFELEdBQWEsZ0JBQWdCLE1BQU0sS0FBS0E7QUFDdEQsTUFBSSxPQUFPLGtCQUFtQixPQUFlQyxhQUFpQixnQkFBaUIsUUFBT0osR0FBY1IsQ0FBTTtBQUMxRyxRQUFNUyxJQUFRLE9BQU8sV0FBWSxNQUFjLFNBQVMsY0FBYyxPQUFPLElBQUk7QUFDakYsU0FBSUEsS0FDSEEsRUFBTSxRQUFRLFFBQVEsT0FDdEJWLEdBQWVDLEdBQVEsQ0FBQ1MsR0FBTyxXQUFXLEdBQUduRCxDQUFLLEdBQ2xEc0QsR0FBTyxVQUFVSCxDQUFLLEdBQ2ZBLEtBRUQ7QUFDUixHQUNJSSxLQUFjLENBQUNDLEdBQVE1SyxHQUFNZ0IsR0FBTzZILElBQWEsT0FDN0NRLEdBQWlCdUIsR0FBUTVLLEdBQU1nQixHQUFPNkgsQ0FBVSxHQUVwRGdDLEtBQWUsQ0FBQ3pILE1BQ1owSCxHQUFjMUgsR0FBUSxFQUFFLEdBRTVCMkgsS0FBc0IsQ0FBQ2pJLEdBQU9RLE1BQVk7QUFDN0MsRUFBQXRHLEVBQW1CLElBQUk4RixHQUFPUSxDQUFPLEdBQ3JDckcsR0FBYyxJQUFJNkYsQ0FBSztBQUN4QixHQUNJa0ksSUFBeUIsQ0FBQ2xJLE1BQVU7QUFDdkMsTUFBSSxDQUFDQSxFQUFPLFFBQU87QUFDbkIsUUFBTW1JLElBQVNqTyxFQUFtQixJQUFJOEYsQ0FBSztBQUMzQyxNQUFJbUksRUFBUSxRQUFPQTtBQUNuQixhQUFXLENBQUM3TyxHQUFLOE8sQ0FBTSxLQUFLcE8sRUFBWSxLQUFJb08sTUFBV3BJLEtBQVMsT0FBTzFHLEtBQVEsU0FBVSxRQUFPQTtBQUNoRyxTQUFPO0FBQ1IsR0FDSStPLEtBQTRCLENBQUNySSxHQUFPUSxNQUFZO0FBQ25ELE1BQUksQ0FBQ1IsRUFBTyxRQUFPO0FBQ25CLFFBQU0wQixJQUFPbEIsS0FBVzBILEVBQXVCbEksQ0FBSyxHQUM5Q1IsSUFBUU8sR0FBbUJDLENBQUs7QUFDdEMsU0FBSVIsTUFBVSxPQUFhLEtBQ3ZCQSxJQUFRLEtBQ1hyRixHQUFjLElBQUk2RixDQUFLLEdBQ25CMEIsS0FBUSxDQUFDeEgsRUFBbUIsSUFBSThGLENBQUssS0FBRzlGLEVBQW1CLElBQUk4RixHQUFPMEIsQ0FBSSxHQUN2RSxNQUVIQSxLQUNENEcsR0FBc0J0SSxHQUFPMEIsQ0FBSSxLQUNwQ3VHLEdBQW9CakksR0FBTzBCLENBQUksR0FDeEIsTUFIVTtBQU1uQixHQUNJNEcsS0FBd0IsQ0FBQ3RJLEdBQU9RLE1BQVk7QUFDL0MsTUFBSSxDQUFDUixLQUFTLENBQUNRLEVBQVMsUUFBTztBQUMvQixNQUFJO0FBQ0gsV0FBQVIsRUFBTSxZQUFZUSxDQUFPLEdBQ2xCO0FBQUEsRUFDUixTQUFTK0csR0FBTztBQUNmLFVBQU1nQixJQUFVLE9BQU9oQixHQUFPLFdBQVcsRUFBRSxFQUFFLFlBQVk7QUFDekQsV0FBTWdCLEVBQVEsU0FBUywrQkFBK0IsS0FBS0EsRUFBUSxTQUFTLFNBQVMsS0FBS0EsRUFBUSxTQUFTLGFBQWEsS0FBSSxRQUFRLEtBQUssNkNBQTZDaEIsQ0FBSyxHQUNwTDtBQUFBLEVBQ1I7QUFDRCxHQUNJaUIsS0FBZSxDQUFDQyxNQUFTO0FBQzVCLE1BQUl6SSxJQUFRL0YsRUFBZSxJQUFJd08sQ0FBSTtBQUNuQyxTQUFLekksTUFDSkEsSUFBUSxJQUFJLGNBQWMsR0FDMUIvRixFQUFlLElBQUl3TyxHQUFNekksQ0FBSyxJQUV4QkE7QUFDUixHQUNJZ0ksS0FBZ0IsQ0FBQzFILEdBQVFsRCxJQUFZLFNBQVM7QUFDakQsTUFBSTtBQUNILFdBQU9zTCxHQUFvQnBJLEdBQVFsRCxDQUFTO0FBQUEsRUFDN0MsU0FBU21LLEdBQU87QUFDZixtQkFBUSxLQUFLLDhCQUE4QkEsQ0FBSyxHQUM1QyxPQUFPakgsS0FBVyxZQUFVb0gsRUFBZ0JwSCxHQUFRLFFBQVFsRCxLQUFhLEVBQUUsR0FDeEU7QUFBQSxFQUNSO0FBQ0QsR0FDSXNMLEtBQXNCLENBQUNwSSxHQUFRbEQsSUFBWSxTQUFTO0FBQ3ZELE1BQUksQ0FBQ1EsRUFBZ0M7QUFDcEMsV0FBSSxPQUFPMEMsS0FBVyxZQUFVb0gsRUFBZ0JwSCxHQUFRLFFBQVFsRCxLQUFhLEVBQUUsR0FDeEU7QUFFUixNQUFJLE9BQU9rRCxLQUFXLFlBQVl6QyxHQUFrQ3lDLENBQU07QUFDekUsV0FBQW9ILEVBQWdCcEgsR0FBUSxRQUFRbEQsS0FBYSxFQUFFLEdBQ3hDO0FBRVIsTUFBSSxPQUFPa0QsS0FBVSxZQUFZdEcsR0FBWSxNQUFNc0csQ0FBTSxHQUFHO0FBQzNELFVBQU1xSSxJQUFTM08sRUFBVyxJQUFJc0csQ0FBTSxHQUM5QnNJLElBQVUxTyxFQUFtQixJQUFJeU8sQ0FBTSxLQUFLakYsR0FBYXBELEdBQVFsRCxDQUFTO0FBQ2hGLFdBQUFpTCxHQUEwQk0sR0FBUUMsQ0FBTyxHQUNyQyxPQUFPLFdBQWEsT0FBZSxTQUFTLHNCQUFzQixDQUFDLFNBQVMsbUJBQW1CLFNBQVNELENBQU0sS0FBRyxTQUFTLG1CQUFtQixLQUFLQSxDQUFNLEdBQ3JKQTtBQUFBLEVBQ1I7QUFDQSxPQUFLckksYUFBa0IsUUFBUUEsYUFBa0IsU0FBU3JHLEdBQWdCLE1BQU1xRyxDQUFNLEdBQUc7QUFDeEYsVUFBTXFJLElBQVMxTyxFQUFlLElBQUlxRyxDQUFNO0FBQ3hDLFdBQUErSCxHQUEwQk0sQ0FBTSxHQUM1QixPQUFPLFdBQWEsT0FBZSxTQUFTLHNCQUFzQixDQUFDLFNBQVMsbUJBQW1CLFNBQVNBLENBQU0sS0FBRyxTQUFTLG1CQUFtQixLQUFLQSxDQUFNLEdBQ3JKQTtBQUFBLEVBQ1I7QUFDQSxNQUFJLENBQUNySSxFQUFRLFFBQU87QUFDcEIsUUFBTU4sSUFBUSxPQUFPTSxLQUFVLFdBQVd6SCxHQUFvQm1CLEdBQVlzRyxHQUFRLE1BQU0sSUFBSSxjQUFjLENBQUMsSUFBSWtJLEdBQWFsSSxDQUFNO0FBRWxJLE1BREksT0FBTyxXQUFZLE9BQWUsU0FBUyxzQkFBc0IsQ0FBQyxTQUFTLG1CQUFtQixTQUFTTixDQUFLLEtBQUcsU0FBUyxtQkFBbUIsS0FBS0EsQ0FBSyxHQUNySixPQUFPTSxLQUFVLFlBQVksQ0FBQzdCLEdBQVk2QixDQUFNLEdBQUc7QUFDdEQsVUFBTXVJLElBQWVuRixHQUFhcEQsR0FBUWxELENBQVM7QUFDbkQsV0FBQXBELEVBQVcsSUFBSXNHLEdBQVFOLENBQUssR0FDdkJzSSxHQUFzQnRJLEdBQU82SSxDQUFZLElBSXZDWixHQUFvQmpJLEdBQU82SSxDQUFZLEtBSDdDQyxHQUFjOUksQ0FBSyxHQUNuQmhHLEVBQVcsT0FBT3NHLENBQU0sR0FDeEJvSCxFQUFnQnBILENBQU0sSUFFaEJOO0FBQUEsRUFDUixNQUFPLENBQUFsQyxHQUFnQmlMLEdBQWN6SSxDQUFNLEdBQUcsQ0FBQ3FJLE1BQVc7QUFFekQsUUFEQTNPLEVBQVcsSUFBSTJPLEdBQVEzSSxDQUFLLEdBQ3hCMkksR0FBUTtBQUNYLFVBQUk5SyxHQUFrQzhLLENBQU07QUFDM0MsZUFBQUcsR0FBYzlJLENBQUssR0FDbkJoRyxFQUFXLE9BQU8yTyxDQUFNLEdBQ3hCMU8sRUFBZSxPQUFPcUcsQ0FBTSxHQUM1Qm9ILEVBQWdCaUIsR0FBUSxRQUFRdkwsS0FBYSxFQUFFLEdBQ3hDNEM7QUFFUixZQUFNNkksSUFBZW5GLEdBQWFpRixHQUFRdkwsQ0FBUztBQUNuRCxhQUFLa0wsR0FBc0J0SSxHQUFPNkksQ0FBWSxJQUt2Q1osR0FBb0JqSSxHQUFPNkksQ0FBWSxLQUo3Q0MsR0FBYzlJLENBQUssR0FDbkJoRyxFQUFXLE9BQU8yTyxDQUFNLEdBQ3hCMU8sRUFBZSxPQUFPcUcsQ0FBTSxHQUM1Qm9ILEVBQWdCaUIsR0FBUSxRQUFRdkwsS0FBYSxFQUFFLElBRXpDNEM7QUFBQSxJQUNSO0FBQUEsRUFDRCxDQUFDO0FBQ0QsU0FBT0E7QUFDUixHQUNJZ0osS0FBb0IsQ0FBQ2xKLEdBQU1tSixNQUFTO0FBQ3ZDLE1BQUksR0FBQ25KLEtBQVFBLEVBQUssYUFBYSxJQUMvQjtBQUFBLFFBQUlBLEVBQUssYUFBYSxJQUFJO0FBQ3pCLGlCQUFXb0osS0FBU3BKLEVBQUssY0FBYyxDQUFDLEVBQUcsQ0FBQWtKLEdBQWtCRSxHQUFPRCxDQUFJO0FBQ3hFO0FBQUEsSUFDRDtBQUVBLFFBRElwSixHQUFZQyxDQUFJLEtBQUdtSixFQUFLLElBQUluSixDQUFJLEdBQ2hDLE9BQU9BLEVBQUssb0JBQXFCO0FBQ3JDLFVBQUk7QUFDSCxtQkFBV00sS0FBTU4sRUFBSyxpQkFBaUIsR0FBRyxFQUFHLENBQUlELEdBQVlPLENBQUUsS0FBRzZJLEVBQUssSUFBSTdJLENBQUU7QUFBQSxNQUM5RSxRQUFRO0FBQUEsTUFBQztBQUFBO0FBQ1YsR0FDSStJLEtBQXVCLENBQUNDLEdBQU9DLElBQVMsV0FBVztBQUN0RCxhQUFXakosS0FBTWdKO0FBQ2hCLFFBQUt2SixHQUFZTyxDQUFFO0FBQ25CLGlCQUFXa0osS0FBTWpQLEdBQWdCLENBQUFpUCxFQUFHbEosR0FBSWlKLENBQU07QUFFaEQsR0FDSUUsS0FBd0IsQ0FBQ0QsTUFBTztBQUNuQyxFQUFJLE9BQU9BLEtBQU8sY0FDbEJqUCxHQUFlLElBQUlpUCxDQUFFO0FBQ3RCLEdBQ0lFLEtBQW1CLENBQUMvRyxNQUFTO0FBRWhDLE1BREksQ0FBQ0EsS0FBUSxPQUFPLG1CQUFxQixPQUNyQ25JLEdBQWtCLElBQUltSSxDQUFJLEVBQUcsUUFBT0E7QUFDeEMsRUFBQW5JLEdBQWtCLElBQUltSSxDQUFJLEdBQzFCbEksR0FBZSxJQUFJa0ksQ0FBSTtBQUN2QixRQUFNZ0gsSUFBVyxJQUFJLGlCQUFpQixDQUFDQyxNQUFZO0FBQ2xELFVBQU1OLElBQXdCLG9CQUFJLElBQUk7QUFDdEMsZUFBV08sS0FBT0QsRUFBUyxLQUFJQyxFQUFJLFNBQVMsYUFBYTtBQUN4RCxpQkFBVzdKLEtBQVE2SixFQUFJLFdBQVksQ0FBQVgsR0FBa0JsSixHQUFNc0osQ0FBSztBQUNoRSxZQUFNeEcsSUFBUStHLEVBQUksUUFBUSxjQUFjO0FBQ3hDLFVBQUkvRyxhQUFpQixjQUFjL0MsR0FBWStDLEVBQU0sSUFBSSxHQUFHO0FBQzNELGNBQU1nSCxJQUFTaEgsRUFBTTtBQUNyQixTQUFJLENBQUNnSCxLQUFVQSxFQUFPLFdBQVcsTUFBR1IsRUFBTSxJQUFJeEcsRUFBTSxJQUFJO0FBQUEsTUFDekQ7QUFBQSxJQUNELE1BQU8sQ0FBSStHLEVBQUksU0FBUyxnQkFBZ0JBLEVBQUksVUFDdkM5SixHQUFZOEosRUFBSSxNQUFNLEtBQUdQLEVBQU0sSUFBSU8sRUFBSSxNQUFNO0FBRWxELElBQUFSLEdBQXFCQyxHQUFPLFVBQVU7QUFBQSxFQUN2QyxDQUFDO0FBQ0QsTUFBSTtBQUNILElBQUFLLEVBQVMsUUFBUWhILEdBQU07QUFBQSxNQUN0QixXQUFXO0FBQUEsTUFDWCxTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixpQkFBaUIsQ0FBQyxHQUFHaEgsRUFBaUI7QUFBQSxJQUN2QyxDQUFDO0FBQUEsRUFDRixRQUFRO0FBQ1AsV0FBQW5CLEdBQWtCLE9BQU9tSSxDQUFJLEdBQ3RCQTtBQUFBLEVBQ1I7QUFDQSxTQUFPQTtBQUNSLEdBQ0lvSCxLQUErQixNQUFNO0FBQ3hDLE1BQUksT0FBTyxXQUFhLElBQWE7QUFDckMsUUFBTUMsSUFBVyxPQUFPLE1BQVEsT0FBZSxPQUFPLElBQUksWUFBYTtBQUN2RSxhQUFXLENBQUN4USxHQUFLMEcsQ0FBSyxLQUFLaEcsR0FBWTtBQUV0QyxRQURJLENBQUNnRyxLQUFTLE9BQU8xRyxLQUFRLFlBQ3pCd1EsS0FBWSxJQUFJLFNBQVN4USxDQUFHLEVBQUc7QUFDbkMsVUFBTW9JLElBQU94SCxFQUFtQixJQUFJOEYsQ0FBSyxLQUFLMUc7QUFDOUMsSUFBQStPLEdBQTBCckksR0FBTzBCLENBQUksR0FDakMsU0FBUyxzQkFBc0IsQ0FBQyxTQUFTLG1CQUFtQixTQUFTMUIsQ0FBSyxLQUFHLFNBQVMsbUJBQW1CLEtBQUtBLENBQUs7QUFBQSxFQUN4SDtBQUNELEdBQ0k4SSxLQUFnQixDQUFDOUksTUFBVTtBQUM5QixNQUFJLENBQUNBLEVBQU8sUUFBTztBQUNuQixRQUFNOEgsSUFBUyxPQUFPOUgsS0FBVSxXQUFXaEcsRUFBVyxJQUFJZ0csQ0FBSyxJQUFJQTtBQUNuRSxNQUFJLENBQUM4SCxLQUFVLE9BQU8sV0FBYSxJQUFhLFFBQU87QUFDdkQsUUFBTThCLElBQVMsU0FBUyxvQkFDbEJHLElBQU1ILEVBQU8sUUFBUTlCLENBQU07QUFDakMsU0FBSWlDLE1BQVEsTUFDWEgsRUFBTyxPQUFPRyxHQUFLLENBQUMsR0FDYixNQUVEO0FBQ1IsR0FDSUMsS0FBZSxDQUFDNUosTUFBTztBQUMxQixNQUFJQSxHQUFJLGtCQUFrQjtBQUN6QixVQUFNNkosSUFBUzdKLEVBQUcsaUJBQWlCLEVBQUUsSUFBSSxXQUFXLEdBQUcsV0FBVztBQUNsRSxRQUFJNkosRUFBUSxRQUFPQTtBQUFBLEVBQ3BCLFdBQVc3SixHQUFJO0FBQ2QsVUFBTXFILElBQVEsaUJBQWlCckgsQ0FBRTtBQUNqQyxXQUFPLElBQUksVUFBVXFILEdBQU8sbUJBQW1CLFdBQVcsQ0FBQztBQUFBLEVBQzVEO0FBQ0EsU0FBTyxJQUFJLFVBQVU7QUFDdEIsR0FDSXlDLEtBQXFCLENBQUM5SixNQUFPO0FBQ2hDLFFBQU0rSixJQUFZLGlCQUFpQi9KLENBQUUsR0FBRyxtQkFBbUIsa0JBQWtCLEtBQUs7QUFDbEYsU0FBT3JCLEdBQVlvTCxHQUFXL0osQ0FBRTtBQUNqQyxHQUNJZ0ssSUFBbUIsQ0FBQ0MsR0FBS25OLE1BQVM7QUFDckMsTUFBSSxzQkFBc0JtTixHQUFLO0FBQzlCLFVBQU0vSCxJQUFNK0gsR0FBSyxtQkFBbUIsR0FBRyxJQUFJbk4sQ0FBSTtBQUMvQyxXQUFPb0YsYUFBZSxlQUFlQSxHQUFLLFNBQVMsSUFBSUEsR0FBSyxXQUFXO0FBQUEsRUFDeEU7QUFDQSxNQUFJK0gsYUFBZSxhQUFhO0FBQy9CLFVBQU1DLElBQUssbUJBQW1CRCxHQUFLLEVBQUU7QUFDckMsV0FBTyxXQUFXQyxHQUFJLG1CQUFtQnBOLENBQUksR0FBRyxVQUFVLE1BQU0sRUFBRSxDQUFDLEtBQUs7QUFBQSxFQUN6RTtBQUNBLFNBQU8sWUFBWW1OLEdBQUssU0FBU0EsR0FBSyxtQkFBbUJuTixDQUFJLEdBQUcsVUFBVSxNQUFNLEVBQUUsQ0FBQyxLQUFLO0FBQ3pGLEdBQ0lxTixLQUFpQixDQUFDdEwsTUFBWTtBQUNqQyxNQUFJdUwsSUFBTyxHQUFHQyxJQUFpQnhMO0FBQy9CLFNBQU93TCxLQUFnQjtBQUN0QixRQUFJLG9CQUFvQkEsR0FBZ0I7QUFDdkMsWUFBTUMsSUFBaUJELEVBQWU7QUFDdEMsVUFBSSxPQUFPQyxLQUFtQixTQUFVLFFBQU9GLEtBQVFFO0FBQUEsSUFDeEQ7QUFDQSxVQUFNakQsSUFBUSxpQkFBaUJnRCxDQUFjO0FBQzdDLFFBQUloRCxFQUFNLFFBQVFBLEVBQU0sU0FBUyxTQUFVLFFBQU8rQyxLQUFRLFdBQVcvQyxFQUFNLElBQUk7QUFDL0UsUUFBSUEsRUFBTSxRQUFRQSxFQUFNLFNBQVMsWUFBWSxvQkFBb0JnRCxFQUFnQixRQUFPRDtBQUN4RixJQUFBQyxJQUFpQkEsR0FBZ0IsZ0JBQWdCQSxHQUFnQjtBQUFBLEVBQ2xFO0FBQ0EsU0FBT0Q7QUFDUixHQUNJRyxLQUFhLENBQUMxTCxHQUFTL0IsTUFDbkJrTixJQUFtQm5MLEdBQVMvQixDQUFJLEdBRXBDME4sS0FBYSxDQUFDUCxHQUFLUSxNQUNsQkEsS0FBUSxXQUFpQlQsRUFBaUJDLEdBQUssc0JBQXNCLElBQUlELEVBQWlCQyxHQUFLLG9CQUFvQixJQUNoSEQsRUFBaUJDLEdBQUsscUJBQXFCLElBQUlELEVBQWlCQyxHQUFLLG1CQUFtQixHQUs1RlMsSUFBZSxPQUFPLFdBQVksTUFBYyxTQUFTLGNBQWMsT0FBTyxJQUFJO0FBQ2xGQSxNQUNILFNBQVMsY0FBYyxNQUFNLEdBQUcsY0FBY0EsQ0FBWSxHQUMxREEsRUFBYSxRQUFRLFFBQVE7QUFFOUIsSUFBSXpELEtBQWMsQ0FBQ0osR0FBTTVDLEdBQUtDLElBQVEsT0FBTztBQUM1QyxFQUFBMkMsRUFBSyxDQUFDLEVBQUVBLEVBQUssQ0FBQyxDQUFDLElBQUlBLEVBQUssQ0FBQyxLQUFLLGNBQWM3QyxHQUFtQkMsR0FBS0MsQ0FBSyxJQUFJRDtBQUM5RSxHQUNJMEcsS0FBZ0IsQ0FBQ0MsTUFDYkEsR0FBUyxNQUFNLENBQUNDLE1BQVNyRSxHQUFhLEdBQUdxRSxDQUFJLENBQUMsR0FFbERDLEtBQWdCLENBQUM5TixHQUFXNEMsT0FDL0JBLE1BQVU4SyxHQUFjLE9BQ2pCdEcsR0FBcUJ4RSxHQUFPNUMsQ0FBUyxJQUV6QytOLEtBQTJCLENBQUNsTSxNQUFZO0FBQzNDLE1BQUlBLEVBQVEsR0FBSSxRQUFPLElBQUlaLEdBQW9CWSxFQUFRLEVBQUUsQ0FBQztBQUMxRCxNQUFJbU0sSUFBVW5NLEVBQVEsYUFBYSxlQUFlO0FBQ2xELFNBQUttTSxNQUNKQSxJQUFVNU0sR0FBYyxHQUN4QlMsRUFBUSxhQUFhLGlCQUFpQm1NLENBQU8sSUFFdkMsbUJBQW1CL00sR0FBb0IrTSxDQUFPLENBQUM7QUFDdkQsR0FDSUMsS0FBcUIsQ0FBQ3pJLEdBQU9GLE9BQ2hDQSxJQUFXQSxFQUFTLEtBQUssR0FDcEJFLElBQ0FGLElBQ0RBLEVBQVMsV0FBVyxJQUFJLElBQVUsR0FBR0UsQ0FBSyxHQUFHRixDQUFRLEtBQ2xELEdBQUdFLENBQUssSUFBSUYsQ0FBUSxLQUZMRSxJQURIRixJQUtoQjRJLEtBQWdCLENBQUN0TCxHQUFPdUwsR0FBYzNJLEdBQU9GLE1BQWE7QUFDN0QsUUFBTStCLElBQVEsTUFBTSxLQUFLekUsR0FBTyxZQUFZLENBQUMsQ0FBQyxHQUN4Q3dMLElBQVdELEVBQWEsS0FBSyxHQUM3QkUsSUFBWS9JLEVBQVMsS0FBSztBQUNoQyxTQUFPK0IsRUFBTSxVQUFVLENBQUM5RyxNQUFTO0FBQ2hDLFFBQUksRUFBRUEsYUFBZ0IsY0FBZSxRQUFPO0FBQzVDLFVBQU0rTixJQUFTL04sRUFBSyxjQUFjLE9BQU8sS0FBSztBQUM5QyxXQUFJK04sTUFBV0YsSUFBaUIsS0FDNUJDLEtBQWFDLEVBQU8sU0FBU0QsQ0FBUyxJQUFVQyxFQUFPLE1BQU0sR0FBR0EsRUFBTyxTQUFTRCxFQUFVLE1BQU0sRUFBRSxLQUFLLE1BQU03SSxJQUMxRztBQUFBLEVBQ1IsQ0FBQztBQUNGLEdBQ0krRCxLQUFlLENBQUNqRSxHQUFVMUMsR0FBTzVDLElBQVksWUFBWXVPLElBQVEsU0FBUztBQUM3RSxRQUFNbEosSUFBT3hFLEVBQWEwTixDQUFLLEtBQUt4TixHQUFXd04sQ0FBSyxJQUFJQSxJQUFRQSxHQUFPLGNBQWMsTUFBTSxPQUFPLFdBQWEsTUFBYyxXQUFXLE9BQ2xJQyxJQUFleE4sR0FBYXVOLENBQUssSUFBSUEsSUFBUTtBQUNuRCxNQUFJL0ksSUFBUTtBQUNaLEVBQUlnSixJQUFjaEosSUFBUXVJLEdBQXlCUyxDQUFZLElBQ3REM04sRUFBYXdFLENBQUksSUFBR0csSUFBUSxVQUM1QnpFLEdBQVdzRSxDQUFJLE1BQUdHLElBQVE7QUFDbkMsTUFBSWtJLElBQWU7QUFVbkIsTUFUSTdNLEVBQWF3RSxDQUFJLEtBQ3BCcUksSUFBZXJJLEVBQUssY0FBYyxzQkFBc0IsR0FDcEQsQ0FBQ3FJLEtBQWdCLE9BQU8sV0FBYSxRQUN4Q0EsSUFBZSxTQUFTLGNBQWMsT0FBTyxHQUM3Q0EsRUFBYSxhQUFhLGlCQUFpQixFQUFFLEdBQzdDckksRUFBSyxZQUFZcUksQ0FBWSxNQUV4QkEsSUFBZWUsR0FBbUIsR0FDekM3TCxNQUFVOEssR0FBYyxPQUNwQixDQUFDOUssRUFBTztBQUNaLE1BQUk1QyxFQUFXLFFBQU91SixHQUFhakUsR0FBVXdJLEdBQWM5TixHQUFXNEMsQ0FBSyxHQUFHLE1BQU0yTCxDQUFLO0FBQ3pGLFFBQU1KLElBQWVGLEdBQW1CekksR0FBT0YsQ0FBUTtBQUN2RCxNQUFJb0osSUFBU1IsR0FBY3RMLEdBQU91TCxHQUFjM0ksR0FBT0YsQ0FBUTtBQUMvRCxTQUFJb0osTUFBVyxPQUFJQSxJQUFTOUwsRUFBTSxXQUFXLEdBQUd1TCxDQUFZLEtBQUssSUFDMUR2TCxFQUFNLFdBQVc4TCxDQUFNO0FBQy9CO0FBQ0EsU0FBU0QsS0FBcUI7QUFDN0IsU0FBT2YsS0FBZ0I7QUFDeEI7QUFDQSxJQUFJMUQsS0FBZ0IsQ0FBQy9DLE1BQVE7QUFDNUIsTUFBSSxDQUFDQSxFQUFLLFFBQU87QUFDakIsTUFBSTVLLEVBQVMsSUFBSTRLLENBQUcsRUFBRyxRQUFPNUssRUFBUyxJQUFJNEssQ0FBRztBQUM5QyxNQUFJQSxhQUFlLFFBQVFBLGFBQWUsTUFBTTtBQUMvQyxRQUFJN0ssRUFBVyxJQUFJNkssQ0FBRyxFQUFHLFFBQU83SyxFQUFXLElBQUk2SyxDQUFHO0FBQ2xELFVBQU0wSCxJQUFPLElBQUksZ0JBQWdCMUgsQ0FBRztBQUNwQyxXQUFBN0ssRUFBVyxJQUFJNkssR0FBSzBILENBQUksR0FDeEJ0UyxFQUFTLElBQUlzUyxHQUFNQSxDQUFJLEdBQ2hCQTtBQUFBLEVBQ1I7QUFDQSxNQUFJLElBQUksU0FBUzFILENBQUcsS0FBS0EsR0FBSyxPQUFPLEdBQUcsYUFBYSxJQUFJLEdBQUc7QUFDM0QsVUFBTTJILElBQVcsTUFBTTNILEdBQUssVUFBVSxRQUFRLE1BQU0sR0FBRztBQUFBLE1BQ3RELE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNYLENBQUMsR0FBRyxPQUFPLE9BQU9pRCxNQUFRO0FBQ3pCLFlBQU1tQixJQUFPLE1BQU1uQixFQUFJLEtBQUssR0FDdEJ5RSxJQUFPLElBQUksZ0JBQWdCdEQsQ0FBSTtBQUNyQyxhQUFBalAsRUFBVyxJQUFJaVAsR0FBTXNELENBQUksR0FDekJ0UyxFQUFTLElBQUk0SyxHQUFLMEgsQ0FBSSxHQUN0QnRTLEVBQVMsSUFBSXNTLEdBQU1BLENBQUksR0FDaEJBO0FBQUEsSUFDUixDQUFDO0FBQ0QsV0FBQXRTLEVBQVMsSUFBSTRLLEdBQUsySCxDQUFRLEdBQ25CQTtBQUFBLEVBQ1I7QUFDQSxNQUFJLE9BQU8zSCxLQUFPLFVBQVU7QUFDM0IsVUFBTW9FLElBQU8sSUFBSSxLQUFLLENBQUNwRSxDQUFHLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQyxHQUMzQzBILElBQU8sSUFBSSxnQkFBZ0J0RCxDQUFJO0FBQ3JDLFdBQUFqUCxFQUFXLElBQUlpUCxHQUFNc0QsQ0FBSSxHQUN6QnRTLEVBQVMsSUFBSXNTLEdBQU1BLENBQUksR0FDaEJBO0FBQUEsRUFDUjtBQUNBLFNBQU8xSDtBQUNSLEdBQ0kwRSxLQUFnQixDQUFDMUUsTUFBUTtBQUM1QixNQUFJLENBQUNBLEVBQUssUUFBTztBQUNqQixNQUFJM0ssRUFBZ0IsSUFBSTJLLENBQUcsRUFBRyxRQUFPM0ssRUFBZ0IsSUFBSTJLLENBQUcsS0FBSztBQUNqRSxNQUFJQSxhQUFlLFFBQVFBLGFBQWUsTUFBTTtBQUMvQyxRQUFJMUssR0FBb0IsSUFBSTBLLENBQUcsRUFBRyxRQUFPMUssR0FBb0IsSUFBSTBLLENBQUcsS0FBSztBQUN6RSxVQUFNMkgsSUFBVzNILEdBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQzNDLE9BQ3ZDL0gsR0FBb0IsSUFBSTBLLEdBQUszQyxDQUFJLEdBQzFCQSxFQUNQO0FBQ0QsV0FBQS9ILEdBQW9CLElBQUkwSyxHQUFLMkgsQ0FBUSxHQUM5QkE7QUFBQSxFQUNSO0FBQ0EsTUFBSSxJQUFJLFNBQVMzSCxDQUFHLEtBQUtBLEdBQUssT0FBTyxHQUFHLGFBQWEsSUFBSSxHQUFHO0FBQzNELFVBQU0ySCxJQUFXLE1BQU0zSCxHQUFLLFVBQVUsUUFBUSxNQUFNLEdBQUc7QUFBQSxNQUN0RCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWCxDQUFDLEdBQUcsT0FBTyxPQUFPaUQsTUFBUTtBQUN6QixZQUFNNUYsSUFBTyxNQUFNNEYsRUFBSSxLQUFLO0FBQzVCLGFBQUE1TixFQUFnQixJQUFJMkssR0FBSzNDLENBQUksR0FDdEJBO0FBQUEsSUFDUixDQUFDO0FBQ0QsV0FBQWhJLEVBQWdCLElBQUkySyxHQUFLMkgsQ0FBUSxHQUMxQkE7QUFBQSxFQUNSO0FBQ0EsU0FBSSxPQUFPM0gsS0FBTyxZQUNqQjNLLEVBQWdCLElBQUkySyxHQUFLQSxDQUFHLEdBQ3JCQTtBQUdULEdBQ0k0SCxLQUFzQixDQUFDdkosR0FBVXRGLElBQVksWUFBWXVPLElBQVEsU0FBUztBQUU3RSxNQURJLENBQUNqSixLQUNELENBQUM5RSxFQUFnQyxFQUFHLFFBQU87QUFDL0MsUUFBTTZFLElBQU94RSxFQUFhME4sQ0FBSyxJQUFJQSxJQUFRQSxHQUFPLGNBQWNBLEVBQU0sWUFBWSxFQUFFLFVBQVUsR0FBSyxDQUFDLElBQUksTUFDbEdPLElBQVdqTyxFQUFhd0UsQ0FBSSxHQUM1QjBKLElBQXNCRCxJQUFXekosRUFBSyxxQkFBcUIsT0FBTyxXQUFZLE1BQWMsU0FBUyxxQkFBcUI7QUFDaEksTUFBSSxDQUFDMEosRUFBcUIsUUFBTztBQUNqQyxRQUFNQyxJQUFjLEdBQUdoUCxLQUFhLEVBQUUsSUFBSXNGLENBQVE7QUFDbEQsTUFBSTFDO0FBQ0osTUFBSWtNLEdBQVU7QUFDYixRQUFJRyxJQUFZeFMsR0FBeUIsSUFBSTRJLENBQUk7QUFDakQsSUFBSzRKLE1BQ0pBLElBQTRCLG9CQUFJLElBQUksR0FDcEN4UyxHQUF5QixJQUFJNEksR0FBTTRKLENBQVMsSUFFN0NyTSxJQUFRcU0sRUFBVSxJQUFJRCxDQUFXLEdBQzVCcE0sTUFDSkEsSUFBUSxJQUFJLGNBQWMsR0FDMUJxTSxFQUFVLElBQUlELEdBQWFwTSxDQUFLLEdBQzNCbU0sRUFBb0IsU0FBU25NLENBQUssS0FBR21NLEVBQW9CLEtBQUtuTSxDQUFLO0FBQUEsRUFFMUU7QUFDQyxJQUFBQSxJQUFRcEcsR0FBbUIsSUFBSXdTLENBQVcsR0FDckNwTSxNQUNKQSxJQUFRLElBQUksY0FBYyxHQUMxQnBHLEdBQW1CLElBQUl3UyxHQUFhcE0sQ0FBSyxHQUNwQ21NLEVBQW9CLFNBQVNuTSxDQUFLLEtBQUdtTSxFQUFvQixLQUFLbk0sQ0FBSztBQUcxRSxNQUFJNUMsR0FBVztBQUNkLFFBQUlrUDtBQUNKLFFBQUlKLEdBQVU7QUFDYixVQUFJSyxJQUFpQnhTLEdBQXNCLElBQUkwSSxDQUFJO0FBQ25ELE1BQUs4SixNQUNKQSxJQUFpQyxvQkFBSSxJQUFJLEdBQ3pDeFMsR0FBc0IsSUFBSTBJLEdBQU04SixDQUFjLElBRS9DRCxJQUFZQyxFQUFlLElBQUluUCxDQUFTO0FBQUEsSUFDekMsTUFBTyxDQUFBa1AsSUFBWXhTLEdBQWdCLElBQUlzRCxDQUFTO0FBQ2hELFFBQUksQ0FBQ2tQLE1BQ0pBLElBQVk5SCxHQUFxQnhFLEdBQU81QyxDQUFTLEdBQzdDa1A7QUFDSCxVQUFJSixHQUFVO0FBQ2IsWUFBSUssSUFBaUJ4UyxHQUFzQixJQUFJMEksQ0FBSTtBQUNuRCxRQUFLOEosTUFDSkEsSUFBaUMsb0JBQUksSUFBSSxHQUN6Q3hTLEdBQXNCLElBQUkwSSxHQUFNOEosQ0FBYyxJQUUvQ0EsRUFBZSxJQUFJblAsR0FBV2tQLENBQVM7QUFBQSxNQUN4QyxNQUFPLENBQUF4UyxHQUFnQixJQUFJc0QsR0FBV2tQLENBQVM7QUFHakQsUUFBSUEsR0FBVztBQUNkLFVBQUlFLElBQWlCLE1BQU0sS0FBS0YsRUFBVSxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQ0csTUFBTUEsYUFBYSxnQkFBZ0JBLEVBQUUsY0FBYyxPQUFPLE1BQU0vSixHQUFVLE9BQU8sQ0FBQztBQUN2SixVQUFJOEosTUFBbUIsR0FBSSxLQUFJO0FBQzlCLFFBQUFBLElBQWlCRixFQUFVLFdBQVcsR0FBRzVKLENBQVEsT0FBTzRKLEVBQVUsU0FBUyxNQUFNO0FBQUEsTUFDbEYsUUFBWTtBQUNYLGVBQU87QUFBQSxNQUNSO0FBQ0EsYUFBT0EsRUFBVSxTQUFTRSxDQUFjO0FBQUEsSUFDekM7QUFBQSxFQUNEO0FBQ0EsTUFBSTdILElBQVksTUFBTSxLQUFLM0UsRUFBTSxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQ3JDLE1BQVNBLGFBQWdCLGdCQUFnQkEsRUFBSyxjQUFjLE9BQU8sTUFBTStFLEdBQVUsT0FBTyxDQUFDO0FBQ3ZKLE1BQUlpQyxNQUFjLEdBQUksS0FBSTtBQUN6QixJQUFBQSxJQUFZM0UsRUFBTSxXQUFXLEdBQUcwQyxDQUFRLE9BQU8xQyxFQUFNLFNBQVMsTUFBTTtBQUFBLEVBQ3JFLFFBQVk7QUFDWCxXQUFPO0FBQUEsRUFDUjtBQUNBLFFBQU1yQyxJQUFPcUMsRUFBTSxTQUFTMkUsQ0FBUztBQUNyQyxTQUFJaEgsYUFBZ0IsZUFBcUJBLElBQ2xDO0FBQ1IsR0FJSStPLEtBQW9CLElBQ3BCQyxJQUFrQixJQUNsQkMsS0FBZSxJQUNmQyxLQUFzQixDQUFDQyxNQUFlO0FBQ3pDLFFBQU0xSixJQUFPLENBQUMsR0FBRzBKLEdBQVksU0FBU0EsSUFBYXpRLEVBQWtCO0FBQ3JFLFNBQU8sQ0FBQyxHQUFHLElBQUksSUFBSStHLEVBQUssT0FBTyxPQUFPLENBQUMsQ0FBQztBQUN6QyxHQUNJMkosS0FBYyxDQUFDckssR0FBVW9LLEdBQVlFLElBQVF6USxPQUFzQixHQUFHbUcsQ0FBUSxLQUFLLENBQUMsR0FBR29LLENBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBS0UsTUFBVSxLQUFRLEtBQUtBLENBQUssSUFDcEpDLEtBQXVCLENBQUN4SyxJQUFPLE9BQU8sV0FBYSxNQUFjLFNBQVMsa0JBQWtCLE1BQU1yQyxNQUFPO0FBQzVHLE1BQUksQ0FBQ3FDLEtBQVEsT0FBTyxvQkFBcUIsV0FBWSxRQUFPO0FBQzVELFFBQU02SCxJQUFLLGlCQUFpQjdILENBQUksR0FDMUJ5SyxJQUFRO0FBQUEsSUFDYnpLLEVBQUssZUFBZSxZQUFZLEtBQUtBLEVBQUssZUFBZSxPQUFPLEtBQUs7QUFBQSxJQUNyRUEsRUFBSyxlQUFlLG1CQUFtQixLQUFLQSxFQUFLLGVBQWUsY0FBYyxLQUFLNkgsRUFBRyxlQUFlO0FBQUEsSUFDckdBLEVBQUcsaUJBQWlCLGNBQWMsRUFBRSxLQUFLO0FBQUEsSUFDekNBLEVBQUcsaUJBQWlCLGlCQUFpQixFQUFFLEtBQUs7QUFBQSxFQUM3QztBQUNBLE1BQUlsSyxLQUFNQSxNQUFPcUMsR0FBTTtBQUN0QixVQUFNMEssSUFBUSxpQkFBaUIvTSxDQUFFO0FBQ2pDLElBQUE4TSxFQUFNLEtBQUs5TSxFQUFHLGVBQWUsWUFBWSxLQUFLLElBQUkrTSxFQUFNLGlCQUFpQixjQUFjLEVBQUUsS0FBSyxDQUFDO0FBQUEsRUFDaEc7QUFDQSxTQUFPRCxFQUFNLEtBQUssR0FBRztBQUN0QixHQUNJRSxLQUFXLENBQUNuRSxHQUFNcUIsR0FBSXBOLE1BQVM7QUFDbEMsUUFBTWdCLElBQVFvTSxFQUFHLGlCQUFpQnBOLENBQUksR0FBRyxLQUFLO0FBQzlDLEVBQUtnQixLQUNMK0ssRUFBSyxJQUFJL0wsR0FBTWdCLENBQUs7QUFDckIsR0FDSW1QLEtBQWlCLElBQUksSUFBSS9SLEVBQW9CLEdBQzdDZ1MsS0FBZSxDQUFDcFEsTUFDZkEsRUFBSyxXQUFXLElBQUksSUFBVSxJQUM5Qm1RLEdBQWUsSUFBSW5RLENBQUksSUFBVSxJQUM5QixHQUVKcVEsS0FBMkIsQ0FBQ2pELEdBQUl3QyxNQUFlO0FBQ2xELFFBQU03RCxJQUF1QixvQkFBSSxJQUFJLEdBQy9CdUUsSUFBTSxJQUFJLElBQUlWLENBQVU7QUFDOUIsTUFBSVUsRUFBSSxJQUFJLFFBQVEsRUFBRyxZQUFXdFEsS0FBUTVCLEdBQXNCLENBQUE4UixHQUFTbkUsR0FBTXFCLEdBQUlwTixDQUFJO0FBQ3ZGLE1BQUlzUSxFQUFJLElBQUksWUFBWSxFQUFHLFlBQVd0USxLQUFRM0IsR0FBMkIsQ0FBQTZSLEdBQVNuRSxHQUFNcUIsR0FBSXBOLENBQUk7QUFDaEcsTUFBSXNRLEVBQUksSUFBSSxRQUFRLEVBQUcsWUFBV3RRLEtBQVExQixHQUF1QixDQUFBNFIsR0FBU25FLEdBQU1xQixHQUFJcE4sQ0FBSTtBQUN4RixNQUFJc1EsRUFBSSxJQUFJLFFBQVEsS0FBS0EsRUFBSSxJQUFJLFFBQVEsRUFBRyxVQUFTaFEsSUFBSSxHQUFHQSxJQUFJOE0sRUFBRyxRQUFROU0sS0FBSztBQUMvRSxVQUFNTixJQUFPb04sRUFBRyxLQUFLOU0sQ0FBQztBQUN0QixJQUFLTixFQUFLLFdBQVcsSUFBSSxNQUNyQnNRLEVBQUksSUFBSSxRQUFRLEtBQUt0TixHQUFhaEQsQ0FBSSxNQUFHa1EsR0FBU25FLEdBQU1xQixHQUFJcE4sQ0FBSTtBQUFBLEVBQ3JFO0FBQ0EsU0FBTytMO0FBQ1IsR0FDSXdFLEtBQW9CLENBQUMvSyxHQUFVZ0wsR0FBY3BKLElBQVFsSSxJQUFZNFEsSUFBUXpRLE9BQXNCO0FBQ2xHLFFBQU1rSCxJQUFPLENBQUMsR0FDUmtLLElBQU8sQ0FBQyxHQUFHRCxDQUFZLEVBQUUsS0FBSyxDQUFDRSxHQUFHQyxNQUFNUCxHQUFhTSxFQUFFLENBQUMsQ0FBQyxJQUFJTixHQUFhTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLGFBQVcsQ0FBQzNRLEdBQU1nQixDQUFLLEtBQUt5UCxHQUFNO0FBQ2pDLFFBQUksQ0FBQ3pRLEtBQVEsQ0FBQ2dCLEVBQU87QUFDckIsVUFBTTRQLElBQVE1UCxFQUFNLFFBQVEsc0JBQXNCLEVBQUUsRUFBRSxLQUFLO0FBQzNELElBQUs0UCxLQUNMckssRUFBSyxLQUFLLEdBQUd2RyxDQUFJLEtBQUs0USxDQUFLLGNBQWM7QUFBQSxFQUMxQztBQUNBLE1BQUksQ0FBQ3JLLEVBQUssT0FBUSxRQUFPO0FBQ3pCLFFBQU05RixJQUFPLEdBQUcrRSxDQUFRO0FBQUEsRUFBT2UsRUFBSyxLQUFLO0FBQUEsQ0FBSSxDQUFDO0FBQUEsSUFDeENYLElBQVFrSyxJQUFRLFVBQVVBLENBQUs7QUFBQSxFQUFPclAsQ0FBSTtBQUFBLEtBQVFBO0FBQ3hELFNBQU8sQ0FBQ29GLEdBQWN1QixDQUFLLEdBQUdkLEdBQWNjLEdBQU94QixDQUFLLENBQUMsRUFBRSxPQUFPLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDbkYsR0FDSWlMLEtBQXlCLENBQUN0TCxNQUFTO0FBQ3RDLE1BQUksQ0FBQ0EsS0FBUUEsRUFBSyxhQUFhLEVBQUcsUUFBTyxDQUFDO0FBQzFDLFFBQU0yRyxJQUF3QixvQkFBSSxJQUFJLENBQUMzRyxDQUFJLENBQUMsR0FDdEN1TCxJQUFTdkwsRUFBSyxVQUFVakcsR0FBbUIsS0FBSyxJQUFJLENBQUM7QUFDM0QsU0FBSXdSLGFBQWtCLGVBQWE1RSxFQUFNLElBQUk0RSxDQUFNLEdBQzVDLENBQUMsR0FBRzVFLENBQUs7QUFDakIsR0FDSTZFLEtBQXFCLENBQUN4TCxNQUNwQkEsSUFDREEsRUFBSyxXQUFXLFNBQVMsZUFBZSxLQUFLQSxFQUFLLFVBQVUsZ0JBQWdCLElBQVUvRixLQUN0RitGLEVBQUssV0FBVyxTQUFTLGVBQWUsS0FBS0EsRUFBSyxVQUFVLGdCQUFnQixLQUFLQSxFQUFLLGdCQUFnQixpQkFBaUIsSUFBVWhHLEtBQzlILENBQUMsSUFIVSxDQUFDLEdBS2hCeVIsS0FBdUIsQ0FBQ3pMLEdBQU0wTCxJQUFVeFIsSUFBa0J5UixJQUFlLE9BQVM7QUFDckYsTUFBSSxDQUFDM0wsS0FBUSxDQUFDMEwsRUFBUSxPQUFRLFFBQU8sQ0FBQztBQUN0QyxRQUFNRSxJQUFVbEQsR0FBeUIxSSxDQUFJLEdBQ3ZDNkwsSUFBT0YsSUFBZTVMLEtBQWlCLENBQUNJLEdBQU8yTCxNQUFRO0FBQzVELFFBQUk7QUFDSCxZQUFNMUwsSUFBTUQsRUFBTSxjQUFjMkwsQ0FBRztBQUNuQyxhQUFPMUwsYUFBZSxjQUFjQSxJQUFNO0FBQUEsSUFDM0MsUUFBUTtBQUNQLGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRCxHQUNNMkwsSUFBMEIsb0JBQUksSUFBSTtBQUN4QyxhQUFXQyxLQUFTTixHQUFTO0FBQzVCLFVBQU1PLElBQUksT0FBT0QsS0FBUyxFQUFFLEVBQUUsS0FBSztBQUNuQyxRQUFJLENBQUNDLEVBQUc7QUFDUixVQUFNdE8sSUFBS2tPLEVBQUs3TCxHQUFNaU0sQ0FBQztBQUN2QixRQUFJLENBQUN0TyxLQUFNQSxNQUFPcUMsRUFBTTtBQUN4QixVQUFNOEwsSUFBTW5PLEVBQUcsWUFBWSxNQUFNcUMsRUFBSyxZQUFZLElBQUksR0FBRzRMLENBQU8sSUFBSUssQ0FBQyxLQUFLQSxHQUNwRXRMLElBQU9vTCxFQUFRLElBQUlwTyxDQUFFO0FBQzNCLElBQUlnRCxJQUNFQSxFQUFLLFNBQVNtTCxDQUFHLEtBQUduTCxFQUFLLEtBQUttTCxDQUFHLElBQ2hDQyxFQUFRLElBQUlwTyxHQUFJLENBQUNtTyxDQUFHLENBQUM7QUFBQSxFQUM3QjtBQUNBLFNBQU8sQ0FBQyxHQUFHQyxDQUFPLEVBQUUsSUFBSSxDQUFDLENBQUNwTyxHQUFJdU8sQ0FBSSxPQUFPO0FBQUEsSUFDeEMsSUFBQXZPO0FBQUEsSUFDQSxVQUFVdU8sRUFBSyxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFO0FBQ0gsR0FDSUMsS0FBYyxDQUFDeE8sTUFBTztBQUN6QixRQUFNcUMsSUFBT3JDLEVBQUcsY0FBYztBQUM5QixTQUFJLE9BQU8sYUFBZSxPQUFlcUMsYUFBZ0IsYUFBbUJBLEVBQUssc0JBQXNCLE9BQ25HLE9BQU8sV0FBYSxNQUFvQixTQUFTLHNCQUFzQixPQUNwRTtBQUNSLEdBQ0lvTSxLQUFnQixDQUFDek8sR0FBSTNDLE1BQVM7QUFDakMsUUFBTWdGLElBQU9yQyxFQUFHLGNBQWM7QUFDOUIsTUFBSTtBQUNILFFBQUksT0FBTyxhQUFlLE9BQWVxQyxhQUFnQixZQUFZO0FBQ3BFLE1BQUFBLEVBQUsscUJBQXFCaEY7QUFDMUI7QUFBQSxJQUNEO0FBQ0EsSUFBSSxPQUFPLFdBQWEsUUFBYSxTQUFTLHFCQUFxQkE7QUFBQSxFQUNwRSxRQUFRO0FBQUEsRUFBQztBQUNWLEdBQ0lxUixLQUFhLENBQUMxTyxHQUFJME4sTUFBVTtBQUMvQixNQUFJQSxFQUFNLFNBQVNsUSxFQUFnQyxHQUFHO0FBQ3JELFVBQU13RixJQUFPd0wsR0FBWXhPLENBQUU7QUFDM0IsUUFBSSxDQUFDZ0QsRUFBTTtBQUNYLFFBQUlBLEVBQUssU0FBUzBLLEVBQU0sS0FBSyxHQUFHO0FBQy9CLE1BQUFBLEVBQU0sVUFBVTtBQUNoQjtBQUFBLElBQ0Q7QUFDQSxRQUFJO0FBQ0gsTUFBQTFLLEVBQUssS0FBSzBLLEVBQU0sS0FBSyxHQUNyQkEsRUFBTSxVQUFVO0FBQ2hCO0FBQUEsSUFDRCxRQUFRO0FBQ1AsTUFBQWUsR0FBY3pPLEdBQUksQ0FBQyxHQUFHZ0QsR0FBTTBLLEVBQU0sS0FBSyxDQUFDLEdBQ3hDQSxFQUFNLFVBQVU7QUFDaEI7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNBLEVBQUlBLEVBQU0sV0FBVyxPQUFPLFdBQWEsUUFDbkNBLEVBQU0sUUFBUSxlQUFhLFNBQVMsTUFBTSxPQUFPQSxFQUFNLE9BQU8sR0FDbkVBLEVBQU0sVUFBVTtBQUVsQixHQUNJaUIsSUFBZSxDQUFDM08sR0FBSTBOLE1BQVU7QUFDakMsTUFBSUEsRUFBTSxTQUFTbFEsRUFBZ0MsR0FBRztBQUNyRCxVQUFNd0YsSUFBT3dMLEdBQVl4TyxDQUFFO0FBQzNCLFFBQUlnRCxHQUFNO0FBQ1QsWUFBTTJHLElBQU0zRyxFQUFLLFFBQVEwSyxFQUFNLEtBQUs7QUFDcEMsVUFBSS9ELE1BQVEsR0FBSSxLQUFJO0FBQ25CLFFBQUEzRyxFQUFLLE9BQU8yRyxHQUFLLENBQUM7QUFBQSxNQUNuQixRQUFRO0FBQ1AsUUFBQThFLEdBQWN6TyxHQUFJZ0QsRUFBSyxPQUFPLENBQUNwRCxNQUFVQSxNQUFVOE4sRUFBTSxLQUFLLENBQUM7QUFBQSxNQUNoRTtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0EsRUFBQUEsRUFBTSxTQUFTLE9BQU8sR0FDdEJBLEVBQU0sVUFBVTtBQUNqQixHQUNJa0IsS0FBZ0IsQ0FBQ2xCLEdBQU90TixNQUFZO0FBRXZDLE1BREFzTixFQUFNLFVBQVV0TixHQUNaLENBQUNBLEVBQVMsUUFBTztBQUNyQixNQUFJc04sRUFBTSxTQUFTbFEsRUFBZ0MsRUFBRyxLQUFJO0FBQ3pELFdBQUFrUSxFQUFNLE1BQU0sWUFBWXROLENBQU8sR0FDeEI7QUFBQSxFQUNSLFNBQVMrRyxHQUFPO0FBQ2YsbUJBQVEsS0FBSyx1Q0FBdUNBLENBQUssR0FDbEQ7QUFBQSxFQUNSO0FBQ0EsU0FBSXVHLEVBQU0sV0FDVEEsRUFBTSxRQUFRLGNBQWN0TixHQUNyQixNQUVEO0FBQ1IsR0FDSXlPLEtBQWdCLENBQUNuQixHQUFPb0IsTUFBWTtBQUN2QyxRQUFNQyxJQUFPelUsRUFBVyxJQUFJb1QsRUFBTSxRQUFRO0FBQzFDLEVBQUlxQixHQUFNLFNBQU8sYUFBYUEsRUFBSyxLQUFLO0FBQ3hDLFFBQU1DLElBQVE7QUFBQSxJQUNiLFNBQVN0QixFQUFNO0FBQUEsSUFDZixhQUFhQSxFQUFNO0FBQUEsSUFDbkIsWUFBWUEsRUFBTTtBQUFBLElBQ2xCLFVBQVVBLEVBQU07QUFBQSxJQUNoQixTQUFTLEtBQUssSUFBSSxJQUFJb0I7QUFBQSxFQUN2QjtBQUNBLEVBQUlBLElBQVUsS0FBSyxPQUFPLGNBQWUsZUFBWUUsRUFBTSxRQUFRLFdBQVcsTUFBTTtBQUNuRixJQUFJMVUsRUFBVyxJQUFJb1QsRUFBTSxRQUFRLE1BQU1zQixLQUFPMVUsRUFBVyxPQUFPb1QsRUFBTSxRQUFRO0FBQUEsRUFDL0UsR0FBR29CLENBQU8sSUFDVnhVLEVBQVcsSUFBSW9ULEVBQU0sVUFBVXNCLENBQUs7QUFDckMsR0FDSUMsS0FBWSxDQUFDQyxNQUFhO0FBQzdCLFFBQU1ILElBQU96VSxFQUFXLElBQUk0VSxDQUFRO0FBQ3BDLEVBQUlILEdBQU0sU0FBTyxhQUFhQSxFQUFLLEtBQUssR0FDeEN6VSxFQUFXLE9BQU80VSxDQUFRO0FBQzNCLEdBQ0lDLEtBQWdCLE1BQU07QUFDekIsYUFBV0gsS0FBUzFVLEVBQVcsT0FBTyxFQUFHLENBQUkwVSxFQUFNLFNBQU8sYUFBYUEsRUFBTSxLQUFLO0FBQ2xGLEVBQUExVSxFQUFXLE1BQU07QUFDbEIsR0FDSThVLEtBQVksQ0FBQ3BQLEdBQUk4TyxJQUFVNVMsT0FBcUI7QUFDbkQsUUFBTXdSLElBQVF0VCxFQUFZLElBQUk0RixDQUFFO0FBQ2hDLEVBQUswTixNQUNEQSxFQUFNLFdBQVNpQixFQUFhM08sR0FBSTBOLENBQUssR0FDekNyVCxFQUFVLE9BQU8yRixDQUFFLEdBQ2YwTixFQUFNLFdBQVNtQixHQUFjbkIsR0FBT29CLENBQU87QUFDaEQsR0FDSU8sS0FBYyxDQUFDclAsR0FBSThPLElBQVU1UyxPQUFxQjtBQUNyRCxRQUFNd1IsSUFBUXRULEVBQVksSUFBSTRGLENBQUU7QUFDaEMsTUFBSSxDQUFDME4sS0FBUyxDQUFDMU4sRUFBRyxZQUFhO0FBQy9CLFFBQU1zUCxJQUFjekMsR0FBcUIsUUFBUTdNLENBQUUsR0FDN0N1SSxJQUFTak8sRUFBVyxJQUFJb1QsRUFBTSxRQUFRO0FBSzVDLE1BSkksQ0FBQ0EsRUFBTSxXQUFXbkYsS0FBVUEsRUFBTyxnQkFBZ0IrRyxNQUN0RFYsR0FBY2xCLEdBQU9uRixFQUFPLE9BQU8sR0FDbkNtRixFQUFNLGNBQWNuRixFQUFPLGNBRXhCLENBQUNtRixFQUFNLFdBQVdBLEVBQU0sZ0JBQWdCNEIsR0FBYTtBQUN4RCxJQUFBQyxHQUFrQnZQLEdBQUk7QUFBQSxNQUNyQixZQUFZME4sRUFBTTtBQUFBLE1BQ2xCLFNBQUFvQjtBQUFBLE1BQ0EsT0FBTzlTO0FBQUEsSUFDUixDQUFDO0FBQ0Q7QUFBQSxFQUNEO0FBQ0EsRUFBQTBTLEdBQVcxTyxHQUFJME4sQ0FBSyxHQUNwQnJULEVBQVUsSUFBSTJGLENBQUU7QUFDakIsR0FDSXdQLElBQVMsTUFDVEMsS0FBZSxPQUNkRCxLQUFVLE9BQU8sdUJBQXlCLFFBQzlDQSxJQUFTLElBQUkscUJBQXFCLENBQUNFLE1BQVk7QUFDOUMsYUFBV1YsS0FBU1UsR0FBUztBQUM1QixVQUFNMVAsSUFBS2dQLEVBQU07QUFDakIsSUFBSzVVLEVBQVksSUFBSTRGLENBQUUsTUFDbkJnUCxFQUFNLGtCQUFrQmhQLEVBQUcsY0FBYXFQLEdBQVlyUCxDQUFFLElBQ3JEb1AsR0FBVXBQLENBQUU7QUFBQSxFQUNsQjtBQUNELEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxJQUNad1AsSUFFSkcsS0FBb0IsQ0FBQzNQLEdBQUlzQyxHQUFVb0ssR0FBWUUsSUFBUXpRLE9BQXNCO0FBQ2hGLE1BQUl1UixJQUFRdFQsRUFBWSxJQUFJNEYsQ0FBRTtBQUM5QixNQUFJME47QUFDSCxXQUFBQSxFQUFNLFdBQVdwTCxHQUNqQm9MLEVBQU0sYUFBYWhCLEdBQ25CZ0IsRUFBTSxRQUFRZCxHQUNkYyxFQUFNLFdBQVdmLEdBQVlySyxHQUFVb0ssR0FBWUUsQ0FBSyxHQUNqRGM7QUFFUixRQUFNa0MsSUFBZXBTLEVBQWdDO0FBQ3JELFNBQUFrUSxJQUFRO0FBQUEsSUFDUCxPQUFPa0MsSUFBZSxJQUFJLGNBQWMsSUFBSTtBQUFBLElBQzVDLFNBQVNBLEtBQWdCLE9BQU8sV0FBYSxNQUFjLE9BQU8sU0FBUyxjQUFjLE9BQU87QUFBQSxJQUNoRyxVQUFBdE47QUFBQSxJQUNBLFlBQUFvSztBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsVUFBVUMsR0FBWXJLLEdBQVVvSyxHQUFZRSxDQUFLO0FBQUEsSUFDakQsT0FBQUE7QUFBQSxFQUNELEdBQ0ljLEVBQU0sWUFDVEEsRUFBTSxRQUFRLFFBQVEsVUFBVSxJQUNoQ0EsRUFBTSxRQUFRLFFBQVEsUUFBUSxjQUUvQnRULEVBQVksSUFBSTRGLEdBQUkwTixDQUFLLEdBQ3pCK0IsR0FBYSxHQUFHLFFBQVF6UCxDQUFFLEdBQ25CME47QUFDUixHQUNJbUMsS0FBYyxNQUFNO0FBQ3ZCLEVBQUFyRCxLQUFlO0FBQ2YsUUFBTXNELElBQVEsQ0FBQyxHQUFHdlYsRUFBVztBQUM3QixFQUFBQSxHQUFZLE1BQU07QUFDbEIsYUFBV3lGLEtBQU04UCxHQUFPO0FBQ3ZCLFFBQUksQ0FBQzlQLEVBQUcsZUFBZSxDQUFDNUYsRUFBWSxJQUFJNEYsQ0FBRSxFQUFHO0FBQzdDLFVBQU0wTixJQUFRdFQsRUFBWSxJQUFJNEYsQ0FBRTtBQUNoQyxJQUFBdVAsR0FBa0J2UCxHQUFJME4sSUFBUTtBQUFBLE1BQzdCLFlBQVlBLEVBQU07QUFBQSxNQUNsQixVQUFVQSxFQUFNO0FBQUEsTUFDaEIsT0FBT0EsRUFBTTtBQUFBLElBQ2QsSUFBSSxDQUFDLENBQUM7QUFBQSxFQUNQO0FBQ0QsR0FDSXFDLEtBQWlCLENBQUMvUCxNQUFPO0FBRTVCLEVBREF6RixHQUFZLElBQUl5RixDQUFFLEdBQ2QsQ0FBQXdNLE9BQ0pBLEtBQWUsSUFDZixlQUFlcUQsRUFBVztBQUMzQixHQUNJRyxLQUF3QixDQUFDL0csSUFBUyxZQUFZO0FBQ2pELFFBQU1xRyxJQUFjekMsR0FBcUI7QUFDekMsTUFBSSxFQUFBNUQsTUFBVyxXQUFXcUcsTUFBZ0IvQyxLQUFtQkEsSUFDN0Q7QUFBQSxJQUFBQSxJQUFrQitDLEdBQ2xCSCxHQUFjO0FBQ2QsZUFBV25QLEtBQU0sQ0FBQyxHQUFHM0YsQ0FBUyxHQUFHO0FBQ2hDLFlBQU1xVCxJQUFRdFQsRUFBWSxJQUFJNEYsQ0FBRTtBQUNoQyxVQUFJLENBQUMwTixHQUFPO0FBQ1gsUUFBQXJULEVBQVUsT0FBTzJGLENBQUU7QUFDbkI7QUFBQSxNQUNEO0FBQ0EsTUFBQTJPLEVBQWEzTyxHQUFJME4sQ0FBSyxHQUN0QkEsRUFBTSxVQUFVLElBQ2hCQSxFQUFNLGNBQWMsSUFDcEJxQyxHQUFlL1AsQ0FBRTtBQUFBLElBQ2xCO0FBQUE7QUFDRCxHQUNJaVEsS0FBeUIsTUFBTTtBQUNsQyxNQUFJLEVBQUEzRCxNQUFxQixPQUFPLFdBQWEsTUFDN0M7QUFBQSxJQUFBQSxLQUFvQixJQUNwQkMsSUFBa0JNLEdBQXFCLEdBQ3ZDMUQsR0FBc0IsQ0FBQytHLE1BQVM7QUFDL0IsVUFBSXJELEdBQXFCLE1BQU1OLEdBQWlCO0FBQy9DLFFBQUF5RCxHQUFzQixZQUFZO0FBQ2xDO0FBQUEsTUFDRDtBQUNBLE1BQUlFLGFBQWdCLGVBQWU5VixFQUFZLElBQUk4VixDQUFJLEtBQUdILEdBQWVHLENBQUk7QUFBQSxJQUM5RSxDQUFDO0FBQ0QsUUFBSTtBQUNILFVBQUksaUJBQWlCLE1BQU1GLEdBQXNCLFlBQVksQ0FBQyxFQUFFLFFBQVEsU0FBUyxpQkFBaUI7QUFBQSxRQUNqRyxZQUFZO0FBQUEsUUFDWixpQkFBaUIsQ0FBQyxHQUFHMVUsRUFBeUI7QUFBQSxNQUMvQyxDQUFDO0FBQUEsSUFDRixRQUFRO0FBQUEsSUFBQztBQUNULFFBQUk7QUFDSCxNQUFDLGFBQWEsOEJBQThCLEdBQUksbUJBQW1CLFVBQVUsTUFBTTBVLEdBQXNCLGNBQWMsQ0FBQztBQUFBLElBQ3pILFFBQVE7QUFBQSxJQUFDO0FBQUE7QUFDVixHQUNJVCxLQUFvQixDQUFDdlAsR0FBSW1RLElBQVUsQ0FBQyxNQUFNO0FBRTdDLE1BREksQ0FBQ25RLEtBQU1BLEVBQUcsYUFBYSxLQUN2QixPQUFPLG9CQUFxQixXQUFZLFFBQU87QUFDbkQsRUFBQWlRLEdBQXVCO0FBQ3ZCLFFBQU12RCxJQUFhRCxHQUFvQjBELEVBQVEsVUFBVSxHQUNuRGpNLElBQVFpTSxFQUFRLFNBQVMsWUFDekJyQixJQUFVcUIsRUFBUSxXQUFXLEtBQzdCdkQsSUFBUXVELEVBQVEsVUFBVSxTQUFTaFUsS0FBb0JnVSxFQUFRLE9BQy9EN04sSUFBVzZOLEVBQVEsVUFBVSxLQUFLLEtBQUtwRixHQUF5Qi9LLENBQUUsR0FDbEVzUCxJQUFjekMsR0FBcUIsUUFBUTdNLENBQUUsR0FDN0MwTixJQUFRaUMsR0FBa0IzUCxHQUFJc0MsR0FBVW9LLEdBQVlFLENBQUs7QUFDL0QsRUFBQWMsRUFBTSxjQUFjNEI7QUFDcEIsUUFBTS9HLElBQVNqTyxFQUFXLElBQUlvVCxFQUFNLFFBQVE7QUFDNUMsTUFBSXROLElBQVU7QUFDZCxNQUFJbUksS0FBVUEsRUFBTyxnQkFBZ0IrRyxLQUFlL0csRUFBTyxRQUFTLENBQUFuSSxJQUFVbUksRUFBTztBQUFBLE9BQ2hGO0FBQ0osVUFBTTJCLElBQUssaUJBQWlCbEssQ0FBRTtBQUM5QixJQUFBSSxJQUFVaU4sR0FBa0IvSyxHQUFVNkssR0FBeUJqRCxHQUFJd0MsQ0FBVSxHQUFHeEksR0FBTzBJLENBQUs7QUFBQSxFQUM3RjtBQUNBLFNBQUt4TSxLQUtMd08sR0FBY2xCLEdBQU90TixDQUFPLEdBQzVCeU8sR0FBY25CLEdBQU9vQixDQUFPLEdBQ3hCL08sR0FBaUJDLENBQUUsS0FDdEIwTyxHQUFXMU8sR0FBSTBOLENBQUssR0FDcEJyVCxFQUFVLElBQUkyRixDQUFFLE1BRWhCMk8sRUFBYTNPLEdBQUkwTixDQUFLLEdBQ3RCclQsRUFBVSxPQUFPMkYsQ0FBRSxJQUViME4sTUFiTmlCLEVBQWEzTyxHQUFJME4sQ0FBSyxHQUN0QnJULEVBQVUsT0FBTzJGLENBQUUsR0FDWjBOO0FBWVQsR0FDSTBDLEtBQXNCLENBQUNwUSxHQUFJcVEsSUFBWSxPQUFTO0FBQ25ELE1BQUksQ0FBQ3JRLEVBQUk7QUFDVCxRQUFNME4sSUFBUXRULEVBQVksSUFBSTRGLENBQUU7QUFDaEMsRUFBSzBOLE1BQ0xpQixFQUFhM08sR0FBSTBOLENBQUssR0FDdEJyVCxFQUFVLE9BQU8yRixDQUFFLEdBQ25Cd1AsR0FBUSxVQUFVeFAsQ0FBRSxHQUNoQnFRLEtBQWEzQyxFQUFNLFVBQVNtQixHQUFjbkIsR0FBT3hSLEVBQWdCLElBQ2hFK1MsR0FBVXZCLEVBQU0sUUFBUSxHQUM3QnRULEVBQVksT0FBTzRGLENBQUU7QUFDdEIsR0FDSXNRLEtBQXNCLENBQUN0USxHQUFJbVEsTUFBWTtBQUMxQyxNQUFJLENBQUNuUSxFQUFJLFFBQU87QUFDaEIsUUFBTTBOLElBQVF0VCxFQUFZLElBQUk0RixDQUFFO0FBQ2hDLFNBQUkwTixNQUNIaUIsRUFBYTNPLEdBQUkwTixDQUFLLEdBQ3RCQSxFQUFNLFVBQVUsSUFDaEJ1QixHQUFVdkIsRUFBTSxRQUFRLElBRWxCNkIsR0FBa0J2UCxHQUFJbVEsTUFBWXpDLElBQVE7QUFBQSxJQUNoRCxZQUFZQSxFQUFNO0FBQUEsSUFDbEIsVUFBVUEsRUFBTTtBQUFBLElBQ2hCLE9BQU9BLEVBQU07QUFBQSxFQUNkLElBQUksQ0FBQyxFQUFFO0FBQ1IsR0FDSTZDLEtBQWdCLENBQUN2USxNQUFPQSxJQUFLNUYsRUFBWSxJQUFJNEYsQ0FBRSxJQUFJLFFBQ25Ed1EsS0FBbUIsQ0FBQ25PLEdBQU04TixJQUFVLENBQUMsTUFBTTtBQUM5QyxRQUFNTSxJQUFPO0FBQUEsSUFDWixPQUFPdFU7QUFBQSxJQUNQLGNBQWNnVSxFQUFRLGlCQUFpQjtBQUFBLElBQ3ZDLEdBQUdBO0FBQUEsRUFDSixHQUNNbkgsSUFBUTJFLEdBQXVCdEwsQ0FBSSxHQUNuQ3FPLElBQVM1QyxHQUFxQnpMLEdBQU1vTyxFQUFLLFFBQVE1QyxHQUFtQnhMLENBQUksR0FBR29PLEVBQUssaUJBQWlCLEVBQUssR0FDdEd0VCxJQUFNLENBQUMsR0FDUHdULElBQTRCLG9CQUFJLElBQUk7QUFDMUMsYUFBVzNRLEtBQU1nSixHQUFPO0FBQ3ZCLFVBQU0wRSxJQUFRNkIsR0FBa0J2UCxHQUFJeVEsQ0FBSTtBQUN4QyxJQUFJL0MsS0FBT3ZRLEVBQUksS0FBS3VRLENBQUs7QUFBQSxFQUMxQjtBQUNBLGFBQVcsRUFBRSxJQUFBMU4sR0FBSSxVQUFBc0MsRUFBUyxLQUFLb08sR0FBUTtBQUN0QyxRQUFJMUgsRUFBTSxTQUFTaEosQ0FBRSxFQUFHO0FBQ3hCLFVBQU0wTixJQUFRNkIsR0FBa0J2UCxHQUFJO0FBQUEsTUFDbkMsR0FBR3lRO0FBQUEsTUFDSCxVQUFBbk87QUFBQSxJQUNELENBQUM7QUFDRCxJQUFJb0wsS0FBT3ZRLEVBQUksS0FBS3VRLENBQUssR0FDekJpRCxFQUFVLElBQUkzUSxDQUFFO0FBQUEsRUFDakI7QUFDQSxNQUFJcUMsR0FBTTtBQUNULFVBQU0wTSxJQUFPdlUsRUFBZSxJQUFJNkgsQ0FBSTtBQUNwQyxRQUFJME07QUFDSCxpQkFBVy9PLEtBQU0rTyxFQUFNLENBQUksQ0FBQzRCLEVBQVUsSUFBSTNRLENBQUUsS0FBSyxDQUFDZ0osRUFBTSxTQUFTaEosQ0FBRSxLQUFHb1EsR0FBb0JwUSxHQUFJLEVBQUk7QUFFbkcsSUFBSTJRLEVBQVUsT0FBTW5XLEVBQWUsSUFBSTZILEdBQU1zTyxDQUFTLElBQ2pEblcsRUFBZSxPQUFPNkgsQ0FBSTtBQUFBLEVBQ2hDO0FBQ0EsU0FBT2xGO0FBQ1IsR0FDSXlULEtBQXFCLENBQUN2TyxHQUFNZ08sSUFBWSxPQUFTO0FBQ3BELE1BQUksQ0FBQ2hPLEVBQU07QUFDWCxRQUFNc08sSUFBWW5XLEVBQWUsSUFBSTZILENBQUk7QUFDekMsRUFBQTdILEVBQWUsT0FBTzZILENBQUk7QUFDMUIsYUFBV3JDLEtBQU0yTixHQUF1QnRMLENBQUksRUFBRyxDQUFBK04sR0FBb0JwUSxHQUFJcVEsQ0FBUztBQUNoRixNQUFJTSxFQUFXLFlBQVczUSxLQUFNMlEsRUFBVyxDQUFBUCxHQUFvQnBRLEdBQUlxUSxDQUFTO0FBQzdFLEdBQ0lRLEtBQTJCLENBQUN4TyxHQUFNOE4sTUFBWTtBQUNqRCxRQUFNVyxJQUFNLENBQUNDLElBQVksT0FBUztBQUVqQyxRQURBUCxHQUFpQm5PLEdBQU04TixDQUFPLEdBQzFCLENBQUNZLEtBQWEsQ0FBQzFPLEVBQU07QUFDekIsVUFBTTBMLElBQVVvQyxHQUFTLFFBQVF0QyxHQUFtQnhMLENBQUksR0FDbEQyTyxJQUFTYixHQUFTLGlCQUFpQjtBQUN6QyxJQUFLcEMsRUFBUSxVQUNUQSxFQUFRLEtBQUssQ0FBQ0ksTUFBUSxFQUFFNkMsSUFBUzVPLEdBQWVDLEdBQU04TCxDQUFHLElBQUk5TCxFQUFLLGNBQWM4TCxDQUFHLEVBQUUsS0FBSyxPQUFPLHlCQUEwQixjQUFZLHNCQUFzQixNQUFNMkMsRUFBSSxFQUFLLENBQUM7QUFBQSxFQUNsTDtBQUNBLE1BQUksQ0FBQ3pPLEtBQVEsT0FBTyx5QkFBMEIsWUFBWTtBQUN6RCxJQUFBeU8sRUFBSSxFQUFLO0FBQ1Q7QUFBQSxFQUNEO0FBQ0Esd0JBQXNCLE1BQU1BLEVBQUksRUFBSSxDQUFDO0FBQ3RDLEdBSUlHLEtBQTRCLENBQUNDLE1BQVE7QUFDeEMsUUFBTTdPLElBQU82TyxHQUFLO0FBQ2xCLE1BQUksQ0FBQzdPLEVBQU07QUFDWCxRQUFNOE8sSUFBZ0IxVyxHQUF3QixJQUFJeVcsQ0FBRyxLQUFLLENBQUM7QUFDM0QsYUFBV3RSLEtBQVN1UixFQUFlLENBQUFsSixHQUEwQnJJLENBQUs7QUFDbEUsTUFBSTtBQUNILFVBQU13UixJQUFPL08sRUFBSyxzQkFBc0IsQ0FBQztBQUN6QyxJQUFBQSxFQUFLLHFCQUFxQixDQUFDLEdBQUc4TyxFQUFjLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDRCxFQUFLLFNBQVNDLENBQUMsQ0FBQyxHQUFHLEdBQW1CLG9CQUFJLElBQUksQ0FBQyxHQUFHRCxDQUFJLENBQUMsQ0FBQztBQUFBLEVBQ3BILFFBQVE7QUFBQSxFQUFDO0FBQ1YsR0FDSUUsS0FBMkIsQ0FBQ0osR0FBS3RSLE1BQVU7QUFDOUMsTUFBSXVSLElBQWdCMVcsR0FBd0IsSUFBSXlXLENBQUc7QUFDbkQsRUFBS0MsS0FBZTFXLEdBQXdCLElBQUl5VyxHQUFLQyxJQUFnQixDQUFDLENBQUMsR0FDbkV2UixLQUFTdVIsRUFBYyxRQUFRdlIsQ0FBSyxJQUFJLEtBQUd1UixFQUFjLEtBQUt2UixDQUFLLEdBQ3ZFcUksR0FBMEJySSxDQUFLLEdBQy9CcVIsR0FBMEJDLENBQUc7QUFDOUIsR0FDSUssSUFBMEIsQ0FBQ0wsR0FBSzlRLE1BQVk7QUFDL0MsUUFBTWlDLElBQU82TyxHQUFLO0FBQ2xCLE1BQUksQ0FBQzdPLEtBQVEsQ0FBQ2pDLEVBQVMsUUFBTztBQUM5QixNQUFJaUgsSUFBUWhGLEVBQUssZ0JBQWdCLFNBQVN0RyxFQUFpQixHQUFHO0FBQzlELFNBQUtzTCxJQUdNQSxFQUFNLGdCQUFnQmpILE1BQVNpSCxFQUFNLGNBQWNqSCxNQUY3RGlILElBQVFDLEVBQWdCbEgsR0FBU2lDLEdBQU0sRUFBRSxHQUNyQ2dGLEtBQU9BLEVBQU0sYUFBYXRMLElBQW1CLEVBQUUsSUFFN0NzTDtBQUNSLEdBQ0ltSyxLQUE4QixDQUFDblAsSUFBTyxPQUFPLFdBQWEsTUFBYyxXQUFXLFNBQVM7QUFDL0YsTUFBSSxDQUFDQSxFQUFNO0FBQ1gsUUFBTW9QLElBQVUsQ0FBQ3ZCLE1BQVM7QUFDekIsSUFBS0EsR0FBTSxlQUNYcUIsRUFBd0JyQixHQUFNd0IsR0FBWXhCLENBQUksQ0FBQyxHQUMvQ2UsR0FBMEJmLENBQUk7QUFBQSxFQUMvQjtBQUNBLEVBQUk3TixFQUFLLGFBQWEsS0FBR29QLEVBQVFwUCxDQUFJO0FBQ3JDLFFBQU1zUCxJQUFRLENBQUNqUyxNQUFTO0FBQ3ZCLFFBQUlrUyxJQUFXLENBQUM7QUFDaEIsUUFBSTtBQUNILE1BQUFBLElBQVdsUyxFQUFLLGlCQUFpQixHQUFHO0FBQUEsSUFDckMsUUFBUTtBQUNQO0FBQUEsSUFDRDtBQUNBLGFBQVMsSUFBSSxHQUFHLElBQUlrUyxFQUFTLFFBQVEsS0FBSztBQUN6QyxZQUFNMUIsSUFBTzBCLEVBQVMsQ0FBQztBQUN2QixNQUFJMUIsRUFBSyxlQUNSdUIsRUFBUXZCLENBQUksR0FDWnlCLEVBQU16QixFQUFLLFVBQVU7QUFBQSxJQUV2QjtBQUFBLEVBQ0Q7QUFDQSxFQUFBeUIsRUFBTXRQLENBQUk7QUFDWCxHQUNJcVAsS0FBYyxDQUFDUixNQUFRO0FBQzFCLFFBQU1qSCxJQUFNaUgsR0FBSztBQUNqQixNQUFJLE9BQU9qSCxLQUFRLFNBQVUsUUFBT0E7QUFDcEMsTUFBSSxPQUFPQSxLQUFRLFdBQVksS0FBSTtBQUNsQyxVQUFNOU0sSUFBTThNLEVBQUksS0FBS2lILENBQUc7QUFDeEIsV0FBSSxPQUFPL1QsS0FBUSxXQUFpQkEsSUFDN0IySyxFQUF1QjNLLENBQUc7QUFBQSxFQUNsQyxRQUFRO0FBQ1AsV0FBTztBQUFBLEVBQ1I7QUFDQSxTQUFPMkssRUFBdUJtQyxDQUFHO0FBQ2xDLEdBQ0k0SCxLQUFtQixDQUFDWCxNQUFRO0FBQy9CLEVBQUtBLE1BQ0RBLEVBQUksVUFBVSxRQUFNWSxHQUFpQlosR0FBS0EsRUFBSSxNQUFNLEdBQ3hERCxHQUEwQkMsQ0FBRyxHQUM3QkssRUFBd0JMLEdBQUtRLEdBQVlSLENBQUcsQ0FBQztBQUM5QyxHQUNJYSxLQUFrQixDQUFDLEdBQ25CQyxLQUFzQixJQUN0QkMsS0FBMkIsQ0FBQ2YsTUFBUTtBQUN2QyxFQUFJLENBQUNBLEtBQU8sRUFBRUEsYUFBZSxZQUFZdFcsR0FBa0IsSUFBSXNXLENBQUcsTUFDbEV0VyxHQUFrQixJQUFJc1csQ0FBRyxHQUN6QmEsR0FBZ0IsS0FBS2IsQ0FBRyxHQUNwQixDQUFBYyxPQUNKQSxLQUFzQixJQUN0QixlQUFlLE1BQU07QUFDcEIsSUFBQUEsS0FBc0I7QUFDdEIsVUFBTWxDLElBQVFpQztBQUNkLElBQUFBLEtBQWtCLENBQUM7QUFDbkIsZUFBVzdCLEtBQVFKO0FBQ2xCLE1BQUFsVixHQUFrQixPQUFPc1YsQ0FBSSxHQUN6QkEsRUFBSyxlQUFhMkIsR0FBaUIzQixDQUFJO0FBQUEsRUFFN0MsQ0FBQztBQUNGO0FBQ0EvRyxHQUFzQixDQUFDbkosTUFBT2lTLEdBQXlCalMsQ0FBRSxDQUFDO0FBQzFELElBQUk4UixLQUFtQixDQUFDWixHQUFLakgsTUFBUTtBQUNwQyxNQUFJLENBQUNBLEVBQUssUUFBTztBQUNqQixNQUFJaUksSUFBY2pJO0FBQ2xCLE1BQUksT0FBT0EsS0FBTyxXQUFZLEtBQUk7QUFDakMsVUFBTWtJLElBQU8sSUFBSSxRQUFRakIsQ0FBRztBQUM1QixJQUFBZ0IsSUFBY2pJLEVBQUksS0FBS2lILEdBQUtpQixDQUFJO0FBQUEsRUFDakMsU0FBU0MsR0FBRztBQUNYLG1CQUFRLEtBQUssa0NBQWtDQSxDQUFDLEdBQ3pDO0FBQUEsRUFDUjtBQUNBLE1BQUlGLEtBQWUsT0FBTyxnQkFBaUIsT0FBZUEsYUFBdUI7QUFDaEYsV0FBQVosR0FBeUJKLEdBQUtnQixDQUFXLEdBQ2xDWCxFQUF3QkwsR0FBS3BKLEVBQXVCb0ssQ0FBVyxDQUFDO0FBRXhFLE1BQUlBLGFBQXVCO0FBQzFCLFdBQUFBLEVBQVksS0FBSyxDQUFDRyxNQUFXO0FBQzVCLE1BQUlBLGFBQWtCLGdCQUFlZixHQUF5QkosR0FBS21CLENBQU0sSUFDaEVBLEtBQVUsUUFBTVAsR0FBaUJaLEdBQUttQixDQUFNO0FBQUEsSUFDdEQsQ0FBQyxFQUFFLE1BQU0sQ0FBQ0QsTUFBTTtBQUNmLGNBQVEsS0FBSyxxQ0FBcUNBLENBQUM7QUFBQSxJQUNwRCxDQUFDLEdBQ007QUFFUixNQUFJLE9BQU9GLEtBQWUsWUFBWUEsYUFBdUIsUUFBUUEsYUFBdUIsTUFBTTtBQUNqRyxVQUFNSSxJQUFVMUssR0FBY3NLLEdBQWEsRUFBRTtBQUM3QyxRQUFJSSxHQUFTO0FBQ1osWUFBTUMsSUFBa0IsQ0FBQzNTLE1BQVU7QUFDbEMsUUFBQTBSLEdBQXlCSixHQUFLdFIsQ0FBSztBQUFBLE1BQ3BDO0FBQ0EsYUFBSTBTLGFBQW1CLFdBQ3RCQSxFQUFRLEtBQUssQ0FBQzFTLE1BQVU7QUFDdkIsUUFBQTJTLEVBQWdCM1MsQ0FBSyxHQUNyQjJSLEVBQXdCTCxHQUFLLE9BQU9nQixLQUFlLFdBQVdBLElBQWNwSyxFQUF1QmxJLENBQUssQ0FBQztBQUFBLE1BQzFHLENBQUMsRUFBRSxNQUFNLENBQUN3UyxNQUFNO0FBQ2YsZ0JBQVEsS0FBSyxxQ0FBcUNBLENBQUM7QUFBQSxNQUNwRCxDQUFDLEdBQ00sU0FFUEcsRUFBZ0JELENBQU8sR0FDaEJmLEVBQXdCTCxHQUFLLE9BQU9nQixLQUFlLFdBQVdBLElBQWNwSyxFQUF1QndLLENBQU8sQ0FBQztBQUFBLElBRXBIO0FBQUEsRUFDRDtBQUNBLFFBQU1qUyxJQUFTLE9BQU80SixLQUFPLGNBQWMsT0FBT0EsS0FBTyxXQUFXdFAsS0FBb0JELElBQ2xGNk4sSUFBU2xJLEVBQU8sSUFBSTRKLENBQUc7QUFDN0IsTUFBSVMsSUFBZW5DLEdBQVEsY0FDdkJpSyxJQUFPakssR0FBUTtBQUNuQixNQUFJLENBQUNBLEdBQVE7QUFDWixRQUFJckksSUFBUyxJQUNUdVMsSUFBUSxDQUFDO0FBQ2IsSUFBSSxPQUFPUCxLQUFlLFdBQVVoUyxJQUFTZ1MsS0FBZSxLQUNuRCxPQUFPQSxLQUFlLFlBQVlBLEtBQWUsU0FDckRBLGFBQXVCLG1CQUFrQnhILElBQWV3SCxLQUUzRGhTLElBQVMsT0FBT2dTLEVBQVksT0FBTyxXQUFXQSxFQUFZLE1BQU0sT0FBT0EsS0FBZSxXQUFXQSxJQUFjLE9BQU9BLENBQVcsR0FDaklPLElBQVFQLEdBQWEsU0FBU08sR0FDOUJELElBQU9OLEdBQWEsUUFBUU0sS0FHMUIsQ0FBQzlILEtBQWdCeEssTUFBUXdLLElBQWVwRCxFQUFnQnBILEdBQVFnUixHQUFLLFVBQVUsSUFDbkY3USxFQUFPLElBQUk0SixHQUFLO0FBQUEsTUFDZixLQUFLL0o7QUFBQSxNQUNMLE9BQUF1UztBQUFBLE1BQ0EsTUFBQUQ7QUFBQSxNQUNBLGNBQUE5SDtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFDQSxTQUFPQTtBQUNSLEdBSUlnSSxLQUFlLENBQUM1VSxNQUFVLENBQUMsQ0FBQ0EsS0FBUyxPQUFPQSxLQUFVLFlBQVksU0FBU0EsS0FBUyxPQUFPQSxHQUFPLFVBQVcsWUFDN0c2VSxLQUFXLENBQUMzUyxHQUFJcUcsR0FBTXZJLEdBQU84VSxNQUFZO0FBQzVDLFFBQU1DLElBQVNILEdBQWE1VSxDQUFLLElBQUlBLElBQVE7QUFDN0MsRUFBSStVLE1BQ0hBLEVBQU8sT0FBTyxHQUNkL1UsSUFBUStVLEVBQU8sTUFFaEJELElBQVU1UyxHQUFJcUcsR0FBTXZJLENBQUs7QUFDekIsUUFBTWdWLElBQU1qYSxHQUFNbUgsQ0FBRSxHQUNkK1MsSUFBS2xhLEdBQU1pRixDQUFLLEdBQ2hCa1YsSUFBS2hhLEtBQVcsQ0FBQzhFLEdBQU8sT0FBTyxHQUFHLENBQUNtVixNQUFTO0FBQ2pELFVBQU1DLElBQWExYSxHQUFNc2EsQ0FBRyxHQUN0QkssSUFBVzNhLEdBQU11YSxDQUFFLEdBQ25CL1QsSUFBSTFHLEdBQVU2YSxDQUFRLEtBQUs3YSxHQUFVMmEsQ0FBSTtBQUMvQyxJQUFBTCxJQUFVTSxHQUFZN00sR0FBTXJILENBQUM7QUFBQSxFQUM5QixDQUFDLEdBQ0tvVSxJQUFRLE1BQU07QUFDbkIsSUFBQVAsR0FBUSxTQUFTLEdBQ2pCRyxJQUFLO0FBQUEsRUFDTjtBQUNBLFNBQUFqYSxHQUFlK0UsR0FBTyxPQUFPLFNBQVNzVixDQUFLLEdBQ3BDQTtBQUNSLEdBSUlDLEtBQWUsR0FDZkMsS0FBVyxDQUFDQyxJQUFJLENBQUMsT0FBTztBQUFBLEVBQzNCLE1BQU07QUFBQSxFQUNOLEdBQUdBO0FBQ0osSUFDSUMsS0FBUyxDQUFDRCxJQUFJLENBQUMsT0FBTztBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLEdBQUdBO0FBQ0osSUFDSUUsS0FBa0IsTUFBTTtBQUFBLEVBQzNCLENBQUNqWCxFQUFnQixJQUFJO0FBQUEsRUFDckIsS0FBSzZXO0FBQUEsRUFDTEs7QUFBQSxFQUNBQztBQUFBLEVBQ0FDO0FBQUEsRUFDQUMsS0FBK0Isb0JBQUksSUFBSTtBQUFBLEVBQ3ZDQyxLQUErQixvQkFBSSxJQUFJO0FBQUEsRUFDdkNDLEdBQW1CL1UsR0FBR2dWLEdBQU07QUFDM0IsV0FBSWhWLEtBQUssUUFBUUEsTUFBTSxTQUFlZ1YsSUFDbENoVixNQUFNLFNBQWVnVixFQUFLLGNBQWMsb0JBQW9CQSxFQUFLLGNBQWMsa0JBQy9FLE9BQU9oVixLQUFNLFlBQVksV0FBV0EsS0FBSyxFQUFFQSxhQUFhLFdBQWlCQSxFQUFFLFNBQVNnVixJQUNqRmhWO0FBQUEsRUFDUjtBQUFBLEVBQ0FpVixHQUFxQmpVLEdBQUk7QUFDeEIsYUFBU04sSUFBT00sRUFBRyxlQUFlTixHQUFNQSxJQUFPQSxFQUFLLGVBQWU7QUFDbEUsWUFBTTJSLElBQUksaUJBQWlCM1IsQ0FBSTtBQUMvQixVQUFJLHdCQUF3QixLQUFLMlIsRUFBRSxXQUFXQSxFQUFFLFlBQVlBLEVBQUUsU0FBUyxFQUFHLFFBQU8zUjtBQUFBLElBQ2xGO0FBQ0EsV0FBT00sRUFBRyxjQUFjLG9CQUFvQkEsRUFBRyxjQUFjO0FBQUEsRUFDOUQ7QUFBQSxFQUNBa1UsR0FBZ0JyVixHQUFTc1YsR0FBUztBQUNqQyxVQUFNeFMsSUFBTTlDLEVBQVEsY0FBYyxlQUFlO0FBQ2pELFFBQUlVLEdBQWU0VSxDQUFPLEdBQUc7QUFDNUIsWUFBTUMsSUFBcUJ6UyxFQUFJO0FBQy9CLGFBQUksT0FBT3lTLEtBQXVCLGFBQW1CLE9BQzlDLElBQUlBLEVBQW1CO0FBQUEsUUFDN0IsUUFBUUQsRUFBUSxXQUFXLGFBQWFBLEVBQVEsVUFBVSxPQUFPLEtBQUtGLEdBQXFCcFYsQ0FBTyxJQUFJLEtBQUtrVixHQUFtQkksRUFBUSxRQUFRdFYsQ0FBTztBQUFBLFFBQ3JKLE1BQU1zVixFQUFRLFFBQVE7QUFBQSxNQUN2QixDQUFDO0FBQUEsSUFDRjtBQUNBLFVBQU1FLElBQW1CMVMsRUFBSTtBQUM3QixXQUFJLE9BQU8wUyxLQUFxQixhQUFtQixPQUM1QyxJQUFJQSxFQUFpQjtBQUFBLE1BQzNCLFNBQVNGLEVBQVEsVUFBVSxLQUFLSixHQUFtQkksRUFBUSxTQUFTdFYsQ0FBTyxJQUFJQTtBQUFBLE1BQy9FLE1BQU1zVixFQUFRLFFBQVE7QUFBQSxNQUN0QixPQUFPQSxFQUFRO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBRyxHQUFxQnpWLEdBQVMwVixHQUFZQyxHQUFNTCxHQUFTO0FBQ3hELFVBQU1NLElBQVcsS0FBS1AsR0FBZ0JyVixHQUFTc1YsQ0FBTztBQUN0RCxRQUFJLENBQUNNLEVBQVUsUUFBTyxLQUFLQyxHQUF1QjdWLEdBQVMwVixHQUFZQyxHQUFNTCxDQUFPO0FBQ3BGLFVBQU1RLElBQVMsS0FBS0MsR0FBYSxHQUMzQkMsSUFBWWhXLEVBQVEsUUFBUSxLQUFLaVcsR0FBZ0JOLENBQUksR0FBRztBQUFBLE1BQzdELEdBQUdHO0FBQUEsTUFDSCxVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixNQUFNLEtBQUtoQixHQUFTLFFBQVE7QUFBQSxNQUM1QixVQUFBYztBQUFBLElBQ0QsQ0FBQztBQUNELFdBQUlOLEVBQVEsZUFBWVUsRUFBVSxhQUFhVixFQUFRLGFBQ25EQSxFQUFRLGFBQVVVLEVBQVUsV0FBV1YsRUFBUSxXQUNuREksRUFBVyxZQUFZTSxHQUNoQixNQUFNQSxFQUFVLE9BQU87QUFBQSxFQUMvQjtBQUFBLEVBQ0EsWUFBWUUsR0FBTzVFLElBQVUsQ0FBQyxHQUFHO0FBQ2hDLFFBQUksQ0FBQyxNQUFNLFFBQVE0RSxDQUFLLEtBQUtBLEVBQU0sU0FBUyxFQUFHLE9BQU0sSUFBSSxVQUFVLHVDQUF1QztBQUMxRyxTQUFLckIsS0FBU3FCLEdBQ2QsS0FBS3BCLEtBQVd4RCxHQUNoQixLQUFLeUQsS0FBVyxLQUFLb0IsR0FBYUQsRUFBTSxDQUFDLENBQUM7QUFBQSxFQUMzQztBQUFBLEVBQ0FMLEdBQXVCN1YsR0FBUzBWLEdBQVlDLEdBQU1MLEdBQVM7QUFFMUQsVUFBTVUsSUFBWWhXLEVBQVEsUUFBUSxLQUFLaVcsR0FBZ0JOLENBQUksR0FBRztBQUFBLE1BQzdELEdBQUcsS0FBS0ksR0FBYTtBQUFBLE1BQ3JCLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLE1BQU07QUFBQSxJQUNQLENBQUM7QUFDRCxJQUFBQyxFQUFVLE1BQU0sR0FDaEJOLEVBQVcsWUFBWU07QUFDdkIsVUFBTUksSUFBVzFWLEdBQWU0VSxDQUFPLElBQUlBLEVBQVEsV0FBVyxhQUFhQSxFQUFRLFVBQVUsT0FBTyxLQUFLRixHQUFxQnBWLENBQU8sSUFBSSxLQUFLa1YsR0FBbUJJLEVBQVEsUUFBUXRWLENBQU8sSUFBSSxLQUFLb1YsR0FBcUJwVixDQUFPO0FBQzdOLFFBQUlxVyxJQUFRO0FBQ1osVUFBTUMsSUFBa0IsTUFBTTtBQUM3QixVQUFJM1YsR0FBYTJVLENBQU8sR0FBRztBQUMxQixjQUFNaUIsSUFBS0gsTUFBYSxTQUFTLG1CQUFtQjtBQUFBLFVBQ25ELEtBQUs7QUFBQSxVQUNMLFFBQVE7QUFBQSxRQUNULElBQUlBLEVBQVMsc0JBQXNCLEdBQzdCSSxJQUFPeFcsRUFBUSxzQkFBc0IsR0FDckN5VyxJQUFRRixFQUFHLFNBQVNDLEVBQUs7QUFDL0IsZUFBTyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksSUFBSUQsRUFBRyxNQUFNQSxFQUFHLFNBQVNDLEVBQUssT0FBT0MsQ0FBSyxDQUFDO0FBQUEsTUFDeEU7QUFDQSxZQUFNdFYsSUFBS2lWLEdBQ0xNLElBQU12VixFQUFHLGVBQWVBLEVBQUc7QUFDakMsYUFBT3VWLElBQU0sSUFBSXZWLEVBQUcsWUFBWXVWLElBQU07QUFBQSxJQUN2QyxHQUNNakMsSUFBVyxNQUFNO0FBQ3RCLDJCQUFxQjRCLENBQUssR0FDMUJBLElBQVEsc0JBQXNCLE1BQU07QUFDbkMsUUFBQUwsRUFBVSxjQUFjTSxFQUFnQixJQUFJO0FBQUEsTUFDN0MsQ0FBQztBQUFBLElBQ0YsR0FDTUssSUFBZVAsTUFBYSxTQUFTLG1CQUFtQixTQUFTQTtBQUN2RSxXQUFBTyxFQUFhLGlCQUFpQixVQUFVbEMsR0FBVSxFQUFFLFNBQVMsR0FBSyxDQUFDLEdBQ25FQSxFQUFTLEdBQ0YsTUFBTTtBQUNaLDJCQUFxQjRCLENBQUssR0FDMUJNLEVBQWEsb0JBQW9CLFVBQVVsQyxDQUFRLEdBQ25EdUIsRUFBVSxPQUFPO0FBQUEsSUFDbEI7QUFBQSxFQUNEO0FBQUEsRUFDQSxJQUFJLFFBQVE7QUFDWCxXQUFPLEtBQUtqQjtBQUFBLEVBQ2I7QUFBQSxFQUNBLElBQUksTUFBTXZXLEdBQU07QUFDZixTQUFLdVcsS0FBV3ZXO0FBQ2hCLGVBQVdPLEtBQU0sS0FBS2lXLEdBQWMsQ0FBQWpXLEVBQUdQLENBQUk7QUFBQSxFQUM1QztBQUFBLEVBQ0EsVUFBVTtBQUNULFdBQU8sS0FBS3VXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsV0FBVztBQUNWLFVBQU01VSxJQUFJLEtBQUs0VTtBQUNmLFdBQU81VSxLQUFLLE9BQU8sS0FBSyxPQUFPQSxDQUFDO0FBQUEsRUFDakM7QUFBQSxFQUNBLENBQUMsT0FBTyxXQUFXLEVBQUV5VyxHQUFNO0FBQzFCLFFBQUlBLE1BQVMsVUFBVTtBQUN0QixZQUFNblcsSUFBSSxPQUFPLEtBQUtzVSxFQUFRO0FBQzlCLGFBQU8sT0FBTyxTQUFTdFUsQ0FBQyxJQUFJQSxJQUFJO0FBQUEsSUFDakM7QUFDQSxXQUFPLEtBQUssU0FBUztBQUFBLEVBQ3RCO0FBQUEsRUFDQSxVQUFVMUIsR0FBSTtBQUNiLGdCQUFLaVcsR0FBYSxJQUFJalcsQ0FBRSxHQUNqQixNQUFNLEtBQUtpVyxHQUFhLE9BQU9qVyxDQUFFO0FBQUEsRUFDekM7QUFBQSxFQUNBLElBQUksVUFBVTtBQUNiLFdBQU8sS0FBSytWO0FBQUEsRUFDYjtBQUFBLEVBQ0EsSUFBSSxRQUFRO0FBQ1gsV0FBTyxLQUFLRDtBQUFBLEVBQ2I7QUFBQSxFQUNBc0IsR0FBYVUsR0FBTTtBQUNsQixXQUFJQSxLQUFRLFFBQVEsT0FBT0EsS0FBUyxZQUFZLFdBQVdBLElBQWFBLEVBQUssUUFDdEVBO0FBQUEsRUFDUjtBQUFBLEVBQ0FaLEdBQWdCTixHQUFNO0FBQ3JCLFVBQU1PLElBQVEsS0FBS3JCLEdBQU8sSUFBSSxDQUFDckMsTUFBTSxLQUFLMkQsR0FBYTNELENBQUMsQ0FBQyxHQUNuRGpTLElBQVEyVixFQUFNLFFBQ2RZLElBQVUsS0FBS2hDLEdBQVMsU0FDeEJpQyxJQUFTLEtBQUtqQyxHQUFTO0FBQzdCLFdBQU9vQixFQUFNLElBQUksQ0FBQ3JVLEdBQUt0RCxNQUFNO0FBQzVCLFlBQU15WSxJQUFRLEVBQUUsUUFBUUYsSUFBVXZZLENBQUMsTUFBTWdDLElBQVEsSUFBSWhDLEtBQUtnQyxJQUFRLEtBQUssR0FBRztBQUMxRSxNQUFJLE1BQU0sUUFBUXdXLENBQU0sS0FDbkJBLEVBQU94WSxDQUFDLE1BQUd5WSxFQUFNLFNBQVNELEVBQU94WSxDQUFDO0FBRXZDLFVBQUlVLElBQVE0QztBQUNaLGFBQUk4VCxFQUFLLFNBQVMsY0FBY0EsRUFBSyxRQUFRLFFBQVEsT0FBTzlULEtBQVEsYUFBVTVDLElBQVEsR0FBRzRDLENBQUcsR0FBRzhULEVBQUssSUFBSSxLQUNwR0EsRUFBSyxTQUFTLHFCQUFxQixPQUFPOVQsS0FBUSxhQUFVNUMsSUFBUSxPQUFPNEMsQ0FBRyxJQUNsRm1WLEVBQU1yQixFQUFLLE1BQU0sSUFBSTFXLEdBQ2QrWDtBQUFBLElBQ1IsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBakIsS0FBZTtBQUNkLFVBQU1yQixJQUFJLEtBQUtJO0FBQ2YsV0FBTztBQUFBLE1BQ04sVUFBVTVVLEVBQVV3VSxFQUFFLFVBQVUsR0FBRztBQUFBLE1BQ25DLE9BQU94VSxFQUFVd1UsRUFBRSxPQUFPLENBQUM7QUFBQSxNQUMzQixVQUFVQSxFQUFFLFlBQVk7QUFBQSxNQUN4QixZQUFZbFUsR0FBb0JrVSxFQUFFLFVBQVU7QUFBQSxNQUM1QyxXQUFXQSxFQUFFLGFBQWE7QUFBQSxNQUMxQixNQUFNQSxFQUFFLFFBQVE7QUFBQSxNQUNoQixXQUFXQSxFQUFFO0FBQUEsTUFDYixRQUFRLE1BQU0sUUFBUUEsRUFBRSxNQUFNLElBQUksV0FBV0EsRUFBRSxVQUFVO0FBQUEsSUFDMUQ7QUFBQSxFQUNEO0FBQUEsRUFDQSxPQUFPMVUsR0FBUzJWLEdBQU07QUFDckIsVUFBTUQsSUFBYTtBQUFBLE1BQ2xCLFNBQUExVjtBQUFBLE1BQ0EsV0FBVztBQUFBLE1BQ1gsU0FBUyxNQUFNO0FBQUEsTUFBQztBQUFBLElBQ2pCLEdBQ01zVixJQUFVLEtBQUtSLEdBQVMsV0FBVztBQUN6QyxRQUFJalI7QUFDSixRQUFJbkQsR0FBZTRVLENBQU8sS0FBSzNVLEdBQWEyVSxDQUFPLEVBQUcsQ0FBQXpSLElBQVEsS0FBSzRSLEdBQXFCelYsR0FBUzBWLEdBQVlDLEdBQU1MLENBQU87QUFBQSxTQUNySDtBQUNKLFlBQU0yQixJQUFRLE1BQU07QUFDbkIsUUFBQXZCLEVBQVcsV0FBVyxPQUFPO0FBQzdCLGNBQU1NLElBQVloVyxFQUFRLFFBQVEsS0FBS2lXLEdBQWdCTixDQUFJLEdBQUcsS0FBS0ksR0FBYSxDQUFDO0FBQ2pGLGVBQUFMLEVBQVcsWUFBWU0sR0FDdkIsS0FBS2tCLEdBQWVsQixHQUFXTCxDQUFJLEdBQzVCSztBQUFBLE1BQ1I7QUFDQSxNQUFBblMsSUFBUSxLQUFLc1QsR0FBYW5YLEdBQVMwVixHQUFZdUIsQ0FBSztBQUFBLElBQ3JEO0FBQ0EsZ0JBQUtoQyxHQUFhLElBQUlTLENBQVUsR0FDaENBLEVBQVcsVUFBVSxNQUFNO0FBQzFCLE1BQUE3UixFQUFNLEdBQ04sS0FBS29SLEdBQWEsT0FBT1MsQ0FBVTtBQUFBLElBQ3BDLEdBQ09BLEVBQVc7QUFBQSxFQUNuQjtBQUFBLEVBQ0F3QixHQUFlbEIsR0FBV0wsR0FBTTtBQUMvQixJQUFBSyxFQUFVLFNBQVMsS0FBSyxNQUFNO0FBQzdCLFlBQU1vQixJQUFPLEtBQUtqQixHQUFhLEtBQUt0QixHQUFPLEtBQUtBLEdBQU8sU0FBUyxDQUFDLENBQUM7QUFDbEUsV0FBSyxRQUFRdUM7QUFBQSxJQUNkLENBQUMsRUFBRSxNQUFNLE1BQU07QUFBQSxJQUFDLENBQUM7QUFBQSxFQUNsQjtBQUFBLEVBQ0FELEdBQWFuWCxHQUFTMFYsR0FBWXVCLEdBQU87QUFDeEMsVUFBTTNCLElBQVUsS0FBS1IsR0FBUyxXQUFXLFNBQ25DdUMsSUFBZ0IsS0FBS3ZDLEdBQVMsaUJBQWlCLElBQy9Dd0MsSUFBYyxNQUFNO0FBQ3pCLE1BQUksQ0FBQzVCLEVBQVcsYUFBYUEsRUFBVyxVQUFVLGNBQWMsU0FBUXVCLEVBQU0sS0FFN0V2QixFQUFXLFVBQVUsZUFBZSxLQUFLLElBQUlBLEVBQVcsVUFBVSxnQkFBZ0IsQ0FBQyxHQUNuRkEsRUFBVyxVQUFVLEtBQUs7QUFBQSxJQUU1QixHQUNNNkIsSUFBZSxNQUFNO0FBQzFCLE1BQUs3QixFQUFXLGFBQ2hCQSxFQUFXLFVBQVUsUUFBUTtBQUFBLElBQzlCO0FBQ0EsUUFBSUosTUFBWTtBQUNmLGFBQUEyQixFQUFNLEdBQ0MsTUFBTTtBQUFBLE1BQUM7QUFFZixRQUFJM0IsTUFBWSxTQUFVLFFBQU8sTUFBTTtBQUFBLElBQUM7QUFDeEMsUUFBSUEsTUFBWSxXQUFXQSxNQUFZLFNBQVM7QUFDL0MsWUFBTWtDLElBQVFsQyxNQUFZLFVBQVUsaUJBQWlCLFdBQy9DbUMsSUFBUW5DLE1BQVksVUFBVSxpQkFBaUIsWUFDL0NvQyxJQUFVLE1BQU1KLEVBQVksR0FDNUJLLElBQVUsTUFBTTtBQUNyQixRQUFJTixLQUFlRSxFQUFhO0FBQUEsTUFDakM7QUFDQSxhQUFBdlgsRUFBUSxpQkFBaUJ3WCxHQUFPRSxDQUFPLEdBQ3ZDMVgsRUFBUSxpQkFBaUJ5WCxHQUFPRSxDQUFPLEdBQ2hDLE1BQU07QUFDWixRQUFBM1gsRUFBUSxvQkFBb0J3WCxHQUFPRSxDQUFPLEdBQzFDMVgsRUFBUSxvQkFBb0J5WCxHQUFPRSxDQUFPO0FBQUEsTUFDM0M7QUFBQSxJQUNEO0FBQ0EsUUFBSXJDLE1BQVksU0FBUztBQUN4QixVQUFJc0MsSUFBVTtBQUNkLFlBQU1DLElBQVUsTUFBTTtBQUNyQixRQUFBRCxJQUFVTixFQUFZLElBQUlDLEVBQWEsR0FDdkNLLElBQVUsQ0FBQ0E7QUFBQSxNQUNaO0FBQ0EsYUFBQTVYLEVBQVEsaUJBQWlCLFNBQVM2WCxDQUFPLEdBQ2xDLE1BQU03WCxFQUFRLG9CQUFvQixTQUFTNlgsQ0FBTztBQUFBLElBQzFEO0FBQ0EsUUFBSXZDLE1BQVksV0FBVztBQUMxQixVQUFJLE9BQU8sd0JBQXlCO0FBQ25DLGVBQUEyQixFQUFNLEdBQ0MsTUFBTTtBQUFBLFFBQUM7QUFFZixZQUFNek0sSUFBVyxJQUFJLHFCQUFxQixDQUFDcUcsTUFBWTtBQUN0RCxtQkFBV1YsS0FBU1UsRUFBUyxDQUFJVixFQUFNLGlCQUFnQm1ILEVBQVksSUFDMURELEtBQWlCM0IsRUFBVyxhQUFXNkIsRUFBYTtBQUFBLE1BQzlELEdBQUcsS0FBS3pDLEdBQVMsWUFBWTtBQUM3QixhQUFBdEssRUFBUyxRQUFReEssQ0FBTyxHQUNqQixNQUFNd0ssRUFBUyxXQUFXO0FBQUEsSUFDbEM7QUFDQSxRQUFJOEssS0FBVyxRQUFRLE9BQU9BLEtBQVksWUFBWSxXQUFXQSxHQUFTO0FBQ3pFLFlBQU13QyxJQUFRLENBQUMzWCxNQUFNQSxJQUFJbVgsRUFBWSxJQUFJQyxFQUFhO0FBQ3RELE1BQUFPLEVBQU14QyxFQUFRLEtBQUs7QUFDbkIsWUFBTXlDLElBQWMsT0FBT3pDLEVBQVEsYUFBYyxhQUFhQSxFQUFRLFVBQVV3QyxDQUFLLElBQUk7QUFDekYsYUFBTyxNQUFNQyxJQUFjO0FBQUEsSUFDNUI7QUFDQSxXQUFPLE1BQU07QUFBQSxJQUFDO0FBQUEsRUFDZjtBQUFBLEVBQ0FDLEdBQU0zTixHQUFJO0FBQ1QsZUFBVzROLEtBQU0sS0FBS2hELEdBQWMsQ0FBSWdELEVBQUcsYUFBVzVOLEVBQUc0TixFQUFHLFNBQVM7QUFDckUsV0FBTztBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFDTixXQUFPLEtBQUtELEdBQU0sQ0FBQ3JKLE1BQU1BLEVBQUUsS0FBSyxDQUFDO0FBQUEsRUFDbEM7QUFBQSxFQUNBLFFBQVE7QUFDUCxXQUFPLEtBQUtxSixHQUFNLENBQUNySixNQUFNQSxFQUFFLE1BQU0sQ0FBQztBQUFBLEVBQ25DO0FBQUEsRUFDQSxVQUFVO0FBQ1QsV0FBTyxLQUFLcUosR0FBTSxDQUFDckosTUFBTUEsRUFBRSxRQUFRLENBQUM7QUFBQSxFQUNyQztBQUFBLEVBQ0EsU0FBUztBQUNSLFdBQU8sS0FBS3FKLEdBQU0sQ0FBQ3JKLE1BQU1BLEVBQUUsT0FBTyxDQUFDO0FBQUEsRUFDcEM7QUFBQSxFQUNBLFNBQVM7QUFDUixXQUFPLEtBQUtxSixHQUFNLENBQUNySixNQUFNQSxFQUFFLE9BQU8sQ0FBQztBQUFBLEVBQ3BDO0FBQUEsRUFDQSxJQUFJLGFBQWF1SixHQUFNO0FBQ3RCLFNBQUtGLEdBQU0sQ0FBQ3JKLE1BQU07QUFDakIsTUFBQUEsRUFBRSxlQUFldUo7QUFBQSxJQUNsQixDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsSUFBSSxXQUFXO0FBQ2QsVUFBTS9ULElBQU8sQ0FBQztBQUNkLGdCQUFLNlQsR0FBTSxDQUFDckosTUFBTXhLLEVBQUssS0FBS3dLLEVBQUUsU0FBUyxNQUFNLE1BQU07QUFBQSxJQUFDLENBQUMsQ0FBQyxDQUFDLEdBQ2hELFFBQVEsSUFBSXhLLENBQUksRUFBRSxLQUFLLE1BQU07QUFBQSxJQUFDLENBQUM7QUFBQSxFQUN2QztBQUNELEdBQ0lnVSxLQUFhLENBQUNqQyxHQUFPNUUsTUFBWSxJQUFJc0QsR0FBZ0JzQixHQUFPNUUsQ0FBTyxHQUNuRThHLEtBQW9CLENBQUNuWixNQUFVQSxLQUFTLFFBQVEsT0FBT0EsS0FBVSxZQUFZQSxFQUFNdEIsRUFBZ0IsTUFBTSxJQUl6RzBhLEtBQWtCLEdBQ2xCQyxJQUFxQixDQUFDQyxNQUFTO0FBQ2xDLFFBQU1DLElBQVVELEVBQUssT0FBTyxPQUN0QnRTLElBQVMsT0FBT3VTLEtBQVksV0FBV0EsSUFBVSxPQUFPQSxDQUFPO0FBQ3JFLE1BQUksQ0FBQyxPQUFPLFNBQVN2UyxDQUFNLEVBQUcsT0FBTSxJQUFJLFVBQVUsdUJBQXVCLE9BQU91UyxDQUFPLENBQUMsaUJBQWlCO0FBQ3pHLFNBQU92UztBQUNSLEdBQ0l3UyxLQUEyQixDQUFDeFosTUFBVTtBQUN6QyxRQUFNZ0gsSUFBUyxPQUFPaEgsR0FBTyxLQUFLO0FBQ2xDLFNBQU8sT0FBTyxTQUFTZ0gsQ0FBTSxJQUFJQSxJQUFTO0FBQzNDLEdBQ0l5UyxLQUFzQixDQUFDcFcsR0FBVXFXLE1BQVU7QUFDOUMsTUFBSW5GLElBQVNsUjtBQUNiLGFBQVdpVyxLQUFRSSxFQUFPLENBQUFuRixJQUFTQSxFQUFPLFFBQVEsSUFBSSxPQUFPLGFBQWFwUixHQUFhbVcsRUFBSyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsT0FBT0EsRUFBSyxLQUFLLENBQUM7QUFDdEksU0FBTy9FO0FBQ1IsR0FDSW9GLEtBQW9CLENBQUN0VyxHQUFVQyxNQUFXO0FBQzdDLFFBQU1zVyxJQUFnQnpXLEdBQWFHLENBQU07QUFDekMsU0FBTyxJQUFJLE9BQU8sY0FBY3NXLENBQWEsVUFBVSxFQUFFLEtBQUt2VyxFQUFTLEtBQUssQ0FBQztBQUM5RSxHQUNJd1csS0FBOEIsQ0FBQ2pYLEdBQUsvRCxNQUFTO0FBQ2hELE1BQUltQixJQUFRNEM7QUFFWixTQURJNUMsS0FBUyxRQUFRLE9BQU9BLEtBQVUsWUFBWSxXQUFXQSxLQUFTLEVBQUVBLGFBQWlCLGFBQVVBLElBQVFBLEVBQU0sUUFDN0dBLEtBQVMsUUFBUUEsTUFBVSxLQUFXbkIsSUFBTyxJQUFJQSxDQUFJLEtBQUssTUFDMURBLEtBQVEsUUFBUSxPQUFPbUIsS0FBVSxXQUFpQixHQUFHQSxDQUFLLEdBQUduQixDQUFJLEtBQzlELE9BQU9tQixDQUFLO0FBQ3BCLEdBQ0k4WixLQUEwQixDQUFDelcsR0FBVUMsR0FBUXpFLE1BQVM7QUFDekQsTUFBSSxDQUFDQSxFQUFNLFFBQU87QUFDbEIsUUFBTSthLElBQWdCelcsR0FBYUcsQ0FBTSxHQUNuQ3lXLElBQWM1VyxHQUFhdEUsQ0FBSTtBQUNyQyxTQUFPLElBQUksT0FBTyx5QkFBeUIrYSxDQUFhLHNCQUFzQkcsQ0FBVyxZQUFZLEdBQUcsRUFBRSxLQUFLMVcsRUFBUyxLQUFLLENBQUM7QUFDL0gsR0FDSTJXLEtBQXNCLENBQUNDLEdBQVVsWCxHQUFtQm1YLEdBQVU3VyxNQUFhO0FBQzlFLE1BQUksT0FBT04sR0FBbUIsWUFBYSxZQUFZO0FBQ3RELFVBQU0vQixJQUFTK0IsRUFBa0IsU0FBU21YLEdBQVU3VyxDQUFRO0FBQzVELElBQUE0VyxFQUFTLElBQUlDLEdBQVUsR0FBR2xaLENBQU07QUFDaEM7QUFBQSxFQUNEO0FBQ0EsTUFBSSxPQUFPK0IsR0FBbUIsU0FBVSxZQUFZO0FBQ25ELElBQUFrWCxFQUFTLElBQUlDLEdBQVVuWCxFQUFrQixNQUFNbVgsR0FBVTdXLENBQVEsQ0FBQztBQUNsRTtBQUFBLEVBQ0Q7QUFDQSxFQUFBNFcsRUFBUyxJQUFJQyxHQUFVN1csQ0FBUTtBQUNoQyxHQUNJOFcsS0FBcUIsQ0FBQzVYLE1BQVc7QUFDcEMsUUFBTXFFLElBQVMsQ0FBQztBQUNoQixNQUFJQyxJQUFTO0FBQ2IsU0FBT0EsSUFBU3RFLEVBQU8sVUFBUTtBQUM5QixVQUFNdUUsSUFBT3ZFLEVBQU8sTUFBTXNFLENBQU0sR0FDMUJFLElBQWEsT0FBTyxLQUFLRCxDQUFJO0FBQ25DLFFBQUlDLEdBQVk7QUFDZixNQUFBRixLQUFVRSxFQUFXLENBQUMsRUFBRTtBQUN4QjtBQUFBLElBQ0Q7QUFDQSxVQUFNcVQsSUFBVyxtQ0FBbUMsS0FBS3RULENBQUk7QUFDN0QsUUFBSXNULEdBQVU7QUFDYixNQUFBeFQsRUFBTyxLQUFLO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixRQUFRd1QsRUFBUyxDQUFDO0FBQUEsTUFDbkIsQ0FBQyxHQUNEdlQsS0FBVXVULEVBQVMsQ0FBQyxFQUFFO0FBQ3RCO0FBQUEsSUFDRDtBQUNBLFVBQU1wVCxJQUFTLDJDQUEyQyxLQUFLRixDQUFJO0FBQ25FLFFBQUlFLEdBQVE7QUFDWCxNQUFBSCxLQUFVRyxFQUFPLENBQUMsRUFBRTtBQUNwQixZQUFNQyxJQUFZLGlCQUFpQixLQUFLMUUsRUFBTyxNQUFNc0UsQ0FBTSxDQUFDLEdBQ3REaEksSUFBT29JLElBQVksQ0FBQyxLQUFLO0FBQy9CLE1BQUlBLE1BQVdKLEtBQVVJLEVBQVUsQ0FBQyxFQUFFLFNBQ3RDTCxFQUFPLEtBQUs7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE9BQU8sT0FBT0ksRUFBTyxDQUFDLENBQUM7QUFBQSxRQUN2QixNQUFNbkksS0FBUSxPQUFPLE9BQU9BLEVBQUssWUFBWTtBQUFBLE1BQzlDLENBQUM7QUFDRDtBQUFBLElBQ0Q7QUFDQSxVQUFNcUksSUFBYSwyQkFBMkIsS0FBS0osQ0FBSTtBQUN2RCxRQUFJSSxHQUFZO0FBQ2YsTUFBQU4sRUFBTyxLQUFLO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixPQUFPTSxFQUFXLENBQUMsRUFBRSxZQUFZO0FBQUEsTUFDbEMsQ0FBQyxHQUNETCxLQUFVSyxFQUFXLENBQUMsRUFBRTtBQUN4QjtBQUFBLElBQ0Q7QUFDQSxVQUFNQyxJQUFTTCxFQUFLLENBQUM7QUFDckIsUUFBSUssTUFBVyxPQUFPQSxNQUFXLE9BQU9BLE1BQVcsT0FBT0EsTUFBVyxPQUFPQSxNQUFXLE9BQU9BLE1BQVcsT0FBT0EsTUFBVyxLQUFLO0FBQy9ILE1BQUFQLEVBQU8sS0FBSztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sT0FBT087QUFBQSxNQUNSLENBQUMsR0FDRE47QUFDQTtBQUFBLElBQ0Q7QUFDQSxVQUFNLElBQUksWUFBWSw0Q0FBNENDLENBQUksR0FBRztBQUFBLEVBQzFFO0FBQ0EsU0FBT0Y7QUFDUixHQUNJeVQsS0FBdUIsTUFBTTtBQUFBLEVBQ2hDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxRQUFRO0FBQUEsRUFDUixTQUFTLENBQUM7QUFBQSxFQUNWLFlBQVl6VCxHQUFRL0MsR0FBS3lXLEdBQWtCQyxHQUFlO0FBQ3pELFNBQUssU0FBUzNULEdBQ2QsS0FBSyxNQUFNL0MsR0FDWCxLQUFLLG1CQUFtQnlXLEdBQ3hCLEtBQUssZ0JBQWdCQztBQUFBLEVBQ3RCO0FBQUEsRUFDQSxRQUFRO0FBQ1AsVUFBTWhXLElBQU8sS0FBSyxTQUFTO0FBQzNCLFFBQUksS0FBSyxVQUFVLEtBQUssT0FBTyxPQUFRLE9BQU0sSUFBSSxZQUFZLHlDQUF5QztBQUN0RyxXQUFPO0FBQUEsTUFDTixNQUFBQTtBQUFBLE1BQ0EsUUFBUSxLQUFLO0FBQUEsSUFDZDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFVBQVU7QUFDVCxXQUFPLEtBQUssT0FBTyxLQUFLLEtBQUs7QUFBQSxFQUM5QjtBQUFBLEVBQ0EsVUFBVTtBQUNULFVBQU04QyxJQUFRLEtBQUssT0FBTyxLQUFLLEtBQUs7QUFDcEMsUUFBSSxDQUFDQSxFQUFPLE9BQU0sSUFBSSxZQUFZLHVDQUF1QztBQUN6RSxnQkFBSyxTQUNFQTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGNBQWNGLEdBQVE7QUFDckIsVUFBTUUsSUFBUSxLQUFLLFFBQVE7QUFDM0IsUUFBSUEsRUFBTSxTQUFTLFlBQVlBLEVBQU0sVUFBVUYsRUFBUSxPQUFNLElBQUksWUFBWSxhQUFhQSxDQUFNLEdBQUc7QUFBQSxFQUNwRztBQUFBLEVBQ0EsY0FBY0EsR0FBUTtBQUNyQixVQUFNRSxJQUFRLEtBQUssUUFBUTtBQUMzQixXQUFPQSxHQUFPLFNBQVMsWUFBWUEsRUFBTSxVQUFVRjtBQUFBLEVBQ3BEO0FBQUEsRUFDQSxXQUFXbkksTUFBU2dDLEdBQVE7QUFDM0IsVUFBTXNHLElBQWMxRCxFQUFxQixLQUFLLEtBQUs1RSxDQUFJO0FBQ3ZELFFBQUksT0FBT3NJLEtBQWdCLFdBQVksT0FBTSxJQUFJLFVBQVUsR0FBR3RJLENBQUksbUJBQW1CO0FBQ3JGLFdBQU8sSUFBSXNJLEVBQVksR0FBR3RHLENBQU07QUFBQSxFQUNqQztBQUFBLEVBQ0EsV0FBVztBQUNWLFFBQUloQixJQUFRLEtBQUssYUFBYTtBQUM5QixXQUFPLEtBQUssY0FBYyxHQUFHLEtBQUssS0FBSyxjQUFjLEdBQUcsS0FBRztBQUMxRCxZQUFNdUgsSUFBVyxLQUFLLFFBQVEsR0FDeEJDLElBQVEsS0FBSyxhQUFhO0FBQ2hDLFVBQUlELEVBQVMsU0FBUyxTQUFVLE9BQU0sSUFBSSxZQUFZLHlCQUF5QjtBQUMvRSxNQUFJQSxFQUFTLFVBQVUsTUFBS3ZILElBQVEsS0FBSyxXQUFXLGNBQWNBLEdBQU93SCxDQUFLLElBQ3pFeEgsSUFBUSxLQUFLLFdBQVcsY0FBY0EsR0FBTyxLQUFLLFdBQVcsaUJBQWlCd0gsQ0FBSyxDQUFDO0FBQUEsSUFDMUY7QUFDQSxXQUFPeEg7QUFBQSxFQUNSO0FBQUEsRUFDQSxlQUFlO0FBQ2QsUUFBSUEsSUFBUSxLQUFLLFdBQVc7QUFDNUIsV0FBTyxLQUFLLGNBQWMsR0FBRyxLQUFLLEtBQUssY0FBYyxHQUFHLEtBQUc7QUFDMUQsWUFBTXVILElBQVcsS0FBSyxRQUFRLEdBQ3hCQyxJQUFRLEtBQUssV0FBVztBQUM5QixVQUFJRCxFQUFTLFNBQVMsU0FBVSxPQUFNLElBQUksWUFBWSw2QkFBNkI7QUFDbkYsTUFBSUEsRUFBUyxVQUFVLE1BQUt2SCxJQUFRLEtBQUssV0FBVyxrQkFBa0JBLEdBQU93SCxDQUFLLElBQzdFeEgsSUFBUSxLQUFLLFdBQVcsa0JBQWtCQSxHQUFPLEtBQUssV0FBVyxpQkFBaUJ3SCxDQUFLLENBQUM7QUFBQSxJQUM5RjtBQUNBLFdBQU94SDtBQUFBLEVBQ1I7QUFBQSxFQUNBLGFBQWE7QUFDWixXQUFJLEtBQUssY0FBYyxHQUFHLEtBQ3pCLEtBQUssUUFBUSxHQUNOLEtBQUssV0FBVyxLQUVwQixLQUFLLGNBQWMsR0FBRyxLQUN6QixLQUFLLFFBQVEsR0FDTixLQUFLLFdBQVcsaUJBQWlCLEtBQUssV0FBVyxDQUFDLEtBRW5ELEtBQUssYUFBYTtBQUFBLEVBQzFCO0FBQUEsRUFDQSxlQUFlO0FBQ2QsVUFBTXFILElBQVEsS0FBSyxRQUFRO0FBQzNCLFFBQUlBLEVBQU0sU0FBUyxTQUFVLFFBQU92RCxFQUFxQixLQUFLLEtBQUt1RCxFQUFNLFFBQVEsVUFBVUEsRUFBTSxLQUFLO0FBQ3RHLFFBQUlBLEVBQU0sU0FBUyxZQUFZO0FBQzlCLFlBQU1tVCxJQUFXLEtBQUssaUJBQWlCLElBQUluVCxFQUFNLE1BQU07QUFDdkQsVUFBSW1ULEdBQVU7QUFDYixZQUFJLEtBQUssY0FBYyxHQUFHLEdBQUc7QUFDNUIsZ0JBQU1DLElBQWEsS0FBSztBQUN4QixlQUFLLFFBQVE7QUFDYixnQkFBTUMsSUFBTSxLQUFLLFFBQVE7QUFDekIsY0FBSUEsR0FBSyxTQUFTLFlBQVlBLEVBQUksVUFBVSxLQUFLLE9BQU9BLEVBQUksUUFBUyxhQUFhLENBQUNGLEVBQVMsb0JBQW9CQSxFQUFTLHFCQUFxQkUsRUFBSSxLQUFLLFlBQVksSUFBSTtBQUN0SyxpQkFBSyxRQUFRO0FBQ2Isa0JBQU1DLElBQU83VyxFQUFxQixLQUFLLEtBQUs0VyxFQUFJLEtBQUssWUFBWSxHQUFHckIsRUFBbUJtQixDQUFRLENBQUM7QUFDaEcsd0JBQUssT0FBTyxLQUFLO0FBQUEsY0FDaEIsTUFBTUE7QUFBQSxjQUNOLE9BQU9HO0FBQUEsWUFDUixDQUFDLEdBQ01BO0FBQUEsVUFDUjtBQUNBLGVBQUssUUFBUUY7QUFBQSxRQUNkO0FBQ0EsY0FBTUUsSUFBTzdXLEVBQXFCLEtBQUssS0FBSyxVQUFVdVYsRUFBbUJtQixDQUFRLENBQUM7QUFDbEYsb0JBQUssT0FBTyxLQUFLO0FBQUEsVUFDaEIsTUFBTUE7QUFBQSxVQUNOLE9BQU9HO0FBQUEsUUFDUixDQUFDLEdBQ01BO0FBQUEsTUFDUjtBQUNBLFlBQU1DLElBQVEsS0FBSyxjQUFjLElBQUl2VCxFQUFNLE1BQU07QUFDakQsVUFBSXVULEVBQU8sUUFBT0EsRUFBTTtBQUN4QixZQUFNLElBQUksWUFBWSx1QkFBdUJ2VCxFQUFNLE1BQU0sR0FBRztBQUFBLElBQzdEO0FBQ0EsUUFBSUEsRUFBTSxTQUFTLFlBQVlBLEVBQU0sVUFBVSxLQUFLO0FBQ25ELFlBQU1ySCxJQUFRLEtBQUssU0FBUztBQUM1QixrQkFBSyxjQUFjLEdBQUcsR0FDZkE7QUFBQSxJQUNSO0FBQ0EsUUFBSXFILEVBQU0sU0FBUyxhQUFjLFFBQU8sS0FBSyxjQUFjQSxFQUFNLEtBQUs7QUFDdEUsVUFBTSxJQUFJLFlBQVksbUNBQW1DO0FBQUEsRUFDMUQ7QUFBQSxFQUNBLGNBQWNySSxHQUFNO0FBRW5CLFFBREEsS0FBSyxjQUFjLEdBQUcsR0FDbEJBLE1BQVMsUUFBUTtBQUNwQixZQUFNZ0IsSUFBUSxLQUFLLFNBQVM7QUFDNUIsa0JBQUssY0FBYyxHQUFHLEdBQ2ZBO0FBQUEsSUFDUjtBQUNBLFVBQU1nQixJQUFTLENBQUM7QUFDaEIsUUFBSSxDQUFDLEtBQUssY0FBYyxHQUFHO0FBRTFCLFdBREFBLEVBQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxHQUNwQixLQUFLLGNBQWMsR0FBRztBQUM1QixhQUFLLFFBQVEsR0FDYkEsRUFBTyxLQUFLLEtBQUssU0FBUyxDQUFDO0FBSTdCLFFBREEsS0FBSyxjQUFjLEdBQUcsR0FDbEJoQyxNQUFTLE9BQU87QUFDbkIsVUFBSWdDLEVBQU8sV0FBVyxFQUFHLE9BQU0sSUFBSSxZQUFZLHdCQUF3QjtBQUN2RSxhQUFPLEtBQUssV0FBVyxjQUFjLEdBQUdBLENBQU07QUFBQSxJQUMvQztBQUNBLFFBQUloQyxNQUFTLE9BQU87QUFDbkIsVUFBSWdDLEVBQU8sV0FBVyxFQUFHLE9BQU0sSUFBSSxZQUFZLHdCQUF3QjtBQUN2RSxhQUFPLEtBQUssV0FBVyxjQUFjLEdBQUdBLENBQU07QUFBQSxJQUMvQztBQUNBLFFBQUloQyxNQUFTLFNBQVM7QUFDckIsVUFBSWdDLEVBQU8sV0FBVyxFQUFHLE9BQU0sSUFBSSxZQUFZLCtCQUErQjtBQUM5RSxhQUFPLEtBQUssV0FBVyxnQkFBZ0JBLEVBQU8sQ0FBQyxHQUFHQSxFQUFPLENBQUMsR0FBR0EsRUFBTyxDQUFDLENBQUM7QUFBQSxJQUN2RTtBQUNBLFVBQU0sSUFBSSxZQUFZLGtDQUFrQ2hDLENBQUksR0FBRztBQUFBLEVBQ2hFO0FBQ0QsR0FDSTZiLEtBQTBCLENBQUN4WCxHQUFVUSxHQUFLaVgsR0FBZUMsTUFBZTtBQUMzRSxRQUFNVCxJQUFtQyxvQkFBSSxJQUFJLEdBQzNDQyxJQUFnQyxvQkFBSSxJQUFJO0FBQzlDLGFBQVdqQixLQUFRd0IsRUFBZSxDQUFBUixFQUFpQixJQUFJaEIsRUFBSyxRQUFRQSxDQUFJO0FBQ3hFLGFBQVdBLEtBQVF5QixFQUFZLENBQUFSLEVBQWMsSUFBSWpCLEVBQUssUUFBUUEsQ0FBSTtBQUNsRSxTQUFPLElBQUllLEdBQXFCRixHQUFtQjlXLENBQVEsR0FBR1EsR0FBS3lXLEdBQWtCQyxDQUFhLEVBQUUsTUFBTTtBQUMzRyxHQUNJUyxLQUEyQixDQUFDZCxNQUN4QkEsRUFBUyxLQUFLLEVBQUUsWUFBWSxNQUFNLGFBRXRDZSxLQUE0QixDQUFDNVgsR0FBVVEsR0FBS2lYLEdBQWVDLE1BQWU7QUFDN0UsUUFBTW5VLElBQVN1VCxHQUFtQjlXLENBQVEsR0FDcEM2WCxJQUFTLENBQUMsR0FDVkMsSUFBYSxDQUFDLEdBQ2RiLElBQW1DLG9CQUFJLElBQUksR0FDM0NDLElBQWdDLG9CQUFJLElBQUk7QUFDOUMsYUFBV2pCLEtBQVF3QixFQUFlLENBQUFSLEVBQWlCLElBQUloQixFQUFLLFFBQVFBLENBQUk7QUFDeEUsYUFBV0EsS0FBUXlCLEVBQVksQ0FBQVIsRUFBYyxJQUFJakIsRUFBSyxRQUFRQSxDQUFJO0FBQ2xFLFFBQU04QixJQUFTLE1BQU10WCxFQUFxQkQsR0FBSyxNQUFNLENBQUMsR0FDaER3WCxJQUFZLE1BQU12WCxFQUFxQkQsR0FBSyxVQUFVLENBQUM7QUFDN0QsTUFBSXlYLElBQVE7QUFDWixRQUFNL0IsSUFBVSxNQUFNM1MsRUFBTzBVLENBQUssR0FDNUJDLElBQVUsTUFBTTtBQUNyQixVQUFNbFUsSUFBUVQsRUFBTzBVLENBQUs7QUFDMUIsUUFBSSxDQUFDalUsRUFBTyxPQUFNLElBQUksWUFBWSx3Q0FBd0M7QUFDMUUsV0FBQWlVLEtBQ09qVTtBQUFBLEVBQ1IsR0FDTW1VLElBQWdCLENBQUNyVSxNQUFXO0FBQ2pDLFVBQU1FLElBQVFrVSxFQUFRO0FBQ3RCLFFBQUlsVSxFQUFNLFNBQVMsWUFBWUEsRUFBTSxVQUFVRixFQUFRLE9BQU0sSUFBSSxZQUFZLGFBQWFBLENBQU0sR0FBRztBQUFBLEVBQ3BHLEdBQ01zVSxJQUFnQixNQUFNO0FBQzNCLFVBQU16RCxJQUFRc0Q7QUFDZCxRQUFJeFYsSUFBUTtBQUNaLFdBQU93VixJQUFRMVUsRUFBTyxVQUFRO0FBQzdCLFlBQU1TLElBQVFULEVBQU8wVSxDQUFLO0FBQzFCLFVBQUlqVSxFQUFNLFNBQVMsWUFBWUEsRUFBTSxVQUFVLEtBQUs7QUFDbkQsUUFBQXZCLEtBQ0F3VjtBQUNBO0FBQUEsTUFDRDtBQUNBLFVBQUlqVSxFQUFNLFNBQVMsWUFBWUEsRUFBTSxVQUFVLEtBQUs7QUFDbkQsWUFBSXZCLE1BQVUsRUFBRztBQUNqQixRQUFBQSxLQUNBd1Y7QUFDQTtBQUFBLE1BQ0Q7QUFDQSxVQUFJalUsRUFBTSxTQUFTLFlBQVlBLEVBQU0sVUFBVSxPQUFPdkIsTUFBVSxFQUFHO0FBQ25FLE1BQUF3VjtBQUFBLElBQ0Q7QUFDQSxVQUFNSSxJQUFROVUsRUFBTyxNQUFNb1IsR0FBT3NELENBQUs7QUFDdkMsUUFBSUksRUFBTSxXQUFXLEVBQUcsT0FBTSxJQUFJLFlBQVksbUNBQW1DO0FBQ2pGLFVBQU1DLElBQU8sSUFBSXRCLEdBQXFCcUIsR0FBTzdYLEdBQUt5VyxHQUFrQkMsQ0FBYSxFQUFFLE1BQU07QUFDekYsV0FBQVcsRUFBTyxLQUFLLEdBQUdTLEVBQUssTUFBTSxHQUNuQkEsRUFBSztBQUFBLEVBQ2IsR0FDTUMsSUFBb0IsTUFBTTtBQUMvQixVQUFNN08sSUFBTyxDQUFDO0FBRWQsUUFEQXlPLEVBQWMsR0FBRyxHQUNiLEVBQUVqQyxFQUFRLEdBQUcsU0FBUyxZQUFZQSxFQUFRLEdBQUcsVUFBVTtBQUUxRCxXQURBeE0sRUFBSyxLQUFLME8sRUFBYyxDQUFDLEdBQ2xCbEMsRUFBUSxHQUFHLFNBQVMsWUFBWUEsRUFBUSxHQUFHLFVBQVU7QUFDM0QsUUFBQWdDLEVBQVEsR0FDUnhPLEVBQUssS0FBSzBPLEVBQWMsQ0FBQztBQUczQixXQUFBRCxFQUFjLEdBQUcsR0FDVnpPO0FBQUEsRUFDUixHQUNNOE8sSUFBa0IsQ0FBQzdjLEdBQU0rTixNQUFTO0FBQ3ZDLFVBQU0rTyxJQUFPLENBQUNDLE1BQWM7QUFDM0IsWUFBTUMsSUFBT3BZLEVBQXFCQyxHQUFLa1ksQ0FBUztBQUNoRCxVQUFJLE9BQU9DLEtBQVMsV0FBWSxPQUFNLElBQUksVUFBVSxHQUFHRCxDQUFTLG1CQUFtQjtBQUNuRixhQUFPQztBQUFBLElBQ1I7QUFDQSxZQUFRaGQsR0FBTTtBQUFBLE1BQ2IsS0FBSyxhQUFhO0FBQ2pCLGNBQU1pZCxJQUFZSCxFQUFLLGNBQWM7QUFDckMsWUFBSS9PLEVBQUssV0FBVyxFQUFHLFFBQU8sSUFBSWtQLEVBQVVsUCxFQUFLLENBQUMsR0FBR3FPLEVBQU8sQ0FBQztBQUM3RCxZQUFJck8sRUFBSyxXQUFXLEVBQUcsUUFBTyxJQUFJa1AsRUFBVWxQLEVBQUssQ0FBQyxHQUFHQSxFQUFLLENBQUMsQ0FBQztBQUM1RCxZQUFJQSxFQUFLLFdBQVcsRUFBRyxRQUFPLElBQUlrUCxFQUFVbFAsRUFBSyxDQUFDLEdBQUdBLEVBQUssQ0FBQyxHQUFHQSxFQUFLLENBQUMsQ0FBQztBQUNyRSxjQUFNLElBQUksWUFBWSwrQkFBK0I7QUFBQSxNQUN0RDtBQUFBLE1BQ0EsS0FBSztBQUFjLGVBQU8sS0FBSytPLEVBQUssY0FBYyxHQUFHL08sRUFBSyxDQUFDLEdBQUdxTyxFQUFPLENBQUM7QUFBQSxNQUN0RSxLQUFLO0FBQWMsZUFBTyxLQUFLVSxFQUFLLGNBQWMsR0FBR1YsRUFBTyxHQUFHck8sRUFBSyxDQUFDLENBQUM7QUFBQSxNQUN0RSxLQUFLO0FBQWMsZUFBTyxLQUFLK08sRUFBSyxjQUFjLEdBQUdWLEVBQU8sR0FBR0EsRUFBTyxHQUFHck8sRUFBSyxDQUFDLENBQUM7QUFBQSxNQUNoRixLQUFLO0FBQ0osWUFBSUEsRUFBSyxXQUFXLEVBQUcsT0FBTSxJQUFJLFlBQVksOEJBQThCO0FBQzNFLGVBQU8sS0FBSytPLEVBQUssY0FBYyxHQUFHL08sRUFBSyxDQUFDLEdBQUdBLEVBQUssQ0FBQyxHQUFHQSxFQUFLLENBQUMsQ0FBQztBQUFBLE1BQzVELEtBQUssU0FBUztBQUNiLGNBQU1tUCxJQUFRSixFQUFLLFVBQVU7QUFDN0IsWUFBSS9PLEVBQUssV0FBVyxFQUFHLFFBQU8sSUFBSW1QLEVBQU1uUCxFQUFLLENBQUMsR0FBR0EsRUFBSyxDQUFDLENBQUM7QUFDeEQsWUFBSUEsRUFBSyxXQUFXLEVBQUcsUUFBTyxJQUFJbVAsRUFBTW5QLEVBQUssQ0FBQyxHQUFHQSxFQUFLLENBQUMsQ0FBQztBQUN4RCxZQUFJQSxFQUFLLFdBQVcsRUFBRyxRQUFPLElBQUltUCxFQUFNblAsRUFBSyxDQUFDLEdBQUdBLEVBQUssQ0FBQyxHQUFHQSxFQUFLLENBQUMsQ0FBQztBQUNqRSxjQUFNLElBQUksWUFBWSwyQkFBMkI7QUFBQSxNQUNsRDtBQUFBLE1BQ0EsS0FBSztBQUFVLGVBQU8sS0FBSytPLEVBQUssVUFBVSxHQUFHL08sRUFBSyxDQUFDLEdBQUdzTyxFQUFVLENBQUM7QUFBQSxNQUNqRSxLQUFLO0FBQVUsZUFBTyxLQUFLUyxFQUFLLFVBQVUsR0FBR1QsRUFBVSxHQUFHdE8sRUFBSyxDQUFDLENBQUM7QUFBQSxNQUNqRSxLQUFLO0FBQVUsZUFBTyxLQUFLK08sRUFBSyxVQUFVLEdBQUdULEVBQVUsR0FBR0EsRUFBVSxHQUFHdE8sRUFBSyxDQUFDLENBQUM7QUFBQSxNQUM5RSxLQUFLO0FBQ0osWUFBSUEsRUFBSyxXQUFXLEVBQUcsT0FBTSxJQUFJLFlBQVksMEJBQTBCO0FBQ3ZFLGVBQU8sS0FBSytPLEVBQUssVUFBVSxHQUFHL08sRUFBSyxDQUFDLEdBQUdBLEVBQUssQ0FBQyxHQUFHQSxFQUFLLENBQUMsQ0FBQztBQUFBLE1BQ3hELEtBQUssVUFBVTtBQUNkLGNBQU1vUCxJQUFTTCxFQUFLLFdBQVc7QUFDL0IsWUFBSS9PLEVBQUssV0FBVyxFQUFHLFFBQU8sSUFBSW9QLEVBQU9wUCxFQUFLLENBQUMsQ0FBQztBQUNoRCxZQUFJQSxFQUFLLFdBQVcsRUFBRyxRQUFPLElBQUlvUCxFQUFPcFAsRUFBSyxDQUFDLEdBQUdBLEVBQUssQ0FBQyxHQUFHQSxFQUFLLENBQUMsR0FBR0EsRUFBSyxDQUFDLENBQUM7QUFDM0UsY0FBTSxJQUFJLFlBQVksOEJBQThCO0FBQUEsTUFDckQ7QUFBQSxNQUNBLEtBQUs7QUFBVyxlQUFPLEtBQUsrTyxFQUFLLFdBQVcsR0FBR1QsRUFBVSxHQUFHdlgsRUFBcUJELEdBQUssVUFBVSxDQUFDLEdBQUdDLEVBQXFCRCxHQUFLLFVBQVUsQ0FBQyxHQUFHa0osRUFBSyxDQUFDLENBQUM7QUFBQSxNQUNuSixLQUFLO0FBQVcsZUFBTyxLQUFLK08sRUFBSyxXQUFXLEdBQUdoWSxFQUFxQkQsR0FBSyxVQUFVLENBQUMsR0FBR3dYLEVBQVUsR0FBR3ZYLEVBQXFCRCxHQUFLLFVBQVUsQ0FBQyxHQUFHa0osRUFBSyxDQUFDLENBQUM7QUFBQSxNQUNuSixLQUFLO0FBQVcsZUFBTyxLQUFLK08sRUFBSyxXQUFXLEdBQUdoWSxFQUFxQkQsR0FBSyxVQUFVLENBQUMsR0FBR0MsRUFBcUJELEdBQUssVUFBVSxDQUFDLEdBQUd3WCxFQUFVLEdBQUd0TyxFQUFLLENBQUMsQ0FBQztBQUFBLE1BQ25KLEtBQUs7QUFDSixZQUFJQSxFQUFLLFdBQVcsRUFBRyxPQUFNLElBQUksWUFBWSwyQkFBMkI7QUFDeEUsZUFBTyxLQUFLK08sRUFBSyxXQUFXLEdBQUcvTyxFQUFLLENBQUMsR0FBR0EsRUFBSyxDQUFDLEdBQUdBLEVBQUssQ0FBQyxHQUFHQSxFQUFLLENBQUMsQ0FBQztBQUFBLE1BQ2xFLEtBQUssUUFBUTtBQUNaLGNBQU1xUCxJQUFPTixFQUFLLFNBQVM7QUFDM0IsWUFBSS9PLEVBQUssV0FBVyxFQUFHLFFBQU8sSUFBSXFQLEVBQUtyUCxFQUFLLENBQUMsR0FBR2pKLEVBQXFCRCxHQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQ25GLFlBQUlrSixFQUFLLFdBQVcsRUFBRyxRQUFPLElBQUlxUCxFQUFLclAsRUFBSyxDQUFDLEdBQUdBLEVBQUssQ0FBQyxDQUFDO0FBQ3ZELGNBQU0sSUFBSSxZQUFZLDBCQUEwQjtBQUFBLE1BQ2pEO0FBQUEsTUFDQSxLQUFLO0FBQVMsZUFBTyxLQUFLK08sRUFBSyxVQUFVLEdBQUcvTyxFQUFLLENBQUMsQ0FBQztBQUFBLE1BQ25ELEtBQUs7QUFBUyxlQUFPLEtBQUsrTyxFQUFLLFVBQVUsR0FBRy9PLEVBQUssQ0FBQyxDQUFDO0FBQUEsTUFDbkQsS0FBSztBQUFlLGVBQU8sS0FBSytPLEVBQUssZ0JBQWdCLEdBQUcvTyxFQUFLLENBQUMsQ0FBQztBQUFBLE1BQy9EO0FBQVMsY0FBTSxJQUFJLFlBQVksbUNBQW1DL04sQ0FBSSxHQUFHO0FBQUEsSUFDMUU7QUFBQSxFQUNEO0FBQ0EsU0FBT3NjLElBQVExVSxFQUFPLFVBQVE7QUFDN0IsVUFBTVMsSUFBUWtVLEVBQVE7QUFDdEIsUUFBSWxVLEVBQU0sU0FBUyxhQUFjLE9BQU0sSUFBSSxZQUFZLG9DQUFvQztBQUMzRixVQUFNMEYsSUFBTzZPLEVBQWtCO0FBQy9CLElBQUFULEVBQVcsS0FBS1UsRUFBZ0J4VSxFQUFNLE9BQU8wRixDQUFJLENBQUM7QUFBQSxFQUNuRDtBQUNBLE1BQUlvTyxFQUFXLFdBQVcsRUFBRyxPQUFNLElBQUksWUFBWSxzQkFBc0I7QUFDekUsUUFBTWtCLElBQXdCelksRUFBcUJDLEdBQUssbUJBQW1CO0FBQzNFLE1BQUksT0FBT3dZLEtBQTBCLFdBQVksT0FBTSxJQUFJLFVBQVUsb0NBQW9DO0FBQ3pHLFNBQU87QUFBQSxJQUNOLE1BQU0sSUFBSUEsRUFBc0JsQixDQUFVO0FBQUEsSUFDMUMsUUFBQUQ7QUFBQSxFQUNEO0FBQ0QsR0FDSW9CLEtBQXlCLENBQUNwQyxHQUFVN1csR0FBVVEsR0FBS2lYLEdBQWVDLE1BQ2pFQyxHQUF5QmQsQ0FBUSxJQUFVZSxHQUEwQjVYLEdBQVVRLEdBQUtpWCxHQUFlQyxDQUFVLElBQzFHRixHQUF3QnhYLEdBQVVRLEdBQUtpWCxHQUFlQyxDQUFVLEdBRXBFd0IsS0FBbUIsQ0FBQzNTLEdBQVFzUixNQUFXO0FBQzFDLGFBQVdQLEtBQVFPLEdBQVE7QUFDMUIsVUFBTTNCLElBQVUzUCxFQUFPLElBQUkrUSxFQUFLLEtBQUssTUFBTTtBQUMzQyxJQUFJcEIsSUFBU0EsRUFBUSxLQUFLb0IsQ0FBSSxJQUN6Qi9RLEVBQU8sSUFBSStRLEVBQUssS0FBSyxRQUFRLENBQUNBLENBQUksQ0FBQztBQUFBLEVBQ3pDO0FBQ0QsR0FDSTZCLEtBQW9CLENBQUN0QixHQUFRaEIsR0FBVTNWLE1BQ25DMlcsRUFBTyxJQUFJLENBQUNQLE9BQVU7QUFBQSxFQUM1QixNQUFNQSxFQUFLO0FBQUEsRUFDWCxPQUFPQSxFQUFLO0FBQUEsRUFDWixVQUFBVDtBQUFBLEVBQ0EsTUFBQTNWO0FBQ0QsRUFBRSxHQUVDa1ksS0FBcUIsQ0FBQzFiLEdBQVN1QixHQUFTeVksR0FBWUQsR0FBZTRCLEdBQVdDLE1BQW9CO0FBQ3JHLFFBQU1DLElBQVE3YixFQUFRLGNBQWMsY0FBYyxNQUFNO0FBQ3hELEVBQUE2YixFQUFNLE1BQU0sVUFBVXRhLEdBQ3RCTyxHQUEyQjlCLEdBQVMsRUFBRTtBQUN0QyxRQUFNNkksSUFBUzdJLEdBQ1RrWixJQUFXclEsRUFBTyxxQkFBcUJBLEVBQU8sVUFDOUMvRixJQUFNOUMsRUFBUSxjQUFjLGVBQWUsWUFDM0NnQyxJQUFvQmMsR0FBSyxpQkFBaUIsV0FBVyxlQUNyRGdaLElBQWdDLG9CQUFJLElBQUksR0FDeENDLElBQXVDLG9CQUFJLElBQUksR0FDL0NDLElBQWdCLENBQUMsR0FDakJDLElBQW9DLG9CQUFJLElBQUk7QUFDbEQsYUFBVzFELEtBQVFxRCxHQUFpQjtBQUNuQyxRQUFJakcsSUFBTztBQUNYLGFBQVNwWCxJQUFJLEdBQUdBLElBQUlzZCxFQUFNLE1BQU0sUUFBUXRkLEtBQUs7QUFDNUMsWUFBTTRhLElBQVcwQyxFQUFNLE1BQU0sS0FBS3RkLENBQUMsR0FDN0IyZCxJQUFjTCxFQUFNLE1BQU0saUJBQWlCMUMsQ0FBUTtBQUN6RCxVQUFJUCxHQUFrQnNELEdBQWEzRCxFQUFLLE1BQU0sR0FBRztBQUNoRCxRQUFBNUMsSUFBTztBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUXdEO0FBQUEsUUFDVCxHQUNBblosRUFBUSxNQUFNLFlBQVltWixHQUFVTCxHQUE0QlAsRUFBSyxNQUFNLEtBQUssQ0FBQyxHQUNqRjBELEVBQWtCLElBQUk5QyxDQUFRO0FBQzlCO0FBQUEsTUFDRDtBQUNBLFVBQUlKLEdBQXdCbUQsR0FBYTNELEVBQUssUUFBUUEsRUFBSyxnQkFBZ0IsR0FBRztBQUM3RSxRQUFBNUMsSUFBTztBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUXdEO0FBQUEsVUFDUixNQUFNWixFQUFLO0FBQUEsUUFDWixHQUNBdlksRUFBUSxNQUFNLFlBQVltWixHQUFVTCxHQUE0QlAsRUFBSyxNQUFNLE9BQU9BLEVBQUssZ0JBQWdCLENBQUMsR0FDeEcwRCxFQUFrQixJQUFJOUMsQ0FBUTtBQUM5QjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQ0EsUUFBSSxDQUFDeEQsR0FBTTtBQUNWLFlBQU13RyxJQUFnQixPQUFPNUQsRUFBSyxNQUFNLEtBQUssS0FBSztBQUNsRCxNQUFBNkQsR0FBK0J0WixHQUFLeVYsRUFBSyxRQUFRNEQsQ0FBYSxHQUM5RG5jLEVBQVEsTUFBTSxZQUFZdVksRUFBSyxRQUFRLE9BQU80RCxDQUFhLENBQUMsR0FDNUR4RyxJQUFPO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFRNEMsRUFBSztBQUFBLE1BQ2Q7QUFBQSxJQUNEO0FBQ0EsSUFBQXlELEVBQWMsS0FBS3pELEVBQUssTUFBTSxPQUFPdlksR0FBUzJWLENBQUksQ0FBQztBQUFBLEVBQ3BEO0FBQ0EsV0FBUzRFLElBQVEsR0FBR0EsSUFBUXNCLEVBQU0sTUFBTSxRQUFRdEIsS0FBUztBQUN4RCxVQUFNcEIsSUFBVzBDLEVBQU0sTUFBTSxLQUFLdEIsQ0FBSztBQUN2QyxRQUFJMEIsRUFBa0IsSUFBSTlDLENBQVEsRUFBRztBQUNyQyxVQUFNK0MsSUFBY0wsRUFBTSxNQUFNLGlCQUFpQjFDLENBQVEsR0FDbkRrRCxJQUFXUixFQUFNLE1BQU0sb0JBQW9CMUMsQ0FBUSxHQUNuRG1ELElBQWlCdEMsRUFBVyxPQUFPLENBQUN6QixNQUFTbFcsR0FBZTZaLEdBQWEzRCxFQUFLLE1BQU0sQ0FBQyxHQUNyRmdFLElBQW9CeEMsRUFBYyxPQUFPLENBQUN4QixNQUFTbFcsR0FBZTZaLEdBQWEzRCxFQUFLLE1BQU0sQ0FBQztBQUNqRyxRQUFJK0QsRUFBZSxXQUFXLEtBQUtDLEVBQWtCLFdBQVcsR0FBRztBQUNsRSxNQUFBdmMsRUFBUSxNQUFNLFlBQVltWixHQUFVK0MsR0FBYUcsQ0FBUTtBQUN6RDtBQUFBLElBQ0Q7QUFDQSxVQUFNRyxJQUFnQnRELEdBQVUsT0FBTyxDQUFDbUQsS0FBWSxDQUFDbEQsRUFBUyxXQUFXLElBQUk7QUFDN0UsUUFBSXNELElBQXdCO0FBQzVCLFFBQUlELEtBQWlCRCxFQUFrQixTQUFTLEVBQUcsS0FBSTtBQUN0RCxZQUFNRyxJQUFhSCxFQUFrQixXQUFXLEtBQUtELEVBQWUsV0FBVyxJQUFJQyxFQUFrQixDQUFDLElBQUk7QUFDMUcsVUFBSUcsS0FBYzNELEdBQXdCbUQsR0FBYVEsRUFBVyxRQUFRQSxFQUFXLGdCQUFnQixHQUFHO0FBQ3ZHLGNBQU1DLElBQWM1WixFQUFxQkQsR0FBSzRaLEVBQVcsa0JBQWtCcEUsRUFBbUJvRSxDQUFVLENBQUM7QUFDekcsUUFBQXhELEVBQVMsSUFBSUMsR0FBVXdELENBQVcsR0FDbENuQixHQUFpQk0sR0FBZUwsR0FBa0IsQ0FBQztBQUFBLFVBQ2xELE1BQU1pQjtBQUFBLFVBQ04sT0FBT0M7QUFBQSxRQUNSLENBQUMsR0FBR3hELEdBQVV3RCxDQUFXLENBQUMsR0FDMUJGLElBQXdCO0FBQUEsTUFDekIsV0FBV0MsS0FBYzlELEdBQWtCc0QsR0FBYVEsRUFBVyxNQUFNLEdBQUc7QUFDM0UsY0FBTUMsSUFBYzVaLEVBQXFCRCxHQUFLLFVBQVV3VixFQUFtQm9FLENBQVUsQ0FBQztBQUN0RixRQUFBeEQsRUFBUyxJQUFJQyxHQUFVd0QsQ0FBVyxHQUNsQ25CLEdBQWlCTSxHQUFlTCxHQUFrQixDQUFDO0FBQUEsVUFDbEQsTUFBTWlCO0FBQUEsVUFDTixPQUFPQztBQUFBLFFBQ1IsQ0FBQyxHQUFHeEQsR0FBVXdELENBQVcsQ0FBQyxHQUMxQkYsSUFBd0I7QUFBQSxNQUN6QixPQUFPO0FBQ04sY0FBTTdCLElBQU9XLEdBQXVCcEMsR0FBVStDLEdBQWFwWixHQUFLeVosR0FBbUJELENBQWM7QUFDakcsUUFBQXBELEVBQVMsSUFBSUMsR0FBVXlCLEVBQUssSUFBSSxHQUNoQ1ksR0FBaUJNLEdBQWVMLEdBQWtCYixFQUFLLFFBQVF6QixHQUFVeUIsRUFBSyxJQUFJLENBQUMsR0FDbkY2QixJQUF3QjtBQUFBLE1BQ3pCO0FBQUEsSUFDRCxRQUFRO0FBQUEsSUFBQztBQUNULFFBQUlBLEVBQXVCO0FBQzNCLFFBQUlELEtBQWlCRCxFQUFrQixXQUFXLEtBQUtELEVBQWUsU0FBUyxFQUFHLEtBQUk7QUFDckYsWUFBTUksSUFBYUosRUFBZSxXQUFXLElBQUlBLEVBQWUsQ0FBQyxJQUFJO0FBQ3JFLFVBQUlJLEtBQWM5RCxHQUFrQnNELEdBQWFRLEVBQVcsTUFBTTtBQUNqRSxRQUFBeEQsRUFBUyxJQUFJQyxHQUFVdUQsRUFBVyxLQUFLLEdBQ3ZDRCxJQUF3QjtBQUFBLGVBQ2RDLEtBQWMzRCxHQUF3Qm1ELEdBQWFRLEVBQVcsUUFBUUEsRUFBVyxnQkFBZ0IsR0FBRztBQUM5RyxjQUFNRSxJQUFxQi9aLEVBQXFCQyxHQUFLLGdCQUFnQjtBQUNyRSxZQUFJLE9BQU84WixLQUF1QixXQUFZLE9BQU0sSUFBSSxVQUFVLGlDQUFpQztBQUNuRyxjQUFNQyxLQUFVLElBQUlELEVBQW1CRixFQUFXLE9BQU8zWixFQUFxQkQsR0FBSzRaLEVBQVcsa0JBQWtCLENBQUMsQ0FBQztBQUNsSCxRQUFBeEQsRUFBUyxJQUFJQyxHQUFVMEQsRUFBTyxHQUM5QkosSUFBd0I7QUFBQSxNQUN6QixPQUFPO0FBQ04sWUFBSTtBQUNILGdCQUFNN0IsSUFBT1csR0FBdUJwQyxHQUFVK0MsR0FBYXBaLEdBQUssQ0FBQyxHQUFHd1osQ0FBYztBQUNsRixVQUFBcEQsRUFBUyxJQUFJQyxHQUFVeUIsRUFBSyxJQUFJO0FBQUEsUUFDakMsUUFBUTtBQUNQLGdCQUFNa0MsSUFBZ0JwRSxHQUFvQndELEdBQWFJLENBQWM7QUFDckUsVUFBQXJELEdBQW9CQyxHQUFVbFgsR0FBbUJtWCxHQUFVMkQsQ0FBYTtBQUFBLFFBQ3pFO0FBQ0EsUUFBQUwsSUFBd0I7QUFBQSxNQUN6QjtBQUFBLElBQ0QsUUFBUTtBQUFBLElBQUM7QUFDVCxRQUFJQSxFQUF1QjtBQUMzQixVQUFNSyxJQUFnQnBFLEdBQW9Cd0QsR0FBYUksQ0FBYztBQUNyRSxJQUFBdGMsRUFBUSxNQUFNLFlBQVltWixHQUFVMkQsR0FBZVQsQ0FBUTtBQUMzRCxlQUFXOUQsS0FBUWdFLEVBQW1CLENBQUFSLEVBQXFCLElBQUl4RCxFQUFLLE1BQU07QUFBQSxFQUMzRTtBQUNBLGFBQVdBLEtBQVF3QixHQUFlO0FBQ2pDLFVBQU1JLElBQVMyQixFQUFjLElBQUl2RCxFQUFLLE1BQU0sS0FBSyxDQUFDLEdBQzVDd0UsSUFBbUJoQixFQUFxQixJQUFJeEQsRUFBSyxNQUFNO0FBQzdELFFBQUk0QixFQUFPLFdBQVcsS0FBSyxDQUFDNEMsRUFBa0I7QUFDOUMsVUFBTUMsSUFBZWxKLEdBQVM5VCxHQUFTdVksRUFBSyxRQUFRQSxFQUFLLE9BQU8sWUFBWXZNLEdBQU07QUFDakYsVUFBSW1PLEVBQU8sU0FBUyxFQUFHLEtBQUk7QUFDMUIsY0FBTThDLElBQVkzRSxFQUFtQkMsQ0FBSSxHQUNuQzJFLElBQTZCLG9CQUFJLElBQUk7QUFDM0MsbUJBQVd0RCxLQUFRTztBQUNsQixVQUFBUCxFQUFLLE1BQU0sUUFBUXFELEdBQ25CQyxFQUFXLElBQUl0RCxFQUFLLFVBQVVBLEVBQUssSUFBSTtBQUV4QyxZQUFJVixHQUFVLElBQUssWUFBVyxDQUFDaUUsR0FBYzNaLENBQUksS0FBSzBaLEVBQVksQ0FBQWhFLEVBQVMsSUFBSWlFLEdBQWMzWixDQUFJO0FBQUEsTUFDbEcsUUFBUTtBQUFBLE1BQUM7QUFDVCxNQUFJdVosS0FBa0J4VixHQUFrQixNQUFNLE1BQU15RSxDQUFJO0FBQUEsSUFDekQsQ0FBQztBQUNELElBQUFnUSxFQUFjLEtBQUtnQixDQUFZO0FBQUEsRUFDaEM7QUFDQSxhQUFXL2UsS0FBUThkLEdBQXNCO0FBQ3hDLFFBQUloQyxFQUFjLEtBQUssQ0FBQ3hCLE1BQVNBLEVBQUssV0FBV3RhLENBQUksRUFBRztBQUN4RCxVQUFNZ0IsSUFBUTBjLEVBQVUsSUFBSTFkLENBQUk7QUFDaEMsSUFBSWdCLEtBQVMsUUFDYitjLEVBQWMsS0FBS2xJLEdBQVM5VCxHQUFTL0IsR0FBTWdCLEdBQU9zSSxFQUFpQixDQUFDO0FBQUEsRUFDckU7QUFDQSxTQUFBM0YsR0FBeUI1QixDQUFPLEdBQ3pCLE1BQU07QUFDWixlQUFXZ2QsS0FBZ0JoQixFQUFlLENBQUFnQixJQUFlO0FBQUEsRUFDMUQ7QUFDRCxHQUNJSSxJQUF3QixDQUFDQyxNQUFjO0FBQzFDLFFBQU0sQ0FBQ3ZGLEdBQU93RixHQUFZM0IsQ0FBUyxJQUFJMEIsR0FDakNyZCxJQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzVDLFNBQUE4WCxFQUFNOVgsQ0FBTyxHQUNOQSxFQUFRLE1BQU07QUFDdEIsR0FDSXVkLEtBQUksQ0FBQ0MsTUFBWXZkLE1BQVc7QUFDL0IsUUFBTXdkLElBQWFwRixNQUNiaUYsSUFBYSxDQUFDLEdBQ2QzQixJQUE0QixvQkFBSSxJQUFJLEdBQ3BDM0IsSUFBYSxDQUFDLEdBQ2RELElBQWdCLENBQUMsR0FDakI5TCxJQUFRLENBQUMsR0FDVDJOLElBQWtCLENBQUMsR0FDbkI4QixJQUFXLElBQUksTUFBTUYsRUFBUSxNQUFNLEVBQUUsS0FBSyxDQUFDO0FBQ2pELFdBQVNqRCxJQUFRLEdBQUdBLElBQVFpRCxFQUFRLFFBQVFqRCxLQUFTO0FBRXBELFFBREF0TSxFQUFNLEtBQUt1UCxFQUFRakQsQ0FBSyxFQUFFLE1BQU1tRCxFQUFTbkQsQ0FBSyxDQUFDLENBQUMsR0FDNUNBLEtBQVN0YSxFQUFPLE9BQVE7QUFDNUIsVUFBTWhCLElBQVFnQixFQUFPc2EsQ0FBSyxHQUNwQm9ELElBQVdILEVBQVFqRCxJQUFRLENBQUMsS0FBSyxJQUNqQ3FELElBQWVwYixHQUFvQm1iLENBQVE7QUFDakQsUUFBSTViLEVBQXNCOUMsQ0FBSyxHQUFHO0FBQ2pDLFlBQU1zRCxJQUFTLGdCQUFnQmtiLENBQVUsSUFBSXpELEVBQVcsTUFBTTtBQUM5RCxNQUFBQSxFQUFXLEtBQUs7QUFBQSxRQUNmLFFBQUF6WDtBQUFBLFFBQ0EsT0FBQXREO0FBQUEsUUFDQSxrQkFBa0IyZSxHQUFjO0FBQUEsTUFDakMsQ0FBQyxHQUNHQSxLQUNIM1AsRUFBTSxLQUFLLFlBQVkxTCxDQUFNLFFBQVFxYixFQUFhLFFBQVEsR0FBRyxHQUM3REYsRUFBU25ELElBQVEsQ0FBQyxLQUFLcUQsRUFBYSxVQUM5QjNQLEVBQU0sS0FBSyxPQUFPMUwsQ0FBTSxHQUFHO0FBQ2xDO0FBQUEsSUFDRDtBQUNBLFFBQUk2VixHQUFrQm5aLENBQUssR0FBRztBQUM3QixZQUFNc0QsSUFBUyxlQUFla2IsQ0FBVSxJQUFJN0IsRUFBZ0IsTUFBTTtBQUNsRSxNQUFJZ0MsS0FDSDNQLEVBQU0sS0FBSyxZQUFZMUwsQ0FBTSxRQUFRcWIsRUFBYSxRQUFRLEdBQUcsR0FDN0RGLEVBQVNuRCxJQUFRLENBQUMsS0FBS3FELEVBQWEsVUFDOUIzUCxFQUFNLEtBQUssT0FBTzFMLENBQU0sR0FBRyxHQUNsQythLEVBQVcsS0FBSyxhQUFhL2EsQ0FBTSx5Q0FBeUMsT0FBT3RELEVBQU0sS0FBSyxLQUFLLENBQUMsdUJBQXVCLEdBQzNIMmMsRUFBZ0IsS0FBSztBQUFBLFFBQ3BCLFFBQUFyWjtBQUFBLFFBQ0EsT0FBQXREO0FBQUEsUUFDQSxrQkFBa0IyZSxHQUFjO0FBQUEsTUFDakMsQ0FBQztBQUNEO0FBQUEsSUFDRDtBQUNBLFFBQUkxYixHQUFxQmpELENBQUssR0FBRztBQUNoQyxZQUFNc0QsSUFBUyxjQUFja2IsQ0FBVSxJQUFJMUQsRUFBYyxNQUFNO0FBQy9ELE1BQUFBLEVBQWMsS0FBSztBQUFBLFFBQ2xCLFFBQUF4WDtBQUFBLFFBQ0EsT0FBQXREO0FBQUEsUUFDQSxrQkFBa0IyZSxHQUFjO0FBQUEsTUFDakMsQ0FBQyxHQUNHQSxLQUNIM1AsRUFBTSxLQUFLLFlBQVkxTCxDQUFNLFFBQVFxYixFQUFhLFFBQVEsR0FBRyxHQUM3REYsRUFBU25ELElBQVEsQ0FBQyxLQUFLcUQsRUFBYSxVQUM5QjNQLEVBQU0sS0FBSyxPQUFPMUwsQ0FBTSxHQUFHO0FBQ2xDLFlBQU1zYixJQUFlcEYsR0FBeUJ4WixDQUFLO0FBQ25ELE1BQUFxZSxFQUFXLEtBQUssYUFBYS9hLENBQU0seUNBQXlDc2IsQ0FBWSxzQkFBc0IsR0FDOUdsQyxFQUFVLElBQUlwWixHQUFRdEQsQ0FBSztBQUMzQjtBQUFBLElBQ0Q7QUFDQSxJQUFJLE9BQU9BLEtBQVUsWUFBWSxPQUFPQSxLQUFVLGNBQWNBLEtBQVMsUUFBUSxPQUFPQSxDQUFLLEVBQUUsS0FBSyxNQUFNLE1BQUlnUCxFQUFNLEtBQUssT0FBT2hQLENBQUssQ0FBQztBQUFBLEVBQ3ZJO0FBQ0EsUUFBTW9lLElBQVk7QUFBQSxJQUNqQixDQUFDcmQsTUFDTzBiLEdBQW1CMWIsR0FBU2lPLEVBQU0sS0FBSyxFQUFFLEdBQUcrTCxHQUFZRCxHQUFlNEIsR0FBV0MsQ0FBZTtBQUFBLElBRXpHMEI7QUFBQSxJQUNBM0I7QUFBQSxFQUNEO0FBQ0EsU0FBQTBCLEVBQVUsT0FBTyxXQUFXLElBQUksTUFBTUQsRUFBc0JDLENBQVMsR0FDckVBLEVBQVUsT0FBTyxXQUFXLElBQUksQ0FBQ1MsTUFDNUJBLE1BQVMsV0FBaUJWLEVBQXNCQyxDQUFTLElBQ3REQSxFQUFVLENBQUMsR0FFbkJBLEVBQVUsV0FBVyxNQUFNRCxFQUFzQkMsQ0FBUyxHQUMxREEsRUFBVSxVQUFVLE1BQU1ELEVBQXNCQyxDQUFTLEdBQ3pELE9BQU8sZUFBZUEsR0FBVyxXQUFXO0FBQUEsSUFDM0MsS0FBSyxNQUFNRCxFQUFzQkMsQ0FBUztBQUFBLElBQzFDLEtBQUssQ0FBQ3BlLE1BQVU7QUFDZixjQUFRLElBQUksZUFBZUEsQ0FBSztBQUNoQyxZQUFNLENBQUM2WSxHQUFPd0YsR0FBWTNCLENBQVMsSUFBSTBCLEdBQ2pDcmQsSUFBVSxTQUFTLGNBQWMsS0FBSztBQUM1QyxNQUFBOFgsRUFBTTlYLENBQU8sR0FDYkEsRUFBUSxNQUFNLFVBQVVmO0FBQUEsSUFDekI7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLFlBQVk7QUFBQSxFQUNiLENBQUMsR0FDTW9lO0FBQ1IsR0FDSWhmLEtBQU0sQ0FBQ21mLE1BQVl2ZCxNQUNmc2QsR0FBRUMsR0FBUyxHQUFHdmQsQ0FBTSxHQUV4QjhkLEtBQStCLENBQUN2YyxHQUFRd2MsTUFBZTtBQUMxRCxRQUFNUixJQUFVLENBQUMsR0FDWHZkLElBQVMsQ0FBQyxHQUNWZ2UsSUFBVTtBQUNoQixNQUFJblksSUFBUyxHQUNUcEQ7QUFDSixVQUFRQSxJQUFRdWIsRUFBUSxLQUFLemMsQ0FBTSxNQUFNLFFBQU07QUFDOUMsVUFBTTBjLElBQWlCLE9BQU8sU0FBU3hiLEVBQU0sQ0FBQyxHQUFHLEVBQUU7QUFDbkQsSUFBSSxDQUFDLE9BQU8sY0FBY3diLENBQWMsS0FBS0EsSUFBaUIsTUFDOURWLEVBQVEsS0FBS2hjLEVBQU8sTUFBTXNFLEdBQVFwRCxFQUFNLEtBQUssQ0FBQyxHQUM5Q3pDLEVBQU8sS0FBSytkLEVBQVdFLENBQWMsQ0FBQyxHQUN0Q3BZLElBQVNwRCxFQUFNLFFBQVFBLEVBQU0sQ0FBQyxFQUFFO0FBQUEsRUFDakM7QUFDQSxTQUFJekMsRUFBTyxXQUFXLElBQVUsUUFDaEN1ZCxFQUFRLEtBQUtoYyxFQUFPLE1BQU1zRSxDQUFNLENBQUMsR0FDMUI7QUFBQSxJQUNOLFNBQUEwWDtBQUFBLElBQ0EsUUFBQXZkO0FBQUEsRUFDRDtBQUNELEdBQ0lrZSxLQUF3QixDQUFDWCxHQUFTdmQsTUFBVztBQUNoRCxNQUFJdVQsSUFBU2dLLEVBQVEsQ0FBQyxLQUFLO0FBQzNCLFdBQVNqRCxJQUFRLEdBQUdBLElBQVF0YSxFQUFPLFFBQVFzYSxLQUFTO0FBQ25ELFVBQU10YixJQUFRZ0IsRUFBT3NhLENBQUs7QUFDMUIsSUFBSXRiLEtBQVMsU0FBTXVVLEtBQVUsT0FBT3ZVLENBQUssSUFDekN1VSxLQUFVZ0ssRUFBUWpELElBQVEsQ0FBQyxLQUFLO0FBQUEsRUFDakM7QUFDQSxTQUFPL0c7QUFDUixHQUNJNEssS0FBOEIsQ0FBQzVjLEdBQVF3YyxNQUFlO0FBQ3pELFFBQU01VyxJQUFTMlcsR0FBNkJ2YyxHQUFRd2MsQ0FBVTtBQUM5RCxNQUFJLENBQUM1VyxFQUFRLFFBQU87QUFDcEIsUUFBTSxFQUFFLFNBQUFvVyxHQUFTLFFBQUF2ZCxFQUFPLElBQUltSDtBQUM1QixTQUFJbkgsRUFBTyxXQUFXLE1BQU11ZCxFQUFRLENBQUMsS0FBSyxJQUFJLEtBQUssTUFBTSxPQUFPQSxFQUFRLENBQUMsS0FBSyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUNyYixHQUEyQmxDLEVBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQzhCLEVBQXNCOUIsRUFBTyxDQUFDLENBQUMsSUFDeEttQixHQUFlbkIsRUFBTyxDQUFDLENBQUMsSUFBVTtBQUFBLElBQ3JDLE1BQU07QUFBQSxJQUNOLFNBQVNBLEVBQU8sQ0FBQztBQUFBLEVBQ2xCLElBQ087QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU9BLEVBQU8sQ0FBQztBQUFBLEVBQ2hCLElBRUdBLEVBQU8sS0FBSyxDQUFDaEIsTUFBVWlELEdBQXFCakQsQ0FBSyxLQUFLOEMsRUFBc0I5QyxDQUFLLENBQUMsSUFBVTtBQUFBLElBQy9GLE1BQU07QUFBQSxJQUNOLFNBQVNzZSxHQUFFQyxHQUFTLEdBQUd2ZCxDQUFNO0FBQUEsRUFDOUIsSUFDSUEsRUFBTyxNQUFNa0MsRUFBMEIsSUFBVTtBQUFBLElBQ3BELE1BQU07QUFBQSxJQUNOLFNBQVNnYyxHQUFzQlgsR0FBU3ZkLENBQU07QUFBQSxFQUMvQyxJQUNPO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTc2QsR0FBRUMsR0FBUyxHQUFHdmQsQ0FBTTtBQUFBLEVBQzlCO0FBQ0QsR0FDSW9lLEtBQVksQ0FBQ3JlLEdBQVNzZSxNQUFXO0FBQ3BDLFFBQU14RyxJQUFRLE1BQU0sUUFBUXdHLENBQU0sSUFBSUEsRUFBTyxDQUFDLElBQUlBO0FBQ2xELE1BQUksT0FBT3hHLEtBQVUsV0FBWSxRQUFPLE1BQU07QUFBQSxFQUFDO0FBQy9DLFFBQU10RSxJQUFTc0UsRUFBTTlYLENBQU87QUFDNUIsU0FBTyxNQUFNO0FBQ1osUUFBSSxPQUFPd1QsS0FBVyxZQUFZO0FBQ2pDLE1BQUFBLEVBQU87QUFDUDtBQUFBLElBQ0Q7QUFDQSxJQUFBQSxHQUFRLFNBQVM7QUFBQSxFQUNsQjtBQUNELEdBQ0k0SSxLQUFpQyxDQUFDdFosR0FBSzdFLEdBQU00ZixNQUFpQjtBQUNqRSxNQUFJLENBQUE3aEIsR0FBcUIsSUFBSWlDLENBQUksR0FDakM7QUFBQSxJQUFBakMsR0FBcUIsSUFBSWlDLENBQUk7QUFDN0IsUUFBSTtBQUNILE9BQUM2RSxHQUFLLE9BQU8sTUFBTSxtQkFBbUI7QUFBQSxRQUNyQyxNQUFBN0U7QUFBQSxRQUNBLFFBQVE7QUFBQSxRQUNSLGNBQWMsT0FBTzRmLENBQVk7QUFBQSxRQUNqQyxVQUFVO0FBQUEsTUFDWCxDQUFDO0FBQUEsSUFDRixRQUFRO0FBQUEsSUFBQztBQUFBO0FBQ1YsR0FJSVUsS0FBb0IsQ0FBQ2pOLE1BQVk7QUFDcEMsUUFBTWtOLElBQWEsQ0FBQztBQUNwQixNQUFJLE9BQU9sTixFQUFRLGNBQWMsVUFBVTtBQUMxQyxVQUFNc0MsSUFBUXRDLEVBQVEsWUFBWSxPQUFPLEdBQUcsUUFBUSxHQUFHO0FBQ3ZELElBQUFrTixFQUFXLEtBQUssR0FBRyxNQUFNLEtBQUs1SyxLQUFTLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQzZLLE1BQVU7QUFDNUQsVUFBSUEsR0FBTyxXQUFXLEdBQUcsR0FBRztBQUMzQixjQUFNeGYsS0FBU3dmLEdBQU8sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLFFBQVEsR0FBRyxFQUFFLEdBQUcsT0FBTyxHQUFHO0FBQ3JFLGVBQU8sRUFBRSxDQUFFQSxJQUFRLENBQUMsR0FBSSxPQUFPLENBQUMsR0FBR3hmLEdBQU8sT0FBTyxFQUFFO0FBQUEsTUFDcEQ7QUFDQSxhQUFPO0FBQUEsSUFDUixDQUFDLEdBQUcsU0FBUyxDQUFDMFAsTUFBTUEsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDckM7QUFDQSxTQUFPLE1BQU0sS0FBSyxNQUFNLFFBQVEyQyxFQUFRLFVBQVUsSUFBSUEsRUFBUSxhQUFha04sQ0FBVTtBQUN0RixHQUNJRSxLQUF5QixDQUFDbEIsR0FBU3ZkLE1BQVc7QUFDakQsUUFBTXFkLElBQTZCLG9CQUFJLElBQUk7QUFDM0MsTUFBSXFCLElBQVc7QUFDZixXQUFTLElBQUksR0FBRyxJQUFJbkIsRUFBUSxRQUFRO0FBQ25DLElBQUFtQixLQUFZbkIsRUFBUSxDQUFDLEdBQ2pCLElBQUl2ZCxFQUFPLFdBQVEwZSxLQUFZLFVBQVUsQ0FBQztBQUUvQyxRQUFNbFEsSUFBZWtRLEVBQVMsTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDbk0sTUFBTUEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLE9BQU87QUFDNUUsYUFBVzlRLEtBQWUrTSxHQUFjO0FBQ3ZDLFVBQU05TSxJQUFhRCxFQUFZLFFBQVEsR0FBRztBQUMxQyxRQUFJQyxNQUFlLEdBQUk7QUFDdkIsVUFBTXdYLElBQVd6WCxFQUFZLE1BQU0sR0FBR0MsQ0FBVSxFQUFFLEtBQUssR0FDakRpZCxJQUFZbGQsRUFBWSxNQUFNQyxJQUFhLENBQUMsRUFBRSxLQUFLLEdBQ25Ea2QsSUFBWSxpQkFBaUIsS0FBS0QsQ0FBUztBQUNqRCxRQUFJLENBQUNDLEVBQVc7QUFDaEIsVUFBTUMsSUFBWTdlLEVBQU8sU0FBUzRlLEVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNuRCxRQUFJLENBQUMsTUFBTSxRQUFRQyxDQUFTLEVBQUcsT0FBTSxJQUFJLFVBQVUsTUFBTTNGLENBQVEsc0NBQXNDLE9BQU8yRixDQUFTLEVBQUU7QUFDekgsSUFBQXhCLEVBQVcsSUFBSW5FLEdBQVU7QUFBQSxNQUN4QixVQUFBQTtBQUFBLE1BQ0EsUUFBUTJGO0FBQUEsSUFDVCxDQUFDO0FBQUEsRUFDRjtBQUNBLFNBQU8sRUFBRSxZQUFBeEIsRUFBVztBQUNyQixHQUNJeUIsS0FBeUIsQ0FBQzllLE1BQVc7QUFDeEMsUUFBTStlLElBQVcsQ0FBQyxHQUNaQyxJQUFrQixDQUFDO0FBQ3pCLE1BQUlDLElBQWM7QUFDbEIsV0FBUzNnQixJQUFJLEdBQUdBLElBQUkwQixFQUFPLFFBQVExQixLQUFLO0FBQ3ZDLFVBQU1VLElBQVFnQixFQUFPMUIsQ0FBQztBQUN0QixJQUFJMkQsR0FBcUJqRCxDQUFLLEtBQzdCaWdCLElBQWMsSUFDZEQsRUFBZ0IsS0FBSzFnQixDQUFDLEdBQ3RCeWdCLEVBQVMsS0FBSy9mLEVBQU0sS0FBSyxNQUNmOEMsRUFBc0I5QyxDQUFLLEdBQUcrZixFQUFTLEtBQUsvZixDQUFLO0FBQUEsRUFFN0Q7QUFDQSxTQUFPO0FBQUEsSUFDTixVQUFBK2Y7QUFBQSxJQUNBLGFBQUFFO0FBQUEsSUFDQSxpQkFBQUQ7QUFBQSxFQUNEO0FBQ0QsR0FDSUUsS0FBNkIsQ0FBQzdOLE1BQVk7QUFDN0MsUUFBTThOLElBQWdCOU4sR0FBUyxTQUN6QitOLElBQWVkLEdBQWtCak4sQ0FBTztBQUM5QyxNQUFJK04sRUFBYSxXQUFXLEVBQUcsT0FBTSxJQUFJLE1BQU0sOENBQThDO0FBQzdGLFFBQU1DLElBQVksS0FBSyxJQUFJLEdBQUdELEVBQWEsSUFBSSxDQUFDRSxNQUFNQSxFQUFFLE9BQU8sTUFBTSxDQUFDLEdBQ2hFekksS0FBV3NJLEdBQWUsU0FBUyxJQUFJQSxJQUFnQixTQUFTLE1BQU0sS0FBSyxFQUFFLFFBQVFFLEVBQVUsR0FBRyxDQUFDRSxHQUFHamhCLE1BQU1BLEtBQUsrZ0IsSUFBWSxFQUFFLEdBQy9IRyxJQUFTLENBQUM7QUFDaEIsV0FBU2xoQixJQUFJLEdBQUdBLElBQUkrZ0IsR0FBVy9nQixLQUFLO0FBQ25DLFVBQU15WSxJQUFRLEVBQUUsUUFBUUYsRUFBUXZZLENBQUMsS0FBS0EsS0FBSytnQixJQUFZLEdBQUc7QUFDMUQsZUFBVzlYLEtBQVE2WCxHQUFjO0FBQ2hDLFlBQU0sRUFBRSxVQUFBTCxFQUFTLElBQUlELEdBQXVCdlgsRUFBSyxNQUFNLEdBQ2pEa1ksSUFBWWhtQixHQUFhOE4sRUFBSyxRQUFRO0FBQzVDLFVBQUl2SSxJQUFRK2YsRUFBUyxLQUFLLElBQUl6Z0IsR0FBR3lnQixFQUFTLFNBQVMsQ0FBQyxDQUFDO0FBQ3JELE1BQUlqZCxFQUFzQjlDLENBQUssTUFBR0EsSUFBUSxPQUFPQSxDQUFLLElBQ3REK1gsRUFBTTBJLENBQVMsSUFBSXpnQjtBQUFBLElBQ3BCO0FBQ0EsSUFBQXdnQixFQUFPLEtBQUt6SSxDQUFLO0FBQUEsRUFDbEI7QUFDQSxTQUFPeUk7QUFDUixHQUNJRSxLQUF1QixDQUFDck8sTUFBWTtBQUN2QyxRQUFNc08sSUFBVzFmLEVBQVVvUixFQUFRLFlBQVksR0FBRyxHQUM1Q3VPLElBQVEzZixFQUFVb1IsRUFBUSxTQUFTLENBQUMsR0FDcEN3TyxJQUFheGYsR0FBd0JnUixFQUFRLGNBQWM7QUFDakUsU0FBTztBQUFBLElBQ04sVUFBQXNPO0FBQUEsSUFDQSxPQUFBQztBQUFBLElBQ0EsV0FBV3ZPLEVBQVEsYUFBYTtBQUFBLElBQ2hDLFlBQVl3TyxNQUFlLGFBQWEsUUFBV0E7QUFBQSxJQUNuRCxNQUFNeE8sRUFBUSxZQUFZO0FBQUEsSUFDMUIsV0FBV0EsRUFBUSxhQUFhO0FBQUEsSUFDaEMsUUFBUSxPQUFPQSxFQUFRLFVBQVcsV0FBV0EsRUFBUSxTQUFTO0FBQUEsSUFDOUQsVUFBVUEsRUFBUTtBQUFBLEVBQ25CO0FBQ0QsR0FDSXlPLEtBQTBCLENBQUMvZixHQUFTc1IsTUFBWTtBQUNuRCxRQUFNK04sSUFBZWQsR0FBa0JqTixDQUFPLEdBQ3hDMEssSUFBZ0IsQ0FBQyxHQUNqQnlELElBQVNOLEdBQTJCN04sQ0FBTyxHQUMzQ3dFLElBQVM2SixHQUFxQnJPLENBQU8sR0FDckMwRSxJQUFZaFcsRUFBUSxRQUFReWYsR0FBUTNKLENBQU07QUFDaEQsYUFBV3RPLEtBQVE2WCxHQUFjO0FBQ2hDLFVBQU0sRUFBRSxhQUFBSCxHQUFhLGlCQUFBRCxFQUFnQixJQUFJRixHQUF1QnZYLEVBQUssTUFBTTtBQUMzRSxRQUFLMFg7QUFDTCxpQkFBVzNFLEtBQVMwRSxHQUFpQjtBQUNwQyxjQUFNZSxJQUFnQnhZLEVBQUssT0FBTytTLENBQUssR0FDakN5QyxJQUFlbEosR0FBUzlULEdBQVMsVUFBVXdILEVBQUssUUFBUSxJQUFJK1MsQ0FBSyxJQUFJeUYsR0FBZSxNQUFNO0FBQy9GLGdCQUFNQyxJQUFZZCxHQUEyQjdOLENBQU8sR0FDOUM0TyxJQUFjbEssRUFBVTtBQUM5QixVQUFBQSxFQUFVLFNBQVMsSUFBSSxlQUFlaFcsR0FBU2lnQixHQUFXbkssQ0FBTSxHQUM1RG9LLE1BQWdCLFNBQU1sSyxFQUFVLGNBQWNrSztBQUFBLFFBQ25ELENBQUM7QUFDRCxRQUFBbEUsRUFBYyxLQUFLZ0IsQ0FBWTtBQUFBLE1BQ2hDO0FBQUEsRUFDRDtBQUtBLFNBQU87QUFBQSxJQUNOLFdBQUFoSDtBQUFBLElBQ0EsU0FOZSxNQUFNO0FBQ3JCLE1BQUFBLEVBQVUsT0FBTyxHQUNqQmdHLEVBQWMsUUFBUSxDQUFDbUUsTUFBUUEsRUFBSSxDQUFDO0FBQUEsSUFDckM7QUFBQSxFQUlBO0FBQ0QsR0FDSUMsS0FBSSxDQUFDNUMsTUFBWXZkLE1BQ2J5ZSxHQUF1QmxCLEdBQVN2ZCxDQUFNLEdBRTFDb2dCLEtBQWMsQ0FBQ3JnQixHQUFTc2dCLEdBQVFDLE1BQWM7QUFDakQsTUFBSWhDLEdBQWtCK0IsQ0FBTSxFQUFFLEtBQUssQ0FBQzlZLE1BQVM7QUFDNUMsVUFBTSxFQUFFLGFBQUEwWCxFQUFZLElBQUlILEdBQXVCdlgsRUFBSyxNQUFNO0FBQzFELFdBQU8wWDtBQUFBLEVBQ1IsQ0FBQyxFQUFHLFFBQU9hLEdBQXdCL2YsR0FBU3NnQixDQUFNO0FBQ2xELFFBQU1iLElBQVNOLEdBQTJCbUIsQ0FBTSxHQUMxQ3hLLElBQVM2SixHQUFxQlcsQ0FBTSxHQUNwQ3RLLElBQVloVyxFQUFRLFFBQVF5ZixHQUFRM0osQ0FBTTtBQUloRCxTQUFPO0FBQUEsSUFDTixXQUFBRTtBQUFBLElBQ0EsU0FMZSxNQUFNO0FBQ3JCLE1BQUFBLEVBQVUsT0FBTztBQUFBLElBQ2xCO0FBQUEsRUFJQTtBQUNELEdBQ0l3SyxLQUFVLENBQUN4Z0IsR0FBU3NSLE1BQVk7QUFDbkMsUUFBTWdNLElBQTZCLG9CQUFJLElBQUk7QUFDM0MsYUFBVyxDQUFDbkUsR0FBVWxaLENBQU0sS0FBSyxPQUFPLFFBQVFxUixFQUFRLFVBQVUsR0FBRztBQUNwRSxRQUFJLENBQUMsTUFBTSxRQUFRclIsQ0FBTSxFQUFHLE9BQU0sSUFBSSxVQUFVLDJDQUEyQyxPQUFPQSxDQUFNLFFBQVFrWixDQUFRLEVBQUU7QUFDMUgsSUFBQW1FLEVBQVcsSUFBSW5FLEdBQVU7QUFBQSxNQUN4QixVQUFBQTtBQUFBLE1BQ0EsUUFBQWxaO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUNBLFNBQU9vZ0IsR0FBWXJnQixHQUFTLEVBQUUsR0FBR3NSLEVBQVEsR0FBR2dNLENBQVU7QUFDdkQsR0FDSW1ELEtBQWtCLENBQUNuUCxNQUNmLENBQUN0UixNQUNBcWdCLEdBQVlyZ0IsR0FBU3NSLENBQU8sR0FHakNvUCxLQUFxQixPQUFPMWdCLEdBQVMyZ0IsTUFBYTtBQUNyRCxhQUFXTCxLQUFVSyxHQUFVO0FBQzlCLFVBQU0sRUFBRSxXQUFBM0ssRUFBVSxJQUFJcUssR0FBWXJnQixHQUFTc2dCLENBQU07QUFDakQsVUFBTXRLLEVBQVU7QUFBQSxFQUNqQjtBQUNELEdBQ0k0SyxLQUFxQixDQUFDNWdCLEdBQVM2Z0IsTUFBZTtBQUNqRCxRQUFNQyxJQUFVRCxFQUFXLElBQUksQ0FBQ1AsTUFBV0QsR0FBWXJnQixHQUFTc2dCLENBQU0sQ0FBQyxHQUNqRVMsSUFBVSxNQUFNO0FBQ3JCLElBQUFELEVBQVEsUUFBUSxDQUFDdFQsTUFBTUEsRUFBRSxRQUFRLENBQUM7QUFBQSxFQUNuQztBQUNBLFNBQU87QUFBQSxJQUNOLFlBQVlzVCxFQUFRLElBQUksQ0FBQ3RULE1BQU1BLEVBQUUsU0FBUztBQUFBLElBQzFDLFNBQUF1VDtBQUFBLEVBQ0Q7QUFDRCxHQUNJQyxLQUFtQixDQUFDQyxHQUFVM1AsR0FBUzRQLElBQWUsUUFDbERELEVBQVMsSUFBSSxDQUFDamhCLEdBQVN1YSxNQUFVO0FBQ3ZDLFFBQU1zRixJQUFRM2YsRUFBVW9SLEdBQVMsU0FBUyxDQUFDLElBQUlpSixJQUFRMkc7QUFDdkQsU0FBT2IsR0FBWXJnQixHQUFTO0FBQUEsSUFDM0IsR0FBR3NSO0FBQUEsSUFDSCxPQUFBdU87QUFBQSxFQUNELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyIkYXZvaWRUcmlnZ2VyIiwgIiRnZXRWYWx1ZSIsICJjYW1lbFRvS2ViYWIiLCAiZGVyZWYiLCAiZ2V0T3JJbnNlcnRDb21wdXRlZCIsICJoYXNWYWx1ZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJ0b1JlZiIsICJ0cnlTdHJpbmdBc051bWJlciIsICJhZGRUb0NhbGxDaGFpbiIsICJhZmZlY3RlZCIsICJzaGFyZWQiLCAia2V5IiwgImNyZWF0ZSIsICJibG9iVVJMTWFwIiwgImNhY2hlTWFwIiwgImNhY2hlQ29udGVudE1hcCIsICJjYWNoZUJsb2JDb250ZW50TWFwIiwgImFkb3B0ZWRTZWxlY3Rvck1hcCIsICJhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAiLCAiYWRvcHRlZExheWVyTWFwIiwgImFkb3B0ZWRTaGFkb3dMYXllck1hcCIsICJhZG9wdGVkTWFwIiwgImFkb3B0ZWRCbG9iTWFwIiwgImFkb3B0ZWRBcHBsaWVkVGV4dCIsICJhZG9wdGVkRmlsbGVkIiwgImxheWVyQ291bnRlciIsICJzdHlsZVRyZWVIb29rcyIsICJzdHlsZVRyZWVPYnNlcnZlZCIsICJzdHlsZVRyZWVSb290cyIsICJiYWtlZFN0eWxlcyIsICJiYWtlZExpdmUiLCAiYmFrZWRDYWNoZSIsICJyZWJha2VCYXRjaCIsICJiYWtlZEZvbGxvd2VycyIsICJhZG9wdGVkU3R5bGVTaGVldHNDYWNoZSIsICJzdHlsZUNhY2hlIiwgInN0eWxlRWxlbWVudENhY2hlIiwgInN0eWxlRmx1c2hQZW5kaW5nIiwgInJlZ2lzdGVyZWRQcm9wZXJ0aWVzIiwgIkNTU19ESU1FTlNJT05fVU5JVFNfTElTVCIsICJDU1NfRElNRU5TSU9OX1VOSVRTIiwgIkNTU19VTklUX0ZBQ1RPUllfQUxJQVNFUyIsICJDU1NfVU5JVF9UT0tFTl9SRSIsICJDU1NfQ09MT1JfUFJPUEVSVElFUyIsICJDU1NfVFlQT0dSQVBIWV9QUk9QRVJUSUVTIiwgIkNTU19NT1RJT05fUFJPUEVSVElFUyIsICJTVFlMRV9USEVNRV9BVFRSUyIsICJTVFlMRV9USEVNRV9PQlNFUlZFX0FUVFJTIiwgIkJBS0VfQ0FURUdPUklFUyIsICJWRUVMQV9DQVNDQURFX0xBWUVSUyIsICJVWF9IT1NUX0xBWUVSUyIsICJWSUVXRVJfUlVOVElNRV9MQVlFUlMiLCAiVklFV0VSX0NTU19MQVlFUl9PUkRFUiIsICJMQVlFUl9OQU1FIiwgIkxBWUVSX09QRU4iLCAiT1dORVIiLCAiSE9TVF9DU1NfRkFMTEJBQ0siLCAiQkFLRV9MQVlFUiIsICJERUZBVUxUX0NBVEVHT1JJRVMiLCAiREVGQVVMVF9DQUNIRV9NUyIsICJCQUtFX1NDUkVFTl9NRURJQSIsICJCQUtFX1NDUkVFTl9DSFJPTUUiLCAiQkFLRV9TQ1JFRU5fQUxTT19FWFBMT1JFUiIsICJCQUtFX1NDUkVFTl9BTFNPX1NFVFRJTkdTIiwgIkJBS0VfU0NSRUVOX0FMU08iLCAiQU5JTUFUQUJMRV9CUkFORCIsICJoYXNUeXBlZE9NIiwgImNzc1VuaXRGYWN0b3J5TmFtZSIsICJ1bml0IiwgImNzc1VuaXRDb25zdHJ1Y3Rvck5hbWUiLCAiaXNDc3NMYXllck5hbWUiLCAibmFtZSIsICJjc3NFbXB0eUxheWVyUnVsZSIsICJsYXllck5hbWUiLCAic3RyaXBDc3NQcmVhbWJsZSIsICJjc3MiLCAib3V0IiwgImkiLCAibmV4dCIsICJpc0xheWVyQmxvY2tSdWxlIiwgInJ1bGUiLCAic3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldCIsICJjc3NUZXh0UmVxdWlyZXNJbmxpbmVTdHlsZUVsZW1lbnQiLCAicHJvbWlzZU9yRGlyZWN0IiwgInByb21pc2UiLCAiY2IiLCAiaXNTaGFkb3dSb290IiwgInZhbHVlIiwgImlzRG9jdW1lbnQiLCAiaXNDc3NFbGVtZW50IiwgImVzY2FwZUNTU0lkZW50aWZpZXIiLCAiY2hhciIsICJzdHlsZUlkQ291bnRlciIsICJjcmVhdGVTdHlsZUlkIiwgInVybENhblBhcnNlIiwgImhhc2giLCAic3RyaW5nIiwgImhhc2hCdWZmZXIiLCAicGFyc2VMZW5ndGgiLCAic2l6ZSIsICJwYXJzZU9yaWdpbiIsICJvcmlnaW4iLCAiZWxlbWVudCIsICJ2YWx1ZXMiLCAicGFyc2VUaW1lIiwgInYiLCAiZmFsbGJhY2siLCAidCIsICJub3JtYWxpemVJdGVyYXRpb25Db3VudCIsICJjb3VudCIsICJub3JtYWxpemVJdGVyYXRpb25zIiwgIm4iLCAiaXNTY3JvbGxEcml2ZW4iLCAiaXNWaWV3RHJpdmVuIiwgImlzU3R5bGVIb3N0IiwgIm5vZGUiLCAicmVhZFNoZWV0UnVsZUNvdW50IiwgInNoZWV0IiwgImlzQWRvcHRlZFNoZWV0RW1wdHkiLCAiaXNDb2xvclRva2VuIiwgImlzRWxlbWVudFZpc2libGUiLCAiZWwiLCAiaXNTdHlsZUJpbmRpbmciLCAic3R5bGVzIiwgImlzRWZmZWN0aXZlbHlFbXB0eVN0eWxlVGV4dCIsICJjc3NUZXh0IiwgInNvdXJjZSIsICJjaHVuayIsICJkZWNsYXJhdGlvbiIsICJjb2xvbkluZGV4IiwgInBydW5lRW1wdHlTdHlsZUF0dHJpYnV0ZSIsICJyYXciLCAiYXBwbHlOb3JtYWxpemVkSW5saW5lU3R5bGUiLCAiaXNOYXRpdmVDU1NTdHlsZVZhbHVlIiwgIkNTU1N0eWxlVmFsdWVDdG9yIiwgInByb3RvdHlwZSIsICJpc1JlYWN0aXZlU3R5bGVWYWx1ZSIsICJpc1N0YXRpY1N0eWxlSW50ZXJwb2xhdGlvbiIsICJlc2NhcGVSZWdFeHAiLCAiY29udGFpbnNNYXJrZXIiLCAiY3NzVmFsdWUiLCAibWFya2VyIiwgInJlYWRBdHRhY2hlZENTU1VuaXQiLCAidGV4dCIsICJtYXRjaCIsICJhdXRob3JlZCIsICJub3JtYWxpemVkIiwgImdldFdpbmRvd0NvbnN0cnVjdG9yIiwgIndpbiIsICJjcmVhdGVUeXBlZFVuaXRWYWx1ZSIsICJDU1NOYW1lc3BhY2UiLCAiZmFjdG9yeU5hbWUiLCAiZmFjdG9yeSIsICJDU1NVbml0VmFsdWVDdG9yIiwgImlzU3R5bGVWYWx1ZSIsICJ2YWwiLCAiaXNVbml0VmFsdWUiLCAicXVlcnlGaXJzdERlZXAiLCAicm9vdCIsICJzZWxlY3RvciIsICJkaXJlY3QiLCAic2NvcGUiLCAiaGl0IiwgImlubmVyIiwgImNzc0xheWVyT3JkZXIiLCAiZ3JvdXBzIiwgInNlZW4iLCAibmFtZXMiLCAiZ3JvdXAiLCAibGlzdCIsICJ2ZWVsYUNhc2NhZGVPcmRlciIsICJtYWtlSG9zdExheWVyT3JkZXIiLCAiZXh0cmEiLCAiY3NzTGF5ZXJCbG9jayIsICJib2R5IiwgIndyYXBDc3NMYXllciIsICJub3JtYWxpemVDc3NGb3JMYXllciIsICJ0cmltbWVkIiwgInVud3JhcE91dGVyTGF5ZXJCbG9jayIsICJleHBlY3RlZE5hbWUiLCAib3BlbiIsICJkZXB0aCIsICJjaCIsICJ1bndyYXBDc3NMYXllciIsICJzdHJpcHBlZCIsICJjc3NJbXBvcnRXaXRoTGF5ZXIiLCAidXJsIiwgImxheWVyIiwgIlVYX1BSRUxPQURfSE9TVF9DU1MiLCAiZ2V0T3JDcmVhdGVMYXllclJ1bGUiLCAicnVsZXMiLCAiZXhpc3RpbmciLCAicnVsZUluZGV4IiwgImNyZWF0ZWQiLCAidG9rZW5pemVOdW1lcmljQ1NTJDEiLCAidG9rZW5zIiwgImN1cnNvciIsICJyZXN0IiwgIndoaXRlc3BhY2UiLCAibnVtYmVyIiwgInVuaXRNYXRjaCIsICJpZGVudGlmaWVyIiwgInN5bWJvbCIsICJOdW1lcmljVHlwZWRPTVBhcnNlciQxIiwgInRva2VuIiwgIkNvbnN0cnVjdG9yIiwgIm9wZXJhdG9yIiwgInJpZ2h0IiwgInBhcnNlVG9UeXBlZE9NIiwgInNldFByb3BlcnR5SWZOb3RFcXVhbCIsICJzdHlsZVJlZiIsICJrZWJhYiIsICJpbXBvcnRhbmNlIiwgInNldFN0eWxlUHJvcGVydHlUeXBlZCIsICJzdHlsZU1hcFJlZiIsICJzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2siLCAib2xkIiwgIm5ld1ZhbCIsICJwYXJzZWQiLCAibWF5YmVOdW0iLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJoYW5kbGVTdHlsZUNoYW5nZSIsICJwcm9wIiwgInNldFN0eWxlSW5SdWxlIiwgImdldFN0eWxlUnVsZSIsICJzZXRTdHlsZVJ1bGUiLCAicHJvcE5hbWUiLCAicHJvcFZhbHVlIiwgImxvYWRTdHlsZVNoZWV0IiwgImlubGluZSIsICJiYXNlIiwgImludGVncml0eSIsICJsb2FkIiwgImZldGNoQW5kQ2FjaGUiLCAic2V0U3R5bGVVUkwiLCAicmVzIiwgImVycm9yIiwgImxvYWRCbG9iU3R5bGUiLCAic3R5bGUiLCAibG9hZElubGluZVN0eWxlIiwgInJvb3RFbGVtZW50IiwgIlBMQUNFIiwgInNldFByb3BlcnR5IiwgInRhcmdldCIsICJwcmVsb2FkU3R5bGUiLCAibG9hZEFzQWRvcHRlZCIsICJyZW1lbWJlckFkb3B0ZWRUZXh0IiwgImNzc1RleHRGb3JBZG9wdGVkU2hlZXQiLCAic3RvcmVkIiwgIm1hcHBlZCIsICJlbnN1cmVBZG9wdGVkU2hlZXRDb250ZW50IiwgImFwcGx5QWRvcHRlZFN0eWxlVGV4dCIsICJtZXNzYWdlIiwgInNoZWV0Rm9yQmxvYiIsICJibG9iIiwgImxvYWRBc0Fkb3B0ZWRVbnNhZmUiLCAiY2FjaGVkIiwgImFwcGxpZWQiLCAibGF5ZXJXcmFwcGVkIiwgInJlbW92ZUFkb3B0ZWQiLCAiZmV0Y2hBc0lubGluZSIsICJjb2xsZWN0U3R5bGVIb3N0cyIsICJpbnRvIiwgImNoaWxkIiwgIm5vdGlmeVN0eWxlVHJlZUhvc3RzIiwgImhvc3RzIiwgInJlYXNvbiIsICJmbiIsICJyZWdpc3RlclN0eWxlVHJlZUhvb2siLCAib2JzZXJ2ZVN0eWxlVHJlZSIsICJvYnNlcnZlciIsICJyZWNvcmRzIiwgInJlYyIsICJzaGVldHMiLCAicmVoeWRyYXRlQ29uc3RydWN0YWJsZVNoZWV0cyIsICJjYW5QYXJzZSIsICJpZHgiLCAiZ2V0VHJhbnNmb3JtIiwgIm1hdHJpeCIsICJnZXRUcmFuc2Zvcm1PcmlnaW4iLCAiY3NzT3JpZ2luIiwgImdldFByb3BlcnR5VmFsdWUiLCAic3JjIiwgImNzIiwgImdldEVsZW1lbnRab29tIiwgInpvb20iLCAiY3VycmVudEVsZW1lbnQiLCAiY3VycmVudENTU1pvb20iLCAiZ2V0UHhWYWx1ZSIsICJnZXRQYWRkaW5nIiwgImF4aXMiLCAic3R5bGVFbGVtZW50IiwgInNldFN0eWxlUnVsZXMiLCAiY2xhc3NlcyIsICJhcmdzIiwgImdldFN0eWxlTGF5ZXIiLCAiZW5zdXJlU3R5bGVTY29wZVNlbGVjdG9yIiwgInN0eWxlSWQiLCAiam9pblNjb3BlZFNlbGVjdG9yIiwgImZpbmRTdHlsZVJ1bGUiLCAiZnVsbFNlbGVjdG9yIiwgImV4cGVjdGVkIiwgInJlcXVlc3RlZCIsICJhY3R1YWwiLCAiYmFzaXMiLCAiYmFzaXNFbGVtZW50IiwgInN0eWxlRWxlbWVudEdsb2JhbCIsICJydWxlSWQiLCAiYnVybCIsICJwcm9taXNlZCIsICJnZXRBZG9wdGVkU3R5bGVSdWxlIiwgImluU2hhZG93IiwgInRhcmdldEFkb3B0ZWRTaGVldHMiLCAic2VsZWN0b3JLZXkiLCAic2hhZG93TWFwIiwgImxheWVyUnVsZSIsICJzaGFkb3dMYXllck1hcCIsICJsYXllclJ1bGVJbmRleCIsICJyIiwgImludmFsaWRhdGlvblJlYWR5IiwgImxhc3RGaW5nZXJwcmludCIsICJyZWJha2VRdWV1ZWQiLCAibm9ybWFsaXplQ2F0ZWdvcmllcyIsICJjYXRlZ29yaWVzIiwgImNhY2hlS2V5Rm9yIiwgIm1lZGlhIiwgImJha2VUaGVtZUZpbmdlcnByaW50IiwgInBhcnRzIiwgImxvY2FsIiwgInRha2VQcm9wIiwgIkNPTE9SX1BST1BfU0VUIiwgImJha2VEZWNsUmFuayIsICJjb2xsZWN0QmFrZWREZWNsYXJhdGlvbnMiLCAic2V0IiwgImJ1aWxkQmFrZWRDc3NUZXh0IiwgImRlY2xhcmF0aW9ucyIsICJyb3dzIiwgImEiLCAiYiIsICJiYWtlZCIsICJjb2xsZWN0QmFrZVNjcmVlbkhvc3RzIiwgImNocm9tZSIsICJiYWtlQWxzb1F1ZXJpZXNGb3IiLCAiY29sbGVjdEJha2VBbHNvSG9zdHMiLCAicXVlcmllcyIsICJwaWVyY2VTaGFkb3ciLCAicm9vdFNlbCIsICJmaW5kIiwgInNlbCIsICJncm91cGVkIiwgInF1ZXJ5IiwgInEiLCAic2VscyIsICJhZG9wdGVkTGlzdCIsICJhc3NpZ25BZG9wdGVkIiwgImFkb3B0U2hlZXQiLCAidW5hZG9wdFNoZWV0IiwgIndyaXRlQmFrZWRDc3MiLCAicmVtZW1iZXJDYWNoZSIsICJjYWNoZU1zIiwgInByZXYiLCAiZW50cnkiLCAiZHJvcENhY2hlIiwgImNhY2hlS2V5IiwgImNsZWFyQWxsQ2FjaGUiLCAicGFya0Jha2VkIiwgInJlc3VtZUJha2VkIiwgImZpbmdlcnByaW50IiwgImJha2VDb21wdXRlZFN0eWxlIiwgImJha2VJTyIsICJlbnN1cmVCYWtlSU8iLCAiZW50cmllcyIsICJlbnN1cmVCYWtlZFJlY29yZCIsICJjYW5Db25zdHJ1Y3QiLCAiZmx1c2hSZWJha2UiLCAiYmF0Y2giLCAic2NoZWR1bGVSZWJha2UiLCAiaW52YWxpZGF0ZUJha2VkU3R5bGVzIiwgImVuc3VyZUJha2VJbnZhbGlkYXRpb24iLCAiaG9zdCIsICJvcHRpb25zIiwgInVuYmFrZUNvbXB1dGVkU3R5bGUiLCAia2VlcENhY2hlIiwgInJlYmFrZUNvbXB1dGVkU3R5bGUiLCAiZ2V0QmFrZWRTdHlsZSIsICJiYWtlU2NyZWVuQ29sb3JzIiwgIm9wdHMiLCAiZXh0cmFzIiwgImZvbGxvd2VycyIsICJ1bmJha2VTY3JlZW5Db2xvcnMiLCAic2NoZWR1bGVCYWtlU2NyZWVuQ29sb3JzIiwgInJ1biIsICJyZXRyeU1pc3MiLCAicGllcmNlIiwgInN5bmNBZG9wdGVkU2hlZXRzVG9TaGFkb3ciLCAiYlRvIiwgImFkb3B0ZWRTaGVldHMiLCAibGl2ZSIsICJzIiwgImFkZEFkb3B0ZWRTaGVldFRvRWxlbWVudCIsICJlbnN1cmVTaGFkb3dDc3NGYWxsYmFjayIsICJyZWh5ZHJhdGVBZG9wdGVkU3R5bGVTaGVldHMiLCAicmVzdG9yZSIsICJob3N0Q3NzVGV4dCIsICJ2aXNpdCIsICJjaGlsZHJlbiIsICJlbnN1cmVIb3N0U3R5bGVzIiwgImxvYWRDYWNoZWRTdHlsZXMiLCAic3R5bGVGbHVzaEJhdGNoIiwgInN0eWxlRmx1c2hTY2hlZHVsZWQiLCAic2NoZWR1bGVFbnN1cmVIb3N0U3R5bGVzIiwgInJlc29sdmVkU3JjIiwgIndlYWsiLCAiZSIsICJyZXN1bHQiLCAiYWRvcHRlZCIsICJhZGRBZG9wdGVkU2hlZXQiLCAidmFycyIsICJwcm9wcyIsICJpc0xpbmtlckxpa2UiLCAiYmluZFdpdGgiLCAiaGFuZGxlciIsICJsaW5rZXIiLCAid2VsIiwgInd2IiwgInVuIiwgImN1cnIiLCAiZWxlbWVudFJlZiIsICJ2YWx1ZVJlZiIsICJ1bnN1YiIsICJhbmltYXRhYmxlSWQiLCAib25TY3JvbGwiLCAibyIsICJvblZpZXciLCAiQW5pbWF0YWJsZVZhbHVlIiwgIiNzdGVwcyIsICIjb3B0aW9ucyIsICIjY3VycmVudCIsICIjc3Vic2NyaWJlcnMiLCAiI2F0dGFjaG1lbnRzIiwgIiNyZXNvbHZlRWxlbWVudFJlZiIsICJzZWxmIiwgIiNmaW5kTmVhcmVzdFNjcm9sbGVyIiwgIiNjcmVhdGVUaW1lbGluZSIsICJ0cmlnZ2VyIiwgIlNjcm9sbFRpbWVsaW5lQ3RvciIsICJWaWV3VGltZWxpbmVDdG9yIiwgIiNzdGFydFRpbWVsaW5lRHJpdmVuIiwgImF0dGFjaG1lbnQiLCAicGxhbiIsICJ0aW1lbGluZSIsICIjc3RhcnRUaW1lbGluZUZhbGxiYWNrIiwgInRpbWluZyIsICIjYnVpbGRUaW1pbmciLCAiYW5pbWF0aW9uIiwgIiNidWlsZEtleWZyYW1lcyIsICJzdGVwcyIsICIjcmVzb2x2ZVN0ZXAiLCAic2Nyb2xsZXIiLCAicmFmSWQiLCAiY29tcHV0ZVByb2dyZXNzIiwgInZwIiwgInJlY3QiLCAidG90YWwiLCAibWF4IiwgImxpc3RlblRhcmdldCIsICJoaW50IiwgInN0ZXAiLCAib2Zmc2V0cyIsICJlYXNpbmciLCAiZnJhbWUiLCAic3RhcnQiLCAiI3RyYWNrUHJvZ3Jlc3MiLCAiI3dpcmVUcmlnZ2VyIiwgImxhc3QiLCAicmV2ZXJzZU9uRXhpdCIsICJwbGF5Rm9yd2FyZCIsICJwbGF5QmFja3dhcmQiLCAiZW50ZXIiLCAibGVhdmUiLCAib25FbnRlciIsICJvbkxlYXZlIiwgImZvcndhcmQiLCAib25DbGljayIsICJhcHBseSIsICJ1bnN1YnNjcmliZSIsICIjZWFjaCIsICJhdCIsICJyYXRlIiwgImFuaW1hdGFibGUiLCAiaXNBbmltYXRhYmxlVmFsdWUiLCAic3R5bGVUZW1wbGF0ZUlkIiwgInJlYWRSZWFjdGl2ZU51bWJlciIsICJzbG90IiwgImN1cnJlbnQiLCAiZ2V0UmVhY3RpdmVJbml0aWFsTnVtYmVyIiwgInJlcGxhY2VUeXBlZE1hcmtlcnMiLCAic2xvdHMiLCAiaXNEaXJlY3RTbG90VmFsdWUiLCAiZXNjYXBlZE1hcmtlciIsICJzZXJpYWxpemVBbmltYXRhYmxlQ3NzVmFsdWUiLCAiaXNEaXJlY3RTbG90VW5pdFByb2R1Y3QiLCAiZXNjYXBlZFVuaXQiLCAic2V0UGFyc2VkVHlwZWRWYWx1ZSIsICJzdHlsZU1hcCIsICJwcm9wZXJ0eSIsICJ0b2tlbml6ZU51bWVyaWNDU1MiLCAidmFyaWFibGUiLCAiTnVtZXJpY1R5cGVkT01QYXJzZXIiLCAicmVhY3RpdmVCeU1hcmtlciIsICJ0eXBlZEJ5TWFya2VyIiwgInJlYWN0aXZlIiwgImNoZWNrcG9pbnQiLCAicmhzIiwgImxlYWYiLCAidHlwZWQiLCAiYnVpbGROdW1lcmljVHlwZWRPTVRyZWUiLCAicmVhY3RpdmVTbG90cyIsICJ0eXBlZFNsb3RzIiwgImlzVHJhbnNmb3JtU3R5bGVQcm9wZXJ0eSIsICJidWlsZFRyYW5zZm9ybVR5cGVkT01UcmVlIiwgImxlYXZlcyIsICJjb21wb25lbnRzIiwgInplcm9QeCIsICJvbmVOdW1iZXIiLCAiaW5kZXgiLCAiY29uc3VtZSIsICJjb25zdW1lU3ltYm9sIiwgInBhcnNlQXJndW1lbnQiLCAic2xpY2UiLCAidHJlZSIsICJwYXJzZUFyZ3VtZW50TGlzdCIsICJjcmVhdGVDb21wb25lbnQiLCAiY3RvciIsICJjbGFzc05hbWUiLCAiQ3RvciIsICJUcmFuc2xhdGUiLCAiU2NhbGUiLCAiUm90YXRlIiwgIlNrZXciLCAiQ1NTVHJhbnNmb3JtVmFsdWVDdG9yIiwgImJ1aWxkVHlwZWRPTVN0eWxlVmFsdWUiLCAiYWRkTXV0YWJsZUxlYXZlcyIsICJhdHRhY2hMZWFmVGFyZ2V0cyIsICJhcHBseVN0eWxlVGVtcGxhdGUiLCAidmFyaWFibGVzIiwgImFuaW1hdGFibGVTbG90cyIsICJwcm9iZSIsICJtdXRhYmxlTGVhdmVzIiwgInJlcXVpcmVkQ1NTVmFyaWFibGVzIiwgInN1YnNjcmlwdGlvbnMiLCAicHJvcGVydHlNb2RlT3duZWQiLCAicGFyc2VkVmFsdWUiLCAiaW5pdGlhbE51bWJlciIsICJlbnN1cmVSZWdpc3RlcmVkTnVtYmVyUHJvcGVydHkiLCAicHJpb3JpdHkiLCAidXNlZFR5cGVkU2xvdHMiLCAidXNlZFJlYWN0aXZlU2xvdHMiLCAiY2FuVXNlVHlwZWRPTSIsICJhcHBsaWVkVGhyb3VnaFR5cGVkT00iLCAiZGlyZWN0U2xvdCIsICJsaW5rZWRWYWx1ZSIsICJDU1NNYXRoUHJvZHVjdEN0b3IiLCAicHJvZHVjdCIsICJyZWNvbnN0cnVjdGVkIiwgIm5lZWRzQ1NTVmFyaWFibGUiLCAic3Vic2NyaXB0aW9uIiwgIm5leHRWYWx1ZSIsICJkaXJ0eVJvb3RzIiwgInByb3BlcnR5TmFtZSIsICJjb21wbGlsZVN0YXRpY0NTU1RleHQiLCAiZm9yUmV0dXJuIiwgInByb3BlcnRpZXMiLCAiUyIsICJzdHJpbmdzIiwgInRlbXBsYXRlSWQiLCAiY29uc3VtZWQiLCAibmV4dFRleHQiLCAiYXR0YWNoZWRVbml0IiwgImluaXRpYWxWYWx1ZSIsICJ0eXBlIiwgInNwbGl0SW5saW5lU3R5bGVQbGFjZWhvbGRlcnMiLCAiYXR0cmlidXRlcyIsICJwYXR0ZXJuIiwgImF0dHJpYnV0ZUluZGV4IiwgImpvaW5TdGF0aWNJbmxpbmVTdHlsZSIsICJjb21waWxlSW5saW5lU3R5bGVBdHRyaWJ1dGUiLCAiYmluZFN0eWxlIiwgInN0eWxlZCIsICJwYXJzZVByb3BlcnR5TGlzdCIsICJmcm9tU3RyaW5nIiwgIiRwYWlyIiwgInBhcnNlQW5pbWF0aW9uVGVtcGxhdGUiLCAiZnVsbFRleHQiLCAidmFsdWVUZXh0IiwgInNsb3RNYXRjaCIsICJzbG90VmFsdWUiLCAicHJvY2Vzc0FuaW1hdGlvblZhbHVlcyIsICJyZXNvbHZlZCIsICJyZWFjdGl2ZUluZGljZXMiLCAiaGFzUmVhY3RpdmUiLCAiYnVpbGRXZWJBbmltYXRpb25LZXlmcmFtZXMiLCAiZ2xvYmFsT2Zmc2V0cyIsICJwcm9wZXJ0eUxpc3QiLCAibWF4TGVuZ3RoIiwgInAiLCAiXyIsICJmcmFtZXMiLCAia2ViYWJQcm9wIiwgImJ1aWxkQW5pbWF0aW9uVGltaW5nIiwgImR1cmF0aW9uIiwgImRlbGF5IiwgIml0ZXJhdGlvbnMiLCAiY3JlYXRlUmVhY3RpdmVBbmltYXRpb24iLCAicmVhY3RpdmVWYWx1ZSIsICJuZXdGcmFtZXMiLCAiY3VycmVudFRpbWUiLCAic3ViIiwgIkEiLCAiZG9BbmltYXRpb24iLCAiY29uZmlnIiwgImtleWZyYW1lcyIsICJhbmltYXRlIiwgImRlZmluZUFuaW1hdGlvbiIsICJzZXF1ZW5jZUFuaW1hdGlvbnMiLCAic2VxdWVuY2UiLCAicGFyYWxsZWxBbmltYXRpb25zIiwgImFuaW1hdGlvbnMiLCAicmVzdWx0cyIsICJjbGVhbnVwIiwgInN0YWdnZXJBbmltYXRpb24iLCAiZWxlbWVudHMiLCAic3RhZ2dlckRlbGF5Il0KfQo=
