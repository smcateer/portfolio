/* Scroll only the wide element, never the full article or page. */
(function () {
  'use strict';
  var root = document.querySelector('.post-body');
  if (!root) return;
  var regions = [];

  function wrap(element, type) {
    if (element.closest('.content-scroll')) return;
    var parent = element.parentNode;
    if (!parent) return;
    var region = document.createElement('div');
    region.className = 'content-scroll content-scroll--' + type;
    parent.insertBefore(region, element);
    region.appendChild(element);
    regions.push({element: region, type: type});
    return region;
  }

  // Tables must retain their natural column widths rather than squeeze text.
  root.querySelectorAll('table').forEach(function (table) {
    wrap(table, 'table');
  });

  // SVG/canvas/iframe charts with an explicit pixel width can be wider than
  // the reading column. Keep them at their intended size in a scroll region.
  root.querySelectorAll('svg[width], canvas[width], iframe[width]').forEach(function (media) {
    if (media.closest('.content-scroll')) return;
    var specified = media.getAttribute('width') || '';
    var px = /^\s*(\d+(?:\.\d+)?)\s*(?:px)?\s*$/i.exec(specified);
    if (!px || Number(px[1]) <= root.clientWidth) return;
    var region = wrap(media, 'media');
    if (region) media.style.maxWidth = 'none';
  });

  function updateAccessibility() {
    regions.forEach(function (item) {
      var region = item.element;
      var hasOverflow = region.scrollWidth > region.clientWidth + 2;
      if (hasOverflow) {
        region.setAttribute('role', 'region');
        region.setAttribute('aria-label', item.type === 'table' ? 'Scrollable table' : 'Scrollable chart or diagram');
        region.tabIndex = 0;
      } else {
        region.removeAttribute('role');
        region.removeAttribute('aria-label');
        region.removeAttribute('tabindex');
      }
    });
  }

  updateAccessibility();
  window.addEventListener('resize', updateAccessibility, {passive: true});
  window.addEventListener('load', updateAccessibility, {once: true});
  if (window.ResizeObserver) {
    var observer = new ResizeObserver(updateAccessibility);
    regions.forEach(function (item) { observer.observe(item.element); });
  }
}());
