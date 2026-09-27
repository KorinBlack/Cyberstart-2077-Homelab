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
