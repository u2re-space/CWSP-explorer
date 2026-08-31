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
}, hn = (e) => !!e && typeof e == "object" && "ref" in e && typeof e?.unbind == "function", Ie = (e, t, r, n) => {
  const o = hn(r) ? r : null;
  o && (o.bind?.(), r = o.ref), n?.(e, t, r);
  const i = Ge(e), s = Ge(r), a = rr?.([r, "value"], (c) => {
    const u = Ze(i), d = Ze(s), y = Ye(d) ?? Ye(c);
    n?.(u, t, y);
  }), l = () => {
    o?.unbind?.(), a?.();
  };
  return tr(r, Symbol.dispose, l), l;
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
}, yn = (e) => {
  e && (e.styles != null && jt(e, e.styles), He(e), Q(e, Ht(e)));
}, Ce = [], Ee = !1, mn = (e) => {
  !e || !(e instanceof Element) || Se.has(e) || (Se.add(e), Ce.push(e), !Ee && (Ee = !0, queueMicrotask(() => {
    Ee = !1;
    const t = Ce;
    Ce = [];
    for (const r of t)
      Se.delete(r), r.isConnected && yn(r);
  })));
};
Bt((e) => mn(e));
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
  Ie as bindWith,
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
  yn as ensureHostStyles,
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
  ut as handleStyleChange,
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
  mn as scheduleEnsureHostStyles,
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
