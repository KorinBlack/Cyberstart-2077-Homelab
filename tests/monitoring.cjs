const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function createMonitorContext() {
  const context = vm.createContext({
    React: { createElement() {} },
    URL,
    AbortController,
    performance,
    setTimeout,
    clearTimeout,
    localStorage: { getItem: () => null, setItem() {} },
    chrome: { permissions: { contains: async () => true } },
  });
  const source = fs.readFileSync(path.join(__dirname, '..', 'src/app/14-monitoring.js'), 'utf8');
  vm.runInContext(source, context);
  return context;
}

function stubMonitorUi(monitor) {
  monitor.monitorElement = (type, props, ...children) => ({ type, props: props || {}, children });
  monitor.Rt = monitor.zt = monitor.Mn = monitor.En = monitor.ln = monitor.zn = monitor.Wn = monitor.Qn = () => null;
  monitor.Wr = () => [];
  monitor.Ur = () => ({});
  monitor.Hi = monitor.X = monitor.vo = monitor.Qr = monitor.to = () => null;
  monitor.za = 'DndContext';
  monitor.ao = 'SortableContext';
  monitor.mo = () => ({ attributes: {}, listeners: {}, setNodeRef() {}, transform: null, transition: null, isDragging: false });
  monitor.Or = { Transform: { toString: () => null } };
}

function monitorUiNodes(root, monitor) {
  const nodes = [];
  function visit(node) {
    if (Array.isArray(node)) return node.forEach(visit);
    if (!node || typeof node !== 'object') return;
    nodes.push(node);
    if (node.type === monitor.MonitorCategory) visit(node.type(node.props));
    node.children.forEach(visit);
  }
  visit(root);
  return nodes;
}

test('monitor URLs limit Proxmox to HTTPS and host permissions to one host', () => {
  const monitor = createMonitorContext();
  assert.equal(monitor.proxmoxResourcesUrl('https://pve.local:8006/'), 'https://pve.local:8006/api2/json/cluster/resources');
  assert.equal(monitor.monitorHostPattern('https://pve.local:8006/'), 'https://pve.local/*');
  assert.throws(() => monitor.proxmoxResourcesUrl('http://pve.local:8006/'), /HTTPS/);
  assert.throws(() => monitor.monitorHostPattern('https:\/\/*.example.com'), /wildcards/);
  assert.equal(monitor.parseMonitorUrl('https://service.example/health?check=1').search, '?check=1');
});

test('Proxmox telemetry counts nodes and running guests', () => {
  const monitor = createMonitorContext();
  const result = monitor.summarizeProxmoxResources({ data: [
    { type: 'node', node: 'pve1', status: 'online' },
    { type: 'node', node: 'pve2', status: 'offline' },
    { type: 'qemu', status: 'running' },
    { type: 'lxc', status: 'stopped' },
  ] });
  assert.equal(result.nodes.length, 2);
  assert.equal(result.onlineNodes, 1);
  assert.equal(result.guests, 2);
  assert.equal(result.guestRows.length, 2);
  assert.equal(result.runningGuests, 1);
});

test('HTTP checks accept exactly status 200', async () => {
  const monitor = createMonitorContext();
  const requests = [];
  monitor.fetch = async (url, options) => {
    requests.push({ url, options });
    return { status: requests.length === 1 ? 200 : 204, statusText: 'OK', body: { cancel: async () => {} } };
  };
  const card = { type: 'http', url: 'https://service.example/health?check=1' };
  assert.equal((await monitor.probeMonitorCard(card)).phase, 'ok');
  assert.equal((await monitor.probeMonitorCard(card)).phase, 'error');
  assert.equal(requests[0].options.method, 'GET');
  assert.equal(requests[0].options.credentials, 'omit');
  assert.equal(requests[0].url, card.url);
});

test('Proxmox token stays in Authorization header and redirects are blocked', async () => {
  const monitor = createMonitorContext();
  let request;
  monitor.fetch = async (url, options) => {
    request = { url, options };
    return {
      ok: true,
      json: async () => ({ data: [{ type: 'node', node: 'pve1', status: 'online', cpu: 0.25 }] }),
    };
  };
  const result = await monitor.probeMonitorCard({
    type: 'proxmox', url: 'https://pve.local:8006/', tokenId: 'viewer@pve!dashboard', tokenSecret: 'secret-123',
  });
  assert.equal(result.phase, 'ok');
  assert.equal(request.url, 'https://pve.local:8006/api2/json/cluster/resources');
  assert.equal(request.options.headers.Authorization, 'PVEAPIToken=viewer@pve!dashboard=secret-123');
  assert.equal(request.options.redirect, 'error');
  assert.equal(request.url.includes('secret-123'), false);
});

test('a rejected TLS connection remains an error and exposes no token', async () => {
  const monitor = createMonitorContext();
  monitor.fetch = async () => { throw new TypeError('Failed to fetch'); };
  const result = await monitor.probeMonitorCard({
    type: 'proxmox', url: 'https://pve.local:8006/', tokenId: 'viewer@pve!dashboard', tokenSecret: 'secret-123',
  });
  assert.equal(result.phase, 'error');
  assert.equal(result.connectionError, true);
  assert.equal(result.message.includes('secret-123'), false);
  assert.equal(monitor.monitorProxmoxServerUrl('https://pve.local:8006/path'), 'https://pve.local:8006');
});

test('a missing host grant prevents the network request', async () => {
  const monitor = createMonitorContext();
  monitor.chrome.permissions.contains = async () => false;
  monitor.fetch = () => { throw Error('fetch should not run'); };
  const result = await monitor.probeMonitorCard({ type: 'http', url: 'https://service.example/' });
  assert.equal(result.phase, 'access');
});

test('permission requests name only the configured host', async () => {
  const monitor = createMonitorContext();
  let requested;
  monitor.chrome.permissions.request = async (permissions) => {
    requested = permissions.origins;
    return true;
  };
  assert.equal(await monitor.requestMonitorHostAccess('https://pve.local:8006/'), true);
  assert.deepEqual(Array.from(requested), ['https://pve.local/*']);
});

test('refresh intervals are configurable within safe bounds', () => {
  const monitor = createMonitorContext();
  assert.equal(monitor.monitorIntervalSeconds({ type: 'http' }), 30);
  assert.equal(monitor.monitorIntervalSeconds({ type: 'proxmox' }), 60);
  assert.equal(monitor.monitorIntervalSeconds({ type: 'http', intervalSeconds: 2 }), 15);
  assert.equal(monitor.monitorIntervalSeconds({ type: 'http', intervalSeconds: 5000 }), 3600);
});

test('existing cards remain in Live Telemetry and saved subsections load', () => {
  const monitor = createMonitorContext();
  const values = new Map([
    ['systemMonitorCategories', JSON.stringify([{ id: 'rack-a', name: 'RACK A' }])],
    ['systemMonitorCollapsedCategories', JSON.stringify({ 'rack-a': true })],
  ]);
  monitor.localStorage.getItem = (key) => values.get(key) ?? null;
  const categories = monitor.getMonitorCategories();
  assert.deepEqual(Array.from(categories, (category) => category.name), ['LIVE TELEMETRY', 'RACK A']);
  assert.equal(monitor.monitorCardCategory({ type: 'http' }, categories), 'live-telemetry');
  assert.equal(monitor.monitorCardCategory({ categoryId: 'rack-a' }, categories), 'rack-a');
  assert.equal(monitor.getMonitorCollapsedCategories()['rack-a'], true);
});

test('System Monitor backup restores Proxmox secrets, HTTP checks, and layout', () => {
  const source = createMonitorContext();
  const saved = new Map([
    ['systemMonitorCards', JSON.stringify([
      { id: 'pve', type: 'proxmox', name: 'Cluster', categoryId: 'rack-a', url: 'https://pve.local:8006/', tokenId: 'viewer@pve!dashboard', tokenSecret: 'secret-123', maxGuests: 5, intervalSeconds: 90 },
      { id: 'site', type: 'http', name: 'Site', categoryId: 'live-telemetry', url: 'https://example.test/health', intervalSeconds: 30 },
    ])],
    ['systemMonitorCategoriesOrdered', JSON.stringify([{ id: 'rack-a', name: 'RACK A' }, { id: 'live-telemetry', name: 'LIVE TELEMETRY' }])],
    ['systemMonitorCollapsed', 'true'],
    ['systemMonitorCollapsedCategories', JSON.stringify({ 'rack-a': true })],
  ]);
  source.localStorage.getItem = (key) => saved.get(key) ?? null;
  const exported = JSON.parse(JSON.stringify(source.getMonitorBackup()));
  assert.equal(exported.cards[0].tokenSecret, 'secret-123');

  const target = createMonitorContext();
  const restored = new Map();
  target.localStorage.getItem = (key) => restored.get(key) ?? null;
  target.localStorage.setItem = (key, value) => restored.set(key, value);
  target.restoreMonitorBackup(target.parseMonitorBackup(exported));

  assert.equal(target.getMonitorCards()[0].tokenSecret, 'secret-123');
  assert.equal(target.getMonitorCards()[1].url, 'https://example.test/health');
  assert.deepEqual(Array.from(target.getMonitorCategories(), (category) => category.id), ['rack-a', 'live-telemetry']);
  assert.equal(target.getMonitorCollapsed(), true);
  assert.equal(target.getMonitorCollapsedCategories()['rack-a'], true);
});

test('invalid System Monitor backup is rejected before settings are overwritten', () => {
  const monitor = createMonitorContext();
  const backup = {
    cards: [{ id: 'pve', type: 'proxmox', name: 'Cluster', url: 'http://pve.local:8006/', tokenId: 'viewer@pve!dashboard', tokenSecret: 'secret-123' }],
    categories: [{ id: 'live-telemetry', name: 'LIVE TELEMETRY' }],
    collapsed: false,
    collapsedCategories: {},
  };
  assert.throws(() => monitor.parseMonitorBackup(backup), /HTTPS/);
  backup.cards[0].url = 'https://pve.local:8006/';
  delete backup.cards[0].tokenSecret;
  assert.throws(() => monitor.parseMonitorBackup(backup), /token/);
});

test('monitor headings use collapsible sections and icon actions', () => {
  const monitor = createMonitorContext();
  const saved = new Map();
  monitor.localStorage.setItem = (key, value) => saved.set(key, value);
  monitor.useState = (initial) => [typeof initial === 'function' ? initial() : initial, () => {}];
  stubMonitorUi(monitor);
  const root = monitor.MonitorDashboard();
  const nodes = monitorUiNodes(root, monitor);
  const mainToggle = nodes.find((node) => node.props['aria-controls'] === 'system-monitor-content');
  const sectionToggle = nodes.find((node) => node.props['aria-controls'] === 'monitor-category-live-telemetry');
  assert.equal(mainToggle.props['aria-expanded'], true);
  assert.equal(sectionToggle.children[0].children[0], '// LIVE TELEMETRY');
  assert.ok(nodes.some((node) => node.props['aria-label'] === 'Edit System Monitor'));
  assert.ok(nodes.some((node) => node.props['aria-label'] === 'Add monitoring node'));
  mainToggle.props.onClick();
  sectionToggle.props.onClick();
  assert.equal(saved.get('systemMonitorCollapsed'), 'true');
  assert.equal(JSON.parse(saved.get('systemMonitorCollapsedCategories'))['live-telemetry'], true);
});

test('subsection manager and add panel expose category and monitor type', () => {
  const monitor = createMonitorContext();
  const values = new Map();
  monitor.localStorage.getItem = (key) => values.get(key) ?? null;
  monitor.localStorage.setItem = (key, value) => values.set(key, value);
  stubMonitorUi(monitor);
  const hooks = [];
  let cursor = 0;
  monitor.useState = (initial) => {
    const index = cursor++;
    if (!(index in hooks)) hooks[index] = typeof initial === 'function' ? initial() : initial;
    return [hooks[index], (next) => { hooks[index] = typeof next === 'function' ? next(hooks[index]) : next; }];
  };
  function render() {
    cursor = 0;
    return monitorUiNodes(monitor.MonitorDashboard(), monitor);
  }
  let nodes = render();
  nodes.find((node) => node.props['aria-label'] === 'Edit System Monitor').props.onClick();
  nodes = render();
  assert.ok(nodes.some((node) => node.type === 'button' && node.children[0] === 'SAVE'));
  nodes.find((node) => node.props.className === 'monitor-category-add-button').props.onClick();
  nodes = render();
  nodes.find((node) => node.props['aria-label'] === 'New category name').props.onChange({ target: { value: 'Rack A' } });
  nodes = render();
  nodes.find((node) => node.props.className === 'monitor-category-add' && node.type === 'form').props.onSubmit({ preventDefault() {} });
  nodes = render();
  assert.equal(nodes.filter((node) => node.props.className === 'monitor-dashboard__section-toggle').length, 2);
  const rackId = monitor.getMonitorCategories()[1].id;
  nodes.find((node) => node.type === 'DndContext').props.onDragEnd({ active: { id: rackId }, over: { id: 'live-telemetry' } });
  nodes = render();
  assert.equal(monitor.getMonitorCategories()[0].id, rackId);
  nodes.find((node) => node.props['aria-label'] === 'Add monitoring node').props.onClick();
  nodes = render();
  assert.equal(nodes.find((node) => node.type === 'select' && node.props.value === 'proxmox').props.value, 'proxmox');
  assert.ok(nodes.some((node) => node.type === 'option' && node.children[0] === 'Rack A'));
  nodes.find((node) => node.type === 'select' && node.props.value === 'proxmox').props.onChange({ target: { value: 'http' } });
  nodes = render();
  assert.ok(nodes.some((node) => node.type === 'select' && node.props.value === 'http'));
  nodes.find((node) => node.props.className === 'monitor-dashboard__save').props.onClick();
  nodes = render();
  assert.ok(nodes.some((node) => node.props['aria-label'] === 'Edit System Monitor'));
  assert.equal(nodes.some((node) => node.props.className === 'monitor-category-add-button'), false);
});

test('category and card orders are independent and persistable', () => {
  const monitor = createMonitorContext();
  const categories = [
    { id: 'live-telemetry', name: 'LIVE TELEMETRY' },
    { id: 'rack-a', name: 'Rack A' },
  ];
  const cards = [
    { id: 'a', categoryId: 'live-telemetry' },
    { id: 'rack', categoryId: 'rack-a' },
    { id: 'b', categoryId: 'live-telemetry' },
  ];
  const reorderedCards = monitor.reorderMonitorCards(cards, categories, 'live-telemetry', 'a', 'b');
  assert.deepEqual(Array.from(reorderedCards, (card) => card.id), ['b', 'rack', 'a']);
  assert.deepEqual(Array.from(monitor.reorderMonitorItems(categories, 'rack-a', 'live-telemetry'), (category) => category.id), ['rack-a', 'live-telemetry']);
  const values = new Map();
  monitor.localStorage.getItem = (key) => values.get(key) ?? null;
  monitor.localStorage.setItem = (key, value) => values.set(key, value);
  monitor.saveMonitorCategories(monitor.reorderMonitorItems(categories, 'rack-a', 'live-telemetry'));
  assert.deepEqual(Array.from(monitor.getMonitorCategories(), (category) => category.id), ['rack-a', 'live-telemetry']);
});

test('card edit, delete and grip controls only appear in edit mode', () => {
  const monitor = createMonitorContext();
  stubMonitorUi(monitor);
  monitor.useState = (initial) => [initial, () => {}];
  monitor.useEffect = () => {};
  const props = {
    card: { id: 'a', type: 'http', name: 'Service', url: 'https://example.test/' },
    onEdit() {}, onRemove() {}, permissionVersion: 0,
  };
  let nodes = monitorUiNodes(monitor.MonitorCard({ ...props, editing: false }), monitor);
  assert.equal(nodes.some((node) => node.props['aria-label'] === 'Edit Service'), false);
  assert.equal(nodes.some((node) => node.props['aria-label'] === 'Remove Service'), false);
  nodes = monitorUiNodes(monitor.MonitorCard({ ...props, editing: true }), monitor);
  assert.ok(nodes.some((node) => node.props['aria-label'] === 'Move Service'));
  assert.ok(nodes.some((node) => node.props['aria-label'] === 'Edit Service'));
  assert.ok(nodes.some((node) => node.props['aria-label'] === 'Remove Service'));
});

test('category controls and card drag callback are only active while editing', () => {
  const monitor = createMonitorContext();
  stubMonitorUi(monitor);
  const calls = [];
  const props = {
    category: { id: 'rack-a', name: 'Rack A' },
    cards: [{ id: 'a' }, { id: 'b' }],
    isCollapsed: false,
    renaming: false,
    onReorderCards: (...args) => calls.push(args),
    onToggle() {}, onEditCategory() {}, onDeleteCategory() {},
    onEditCard() {}, onRemoveCard() {}, permissionVersion: 0,
  };
  let nodes = monitorUiNodes(monitor.MonitorCategory({ ...props, editing: false }), monitor);
  assert.equal(nodes.some((node) => node.props['aria-label'] === 'Move Rack A'), false);
  nodes.find((node) => node.type === 'DndContext').props.onDragEnd({ active: { id: 'a' }, over: { id: 'b' } });
  assert.equal(calls.length, 0);
  nodes = monitorUiNodes(monitor.MonitorCategory({ ...props, editing: true }), monitor);
  assert.ok(nodes.some((node) => node.props['aria-label'] === 'Move Rack A'));
  assert.ok(nodes.some((node) => node.props['aria-label'] === 'Edit Rack A'));
  assert.ok(nodes.some((node) => node.props['aria-label'] === 'Delete Rack A'));
  nodes.find((node) => node.type === 'DndContext').props.onDragEnd({ active: { id: 'a' }, over: { id: 'b' } });
  assert.deepEqual(calls[0], ['rack-a', 'a', 'b']);
});
