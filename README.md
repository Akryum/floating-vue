<p align="center">
<img src="./logo.png" alt="Floating Vue logo"/>
</p>

<h1 align="center">Floating Vue</h1>

<p align="center">
<a href="https://www.npmjs.com/package/floating-vue"><img src="https://img.shields.io/npm/v/floating-vue.svg"/> <img src="https://img.shields.io/npm/dm/floating-vue.svg"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-3-brightgreen.svg"/></a>
</p>

<p align="center">
Easy tooltips, dropdowns, menus... with <a href="https://github.com/floating-ui/floating-ui">Floating UI</a>
</p>

<p align="center">
  <a href="https://floating-vue.starpad.dev/"><b>📚️ Documentation</b></a>
</p>

## Quick start

```bash
npm i floating-vue
```

Install the plugin and the default style:

```js
import { createApp } from 'vue'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

createApp(App).use(FloatingVue).mount('#app')
```

Use the `v-tooltip` directive:

```html
<button v-tooltip="'You have ' + count + ' new messages.'">
  Mouse over me
</button>
```

Or the `VDropdown` / `VMenu` components:

```html
<VDropdown>
  <button>Click me</button>

  <template #popper>
    <input v-model="message">
  </template>
</VDropdown>
```

## Documentation

- [Installation](https://floating-vue.starpad.dev/guide/installation) — Node, browser, direct imports, Vue 2, Nuxt
- [Components](https://floating-vue.starpad.dev/guide/component) and [Directives](https://floating-vue.starpad.dev/guide/directive)
- [Configuration](https://floating-vue.starpad.dev/guide/config) and [Presets](https://floating-vue.starpad.dev/guide/presets)
- [CSS](https://floating-vue.starpad.dev/guide/css) and [Accessibility](https://floating-vue.starpad.dev/guide/accessibility)
- [API Reference](https://floating-vue.starpad.dev/api/)
- [Preset editor](https://floating-vue.starpad.dev/theme-editor)

## Versions

The package has been renamed from `v-tooltip` to `floating-vue` and now uses [floating-ui](https://floating-ui.com) instead of popperjs. You can find the new changelog for both v1 (for Vue 2) and v2 (for Vue 3) [here](https://github.com/Akryum/floating-vue/blob/main/CHANGELOG.md). The changelog is currently not pushed to GitHub Releases.

New versions:

|Old|New|Target
|---|---|---|
|v-tooltip v3|floating-vue v1|Vue 2|
|v-tooltip v4|floating-vue v5|Vue 3|

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the repo setup, the local check suite, and the release process.

[💚️ Become a Sponsor](https://github.com/sponsors/Akryum)

## Sponsors

<p align="center">
  <a href="https://guillaume-chau.info/sponsors/" target="_blank">
    <img src='https://akryum.netlify.app/sponsors.svg'/>
  </a>
</p>

---

LICENCE MIT - Created by Guillaume CHAU (@Akryum)
