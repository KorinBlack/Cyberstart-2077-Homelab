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
