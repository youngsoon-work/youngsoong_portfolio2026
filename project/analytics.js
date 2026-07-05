// Google Analytics 4 / Firebase Analytics for the portfolio.
// Loaded once per page from the <head>. Reports to the GA4 property
// (G-0VWMK9ESXY) linked to the Firebase project portfolio2026-5cf9e, so data
// shows in the Firebase console Analytics dashboard.
//
// Self-exclusion (works on any device/browser/network, no extension needed):
//   visit  youngsoon.work/?ga-optout   once to stop tracking on this browser
//   visit  youngsoon.work/?ga-optin    to resume tracking
// The choice is remembered in a first-party cookie for ~2 years.
(function () {
  var MEASUREMENT_ID = 'G-0VWMK9ESXY';
  var OPTOUT_COOKIE = 'ys_ga_optout';

  // Toggle opt-out via URL params.
  var qs = window.location.search;
  if (qs.indexOf('ga-optout') !== -1) {
    document.cookie = OPTOUT_COOKIE + '=1; path=/; max-age=63072000; samesite=lax';
  } else if (qs.indexOf('ga-optin') !== -1) {
    document.cookie = OPTOUT_COOKIE + '=; path=/; max-age=0; samesite=lax';
  }

  // If opted out, disable GA entirely and don't even load the tag.
  if (document.cookie.indexOf(OPTOUT_COOKIE + '=1') !== -1) {
    window['ga-disable-' + MEASUREMENT_ID] = true;
    return;
  }

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
