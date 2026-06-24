# Interline Help Center

Documentation site for Interline, built with [MkDocs](https://www.mkdocs.org/) and the [Material theme](https://squidfunk.github.io/mkdocs-material/). All content is plain Markdown in the `docs/` folder — no coding required to edit it.

## Why MkDocs Material

- **Easy to manage** — every page is a `.md` file. Edit in any text editor, commit, done.
- **Great search** out of the box, plus light/dark mode and mobile-friendly layout.
- **Free hosting** on GitHub Pages (or any static host).
- **Grows with you** — supports versioning and can render an interactive **API reference** from an OpenAPI/Swagger spec when you're ready (see below).

## Project structure

```
Interline/
├─ mkdocs.yml              # site config + navigation
├─ README.md               # this file
└─ docs/
   ├─ index.md             # home
   ├─ getting-started.md
   ├─ inbox/               # ✅ fully written (style template)
   │  ├─ index.md
   │  ├─ mailboxes.md
   │  ├─ reading-and-replying.md
   │  ├─ organizing.md
   │  ├─ collaboration.md
   │  ├─ contacts.md
   │  └─ auto-responders.md
   ├─ broadcast/index.md   # 🔲 skeleton outline
   ├─ keywords/index.md    # 🔲 skeleton outline
   ├─ admin/index.md       # 🔲 skeleton outline
   └─ api/index.md         # 🔲 skeleton outline
```

## Running locally

You need Python 3.8+.

```bash
# 1. Install MkDocs + the Material theme (one time)
pip install mkdocs-material

# 2. From the project folder, start the live-preview server
mkdocs serve

# 3. Open the URL it prints (usually http://127.0.0.1:8000)
```

The preview auto-reloads every time you save a Markdown file.

## Editing content

- **Edit a page:** open the matching `.md` file in `docs/` and change the text.
- **Add a page:** create a new `.md` file, then add it to the `nav:` list in `mkdocs.yml`.
- **Reorder or rename nav items:** edit the `nav:` section of `mkdocs.yml`.
- **Links between pages** use relative paths, e.g. `[Inbox](inbox/index.md)`.
- **Callout boxes** use admonition syntax:

  ```markdown
  !!! tip "Optional title"
      Your note here.
  ```

## Building & hosting

```bash
mkdocs build      # generates a static site in ./site
```

The `site/` folder is plain HTML — host it anywhere. Easiest options:

- **GitHub Pages:** push this repo to GitHub and run `mkdocs gh-deploy`. It builds and publishes to the `gh-pages` branch in one step.
- **Netlify / Vercel / Cloudflare Pages:** point them at this repo with build command `mkdocs build` and publish directory `site`.
- Update `site_url` in `mkdocs.yml` to your final URL.

## Adding API reference docs later

When the Interline API has an OpenAPI/Swagger spec, render an interactive reference inside this same site:

```bash
pip install mkdocs-swagger-ui-tag
```

Add the plugin to `mkdocs.yml` and embed your spec in `docs/api/`. The `api/` section is already scaffolded for this.

## Status

- ✅ **Inbox** — complete, serves as the writing/style template for the rest.
- 🔲 **Broadcast, Keywords, Admin, API** — skeleton outlines, ready to expand.
