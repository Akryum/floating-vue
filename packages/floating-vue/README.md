<p align="center">
<img src="./logo.png" alt="floating-vue logo"/>
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

## Compatibility

| floating-vue | NPM Tag | Vue compatibility |
| ------------ | ------- | ----------------- |
| 5.x          | latest  | 3.x               |
| 1.x          | vue2    | 2.x               |

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

See the [documentation](https://floating-vue.starpad.dev/) for the [configuration](https://floating-vue.starpad.dev/guide/config), [presets](https://floating-vue.starpad.dev/guide/presets) and the full [API reference](https://floating-vue.starpad.dev/api/).

[💚️ Become a Sponsor](https://github.com/sponsors/Akryum)

## Sponsors

[![sponsors logos](https://guillaume-chau.info/sponsors.png)](https://guillaume-chau.info/sponsors)

---

LICENCE MIT - Created by Guillaume CHAU (@Akryum)
