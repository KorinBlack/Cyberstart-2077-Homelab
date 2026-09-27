/* React server renderer used for favicon SVG. Shared scope; build with node scripts/build.cjs. */

var S = o(e => {
  var t = u();
  function n(e) {
    for (var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
    return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  var r = Object.prototype.hasOwnProperty,
    i = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    a = {},
    o = {};
  function s(e) {
    return r.call(o, e) ? !0 : r.call(a, e) ? !1 : i.test(e) ? o[e] = !0 : (a[e] = !0, !1);
  }
  function c(e, t, n, r, i, a, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
  }
  var l = {};
  `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function (e) {
    l[e] = new c(e, 0, !1, e, null, !1, !1);
  }), [[`acceptCharset`, `accept-charset`], [`className`, `class`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`]].forEach(function (e) {
    var t = e[0];
    l[t] = new c(t, 1, !1, e[1], null, !1, !1);
  }), [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
    l[e] = new c(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(function (e) {
    l[e] = new c(e, 2, !1, e, null, !1, !1);
  }), `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function (e) {
    l[e] = new c(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
    l[e] = new c(e, 3, !0, e, null, !1, !1);
  }), [`capture`, `download`].forEach(function (e) {
    l[e] = new c(e, 4, !1, e, null, !1, !1);
  }), [`cols`, `rows`, `size`, `span`].forEach(function (e) {
    l[e] = new c(e, 6, !1, e, null, !1, !1);
  }), [`rowSpan`, `start`].forEach(function (e) {
    l[e] = new c(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var d = /[\-:]([a-z])/g;
  function f(e) {
    return e[1].toUpperCase();
  }
  `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function (e) {
    var t = e.replace(d, f);
    l[t] = new c(t, 1, !1, e, null, !1, !1);
  }), `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function (e) {
    var t = e.replace(d, f);
    l[t] = new c(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
  }), [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
    var t = e.replace(d, f);
    l[t] = new c(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
  }), [`tabIndex`, `crossOrigin`].forEach(function (e) {
    l[e] = new c(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), l.xlinkHref = new c(`xlinkHref`, 1, !1, `xlink:href`, `http://www.w3.org/1999/xlink`, !0, !1), [`src`, `href`, `action`, `formAction`].forEach(function (e) {
    l[e] = new c(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var p = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
    m = [`Webkit`, `ms`, `Moz`, `O`];
  Object.keys(p).forEach(function (e) {
    m.forEach(function (t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), p[t] = p[e];
    });
  });
  var h = /["'&<>]/;
  function g(e) {
    if (typeof e == `boolean` || typeof e == `number`) return `` + e;
    e = `` + e;
    var t = h.exec(e);
    if (t) {
      var n = ``,
        r,
        i = 0;
      for (r = t.index; r < e.length; r++) {
        switch (e.charCodeAt(r)) {
          case 34:
            t = `&quot;`;
            break;
          case 38:
            t = `&amp;`;
            break;
          case 39:
            t = `&#x27;`;
            break;
          case 60:
            t = `&lt;`;
            break;
          case 62:
            t = `&gt;`;
            break;
          default:
            continue;
        }
        i !== r && (n += e.substring(i, r)), i = r + 1, n += t;
      }
      e = i === r ? n : n + e.substring(i, r);
    }
    return e;
  }
  var _ = /([A-Z])/g,
    v = /^ms-/,
    y = Array.isArray;
  function b(e, t) {
    return {
      insertionMode: e,
      selectedValue: t
    };
  }
  function x(e, t, n) {
    switch (t) {
      case `select`:
        return b(1, n.value == null ? n.defaultValue : n.value);
      case `svg`:
        return b(2, null);
      case `math`:
        return b(3, null);
      case `foreignObject`:
        return b(1, null);
      case `table`:
        return b(4, null);
      case `thead`:
      case `tbody`:
      case `tfoot`:
        return b(5, null);
      case `colgroup`:
        return b(7, null);
      case `tr`:
        return b(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? b(1, null) : e;
  }
  var S = new Map();
  function C(e, t, i) {
    if (typeof i != `object`) throw Error(n(62));
    for (var a in t = !0, i) if (r.call(i, a)) {
      var o = i[a];
      if (o != null && typeof o != `boolean` && o !== ``) {
        if (a.indexOf(`--`) === 0) {
          var s = g(a);
          o = g((`` + o).trim());
        } else {
          s = a;
          var c = S.get(s);
          c === void 0 ? (c = g(s.replace(_, `-$1`).toLowerCase().replace(v, `-ms-`)), S.set(s, c), s = c) : s = c, o = typeof o == `number` ? o === 0 || r.call(p, a) ? `` + o : o + `px` : g((`` + o).trim());
        }
        t ? (t = !1, e.push(` style="`, s, `:`, o)) : e.push(`;`, s, `:`, o);
      }
    }
    t || e.push(`"`);
  }
  function w(e, t, n, r) {
    switch (n) {
      case `style`:
        C(e, t, r);
        return;
      case `defaultValue`:
      case `defaultChecked`:
      case `innerHTML`:
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
        return;
    }
    if (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) {
      if (t = l.hasOwnProperty(n) ? l[n] : null, t !== null) {
        switch (typeof r) {
          case `function`:
          case `symbol`:
            return;
          case `boolean`:
            if (!t.acceptsBooleans) return;
        }
        switch (n = t.attributeName, t.type) {
          case 3:
            r && e.push(` `, n, `=""`);
            break;
          case 4:
            !0 === r ? e.push(` `, n, `=""`) : !1 !== r && e.push(` `, n, `="`, g(r), `"`);
            break;
          case 5:
            isNaN(r) || e.push(` `, n, `="`, g(r), `"`);
            break;
          case 6:
            !isNaN(r) && 1 <= r && e.push(` `, n, `="`, g(r), `"`);
            break;
          default:
            t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, g(r), `"`);
        }
      } else if (s(n)) {
        switch (typeof r) {
          case `function`:
          case `symbol`:
            return;
          case `boolean`:
            if (t = n.toLowerCase().slice(0, 5), t !== `data-` && t !== `aria-`) return;
        }
        e.push(` `, n, `="`, g(r), `"`);
      }
    }
  }
  function T(e, t, r) {
    if (t != null) {
      if (r != null) throw Error(n(60));
      if (typeof t != `object` || !(`__html` in t)) throw Error(n(61));
      t = t.__html, t != null && e.push(`` + t);
    }
  }
  function ee(e) {
    var n = ``;
    return t.Children.forEach(e, function (e) {
      e != null && (n += e);
    }), n;
  }
  function E(e, t, n, i) {
    e.push(k(n));
    var a = n = null,
      o;
    for (o in t) if (r.call(t, o)) {
      var s = t[o];
      if (s != null) switch (o) {
        case `children`:
          n = s;
          break;
        case `dangerouslySetInnerHTML`:
          a = s;
          break;
        default:
          w(e, i, o, s);
      }
    }
    return e.push(`>`), T(e, a, n), typeof n == `string` ? (e.push(g(n)), null) : n;
  }
  var D = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    O = new Map();
  function k(e) {
    var t = O.get(e);
    if (t === void 0) {
      if (!D.test(e)) throw Error(n(65, e));
      t = `<` + e, O.set(e, t);
    }
    return t;
  }
  function te(e, t, i, a, o) {
    switch (t) {
      case `select`:
        e.push(k(`select`));
        var c = null,
          l = null;
        for (p in i) if (r.call(i, p)) {
          var u = i[p];
          if (u != null) switch (p) {
            case `children`:
              c = u;
              break;
            case `dangerouslySetInnerHTML`:
              l = u;
              break;
            case `defaultValue`:
            case `value`:
              break;
            default:
              w(e, a, p, u);
          }
        }
        return e.push(`>`), T(e, l, c), c;
      case `option`:
        l = o.selectedValue, e.push(k(`option`));
        var d = u = null,
          f = null,
          p = null;
        for (c in i) if (r.call(i, c)) {
          var m = i[c];
          if (m != null) switch (c) {
            case `children`:
              u = m;
              break;
            case `selected`:
              f = m;
              break;
            case `dangerouslySetInnerHTML`:
              p = m;
              break;
            case `value`:
              d = m;
            default:
              w(e, a, c, m);
          }
        }
        if (l != null) {
          if (i = d === null ? ee(u) : `` + d, y(l)) {
            for (a = 0; a < l.length; a++) if (`` + l[a] === i) {
              e.push(` selected=""`);
              break;
            }
          } else `` + l === i && e.push(` selected=""`);
        } else f && e.push(` selected=""`);
        return e.push(`>`), T(e, p, u), u;
      case `textarea`:
        for (u in e.push(k(`textarea`)), p = l = c = null, i) if (r.call(i, u) && (d = i[u], d != null)) switch (u) {
          case `children`:
            p = d;
            break;
          case `value`:
            c = d;
            break;
          case `defaultValue`:
            l = d;
            break;
          case `dangerouslySetInnerHTML`:
            throw Error(n(91));
          default:
            w(e, a, u, d);
        }
        if (c === null && l !== null && (c = l), e.push(`>`), p != null) {
          if (c != null) throw Error(n(92));
          if (y(p) && 1 < p.length) throw Error(n(93));
          c = `` + p;
        }
        return typeof c == `string` && c[0] === `
` && e.push(`
`), c !== null && e.push(g(`` + c)), null;
      case `input`:
        for (l in e.push(k(`input`)), d = p = u = c = null, i) if (r.call(i, l) && (f = i[l], f != null)) switch (l) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(n(399, `input`));
          case `defaultChecked`:
            d = f;
            break;
          case `defaultValue`:
            u = f;
            break;
          case `checked`:
            p = f;
            break;
          case `value`:
            c = f;
            break;
          default:
            w(e, a, l, f);
        }
        return p === null ? d !== null && w(e, a, `checked`, d) : w(e, a, `checked`, p), c === null ? u !== null && w(e, a, `value`, u) : w(e, a, `value`, c), e.push(`/>`), null;
      case `menuitem`:
        for (var h in e.push(k(`menuitem`)), i) if (r.call(i, h) && (c = i[h], c != null)) switch (h) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(n(400));
          default:
            w(e, a, h, c);
        }
        return e.push(`>`), null;
      case `title`:
        for (m in e.push(k(`title`)), c = null, i) if (r.call(i, m) && (l = i[m], l != null)) switch (m) {
          case `children`:
            c = l;
            break;
          case `dangerouslySetInnerHTML`:
            throw Error(n(434));
          default:
            w(e, a, m, l);
        }
        return e.push(`>`), c;
      case `listing`:
      case `pre`:
        for (d in e.push(k(t)), l = c = null, i) if (r.call(i, d) && (u = i[d], u != null)) switch (d) {
          case `children`:
            c = u;
            break;
          case `dangerouslySetInnerHTML`:
            l = u;
            break;
          default:
            w(e, a, d, u);
        }
        if (e.push(`>`), l != null) {
          if (c != null) throw Error(n(60));
          if (typeof l != `object` || !(`__html` in l)) throw Error(n(61));
          i = l.__html, i != null && (typeof i == `string` && 0 < i.length && i[0] === `
` ? e.push(`
`, i) : e.push(`` + i));
        }
        return typeof c == `string` && c[0] === `
` && e.push(`
`), c;
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        for (var _ in e.push(k(t)), i) if (r.call(i, _) && (c = i[_], c != null)) switch (_) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(n(399, t));
          default:
            w(e, a, _, c);
        }
        return e.push(`/>`), null;
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return E(e, i, t, a);
      case `html`:
        return o.insertionMode === 0 && e.push(`<!DOCTYPE html>`), E(e, i, t, a);
      default:
        if (t.indexOf(`-`) === -1 && typeof i.is != `string`) return E(e, i, t, a);
        for (f in e.push(k(t)), l = c = null, i) if (r.call(i, f) && (u = i[f], u != null)) switch (f) {
          case `children`:
            c = u;
            break;
          case `dangerouslySetInnerHTML`:
            l = u;
            break;
          case `style`:
            C(e, a, u);
            break;
          case `suppressContentEditableWarning`:
          case `suppressHydrationWarning`:
            break;
          default:
            s(f) && typeof u != `function` && typeof u != `symbol` && e.push(` `, f, `="`, g(u), `"`);
        }
        return e.push(`>`), T(e, l, c), c;
    }
  }
  function A(e, t, r) {
    if (e.push(`<!--$?--><template id="`), r === null) throw Error(n(395));
    return e.push(r), e.push(`"></template>`);
  }
  function ne(e, t, r, i) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return e.push(`<div hidden id="`), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(`">`);
      case 2:
        return e.push(`<svg aria-hidden="true" style="display:none" id="`), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(`">`);
      case 3:
        return e.push(`<math aria-hidden="true" style="display:none" id="`), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(`">`);
      case 4:
        return e.push(`<table hidden id="`), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(`">`);
      case 5:
        return e.push(`<table hidden><tbody id="`), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(`">`);
      case 6:
        return e.push(`<table hidden><tr id="`), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(`">`);
      case 7:
        return e.push(`<table hidden><colgroup id="`), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(`">`);
      default:
        throw Error(n(397));
    }
  }
  function j(e, t) {
    switch (t.insertionMode) {
      case 0:
      case 1:
        return e.push(`</div>`);
      case 2:
        return e.push(`</svg>`);
      case 3:
        return e.push(`</math>`);
      case 4:
        return e.push(`</table>`);
      case 5:
        return e.push(`</tbody></table>`);
      case 6:
        return e.push(`</tr></table>`);
      case 7:
        return e.push(`</colgroup></table>`);
      default:
        throw Error(n(397));
    }
  }
  var M = /[<\u2028\u2029]/g;
  function re(e) {
    return JSON.stringify(e).replace(M, function (e) {
      switch (e) {
        case `<`:
          return `\\u003c`;
        case `\u2028`:
          return `\\u2028`;
        case `\u2029`:
          return `\\u2029`;
        default:
          throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`);
      }
    });
  }
  function N(e, t) {
    return t = t === void 0 ? `` : t, {
      bootstrapChunks: [],
      startInlineScript: `<script>`,
      placeholderPrefix: t + `P:`,
      segmentPrefix: t + `S:`,
      boundaryPrefix: t + `B:`,
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e
    };
  }
  function ie(e, t, n, r) {
    return n.generateStaticMarkup ? (e.push(g(t)), !1) : (t === `` ? e = r : (r && e.push(`<!-- -->`), e.push(g(t)), e = !0), e);
  }
  var P = Object.assign,
    ae = Symbol.for(`react.element`),
    F = Symbol.for(`react.portal`),
    oe = Symbol.for(`react.fragment`),
    se = Symbol.for(`react.strict_mode`),
    ce = Symbol.for(`react.profiler`),
    I = Symbol.for(`react.provider`),
    le = Symbol.for(`react.context`),
    L = Symbol.for(`react.forward_ref`),
    ue = Symbol.for(`react.suspense`),
    de = Symbol.for(`react.suspense_list`),
    fe = Symbol.for(`react.memo`),
    R = Symbol.for(`react.lazy`),
    pe = Symbol.for(`react.scope`),
    me = Symbol.for(`react.debug_trace_mode`),
    he = Symbol.for(`react.legacy_hidden`),
    ge = Symbol.for(`react.default_value`),
    _e = Symbol.iterator;
  function ve(e) {
    if (e == null) return null;
    if (typeof e == `function`) return e.displayName || e.name || null;
    if (typeof e == `string`) return e;
    switch (e) {
      case oe:
        return `Fragment`;
      case F:
        return `Portal`;
      case ce:
        return `Profiler`;
      case se:
        return `StrictMode`;
      case ue:
        return `Suspense`;
      case de:
        return `SuspenseList`;
    }
    if (typeof e == `object`) switch (e.$$typeof) {
      case le:
        return (e.displayName || `Context`) + `.Consumer`;
      case I:
        return (e._context.displayName || `Context`) + `.Provider`;
      case L:
        var t = e.render;
        return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
      case fe:
        return t = e.displayName || null, t === null ? ve(e.type) || `Memo` : t;
      case R:
        t = e._payload, e = e._init;
        try {
          return ve(e(t));
        } catch {}
    }
    return null;
  }
  var ye = {};
  function z(e, t) {
    if (e = e.contextTypes, !e) return ye;
    var n = {},
      r;
    for (r in e) n[r] = t[r];
    return n;
  }
  var B = null;
  function V(e, t) {
    if (e !== t) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var r = t.parent;
      if (e === null) {
        if (r !== null) throw Error(n(401));
      } else {
        if (r === null) throw Error(n(401));
        V(e, r);
      }
      t.context._currentValue2 = t.value;
    }
  }
  function be(e) {
    e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && be(e);
  }
  function xe(e) {
    var t = e.parent;
    t !== null && xe(t), e.context._currentValue2 = e.value;
  }
  function Se(e, t) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(n(402));
    e.depth === t.depth ? V(e, t) : Se(e, t);
  }
  function Ce(e, t) {
    var r = t.parent;
    if (r === null) throw Error(n(402));
    e.depth === r.depth ? V(e, r) : Ce(e, r), t.context._currentValue2 = t.value;
  }
  function we(e) {
    var t = B;
    t !== e && (t === null ? xe(e) : e === null ? be(t) : t.depth === e.depth ? V(t, e) : t.depth > e.depth ? Se(t, e) : Ce(t, e), B = e);
  }
  var Te = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (e, t) {
      e = e._reactInternals, e.queue !== null && e.queue.push(t);
    },
    enqueueReplaceState: function (e, t) {
      e = e._reactInternals, e.replace = !0, e.queue = [t];
    },
    enqueueForceUpdate: function () {}
  };
  function Ee(e, t, n, r) {
    var i = e.state === void 0 ? null : e.state;
    e.updater = Te, e.props = n, e.state = i;
    var a = {
      queue: [],
      replace: !1
    };
    e._reactInternals = a;
    var o = t.contextType;
    if (e.context = typeof o == `object` && o ? o._currentValue2 : r, o = t.getDerivedStateFromProps, typeof o == `function` && (o = o(n, i), i = o == null ? i : P({}, i, o), e.state = i), typeof t.getDerivedStateFromProps != `function` && typeof e.getSnapshotBeforeUpdate != `function` && (typeof e.UNSAFE_componentWillMount == `function` || typeof e.componentWillMount == `function`)) {
      if (t = e.state, typeof e.componentWillMount == `function` && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(), t !== e.state && Te.enqueueReplaceState(e, e.state, null), a.queue !== null && 0 < a.queue.length) {
        if (t = a.queue, o = a.replace, a.queue = null, a.replace = !1, o && t.length === 1) e.state = t[0];else {
          for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
            var s = t[o];
            s = typeof s == `function` ? s.call(e, a, n, r) : s, s != null && (i ? (i = !1, a = P({}, a, s)) : P(a, s));
          }
          e.state = a;
        }
      } else a.queue = null;
    }
  }
  var De = {
    id: 1,
    overflow: ``
  };
  function Oe(e, t, n) {
    var r = e.id;
    e = e.overflow;
    var i = 32 - ke(r) - 1;
    r &= ~(1 << i), n += 1;
    var a = 32 - ke(t) + i;
    if (30 < a) {
      var o = i - i % 5;
      return a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, {
        id: 1 << 32 - ke(t) + i | n << i | r,
        overflow: a + e
      };
    }
    return {
      id: 1 << a | n << i | r,
      overflow: e
    };
  }
  var ke = Math.clz32 ? Math.clz32 : Me,
    Ae = Math.log,
    je = Math.LN2;
  function Me(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ae(e) / je | 0) | 0;
  }
  function Ne(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
  }
  var Pe = typeof Object.is == `function` ? Object.is : Ne,
    Fe = null,
    Ie = null,
    Le = null,
    H = null,
    Re = !1,
    ze = !1,
    Be = 0,
    Ve = null,
    He = 0;
  function Ue() {
    if (Fe === null) throw Error(n(321));
    return Fe;
  }
  function We() {
    if (0 < He) throw Error(n(312));
    return {
      memoizedState: null,
      queue: null,
      next: null
    };
  }
  function Ge() {
    return H === null ? Le === null ? (Re = !1, Le = H = We()) : (Re = !0, H = Le) : H.next === null ? (Re = !1, H = H.next = We()) : (Re = !0, H = H.next), H;
  }
  function Ke() {
    Ie = Fe = null, ze = !1, Le = null, He = 0, H = Ve = null;
  }
  function qe(e, t) {
    return typeof t == `function` ? t(e) : t;
  }
  function Je(e, t, n) {
    if (Fe = Ue(), H = Ge(), Re) {
      var r = H.queue;
      if (t = r.dispatch, Ve !== null && (n = Ve.get(r), n !== void 0)) {
        Ve.delete(r), r = H.memoizedState;
        do r = e(r, n.action), n = n.next; while (n !== null);
        return H.memoizedState = r, [r, t];
      }
      return [H.memoizedState, t];
    }
    return e = e === qe ? typeof t == `function` ? t() : t : n === void 0 ? t : n(t), H.memoizedState = e, e = H.queue = {
      last: null,
      dispatch: null
    }, e = e.dispatch = Xe.bind(null, Fe, e), [H.memoizedState, e];
  }
  function Ye(e, t) {
    if (Fe = Ue(), H = Ge(), t = t === void 0 ? null : t, H !== null) {
      var n = H.memoizedState;
      if (n !== null && t !== null) {
        var r = n[1];
        a: if (r === null) r = !1;else {
          for (var i = 0; i < r.length && i < t.length; i++) if (!Pe(t[i], r[i])) {
            r = !1;
            break a;
          }
          r = !0;
        }
        if (r) return n[0];
      }
    }
    return e = e(), H.memoizedState = [e, t], e;
  }
  function Xe(e, t, r) {
    if (25 <= He) throw Error(n(301));
    if (e === Fe) {
      if (ze = !0, e = {
        action: r,
        next: null
      }, Ve === null && (Ve = new Map()), r = Ve.get(t), r === void 0) Ve.set(t, e);else {
        for (t = r; t.next !== null;) t = t.next;
        t.next = e;
      }
    }
  }
  function Ze() {
    throw Error(n(394));
  }
  function Qe() {}
  var $e = {
      readContext: function (e) {
        return e._currentValue2;
      },
      useContext: function (e) {
        return Ue(), e._currentValue2;
      },
      useMemo: Ye,
      useReducer: Je,
      useRef: function (e) {
        Fe = Ue(), H = Ge();
        var t = H.memoizedState;
        return t === null ? (e = {
          current: e
        }, H.memoizedState = e) : t;
      },
      useState: function (e) {
        return Je(qe, e);
      },
      useInsertionEffect: Qe,
      useLayoutEffect: function () {},
      useCallback: function (e, t) {
        return Ye(function () {
          return e;
        }, t);
      },
      useImperativeHandle: Qe,
      useEffect: Qe,
      useDebugValue: Qe,
      useDeferredValue: function (e) {
        return Ue(), e;
      },
      useTransition: function () {
        return Ue(), [!1, Ze];
      },
      useId: function () {
        var e = Ie.treeContext,
          t = e.overflow;
        e = e.id, e = (e & ~(1 << 32 - ke(e) - 1)).toString(32) + t;
        var r = et;
        if (r === null) throw Error(n(404));
        return t = Be++, e = `:` + r.idPrefix + `R` + e, 0 < t && (e += `H` + t.toString(32)), e + `:`;
      },
      useMutableSource: function (e, t) {
        return Ue(), t(e._source);
      },
      useSyncExternalStore: function (e, t, r) {
        if (r === void 0) throw Error(n(407));
        return r();
      }
    },
    et = null,
    tt = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function nt(e) {
    return console.error(e), null;
  }
  function rt() {}
  function it(e, t, n, r, i, a, o, s, c) {
    var l = [],
      u = new Set();
    return t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? nt : i,
      onAllReady: a === void 0 ? rt : a,
      onShellReady: o === void 0 ? rt : o,
      onShellError: s === void 0 ? rt : s,
      onFatalError: c === void 0 ? rt : c
    }, n = ot(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = at(t, e, null, n, u, ye, null, De), l.push(e), t;
  }
  function at(e, t, n, r, i, a, o, s) {
    e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
    var c = {
      node: t,
      ping: function () {
        var t = e.pingedTasks;
        t.push(c), t.length === 1 && yt(e);
      },
      blockedBoundary: n,
      blockedSegment: r,
      abortSet: i,
      legacyContext: a,
      context: o,
      treeContext: s
    };
    return i.add(c), c;
  }
  function ot(e, t, n, r, i, a) {
    return {
      status: 0,
      id: -1,
      index: t,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: r,
      boundary: n,
      lastPushedText: i,
      textEmbedded: a
    };
  }
  function st(e, t) {
    if (e = e.onError(t), e != null && typeof e != `string`) throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` + typeof e + `" instead`);
    return e;
  }
  function ct(e, t) {
    var n = e.onShellError;
    n(t), n = e.onFatalError, n(t), e.destination === null ? (e.status = 1, e.fatalError = t) : (e.status = 2, e.destination.destroy(t));
  }
  function lt(e, t, n, r, i) {
    for (Fe = {}, Ie = t, Be = 0, e = n(r, i); ze;) ze = !1, Be = 0, He += 1, H = null, e = n(r, i);
    return Ke(), e;
  }
  function ut(e, t, r, i) {
    var a = r.render(),
      o = i.childContextTypes;
    if (o != null) {
      var s = t.legacyContext;
      if (typeof r.getChildContext != `function`) i = s;else {
        for (var c in r = r.getChildContext(), r) if (!(c in o)) throw Error(n(108, ve(i) || `Unknown`, c));
        i = P({}, s, r);
      }
      t.legacyContext = i, U(e, t, a), t.legacyContext = s;
    } else U(e, t, a);
  }
  function dt(e, t) {
    if (e && e.defaultProps) {
      for (var n in t = P({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ft(e, t, r, i, a) {
    if (typeof r == `function`) {
      if (r.prototype && r.prototype.isReactComponent) {
        a = z(r, t.legacyContext);
        var o = r.contextType;
        o = new r(i, typeof o == `object` && o ? o._currentValue2 : a), Ee(o, r, i, a), ut(e, t, o, r);
      } else {
        o = z(r, t.legacyContext), a = lt(e, t, r, i, o);
        var s = Be !== 0;
        if (typeof a == `object` && a && typeof a.render == `function` && a.$$typeof === void 0) Ee(a, r, i, o), ut(e, t, a, r);else if (s) {
          i = t.treeContext, t.treeContext = Oe(i, 1, 0);
          try {
            U(e, t, a);
          } finally {
            t.treeContext = i;
          }
        } else U(e, t, a);
      }
    } else if (typeof r == `string`) {
      switch (a = t.blockedSegment, o = te(a.chunks, r, i, e.responseState, a.formatContext), a.lastPushedText = !1, s = a.formatContext, a.formatContext = x(s, r, i), mt(e, t, o), a.formatContext = s, r) {
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `img`:
        case `input`:
        case `keygen`:
        case `link`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
          break;
        default:
          a.chunks.push(`</`, r, `>`);
      }
      a.lastPushedText = !1;
    } else {
      switch (r) {
        case he:
        case me:
        case se:
        case ce:
        case oe:
          U(e, t, i.children);
          return;
        case de:
          U(e, t, i.children);
          return;
        case pe:
          throw Error(n(343));
        case ue:
          a: {
            r = t.blockedBoundary, a = t.blockedSegment, o = i.fallback, i = i.children, s = new Set();
            var c = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: s,
                errorDigest: null
              },
              l = ot(e, a.chunks.length, c, a.formatContext, !1, !1);
            a.children.push(l), a.lastPushedText = !1;
            var u = ot(e, 0, null, a.formatContext, !1, !1);
            u.parentFlushed = !0, t.blockedBoundary = c, t.blockedSegment = u;
            try {
              if (mt(e, t, i), e.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push(`<!-- -->`), u.status = 1, _t(c, u), c.pendingTasks === 0) break a;
            } catch (t) {
              u.status = 4, c.forceClientRender = !0, c.errorDigest = st(e, t);
            } finally {
              t.blockedBoundary = r, t.blockedSegment = a;
            }
            t = at(e, o, r, l, s, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
          }
          return;
      }
      if (typeof r == `object` && r) switch (r.$$typeof) {
        case L:
          if (i = lt(e, t, r.render, i, a), Be !== 0) {
            r = t.treeContext, t.treeContext = Oe(r, 1, 0);
            try {
              U(e, t, i);
            } finally {
              t.treeContext = r;
            }
          } else U(e, t, i);
          return;
        case fe:
          r = r.type, i = dt(r, i), ft(e, t, r, i, a);
          return;
        case I:
          if (a = i.children, r = r._context, i = i.value, o = r._currentValue2, r._currentValue2 = i, s = B, B = i = {
            parent: s,
            depth: s === null ? 0 : s.depth + 1,
            context: r,
            parentValue: o,
            value: i
          }, t.context = i, U(e, t, a), e = B, e === null) throw Error(n(403));
          i = e.parentValue, e.context._currentValue2 = i === ge ? e.context._defaultValue : i, e = B = e.parent, t.context = e;
          return;
        case le:
          i = i.children, i = i(r._currentValue2), U(e, t, i);
          return;
        case R:
          a = r._init, r = a(r._payload), i = dt(r, i), ft(e, t, r, i, void 0);
          return;
      }
      throw Error(n(130, r == null ? r : typeof r, ``));
    }
  }
  function U(e, t, r) {
    if (t.node = r, typeof r == `object` && r) {
      switch (r.$$typeof) {
        case ae:
          ft(e, t, r.type, r.props, r.ref);
          return;
        case F:
          throw Error(n(257));
        case R:
          var i = r._init;
          r = i(r._payload), U(e, t, r);
          return;
      }
      if (y(r)) {
        pt(e, t, r);
        return;
      }
      if (typeof r != `object` || !r ? i = null : (i = _e && r[_e] || r[`@@iterator`], i = typeof i == `function` ? i : null), i &&= i.call(r)) {
        if (r = i.next(), !r.done) {
          var a = [];
          do a.push(r.value), r = i.next(); while (!r.done);
          pt(e, t, a);
        }
        return;
      }
      throw e = Object.prototype.toString.call(r), Error(n(31, e === `[object Object]` ? `object with keys {` + Object.keys(r).join(`, `) + `}` : e));
    }
    typeof r == `string` ? (i = t.blockedSegment, i.lastPushedText = ie(t.blockedSegment.chunks, r, e.responseState, i.lastPushedText)) : typeof r == `number` && (i = t.blockedSegment, i.lastPushedText = ie(t.blockedSegment.chunks, `` + r, e.responseState, i.lastPushedText));
  }
  function pt(e, t, n) {
    for (var r = n.length, i = 0; i < r; i++) {
      var a = t.treeContext;
      t.treeContext = Oe(a, r, i);
      try {
        mt(e, t, n[i]);
      } finally {
        t.treeContext = a;
      }
    }
  }
  function mt(e, t, n) {
    var r = t.blockedSegment.formatContext,
      i = t.legacyContext,
      a = t.context;
    try {
      return U(e, t, n);
    } catch (c) {
      if (Ke(), typeof c == `object` && c && typeof c.then == `function`) {
        n = c;
        var o = t.blockedSegment,
          s = ot(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
        o.children.push(s), o.lastPushedText = !1, e = at(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, we(a);
      } else throw t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, we(a), c;
    }
  }
  function ht(e) {
    var t = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, vt(this, t, e);
  }
  function gt(e, t, r) {
    var i = e.blockedBoundary;
    e.blockedSegment.status = 3, i === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (i.pendingTasks--, i.forceClientRender || (i.forceClientRender = !0, e = r === void 0 ? Error(n(432)) : r, i.errorDigest = t.onError(e), i.parentFlushed && t.clientRenderedBoundaries.push(i)), i.fallbackAbortableTasks.forEach(function (e) {
      return gt(e, t, r);
    }), i.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (i = t.onAllReady, i()));
  }
  function _t(e, t) {
    if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
      var n = t.children[0];
      n.id = t.id, n.parentFlushed = !0, n.status === 1 && _t(e, n);
    } else e.completedSegments.push(t);
  }
  function vt(e, t, r) {
    if (t === null) {
      if (r.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(n(389));
        e.completedRootSegment = r;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = rt, t = e.onShellReady, t());
    } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (r.parentFlushed && r.status === 1 && _t(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(ht, e), t.fallbackAbortableTasks.clear()) : r.parentFlushed && r.status === 1 && (_t(t, r), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function yt(e) {
    if (e.status !== 2) {
      var t = B,
        n = tt.current;
      tt.current = $e;
      var r = et;
      et = e.responseState;
      try {
        var i = e.pingedTasks,
          a;
        for (a = 0; a < i.length; a++) {
          var o = i[a],
            s = e,
            c = o.blockedSegment;
          if (c.status === 0) {
            we(o.context);
            try {
              U(s, o, o.node), s.responseState.generateStaticMarkup || c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`), o.abortSet.delete(o), c.status = 1, vt(s, o.blockedBoundary, c);
            } catch (e) {
              if (Ke(), typeof e == `object` && e && typeof e.then == `function`) {
                var l = o.ping;
                e.then(l, l);
              } else {
                o.abortSet.delete(o), c.status = 4;
                var u = o.blockedBoundary,
                  d = e,
                  f = st(s, d);
                if (u === null ? ct(s, d) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, u.errorDigest = f, u.parentFlushed && s.clientRenderedBoundaries.push(u))), s.allPendingTasks--, s.allPendingTasks === 0) {
                  var p = s.onAllReady;
                  p();
                }
              }
            }
          }
        }
        i.splice(0, a), e.destination !== null && wt(e, e.destination);
      } catch (t) {
        st(e, t), ct(e, t);
      } finally {
        et = r, tt.current = n, n === $e && we(t);
      }
    }
  }
  function bt(e, t, r) {
    switch (r.parentFlushed = !0, r.status) {
      case 0:
        var i = r.id = e.nextSegmentId++;
        return r.lastPushedText = !1, r.textEmbedded = !1, e = e.responseState, t.push(`<template id="`), t.push(e.placeholderPrefix), e = i.toString(16), t.push(e), t.push(`"></template>`);
      case 1:
        r.status = 2;
        var a = !0;
        i = r.chunks;
        var o = 0;
        r = r.children;
        for (var s = 0; s < r.length; s++) {
          for (a = r[s]; o < a.index; o++) t.push(i[o]);
          a = W(e, t, a);
        }
        for (; o < i.length - 1; o++) t.push(i[o]);
        return o < i.length && (a = t.push(i[o])), a;
      default:
        throw Error(n(390));
    }
  }
  function W(e, t, r) {
    var i = r.boundary;
    if (i === null) return bt(e, t, r);
    if (i.parentFlushed = !0, i.forceClientRender) return e.responseState.generateStaticMarkup || (i = i.errorDigest, t.push(`<!--$!-->`), t.push(`<template`), i && (t.push(` data-dgst="`), i = g(i), t.push(i), t.push(`"`)), t.push(`></template>`)), bt(e, t, r), e = e.responseState.generateStaticMarkup ? !0 : t.push(`<!--/$-->`), e;
    if (0 < i.pendingTasks) {
      i.rootSegmentID = e.nextSegmentId++, 0 < i.completedSegments.length && e.partialBoundaries.push(i);
      var a = e.responseState,
        o = a.nextSuspenseID++;
      return a = a.boundaryPrefix + o.toString(16), i = i.id = a, A(t, e.responseState, i), bt(e, t, r), t.push(`<!--/$-->`);
    }
    if (i.byteSize > e.progressiveChunkSize) return i.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(i), A(t, e.responseState, i.id), bt(e, t, r), t.push(`<!--/$-->`);
    if (e.responseState.generateStaticMarkup || t.push(`<!--$-->`), r = i.completedSegments, r.length !== 1) throw Error(n(391));
    return W(e, t, r[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push(`<!--/$-->`), e;
  }
  function xt(e, t, n) {
    return ne(t, e.responseState, n.formatContext, n.id), W(e, t, n), j(t, n.formatContext);
  }
  function St(e, t, r) {
    for (var i = r.completedSegments, a = 0; a < i.length; a++) Ct(e, t, r, i[a]);
    if (i.length = 0, e = e.responseState, i = r.id, r = r.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push(`$RC("`) : (e.sentCompleteBoundaryFunction = !0, t.push(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`)), i === null) throw Error(n(395));
    return r = r.toString(16), t.push(i), t.push(`","`), t.push(e.segmentPrefix), t.push(r), t.push(`")<\/script>`);
  }
  function Ct(e, t, r, i) {
    if (i.status === 2) return !0;
    var a = i.id;
    if (a === -1) {
      if ((i.id = r.rootSegmentID) === -1) throw Error(n(392));
      return xt(e, t, i);
    }
    return xt(e, t, i), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push(`$RS("`) : (e.sentCompleteSegmentFunction = !0, t.push(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`)), t.push(e.segmentPrefix), a = a.toString(16), t.push(a), t.push(`","`), t.push(e.placeholderPrefix), t.push(a), t.push(`")<\/script>`);
  }
  function wt(e, t) {
    try {
      var r = e.completedRootSegment;
      if (r !== null && e.pendingRootTasks === 0) {
        W(e, t, r), e.completedRootSegment = null;
        var i = e.responseState.bootstrapChunks;
        for (r = 0; r < i.length - 1; r++) t.push(i[r]);
        r < i.length && t.push(i[r]);
      }
      var a = e.clientRenderedBoundaries,
        o;
      for (o = 0; o < a.length; o++) {
        var s = a[o];
        i = t;
        var c = e.responseState,
          l = s.id,
          u = s.errorDigest,
          d = s.errorMessage,
          f = s.errorComponentStack;
        if (i.push(c.startInlineScript), c.sentClientRenderFunction ? i.push(`$RX("`) : (c.sentClientRenderFunction = !0, i.push(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`)), l === null) throw Error(n(395));
        if (i.push(l), i.push(`"`), u || d || f) {
          i.push(`,`);
          var p = re(u || ``);
          i.push(p);
        }
        if (d || f) {
          i.push(`,`);
          var m = re(d || ``);
          i.push(m);
        }
        if (f) {
          i.push(`,`);
          var h = re(f);
          i.push(h);
        }
        if (!i.push(`)<\/script>`)) {
          e.destination = null, o++, a.splice(0, o);
          return;
        }
      }
      a.splice(0, o);
      var g = e.completedBoundaries;
      for (o = 0; o < g.length; o++) if (!St(e, t, g[o])) {
        e.destination = null, o++, g.splice(0, o);
        return;
      }
      g.splice(0, o);
      var _ = e.partialBoundaries;
      for (o = 0; o < _.length; o++) {
        var v = _[o];
        a: {
          a = e, s = t;
          var y = v.completedSegments;
          for (c = 0; c < y.length; c++) if (!Ct(a, s, v, y[c])) {
            c++, y.splice(0, c);
            var b = !1;
            break a;
          }
          y.splice(0, c), b = !0;
        }
        if (!b) {
          e.destination = null, o++, _.splice(0, o);
          return;
        }
      }
      _.splice(0, o);
      var x = e.completedBoundaries;
      for (o = 0; o < x.length; o++) if (!St(e, t, x[o])) {
        e.destination = null, o++, x.splice(0, o);
        return;
      }
      x.splice(0, o);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
    }
  }
  function Tt(e, t) {
    try {
      var n = e.abortableTasks;
      n.forEach(function (n) {
        return gt(n, e, t);
      }), n.clear(), e.destination !== null && wt(e, e.destination);
    } catch (t) {
      st(e, t), ct(e, t);
    }
  }
  function Et() {}
  function Dt(e, t, r, i) {
    var a = !1,
      o = null,
      s = ``,
      c = {
        push: function (e) {
          return e !== null && (s += e), !0;
        },
        destroy: function (e) {
          a = !0, o = e;
        }
      },
      l = !1;
    if (e = it(e, N(r, t ? t.identifierPrefix : void 0), {
      insertionMode: 1,
      selectedValue: null
    }, 1 / 0, Et, void 0, function () {
      l = !0;
    }, void 0, void 0), yt(e), Tt(e, i), e.status === 1) e.status = 2, c.destroy(e.fatalError);else if (e.status !== 2 && e.destination === null) {
      e.destination = c;
      try {
        wt(e, c);
      } catch (t) {
        st(e, t), ct(e, t);
      }
    }
    if (a) throw o;
    if (!l) throw Error(n(426));
    return s;
  }
  e.renderToNodeStream = function () {
    throw Error(n(207));
  }, e.renderToStaticMarkup = function (e, t) {
    return Dt(e, t, !0, `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`);
  }, e.renderToStaticNodeStream = function () {
    throw Error(n(208));
  }, e.renderToString = function (e, t) {
    return Dt(e, t, !1, `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`);
  }, e.version = `18.3.1`;
});
var C = o(e => {
  var t = u();
  function n(e) {
    for (var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
    return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  var r = null,
    i = 0;
  function a(e, t) {
    if (t.length !== 0) {
      if (512 < t.length) 0 < i && (e.enqueue(new Uint8Array(r.buffer, 0, i)), r = new Uint8Array(512), i = 0), e.enqueue(t);else {
        var n = r.length - i;
        n < t.length && (n === 0 ? e.enqueue(r) : (r.set(t.subarray(0, n), i), e.enqueue(r), t = t.subarray(n)), r = new Uint8Array(512), i = 0), r.set(t, i), i += t.length;
      }
    }
  }
  function o(e, t) {
    return a(e, t), !0;
  }
  function s(e) {
    r && 0 < i && (e.enqueue(new Uint8Array(r.buffer, 0, i)), r = null, i = 0);
  }
  var c = new TextEncoder();
  function l(e) {
    return c.encode(e);
  }
  function d(e) {
    return c.encode(e);
  }
  function f(e, t) {
    typeof e.error == `function` ? e.error(t) : e.close();
  }
  var p = Object.prototype.hasOwnProperty,
    m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    h = {},
    g = {};
  function _(e) {
    return p.call(g, e) ? !0 : p.call(h, e) ? !1 : m.test(e) ? g[e] = !0 : (h[e] = !0, !1);
  }
  function v(e, t, n, r, i, a, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
  }
  var y = {};
  `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function (e) {
    y[e] = new v(e, 0, !1, e, null, !1, !1);
  }), [[`acceptCharset`, `accept-charset`], [`className`, `class`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`]].forEach(function (e) {
    var t = e[0];
    y[t] = new v(t, 1, !1, e[1], null, !1, !1);
  }), [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
    y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(function (e) {
    y[e] = new v(e, 2, !1, e, null, !1, !1);
  }), `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function (e) {
    y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
    y[e] = new v(e, 3, !0, e, null, !1, !1);
  }), [`capture`, `download`].forEach(function (e) {
    y[e] = new v(e, 4, !1, e, null, !1, !1);
  }), [`cols`, `rows`, `size`, `span`].forEach(function (e) {
    y[e] = new v(e, 6, !1, e, null, !1, !1);
  }), [`rowSpan`, `start`].forEach(function (e) {
    y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var b = /[\-:]([a-z])/g;
  function x(e) {
    return e[1].toUpperCase();
  }
  `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function (e) {
    var t = e.replace(b, x);
    y[t] = new v(t, 1, !1, e, null, !1, !1);
  }), `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function (e) {
    var t = e.replace(b, x);
    y[t] = new v(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
  }), [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
    var t = e.replace(b, x);
    y[t] = new v(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
  }), [`tabIndex`, `crossOrigin`].forEach(function (e) {
    y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), y.xlinkHref = new v(`xlinkHref`, 1, !1, `xlink:href`, `http://www.w3.org/1999/xlink`, !0, !1), [`src`, `href`, `action`, `formAction`].forEach(function (e) {
    y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var S = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
    C = [`Webkit`, `ms`, `Moz`, `O`];
  Object.keys(S).forEach(function (e) {
    C.forEach(function (t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), S[t] = S[e];
    });
  });
  var w = /["'&<>]/;
  function T(e) {
    if (typeof e == `boolean` || typeof e == `number`) return `` + e;
    e = `` + e;
    var t = w.exec(e);
    if (t) {
      var n = ``,
        r,
        i = 0;
      for (r = t.index; r < e.length; r++) {
        switch (e.charCodeAt(r)) {
          case 34:
            t = `&quot;`;
            break;
          case 38:
            t = `&amp;`;
            break;
          case 39:
            t = `&#x27;`;
            break;
          case 60:
            t = `&lt;`;
            break;
          case 62:
            t = `&gt;`;
            break;
          default:
            continue;
        }
        i !== r && (n += e.substring(i, r)), i = r + 1, n += t;
      }
      e = i === r ? n : n + e.substring(i, r);
    }
    return e;
  }
  var ee = /([A-Z])/g,
    E = /^ms-/,
    D = Array.isArray,
    O = d(`<script>`),
    k = d(`<\/script>`),
    te = d(`<script src="`),
    A = d(`<script type="module" src="`),
    ne = d(`" async=""><\/script>`),
    j = /(<\/|<)(s)(cript)/gi;
  function M(e, t, n, r) {
    return `` + t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
  }
  function re(e, t, n, r, i) {
    e = e === void 0 ? `` : e, t = t === void 0 ? O : d(`<script nonce="` + T(t) + `">`);
    var a = [];
    if (n !== void 0 && a.push(t, l((`` + n).replace(j, M)), k), r !== void 0) for (n = 0; n < r.length; n++) a.push(te, l(T(r[n])), ne);
    if (i !== void 0) for (r = 0; r < i.length; r++) a.push(A, l(T(i[r])), ne);
    return {
      bootstrapChunks: a,
      startInlineScript: t,
      placeholderPrefix: d(e + `P:`),
      segmentPrefix: d(e + `S:`),
      boundaryPrefix: e + `B:`,
      idPrefix: e,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1
    };
  }
  function N(e, t) {
    return {
      insertionMode: e,
      selectedValue: t
    };
  }
  function ie(e) {
    return N(e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0, null);
  }
  function P(e, t, n) {
    switch (t) {
      case `select`:
        return N(1, n.value == null ? n.defaultValue : n.value);
      case `svg`:
        return N(2, null);
      case `math`:
        return N(3, null);
      case `foreignObject`:
        return N(1, null);
      case `table`:
        return N(4, null);
      case `thead`:
      case `tbody`:
      case `tfoot`:
        return N(5, null);
      case `colgroup`:
        return N(7, null);
      case `tr`:
        return N(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? N(1, null) : e;
  }
  var ae = d(`<!-- -->`);
  function F(e, t, n, r) {
    return t === `` ? r : (r && e.push(ae), e.push(l(T(t))), !0);
  }
  var oe = new Map(),
    se = d(` style="`),
    ce = d(`:`),
    I = d(`;`);
  function le(e, t, r) {
    if (typeof r != `object`) throw Error(n(62));
    for (var i in t = !0, r) if (p.call(r, i)) {
      var a = r[i];
      if (a != null && typeof a != `boolean` && a !== ``) {
        if (i.indexOf(`--`) === 0) {
          var o = l(T(i));
          a = l(T((`` + a).trim()));
        } else {
          o = i;
          var s = oe.get(o);
          s === void 0 ? (s = d(T(o.replace(ee, `-$1`).toLowerCase().replace(E, `-ms-`))), oe.set(o, s), o = s) : o = s, a = typeof a == `number` ? a === 0 || p.call(S, i) ? l(`` + a) : l(a + `px`) : l(T((`` + a).trim()));
        }
        t ? (t = !1, e.push(se, o, ce, a)) : e.push(I, o, ce, a);
      }
    }
    t || e.push(de);
  }
  var L = d(` `),
    ue = d(`="`),
    de = d(`"`),
    fe = d(`=""`);
  function R(e, t, n, r) {
    switch (n) {
      case `style`:
        le(e, t, r);
        return;
      case `defaultValue`:
      case `defaultChecked`:
      case `innerHTML`:
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
        return;
    }
    if (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) {
      if (t = y.hasOwnProperty(n) ? y[n] : null, t !== null) {
        switch (typeof r) {
          case `function`:
          case `symbol`:
            return;
          case `boolean`:
            if (!t.acceptsBooleans) return;
        }
        switch (n = l(t.attributeName), t.type) {
          case 3:
            r && e.push(L, n, fe);
            break;
          case 4:
            !0 === r ? e.push(L, n, fe) : !1 !== r && e.push(L, n, ue, l(T(r)), de);
            break;
          case 5:
            isNaN(r) || e.push(L, n, ue, l(T(r)), de);
            break;
          case 6:
            !isNaN(r) && 1 <= r && e.push(L, n, ue, l(T(r)), de);
            break;
          default:
            t.sanitizeURL && (r = `` + r), e.push(L, n, ue, l(T(r)), de);
        }
      } else if (_(n)) {
        switch (typeof r) {
          case `function`:
          case `symbol`:
            return;
          case `boolean`:
            if (t = n.toLowerCase().slice(0, 5), t !== `data-` && t !== `aria-`) return;
        }
        e.push(L, l(n), ue, l(T(r)), de);
      }
    }
  }
  var pe = d(`>`),
    me = d(`/>`);
  function he(e, t, r) {
    if (t != null) {
      if (r != null) throw Error(n(60));
      if (typeof t != `object` || !(`__html` in t)) throw Error(n(61));
      t = t.__html, t != null && e.push(l(`` + t));
    }
  }
  function ge(e) {
    var n = ``;
    return t.Children.forEach(e, function (e) {
      e != null && (n += e);
    }), n;
  }
  var _e = d(` selected=""`);
  function ve(e, t, n, r) {
    e.push(V(n));
    var i = n = null,
      a;
    for (a in t) if (p.call(t, a)) {
      var o = t[a];
      if (o != null) switch (a) {
        case `children`:
          n = o;
          break;
        case `dangerouslySetInnerHTML`:
          i = o;
          break;
        default:
          R(e, r, a, o);
      }
    }
    return e.push(pe), he(e, i, n), typeof n == `string` ? (e.push(l(T(n))), null) : n;
  }
  var ye = d(`
`),
    z = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    B = new Map();
  function V(e) {
    var t = B.get(e);
    if (t === void 0) {
      if (!z.test(e)) throw Error(n(65, e));
      t = d(`<` + e), B.set(e, t);
    }
    return t;
  }
  var be = d(`<!DOCTYPE html>`);
  function xe(e, t, r, i, a) {
    switch (t) {
      case `select`:
        e.push(V(`select`));
        var o = null,
          s = null;
        for (f in r) if (p.call(r, f)) {
          var c = r[f];
          if (c != null) switch (f) {
            case `children`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              s = c;
              break;
            case `defaultValue`:
            case `value`:
              break;
            default:
              R(e, i, f, c);
          }
        }
        return e.push(pe), he(e, s, o), o;
      case `option`:
        s = a.selectedValue, e.push(V(`option`));
        var u = c = null,
          d = null,
          f = null;
        for (o in r) if (p.call(r, o)) {
          var m = r[o];
          if (m != null) switch (o) {
            case `children`:
              c = m;
              break;
            case `selected`:
              d = m;
              break;
            case `dangerouslySetInnerHTML`:
              f = m;
              break;
            case `value`:
              u = m;
            default:
              R(e, i, o, m);
          }
        }
        if (s != null) {
          if (r = u === null ? ge(c) : `` + u, D(s)) {
            for (i = 0; i < s.length; i++) if (`` + s[i] === r) {
              e.push(_e);
              break;
            }
          } else `` + s === r && e.push(_e);
        } else d && e.push(_e);
        return e.push(pe), he(e, f, c), c;
      case `textarea`:
        for (c in e.push(V(`textarea`)), f = s = o = null, r) if (p.call(r, c) && (u = r[c], u != null)) switch (c) {
          case `children`:
            f = u;
            break;
          case `value`:
            o = u;
            break;
          case `defaultValue`:
            s = u;
            break;
          case `dangerouslySetInnerHTML`:
            throw Error(n(91));
          default:
            R(e, i, c, u);
        }
        if (o === null && s !== null && (o = s), e.push(pe), f != null) {
          if (o != null) throw Error(n(92));
          if (D(f) && 1 < f.length) throw Error(n(93));
          o = `` + f;
        }
        return typeof o == `string` && o[0] === `
` && e.push(ye), o !== null && e.push(l(T(`` + o))), null;
      case `input`:
        for (s in e.push(V(`input`)), u = f = c = o = null, r) if (p.call(r, s) && (d = r[s], d != null)) switch (s) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(n(399, `input`));
          case `defaultChecked`:
            u = d;
            break;
          case `defaultValue`:
            c = d;
            break;
          case `checked`:
            f = d;
            break;
          case `value`:
            o = d;
            break;
          default:
            R(e, i, s, d);
        }
        return f === null ? u !== null && R(e, i, `checked`, u) : R(e, i, `checked`, f), o === null ? c !== null && R(e, i, `value`, c) : R(e, i, `value`, o), e.push(me), null;
      case `menuitem`:
        for (var h in e.push(V(`menuitem`)), r) if (p.call(r, h) && (o = r[h], o != null)) switch (h) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(n(400));
          default:
            R(e, i, h, o);
        }
        return e.push(pe), null;
      case `title`:
        for (m in e.push(V(`title`)), o = null, r) if (p.call(r, m) && (s = r[m], s != null)) switch (m) {
          case `children`:
            o = s;
            break;
          case `dangerouslySetInnerHTML`:
            throw Error(n(434));
          default:
            R(e, i, m, s);
        }
        return e.push(pe), o;
      case `listing`:
      case `pre`:
        for (u in e.push(V(t)), s = o = null, r) if (p.call(r, u) && (c = r[u], c != null)) switch (u) {
          case `children`:
            o = c;
            break;
          case `dangerouslySetInnerHTML`:
            s = c;
            break;
          default:
            R(e, i, u, c);
        }
        if (e.push(pe), s != null) {
          if (o != null) throw Error(n(60));
          if (typeof s != `object` || !(`__html` in s)) throw Error(n(61));
          r = s.__html, r != null && (typeof r == `string` && 0 < r.length && r[0] === `
` ? e.push(ye, l(r)) : e.push(l(`` + r)));
        }
        return typeof o == `string` && o[0] === `
` && e.push(ye), o;
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        for (var g in e.push(V(t)), r) if (p.call(r, g) && (o = r[g], o != null)) switch (g) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(n(399, t));
          default:
            R(e, i, g, o);
        }
        return e.push(me), null;
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return ve(e, r, t, i);
      case `html`:
        return a.insertionMode === 0 && e.push(be), ve(e, r, t, i);
      default:
        if (t.indexOf(`-`) === -1 && typeof r.is != `string`) return ve(e, r, t, i);
        for (d in e.push(V(t)), s = o = null, r) if (p.call(r, d) && (c = r[d], c != null)) switch (d) {
          case `children`:
            o = c;
            break;
          case `dangerouslySetInnerHTML`:
            s = c;
            break;
          case `style`:
            le(e, i, c);
            break;
          case `suppressContentEditableWarning`:
          case `suppressHydrationWarning`:
            break;
          default:
            _(d) && typeof c != `function` && typeof c != `symbol` && e.push(L, l(d), ue, l(T(c)), de);
        }
        return e.push(pe), he(e, s, o), o;
    }
  }
  var Se = d(`</`),
    Ce = d(`>`),
    we = d(`<template id="`),
    Te = d(`"></template>`),
    Ee = d(`<!--$-->`),
    De = d(`<!--$?--><template id="`),
    Oe = d(`"></template>`),
    ke = d(`<!--$!-->`),
    Ae = d(`<!--/$-->`),
    je = d(`<template`),
    Me = d(`"`),
    Ne = d(` data-dgst="`);
  d(` data-msg="`), d(` data-stck="`);
  var Pe = d(`></template>`);
  function Fe(e, t, r) {
    if (a(e, De), r === null) throw Error(n(395));
    return a(e, r), o(e, Oe);
  }
  var Ie = d(`<div hidden id="`),
    Le = d(`">`),
    H = d(`</div>`),
    Re = d(`<svg aria-hidden="true" style="display:none" id="`),
    ze = d(`">`),
    Be = d(`</svg>`),
    Ve = d(`<math aria-hidden="true" style="display:none" id="`),
    He = d(`">`),
    Ue = d(`</math>`),
    We = d(`<table hidden id="`),
    Ge = d(`">`),
    Ke = d(`</table>`),
    qe = d(`<table hidden><tbody id="`),
    Je = d(`">`),
    Ye = d(`</tbody></table>`),
    Xe = d(`<table hidden><tr id="`),
    Ze = d(`">`),
    Qe = d(`</tr></table>`),
    $e = d(`<table hidden><colgroup id="`),
    et = d(`">`),
    tt = d(`</colgroup></table>`);
  function nt(e, t, r, i) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return a(e, Ie), a(e, t.segmentPrefix), a(e, l(i.toString(16))), o(e, Le);
      case 2:
        return a(e, Re), a(e, t.segmentPrefix), a(e, l(i.toString(16))), o(e, ze);
      case 3:
        return a(e, Ve), a(e, t.segmentPrefix), a(e, l(i.toString(16))), o(e, He);
      case 4:
        return a(e, We), a(e, t.segmentPrefix), a(e, l(i.toString(16))), o(e, Ge);
      case 5:
        return a(e, qe), a(e, t.segmentPrefix), a(e, l(i.toString(16))), o(e, Je);
      case 6:
        return a(e, Xe), a(e, t.segmentPrefix), a(e, l(i.toString(16))), o(e, Ze);
      case 7:
        return a(e, $e), a(e, t.segmentPrefix), a(e, l(i.toString(16))), o(e, et);
      default:
        throw Error(n(397));
    }
  }
  function rt(e, t) {
    switch (t.insertionMode) {
      case 0:
      case 1:
        return o(e, H);
      case 2:
        return o(e, Be);
      case 3:
        return o(e, Ue);
      case 4:
        return o(e, Ke);
      case 5:
        return o(e, Ye);
      case 6:
        return o(e, Qe);
      case 7:
        return o(e, tt);
      default:
        throw Error(n(397));
    }
  }
  var it = d(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`),
    at = d(`$RS("`),
    ot = d(`","`),
    st = d(`")<\/script>`),
    ct = d(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`),
    lt = d(`$RC("`),
    ut = d(`","`),
    dt = d(`")<\/script>`),
    ft = d(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`),
    U = d(`$RX("`),
    pt = d(`"`),
    mt = d(`)<\/script>`),
    ht = d(`,`),
    gt = /[<\u2028\u2029]/g;
  function _t(e) {
    return JSON.stringify(e).replace(gt, function (e) {
      switch (e) {
        case `<`:
          return `\\u003c`;
        case `\u2028`:
          return `\\u2028`;
        case `\u2029`:
          return `\\u2029`;
        default:
          throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`);
      }
    });
  }
  var vt = Object.assign,
    yt = Symbol.for(`react.element`),
    bt = Symbol.for(`react.portal`),
    W = Symbol.for(`react.fragment`),
    xt = Symbol.for(`react.strict_mode`),
    St = Symbol.for(`react.profiler`),
    Ct = Symbol.for(`react.provider`),
    wt = Symbol.for(`react.context`),
    Tt = Symbol.for(`react.forward_ref`),
    Et = Symbol.for(`react.suspense`),
    Dt = Symbol.for(`react.suspense_list`),
    Ot = Symbol.for(`react.memo`),
    G = Symbol.for(`react.lazy`),
    kt = Symbol.for(`react.scope`),
    At = Symbol.for(`react.debug_trace_mode`),
    jt = Symbol.for(`react.legacy_hidden`),
    Mt = Symbol.for(`react.default_value`),
    Nt = Symbol.iterator;
  function Pt(e) {
    if (e == null) return null;
    if (typeof e == `function`) return e.displayName || e.name || null;
    if (typeof e == `string`) return e;
    switch (e) {
      case W:
        return `Fragment`;
      case bt:
        return `Portal`;
      case St:
        return `Profiler`;
      case xt:
        return `StrictMode`;
      case Et:
        return `Suspense`;
      case Dt:
        return `SuspenseList`;
    }
    if (typeof e == `object`) switch (e.$$typeof) {
      case wt:
        return (e.displayName || `Context`) + `.Consumer`;
      case Ct:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Tt:
        var t = e.render;
        return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
      case Ot:
        return t = e.displayName || null, t === null ? Pt(e.type) || `Memo` : t;
      case G:
        t = e._payload, e = e._init;
        try {
          return Pt(e(t));
        } catch {}
    }
    return null;
  }
  var Ft = {};
  function K(e, t) {
    if (e = e.contextTypes, !e) return Ft;
    var n = {},
      r;
    for (r in e) n[r] = t[r];
    return n;
  }
  var It = null;
  function Lt(e, t) {
    if (e !== t) {
      e.context._currentValue = e.parentValue, e = e.parent;
      var r = t.parent;
      if (e === null) {
        if (r !== null) throw Error(n(401));
      } else {
        if (r === null) throw Error(n(401));
        Lt(e, r);
      }
      t.context._currentValue = t.value;
    }
  }
  function Rt(e) {
    e.context._currentValue = e.parentValue, e = e.parent, e !== null && Rt(e);
  }
  function zt(e) {
    var t = e.parent;
    t !== null && zt(t), e.context._currentValue = e.value;
  }
  function Bt(e, t) {
    if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(n(402));
    e.depth === t.depth ? Lt(e, t) : Bt(e, t);
  }
  function Vt(e, t) {
    var r = t.parent;
    if (r === null) throw Error(n(402));
    e.depth === r.depth ? Lt(e, r) : Vt(e, r), t.context._currentValue = t.value;
  }
  function Ht(e) {
    var t = It;
    t !== e && (t === null ? zt(e) : e === null ? Rt(t) : t.depth === e.depth ? Lt(t, e) : t.depth > e.depth ? Bt(t, e) : Vt(t, e), It = e);
  }
  var Ut = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (e, t) {
      e = e._reactInternals, e.queue !== null && e.queue.push(t);
    },
    enqueueReplaceState: function (e, t) {
      e = e._reactInternals, e.replace = !0, e.queue = [t];
    },
    enqueueForceUpdate: function () {}
  };
  function Wt(e, t, n, r) {
    var i = e.state === void 0 ? null : e.state;
    e.updater = Ut, e.props = n, e.state = i;
    var a = {
      queue: [],
      replace: !1
    };
    e._reactInternals = a;
    var o = t.contextType;
    if (e.context = typeof o == `object` && o ? o._currentValue : r, o = t.getDerivedStateFromProps, typeof o == `function` && (o = o(n, i), i = o == null ? i : vt({}, i, o), e.state = i), typeof t.getDerivedStateFromProps != `function` && typeof e.getSnapshotBeforeUpdate != `function` && (typeof e.UNSAFE_componentWillMount == `function` || typeof e.componentWillMount == `function`)) {
      if (t = e.state, typeof e.componentWillMount == `function` && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(), t !== e.state && Ut.enqueueReplaceState(e, e.state, null), a.queue !== null && 0 < a.queue.length) {
        if (t = a.queue, o = a.replace, a.queue = null, a.replace = !1, o && t.length === 1) e.state = t[0];else {
          for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
            var s = t[o];
            s = typeof s == `function` ? s.call(e, a, n, r) : s, s != null && (i ? (i = !1, a = vt({}, a, s)) : vt(a, s));
          }
          e.state = a;
        }
      } else a.queue = null;
    }
  }
  var Gt = {
    id: 1,
    overflow: ``
  };
  function Kt(e, t, n) {
    var r = e.id;
    e = e.overflow;
    var i = 32 - qt(r) - 1;
    r &= ~(1 << i), n += 1;
    var a = 32 - qt(t) + i;
    if (30 < a) {
      var o = i - i % 5;
      return a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, {
        id: 1 << 32 - qt(t) + i | n << i | r,
        overflow: a + e
      };
    }
    return {
      id: 1 << a | n << i | r,
      overflow: e
    };
  }
  var qt = Math.clz32 ? Math.clz32 : Xt,
    Jt = Math.log,
    Yt = Math.LN2;
  function Xt(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Jt(e) / Yt | 0) | 0;
  }
  function Zt(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
  }
  var Qt = typeof Object.is == `function` ? Object.is : Zt,
    $t = null,
    en = null,
    tn = null,
    q = null,
    nn = !1,
    rn = !1,
    an = 0,
    on = null,
    sn = 0;
  function cn() {
    if ($t === null) throw Error(n(321));
    return $t;
  }
  function ln() {
    if (0 < sn) throw Error(n(312));
    return {
      memoizedState: null,
      queue: null,
      next: null
    };
  }
  function un() {
    return q === null ? tn === null ? (nn = !1, tn = q = ln()) : (nn = !0, q = tn) : q.next === null ? (nn = !1, q = q.next = ln()) : (nn = !0, q = q.next), q;
  }
  function dn() {
    en = $t = null, rn = !1, tn = null, sn = 0, q = on = null;
  }
  function fn(e, t) {
    return typeof t == `function` ? t(e) : t;
  }
  function pn(e, t, n) {
    if ($t = cn(), q = un(), nn) {
      var r = q.queue;
      if (t = r.dispatch, on !== null && (n = on.get(r), n !== void 0)) {
        on.delete(r), r = q.memoizedState;
        do r = e(r, n.action), n = n.next; while (n !== null);
        return q.memoizedState = r, [r, t];
      }
      return [q.memoizedState, t];
    }
    return e = e === fn ? typeof t == `function` ? t() : t : n === void 0 ? t : n(t), q.memoizedState = e, e = q.queue = {
      last: null,
      dispatch: null
    }, e = e.dispatch = hn.bind(null, $t, e), [q.memoizedState, e];
  }
  function mn(e, t) {
    if ($t = cn(), q = un(), t = t === void 0 ? null : t, q !== null) {
      var n = q.memoizedState;
      if (n !== null && t !== null) {
        var r = n[1];
        a: if (r === null) r = !1;else {
          for (var i = 0; i < r.length && i < t.length; i++) if (!Qt(t[i], r[i])) {
            r = !1;
            break a;
          }
          r = !0;
        }
        if (r) return n[0];
      }
    }
    return e = e(), q.memoizedState = [e, t], e;
  }
  function hn(e, t, r) {
    if (25 <= sn) throw Error(n(301));
    if (e === $t) {
      if (rn = !0, e = {
        action: r,
        next: null
      }, on === null && (on = new Map()), r = on.get(t), r === void 0) on.set(t, e);else {
        for (t = r; t.next !== null;) t = t.next;
        t.next = e;
      }
    }
  }
  function gn() {
    throw Error(n(394));
  }
  function _n() {}
  var vn = {
      readContext: function (e) {
        return e._currentValue;
      },
      useContext: function (e) {
        return cn(), e._currentValue;
      },
      useMemo: mn,
      useReducer: pn,
      useRef: function (e) {
        $t = cn(), q = un();
        var t = q.memoizedState;
        return t === null ? (e = {
          current: e
        }, q.memoizedState = e) : t;
      },
      useState: function (e) {
        return pn(fn, e);
      },
      useInsertionEffect: _n,
      useLayoutEffect: function () {},
      useCallback: function (e, t) {
        return mn(function () {
          return e;
        }, t);
      },
      useImperativeHandle: _n,
      useEffect: _n,
      useDebugValue: _n,
      useDeferredValue: function (e) {
        return cn(), e;
      },
      useTransition: function () {
        return cn(), [!1, gn];
      },
      useId: function () {
        var e = en.treeContext,
          t = e.overflow;
        e = e.id, e = (e & ~(1 << 32 - qt(e) - 1)).toString(32) + t;
        var r = yn;
        if (r === null) throw Error(n(404));
        return t = an++, e = `:` + r.idPrefix + `R` + e, 0 < t && (e += `H` + t.toString(32)), e + `:`;
      },
      useMutableSource: function (e, t) {
        return cn(), t(e._source);
      },
      useSyncExternalStore: function (e, t, r) {
        if (r === void 0) throw Error(n(407));
        return r();
      }
    },
    yn = null,
    bn = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function xn(e) {
    return console.error(e), null;
  }
  function Sn() {}
  function Cn(e, t, n, r, i, a, o, s, c) {
    var l = [],
      u = new Set();
    return t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? xn : i,
      onAllReady: a === void 0 ? Sn : a,
      onShellReady: o === void 0 ? Sn : o,
      onShellError: s === void 0 ? Sn : s,
      onFatalError: c === void 0 ? Sn : c
    }, n = Tn(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = wn(t, e, null, n, u, Ft, null, Gt), l.push(e), t;
  }
  function wn(e, t, n, r, i, a, o, s) {
    e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
    var c = {
      node: t,
      ping: function () {
        var t = e.pingedTasks;
        t.push(c), t.length === 1 && zn(e);
      },
      blockedBoundary: n,
      blockedSegment: r,
      abortSet: i,
      legacyContext: a,
      context: o,
      treeContext: s
    };
    return i.add(c), c;
  }
  function Tn(e, t, n, r, i, a) {
    return {
      status: 0,
      id: -1,
      index: t,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: r,
      boundary: n,
      lastPushedText: i,
      textEmbedded: a
    };
  }
  function En(e, t) {
    if (e = e.onError(t), e != null && typeof e != `string`) throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` + typeof e + `" instead`);
    return e;
  }
  function Dn(e, t) {
    var n = e.onShellError;
    n(t), n = e.onFatalError, n(t), e.destination === null ? (e.status = 1, e.fatalError = t) : (e.status = 2, f(e.destination, t));
  }
  function On(e, t, n, r, i) {
    for ($t = {}, en = t, an = 0, e = n(r, i); rn;) rn = !1, an = 0, sn += 1, q = null, e = n(r, i);
    return dn(), e;
  }
  function kn(e, t, r, i) {
    var a = r.render(),
      o = i.childContextTypes;
    if (o != null) {
      var s = t.legacyContext;
      if (typeof r.getChildContext != `function`) i = s;else {
        for (var c in r = r.getChildContext(), r) if (!(c in o)) throw Error(n(108, Pt(i) || `Unknown`, c));
        i = vt({}, s, r);
      }
      t.legacyContext = i, Mn(e, t, a), t.legacyContext = s;
    } else Mn(e, t, a);
  }
  function An(e, t) {
    if (e && e.defaultProps) {
      for (var n in t = vt({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function jn(e, t, r, i, a) {
    if (typeof r == `function`) {
      if (r.prototype && r.prototype.isReactComponent) {
        a = K(r, t.legacyContext);
        var o = r.contextType;
        o = new r(i, typeof o == `object` && o ? o._currentValue : a), Wt(o, r, i, a), kn(e, t, o, r);
      } else {
        o = K(r, t.legacyContext), a = On(e, t, r, i, o);
        var s = an !== 0;
        if (typeof a == `object` && a && typeof a.render == `function` && a.$$typeof === void 0) Wt(a, r, i, o), kn(e, t, a, r);else if (s) {
          i = t.treeContext, t.treeContext = Kt(i, 1, 0);
          try {
            Mn(e, t, a);
          } finally {
            t.treeContext = i;
          }
        } else Mn(e, t, a);
      }
    } else if (typeof r == `string`) {
      switch (a = t.blockedSegment, o = xe(a.chunks, r, i, e.responseState, a.formatContext), a.lastPushedText = !1, s = a.formatContext, a.formatContext = P(s, r, i), Pn(e, t, o), a.formatContext = s, r) {
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `img`:
        case `input`:
        case `keygen`:
        case `link`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
          break;
        default:
          a.chunks.push(Se, l(r), Ce);
      }
      a.lastPushedText = !1;
    } else {
      switch (r) {
        case jt:
        case At:
        case xt:
        case St:
        case W:
          Mn(e, t, i.children);
          return;
        case Dt:
          Mn(e, t, i.children);
          return;
        case kt:
          throw Error(n(343));
        case Et:
          a: {
            r = t.blockedBoundary, a = t.blockedSegment, o = i.fallback, i = i.children, s = new Set();
            var c = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: s,
                errorDigest: null
              },
              u = Tn(e, a.chunks.length, c, a.formatContext, !1, !1);
            a.children.push(u), a.lastPushedText = !1;
            var d = Tn(e, 0, null, a.formatContext, !1, !1);
            d.parentFlushed = !0, t.blockedBoundary = c, t.blockedSegment = d;
            try {
              if (Pn(e, t, i), d.lastPushedText && d.textEmbedded && d.chunks.push(ae), d.status = 1, Ln(c, d), c.pendingTasks === 0) break a;
            } catch (t) {
              d.status = 4, c.forceClientRender = !0, c.errorDigest = En(e, t);
            } finally {
              t.blockedBoundary = r, t.blockedSegment = a;
            }
            t = wn(e, o, r, u, s, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
          }
          return;
      }
      if (typeof r == `object` && r) switch (r.$$typeof) {
        case Tt:
          if (i = On(e, t, r.render, i, a), an !== 0) {
            r = t.treeContext, t.treeContext = Kt(r, 1, 0);
            try {
              Mn(e, t, i);
            } finally {
              t.treeContext = r;
            }
          } else Mn(e, t, i);
          return;
        case Ot:
          r = r.type, i = An(r, i), jn(e, t, r, i, a);
          return;
        case Ct:
          if (a = i.children, r = r._context, i = i.value, o = r._currentValue, r._currentValue = i, s = It, It = i = {
            parent: s,
            depth: s === null ? 0 : s.depth + 1,
            context: r,
            parentValue: o,
            value: i
          }, t.context = i, Mn(e, t, a), e = It, e === null) throw Error(n(403));
          i = e.parentValue, e.context._currentValue = i === Mt ? e.context._defaultValue : i, e = It = e.parent, t.context = e;
          return;
        case wt:
          i = i.children, i = i(r._currentValue), Mn(e, t, i);
          return;
        case G:
          a = r._init, r = a(r._payload), i = An(r, i), jn(e, t, r, i, void 0);
          return;
      }
      throw Error(n(130, r == null ? r : typeof r, ``));
    }
  }
  function Mn(e, t, r) {
    if (t.node = r, typeof r == `object` && r) {
      switch (r.$$typeof) {
        case yt:
          jn(e, t, r.type, r.props, r.ref);
          return;
        case bt:
          throw Error(n(257));
        case G:
          var i = r._init;
          r = i(r._payload), Mn(e, t, r);
          return;
      }
      if (D(r)) {
        Nn(e, t, r);
        return;
      }
      if (typeof r != `object` || !r ? i = null : (i = Nt && r[Nt] || r[`@@iterator`], i = typeof i == `function` ? i : null), i &&= i.call(r)) {
        if (r = i.next(), !r.done) {
          var a = [];
          do a.push(r.value), r = i.next(); while (!r.done);
          Nn(e, t, a);
        }
        return;
      }
      throw e = Object.prototype.toString.call(r), Error(n(31, e === `[object Object]` ? `object with keys {` + Object.keys(r).join(`, `) + `}` : e));
    }
    typeof r == `string` ? (i = t.blockedSegment, i.lastPushedText = F(t.blockedSegment.chunks, r, e.responseState, i.lastPushedText)) : typeof r == `number` && (i = t.blockedSegment, i.lastPushedText = F(t.blockedSegment.chunks, `` + r, e.responseState, i.lastPushedText));
  }
  function Nn(e, t, n) {
    for (var r = n.length, i = 0; i < r; i++) {
      var a = t.treeContext;
      t.treeContext = Kt(a, r, i);
      try {
        Pn(e, t, n[i]);
      } finally {
        t.treeContext = a;
      }
    }
  }
  function Pn(e, t, n) {
    var r = t.blockedSegment.formatContext,
      i = t.legacyContext,
      a = t.context;
    try {
      return Mn(e, t, n);
    } catch (c) {
      if (dn(), typeof c == `object` && c && typeof c.then == `function`) {
        n = c;
        var o = t.blockedSegment,
          s = Tn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
        o.children.push(s), o.lastPushedText = !1, e = wn(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, Ht(a);
      } else throw t.blockedSegment.formatContext = r, t.legacyContext = i, t.context = a, Ht(a), c;
    }
  }
  function Fn(e) {
    var t = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, Rn(this, t, e);
  }
  function In(e, t, r) {
    var i = e.blockedBoundary;
    e.blockedSegment.status = 3, i === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (i.pendingTasks--, i.forceClientRender || (i.forceClientRender = !0, e = r === void 0 ? Error(n(432)) : r, i.errorDigest = t.onError(e), i.parentFlushed && t.clientRenderedBoundaries.push(i)), i.fallbackAbortableTasks.forEach(function (e) {
      return In(e, t, r);
    }), i.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (i = t.onAllReady, i()));
  }
  function Ln(e, t) {
    if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
      var n = t.children[0];
      n.id = t.id, n.parentFlushed = !0, n.status === 1 && Ln(e, n);
    } else e.completedSegments.push(t);
  }
  function Rn(e, t, r) {
    if (t === null) {
      if (r.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(n(389));
        e.completedRootSegment = r;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Sn, t = e.onShellReady, t());
    } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (r.parentFlushed && r.status === 1 && Ln(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Fn, e), t.fallbackAbortableTasks.clear()) : r.parentFlushed && r.status === 1 && (Ln(t, r), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function zn(e) {
    if (e.status !== 2) {
      var t = It,
        n = bn.current;
      bn.current = vn;
      var r = yn;
      yn = e.responseState;
      try {
        var i = e.pingedTasks,
          a;
        for (a = 0; a < i.length; a++) {
          var o = i[a],
            s = e,
            c = o.blockedSegment;
          if (c.status === 0) {
            Ht(o.context);
            try {
              Mn(s, o, o.node), c.lastPushedText && c.textEmbedded && c.chunks.push(ae), o.abortSet.delete(o), c.status = 1, Rn(s, o.blockedBoundary, c);
            } catch (e) {
              if (dn(), typeof e == `object` && e && typeof e.then == `function`) {
                var l = o.ping;
                e.then(l, l);
              } else {
                o.abortSet.delete(o), c.status = 4;
                var u = o.blockedBoundary,
                  d = e,
                  f = En(s, d);
                if (u === null ? Dn(s, d) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, u.errorDigest = f, u.parentFlushed && s.clientRenderedBoundaries.push(u))), s.allPendingTasks--, s.allPendingTasks === 0) {
                  var p = s.onAllReady;
                  p();
                }
              }
            }
          }
        }
        i.splice(0, a), e.destination !== null && Gn(e, e.destination);
      } catch (t) {
        En(e, t), Dn(e, t);
      } finally {
        yn = r, bn.current = n, n === vn && Ht(t);
      }
    }
  }
  function Bn(e, t, r) {
    switch (r.parentFlushed = !0, r.status) {
      case 0:
        var i = r.id = e.nextSegmentId++;
        return r.lastPushedText = !1, r.textEmbedded = !1, e = e.responseState, a(t, we), a(t, e.placeholderPrefix), e = l(i.toString(16)), a(t, e), o(t, Te);
      case 1:
        r.status = 2;
        var s = !0;
        i = r.chunks;
        var c = 0;
        r = r.children;
        for (var u = 0; u < r.length; u++) {
          for (s = r[u]; c < s.index; c++) a(t, i[c]);
          s = Vn(e, t, s);
        }
        for (; c < i.length - 1; c++) a(t, i[c]);
        return c < i.length && (s = o(t, i[c])), s;
      default:
        throw Error(n(390));
    }
  }
  function Vn(e, t, r) {
    var i = r.boundary;
    if (i === null) return Bn(e, t, r);
    if (i.parentFlushed = true, i.forceClientRender) i = i.errorDigest, o(t, ke), a(t, je), i && (a(t, Ne), a(t, l(T(i))), a(t, Me)), o(t, Pe), Bn(e, t, r);else if (0 < i.pendingTasks) {
      i.rootSegmentID = e.nextSegmentId++;
      0 < i.completedSegments.length && e.partialBoundaries.push(i);
      var s = e.responseState;
      var c = s.nextSuspenseID++;
      s = d(s.boundaryPrefix + c.toString(16));
      i = i.id = s;
      Fe(t, e.responseState, i);
      Bn(e, t, r);
    } else if (i.byteSize > e.progressiveChunkSize) i.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(i), Fe(t, e.responseState, i.id), Bn(e, t, r);else {
      if (o(t, Ee), r = i.completedSegments, r.length !== 1) throw Error(n(391));
      Vn(e, t, r[0]);
    }
    return o(t, Ae);
  }
  function Hn(e, t, n) {
    return nt(t, e.responseState, n.formatContext, n.id), Vn(e, t, n), rt(t, n.formatContext);
  }
  function Un(e, t, r) {
    for (var i = r.completedSegments, s = 0; s < i.length; s++) Wn(e, t, r, i[s]);
    if (i.length = 0, e = e.responseState, i = r.id, r = r.rootSegmentID, a(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? a(t, lt) : (e.sentCompleteBoundaryFunction = true, a(t, ct)), i === null) throw Error(n(395));
    return r = l(r.toString(16)), a(t, i), a(t, ut), a(t, e.segmentPrefix), a(t, r), o(t, dt);
  }
  function Wn(e, t, r, i) {
    if (i.status === 2) return true;
    var s = i.id;
    if (s === -1) {
      if ((i.id = r.rootSegmentID) === -1) throw Error(n(392));
      return Hn(e, t, i);
    }
    return Hn(e, t, i), e = e.responseState, a(t, e.startInlineScript), e.sentCompleteSegmentFunction ? a(t, at) : (e.sentCompleteSegmentFunction = true, a(t, it)), a(t, e.segmentPrefix), s = l(s.toString(16)), a(t, s), a(t, ot), a(t, e.placeholderPrefix), a(t, s), o(t, st);
  }
  function Gn(e, t) {
    r = new Uint8Array(512);
    i = 0;
    try {
      var c = e.completedRootSegment;
      if (c !== null && e.pendingRootTasks === 0) {
        Vn(e, t, c);
        e.completedRootSegment = null;
        var u = e.responseState.bootstrapChunks;
        for (c = 0; c < u.length - 1; c++) a(t, u[c]);
        c < u.length && o(t, u[c]);
      }
      var d = e.clientRenderedBoundaries;
      var f;
      for (f = 0; f < d.length; f++) {
        var p = d[f];
        u = t;
        var m = e.responseState;
        var h = p.id;
        var g = p.errorDigest;
        var _ = p.errorMessage;
        var v = p.errorComponentStack;
        if (a(u, m.startInlineScript), m.sentClientRenderFunction ? a(u, U) : (m.sentClientRenderFunction = true, a(u, ft)), h === null) throw Error(n(395));
        if (a(u, h), a(u, pt), (g || _ || v) && (a(u, ht), a(u, l(_t(g || ``)))), (_ || v) && (a(u, ht), a(u, l(_t(_ || ``)))), v && (a(u, ht), a(u, l(_t(v)))), !o(u, mt)) {
          e.destination = null;
          f++;
          d.splice(0, f);
          return;
        }
      }
      d.splice(0, f);
      var y = e.completedBoundaries;
      for (f = 0; f < y.length; f++) if (!Un(e, t, y[f])) {
        e.destination = null;
        f++;
        y.splice(0, f);
        return;
      }
      y.splice(0, f);
      s(t);
      r = new Uint8Array(512);
      i = 0;
      var b = e.partialBoundaries;
      for (f = 0; f < b.length; f++) {
        var x = b[f];
        a: {
          d = e;
          p = t;
          var S = x.completedSegments;
          for (m = 0; m < S.length; m++) if (!Wn(d, p, x, S[m])) {
            m++;
            S.splice(0, m);
            var C = false;
            break a;
          }
          S.splice(0, m);
          C = true;
        }
        if (!C) {
          e.destination = null;
          f++;
          b.splice(0, f);
          return;
        }
      }
      b.splice(0, f);
      var w = e.completedBoundaries;
      for (f = 0; f < w.length; f++) if (!Un(e, t, w[f])) {
        e.destination = null;
        f++;
        w.splice(0, f);
        return;
      }
      w.splice(0, f);
    } finally {
      s(t);
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
    }
  }
  function Kn(e, t) {
    try {
      var n = e.abortableTasks;
      n.forEach(function (n) {
        return In(n, e, t);
      });
      n.clear();
      e.destination !== null && Gn(e, e.destination);
    } catch (t) {
      En(e, t);
      Dn(e, t);
    }
  }
  e.renderToReadableStream = function (e, t) {
    return new Promise(function (n, r) {
      var i;
      var a;
      var o = new Promise(function (e, t) {
        a = e;
        i = t;
      });
      var s = Cn(e, re(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), ie(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, a, function () {
        var e = new ReadableStream({
          type: `bytes`,
          pull: function (e) {
            if (s.status === 1) s.status = 2, f(e, s.fatalError);else if (s.status !== 2 && s.destination === null) {
              s.destination = e;
              try {
                Gn(s, e);
              } catch (e) {
                En(s, e);
                Dn(s, e);
              }
            }
          },
          cancel: function () {
            Kn(s);
          }
        }, {
          highWaterMark: 0
        });
        e.allReady = o;
        n(e);
      }, function (e) {
        o.catch(function () {});
        r(e);
      }, i);
      if (t && t.signal) {
        var c = t.signal;
        var l = function () {
          Kn(s, c.reason);
          c.removeEventListener(`abort`, l);
        };
        c.addEventListener(`abort`, l);
      }
      zn(s);
    });
  };
  e.version = `18.3.1`;
});
var w = o(e => {
  var t = S();
  var n = C();
  e.version = t.version;
  e.renderToString = t.renderToString;
  e.renderToStaticMarkup = t.renderToStaticMarkup;
  e.renderToNodeStream = t.renderToNodeStream;
  e.renderToStaticNodeStream = t.renderToStaticNodeStream;
  e.renderToReadableStream = n.renderToReadableStream;
});
var React = c(u(), 1);
var ReactDOMServer = w();
