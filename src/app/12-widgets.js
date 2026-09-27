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
