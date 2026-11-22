(function () {
  'use strict';
  var button = document.getElementById('search-toggle');
  var panel = document.getElementById('site-search');
  var field = document.getElementById('search-query');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  if (!button || !panel || !field || !list) return;

  var documents = null;
  var loading = null;
  function close() {
    panel.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    button.focus();
  }
  function open() {
    panel.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    field.focus();
    if (!loading) {
      loading = fetch(panel.dataset.indexUrl || window.portfolioSearchIndex || '/search.json')
        .then(function (response) {
          if (!response.ok) throw new Error('Search index unavailable');
          return response.json();
        })
        .then(function (data) { documents = data; status.textContent = 'Type to search posts'; })
        .catch(function () { documents = []; status.textContent = 'Search is unavailable'; });
    }
  }
  button.addEventListener('click', function () {
    if (panel.hidden) open(); else close();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !panel.hidden) close();
  });
  function render() {
    var query = field.value.trim().toLocaleLowerCase();
    list.replaceChildren();
    if (!documents) return;
    if (!query) { status.textContent = 'Type to search posts'; return; }
    var results = documents.filter(function (post) {
      return (post.title + ' ' + post.text).toLocaleLowerCase().includes(query);
    }).slice(0, 20);
    status.textContent = results.length + (results.length === 1 ? ' result' : ' results');
    results.forEach(function (post) {
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = post.url;
      link.textContent = post.title;
      item.appendChild(link);
      list.appendChild(item);
    });
  }
  field.addEventListener('input', render);
  var origOpen = open;
  open = function () {
    origOpen();
    if (loading) loading.then(render);
  };
}());
