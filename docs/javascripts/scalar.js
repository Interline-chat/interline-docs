/* Mounts the Scalar API reference on pages containing #scalar-api-reference.
 * Uses Material's document$ observable so it also works with
 * navigation.instant (SPA-style page loads), where plain inline
 * <script> tags in page content are NOT re-executed.
 *
 * NOTE: do not manipulate Scalar's DOM from here (no .remove(), no inline
 * style overrides) — its Vue renderer crashes if nodes change under it.
 * Unwanted widgets (Ask AI, Generate MCP, dev toolbar, "Powered by
 * Scalar") are hidden with CSS in docs/api/reference.md instead. */
(function () {
  // Pinned version — bump deliberately after testing, don't float "latest"
  var SCALAR_CDN =
    "https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.62.9/dist/browser/standalone.js";

  function mount() {
    var el = document.getElementById("scalar-api-reference");
    if (!el || el.dataset.mounted) return;
    el.dataset.mounted = "true";

    var init = function () {
      window.Scalar.createApiReference(el, {
        url: el.dataset.specUrl,
        hideDarkModeToggle: true, // follow the MkDocs theme toggle instead
      });
    };

    if (window.Scalar) {
      init();
    } else {
      var s = document.createElement("script");
      s.src = SCALAR_CDN;
      s.onload = init;
      document.body.appendChild(s);
    }
  }

  if (window.document$) {
    // Material for MkDocs: fires on initial load AND every instant navigation
    window.document$.subscribe(mount);
  } else {
    document.addEventListener("DOMContentLoaded", mount);
  }
})();
