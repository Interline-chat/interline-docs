/* Mounts the Scalar API reference on pages containing #scalar-api-reference.
 * Uses Material's document$ observable so it also works with
 * navigation.instant (SPA-style page loads), where plain inline
 * <script> tags in page content are NOT re-executed. */
(function () {
  // Pinned version — bump deliberately after testing, don't float "latest"
  var SCALAR_CDN =
    "https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.62.9/dist/browser/standalone.js";

  // Hide Scalar promo/AI widgets we don't want on a customer-facing page:
  // "Ask AI" / "Ask AI Agent" buttons, the "Generate MCP" layer, the
  // dev toolbar (Developer Tools / Configure / Share / Deploy), and
  // "Powered by Scalar". IMPORTANT: hide with CSS, never .remove() —
  // Scalar's renderer (Vue) still owns these nodes and crashes if
  // they disappear from under it.
  function hide(el) {
    el.style.setProperty("display", "none", "important");
  }
  function stripScalarExtras(root) {
    var strip = function () {
      root
        .querySelectorAll(".scalar-mcp-layer, .api-reference-toolbar")
        .forEach(hide);
      root.querySelectorAll("button").forEach(function (b) {
        if (/^\s*ask ai( agent)?\s*$/i.test(b.textContent)) hide(b);
      });
      root.querySelectorAll("a").forEach(function (a) {
        if (/powered by scalar/i.test(a.textContent)) hide(a);
      });
    };
    strip();
    new MutationObserver(strip).observe(root, { childList: true, subtree: true });
  }

  function mount() {
    var el = document.getElementById("scalar-api-reference");
    if (!el || el.dataset.mounted) return;
    el.dataset.mounted = "true";

    var init = function () {
      window.Scalar.createApiReference(el, {
        url: el.dataset.specUrl,
        hideDarkModeToggle: true, // follow the MkDocs theme toggle instead
      });
      stripScalarExtras(el);
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
