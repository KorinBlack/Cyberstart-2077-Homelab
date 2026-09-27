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
