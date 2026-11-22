(function () {
  'use strict';
  var key = 'portfolio-colour-mode';
  var root = document.documentElement;
  var control = document.getElementById('colour-mode');
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  if (!control) return;

  function effectiveMode(mode) {
    return mode === 'dark' || (mode === 'system' && system.matches) ? 'dark' : 'light';
  }
  function apply(mode, persist) {
    if (['light', 'system', 'dark'].indexOf(mode) === -1) mode = 'light';
    root.dataset.colourMode = mode;
    root.dataset.theme = effectiveMode(mode);
    control.value = mode;
    if (persist) {
      try { localStorage.setItem(key, mode); } catch (error) {}
    }
  }
  apply(root.dataset.colourMode || 'light', false);
  control.addEventListener('change', function () { apply(control.value, true); });
  function onSystemChange() {
    if (root.dataset.colourMode === 'system') apply('system', false);
  }
  if (system.addEventListener) system.addEventListener('change', onSystemChange);
  else if (system.addListener) system.addListener(onSystemChange);
}());
