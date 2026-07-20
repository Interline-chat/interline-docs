---
title: API Reference
description: Interactive Interline API reference — every endpoint, request and response schema, and example.
hide:
  - navigation
  - toc
---

<style>
  /* Scalar owns the whole viewport on this page — hide the site chrome
     (its fixed sidebar otherwise collides with Material's sticky header) */
  .md-header, .md-tabs, .md-footer { display: none; }
  .md-grid { max-width: 100%; }
  .md-main__inner { margin: 0; }
  .md-content__inner { margin: 0; padding: 0; }
  .md-content__inner::before { display: none; }
  .md-content__inner > h1:first-child { display: none; }
  #scalar-api-reference { min-height: 100vh; }

  /* Hide Scalar promo/AI widgets on this customer-facing page.
     CSS-only: removing or inline-hiding these via JS breaks Scalar's
     (Vue) renderer. Selectors verified against Scalar 1.62.9. */
  .api-reference-toolbar,                    /* Developer Tools / Configure / Share / Deploy */
  .darklight-reference,                      /* Generate MCP + "Powered by Scalar" footer */
  .agent-button-container,                   /* "Ask AI Agent" on request examples */
  .t-doc__sidebar .pt-3 > button:last-child  /* "Ask AI" next to sidebar search */ {
    display: none !important;
  }
</style>

<div id="scalar-api-reference" data-spec-url="/api/openapi.json"></div>

<noscript>
JavaScript is required to view the interactive reference. You can
<a href="/api/openapi.json">download the raw OpenAPI spec</a> instead.
</noscript>
