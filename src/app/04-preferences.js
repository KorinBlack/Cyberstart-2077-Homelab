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
