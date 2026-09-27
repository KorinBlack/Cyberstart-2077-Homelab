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
