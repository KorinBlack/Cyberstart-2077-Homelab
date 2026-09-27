/*
 * HTML-to-image helper from the original bundle. It runs only when the user
 * chooses "Capture Screenshot" in About. The flow is:
 * clone the page -> copy styles/fonts/images -> serialize it as SVG -> draw
 * that SVG on a canvas -> return a PNG data URL for a local download.
 * Resource fetches below read images/fonts/styles needed for that snapshot;
 * this file has no upload endpoint or background task.
 * Internal identifiers still reflect the compiled third-party library.
 */

function Bo(e, t) {
  if (e.match(/^[a-z]+:\/\//i)) return e;
  if (e.match(/^\/\//)) return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i)) return e;
  let n = document.implementation.createHTMLDocument();
  let r = n.createElement(`base`);
  let i = n.createElement(`a`);
  return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
var Vo = (() => {
  let e = 0;
  let t = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
  return () => (e += 1, `u${t()}${e}`);
})();
function Ho(e) {
  let t = [];
  for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
  return t;
}
var Uo = null;
function Wo(e = {}) {
  return Uo || (e.includeStyleProperties ? (Uo = e.includeStyleProperties, Uo) : (Uo = Ho(window.getComputedStyle(document.documentElement)), Uo));
}
function Go(e, t) {
  let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return n ? parseFloat(n.replace(`px`, ``)) : 0;
}
function Ko(e) {
  let t = Go(e, `border-left-width`);
  let n = Go(e, `border-right-width`);
  return e.clientWidth + t + n;
}
function qo(e) {
  let t = Go(e, `border-top-width`);
  let n = Go(e, `border-bottom-width`);
  return e.clientHeight + t + n;
}
function Jo(e, t = {}) {
  return {
    width: t.width || Ko(e),
    height: t.height || qo(e)
  };
}
function Yo() {
  let e;
  let t;
  try {
    t = process;
  } catch {}
  let n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
var Xo = 16384;
function Zo(e) {
  (e.width > Xo || e.height > Xo) && (e.width > Xo && e.height > Xo ? e.width > e.height ? (e.height *= Xo / e.width, e.width = Xo) : (e.width *= Xo / e.height, e.height = Xo) : e.width > Xo ? (e.height *= Xo / e.width, e.width = Xo) : (e.width *= Xo / e.height, e.height = Xo));
}
function Qo(e) {
  return new Promise((t, n) => {
    let r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => t(r));
      });
    };
    r.onerror = n;
    r.crossOrigin = `anonymous`;
    r.decoding = `async`;
    r.src = e;
  });
}
async function $o(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function es(e, t, n) {
  let r = `http://www.w3.org/2000/svg`;
  let i = document.createElementNS(r, `svg`);
  let a = document.createElementNS(r, `foreignObject`);
  return i.setAttribute(`width`, `${t}`), i.setAttribute(`height`, `${n}`), i.setAttribute(`viewBox`, `0 0 ${t} ${n}`), a.setAttribute(`width`, `100%`), a.setAttribute(`height`, `100%`), a.setAttribute(`x`, `0`), a.setAttribute(`y`, `0`), a.setAttribute(`externalResourcesRequired`, `true`), i.appendChild(a), a.appendChild(e), $o(i);
}
var ts = (e, t) => {
  if (e instanceof t) return true;
  let n = Object.getPrototypeOf(e);
  return n === null ? false : n.constructor.name === t.name || ts(n, t);
};
function ns(e) {
  let t = e.getPropertyValue(`content`);
  return `${e.cssText} content: '${t.replace(/'|"/g, ``)}';`;
}
function rs(e, t) {
  return Wo(t).map(t => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t) ? ` !important` : ``};`).join(` `);
}
function is(e, t, n, r) {
  let i = `.${e}:${t}`;
  let a = n.cssText ? ns(n) : rs(n, r);
  return document.createTextNode(`${i}{${a}}`);
}
function as(e, t, n, r) {
  let i = window.getComputedStyle(e, n);
  let a = i.getPropertyValue(`content`);
  if (a === `` || a === `none`) return;
  let o = Vo();
  try {
    t.className = `${t.className} ${o}`;
  } catch {
    return;
  }
  let s = document.createElement(`style`);
  s.appendChild(is(o, n, i, r));
  t.appendChild(s);
}
function os(e, t, n) {
  as(e, t, `:before`, n);
  as(e, t, `:after`, n);
}
var ss = `application/font-woff`;
var cs = `image/jpeg`;
var ls = {
  woff: ss,
  woff2: ss,
  ttf: `application/font-truetype`,
  eot: `application/vnd.ms-fontobject`,
  png: `image/png`,
  jpg: cs,
  jpeg: cs,
  gif: `image/gif`,
  tiff: `image/tiff`,
  svg: `image/svg+xml`,
  webp: `image/webp`
};
function us(e) {
  let t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : ``;
}
function ds(e) {
  return ls[us(e).toLowerCase()] || ``;
}
function fs(e) {
  return e.split(/,/)[1];
}
function ps(e) {
  return e.search(/^(data:)/) !== -1;
}
function ms(e, t) {
  return `data:${t};base64,${e}`;
}
async function hs(e, t, n) {
  let r = await fetch(e, t);
  if (r.status === 404) throw Error(`Resource "${r.url}" not found`);
  let i = await r.blob();
  return new Promise((e, t) => {
    let a = new FileReader();
    a.onerror = t;
    a.onloadend = () => {
      try {
        e(n({
          res: r,
          result: a.result
        }));
      } catch (e) {
        t(e);
      }
    };
    a.readAsDataURL(i);
  });
}
var gs = {};
function _s(e, t, n) {
  let r = e.replace(/\?.*/, ``);
  return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, ``)), t ? `[${t}]${r}` : r;
}
async function vs(e, t, n) {
  let r = _s(e, t, n.includeQueryParams);
  if (gs[r] != null) return gs[r];
  n.cacheBust && (e += (/\?/.test(e) ? `&` : `?`) + new Date().getTime());
  let i;
  try {
    i = ms(await hs(e, n.fetchRequestInit, ({
      res: e,
      result: n
    }) => (t ||= e.headers.get(`Content-Type`) || ``, fs(n))), t);
  } catch (t) {
    i = n.imagePlaceholder || ``;
    let r = `Failed to fetch resource: ${e}`;
    t && (r = typeof t == `string` ? t : t.message);
    r && console.warn(r);
  }
  return gs[r] = i, i;
}
async function ys(e) {
  let t = e.toDataURL();
  return t === `data:,` ? e.cloneNode(false) : Qo(t);
}
async function bs(e, t) {
  if (e.currentSrc) {
    let t = document.createElement(`canvas`);
    let n = t.getContext(`2d`);
    return t.width = e.clientWidth, t.height = e.clientHeight, n?.drawImage(e, 0, 0, t.width, t.height), Qo(t.toDataURL());
  }
  let n = e.poster;
  return Qo(await vs(n, ds(n), t));
}
async function xs(e, t) {
  try {
    if (e?.contentDocument?.body) return await js(e.contentDocument.body, t, true);
  } catch {}
  return e.cloneNode(false);
}
async function Ss(e, t) {
  return ts(e, HTMLCanvasElement) ? ys(e) : ts(e, HTMLVideoElement) ? bs(e, t) : ts(e, HTMLIFrameElement) ? xs(e, t) : e.cloneNode(ws(e));
}
var Cs = e => e.tagName != null && e.tagName.toUpperCase() === `SLOT`;
var ws = e => e.tagName != null && e.tagName.toUpperCase() === `SVG`;
async function Ts(e, t, n) {
  if (ws(t)) return t;
  let r = [];
  return r = Cs(e) && e.assignedNodes ? Ho(e.assignedNodes()) : ts(e, HTMLIFrameElement) && e.contentDocument?.body ? Ho(e.contentDocument.body.childNodes) : Ho((e.shadowRoot ?? e).childNodes), r.length === 0 || ts(e, HTMLVideoElement) || (await r.reduce((e, r) => e.then(() => js(r, n)).then(e => {
    e && t.appendChild(e);
  }), Promise.resolve())), t;
}
function Es(e, t, n) {
  let r = t.style;
  if (!r) return;
  let i = window.getComputedStyle(e);
  i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : Wo(n).forEach(n => {
    let a = i.getPropertyValue(n);
    n === `font-size` && a.endsWith(`px`) && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`);
    ts(e, HTMLIFrameElement) && n === `display` && a === `inline` && (a = `block`);
    n === `d` && t.getAttribute(`d`) && (a = `path(${t.getAttribute(`d`)})`);
    r.setProperty(n, a, i.getPropertyPriority(n));
  });
}
function Ds(e, t) {
  ts(e, HTMLTextAreaElement) && (t.innerHTML = e.value);
  ts(e, HTMLInputElement) && t.setAttribute(`value`, e.value);
}
function Os(e, t) {
  if (ts(e, HTMLSelectElement)) {
    let n = t;
    let r = Array.from(n.children).find(t => e.value === t.getAttribute(`value`));
    r && r.setAttribute(`selected`, ``);
  }
}
function ks(e, t, n) {
  return ts(t, Element) && (Es(e, t, n), os(e, t, n), Ds(e, t), Os(e, t)), t;
}
async function As(e, t) {
  let n = e.querySelectorAll ? e.querySelectorAll(`use`) : [];
  if (n.length === 0) return e;
  let r = {};
  for (let i = 0; i < n.length; i++) {
    let a = n[i].getAttribute(`xlink:href`);
    if (a) {
      let n = e.querySelector(a);
      let i = document.querySelector(a);
      !n && i && !r[a] && (r[a] = await js(i, t, true));
    }
  }
  let i = Object.values(r);
  if (i.length) {
    let t = `http://www.w3.org/1999/xhtml`;
    let n = document.createElementNS(t, `svg`);
    n.setAttribute(`xmlns`, t);
    n.style.position = `absolute`;
    n.style.width = `0`;
    n.style.height = `0`;
    n.style.overflow = `hidden`;
    n.style.display = `none`;
    let r = document.createElementNS(t, `defs`);
    n.appendChild(r);
    for (let e = 0; e < i.length; e++) r.appendChild(i[e]);
    e.appendChild(n);
  }
  return e;
}
async function js(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then(e => Ss(e, t)).then(n => Ts(e, n, t)).then(n => ks(e, n, t)).then(e => As(e, t));
}
var Ms = /url\((['"]?)([^'"]+?)\1\)/g;
var Ns = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
var Ps = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Fs(e) {
  let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, `\\$1`);
  return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, `g`);
}
function Is(e) {
  let t = [];
  return e.replace(Ms, (e, n, r) => (t.push(r), e)), t.filter(e => !ps(e));
}
async function Ls(e, t, n, r, i) {
  try {
    let a = n ? Bo(t, n) : t;
    let o = ds(t);
    let s;
    return s = i ? ms(await i(a), o) : await vs(a, o, r), e.replace(Fs(t), `$1${s}$3`);
  } catch {}
  return e;
}
function Rs(e, {
  preferredFontFormat: t
}) {
  return t ? e.replace(Ps, e => {
    for (;;) {
      let [n,, r] = Ns.exec(e) || [];
      if (!r) return ``;
      if (r === t) return `src: ${n};`;
    }
  }) : e;
}
function zs(e) {
  return e.search(Ms) !== -1;
}
async function Bs(e, t, n) {
  if (!zs(e)) return e;
  let r = Rs(e, n);
  return Is(r).reduce((e, r) => e.then(e => Ls(e, r, t, n)), Promise.resolve(r));
}
async function Vs(e, t, n) {
  let r = t.style?.getPropertyValue(e);
  if (r) {
    let i = await Bs(r, null, n);
    return t.style.setProperty(e, i, t.style.getPropertyPriority(e)), true;
  }
  return false;
}
async function Hs(e, t) {
  (await Vs(`background`, e, t)) || (await Vs(`background-image`, e, t));
  (await Vs(`mask`, e, t)) || (await Vs(`-webkit-mask`, e, t)) || (await Vs(`mask-image`, e, t)) || (await Vs(`-webkit-mask-image`, e, t));
}
async function Us(e, t) {
  let n = ts(e, HTMLImageElement);
  if (!(n && !ps(e.src)) && !(ts(e, SVGImageElement) && !ps(e.href.baseVal))) return;
  let r = n ? e.src : e.href.baseVal;
  let i = await vs(r, ds(r), t);
  await new Promise((r, a) => {
    e.onload = r;
    e.onerror = t.onImageErrorHandler ? (...e) => {
      try {
        r(t.onImageErrorHandler(...e));
      } catch (e) {
        a(e);
      }
    } : a;
    let o = e;
    o.decode &&= r;
    o.loading === `lazy` && (o.loading = `eager`);
    n ? (e.srcset = ``, e.src = i) : e.href.baseVal = i;
  });
}
async function Ws(e, t) {
  let n = Ho(e.childNodes).map(e => Gs(e, t));
  await Promise.all(n).then(() => e);
}
async function Gs(e, t) {
  ts(e, Element) && (await Hs(e, t), await Us(e, t), await Ws(e, t));
}
function Ks(e, t) {
  let {
    style: n
  } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor);
  t.width && (n.width = `${t.width}px`);
  t.height && (n.height = `${t.height}px`);
  let r = t.style;
  return r != null && Object.keys(r).forEach(e => {
    n[e] = r[e];
  }), e;
}
var qs = {};
async function Js(e) {
  let t = qs[e];
  return t ?? (t = {
    url: e,
    cssText: await (await fetch(e)).text()
  }, qs[e] = t, t);
}
async function Ys(e, t) {
  let n = e.cssText;
  let r = /url\(["']?([^"')]+)["']?\)/g;
  let i = (n.match(/url\([^)]+\)/g) || []).map(async i => {
    let a = i.replace(r, `$1`);
    return a.startsWith(`https://`) || (a = new URL(a, e.url).href), hs(a, t.fetchRequestInit, ({
      result: e
    }) => (n = n.replace(i, `url(${e})`), [i, e]));
  });
  return Promise.all(i).then(() => n);
}
function Xs(e) {
  if (e == null) return [];
  let t = [];
  let n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ``);
  let r = RegExp(`((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})`, `gi`);
  for (;;) {
    let e = r.exec(n);
    if (e === null) break;
    t.push(e[0]);
  }
  n = n.replace(r, ``);
  let i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
  let a = RegExp(`((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})`, `gi`);
  for (;;) {
    let e = i.exec(n);
    if (e === null) {
      if (e = a.exec(n), e === null) break;
      i.lastIndex = a.lastIndex;
    } else a.lastIndex = i.lastIndex;
    t.push(e[0]);
  }
  return t;
}
async function Zs(e, t) {
  let n = [];
  let r = [];
  return e.forEach(n => {
    if (`cssRules` in n) try {
      Ho(n.cssRules || []).forEach((e, i) => {
        if (e.type === CSSRule.IMPORT_RULE) {
          let a = i + 1;
          let o = e.href;
          let s = Js(o).then(e => Ys(e, t)).then(e => Xs(e).forEach(e => {
            try {
              n.insertRule(e, e.startsWith(`@import`) ? a += 1 : n.cssRules.length);
            } catch (t) {
              console.error(`Error inserting rule from remote css`, {
                rule: e,
                error: t
              });
            }
          })).catch(e => {
            console.error(`Error loading remote css`, e.toString());
          });
          r.push(s);
        }
      });
    } catch (i) {
      let a = e.find(e => e.href == null) || document.styleSheets[0];
      n.href != null && r.push(Js(n.href).then(e => Ys(e, t)).then(e => Xs(e).forEach(e => {
        a.insertRule(e, a.cssRules.length);
      })).catch(e => {
        console.error(`Error loading remote stylesheet`, e);
      }));
      console.error(`Error inlining remote css file`, i);
    }
  }), Promise.all(r).then(() => (e.forEach(e => {
    if (`cssRules` in e) try {
      Ho(e.cssRules || []).forEach(e => {
        n.push(e);
      });
    } catch (t) {
      console.error(`Error while reading CSS rules from ${e.href}`, t);
    }
  }), n));
}
function Qs(e) {
  return e.filter(e => e.type === CSSRule.FONT_FACE_RULE).filter(e => zs(e.style.getPropertyValue(`src`)));
}
async function $s(e, t) {
  if (e.ownerDocument == null) throw Error(`Provided element is not within a Document`);
  return Qs(await Zs(Ho(e.ownerDocument.styleSheets), t));
}
function ec(e) {
  return e.trim().replace(/["']/g, ``);
}
function tc(e) {
  let t = new Set();
  function n(e) {
    (e.style.fontFamily || getComputedStyle(e).fontFamily).split(`,`).forEach(e => {
      t.add(ec(e));
    });
    Array.from(e.children).forEach(e => {
      e instanceof HTMLElement && n(e);
    });
  }
  return n(e), t;
}
async function nc(e, t) {
  let n = await $s(e, t);
  let r = tc(e);
  return (await Promise.all(n.filter(e => r.has(ec(e.style.fontFamily))).map(e => {
    let n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
    return Bs(e.cssText, n, t);
  }))).join(`
`);
}
async function rc(e, t) {
  let n = t.fontEmbedCSS == null ? t.skipFonts ? null : await nc(e, t) : t.fontEmbedCSS;
  if (n) {
    let t = document.createElement(`style`);
    let r = document.createTextNode(n);
    t.appendChild(r);
    e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
  }
}
async function serializeElementToSvg(e, t = {}) {
  let {
    width: n,
    height: r
  } = Jo(e, t);
  let i = await js(e, t, true);
  return await rc(i, t), await Gs(i, t), Ks(i, t), await es(i, n, r);
}
async function renderElementToCanvas(e, t = {}) {
  let {
    width: n,
    height: r
  } = Jo(e, t);
  let i = await Qo(await serializeElementToSvg(e, t));
  let a = document.createElement(`canvas`);
  let o = a.getContext(`2d`);
  let s = t.pixelRatio || Yo();
  let c = t.canvasWidth || n;
  let l = t.canvasHeight || r;
  return a.width = c * s, a.height = l * s, t.skipAutoScale || Zo(a), a.style.width = `${c}`, a.style.height = `${l}`, t.backgroundColor && (o.fillStyle = t.backgroundColor, o.fillRect(0, 0, a.width, a.height)), o.drawImage(i, 0, 0, a.width, a.height), a;
}
async function renderElementToPngDataUrl(e, t = {}) {
  return (await renderElementToCanvas(e, t)).toDataURL();
}
