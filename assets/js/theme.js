(function () {
  'use strict';
  var key = 'portfolio-colour-mode';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var label = document.getElementById('theme-toggle-label');
  var menu = document.getElementById('theme-menu');
  var options = Array.prototype.slice.call(document.querySelectorAll('[data-theme-choice]'));
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  if (!toggle || !menu || !label) return;

  function effective(mode) {
    return mode === 'dark' || (mode === 'system' && system.matches) ? 'dark' : 'light';
  }
  function apply(mode, save) {
    if (!['light', 'system', 'dark'].includes(mode)) mode = 'light';
    root.dataset.colourMode = mode;
    root.dataset.theme = effective(mode);
    label.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
    toggle.setAttribute('aria-label', 'Colour scheme: ' + label.textContent);
    options.forEach(function (option) {
      option.setAttribute('aria-checked', String(option.dataset.themeChoice === mode));
    });
    if (save) {
      try { localStorage.setItem(key, mode); } catch (error) {}
    }
  }
  function close(restoreFocus) {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  }
  function open() {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    var active = options.find(function (option) {
      return option.dataset.themeChoice === root.dataset.colourMode;
    });
    (active || options[0]).focus();
  }
  apply(root.dataset.colourMode || 'light', false);
  toggle.addEventListener('click', function () {
    if (menu.hidden) open();
    else close(true);
  });
  toggle.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      open();
    }
  });
  options.forEach(function (option) {
    option.addEventListener('click', function () {
      apply(option.dataset.themeChoice, true);
      close(true);
    });
    option.addEventListener('keydown', function (event) {
      var current = options.indexOf(option), next = current;
      if (event.key === 'ArrowDown') next = (current + 1) % options.length;
      else if (event.key === 'ArrowUp') next = (current + options.length - 1) % options.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = options.length - 1;
      else if (event.key === 'Escape') {
        event.preventDefault();
        close(true);
        return;
      } else return;
      event.preventDefault();
      options[next].focus();
    });
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.theme-picker')) close(false);
  });
  document.addEventListener('focusin', function (event) {
    if (!menu.hidden && !event.target.closest('.theme-picker')) close(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) close(true);
  });
  function onSystemChange() {
    if (root.dataset.colourMode === 'system') apply('system', false);
  }
  if (system.addEventListener) system.addEventListener('change', onSystemChange);
  else if (system.addListener) system.addListener(onSystemChange);
}());
