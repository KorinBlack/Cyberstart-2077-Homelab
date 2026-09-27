/* Font options and helpers. Shared scope; build with node scripts/build.cjs. */

var DEFAULT_FONT_ID = `default`;
var CUSTOM_FONT_ID = `custom`;
var CUSTOM_FONT_FAMILY = `User Custom Font`;
var DEFAULT_FONT_FAMILY = `'Fira Code Variable', 'Courier New', monospace`;
var FONT_OPTIONS = [
  {
    id: DEFAULT_FONT_ID,
    label: `Default`,
    family: DEFAULT_FONT_FAMILY,
  },
  {
    id: `oxanium`,
    label: `Oxanium`,
    family: `'Oxanium Variable', sans-serif`,
  },
  {
    id: `nova-square`,
    label: `Nova Square`,
    family: `'Nova Square', sans-serif`,
  },
  {
    id: `rajdhani`,
    label: `Rajdhani`,
    family: `'Rajdhani', sans-serif`,
  },
  {
    id: `bitcount-single`,
    label: `Bitcount Single`,
    family: `'Bitcount Single Variable', sans-serif`,
  },
];
var getFontFamily = (e) => FONT_OPTIONS.find((t) => t.id === e)?.family || DEFAULT_FONT_FAMILY;
