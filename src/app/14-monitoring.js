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
