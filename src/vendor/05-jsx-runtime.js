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
