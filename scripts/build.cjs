const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const parts = [
  'vendor/00-react-runtime.js',
  'app/01-fonts.js',
  'vendor/02-react-server.js',
  'app/03-media-storage.js',
  'app/04-preferences.js',
  'vendor/05-jsx-runtime.js',
  'app/06-clock.js',
  'vendor/07-icons.js',
  'app/08-search.js',
  'vendor/09-drag-drop.js',
  'app/10-netlinks.js',
  'app/11-quotes.js',
  'app/12-widgets.js',
  'app/13-settings.js',
  'app/14-monitoring.js',
  'vendor/14-html-to-image.js',
  'app/15-dialogs.js',
  'app/16-background.js',
  'app/17-app.js',
];

const header = `/*
 * Cyberstart 2077 Custom — generated from src/app and src/vendor.
 * Edit the files in src/app, then run: node scripts/build.cjs
 * Based on Cyberpunk 2077 Themed Homepage 1.18 by TealLogic (MPL-2.0).
 */\n`;

const code = header + parts.map((file) => {
  const source = fs.readFileSync(path.join(root, 'src', file), 'utf8');
  return `\n;\n// #region ${file}\n${source.trim()}\n// #endregion ${file}\n`;
}).join('');

new vm.Script(code, { filename: 'index-BYk5zujn.js' });
const output = path.join(root, 'assets', 'index-BYk5zujn.js');
fs.writeFileSync(output, code, 'utf8');
console.log(`Built ${path.relative(root, output)} from ${parts.length} source files.`);
