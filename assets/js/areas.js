// Domain Areas filter: shows one area's items on the current page. Works without JS too (everything shows).
(function () {
  var nav = document.querySelector('[data-area-filter]');
  if (!nav) return;
  var buttons = Array.prototype.slice.call(nav.querySelectorAll('button[data-area]'));
  var keys = buttons.map(function (b) { return b.getAttribute('data-area'); });
  var scrollId = nav.getAttribute('data-scroll');

  function apply(k, fromClick) {
    buttons.forEach(function (b) {
      var on = b.getAttribute('data-area') === k;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.querySelectorAll('[data-areas]').forEach(function (el) {
      var list = (el.getAttribute('data-areas') || '').split(' ');
      var show = k === 'all' ? !el.hasAttribute('data-hide-in-all') : list.indexOf(k) > -1;
      el.hidden = !show;
    });
    document.querySelectorAll('[data-hide-if-empty]').forEach(function (c) {
      c.hidden = !c.querySelector('[data-areas]:not([hidden])');
    });
    document.querySelectorAll('[data-cs-link]').forEach(function (a) {
      a.setAttribute('href', a.getAttribute('data-cs-link') + (k === 'all' ? '' : '#' + k));
    });
    try { history.replaceState(null, '', k === 'all' ? location.pathname + location.search : '#' + k); } catch (e) {}
    if (fromClick && scrollId) {
      var t = document.getElementById(scrollId);
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  var h = location.hash.replace('#', '');
  apply(keys.indexOf(h) > -1 ? h : 'all', false);
  nav.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('button[data-area]') : null;
    if (b) apply(b.getAttribute('data-area'), true);
  });
})();
