// Google Analytics 4 / Firebase Analytics for the portfolio.
// Loaded once per page from the <head>. Injects the gtag.js loader and
// fires the initial page_view — full page loads (this is a multi-page site)
// each report automatically. Reports to the GA4 property linked to the
// Firebase project portfolio2026-5cf9e, so data shows in the Firebase
// console Analytics dashboard.
(function () {
  var MEASUREMENT_ID = 'G-0VWMK9ESXY';

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
})();
