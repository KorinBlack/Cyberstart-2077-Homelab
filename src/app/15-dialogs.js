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
