/*
 * Cyberstart 2077 Custom — generated from src/app and src/vendor.
 * Edit the files in src/app, then run: node scripts/build.cjs
 * Based on Cyberpunk 2077 Themed Homepage 1.18 by TealLogic (MPL-2.0).
 */

;
// #region vendor/00-react-runtime.js
/* React runtime and DOM client. Shared scope; build with node scripts/build.cjs. */
/*
 * Cyberpunk 2077 Themed Homepage v1.18 by TealLogic (MPL-2.0).
 * Readable formatting of the distributed JavaScript bundle.
 * The original minified names cannot be recovered without source maps.
 * Original package provenance is documented in THIRD_PARTY_NOTICES.md.
 */
var e = Object.create;
var t = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;
var o = (e, t) => () => (t || (e((t = {
  exports: {}
}).exports, t), e = null), t.exports);
var s = (e, i, o, s) => {
  if (i && typeof i == `object` || typeof i == `function`) for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
    get: (e => i[e]).bind(null, d),
    enumerable: !(s = n(i, d)) || s.enumerable
  });
  return e;
};
var c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, `default`) ? t(o, `default`, {
  value: n,
  enumerable: !0
}) : o, n));
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver(e => {
    for (let t of e) if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function t(e) {
    let t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`, t;
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var l = o(e => {
  var t = Symbol.for(`react.element`),
    n = Symbol.for(`react.portal`),
    r = Symbol.for(`react.fragment`),
    i = Symbol.for(`react.strict_mode`),
    a = Symbol.for(`react.profiler`),
    o = Symbol.for(`react.provider`),
    s = Symbol.for(`react.context`),
    c = Symbol.for(`react.forward_ref`),
    l = Symbol.for(`react.suspense`),
    u = Symbol.for(`react.memo`),
    d = Symbol.for(`react.lazy`),
    f = Symbol.iterator;
  function p(e) {
    return typeof e != `object` || !e ? null : (e = f && e[f] || e[`@@iterator`], typeof e == `function` ? e : null);
  }
  var m = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    h = Object.assign,
    g = {};
  function _(e, t, n) {
    this.props = e, this.context = t, this.refs = g, this.updater = n || m;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function (e, t) {
    if (typeof e != `object` && typeof e != `function` && e != null) throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);
    this.updater.enqueueSetState(this, e, t, `setState`);
  }, _.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
  };
  function v() {}
  v.prototype = _.prototype;
  function y(e, t, n) {
    this.props = e, this.context = t, this.refs = g, this.updater = n || m;
  }
  var b = y.prototype = new v();
  b.constructor = y, h(b, _.prototype), b.isPureReactComponent = !0;
  var x = Array.isArray,
    S = Object.prototype.hasOwnProperty,
    C = {
      current: null
    },
    w = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function T(e, n, r) {
    var i,
      a = {},
      o = null,
      s = null;
    if (n != null) for (i in n.ref !== void 0 && (s = n.ref), n.key !== void 0 && (o = `` + n.key), n) S.call(n, i) && !w.hasOwnProperty(i) && (a[i] = n[i]);
    var c = arguments.length - 2;
    if (c === 1) a.children = r;else if (1 < c) {
      for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
      a.children = l;
    }
    if (e && e.defaultProps) for (i in c = e.defaultProps, c) a[i] === void 0 && (a[i] = c[i]);
    return {
      $$typeof: t,
      type: e,
      key: o,
      ref: s,
      props: a,
      _owner: C.current
    };
  }
  function ee(e, n) {
    return {
      $$typeof: t,
      type: e.type,
      key: n,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function E(e) {
    return typeof e == `object` && !!e && e.$$typeof === t;
  }
  function D(e) {
    var t = {
      "=": `=0`,
      ":": `=2`
    };
    return `$` + e.replace(/[=:]/g, function (e) {
      return t[e];
    });
  }
  var O = /\/+/g;
  function k(e, t) {
    return typeof e == `object` && e && e.key != null ? D(`` + e.key) : t.toString(36);
  }
  function te(e, r, i, a, o) {
    var s = typeof e;
    (s === `undefined` || s === `boolean`) && (e = null);
    var c = !1;
    if (e === null) c = !0;else switch (s) {
      case `string`:
      case `number`:
        c = !0;
        break;
      case `object`:
        switch (e.$$typeof) {
          case t:
          case n:
            c = !0;
        }
    }
    if (c) return c = e, o = o(c), e = a === `` ? `.` + k(c, 0) : a, x(o) ? (i = ``, e != null && (i = e.replace(O, `$&/`) + `/`), te(o, r, i, ``, function (e) {
      return e;
    })) : o != null && (E(o) && (o = ee(o, i + (!o.key || c && c.key === o.key ? `` : (`` + o.key).replace(O, `$&/`) + `/`) + e)), r.push(o)), 1;
    if (c = 0, a = a === `` ? `.` : a + `:`, x(e)) for (var l = 0; l < e.length; l++) {
      s = e[l];
      var u = a + k(s, l);
      c += te(s, r, i, u, o);
    } else if (u = p(e), typeof u == `function`) for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = a + k(s, l++), c += te(s, r, i, u, o);else if (s === `object`) throw r = String(e), Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`);
    return c;
  }
  function A(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return te(e, r, ``, ``, function (e) {
      return t.call(n, e, i++);
    }), r;
  }
  function ne(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function (t) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
      }, function (t) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var j = {
      current: null
    },
    M = {
      transition: null
    },
    re = {
      ReactCurrentDispatcher: j,
      ReactCurrentBatchConfig: M,
      ReactCurrentOwner: C
    };
  function N() {
    throw Error(`act(...) is not supported in production builds of React.`);
  }
  e.Children = {
    map: A,
    forEach: function (e, t, n) {
      A(e, function () {
        t.apply(this, arguments);
      }, n);
    },
    count: function (e) {
      var t = 0;
      return A(e, function () {
        t++;
      }), t;
    },
    toArray: function (e) {
      return A(e, function (e) {
        return e;
      }) || [];
    },
    only: function (e) {
      if (!E(e)) throw Error(`React.Children.only expected to receive a single React element child.`);
      return e;
    }
  }, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, e.act = N, e.cloneElement = function (e, n, r) {
    if (e == null) throw Error(`React.cloneElement(...): The argument must be a React element, but you passed ` + e + `.`);
    var i = h({}, e.props),
      a = e.key,
      o = e.ref,
      s = e._owner;
    if (n != null) {
      if (n.ref !== void 0 && (o = n.ref, s = C.current), n.key !== void 0 && (a = `` + n.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
      for (l in n) S.call(n, l) && !w.hasOwnProperty(l) && (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) i.children = r;else if (1 < l) {
      c = Array(l);
      for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
      i.children = c;
    }
    return {
      $$typeof: t,
      type: e.type,
      key: a,
      ref: o,
      props: i,
      _owner: s
    };
  }, e.createContext = function (e) {
    return e = {
      $$typeof: s,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, e.Provider = {
      $$typeof: o,
      _context: e
    }, e.Consumer = e;
  }, e.createElement = T, e.createFactory = function (e) {
    var t = T.bind(null, e);
    return t.type = e, t;
  }, e.createRef = function () {
    return {
      current: null
    };
  }, e.forwardRef = function (e) {
    return {
      $$typeof: c,
      render: e
    };
  }, e.isValidElement = E, e.lazy = function (e) {
    return {
      $$typeof: d,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: ne
    };
  }, e.memo = function (e, t) {
    return {
      $$typeof: u,
      type: e,
      compare: t === void 0 ? null : t
    };
  }, e.startTransition = function (e) {
    var t = M.transition;
    M.transition = {};
    try {
      e();
    } finally {
      M.transition = t;
    }
  }, e.unstable_act = N, e.useCallback = function (e, t) {
    return j.current.useCallback(e, t);
  }, e.useContext = function (e) {
    return j.current.useContext(e);
  }, e.useDebugValue = function () {}, e.useDeferredValue = function (e) {
    return j.current.useDeferredValue(e);
  }, e.useEffect = function (e, t) {
    return j.current.useEffect(e, t);
  }, e.useId = function () {
    return j.current.useId();
  }, e.useImperativeHandle = function (e, t, n) {
    return j.current.useImperativeHandle(e, t, n);
  }, e.useInsertionEffect = function (e, t) {
    return j.current.useInsertionEffect(e, t);
  }, e.useLayoutEffect = function (e, t) {
    return j.current.useLayoutEffect(e, t);
  }, e.useMemo = function (e, t) {
    return j.current.useMemo(e, t);
  }, e.useReducer = function (e, t, n) {
    return j.current.useReducer(e, t, n);
  }, e.useRef = function (e) {
    return j.current.useRef(e);
  }, e.useState = function (e) {
    return j.current.useState(e);
  }, e.useSyncExternalStore = function (e, t, n) {
    return j.current.useSyncExternalStore(e, t, n);
  }, e.useTransition = function () {
    return j.current.useTransition();
  }, e.version = `18.3.1`;
});
var u = o((e, t) => {
  t.exports = l();
});
var d = o(e => {
  function t(e, t) {
    var n = e.length;
    e.push(t);
    a: for (; 0 < n;) {
      var r = n - 1 >>> 1,
        a = e[r];
      if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;else break a;
    }
  }
  function n(e) {
    return e.length === 0 ? null : e[0];
  }
  function r(e) {
    if (e.length === 0) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
        var s = 2 * (r + 1) - 1,
          c = e[s],
          l = s + 1,
          u = e[l];
        if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;else break a;
      }
    }
    return t;
  }
  function i(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n === 0 ? e.id - t.id : n;
  }
  if (typeof performance == `object` && typeof performance.now == `function`) {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var c = [],
    l = [],
    u = 1,
    d = null,
    f = 3,
    p = !1,
    m = !1,
    h = !1,
    g = typeof setTimeout == `function` ? setTimeout : null,
    _ = typeof clearTimeout == `function` ? clearTimeout : null,
    v = typeof setImmediate < `u` ? setImmediate : null;
  typeof navigator < `u` && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(e) {
    for (var i = n(l); i !== null;) {
      if (i.callback === null) r(l);else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);else break;
      i = n(l);
    }
  }
  function b(e) {
    if (h = !1, y(e), !m) {
      if (n(c) !== null) m = !0, A(x);else {
        var t = n(l);
        t !== null && ne(b, t.startTime - e);
      }
    }
  }
  function x(t, i) {
    m = !1, h && (h = !1, _(w), w = -1), p = !0;
    var a = f;
    try {
      for (y(i), d = n(c); d !== null && (!(d.expirationTime > i) || t && !E());) {
        var o = d.callback;
        if (typeof o == `function`) {
          d.callback = null, f = d.priorityLevel;
          var s = o(d.expirationTime <= i);
          i = e.unstable_now(), typeof s == `function` ? d.callback = s : d === n(c) && r(c), y(i);
        } else r(c);
        d = n(c);
      }
      if (d !== null) var u = !0;else {
        var g = n(l);
        g !== null && ne(b, g.startTime - i), u = !1;
      }
      return u;
    } finally {
      d = null, f = a, p = !1;
    }
  }
  var S = !1,
    C = null,
    w = -1,
    T = 5,
    ee = -1;
  function E() {
    return !(e.unstable_now() - ee < T);
  }
  function D() {
    if (C !== null) {
      var t = e.unstable_now();
      ee = t;
      var n = !0;
      try {
        n = C(!0, t);
      } finally {
        n ? O() : (S = !1, C = null);
      }
    } else S = !1;
  }
  var O;
  if (typeof v == `function`) O = function () {
    v(D);
  };else if (typeof MessageChannel < `u`) {
    var k = new MessageChannel(),
      te = k.port2;
    k.port1.onmessage = D, O = function () {
      te.postMessage(null);
    };
  } else O = function () {
    g(D, 0);
  };
  function A(e) {
    C = e, S || (S = !0, O());
  }
  function ne(t, n) {
    w = g(function () {
      t(e.unstable_now());
    }, n);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (e) {
    e.callback = null;
  }, e.unstable_continueExecution = function () {
    m || p || (m = !0, A(x));
  }, e.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : T = 0 < e ? Math.floor(1e3 / e) : 5;
  }, e.unstable_getCurrentPriorityLevel = function () {
    return f;
  }, e.unstable_getFirstCallbackNode = function () {
    return n(c);
  }, e.unstable_next = function (e) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = f;
    }
    var n = f;
    f = t;
    try {
      return e();
    } finally {
      f = n;
    }
  }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var n = f;
    f = e;
    try {
      return t();
    } finally {
      f = n;
    }
  }, e.unstable_scheduleCallback = function (r, i, a) {
    var o = e.unstable_now();
    switch (typeof a == `object` && a ? (a = a.delay, a = typeof a == `number` && 0 < a ? o + a : o) : a = o, r) {
      case 1:
        var s = -1;
        break;
      case 2:
        s = 250;
        break;
      case 5:
        s = 1073741823;
        break;
      case 4:
        s = 1e4;
        break;
      default:
        s = 5e3;
    }
    return s = a + s, r = {
      id: u++,
      callback: i,
      priorityLevel: r,
      startTime: a,
      expirationTime: s,
      sortIndex: -1
    }, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (_(w), w = -1) : h = !0, ne(b, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, A(x))), r;
  }, e.unstable_shouldYield = E, e.unstable_wrapCallback = function (e) {
    var t = f;
    return function () {
      var n = f;
      f = t;
      try {
        return e.apply(this, arguments);
      } finally {
        f = n;
      }
    };
  };
});
var f = o((e, t) => {
  t.exports = d();
});
var p = o(e => {
  var t = u(),
    n = f();
  function r(e) {
    for (var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
    return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  var i = new Set(),
    a = {};
  function o(e, t) {
    s(e, t), s(e + `Capture`, t);
  }
  function s(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
  }
  var c = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0),
    l = Object.prototype.hasOwnProperty,
    d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    p = {},
    m = {};
  function h(e) {
    return l.call(m, e) ? !0 : l.call(p, e) ? !1 : d.test(e) ? m[e] = !0 : (p[e] = !0, !1);
  }
  function g(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case `function`:
      case `symbol`:
        return !0;
      case `boolean`:
        return r ? !1 : n === null ? (e = e.toLowerCase().slice(0, 5), e !== `data-` && e !== `aria-`) : !n.acceptsBooleans;
      default:
        return !1;
    }
  }
  function _(e, t, n, r) {
    if (t == null || g(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return !1 === t;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
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
  function S(e, t, n, r) {
    var i = y.hasOwnProperty(t) ? y[t] : null;
    (i === null ? r || !(2 < t.length) || t[0] !== `o` && t[0] !== `O` || t[1] !== `n` && t[1] !== `N` : i.type !== 0) && (_(t, n, i, r) && (n = null), r || i === null ? h(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, `` + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && `` : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && !0 === n ? `` : `` + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    w = Symbol.for(`react.element`),
    T = Symbol.for(`react.portal`),
    ee = Symbol.for(`react.fragment`),
    E = Symbol.for(`react.strict_mode`),
    D = Symbol.for(`react.profiler`),
    O = Symbol.for(`react.provider`),
    k = Symbol.for(`react.context`),
    te = Symbol.for(`react.forward_ref`),
    A = Symbol.for(`react.suspense`),
    ne = Symbol.for(`react.suspense_list`),
    j = Symbol.for(`react.memo`),
    M = Symbol.for(`react.lazy`),
    re = Symbol.for(`react.offscreen`),
    N = Symbol.iterator;
  function ie(e) {
    return typeof e != `object` || !e ? null : (e = N && e[N] || e[`@@iterator`], typeof e == `function` ? e : null);
  }
  var P = Object.assign,
    ae;
  function F(e) {
    if (ae === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      ae = t && t[1] || ``;
    }
    return `
` + ae + e;
  }
  var oe = !1;
  function se(e, t) {
    if (!e || oe) return ``;
    oe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) {
        if (t = function () {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          }
        }), typeof Reflect == `object` && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (e) {
            var r = e;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (e) {
            r = e;
          }
          e.call(t.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (e) {
          r = e;
        }
        e();
      }
    } catch (t) {
      if (t && r && typeof t.stack == `string`) {
        for (var i = t.stack.split(`
`), a = r.stack.split(`
`), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s];) s--;
        for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
          if (o !== 1 || s !== 1) do if (o--, s--, 0 > s || i[o] !== a[s]) {
            var c = `
` + i[o].replace(` at new `, ` at `);
            return e.displayName && c.includes(`<anonymous>`) && (c = c.replace(`<anonymous>`, e.displayName)), c;
          } while (1 <= o && 0 <= s);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : ``) ? F(e) : ``;
  }
  function ce(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F(`Lazy`);
      case 13:
        return F(`Suspense`);
      case 19:
        return F(`SuspenseList`);
      case 0:
      case 2:
      case 15:
        return e = se(e.type, !1), e;
      case 11:
        return e = se(e.type.render, !1), e;
      case 1:
        return e = se(e.type, !0), e;
      default:
        return ``;
    }
  }
  function I(e) {
    if (e == null) return null;
    if (typeof e == `function`) return e.displayName || e.name || null;
    if (typeof e == `string`) return e;
    switch (e) {
      case ee:
        return `Fragment`;
      case T:
        return `Portal`;
      case D:
        return `Profiler`;
      case E:
        return `StrictMode`;
      case A:
        return `Suspense`;
      case ne:
        return `SuspenseList`;
    }
    if (typeof e == `object`) switch (e.$$typeof) {
      case k:
        return (e.displayName || `Context`) + `.Consumer`;
      case O:
        return (e._context.displayName || `Context`) + `.Provider`;
      case te:
        var t = e.render;
        return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
      case j:
        return t = e.displayName || null, t === null ? I(e.type) || `Memo` : t;
      case M:
        t = e._payload, e = e._init;
        try {
          return I(e(t));
        } catch {}
    }
    return null;
  }
  function le(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return `Cache`;
      case 9:
        return (t.displayName || `Context`) + `.Consumer`;
      case 10:
        return (t._context.displayName || `Context`) + `.Provider`;
      case 18:
        return `DehydratedFragment`;
      case 11:
        return e = t.render, e = e.displayName || e.name || ``, t.displayName || (e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`);
      case 7:
        return `Fragment`;
      case 5:
        return t;
      case 4:
        return `Portal`;
      case 3:
        return `Root`;
      case 6:
        return `Text`;
      case 16:
        return I(t);
      case 8:
        return t === E ? `StrictMode` : `Mode`;
      case 22:
        return `Offscreen`;
      case 12:
        return `Profiler`;
      case 21:
        return `Scope`;
      case 13:
        return `Suspense`;
      case 19:
        return `SuspenseList`;
      case 25:
        return `TracingMarker`;
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == `function`) return t.displayName || t.name || null;
        if (typeof t == `string`) return t;
    }
    return null;
  }
  function L(e) {
    switch (typeof e) {
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e;
      case `object`:
        return e;
      default:
        return ``;
    }
  }
  function ue(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
  }
  function de(e) {
    var t = ue(e) ? `checked` : `value`,
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = `` + e[t];
    if (!e.hasOwnProperty(t) && n !== void 0 && typeof n.get == `function` && typeof n.set == `function`) {
      var i = n.get,
        a = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (e) {
          r = `` + e, a.call(this, e);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function () {
          return r;
        },
        setValue: function (e) {
          r = `` + e;
        },
        stopTracking: function () {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function fe(e) {
    e._valueTracker ||= de(e);
  }
  function R(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = ``;
    return e && (r = ue(e) ? e.checked ? `true` : `false` : e.value), e = r, e !== n && (t.setValue(e), !0);
  }
  function pe(e) {
    if (e ||= typeof document < `u` ? document : void 0, e === void 0) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function me(e, t) {
    var n = t.checked;
    return P({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
    });
  }
  function he(e, t) {
    var n = t.defaultValue == null ? `` : t.defaultValue,
      r = t.checked == null ? t.defaultChecked : t.checked;
    n = L(t.value == null ? n : t.value), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === `checkbox` || t.type === `radio` ? t.checked != null : t.value != null
    };
  }
  function ge(e, t) {
    t = t.checked, t != null && S(e, `checked`, t, !1);
  }
  function _e(e, t) {
    ge(e, t);
    var n = L(t.value),
      r = t.type;
    if (n != null) r === `number` ? (n === 0 && e.value === `` || e.value != n) && (e.value = `` + n) : e.value !== `` + n && (e.value = `` + n);else if (r === `submit` || r === `reset`) {
      e.removeAttribute(`value`);
      return;
    }
    t.hasOwnProperty(`value`) ? ye(e, t.type, n) : t.hasOwnProperty(`defaultValue`) && ye(e, t.type, L(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ve(e, t, n) {
    if (t.hasOwnProperty(`value`) || t.hasOwnProperty(`defaultValue`)) {
      var r = t.type;
      if (!(r !== `submit` && r !== `reset` || t.value !== void 0 && t.value !== null)) return;
      t = `` + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== `` && (e.name = ``), e.defaultChecked = !!e._wrapperState.initialChecked, n !== `` && (e.name = n);
  }
  function ye(e, t, n) {
    (t !== `number` || pe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = `` + e._wrapperState.initialValue : e.defaultValue !== `` + n && (e.defaultValue = `` + n));
  }
  var z = Array.isArray;
  function B(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty(`$` + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = `` + L(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function V(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
    return P({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: `` + e._wrapperState.initialValue
    });
  }
  function be(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(r(92));
        if (z(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        t = n;
      }
      t ??= ``, n = t;
    }
    e._wrapperState = {
      initialValue: L(n)
    };
  }
  function xe(e, t) {
    var n = L(t.value),
      r = L(t.defaultValue);
    n != null && (n = `` + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = `` + r);
  }
  function Se(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== `` && t !== null && (e.value = t);
  }
  function Ce(e) {
    switch (e) {
      case `svg`:
        return `http://www.w3.org/2000/svg`;
      case `math`:
        return `http://www.w3.org/1998/Math/MathML`;
      default:
        return `http://www.w3.org/1999/xhtml`;
    }
  }
  function we(e, t) {
    return e == null || e === `http://www.w3.org/1999/xhtml` ? Ce(t) : e === `http://www.w3.org/2000/svg` && t === `foreignObject` ? `http://www.w3.org/1999/xhtml` : e;
  }
  var Te,
    Ee = function (e) {
      return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
          return e(t, n, r, i);
        });
      } : e;
    }(function (e, t) {
      if (e.namespaceURI !== `http://www.w3.org/2000/svg` || `innerHTML` in e) e.innerHTML = t;else {
        for (Te ||= document.createElement(`div`), Te.innerHTML = `<svg>` + t.valueOf().toString() + `</svg>`, t = Te.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function De(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Oe = {
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
    ke = [`Webkit`, `ms`, `Moz`, `O`];
  Object.keys(Oe).forEach(function (e) {
    ke.forEach(function (t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Oe[t] = Oe[e];
    });
  });
  function Ae(e, t, n) {
    return t == null || typeof t == `boolean` || t === `` ? `` : n || typeof t != `number` || t === 0 || Oe.hasOwnProperty(e) && Oe[e] ? (`` + t).trim() : t + `px`;
  }
  function je(e, t) {
    for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf(`--`) === 0,
        i = Ae(n, t[n], r);
      n === `float` && (n = `cssFloat`), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Me = P({
    menuitem: !0
  }, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  });
  function Ne(e, t) {
    if (t) {
      if (Me[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(r(60));
        if (typeof t.dangerouslySetInnerHTML != `object` || !(`__html` in t.dangerouslySetInnerHTML)) throw Error(r(61));
      }
      if (t.style != null && typeof t.style != `object`) throw Error(r(62));
    }
  }
  function Pe(e, t) {
    if (e.indexOf(`-`) === -1) return typeof t.is == `string`;
    switch (e) {
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return !1;
      default:
        return !0;
    }
  }
  var Fe = null;
  function Ie(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Le = null,
    H = null,
    Re = null;
  function ze(e) {
    if (e = Pi(e)) {
      if (typeof Le != `function`) throw Error(r(280));
      var t = e.stateNode;
      t && (t = Ii(t), Le(e.stateNode, e.type, t));
    }
  }
  function Be(e) {
    H ? Re ? Re.push(e) : Re = [e] : H = e;
  }
  function Ve() {
    if (H) {
      var e = H,
        t = Re;
      if (Re = H = null, ze(e), t) for (e = 0; e < t.length; e++) ze(t[e]);
    }
  }
  function He(e, t) {
    return e(t);
  }
  function Ue() {}
  var We = !1;
  function Ge(e, t, n) {
    if (We) return e(t, n);
    We = !0;
    try {
      return He(e, t, n);
    } finally {
      We = !1, (H !== null || Re !== null) && (Ue(), Ve());
    }
  }
  function Ke(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = Ii(n);
    if (i === null) return null;
    n = i[t];
    a: switch (t) {
      case `onClick`:
      case `onClickCapture`:
      case `onDoubleClick`:
      case `onDoubleClickCapture`:
      case `onMouseDown`:
      case `onMouseDownCapture`:
      case `onMouseMove`:
      case `onMouseMoveCapture`:
      case `onMouseUp`:
      case `onMouseUpCapture`:
      case `onMouseEnter`:
        (i = !i.disabled) || (e = e.type, i = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`), e = !i;
        break a;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != `function`) throw Error(r(231, t, typeof n));
    return n;
  }
  var qe = !1;
  if (c) try {
    var Je = {};
    Object.defineProperty(Je, "passive", {
      get: function () {
        qe = !0;
      }
    }), window.addEventListener(`test`, Je, Je), window.removeEventListener(`test`, Je, Je);
  } catch {
    qe = !1;
  }
  function Ye(e, t, n, r, i, a, o, s, c) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, l);
    } catch (e) {
      this.onError(e);
    }
  }
  var Xe = !1,
    Ze = null,
    Qe = !1,
    $e = null,
    et = {
      onError: function (e) {
        Xe = !0, Ze = e;
      }
    };
  function tt(e, t, n, r, i, a, o, s, c) {
    Xe = !1, Ze = null, Ye.apply(et, arguments);
  }
  function nt(e, t, n, i, a, o, s, c, l) {
    if (tt.apply(this, arguments), Xe) {
      if (Xe) {
        var u = Ze;
        Xe = !1, Ze = null;
      } else throw Error(r(198));
      Qe || (Qe = !0, $e = u);
    }
  }
  function rt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return;) t = t.return;else {
      e = t;
      do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function it(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function at(e) {
    if (rt(e) !== e) throw Error(r(188));
  }
  function ot(e) {
    var t = e.alternate;
    if (!t) {
      if (t = rt(e), t === null) throw Error(r(188));
      return t === e ? e : null;
    }
    for (var n = e, i = t;;) {
      var a = n.return;
      if (a === null) break;
      var o = a.alternate;
      if (o === null) {
        if (i = a.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (a.child === o.child) {
        for (o = a.child; o;) {
          if (o === n) return at(a), e;
          if (o === i) return at(a), t;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) n = a, i = o;else {
        for (var s = !1, c = a.child; c;) {
          if (c === n) {
            s = !0, n = a, i = o;
            break;
          }
          if (c === i) {
            s = !0, i = a, n = o;
            break;
          }
          c = c.sibling;
        }
        if (!s) {
          for (c = o.child; c;) {
            if (c === n) {
              s = !0, n = o, i = a;
              break;
            }
            if (c === i) {
              s = !0, i = o, n = a;
              break;
            }
            c = c.sibling;
          }
          if (!s) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function st(e) {
    return e = ot(e), e === null ? null : ct(e);
  }
  function ct(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = ct(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var lt = n.unstable_scheduleCallback,
    ut = n.unstable_cancelCallback,
    dt = n.unstable_shouldYield,
    ft = n.unstable_requestPaint,
    U = n.unstable_now,
    pt = n.unstable_getCurrentPriorityLevel,
    mt = n.unstable_ImmediatePriority,
    ht = n.unstable_UserBlockingPriority,
    gt = n.unstable_NormalPriority,
    _t = n.unstable_LowPriority,
    vt = n.unstable_IdlePriority,
    yt = null,
    bt = null;
  function W(e) {
    if (bt && typeof bt.onCommitFiberRoot == `function`) try {
      bt.onCommitFiberRoot(yt, e, void 0, (e.current.flags & 128) == 128);
    } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : wt,
    St = Math.log,
    Ct = Math.LN2;
  function wt(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (St(e) / Ct | 0) | 0;
  }
  var Tt = 64,
    Et = 4194304;
  function Dt(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ot(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      a = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var s = o & ~i;
      s === 0 ? (a &= o, a !== 0 && (r = Dt(a))) : r = Dt(s);
    } else o = n & ~i, o === 0 ? a !== 0 && (r = Dt(a)) : r = Dt(o);
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - xt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function G(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function kt(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
      var o = 31 - xt(a),
        s = 1 << o,
        c = i[o];
      c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = G(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
    }
  }
  function At(e) {
    return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
  }
  function jt() {
    var e = Tt;
    return Tt <<= 1, !(Tt & 4194240) && (Tt = 64), e;
  }
  function Mt(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Nt(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = n;
  }
  function Pt(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
      var i = 31 - xt(n),
        a = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
    }
  }
  function Ft(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
      var r = 31 - xt(n),
        i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var K = 0;
  function It(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Lt,
    Rt,
    zt,
    Bt,
    Vt,
    Ht = !1,
    Ut = [],
    Wt = null,
    Gt = null,
    Kt = null,
    qt = new Map(),
    Jt = new Map(),
    Yt = [],
    Xt = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);
  function Zt(e, t) {
    switch (e) {
      case `focusin`:
      case `focusout`:
        Wt = null;
        break;
      case `dragenter`:
      case `dragleave`:
        Gt = null;
        break;
      case `mouseover`:
      case `mouseout`:
        Kt = null;
        break;
      case `pointerover`:
      case `pointerout`:
        qt.delete(t.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        Jt.delete(t.pointerId);
    }
  }
  function Qt(e, t, n, r, i, a) {
    return e === null || e.nativeEvent !== a ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: a,
      targetContainers: [i]
    }, t !== null && (t = Pi(t), t !== null && Rt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function $t(e, t, n, r, i) {
    switch (t) {
      case `focusin`:
        return Wt = Qt(Wt, e, t, n, r, i), !0;
      case `dragenter`:
        return Gt = Qt(Gt, e, t, n, r, i), !0;
      case `mouseover`:
        return Kt = Qt(Kt, e, t, n, r, i), !0;
      case `pointerover`:
        var a = i.pointerId;
        return qt.set(a, Qt(qt.get(a) || null, e, t, n, r, i)), !0;
      case `gotpointercapture`:
        return a = i.pointerId, Jt.set(a, Qt(Jt.get(a) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function en(e) {
    var t = Ni(e.target);
    if (t !== null) {
      var n = rt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = it(n), t !== null) {
            e.blockedOn = t, Vt(e.priority, function () {
              zt(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function tn(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = fn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Fe = r, n.target.dispatchEvent(r), Fe = null;
      } else return t = Pi(n), t !== null && Rt(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function q(e, t, n) {
    tn(e) && n.delete(t);
  }
  function nn() {
    Ht = !1, Wt !== null && tn(Wt) && (Wt = null), Gt !== null && tn(Gt) && (Gt = null), Kt !== null && tn(Kt) && (Kt = null), qt.forEach(q), Jt.forEach(q);
  }
  function rn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ht || (Ht = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, nn)));
  }
  function an(e) {
    function t(t) {
      return rn(t, e);
    }
    if (0 < Ut.length) {
      rn(Ut[0], e);
      for (var n = 1; n < Ut.length; n++) {
        var r = Ut[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Wt !== null && rn(Wt, e), Gt !== null && rn(Gt, e), Kt !== null && rn(Kt, e), qt.forEach(t), Jt.forEach(t), n = 0; n < Yt.length; n++) r = Yt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Yt.length && (n = Yt[0], n.blockedOn === null);) en(n), n.blockedOn === null && Yt.shift();
  }
  var on = C.ReactCurrentBatchConfig,
    sn = !0;
  function cn(e, t, n, r) {
    var i = K,
      a = on.transition;
    on.transition = null;
    try {
      K = 1, un(e, t, n, r);
    } finally {
      K = i, on.transition = a;
    }
  }
  function ln(e, t, n, r) {
    var i = K,
      a = on.transition;
    on.transition = null;
    try {
      K = 4, un(e, t, n, r);
    } finally {
      K = i, on.transition = a;
    }
  }
  function un(e, t, n, r) {
    if (sn) {
      var i = fn(e, t, n, r);
      if (i === null) ai(e, t, r, dn, n), Zt(e, r);else if ($t(i, e, t, n, r)) r.stopPropagation();else if (Zt(e, r), t & 4 && -1 < Xt.indexOf(e)) {
        for (; i !== null;) {
          var a = Pi(i);
          if (a !== null && Lt(a), a = fn(e, t, n, r), a === null && ai(e, t, r, dn, n), a === i) break;
          i = a;
        }
        i !== null && r.stopPropagation();
      } else ai(e, t, r, null, n);
    }
  }
  var dn = null;
  function fn(e, t, n, r) {
    if (dn = null, e = Ie(r), e = Ni(e), e !== null) {
      if (t = rt(e), t === null) e = null;else if (n = t.tag, n === 13) {
        if (e = it(t), e !== null) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    }
    return dn = e, null;
  }
  function pn(e) {
    switch (e) {
      case `cancel`:
      case `click`:
      case `close`:
      case `contextmenu`:
      case `copy`:
      case `cut`:
      case `auxclick`:
      case `dblclick`:
      case `dragend`:
      case `dragstart`:
      case `drop`:
      case `focusin`:
      case `focusout`:
      case `input`:
      case `invalid`:
      case `keydown`:
      case `keypress`:
      case `keyup`:
      case `mousedown`:
      case `mouseup`:
      case `paste`:
      case `pause`:
      case `play`:
      case `pointercancel`:
      case `pointerdown`:
      case `pointerup`:
      case `ratechange`:
      case `reset`:
      case `resize`:
      case `seeked`:
      case `submit`:
      case `touchcancel`:
      case `touchend`:
      case `touchstart`:
      case `volumechange`:
      case `change`:
      case `selectionchange`:
      case `textInput`:
      case `compositionstart`:
      case `compositionend`:
      case `compositionupdate`:
      case `beforeblur`:
      case `afterblur`:
      case `beforeinput`:
      case `blur`:
      case `fullscreenchange`:
      case `focus`:
      case `hashchange`:
      case `popstate`:
      case `select`:
      case `selectstart`:
        return 1;
      case `drag`:
      case `dragenter`:
      case `dragexit`:
      case `dragleave`:
      case `dragover`:
      case `mousemove`:
      case `mouseout`:
      case `mouseover`:
      case `pointermove`:
      case `pointerout`:
      case `pointerover`:
      case `scroll`:
      case `toggle`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 4;
      case `message`:
        switch (pt()) {
          case mt:
            return 1;
          case ht:
            return 4;
          case gt:
          case _t:
            return 16;
          case vt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mn = null,
    hn = null,
    gn = null;
  function _n() {
    if (gn) return gn;
    var e,
      t = hn,
      n = t.length,
      r,
      i = `value` in mn ? mn.value : mn.textContent,
      a = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
    return gn = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function vn(e) {
    var t = e.keyCode;
    return `charCode` in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yn() {
    return !0;
  }
  function bn() {
    return !1;
  }
  function xn(e) {
    function t(t, n, r, i, a) {
      for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? yn : bn, this.isPropagationStopped = bn, this;
    }
    return P(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1), this.isDefaultPrevented = yn);
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0), this.isPropagationStopped = yn);
      },
      persist: function () {},
      isPersistent: yn
    }), t;
  }
  var Sn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Cn = xn(Sn),
    wn = P({}, Sn, {
      view: 0,
      detail: 0
    }),
    Tn = xn(wn),
    En,
    Dn,
    On,
    kn = P({}, wn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Bn,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function (e) {
        return `movementX` in e ? e.movementX : (e !== On && (On && e.type === `mousemove` ? (En = e.screenX - On.screenX, Dn = e.screenY - On.screenY) : Dn = En = 0, On = e), En);
      },
      movementY: function (e) {
        return `movementY` in e ? e.movementY : Dn;
      }
    }),
    An = xn(kn),
    jn = xn(P({}, kn, {
      dataTransfer: 0
    })),
    Mn = xn(P({}, wn, {
      relatedTarget: 0
    })),
    Nn = xn(P({}, Sn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    })),
    Pn = xn(P({}, Sn, {
      clipboardData: function (e) {
        return `clipboardData` in e ? e.clipboardData : window.clipboardData;
      }
    })),
    Fn = xn(P({}, Sn, {
      data: 0
    })),
    In = {
      Esc: `Escape`,
      Spacebar: ` `,
      Left: `ArrowLeft`,
      Up: `ArrowUp`,
      Right: `ArrowRight`,
      Down: `ArrowDown`,
      Del: `Delete`,
      Win: `OS`,
      Menu: `ContextMenu`,
      Apps: `ContextMenu`,
      Scroll: `ScrollLock`,
      MozPrintableKey: `Unidentified`
    },
    Ln = {
      8: `Backspace`,
      9: `Tab`,
      12: `Clear`,
      13: `Enter`,
      16: `Shift`,
      17: `Control`,
      18: `Alt`,
      19: `Pause`,
      20: `CapsLock`,
      27: `Escape`,
      32: ` `,
      33: `PageUp`,
      34: `PageDown`,
      35: `End`,
      36: `Home`,
      37: `ArrowLeft`,
      38: `ArrowUp`,
      39: `ArrowRight`,
      40: `ArrowDown`,
      45: `Insert`,
      46: `Delete`,
      112: `F1`,
      113: `F2`,
      114: `F3`,
      115: `F4`,
      116: `F5`,
      117: `F6`,
      118: `F7`,
      119: `F8`,
      120: `F9`,
      121: `F10`,
      122: `F11`,
      123: `F12`,
      144: `NumLock`,
      145: `ScrollLock`,
      224: `Meta`
    },
    Rn = {
      Alt: `altKey`,
      Control: `ctrlKey`,
      Meta: `metaKey`,
      Shift: `shiftKey`
    };
  function zn(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Rn[e]) ? !!t[e] : !1;
  }
  function Bn() {
    return zn;
  }
  var Vn = xn(P({}, wn, {
      key: function (e) {
        if (e.key) {
          var t = In[e.key] || e.key;
          if (t !== `Unidentified`) return t;
        }
        return e.type === `keypress` ? (e = vn(e), e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Ln[e.keyCode] || `Unidentified` : ``;
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bn,
      charCode: function (e) {
        return e.type === `keypress` ? vn(e) : 0;
      },
      keyCode: function (e) {
        return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === `keypress` ? vn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
      }
    })),
    Hn = xn(P({}, kn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    })),
    Un = xn(P({}, wn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bn
    })),
    Wn = xn(P({}, Sn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    })),
    Gn = xn(P({}, kn, {
      deltaX: function (e) {
        return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    })),
    Kn = [9, 13, 27, 32],
    qn = c && `CompositionEvent` in window,
    Jn = null;
  c && `documentMode` in document && (Jn = document.documentMode);
  var Yn = c && `TextEvent` in window && !Jn,
    Xn = c && (!qn || Jn && 8 < Jn && 11 >= Jn),
    Zn = ` `,
    Qn = !1;
  function $n(e, t) {
    switch (e) {
      case `keyup`:
        return Kn.indexOf(t.keyCode) !== -1;
      case `keydown`:
        return t.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return !0;
      default:
        return !1;
    }
  }
  function er(e) {
    return e = e.detail, typeof e == `object` && `data` in e ? e.data : null;
  }
  var tr = !1;
  function nr(e, t) {
    switch (e) {
      case `compositionend`:
        return er(t);
      case `keypress`:
        return t.which === 32 ? (Qn = !0, Zn) : null;
      case `textInput`:
        return e = t.data, e === Zn && Qn ? null : e;
      default:
        return null;
    }
  }
  function rr(e, t) {
    if (tr) return e === `compositionend` || !qn && $n(e, t) ? (e = _n(), gn = hn = mn = null, tr = !1, e) : null;
    switch (e) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case `compositionend`:
        return Xn && t.locale !== `ko` ? null : t.data;
      default:
        return null;
    }
  }
  var ir = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ar(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === `input` ? !!ir[e.type] : t === `textarea`;
  }
  function or(e, t, n, r) {
    Be(r), t = si(t, `onChange`), 0 < t.length && (n = new Cn(`onChange`, `change`, null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var sr = null,
    cr = null;
  function lr(e) {
    ei(e, 0);
  }
  function ur(e) {
    if (R(Fi(e))) return e;
  }
  function dr(e, t) {
    if (e === `change`) return t;
  }
  var fr = !1;
  if (c) {
    var pr;
    if (c) {
      var mr = `oninput` in document;
      if (!mr) {
        var hr = document.createElement(`div`);
        hr.setAttribute(`oninput`, `return;`), mr = typeof hr.oninput == `function`;
      }
      pr = mr;
    } else pr = !1;
    fr = pr && (!document.documentMode || 9 < document.documentMode);
  }
  function gr() {
    sr && (sr.detachEvent(`onpropertychange`, _r), cr = sr = null);
  }
  function _r(e) {
    if (e.propertyName === `value` && ur(cr)) {
      var t = [];
      or(t, cr, e, Ie(e)), Ge(lr, t);
    }
  }
  function vr(e, t, n) {
    e === `focusin` ? (gr(), sr = t, cr = n, sr.attachEvent(`onpropertychange`, _r)) : e === `focusout` && gr();
  }
  function yr(e) {
    if (e === `selectionchange` || e === `keyup` || e === `keydown`) return ur(cr);
  }
  function br(e, t) {
    if (e === `click`) return ur(t);
  }
  function xr(e, t) {
    if (e === `input` || e === `change`) return ur(t);
  }
  function Sr(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
  }
  var Cr = typeof Object.is == `function` ? Object.is : Sr;
  function wr(e, t) {
    if (Cr(e, t)) return !0;
    if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!l.call(t, i) || !Cr(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Tr(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Er(e, t) {
    var n = Tr(e);
    e = 0;
    for (var r; n;) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return {
          node: n,
          offset: t - e
        };
        e = r;
      }
      a: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break a;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Tr(n);
    }
  }
  function Dr(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Dr(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Or() {
    for (var e = window, t = pe(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == `string`;
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;else break;
      t = pe(e.document);
    }
    return t;
  }
  function kr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`);
  }
  function Ar(e) {
    var t = Or(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Dr(n.ownerDocument.documentElement, n)) {
      if (r !== null && kr(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), `selectionStart` in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length,
            a = Math.min(r.start, i);
          r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Er(n, a);
          var o = Er(n, r);
          i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
      for (typeof n.focus == `function` && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var jr = c && `documentMode` in document && 11 >= document.documentMode,
    Mr = null,
    Nr = null,
    Pr = null,
    Fr = !1;
  function Ir(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fr || Mr == null || Mr !== pe(r) || (r = Mr, `selectionStart` in r && kr(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Pr && wr(Pr, r) || (Pr = r, r = si(Nr, `onSelect`), 0 < r.length && (t = new Cn(`onSelect`, `select`, null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = Mr)));
  }
  function Lr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit` + e] = `webkit` + t, n[`Moz` + e] = `moz` + t, n;
  }
  var Rr = {
      animationend: Lr(`Animation`, `AnimationEnd`),
      animationiteration: Lr(`Animation`, `AnimationIteration`),
      animationstart: Lr(`Animation`, `AnimationStart`),
      transitionend: Lr(`Transition`, `TransitionEnd`)
    },
    zr = {},
    Br = {};
  c && (Br = document.createElement(`div`).style, `AnimationEvent` in window || (delete Rr.animationend.animation, delete Rr.animationiteration.animation, delete Rr.animationstart.animation), `TransitionEvent` in window || delete Rr.transitionend.transition);
  function Vr(e) {
    if (zr[e]) return zr[e];
    if (!Rr[e]) return e;
    var t = Rr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Br) return zr[e] = t[n];
    return e;
  }
  var Hr = Vr(`animationend`),
    Ur = Vr(`animationiteration`),
    Wr = Vr(`animationstart`),
    Gr = Vr(`transitionend`),
    Kr = new Map(),
    qr = `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  function Jr(e, t) {
    Kr.set(e, t), o(t, [e]);
  }
  for (var Yr = 0; Yr < qr.length; Yr++) {
    var Xr = qr[Yr];
    Jr(Xr.toLowerCase(), `on` + (Xr[0].toUpperCase() + Xr.slice(1)));
  }
  Jr(Hr, `onAnimationEnd`), Jr(Ur, `onAnimationIteration`), Jr(Wr, `onAnimationStart`), Jr(`dblclick`, `onDoubleClick`), Jr(`focusin`, `onFocus`), Jr(`focusout`, `onBlur`), Jr(Gr, `onTransitionEnd`), s(`onMouseEnter`, [`mouseout`, `mouseover`]), s(`onMouseLeave`, [`mouseout`, `mouseover`]), s(`onPointerEnter`, [`pointerout`, `pointerover`]), s(`onPointerLeave`, [`pointerout`, `pointerover`]), o(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), o(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), o(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), o(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), o(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), o(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var Zr = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),
    Qr = new Set(`cancel close invalid load scroll toggle`.split(` `).concat(Zr));
  function $r(e, t, n) {
    var r = e.type || `unknown-event`;
    e.currentTarget = n, nt(r, t, void 0, e), e.currentTarget = null;
  }
  function ei(e, t) {
    t = !!(t & 4);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      a: {
        var a = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            c = s.instance,
            l = s.currentTarget;
          if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
          $r(i, s, l), a = c;
        } else for (o = 0; o < r.length; o++) {
          if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
          $r(i, s, l), a = c;
        }
      }
    }
    if (Qe) throw e = $e, Qe = !1, $e = null, e;
  }
  function J(e, t) {
    var n = t[Ai];
    n === void 0 && (n = t[Ai] = new Set());
    var r = e + `__bubble`;
    n.has(r) || (ii(t, e, 2, !1), n.add(r));
  }
  function ti(e, t, n) {
    var r = 0;
    t && (r |= 4), ii(n, e, r, t);
  }
  var ni = `_reactListening` + Math.random().toString(36).slice(2);
  function ri(e) {
    if (!e[ni]) {
      e[ni] = !0, i.forEach(function (t) {
        t !== `selectionchange` && (Qr.has(t) || ti(t, !1, e), ti(t, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ni] || (t[ni] = !0, ti(`selectionchange`, !1, t));
    }
  }
  function ii(e, t, n, r) {
    switch (pn(t)) {
      case 1:
        var i = cn;
        break;
      case 4:
        i = ln;
        break;
      default:
        i = un;
    }
    n = i.bind(null, t, n, e), i = void 0, !qe || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, {
      passive: i
    });
  }
  function ai(e, t, n, r, i) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || s.nodeType === 8 && s.parentNode === i) break;
        if (o === 4) for (o = r.return; o !== null;) {
          var c = o.tag;
          if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i)) return;
          o = o.return;
        }
        for (; s !== null;) {
          if (o = Ni(s), o === null) return;
          if (c = o.tag, c === 5 || c === 6) {
            r = a = o;
            continue a;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
    Ge(function () {
      var r = a,
        i = Ie(n),
        o = [];
      a: {
        var s = Kr.get(e);
        if (s !== void 0) {
          var c = Cn,
            l = e;
          switch (e) {
            case `keypress`:
              if (vn(n) === 0) break a;
            case `keydown`:
            case `keyup`:
              c = Vn;
              break;
            case `focusin`:
              l = `focus`, c = Mn;
              break;
            case `focusout`:
              l = `blur`, c = Mn;
              break;
            case `beforeblur`:
            case `afterblur`:
              c = Mn;
              break;
            case `click`:
              if (n.button === 2) break a;
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              c = An;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              c = jn;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              c = Un;
              break;
            case Hr:
            case Ur:
            case Wr:
              c = Nn;
              break;
            case Gr:
              c = Wn;
              break;
            case `scroll`:
              c = Tn;
              break;
            case `wheel`:
              c = Gn;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              c = Pn;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              c = Hn;
          }
          var u = !!(t & 4),
            d = !u && e === `scroll`,
            f = u ? s === null ? null : s + `Capture` : s;
          u = [];
          for (var p = r, m; p !== null;) {
            m = p;
            var h = m.stateNode;
            if (m.tag === 5 && h !== null && (m = h, f !== null && (h = Ke(p, f), h != null && u.push(oi(p, h, m)))), d) break;
            p = p.return;
          }
          0 < u.length && (s = new c(s, l, null, n, i), o.push({
            event: s,
            listeners: u
          }));
        }
      }
      if (!(t & 7)) {
        a: {
          if (s = e === `mouseover` || e === `pointerover`, c = e === `mouseout` || e === `pointerout`, s && n !== Fe && (l = n.relatedTarget || n.fromElement) && (Ni(l) || l[ki])) break a;
          if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ni(l) : null, l !== null && (d = rt(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
            if (u = An, h = `onMouseLeave`, f = `onMouseEnter`, p = `mouse`, (e === `pointerout` || e === `pointerover`) && (u = Hn, h = `onPointerLeave`, f = `onPointerEnter`, p = `pointer`), d = c == null ? s : Fi(c), m = l == null ? s : Fi(l), s = new u(h, p + `leave`, c, n, i), s.target = d, s.relatedTarget = m, h = null, Ni(i) === r && (u = new u(f, p + `enter`, l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
              for (u = c, f = l, p = 0, m = u; m; m = ci(m)) p++;
              for (m = 0, h = f; h; h = ci(h)) m++;
              for (; 0 < p - m;) u = ci(u), p--;
              for (; 0 < m - p;) f = ci(f), m--;
              for (; p--;) {
                if (u === f || f !== null && u === f.alternate) break b;
                u = ci(u), f = ci(f);
              }
              u = null;
            } else u = null;
            c !== null && li(o, s, c, u, !1), l !== null && d !== null && li(o, d, l, u, !0);
          }
        }
        a: {
          if (s = r ? Fi(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === `select` || c === `input` && s.type === `file`) var g = dr;else if (ar(s)) {
            if (fr) g = xr;else {
              g = yr;
              var _ = vr;
            }
          } else (c = s.nodeName) && c.toLowerCase() === `input` && (s.type === `checkbox` || s.type === `radio`) && (g = br);
          if (g &&= g(e, r)) {
            or(o, g, n, i);
            break a;
          }
          _ && _(e, s, r), e === `focusout` && (_ = s._wrapperState) && _.controlled && s.type === `number` && ye(s, `number`, s.value);
        }
        switch (_ = r ? Fi(r) : window, e) {
          case `focusin`:
            (ar(_) || _.contentEditable === `true`) && (Mr = _, Nr = r, Pr = null);
            break;
          case `focusout`:
            Pr = Nr = Mr = null;
            break;
          case `mousedown`:
            Fr = !0;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            Fr = !1, Ir(o, n, i);
            break;
          case `selectionchange`:
            if (jr) break;
          case `keydown`:
          case `keyup`:
            Ir(o, n, i);
        }
        var v;
        if (qn) b: {
          switch (e) {
            case `compositionstart`:
              var y = `onCompositionStart`;
              break b;
            case `compositionend`:
              y = `onCompositionEnd`;
              break b;
            case `compositionupdate`:
              y = `onCompositionUpdate`;
              break b;
          }
          y = void 0;
        } else tr ? $n(e, n) && (y = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (y = `onCompositionStart`);
        y && (Xn && n.locale !== `ko` && (tr || y !== `onCompositionStart` ? y === `onCompositionEnd` && tr && (v = _n()) : (mn = i, hn = `value` in mn ? mn.value : mn.textContent, tr = !0)), _ = si(r, y), 0 < _.length && (y = new Fn(y, e, null, n, i), o.push({
          event: y,
          listeners: _
        }), v ? y.data = v : (v = er(n), v !== null && (y.data = v)))), (v = Yn ? nr(e, n) : rr(e, n)) && (r = si(r, `onBeforeInput`), 0 < r.length && (i = new Fn(`onBeforeInput`, `beforeinput`, null, n, i), o.push({
          event: i,
          listeners: r
        }), i.data = v));
      }
      ei(o, t);
    });
  }
  function oi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function si(e, t) {
    for (var n = t + `Capture`, r = []; e !== null;) {
      var i = e,
        a = i.stateNode;
      i.tag === 5 && a !== null && (i = a, a = Ke(e, n), a != null && r.unshift(oi(e, a, i)), a = Ke(e, t), a != null && r.push(oi(e, a, i))), e = e.return;
    }
    return r;
  }
  function ci(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null;
  }
  function li(e, t, n, r, i) {
    for (var a = t._reactName, o = []; n !== null && n !== r;) {
      var s = n,
        c = s.alternate,
        l = s.stateNode;
      if (c !== null && c === r) break;
      s.tag === 5 && l !== null && (s = l, i ? (c = Ke(n, a), c != null && o.unshift(oi(n, c, s))) : i || (c = Ke(n, a), c != null && o.push(oi(n, c, s)))), n = n.return;
    }
    o.length !== 0 && e.push({
      event: t,
      listeners: o
    });
  }
  var ui = /\r\n?/g,
    di = /\u0000|\uFFFD/g;
  function fi(e) {
    return (typeof e == `string` ? e : `` + e).replace(ui, `
`).replace(di, ``);
  }
  function pi(e, t, n) {
    if (t = fi(t), fi(e) !== t && n) throw Error(r(425));
  }
  function mi() {}
  var hi = null,
    gi = null;
  function _i(e, t) {
    return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var vi = typeof setTimeout == `function` ? setTimeout : void 0,
    yi = typeof clearTimeout == `function` ? clearTimeout : void 0,
    bi = typeof Promise == `function` ? Promise : void 0,
    xi = typeof queueMicrotask == `function` ? queueMicrotask : bi === void 0 ? vi : function (e) {
      return bi.resolve(null).then(e).catch(Si);
    };
  function Si(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ci(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) {
        if (n = i.data, n === `/$`) {
          if (r === 0) {
            e.removeChild(i), an(t);
            return;
          }
          r--;
        } else n !== `$` && n !== `$?` && n !== `$!` || r++;
      }
      n = i;
    } while (n);
    an(t);
  }
  function wi(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === `$` || t === `$!` || t === `$?`) break;
        if (t === `/$`) return null;
      }
    }
    return e;
  }
  function Ti(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === `$` || n === `$!` || n === `$?`) {
          if (t === 0) return e;
          t--;
        } else n === `/$` && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Ei = Math.random().toString(36).slice(2),
    Di = `__reactFiber$` + Ei,
    Oi = `__reactProps$` + Ei,
    ki = `__reactContainer$` + Ei,
    Ai = `__reactEvents$` + Ei,
    ji = `__reactListeners$` + Ei,
    Mi = `__reactHandles$` + Ei;
  function Ni(e) {
    var t = e[Di];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if (t = n[ki] || n[Di]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ti(e); e !== null;) {
          if (n = e[Di]) return n;
          e = Ti(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Pi(e) {
    return e = e[Di] || e[ki], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Fi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Ii(e) {
    return e[Oi] || null;
  }
  var Y = [],
    Li = -1;
  function Ri(e) {
    return {
      current: e
    };
  }
  function X(e) {
    0 > Li || (e.current = Y[Li], Y[Li] = null, Li--);
  }
  function Z(e, t) {
    Li++, Y[Li] = e.current, e.current = t;
  }
  var zi = {},
    Bi = Ri(zi),
    Vi = Ri(!1),
    Hi = zi;
  function Ui(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zi;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      a;
    for (a in n) i[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function Wi(e) {
    return e = e.childContextTypes, e != null;
  }
  function Gi() {
    X(Vi), X(Bi);
  }
  function Ki(e, t, n) {
    if (Bi.current !== zi) throw Error(r(168));
    Z(Bi, t), Z(Vi, n);
  }
  function qi(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != `function`) return n;
    for (var a in i = i.getChildContext(), i) if (!(a in t)) throw Error(r(108, le(e) || `Unknown`, a));
    return P({}, n, i);
  }
  function Ji(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zi, Hi = Bi.current, Z(Bi, e), Z(Vi, Vi.current), !0;
  }
  function Yi(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(r(169));
    n ? (e = qi(e, t, Hi), i.__reactInternalMemoizedMergedChildContext = e, X(Vi), X(Bi), Z(Bi, e)) : X(Vi), Z(Vi, n);
  }
  var Xi = null,
    Zi = !1,
    Qi = !1;
  function $i(e) {
    Xi === null ? Xi = [e] : Xi.push(e);
  }
  function ea(e) {
    Zi = !0, $i(e);
  }
  function ta() {
    if (!Qi && Xi !== null) {
      Qi = !0;
      var e = 0,
        t = K;
      try {
        var n = Xi;
        for (K = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0); while (r !== null);
        }
        Xi = null, Zi = !1;
      } catch (t) {
        throw Xi !== null && (Xi = Xi.slice(e + 1)), lt(mt, ta), t;
      } finally {
        K = t, Qi = !1;
      }
    }
    return null;
  }
  var na = [],
    ra = 0,
    ia = null,
    aa = 0,
    oa = [],
    sa = 0,
    ca = null,
    la = 1,
    ua = ``;
  function da(e, t) {
    na[ra++] = aa, na[ra++] = ia, ia = e, aa = t;
  }
  function fa(e, t, n) {
    oa[sa++] = la, oa[sa++] = ua, oa[sa++] = ca, ca = e;
    var r = la;
    e = ua;
    var i = 32 - xt(r) - 1;
    r &= ~(1 << i), n += 1;
    var a = 32 - xt(t) + i;
    if (30 < a) {
      var o = i - i % 5;
      a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, la = 1 << 32 - xt(t) + i | n << i | r, ua = a + e;
    } else la = 1 << a | n << i | r, ua = e;
  }
  function pa(e) {
    e.return !== null && (da(e, 1), fa(e, 1, 0));
  }
  function ma(e) {
    for (; e === ia;) ia = na[--ra], na[ra] = null, aa = na[--ra], na[ra] = null;
    for (; e === ca;) ca = oa[--sa], oa[sa] = null, ua = oa[--sa], oa[sa] = null, la = oa[--sa], oa[sa] = null;
  }
  var ha = null,
    ga = null,
    _a = !1,
    va = null;
  function ya(e, t) {
    var n = Kl(5, null, null, 0);
    n.elementType = `DELETED`, n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ba(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null && (e.stateNode = t, ha = e, ga = wi(t.firstChild), !0);
      case 6:
        return t = e.pendingProps === `` || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, ha = e, ga = null, !0);
      case 13:
        return t = t.nodeType === 8 ? t : null, t !== null && (n = ca === null ? null : {
          id: la,
          overflow: ua
        }, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = Kl(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ha = e, ga = null, !0);
      default:
        return !1;
    }
  }
  function xa(e) {
    return !!(e.mode & 1) && !(e.flags & 128);
  }
  function Sa(e) {
    if (_a) {
      var t = ga;
      if (t) {
        var n = t;
        if (!ba(e, t)) {
          if (xa(e)) throw Error(r(418));
          t = wi(n.nextSibling);
          var i = ha;
          t && ba(e, t) ? ya(i, n) : (e.flags = e.flags & -4097 | 2, _a = !1, ha = e);
        }
      } else {
        if (xa(e)) throw Error(r(418));
        e.flags = e.flags & -4097 | 2, _a = !1, ha = e;
      }
    }
  }
  function Ca(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ha = e;
  }
  function wa(e) {
    if (e !== ha) return !1;
    if (!_a) return Ca(e), _a = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== `head` && t !== `body` && !_i(e.type, e.memoizedProps)), t &&= ga) {
      if (xa(e)) throw Ta(), Error(r(418));
      for (; t;) ya(e, t), t = wi(t.nextSibling);
    }
    if (Ca(e), e.tag === 13) {
      if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
      a: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === `/$`) {
              if (t === 0) {
                ga = wi(e.nextSibling);
                break a;
              }
              t--;
            } else n !== `$` && n !== `$!` && n !== `$?` || t++;
          }
          e = e.nextSibling;
        }
        ga = null;
      }
    } else ga = ha ? wi(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ta() {
    for (var e = ga; e;) e = wi(e.nextSibling);
  }
  function Ea() {
    ga = ha = null, _a = !1;
  }
  function Da(e) {
    va === null ? va = [e] : va.push(e);
  }
  var Oa = C.ReactCurrentBatchConfig;
  function ka(e, t, n) {
    if (e = n.ref, e !== null && typeof e != `function` && typeof e != `object`) {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(r(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(r(147, e));
        var a = i,
          o = `` + e;
        return t !== null && t.ref !== null && typeof t.ref == `function` && t.ref._stringRef === o ? t.ref : (t = function (e) {
          var t = a.refs;
          e === null ? delete t[o] : t[o] = e;
        }, t._stringRef = o, t);
      }
      if (typeof e != `string`) throw Error(r(284));
      if (!n._owner) throw Error(r(290, e));
    }
    return e;
  }
  function Aa(e, t) {
    throw e = Object.prototype.toString.call(t), Error(r(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e));
  }
  function ja(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ma(e) {
    function t(t, n) {
      if (e) {
        var r = t.deletions;
        r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
      }
    }
    function n(n, r) {
      if (!e) return null;
      for (; r !== null;) t(n, r), r = r.sibling;
      return null;
    }
    function i(e, t) {
      for (e = new Map(); t !== null;) t.key === null ? e.set(t.index, t) : e.set(t.key, t), t = t.sibling;
      return e;
    }
    function a(e, t) {
      return e = Yl(e, t), e.index = 0, e.sibling = null, e;
    }
    function o(t, n, r) {
      return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 2, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
    }
    function s(t) {
      return e && t.alternate === null && (t.flags |= 2), t;
    }
    function c(e, t, n, r) {
      return t === null || t.tag !== 6 ? (t = $l(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
    }
    function l(e, t, n, r) {
      var i = n.type;
      return i === ee ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == `object` && i && i.$$typeof === M && ja(i) === t.type) ? (r = a(t, n.props), r.ref = ka(e, t, n), r.return = e, r) : (r = Xl(n.type, n.key, n.props, null, e.mode, r), r.ref = ka(e, t, n), r.return = e, r);
    }
    function u(e, t, n, r) {
      return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = eu(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
    }
    function d(e, t, n, r, i) {
      return t === null || t.tag !== 7 ? (t = Zl(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
    }
    function f(e, t, n) {
      if (typeof t == `string` && t !== `` || typeof t == `number`) return t = $l(`` + t, e.mode, n), t.return = e, t;
      if (typeof t == `object` && t) {
        switch (t.$$typeof) {
          case w:
            return n = Xl(t.type, t.key, t.props, null, e.mode, n), n.ref = ka(e, null, t), n.return = e, n;
          case T:
            return t = eu(t, e.mode, n), t.return = e, t;
          case M:
            var r = t._init;
            return f(e, r(t._payload), n);
        }
        if (z(t) || ie(t)) return t = Zl(t, e.mode, n, null), t.return = e, t;
        Aa(e, t);
      }
      return null;
    }
    function p(e, t, n, r) {
      var i = t === null ? null : t.key;
      if (typeof n == `string` && n !== `` || typeof n == `number`) return i === null ? c(e, t, `` + n, r) : null;
      if (typeof n == `object` && n) {
        switch (n.$$typeof) {
          case w:
            return n.key === i ? l(e, t, n, r) : null;
          case T:
            return n.key === i ? u(e, t, n, r) : null;
          case M:
            return i = n._init, p(e, t, i(n._payload), r);
        }
        if (z(n) || ie(n)) return i === null ? d(e, t, n, r, null) : null;
        Aa(e, n);
      }
      return null;
    }
    function m(e, t, n, r, i) {
      if (typeof r == `string` && r !== `` || typeof r == `number`) return e = e.get(n) || null, c(t, e, `` + r, i);
      if (typeof r == `object` && r) {
        switch (r.$$typeof) {
          case w:
            return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
          case T:
            return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
          case M:
            var a = r._init;
            return m(e, t, n, a(r._payload), i);
        }
        if (z(r) || ie(r)) return e = e.get(n) || null, d(t, e, r, i, null);
        Aa(t, r);
      }
      return null;
    }
    function h(r, a, s, c) {
      for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
        d.index > h ? (g = d, d = null) : g = d.sibling;
        var _ = p(r, d, s[h], c);
        if (_ === null) {
          d === null && (d = g);
          break;
        }
        e && d && _.alternate === null && t(r, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
      }
      if (h === s.length) return n(r, d), _a && da(r, h), l;
      if (d === null) {
        for (; h < s.length; h++) d = f(r, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
        return _a && da(r, h), l;
      }
      for (d = i(r, d); h < s.length; h++) g = m(d, r, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
      return e && d.forEach(function (e) {
        return t(r, e);
      }), _a && da(r, h), l;
    }
    function g(a, s, c, l) {
      var u = ie(c);
      if (typeof u != `function`) throw Error(r(150));
      if (c = u.call(c), c == null) throw Error(r(151));
      for (var d = u = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
        h.index > g ? (_ = h, h = null) : _ = h.sibling;
        var y = p(a, h, v.value, l);
        if (y === null) {
          h === null && (h = _);
          break;
        }
        e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
      }
      if (v.done) return n(a, h), _a && da(a, g), u;
      if (h === null) {
        for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
        return _a && da(a, g), u;
      }
      for (h = i(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
      return e && h.forEach(function (e) {
        return t(a, e);
      }), _a && da(a, g), u;
    }
    function _(e, r, i, o) {
      if (typeof i == `object` && i && i.type === ee && i.key === null && (i = i.props.children), typeof i == `object` && i) {
        switch (i.$$typeof) {
          case w:
            a: {
              for (var c = i.key, l = r; l !== null;) {
                if (l.key === c) {
                  if (c = i.type, c === ee) {
                    if (l.tag === 7) {
                      n(e, l.sibling), r = a(l, i.props.children), r.return = e, e = r;
                      break a;
                    }
                  } else if (l.elementType === c || typeof c == `object` && c && c.$$typeof === M && ja(c) === l.type) {
                    n(e, l.sibling), r = a(l, i.props), r.ref = ka(e, l, i), r.return = e, e = r;
                    break a;
                  }
                  n(e, l);
                  break;
                }
                t(e, l), l = l.sibling;
              }
              i.type === ee ? (r = Zl(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Xl(i.type, i.key, i.props, null, e.mode, o), o.ref = ka(e, r, i), o.return = e, e = o);
            }
            return s(e);
          case T:
            a: {
              for (l = i.key; r !== null;) {
                if (r.key === l) {
                  if (r.tag === 4 && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                    n(e, r.sibling), r = a(r, i.children || []), r.return = e, e = r;
                    break a;
                  }
                  n(e, r);
                  break;
                }
                t(e, r), r = r.sibling;
              }
              r = eu(i, e.mode, o), r.return = e, e = r;
            }
            return s(e);
          case M:
            return l = i._init, _(e, r, l(i._payload), o);
        }
        if (z(i)) return h(e, r, i, o);
        if (ie(i)) return g(e, r, i, o);
        Aa(e, i);
      }
      return typeof i == `string` && i !== `` || typeof i == `number` ? (i = `` + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = $l(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
    }
    return _;
  }
  var Na = Ma(!0),
    Pa = Ma(!1),
    Fa = Ri(null),
    Ia = null,
    La = null,
    Ra = null;
  function za() {
    Ra = La = Ia = null;
  }
  function Ba(e) {
    var t = Fa.current;
    X(Fa), e._currentValue = t;
  }
  function Va(e, t, n) {
    for (; e !== null;) {
      var r = e.alternate;
      if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
      e = e.return;
    }
  }
  function Ha(e, t) {
    Ia = e, Ra = La = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ms = !0), e.firstContext = null);
  }
  function Ua(e) {
    var t = e._currentValue;
    if (Ra !== e) {
      if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, La === null) {
        if (Ia === null) throw Error(r(308));
        La = e, Ia.dependencies = {
          lanes: 0,
          firstContext: e
        };
      } else La = La.next = e;
    }
    return t;
  }
  var Wa = null;
  function Ga(e) {
    Wa === null ? Wa = [e] : Wa.push(e);
  }
  function Ka(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Ga(t)) : (n.next = i.next, i.next = n), t.interleaved = n, qa(e, r);
  }
  function qa(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ja = !1;
  function Ya(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function Xa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function Za(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Qa(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, $ & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, qa(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, Ga(r)) : (t.next = i.next, i.next = t), r.interleaved = t, qa(e, n);
  }
  function $a(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ft(e, n);
    }
  }
  function eo(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null,
        a = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null
          };
          a === null ? i = a = o : a = a.next = o, n = n.next;
        } while (n !== null);
        a === null ? i = a = t : a = a.next = t;
      } else i = a = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function to(e, t, n, r) {
    var i = e.updateQueue;
    Ja = !1;
    var a = i.firstBaseUpdate,
      o = i.lastBaseUpdate,
      s = i.shared.pending;
    if (s !== null) {
      i.shared.pending = null;
      var c = s,
        l = c.next;
      c.next = null, o === null ? a = l : o.next = l, o = c;
      var u = e.alternate;
      u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
    }
    if (a !== null) {
      var d = i.baseState;
      o = 0, u = l = c = null, s = a;
      do {
        var f = s.lane,
          p = s.eventTime;
        if ((r & f) === f) {
          u !== null && (u = u.next = {
            eventTime: p,
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          });
          a: {
            var m = e,
              h = s;
            switch (f = t, p = n, h.tag) {
              case 1:
                if (m = h.payload, typeof m == `function`) {
                  d = m.call(p, d, f);
                  break a;
                }
                d = m;
                break a;
              case 3:
                m.flags = m.flags & -65537 | 128;
              case 0:
                if (m = h.payload, f = typeof m == `function` ? m.call(p, d, f) : m, f == null) break a;
                d = P({}, d, f);
                break a;
              case 2:
                Ja = !0;
            }
          }
          s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [s] : f.push(s));
        } else p = {
          eventTime: p,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        }, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
        if (s = s.next, s === null) {
          if (s = i.shared.pending, s === null) break;
          f = s, s = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
        }
      } while (1);
      if (u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, t = i.shared.interleaved, t !== null) {
        i = t;
        do o |= i.lane, i = i.next; while (i !== t);
      } else a === null && (i.shared.lanes = 0);
      Jc |= o, e.lanes = o, e.memoizedState = d;
    }
  }
  function no(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t],
        a = i.callback;
      if (a !== null) {
        if (i.callback = null, i = n, typeof a != `function`) throw Error(r(191, a));
        a.call(i);
      }
    }
  }
  var ro = {},
    io = Ri(ro),
    ao = Ri(ro),
    oo = Ri(ro);
  function so(e) {
    if (e === ro) throw Error(r(174));
    return e;
  }
  function co(e, t) {
    switch (Z(oo, t), Z(ao, e), Z(io, ro), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : we(null, ``);
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = we(t, e);
    }
    X(io), Z(io, t);
  }
  function lo() {
    X(io), X(ao), X(oo);
  }
  function uo(e) {
    so(oo.current);
    var t = so(io.current),
      n = we(t, e.type);
    t !== n && (Z(ao, e), Z(io, n));
  }
  function fo(e) {
    ao.current === e && (X(io), X(ao));
  }
  var po = Ri(0);
  function mo(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === `$?` || n.data === `$!`)) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ho = [];
  function go() {
    for (var e = 0; e < ho.length; e++) ho[e]._workInProgressVersionPrimary = null;
    ho.length = 0;
  }
  var _o = C.ReactCurrentDispatcher,
    vo = C.ReactCurrentBatchConfig,
    yo = 0,
    bo = null,
    xo = null,
    So = null,
    Co = !1,
    wo = !1,
    To = 0,
    Eo = 0;
  function Do() {
    throw Error(r(321));
  }
  function Oo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Cr(e[n], t[n])) return !1;
    return !0;
  }
  function ko(e, t, n, i, a, o) {
    if (yo = o, bo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _o.current = e === null || e.memoizedState === null ? fs : ps, e = n(i, a), wo) {
      o = 0;
      do {
        if (wo = !1, To = 0, 25 <= o) throw Error(r(301));
        o += 1, So = xo = null, t.updateQueue = null, _o.current = ms, e = n(i, a);
      } while (wo);
    }
    if (_o.current = ds, t = xo !== null && xo.next !== null, yo = 0, So = xo = bo = null, Co = !1, t) throw Error(r(300));
    return e;
  }
  function Ao() {
    var e = To !== 0;
    return To = 0, e;
  }
  function jo() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return So === null ? bo.memoizedState = So = e : So = So.next = e, So;
  }
  function Mo() {
    if (xo === null) {
      var e = bo.alternate;
      e = e === null ? null : e.memoizedState;
    } else e = xo.next;
    var t = So === null ? bo.memoizedState : So.next;
    if (t !== null) So = t, xo = e;else {
      if (e === null) throw Error(r(310));
      xo = e, e = {
        memoizedState: xo.memoizedState,
        baseState: xo.baseState,
        baseQueue: xo.baseQueue,
        queue: xo.queue,
        next: null
      }, So === null ? bo.memoizedState = So = e : So = So.next = e;
    }
    return So;
  }
  function No(e, t) {
    return typeof t == `function` ? t(e) : t;
  }
  function Po(e) {
    var t = Mo(),
      n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var i = xo,
      a = i.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (a !== null) {
        var s = a.next;
        a.next = o.next, o.next = s;
      }
      i.baseQueue = a = o, n.pending = null;
    }
    if (a !== null) {
      o = a.next, i = i.baseState;
      var c = s = null,
        l = null,
        u = o;
      do {
        var d = u.lane;
        if ((yo & d) === d) l !== null && (l = l.next = {
          lane: 0,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }), i = u.hasEagerState ? u.eagerState : e(i, u.action);else {
          var f = {
            lane: d,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          };
          l === null ? (c = l = f, s = i) : l = l.next = f, bo.lanes |= d, Jc |= d;
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? s = i : l.next = c, Cr(i, t.memoizedState) || (Ms = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = l, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do o = a.lane, bo.lanes |= o, Jc |= o, a = a.next; while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Fo(e) {
    var t = Mo(),
      n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch,
      a = n.pending,
      o = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var s = a = a.next;
      do o = e(o, s.action), s = s.next; while (s !== a);
      Cr(o, t.memoizedState) || (Ms = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, i];
  }
  function Io() {}
  function Lo(e, t) {
    var n = bo,
      i = Mo(),
      a = t(),
      o = !Cr(i.memoizedState, a);
    if (o && (i.memoizedState = a, Ms = !0), i = i.queue, Yo(Bo.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || So !== null && So.memoizedState.tag & 1) {
      if (n.flags |= 2048, Wo(9, zo.bind(null, n, i, a, t), void 0, null), Vc === null) throw Error(r(349));
      yo & 30 || Ro(n, t, a);
    }
    return a;
  }
  function Ro(e, t, n) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
    }, t = bo.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, bo.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function zo(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Vo(t) && Ho(e);
  }
  function Bo(e, t, n) {
    return n(function () {
      Vo(t) && Ho(e);
    });
  }
  function Vo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Cr(e, n);
    } catch {
      return !0;
    }
  }
  function Ho(e) {
    var t = qa(e, 1);
    t !== null && ml(t, e, 1, -1);
  }
  function Uo(e) {
    var t = jo();
    return typeof e == `function` && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: No,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = ss.bind(null, bo, e), [t.memoizedState, e];
  }
  function Wo(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, t = bo.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, bo.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Go() {
    return Mo().memoizedState;
  }
  function Ko(e, t, n, r) {
    var i = jo();
    bo.flags |= e, i.memoizedState = Wo(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function qo(e, t, n, r) {
    var i = Mo();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (xo !== null) {
      var o = xo.memoizedState;
      if (a = o.destroy, r !== null && Oo(r, o.deps)) {
        i.memoizedState = Wo(t, n, a, r);
        return;
      }
    }
    bo.flags |= e, i.memoizedState = Wo(1 | t, n, a, r);
  }
  function Jo(e, t) {
    return Ko(8390656, 8, e, t);
  }
  function Yo(e, t) {
    return qo(2048, 8, e, t);
  }
  function Xo(e, t) {
    return qo(4, 2, e, t);
  }
  function Zo(e, t) {
    return qo(4, 4, e, t);
  }
  function Qo(e, t) {
    if (typeof t == `function`) return e = e(), t(e), function () {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function () {
      t.current = null;
    };
  }
  function $o(e, t, n) {
    return n = n == null ? null : n.concat([e]), qo(4, 4, Qo.bind(null, t, e), n);
  }
  function es() {}
  function ts(e, t) {
    var n = Mo();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Oo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function ns(e, t) {
    var n = Mo();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Oo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function rs(e, t, n) {
    return yo & 21 ? (Cr(n, t) || (n = jt(), bo.lanes |= n, Jc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ms = !0), e.memoizedState = n);
  }
  function is(e, t) {
    var n = K;
    K = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = vo.transition;
    vo.transition = {};
    try {
      e(!1), t();
    } finally {
      K = n, vo.transition = r;
    }
  }
  function as() {
    return Mo().memoizedState;
  }
  function os(e, t, n) {
    var r = pl(e);
    if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cs(e)) ls(t, n);else if (n = Ka(e, t, n, r), n !== null) {
      var i = fl();
      ml(n, e, r, i), us(n, t, r);
    }
  }
  function ss(e, t, n) {
    var r = pl(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
    if (cs(e)) ls(t, i);else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
        var o = t.lastRenderedState,
          s = a(o, n);
        if (i.hasEagerState = !0, i.eagerState = s, Cr(s, o)) {
          var c = t.interleaved;
          c === null ? (i.next = i, Ga(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
          return;
        }
      } catch {}
      n = Ka(e, t, i, r), n !== null && (i = fl(), ml(n, e, r, i), us(n, t, r));
    }
  }
  function cs(e) {
    var t = e.alternate;
    return e === bo || t !== null && t === bo;
  }
  function ls(e, t) {
    wo = Co = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function us(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ft(e, n);
    }
  }
  var ds = {
      readContext: Ua,
      useCallback: Do,
      useContext: Do,
      useEffect: Do,
      useImperativeHandle: Do,
      useInsertionEffect: Do,
      useLayoutEffect: Do,
      useMemo: Do,
      useReducer: Do,
      useRef: Do,
      useState: Do,
      useDebugValue: Do,
      useDeferredValue: Do,
      useTransition: Do,
      useMutableSource: Do,
      useSyncExternalStore: Do,
      useId: Do,
      unstable_isNewReconciler: !1
    },
    fs = {
      readContext: Ua,
      useCallback: function (e, t) {
        return jo().memoizedState = [e, t === void 0 ? null : t], e;
      },
      useContext: Ua,
      useEffect: Jo,
      useImperativeHandle: function (e, t, n) {
        return n = n == null ? null : n.concat([e]), Ko(4194308, 4, Qo.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return Ko(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ko(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = jo();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
      },
      useReducer: function (e, t, n) {
        var r = jo();
        return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }, r.queue = e, e = e.dispatch = os.bind(null, bo, e), [r.memoizedState, e];
      },
      useRef: function (e) {
        var t = jo();
        return e = {
          current: e
        }, t.memoizedState = e;
      },
      useState: Uo,
      useDebugValue: es,
      useDeferredValue: function (e) {
        return jo().memoizedState = e;
      },
      useTransition: function () {
        var e = Uo(!1),
          t = e[0];
        return e = is.bind(null, e[1]), jo().memoizedState = e, [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var i = bo,
          a = jo();
        if (_a) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (n = t(), Vc === null) throw Error(r(349));
          yo & 30 || Ro(i, t, n);
        }
        a.memoizedState = n;
        var o = {
          value: n,
          getSnapshot: t
        };
        return a.queue = o, Jo(Bo.bind(null, i, o, e), [e]), i.flags |= 2048, Wo(9, zo.bind(null, i, o, n, t), void 0, null), n;
      },
      useId: function () {
        var e = jo(),
          t = Vc.identifierPrefix;
        if (_a) {
          var n = ua,
            r = la;
          n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n, t = `:` + t + `R` + n, n = To++, 0 < n && (t += `H` + n.toString(32)), t += `:`;
        } else n = Eo++, t = `:` + t + `r` + n.toString(32) + `:`;
        return e.memoizedState = t;
      },
      unstable_isNewReconciler: !1
    },
    ps = {
      readContext: Ua,
      useCallback: ts,
      useContext: Ua,
      useEffect: Yo,
      useImperativeHandle: $o,
      useInsertionEffect: Xo,
      useLayoutEffect: Zo,
      useMemo: ns,
      useReducer: Po,
      useRef: Go,
      useState: function () {
        return Po(No);
      },
      useDebugValue: es,
      useDeferredValue: function (e) {
        return rs(Mo(), xo.memoizedState, e);
      },
      useTransition: function () {
        return [Po(No)[0], Mo().memoizedState];
      },
      useMutableSource: Io,
      useSyncExternalStore: Lo,
      useId: as,
      unstable_isNewReconciler: !1
    },
    ms = {
      readContext: Ua,
      useCallback: ts,
      useContext: Ua,
      useEffect: Yo,
      useImperativeHandle: $o,
      useInsertionEffect: Xo,
      useLayoutEffect: Zo,
      useMemo: ns,
      useReducer: Fo,
      useRef: Go,
      useState: function () {
        return Fo(No);
      },
      useDebugValue: es,
      useDeferredValue: function (e) {
        var t = Mo();
        return xo === null ? t.memoizedState = e : rs(t, xo.memoizedState, e);
      },
      useTransition: function () {
        return [Fo(No)[0], Mo().memoizedState];
      },
      useMutableSource: Io,
      useSyncExternalStore: Lo,
      useId: as,
      unstable_isNewReconciler: !1
    };
  function hs(e, t) {
    if (e && e.defaultProps) {
      for (var n in t = P({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function gs(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : P({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var _s = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? rt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = fl(),
        i = pl(e),
        a = Za(r, i);
      a.payload = t, n != null && (a.callback = n), t = Qa(e, a, i), t !== null && (ml(t, e, i, r), $a(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = fl(),
        i = pl(e),
        a = Za(r, i);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Qa(e, a, i), t !== null && (ml(t, e, i, r), $a(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = fl(),
        r = pl(e),
        i = Za(n, r);
      i.tag = 2, t != null && (i.callback = t), t = Qa(e, i, r), t !== null && (ml(t, e, r, n), $a(t, e, r));
    }
  };
  function vs(e, t, n, r, i, a, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !wr(n, r) || !wr(i, a) : !0;
  }
  function ys(e, t, n) {
    var r = !1,
      i = zi,
      a = t.contextType;
    return typeof a == `object` && a ? a = Ua(a) : (i = Wi(t) ? Hi : Bi.current, r = t.contextTypes, a = (r = r != null) ? Ui(e, i) : zi), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _s, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function bs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _s.enqueueReplaceState(t, t.state, null);
  }
  function xs(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Ya(e);
    var a = t.contextType;
    typeof a == `object` && a ? i.context = Ua(a) : (a = Wi(t) ? Hi : Bi.current, i.context = Ui(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == `function` && (gs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == `function` || typeof i.getSnapshotBeforeUpdate == `function` || typeof i.UNSAFE_componentWillMount != `function` && typeof i.componentWillMount != `function` || (t = i.state, typeof i.componentWillMount == `function` && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == `function` && i.UNSAFE_componentWillMount(), t !== i.state && _s.enqueueReplaceState(i, i.state, null), to(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == `function` && (e.flags |= 4194308);
  }
  function Ss(e, t) {
    try {
      var n = ``,
        r = t;
      do n += ce(r), r = r.return; while (r);
      var i = n;
    } catch (e) {
      i = `
Error generating stack: ` + e.message + `
` + e.stack;
    }
    return {
      value: e,
      source: t,
      stack: i,
      digest: null
    };
  }
  function Cs(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function ws(e, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  var Ts = typeof WeakMap == `function` ? WeakMap : Map;
  function Es(e, t, n) {
    n = Za(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function () {
      nl || (nl = !0, rl = r), ws(e, t);
    }, n;
  }
  function Ds(e, t, n) {
    n = Za(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == `function`) {
      var i = t.value;
      n.payload = function () {
        return r(i);
      }, n.callback = function () {
        ws(e, t);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == `function` && (n.callback = function () {
      ws(e, t), typeof r != `function` && (il === null ? il = new Set([this]) : il.add(this));
      var n = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: n === null ? `` : n
      });
    }), n;
  }
  function Os(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ts();
      var i = new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = zl.bind(null, e, t, n), t.then(e, e));
  }
  function ks(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null || t.dehydrated !== null), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function As(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Za(-1, 1), t.tag = 2, Qa(n, t, 1))), n.lanes |= 1), e);
  }
  var js = C.ReactCurrentOwner,
    Ms = !1;
  function Ns(e, t, n, r) {
    t.child = e === null ? Pa(t, null, n, r) : Na(t, e.child, n, r);
  }
  function Ps(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return Ha(t, i), r = ko(e, t, n, r, a, i), n = Ao(), e !== null && !Ms ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ec(e, t, i)) : (_a && n && pa(t), t.flags |= 1, Ns(e, t, r, i), t.child);
  }
  function Fs(e, t, n, r, i) {
    if (e === null) {
      var a = n.type;
      return typeof a == `function` && !ql(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Is(e, t, a, r, i)) : (e = Xl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, (e.lanes & i) === 0) {
      var o = a.memoizedProps;
      if (n = n.compare, n = n === null ? wr : n, n(o, r) && e.ref === t.ref) return ec(e, t, i);
    }
    return t.flags |= 1, e = Yl(a, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Is(e, t, n, r, i) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (wr(a, r) && e.ref === t.ref) {
        if (Ms = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Ms = !0);else return t.lanes = e.lanes, ec(e, t, i);
      }
    }
    return zs(e, t, n, r, i);
  }
  function Ls(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      a = e === null ? null : e.memoizedState;
    if (r.mode === `hidden`) {
      if (!(t.mode & 1)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, Z(Gc, Wc), Wc |= n;else {
        if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }, t.updateQueue = null, Z(Gc, Wc), Wc |= e, null;
        t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, r = a === null ? n : a.baseLanes, Z(Gc, Wc), Wc |= r;
      }
    } else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), Z(Gc, Wc), Wc |= r;
    return Ns(e, t, i, n), t.child;
  }
  function Rs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function zs(e, t, n, r, i) {
    var a = Wi(n) ? Hi : Bi.current;
    return a = Ui(t, a), Ha(t, i), n = ko(e, t, n, r, a, i), r = Ao(), e !== null && !Ms ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ec(e, t, i)) : (_a && r && pa(t), t.flags |= 1, Ns(e, t, n, i), t.child);
  }
  function Bs(e, t, n, r, i) {
    if (Wi(n)) {
      var a = !0;
      Ji(t);
    } else a = !1;
    if (Ha(t, i), t.stateNode === null) $s(e, t), ys(t, n, r), xs(t, n, r, i), r = !0;else if (e === null) {
      var o = t.stateNode,
        s = t.memoizedProps;
      o.props = s;
      var c = o.context,
        l = n.contextType;
      typeof l == `object` && l ? l = Ua(l) : (l = Wi(n) ? Hi : Bi.current, l = Ui(t, l));
      var u = n.getDerivedStateFromProps,
        d = typeof u == `function` || typeof o.getSnapshotBeforeUpdate == `function`;
      d || typeof o.UNSAFE_componentWillReceiveProps != `function` && typeof o.componentWillReceiveProps != `function` || (s !== r || c !== l) && bs(t, o, r, l), Ja = !1;
      var f = t.memoizedState;
      o.state = f, to(t, r, o, i), c = t.memoizedState, s !== r || f !== c || Vi.current || Ja ? (typeof u == `function` && (gs(t, n, u, r), c = t.memoizedState), (s = Ja || vs(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != `function` && typeof o.componentWillMount != `function` || (typeof o.componentWillMount == `function` && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == `function` && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == `function` && (t.flags |= 4194308)) : (typeof o.componentDidMount == `function` && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == `function` && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, Xa(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : hs(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == `object` && c ? c = Ua(c) : (c = Wi(n) ? Hi : Bi.current, c = Ui(t, c));
      var p = n.getDerivedStateFromProps;
      (u = typeof p == `function` || typeof o.getSnapshotBeforeUpdate == `function`) || typeof o.UNSAFE_componentWillReceiveProps != `function` && typeof o.componentWillReceiveProps != `function` || (s !== d || f !== c) && bs(t, o, r, c), Ja = !1, f = t.memoizedState, o.state = f, to(t, r, o, i);
      var m = t.memoizedState;
      s !== d || f !== m || Vi.current || Ja ? (typeof p == `function` && (gs(t, n, p, r), m = t.memoizedState), (l = Ja || vs(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != `function` && typeof o.componentWillUpdate != `function` || (typeof o.componentWillUpdate == `function` && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == `function` && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == `function` && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024)) : (typeof o.componentDidUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Vs(e, t, n, r, a, i);
  }
  function Vs(e, t, n, r, i, a) {
    Rs(e, t);
    var o = !!(t.flags & 128);
    if (!r && !o) return i && Yi(t, n, !1), ec(e, t, a);
    r = t.stateNode, js.current = t;
    var s = o && typeof n.getDerivedStateFromError != `function` ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Na(t, e.child, null, a), t.child = Na(t, null, s, a)) : Ns(e, t, s, a), t.memoizedState = r.state, i && Yi(t, n, !0), t.child;
  }
  function Hs(e) {
    var t = e.stateNode;
    t.pendingContext ? Ki(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ki(e, t.context, !1), co(e, t.containerInfo);
  }
  function Us(e, t, n, r, i) {
    return Ea(), Da(i), t.flags |= 256, Ns(e, t, n, r), t.child;
  }
  var Ws = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function Gs(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function Ks(e, t, n) {
    var r = t.pendingProps,
      i = po.current,
      a = !1,
      o = !!(t.flags & 128),
      s;
    if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Z(po, i & 1), e === null) return Sa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.lanes = t.mode & 1 ? e.data === `$!` ? 8 : 1073741824 : 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
      mode: `hidden`,
      children: o
    }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Ql(o, r, 0, null), e = Zl(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Gs(n), t.memoizedState = Ws, e) : qs(t, o));
    if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Ys(e, t, o, r, s, i, n);
    if (a) {
      a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
      var c = {
        mode: `hidden`,
        children: r.children
      };
      return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Yl(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s === null ? (a = Zl(a, o, n, null), a.flags |= 2) : a = Yl(s, a), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Gs(n) : {
        baseLanes: o.baseLanes | n,
        cachePool: null,
        transitions: o.transitions
      }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ws, r;
    }
    return a = e.child, e = a.sibling, r = Yl(a, {
      mode: `visible`,
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function qs(e, t) {
    return t = Ql({
      mode: `visible`,
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Js(e, t, n, r) {
    return r !== null && Da(r), Na(t, e.child, null, n), e = qs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ys(e, t, n, i, a, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, i = Cs(Error(r(422))), Js(e, t, s, i)) : t.memoizedState === null ? (o = i.fallback, a = t.mode, i = Ql({
      mode: `visible`,
      children: i.children
    }, a, 0, null), o = Zl(o, a, s, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, t.mode & 1 && Na(t, e.child, null, s), t.child.memoizedState = Gs(s), t.memoizedState = Ws, o) : (t.child = e.child, t.flags |= 128, null);
    if (!(t.mode & 1)) return Js(e, t, s, null);
    if (a.data === `$!`) {
      if (i = a.nextSibling && a.nextSibling.dataset, i) var c = i.dgst;
      return i = c, o = Error(r(419)), i = Cs(o, i, void 0), Js(e, t, s, i);
    }
    if (c = (s & e.childLanes) !== 0, Ms || c) {
      if (i = Vc, i !== null) {
        switch (s & -s) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (i.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, qa(e, a), ml(i, e, a, -1));
      }
      return Ol(), i = Cs(Error(r(421))), Js(e, t, s, i);
    }
    return a.data === `$?` ? (t.flags |= 128, t.child = e.child, t = Vl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, ga = wi(a.nextSibling), ha = t, _a = !0, va = null, e !== null && (oa[sa++] = la, oa[sa++] = ua, oa[sa++] = ca, la = e.id, ua = e.overflow, ca = t), t = qs(t, i.children), t.flags |= 4096, t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Va(e.return, t, n);
  }
  function Zs(e, t, n, r, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i
    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
  }
  function Qs(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      a = r.tail;
    if (Ns(e, t, r.children, n), r = po.current, r & 2) r = r & 1 | 2, t.flags |= 128;else {
      if (e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);else if (e.tag === 19) Xs(e, n, t);else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break a;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break a;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (Z(po, r), !(t.mode & 1)) t.memoizedState = null;else switch (i) {
      case `forwards`:
        for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && mo(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Zs(t, !1, i, n, a);
        break;
      case `backwards`:
        for (n = null, i = t.child, t.child = null; i !== null;) {
          if (e = i.alternate, e !== null && mo(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Zs(t, !0, n, null, a);
        break;
      case `together`:
        Zs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function $s(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ec(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Jc |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, n = Yl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Yl(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function tc(e, t, n) {
    switch (t.tag) {
      case 3:
        Hs(t), Ea();
        break;
      case 5:
        uo(t);
        break;
      case 1:
        Wi(t.type) && Ji(t);
        break;
      case 4:
        co(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        Z(Fa, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (Z(po, po.current & 1), e = ec(e, t, n), e === null ? null : e.sibling) : Ks(e, t, n) : (Z(po, po.current & 1), t.flags |= 128, null);
        Z(po, po.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Qs(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Z(po, po.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ls(e, t, n);
    }
    return ec(e, t, n);
  }
  var nc = function (e, t) {
      for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === t) break;
        for (; n.sibling === null;) {
          if (n.return === null || n.return === t) return;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    },
    rc = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        e = t.stateNode, so(io.current);
        var o = null;
        switch (n) {
          case `input`:
            i = me(e, i), r = me(e, r), o = [];
            break;
          case `select`:
            i = P({}, i, {
              value: void 0
            }), r = P({}, r, {
              value: void 0
            }), o = [];
            break;
          case `textarea`:
            i = V(e, i), r = V(e, r), o = [];
            break;
          default:
            typeof i.onClick != `function` && typeof r.onClick == `function` && (e.onclick = mi);
        }
        Ne(n, r);
        var s;
        for (u in n = null, i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) {
          if (u === `style`) {
            var c = i[u];
            for (s in c) c.hasOwnProperty(s) && (n ||= {}, n[s] = ``);
          } else u !== `dangerouslySetInnerHTML` && u !== `children` && u !== `suppressContentEditableWarning` && u !== `suppressHydrationWarning` && u !== `autoFocus` && (a.hasOwnProperty(u) ? o ||= [] : (o ||= []).push(u, null));
        }
        for (u in r) {
          var l = r[u];
          if (c = i?.[u], r.hasOwnProperty(u) && l !== c && (l != null || c != null)) {
            if (u === `style`) {
              if (c) {
                for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n ||= {}, n[s] = ``);
                for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n ||= {}, n[s] = l[s]);
              } else n || (o ||= [], o.push(u, n)), n = l;
            } else u === `dangerouslySetInnerHTML` ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (o ||= []).push(u, l)) : u === `children` ? typeof l != `string` && typeof l != `number` || (o ||= []).push(u, `` + l) : u !== `suppressContentEditableWarning` && u !== `suppressHydrationWarning` && (a.hasOwnProperty(u) ? (l != null && u === `onScroll` && J(`scroll`, e), o || c === l || (o = [])) : (o ||= []).push(u, l));
          }
        }
        n && (o ||= []).push(`style`, n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4);
      }
    },
    ic = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    };
  function ac(e, t) {
    if (!_a) switch (e.tailMode) {
      case `hidden`:
        t = e.tail;
        for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case `collapsed`:
        n = e.tail;
        for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function oc(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function sc(e, t, n) {
    var i = t.pendingProps;
    switch (ma(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return oc(t), null;
      case 1:
        return Wi(t.type) && Gi(), oc(t), null;
      case 3:
        return i = t.stateNode, lo(), X(Vi), X(Bi), go(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (wa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, va !== null && (vl(va), va = null))), oc(t), null;
      case 5:
        fo(t);
        var o = so(oo.current);
        if (n = t.type, e !== null && t.stateNode != null) rc(e, t, n, i, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);else {
          if (!i) {
            if (t.stateNode === null) throw Error(r(166));
            return oc(t), null;
          }
          if (e = so(io.current), wa(t)) {
            i = t.stateNode, n = t.type;
            var s = t.memoizedProps;
            switch (i[Di] = t, i[Oi] = s, e = !!(t.mode & 1), n) {
              case `dialog`:
                J(`cancel`, i), J(`close`, i);
                break;
              case `iframe`:
              case `object`:
              case `embed`:
                J(`load`, i);
                break;
              case `video`:
              case `audio`:
                for (o = 0; o < Zr.length; o++) J(Zr[o], i);
                break;
              case `source`:
                J(`error`, i);
                break;
              case `img`:
              case `image`:
              case `link`:
                J(`error`, i), J(`load`, i);
                break;
              case `details`:
                J(`toggle`, i);
                break;
              case `input`:
                he(i, s), J(`invalid`, i);
                break;
              case `select`:
                i._wrapperState = {
                  wasMultiple: !!s.multiple
                }, J(`invalid`, i);
                break;
              case `textarea`:
                be(i, s), J(`invalid`, i);
            }
            for (var c in Ne(n, s), o = null, s) if (s.hasOwnProperty(c)) {
              var l = s[c];
              c === `children` ? typeof l == `string` ? i.textContent !== l && (!0 !== s.suppressHydrationWarning && pi(i.textContent, l, e), o = [`children`, l]) : typeof l == `number` && i.textContent !== `` + l && (!0 !== s.suppressHydrationWarning && pi(i.textContent, l, e), o = [`children`, `` + l]) : a.hasOwnProperty(c) && l != null && c === `onScroll` && J(`scroll`, i);
            }
            switch (n) {
              case `input`:
                fe(i), ve(i, s, !0);
                break;
              case `textarea`:
                fe(i), Se(i);
                break;
              case `select`:
              case `option`:
                break;
              default:
                typeof s.onClick == `function` && (i.onclick = mi);
            }
            i = o, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            c = o.nodeType === 9 ? o : o.ownerDocument, e === `http://www.w3.org/1999/xhtml` && (e = Ce(n)), e === `http://www.w3.org/1999/xhtml` ? n === `script` ? (e = c.createElement(`div`), e.innerHTML = `<script><\/script>`, e = e.removeChild(e.firstChild)) : typeof i.is == `string` ? e = c.createElement(n, {
              is: i.is
            }) : (e = c.createElement(n), n === `select` && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[Di] = t, e[Oi] = i, nc(e, t, !1, !1), t.stateNode = e;
            a: {
              switch (c = Pe(n, i), n) {
                case `dialog`:
                  J(`cancel`, e), J(`close`, e), o = i;
                  break;
                case `iframe`:
                case `object`:
                case `embed`:
                  J(`load`, e), o = i;
                  break;
                case `video`:
                case `audio`:
                  for (o = 0; o < Zr.length; o++) J(Zr[o], e);
                  o = i;
                  break;
                case `source`:
                  J(`error`, e), o = i;
                  break;
                case `img`:
                case `image`:
                case `link`:
                  J(`error`, e), J(`load`, e), o = i;
                  break;
                case `details`:
                  J(`toggle`, e), o = i;
                  break;
                case `input`:
                  he(e, i), o = me(e, i), J(`invalid`, e);
                  break;
                case `option`:
                  o = i;
                  break;
                case `select`:
                  e._wrapperState = {
                    wasMultiple: !!i.multiple
                  }, o = P({}, i, {
                    value: void 0
                  }), J(`invalid`, e);
                  break;
                case `textarea`:
                  be(e, i), o = V(e, i), J(`invalid`, e);
                  break;
                default:
                  o = i;
              }
              for (s in Ne(n, o), l = o, l) if (l.hasOwnProperty(s)) {
                var u = l[s];
                s === `style` ? je(e, u) : s === `dangerouslySetInnerHTML` ? (u = u ? u.__html : void 0, u != null && Ee(e, u)) : s === `children` ? typeof u == `string` ? (n !== `textarea` || u !== ``) && De(e, u) : typeof u == `number` && De(e, `` + u) : s !== `suppressContentEditableWarning` && s !== `suppressHydrationWarning` && s !== `autoFocus` && (a.hasOwnProperty(s) ? u != null && s === `onScroll` && J(`scroll`, e) : u != null && S(e, s, u, c));
              }
              switch (n) {
                case `input`:
                  fe(e), ve(e, i, !1);
                  break;
                case `textarea`:
                  fe(e), Se(e);
                  break;
                case `option`:
                  i.value != null && e.setAttribute(`value`, `` + L(i.value));
                  break;
                case `select`:
                  e.multiple = !!i.multiple, s = i.value, s == null ? i.defaultValue != null && B(e, !!i.multiple, i.defaultValue, !0) : B(e, !!i.multiple, s, !1);
                  break;
                default:
                  typeof o.onClick == `function` && (e.onclick = mi);
              }
              switch (n) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  i = !!i.autoFocus;
                  break a;
                case `img`:
                  i = !0;
                  break a;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return oc(t), null;
      case 6:
        if (e && t.stateNode != null) ic(e, t, e.memoizedProps, i);else {
          if (typeof i != `string` && t.stateNode === null) throw Error(r(166));
          if (n = so(oo.current), so(io.current), wa(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[Di] = t, (s = i.nodeValue !== n) && (e = ha, e !== null)) switch (e.tag) {
              case 3:
                pi(i.nodeValue, n, !!(e.mode & 1));
                break;
              case 5:
                !0 !== e.memoizedProps.suppressHydrationWarning && pi(i.nodeValue, n, !!(e.mode & 1));
            }
            s && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Di] = t, t.stateNode = i;
        }
        return oc(t), null;
      case 13:
        if (X(po), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (_a && ga !== null && t.mode & 1 && !(t.flags & 128)) Ta(), Ea(), t.flags |= 98560, s = !1;else if (s = wa(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(r(318));
              if (s = t.memoizedState, s = s === null ? null : s.dehydrated, !s) throw Error(r(317));
              s[Di] = t;
            } else Ea(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            oc(t), s = !1;
          } else va !== null && (vl(va), va = null), s = !0;
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || po.current & 1 ? Kc === 0 && (Kc = 3) : Ol())), t.updateQueue !== null && (t.flags |= 4), oc(t), null);
      case 4:
        return lo(), e === null && ri(t.stateNode.containerInfo), oc(t), null;
      case 10:
        return Ba(t.type._context), oc(t), null;
      case 17:
        return Wi(t.type) && Gi(), oc(t), null;
      case 19:
        if (X(po), s = t.memoizedState, s === null) return oc(t), null;
        if (i = !!(t.flags & 128), c = s.rendering, c === null) {
          if (i) ac(s, !1);else {
            if (Kc !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
              if (c = mo(e), c !== null) {
                for (t.flags |= 128, ac(s, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null;) s = n, e = i, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), n = n.sibling;
                return Z(po, po.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
            s.tail !== null && U() > el && (t.flags |= 128, i = !0, ac(s, !1), t.lanes = 4194304);
          }
        } else {
          if (!i) {
            if (e = mo(c), e !== null) {
              if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ac(s, !0), s.tail === null && s.tailMode === `hidden` && !c.alternate && !_a) return oc(t), null;
            } else 2 * U() - s.renderingStartTime > el && n !== 1073741824 && (t.flags |= 128, i = !0, ac(s, !1), t.lanes = 4194304);
          }
          s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n === null ? t.child = c : n.sibling = c, s.last = c);
        }
        return s.tail === null ? (oc(t), null) : (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = U(), t.sibling = null, n = po.current, Z(po, i ? n & 1 | 2 : n & 1), t);
      case 22:
      case 23:
        return wl(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? Wc & 1073741824 && (oc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : oc(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function cc(e, t) {
    switch (ma(t), t.tag) {
      case 1:
        return Wi(t.type) && Gi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return lo(), X(Vi), X(Bi), go(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return fo(t), null;
      case 13:
        if (X(po), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(r(340));
          Ea();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return X(po), null;
      case 4:
        return lo(), null;
      case 10:
        return Ba(t.type._context), null;
      case 22:
      case 23:
        return wl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var lc = !1,
    uc = !1,
    dc = typeof WeakSet == `function` ? WeakSet : Set,
    Q = null;
  function fc(e, t) {
    var n = e.ref;
    if (n !== null) {
      if (typeof n == `function`) try {
        n(null);
      } catch (n) {
        Rl(e, t, n);
      } else n.current = null;
    }
  }
  function pc(e, t, n) {
    try {
      n();
    } catch (n) {
      Rl(e, t, n);
    }
  }
  var mc = !1;
  function hc(e, t) {
    if (hi = sn, e = Or(), kr(e)) {
      if (`selectionStart` in e) var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };else a: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var a = i.anchorOffset,
            o = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break a;
          }
          var s = 0,
            c = -1,
            l = -1,
            u = 0,
            d = 0,
            f = e,
            p = null;
          b: for (;;) {
            for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
            for (;;) {
              if (f === e) break b;
              if (p === n && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
              f = p, p = f.parentNode;
            }
            f = m;
          }
          n = c === -1 || l === -1 ? null : {
            start: c,
            end: l
          };
        } else n = null;
      }
      n ||= {
        start: 0,
        end: 0
      };
    } else n = null;
    for (gi = {
      focusedElem: e,
      selectionRange: n
    }, sn = !1, Q = t; Q !== null;) if (t = Q, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, Q = e;else for (; Q !== null;) {
      t = Q;
      try {
        var h = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (h !== null) {
              var g = h.memoizedProps,
                _ = h.memoizedState,
                v = t.stateNode;
              v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : hs(t.type, g), _);
            }
            break;
          case 3:
            var y = t.stateNode.containerInfo;
            y.nodeType === 1 ? y.textContent = `` : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(r(163));
        }
      } catch (e) {
        Rl(t, t.return, e);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Q = e;
        break;
      }
      Q = t.return;
    }
    return h = mc, mc = !1, h;
  }
  function gc(e, t, n) {
    var r = t.updateQueue;
    if (r = r === null ? null : r.lastEffect, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var a = i.destroy;
          i.destroy = void 0, a !== void 0 && pc(t, n, a);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function _c(e, t) {
    if (t = t.updateQueue, t = t === null ? null : t.lastEffect, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function vc(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == `function` ? t(e) : t.current = e;
    }
  }
  function yc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Di], delete t[Oi], delete t[Ai], delete t[ji], delete t[Mi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function bc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function xc(e) {
    a: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || bc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Sc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mi));else if (r !== 4 && (e = e.child, e !== null)) for (Sc(e, t, n), e = e.sibling; e !== null;) Sc(e, t, n), e = e.sibling;
  }
  function Cc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);else if (r !== 4 && (e = e.child, e !== null)) for (Cc(e, t, n), e = e.sibling; e !== null;) Cc(e, t, n), e = e.sibling;
  }
  var wc = null,
    Tc = !1;
  function Ec(e, t, n) {
    for (n = n.child; n !== null;) Dc(e, t, n), n = n.sibling;
  }
  function Dc(e, t, n) {
    if (bt && typeof bt.onCommitFiberUnmount == `function`) try {
      bt.onCommitFiberUnmount(yt, n);
    } catch {}
    switch (n.tag) {
      case 5:
        uc || fc(n, t);
      case 6:
        var r = wc,
          i = Tc;
        wc = null, Ec(e, t, n), wc = r, Tc = i, wc !== null && (Tc ? (e = wc, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : wc.removeChild(n.stateNode));
        break;
      case 18:
        wc !== null && (Tc ? (e = wc, n = n.stateNode, e.nodeType === 8 ? Ci(e.parentNode, n) : e.nodeType === 1 && Ci(e, n), an(e)) : Ci(wc, n.stateNode));
        break;
      case 4:
        r = wc, i = Tc, wc = n.stateNode.containerInfo, Tc = !0, Ec(e, t, n), wc = r, Tc = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!uc && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var a = i,
              o = a.destroy;
            a = a.tag, o !== void 0 && (a & 2 || a & 4) && pc(n, t, o), i = i.next;
          } while (i !== r);
        }
        Ec(e, t, n);
        break;
      case 1:
        if (!uc && (fc(n, t), r = n.stateNode, typeof r.componentWillUnmount == `function`)) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (e) {
          Rl(n, t, e);
        }
        Ec(e, t, n);
        break;
      case 21:
        Ec(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (uc = (r = uc) || n.memoizedState !== null, Ec(e, t, n), uc = r) : Ec(e, t, n);
        break;
      default:
        Ec(e, t, n);
    }
  }
  function Oc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new dc()), t.forEach(function (t) {
        var r = Hl.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
    }
  }
  function kc(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var a = n[i];
      try {
        var o = e,
          s = t,
          c = s;
        a: for (; c !== null;) {
          switch (c.tag) {
            case 5:
              wc = c.stateNode, Tc = !1;
              break a;
            case 3:
              wc = c.stateNode.containerInfo, Tc = !0;
              break a;
            case 4:
              wc = c.stateNode.containerInfo, Tc = !0;
              break a;
          }
          c = c.return;
        }
        if (wc === null) throw Error(r(160));
        Dc(o, s, a), wc = null, Tc = !1;
        var l = a.alternate;
        l !== null && (l.return = null), a.return = null;
      } catch (e) {
        Rl(a, t, e);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Ac(t, e), t = t.sibling;
  }
  function Ac(e, t) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (kc(t, e), jc(e), i & 4) {
          try {
            gc(3, e, e.return), _c(3, e);
          } catch (t) {
            Rl(e, e.return, t);
          }
          try {
            gc(5, e, e.return);
          } catch (t) {
            Rl(e, e.return, t);
          }
        }
        break;
      case 1:
        kc(t, e), jc(e), i & 512 && n !== null && fc(n, n.return);
        break;
      case 5:
        if (kc(t, e), jc(e), i & 512 && n !== null && fc(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            De(a, ``);
          } catch (t) {
            Rl(e, e.return, t);
          }
        }
        if (i & 4 && (a = e.stateNode, a != null)) {
          var o = e.memoizedProps,
            s = n === null ? o : n.memoizedProps,
            c = e.type,
            l = e.updateQueue;
          if (e.updateQueue = null, l !== null) try {
            c === `input` && o.type === `radio` && o.name != null && ge(a, o), Pe(c, s);
            var u = Pe(c, o);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                f = l[s + 1];
              d === `style` ? je(a, f) : d === `dangerouslySetInnerHTML` ? Ee(a, f) : d === `children` ? De(a, f) : S(a, d, f, u);
            }
            switch (c) {
              case `input`:
                _e(a, o);
                break;
              case `textarea`:
                xe(a, o);
                break;
              case `select`:
                var p = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m == null ? p !== !!o.multiple && (o.defaultValue == null ? B(a, !!o.multiple, o.multiple ? [] : ``, !1) : B(a, !!o.multiple, o.defaultValue, !0)) : B(a, !!o.multiple, m, !1);
            }
            a[Oi] = o;
          } catch (t) {
            Rl(e, e.return, t);
          }
        }
        break;
      case 6:
        if (kc(t, e), jc(e), i & 4) {
          if (e.stateNode === null) throw Error(r(162));
          a = e.stateNode, o = e.memoizedProps;
          try {
            a.nodeValue = o;
          } catch (t) {
            Rl(e, e.return, t);
          }
        }
        break;
      case 3:
        if (kc(t, e), jc(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          an(t.containerInfo);
        } catch (t) {
          Rl(e, e.return, t);
        }
        break;
      case 4:
        kc(t, e), jc(e);
        break;
      case 13:
        kc(t, e), jc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || ($c = U())), i & 4 && Oc(e);
        break;
      case 22:
        if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (uc = (u = uc) || d, kc(t, e), uc = u) : kc(t, e), jc(e), i & 8192) {
          if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (Q = e, d = e.child; d !== null;) {
            for (f = Q = d; Q !== null;) {
              switch (p = Q, m = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gc(4, p, p.return);
                  break;
                case 1:
                  fc(p, p.return);
                  var h = p.stateNode;
                  if (typeof h.componentWillUnmount == `function`) {
                    i = p, n = p.return;
                    try {
                      t = i, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                    } catch (e) {
                      Rl(i, n, e);
                    }
                  }
                  break;
                case 5:
                  fc(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Fc(f);
                    continue;
                  }
              }
              m === null ? Fc(f) : (m.return = p, Q = m);
            }
            d = d.sibling;
          }
          a: for (d = null, f = e;;) {
            if (f.tag === 5) {
              if (d === null) {
                d = f;
                try {
                  a = f.stateNode, u ? (o = a.style, typeof o.setProperty == `function` ? o.setProperty(`display`, `none`, `important`) : o.display = `none`) : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty(`display`) ? l.display : null, c.style.display = Ae(`display`, s));
                } catch (t) {
                  Rl(e, e.return, t);
                }
              }
            } else if (f.tag === 6) {
              if (d === null) try {
                f.stateNode.nodeValue = u ? `` : f.memoizedProps;
              } catch (t) {
                Rl(e, e.return, t);
              }
            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
            if (f === e) break a;
            for (; f.sibling === null;) {
              if (f.return === null || f.return === e) break a;
              d === f && (d = null), f = f.return;
            }
            d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
          }
        }
        break;
      case 19:
        kc(t, e), jc(e), i & 4 && Oc(e);
        break;
      case 21:
        break;
      default:
        kc(t, e), jc(e);
    }
  }
  function jc(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        a: {
          for (var n = e.return; n !== null;) {
            if (bc(n)) {
              var i = n;
              break a;
            }
            n = n.return;
          }
          throw Error(r(160));
        }
        switch (i.tag) {
          case 5:
            var a = i.stateNode;
            i.flags & 32 && (De(a, ``), i.flags &= -33), Cc(e, xc(e), a);
            break;
          case 3:
          case 4:
            var o = i.stateNode.containerInfo;
            Sc(e, xc(e), o);
            break;
          default:
            throw Error(r(161));
        }
      } catch (t) {
        Rl(e, e.return, t);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mc(e, t, n) {
    Q = e, Nc(e, t, n);
  }
  function Nc(e, t, n) {
    for (var r = !!(e.mode & 1); Q !== null;) {
      var i = Q,
        a = i.child;
      if (i.tag === 22 && r) {
        var o = i.memoizedState !== null || lc;
        if (!o) {
          var s = i.alternate,
            c = s !== null && s.memoizedState !== null || uc;
          s = lc;
          var l = uc;
          if (lc = o, (uc = c) && !l) for (Q = i; Q !== null;) o = Q, c = o.child, o.tag === 22 && o.memoizedState !== null || c === null ? Ic(i) : (c.return = o, Q = c);
          for (; a !== null;) Q = a, Nc(a, t, n), a = a.sibling;
          Q = i, lc = s, uc = l;
        }
        Pc(e, t, n);
      } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, Q = a) : Pc(e, t, n);
    }
  }
  function Pc(e) {
    for (; Q !== null;) {
      var t = Q;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              uc || _c(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !uc) {
                if (n === null) i.componentDidMount();else {
                  var a = t.elementType === t.type ? n.memoizedProps : hs(t.type, n.memoizedProps);
                  i.componentDidUpdate(a, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
                }
              }
              var o = t.updateQueue;
              o !== null && no(t, o, i);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                no(t, s, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var l = t.memoizedProps;
                switch (t.type) {
                  case `button`:
                  case `input`:
                  case `select`:
                  case `textarea`:
                    l.autoFocus && n.focus();
                    break;
                  case `img`:
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && an(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(r(163));
          }
          uc || t.flags & 512 && vc(t);
        } catch (e) {
          Rl(t, t.return, e);
        }
      }
      if (t === e) {
        Q = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, Q = n;
        break;
      }
      Q = t.return;
    }
  }
  function Fc(e) {
    for (; Q !== null;) {
      var t = Q;
      if (t === e) {
        Q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Q = n;
        break;
      }
      Q = t.return;
    }
  }
  function Ic(e) {
    for (; Q !== null;) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              _c(4, t);
            } catch (e) {
              Rl(t, n, e);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == `function`) {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (e) {
                Rl(t, i, e);
              }
            }
            var a = t.return;
            try {
              vc(t);
            } catch (e) {
              Rl(t, a, e);
            }
            break;
          case 5:
            var o = t.return;
            try {
              vc(t);
            } catch (e) {
              Rl(t, o, e);
            }
        }
      } catch (e) {
        Rl(t, t.return, e);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        s.return = t.return, Q = s;
        break;
      }
      Q = t.return;
    }
  }
  var Lc = Math.ceil,
    Rc = C.ReactCurrentDispatcher,
    zc = C.ReactCurrentOwner,
    Bc = C.ReactCurrentBatchConfig,
    $ = 0,
    Vc = null,
    Hc = null,
    Uc = 0,
    Wc = 0,
    Gc = Ri(0),
    Kc = 0,
    qc = null,
    Jc = 0,
    Yc = 0,
    Xc = 0,
    Zc = null,
    Qc = null,
    $c = 0,
    el = 1 / 0,
    tl = null,
    nl = !1,
    rl = null,
    il = null,
    al = !1,
    ol = null,
    sl = 0,
    cl = 0,
    ll = null,
    ul = -1,
    dl = 0;
  function fl() {
    return $ & 6 ? U() : ul === -1 ? ul = U() : ul;
  }
  function pl(e) {
    return e.mode & 1 ? $ & 2 && Uc !== 0 ? Uc & -Uc : Oa.transition === null ? (e = K, e === 0 ? (e = window.event, e = e === void 0 ? 16 : pn(e.type), e) : e) : (dl === 0 && (dl = jt()), dl) : 1;
  }
  function ml(e, t, n, i) {
    if (50 < cl) throw cl = 0, ll = null, Error(r(185));
    Nt(e, n, i), (!($ & 2) || e !== Vc) && (e === Vc && (!($ & 2) && (Yc |= n), Kc === 4 && bl(e, Uc)), hl(e, i), n === 1 && $ === 0 && !(t.mode & 1) && (el = U() + 500, Zi && ta()));
  }
  function hl(e, t) {
    var n = e.callbackNode;
    kt(e, t);
    var r = Ot(e, e === Vc ? Uc : 0);
    if (r === 0) n !== null && ut(n), e.callbackNode = null, e.callbackPriority = 0;else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ut(n), t === 1) e.tag === 0 ? ea(xl.bind(null, e)) : $i(xl.bind(null, e)), xi(function () {
        !($ & 6) && ta();
      }), n = null;else {
        switch (It(r)) {
          case 1:
            n = mt;
            break;
          case 4:
            n = ht;
            break;
          case 16:
            n = gt;
            break;
          case 536870912:
            n = vt;
            break;
          default:
            n = gt;
        }
        n = Wl(n, gl.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function gl(e, t) {
    if (ul = -1, dl = 0, $ & 6) throw Error(r(327));
    var n = e.callbackNode;
    if (Il() && e.callbackNode !== n) return null;
    var i = Ot(e, e === Vc ? Uc : 0);
    if (i === 0) return null;
    if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = kl(e, i);else {
      t = i;
      var a = $;
      $ |= 2;
      var o = Dl();
      (Vc !== e || Uc !== t) && (tl = null, el = U() + 500, Tl(e, t));
      do try {
        jl();
        break;
      } catch (t) {
        El(e, t);
      } while (1);
      za(), Rc.current = o, $ = a, Hc === null ? (Vc = null, Uc = 0, t = Kc) : t = 0;
    }
    if (t !== 0) {
      if (t === 2 && (a = At(e), a !== 0 && (i = a, t = _l(e, a))), t === 1) throw n = qc, Tl(e, 0), bl(e, i), hl(e, U()), n;
      if (t === 6) bl(e, i);else {
        if (a = e.current.alternate, !(i & 30) && !yl(a) && (t = kl(e, i), t === 2 && (o = At(e), o !== 0 && (i = o, t = _l(e, o))), t === 1)) throw n = qc, Tl(e, 0), bl(e, i), hl(e, U()), n;
        switch (e.finishedWork = a, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Pl(e, Qc, tl);
            break;
          case 3:
            if (bl(e, i), (i & 130023424) === i && (t = $c + 500 - U(), 10 < t)) {
              if (Ot(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & i) !== i) {
                fl(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = vi(Pl.bind(null, e, Qc, tl), t);
              break;
            }
            Pl(e, Qc, tl);
            break;
          case 4:
            if (bl(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, a = -1; 0 < i;) {
              var s = 31 - xt(i);
              o = 1 << s, s = t[s], s > a && (a = s), i &= ~o;
            }
            if (i = a, i = U() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Lc(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = vi(Pl.bind(null, e, Qc, tl), i);
              break;
            }
            Pl(e, Qc, tl);
            break;
          case 5:
            Pl(e, Qc, tl);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return hl(e, U()), e.callbackNode === n ? gl.bind(null, e) : null;
  }
  function _l(e, t) {
    var n = Zc;
    return e.current.memoizedState.isDehydrated && (Tl(e, t).flags |= 256), e = kl(e, t), e !== 2 && (t = Qc, Qc = n, t !== null && vl(t)), e;
  }
  function vl(e) {
    Qc === null ? Qc = e : Qc.push.apply(Qc, e);
  }
  function yl(e) {
    for (var t = e;;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Cr(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function bl(e, t) {
    for (t &= ~Xc, t &= ~Yc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
      var n = 31 - xt(t),
        r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function xl(e) {
    if ($ & 6) throw Error(r(327));
    Il();
    var t = Ot(e, 0);
    if (!(t & 1)) return hl(e, U()), null;
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = At(e);
      i !== 0 && (t = i, n = _l(e, i));
    }
    if (n === 1) throw n = qc, Tl(e, 0), bl(e, t), hl(e, U()), n;
    if (n === 6) throw Error(r(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pl(e, Qc, tl), hl(e, U()), null;
  }
  function Sl(e, t) {
    var n = $;
    $ |= 1;
    try {
      return e(t);
    } finally {
      $ = n, $ === 0 && (el = U() + 500, Zi && ta());
    }
  }
  function Cl(e) {
    ol !== null && ol.tag === 0 && !($ & 6) && Il();
    var t = $;
    $ |= 1;
    var n = Bc.transition,
      r = K;
    try {
      if (Bc.transition = null, K = 1, e) return e();
    } finally {
      K = r, Bc.transition = n, $ = t, !($ & 6) && ta();
    }
  }
  function wl() {
    Wc = Gc.current, X(Gc);
  }
  function Tl(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, yi(n)), Hc !== null) for (n = Hc.return; n !== null;) {
      var r = n;
      switch (ma(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Gi();
          break;
        case 3:
          lo(), X(Vi), X(Bi), go();
          break;
        case 5:
          fo(r);
          break;
        case 4:
          lo();
          break;
        case 13:
          X(po);
          break;
        case 19:
          X(po);
          break;
        case 10:
          Ba(r.type._context);
          break;
        case 22:
        case 23:
          wl();
      }
      n = n.return;
    }
    if (Vc = e, Hc = e = Yl(e.current, null), Uc = Wc = t, Kc = 0, qc = null, Xc = Yc = Jc = 0, Qc = Zc = null, Wa !== null) {
      for (t = 0; t < Wa.length; t++) if (n = Wa[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          a.next = i, r.next = o;
        }
        n.pending = r;
      }
      Wa = null;
    }
    return e;
  }
  function El(e, t) {
    do {
      var n = Hc;
      try {
        if (za(), _o.current = ds, Co) {
          for (var i = bo.memoizedState; i !== null;) {
            var a = i.queue;
            a !== null && (a.pending = null), i = i.next;
          }
          Co = !1;
        }
        if (yo = 0, So = xo = bo = null, wo = !1, To = 0, zc.current = null, n === null || n.return === null) {
          Kc = 1, qc = t, Hc = null;
          break;
        }
        a: {
          var o = e,
            s = n.return,
            c = n,
            l = t;
          if (t = Uc, c.flags |= 32768, typeof l == `object` && l && typeof l.then == `function`) {
            var u = l,
              d = c,
              f = d.tag;
            if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var p = d.alternate;
              p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
            }
            var m = ks(s);
            if (m !== null) {
              m.flags &= -257, As(m, s, c, o, t), m.mode & 1 && Os(o, u, t), t = m, l = u;
              var h = t.updateQueue;
              if (h === null) {
                var g = new Set();
                g.add(l), t.updateQueue = g;
              } else h.add(l);
              break a;
            }
            if (!(t & 1)) {
              Os(o, u, t), Ol();
              break a;
            }
            l = Error(r(426));
          } else if (_a && c.mode & 1) {
            var _ = ks(s);
            if (_ !== null) {
              !(_.flags & 65536) && (_.flags |= 256), As(_, s, c, o, t), Da(Ss(l, c));
              break a;
            }
          }
          o = l = Ss(l, c), Kc !== 4 && (Kc = 2), Zc === null ? Zc = [o] : Zc.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Es(o, l, t);
                eo(o, v);
                break a;
              case 1:
                c = l;
                var y = o.type,
                  b = o.stateNode;
                if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == `function` || b !== null && typeof b.componentDidCatch == `function` && (il === null || !il.has(b)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var x = Ds(o, c, t);
                  eo(o, x);
                  break a;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Nl(n);
      } catch (e) {
        t = e, Hc === n && n !== null && (Hc = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Dl() {
    var e = Rc.current;
    return Rc.current = ds, e === null ? ds : e;
  }
  function Ol() {
    (Kc === 0 || Kc === 3 || Kc === 2) && (Kc = 4), Vc === null || !(Jc & 268435455) && !(Yc & 268435455) || bl(Vc, Uc);
  }
  function kl(e, t) {
    var n = $;
    $ |= 2;
    var i = Dl();
    (Vc !== e || Uc !== t) && (tl = null, Tl(e, t));
    do try {
      Al();
      break;
    } catch (t) {
      El(e, t);
    } while (1);
    if (za(), $ = n, Rc.current = i, Hc !== null) throw Error(r(261));
    return Vc = null, Uc = 0, Kc;
  }
  function Al() {
    for (; Hc !== null;) Ml(Hc);
  }
  function jl() {
    for (; Hc !== null && !dt();) Ml(Hc);
  }
  function Ml(e) {
    var t = Ul(e.alternate, e, Wc);
    e.memoizedProps = e.pendingProps, t === null ? Nl(e) : Hc = t, zc.current = null;
  }
  function Nl(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = cc(n, t), n !== null) {
          n.flags &= 32767, Hc = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;else {
          Kc = 6, Hc = null;
          return;
        }
      } else if (n = sc(n, t, Wc), n !== null) {
        Hc = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Hc = t;
        return;
      }
      Hc = t = e;
    } while (t !== null);
    Kc === 0 && (Kc = 5);
  }
  function Pl(e, t, n) {
    var r = K,
      i = Bc.transition;
    try {
      Bc.transition = null, K = 1, Fl(e, t, n, r);
    } finally {
      Bc.transition = i, K = r;
    }
    return null;
  }
  function Fl(e, t, n, i) {
    do Il(); while (ol !== null);
    if ($ & 6) throw Error(r(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(r(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Pt(e, o), e === Vc && (Hc = Vc = null, Uc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || al || (al = !0, Wl(gt, function () {
      return Il(), null;
    })), o = !!(n.flags & 15990), n.subtreeFlags & 15990 || o) {
      o = Bc.transition, Bc.transition = null;
      var s = K;
      K = 1;
      var c = $;
      $ |= 4, zc.current = null, hc(e, n), Ac(n, e), Ar(gi), sn = !!hi, gi = hi = null, e.current = n, Mc(n, e, a), ft(), $ = c, K = s, Bc.transition = o;
    } else e.current = n;
    if (al && (al = !1, ol = e, sl = a), o = e.pendingLanes, o === 0 && (il = null), W(n.stateNode, i), hl(e, U()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], i(a.value, {
      componentStack: a.stack,
      digest: a.digest
    });
    if (nl) throw nl = !1, e = rl, rl = null, e;
    return sl & 1 && e.tag !== 0 && Il(), o = e.pendingLanes, o & 1 ? e === ll ? cl++ : (cl = 0, ll = e) : cl = 0, ta(), null;
  }
  function Il() {
    if (ol !== null) {
      var e = It(sl),
        t = Bc.transition,
        n = K;
      try {
        if (Bc.transition = null, K = 16 > e ? 16 : e, ol === null) var i = !1;else {
          if (e = ol, ol = null, sl = 0, $ & 6) throw Error(r(331));
          var a = $;
          for ($ |= 4, Q = e.current; Q !== null;) {
            var o = Q,
              s = o.child;
            if (Q.flags & 16) {
              var c = o.deletions;
              if (c !== null) {
                for (var l = 0; l < c.length; l++) {
                  var u = c[l];
                  for (Q = u; Q !== null;) {
                    var d = Q;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gc(8, d, o);
                    }
                    var f = d.child;
                    if (f !== null) f.return = d, Q = f;else for (; Q !== null;) {
                      d = Q;
                      var p = d.sibling,
                        m = d.return;
                      if (yc(d), d === u) {
                        Q = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = m, Q = p;
                        break;
                      }
                      Q = m;
                    }
                  }
                }
                var h = o.alternate;
                if (h !== null) {
                  var g = h.child;
                  if (g !== null) {
                    h.child = null;
                    do {
                      var _ = g.sibling;
                      g.sibling = null, g = _;
                    } while (g !== null);
                  }
                }
                Q = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null) s.return = o, Q = s;else b: for (; Q !== null;) {
              if (o = Q, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  gc(9, o, o.return);
              }
              var v = o.sibling;
              if (v !== null) {
                v.return = o.return, Q = v;
                break b;
              }
              Q = o.return;
            }
          }
          var y = e.current;
          for (Q = y; Q !== null;) {
            s = Q;
            var b = s.child;
            if (s.subtreeFlags & 2064 && b !== null) b.return = s, Q = b;else b: for (s = y; Q !== null;) {
              if (c = Q, c.flags & 2048) try {
                switch (c.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _c(9, c);
                }
              } catch (e) {
                Rl(c, c.return, e);
              }
              if (c === s) {
                Q = null;
                break b;
              }
              var x = c.sibling;
              if (x !== null) {
                x.return = c.return, Q = x;
                break b;
              }
              Q = c.return;
            }
          }
          if ($ = a, ta(), bt && typeof bt.onPostCommitFiberRoot == `function`) try {
            bt.onPostCommitFiberRoot(yt, e);
          } catch {}
          i = !0;
        }
        return i;
      } finally {
        K = n, Bc.transition = t;
      }
    }
    return !1;
  }
  function Ll(e, t, n) {
    t = Ss(n, t), t = Es(e, t, 1), e = Qa(e, t, 1), t = fl(), e !== null && (Nt(e, 1, t), hl(e, t));
  }
  function Rl(e, t, n) {
    if (e.tag === 3) Ll(e, e, n);else for (; t !== null;) {
      if (t.tag === 3) {
        Ll(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (il === null || !il.has(r))) {
          e = Ss(n, e), e = Ds(t, e, 1), t = Qa(t, e, 1), e = fl(), t !== null && (Nt(t, 1, e), hl(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function zl(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = fl(), e.pingedLanes |= e.suspendedLanes & n, Vc === e && (Uc & n) === n && (Kc === 4 || Kc === 3 && (Uc & 130023424) === Uc && 500 > U() - $c ? Tl(e, 0) : Xc |= n), hl(e, t);
  }
  function Bl(e, t) {
    t === 0 && (e.mode & 1 ? (t = Et, Et <<= 1, !(Et & 130023424) && (Et = 4194304)) : t = 1);
    var n = fl();
    e = qa(e, t), e !== null && (Nt(e, t, n), hl(e, n));
  }
  function Vl(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Bl(e, n);
  }
  function Hl(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(t), Bl(e, n);
  }
  var Ul = function (e, t, n) {
    if (e !== null) {
      if (e.memoizedProps !== t.pendingProps || Vi.current) Ms = !0;else {
        if ((e.lanes & n) === 0 && !(t.flags & 128)) return Ms = !1, tc(e, t, n);
        Ms = !!(e.flags & 131072);
      }
    } else Ms = !1, _a && t.flags & 1048576 && fa(t, aa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        $s(e, t), e = t.pendingProps;
        var a = Ui(t, Bi.current);
        Ha(t, n), a = ko(null, t, i, e, a, n);
        var o = Ao();
        return t.flags |= 1, typeof a == `object` && a && typeof a.render == `function` && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Wi(i) ? (o = !0, Ji(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ya(t), a.updater = _s, t.stateNode = a, a._reactInternals = t, xs(t, i, e, n), t = Vs(null, t, i, !0, o, n)) : (t.tag = 0, _a && o && pa(t), Ns(null, t, a, n), t = t.child), t;
      case 16:
        i = t.elementType;
        a: {
          switch ($s(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = Jl(i), e = hs(i, e), a) {
            case 0:
              t = zs(null, t, i, e, n);
              break a;
            case 1:
              t = Bs(null, t, i, e, n);
              break a;
            case 11:
              t = Ps(null, t, i, e, n);
              break a;
            case 14:
              t = Fs(null, t, i, hs(i.type, e), n);
              break a;
          }
          throw Error(r(306, i, ``));
        }
        return t;
      case 0:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : hs(i, a), zs(e, t, i, a, n);
      case 1:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : hs(i, a), Bs(e, t, i, a, n);
      case 3:
        a: {
          if (Hs(t), e === null) throw Error(r(387));
          i = t.pendingProps, o = t.memoizedState, a = o.element, Xa(e, t), to(t, i, null, n);
          var s = t.memoizedState;
          if (i = s.element, o.isDehydrated) {
            if (o = {
              element: i,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions
            }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              a = Ss(Error(r(423)), t), t = Us(e, t, i, n, a);
              break a;
            }
            if (i !== a) {
              a = Ss(Error(r(424)), t), t = Us(e, t, i, n, a);
              break a;
            }
            for (ga = wi(t.stateNode.containerInfo.firstChild), ha = t, _a = !0, va = null, n = Pa(t, null, i, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
          } else {
            if (Ea(), i === a) {
              t = ec(e, t, n);
              break a;
            }
            Ns(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return uo(t), e === null && Sa(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, _i(i, a) ? s = null : o !== null && _i(i, o) && (t.flags |= 32), Rs(e, t), Ns(e, t, s, n), t.child;
      case 6:
        return e === null && Sa(t), null;
      case 13:
        return Ks(e, t, n);
      case 4:
        return co(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Na(t, null, i, n) : Ns(e, t, i, n), t.child;
      case 11:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : hs(i, a), Ps(e, t, i, a, n);
      case 7:
        return Ns(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ns(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ns(e, t, t.pendingProps.children, n), t.child;
      case 10:
        a: {
          if (i = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, Z(Fa, i._currentValue), i._currentValue = s, o !== null) {
            if (Cr(o.value, s)) {
              if (o.children === a.children && !Vi.current) {
                t = ec(e, t, n);
                break a;
              }
            } else for (o = t.child, o !== null && (o.return = t); o !== null;) {
              var c = o.dependencies;
              if (c !== null) {
                s = o.child;
                for (var l = c.firstContext; l !== null;) {
                  if (l.context === i) {
                    if (o.tag === 1) {
                      l = Za(-1, n & -n), l.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
                      }
                    }
                    o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Va(o.return, n, t), c.lanes |= n;
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;else if (o.tag === 18) {
                if (s = o.return, s === null) throw Error(r(341));
                s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Va(s, n, t), s = o.sibling;
              } else s = o.child;
              if (s !== null) s.return = o;else for (s = o; s !== null;) {
                if (s === t) {
                  s = null;
                  break;
                }
                if (o = s.sibling, o !== null) {
                  o.return = s.return, s = o;
                  break;
                }
                s = s.return;
              }
              o = s;
            }
          }
          Ns(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, i = t.pendingProps.children, Ha(t, n), a = Ua(a), i = i(a), t.flags |= 1, Ns(e, t, i, n), t.child;
      case 14:
        return i = t.type, a = hs(i, t.pendingProps), a = hs(i.type, a), Fs(e, t, i, a, n);
      case 15:
        return Is(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : hs(i, a), $s(e, t), t.tag = 1, Wi(i) ? (e = !0, Ji(t)) : e = !1, Ha(t, n), ys(t, i, a), xs(t, i, a, n), Vs(null, t, i, !0, e, n);
      case 19:
        return Qs(e, t, n);
      case 22:
        return Ls(e, t, n);
    }
    throw Error(r(156, t.tag));
  };
  function Wl(e, t) {
    return lt(e, t);
  }
  function Gl(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kl(e, t, n, r) {
    return new Gl(e, t, n, r);
  }
  function ql(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Jl(e) {
    if (typeof e == `function`) return +!!ql(e);
    if (e != null) {
      if (e = e.$$typeof, e === te) return 11;
      if (e === j) return 14;
    }
    return 2;
  }
  function Yl(e, t) {
    var n = e.alternate;
    return n === null ? (n = Kl(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Xl(e, t, n, i, a, o) {
    var s = 2;
    if (i = e, typeof e == `function`) ql(e) && (s = 1);else if (typeof e == `string`) s = 5;else a: switch (e) {
      case ee:
        return Zl(n.children, a, o, t);
      case E:
        s = 8, a |= 8;
        break;
      case D:
        return e = Kl(12, n, t, a | 2), e.elementType = D, e.lanes = o, e;
      case A:
        return e = Kl(13, n, t, a), e.elementType = A, e.lanes = o, e;
      case ne:
        return e = Kl(19, n, t, a), e.elementType = ne, e.lanes = o, e;
      case re:
        return Ql(n, a, o, t);
      default:
        if (typeof e == `object` && e) switch (e.$$typeof) {
          case O:
            s = 10;
            break a;
          case k:
            s = 9;
            break a;
          case te:
            s = 11;
            break a;
          case j:
            s = 14;
            break a;
          case M:
            s = 16, i = null;
            break a;
        }
        throw Error(r(130, e == null ? e : typeof e, ``));
    }
    return t = Kl(s, n, t, a), t.elementType = e, t.type = i, t.lanes = o, t;
  }
  function Zl(e, t, n, r) {
    return e = Kl(7, e, r, t), e.lanes = n, e;
  }
  function Ql(e, t, n, r) {
    return e = Kl(22, e, r, t), e.elementType = re, e.lanes = n, e.stateNode = {
      isHidden: !1
    }, e;
  }
  function $l(e, t, n) {
    return e = Kl(6, e, null, t), e.lanes = n, e;
  }
  function eu(e, t, n) {
    return t = Kl(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function tu(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Mt(0), this.expirationTimes = Mt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function nu(e, t, n, r, i, a, o, s, c) {
    return e = new tu(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Kl(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Ya(a), e;
  }
  function ru(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: r == null ? null : `` + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function iu(e) {
    if (!e) return zi;
    e = e._reactInternals;
    a: {
      if (rt(e) !== e || e.tag !== 1) throw Error(r(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break a;
          case 1:
            if (Wi(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(r(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Wi(n)) return qi(e, n, t);
    }
    return t;
  }
  function au(e, t, n, r, i, a, o, s, c) {
    return e = nu(n, r, !0, e, i, a, o, s, c), e.context = iu(null), n = e.current, r = fl(), i = pl(n), a = Za(r, i), a.callback = t ?? null, Qa(n, a, i), e.current.lanes = i, Nt(e, i, r), hl(e, r), e;
  }
  function ou(e, t, n, r) {
    var i = t.current,
      a = fl(),
      o = pl(i);
    return n = iu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Za(a, o), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qa(i, t, o), e !== null && (ml(e, i, o, a), $a(e, i, o)), o;
  }
  function su(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function lu(e, t) {
    cu(e, t), (e = e.alternate) && cu(e, t);
  }
  function uu() {
    return null;
  }
  var du = typeof reportError == `function` ? reportError : function (e) {
    console.error(e);
  };
  function fu(e) {
    this._internalRoot = e;
  }
  pu.prototype.render = fu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    ou(e, t, null, null);
  }, pu.prototype.unmount = fu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Cl(function () {
        ou(null, e, null, null);
      }), t[ki] = null;
    }
  };
  function pu(e) {
    this._internalRoot = e;
  }
  pu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Bt();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
      Yt.splice(n, 0, e), n === 0 && en(e);
    }
  };
  function mu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function hu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `));
  }
  function gu() {}
  function _u(e, t, n, r, i) {
    if (i) {
      if (typeof r == `function`) {
        var a = r;
        r = function () {
          var e = su(o);
          a.call(e);
        };
      }
      var o = au(t, r, e, 0, null, !1, !1, ``, gu);
      return e._reactRootContainer = o, e[ki] = o.current, ri(e.nodeType === 8 ? e.parentNode : e), Cl(), o;
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == `function`) {
      var s = r;
      r = function () {
        var e = su(c);
        s.call(e);
      };
    }
    var c = nu(e, 0, !1, null, null, !1, !1, ``, gu);
    return e._reactRootContainer = c, e[ki] = c.current, ri(e.nodeType === 8 ? e.parentNode : e), Cl(function () {
      ou(t, c, n, r);
    }), c;
  }
  function vu(e, t, n, r, i) {
    var a = n._reactRootContainer;
    if (a) {
      var o = a;
      if (typeof i == `function`) {
        var s = i;
        i = function () {
          var e = su(o);
          s.call(e);
        };
      }
      ou(t, o, e, i);
    } else o = _u(n, t, e, i, r);
    return su(o);
  }
  Lt = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Dt(t.pendingLanes);
          n !== 0 && (Ft(t, n | 1), hl(t, U()), !($ & 6) && (el = U() + 500, ta()));
        }
        break;
      case 13:
        Cl(function () {
          var t = qa(e, 1);
          t !== null && ml(t, e, 1, fl());
        }), lu(e, 1);
    }
  }, Rt = function (e) {
    if (e.tag === 13) {
      var t = qa(e, 134217728);
      t !== null && ml(t, e, 134217728, fl()), lu(e, 134217728);
    }
  }, zt = function (e) {
    if (e.tag === 13) {
      var t = pl(e),
        n = qa(e, t);
      n !== null && ml(n, e, t, fl()), lu(e, t);
    }
  }, Bt = function () {
    return K;
  }, Vt = function (e, t) {
    var n = K;
    try {
      return K = e, t();
    } finally {
      K = n;
    }
  }, Le = function (e, t, n) {
    switch (t) {
      case `input`:
        if (_e(e, n), t = n.name, n.type === `radio` && t != null) {
          for (n = e; n.parentNode;) n = n.parentNode;
          for (n = n.querySelectorAll(`input[name=` + JSON.stringify(`` + t) + `][type="radio"]`), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var a = Ii(i);
              if (!a) throw Error(r(90));
              R(i), _e(i, a);
            }
          }
        }
        break;
      case `textarea`:
        xe(e, n);
        break;
      case `select`:
        t = n.value, t != null && B(e, !!n.multiple, t, !1);
    }
  }, He = Sl, Ue = Cl;
  var yu = {
      usingClientEntryPoint: !1,
      Events: [Pi, Fi, Ii, Be, Ve, Sl]
    },
    bu = {
      findFiberByHostInstance: Ni,
      bundleType: 0,
      version: `18.3.1`,
      rendererPackageName: `react-dom`
    },
    xu = {
      bundleType: bu.bundleType,
      version: bu.version,
      rendererPackageName: bu.rendererPackageName,
      rendererConfig: bu.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: C.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return e = st(e), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: bu.findFiberByHostInstance || uu,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: `18.3.1-next-f1338f8080-20240426`
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Su.isDisabled && Su.supportsFiber) try {
      yt = Su.inject(xu), bt = Su;
    } catch {}
  }
  e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yu, e.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!mu(t)) throw Error(r(200));
    return ru(e, t, null, n);
  }, e.createRoot = function (e, t) {
    if (!mu(e)) throw Error(r(299));
    var n = !1,
      i = ``,
      a = du;
    return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = nu(e, 1, !1, null, null, n, !1, i, a), e[ki] = t.current, ri(e.nodeType === 8 ? e.parentNode : e), new fu(t);
  }, e.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == `function` ? Error(r(188)) : (e = Object.keys(e).join(`,`), Error(r(268, e)));
    return e = st(t), e = e === null ? null : e.stateNode, e;
  }, e.flushSync = function (e) {
    return Cl(e);
  }, e.hydrate = function (e, t, n) {
    if (!hu(t)) throw Error(r(200));
    return vu(null, e, t, !0, n);
  }, e.hydrateRoot = function (e, t, n) {
    if (!mu(e)) throw Error(r(405));
    var i = n != null && n.hydratedSources || null,
      a = !1,
      o = ``,
      s = du;
    if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = au(t, null, e, 1, n ?? null, a, !1, o, s), e[ki] = t.current, ri(e), i) for (e = 0; e < i.length; e++) n = i[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
    return new pu(t);
  }, e.render = function (e, t, n) {
    if (!hu(t)) throw Error(r(200));
    return vu(null, e, t, !1, n);
  }, e.unmountComponentAtNode = function (e) {
    if (!hu(e)) throw Error(r(40));
    return e._reactRootContainer ? (Cl(function () {
      vu(null, null, e, !1, function () {
        e._reactRootContainer = null, e[ki] = null;
      });
    }), !0) : !1;
  }, e.unstable_batchedUpdates = Sl, e.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
    if (!hu(n)) throw Error(r(200));
    if (e == null || e._reactInternals === void 0) throw Error(r(38));
    return vu(e, t, n, !1, i);
  }, e.version = `18.3.1-next-f1338f8080-20240426`;
});
var m = o((e, t) => {
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
    } catch (e) {
      console.error(e);
    }
  }
  n(), t.exports = p();
});
var ReactDOMClient = o(e => {
  var t = m();
  e.createRoot = t.createRoot, e.hydrateRoot = t.hydrateRoot;
})();
// #endregion vendor/00-react-runtime.js

;
// #region app/01-fonts.js
/* Font options and helpers. Shared scope; build with node scripts/build.cjs. */

var DEFAULT_FONT_ID = `default`;
var CUSTOM_FONT_ID = `custom`;
var CUSTOM_FONT_FAMILY = `User Custom Font`;
var DEFAULT_FONT_FAMILY = `'Fira Code Variable', 'Courier New', monospace`;
var FONT_OPTIONS = [
  {
    id: DEFAULT_FONT_ID,
    label: `Default`,
    family: DEFAULT_FONT_FAMILY,
  },
  {
    id: `oxanium`,
    label: `Oxanium`,
    family: `'Oxanium Variable', sans-serif`,
  },
  {
    id: `nova-square`,
    label: `Nova Square`,
    family: `'Nova Square', sans-serif`,
  },
  {
    id: `rajdhani`,
    label: `Rajdhani`,
    family: `'Rajdhani', sans-serif`,
  },
  {
    id: `bitcount-single`,
    label: `Bitcount Single`,
    family: `'Bitcount Single Variable', sans-serif`,
  },
];
var getFontFamily = (e) => FONT_OPTIONS.find((t) => t.id === e)?.family || DEFAULT_FONT_FAMILY;
// #endregion app/01-fonts.js

;
// #region vendor/02-react-server.js
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
// #endregion vendor/02-react-server.js

;
// #region app/03-media-storage.js
/* IndexedDB storage for backgrounds and fonts. Shared scope; build with node scripts/build.cjs. */

var MEDIA_DATABASE_NAME = `terminal-startpage`;
var MEDIA_DATABASE_VERSION = 1;
var MEDIA_STORE_NAME = `media`;
var mediaDatabase = null;
async function openMediaDatabase() {
  return (
    mediaDatabase ||
    new Promise((e, t) => {
      let n = indexedDB.open(MEDIA_DATABASE_NAME, MEDIA_DATABASE_VERSION);
      n.onerror = () => t(n.error);
      n.onsuccess = () => {
        mediaDatabase = n.result;
        e(n.result);
      };
      n.onupgradeneeded = (e) => {
        let t = e.target.result;
        t.objectStoreNames.contains(MEDIA_STORE_NAME) ||
          t.createObjectStore(MEDIA_STORE_NAME, {
            keyPath: `id`,
          });
      };
    })
  );
}
async function storeMediaBlob(e, t, n) {
  console.log(
    `[mediaStorage] Storing media file: ${e}, type: ${n}, size: ${(t.size / 1024 / 1024).toFixed(2)} MB`,
  );
  let r = await openMediaDatabase();
  return new Promise((i, a) => {
    let o = r.transaction([MEDIA_STORE_NAME], `readwrite`).objectStore(MEDIA_STORE_NAME);
    let s = {
      id: e,
      blob: t,
      type: n,
      timestamp: Date.now(),
    };
    let c = o.put(s);
    c.onsuccess = () => {
      console.log(`[mediaStorage] Successfully stored media file: ${e}`);
      i();
    };
    c.onerror = () => {
      console.error(`[mediaStorage] Error storing media file:`, c.error);
      a(c.error);
    };
  });
}
async function readMediaBlob(e) {
  console.log(`[mediaStorage] Retrieving media blob: ${e}`);
  let t = await openMediaDatabase();
  return new Promise((n, r) => {
    let i = t.transaction([MEDIA_STORE_NAME], `readonly`).objectStore(MEDIA_STORE_NAME).get(e);
    i.onsuccess = () => {
      let t = i.result;
      if (t?.blob) {
        if (
          (console.log(
            `[mediaStorage] Retrieved blob: ${(t.blob.size / 1024 / 1024).toFixed(2)} MB, original type: ${t.blob.type}, stored type: ${t.type}`,
          ),
          !t.blob.type && t.type)
        ) {
          console.log(
            `[mediaStorage] Blob missing MIME type, recreating with stored type: ${t.type}`,
          );
          let e = new Blob([t.blob], {
            type: t.type,
          });
          console.log(`[mediaStorage] Recreated blob with type: ${e.type}`);
          n(e);
        } else n(t.blob);
      } else (console.log(`[mediaStorage] No blob found for id: ${e}`), n(null));
    };
    i.onerror = () => {
      console.error(`[mediaStorage] Error retrieving media blob:`, i.error);
      r(i.error);
    };
  });
}
async function deleteMediaBlob(e) {
  let t = await openMediaDatabase();
  return new Promise((n, r) => {
    let i = t.transaction([MEDIA_STORE_NAME], `readwrite`).objectStore(MEDIA_STORE_NAME).delete(e);
    i.onsuccess = () => n();
    i.onerror = () => r(i.error);
  });
}
// #endregion app/03-media-storage.js

;
// #region app/04-preferences.js
/* Defaults and local preferences. Shared scope; build with node scripts/build.cjs. */

/* Default netlinks and initial app configuration. */
var DEFAULT_NETLINKS = [
  {
    id: `1`,
    title: `Night City News`,
    url: `https://github.com`,
    category: `daily`,
    icon: `News`,
  },
  {
    id: `2`,
    title: `Arasaka Corp`,
    url: `https://stackoverflow.com`,
    category: `work`,
    icon: `Work`,
  },
  {
    id: `3`,
    title: `Afterlife`,
    url: `https://youtube.com`,
    category: `entertainment`,
    icon: `Skull`,
  },
  {
    id: `4`,
    title: `Militech`,
    url: `https://reddit.com`,
    category: `social`,
    icon: `Shield`,
  },
  {
    id: `5`,
    title: `Netwatch`,
    url: `https://twitter.com`,
    category: `social`,
    icon: `Security`,
  },
  {
    id: `6`,
    title: `Ripperdoc`,
    url: `https://gmail.com`,
    category: `work`,
    icon: `Brain`,
  },
];
var DEFAULT_CATEGORIES = [`daily`, `work`, `entertainment`, `social`, `other`];
var DEFAULT_NETLINK_ORDER = {};
DEFAULT_NETLINKS.forEach((e) => {
  DEFAULT_NETLINK_ORDER[e.category] || (DEFAULT_NETLINK_ORDER[e.category] = []);
  DEFAULT_NETLINK_ORDER[e.category].push(e.id);
});
var DEFAULT_SEARCH_ENGINES = [
  {
    id: `default`,
    name: `Default`,
    url: `chrome-extension-search://`,
    placeholder: `Search with default engine...`,
    order: 0,
    visible: true,
    isCustom: false,
  },
  {
    id: `google`,
    name: `Google`,
    url: `https://www.google.com/search?q=`,
    placeholder: `Search the Net...`,
    order: 1,
    visible: true,
    isCustom: false,
  },
  {
    id: `bing`,
    name: `Bing\xA0\xA0`,
    url: `https://www.bing.com/search?q=`,
    placeholder: `Search the Net...`,
    order: 2,
    visible: true,
    isCustom: false,
  },
  {
    id: `duck`,
    name: `DuckDuck`,
    url: `https://duckduckgo.com/?q=`,
    placeholder: `Search the Net securely...`,
    order: 3,
    visible: true,
    isCustom: false,
  },
  {
    id: `ai`,
    name: `ChatGPT`,
    url: `https://www.chatgpt.com/?q=`,
    placeholder: `Query an AI...`,
    order: 4,
    visible: true,
    isCustom: false,
  },
  {
    id: `ai2`,
    name: `Perplex`,
    url: `https://www.perplexity.ai/search?q=`,
    placeholder: `Initiate neural search...`,
    order: 5,
    visible: true,
    isCustom: false,
  },
  {
    id: `brave`,
    name: `Brave\xA0`,
    url: `https://search.brave.com/search?q=`,
    placeholder: `Search the Net securely...`,
    order: 6,
    visible: true,
    isCustom: false,
  },
  {
    id: `brave2`,
    name: `BraveAI`,
    url: `https://search.brave.com/ask?q=`,
    placeholder: `Query an AI privately...`,
    order: 7,
    visible: true,
    isCustom: false,
  },
  {
    id: `brave3`,
    name: `Research`,
    url: `https://search.brave.com/ask?enable_research=true&q=`,
    placeholder: `Research with an AI...`,
    order: 8,
    visible: true,
    isCustom: false,
  },
];
var DEFAULT_WEATHER_LOCATION = {
  name: `Night City`,
  latitude: 37.7749,
  longitude: -122.4194,
};
var DEFAULT_WIDGETS = [
  {
    id: `weather-1`,
    type: `weather`,
    enabled: true,
    config: {
      location: DEFAULT_WEATHER_LOCATION,
      temperatureUnit: true,
    },
  },
  {
    id: `worldclock-1`,
    type: `worldclock`,
    enabled: false,
    config: {
      location: {
        name: `Tokyo`,
        latitude: 35.6762,
        longitude: 139.6503,
      },
      timeFormat: true,
      showDate: true,
    },
  },
  {
    id: `scratchpad-1`,
    type: `scratchpad`,
    enabled: false,
    config: {
      content: ``,
    },
  },
  {
    id: `tasklist-1`,
    type: `tasklist`,
    enabled: false,
    config: {
      tasks: [],
    },
  },
  {
    id: `rss-1`,
    type: `rss`,
    enabled: false,
    config: {
      feedUrl: ``,
      maxItems: 10,
    },
  },
];
var DEFAULT_WIDGET_ORDER = [`weather-1`, `worldclock-1`, `scratchpad-1`, `tasklist-1`, `rss-1`];
var DEFAULT_CELSIUS = true;
var DEFAULT_24_HOUR_TIME = true;
var DEFAULT_COLOR_THEME = `cyberpunk2077`;
var DEFAULT_DISPLAY_PREFERENCES = {
  showGreeting: true,
  showTime: true,
  showDate: true,
  showSearchBar: true,
  showQuotes: true,
  showMonitoring: true,
  showNetlinks: true,
  showWidgets: true,
};
var DEFAULT_SCAN_LINES_MODE = `default`;
var DEFAULT_BACKGROUND_BRIGHTNESS = 100;
var getBackgroundBrightness = () => {
  let e = localStorage.getItem(`backgroundBrightness`);
  let t = e ? parseInt(e, 10) : DEFAULT_BACKGROUND_BRIGHTNESS;
  return Number.isNaN(t) ? DEFAULT_BACKGROUND_BRIGHTNESS : t;
};
var setBackgroundBrightness = (e) => {
  localStorage.setItem(`backgroundBrightness`, String(e));
};
var DEFAULT_TAB_TITLE = `Cyberstart 2077`;
var DEFAULT_FONT = `default`;
var CUSTOM_FONT_STORAGE_KEY = `custom-font`;
var CUSTOM_FONT_NAME_KEY = `customFontName`;
var mergeDefaultWidgets = (e) => {
  let t = [];
  return (
    e.forEach((e) => {
      t.push(e);
    }),
    DEFAULT_WIDGETS.forEach((n) => {
      e.some((e) => e.id === n.id) || t.push(n);
    }),
    t
  );
};
var mergeDefaultWidgetOrder = (e) => {
  let t = [...e];
  return (
    DEFAULT_WIDGET_ORDER.forEach((e) => {
      t.includes(e) || t.push(e);
    }),
    t
  );
};
var getWidgets = () => {
  let e = localStorage.getItem(`widgets`);
  return e ? mergeDefaultWidgets(JSON.parse(e)) : DEFAULT_WIDGETS;
};
var setWidgets = (e) => {
  localStorage.setItem(`widgets`, JSON.stringify(e));
};
var getWidgetOrder = () => {
  let e = localStorage.getItem(`widgetOrder`);
  return e ? mergeDefaultWidgetOrder(JSON.parse(e)) : DEFAULT_WIDGET_ORDER;
};
var setWidgetOrder = (e) => {
  localStorage.setItem(`widgetOrder`, JSON.stringify(e));
};
var getCategoryOrder = () => {
  let e = localStorage.getItem(`categoryOrder`);
  return e ? JSON.parse(e) : DEFAULT_CATEGORIES;
};
var setCategoryOrder = (e) => {
  localStorage.setItem(`categoryOrder`, JSON.stringify(e));
};
var getNetlinkOrder = (e) => {
  let t = localStorage.getItem(`bookmarkOrder_${e}`);
  return t ? JSON.parse(t) : DEFAULT_NETLINK_ORDER[e] || [];
};
var setNetlinkOrder = (e, t) => {
  localStorage.setItem(`bookmarkOrder_${e}`, JSON.stringify(t));
};
var getWeatherLocation = () => {
  let e = localStorage.getItem(`weatherLocation`);
  return e ? JSON.parse(e) : DEFAULT_WEATHER_LOCATION;
};
var setWeatherLocation = (e) => {
  localStorage.setItem(`weatherLocation`, JSON.stringify(e));
};
var getTemperatureUnit = () => {
  let e = localStorage.getItem(`temperatureUnit`);
  return e === null ? DEFAULT_CELSIUS : JSON.parse(e);
};
var setTemperatureUnit = (e) => {
  localStorage.setItem(`temperatureUnit`, JSON.stringify(e));
};
var getTimeFormat = () => {
  let e = localStorage.getItem(`timeFormat`);
  return e === null ? DEFAULT_24_HOUR_TIME : JSON.parse(e);
};
var setTimeFormat = (e) => {
  localStorage.setItem(`timeFormat`, JSON.stringify(e));
};
var getColorTheme = () => localStorage.getItem(`colorTheme`) || DEFAULT_COLOR_THEME;
var setColorTheme = (e) => {
  localStorage.setItem(`colorTheme`, e);
};
var getDisplayPreferences = () => {
  let e = localStorage.getItem(`displayPreferences`);
  return e
    ? {
        ...DEFAULT_DISPLAY_PREFERENCES,
        ...JSON.parse(e),
      }
    : DEFAULT_DISPLAY_PREFERENCES;
};
var setDisplayPreferences = (e) => {
  localStorage.setItem(`displayPreferences`, JSON.stringify(e));
};
var DEFAULT_BACKGROUND_IMAGE = `https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1600`;
var getBackground = () => localStorage.getItem(`background`) || DEFAULT_BACKGROUND_IMAGE;
var setBackground = (e) => {
  localStorage.setItem(`background`, e);
};
var DEFAULT_USER_NAME = `V`;
var getUserName = () => localStorage.getItem(`userName`) || DEFAULT_USER_NAME;
var setUserName = (e) => {
  localStorage.setItem(`userName`, e);
};
var getNetlinks = () => {
  let e = localStorage.getItem(`bookmarks`);
  return e ? JSON.parse(e) : DEFAULT_NETLINKS;
};
var setNetlinks = (e) => {
  localStorage.setItem(`bookmarks`, JSON.stringify(e));
};
var getSearchEngines = () => {
  let e = localStorage.getItem(`searchEngines`);
  let t = e ? JSON.parse(e) : DEFAULT_SEARCH_ENGINES;
  let n = new Set(DEFAULT_SEARCH_ENGINES.map((e) => e.id));
  return t.map((e, t) => ({
    ...e,
    order: typeof e.order == `number` ? e.order : t,
    visible: e.id === "default" || e.visible !== false,
    isCustom: e.isCustom ?? !n.has(e.id),
  }));
};
var setSearchEngines = (e) => {
  localStorage.setItem(`searchEngines`, JSON.stringify(e));
  window.dispatchEvent(new Event(`search-engines-changed`));
};
var getActiveSearchEngine = () => localStorage.getItem(`activeSearchEngine`) || `default`;
var setActiveSearchEngine = (e) => {
  localStorage.setItem(`activeSearchEngine`, e);
};
var getCollapsedCategories = () => {
  let e = localStorage.getItem(`collapsedCategories`);
  return e ? JSON.parse(e) : {};
};
var setCollapsedCategories = (e) => {
  localStorage.setItem(`collapsedCategories`, JSON.stringify(e));
};
var getCustomCategories = () => {
  let e = localStorage.getItem(`customCategories`);
  return e ? JSON.parse(e) : [];
};
var setCustomCategories = (e) => {
  localStorage.setItem(`customCategories`, JSON.stringify(e));
};
var renameCategory = (e, t) => {
  setNetlinks(
    getNetlinks().map((n) =>
      n.category === e
        ? {
            ...n,
            category: t,
          }
        : n,
    ),
  );
  setCategoryOrder(getCategoryOrder().map((n) => (n === e ? t : n)));
  let n = getCustomCategories();
  n.includes(e) && setCustomCategories(n.map((n) => (n === e ? t : n)));
  let r = getNetlinkOrder(e);
  r.length > 0 && (localStorage.removeItem(`bookmarkOrder_${e}`), setNetlinkOrder(t, r));
  let i = getCollapsedCategories();
  if (i[e] !== void 0) {
    let n = {
      ...i,
    };
    n[t] = n[e];
    delete n[e];
    setCollapsedCategories(n);
  }
};
var deleteCategory = (e) => {
  setNetlinks(getNetlinks().filter((t) => t.category !== e));
  setCategoryOrder(getCategoryOrder().filter((t) => t !== e));
  setCustomCategories(getCustomCategories().filter((t) => t !== e));
  localStorage.removeItem(`bookmarkOrder_${e}`);
  let t = getCollapsedCategories();
  if (t[e] !== void 0) {
    let n = {
      ...t,
    };
    delete n[e];
    setCollapsedCategories(n);
  }
};
var addCategory = (e) => {
  let t = getCustomCategories();
  t.includes(e) || setCustomCategories([...t, e]);
  let n = getCategoryOrder();
  n.includes(e) || setCategoryOrder([...n, e]);
};
var getBackgroundMediaType = () => localStorage.getItem(`backgroundMediaType`) || `none`;
var setBackgroundMediaType = (e) => {
  localStorage.setItem(`backgroundMediaType`, e);
};
var getBackgroundMediaVersion = () => {
  let e = localStorage.getItem(`backgroundMediaVersion`);
  return e ? parseInt(e, 10) : 0;
};
var incrementBackgroundMediaVersion = () => {
  let e = getBackgroundMediaVersion() + 1;
  return (localStorage.setItem(`backgroundMediaVersion`, e.toString()), e);
};
var BACKGROUND_MEDIA_STORAGE_KEY = `background-media`;
var saveBackgroundMedia = async (e, t) => {
  try {
    await storeMediaBlob(BACKGROUND_MEDIA_STORAGE_KEY, e, t);
  } catch (e) {
    throw (console.error(`Error saving cached background media:`, e), e);
  }
};
var clearBackgroundMedia = async () => {
  try {
    await deleteMediaBlob(BACKGROUND_MEDIA_STORAGE_KEY);
    localStorage.removeItem(`backgroundMediaType`);
  } catch (e) {
    console.error(`Error clearing cached background media:`, e);
  }
};
var loadBackgroundMedia = async () => {
  try {
    return await readMediaBlob(BACKGROUND_MEDIA_STORAGE_KEY);
  } catch (e) {
    return (console.error(`Error loading cached background media blob:`, e), null);
  }
};
var getScanLinesMode = () => localStorage.getItem(`scanLinesMode`) || DEFAULT_SCAN_LINES_MODE;
var setScanLinesMode = (e) => {
  localStorage.setItem(`scanLinesMode`, e);
};
var getTabTitle = () => localStorage.getItem(`tabTitle`) || DEFAULT_TAB_TITLE;
var setTabTitle = (e) => {
  localStorage.setItem(`tabTitle`, e);
};
var getSelectedFont = () => localStorage.getItem(`selectedFont`) || DEFAULT_FONT;
var getExportableFont = () => (getSelectedFont() === `custom` ? DEFAULT_FONT : getSelectedFont());
var setSelectedFont = (e) => {
  localStorage.setItem(`selectedFont`, e);
};
var saveCustomFont = async (e) => {
  await storeMediaBlob(CUSTOM_FONT_STORAGE_KEY, e, e.type || `font/woff2`);
  localStorage.setItem(CUSTOM_FONT_NAME_KEY, e.name);
};
var loadCustomFont = async () => readMediaBlob(CUSTOM_FONT_STORAGE_KEY);
var getCustomFontName = () => localStorage.getItem(CUSTOM_FONT_NAME_KEY) || ``;
var clearCustomFont = async () => {
  await deleteMediaBlob(CUSTOM_FONT_STORAGE_KEY);
  localStorage.removeItem(CUSTOM_FONT_NAME_KEY);
};
var getTabFavicon = () => localStorage.getItem(`tabFavicon`) || `Terminal`;
var setTabFavicon = (e) => {
  localStorage.setItem(`tabFavicon`, e);
};
var formatCurrentTime = () => {
  let e = new Date();
  if (getTimeFormat())
    return `${e.getHours().toString().padStart(2, `0`)}:${e.getMinutes().toString().padStart(2, `0`)}`;
  {
    let t = e.getHours();
    let n = e.getMinutes().toString().padStart(2, `0`);
    let r = t >= 12 ? `PM` : `AM`;
    return ((t %= 12), (t ||= 12), `${t}:${n} ${r}`);
  }
};
var formatCurrentDate = () =>
  new Date().toLocaleDateString(`en-US`, {
    weekday: `long`,
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  });
var getTimeOfDay = () => {
  let e = new Date().getHours();
  return e >= 5 && e < 12
    ? `morning`
    : e >= 12 && e < 17
      ? `afternoon`
      : e >= 17 && e < 21
        ? `evening`
        : `night`;
};
var getGreeting = () => {
  let e = getTimeOfDay();
  let t = getUserName();
  switch (e) {
    case `morning`:
      return `Morning, ${t}`;
    case `afternoon`:
      return `Afternoon, ${t}`;
    case `evening`:
      return `Evening, ${t}`;
    case `night`:
      return `Night, ${t}`;
    default:
      return `Hello, ${t}`;
  }
};
// #endregion app/04-preferences.js

;
// #region vendor/05-jsx-runtime.js
/* JSX runtime and React function aliases. Shared scope; build with node scripts/build.cjs. */

var bt = o(e => {
  var t = u();
  var n = Symbol.for(`react.element`);
  var r = Symbol.for(`react.fragment`);
  var i = Object.prototype.hasOwnProperty;
  var a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var o = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function s(e, t, r) {
    var s;
    var c = {};
    var l = null;
    var u = null;
    for (s in r !== void 0 && (l = `` + r), t.key !== void 0 && (l = `` + t.key), t.ref !== void 0 && (u = t.ref), t) i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
    if (e && e.defaultProps) for (s in t = e.defaultProps, t) c[s] === void 0 && (c[s] = t[s]);
    return {
      $$typeof: n,
      type: e,
      key: l,
      ref: u,
      props: c,
      _owner: a.current
    };
  }
  e.Fragment = r;
  e.jsx = s;
  e.jsxs = s;
});
var jsxRuntime = o((e, t) => {
  t.exports = bt();
})();
var useState = React.useState;
var useEffect = React.useEffect;
var jsxs = jsxRuntime.jsxs;
var jsx = jsxRuntime.jsx;
var useMemo = React.useMemo;
var useRef = React.useRef;
var useCallback = React.useCallback;
var memo = React.memo;
var useLayoutEffect = React.useLayoutEffect;
var renderToStaticMarkup = ReactDOMServer.renderToStaticMarkup;
var createRoot = ReactDOMClient.createRoot;
// #endregion vendor/05-jsx-runtime.js

;
// #region app/06-clock.js
/* Clock and date component. Shared scope; build with node scripts/build.cjs. */

var /* Clock and date component. */
  Clock = ({ showTime = true, showDate = true, glitchingTime = false, glitchingDate = false }) => {
    let [timeText, setTimeText] = useState(formatCurrentTime());
    let [dateText, setDateText] = useState(formatCurrentDate());
    let [clockGlitching, setClockGlitching] = useState(false);
    let [use24HourTime, setUse24HourTime] = useState(getTimeFormat());
    let [formatGlitching, setFormatGlitching] = useState(false);
    return (
      useEffect(() => {
        let e = setInterval(() => {
          setTimeText(formatCurrentTime());
          setDateText(formatCurrentDate());
        }, 1e3);
        let t = setInterval(() => {
          Math.random() > 0.9 &&
            (setClockGlitching(true), setTimeout(() => setClockGlitching(false), 200));
        }, 5e3);
        return () => {
          clearInterval(e);
          clearInterval(t);
        };
      }, []),
      jsxs(`div`, {
        className: `clock-container flex flex-col items-center mb-6`,
        children: [
          showTime &&
            jsxs(`button`, {
              onClick: () => {
                setFormatGlitching(true);
                setTimeout(() => {
                  let e = !use24HourTime;
                  setUse24HourTime(e);
                  setTimeFormat(e);
                  setTimeText(formatCurrentTime());
                  setFormatGlitching(false);
                }, 100);
              },
              className: `text-6xl md:text-8xl font-mono font-bold text-cyan-400 
                     tracking-wide relative hover-glitch cursor-pointer transition-colors
                     hover:text-cyan-300 ${clockGlitching || formatGlitching || glitchingTime ? `glitch` : ``}`,
              "data-text": timeText,
              children: [
                timeText,
                (clockGlitching || formatGlitching || glitchingTime) &&
                  jsx(`span`, {
                    className: `absolute inset-0 text-pink-500 glitch-1`,
                    children: timeText,
                  }),
                (clockGlitching || formatGlitching || glitchingTime) &&
                  jsx(`span`, {
                    className: `absolute inset-0 text-yellow-300 glitch-2`,
                    children: timeText,
                  }),
              ],
            }),
          showDate &&
            jsx(`p`, {
              className: `text-lg md:text-xl text-yellow-300 font-mono mt-2 uppercase tracking-widest hover-glitch ${glitchingDate ? `glitch` : ``}`,
              "data-text": dateText,
              children: dateText,
            }),
        ],
      })
    );
  };
// #endregion app/06-clock.js

;
// #region vendor/07-icons.js
/* Bundled SVG icon definitions. Shared scope; build with node scripts/build.cjs. */

var St = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
var Ct = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase());
var wt = e => {
  let t = Ct(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var Tt = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim();
var Et = e => {
  for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return true;
};
var Dt = {
  xmlns: `http://www.w3.org/2000/svg`,
  width: 24,
  height: 24,
  viewBox: `0 0 24 24`,
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 2,
  strokeLinecap: `round`,
  strokeLinejoin: `round`
};
var Ot = (0, React.forwardRef)(({
  color: e = `currentColor`,
  size: t = 24,
  strokeWidth: n = 2,
  absoluteStrokeWidth: r,
  className: i = ``,
  children: a,
  iconNode: o,
  ...s
}, c) => (0, React.createElement)(`svg`, {
  ref: c,
  ...Dt,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: r ? Number(n) * 24 / Number(t) : n,
  className: Tt(`lucide`, i),
  ...(!a && !Et(s) && {
    "aria-hidden": `true`
  }),
  ...s
}, [...o.map(([e, t]) => (0, React.createElement)(e, t)), ...(Array.isArray(a) ? a : [a])]));
var G = (e, t) => {
  let n = (0, React.forwardRef)(({
    className: n,
    ...r
  }, i) => (0, React.createElement)(Ot, {
    ref: i,
    iconNode: t,
    className: Tt(`lucide-${St(wt(e))}`, `lucide-${e}`, n),
    ...r
  }));
  return n.displayName = wt(e), n;
};
var kt = G(`aperture`, [[`circle`, {
  cx: `12`,
  cy: `12`,
  r: `10`,
  key: `1mglay`
}], [`path`, {
  d: `m14.31 8 5.74 9.94`,
  key: `1y6ab4`
}], [`path`, {
  d: `M9.69 8h11.48`,
  key: `1wxppr`
}], [`path`, {
  d: `m7.38 12 5.74-9.94`,
  key: `1grp0k`
}], [`path`, {
  d: `M9.69 16 3.95 6.06`,
  key: `libnyf`
}], [`path`, {
  d: `M14.31 16H2.83`,
  key: `x5fava`
}], [`path`, {
  d: `m16.62 12-5.74 9.94`,
  key: `1vwawt`
}]]);
var At = G(`bolt`, [[`path`, {
  d: `M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z`,
  key: `yt0hxn`
}], [`circle`, {
  cx: `12`,
  cy: `12`,
  r: `4`,
  key: `4exip2`
}]]);
var jt = G(`bookmark-plus`, [[`path`, {
  d: `m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z`,
  key: `1fy3hk`
}], [`line`, {
  x1: `12`,
  x2: `12`,
  y1: `7`,
  y2: `13`,
  key: `1cppfj`
}], [`line`, {
  x1: `15`,
  x2: `9`,
  y1: `10`,
  y2: `10`,
  key: `1gty7f`
}]]);
var Mt = G(`bot`, [[`path`, {
  d: `M12 8V4H8`,
  key: `hb8ula`
}], [`rect`, {
  width: `16`,
  height: `12`,
  x: `4`,
  y: `8`,
  rx: `2`,
  key: `enze0r`
}], [`path`, {
  d: `M2 14h2`,
  key: `vft8re`
}], [`path`, {
  d: `M20 14h2`,
  key: `4cs60a`
}], [`path`, {
  d: `M15 13v2`,
  key: `1xurst`
}], [`path`, {
  d: `M9 13v2`,
  key: `rq6x2g`
}]]);
var Nt = G(`brain`, [[`path`, {
  d: `M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,
  key: `l5xja`
}], [`path`, {
  d: `M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z`,
  key: `ep3f8r`
}], [`path`, {
  d: `M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4`,
  key: `1p4c4q`
}], [`path`, {
  d: `M17.599 6.5a3 3 0 0 0 .399-1.375`,
  key: `tmeiqw`
}], [`path`, {
  d: `M6.003 5.125A3 3 0 0 0 6.401 6.5`,
  key: `105sqy`
}], [`path`, {
  d: `M3.477 10.896a4 4 0 0 1 .585-.396`,
  key: `ql3yin`
}], [`path`, {
  d: `M19.938 10.5a4 4 0 0 1 .585.396`,
  key: `1qfode`
}], [`path`, {
  d: `M6 18a4 4 0 0 1-1.967-.516`,
  key: `2e4loj`
}], [`path`, {
  d: `M19.967 17.484A4 4 0 0 1 18 18`,
  key: `159ez6`
}]]);
var Pt = G(`briefcase`, [[`path`, {
  d: `M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,
  key: `jecpp`
}], [`rect`, {
  width: `20`,
  height: `14`,
  x: `2`,
  y: `6`,
  rx: `2`,
  key: `i6l2r4`
}]]);
var Ft = G(`bug`, [[`path`, {
  d: `m8 2 1.88 1.88`,
  key: `fmnt4t`
}], [`path`, {
  d: `M14.12 3.88 16 2`,
  key: `qol33r`
}], [`path`, {
  d: `M9 7.13v-1a3.003 3.003 0 1 1 6 0v1`,
  key: `d7y7pr`
}], [`path`, {
  d: `M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6`,
  key: `xs1cw7`
}], [`path`, {
  d: `M12 20v-9`,
  key: `1qisl0`
}], [`path`, {
  d: `M6.53 9C4.6 8.8 3 7.1 3 5`,
  key: `32zzws`
}], [`path`, {
  d: `M6 13H2`,
  key: `82j7cp`
}], [`path`, {
  d: `M3 21c0-2.1 1.7-3.9 3.8-4`,
  key: `4p0ekp`
}], [`path`, {
  d: `M20.97 5c0 2.1-1.6 3.8-3.5 4`,
  key: `18gb23`
}], [`path`, {
  d: `M22 13h-4`,
  key: `1jl80f`
}], [`path`, {
  d: `M17.2 17c2.1.1 3.8 1.9 3.8 4`,
  key: `k3fwyw`
}]]);
var K = G(`camera`, [[`path`, {
  d: `M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z`,
  key: `1tc9qg`
}], [`circle`, {
  cx: `12`,
  cy: `13`,
  r: `3`,
  key: `1vg3eu`
}]]);
var It = G(`cctv`, [[`path`, {
  d: `M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97`,
  key: `ir91b5`
}], [`path`, {
  d: `M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z`,
  key: `jlp8i1`
}], [`path`, {
  d: `M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15`,
  key: `19bib8`
}], [`path`, {
  d: `M2 21v-4`,
  key: `l40lih`
}], [`path`, {
  d: `M7 9h.01`,
  key: `19b3jx`
}]]);
var Lt = G(`chart-no-axes-combined`, [[`path`, {
  d: `M12 16v5`,
  key: `zza2cw`
}], [`path`, {
  d: `M16 14v7`,
  key: `1g90b9`
}], [`path`, {
  d: `M20 10v11`,
  key: `1iqoj0`
}], [`path`, {
  d: `m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15`,
  key: `1fw8x9`
}], [`path`, {
  d: `M4 18v3`,
  key: `1yp0dc`
}], [`path`, {
  d: `M8 14v7`,
  key: `n3cwzv`
}]]);
var Rt = G(`chevron-down`, [[`path`, {
  d: `m6 9 6 6 6-6`,
  key: `qrunsl`
}]]);
var zt = G(`chevron-right`, [[`path`, {
  d: `m9 18 6-6-6-6`,
  key: `mthhwq`
}]]);
var Bt = G(`chevron-up`, [[`path`, {
  d: `m18 15-6-6-6 6`,
  key: `153udz`
}]]);
var Vt = G(`circle-help`, [[`circle`, {
  cx: `12`,
  cy: `12`,
  r: `10`,
  key: `1mglay`
}], [`path`, {
  d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,
  key: `1u773s`
}], [`path`, {
  d: `M12 17h.01`,
  key: `p32p05`
}]]);
var Ht = G(`clipboard-list`, [[`rect`, {
  width: `8`,
  height: `4`,
  x: `8`,
  y: `2`,
  rx: `1`,
  ry: `1`,
  key: `tgr4d6`
}], [`path`, {
  d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,
  key: `116196`
}], [`path`, {
  d: `M12 11h4`,
  key: `1jrz19`
}], [`path`, {
  d: `M12 16h4`,
  key: `n85exb`
}], [`path`, {
  d: `M8 11h.01`,
  key: `1dfujw`
}], [`path`, {
  d: `M8 16h.01`,
  key: `18s6g9`
}]]);
var Ut = G(`cloud-lightning`, [[`path`, {
  d: `M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973`,
  key: `1cez44`
}], [`path`, {
  d: `m13 12-3 5h4l-3 5`,
  key: `1t22er`
}]]);
var Wt = G(`cloud-rain`, [[`path`, {
  d: `M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`,
  key: `1pljnt`
}], [`path`, {
  d: `M16 14v6`,
  key: `1j4efv`
}], [`path`, {
  d: `M8 14v6`,
  key: `17c4r9`
}], [`path`, {
  d: `M12 16v6`,
  key: `c8a4gj`
}]]);
var Gt = G(`cloud-snow`, [[`path`, {
  d: `M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`,
  key: `1pljnt`
}], [`path`, {
  d: `M8 15h.01`,
  key: `a7atzg`
}], [`path`, {
  d: `M8 19h.01`,
  key: `puxtts`
}], [`path`, {
  d: `M12 17h.01`,
  key: `p32p05`
}], [`path`, {
  d: `M12 21h.01`,
  key: `h35vbk`
}], [`path`, {
  d: `M16 15h.01`,
  key: `rnfrdf`
}], [`path`, {
  d: `M16 19h.01`,
  key: `1vcnzz`
}]]);
var Kt = G(`cloud`, [[`path`, {
  d: `M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,
  key: `p7xjir`
}]]);
var qt = G(`code`, [[`path`, {
  d: `m16 18 6-6-6-6`,
  key: `eg8j8`
}], [`path`, {
  d: `m8 6-6 6 6 6`,
  key: `ppft3o`
}]]);
var Jt = G(`coffee`, [[`path`, {
  d: `M10 2v2`,
  key: `7u0qdc`
}], [`path`, {
  d: `M14 2v2`,
  key: `6buw04`
}], [`path`, {
  d: `M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1`,
  key: `pwadti`
}], [`path`, {
  d: `M6 2v2`,
  key: `colzsn`
}]]);
var Yt = G(`cog`, [[`path`, {
  d: `M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z`,
  key: `sobvz5`
}], [`path`, {
  d: `M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z`,
  key: `11i496`
}], [`path`, {
  d: `M12 2v2`,
  key: `tus03m`
}], [`path`, {
  d: `M12 22v-2`,
  key: `1osdcq`
}], [`path`, {
  d: `m17 20.66-1-1.73`,
  key: `eq3orb`
}], [`path`, {
  d: `M11 10.27 7 3.34`,
  key: `16pf9h`
}], [`path`, {
  d: `m20.66 17-1.73-1`,
  key: `sg0v6f`
}], [`path`, {
  d: `m3.34 7 1.73 1`,
  key: `1ulond`
}], [`path`, {
  d: `M14 12h8`,
  key: `4f43i9`
}], [`path`, {
  d: `M2 12h2`,
  key: `1t8f8n`
}], [`path`, {
  d: `m20.66 7-1.73 1`,
  key: `1ow05n`
}], [`path`, {
  d: `m3.34 17 1.73-1`,
  key: `nuk764`
}], [`path`, {
  d: `m17 3.34-1 1.73`,
  key: `2wel8s`
}], [`path`, {
  d: `m11 13.73-4 6.93`,
  key: `794ttg`
}]]);
var Xt = G(`copy`, [[`rect`, {
  width: `14`,
  height: `14`,
  x: `8`,
  y: `8`,
  rx: `2`,
  ry: `2`,
  key: `17jyea`
}], [`path`, {
  d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
  key: `zix9uf`
}]]);
var Zt = G(`dollar-sign`, [[`line`, {
  x1: `12`,
  x2: `12`,
  y1: `2`,
  y2: `22`,
  key: `7eqyqh`
}], [`path`, {
  d: `M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`,
  key: `1b0p4s`
}]]);
var Qt = G(`download`, [[`path`, {
  d: `M12 15V3`,
  key: `m9g1x1`
}], [`path`, {
  d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,
  key: `ih7n3h`
}], [`path`, {
  d: `m7 10 5 5 5-5`,
  key: `brsn70`
}]]);
var $t = G(`earth`, [[`path`, {
  d: `M21.54 15H17a2 2 0 0 0-2 2v4.54`,
  key: `1djwo0`
}], [`path`, {
  d: `M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17`,
  key: `1tzkfa`
}], [`path`, {
  d: `M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05`,
  key: `14pb5j`
}], [`circle`, {
  cx: `12`,
  cy: `12`,
  r: `10`,
  key: `1mglay`
}]]);
var en = G(`external-link`, [[`path`, {
  d: `M15 3h6v6`,
  key: `1q9fwt`
}], [`path`, {
  d: `M10 14 21 3`,
  key: `gplh6r`
}], [`path`, {
  d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
  key: `a6xqqp`
}]]);
var tn = G(`eye-off`, [[`path`, {
  d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,
  key: `ct8e1f`
}], [`path`, {
  d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`,
  key: `151rxh`
}], [`path`, {
  d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,
  key: `13bj9a`
}], [`path`, {
  d: `m2 2 20 20`,
  key: `1ooewy`
}]]);
var q = G(`eye`, [[`path`, {
  d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
  key: `1nclc0`
}], [`circle`, {
  cx: `12`,
  cy: `12`,
  r: `3`,
  key: `1v7zrd`
}]]);
var nn = G(`file-text`, [[`path`, {
  d: `M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,
  key: `1rqfz7`
}], [`path`, {
  d: `M14 2v4a2 2 0 0 0 2 2h4`,
  key: `tnqrlb`
}], [`path`, {
  d: `M10 9H8`,
  key: `b1mrlr`
}], [`path`, {
  d: `M16 13H8`,
  key: `t4e002`
}], [`path`, {
  d: `M16 17H8`,
  key: `z1uh3a`
}]]);
var rn = G(`fingerprint`, [[`path`, {
  d: `M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4`,
  key: `1nerag`
}], [`path`, {
  d: `M14 13.12c0 2.38 0 6.38-1 8.88`,
  key: `o46ks0`
}], [`path`, {
  d: `M17.29 21.02c.12-.6.43-2.3.5-3.02`,
  key: `ptglia`
}], [`path`, {
  d: `M2 12a10 10 0 0 1 18-6`,
  key: `ydlgp0`
}], [`path`, {
  d: `M2 16h.01`,
  key: `1gqxmh`
}], [`path`, {
  d: `M21.8 16c.2-2 .131-5.354 0-6`,
  key: `drycrb`
}], [`path`, {
  d: `M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2`,
  key: `1tidbn`
}], [`path`, {
  d: `M8.65 22c.21-.66.45-1.32.57-2`,
  key: `13wd9y`
}], [`path`, {
  d: `M9 6.8a6 6 0 0 1 9 5.2v2`,
  key: `1fr1j5`
}]]);
var an = G(`flag`, [[`path`, {
  d: `M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z`,
  key: `i9b6wo`
}], [`line`, {
  x1: `4`,
  x2: `4`,
  y1: `22`,
  y2: `15`,
  key: `1cm3nv`
}]]);
var on = G(`gamepad-2`, [[`line`, {
  x1: `6`,
  x2: `10`,
  y1: `11`,
  y2: `11`,
  key: `1gktln`
}], [`line`, {
  x1: `8`,
  x2: `8`,
  y1: `9`,
  y2: `13`,
  key: `qnk9ow`
}], [`line`, {
  x1: `15`,
  x2: `15.01`,
  y1: `12`,
  y2: `12`,
  key: `krot7o`
}], [`line`, {
  x1: `18`,
  x2: `18.01`,
  y1: `10`,
  y2: `10`,
  key: `1lcuu1`
}], [`path`, {
  d: `M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,
  key: `mfqc10`
}]]);
var sn = G(`gem`, [[`path`, {
  d: `M6 3h12l4 6-10 13L2 9Z`,
  key: `1pcd5k`
}], [`path`, {
  d: `M11 3 8 9l4 13 4-13-3-6`,
  key: `1fcu3u`
}], [`path`, {
  d: `M2 9h20`,
  key: `16fsjt`
}]]);
var cn = G(`globe`, [[`circle`, {
  cx: `12`,
  cy: `12`,
  r: `10`,
  key: `1mglay`
}], [`path`, {
  d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,
  key: `13o1zl`
}], [`path`, {
  d: `M2 12h20`,
  key: `9i4pu4`
}]]);
var ln = G(`grip-vertical`, [[`circle`, {
  cx: `9`,
  cy: `12`,
  r: `1`,
  key: `1vctgf`
}], [`circle`, {
  cx: `9`,
  cy: `5`,
  r: `1`,
  key: `hp0tcf`
}], [`circle`, {
  cx: `9`,
  cy: `19`,
  r: `1`,
  key: `fkjjf6`
}], [`circle`, {
  cx: `15`,
  cy: `12`,
  r: `1`,
  key: `1tmaij`
}], [`circle`, {
  cx: `15`,
  cy: `5`,
  r: `1`,
  key: `19l28e`
}], [`circle`, {
  cx: `15`,
  cy: `19`,
  r: `1`,
  key: `f4zoj3`
}]]);
var un = G(`grip`, [[`circle`, {
  cx: `12`,
  cy: `5`,
  r: `1`,
  key: `gxeob9`
}], [`circle`, {
  cx: `19`,
  cy: `5`,
  r: `1`,
  key: `w8mnmm`
}], [`circle`, {
  cx: `5`,
  cy: `5`,
  r: `1`,
  key: `lttvr7`
}], [`circle`, {
  cx: `12`,
  cy: `12`,
  r: `1`,
  key: `41hilf`
}], [`circle`, {
  cx: `19`,
  cy: `12`,
  r: `1`,
  key: `1wjl8i`
}], [`circle`, {
  cx: `5`,
  cy: `12`,
  r: `1`,
  key: `1pcz8c`
}], [`circle`, {
  cx: `12`,
  cy: `19`,
  r: `1`,
  key: `lyex9k`
}], [`circle`, {
  cx: `19`,
  cy: `19`,
  r: `1`,
  key: `shf9b7`
}], [`circle`, {
  cx: `5`,
  cy: `19`,
  r: `1`,
  key: `bfqh0e`
}]]);
var dn = G(`hamburger`, [[`path`, {
  d: `M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25`,
  key: `5dloqd`
}], [`path`, {
  d: `M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2`,
  key: `1vl3my`
}], [`path`, {
  d: `M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0`,
  key: `1us75o`
}], [`path`, {
  d: `m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2`,
  key: `qqzweh`
}]]);
var fn = G(`heart`, [[`path`, {
  d: `M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`,
  key: `c3ymky`
}]]);
var pn = G(`house`, [[`path`, {
  d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,
  key: `5wwlr5`
}], [`path`, {
  d: `M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
  key: `1d0kgt`
}]]);
var mn = G(`image`, [[`rect`, {
  width: `18`,
  height: `18`,
  x: `3`,
  y: `3`,
  rx: `2`,
  ry: `2`,
  key: `1m3agn`
}], [`circle`, {
  cx: `9`,
  cy: `9`,
  r: `2`,
  key: `af1f0g`
}], [`path`, {
  d: `m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,
  key: `1xmnt7`
}]]);
var hn = G(`info`, [[`circle`, {
  cx: `12`,
  cy: `12`,
  r: `10`,
  key: `1mglay`
}], [`path`, {
  d: `M12 16v-4`,
  key: `1dtifu`
}], [`path`, {
  d: `M12 8h.01`,
  key: `e9boi3`
}]]);
var gn = G(`mail`, [[`path`, {
  d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,
  key: `132q7q`
}], [`rect`, {
  x: `2`,
  y: `4`,
  width: `20`,
  height: `16`,
  rx: `2`,
  key: `izxlao`
}]]);
var _n = G(`map-pin`, [[`path`, {
  d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
  key: `1r0f0z`
}], [`circle`, {
  cx: `12`,
  cy: `10`,
  r: `3`,
  key: `ilqhr7`
}]]);
var vn = G(`map`, [[`path`, {
  d: `M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`,
  key: `169xi5`
}], [`path`, {
  d: `M15 5.764v15`,
  key: `1pn4in`
}], [`path`, {
  d: `M9 3.236v15`,
  key: `1uimfh`
}]]);
var yn = G(`message-circle`, [[`path`, {
  d: `M7.9 20A9 9 0 1 0 4 16.1L2 22Z`,
  key: `vv11sd`
}]]);
var bn = G(`monitor`, [[`rect`, {
  width: `20`,
  height: `14`,
  x: `2`,
  y: `3`,
  rx: `2`,
  key: `48i651`
}], [`line`, {
  x1: `8`,
  x2: `16`,
  y1: `21`,
  y2: `21`,
  key: `1svkeh`
}], [`line`, {
  x1: `12`,
  x2: `12`,
  y1: `17`,
  y2: `21`,
  key: `vw1qmm`
}]]);
var xn = G(`music`, [[`path`, {
  d: `M9 18V5l12-2v13`,
  key: `1jmyc2`
}], [`circle`, {
  cx: `6`,
  cy: `18`,
  r: `3`,
  key: `fqmcym`
}], [`circle`, {
  cx: `18`,
  cy: `16`,
  r: `3`,
  key: `1hluhg`
}]]);
var Sn = G(`newspaper`, [[`path`, {
  d: `M15 18h-5`,
  key: `95g1m2`
}], [`path`, {
  d: `M18 14h-8`,
  key: `sponae`
}], [`path`, {
  d: `M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2`,
  key: `39pd36`
}], [`rect`, {
  width: `8`,
  height: `4`,
  x: `10`,
  y: `6`,
  rx: `1`,
  key: `aywv1n`
}]]);
var Cn = G(`palette`, [[`path`, {
  d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,
  key: `e79jfc`
}], [`circle`, {
  cx: `13.5`,
  cy: `6.5`,
  r: `.5`,
  fill: `currentColor`,
  key: `1okk4w`
}], [`circle`, {
  cx: `17.5`,
  cy: `10.5`,
  r: `.5`,
  fill: `currentColor`,
  key: `f64h9f`
}], [`circle`, {
  cx: `6.5`,
  cy: `12.5`,
  r: `.5`,
  fill: `currentColor`,
  key: `qy21gx`
}], [`circle`, {
  cx: `8.5`,
  cy: `7.5`,
  r: `.5`,
  fill: `currentColor`,
  key: `fotxhn`
}]]);
var wn = G(`paw-print`, [[`circle`, {
  cx: `11`,
  cy: `4`,
  r: `2`,
  key: `vol9p0`
}], [`circle`, {
  cx: `18`,
  cy: `8`,
  r: `2`,
  key: `17gozi`
}], [`circle`, {
  cx: `20`,
  cy: `16`,
  r: `2`,
  key: `1v9bxh`
}], [`path`, {
  d: `M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z`,
  key: `1ydw1z`
}]]);
var Tn = G(`phone`, [[`path`, {
  d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
  key: `9njp5v`
}]]);
var En = G(`plus`, [[`path`, {
  d: `M5 12h14`,
  key: `1ays0h`
}], [`path`, {
  d: `M12 5v14`,
  key: `s699le`
}]]);
var Dn = G(`podcast`, [[`path`, {
  d: `M16.85 18.58a9 9 0 1 0-9.7 0`,
  key: `d71mpg`
}], [`path`, {
  d: `M8 14a5 5 0 1 1 8 0`,
  key: `fc81rn`
}], [`circle`, {
  cx: `12`,
  cy: `11`,
  r: `1`,
  key: `1gvufo`
}], [`path`, {
  d: `M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z`,
  key: `za5kbj`
}]]);
var On = G(`popcorn`, [[`path`, {
  d: `M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4`,
  key: `10td1f`
}], [`path`, {
  d: `M10 22 9 8`,
  key: `yjptiv`
}], [`path`, {
  d: `m14 22 1-14`,
  key: `8jwc8b`
}], [`path`, {
  d: `M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z`,
  key: `1qo33t`
}]]);
var kn = G(`rocket`, [[`path`, {
  d: `M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z`,
  key: `m3kijz`
}], [`path`, {
  d: `m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z`,
  key: `1fmvmk`
}], [`path`, {
  d: `M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0`,
  key: `1f8sc4`
}], [`path`, {
  d: `M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`,
  key: `qeys4`
}]]);
var An = G(`rss`, [[`path`, {
  d: `M4 11a9 9 0 0 1 9 9`,
  key: `pv89mb`
}], [`path`, {
  d: `M4 4a16 16 0 0 1 16 16`,
  key: `k0647b`
}], [`circle`, {
  cx: `5`,
  cy: `19`,
  r: `1`,
  key: `bfqh0e`
}]]);
var jn = G(`save`, [[`path`, {
  d: `M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,
  key: `1c8476`
}], [`path`, {
  d: `M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,
  key: `1ydtos`
}], [`path`, {
  d: `M7 3v4a1 1 0 0 0 1 1h7`,
  key: `t51u73`
}]]);
var Mn = G(`settings`, [[`path`, {
  d: `M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`,
  key: `1qme2f`
}], [`circle`, {
  cx: `12`,
  cy: `12`,
  r: `3`,
  key: `1v7zrd`
}]]);
var Nn = G(`shield`, [[`path`, {
  d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
  key: `oel41y`
}]]);
var Pn = G(`shopping-bag`, [[`path`, {
  d: `M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z`,
  key: `hou9p0`
}], [`path`, {
  d: `M3 6h18`,
  key: `d0wm0j`
}], [`path`, {
  d: `M16 10a4 4 0 0 1-8 0`,
  key: `1ltviw`
}]]);
var Fn = G(`shopping-basket`, [[`path`, {
  d: `m15 11-1 9`,
  key: `5wnq3a`
}], [`path`, {
  d: `m19 11-4-7`,
  key: `cnml18`
}], [`path`, {
  d: `M2 11h20`,
  key: `3eubbj`
}], [`path`, {
  d: `m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4`,
  key: `yiazzp`
}], [`path`, {
  d: `M4.5 15.5h15`,
  key: `13mye1`
}], [`path`, {
  d: `m5 11 4-7`,
  key: `116ra9`
}], [`path`, {
  d: `m9 11 1 9`,
  key: `1ojof7`
}]]);
var In = G(`skull`, [[`path`, {
  d: `m12.5 17-.5-1-.5 1h1z`,
  key: `3me087`
}], [`path`, {
  d: `M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z`,
  key: `1o5pge`
}], [`circle`, {
  cx: `15`,
  cy: `12`,
  r: `1`,
  key: `1tmaij`
}], [`circle`, {
  cx: `9`,
  cy: `12`,
  r: `1`,
  key: `1vctgf`
}]]);
var Ln = G(`sparkles`, [[`path`, {
  d: `M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z`,
  key: `4pj2yx`
}], [`path`, {
  d: `M20 3v4`,
  key: `1olli1`
}], [`path`, {
  d: `M22 5h-4`,
  key: `1gvqau`
}], [`path`, {
  d: `M4 17v2`,
  key: `vumght`
}], [`path`, {
  d: `M5 18H3`,
  key: `zchphs`
}]]);
var Rn = G(`square-check`, [[`rect`, {
  width: `18`,
  height: `18`,
  x: `3`,
  y: `3`,
  rx: `2`,
  key: `afitv7`
}], [`path`, {
  d: `m9 12 2 2 4-4`,
  key: `dzmm74`
}]]);
var zn = G(`square-pen`, [[`path`, {
  d: `M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`,
  key: `1m0v6g`
}], [`path`, {
  d: `M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z`,
  key: `ohrbg2`
}]]);
var Bn = G(`square`, [[`rect`, {
  width: `18`,
  height: `18`,
  x: `3`,
  y: `3`,
  rx: `2`,
  key: `afitv7`
}]]);
var Vn = G(`star`, [[`path`, {
  d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
  key: `r04s7s`
}]]);
var Hn = G(`sun`, [[`circle`, {
  cx: `12`,
  cy: `12`,
  r: `4`,
  key: `4exip2`
}], [`path`, {
  d: `M12 2v2`,
  key: `tus03m`
}], [`path`, {
  d: `M12 20v2`,
  key: `1lh1kg`
}], [`path`, {
  d: `m4.93 4.93 1.41 1.41`,
  key: `149t6j`
}], [`path`, {
  d: `m17.66 17.66 1.41 1.41`,
  key: `ptbguv`
}], [`path`, {
  d: `M2 12h2`,
  key: `1t8f8n`
}], [`path`, {
  d: `M20 12h2`,
  key: `1q8mjw`
}], [`path`, {
  d: `m6.34 17.66-1.41 1.41`,
  key: `1m8zz5`
}], [`path`, {
  d: `m19.07 4.93-1.41 1.41`,
  key: `1shlcs`
}]]);
var Un = G(`terminal`, [[`path`, {
  d: `M12 19h8`,
  key: `baeox8`
}], [`path`, {
  d: `m4 17 6-6-6-6`,
  key: `1yngyt`
}]]);
var Wn = G(`trash-2`, [[`path`, {
  d: `M3 6h18`,
  key: `d0wm0j`
}], [`path`, {
  d: `M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6`,
  key: `4alrt4`
}], [`path`, {
  d: `M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2`,
  key: `v07s0e`
}], [`line`, {
  x1: `10`,
  x2: `10`,
  y1: `11`,
  y2: `17`,
  key: `1uufr5`
}], [`line`, {
  x1: `14`,
  x2: `14`,
  y1: `11`,
  y2: `17`,
  key: `xtxkd`
}]]);
var Gn = G(`triangle-alert`, [[`path`, {
  d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
  key: `wmoenq`
}], [`path`, {
  d: `M12 9v4`,
  key: `juzpu7`
}], [`path`, {
  d: `M12 17h.01`,
  key: `p32p05`
}]]);
var Kn = G(`tv-minimal-play`, [[`path`, {
  d: `M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z`,
  key: `1pctta`
}], [`path`, {
  d: `M7 21h10`,
  key: `1b0cd5`
}], [`rect`, {
  width: `20`,
  height: `14`,
  x: `2`,
  y: `3`,
  rx: `2`,
  key: `48i651`
}]]);
var qn = G(`upload`, [[`path`, {
  d: `M12 3v12`,
  key: `1x0j5s`
}], [`path`, {
  d: `m17 8-5-5-5 5`,
  key: `7q97r8`
}], [`path`, {
  d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,
  key: `ih7n3h`
}]]);
var Jn = G(`video`, [[`path`, {
  d: `m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`,
  key: `ftymec`
}], [`rect`, {
  x: `2`,
  y: `6`,
  width: `14`,
  height: `12`,
  rx: `2`,
  key: `158x01`
}]]);
var Yn = G(`wallet`, [[`path`, {
  d: `M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,
  key: `18etb6`
}], [`path`, {
  d: `M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`,
  key: `xoc0q4`
}]]);
var Xn = G(`wifi-off`, [[`path`, {
  d: `M12 20h.01`,
  key: `zekei9`
}], [`path`, {
  d: `M8.5 16.429a5 5 0 0 1 7 0`,
  key: `1bycff`
}], [`path`, {
  d: `M5 12.859a10 10 0 0 1 5.17-2.69`,
  key: `1dl1wf`
}], [`path`, {
  d: `M19 12.859a10 10 0 0 0-2.007-1.523`,
  key: `4k23kn`
}], [`path`, {
  d: `M2 8.82a15 15 0 0 1 4.177-2.643`,
  key: `1grhjp`
}], [`path`, {
  d: `M22 8.82a15 15 0 0 0-11.288-3.764`,
  key: `z3jwby`
}], [`path`, {
  d: `m2 2 20 20`,
  key: `1ooewy`
}]]);
var Zn = G(`wind`, [[`path`, {
  d: `M12.8 19.6A2 2 0 1 0 14 16H2`,
  key: `148xed`
}], [`path`, {
  d: `M17.5 8a2.5 2.5 0 1 1 2 4H2`,
  key: `1u4tom`
}], [`path`, {
  d: `M9.8 4.4A2 2 0 1 1 11 8H2`,
  key: `75valh`
}]]);
var Qn = G(`x`, [[`path`, {
  d: `M18 6 6 18`,
  key: `1bl5f8`
}], [`path`, {
  d: `m6 6 12 12`,
  key: `d8bk6v`
}]]);
var $n = G(`zap`, [[`path`, {
  d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
  key: `1xq2db`
}]]);
// #endregion vendor/07-icons.js

;
// #region app/08-search.js
/* Search bar and icon catalogue. Shared scope; build with node scripts/build.cjs. */

var /* Search bar and search engine dispatch. */
  SearchBar = ({ glitching = false }) => {
    let [query, setQuery] = useState(``);
    let [searchEngines, setSearchEnginesState] = useState([]);
    let [activeEngineId, setActiveEngineId] = useState(``);
    let [engineMenuOpen, setEngineMenuOpen] = useState(false);
    let [isSearching, setIsSearching] = useState(false);
    let selectedEngine = searchEngines.find((e) => e.id === activeEngineId) || searchEngines[0];
    useEffect(() => {
      let e = () => {
        let e = getSearchEngines()
          .filter((e) => e.visible)
          .sort((e, t) => e.order - t.order);
        setSearchEnginesState(e);
        setActiveEngineId((t) =>
          e.some((e) => e.id === t) ? t : e.find((e) => e.id === "default")?.id || e[0]?.id || ``,
        );
      };
      return (
        e(),
        setActiveEngineId(getActiveSearchEngine()),
        window.addEventListener(`search-engines-changed`, e),
        () => window.removeEventListener(`search-engines-changed`, e)
      );
    }, []);
    let submitSearch = async (e) => {
      if ((e.preventDefault(), query.trim())) {
        if (
          (setIsSearching(true),
          await new Promise((e) => setTimeout(e, 800)),
          selectedEngine.id === "default")
        )
          typeof chrome < `u` && chrome?.search?.query
            ? chrome.search.query({
                text: query,
                disposition: `CURRENT_TAB`,
              })
            : typeof browser < `u` && browser?.search?.search
              ? browser.search.search({
                  query: query,
                  disposition: `CURRENT_TAB`,
                })
              : (window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`);
        else {
          let e = selectedEngine.url.includes(`{query}`)
            ? selectedEngine.url.replace(`{query}`, encodeURIComponent(query))
            : `${selectedEngine.url}${selectedEngine.url.endsWith(`=`) ? `` : selectedEngine.url.includes(`?`) ? `&q=` : `?q=`}${encodeURIComponent(query)}`;
          window.location.href = e;
        }
      }
    };
    let selectEngine = (e) => {
      setActiveEngineId(e);
      setActiveSearchEngine(e);
      setEngineMenuOpen(false);
    };
    return jsx(`div`, {
      className: `search-container w-full max-w-2xl mx-auto mb-8 ${glitching ? `glitch` : ``}`,
      children: jsx(`form`, {
        onSubmit: submitSearch,
        className: `relative`,
        children: jsxs(`div`, {
          className: `flex`,
          children: [
            jsxs(`div`, {
              className: `dropdown-container relative cursor-pointer mr-0`,
              onClick: () => setEngineMenuOpen(!engineMenuOpen),
              children: [
                jsxs(`div`, {
                  className: `flex items-center justify-center h-full px-4 bg-gray-900 border-2 border-r-0 border-cyan-400 text-cyan-400 hover:bg-gray-800`,
                  children: [
                    selectedEngine?.name,
                    jsx(Rt, {
                      size: 16,
                      className: `ml-2`,
                    }),
                  ],
                }),
                engineMenuOpen &&
                  jsx(`div`, {
                    className: `absolute top-full left-0 z-10 w-full bg-gray-900 border-2 border-pink-500 mt-1 max-h-48 overflow-y-auto scrollbar-cyberpunk`,
                    children: searchEngines.map((e) =>
                      jsx(
                        `div`,
                        {
                          onClick: () => selectEngine(e.id),
                          className: `px-4 py-2 hover:bg-gray-800 cursor-pointer ${e.id === activeEngineId ? `text-yellow-300` : `text-white`}`,
                          children: e.name,
                        },
                        e.id,
                      ),
                    ),
                  }),
              ],
            }),
            jsx(`input`, {
              type: `text`,
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: selectedEngine?.placeholder || `Search...`,
              className: `w-full p-3 text-lg font-mono bg-gray-900 border-2 border-cyan-400 
                      focus:outline-none focus:border-yellow-300 text-white
                      ${isSearching ? `scanning-effect` : ``}`,
            }),
            jsxs(`button`, {
              type: `submit`,
              className: `px-12 font-mono text-black font-bold bg-yellow-300 border-2 border-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 relative overflow-hidden`,
              children: [
                jsx(`span`, {
                  className: isSearching ? `opacity-0` : ``,
                  children: `SCAN`,
                }),
                isSearching &&
                  jsx(`span`, {
                    className: `absolute inset-0 flex items-center justify-center scanning-text`,
                    children: `SCANNING...`,
                  }),
              ],
            }),
          ],
        }),
      }),
    });
  };
var FAVICON_OPTIONS = [
  {
    name: `Default`,
    icon: jt,
  },
  {
    name: `Basket`,
    icon: Fn,
  },
  {
    name: `Bolt`,
    icon: At,
  },
  {
    name: `Bot`,
    icon: Mt,
  },
  {
    name: `Brain`,
    icon: Nt,
  },
  {
    name: `Chat`,
    icon: yn,
  },
  {
    name: `Camera`,
    icon: kt,
  },
  {
    name: `CCTV`,
    icon: It,
  },
  {
    name: `Chart`,
    icon: Lt,
  },
  {
    name: `Code`,
    icon: qt,
  },
  {
    name: `Coffee`,
    icon: Jt,
  },
  {
    name: `Design`,
    icon: Cn,
  },
  {
    name: `Food`,
    icon: dn,
  },
  {
    name: `Gaming`,
    icon: on,
  },
  {
    name: `Gem`,
    icon: sn,
  },
  {
    name: `Heart`,
    icon: fn,
  },
  {
    name: `Home`,
    icon: pn,
  },
  {
    name: `Launch`,
    icon: kn,
  },
  {
    name: `Mail`,
    icon: gn,
  },
  {
    name: `Map`,
    icon: vn,
  },
  {
    name: `Money`,
    icon: Zt,
  },
  {
    name: `Music`,
    icon: xn,
  },
  {
    name: `News`,
    icon: Sn,
  },
  {
    name: `Paw`,
    icon: wn,
  },
  {
    name: `Phone`,
    icon: Tn,
  },
  {
    name: `Pin`,
    icon: _n,
  },
  {
    name: `Podcast`,
    icon: Dn,
  },
  {
    name: `Popcorn`,
    icon: On,
  },
  {
    name: `Security`,
    icon: rn,
  },
  {
    name: `Shield`,
    icon: Nn,
  },
  {
    name: `Shopping`,
    icon: Pn,
  },
  {
    name: `Skull`,
    icon: In,
  },
  {
    name: `Sparkles`,
    icon: Ln,
  },
  {
    name: `Star`,
    icon: Vn,
  },
  {
    name: `Terminal`,
    icon: Un,
  },
  {
    name: `Video`,
    icon: Kn,
  },
  {
    name: `Wallet`,
    icon: Yn,
  },
  {
    name: `Web`,
    icon: cn,
  },
  {
    name: `Work`,
    icon: Pt,
  },
  {
    name: `Zap`,
    icon: $n,
  },
];
// #endregion app/08-search.js

;
// #region vendor/09-drag-drop.js
/* Drag and drop runtime. Shared scope; build with node scripts/build.cjs. */

var nr = m();
function rr() {
  var e = [...arguments];
  return useMemo(() => t => {
    e.forEach(e => e(t));
  }, e);
}
var ir = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0;
function ar(e) {
  let t = Object.prototype.toString.call(e);
  return t === `[object Window]` || t === `[object global]`;
}
function or(e) {
  return `nodeType` in e;
}
function sr(e) {
  return e ? ar(e) ? e : or(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function cr(e) {
  let {
    Document: t
  } = sr(e);
  return e instanceof t;
}
function lr(e) {
  return !ar(e) && e instanceof sr(e).HTMLElement;
}
function ur(e) {
  return e instanceof sr(e).SVGElement;
}
function dr(e) {
  return e ? ar(e) ? e.document : or(e) ? cr(e) ? e : lr(e) || ur(e) ? e.ownerDocument : document : document : document;
}
var fr = ir ? React.useLayoutEffect : React.useEffect;
function pr(e) {
  let t = useRef(e);
  return fr(() => {
    t.current = e;
  }), useCallback(function () {
    var e = [...arguments];
    return t.current == null ? void 0 : t.current(...e);
  }, []);
}
function mr() {
  let e = useRef(null);
  return [useCallback((t, n) => {
    e.current = setInterval(t, n);
  }, []), useCallback(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, [])];
}
function hr(e, t) {
  t === void 0 && (t = [e]);
  let n = useRef(e);
  return fr(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function gr(e, t) {
  let n = useRef();
  return useMemo(() => {
    let t = e(n.current);
    return n.current = t, t;
  }, [...t]);
}
function _r(e) {
  let t = pr(e);
  let n = useRef(null);
  return [n, useCallback(e => {
    e !== n.current && t?.(e, n.current);
    n.current = e;
  }, [])];
}
function vr(e) {
  let t = useRef();
  return useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
var yr = {};
function br(e, t) {
  return useMemo(() => {
    if (t) return t;
    let n = yr[e] == null ? 0 : yr[e] + 1;
    return yr[e] = n, e + `-` + n;
  }, [e, t]);
}
function xr(e) {
  return function (t) {
    return [...arguments].slice(1).reduce((t, n) => {
      let r = Object.entries(n);
      for (let [n, i] of r) {
        let r = t[n];
        r != null && (t[n] = r + e * i);
      }
      return t;
    }, {
      ...t
    });
  };
}
var Sr = xr(1);
var Cr = xr(-1);
function wr(e) {
  return `clientX` in e && `clientY` in e;
}
function Tr(e) {
  if (!e) return false;
  let {
    KeyboardEvent: t
  } = sr(e.target);
  return t && e instanceof t;
}
function Er(e) {
  if (!e) return false;
  let {
    TouchEvent: t
  } = sr(e.target);
  return t && e instanceof t;
}
function Dr(e) {
  if (Er(e)) {
    if (e.touches && e.touches.length) {
      let {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    }
    if (e.changedTouches && e.changedTouches.length) {
      let {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return wr(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
var Or = Object.freeze({
  Translate: {
    toString(e) {
      if (!e) return;
      let {
        x: t,
        y: n
      } = e;
      return `translate3d(` + (t ? Math.round(t) : 0) + `px, ` + (n ? Math.round(n) : 0) + `px, 0)`;
    }
  },
  Scale: {
    toString(e) {
      if (!e) return;
      let {
        scaleX: t,
        scaleY: n
      } = e;
      return `scaleX(` + t + `) scaleY(` + n + `)`;
    }
  },
  Transform: {
    toString(e) {
      if (e) return [Or.Translate.toString(e), Or.Scale.toString(e)].join(` `);
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + ` ` + n + `ms ` + r;
    }
  }
});
var kr = `a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;
function Ar(e) {
  return e.matches(kr) ? e : e.querySelector(kr);
}
var jr = {
  display: `none`
};
function Mr(e) {
  let {
    id: t,
    value: n
  } = e;
  return React.createElement(`div`, {
    id: t,
    style: jr
  }, n);
}
function Nr(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = `assertive`
  } = e;
  return React.createElement(`div`, {
    id: t,
    style: {
      position: `fixed`,
      top: 0,
      left: 0,
      width: 1,
      height: 1,
      margin: -1,
      border: 0,
      padding: 0,
      overflow: `hidden`,
      clip: `rect(0 0 0 0)`,
      clipPath: `inset(100%)`,
      whiteSpace: `nowrap`
    },
    role: `status`,
    "aria-live": r,
    "aria-atomic": true
  }, n);
}
function Pr() {
  let [e, t] = useState(``);
  return {
    announce: useCallback(e => {
      e != null && t(e);
    }, []),
    announcement: e
  };
}
var Fr = (0, React.createContext)(null);
function Ir(e) {
  let t = (0, React.useContext)(Fr);
  useEffect(() => {
    if (!t) throw Error(`useDndMonitor must be used within a children of <DndContext>`);
    return t(e);
  }, [e, t]);
}
function Lr() {
  let [e] = useState(() => new Set());
  let t = useCallback(t => (e.add(t), () => e.delete(t)), [e]);
  return [useCallback(t => {
    let {
      type: n,
      event: r
    } = t;
    e.forEach(e => e[n]?.call(e, r));
  }, [e]), t];
}
var Rr = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
};
var zr = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return `Picked up draggable item ` + t.id + `.`;
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? `Draggable item ` + t.id + ` was moved over droppable area ` + n.id + `.` : `Draggable item ` + t.id + ` is no longer over a droppable area.`;
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? `Draggable item ` + t.id + ` was dropped over droppable area ` + n.id : `Draggable item ` + t.id + ` was dropped.`;
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return `Dragging was cancelled. Draggable item ` + t.id + ` was dropped.`;
  }
};
function Br(e) {
  let {
    announcements: t = zr,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: i = Rr
  } = e;
  let {
    announce: a,
    announcement: o
  } = Pr();
  let s = br(`DndLiveRegion`);
  let [c, l] = useState(false);
  if (useEffect(() => {
    l(true);
  }, []), Ir(useMemo(() => ({
    onDragStart(e) {
      let {
        active: n
      } = e;
      a(t.onDragStart({
        active: n
      }));
    },
    onDragMove(e) {
      let {
        active: n,
        over: r
      } = e;
      t.onDragMove && a(t.onDragMove({
        active: n,
        over: r
      }));
    },
    onDragOver(e) {
      let {
        active: n,
        over: r
      } = e;
      a(t.onDragOver({
        active: n,
        over: r
      }));
    },
    onDragEnd(e) {
      let {
        active: n,
        over: r
      } = e;
      a(t.onDragEnd({
        active: n,
        over: r
      }));
    },
    onDragCancel(e) {
      let {
        active: n,
        over: r
      } = e;
      a(t.onDragCancel({
        active: n,
        over: r
      }));
    }
  }), [a, t])), !c) return null;
  let u = React.createElement(React.Fragment, null, React.createElement(Mr, {
    id: r,
    value: i.draggable
  }), React.createElement(Nr, {
    id: s,
    announcement: o
  }));
  return n ? (0, nr.createPortal)(u, n) : u;
}
var Vr;
(function (e) {
  e.DragStart = `dragStart`;
  e.DragMove = `dragMove`;
  e.DragEnd = `dragEnd`;
  e.DragCancel = `dragCancel`;
  e.DragOver = `dragOver`;
  e.RegisterDroppable = `registerDroppable`;
  e.SetDroppableDisabled = `setDroppableDisabled`;
  e.UnregisterDroppable = `unregisterDroppable`;
})(Vr ||= {});
function Hr() {}
function Ur(e, t) {
  return useMemo(() => ({
    sensor: e,
    options: t ?? {}
  }), [e, t]);
}
function Wr() {
  var e = [...arguments];
  return useMemo(() => [...e].filter(e => e != null), [...e]);
}
var Gr = Object.freeze({
  x: 0,
  y: 0
});
function Kr(e, t) {
  return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function qr(e, t) {
  let {
    data: {
      value: n
    }
  } = e;
  let {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function Jr(e, t) {
  let {
    data: {
      value: n
    }
  } = e;
  let {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function Yr(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: i
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + i,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + i,
    y: n + r
  }];
}
function Xr(e, t) {
  if (!e || e.length === 0) return null;
  let [n] = e;
  return t ? n[t] : n;
}
function Zr(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
var Qr = e => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  let i = Zr(t, t.left, t.top);
  let a = [];
  for (let e of r) {
    let {
      id: t
    } = e;
    let r = n.get(t);
    if (r) {
      let n = Kr(Zr(r), i);
      a.push({
        id: t,
        data: {
          droppableContainer: e,
          value: n
        }
      });
    }
  }
  return a.sort(qr);
};
var $r = e => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  let i = Yr(t);
  let a = [];
  for (let e of r) {
    let {
      id: t
    } = e;
    let r = n.get(t);
    if (r) {
      let n = Yr(r);
      let o = i.reduce((e, t, r) => e + Kr(n[r], t), 0);
      let s = Number((o / 4).toFixed(4));
      a.push({
        id: t,
        data: {
          droppableContainer: e,
          value: s
        }
      });
    }
  }
  return a.sort(qr);
};
function ei(e, t) {
  let n = Math.max(t.top, e.top);
  let r = Math.max(t.left, e.left);
  let i = Math.min(t.left + t.width, e.left + e.width);
  let a = Math.min(t.top + t.height, e.top + e.height);
  let o = i - r;
  let s = a - n;
  if (r < i && n < a) {
    let n = t.width * t.height;
    let r = e.width * e.height;
    let i = o * s;
    let a = i / (n + r - i);
    return Number(a.toFixed(4));
  }
  return 0;
}
var J = e => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  let i = [];
  for (let e of r) {
    let {
      id: r
    } = e;
    let a = n.get(r);
    if (a) {
      let n = ei(a, t);
      n > 0 && i.push({
        id: r,
        data: {
          droppableContainer: e,
          value: n
        }
      });
    }
  }
  return i.sort(Jr);
};
function ti(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function ni(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Gr;
}
function ri(e) {
  return function (t) {
    return [...arguments].slice(1).reduce((t, n) => ({
      ...t,
      top: t.top + e * n.y,
      bottom: t.bottom + e * n.y,
      left: t.left + e * n.x,
      right: t.right + e * n.x
    }), {
      ...t
    });
  };
}
var ii = ri(1);
function ai(e) {
  if (e.startsWith(`matrix3d(`)) {
    let t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  }
  if (e.startsWith(`matrix(`)) {
    let t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function oi(e, t, n) {
  let r = ai(t);
  if (!r) return e;
  let {
    scaleX: i,
    scaleY: a,
    x: o,
    y: s
  } = r;
  let c = e.left - o - (1 - i) * parseFloat(n);
  let l = e.top - s - (1 - a) * parseFloat(n.slice(n.indexOf(` `) + 1));
  let u = i ? e.width / i : e.width;
  let d = a ? e.height / a : e.height;
  return {
    width: u,
    height: d,
    top: l,
    right: c + u,
    bottom: l + d,
    left: c
  };
}
var si = {
  ignoreTransform: false
};
function ci(e, t) {
  t === void 0 && (t = si);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    let {
      transform: t,
      transformOrigin: r
    } = sr(e).getComputedStyle(e);
    t && (n = oi(n, t, r));
  }
  let {
    top: r,
    left: i,
    width: a,
    height: o,
    bottom: s,
    right: c
  } = n;
  return {
    top: r,
    left: i,
    width: a,
    height: o,
    bottom: s,
    right: c
  };
}
function li(e) {
  return ci(e, {
    ignoreTransform: true
  });
}
function ui(e) {
  let t = e.innerWidth;
  let n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function di(e, t) {
  return t === void 0 && (t = sr(e).getComputedStyle(e)), t.position === `fixed`;
}
function fi(e, t) {
  t === void 0 && (t = sr(e).getComputedStyle(e));
  let n = /(auto|scroll|overlay)/;
  return [`overflow`, `overflowX`, `overflowY`].some(e => {
    let r = t[e];
    return typeof r == `string` && n.test(r);
  });
}
function pi(e, t) {
  let n = [];
  function r(i) {
    if (t != null && n.length >= t || !i) return n;
    if (cr(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
    if (!lr(i) || ur(i) || n.includes(i)) return n;
    let a = sr(e).getComputedStyle(i);
    return i !== e && fi(i, a) && n.push(i), di(i, a) ? n : r(i.parentNode);
  }
  return e ? r(e) : n;
}
function mi(e) {
  let [t] = pi(e, 1);
  return t ?? null;
}
function hi(e) {
  return !ir || !e ? null : ar(e) ? e : or(e) ? cr(e) || e === dr(e).scrollingElement ? window : lr(e) ? e : null : null;
}
function gi(e) {
  return ar(e) ? e.scrollX : e.scrollLeft;
}
function _i(e) {
  return ar(e) ? e.scrollY : e.scrollTop;
}
function vi(e) {
  return {
    x: gi(e),
    y: _i(e)
  };
}
var yi;
(function (e) {
  e[e.Forward = 1] = `Forward`;
  e[e.Backward = -1] = `Backward`;
})(yi ||= {});
function bi(e) {
  return !ir || !e ? false : e === document.scrollingElement;
}
function xi(e) {
  let t = {
    x: 0,
    y: 0
  };
  let n = bi(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  };
  let r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  };
  return {
    isTop: e.scrollTop <= t.y,
    isLeft: e.scrollLeft <= t.x,
    isBottom: e.scrollTop >= r.y,
    isRight: e.scrollLeft >= r.x,
    maxScroll: r,
    minScroll: t
  };
}
var Si = {
  x: 0.2,
  y: 0.2
};
function Ci(e, t, n, r, i) {
  let {
    top: a,
    left: o,
    right: s,
    bottom: c
  } = n;
  r === void 0 && (r = 10);
  i === void 0 && (i = Si);
  let {
    isTop: l,
    isBottom: u,
    isLeft: d,
    isRight: f
  } = xi(e);
  let p = {
    x: 0,
    y: 0
  };
  let m = {
    x: 0,
    y: 0
  };
  let h = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !l && a <= t.top + h.height ? (p.y = yi.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = yi.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = yi.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = yi.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
    direction: p,
    speed: m
  };
}
function wi(e) {
  if (e === document.scrollingElement) {
    let {
      innerWidth: e,
      innerHeight: t
    } = window;
    return {
      top: 0,
      left: 0,
      right: e,
      bottom: t,
      width: e,
      height: t
    };
  }
  let {
    top: t,
    left: n,
    right: r,
    bottom: i
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: i,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Ti(e) {
  return e.reduce((e, t) => Sr(e, vi(t)), Gr);
}
function Ei(e) {
  return e.reduce((e, t) => e + gi(t), 0);
}
function Di(e) {
  return e.reduce((e, t) => e + _i(t), 0);
}
function Oi(e, t) {
  if (t === void 0 && (t = ci), !e) return;
  let {
    top: n,
    left: r,
    bottom: i,
    right: a
  } = t(e);
  mi(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: `center`,
    inline: `center`
  });
}
var ki = [[`x`, [`left`, `right`], Ei], [`y`, [`top`, `bottom`], Di]];
var Ai = class {
  constructor(e, t) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    let n = pi(t);
    let r = Ti(n);
    this.rect = {
      ...e
    };
    this.width = e.width;
    this.height = e.height;
    for (let [e, t, i] of ki) for (let a of t) Object.defineProperty(this, a, {
      get: () => {
        let t = i(n);
        let o = r[e] - t;
        return this.rect[a] + o;
      },
      enumerable: true
    });
    Object.defineProperty(this, "rect", {
      enumerable: false
    });
  }
};
var ji = class {
  constructor(e) {
    this.target = void 0;
    this.listeners = [];
    this.removeAll = () => {
      this.listeners.forEach(e => this.target?.removeEventListener(...e));
    };
    this.target = e;
  }
  add(e, t, n) {
    var r;
    (r = this.target) == null || r.addEventListener(e, t, n);
    this.listeners.push([e, t, n]);
  }
};
function Mi(e) {
  let {
    EventTarget: t
  } = sr(e);
  return e instanceof t ? e : dr(e);
}
function Ni(e, t) {
  let n = Math.abs(e.x);
  let r = Math.abs(e.y);
  return typeof t == `number` ? Math.sqrt(n ** 2 + r ** 2) > t : `x` in t && `y` in t ? n > t.x && r > t.y : `x` in t ? n > t.x : `y` in t && r > t.y;
}
var Pi;
(function (e) {
  e.Click = `click`;
  e.DragStart = `dragstart`;
  e.Keydown = `keydown`;
  e.ContextMenu = `contextmenu`;
  e.Resize = `resize`;
  e.SelectionChange = `selectionchange`;
  e.VisibilityChange = `visibilitychange`;
})(Pi ||= {});
function Fi(e) {
  e.preventDefault();
}
function Ii(e) {
  e.stopPropagation();
}
var Y;
(function (e) {
  e.Space = `Space`;
  e.Down = `ArrowDown`;
  e.Right = `ArrowRight`;
  e.Left = `ArrowLeft`;
  e.Up = `ArrowUp`;
  e.Esc = `Escape`;
  e.Enter = `Enter`;
  e.Tab = `Tab`;
})(Y ||= {});
var Li = {
  start: [Y.Space, Y.Enter],
  cancel: [Y.Esc],
  end: [Y.Space, Y.Enter, Y.Tab]
};
var Ri = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case Y.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case Y.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case Y.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case Y.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
var X = class {
  constructor(e) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = void 0;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = e;
    let {
      event: {
        target: t
      }
    } = e;
    this.props = e;
    this.listeners = new ji(dr(t));
    this.windowListeners = new ji(sr(t));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }
  attach() {
    this.handleStart();
    this.windowListeners.add(Pi.Resize, this.handleCancel);
    this.windowListeners.add(Pi.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(Pi.Keydown, this.handleKeyDown));
  }
  handleStart() {
    let {
      activeNode: e,
      onStart: t
    } = this.props;
    let n = e.node.current;
    n && Oi(n);
    t(Gr);
  }
  handleKeyDown(e) {
    if (Tr(e)) {
      let {
        active: t,
        context: n,
        options: r
      } = this.props;
      let {
        keyboardCodes: i = Li,
        coordinateGetter: a = Ri,
        scrollBehavior: o = `smooth`
      } = r;
      let {
        code: s
      } = e;
      if (i.end.includes(s)) {
        this.handleEnd(e);
        return;
      }
      if (i.cancel.includes(s)) {
        this.handleCancel(e);
        return;
      }
      let {
        collisionRect: c
      } = n.current;
      let l = c ? {
        x: c.left,
        y: c.top
      } : Gr;
      this.referenceCoordinates ||= l;
      let u = a(e, {
        active: t,
        context: n.current,
        currentCoordinates: l
      });
      if (u) {
        let t = Cr(u, l);
        let r = {
          x: 0,
          y: 0
        };
        let {
          scrollableAncestors: i
        } = n.current;
        for (let n of i) {
          let i = e.code;
          let {
            isTop: a,
            isRight: s,
            isLeft: c,
            isBottom: l,
            maxScroll: d,
            minScroll: f
          } = xi(n);
          let p = wi(n);
          let m = {
            x: Math.min(i === Y.Right ? p.right - p.width / 2 : p.right, Math.max(i === Y.Right ? p.left : p.left + p.width / 2, u.x)),
            y: Math.min(i === Y.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(i === Y.Down ? p.top : p.top + p.height / 2, u.y))
          };
          let h = i === Y.Right && !s || i === Y.Left && !c;
          let g = i === Y.Down && !l || i === Y.Up && !a;
          if (h && m.x !== u.x) {
            let e = n.scrollLeft + t.x;
            let a = i === Y.Right && e <= d.x || i === Y.Left && e >= f.x;
            if (a && !t.y) {
              n.scrollTo({
                left: e,
                behavior: o
              });
              return;
            }
            r.x = a ? n.scrollLeft - e : i === Y.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x;
            r.x && n.scrollBy({
              left: -r.x,
              behavior: o
            });
            break;
          }
          if (g && m.y !== u.y) {
            let e = n.scrollTop + t.y;
            let a = i === Y.Down && e <= d.y || i === Y.Up && e >= f.y;
            if (a && !t.x) {
              n.scrollTo({
                top: e,
                behavior: o
              });
              return;
            }
            r.y = a ? n.scrollTop - e : i === Y.Down ? n.scrollTop - d.y : n.scrollTop - f.y;
            r.y && n.scrollBy({
              top: -r.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(e, Sr(Cr(u, this.referenceCoordinates), r));
      }
    }
  }
  handleMove(e, t) {
    let {
      onMove: n
    } = this.props;
    e.preventDefault();
    n(t);
  }
  handleEnd(e) {
    let {
      onEnd: t
    } = this.props;
    e.preventDefault();
    this.detach();
    t();
  }
  handleCancel(e) {
    let {
      onCancel: t
    } = this.props;
    e.preventDefault();
    this.detach();
    t();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }
};
X.activators = [{
  eventName: `onKeyDown`,
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Li,
      onActivation: i
    } = t;
    let {
      active: a
    } = n;
    let {
      code: o
    } = e.nativeEvent;
    if (r.start.includes(o)) {
      let t = a.activatorNode.current;
      return t && e.target !== t ? false : (e.preventDefault(), i?.({
        event: e.nativeEvent
      }), true);
    }
    return false;
  }
}];
function Z(e) {
  return !!(e && `distance` in e);
}
function zi(e) {
  return !!(e && `delay` in e);
}
var Bi = class {
  constructor(e, t, n) {
    n === void 0 && (n = Mi(e.event.target));
    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = e;
    this.events = t;
    let {
      event: r
    } = e;
    let {
      target: i
    } = r;
    this.props = e;
    this.events = t;
    this.document = dr(i);
    this.documentListeners = new ji(this.document);
    this.listeners = new ji(n);
    this.windowListeners = new ji(sr(i));
    this.initialCoordinates = Dr(r) ?? Gr;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }
  attach() {
    let {
      events: e,
      props: {
        options: {
          activationConstraint: t,
          bypassActivationConstraint: n
        }
      }
    } = this;
    if (this.listeners.add(e.move.name, this.handleMove, {
      passive: false
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Pi.Resize, this.handleCancel), this.windowListeners.add(Pi.DragStart, Fi), this.windowListeners.add(Pi.VisibilityChange, this.handleCancel), this.windowListeners.add(Pi.ContextMenu, Fi), this.documentListeners.add(Pi.Keydown, this.handleKeydown), t) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      })) return this.handleStart();
      if (zi(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay);
        this.handlePending(t);
        return;
      }
      if (Z(t)) {
        this.handlePending(t);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
    setTimeout(this.documentListeners.removeAll, 50);
    this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(e, t) {
    let {
      active: n,
      onPending: r
    } = this.props;
    r(n, e, this.initialCoordinates, t);
  }
  handleStart() {
    let {
      initialCoordinates: e
    } = this;
    let {
      onStart: t
    } = this.props;
    e && (this.activated = true, this.documentListeners.add(Pi.Click, Ii, {
      capture: true
    }), this.removeTextSelection(), this.documentListeners.add(Pi.SelectionChange, this.removeTextSelection), t(e));
  }
  handleMove(e) {
    let {
      activated: t,
      initialCoordinates: n,
      props: r
    } = this;
    let {
      onMove: i,
      options: {
        activationConstraint: a
      }
    } = r;
    if (!n) return;
    let o = Dr(e) ?? Gr;
    let s = Cr(n, o);
    if (!t && a) {
      if (Z(a)) {
        if (a.tolerance != null && Ni(s, a.tolerance)) return this.handleCancel();
        if (Ni(s, a.distance)) return this.handleStart();
      }
      if (zi(a) && Ni(s, a.tolerance)) return this.handleCancel();
      this.handlePending(a, s);
      return;
    }
    e.cancelable && e.preventDefault();
    i(o);
  }
  handleEnd() {
    let {
      onAbort: e,
      onEnd: t
    } = this.props;
    this.detach();
    this.activated || e(this.props.active);
    t();
  }
  handleCancel() {
    let {
      onAbort: e,
      onCancel: t
    } = this.props;
    this.detach();
    this.activated || e(this.props.active);
    t();
  }
  handleKeydown(e) {
    e.code === Y.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
};
var Vi = {
  cancel: {
    name: `pointercancel`
  },
  move: {
    name: `pointermove`
  },
  end: {
    name: `pointerup`
  }
};
var Hi = class extends Bi {
  constructor(e) {
    let {
      event: t
    } = e;
    let n = dr(t.target);
    super(e, Vi, n);
  }
};
Hi.activators = [{
  eventName: `onPointerDown`,
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e;
    let {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? false : (r?.({
      event: n
    }), true);
  }
}];
var Ui = {
  move: {
    name: `mousemove`
  },
  end: {
    name: `mouseup`
  }
};
var Wi;
(function (e) {
  e[e.RightClick = 2] = `RightClick`;
})(Wi ||= {});
var Gi = class extends Bi {
  constructor(e) {
    super(e, Ui, dr(e.event.target));
  }
};
Gi.activators = [{
  eventName: `onMouseDown`,
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e;
    let {
      onActivation: r
    } = t;
    return n.button !== Wi.RightClick && (r?.({
      event: n
    }), true);
  }
}];
var Ki = {
  cancel: {
    name: `touchcancel`
  },
  move: {
    name: `touchmove`
  },
  end: {
    name: `touchend`
  }
};
var qi = class extends Bi {
  constructor(e) {
    super(e, Ki);
  }
  static setup() {
    return window.addEventListener(Ki.move.name, e, {
      capture: false,
      passive: false
    }), function () {
      window.removeEventListener(Ki.move.name, e);
    };
    function e() {}
  }
};
qi.activators = [{
  eventName: `onTouchStart`,
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e;
    let {
      onActivation: r
    } = t;
    let {
      touches: i
    } = n;
    return i.length > 1 ? false : (r?.({
      event: n
    }), true);
  }
}];
var Ji;
(function (e) {
  e[e.Pointer = 0] = `Pointer`;
  e[e.DraggableRect = 1] = `DraggableRect`;
})(Ji ||= {});
var Yi;
(function (e) {
  e[e.TreeOrder = 0] = `TreeOrder`;
  e[e.ReversedTreeOrder = 1] = `ReversedTreeOrder`;
})(Yi ||= {});
function Xi(e) {
  let {
    acceleration: t,
    activator: n = Ji.Pointer,
    canScroll: r,
    draggingRect: i,
    enabled: a,
    interval: o = 5,
    order: s = Yi.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: l,
    scrollableAncestorRects: u,
    delta: d,
    threshold: f
  } = e;
  let p = Qi({
    delta: d,
    disabled: !a
  });
  let [m, h] = mr();
  let g = useRef({
    x: 0,
    y: 0
  });
  let _ = useRef({
    x: 0,
    y: 0
  });
  let v = useMemo(() => {
    switch (n) {
      case Ji.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case Ji.DraggableRect:
        return i;
    }
  }, [n, i, c]);
  let y = useRef(null);
  let b = useCallback(() => {
    let e = y.current;
    if (!e) return;
    let t = g.current.x * _.current.x;
    let n = g.current.y * _.current.y;
    e.scrollBy(t, n);
  }, []);
  let x = useMemo(() => s === Yi.TreeOrder ? [...l].reverse() : l, [s, l]);
  useEffect(() => {
    if (!a || !l.length || !v) {
      h();
      return;
    }
    for (let e of x) {
      if (r?.(e) === false) continue;
      let n = l.indexOf(e);
      let i = u[n];
      if (!i) continue;
      let {
        direction: a,
        speed: s
      } = Ci(e, i, v, t, f);
      for (let e of [`x`, `y`]) p[e][a[e]] || (s[e] = 0, a[e] = 0);
      if (s.x > 0 || s.y > 0) {
        h();
        y.current = e;
        m(b, o);
        g.current = s;
        _.current = a;
        return;
      }
    }
    g.current = {
      x: 0,
      y: 0
    };
    _.current = {
      x: 0,
      y: 0
    };
    h();
  }, [t, b, r, h, a, o, JSON.stringify(v), JSON.stringify(p), m, l, x, u, JSON.stringify(f)]);
}
var Zi = {
  x: {
    [yi.Backward]: false,
    [yi.Forward]: false
  },
  y: {
    [yi.Backward]: false,
    [yi.Forward]: false
  }
};
function Qi(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  let r = vr(t);
  return gr(e => {
    if (n || !r || !e) return Zi;
    let i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [yi.Backward]: e.x[yi.Backward] || i.x === -1,
        [yi.Forward]: e.x[yi.Forward] || i.x === 1
      },
      y: {
        [yi.Backward]: e.y[yi.Backward] || i.y === -1,
        [yi.Forward]: e.y[yi.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function $i(e, t) {
  let n = t == null ? void 0 : e.get(t);
  let r = n ? n.node.current : null;
  return gr(e => t == null ? null : r ?? e ?? null, [r, t]);
}
function ea(e, t) {
  return useMemo(() => e.reduce((e, n) => {
    let {
      sensor: r
    } = n;
    let i = r.activators.map(e => ({
      eventName: e.eventName,
      handler: t(e.handler, n)
    }));
    return [...e, ...i];
  }, []), [e, t]);
}
var ta;
(function (e) {
  e[e.Always = 0] = `Always`;
  e[e.BeforeDragging = 1] = `BeforeDragging`;
  e[e.WhileDragging = 2] = `WhileDragging`;
})(ta ||= {});
var na;
(function (e) {
  e.Optimized = `optimized`;
})(na ||= {});
var ra = new Map();
function ia(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: i
  } = t;
  let [a, o] = useState(null);
  let {
    frequency: s,
    measure: c,
    strategy: l
  } = i;
  let u = useRef(e);
  let d = g();
  let f = hr(d);
  let p = useCallback(function (e) {
    e === void 0 && (e = []);
    !f.current && o(t => t === null ? e : t.concat(e.filter(e => !t.includes(e))));
  }, [f]);
  let m = useRef(null);
  let h = gr(t => {
    if (d && !n) return ra;
    if (!t || t === ra || u.current !== e || a != null) {
      let t = new Map();
      for (let n of e) {
        if (!n) continue;
        if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
          t.set(n.id, n.rect.current);
          continue;
        }
        let e = n.node.current;
        let r = e ? new Ai(c(e), e) : null;
        n.rect.current = r;
        r && t.set(n.id, r);
      }
      return t;
    }
    return t;
  }, [e, a, n, d, c]);
  return useEffect(() => {
    u.current = e;
  }, [e]), useEffect(() => {
    d || p();
  }, [n, d]), useEffect(() => {
    a && a.length > 0 && o(null);
  }, [JSON.stringify(a)]), useEffect(() => {
    d || typeof s != `number` || m.current !== null || (m.current = setTimeout(() => {
      p();
      m.current = null;
    }, s));
  }, [s, d, p, ...r]), {
    droppableRects: h,
    measureDroppableContainers: p,
    measuringScheduled: a != null
  };
  function g() {
    switch (l) {
      case ta.Always:
        return false;
      case ta.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function aa(e, t) {
  return gr(n => e ? n || (typeof t == `function` ? t(e) : e) : null, [t, e]);
}
function oa(e, t) {
  return aa(e, t);
}
function sa(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  let r = pr(t);
  let i = useMemo(() => {
    if (n || typeof window > `u` || window.MutationObserver === void 0) return;
    let {
      MutationObserver: e
    } = window;
    return new e(r);
  }, [r, n]);
  return useEffect(() => () => i?.disconnect(), [i]), i;
}
function ca(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  let r = pr(t);
  let i = useMemo(() => {
    if (n || typeof window > `u` || window.ResizeObserver === void 0) return;
    let {
      ResizeObserver: e
    } = window;
    return new e(r);
  }, [n]);
  return useEffect(() => () => i?.disconnect(), [i]), i;
}
function la(e) {
  return new Ai(ci(e), e);
}
function ua(e, t, n) {
  t === void 0 && (t = la);
  let [r, i] = useState(null);
  function a() {
    i(r => {
      if (!e) return null;
      if (e.isConnected === false) return r ?? n ?? null;
      let i = t(e);
      return JSON.stringify(r) === JSON.stringify(i) ? r : i;
    });
  }
  let o = sa({
    callback(t) {
      if (e) for (let n of t) {
        let {
          type: t,
          target: r
        } = n;
        if (t === `childList` && r instanceof HTMLElement && r.contains(e)) {
          a();
          break;
        }
      }
    }
  });
  let s = ca({
    callback: a
  });
  return fr(() => {
    a();
    e ? (s?.observe(e), o?.observe(document.body, {
      childList: true,
      subtree: true
    })) : (s?.disconnect(), o?.disconnect());
  }, [e]), r;
}
function da(e) {
  return ni(e, aa(e));
}
var fa = [];
function pa(e) {
  let t = useRef(e);
  let n = gr(n => e ? n && n !== fa && e && t.current && e.parentNode === t.current.parentNode ? n : pi(e) : fa, [e]);
  return useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function ma(e) {
  let [t, n] = useState(null);
  let r = useRef(e);
  let i = useCallback(e => {
    let t = hi(e.target);
    t && n(e => e ? (e.set(t, vi(t)), new Map(e)) : null);
  }, []);
  return useEffect(() => {
    let t = r.current;
    if (e !== t) {
      a(t);
      let o = e.map(e => {
        let t = hi(e);
        return t ? (t.addEventListener(`scroll`, i, {
          passive: true
        }), [t, vi(t)]) : null;
      }).filter(e => e != null);
      n(o.length ? new Map(o) : null);
      r.current = e;
    }
    return () => {
      a(e);
      a(t);
    };
    function a(e) {
      e.forEach(e => {
        hi(e)?.removeEventListener(`scroll`, i);
      });
    }
  }, [i, e]), useMemo(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => Sr(e, t), Gr) : Ti(e) : Gr, [e, t]);
}
function ha(e, t) {
  t === void 0 && (t = []);
  let n = useRef(null);
  return useEffect(() => {
    n.current = null;
  }, t), useEffect(() => {
    let t = e !== Gr;
    t && !n.current && (n.current = e);
    !t && n.current && (n.current = null);
  }, [e]), n.current ? Cr(e, n.current) : Gr;
}
function ga(e) {
  useEffect(() => {
    if (!ir) return;
    let t = e.map(e => {
      let {
        sensor: t
      } = e;
      return t.setup == null ? void 0 : t.setup();
    });
    return () => {
      for (let e of t) e?.();
    };
  }, e.map(e => {
    let {
      sensor: t
    } = e;
    return t;
  }));
}
function _a(e, t) {
  return useMemo(() => e.reduce((e, n) => {
    let {
      eventName: r,
      handler: i
    } = n;
    return e[r] = e => {
      i(e, t);
    }, e;
  }, {}), [e, t]);
}
function va(e) {
  return useMemo(() => e ? ui(e) : null, [e]);
}
var ya = [];
function ba(e, t) {
  t === void 0 && (t = ci);
  let [n] = e;
  let r = va(n ? sr(n) : null);
  let [i, a] = useState(ya);
  function o() {
    a(() => e.length ? e.map(e => bi(e) ? r : new Ai(t(e), e)) : ya);
  }
  let s = ca({
    callback: o
  });
  return fr(() => {
    s?.disconnect();
    o();
    e.forEach(e => s?.observe(e));
  }, [e]), i;
}
function xa(e) {
  if (!e) return null;
  if (e.children.length > 1) return e;
  let t = e.children[0];
  return lr(t) ? t : e;
}
function Sa(e) {
  let {
    measure: t
  } = e;
  let [n, r] = useState(null);
  let i = ca({
    callback: useCallback(e => {
      for (let {
        target: n
      } of e) if (lr(n)) {
        r(e => {
          let r = t(n);
          return e ? {
            ...e,
            width: r.width,
            height: r.height
          } : r;
        });
        break;
      }
    }, [t])
  });
  let [a, o] = _r(useCallback(e => {
    let n = xa(e);
    i?.disconnect();
    n && i?.observe(n);
    r(n ? t(n) : null);
  }, [t, i]));
  return useMemo(() => ({
    nodeRef: a,
    rect: n,
    setRef: o
  }), [n, a, o]);
}
var Ca = [{
  sensor: Hi,
  options: {}
}, {
  sensor: X,
  options: {}
}];
var wa = {
  current: {}
};
var Ta = {
  draggable: {
    measure: li
  },
  droppable: {
    measure: li,
    strategy: ta.WhileDragging,
    frequency: na.Optimized
  },
  dragOverlay: {
    measure: ci
  }
};
var Ea = class extends Map {
  get(e) {
    return e == null ? void 0 : super.get(e) ?? void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter(e => {
      let {
        disabled: t
      } = e;
      return !t;
    });
  }
  getNodeFor(e) {
    return this.get(e)?.node.current ?? void 0;
  }
};
var Da = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: new Map(),
  droppableRects: new Map(),
  droppableContainers: new Ea(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Hr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Ta,
  measureDroppableContainers: Hr,
  windowRect: null,
  measuringScheduled: false
};
var Oa = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ``
  },
  dispatch: Hr,
  draggableNodes: new Map(),
  over: null,
  measureDroppableContainers: Hr
};
var ka = (0, React.createContext)(Oa);
var Aa = (0, React.createContext)(Da);
function ja() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Ea()
    }
  };
}
function Ma(e, t) {
  switch (t.type) {
    case Vr.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Vr.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case Vr.DragEnd:
    case Vr.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Vr.RegisterDroppable:
      {
        let {
          element: n
        } = t;
        let {
          id: r
        } = n;
        let i = new Ea(e.droppable.containers);
        return i.set(r, n), {
          ...e,
          droppable: {
            ...e.droppable,
            containers: i
          }
        };
      }
    case Vr.SetDroppableDisabled:
      {
        let {
          id: n,
          key: r,
          disabled: i
        } = t;
        let a = e.droppable.containers.get(n);
        if (!a || r !== a.key) return e;
        let o = new Ea(e.droppable.containers);
        return o.set(n, {
          ...a,
          disabled: i
        }), {
          ...e,
          droppable: {
            ...e.droppable,
            containers: o
          }
        };
      }
    case Vr.UnregisterDroppable:
      {
        let {
          id: n,
          key: r
        } = t;
        let i = e.droppable.containers.get(n);
        if (!i || r !== i.key) return e;
        let a = new Ea(e.droppable.containers);
        return a.delete(n), {
          ...e,
          droppable: {
            ...e.droppable,
            containers: a
          }
        };
      }
    default:
      return e;
  }
}
function Na(e) {
  let {
    disabled: t
  } = e;
  let {
    active: n,
    activatorEvent: r,
    draggableNodes: i
  } = (0, React.useContext)(ka);
  let a = vr(r);
  let o = vr(n?.id);
  return useEffect(() => {
    if (!t && !r && a && o != null) {
      if (!Tr(a) || document.activeElement === a.target) return;
      let e = i.get(o);
      if (!e) return;
      let {
        activatorNode: t,
        node: n
      } = e;
      if (!t.current && !n.current) return;
      requestAnimationFrame(() => {
        for (let e of [t.current, n.current]) {
          if (!e) continue;
          let t = Ar(e);
          if (t) {
            t.focus();
            break;
          }
        }
      });
    }
  }, [r, t, i, o, a]), null;
}
function Pa(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((e, t) => t({
    transform: e,
    ...r
  }), n) : n;
}
function Fa(e) {
  return useMemo(() => ({
    draggable: {
      ...Ta.draggable,
      ...e?.draggable
    },
    droppable: {
      ...Ta.droppable,
      ...e?.droppable
    },
    dragOverlay: {
      ...Ta.dragOverlay,
      ...e?.dragOverlay
    }
  }), [e?.draggable, e?.droppable, e?.dragOverlay]);
}
function Ia(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: i = true
  } = e;
  let a = useRef(false);
  let {
    x: o,
    y: s
  } = typeof i == `boolean` ? {
    x: i,
    y: i
  } : i;
  fr(() => {
    if (!o && !s || !t) {
      a.current = false;
      return;
    }
    if (a.current || !r) return;
    let e = t?.node.current;
    if (!e || e.isConnected === false) return;
    let i = ni(n(e), r);
    if (o || (i.x = 0), s || (i.y = 0), a.current = true, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
      let t = mi(e);
      t && t.scrollBy({
        top: i.y,
        left: i.x
      });
    }
  }, [t, o, s, r, n]);
}
var La = (0, React.createContext)({
  ...Gr,
  scaleX: 1,
  scaleY: 1
});
var Ra;
(function (e) {
  e[e.Uninitialized = 0] = `Uninitialized`;
  e[e.Initializing = 1] = `Initializing`;
  e[e.Initialized = 2] = `Initialized`;
})(Ra ||= {});
var za = memo(function (e) {
  let {
    id: t,
    accessibility: n,
    autoScroll: r = true,
    children: i,
    sensors: a = Ca,
    collisionDetection: o = J,
    measuring: s,
    modifiers: c,
    ...l
  } = e;
  let [u, d] = (0, React.useReducer)(Ma, void 0, ja);
  let [f, p] = Lr();
  let [m, h] = useState(Ra.Uninitialized);
  let g = m === Ra.Initialized;
  let {
    draggable: {
      active: _,
      nodes: v,
      translate: y
    },
    droppable: {
      containers: b
    }
  } = u;
  let x = _ == null ? null : v.get(_);
  let S = useRef({
    initial: null,
    translated: null
  });
  let C = useMemo(() => _ == null ? null : {
    id: _,
    data: x?.data ?? wa,
    rect: S
  }, [_, x]);
  let w = useRef(null);
  let [ee, E] = useState(null);
  let [D, O] = useState(null);
  let k = hr(l, Object.values(l));
  let te = br(`DndDescribedBy`, t);
  let A = useMemo(() => b.getEnabled(), [b]);
  let ne = Fa(s);
  let {
    droppableRects: j,
    measureDroppableContainers: M,
    measuringScheduled: re
  } = ia(A, {
    dragging: g,
    dependencies: [y.x, y.y],
    config: ne.droppable
  });
  let N = $i(v, _);
  let ie = useMemo(() => D ? Dr(D) : null, [D]);
  let P = Oe();
  let ae = oa(N, ne.draggable.measure);
  Ia({
    activeNode: _ == null ? null : v.get(_),
    config: P.layoutShiftCompensation,
    initialRect: ae,
    measure: ne.draggable.measure
  });
  let F = ua(N, ne.draggable.measure, ae);
  let oe = ua(N ? N.parentElement : null);
  let se = useRef({
    activatorEvent: null,
    active: null,
    activeNode: N,
    collisionRect: null,
    collisions: null,
    droppableRects: j,
    draggableNodes: v,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: b,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  let ce = b.getNodeFor(se.current.over?.id);
  let I = Sa({
    measure: ne.dragOverlay.measure
  });
  let le = I.nodeRef.current ?? N;
  let L = g ? I.rect ?? F : null;
  let ue = !!(I.nodeRef.current && I.rect);
  let de = da(ue ? null : F);
  let fe = va(le ? sr(le) : null);
  let R = pa(g ? ce ?? N : null);
  let pe = ba(R);
  let me = Pa(c, {
    transform: {
      x: y.x - de.x,
      y: y.y - de.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: D,
    active: C,
    activeNodeRect: F,
    containerNodeRect: oe,
    draggingNodeRect: L,
    over: se.current.over,
    overlayNodeRect: I.rect,
    scrollableAncestors: R,
    scrollableAncestorRects: pe,
    windowRect: fe
  });
  let he = ie ? Sr(ie, y) : null;
  let ge = ma(R);
  let _e = ha(ge);
  let ve = ha(ge, [F]);
  let ye = Sr(me, _e);
  let z = L ? ii(L, me) : null;
  let B = C && z ? o({
    active: C,
    collisionRect: z,
    droppableRects: j,
    droppableContainers: A,
    pointerCoordinates: he
  }) : null;
  let V = Xr(B, `id`);
  let [be, xe] = useState(null);
  let Se = ti(ue ? me : Sr(me, ve), be?.rect ?? null, F);
  let Ce = useRef(null);
  let we = useCallback((e, t) => {
    let {
      sensor: n,
      options: r
    } = t;
    if (w.current == null) return;
    let i = v.get(w.current);
    if (!i) return;
    let a = e.nativeEvent;
    let o = new n({
      active: w.current,
      activeNode: i,
      event: a,
      options: r,
      context: se,
      onAbort(e) {
        if (!v.get(e)) return;
        let {
          onDragAbort: t
        } = k.current;
        let n = {
          id: e
        };
        t?.(n);
        f({
          type: `onDragAbort`,
          event: n
        });
      },
      onPending(e, t, n, r) {
        if (!v.get(e)) return;
        let {
          onDragPending: i
        } = k.current;
        let a = {
          id: e,
          constraint: t,
          initialCoordinates: n,
          offset: r
        };
        i?.(a);
        f({
          type: `onDragPending`,
          event: a
        });
      },
      onStart(e) {
        let t = w.current;
        if (t == null) return;
        let n = v.get(t);
        if (!n) return;
        let {
          onDragStart: r
        } = k.current;
        let i = {
          activatorEvent: a,
          active: {
            id: t,
            data: n.data,
            rect: S
          }
        };
        (0, nr.unstable_batchedUpdates)(() => {
          r?.(i);
          h(Ra.Initializing);
          d({
            type: Vr.DragStart,
            initialCoordinates: e,
            active: t
          });
          f({
            type: `onDragStart`,
            event: i
          });
          E(Ce.current);
          O(a);
        });
      },
      onMove(e) {
        d({
          type: Vr.DragMove,
          coordinates: e
        });
      },
      onEnd: s(Vr.DragEnd),
      onCancel: s(Vr.DragCancel)
    });
    Ce.current = o;
    function s(e) {
      return async function () {
        let {
          active: t,
          collisions: n,
          over: r,
          scrollAdjustedTranslate: i
        } = se.current;
        let o = null;
        if (t && i) {
          let {
            cancelDrop: s
          } = k.current;
          o = {
            activatorEvent: a,
            active: t,
            collisions: n,
            delta: i,
            over: r
          };
          e === Vr.DragEnd && typeof s == `function` && (await Promise.resolve(s(o))) && (e = Vr.DragCancel);
        }
        w.current = null;
        (0, nr.unstable_batchedUpdates)(() => {
          d({
            type: e
          });
          h(Ra.Uninitialized);
          xe(null);
          E(null);
          O(null);
          Ce.current = null;
          let t = e === Vr.DragEnd ? `onDragEnd` : `onDragCancel`;
          if (o) {
            let e = k.current[t];
            e?.(o);
            f({
              type: t,
              event: o
            });
          }
        });
      };
    }
  }, [v]);
  let Te = ea(a, useCallback((e, t) => (n, r) => {
    let i = n.nativeEvent;
    let a = v.get(r);
    if (w.current !== null || !a || i.dndKit || i.defaultPrevented) return;
    let o = {
      active: a
    };
    e(n, t.options, o) === true && (i.dndKit = {
      capturedBy: t.sensor
    }, w.current = r, we(n, t));
  }, [v, we]));
  ga(a);
  fr(() => {
    F && m === Ra.Initializing && h(Ra.Initialized);
  }, [F, m]);
  useEffect(() => {
    let {
      onDragMove: e
    } = k.current;
    let {
      active: t,
      activatorEvent: n,
      collisions: r,
      over: i
    } = se.current;
    if (!t || !n) return;
    let a = {
      active: t,
      activatorEvent: n,
      collisions: r,
      delta: {
        x: ye.x,
        y: ye.y
      },
      over: i
    };
    (0, nr.unstable_batchedUpdates)(() => {
      e?.(a);
      f({
        type: `onDragMove`,
        event: a
      });
    });
  }, [ye.x, ye.y]);
  useEffect(() => {
    let {
      active: e,
      activatorEvent: t,
      collisions: n,
      droppableContainers: r,
      scrollAdjustedTranslate: i
    } = se.current;
    if (!e || w.current == null || !t || !i) return;
    let {
      onDragOver: a
    } = k.current;
    let o = r.get(V);
    let s = o && o.rect.current ? {
      id: o.id,
      rect: o.rect.current,
      data: o.data,
      disabled: o.disabled
    } : null;
    let c = {
      active: e,
      activatorEvent: t,
      collisions: n,
      delta: {
        x: i.x,
        y: i.y
      },
      over: s
    };
    (0, nr.unstable_batchedUpdates)(() => {
      xe(s);
      a?.(c);
      f({
        type: `onDragOver`,
        event: c
      });
    });
  }, [V]);
  fr(() => {
    se.current = {
      activatorEvent: D,
      active: C,
      activeNode: N,
      collisionRect: z,
      collisions: B,
      droppableRects: j,
      draggableNodes: v,
      draggingNode: le,
      draggingNodeRect: L,
      droppableContainers: b,
      over: be,
      scrollableAncestors: R,
      scrollAdjustedTranslate: ye
    };
    S.current = {
      initial: L,
      translated: z
    };
  }, [C, N, B, z, v, le, L, j, b, be, R, ye]);
  Xi({
    ...P,
    delta: y,
    draggingRect: z,
    pointerCoordinates: he,
    scrollableAncestors: R,
    scrollableAncestorRects: pe
  });
  let Ee = useMemo(() => ({
    active: C,
    activeNode: N,
    activeNodeRect: F,
    activatorEvent: D,
    collisions: B,
    containerNodeRect: oe,
    dragOverlay: I,
    draggableNodes: v,
    droppableContainers: b,
    droppableRects: j,
    over: be,
    measureDroppableContainers: M,
    scrollableAncestors: R,
    scrollableAncestorRects: pe,
    measuringConfiguration: ne,
    measuringScheduled: re,
    windowRect: fe
  }), [C, N, F, D, B, oe, I, v, b, j, be, M, R, pe, ne, re, fe]);
  let De = useMemo(() => ({
    activatorEvent: D,
    activators: Te,
    active: C,
    activeNodeRect: F,
    ariaDescribedById: {
      draggable: te
    },
    dispatch: d,
    draggableNodes: v,
    over: be,
    measureDroppableContainers: M
  }), [D, Te, C, F, d, te, v, be, M]);
  return React.createElement(Fr.Provider, {
    value: p
  }, React.createElement(ka.Provider, {
    value: De
  }, React.createElement(Aa.Provider, {
    value: Ee
  }, React.createElement(La.Provider, {
    value: Se
  }, i)), React.createElement(Na, {
    disabled: n?.restoreFocus === false
  })), React.createElement(Br, {
    ...n,
    hiddenTextDescribedById: te
  }));
  function Oe() {
    let e = ee?.autoScrollEnabled === false;
    let t = typeof r == `object` ? r.enabled === false : r === false;
    let n = g && !e && !t;
    return typeof r == `object` ? {
      ...r,
      enabled: n
    } : {
      enabled: n
    };
  }
});
var Ba = (0, React.createContext)(null);
var Va = `button`;
var Ha = `Draggable`;
function Ua(e) {
  let {
    id: t,
    data: n,
    disabled: r = false,
    attributes: i
  } = e;
  let a = br(Ha);
  let {
    activators: o,
    activatorEvent: s,
    active: c,
    activeNodeRect: l,
    ariaDescribedById: u,
    draggableNodes: d,
    over: f
  } = (0, React.useContext)(ka);
  let {
    role: p = Va,
    roleDescription: m = `draggable`,
    tabIndex: h = 0
  } = i ?? {};
  let g = c?.id === t;
  let _ = (0, React.useContext)(g ? La : Ba);
  let [v, y] = _r();
  let [b, x] = _r();
  let S = _a(o, t);
  let C = hr(n);
  return fr(() => (d.set(t, {
    id: t,
    key: a,
    node: v,
    activatorNode: b,
    data: C
  }), () => {
    let e = d.get(t);
    e && e.key === a && d.delete(t);
  }), [d, t]), {
    active: c,
    activatorEvent: s,
    activeNodeRect: l,
    attributes: useMemo(() => ({
      role: p,
      tabIndex: h,
      "aria-disabled": r,
      "aria-pressed": g && p === Va ? true : void 0,
      "aria-roledescription": m,
      "aria-describedby": u.draggable
    }), [r, p, h, g, m, u.draggable]),
    isDragging: g,
    listeners: r ? void 0 : S,
    node: v,
    over: f,
    setNodeRef: y,
    setActivatorNodeRef: x,
    transform: _
  };
}
function Wa() {
  return (0, React.useContext)(Aa);
}
var Ga = `Droppable`;
var Ka = {
  timeout: 25
};
function qa(e) {
  let {
    data: t,
    disabled: n = false,
    id: r,
    resizeObserverConfig: i
  } = e;
  let a = br(Ga);
  let {
    active: o,
    dispatch: s,
    over: c,
    measureDroppableContainers: l
  } = (0, React.useContext)(ka);
  let u = useRef({
    disabled: n
  });
  let d = useRef(false);
  let f = useRef(null);
  let p = useRef(null);
  let {
    disabled: m,
    updateMeasurementsFor: h,
    timeout: g
  } = {
    ...Ka,
    ...i
  };
  let _ = hr(h ?? r);
  let v = ca({
    callback: useCallback(() => {
      if (!d.current) {
        d.current = true;
        return;
      }
      p.current != null && clearTimeout(p.current);
      p.current = setTimeout(() => {
        l(Array.isArray(_.current) ? _.current : [_.current]);
        p.current = null;
      }, g);
    }, [g]),
    disabled: m || !o
  });
  let [y, b] = _r(useCallback((e, t) => {
    v && (t && (v.unobserve(t), d.current = false), e && v.observe(e));
  }, [v]));
  let x = hr(t);
  return useEffect(() => {
    !v || !y.current || (v.disconnect(), d.current = false, v.observe(y.current));
  }, [y, v]), useEffect(() => (s({
    type: Vr.RegisterDroppable,
    element: {
      id: r,
      key: a,
      disabled: n,
      node: y,
      rect: f,
      data: x
    }
  }), () => s({
    type: Vr.UnregisterDroppable,
    key: a,
    id: r
  })), [r]), useEffect(() => {
    n !== u.current.disabled && (s({
      type: Vr.SetDroppableDisabled,
      id: r,
      key: a,
      disabled: n
    }), u.current.disabled = n);
  }, [r, a, n, s]), {
    active: o,
    rect: f,
    isOver: c?.id === r,
    node: y,
    over: c,
    setNodeRef: b
  };
}
function Ja(e, t, n) {
  let r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function Ya(e, t) {
  return e.reduce((e, n, r) => {
    let i = t.get(n);
    return i && (e[r] = i), e;
  }, Array(e.length));
}
function Xa(e) {
  return e !== null && e >= 0;
}
function Za(e, t) {
  if (e === t) return true;
  if (e.length !== t.length) return false;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return false;
  return true;
}
function Qa(e) {
  return typeof e == `boolean` ? {
    draggable: e,
    droppable: e
  } : e;
}
var $a = e => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: i
  } = e;
  let a = Ja(t, r, n);
  let o = t[i];
  let s = a[i];
  return !s || !o ? null : {
    x: s.left - o.left,
    y: s.top - o.top,
    scaleX: s.width / o.width,
    scaleY: s.height / o.height
  };
};
var eo = {
  scaleX: 1,
  scaleY: 1
};
var to = e => {
  let {
    activeIndex: t,
    activeNodeRect: n,
    index: r,
    rects: i,
    overIndex: a
  } = e;
  let o = i[t] ?? n;
  if (!o) return null;
  if (r === t) {
    let e = i[a];
    return e ? {
      x: 0,
      y: t < a ? e.top + e.height - (o.top + o.height) : e.top - o.top,
      ...eo
    } : null;
  }
  let s = no(i, r, t);
  return r > t && r <= a ? {
    x: 0,
    y: -o.height - s,
    ...eo
  } : r < t && r >= a ? {
    x: 0,
    y: o.height + s,
    ...eo
  } : {
    x: 0,
    y: 0,
    ...eo
  };
};
function no(e, t, n) {
  let r = e[t];
  let i = e[t - 1];
  let a = e[t + 1];
  return r ? n < t ? i ? r.top - (i.top + i.height) : a ? a.top - (r.top + r.height) : 0 : a ? a.top - (r.top + r.height) : i ? r.top - (i.top + i.height) : 0 : 0;
}
var ro = `Sortable`;
var io = React.createContext({
  activeIndex: -1,
  containerId: ro,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: $a,
  disabled: {
    draggable: false,
    droppable: false
  }
});
function ao(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: i = $a,
    disabled: a = false
  } = e;
  let {
    active: o,
    dragOverlay: s,
    droppableRects: c,
    over: l,
    measureDroppableContainers: u
  } = Wa();
  let d = br(ro, n);
  let f = s.rect !== null;
  let p = useMemo(() => r.map(e => typeof e == `object` && `id` in e ? e.id : e), [r]);
  let m = o != null;
  let h = o ? p.indexOf(o.id) : -1;
  let g = l ? p.indexOf(l.id) : -1;
  let _ = useRef(p);
  let v = !Za(p, _.current);
  let y = g !== -1 && h === -1 || v;
  let b = Qa(a);
  fr(() => {
    v && m && u(p);
  }, [v, p, m, u]);
  useEffect(() => {
    _.current = p;
  }, [p]);
  let x = useMemo(() => ({
    activeIndex: h,
    containerId: d,
    disabled: b,
    disableTransforms: y,
    items: p,
    overIndex: g,
    useDragOverlay: f,
    sortedRects: Ya(p, c),
    strategy: i
  }), [h, d, b.draggable, b.droppable, y, p, g, c, f, i]);
  return React.createElement(io.Provider, {
    value: x
  }, t);
}
var oo = e => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: i
  } = e;
  return Ja(n, r, i).indexOf(t);
};
var so = e => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: i,
    items: a,
    newIndex: o,
    previousItems: s,
    previousContainerId: c,
    transition: l
  } = e;
  return !l || !r || s !== a && i === o ? false : n ? true : o !== i && t === c;
};
var co = {
  duration: 200,
  easing: `ease`
};
var lo = `transform`;
var uo = Or.Transition.toString({
  property: lo,
  duration: 0,
  easing: `linear`
});
var fo = {
  roleDescription: `sortable`
};
function po(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: i
  } = e;
  let [a, o] = useState(null);
  let s = useRef(n);
  return fr(() => {
    if (!t && n !== s.current && r.current) {
      let e = i.current;
      if (e) {
        let t = ci(r.current, {
          ignoreTransform: true
        });
        let n = {
          x: e.left - t.left,
          y: e.top - t.top,
          scaleX: e.width / t.width,
          scaleY: e.height / t.height
        };
        (n.x || n.y) && o(n);
      }
    }
    n !== s.current && (s.current = n);
  }, [t, n, r, i]), useEffect(() => {
    a && o(null);
  }, [a]), a;
}
function mo(e) {
  let {
    animateLayoutChanges: t = so,
    attributes: n,
    disabled: r,
    data: i,
    getNewIndex: a = oo,
    id: o,
    strategy: s,
    resizeObserverConfig: c,
    transition: l = co
  } = e;
  let {
    items: u,
    containerId: d,
    activeIndex: f,
    disabled: p,
    disableTransforms: m,
    sortedRects: h,
    overIndex: g,
    useDragOverlay: _,
    strategy: v
  } = (0, React.useContext)(io);
  let y = ho(r, p);
  let b = u.indexOf(o);
  let x = useMemo(() => ({
    sortable: {
      containerId: d,
      index: b,
      items: u
    },
    ...i
  }), [d, i, b, u]);
  let S = useMemo(() => u.slice(u.indexOf(o)), [u, o]);
  let {
    rect: C,
    node: w,
    isOver: ee,
    setNodeRef: E
  } = qa({
    id: o,
    data: x,
    disabled: y.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: S,
      ...c
    }
  });
  let {
    active: D,
    activatorEvent: O,
    activeNodeRect: k,
    attributes: te,
    setNodeRef: A,
    listeners: ne,
    isDragging: j,
    over: M,
    setActivatorNodeRef: re,
    transform: N
  } = Ua({
    id: o,
    data: x,
    attributes: {
      ...fo,
      ...n
    },
    disabled: y.draggable
  });
  let ie = rr(E, A);
  let P = !!D;
  let ae = P && !m && Xa(f) && Xa(g);
  let F = !_ && j;
  let oe = ae ? (F && ae ? N : null) ?? (s ?? v)({
    rects: h,
    activeNodeRect: k,
    activeIndex: f,
    overIndex: g,
    index: b
  }) : null;
  let se = Xa(f) && Xa(g) ? a({
    id: o,
    items: u,
    activeIndex: f,
    overIndex: g
  }) : b;
  let ce = D?.id;
  let I = useRef({
    activeId: ce,
    items: u,
    newIndex: se,
    containerId: d
  });
  let le = u !== I.current.items;
  let L = t({
    active: D,
    containerId: d,
    isDragging: j,
    isSorting: P,
    id: o,
    index: b,
    items: u,
    newIndex: I.current.newIndex,
    previousItems: I.current.items,
    previousContainerId: I.current.containerId,
    transition: l,
    wasDragging: I.current.activeId != null
  });
  let ue = po({
    disabled: !L,
    index: b,
    node: w,
    rect: C
  });
  return useEffect(() => {
    P && I.current.newIndex !== se && (I.current.newIndex = se);
    d !== I.current.containerId && (I.current.containerId = d);
    u !== I.current.items && (I.current.items = u);
  }, [P, se, d, u]), useEffect(() => {
    if (ce === I.current.activeId) return;
    if (ce && !I.current.activeId) {
      I.current.activeId = ce;
      return;
    }
    let e = setTimeout(() => {
      I.current.activeId = ce;
    }, 50);
    return () => clearTimeout(e);
  }, [ce]), {
    active: D,
    activeIndex: f,
    attributes: te,
    data: x,
    rect: C,
    index: b,
    newIndex: se,
    items: u,
    isOver: ee,
    isSorting: P,
    isDragging: j,
    listeners: ne,
    node: w,
    overIndex: g,
    over: M,
    setNodeRef: ie,
    setActivatorNodeRef: re,
    setDroppableNodeRef: E,
    setDraggableNodeRef: A,
    transform: ue ?? oe,
    transition: de()
  };
  function de() {
    if (ue || le && I.current.newIndex === b) return uo;
    if (!(F && !Tr(O) || !l) && (P || L)) return Or.Transition.toString({
      ...l,
      property: lo
    });
  }
}
function ho(e, t) {
  return typeof e == `boolean` ? {
    draggable: e,
    droppable: false
  } : {
    draggable: e?.draggable ?? t.draggable,
    droppable: e?.droppable ?? t.droppable
  };
}
function go(e) {
  if (!e) return false;
  let t = e.data.current;
  return !!(t && `sortable` in t && typeof t.sortable == `object` && `containerId` in t.sortable && `items` in t.sortable && `index` in t.sortable);
}
var _o = [Y.Down, Y.Right, Y.Up, Y.Left];
var vo = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: i,
      droppableContainers: a,
      over: o,
      scrollableAncestors: s
    }
  } = t;
  if (_o.includes(e.code)) {
    if (e.preventDefault(), !n || !r) return;
    let t = [];
    a.getEnabled().forEach(n => {
      if (!n || n != null && n.disabled) return;
      let a = i.get(n.id);
      if (a) switch (e.code) {
        case Y.Down:
          r.top < a.top && t.push(n);
          break;
        case Y.Up:
          r.top > a.top && t.push(n);
          break;
        case Y.Left:
          r.left > a.left && t.push(n);
          break;
        case Y.Right:
          r.left < a.left && t.push(n);
      }
    });
    let c = $r({
      active: n,
      collisionRect: r,
      droppableRects: i,
      droppableContainers: t,
      pointerCoordinates: null
    });
    let l = Xr(c, `id`);
    if (l === o?.id && c.length > 1 && (l = c[1].id), l != null) {
      let e = a.get(n.id);
      let t = a.get(l);
      let o = t ? i.get(t.id) : null;
      let c = t?.node.current;
      if (c && o && e && t) {
        let n = pi(c).some((e, t) => s[t] !== e);
        let i = yo(e, t);
        let a = bo(e, t);
        let l = n || !i ? {
          x: 0,
          y: 0
        } : {
          x: a ? r.width - o.width : 0,
          y: a ? r.height - o.height : 0
        };
        let u = {
          x: o.left,
          y: o.top
        };
        return l.x && l.y ? u : Cr(u, l);
      }
    }
  }
};
function yo(e, t) {
  return !go(e) || !go(t) ? false : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function bo(e, t) {
  return !go(e) || !go(t) || !yo(e, t) ? false : e.data.current.sortable.index < t.data.current.sortable.index;
}
var xo = ({
  x: e,
  y: t,
  bookmark: n,
  onClose: r,
  onCopyLink: i,
  onOpenNewTab: a
}) => {
  let [o, s] = useState(false);
  return useEffect(() => {
    let e = () => r();
    let t = e => {
      e.key === `Escape` && r();
    };
    return document.addEventListener(`click`, e), document.addEventListener(`keydown`, t), () => {
      document.removeEventListener(`click`, e);
      document.removeEventListener(`keydown`, t);
    };
  }, [r]), jsxs(`div`, {
    className: `fixed z-50 bg-gray-900 bg-opacity-95 border-2 border-cyan-400 border-opacity-80 shadow-lg backdrop-blur-sm ${o ? `context-menu-glitch` : ``}`,
    style: {
      left: e,
      top: t,
      minWidth: `140px`
    },
    children: [jsxs(`button`, {
      onClick: e => {
        e.stopPropagation();
        s(true);
        setTimeout(() => {
          a(n.url);
          r();
        }, 200);
      },
      className: `w-full px-3 py-1.5 text-left text-white font-mono hover:bg-gray-800 hover:text-cyan-400 flex items-center gap-2 text-sm`,
      children: [jsx(en, {
        size: 14
      }), `New Tab`]
    }), jsxs(`button`, {
      onClick: e => {
        e.stopPropagation();
        s(true);
        setTimeout(() => {
          i(n.url);
          r();
        }, 200);
      },
      className: `w-full px-3 py-1.5 text-left text-white font-mono hover:bg-gray-800 hover:text-cyan-400 flex items-center gap-2 text-sm`,
      children: [jsx(Xt, {
        size: 14
      }), `Copy Link`]
    })]
  });
};
// #endregion vendor/09-drag-drop.js

;
// #region app/10-netlinks.js
/* Netlinks and category editing. Shared scope; build with node scripts/build.cjs. */

var So = ({
  category: e,
  bookmarks: t,
  children: n,
  editing: r,
  isCollapsed: i,
  onBookmarkOrderChange: a,
  onToggleCollapse: o,
  onEditCategory: s,
  onDeleteCategory: c,
}) => {
  let {
    attributes: l,
    listeners: u,
    setNodeRef: d,
    transform: f,
    transition: p,
  } = mo({
    id: e,
  });
  let m = {
    transform: Or.Transform.toString(f),
    transition: p,
  };
  let h = Wr(
    Ur(Hi, {
      activationConstraint: {
        distance: 8,
      },
    }),
    Ur(X, {
      coordinateGetter: vo,
    }),
  );
  let [g, _] = useState(t.map((e) => e.id));
  useEffect(() => {
    _(t.map((e) => e.id));
  }, [t]);
  let v = (t) => {
    let { active: n, over: r } = t;
    if (!r || n.id === r.id) return;
    let i = g.indexOf(n.id);
    let o = g.indexOf(r.id);
    let s = Ja(g, i, o);
    _(s);
    a(e, s);
  };
  let y = () => void 0;
  return jsxs(`div`, {
    ref: d,
    style: m,
    className: `category mb-4`,
    children: [
      jsxs(`div`, {
        className: `flex items-center gap-2 mb-2`,
        children: [
          r &&
            jsx(`div`, {
              ...l,
              ...u,
              className: `cursor-grab`,
              children: jsx(ln, {
                size: 20,
                className: `text-pink-500`,
              }),
            }),
          jsxs(`button`, {
            onClick: () => o(e),
            className: `text-lg text-pink-500 font-mono uppercase border-b border-pink-500 pb-1 flex-1 flex items-center gap-2 hover:text-pink-400 transition-colors cursor-pointer text-left`,
            children: [
              e,
              i
                ? jsx(zt, {
                    size: 20,
                  })
                : jsx(Rt, {
                    size: 20,
                  }),
            ],
          }),
          r &&
            jsxs(`div`, {
              className: `flex gap-1`,
              children: [
                jsx(`button`, {
                  onClick: () => s(e),
                  className: `text-cyan-400 hover:text-cyan-300`,
                  title: `Edit category`,
                  children: jsx(zn, {
                    size: 16,
                  }),
                }),
                jsx(`button`, {
                  onClick: () => c(e),
                  className: `text-pink-500 hover:text-pink-400`,
                  title: `Delete category`,
                  children: jsx(Wn, {
                    size: 16,
                  }),
                }),
              ],
            }),
        ],
      }),
      !i &&
        (r
          ? jsx(za, {
              sensors: h,
              collisionDetection: Qr,
              onDragOver: v,
              onDragEnd: y,
              children: jsx(ao, {
                items: g,
                strategy: to,
                children: jsx(`div`, {
                  className: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3`,
                  children: n,
                }),
              }),
            })
          : jsx(`div`, {
              className: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3`,
              children: n,
            })),
    ],
  });
};
var Co = ({
  bookmark: e,
  editing: t,
  onDelete: n,
  onEdit: r,
  onClick: i,
  onContextMenu: a,
  getIconComponent: o,
}) => {
  let {
    attributes: s,
    listeners: c,
    setNodeRef: l,
    transform: u,
    transition: d,
    isDragging: f,
  } = mo({
    id: e.id,
  });
  let p = {
    transform: Or.Transform.toString(u),
    transition: f ? void 0 : d,
    position: `relative`,
    zIndex: f ? 999 : 1,
  };
  let m = (n) => {
    t || (n.button === 1 && (n.preventDefault(), window.open(e.url, `_blank`)));
  };
  return jsxs(`div`, {
    ref: l,
    style: p,
    ...(t ? s : {}),
    onClick: (t) => i(t, e.url),
    onContextMenu: (t) => a(t, e),
    onMouseDown: m,
    className: `bookmark-card relative p-4 border-2 border-cyan-400 
                hover:border-yellow-300 bg-gray-900 flex flex-col 
                items-center justify-center text-center
                min-h-[100px] glitch-border cursor-pointer
                ${f ? `shadow-xl border-yellow-300` : ``}`,
    children: [
      t &&
        jsxs(jsxRuntime.Fragment, {
          children: [
            jsxs(`div`, {
              className: `absolute top-1 right-1 flex gap-1`,
              children: [
                jsx(`button`, {
                  onClick: (t) => r(t, e),
                  className: `cyberpunk-tooltip text-cyan-400 hover:text-cyan-300 z-10`,
                  "data-tooltip": `Edit bookmark`,
                  children: jsx(zn, {
                    size: 16,
                  }),
                }),
                jsx(`button`, {
                  onClick: (t) => n(t, e.id),
                  className: `cyberpunk-tooltip text-pink-500 hover:text-pink-400 z-10`,
                  "data-tooltip": `Delete bookmark`,
                  children: jsx(Qn, {
                    size: 16,
                  }),
                }),
              ],
            }),
            jsx(`div`, {
              ...c,
              className: `absolute top-1 left-1 cursor-grab active:cursor-grabbing`,
              children: jsx(ln, {
                size: 18,
                className: `text-cyan-400`,
              }),
            }),
          ],
        }),
      jsx(`div`, {
        className: `text-cyan-400 mb-1`,
        children: React.createElement(o(e.icon || `Default`), {
          size: 24,
        }),
      }),
      jsx(`span`, {
        className: `text-white font-mono text-sm hover-glitch`,
        children: e.title,
      }),
    ],
  });
};
var /* Netlinks: bookmarks, categories, editing, drag and drop. */
  Netlinks = () => {
    let [netlinks, setNetlinksState] = useState([]);
    let [editMode, setEditMode] = useState(false);
    let [linkFormOpen, setLinkFormOpen] = useState(false);
    let [iconPickerOpen, setIconPickerOpen] = useState(false);
    let [categoryOrder, setCategoryOrderState] = useState([]);
    let [collapsedCategories, setCollapsedCategoriesState] = useState({});
    let [netlinksCollapsed, setNetlinksCollapsed] = useState(() => localStorage.getItem(`netlinksCollapsed`) === `true`);
    let [, setCustomCategoriesState] = useState([]);
    let [categoryBeingRenamed, setCategoryBeingRenamed] = useState(null);
    let [categoryPendingDeletion, setCategoryPendingDeletion] = useState(null);
    let [_, v] = useState(false);
    let [newCategoryName, setNewCategoryName] = useState(``);
    let [renamedCategoryName, setRenamedCategoryName] = useState(``);
    let [contextMenu, setContextMenu] = useState(null);
    let [editingNetlink, setEditingNetlink] = useState(null);
    let [netlinkForm, setNetlinkForm] = useState({
      title: ``,
      url: ``,
      category: `other`,
      icon: `BookmarkPlus`,
    });
    let dragSensors = Wr(
      Ur(Hi, {
        activationConstraint: {
          distance: 8,
        },
      }),
      Ur(X, {
        coordinateGetter: vo,
      }),
    );
    useEffect(() => {
      setNetlinksState(getNetlinks());
      setCategoryOrderState(getCategoryOrder());
      setCollapsedCategoriesState(getCollapsedCategories());
    }, []);
    let handleCategoryDragEnd = (e) => {
      if (!editMode) return;
      let { active: t, over: r } = e;
      if (r && t.id !== r.id) {
        let e = categoryOrder.indexOf(t.id);
        let n = categoryOrder.indexOf(r.id);
        let i = [...categoryOrder];
        i.splice(e, 1);
        i.splice(n, 0, t.id);
        setCategoryOrderState(i);
        setCategoryOrder(i);
      }
    };
    let saveNetlinkOrder = (r, i) => {
      if (!editMode) return;
      let a = netlinks.filter((e) => e.category === r);
      let o = i.map((e) => a.find((t) => t.id === e));
      let s = [...netlinks.filter((e) => e.category !== r), ...o];
      setNetlinksState(s);
      setNetlinks(s);
      setNetlinkOrder(r, i);
    };
    let finishEditing = () => {
      setNetlinks(netlinks);
      setEditMode(false);
    };
    let removeNetlink = (n, r) => {
      n.preventDefault();
      n.stopPropagation();
      let i = netlinks.filter((e) => e.id !== r);
      setNetlinksState(i);
      setNetlinks(i);
    };
    let beginEditingNetlink = (e, t) => {
      e.preventDefault();
      e.stopPropagation();
      setEditingNetlink(t);
      setNetlinkForm({
        title: t.title,
        url: t.url,
        category: t.category,
        icon: t.icon || `BookmarkPlus`,
      });
      setLinkFormOpen(true);
    };
    let saveNetlink = () => {
      if (!netlinkForm.title || !netlinkForm.url) return;
      let n = netlinkForm.url;
      if (
        (!n.startsWith(`http://`) && !n.startsWith(`https://`) && (n = `https://` + n),
        editingNetlink)
      ) {
        let r = netlinks.map((e) =>
          e.id === editingNetlink.id
            ? {
                ...e,
                title: netlinkForm.title,
                url: n,
                category: netlinkForm.category || `other`,
                icon: netlinkForm.icon || `BookmarkPlus`,
              }
            : e,
        );
        setNetlinksState(r);
        setNetlinks(r);
      } else {
        let r = [
          ...netlinks,
          {
            id: Date.now().toString(),
            title: netlinkForm.title,
            url: n,
            category: netlinkForm.category || `other`,
            icon: netlinkForm.icon || `BookmarkPlus`,
          },
        ];
        setNetlinksState(r);
        setNetlinks(r);
      }
      setNetlinkForm({
        title: ``,
        url: ``,
        category: `other`,
        icon: `BookmarkPlus`,
      });
      setEditingNetlink(null);
      setLinkFormOpen(false);
    };
    let closeNetlinkForm = () => {
      setLinkFormOpen(false);
      setIconPickerOpen(false);
      setEditingNetlink(null);
      setNetlinkForm({
        title: ``,
        url: ``,
        category: `other`,
        icon: `BookmarkPlus`,
      });
    };
    let chooseIcon = (e) => {
      setNetlinkForm({
        ...netlinkForm,
        icon: e,
      });
      setIconPickerOpen(false);
    };
    let resolveIcon = (e) => {
      let t = FAVICON_OPTIONS.find((t) => t.name === e);
      return t ? t.icon : jt;
    };
    let netlinksByCategory = netlinks.reduce((e, t) => {
      let n = t.category || `other`;
      return (e[n] || (e[n] = []), e[n].push(t), e);
    }, {});
    let navigateToNetlink = (e, t) => {
      if (editMode) {
        e.preventDefault();
        return;
      }
      window.location.href = t;
    };
    let openContextMenu = (e, t) => {
      e.preventDefault();
      !editMode &&
        setContextMenu({
          x: e.clientX,
          y: e.clientY,
          bookmark: t,
        });
    };
    let copyNetlink = async (e) => {
      try {
        await navigator.clipboard.writeText(e);
      } catch (t) {
        console.error(`Failed to copy link:`, t);
        let n = document.createElement(`textarea`);
        n.value = e;
        document.body.appendChild(n);
        n.select();
        document.execCommand(`copy`);
        document.body.removeChild(n);
      }
    };
    let openNetlinkInNewTab = (e) => {
      window.open(e, `_blank`);
    };
    let toggleCategory = (e) => {
      let t = {
        ...collapsedCategories,
        [e]: !collapsedCategories[e],
      };
      setCollapsedCategoriesState(t);
      setCollapsedCategories(t);
    };
    let toggleNetlinks = () => {
      let next = !netlinksCollapsed;
      setNetlinksCollapsed(next);
      localStorage.setItem(`netlinksCollapsed`, String(next));
      if (next) setContextMenu(null);
    };
    let beginRenamingCategory = (e) => {
      setCategoryBeingRenamed(e);
      setRenamedCategoryName(e);
    };
    let saveCategoryRename = () => {
      if (!categoryBeingRenamed || !renamedCategoryName.trim()) return;
      if (renamedCategoryName.trim() === categoryBeingRenamed) {
        setCategoryBeingRenamed(null);
        setRenamedCategoryName(``);
        return;
      }
      let e = renamedCategoryName.trim().toLowerCase();
      if (categoryOrder.includes(e) && e !== categoryBeingRenamed) {
        alert(`A category with this name already exists`);
        return;
      }
      renameCategory(categoryBeingRenamed, e);
      setNetlinksState(getNetlinks());
      setCategoryOrderState(getCategoryOrder());
      setCustomCategoriesState(getCustomCategories());
      setCollapsedCategoriesState(getCollapsedCategories());
      setCategoryBeingRenamed(null);
      setRenamedCategoryName(``);
    };
    let cancelCategoryRename = () => {
      setCategoryBeingRenamed(null);
      setRenamedCategoryName(``);
    };
    let requestCategoryDeletion = (n) => {
      netlinks.filter((e) => e.category === n).length > 0
        ? setCategoryPendingDeletion(n)
        : (deleteCategory(n),
          setNetlinksState(getNetlinks()),
          setCategoryOrderState(getCategoryOrder()),
          setCustomCategoriesState(getCustomCategories()),
          setCollapsedCategoriesState(getCollapsedCategories()));
    };
    let confirmCategoryDeletion = () => {
      categoryPendingDeletion &&
        (deleteCategory(categoryPendingDeletion),
        setNetlinksState(getNetlinks()),
        setCategoryOrderState(getCategoryOrder()),
        setCustomCategoriesState(getCustomCategories()),
        setCollapsedCategoriesState(getCollapsedCategories()),
        setCategoryPendingDeletion(null));
    };
    let cancelCategoryDeletion = () => {
      setCategoryPendingDeletion(null);
    };
    return jsxs(`div`, {
      className: `bookmarks-container mb-8 w-full mx-auto`,
      style: { maxWidth: `1100px` },
      children: [
        jsxs(`div`, {
          className: `flex justify-between items-center mb-4`,
          children: [
            jsx(`h2`, {
              className: `text-2xl text-yellow-300 font-mono uppercase tracking-wide relative`,
              children: jsxs(`button`, {
                type: `button`,
                onClick: toggleNetlinks,
                'aria-expanded': !netlinksCollapsed,
                'aria-controls': `netlinks-content`,
                className: `flex items-center gap-2 text-2xl text-left hover:text-yellow-200 transition-colors`,
                children: [
                  jsx(`span`, { className: `hover-glitch`, 'data-text': `NETLINKS`, children: `NETLINKS` }),
                  netlinksCollapsed ? jsx(zt, { size: 20 }) : jsx(Rt, { size: 20 }),
                ],
              }),
            }),
            jsxs(`div`, {
              className: `controls`,
              children: [
                editMode
                  ? jsx(`button`, {
                      onClick: finishEditing,
                      className: `text-cyan-400 hover:text-cyan-300 mr-2 px-3 py-1 border border-cyan-400 hover:border-cyan-300`,
                      children: `SAVE`,
                    })
                  : jsx(`button`, {
                      onClick: () => { setNetlinksCollapsed(false); localStorage.setItem(`netlinksCollapsed`, `false`); setEditMode(true); },
                      className: `text-pink-500 hover:text-pink-400 mr-2`,
                      children: jsx(Mn, {
                        size: 20,
                      }),
                    }),
                jsx(`button`, {
                  onClick: () => { setNetlinksCollapsed(false); localStorage.setItem(`netlinksCollapsed`, `false`); setLinkFormOpen(!linkFormOpen); },
                  className: `text-yellow-300 hover:text-yellow-200`,
                  children: jsx(En, {
                    size: 20,
                  }),
                }),
              ],
            }),
          ],
        }),
        !netlinksCollapsed && linkFormOpen &&
          jsxs(`div`, {
            className: `add-form mb-6 p-4 border-2 border-pink-500 bg-gray-900`,
            children: [
              jsx(`h3`, {
                className: `text-xl text-cyan-400 mb-2 font-mono`,
                children: editingNetlink ? `EDIT LINK` : `ADD NEW LINK`,
              }),
              jsxs(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
                children: [
                  jsx(`input`, {
                    type: `text`,
                    placeholder: `Title`,
                    value: netlinkForm.title,
                    onChange: (e) =>
                      setNetlinkForm({
                        ...netlinkForm,
                        title: e.target.value,
                      }),
                    className: `p-2 bg-gray-800 border border-cyan-400 text-white font-mono`,
                  }),
                  jsx(`input`, {
                    type: `text`,
                    placeholder: `URL`,
                    value: netlinkForm.url,
                    onChange: (e) =>
                      setNetlinkForm({
                        ...netlinkForm,
                        url: e.target.value,
                      }),
                    className: `p-2 bg-gray-800 border border-cyan-400 text-white font-mono`,
                  }),
                  jsx(`select`, {
                    value: netlinkForm.category,
                    onChange: (e) =>
                      setNetlinkForm({
                        ...netlinkForm,
                        category: e.target.value,
                      }),
                    className: `p-2 bg-gray-800 border border-cyan-400 text-white font-mono`,
                    children: categoryOrder.map((e) =>
                      jsx(
                        `option`,
                        {
                          value: e,
                          children: e.charAt(0).toUpperCase() + e.slice(1),
                        },
                        e,
                      ),
                    ),
                  }),
                  jsxs(`div`, {
                    className: `relative`,
                    children: [
                      jsxs(`button`, {
                        type: `button`,
                        onClick: () => setIconPickerOpen(!iconPickerOpen),
                        className: `w-full p-2 bg-gray-800 border border-cyan-400 text-white font-mono flex items-center justify-between hover:bg-gray-700`,
                        children: [
                          jsx(`span`, {
                            children: `Select Icon`,
                          }),
                          React.createElement(resolveIcon(netlinkForm.icon || `Default`), {
                            size: 20,
                          }),
                        ],
                      }),
                      iconPickerOpen &&
                        jsx(`div`, {
                          className: `absolute top-full left-0 z-50 w-80 mt-2 p-2 bg-gray-900 border-2 border-pink-500`,
                          children: jsx(`div`, {
                            className: `h-64 overflow-y-auto scrollbar-cyberpunk`,
                            children: jsx(`div`, {
                              className: `grid grid-cols-4 gap-2 pr-2`,
                              children: FAVICON_OPTIONS.map((e) =>
                                jsxs(
                                  `button`,
                                  {
                                    onClick: () => chooseIcon(e.name),
                                    className: `p-2 hover:bg-gray-800 rounded flex flex-col items-center gap-1 ${netlinkForm.icon === e.name ? `bg-gray-800 border border-cyan-400` : ``}`,
                                    children: [
                                      React.createElement(e.icon, {
                                        size: 20,
                                        className: `text-cyan-400`,
                                      }),
                                      jsx(`span`, {
                                        className: `text-xs text-white font-mono`,
                                        children: e.name,
                                      }),
                                    ],
                                  },
                                  e.name,
                                ),
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                  jsxs(`div`, {
                    className: `flex md:col-span-2`,
                    children: [
                      jsx(`button`, {
                        onClick: saveNetlink,
                        className: `flex-1 py-2 bg-yellow-300 text-black font-bold font-mono hover:bg-yellow-400`,
                        children: editingNetlink ? `UPDATE` : `ADD`,
                      }),
                      jsx(`button`, {
                        onClick: closeNetlinkForm,
                        className: `ml-2 px-4 py-2 bg-gray-700 text-white font-mono`,
                        children: `CANCEL`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        jsxs(`div`, {
          id: `netlinks-content`,
          hidden: netlinksCollapsed,
          className: `bookmark-categories`,
          children: [
            jsx(za, {
              sensors: dragSensors,
              collisionDetection: Qr,
              onDragEnd: handleCategoryDragEnd,
              children: jsx(ao, {
                items: categoryOrder,
                strategy: to,
                children: categoryOrder.map((e) => {
                  let t = netlinksByCategory[e] || [];
                  return t.length === 0 && !editMode
                    ? null
                    : jsx(
                        `div`,
                        {
                          children:
                            categoryBeingRenamed === e
                              ? jsxs(`div`, {
                                  className: `mb-4 p-4 border-2 border-cyan-400 bg-gray-900`,
                                  children: [
                                    jsx(`h3`, {
                                      className: `text-xl text-cyan-400 mb-2 font-mono`,
                                      children: `EDIT CATEGORY`,
                                    }),
                                    jsxs(`div`, {
                                      className: `flex gap-2`,
                                      children: [
                                        jsx(`input`, {
                                          type: `text`,
                                          value: renamedCategoryName,
                                          onChange: (e) => setRenamedCategoryName(e.target.value),
                                          className: `flex-1 p-2 bg-gray-800 border border-cyan-400 text-white font-mono`,
                                          placeholder: `Category name`,
                                          autoFocus: true,
                                        }),
                                        jsx(`button`, {
                                          onClick: saveCategoryRename,
                                          className: `px-4 py-2 bg-cyan-400 text-black font-mono font-bold hover:bg-cyan-300`,
                                          children: `SAVE`,
                                        }),
                                        jsx(`button`, {
                                          onClick: cancelCategoryRename,
                                          className: `px-4 py-2 bg-gray-700 text-white font-mono hover:bg-gray-600`,
                                          children: `CANCEL`,
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : jsx(
                                  So,
                                  {
                                    category: e,
                                    bookmarks: t,
                                    editing: editMode,
                                    isCollapsed: collapsedCategories[e] || false,
                                    onBookmarkOrderChange: saveNetlinkOrder,
                                    onToggleCollapse: toggleCategory,
                                    onEditCategory: beginRenamingCategory,
                                    onDeleteCategory: requestCategoryDeletion,
                                    children: t.map((e) =>
                                      jsx(
                                        Co,
                                        {
                                          bookmark: e,
                                          editing: editMode,
                                          onDelete: removeNetlink,
                                          onEdit: beginEditingNetlink,
                                          onClick: navigateToNetlink,
                                          onContextMenu: openContextMenu,
                                          getIconComponent: resolveIcon,
                                        },
                                        e.id,
                                      ),
                                    ),
                                  },
                                  e,
                                ),
                        },
                        e,
                      );
                }),
              }),
            }),
            editMode &&
              jsx(`div`, {
                className: `mt-4`,
                children: _
                  ? jsxs(`div`, {
                      className: `p-4 border-2 border-pink-500 bg-gray-900`,
                      children: [
                        jsx(`h3`, {
                          className: `text-xl text-cyan-400 mb-2 font-mono`,
                          children: `ADD NEW CATEGORY`,
                        }),
                        jsxs(`div`, {
                          className: `flex gap-2`,
                          children: [
                            jsx(`input`, {
                              type: `text`,
                              value: newCategoryName,
                              onChange: (e) => setNewCategoryName(e.target.value),
                              className: `flex-1 p-2 bg-gray-800 border border-cyan-400 text-white font-mono`,
                              placeholder: `Category name`,
                              autoFocus: true,
                            }),
                            jsx(`button`, {
                              onClick: () => {
                                if (!newCategoryName.trim()) return;
                                let e = newCategoryName.trim().toLowerCase();
                                if (categoryOrder.includes(e)) {
                                  alert(`A category with this name already exists`);
                                  return;
                                }
                                addCategory(e);
                                setCategoryOrderState(getCategoryOrder());
                                setCustomCategoriesState(getCustomCategories());
                                setNewCategoryName(``);
                                v(false);
                              },
                              className: `px-4 py-2 bg-pink-500 text-black font-mono font-bold hover:bg-pink-400`,
                              children: `ADD`,
                            }),
                            jsx(`button`, {
                              onClick: () => {
                                setNewCategoryName(``);
                                v(false);
                              },
                              className: `px-4 py-2 bg-gray-700 text-white font-mono hover:bg-gray-600`,
                              children: `CANCEL`,
                            }),
                          ],
                        }),
                      ],
                    })
                  : jsxs(`button`, {
                      onClick: () => v(true),
                      className: `w-full p-3 border-2 border-dashed border-pink-500 text-pink-500 hover:bg-gray-800 font-mono flex items-center justify-center gap-2`,
                      children: [
                        jsx(En, {
                          size: 20,
                        }),
                        `ADD CATEGORY`,
                      ],
                    }),
              }),
          ],
        }),
        !netlinksCollapsed && contextMenu &&
          jsx(xo, {
            x: contextMenu.x,
            y: contextMenu.y,
            bookmark: contextMenu.bookmark,
            onClose: () => setContextMenu(null),
            onCopyLink: copyNetlink,
            onOpenNewTab: openNetlinkInNewTab,
          }),
        categoryPendingDeletion &&
          jsxs(`div`, {
            className: `fixed inset-0 flex items-center justify-center z-50`,
            children: [
              jsx(`div`, {
                className: `overlay fixed inset-0 bg-black bg-opacity-70`,
                onClick: cancelCategoryDeletion,
              }),
              jsxs(`div`, {
                className: `modal-content relative bg-gray-900 border-2 border-pink-500 p-6 max-w-md w-full`,
                children: [
                  jsxs(`div`, {
                    className: `flex items-center gap-2 text-pink-500 mb-4`,
                    children: [
                      jsx(Gn, {
                        size: 24,
                      }),
                      jsx(`h3`, {
                        className: `text-xl text-yellow-300 font-mono uppercase`,
                        children: `Warning`,
                      }),
                    ],
                  }),
                  jsxs(`p`, {
                    className: `text-white font-mono mb-4`,
                    children: [
                      `Deleting the category "`,
                      categoryPendingDeletion,
                      `" will also delete all `,
                      netlinks.filter((e) => e.category === categoryPendingDeletion).length,
                      ` bookmark(s) in it. This action cannot be undone.`,
                    ],
                  }),
                  jsxs(`div`, {
                    className: `flex gap-2`,
                    children: [
                      jsx(`button`, {
                        onClick: confirmCategoryDeletion,
                        className: `flex-1 p-3 bg-pink-500 text-black font-mono font-bold hover:bg-pink-400`,
                        children: `DELETE`,
                      }),
                      jsx(`button`, {
                        onClick: cancelCategoryDeletion,
                        className: `flex-1 p-3 border border-cyan-400 text-cyan-400 font-mono hover:bg-gray-800`,
                        children: `CANCEL`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  };
// #endregion app/10-netlinks.js

;
// #region app/11-quotes.js
/* Quotes and quote display. Shared scope; build with node scripts/build.cjs. */

var QUOTES = [
  {
    text: `Wake up, samurai. We have a city to burn.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `In 2077, what makes someone a criminal? Getting caught.`,
    author: `Anonymous`,
  },
  {
    text: `Never fade away.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Give yourself time. Ideas'll come. Life'll shake you, roll you, maybe embrace you. The music'll find you.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `It's the code you live by that defines who you are.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Test of a person's true value? Death. Facing it, staring it down. You still got a chance to be somebody.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Here, for folks like us? Wrong city, wrong people.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Haven't forgotten a thing. Never will.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Goodbye, V, and never stop fighting.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Swap meat for chrome, live a BD fantasy, whatever, but at the end of it all, it's the code you live by that defines who you are.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Of all the heads I could have popped up in, hella glad it was yours.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `I admit, I didn't expect that.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Oh, yeah, real mature! Not like I can cover my ears and go 'lalalalala' whenever you open your trap.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Get the payload on the elevator, arm it, let gravity do its thing. Explosion rocks the foundation, tower crumbles — chaos, screaming, roll credits.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Sabotage a corpo power station, jump a corpo transport, kidnap a corpo suit...`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Guess I meant, I dunno... a happier ending... for everyone involved.`,
    author: `V`,
  },
  {
    text: `Just promise me one thing, asshole. You won't forget me.`,
    author: `V`,
  },
  {
    text: `I just want the world to know I was here. That I mattered.`,
    author: `V`,
  },
  {
    text: `Fear isn't a weakness. It is here to protect you.`,
    author: `Skye`,
  },
  {
    text: `Not a single thing in this world isn't in the process of becoming something else. Likewise you.`,
    author: `Skye`,
  },
  {
    text: `We shouldn't fear change itself, but only who we might change into.`,
    author: `Misty`,
  },
  {
    text: `Truth and good are values proven to cause division, whereas beauty is universal.`,
    author: `Delamain`,
  },
  {
    text: `The dead are so very, very loud. And yet, lying is not in their nature.`,
    author: `Saburo Arasaka`,
  },
  {
    text: `The heart should break but once.`,
    author: `Saburo Arasaka`,
  },
  {
    text: `You see, that's your problem. You think the world revolves around you. Arrogant.`,
    author: `Yorinobu Arasaka`,
  },
  {
    text: `Now, as that old Greek dawg says, life's a banquet — so don't go thirsty, but don't get drunk, either.`,
    author: `Dexter 'Dex' DeShawn`,
  },
  {
    text: `Careful, you can't know what I'd wish for.`,
    author: `Panam Palmer`,
  },
  {
    text: `The wider the smile, the bigger the lies.`,
    author: `Goro Takemura`,
  },
  {
    text: `Your body can be chrome, but the heart never changes. It wants what it wants.`,
    author: `Lizzy Wizzy`,
  },
  {
    text: `Johnny, remember the plan?`,
    author: `Rogue Amendiares`,
  },
  {
    text: `Say what now?`,
    author: `Jackie Welles`,
  },
  {
    text: `Ladies and gentlemen, Jackie Welles!`,
    author: `Jackie Welles`,
  },
  {
    text: `What is free often proves most costly.`,
    author: `Anonymous`,
  },
  {
    text: `Man dies the way he was born: soft, weak and helpless.`,
    author: `Anonymous`,
  },
  {
    text: `Bullets don't distinguish between tough and weak.`,
    author: `Anonymous`,
  },
  {
    text: `Only one with chaos within can give birth to a dancing star.`,
    author: `Anonymous`,
  },
  {
    text: `After a day as full as today, you deserve to kick back.`,
    author: `V`,
  },
  {
    text: `You think Jackie's looking down upon us... from up there?`,
    author: `V`,
  },
  {
    text: `But how do I keep up with everything that's changing?`,
    author: `V`,
  },
  {
    text: `What?`,
    author: `Ozob`,
  },
  {
    text: `The nail that protrudes from the wall gets hammered...`,
    author: `Saburo Arasaka`,
  },
  {
    text: `Some causes are worth pledging your life to, V. This ain't one of them.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Time to party like it's 2023.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `If I gotta go down, I'd rather fall into my grave gun in hand and on fire.`,
    author: `V`,
  },
  {
    text: `Each and every time, I thought I'd found a home. And each and every time, I came away disappointed.`,
    author: `Judy Alvarez`,
  },
  {
    text: `Saw them transform Night City into a machine fueled by people's crushed spirits, broken dreams, and empty pockets.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Can't stop diggin' Night City.`,
    author: `Radio/NPC`,
  },
  {
    text: `Before it all goes dark... for one last second, I'll know I wasn't alone.`,
    author: `Songbird`,
  },
  {
    text: `To our dreams. For they alone keep us sane.`,
    author: `V`,
  },
  {
    text: `We all lap up the last of our fuel eventually. But that hardly means the journey wasn't a joy.`,
    author: `Delamain`,
  },
  {
    text: `Welcome to the world of the faces in the crowd, V.`,
    author: `Misty Olszewski`,
  },
  {
    text: `Sometimes it's just safer to shove the barrel of a Malorian between a choom's ribs, even if he is on your side. It's nothing personal.`,
    author: `Solomon Reed`,
  },
  {
    text: `Not askin' you to never give up. Sometimes you gotta let go... Just don't let anyone change who you are, 'kay?`,
    author: `Johnny Silverhand`,
  },
  {
    text: `Think this is it, kiddo.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `They say pain's a deal between body and brain. You can break it, throw the pain away, bury it. Whole lotta horseshit.`,
    author: `Rosalind Myers`,
  },
  {
    text: `I don't know how much they're paying you, but you better ask yourself — is it worth it?`,
    author: `Solomon Reed`,
  },
  {
    text: `What I built, I built with my own two hands.`,
    author: `Kurt Hansen`,
  },
  {
    text: `I won't give you their ranks. I'd rather remember their names. Too many names to count.`,
    author: `Kurt Hansen`,
  },
  {
    text: `We did everything we were ordered to do, and then the brass decided to flush us down the storm drain.`,
    author: `Kurt Hansen`,
  },
  {
    text: `I should be saying they tried to kill me, but sometimes feels like they actually succeeded.`,
    author: `Solomon Reed`,
  },
  {
    text: `I know what they made you do. They pushed and pushed, and I wasn't there to stop it.`,
    author: `Solomon Reed`,
  },
  {
    text: `We got in, we can get out. Just trust me.`,
    author: `Solomon Reed`,
  },
  {
    text: `I know what I've done. Know the price I've paid. What you don't know is how sorry I am, how much it all hurts.`,
    author: `Songbird`,
  },
  {
    text: `We all make wrong turns, we all lose the way, and we kneel to pick up the broken pieces.`,
    author: `Songbird`,
  },
  {
    text: `Usually when you look out for yourself, it's others who pay the price.`,
    author: `V`,
  },
  {
    text: `I can't take it anymore... I need to escape...`,
    author: `Songbird`,
  },
  {
    text: `What do you suggest I do, see a therapist? Shrinks detest vehicles, we have no mothers!`,
    author: `Delamain AI`,
  },
  {
    text: `This is why you don't bring back fallen warriors. Sooner or later, they're going to see everything they fought for's turned to shit.`,
    author: `Johnny Silverhand`,
  },
  {
    text: `They'd say you're taking too big a risk. Poetically speaking, flying toward the sun to burn up.`,
    author: `Mr. Blue Eyes`,
  },
  {
    text: `Fashion is a weapon. Used properly, it can be lethal.`,
    author: `Aurore Cassel`,
  },
  {
    text: `All or nothin' — whaddaya say?`,
    author: `Aurore Cassel`,
  },
  {
    text: `Have a taste for risk?`,
    author: `Aurore Cassel`,
  },
];
var pickRandomQuote = () => QUOTES[Math.floor(Math.random() * QUOTES.length)];
var /* Quote component. The To array above contains its source text. */
  QuoteDisplay = ({ glitching = false }) => {
    let [quote] = useState(pickRandomQuote());
    return jsxs(`div`, {
      className: `quote-container max-w-2xl mx-auto text-center mb-6 ${glitching ? `glitch` : ``}`,
      children: [
        jsxs(`blockquote`, {
          className: `text-cyan-400 font-mono italic text-lg relative py-2 px-4 quote-box quote-hover ${glitching ? `glitch` : ``}`,
          "data-text": `"${quote.text}"`,
          children: [
            `"`,
            quote.text,
            `"`,
            jsx(`div`, {
              className: `quote-glow`,
            }),
          ],
        }),
        jsxs(`p`, {
          className: `text-yellow-300 font-mono mt-2 hover-glitch ${glitching ? `glitch` : ``}`,
          "data-text": `— ${quote.author}`,
          children: [`— `, quote.author],
        }),
      ],
    });
  };
// #endregion app/11-quotes.js

;
// #region app/12-widgets.js
/* Weather, clock, notes, tasks, RSS and widget panel. Shared scope; build with node scripts/build.cjs. */

var LocationEditorDialog = ({
  isOpen: isOpen,
  onClose: onClose,
  location: location,
  onLocationChange: onLocationChange,
  onSave: onSave,
  coordError: coordinateError,
}) => {
  if (!isOpen) return null;
  let o = () => {
    window.open(`https://www.latlong.net`, `_blank`);
  };
  let s = (e, t) => {
    let i = e === `latitude` ? [-90, 90] : [-180, 180];
    let a = Number.isFinite(location[e]) ? location[e] : 0;
    let o = Math.min(i[1], Math.max(i[0], Number((a + t * 1e-4).toFixed(4))));
    onLocationChange({
      ...location,
      [e]: o,
    });
  };
  return jsxs(`div`, {
    className: `fixed inset-0 flex items-center justify-center z-50`,
    children: [
      jsx(`div`, {
        className: `overlay fixed inset-0 bg-black bg-opacity-70`,
        onClick: onClose,
      }),
      jsxs(`div`, {
        className: `modal-content relative bg-gray-900 border-2 border-cyan-400 p-6 max-w-md w-full`,
        children: [
          jsxs(`h3`, {
            className: `text-2xl text-yellow-300 font-mono mb-4 uppercase flex items-center justify-between`,
            children: [
              `Location Override`,
              jsxs(`button`, {
                onClick: o,
                className: `text-cyan-400 hover:text-cyan-300 flex items-center gap-2 text-sm`,
                title: `Find coordinates`,
                children: [
                  jsx(Vt, {
                    size: 16,
                  }),
                  jsx(`span`, {
                    children: `Find Coordinates`,
                  }),
                ],
              }),
            ],
          }),
          jsxs(`div`, {
            className: `space-y-4`,
            children: [
              jsx(`input`, {
                type: `text`,
                value: location.name,
                onChange: (e) =>
                  onLocationChange({
                    ...location,
                    name: e.target.value,
                  }),
                placeholder: `Location Name`,
                className: `w-full p-2 bg-gray-800 border border-cyan-400 text-white font-mono`,
              }),
              jsxs(`div`, {
                className: `number-input-container`,
                children: [
                  jsx(`input`, {
                    type: `number`,
                    value: location.latitude,
                    onChange: (e) =>
                      onLocationChange({
                        ...location,
                        latitude: parseFloat(e.target.value),
                      }),
                    placeholder: `Latitude (-90 to 90)`,
                    min: `-90`,
                    max: `90`,
                    step: `0.0001`,
                    className: `w-full p-2 pr-8 bg-gray-800 border border-cyan-400 text-white font-mono`,
                  }),
                  jsxs(`div`, {
                    className: `spinner-buttons`,
                    children: [
                      jsx(`button`, {
                        type: `button`,
                        className: `spinner-button`,
                        onClick: () => s(`latitude`, 1),
                        "aria-label": `Increase latitude`,
                        children: jsx(Bt, {
                          size: 14,
                        }),
                      }),
                      jsx(`button`, {
                        type: `button`,
                        className: `spinner-button`,
                        onClick: () => s(`latitude`, -1),
                        "aria-label": `Decrease latitude`,
                        children: jsx(Rt, {
                          size: 14,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              jsxs(`div`, {
                className: `number-input-container`,
                children: [
                  jsx(`input`, {
                    type: `number`,
                    value: location.longitude,
                    onChange: (e) =>
                      onLocationChange({
                        ...location,
                        longitude: parseFloat(e.target.value),
                      }),
                    placeholder: `Longitude (-180 to 180)`,
                    min: `-180`,
                    max: `180`,
                    step: `0.0001`,
                    className: `w-full p-2 pr-8 bg-gray-800 border border-cyan-400 text-white font-mono`,
                  }),
                  jsxs(`div`, {
                    className: `spinner-buttons`,
                    children: [
                      jsx(`button`, {
                        type: `button`,
                        className: `spinner-button`,
                        onClick: () => s(`longitude`, 1),
                        "aria-label": `Increase longitude`,
                        children: jsx(Bt, {
                          size: 14,
                        }),
                      }),
                      jsx(`button`, {
                        type: `button`,
                        className: `spinner-button`,
                        onClick: () => s(`longitude`, -1),
                        "aria-label": `Decrease longitude`,
                        children: jsx(Rt, {
                          size: 14,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              coordinateError &&
                jsx(`p`, {
                  className: `text-pink-500 font-mono text-sm`,
                  children: coordinateError,
                }),
            ],
          }),
          jsxs(`div`, {
            className: `flex gap-2 mt-4`,
            children: [
              jsx(`button`, {
                onClick: onSave,
                className: `flex-1 px-4 py-2 bg-pink-500 text-black font-bold font-mono uppercase`,
                children: `Save`,
              }),
              jsx(`button`, {
                onClick: onClose,
                className: `px-4 py-2 border border-cyan-400 text-cyan-400 font-mono uppercase`,
                children: `Cancel`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
var WeatherWidget = ({ config: config, onConfigChange: onConfigChange }) => {
  let [weather, setWeather] = useState(null);
  let [loading, setLoading] = useState(true);
  let [fetchFailed, setFetchFailed] = useState(false);
  let [locationEditorOpen, setLocationEditorOpen] = useState(false);
  let savedLocation = config.location;
  let [draftLocation, setDraftLocation] = useState(
    savedLocation || {
      name: `Night City`,
      latitude: 37.7749,
      longitude: -122.4194,
    },
  );
  let [coordinateError, setCoordinateError] = useState(``);
  let [unitGlitching, setUnitGlitching] = useState(false);
  let location = savedLocation || draftLocation;
  let useCelsius = config.temperatureUnit !== false;
  let describeWeather = (e) =>
    e === 0
      ? `Clear sky`
      : e === 1
        ? `Mainly clear`
        : e === 2
          ? `Partly cloudy`
          : e === 3
            ? `Overcast`
            : e <= 49
              ? `Foggy`
              : e <= 59
                ? `Light drizzle`
                : e <= 69
                  ? `Rain`
                  : e <= 79
                    ? `Snow`
                    : e <= 84
                      ? `Rain showers`
                      : e <= 94
                        ? `Thunderstorm`
                        : `Severe weather`;
  let renderWeatherIcon = (e) =>
    e <= 1
      ? jsx(Hn, {
          size: 32,
          className: `text-yellow-300`,
        })
      : e <= 3
        ? jsx(Kt, {
            size: 32,
            className: `text-gray-400`,
          })
        : e <= 69
          ? jsx(Wt, {
              size: 32,
              className: `text-cyan-400`,
            })
          : e <= 79
            ? jsx(Gt, {
                size: 32,
                className: `text-white`,
              })
            : e <= 94
              ? jsx(Ut, {
                  size: 32,
                  className: `text-pink-500`,
                })
              : jsx(Zn, {
                  size: 32,
                  className: `text-gray-300`,
                });
  let validateCoordinates = (e, t) =>
    isNaN(e) || isNaN(t)
      ? (setCoordinateError(`Coordinates must be numbers`), false)
      : e < -90 || e > 90
        ? (setCoordinateError(`Latitude must be between -90 and 90`), false)
        : t < -180 || t > 180
          ? (setCoordinateError(`Longitude must be between -180 and 180`), false)
          : (setCoordinateError(``), true);
  let displayTemperature = (e, t) => (t ? e : Math.round((e * 9) / 5 + 32));
  let toggleTemperatureUnit = () => {
    setUnitGlitching(true);
    setTimeout(() => {
      onConfigChange({
        temperatureUnit: !useCelsius,
      });
      setUnitGlitching(false);
    }, 100);
  };
  let fetchWeather = useCallback(async () => {
    if (!validateCoordinates(location.latitude, location.longitude)) {
      setFetchFailed(true);
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      let e = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,weather_code`,
      );
      if (!e.ok) throw Error(`Weather API error`);
      let t = await e.json();
      setWeather({
        temperature: Math.round(t.current.temperature_2m),
        weatherCode: t.current.weather_code,
        description: describeWeather(t.current.weather_code),
      });
      setFetchFailed(false);
    } catch (e) {
      console.error(`Weather fetch error:`, e);
      setFetchFailed(true);
    } finally {
      setLoading(false);
    }
  }, [location]);
  return (
    useEffect(() => {
      fetchWeather();
      let e = setInterval(fetchWeather, 9e5);
      return () => clearInterval(e);
    }, [fetchWeather]),
    jsxs(jsxRuntime.Fragment, {
      children: [
        jsx(`div`, {
          className: `weather-widget p-4 border-2 border-cyan-400 bg-gray-900 glitch-border`,
          children: (() => {
            if (loading)
              return jsxs(jsxRuntime.Fragment, {
                children: [
                  jsxs(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      jsx(`div`, {
                        className: `weather-icon`,
                        children: jsx(Kt, {
                          size: 32,
                          className: `text-cyan-400 animate-pulse`,
                        }),
                      }),
                      jsx(`div`, {
                        className: `weather-temp text-right flex-shrink-0`,
                        children: jsx(`div`, {
                          className: `text-2xl font-mono text-cyan-400`,
                          children: `--°C`,
                        }),
                      }),
                    ],
                  }),
                  jsx(`div`, {
                    className: `flex justify-end mt-2`,
                    children: jsxs(`button`, {
                      onClick: () => setLocationEditorOpen(true),
                      className: `text-xs text-cyan-400 font-mono uppercase flex items-center gap-1 hover:text-cyan-300`,
                      children: [
                        jsx(_n, {
                          size: 12,
                        }),
                        location.name,
                      ],
                    }),
                  }),
                  jsx(`div`, {
                    className: `weather-desc mt-2 text-sm text-cyan-400 font-mono`,
                    children: `Scanning...`,
                  }),
                ],
              });
            if (fetchFailed || !weather)
              return jsxs(jsxRuntime.Fragment, {
                children: [
                  jsxs(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      jsx(`div`, {
                        className: `weather-icon`,
                        children: jsx(Zn, {
                          size: 32,
                          className: `text-pink-500`,
                        }),
                      }),
                      jsx(`div`, {
                        className: `weather-temp text-right flex-shrink-0`,
                        children: jsx(`div`, {
                          className: `text-2xl font-mono text-pink-500`,
                          children: `ERR`,
                        }),
                      }),
                    ],
                  }),
                  jsx(`div`, {
                    className: `flex justify-end mt-2`,
                    children: jsxs(`button`, {
                      onClick: () => setLocationEditorOpen(true),
                      className: `text-xs text-yellow-300 font-mono uppercase flex items-center gap-1 hover:text-yellow-200`,
                      children: [
                        jsx(Mn, {
                          size: 12,
                        }),
                        `EDIT`,
                      ],
                    }),
                  }),
                  jsx(`div`, {
                    className: `weather-desc mt-2 text-sm text-pink-500 font-mono`,
                    children: `System offline`,
                  }),
                ],
              });
            let e = displayTemperature(weather.temperature, useCelsius);
            let t = useCelsius ? `C` : `F`;
            return jsxs(jsxRuntime.Fragment, {
              children: [
                jsxs(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    jsx(`div`, {
                      className: `weather-icon`,
                      children: renderWeatherIcon(weather.weatherCode),
                    }),
                    jsx(`div`, {
                      className: `weather-temp text-right flex-shrink-0`,
                      children: jsxs(`button`, {
                        onClick: toggleTemperatureUnit,
                        className: `text-2xl font-mono text-yellow-300 hover:text-yellow-200 cursor-pointer transition-colors block ${unitGlitching ? `glitch` : ``}`,
                        "data-text": `${e}°${t}`,
                        children: [e, `°`, t],
                      }),
                    }),
                  ],
                }),
                jsx(`div`, {
                  className: `flex justify-end mt-2`,
                  children: jsxs(`button`, {
                    onClick: () => setLocationEditorOpen(true),
                    className: `text-xs text-cyan-400 font-mono uppercase flex items-center gap-1 hover:text-cyan-300`,
                    children: [
                      jsx(_n, {
                        size: 12,
                      }),
                      location.name,
                    ],
                  }),
                }),
                jsx(`div`, {
                  className: `weather-desc mt-2 text-sm text-white font-mono`,
                  children: weather.description,
                }),
              ],
            });
          })(),
        }),
        jsx(LocationEditorDialog, {
          isOpen: locationEditorOpen,
          onClose: () => {
            setLocationEditorOpen(false);
            setCoordinateError(``);
            setDraftLocation(location);
          },
          location: draftLocation,
          onLocationChange: setDraftLocation,
          onSave: () => {
            validateCoordinates(draftLocation.latitude, draftLocation.longitude) &&
              (onConfigChange({
                location: draftLocation,
              }),
              setLocationEditorOpen(false),
              setCoordinateError(``));
          },
          coordError: coordinateError,
        }),
      ],
    })
  );
};
var WorldClockWidget = ({ config: config, onConfigChange: onConfigChange }) => {
  let [timeText, setTimeText] = useState(``);
  let [loading, setLoading] = useState(true);
  let [fetchFailed, setFetchFailed] = useState(false);
  let [locationEditorOpen, setLocationEditorOpen] = useState(false);
  let [draftLocation, setDraftLocation] = useState(
    config.location || {
      name: `Tokyo`,
      latitude: 35.6762,
      longitude: 139.6503,
    },
  );
  let [coordinateError, setCoordinateError] = useState(``);
  let [formatGlitching, setFormatGlitching] = useState(false);
  let [timeSample, setTimeSample] = useState(null);
  let timeSampleRef = useRef(timeSample);
  let fetchFailedRef = useRef(fetchFailed);
  let updateDisplayRef = useRef(() => void 0);
  let fetchTimeRef = useRef(() => void 0);
  let location = config.location || draftLocation;
  let use24HourTime = config.timeFormat === void 0 || config.timeFormat;
  let formatTime = (e, t, n) => {
    if (n) return `${e.toString().padStart(2, `0`)}:${t.toString().padStart(2, `0`)}`;
    {
      let n = e >= 12 ? `PM` : `AM`;
      let r = e % 12;
      return ((r ||= 12), `${r}:${t.toString().padStart(2, `0`)} ${n}`);
    }
  };
  let estimateCurrentTime = () => {
    if (!timeSample || fetchFailed) {
      let e = new Date();
      return {
        hour: e.getHours(),
        minute: e.getMinutes(),
      };
    }
    let e = new Date().getTime() - timeSample.timestamp.getTime();
    let t = Math.floor(e / 6e4);
    let n = timeSample.hour;
    let r = timeSample.minute + t;
    return (
      r >= 60 && ((n += Math.floor(r / 60)), (r %= 60)),
      n >= 24 && (n %= 24),
      {
        hour: n,
        minute: r,
      }
    );
  };
  timeSampleRef.current = timeSample;
  fetchFailedRef.current = fetchFailed;
  updateDisplayRef.current = () => {
    let { hour: e, minute: t } = estimateCurrentTime();
    setTimeText(formatTime(e, t, use24HourTime));
  };
  fetchTimeRef.current = async () => {
    try {
      setLoading(true);
      setFetchFailed(false);
      let e = await fetch(
        `https://timeapi.io/api/time/current/coordinate?latitude=${location.latitude}&longitude=${location.longitude}`,
      );
      if (!e.ok) throw Error(`TimeAPI error: ${e.status}`);
      let t = await e.json();
      setTimeSample({
        hour: t.hour,
        minute: t.minute,
        timestamp: new Date(),
      });
      setTimeText(formatTime(t.hour, t.minute, use24HourTime));
      setFetchFailed(false);
    } catch (e) {
      console.error(`TimeAPI fetch error:`, e);
      setFetchFailed(true);
      setTimeText(`--:--`);
      setTimeSample(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTimeRef.current();
    let e = setInterval(() => {
      let e = timeSampleRef.current;
      if (e && !fetchFailedRef.current) {
        let t = new Date().getTime() - e.timestamp.getTime();
        Math.floor(t / 6e4) >= 5 ? fetchTimeRef.current() : updateDisplayRef.current();
      }
    }, 6e4);
    return () => clearInterval(e);
  }, [location]);
  useEffect(() => {
    timeSample && !fetchFailed && !loading && updateDisplayRef.current();
  }, [use24HourTime, timeSample, fetchFailed, loading]);
  let E = (e, t) =>
    isNaN(e) || isNaN(t)
      ? (setCoordinateError(`Coordinates must be numbers`), false)
      : e < -90 || e > 90
        ? (setCoordinateError(`Latitude must be between -90 and 90`), false)
        : t < -180 || t > 180
          ? (setCoordinateError(`Longitude must be between -180 and 180`), false)
          : (setCoordinateError(``), true);
  return jsxs(jsxRuntime.Fragment, {
    children: [
      jsx(`div`, {
        className: `world-clock-widget p-4 border-2 border-cyan-400 bg-gray-900 glitch-border`,
        children: loading
          ? jsxs(jsxRuntime.Fragment, {
              children: [
                jsxs(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    jsx(`div`, {
                      className: `clock-icon`,
                      children: jsx($t, {
                        size: 32,
                        className: `text-cyan-400 animate-pulse`,
                      }),
                    }),
                    jsx(`div`, {
                      className: `clock-time text-right flex-shrink-0`,
                      children: jsx(`div`, {
                        className: `text-2xl font-mono text-cyan-400`,
                        children: `--:--`,
                      }),
                    }),
                  ],
                }),
                jsx(`div`, {
                  className: `flex justify-end mt-2`,
                  children: jsxs(`button`, {
                    onClick: () => setLocationEditorOpen(true),
                    className: `text-xs text-cyan-400 font-mono uppercase flex items-center gap-1 hover:text-cyan-300`,
                    children: [
                      jsx(_n, {
                        size: 12,
                      }),
                      location.name,
                    ],
                  }),
                }),
              ],
            })
          : fetchFailed
            ? jsxs(jsxRuntime.Fragment, {
                children: [
                  jsxs(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      jsx(`div`, {
                        className: `clock-icon`,
                        children: jsx(Xn, {
                          size: 32,
                          className: `text-pink-500`,
                        }),
                      }),
                      jsx(`div`, {
                        className: `clock-time text-right flex-shrink-0`,
                        children: jsx(`div`, {
                          className: `text-2xl font-mono text-pink-500`,
                          children: `ERR`,
                        }),
                      }),
                    ],
                  }),
                  jsx(`div`, {
                    className: `flex justify-end mt-2`,
                    children: jsxs(`button`, {
                      onClick: () => setLocationEditorOpen(true),
                      className: `text-xs text-yellow-300 font-mono uppercase flex items-center gap-1 hover:text-yellow-200`,
                      children: [
                        jsx(Mn, {
                          size: 12,
                        }),
                        `EDIT`,
                      ],
                    }),
                  }),
                ],
              })
            : jsxs(jsxRuntime.Fragment, {
                children: [
                  jsxs(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      jsx(`div`, {
                        className: `clock-icon`,
                        children: jsx($t, {
                          size: 32,
                          className: `text-cyan-400`,
                        }),
                      }),
                      jsx(`div`, {
                        className: `clock-time text-right flex-shrink-0`,
                        children: jsx(`button`, {
                          onClick: () => {
                            setFormatGlitching(true);
                            setTimeout(() => {
                              onConfigChange({
                                timeFormat: !use24HourTime,
                              });
                              setFormatGlitching(false);
                            }, 100);
                          },
                          className: `text-2xl font-mono text-yellow-300 hover:text-yellow-200 cursor-pointer transition-colors block ${formatGlitching ? `glitch` : ``}`,
                          "data-text": timeText,
                          children: timeText,
                        }),
                      }),
                    ],
                  }),
                  jsx(`div`, {
                    className: `flex justify-end mt-2`,
                    children: jsxs(`button`, {
                      onClick: () => setLocationEditorOpen(true),
                      className: `text-xs text-cyan-400 font-mono uppercase flex items-center gap-1 hover:text-cyan-300`,
                      children: [
                        jsx(_n, {
                          size: 12,
                        }),
                        location.name,
                      ],
                    }),
                  }),
                ],
              }),
      }),
      jsx(LocationEditorDialog, {
        isOpen: locationEditorOpen,
        onClose: () => {
          setLocationEditorOpen(false);
          setCoordinateError(``);
          setDraftLocation(location);
        },
        location: draftLocation,
        onLocationChange: setDraftLocation,
        onSave: () => {
          E(draftLocation.latitude, draftLocation.longitude) &&
            (onConfigChange({
              location: draftLocation,
            }),
            setLocationEditorOpen(false),
            setCoordinateError(``));
        },
        coordError: coordinateError,
      }),
    ],
  });
};
var ScratchpadWidget = ({ config: e, onConfigChange: t }) => {
  let [n, r] = useState(e.content || ``);
  let [i, a] = useState(false);
  let o = useRef(null);
  let s = useRef(void 0);
  let c = () => {
    let e = o.current;
    if (e) {
      e.style.height = `auto`;
      let t = Math.min(Math.max(e.scrollHeight, 80), 300);
      e.style.height = `${t}px`;
      e.scrollHeight > 300 ? (e.style.overflowY = `auto`) : (e.style.overflowY = `hidden`);
    }
  };
  let l = (e) => {
    s.current && clearTimeout(s.current);
    a(true);
    s.current = setTimeout(() => {
      t({
        content: e,
      });
      a(false);
    }, 1e3);
  };
  return (
    useEffect(() => {
      c();
    }, []),
    useEffect(
      () => () => {
        s.current && clearTimeout(s.current);
      },
      [],
    ),
    jsxs(`div`, {
      className: `scratch-pad-widget p-4 border-2 border-cyan-400 bg-gray-900 glitch-border`,
      children: [
        jsxs(`div`, {
          className: `flex items-center justify-between mb-3`,
          children: [
            jsxs(`div`, {
              className: `flex items-center gap-2`,
              children: [
                jsx(nn, {
                  size: 20,
                  className: `text-cyan-400`,
                }),
                jsx(`span`, {
                  className: `text-cyan-400 font-mono text-sm uppercase`,
                  children: `Scratch Pad`,
                }),
              ],
            }),
            jsx(`button`, {
              onClick: () => {
                s.current && clearTimeout(s.current);
                a(true);
                t({
                  content: n,
                });
                setTimeout(() => a(false), 500);
              },
              className: `text-cyan-400 hover:text-cyan-300 transition-colors ${i ? `animate-pulse` : ``}`,
              children: jsx(jn, {
                size: 16,
              }),
            }),
          ],
        }),
        jsx(`textarea`, {
          ref: o,
          value: n,
          onChange: (e) => {
            let t = e.target.value;
            r(t);
            l(t);
            setTimeout(c, 0);
          },
          className: `w-full bg-gray-800 border border-gray-600 text-white font-mono text-sm \r
                   placeholder-gray-400 focus:outline-none focus:border-cyan-400 \r
                   resize-none transition-colors p-2 rounded-none\r
                   scrollbar-cyberpunk`,
          style: {
            minHeight: `80px`,
            maxHeight: `300px`,
          },
        }),
        jsx(`div`, {
          className: `flex justify-end items-center mt-2`,
          children: jsx(`span`, {
            className: `text-cyan-400 font-mono text-xs tracking-wider`,
            children: ((e) => e.toString().padStart(5, `0`))(n.length),
          }),
        }),
      ],
    })
  );
};
var TaskListWidget = ({ config: e, onConfigChange: t }) => {
  let [n, r] = useState(e.tasks || []);
  let [i, a] = useState(null);
  let [o, s] = useState(null);
  let c = useRef(void 0);
  let l = (e) => {
    c.current && clearTimeout(c.current);
    c.current = setTimeout(() => {
      t({
        tasks: e,
      });
    }, 500);
  };
  let u = () => {
    let e = {
      id: Date.now().toString(),
      text: ``,
      completed: false,
    };
    let t = [...n, e];
    r(t);
    l(t);
  };
  let d = (e, t) => {
    let i = n.map((n) =>
      n.id === e
        ? {
            ...n,
            text: t,
          }
        : n,
    );
    r(i);
    l(i);
  };
  let f = (e) => {
    let t = n.map((t) =>
      t.id === e
        ? {
            ...t,
            completed: true,
          }
        : t,
    );
    r(t);
    a(e);
    setTimeout(() => {
      let t = n.filter((t) => t.id !== e);
      r(t);
      l(t);
      a(null);
    }, 200);
  };
  let p = (e) => {
    e.style.height = `auto`;
    let t = Math.min(Math.max(e.scrollHeight, 16), 64);
    e.style.height = `${t}px`;
    e.scrollHeight > 64 ? (e.style.overflowY = `auto`) : (e.style.overflowY = `hidden`);
  };
  return (
    useEffect(
      () => () => {
        c.current && clearTimeout(c.current);
      },
      [],
    ),
    jsxs(`div`, {
      className: `task-list-widget p-4 border-2 border-cyan-400 bg-gray-900 glitch-border`,
      children: [
        jsxs(`div`, {
          className: `flex items-center justify-between mb-3`,
          children: [
            jsxs(`div`, {
              className: `flex items-center gap-2`,
              children: [
                jsx(Ht, {
                  size: 20,
                  className: `text-cyan-400`,
                }),
                jsx(`span`, {
                  className: `text-cyan-400 font-mono text-sm uppercase`,
                  children: `GIGS`,
                }),
              ],
            }),
            jsxs(`div`, {
              className: `flex items-center gap-2`,
              children: [
                jsx(`span`, {
                  className: `text-cyan-400 font-mono text-xs tracking-wider`,
                  children: ((e) => e.toString().padStart(3, `0`))(n.length),
                }),
                jsx(`button`, {
                  onClick: u,
                  className: `text-cyan-400 hover:text-cyan-300 transition-colors`,
                  children: jsx(En, {
                    size: 16,
                  }),
                }),
              ],
            }),
          ],
        }),
        jsx(`div`, {
          className: `task-list space-y-2 scrollbar-cyberpunk ${i ? `task-list-glitching` : ``}`,
          style: {
            maxHeight: `240px`,
            overflowY: `auto`,
          },
          children:
            n.length === 0
              ? jsx(`div`, {
                  className: `text-gray-500 font-mono text-sm italic text-center py-4`,
                  children: `No active gigs`,
                })
              : n.map((e) =>
                  jsxs(
                    `div`,
                    {
                      className: `task-item flex items-start gap-2 p-2 bg-gray-800 border transition-colors ${i === e.id ? `task-glitch` : ``} ${o === e.id ? `border-cyan-400 task-pulse` : `border-gray-600 hover:border-cyan-400`}`,
                      children: [
                        jsx(`button`, {
                          onClick: () => f(e.id),
                          className: `text-cyan-400 hover:text-cyan-300 transition-colors mt-0.5 flex-shrink-0`,
                          children:
                            e.completed && i === e.id
                              ? jsx(Rn, {
                                  size: 16,
                                })
                              : jsx(Bn, {
                                  size: 16,
                                }),
                        }),
                        jsx(`textarea`, {
                          value: e.text,
                          onChange: (t) => {
                            d(e.id, t.target.value);
                            p(t.target);
                          },
                          onInput: (e) => p(e.target),
                          onFocus: () => s(e.id),
                          onBlur: () => s(null),
                          className: `flex-1 bg-transparent text-white font-mono text-sm \r
                           focus:outline-none resize-none\r
                           scrollbar-cyberpunk`,
                          style: {
                            minHeight: `16px`,
                            maxHeight: `64px`,
                            lineHeight: `1.4`,
                          },
                          rows: 1,
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
        }),
      ],
    })
  );
};
var RssWidget = ({ config: config, onConfigChange: onConfigChange }) => {
  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(false);
  let [fetchFailed, setFetchFailed] = useState(false);
  let [settingsOpen, setSettingsOpen] = useState(false);
  let [feedUrl, setFeedUrl] = useState(config.feedUrl || ``);
  let [maxItems, setMaxItems] = useState(config.maxItems || 10);
  let saveTimerRef = useRef(void 0);
  let configuredFeedUrl = config.feedUrl || ``;
  let configuredMaxItems = config.maxItems || 10;
  let parseFeed = useCallback(
    (e) => {
      try {
        let t = new DOMParser().parseFromString(e, `text/xml`);
        if (t.querySelector(`parsererror`)) throw Error(`Invalid XML`);
        let n = [];
        return (
          t.querySelectorAll(`item`).forEach((e) => {
            let t = e.querySelector(`title`)?.textContent?.trim();
            let r = e.querySelector(`link`)?.textContent?.trim();
            let i = e.querySelector(`pubDate`)?.textContent?.trim();
            let a = e.querySelector(`description`)?.textContent?.trim();
            t &&
              r &&
              n.push({
                title: t,
                link: r,
                pubDate: i,
                description: a,
              });
          }),
          n.slice(0, configuredMaxItems)
        );
      } catch (e) {
        throw (console.error(`RSS parsing error:`, e), e);
      }
    },
    [configuredMaxItems],
  );
  let fetchFeed = useCallback(async () => {
    if (!configuredFeedUrl) {
      setItems([]);
      return;
    }
    setLoading(true);
    setFetchFailed(false);
    try {
      let feed = new URL(configuredFeedUrl);
      if (feed.protocol !== `https:` && feed.protocol !== `http:`)
        throw Error(`RSS feed URL must use HTTP or HTTPS`);
      let e = `https://api.allorigins.win/raw?url=${encodeURIComponent(feed.href)}`;
      let t = await fetch(e);
      if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
      let n = await t.text();
      let i = parseFeed(n);
      setItems(i);
      setFetchFailed(false);
    } catch (e) {
      console.error(`RSS fetch error:`, e);
      setFetchFailed(true);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [configuredFeedUrl, parseFeed]);
  let saveFeedUrlLater = (e) => {
    saveTimerRef.current && clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      onConfigChange({
        feedUrl: e,
        maxItems: maxItems,
      });
    }, 500);
  };
  let saveMaxItemsLater = (e) => {
    saveTimerRef.current && clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      onConfigChange({
        feedUrl: feedUrl,
        maxItems: e,
      });
    }, 500);
  };
  let changeFeedUrl = (e) => {
    let t = e.target.value;
    setFeedUrl(t);
    saveFeedUrlLater(t);
  };
  let changeMaxItems = (e) => {
    let t = Math.max(1, Math.min(50, parseInt(e.target.value) || 10));
    setMaxItems(t);
    saveMaxItemsLater(t);
  };
  let openFeedItem = (e) => {
    try {
      let itemUrl = new URL(e);
      if (itemUrl.protocol === `https:` || itemUrl.protocol === `http:`)
        window.open(itemUrl.href, `_blank`, `noopener,noreferrer`);
    } catch {
      // Ignore invalid links supplied by an RSS feed.
    }
  };
  return (
    useEffect(() => {
      if (configuredFeedUrl) {
        fetchFeed();
        let e = setInterval(fetchFeed, 9e5);
        return () => clearInterval(e);
      }
    }, [configuredFeedUrl, fetchFeed]),
    useEffect(
      () => () => {
        saveTimerRef.current && clearTimeout(saveTimerRef.current);
      },
      [],
    ),
    jsxs(jsxRuntime.Fragment, {
      children: [
        jsxs(`div`, {
          className: `rss-widget p-4 border-2 border-cyan-400 bg-gray-900 glitch-border`,
          children: [
            jsxs(`div`, {
              className: `flex items-center justify-between mb-3`,
              children: [
                jsxs(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    jsx(An, {
                      size: 20,
                      className: `text-cyan-400`,
                    }),
                    jsx(`span`, {
                      className: `text-cyan-400 font-mono text-sm uppercase`,
                      children: `RSS Feed`,
                    }),
                  ],
                }),
                jsx(`button`, {
                  onClick: () => setSettingsOpen(true),
                  className: `text-cyan-400 hover:text-cyan-300 transition-colors`,
                  children: jsx(Mn, {
                    size: 16,
                  }),
                }),
              ],
            }),
            configuredFeedUrl
              ? loading
                ? jsxs(`div`, {
                    className: `space-y-2`,
                    children: [
                      [...[, , ,]].map((e, t) =>
                        jsx(
                          `div`,
                          {
                            className: `h-6 bg-gray-800 animate-pulse border border-gray-600`,
                          },
                          t,
                        ),
                      ),
                      jsx(`div`, {
                        className: `text-center text-cyan-400 font-mono text-sm mt-2`,
                        children: `Loading feed...`,
                      }),
                    ],
                  })
                : fetchFailed
                  ? jsxs(`div`, {
                      className: `text-center py-4`,
                      children: [
                        jsx(Xn, {
                          size: 24,
                          className: `text-pink-500 mx-auto mb-2`,
                        }),
                        jsx(`div`, {
                          className: `text-pink-500 font-mono text-sm mb-2`,
                          children: `Feed Error`,
                        }),
                        jsxs(`button`, {
                          onClick: () => setSettingsOpen(true),
                          className: `text-yellow-300 hover:text-yellow-200 flex items-center justify-center gap-2 mx-auto font-mono text-xs`,
                          children: [
                            jsx(Mn, {
                              size: 12,
                            }),
                            `Edit URL`,
                          ],
                        }),
                      ],
                    })
                  : items.length === 0
                    ? jsxs(`div`, {
                        className: `text-center py-4`,
                        children: [
                          jsx(`div`, {
                            className: `text-gray-500 font-mono text-sm mb-2`,
                            children: `No items found`,
                          }),
                          jsxs(`button`, {
                            onClick: () => setSettingsOpen(true),
                            className: `text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2 mx-auto font-mono text-xs`,
                            children: [
                              jsx(Mn, {
                                size: 12,
                              }),
                              `Edit URL`,
                            ],
                          }),
                        ],
                      })
                    : jsx(`div`, {
                        className: `space-y-2 max-h-64 overflow-y-auto scrollbar-cyberpunk`,
                        children: items.map((e, t) =>
                          jsxs(
                            `div`,
                            {
                              onClick: () => openFeedItem(e.link),
                              className: `rss-item cursor-pointer flex items-center gap-2 py-1.5 px-2 bg-gray-800 border border-gray-600 hover:border-cyan-400 hover:bg-gray-700 transition-colors group`,
                              children: [
                                jsx(`div`, {
                                  className: `rss-title-container overflow-hidden flex-1`,
                                  children: jsx(`div`, {
                                    className: `rss-title text-white font-mono text-sm whitespace-nowrap`,
                                    style: {
                                      lineHeight: `1.2`,
                                    },
                                    children: e.title,
                                  }),
                                }),
                                jsx(en, {
                                  size: 12,
                                  className: `text-gray-400 group-hover:text-cyan-400 flex-shrink-0 opacity-1 group-hover:opacity-100 transition-opacity duration-200`,
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      })
              : jsx(`div`, {
                  className: `text-center py-8`,
                  children: jsx(`div`, {
                    className: `text-gray-500 font-mono text-sm italic`,
                    children: `No feed configured`,
                  }),
                }),
          ],
        }),
        settingsOpen &&
          jsxs(`div`, {
            className: `fixed inset-0 flex items-center justify-center z-50`,
            children: [
              jsx(`div`, {
                className: `overlay fixed inset-0 bg-black bg-opacity-70`,
                onClick: () => setSettingsOpen(false),
              }),
              jsxs(`div`, {
                className: `modal-content relative bg-gray-900 border-2 border-cyan-400 p-6 max-w-md w-full`,
                children: [
                  jsx(`h3`, {
                    className: `text-2xl text-yellow-300 font-mono mb-4 uppercase`,
                    children: `RSS Feed Settings`,
                  }),
                  jsxs(`div`, {
                    className: `space-y-4`,
                    children: [
                      jsx(`input`, {
                        type: `url`,
                        value: feedUrl,
                        onChange: changeFeedUrl,
                        placeholder: `https://example.com/rss`,
                        className: `w-full p-2 bg-gray-800 border border-cyan-400 text-white font-mono focus:outline-none focus:border-yellow-300`,
                        autoFocus: true,
                      }),
                      jsxs(`div`, {
                        children: [
                          jsx(`label`, {
                            className: `block text-cyan-400 font-mono text-sm mb-2 uppercase`,
                            children: `Max Items (1-50)`,
                          }),
                          jsxs(`div`, {
                            className: `number-input-container`,
                            children: [
                              jsx(`input`, {
                                type: `number`,
                                value: maxItems,
                                onChange: changeMaxItems,
                                min: `1`,
                                max: `50`,
                                className: `w-full p-2 pr-8 bg-gray-800 border border-cyan-400 text-white font-mono focus:outline-none focus:border-yellow-300`,
                              }),
                              jsxs(`div`, {
                                className: `spinner-buttons`,
                                children: [
                                  jsx(`button`, {
                                    type: `button`,
                                    className: `spinner-button`,
                                    onClick: () => {
                                      let e = Math.min(50, maxItems + 1);
                                      setMaxItems(e);
                                      saveMaxItemsLater(e);
                                    },
                                    children: jsx(Bt, {
                                      size: 14,
                                    }),
                                  }),
                                  jsx(`button`, {
                                    type: `button`,
                                    className: `spinner-button`,
                                    onClick: () => {
                                      let e = Math.max(1, maxItems - 1);
                                      setMaxItems(e);
                                      saveMaxItemsLater(e);
                                    },
                                    children: jsx(Rt, {
                                      size: 14,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsx(`div`, {
                    className: `flex gap-2 mt-4`,
                    children: jsx(`button`, {
                      onClick: () => setSettingsOpen(false),
                      className: `flex-1 px-4 py-2 bg-pink-500 text-black font-bold font-mono uppercase`,
                      children: `Close`,
                    }),
                  }),
                ],
              }),
            ],
          }),
      ],
    })
  );
};
var DraggableWidget = ({ widget: e, editing: t, onToggle: n, children: r }) => {
  let {
    attributes: i,
    listeners: a,
    setNodeRef: o,
    transform: s,
    transition: c,
    isDragging: l,
  } = mo({
    id: e.id,
  });
  let u = {
    transform: Or.Transform.toString(s),
    transition: l ? void 0 : c,
    opacity: l ? 0.5 : 1,
  };
  let d = (e) => {
    switch (e) {
      case `weather`:
        return `Weather`;
      case `worldclock`:
        return `World Clock`;
      case `scratchpad`:
        return `Scratch Pad`;
      case `tasklist`:
        return `Gigs`;
      case `rss`:
        return `RSS Feed`;
      default:
        return e;
    }
  };
  return jsxs(`div`, {
    ref: o,
    style: u,
    className: `widget-slot mb-4 ${e.enabled ? `` : `opacity-50`}`,
    children: [
      t &&
        jsxs(`div`, {
          className: `widget-controls flex items-center justify-between mb-2 p-2 bg-gray-800 border border-cyan-400`,
          children: [
            jsxs(`div`, {
              className: `flex items-center gap-2`,
              children: [
                jsx(`div`, {
                  ...i,
                  ...a,
                  className: `cursor-grab active:cursor-grabbing`,
                  children: jsx(un, {
                    size: 16,
                    className: `text-cyan-400`,
                  }),
                }),
                jsx(`span`, {
                  className: `text-white font-mono text-sm uppercase`,
                  children: d(e.type),
                }),
              ],
            }),
            jsx(`button`, {
              onClick: () => n(e.id),
              className: `px-2 py-1 text-xs font-mono uppercase ${e.enabled ? `bg-pink-500 text-black hover:bg-pink-400` : `bg-gray-600 text-white hover:bg-gray-500`}`,
              children: e.enabled ? `ON` : `OFF`,
            }),
          ],
        }),
      e.enabled && r,
    ],
  });
};
var /* Widget panel. */
  Widgets = () => {
    let [widgets, setWidgetsState] = useState([]);
    let [widgetOrder, setWidgetOrderState] = useState([]);
    let [editMode, setEditMode] = useState(false);
    let dragSensors = Wr(
      Ur(Hi, {
        activationConstraint: {
          distance: 8,
        },
      }),
      Ur(X, {
        coordinateGetter: vo,
      }),
    );
    useEffect(() => {
      let e = getWidgets();
      let n = getWidgetOrder();
      setWidgetsState(e);
      setWidgetOrderState(n);
    }, []);
    let handleWidgetDragEnd = (e) => {
      if (!editMode) return;
      let { active: t, over: a } = e;
      if (a && t.id !== a.id) {
        let e = widgetOrder.indexOf(t.id);
        let i = widgetOrder.indexOf(a.id);
        let o = Ja(widgetOrder, e, i);
        setWidgetOrderState(o);
        setWidgetOrder(o);
      }
    };
    let toggleWidget = (n) => {
      let r = widgets.map((e) =>
        e.id === n
          ? {
              ...e,
              enabled: !e.enabled,
            }
          : e,
      );
      setWidgetsState(r);
      setWidgets(r);
    };
    let l = (n, r) => {
      let i = widgets.map((e) =>
        e.id === n
          ? {
              ...e,
              config: {
                ...e.config,
                ...r,
              },
            }
          : e,
      );
      setWidgetsState(i);
      setWidgets(i);
    };
    let u = () => {
      setEditMode(false);
    };
    let d = widgetOrder.map((t) => widgets.find((e) => e.id === t)).filter(Boolean);
    let f = widgets.some((e) => e.enabled);
    let p = (e) => {
      switch (e.type) {
        case `weather`:
          return jsx(WeatherWidget, {
            config: e.config,
            onConfigChange: (t) => l(e.id, t),
          });
        case `worldclock`:
          return jsx(WorldClockWidget, {
            config: e.config,
            onConfigChange: (t) => l(e.id, t),
          });
        case `scratchpad`:
          return jsx(ScratchpadWidget, {
            config: e.config,
            onConfigChange: (t) => l(e.id, t),
          });
        case `tasklist`:
          return jsx(TaskListWidget, {
            config: e.config,
            onConfigChange: (t) => l(e.id, t),
          });
        case `rss`:
          return jsx(RssWidget, {
            config: e.config,
            onConfigChange: (t) => l(e.id, t),
          });
        default:
          return null;
      }
    };
    return jsxs(`div`, {
      className: `widget-container`,
      children: [
        jsxs(`div`, {
          className: `flex justify-between items-center mb-4`,
          children: [
            (f || editMode) &&
              jsx(`h3`, {
                className: `text-lg text-yellow-300 font-mono uppercase tracking-wide`,
                children: jsx(`span`, {
                  className: `hover-glitch`,
                  "data-text": `WIDGETS`,
                  children: `WIDGETS`,
                }),
              }),
            jsx(`div`, {
              className: `controls ml-auto`,
              children: editMode
                ? jsx(`button`, {
                    onClick: u,
                    className: `text-cyan-400 hover:text-cyan-300 px-3 py-1 border border-cyan-400 hover:border-cyan-300 font-mono text-sm`,
                    children: `SAVE`,
                  })
                : jsx(`button`, {
                    onClick: () => setEditMode(true),
                    className: `text-pink-500 hover:text-pink-400`,
                    title: `Widget Settings`,
                    children: jsx(Mn, {
                      size: 20,
                    }),
                  }),
            }),
          ],
        }),
        jsx(za, {
          sensors: dragSensors,
          collisionDetection: Qr,
          onDragEnd: handleWidgetDragEnd,
          children: jsx(ao, {
            items: widgetOrder,
            strategy: to,
            children: jsx(`div`, {
              className: `widgets-list`,
              children: d.map((e) =>
                jsx(
                  DraggableWidget,
                  {
                    widget: e,
                    editing: editMode,
                    onToggle: toggleWidget,
                    onConfigChange: l,
                    children: p(e),
                  },
                  e.id,
                ),
              ),
            }),
          }),
        }),
      ],
    });
  };
// #endregion app/12-widgets.js

;
// #region app/13-settings.js
/* Settings panel and color helpers. Shared scope; build with node scripts/build.cjs. */

var Io = (e) => {
  let t = e.replace(`#`, ``);
  let n =
    t.length <= 4
      ? t
          .split(``)
          .map((e) => e + e)
          .join(``)
      : t;
  let r = parseInt(n.slice(0, 2), 16) / 255;
  let i = parseInt(n.slice(2, 4), 16) / 255;
  let a = parseInt(n.slice(4, 6), 16) / 255;
  let o = Math.max(r, i, a);
  let s = o - Math.min(r, i, a);
  let c = 0;
  return (
    s &&
      (c =
        o === r
          ? 60 * (((i - a) / s) % 6)
          : o === i
            ? 60 * ((a - r) / s + 2)
            : 60 * ((r - i) / s + 4)),
    [c < 0 ? c + 360 : c, o ? s / o : 0, o]
  );
};
var Lo = (e, t, n) => {
  let r = n * t;
  let i = r * (1 - Math.abs(((e / 60) % 2) - 1));
  let a = n - r;
  return `#${(e < 60
    ? [r, i, 0]
    : e < 120
      ? [i, r, 0]
      : e < 180
        ? [0, r, i]
        : e < 240
          ? [0, i, r]
          : e < 300
            ? [i, 0, r]
            : [r, 0, i]
  )
    .map((e) =>
      Math.round((e + a) * 255)
        .toString(16)
        .padStart(2, `0`),
    )
    .join(``)}`;
};
var DraggableSearchEngine = ({ engine: e, onToggle: t, onDelete: n }) => {
  let {
    attributes: r,
    listeners: i,
    setNodeRef: a,
    transform: o,
    transition: s,
    isDragging: c,
  } = mo({
    id: e.id,
  });
  let l = {
    transform: Or.Transform.toString(o),
    transition: c ? void 0 : s,
    opacity: c ? 0.5 : 1,
  };
  return jsx(`div`, {
    ref: a,
    style: l,
    className: `bg-gray-800 p-2`,
    children: jsxs(`div`, {
      className: `flex items-center justify-between gap-2`,
      children: [
        jsxs(`div`, {
          className: `flex items-center gap-2 min-w-0`,
          children: [
            jsx(`div`, {
              ...r,
              ...i,
              className: `cursor-grab active:cursor-grabbing shrink-0`,
              "aria-label": `Drag ${e.name}`,
              children: jsx(ln, {
                size: 16,
                className: `text-cyan-400`,
              }),
            }),
            jsx(`span`, {
              className: `font-mono text-xs uppercase truncate ${e.visible ? `text-white` : `text-gray-500 line-through`}`,
              children: e.name,
            }),
          ],
        }),
        jsxs(`div`, {
          className: `flex items-center gap-1 shrink-0`,
          children: [
            jsx(`button`, {
              type: `button`,
              onClick: () => t(e),
              disabled: e.id === "default",
              className: `p-1 text-cyan-400 hover:text-cyan-300 disabled:text-gray-600`,
              "aria-label": `${e.visible ? `Hide` : `Show`} ${e.name}`,
              children: e.visible
                ? jsx(q, {
                    size: 14,
                  })
                : jsx(tn, {
                    size: 14,
                  }),
            }),
            e.isCustom &&
              jsx(`button`, {
                type: `button`,
                onClick: () => n(e),
                className: `p-1 text-pink-500 hover:text-pink-400`,
                "aria-label": `Delete ${e.name}`,
                children: jsx(Wn, {
                  size: 14,
                }),
              }),
          ],
        }),
      ],
    }),
  });
};
var /* Main settings panel. */
  SettingsPanel = ({
    currentBackground: currentBackground,
    onBackgroundChange: onBackgroundChange,
    currentColorTheme: currentColorTheme,
    onColorThemeChange: onColorThemeChange,
    onDisplayPreferencesChange: onDisplayPreferencesChange,
    onElementGlitch: onElementGlitch,
    currentScanLinesMode: currentScanLinesMode,
    onScanLinesModeChange: onScanLinesModeChange,
    currentTabTitle: currentTabTitle,
    currentFont: currentFont,
    customFontName: customFontName,
    currentTabFavicon: currentTabFavicon,
    onTabFaviconChange: onTabFaviconChange,
    onTabTitleChange: onTabTitleChange,
    onFontChange: onFontChange,
    onCustomFontUpload: onCustomFontUpload,
    onClearCustomFont: onClearCustomFont,
    currentBackgroundBrightness: currentBackgroundBrightness,
    onBackgroundBrightnessChange: onBackgroundBrightnessChange,
  }) => {
    let [y, x] = useState(false);
    let [S, C] = useState(false);
    let [w, ee] = useState(``);
    let [E, D] = useState(getDisplayPreferences());
    let [O, k] = useState(false);
    let [te, A] = useState(false);
    let [ne, j] = useState(false);
    let [M, re] = useState(false);
    let [N, ie] = useState(false);
    let [P, ae] = useState(false);
    let [F, oe] = useState(false);
    let [se, ce] = useState(false);
    let [I, le] = useState(false);
    let [L, ue] = useState(false);
    let [de, fe] = useState(false);
    let [R, pe] = useState(false);
    let [me, he] = useState(`image`);
    let [ge, _e] = useState(
      /^#[\da-f]{3,4}(?:[\da-f]{3,4})?$/i.test(currentBackground) ? currentBackground : `#003333`,
    );
    let [ve, ye] = useState(false);
    let [z, B] = useState(() => getSearchEngines().sort((e, t) => e.order - t.order));
    let [V, be] = useState(``);
    let [xe, Se] = useState(``);
    let [Ce, we] = useState(`Search the Net...`);
    let [Te, Ee] = useState(``);
    let De = Wr(
      Ur(Hi, {
        activationConstraint: {
          distance: 8,
        },
      }),
      Ur(X, {
        coordinateGetter: vo,
      }),
    );
    let [Oe, ke] = useState(180);
    let [Me, Ne] = useState(80);
    let Pe = useRef(null);
    let Fe = useRef(null);
    let Ie = useRef(null);
    let Le = useRef(null);
    let H = useRef(null);
    let Re = async (e) => {
      let t = e.target.files?.[0];
      if (((e.target.value = ``), t)) {
        ae(true);
        try {
          await onCustomFontUpload(t);
        } catch (e) {
          console.error(`Error uploading custom font:`, e);
          alert(`Failed to upload the font. Please choose a valid WOFF, WOFF2, TTF, or OTF file.`);
        } finally {
          ae(false);
        }
      }
    };
    let Ve = (e) => /^#[\da-f]{3,4}(?:[\da-f]{3,4})?$/i.test(e);
    useEffect(() => {
      if (Ve(currentBackground)) {
        _e(currentBackground);
        let [t, , n] = Io(currentBackground);
        ke(t);
        Ne(Math.round((1 - n) * 100));
      }
    }, [currentBackground]);
    let He = (e) => {
      let n = e.trim().startsWith(`#`) ? e.trim() : `#${e.trim()}`;
      Ve(n) && (_e(n), onBackgroundChange(n));
    };
    let Ue = (e, t) => {
      ke(e);
      Ne(t);
      He(Lo(e, 1, 1 - t / 100));
    };
    let We = {
      colors: [
        {
          id: `dark`,
          value: `#000c14`,
          label: `Dark`,
        },
        {
          id: `cyber-pink`,
          value: `#2d0a22`,
          label: `Cyber Pink`,
        },
        {
          id: `neo-blue`,
          value: `#0a1a2d`,
          label: `Neo Blue`,
        },
        {
          id: `matrix-green`,
          value: `#0a2d0a`,
          label: `Matrix Green`,
        },
      ],
      images: [
        {
          id: `city-night`,
          value: `https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=1600`,
          label: `City Night`,
        },
        {
          id: `neon-city`,
          value: `https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1600`,
          label: `Neon City`,
        },
        {
          id: `cyber-district`,
          value: `https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1600`,
          label: `Cyber District`,
        },
        {
          id: `data-center`,
          value: `https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1600`,
          label: `Data Center`,
        },
      ],
    };
    let Ge = [
      {
        id: `cyberpunk2077`,
        label: `Cyberpunk 2077`,
      },
      {
        id: `edgerunners`,
        label: `Edgerunners`,
      },
      {
        id: `cyberninja`,
        label: `Cyber Ninja`,
      },
    ];
    let Ke = [
      {
        id: `default`,
        label: `Default`,
      },
      {
        id: `belowUI`,
        label: `Below UI`,
      },
      {
        id: `none`,
        label: `None`,
      },
    ];
    let qe = [
      {
        key: `showGreeting`,
        label: `Greeting`,
      },
      {
        key: `showTime`,
        label: `Time`,
      },
      {
        key: `showDate`,
        label: `Date`,
      },
      {
        key: `showSearchBar`,
        label: `Search Bar`,
      },
      {
        key: `showQuotes`,
        label: `Quotes`,
      },
      {
        key: `showMonitoring`,
        label: `System Monitor`,
      },
      {
        key: `showNetlinks`,
        label: `Netlinks`,
      },
      {
        key: `showWidgets`,
        label: `Widgets`,
      },
    ];
    let Je = (e) => {
      if (E[e])
        (onElementGlitch(e),
          setTimeout(() => {
            let t = {
              ...E,
              [e]: false,
            };
            D(t);
            setDisplayPreferences(t);
            onDisplayPreferencesChange();
            onElementGlitch(null);
          }, 100));
      else {
        let t = {
          ...E,
          [e]: true,
        };
        D(t);
        setDisplayPreferences(t);
        onDisplayPreferencesChange();
        setTimeout(() => {
          onElementGlitch(e);
          setTimeout(() => {
            onElementGlitch(null);
          }, 100);
        }, 10);
      }
    };
    let Ye = () => {
      ee(``);
      C(false);
    };
    let Xe = async (e, n) => {
      let r = e.target.files?.[0];
      if (r)
        try {
          await saveBackgroundMedia(r, n);
          setBackgroundMediaType(n);
          incrementBackgroundMediaVersion();
          onBackgroundChange(`cached:` + n);
          C(false);
        } catch (e) {
          console.error(`Error uploading file:`, e);
          alert(`Failed to upload file. Please try a smaller file or check available storage.`);
        }
    };
    let Qe = async () => {
      await clearBackgroundMedia();
      onBackgroundChange(We.images[1].value);
    };
    let et = () =>
      ![...We.colors.map((e) => e.value), ...We.images.map((e) => e.value)].includes(
        currentBackground,
      );
    let rt = (e) => FAVICON_OPTIONS.find((t) => t.name === e)?.icon || FAVICON_OPTIONS[0].icon;
    let it = (e) => {
      let t = e.map((e, t) => ({
        ...e,
        order: t,
      }));
      B(t);
      setSearchEngines(t);
    };
    let at = (e) => {
      let { active: t, over: n } = e;
      if (!n || t.id === n.id) return;
      let r = z.findIndex((e) => e.id === t.id);
      let i = z.findIndex((e) => e.id === n.id);
      r < 0 || i < 0 || it(Ja(z, r, i));
    };
    let ot = (e) => {
      e.id !== "default" &&
        it(
          z.map((t) =>
            t.id === e.id
              ? {
                  ...t,
                  visible: !t.visible,
                }
              : t,
          ),
        );
    };
    let st = (e) => {
      e.isCustom && it(z.filter((t) => t.id !== e.id));
    };
    return (
      useEffect(() => {
        if (!y) return;
        let e = (e) => {
          Pe.current &&
            !Pe.current.contains(e.target) &&
            Fe.current &&
            !Fe.current.contains(e.target) &&
            (x(false), C(false), ee(``));
        };
        return (
          document.addEventListener(`mousedown`, e),
          () => {
            document.removeEventListener(`mousedown`, e);
          }
        );
      }, [y]),
      jsxs(`div`, {
        className: `fixed bottom-4 right-4 button-layer`,
        children: [
          jsx(`button`, {
            ref: Fe,
            onClick: (e) => {
              e.stopPropagation();
              x(!y);
            },
            className: `bg-gray-900 border-2 border-cyan-400 p-2 text-cyan-400 hover:text-cyan-300 hover:border-cyan-300`,
            children: jsx(bn, {
              size: 24,
            }),
          }),
          y &&
            jsx(`div`, {
              ref: Pe,
              className: `terminal-display-popup absolute bottom-full right-0 mb-2 w-64 bg-gray-900 border-2 border-pink-500 p-4`,
              children: jsxs(`div`, {
                className: `space-y-4`,
                children: [
                  jsx(`h3`, {
                    className: `text-yellow-300 font-mono mb-4 uppercase text-center`,
                    children: `Terminal Display`,
                  }),
                  jsxs(`div`, {
                    children: [
                      jsxs(`button`, {
                        onClick: () => k(!O),
                        className: `w-full flex items-center justify-between text-cyan-400 font-mono mb-2 text-sm uppercase hover:text-cyan-300`,
                        children: [
                          jsx(`span`, {
                            children: `Display Elements`,
                          }),
                          O
                            ? jsx(Rt, {
                                size: 16,
                              })
                            : jsx(zt, {
                                size: 16,
                              }),
                        ],
                      }),
                      O &&
                        jsx(`div`, {
                          className: `grid grid-cols-1 gap-2`,
                          children: qe.map((e) =>
                            jsxs(
                              `button`,
                              {
                                onClick: () => Je(e.key),
                                className: `p-2 font-mono text-xs uppercase transition-colors flex items-center justify-between ${E[e.key] ? `bg-pink-500 text-black` : `bg-gray-800 text-white hover:bg-gray-700`}`,
                                children: [
                                  jsx(`span`, {
                                    children: e.label,
                                  }),
                                  E[e.key]
                                    ? jsx(q, {
                                        size: 16,
                                      })
                                    : jsx(tn, {
                                        size: 16,
                                      }),
                                ],
                              },
                              e.key,
                            ),
                          ),
                        }),
                    ],
                  }),
                  jsxs(`div`, {
                    children: [
                      jsxs(`button`, {
                        onClick: () => A(!te),
                        className: `w-full flex items-center justify-between text-cyan-400 font-mono mb-2 text-sm uppercase hover:text-cyan-300`,
                        children: [
                          jsx(`span`, {
                            children: `Scan Lines`,
                          }),
                          te
                            ? jsx(Rt, {
                                size: 16,
                              })
                            : jsx(zt, {
                                size: 16,
                              }),
                        ],
                      }),
                      te &&
                        jsx(`div`, {
                          className: `grid grid-cols-1 gap-2`,
                          children: Ke.map((e) =>
                            jsx(
                              `button`,
                              {
                                onClick: () => onScanLinesModeChange(e.id),
                                className: `p-2 font-mono text-xs uppercase transition-colors ${currentScanLinesMode === e.id ? `bg-pink-500 text-black` : `bg-gray-800 text-white hover:bg-gray-700`}`,
                                children: e.label,
                              },
                              e.id,
                            ),
                          ),
                        }),
                    ],
                  }),
                  jsxs(`div`, {
                    children: [
                      jsxs(`button`, {
                        onClick: () => j(!ne),
                        className: `w-full flex items-center justify-between text-cyan-400 font-mono mb-2 text-sm uppercase hover:text-cyan-300`,
                        children: [
                          jsx(`span`, {
                            children: `Tab Title`,
                          }),
                          ne
                            ? jsx(Rt, {
                                size: 16,
                              })
                            : jsx(zt, {
                                size: 16,
                              }),
                        ],
                      }),
                      ne &&
                        jsxs(`div`, {
                          className: `mt-2 space-y-2`,
                          children: [
                            jsx(`input`, {
                              type: `text`,
                              value: currentTabTitle,
                              onChange: (e) => onTabTitleChange(e.target.value),
                              placeholder: `Enter tab title...`,
                              className: `w-full bg-gray-800 text-white border border-cyan-400 p-2 font-mono text-sm focus:outline-none focus:border-cyan-300`,
                            }),
                            jsxs(`div`, {
                              className: `relative`,
                              children: [
                                jsxs(`button`, {
                                  type: `button`,
                                  onClick: () => ce(!se),
                                  className: `w-full p-2 bg-gray-800 border border-cyan-400 text-white font-mono flex items-center justify-between hover:bg-gray-700`,
                                  children: [
                                    jsx(`span`, {
                                      children: `Tab Favicon`,
                                    }),
                                    React.createElement(rt(currentTabFavicon), {
                                      size: 20,
                                    }),
                                  ],
                                }),
                                se &&
                                  jsx(`div`, {
                                    className: `absolute top-full left-0 z-50 w-full mt-2 p-2 bg-gray-900 border-2 border-pink-500`,
                                    children: jsx(`div`, {
                                      className: `max-h-48 overflow-y-auto overflow-x-hidden scrollbar-cyberpunk`,
                                      children: jsx(`div`, {
                                        className: `grid grid-cols-4 gap-2 pr-2`,
                                        children: FAVICON_OPTIONS.map((e) =>
                                          jsx(
                                            `button`,
                                            {
                                              type: `button`,
                                              onClick: () => {
                                                onTabFaviconChange(e.name);
                                                ce(false);
                                              },
                                              className: `p-2 hover:bg-gray-800 rounded flex flex-col items-center gap-1 ${currentTabFavicon === e.name ? `bg-gray-800 border border-cyan-400` : ``}`,
                                              children: React.createElement(e.icon, {
                                                size: 20,
                                                className: `text-cyan-400`,
                                              }),
                                            },
                                            e.name,
                                          ),
                                        ),
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  jsxs(`div`, {
                    children: [
                      jsxs(`button`, {
                        onClick: () => re(!M),
                        className: `w-full flex items-center justify-between text-cyan-400 font-mono mb-2 text-sm uppercase hover:text-cyan-300`,
                        children: [
                          jsx(`span`, {
                            children: `Font`,
                          }),
                          M
                            ? jsx(Rt, {
                                size: 16,
                              })
                            : jsx(zt, {
                                size: 16,
                              }),
                        ],
                      }),
                      M &&
                        jsxs(`div`, {
                          className: `relative mt-2`,
                          children: [
                            jsxs(`button`, {
                              type: `button`,
                              onClick: () => ie(!N),
                              className: `w-full flex items-center justify-between px-4 py-2 bg-gray-900 border-2 border-cyan-400 text-cyan-400 hover:bg-gray-800 font-mono text-sm cursor-pointer`,
                              "aria-expanded": N,
                              "aria-haspopup": `listbox`,
                              children: [
                                jsx(`span`, {
                                  children:
                                    currentFont === `custom`
                                      ? `Custom Font`
                                      : FONT_OPTIONS.find((e) => e.id === currentFont)?.label ||
                                        `Default`,
                                }),
                                N
                                  ? jsx(Rt, {
                                      size: 16,
                                    })
                                  : jsx(zt, {
                                      size: 16,
                                    }),
                              ],
                            }),
                            N &&
                              jsx(`div`, {
                                className: `absolute top-full left-0 z-50 w-full bg-gray-900 border-2 border-pink-500 mt-1 max-h-48 overflow-y-auto scrollbar-cyberpunk`,
                                role: `listbox`,
                                "aria-label": `Font options`,
                                children: FONT_OPTIONS.map((e) =>
                                  jsx(
                                    `button`,
                                    {
                                      type: `button`,
                                      role: `option`,
                                      "aria-selected": e.id === currentFont,
                                      onClick: () => {
                                        onFontChange(e.id);
                                        ie(false);
                                      },
                                      className: `w-full px-4 py-2 text-left hover:bg-gray-800 cursor-pointer font-mono text-sm ${e.id === currentFont ? `text-yellow-300` : `text-white`}`,
                                      children: e.label,
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                            jsx(`input`, {
                              ref: H,
                              type: `file`,
                              accept: `.woff,.woff2,.ttf,.otf,font/woff,font/woff2,font/ttf,font/otf`,
                              onChange: Re,
                              className: `hidden`,
                            }),
                            jsxs(`button`, {
                              type: `button`,
                              onClick: () => H.current?.click(),
                              disabled: P,
                              className: `w-full mt-2 p-2 bg-gray-800 border border-pink-500 text-pink-500 hover:bg-gray-700 hover:text-pink-400 disabled:opacity-50 font-mono text-xs uppercase flex items-center justify-center gap-2 cursor-pointer`,
                              children: [
                                jsx(qn, {
                                  size: 16,
                                }),
                                P ? `Loading Font...` : `Upload Custom Font`,
                              ],
                            }),
                            customFontName &&
                              currentFont === `custom` &&
                              jsx(`button`, {
                                type: `button`,
                                onClick: () => onClearCustomFont(),
                                className: `w-full mt-2 p-2 bg-gray-800 border border-cyan-400 text-cyan-400 hover:bg-gray-700 hover:text-cyan-300 font-mono text-xs uppercase flex items-center justify-center gap-2 cursor-pointer`,
                                children: `Clear Custom Font`,
                              }),
                          ],
                        }),
                    ],
                  }),
                  jsxs(`div`, {
                    children: [
                      jsxs(`button`, {
                        onClick: () => oe(!F),
                        className: `w-full flex items-center justify-between text-cyan-400 font-mono mb-2 text-sm uppercase hover:text-cyan-300`,
                        children: [
                          jsx(`span`, {
                            children: `Search Engine`,
                          }),
                          F
                            ? jsx(Rt, {
                                size: 16,
                              })
                            : jsx(zt, {
                                size: 16,
                              }),
                        ],
                      }),
                      F &&
                        jsxs(`div`, {
                          className: `space-y-2`,
                          children: [
                            jsx(za, {
                              sensors: De,
                              collisionDetection: Qr,
                              onDragEnd: at,
                              children: jsx(ao, {
                                items: z.map((e) => e.id),
                                strategy: to,
                                children: jsx(`div`, {
                                  className: `space-y-2`,
                                  children: z.map((e) =>
                                    jsx(
                                      DraggableSearchEngine,
                                      {
                                        engine: e,
                                        onToggle: ot,
                                        onDelete: st,
                                      },
                                      e.id,
                                    ),
                                  ),
                                }),
                              }),
                            }),
                            jsxs(`form`, {
                              onSubmit: (e) => {
                                e.preventDefault();
                                let t = V.trim();
                                let n = xe.trim();
                                if (!t || !n) {
                                  Ee(`ENGINE NAME AND URL ARE REQUIRED`);
                                  return;
                                }
                                if (t.length < 4 || t.length > 8) {
                                  Ee(`ENGINE NAME MUST BE 4 TO 8 CHARACTERS`);
                                  return;
                                }
                                let r = {
                                  id: `custom-${Date.now()}`,
                                  name: t,
                                  url: n,
                                  placeholder: Ce.trim() || `Search the Net...`,
                                  order: z.length,
                                  visible: true,
                                  isCustom: true,
                                };
                                it([...z, r]);
                                be(``);
                                Se(``);
                                Ee(``);
                              },
                              noValidate: true,
                              className: `border border-cyan-400 p-2 space-y-2`,
                              children: [
                                jsx(`div`, {
                                  className: `text-cyan-400 font-mono text-xs uppercase`,
                                  children: `Add Custom Engine`,
                                }),
                                jsx(`input`, {
                                  type: `text`,
                                  value: V,
                                  onChange: (e) => {
                                    be(e.target.value);
                                    Ee(``);
                                  },
                                  placeholder: `Name`,
                                  minLength: 4,
                                  maxLength: 8,
                                  "aria-invalid": !!Te,
                                  className: `w-full bg-gray-900 border border-cyan-400 p-2 text-white font-mono text-xs focus:outline-none focus:border-yellow-300`,
                                  required: true,
                                }),
                                jsx(`input`, {
                                  type: `text`,
                                  value: xe,
                                  onChange: (e) => {
                                    Se(e.target.value);
                                    Ee(``);
                                  },
                                  placeholder: `https://example.com/search`,
                                  "aria-invalid": !!Te,
                                  className: `w-full bg-gray-900 border border-cyan-400 p-2 text-white font-mono text-xs focus:outline-none focus:border-yellow-300`,
                                  required: true,
                                }),
                                jsx(`input`, {
                                  type: `text`,
                                  value: Ce,
                                  onChange: (e) => we(e.target.value),
                                  placeholder: `Search the Net...`,
                                  className: `w-full bg-gray-900 border border-cyan-400 p-2 text-white font-mono text-xs focus:outline-none focus:border-yellow-300`,
                                }),
                                Te &&
                                  jsx(`div`, {
                                    className: `cyberpunk-error-tooltip`,
                                    role: `alert`,
                                    "aria-live": `polite`,
                                    children: Te,
                                  }),
                                jsxs(`button`, {
                                  type: `submit`,
                                  className: `w-full p-2 bg-cyan-400 text-black font-mono text-xs uppercase hover:bg-cyan-300 flex items-center justify-center gap-2`,
                                  children: [
                                    jsx(En, {
                                      size: 14,
                                    }),
                                    `Add Engine`,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  jsxs(`div`, {
                    children: [
                      jsxs(`button`, {
                        onClick: () => le(!I),
                        className: `w-full flex items-center justify-between text-cyan-400 font-mono mb-2 text-sm uppercase hover:text-cyan-300`,
                        children: [
                          jsx(`span`, {
                            children: `Color Theme`,
                          }),
                          I
                            ? jsx(Rt, {
                                size: 16,
                              })
                            : jsx(zt, {
                                size: 16,
                              }),
                        ],
                      }),
                      I &&
                        jsx(`div`, {
                          className: `grid grid-cols-1 gap-2`,
                          children: Ge.map((e) =>
                            jsx(
                              `button`,
                              {
                                onClick: () => onColorThemeChange(e.id),
                                className: `p-2 font-mono text-xs uppercase transition-colors ${currentColorTheme === e.id ? `bg-pink-500 text-black` : `bg-gray-800 text-white hover:bg-gray-700`}`,
                                children: e.label,
                              },
                              e.id,
                            ),
                          ),
                        }),
                    ],
                  }),
                  jsxs(`div`, {
                    children: [
                      jsxs(`button`, {
                        onClick: () => ue(!L),
                        className: `w-full flex items-center justify-between text-cyan-400 font-mono mb-2 text-sm uppercase hover:text-cyan-300`,
                        children: [
                          jsx(`span`, {
                            children: `Solid Colors`,
                          }),
                          L
                            ? jsx(Rt, {
                                size: 16,
                              })
                            : jsx(zt, {
                                size: 16,
                              }),
                        ],
                      }),
                      L &&
                        jsxs(`div`, {
                          className: `space-y-3`,
                          children: [
                            jsx(`div`, {
                              className: `grid grid-cols-2 gap-2`,
                              children: We.colors.map((n) =>
                                jsx(
                                  `button`,
                                  {
                                    onClick: () => onBackgroundChange(n.value),
                                    className: `p-2 font-mono text-xs uppercase transition-colors ${currentBackground === n.value ? `bg-pink-500 text-black` : `bg-gray-800 text-white hover:bg-gray-700`}`,
                                    children: n.label,
                                  },
                                  n.id,
                                ),
                              ),
                            }),
                            jsxs(`div`, {
                              className: `custom-color-picker`,
                              children: [
                                jsxs(`div`, {
                                  className: `flex items-center justify-between`,
                                  children: [
                                    jsx(`span`, {
                                      className: `text-cyan-400 font-mono text-xs uppercase`,
                                      children: `Custom Color`,
                                    }),
                                    jsx(`button`, {
                                      type: `button`,
                                      onClick: () => ye(!ve),
                                      className: `custom-color-swatch`,
                                      style: {
                                        backgroundColor: Ve(ge) ? ge : `#00ffff`,
                                      },
                                      "aria-label": `${ve ? `Close` : `Open`} custom color picker`,
                                    }),
                                  ],
                                }),
                                ve &&
                                  jsxs(`div`, {
                                    className: `cyber-color-panel`,
                                    children: [
                                      jsxs(`div`, {
                                        className: `space-y-3`,
                                        children: [
                                          jsxs(`label`, {
                                            className: `cyber-slider-label`,
                                            children: [
                                              jsx(`span`, {
                                                children: `Color Spectrum`,
                                              }),
                                              jsx(`input`, {
                                                type: `range`,
                                                min: 0,
                                                max: 360,
                                                value: Oe,
                                                onChange: (e) => Ue(Number(e.target.value), Me),
                                                className: `cyber-color-slider`,
                                                "aria-label": `Color spectrum`,
                                              }),
                                            ],
                                          }),
                                          jsxs(`label`, {
                                            className: `cyber-slider-label`,
                                            children: [
                                              jsxs(`span`, {
                                                className: `flex justify-between`,
                                                children: [
                                                  jsx(`span`, {
                                                    children: `Darkness`,
                                                  }),
                                                  jsxs(`span`, {
                                                    children: [Me, `%`],
                                                  }),
                                                ],
                                              }),
                                              jsx(`input`, {
                                                type: `range`,
                                                min: 0,
                                                max: 100,
                                                value: Me,
                                                onChange: (e) => Ue(Oe, Number(e.target.value)),
                                                className: `cyber-darkness-slider`,
                                                "aria-label": `Color darkness`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxs(`div`, {
                                        className: `mt-3 flex items-center gap-2`,
                                        children: [
                                          jsx(`input`, {
                                            id: `custom-background-color`,
                                            type: `text`,
                                            value: ge,
                                            onChange: (e) => _e(e.target.value),
                                            onBlur: () => He(ge),
                                            onKeyDown: (e) => {
                                              e.key === `Enter` && He(ge);
                                            },
                                            placeholder: `#00ffff`,
                                            maxLength: 9,
                                            spellCheck: false,
                                            className: `w-full bg-gray-800 border border-cyan-400 p-2 text-white font-mono text-xs uppercase focus:outline-none focus:border-yellow-300`,
                                            "aria-label": `Custom background hex code`,
                                          }),
                                          jsx(`button`, {
                                            type: `button`,
                                            onClick: () => ye(false),
                                            className: `p-2 text-cyan-400 hover:text-pink-500`,
                                            "aria-label": `Close custom color picker`,
                                            children: jsx(Qn, {
                                              size: 16,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                jsx(`div`, {
                                  className: `mt-2 h-1 w-full`,
                                  style: {
                                    backgroundColor: Ve(ge) ? ge : `#00ffff`,
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  jsxs(`div`, {
                    children: [
                      jsxs(`button`, {
                        onClick: () => fe(!de),
                        className: `w-full flex items-center justify-between text-cyan-400 font-mono mb-2 text-sm uppercase hover:text-cyan-300`,
                        children: [
                          jsx(`span`, {
                            children: `Background Images`,
                          }),
                          de
                            ? jsx(Rt, {
                                size: 16,
                              })
                            : jsx(zt, {
                                size: 16,
                              }),
                        ],
                      }),
                      de &&
                        jsx(`div`, {
                          className: `grid grid-cols-2 gap-2`,
                          children: We.images.map((n) =>
                            jsx(
                              `button`,
                              {
                                onClick: () => onBackgroundChange(n.value),
                                className: `p-2 font-mono text-xs uppercase transition-colors ${currentBackground === n.value ? `bg-pink-500 text-black` : `bg-gray-800 text-white hover:bg-gray-700`}`,
                                children: n.label,
                              },
                              n.id,
                            ),
                          ),
                        }),
                    ],
                  }),
                  jsxs(`div`, {
                    children: [
                      jsxs(`button`, {
                        onClick: () => pe(!R),
                        className: `w-full flex items-center justify-between text-cyan-400 font-mono mb-2 text-sm uppercase hover:text-cyan-300`,
                        children: [
                          jsxs(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              jsx(`span`, {
                                children: `Custom Background`,
                              }),
                              et() &&
                                jsx(`span`, {
                                  className: `text-pink-500 font-mono text-xs uppercase`,
                                  children: `Active`,
                                }),
                            ],
                          }),
                          R
                            ? jsx(Rt, {
                                size: 16,
                              })
                            : jsx(zt, {
                                size: 16,
                              }),
                        ],
                      }),
                      R &&
                        jsxs(`div`, {
                          className: `space-y-3`,
                          children: [
                            jsxs(`div`, {
                              className: `flex gap-2`,
                              children: [
                                jsxs(`button`, {
                                  onClick: () => he(`image`),
                                  className: `flex-1 p-2 font-mono text-xs uppercase transition-colors flex items-center justify-center gap-1 ${me === `image` ? `bg-cyan-400 text-black` : `bg-gray-800 text-white hover:bg-gray-700`}`,
                                  children: [
                                    jsx(mn, {
                                      size: 14,
                                    }),
                                    `Image`,
                                  ],
                                }),
                                jsxs(`button`, {
                                  onClick: () => he(`video`),
                                  className: `flex-1 p-2 font-mono text-xs uppercase transition-colors flex items-center justify-center gap-1 ${me === `video` ? `bg-cyan-400 text-black` : `bg-gray-800 text-white hover:bg-gray-700`}`,
                                  children: [
                                    jsx(Jn, {
                                      size: 14,
                                    }),
                                    `Video`,
                                  ],
                                }),
                              ],
                            }),
                            jsxs(`div`, {
                              className: `space-y-1`,
                              children: [
                                jsxs(`div`, {
                                  className: `flex items-center justify-between`,
                                  children: [
                                    jsx(`span`, {
                                      className: `text-cyan-400 font-mono text-xs uppercase`,
                                      children: `Boost Brightness`,
                                    }),
                                    jsxs(`span`, {
                                      className: `text-yellow-300 font-mono text-xs`,
                                      children: [currentBackgroundBrightness, `%`],
                                    }),
                                  ],
                                }),
                                jsx(`input`, {
                                  type: `range`,
                                  min: 0,
                                  max: 200,
                                  step: 5,
                                  value: currentBackgroundBrightness,
                                  onChange: (e) =>
                                    onBackgroundBrightnessChange(parseInt(e.target.value, 10)),
                                  onDoubleClick: () => onBackgroundBrightnessChange(100),
                                  className: `brightness-slider`,
                                  style: {
                                    "--fill": `${(currentBackgroundBrightness / 200) * 100}%`,
                                  },
                                  "aria-label": `Boost background brightness`,
                                }),
                              ],
                            }),
                            S
                              ? jsxs(`div`, {
                                  className: `space-y-2`,
                                  children: [
                                    jsx(`input`, {
                                      type: `url`,
                                      value: w,
                                      onChange: (e) => ee(e.target.value),
                                      placeholder:
                                        me === `image`
                                          ? `https://example.com/image.jpg`
                                          : `https://example.com/video.mp4`,
                                      className: `w-full p-2 bg-gray-800 border border-cyan-400 text-white font-mono text-xs focus:outline-none focus:border-yellow-300`,
                                      autoFocus: true,
                                    }),
                                    jsxs(`div`, {
                                      className: `flex gap-2`,
                                      children: [
                                        jsx(`button`, {
                                          onClick: () => {
                                            if (w.trim()) {
                                              let e = w.trim();
                                              e.startsWith(`http://`) &&
                                                (e = e.replace(`http://`, `https://`));
                                              setBackgroundMediaType(me);
                                              onBackgroundChange(e);
                                              ee(``);
                                              C(false);
                                            }
                                          },
                                          className: `flex-1 p-2 bg-pink-500 text-black font-mono text-xs uppercase hover:bg-pink-400`,
                                          children: `Apply`,
                                        }),
                                        jsx(`button`, {
                                          onClick: Ye,
                                          className: `p-2 bg-gray-700 text-white font-mono text-xs hover:bg-gray-600`,
                                          children: jsx(Qn, {
                                            size: 16,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : jsxs(`div`, {
                                  className: `space-y-2`,
                                  children: [
                                    me === `image` &&
                                      jsxs(`button`, {
                                        onClick: () => {
                                          C(true);
                                        },
                                        className: `w-full p-2 bg-gray-800 text-white hover:bg-gray-700 font-mono text-xs uppercase flex items-center justify-center gap-2`,
                                        children: [
                                          jsx(mn, {
                                            size: 16,
                                          }),
                                          `Enter URL`,
                                        ],
                                      }),
                                    jsxs(`button`, {
                                      onClick: () => {
                                        me === `image` ? Ie.current?.click() : Le.current?.click();
                                      },
                                      className: `w-full p-2 bg-gray-800 text-white hover:bg-gray-700 font-mono text-xs uppercase flex items-center justify-center gap-2`,
                                      children: [
                                        jsx(qn, {
                                          size: 16,
                                        }),
                                        `Upload File`,
                                      ],
                                    }),
                                    et() &&
                                      jsxs(`button`, {
                                        onClick: Qe,
                                        className: `w-full p-2 bg-red-900 text-white hover:bg-red-800 font-mono text-xs uppercase flex items-center justify-center gap-2`,
                                        children: [
                                          jsx(Wn, {
                                            size: 16,
                                          }),
                                          `Clear Custom`,
                                        ],
                                      }),
                                  ],
                                }),
                            jsx(`input`, {
                              ref: Ie,
                              type: `file`,
                              accept: `image/*`,
                              onChange: (e) => Xe(e, `image`),
                              className: `hidden`,
                            }),
                            jsx(`input`, {
                              ref: Le,
                              type: `file`,
                              accept: `video/mp4,video/webm`,
                              onChange: (e) => Xe(e, `video`),
                              className: `hidden`,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      })
    );
  };
// #endregion app/13-settings.js

;
// #region app/14-monitoring.js
/* Configurable Proxmox telemetry and HTTP status cards. Shared bundle scope. */

var MONITOR_STORAGE_KEY = `systemMonitorCards`;
var MONITOR_COLLAPSED_KEY = `systemMonitorCollapsed`;
var MONITOR_CATEGORIES_KEY = `systemMonitorCategories`;
var MONITOR_CATEGORIES_ORDERED_KEY = `systemMonitorCategoriesOrdered`;
var MONITOR_COLLAPSED_CATEGORIES_KEY = `systemMonitorCollapsedCategories`;
var MONITOR_DEFAULT_CATEGORY = `live-telemetry`;
var monitorElement = React.createElement;

function getMonitorCategories() {
  let defaults = [{ id: MONITOR_DEFAULT_CATEGORY, name: `LIVE TELEMETRY` }];
  try {
    let ordered = localStorage.getItem(MONITOR_CATEGORIES_ORDERED_KEY);
    let saved = JSON.parse(ordered ?? localStorage.getItem(MONITOR_CATEGORIES_KEY) ?? `[]`);
    if (!Array.isArray(saved)) return defaults;
    let seen = new Set();
    let valid = saved.filter((category) => {
      if (!category || typeof category.id !== `string` || typeof category.name !== `string` ||
          !category.name.trim() || seen.has(category.id)) return false;
      seen.add(category.id);
      return true;
    });
    return ordered === null
      ? [...defaults, ...valid.filter((category) => category.id !== MONITOR_DEFAULT_CATEGORY)]
      : valid.length ? valid : defaults;
  } catch {
    return defaults;
  }
}

function saveMonitorCategories(categories) {
  localStorage.setItem(MONITOR_CATEGORIES_ORDERED_KEY, JSON.stringify(categories));
}

function getMonitorCollapsedCategories() {
  try {
    let saved = JSON.parse(localStorage.getItem(MONITOR_COLLAPSED_CATEGORIES_KEY) || `{}`);
    return saved && typeof saved === `object` && !Array.isArray(saved) ? saved : {};
  } catch {
    return {};
  }
}

function monitorCardCategory(card, categories) {
  return categories.some((category) => category.id === card.categoryId)
    ? card.categoryId
    : categories[0]?.id || MONITOR_DEFAULT_CATEGORY;
}

function reorderMonitorItems(items, activeId, overId) {
  let from = items.findIndex((item) => item.id === activeId);
  let to = items.findIndex((item) => item.id === overId);
  if (from < 0 || to < 0 || from === to) return items;
  let next = [...items];
  next.splice(to, 0, next.splice(from, 1)[0]);
  return next;
}

function reorderMonitorCards(cards, categories, categoryId, activeId, overId) {
  let group = cards.filter((card) => monitorCardCategory(card, categories) === categoryId);
  let ordered = reorderMonitorItems(group, activeId, overId);
  if (ordered === group) return cards;
  let index = 0;
  return cards.map((card) => monitorCardCategory(card, categories) === categoryId ? ordered[index++] : card);
}

function getMonitorCollapsed() {
  try {
    return localStorage.getItem(MONITOR_COLLAPSED_KEY) === `true`;
  } catch {
    return false;
  }
}

function getMonitorCards() {
  try {
    let saved = JSON.parse(localStorage.getItem(MONITOR_STORAGE_KEY) || `[]`);
    return Array.isArray(saved)
      ? saved.filter((card) =>
          card &&
          typeof card.id === `string` &&
          (card.type === `proxmox` || card.type === `http`) &&
          typeof card.url === `string`,
        )
      : [];
  } catch {
    return [];
  }
}

function saveMonitorCards(cards) {
  localStorage.setItem(MONITOR_STORAGE_KEY, JSON.stringify(cards));
}

function getMonitorBackup() {
  return {
    cards: getMonitorCards(),
    categories: getMonitorCategories(),
    collapsed: getMonitorCollapsed(),
    collapsedCategories: getMonitorCollapsedCategories(),
  };
}

function parseMonitorBackup(backup) {
  if (!backup || typeof backup !== `object` || Array.isArray(backup) ||
      !Array.isArray(backup.cards) || !Array.isArray(backup.categories) ||
      !backup.categories.length || typeof backup.collapsed !== `boolean` ||
      !backup.collapsedCategories || typeof backup.collapsedCategories !== `object` ||
      Array.isArray(backup.collapsedCategories))
    throw Error(`Invalid System Monitor settings.`);

  let categoryIds = new Set();
  let categories = backup.categories.map((category) => {
    if (!category || typeof category.id !== `string` || !category.id.trim() ||
        typeof category.name !== `string` || !category.name.trim() || categoryIds.has(category.id))
      throw Error(`Invalid System Monitor category.`);
    categoryIds.add(category.id);
    return { id: category.id, name: category.name };
  });

  let cardIds = new Set();
  let cards = backup.cards.map((card) => {
    if (!card || typeof card.id !== `string` || !card.id.trim() || cardIds.has(card.id) ||
        (card.type !== `http` && card.type !== `proxmox`) ||
        typeof card.name !== `string` || typeof card.url !== `string`)
      throw Error(`Invalid System Monitor card.`);
    cardIds.add(card.id);
    let url = parseMonitorUrl(card.url, card.type === `proxmox`);
    let restored = {
      id: card.id,
      type: card.type,
      name: card.name,
      categoryId: categoryIds.has(card.categoryId) ? card.categoryId : categories[0].id,
      url: url.href,
      intervalSeconds: monitorIntervalSeconds(card),
    };
    if (card.type === `proxmox`) {
      if (typeof card.tokenId !== `string` ||
          !/^[^\s=!]+@[^\s=!]+![^\s=!]+$/.test(card.tokenId) ||
          typeof card.tokenSecret !== `string` || !card.tokenSecret ||
          /[\r\n]/.test(card.tokenSecret))
        throw Error(`Invalid Proxmox token in System Monitor settings.`);
      restored.tokenId = card.tokenId;
      restored.tokenSecret = card.tokenSecret;
      restored.maxGuests = Math.max(0, Math.min(12, Number(card.maxGuests) || 0));
    }
    return restored;
  });

  let collapsedCategories = {};
  for (let category of categories)
    if (backup.collapsedCategories[category.id] === true)
      collapsedCategories[category.id] = true;
  return { cards, categories, collapsed: backup.collapsed, collapsedCategories };
}

function restoreMonitorBackup(backup) {
  saveMonitorCards(backup.cards);
  saveMonitorCategories(backup.categories);
  localStorage.setItem(MONITOR_COLLAPSED_KEY, String(backup.collapsed));
  localStorage.setItem(MONITOR_COLLAPSED_CATEGORIES_KEY, JSON.stringify(backup.collapsedCategories));
}

function parseMonitorUrl(value, requireHttps = false) {
  let url = new URL(value.trim());
  if (url.protocol !== `http:` && url.protocol !== `https:`)
    throw Error(`Enter an HTTP or HTTPS URL.`);
  if (requireHttps && url.protocol !== `https:`)
    throw Error(`Proxmox requires HTTPS to protect the API token.`);
  if (url.username || url.password)
    throw Error(`Put credentials in the token fields, not in the URL.`);
  if (url.hostname.includes(`*`)) throw Error(`Enter one host, without wildcards.`);
  if (requireHttps && (url.search || url.hash))
    throw Error(`Remove the query string or fragment from this URL.`);
  return url;
}

function monitorHostPattern(url) {
  let parsed = parseMonitorUrl(url);
  // Chrome host match patterns do not include a port; a grant covers this host.
  return `${parsed.protocol}//${parsed.hostname}/*`;
}

async function hasMonitorHostAccess(url) {
  if (!globalThis.chrome?.permissions?.contains) return true;
  try {
    return await chrome.permissions.contains({ origins: [monitorHostPattern(url)] });
  } catch {
    return false;
  }
}

function requestMonitorHostAccess(url) {
  if (!globalThis.chrome?.permissions?.request) return Promise.resolve(true);
  // Call this synchronously in a button/submit handler: Chrome requires a user gesture.
  return chrome.permissions.request({ origins: [monitorHostPattern(url)] });
}

async function fetchMonitorResponse(url, options = {}) {
  let controller = new AbortController();
  let timeout = setTimeout(() => controller.abort(), 10000);
  try {
    return await fetch(url, {
      method: `GET`,
      credentials: `omit`,
      cache: `no-store`,
      signal: controller.signal,
      ...options,
    });
  } finally {
    clearTimeout(timeout);
  }
}

function proxmoxResourcesUrl(baseUrl) {
  let url = parseMonitorUrl(baseUrl, true);
  url.pathname = `${url.pathname.replace(/\/+$/, ``)}/api2/json/cluster/resources`;
  return url.href;
}

function monitorProxmoxServerUrl(baseUrl) {
  try {
    return parseMonitorUrl(baseUrl, true).origin;
  } catch {
    return null;
  }
}

function summarizeProxmoxResources(payload) {
  if (!Array.isArray(payload?.data)) throw Error(`Unexpected Proxmox API response.`);
  let nodes = payload.data.filter((resource) => resource.type === `node`);
  let guests = payload.data.filter(
    (resource) => resource.type === `qemu` || resource.type === `lxc`,
  );
  return {
    nodes,
    onlineNodes: nodes.filter((node) => node.status === `online`).length,
    guests: guests.length,
    guestRows: guests,
    runningGuests: guests.filter((guest) => guest.status === `running`).length,
  };
}

async function probeMonitorCard(card) {
  try {
    parseMonitorUrl(card.url, card.type === `proxmox`);
    if (!(await hasMonitorHostAccess(card.url)))
      return { phase: `access`, message: `Host access required` };
    let start = performance.now();
    if (card.type === `http`) {
      let response = await fetchMonitorResponse(card.url, { redirect: `follow` });
      response.body?.cancel().catch(() => {});
      return {
        phase: response.status === 200 ? `ok` : `error`,
        message: `${response.status || `NO RESPONSE`} ${response.statusText || ``}`.trim(),
        latency: Math.round(performance.now() - start),
        checkedAt: Date.now(),
      };
    }

    let response = await fetchMonitorResponse(proxmoxResourcesUrl(card.url), {
      headers: {
        Authorization: `PVEAPIToken=${card.tokenId}=${card.tokenSecret}`,
      },
      // Never forward the Authorization header through a redirect.
      redirect: `error`,
    });
    if (!response.ok) {
      let message =
        response.status === 401 || response.status === 403
          ? `HTTP ${response.status}: check token and permissions`
          : `Proxmox returned HTTP ${response.status}`;
      return { phase: `error`, message, checkedAt: Date.now() };
    }
    let resources = summarizeProxmoxResources(await response.json());
    return {
      phase: resources.nodes.length && resources.onlineNodes === resources.nodes.length ? `ok` : `issue`,
      message: resources.nodes.length ? `Telemetry received` : `No nodes visible to this token`,
      resources,
      latency: Math.round(performance.now() - start),
      checkedAt: Date.now(),
    };
  } catch (error) {
    return {
      phase: `error`,
      connectionError: error?.name === `TypeError`,
      message:
        error?.name === `AbortError`
          ? `Timed out after 10 seconds`
          : `Connection failed. Check host, TLS certificate and network access.`,
      checkedAt: Date.now(),
    };
  }
}

function monitorPercent(value, fraction = false) {
  let number = Number(value);
  return Number.isFinite(number) && value != null
    ? `${Math.round(Math.max(0, Math.min(100, fraction ? number * 100 : number)))}%`
    : `—`;
}

function monitorGiB(value) {
  let number = Number(value);
  return Number.isFinite(number) && value != null ? `${(number / 1073741824).toFixed(1)} GiB` : `—`;
}

function monitorIntervalSeconds(card) {
  let fallback = card.type === `proxmox` ? 60 : 30;
  let requested = Number(card.intervalSeconds);
  return Number.isFinite(requested) && requested > 0
    ? Math.max(15, Math.min(3600, Math.round(requested)))
    : fallback;
}

function MonitorMeter({ label, value, detail }) {
  let percent = monitorPercent(value);
  return monitorElement(
    `div`,
    { className: `monitor-meter` },
    monitorElement(
      `div`,
      { className: `monitor-meter__label` },
      monitorElement(`span`, null, label),
      monitorElement(`span`, null, detail || percent),
    ),
    monitorElement(
      `div`,
      { className: `monitor-meter__track` },
      monitorElement(`div`, {
        className: `monitor-meter__fill`,
        style: { width: percent === `—` ? `0%` : percent },
      }),
    ),
  );
}

function MonitorProxmoxDetails({ resources, maxGuests }) {
  return monitorElement(
    React.Fragment,
    null,
    monitorElement(
      `div`,
      { className: `monitor-totals` },
      monitorElement(
        `div`,
        null,
        monitorElement(`strong`, null, `${resources.onlineNodes}/${resources.nodes.length}`),
        monitorElement(`span`, null, `NODES ONLINE`),
      ),
      monitorElement(
        `div`,
        null,
        monitorElement(`strong`, null, `${resources.runningGuests}/${resources.guests}`),
        monitorElement(`span`, null, `VM / CT RUNNING`),
      ),
    ),
    ...resources.nodes.slice(0, 6).map((node, index) =>
      monitorElement(
        `div`,
        { className: `monitor-node`, key: node.id || index },
        monitorElement(
          `div`,
          { className: `monitor-node__heading` },
          monitorElement(`strong`, { title: node.node }, node.node || `Node`),
          monitorElement(
            `span`,
            { className: node.status === `online` ? `monitor-online` : `monitor-offline` },
            (node.status || `unknown`).toUpperCase(),
          ),
        ),
        monitorElement(MonitorMeter, { label: `CPU`, value: Number(node.cpu) * 100 }),
        monitorElement(MonitorMeter, {
          label: `RAM`,
          value: node.maxmem ? (Number(node.mem) / Number(node.maxmem)) * 100 : null,
          detail: `${monitorGiB(node.mem)} / ${monitorGiB(node.maxmem)}`,
        }),
        node.maxdisk &&
          monitorElement(MonitorMeter, {
            label: `DISK`,
            value: (Number(node.disk) / Number(node.maxdisk)) * 100,
            detail: `${monitorGiB(node.disk)} / ${monitorGiB(node.maxdisk)}`,
          }),
      ),
    ),
    resources.nodes.length > 6 &&
      monitorElement(`p`, { className: `monitor-card__hint` }, `+${resources.nodes.length - 6} more nodes`),
    maxGuests > 0 && resources.guestRows.length > 0 &&
      monitorElement(
        `div`,
        { className: `monitor-guests` },
        monitorElement(`h4`, null, `GUEST MACHINES`),
        ...resources.guestRows.slice(0, maxGuests).map((guest, index) =>
          monitorElement(
            `div`,
            { className: `monitor-guest`, key: guest.id || index },
            monitorElement(
              `div`,
              { className: `monitor-node__heading` },
              monitorElement(
                `strong`,
                { title: guest.name || `` },
                `${guest.type === `qemu` ? `VM` : `CT`} ${guest.vmid || ``} ${guest.name || ``}`.trim(),
              ),
              monitorElement(
                `span`,
                { className: guest.status === `running` ? `monitor-online` : `monitor-offline` },
                (guest.status || `unknown`).toUpperCase(),
              ),
            ),
            monitorElement(
              `p`,
              null,
              `${guest.node || `—`}  ·  CPU ${monitorPercent(guest.cpu, true)}  ·  RAM ${monitorGiB(guest.mem)} / ${monitorGiB(guest.maxmem)}`,
            ),
          ),
        ),
        resources.guestRows.length > maxGuests &&
          monitorElement(`p`, { className: `monitor-card__hint` }, `+${resources.guestRows.length - maxGuests} more guests`),
      ),
  );
}

function MonitorCard({ card, editing, onEdit, onRemove, permissionVersion }) {
  let [result, setResult] = useState({ phase: `loading`, message: `Checking...` });
  let [refreshVersion, setRefreshVersion] = useState(0);
  let proxmoxServerUrl = card.type === `proxmox` ? monitorProxmoxServerUrl(card.url) : null;
  let { attributes, listeners, setNodeRef, transform, transition, isDragging } = mo({ id: card.id });

  useEffect(() => {
    let active = true;
    let check = async () => {
      setResult((previous) => ({ ...previous, phase: `loading`, message: `Checking...` }));
      let next = await probeMonitorCard(card);
      if (active) setResult(next);
    };
    check();
    let interval = setInterval(check, monitorIntervalSeconds(card) * 1000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [card.id, card.type, card.url, card.tokenId, card.tokenSecret, card.intervalSeconds, refreshVersion, permissionVersion]);

  let requestAccess = async () => {
    try {
      await requestMonitorHostAccess(card.url);
    } catch {}
    setRefreshVersion((version) => version + 1);
  };

  let stateLabel =
    result.phase === `ok`
      ? `ONLINE`
      : result.phase === `issue`
        ? `DEGRADED`
        : result.phase === `access`
          ? `ACCESS`
          : result.phase === `loading`
            ? `SCANNING`
            : `OFFLINE`;
  return monitorElement(
    `article`,
    {
      ref: setNodeRef,
      style: { transform: Or.Transform.toString(transform), transition, zIndex: isDragging ? 10 : 1 },
      className: `monitor-card monitor-card--${result.phase}${editing ? ` monitor-card--editing` : ``}`,
    },
    editing && monitorElement(`div`, { className: `monitor-card__edit-controls` },
      monitorElement(`button`, {
        ...attributes, ...listeners, type: `button`, className: `monitor-card__drag`,
        title: `Move ${card.name}`, 'aria-label': `Move ${card.name}`,
      }, monitorElement(ln, { size: 18 })),
      monitorElement(`div`, { className: `monitor-card__edit-actions` },
        monitorElement(`button`, { type: `button`, onClick: () => onEdit(card), title: `Edit ${card.name}`, 'aria-label': `Edit ${card.name}` }, monitorElement(zn, { size: 16 })),
        monitorElement(`button`, { type: `button`, onClick: () => onRemove(card.id), title: `Remove ${card.name}`, 'aria-label': `Remove ${card.name}` }, monitorElement(Qn, { size: 16 })),
      ),
    ),
    monitorElement(
      `div`,
      { className: `monitor-card__head` },
      monitorElement(
        `div`,
        { className: `monitor-card__identity` },
        monitorElement(`span`, { className: `monitor-card__type` }, card.type === `proxmox` ? `PVE / CLUSTER` : `HTTP / SERVICE`),
        monitorElement(`h3`, { title: card.name }, card.name),
      ),
      monitorElement(`span`, { className: `monitor-card__state` }, stateLabel),
    ),
    monitorElement(`p`, { className: `monitor-card__url`, title: card.url }, card.url),
    result.phase === `access`
      ? monitorElement(
          `div`,
          { className: `monitor-card__message` },
          monitorElement(`p`, null, `Grant access to this host so the extension can read its response.`),
          monitorElement(`button`, { type: `button`, onClick: requestAccess }, `GRANT ACCESS`),
        )
      : result.resources?.nodes.length
        ? monitorElement(MonitorProxmoxDetails, {
            resources: result.resources,
            maxGuests: card.maxGuests ?? 4,
          })
        : monitorElement(
            `div`,
            { className: `monitor-card__message` },
            monitorElement(`p`, null, result.message),
            card.type === `http` && result.latency != null &&
              monitorElement(`strong`, null, `${result.latency} ms`),
          ),
    card.type === `proxmox` && result.connectionError &&
      monitorElement(
        `div`,
        { className: `monitor-card__tls-hint` },
        monitorElement(`p`, null, `Chrome reports ERR_CERT_AUTHORITY_INVALID? Trust the Proxmox CA or install a trusted server certificate. A card setting cannot bypass TLS verification.`),
        proxmoxServerUrl && monitorElement(`a`, { href: proxmoxServerUrl, target: `_blank`, rel: `noopener noreferrer` }, `CHECK CERTIFICATE ↗`),
      ),
    monitorElement(
      `div`,
      { className: `monitor-card__foot` },
      monitorElement(
        `span`,
        null,
        result.checkedAt
          ? `UPDATED ${new Date(result.checkedAt).toLocaleTimeString()}${result.latency != null ? ` · ${result.latency} ms` : ``}`
          : `AWAITING SIGNAL`,
      ),
      monitorElement(
        `div`,
        { className: `monitor-card__actions` },
        monitorElement(`button`, { type: `button`, onClick: () => setRefreshVersion((version) => version + 1), title: `Refresh ${card.name}` }, `↻`),
      ),
    ),
  );
}

function MonitorCategory({ category, cards, editing, isCollapsed, renaming, renameValue,
  onRenameChange, onSaveRename, onCancelRename, onToggle, onEditCategory, onDeleteCategory,
  onReorderCards, onEditCard, onRemoveCard, permissionVersion }) {
  let { attributes, listeners, setNodeRef, transform, transition, isDragging } = mo({ id: category.id });
  let sensors = Wr(
    Ur(Hi, { activationConstraint: { distance: 8 } }),
    Ur(X, { coordinateGetter: vo }),
  );
  let cardGrid = monitorElement(`div`, { className: `monitor-dashboard__grid` },
    ...cards.map((card) => monitorElement(MonitorCard, {
      key: card.id, card, editing, onEdit: onEditCard, onRemove: onRemoveCard, permissionVersion,
    })),
  );
  return monitorElement(`section`, {
    ref: setNodeRef,
    style: { transform: Or.Transform.toString(transform), transition, zIndex: isDragging ? 10 : 1 },
    className: `monitor-dashboard__section`,
  },
    monitorElement(`div`, { className: `monitor-dashboard__section-head` },
      editing && monitorElement(`button`, {
        ...attributes, ...listeners, type: `button`, className: `monitor-dashboard__category-drag`,
        title: `Move ${category.name}`, 'aria-label': `Move ${category.name}`,
      }, monitorElement(ln, { size: 20 })),
      monitorElement(`h3`, null, monitorElement(`button`, {
        type: `button`, className: `monitor-dashboard__section-toggle`, onClick: () => onToggle(category.id),
        'aria-expanded': !isCollapsed, 'aria-controls': `monitor-category-${category.id}`,
      },
        monitorElement(`span`, null, category.id === MONITOR_DEFAULT_CATEGORY ? `// ${category.name}` : category.name),
        monitorElement(isCollapsed ? zt : Rt, { size: 20 }),
      )),
      editing && monitorElement(`div`, { className: `monitor-dashboard__category-actions` },
        monitorElement(`button`, { type: `button`, onClick: () => onEditCategory(category), title: `Edit ${category.name}`, 'aria-label': `Edit ${category.name}` }, monitorElement(zn, { size: 16 })),
        monitorElement(`button`, { type: `button`, onClick: () => onDeleteCategory(category), title: `Delete ${category.name}`, 'aria-label': `Delete ${category.name}` }, monitorElement(Wn, { size: 16 })),
      ),
    ),
    renaming && monitorElement(`form`, { className: `monitor-category-rename`, onSubmit: (event) => { event.preventDefault(); onSaveRename(category.id); } },
      monitorElement(`h4`, null, `EDIT CATEGORY`),
      monitorElement(`input`, { type: `text`, value: renameValue, onChange: (event) => onRenameChange(event.target.value), 'aria-label': `Category name` }),
      monitorElement(`button`, { type: `submit` }, `SAVE`),
      monitorElement(`button`, { type: `button`, onClick: onCancelRename }, `CANCEL`),
    ),
    monitorElement(`div`, { id: `monitor-category-${category.id}`, hidden: isCollapsed },
      !isCollapsed && (cards.length
        ? monitorElement(za, { sensors, collisionDetection: Qr, onDragEnd: (event) => {
            if (editing && event.over && event.active.id !== event.over.id)
              onReorderCards(category.id, event.active.id, event.over.id);
          } }, monitorElement(ao, { items: cards.map((card) => card.id), strategy: to }, cardGrid))
        : monitorElement(`div`, { className: `monitor-dashboard__empty` },
            monitorElement(`span`, null, `NO SIGNAL SOURCES CONFIGURED`),
            monitorElement(`p`, null, `Add a Proxmox cluster or an HTTP service to start monitoring.`),
          )),
    ),
  );
}

function MonitorDashboard() {
  let [cards, setCards] = useState(getMonitorCards);
  let [collapsed, setCollapsed] = useState(getMonitorCollapsed);
  let [categories, setCategories] = useState(getMonitorCategories);
  let [collapsedCategories, setCollapsedCategories] = useState(getMonitorCollapsedCategories);
  let [editMode, setEditMode] = useState(false);
  let [newCategoryOpen, setNewCategoryOpen] = useState(false);
  let [newCategoryName, setNewCategoryName] = useState(``);
  let [categoryBeingRenamed, setCategoryBeingRenamed] = useState(null);
  let [renamedCategoryName, setRenamedCategoryName] = useState(``);
  let [categoryPendingDeletion, setCategoryPendingDeletion] = useState(null);
  let [categoryError, setCategoryError] = useState(``);
  let [draft, setDraft] = useState(null);
  let [formError, setFormError] = useState(``);
  let [permissionVersion, setPermissionVersion] = useState(0);
  let categorySensors = Wr(
    Ur(Hi, { activationConstraint: { distance: 8 } }),
    Ur(X, { coordinateGetter: vo }),
  );

  let updateCards = (next) => {
    saveMonitorCards(next);
    setCards(next);
  };
  let toggleCollapsed = () => {
    let next = !collapsed;
    localStorage.setItem(MONITOR_COLLAPSED_KEY, String(next));
    setCollapsed(next);
  };
  let toggleCategory = (id) => {
    let next = { ...collapsedCategories, [id]: !collapsedCategories[id] };
    localStorage.setItem(MONITOR_COLLAPSED_CATEGORIES_KEY, JSON.stringify(next));
    setCollapsedCategories(next);
  };
  let startEditing = () => {
    setCollapsed(false);
    localStorage.setItem(MONITOR_COLLAPSED_KEY, `false`);
    setDraft(null);
    setEditMode(true);
    setCategoryError(``);
  };
  let finishEditing = () => {
    setEditMode(false);
    setDraft(null);
    setNewCategoryOpen(false);
    setCategoryBeingRenamed(null);
    setCategoryPendingDeletion(null);
    setCategoryError(``);
  };
  let reorderCategories = (event) => {
    if (!editMode || !event.over) return;
    let next = reorderMonitorItems(categories, event.active.id, event.over.id);
    if (next !== categories) {
      saveMonitorCategories(next);
      setCategories(next);
    }
  };
  let reorderCards = (categoryId, activeId, overId) => {
    if (!editMode) return;
    let next = reorderMonitorCards(cards, categories, categoryId, activeId, overId);
    if (next !== cards) updateCards(next);
  };
  let addMonitorCategory = (event) => {
    event.preventDefault();
    let name = newCategoryName.trim();
    if (!name || categories.some((category) => category.name.toLowerCase() === name.toLowerCase())) {
      setCategoryError(`Enter a unique subsection name.`);
      return;
    }
    let next = [...categories, { id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`, name }];
    saveMonitorCategories(next);
    setCategories(next);
    setNewCategoryName(``);
    setNewCategoryOpen(false);
    setCategoryError(``);
  };
  let beginRenamingCategory = (category) => {
    setCategoryBeingRenamed(category.id);
    setRenamedCategoryName(category.name);
    setCategoryError(``);
  };
  let renameMonitorCategory = (id) => {
    let name = renamedCategoryName.trim();
    if (!name || categories.some((category) => category.id !== id && category.name.toLowerCase() === name.toLowerCase())) {
      setCategoryError(`Enter a unique subsection name.`);
      return;
    }
    let next = categories.map((category) => category.id === id ? { ...category, name } : category);
    saveMonitorCategories(next);
    setCategories(next);
    setCategoryBeingRenamed(null);
    setRenamedCategoryName(``);
    setCategoryError(``);
  };
  let removeMonitorCategory = (id) => {
    if (categories.length === 1) {
      setCategoryError(`Keep at least one category.`);
      setCategoryPendingDeletion(null);
      return;
    }
    let next = categories.filter((category) => category.id !== id);
    let moved = cards.map((card) => monitorCardCategory(card, categories) === id ? { ...card, categoryId: next[0].id } : card);
    updateCards(moved);
    saveMonitorCategories(next);
    setCategories(next);
    setCategoryPendingDeletion(null);
    setCategoryError(``);
  };
  let openNewCard = () => {
    if (!collapsed && draft && !draft.id) {
      setDraft(null);
      return;
    }
    setCollapsed(false);
    localStorage.setItem(MONITOR_COLLAPSED_KEY, `false`);
    setNewCategoryOpen(false);
    setFormError(``);
    setDraft({
      id: null,
      type: `proxmox`,
      categoryId: categories[0].id,
      name: ``,
      url: ``,
      tokenId: ``,
      tokenSecret: ``,
      maxGuests: 4,
      intervalSeconds: 60,
    });
  };
  let editCard = (card) => {
    setNewCategoryOpen(false);
    setFormError(``);
    setDraft({ ...card, categoryId: monitorCardCategory(card, categories), tokenSecret: ``, intervalSeconds: monitorIntervalSeconds(card) });
  };
  let saveCard = async (event) => {
    event.preventDefault();
    let url;
    let existing = cards.find((card) => card.id === draft.id);
    let secret = (draft.tokenSecret || existing?.tokenSecret || ``).trim();
    try {
      url = parseMonitorUrl(draft.url, draft.type === `proxmox`);
      if (draft.type === `proxmox`) {
        if (!/^[^\s=!]+@[^\s=!]+![^\s=!]+$/.test(draft.tokenId.trim()))
          throw Error(`Token ID must look like user@realm!token-name.`);
        if (!secret || /[\r\n]/.test(secret)) throw Error(`Enter the Proxmox token secret.`);
      }
    } catch (error) {
      setFormError(error.message || `Invalid configuration.`);
      return;
    }

    // Start the permission prompt before the first await while the submit gesture is active.
    let permissionRequest;
    try {
      permissionRequest = requestMonitorHostAccess(url.href);
    } catch {
      permissionRequest = Promise.resolve(false);
    }
    let card = {
      id: draft.id || (globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`),
      type: draft.type,
      name: draft.name.trim() || (draft.type === `proxmox` ? `Proxmox` : `HTTP Service`),
      categoryId: monitorCardCategory(draft, categories),
      url: url.href,
      intervalSeconds: monitorIntervalSeconds(draft),
      ...(draft.type === `proxmox`
        ? {
            tokenId: draft.tokenId.trim(),
            tokenSecret: secret,
            maxGuests: Math.max(0, Math.min(12, Number(draft.maxGuests) || 0)),
          }
        : {}),
    };
    try {
      await permissionRequest;
      updateCards(existing ? cards.map((item) => (item.id === card.id ? card : item)) : [...cards, card]);
      setPermissionVersion((version) => version + 1);
      setDraft(null);
    } catch (error) {
      setFormError(`Could not save this card or request host access.`);
    }
  };

  let categoryRows = categories.map((category) => monitorElement(MonitorCategory, {
    key: category.id,
    category,
    cards: cards.filter((card) => monitorCardCategory(card, categories) === category.id),
    editing: editMode,
    isCollapsed: !!collapsedCategories[category.id],
    renaming: categoryBeingRenamed === category.id,
    renameValue: renamedCategoryName,
    onRenameChange: setRenamedCategoryName,
    onSaveRename: renameMonitorCategory,
    onCancelRename: () => { setCategoryBeingRenamed(null); setCategoryError(``); },
    onToggle: toggleCategory,
    onEditCategory: beginRenamingCategory,
    onDeleteCategory: (item) => { setCategoryPendingDeletion(item.id); setCategoryError(``); },
    onReorderCards: reorderCards,
    onEditCard: editCard,
    onRemoveCard: (id) => updateCards(cards.filter((card) => card.id !== id)),
    permissionVersion,
  }));

  return monitorElement(
    `section`,
    {
      className: `monitor-dashboard${collapsed ? ` monitor-dashboard--collapsed` : ``}`,
      'aria-label': `System monitor`,
    },
    monitorElement(
      `div`,
      { className: `monitor-dashboard__head` },
      monitorElement(`h2`, null,
        monitorElement(`button`, {
          type: `button`, className: `monitor-dashboard__toggle`, onClick: toggleCollapsed,
          'aria-expanded': !collapsed, 'aria-controls': `system-monitor-content`,
        },
        monitorElement(`span`, null, `SYSTEM MONITOR`),
        monitorElement(collapsed ? zt : Rt, { size: 20 }),
        ),
      ),
      monitorElement(
        `div`,
        { className: `monitor-dashboard__actions` },
        editMode
          ? monitorElement(`button`, { type: `button`, className: `monitor-dashboard__save`, onClick: finishEditing }, `SAVE`)
          : monitorElement(`button`, { type: `button`, onClick: startEditing, title: `Edit System Monitor`, 'aria-label': `Edit System Monitor` }, monitorElement(Mn, { size: 20 })),
        monitorElement(`button`, { type: `button`, onClick: openNewCard, title: `Add monitoring node`, 'aria-label': `Add monitoring node` }, monitorElement(En, { size: 20 })),
      ),
    ),
    monitorElement(
      `div`,
      { id: `system-monitor-content`, hidden: collapsed },
      !collapsed && monitorElement(za, { sensors: categorySensors, collisionDetection: Qr, onDragEnd: reorderCategories },
        monitorElement(ao, { items: categories.map((category) => category.id), strategy: to }, ...categoryRows),
      ),
      !collapsed && editMode && (newCategoryOpen
        ? monitorElement(`form`, { className: `monitor-category-add`, onSubmit: addMonitorCategory },
            monitorElement(`h3`, null, `ADD NEW CATEGORY`),
            monitorElement(`input`, { type: `text`, value: newCategoryName, placeholder: `Category name`, 'aria-label': `New category name`, onChange: (event) => setNewCategoryName(event.target.value), autoFocus: true }),
            monitorElement(`button`, { type: `submit` }, `ADD`),
            monitorElement(`button`, { type: `button`, onClick: () => { setNewCategoryOpen(false); setNewCategoryName(``); setCategoryError(``); } }, `CANCEL`),
          )
        : monitorElement(`button`, { type: `button`, className: `monitor-category-add-button`, onClick: () => { setNewCategoryOpen(true); setCategoryError(``); } },
            monitorElement(En, { size: 20 }), `ADD CATEGORY`,
          )),
      !collapsed && editMode && categoryPendingDeletion && monitorElement(`div`, { className: `monitor-category-confirm` },
        monitorElement(`h3`, null, `WARNING`),
        monitorElement(`p`, null, `Delete this category? Its monitoring nodes will move to the first remaining category.`),
        monitorElement(`button`, { type: `button`, onClick: () => removeMonitorCategory(categoryPendingDeletion) }, `DELETE`),
        monitorElement(`button`, { type: `button`, onClick: () => setCategoryPendingDeletion(null) }, `CANCEL`),
      ),
      !collapsed && editMode && categoryError && monitorElement(`p`, { className: `monitor-editor__error`, role: `alert` }, categoryError),
    ),
    !collapsed && draft &&
      monitorElement(
        `div`,
        { className: `monitor-editor-inline` },
        monitorElement(
          `form`,
          { className: `monitor-editor`, onSubmit: saveCard, noValidate: true },
          monitorElement(
            `div`,
            { className: `monitor-editor__head` },
            monitorElement(`h3`, null, draft.id ? `EDIT MONITORING NODE` : `ADD MONITORING NODE`),
            monitorElement(`button`, { type: `button`, onClick: () => setDraft(null), 'aria-label': `Close` }, `×`),
          ),
          monitorElement(`div`, { className: `monitor-editor__layout` },
            monitorElement(`label`, null, `MONITORING TYPE`,
              monitorElement(`select`, { value: draft.type, onChange: (event) => setDraft({ ...draft, type: event.target.value, intervalSeconds: event.target.value === `proxmox` ? 60 : 30 }) },
                monitorElement(`option`, { value: `proxmox` }, `Proxmox`),
                monitorElement(`option`, { value: `http` }, `HTTP Check`),
              ),
            ),
            monitorElement(`label`, null, `SUBSECTION`,
              monitorElement(`select`, { value: monitorCardCategory(draft, categories), onChange: (event) => setDraft({ ...draft, categoryId: event.target.value }) },
                ...categories.map((category) => monitorElement(`option`, { key: category.id, value: category.id }, category.name)),
              ),
            ),
          ),
          monitorElement(
            `label`,
            null,
            `DISPLAY NAME`,
            monitorElement(`input`, {
              type: `text`,
              value: draft.name,
              placeholder: draft.type === `proxmox` ? `Homelab cluster` : `Website / API`,
              onChange: (event) => setDraft({ ...draft, name: event.target.value }),
            }),
          ),
          monitorElement(
            `label`,
            null,
            draft.type === `proxmox` ? `PROXMOX BASE URL` : `CHECK URL`,
            monitorElement(`input`, {
              type: `url`,
              value: draft.url,
              required: true,
              placeholder: draft.type === `proxmox` ? `https://pve.example.local:8006` : `https://service.example.com/health`,
              onChange: (event) => setDraft({ ...draft, url: event.target.value }),
            }),
          ),
          draft.type === `proxmox` &&
            monitorElement(
              React.Fragment,
              null,
              monitorElement(
                `label`,
                null,
                `TOKEN ID`,
                monitorElement(`input`, {
                  type: `text`,
                  value: draft.tokenId,
                  placeholder: `user@pve!monitor`,
                  autoComplete: `off`,
                  onChange: (event) => setDraft({ ...draft, tokenId: event.target.value }),
                }),
              ),
              monitorElement(
                `label`,
                null,
                `TOKEN SECRET`,
                monitorElement(`input`, {
                  type: `password`,
                  value: draft.tokenSecret,
                  placeholder: draft.id ? `Leave blank to keep the saved secret` : `Paste token secret`,
                  autoComplete: `new-password`,
                  onChange: (event) => setDraft({ ...draft, tokenSecret: event.target.value }),
                }),
              ),
              monitorElement(
                `label`,
                null,
                `GUEST MACHINES TO SHOW (0–12)`,
                monitorElement(`input`, {
                  type: `number`,
                  min: 0,
                  max: 12,
                  value: draft.maxGuests ?? 4,
                  onChange: (event) => setDraft({ ...draft, maxGuests: event.target.value }),
                }),
              ),
              monitorElement(`p`, { className: `monitor-editor__hint` }, `Use a read-only token with PVEAuditor access. The secret is stored locally in this browser. Chrome must trust the Proxmox TLS certificate.`),
            ),
          draft.type === `http` &&
            monitorElement(`p`, { className: `monitor-editor__hint` }, `Only a final HTTP 200 response counts as online. Redirects are followed.`),
          monitorElement(
            `label`,
            null,
            `REFRESH EVERY (SECONDS, 15–3600)`,
            monitorElement(`input`, {
              type: `number`,
              min: 15,
              max: 3600,
              value: draft.intervalSeconds,
              onChange: (event) => setDraft({ ...draft, intervalSeconds: event.target.value }),
            }),
          ),
          monitorElement(`p`, { className: `monitor-editor__hint` }, `Chrome will ask for access to this host when you save.`),
          formError && monitorElement(`p`, { className: `monitor-editor__error`, role: `alert` }, formError),
          monitorElement(
            `div`,
            { className: `monitor-editor__actions` },
            monitorElement(`button`, { type: `button`, onClick: () => setDraft(null) }, `CANCEL`),
            monitorElement(`button`, { type: `submit` }, `SAVE CARD`),
          ),
        ),
      ),
  );
}
// #endregion app/14-monitoring.js

;
// #region vendor/14-html-to-image.js
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
// #endregion vendor/14-html-to-image.js

;
// #region app/15-dialogs.js
/* About, identity and system settings dialogs. Shared scope; build with node scripts/build.cjs. */

/* About dialog. */
var AboutDialog = ({ isOpen: isOpen, onClose: onClose }) => {
  return isOpen
    ? jsxs(`div`, {
        className: `info-modal fixed inset-0 flex items-center justify-center z-20`,
        children: [
          jsx(`div`, {
            className: `overlay fixed inset-0 bg-black bg-opacity-70`,
            onClick: onClose,
          }),
          jsxs(`div`, {
            className: `modal-content relative bg-gray-900 border-2 border-cyan-400 p-6 max-w-md w-full`,
            style: { maxHeight: `90vh`, overflowY: `auto` },
            children: [
              jsx(`h3`, {
                className: `text-2xl text-yellow-300 font-mono mb-4 uppercase text-center`,
                children: `About`,
              }),
              jsxs(`p`, {
                className: `text-white font-mono mb-3 text-center`,
                children: [
                  `I loved the original Cyberpunk 2077 start page and wanted to see my homelab status here too.`,
                  jsx(`br`, {}),
                  `This custom version adds a dashboard for Proxmox telemetry and HTTP service checks, with configurable cards and categories.`,
                ],
              }),
              jsxs(`p`, {
                className: `text-gray-300 font-mono text-sm mb-6 text-center`,
                children: [
                  `Based on `,
                  jsx(`a`, {
                    href: `https://addons.mozilla.org/en-US/firefox/addon/cyberpunk-2077-themed-homepage/`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `text-cyan-400 hover:text-cyan-300 underline`,
                    children: `Cyberpunk 2077 Themed Homepage`,
                  }),
                  ` by TealLogic (MPL 2.0).`,
                ],
              }),
              jsxs(`div`, {
                className: `flex justify-center gap-3`,
                children: [
                  jsx(`a`, {
                    href: `https://buymeacoffee.com/kannone`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `cyberpunk-tooltip px-3 py-2 bg-yellow-300 text-black hover:bg-yellow-400 flex items-center justify-center`,
                    "data-tooltip": `Support this custom version`,
                    children: jsx(Jt, {
                      size: 20,
                    }),
                  }),
                  jsx(`a`, {
                    href: `https://addons.mozilla.org/en-US/firefox/addon/cyberpunk-2077-themed-homepage/`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `cyberpunk-tooltip px-3 py-2 bg-cyan-400 text-black hover:bg-cyan-300 flex items-center justify-center`,
                    "data-tooltip": `Original project by TealLogic`,
                    children: jsx(en, {
                      size: 20,
                    }),
                  }),
                  jsx(`button`, {
                    onClick: async () => {
                      try {
                        onClose();
                        await new Promise((e) => setTimeout(e, 300));
                        let e = document.documentElement;
                        let n = document.body.style.overflow;
                        let r = e.style.overflow;
                        document.body.style.overflow = `hidden`;
                        e.style.overflow = `hidden`;
                        let i = await renderElementToPngDataUrl(e, {
                          quality: 1,
                          pixelRatio: 2,
                          backgroundColor: `#000c14`,
                          width: window.innerWidth,
                          height: window.innerHeight,
                          style: {
                            transform: `scale(1)`,
                            transformOrigin: `top left`,
                            overflow: `hidden`,
                          },
                        });
                        document.body.style.overflow = n;
                        e.style.overflow = r;
                        let a = document.createElement(`a`);
                        a.download = `cyberstart-${new Date().getTime()}.png`;
                        a.href = i;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                      } catch (e) {
                        document.body.style.overflow = ``;
                        document.documentElement.style.overflow = ``;
                        console.error(`Failed to capture screenshot:`, e);
                      }
                    },
                    className: `cyberpunk-tooltip px-3 py-2 bg-cyan-400 text-black hover:bg-cyan-300 flex items-center justify-center`,
                    "data-tooltip": `Capture Screenshot`,
                    children: jsx(K, {
                      size: 20,
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : null;
};
var /* Identity dialog. */
  IdentityDialog = ({
    isOpen: isOpen,
    onClose: onClose,
    userName: userName,
    onUserNameChange: onUserNameChange,
    onSave: onSave,
  }) =>
    isOpen
      ? jsxs(`div`, {
          className: `info-modal fixed inset-0 flex items-center justify-center z-20`,
          children: [
            jsx(`div`, {
              className: `overlay fixed inset-0 bg-black bg-opacity-70`,
              onClick: onClose,
            }),
            jsxs(`div`, {
              className: `modal-content relative bg-gray-900 border-2 border-cyan-400 p-6 max-w-md w-full`,
              children: [
                jsx(`h3`, {
                  className: `text-2xl text-yellow-300 font-mono mb-4 uppercase text-center`,
                  children: `Identity Override`,
                }),
                jsx(`div`, {
                  className: `mb-4`,
                  children: jsx(`input`, {
                    type: `text`,
                    value: userName,
                    onChange: (e) => onUserNameChange(e.target.value),
                    className: `w-full p-2 bg-gray-800 border border-cyan-400 text-white font-mono`,
                    placeholder: `Enter your name`,
                  }),
                }),
                jsxs(`div`, {
                  className: `flex gap-2`,
                  children: [
                    jsx(`button`, {
                      onClick: onSave,
                      className: `flex-1 px-4 py-2 bg-pink-500 text-black font-bold font-mono uppercase`,
                      children: `Save`,
                    }),
                    jsx(`button`, {
                      onClick: onClose,
                      className: `px-4 py-2 border border-cyan-400 text-cyan-400 font-mono uppercase`,
                      children: `Cancel`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
var /* System settings dialog. */
  SystemSettingsDialog = ({ isOpen: e, onClose: t }) => {
    let [n, r] = React.useState(false);
    return e
      ? jsxs(`div`, {
          className: `fixed inset-0 flex items-center justify-center z-20`,
          children: [
            jsx(`div`, {
              className: `overlay fixed inset-0 bg-black bg-opacity-70`,
              onClick: t,
            }),
            jsxs(`div`, {
              className: `modal-content relative bg-gray-900 border-2 border-cyan-400 p-6 max-w-md w-full`,
              children: [
                jsx(`h3`, {
                  className: `text-2xl text-yellow-300 font-mono mb-4 uppercase text-center`,
                  children: `System Settings`,
                }),
                n
                  ? jsxs(`div`, {
                      className: `space-y-4`,
                      children: [
                        jsxs(`div`, {
                          className: `flex items-center gap-2 text-pink-500`,
                          children: [
                            jsx(Gn, {
                              size: 24,
                            }),
                            jsx(`p`, {
                              className: `font-mono`,
                              children: `This will overwrite your current settings!`,
                            }),
                          ],
                        }),
                        jsx(`p`, {
                          className: `border border-pink-500 p-3 text-pink-400 font-mono text-sm`,
                          children: `Backups can contain Proxmox API token secrets in plain text. Keep the JSON file private and secure.`,
                        }),
                        jsx(`input`, {
                          type: `file`,
                          accept: `.json`,
                          onChange: (e) => {
                            let t = e.target.files?.[0];
                            if (!t) return;
                            let n = new FileReader();
                            n.onload = async (e) => {
                              try {
                                let t = JSON.parse(e.target?.result);
                                let monitorBackup = t.systemMonitor === void 0
                                  ? null
                                  : parseMonitorBackup(t.systemMonitor);
                                setNetlinks(t.bookmarks);
                                setCategoryOrder(t.categoryOrder);
                                t.collapsedCategories &&
                                  setCollapsedCategories(t.collapsedCategories);
                                t.customCategories && setCustomCategories(t.customCategories);
                                t.searchEngines && setSearchEngines(t.searchEngines);
                                setActiveSearchEngine(t.activeSearchEngine);
                                setWeatherLocation(t.weatherLocation);
                                setTemperatureUnit(t.temperatureUnit);
                                t.timeFormat !== void 0 && setTimeFormat(t.timeFormat);
                                setBackground(t.background);
                                t.backgroundMediaType &&
                                  setBackgroundMediaType(t.backgroundMediaType);
                                t.backgroundBrightness !== void 0 &&
                                  setBackgroundBrightness(t.backgroundBrightness);
                                setUserName(t.userName);
                                setColorTheme(t.colorTheme || `cyberpunk2077`);
                                t.widgets && setWidgets(t.widgets);
                                t.widgetOrder && setWidgetOrder(t.widgetOrder);
                                t.displayPreferences !== void 0 &&
                                  setDisplayPreferences(t.displayPreferences);
                                t.scanLinesMode !== void 0 && setScanLinesMode(t.scanLinesMode);
                                t.tabTitle !== void 0 && setTabTitle(t.tabTitle);
                                await clearCustomFont();
                                t.selectedFont !== void 0 && setSelectedFont(t.selectedFont);
                                t.tabFavicon !== void 0 && setTabFavicon(t.tabFavicon);
                                if (monitorBackup) restoreMonitorBackup(monitorBackup);
                                window.location.reload();
                              } catch (e) {
                                console.error(`Failed to import settings:`, e);
                                alert(`Invalid settings file`);
                              }
                            };
                            n.readAsText(t);
                          },
                          className: `hidden`,
                          id: `settings-import`,
                        }),
                        jsx(`label`, {
                          htmlFor: `settings-import`,
                          className: `block w-full p-3 bg-pink-500 text-black font-mono font-bold hover:bg-pink-400 text-center cursor-pointer`,
                          children: `Confirm Import`,
                        }),
                        jsx(`button`, {
                          onClick: () => r(false),
                          className: `w-full p-3 border border-cyan-400 text-cyan-400 font-mono hover:bg-gray-800`,
                          children: `Cancel`,
                        }),
                      ],
                    })
                  : jsxs(`div`, {
                      className: `space-y-4`,
                      children: [
                        jsx(`p`, {
                          className: `border border-pink-500 p-3 text-pink-400 font-mono text-sm`,
                          children: `The exported JSON includes Proxmox API token secrets in plain text. Store it securely and do not share it.`,
                        }),
                        jsxs(`button`, {
                          onClick: async () => {
                            try {
                              let e = getBackground();
                              let t = e.startsWith(`cached:`);
                              let n = {
                                bookmarks: getNetlinks(),
                                categoryOrder: getCategoryOrder(),
                                collapsedCategories: getCollapsedCategories(),
                                customCategories: getCustomCategories(),
                                searchEngines: getSearchEngines(),
                                activeSearchEngine: getActiveSearchEngine(),
                                weatherLocation: getWeatherLocation(),
                                temperatureUnit: getTemperatureUnit(),
                                timeFormat: getTimeFormat(),
                                background: t
                                  ? `https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg`
                                  : e,
                                backgroundMediaType: t ? `image` : getBackgroundMediaType(),
                                backgroundBrightness: getBackgroundBrightness(),
                                userName: getUserName(),
                                colorTheme: getColorTheme(),
                                widgets: getWidgets(),
                                widgetOrder: getWidgetOrder(),
                                displayPreferences: getDisplayPreferences(),
                                scanLinesMode: getScanLinesMode(),
                                tabTitle: getTabTitle(),
                                selectedFont: getExportableFont(),
                                tabFavicon: getTabFavicon(),
                                systemMonitor: getMonitorBackup(),
                              };
                              let r = new Blob([JSON.stringify(n, null, 2)], {
                                type: `application/json`,
                              });
                              let i = URL.createObjectURL(r);
                              let a = document.createElement(`a`);
                              a.href = i;
                              a.download = `cyberstart-settings.json`;
                              document.body.appendChild(a);
                              a.click();
                              document.body.removeChild(a);
                              URL.revokeObjectURL(i);
                            } catch (e) {
                              console.error(`Error exporting settings:`, e);
                              alert(`Failed to export settings`);
                            }
                          },
                          className: `w-full p-3 bg-cyan-400 text-black font-mono font-bold hover:bg-cyan-300 flex items-center justify-center gap-2`,
                          children: [
                            jsx(Qt, {
                              size: 20,
                            }),
                            `Export Settings`,
                          ],
                        }),
                        jsxs(`button`, {
                          onClick: () => r(true),
                          className: `w-full p-3 bg-pink-500 text-black font-mono font-bold hover:bg-pink-400 flex items-center justify-center gap-2`,
                          children: [
                            jsx(qn, {
                              size: 20,
                            }),
                            `Import Settings`,
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        })
      : null;
  };
// #endregion app/15-dialogs.js

;
// #region app/16-background.js
/* Video background. Shared scope; build with node scripts/build.cjs. */

var BackgroundVideo = memo(({ brightness: e = 100 }) => {
  let t = useRef(null);
  let [n, r] = useState(null);
  let [i, a] = useState(true);
  let [o, s] = useState(false);
  let c = useRef(false);
  let l = useRef(false);
  let u = useRef(null);
  return (
    useEffect(() => {
      let e = null;
      let t = true;
      let n = false;
      return (
        (async () => {
          try {
            a(true);
            let i = await loadBackgroundMedia();
            if (!t) return;
            if (i) {
              if (!i.type) {
                console.error(`Blob is missing MIME type`);
                a(false);
                return;
              }
              e = URL.createObjectURL(i);
              n = true;
              r(e);
              u.current = setTimeout(() => {
                t && (console.error(`Video load timeout`), a(false));
              }, 15e3);
            } else (console.error(`No blob found in storage`), a(false));
          } catch (e) {
            console.error(`Error loading video from storage:`, e);
            a(false);
          }
        })(),
        () => {
          t = false;
          u.current &&= (clearTimeout(u.current), null);
          e &&
            n &&
            setTimeout(() => {
              URL.revokeObjectURL(e);
            }, 500);
        }
      );
    }, []),
    useEffect(() => {
      let e = t.current;
      if (!e || !n) return;
      l.current = false;
      let r = () => {
        l.current ||
          ((l.current = true),
          (u.current &&= (clearTimeout(u.current), null)),
          a(false),
          e.play().catch((e) => {
            console.error(`Video play failed:`, e);
            l.current = false;
          }));
      };
      let i = () => {
        c.current ||= true;
      };
      let o = (e) => {
        let t = e.target.error;
        console.error(`Video error event:`, t);
        u.current &&= (clearTimeout(u.current), null);
        a(false);
      };
      return (
        e.addEventListener(`canplay`, r),
        e.addEventListener(`playing`, i),
        e.addEventListener(`error`, o),
        () => {
          e.removeEventListener(`canplay`, r);
          e.removeEventListener(`playing`, i);
          e.removeEventListener(`error`, o);
        }
      );
    }, [n]),
    useEffect(
      () => () => {
        s(true);
      },
      [],
    ),
    n
      ? jsxs(jsxRuntime.Fragment, {
          children: [
            jsx(`video`, {
              ref: t,
              src: n,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              preload: `auto`,
              className: `fixed top-0 left-0 w-full h-full object-cover`,
              style: {
                opacity: i || o ? 0 : 1,
                transition: `opacity 0.5s ease-in-out`,
                filter: `brightness(${e / 100})`,
                zIndex: -2,
              },
            }),
            jsx(`div`, {
              className: `fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/60`,
              style: {
                pointerEvents: `none`,
                zIndex: -1,
              },
            }),
          ],
        })
      : null
  );
});
BackgroundVideo.displayName = `BackgroundVideo`;
// #endregion app/16-background.js

;
// #region app/17-app.js
/* Main app and mounting. Shared scope; build with node scripts/build.cjs. */

/* Root app: assembles background, widgets, search, netlinks, and dialogs. */
function CyberstartApp() {
  let [, setTimeOfDay] = useState(getTimeOfDay());
  let [greeting, setGreeting] = useState(getGreeting());
  let [aboutOpen, setAboutOpen] = useState(false);
  let [identityOpen, setIdentityOpen] = useState(false);
  let [systemSettingsOpen, setSystemSettingsOpen] = useState(false);
  let [userName, setUserNameState] = useState(getUserName());
  let [background, setBackgroundState] = useState(getBackground());
  let [colorTheme, setColorThemeState] = useState(getColorTheme());
  let [displayPreferences, setDisplayPreferencesState] = useState(getDisplayPreferences());
  let [glitchingElement, setGlitchingElement] = useState(null);
  let [backgroundMediaVersion, setBackgroundMediaVersion] = useState(getBackgroundMediaVersion());
  let [cachedBackgroundUrl, setCachedBackgroundUrl] = useState(null);
  let [scanLinesMode, setScanLinesModeState] = useState(getScanLinesMode());
  let [tabTitle, setTabTitleState] = useState(getTabTitle());
  let [selectedFont, setSelectedFontState] = useState(getSelectedFont());
  let [customFontName, setCustomFontName] = useState(getCustomFontName());
  let [customFontLoaded, setCustomFontLoaded] = useState(false);
  let [tabFavicon, setTabFaviconState] = useState(getTabFavicon());
  let [backgroundBrightness, setBackgroundBrightnessState] = useState(getBackgroundBrightness());
  useLayoutEffect(() => {
    document.title = tabTitle;
  }, [tabTitle]);
  useEffect(() => {
    let e =
      selectedFont === `custom` && customFontLoaded
        ? `'${CUSTOM_FONT_FAMILY}', sans-serif`
        : getFontFamily(selectedFont);
    document.documentElement.style.setProperty(`--app-font-family`, e);
    document.body.style.fontFamily = e;
  }, [customFontLoaded, selectedFont]);
  useEffect(() => {
    let e = null;
    let t = true;
    if (selectedFont !== `custom`) {
      setCustomFontLoaded(false);
      return;
    }
    return (
      (async () => {
        let n = await loadCustomFont();
        if (!n || !t) return;
        e = URL.createObjectURL(n);
        let r = new FontFace(CUSTOM_FONT_FAMILY, `url(${e})`);
        await r.load();
        t && (document.fonts.add(r), setCustomFontLoaded(true));
      })().catch((e) => console.error(`Error loading custom font:`, e)),
      () => {
        t = false;
        e && URL.revokeObjectURL(e);
      }
    );
  }, [selectedFont]);
  useEffect(() => {
    setDisplayPreferencesState(getDisplayPreferences());
    let t = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
      setGreeting(getGreeting());
    }, 6e4);
    return () => clearInterval(t);
  }, [tabTitle]);
  useEffect(() => {
    let e = null;
    let t = true;
    let n = async () => {
      let n = getBackgroundMediaType();
      if (background.startsWith(`cached:`) && n === `image`)
        try {
          console.log(`[App] Loading cached image from IndexedDB`);
          let n = await readMediaBlob(`background-media`);
          if (!t) return;
          n
            ? ((e = URL.createObjectURL(n)),
              console.log(`[App] Created object URL for image:`, e),
              setCachedBackgroundUrl(e))
            : (console.warn(`[App] No cached image found in IndexedDB`),
              setCachedBackgroundUrl(null));
        } catch (e) {
          console.error(`[App] Error loading cached image:`, e);
          setCachedBackgroundUrl(null);
        }
      else setCachedBackgroundUrl(null);
    };
    let r = (n) => {
      n.persisted || ((t = false), e && URL.revokeObjectURL(e));
    };
    return (
      window.addEventListener(`pagehide`, r),
      n(),
      () => {
        t = false;
        window.removeEventListener(`pagehide`, r);
        e && URL.revokeObjectURL(e);
      }
    );
  }, [background, backgroundMediaVersion]);
  let saveIdentity = () => {
    setUserName(userName);
    setGreeting(getGreeting());
    setIdentityOpen(false);
  };
  let changeBackground = (e) => {
    setBackgroundState(e);
    setBackground(e);
    setBackgroundMediaVersion(getBackgroundMediaVersion());
  };
  let changeColorTheme = (e) => {
    setColorThemeState(e);
    setColorTheme(e);
  };
  let refreshDisplayPreferences = () => {
    setDisplayPreferencesState(getDisplayPreferences());
  };
  let changeGlitchingElement = (e) => {
    setGlitchingElement(e);
  };
  let changeScanLinesMode = (e) => {
    setScanLinesModeState(e);
    setScanLinesMode(e);
  };
  let changeTabTitle = (e) => {
    setTabTitleState(e);
    setTabTitle(e);
    document.title = e;
  };
  let changeTabFavicon = (e) => {
    setTabFaviconState(e);
    setTabFavicon(e);
  };
  let changeFont = (e) => {
    selectedFont === `custom` &&
      (clearCustomFont(), setCustomFontName(``), setCustomFontLoaded(false));
    setSelectedFontState(e);
    setSelectedFont(e);
  };
  let uploadCustomFont = async (e) => {
    await saveCustomFont(e);
    setCustomFontName(e.name);
    setSelectedFontState(CUSTOM_FONT_ID);
    setSelectedFont(CUSTOM_FONT_ID);
  };
  let removeCustomFont = async () => {
    await clearCustomFont();
    setCustomFontName(``);
    setCustomFontLoaded(false);
    setSelectedFontState(`default`);
    setSelectedFont(`default`);
  };
  useEffect(() => {
    let e = document.querySelector(`link[rel="icon"]`);
    if (!e) return;
    if (tabFavicon === `Terminal`) {
      e.href = `terminal.svg`;
      return;
    }
    let t = FAVICON_OPTIONS.find((e) => e.name === tabFavicon) || FAVICON_OPTIONS[0];
    let n = renderToStaticMarkup(
      React.createElement(t.icon, {
        xmlns: `http://www.w3.org/2000/svg`,
        color: `#22d3ee`,
        width: 32,
        height: 32,
        strokeWidth: 2,
      }),
    );
    e.href = `data:image/svg+xml,${encodeURIComponent(n)}`;
  }, [tabFavicon]);
  let isVideoBackground = () => {
    let e = getBackgroundMediaType();
    return (
      background.startsWith(`cached:video`) || (e === `video` && background.startsWith(`cached:`))
    );
  };
  let hasImageBackground = () => {
    if (isVideoBackground()) return false;
    if (background.startsWith(`cached:image`)) return true;
    let e = getBackgroundMediaType();
    return background.startsWith(`cached:`) && e === `image`
      ? true
      : background.startsWith(`http`) ||
          background.startsWith(`data:`) ||
          background.startsWith(`/`);
  };
  let changeBackgroundBrightness = (e) => {
    setBackgroundBrightnessState(e);
    setBackgroundBrightness(e);
  };
  let getBackgroundStyle = () => {
    if (isVideoBackground()) return null;
    let e = `brightness(${backgroundBrightness / 100})`;
    return !background || background.startsWith(`cached:`)
      ? cachedBackgroundUrl
        ? {
            backgroundColor: `#000c14`,
            backgroundImage: `url(${cachedBackgroundUrl})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            backgroundAttachment: `fixed`,
            backgroundRepeat: `no-repeat`,
            filter: e,
          }
        : {
            backgroundColor: `#000c14`,
            backgroundImage: `none`,
            filter: e,
          }
      : background.startsWith(`#`)
        ? {
            backgroundColor: background,
            backgroundImage: `none`,
            filter: e,
          }
        : background.startsWith(`http`) ||
            background.startsWith(`data:`) ||
            background.startsWith(`/`)
          ? {
              backgroundColor: `#000c14`,
              backgroundImage: `url(${background})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundAttachment: `fixed`,
              backgroundRepeat: `no-repeat`,
              filter: e,
            }
          : {
              backgroundColor: `#000c14`,
              backgroundImage: `none`,
              filter: e,
            };
  };
  let getTransparentBackgroundStyle = () => ({
    backgroundColor: `transparent`,
    backgroundImage: `none`,
  });
  let showVideoBackground = isVideoBackground();
  let backgroundStyle = getBackgroundStyle();
  let showImageOverlay = hasImageBackground();
  return jsxs(jsxRuntime.Fragment, {
    children: [
      showVideoBackground &&
        jsx(
          BackgroundVideo,
          {
            brightness: backgroundBrightness,
          },
          backgroundMediaVersion,
        ),
      backgroundStyle &&
        jsx(`div`, {
          className: `fixed top-0 left-0 w-full h-full`,
          style: {
            ...backgroundStyle,
            transition: `background-color 0.5s ease-in-out, filter 0.5s ease-in-out`,
            pointerEvents: `none`,
            zIndex: -2,
          },
        }),
      showImageOverlay &&
        jsx(`div`, {
          className: `fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/60`,
          style: {
            pointerEvents: `none`,
            zIndex: -1,
          },
        }),
      jsxs(`div`, {
        className: `cyberpunk-container min-h-screen p-4 sm:p-6 md:p-8 flex flex-col justify-start relative ${colorTheme}`,
        style: getTransparentBackgroundStyle(),
        children: [
          scanLinesMode !== `none` &&
            jsx(`div`, {
              className: scanLinesMode === `belowUI` ? `scan-lines-below` : `scan-lines`,
            }),
          jsx(`div`, {
            className: `cyberpunk-vignette`,
          }),
          jsxs(`button`, {
            onClick: () => setIdentityOpen(true),
            className: `fixed top-4 left-4 z-40 text-cyan-400 hover:text-cyan-300 flex items-center gap-2 px-3 py-1 border border-cyan-400 hover:border-cyan-300 bg-gray-900`,
            children: [
              jsx(Mn, {
                size: 16,
              }),
              jsx(`span`, {
                className: `font-mono`,
                children: `IDENTITY`,
              }),
            ],
          }),
          displayPreferences.showWidgets &&
            jsx(`div`, {
              className: `fixed top-4 right-4 widget-layer w-48`,
              children: jsx(Widgets, {}),
            }),
          jsxs(`main`, {
            className: `flex-1 flex flex-col items-center mt-20 relative z-10`,
            children: [
              jsx(`h2`, {
                className: `text-2xl sm:text-3xl md:text-4xl text-yellow-300 font-mono mb-8 greeting tracking-wider hover-glitch transition-opacity duration-200 ${glitchingElement === `showGreeting` ? `glitch` : ``} ${displayPreferences.showGreeting ? `opacity-100` : `opacity-0 pointer-events-none`}`,
                "data-text": greeting,
                style: {
                  display:
                    displayPreferences.showGreeting || glitchingElement === `showGreeting`
                      ? `block`
                      : `none`,
                },
                children: greeting,
              }),
              (displayPreferences.showTime || displayPreferences.showDate) &&
                jsx(Clock, {
                  showTime: displayPreferences.showTime,
                  showDate: displayPreferences.showDate,
                  glitchingTime: glitchingElement === `showTime`,
                  glitchingDate: glitchingElement === `showDate`,
                }),
              displayPreferences.showSearchBar &&
                jsx(SearchBar, {
                  glitching: glitchingElement === `showSearchBar`,
                }),
              displayPreferences.showQuotes &&
                jsx(QuoteDisplay, {
                  glitching: glitchingElement === `showQuotes`,
                }),
              displayPreferences.showMonitoring && jsx(MonitorDashboard, {}),
              displayPreferences.showNetlinks && jsx(Netlinks, {}),
            ],
          }),
          jsx(`div`, {
            className: `fixed bottom-4 left-4 button-layer`,
            children: jsx(`button`, {
              onClick: () => setSystemSettingsOpen(true),
              className: `bg-gray-900 border-2 border-cyan-400 p-2 text-cyan-400 hover:text-cyan-300 hover:border-cyan-300`,
              title: `System Settings`,
              children: jsx(Yt, {
                size: 24,
              }),
            }),
          }),
          jsx(SettingsPanel, {
            currentBackground: background,
            onBackgroundChange: changeBackground,
            currentColorTheme: colorTheme,
            onColorThemeChange: changeColorTheme,
            onDisplayPreferencesChange: refreshDisplayPreferences,
            onElementGlitch: changeGlitchingElement,
            currentScanLinesMode: scanLinesMode,
            onScanLinesModeChange: changeScanLinesMode,
            currentTabTitle: tabTitle,
            currentFont: selectedFont,
            customFontName: customFontName,
            currentTabFavicon: tabFavicon,
            onTabFaviconChange: changeTabFavicon,
            onTabTitleChange: changeTabTitle,
            onFontChange: changeFont,
            onCustomFontUpload: uploadCustomFont,
            onClearCustomFont: removeCustomFont,
            currentBackgroundBrightness: backgroundBrightness,
            onBackgroundBrightnessChange: changeBackgroundBrightness,
          }),
          jsx(AboutDialog, {
            isOpen: aboutOpen,
            onClose: () => setAboutOpen(false),
          }),
          jsx(IdentityDialog, {
            isOpen: identityOpen,
            onClose: () => setIdentityOpen(false),
            userName: userName,
            onUserNameChange: setUserNameState,
            onSave: saveIdentity,
          }),
          jsx(SystemSettingsDialog, {
            isOpen: systemSettingsOpen,
            onClose: () => setSystemSettingsOpen(false),
          }),
          jsxs(`footer`, {
            className: `mt-auto pt-4 text-center relative z-10`,
            children: [
              jsx(`button`, {
                onClick: () => setAboutOpen(!aboutOpen),
                className: `text-pink-500 hover:text-pink-400`,
                "aria-label": `Show information`,
                children: jsx(hn, {
                  size: 20,
                }),
              }),
              jsx(`p`, {
                className: `text-gray-500 text-xs font-mono mt-2`,
                children: `© 2077 Arasaka Corporation. All rights reserved. Night City License #NC-77-2077`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
createRoot(document.getElementById(`root`)).render(jsx(CyberstartApp, {}));
// #endregion app/17-app.js
