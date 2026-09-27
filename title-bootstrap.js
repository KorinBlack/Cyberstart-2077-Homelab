try {
  const savedTabTitle = localStorage.getItem('tabTitle');
  document.title = savedTabTitle || 'Cyberstart 2077';
} catch {
  // localStorage may be unavailable in restricted browser contexts.
  document.title = 'Cyberstart 2077';
}
