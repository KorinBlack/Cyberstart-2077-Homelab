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
