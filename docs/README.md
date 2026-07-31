# Docs

[VitePress](https://vitepress.dev/) site published at <https://floating-vue.starpad.dev/>.

Run every command from the repo root.

```bash
pnpm docs        # dev server
pnpm docs:build  # build the library, then the site
```

`docs:build` builds `packages/floating-vue` first, because the docs import the workspace
package to render live examples. It also fails on dead internal links, so it's the check to
run after moving or renaming a page.

## Layout

| Path | Content |
| --- | --- |
| `guide/` | Guide pages |
| `api/` | API reference |
| `migration/` | Migration guides |
| `legacy/v2/` | Archived v-tooltip 2 docs |
| `.vitepress/config.ts` | Nav, sidebar, search |
| `.vitepress/theme/` | Theme extension, global styles, plugin options for the live examples |
| `.vitepress/components/` | Live example components, auto-registered by `unplugin-vue-components` |
| `.vitepress/components/theme-editor/` | The preset editor mounted by `theme-editor.md` |

Styling uses Tailwind (`tailwind.config.js`, `.postcssrc.json`).
