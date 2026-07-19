/* Gentle scroll reveal — adds .in to [data-reveal] when it enters view.
   Fail-safe: if IntersectionObserver is unavailable, never fires, or an
   element is already in view, content is still revealed. Honors
   prefers-reduced-motion (CSS handles the fully-visible fallback). */
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!els.length) return;

  function show(el) { el.classList.add('in'); }
  function showAll() { els.forEach(show); }

  if (!('IntersectionObserver' in window)) { showAll(); return; }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  els.forEach(function (el) { io.observe(el); });

  // Immediately reveal anything already within the viewport (covers the
  // common case where IO callbacks are delayed or suppressed).
  function revealInView() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach(function (el) {
      if (el.classList.contains('in')) return;
      var r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) show(el);
    });
  }
  requestAnimationFrame(revealInView);
  window.addEventListener('load', revealInView);

  // Ultimate safety net: never leave content permanently hidden.
  setTimeout(showAll, 1200);
})();
