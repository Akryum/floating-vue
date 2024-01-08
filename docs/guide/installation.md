# Installation

## Compatibility

| floating-vue | NPM Tag | Vue compatibility |
| ------------ | ------- | ----------------- |
| 5.x          | latest  | 3.x               |
| 1.x          | vue2    | 2.x               |

## Node

::: code-group

```bash [npm]
npm i floating-vue
```

```bash [yarn]
yarn add floating-vue
```

```bash [pnpm]
pnpm add floating-vue
```

:::

Install the plugin into Vue:

```javascript
import FloatingVue from 'floating-vue'

app.use(FloatingVue)
```

Or use the directives and components directly:

```javascript
import {
  // Directives
  vTooltip,
  vClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

app.directive('tooltip', vTooltip)
app.directive('close-popper', vClosePopper)

app.component('VDropdown', Dropdown)
app.component('VTooltip', Tooltip)
app.component('VMenu', Menu)
```

Add the default CSS:

```js
import 'floating-vue/dist/style.css'
```

## Browser

Include `dist/floating-vue.min.js` in the page:

```html
<script src="https://unpkg.com/floating-vue@^2.0.0-beta.1"></script>
```

Also include the default CSS:

```html
<link rel="stylsheet" href="https://unpkg.com/floating-vue@^2.0.0-beta.1/dist/style.css" />
```

Install the plugin into your app:

```javascript
app.use(FloatingVue)
```

Or use the directives and components directly:

```javascript
// Directives
app.directive('tooltip', FloatingVue.vTooltip)
app.directive('close-popper', FloatingVue.vClosePopper)
// Components
app.component('VDropdown', FloatingVue.Dropdown)
app.component('VTooltip', FloatingVue.Tooltip)
app.component('VMenu', FloatingVue.Menu)
```

## Import directly

If you don't want to install the plugin into your Vue app globally, you can import the directives and components directly:

```vue
<script setup>
import { Dropdown, Tooltip, Menu, vTooltip } from 'floating-vue'
</script>

<template>
  <Dropdown>
    <button>Click me</button>
  </Dropdown>

  <Tooltip>
    <a>Sponsor me</a>
  </Tooltip>

  <Menu>
    <button>Documentation</button>
  </Menu>

  <button v-tooltip="msg">Hover me</button>
</template>
```

You can change the configuration too:

```js
import { options } from 'floating-vue'

options.themes.myTheme = {
  // ...
}
```

## Vue 2

floating-vue v5 is compatible with Vue 3. For Vue 2, use floating-vue v1 instead:


::: code-group

```bash [npm]
npm i floating-vue@vue2
```

```bash [yarn]
yarn add floating-vue@vue2
```

```bash [pnpm]
pnpm add floating-vue@vue2
```

:::

Install the plugin into Vue:

```javascript
import Vue from 'vue'
import FloatingVue from 'floating-vue'

Vue.use(FloatingVue)
```

Or use the directives and components directly:

```javascript
import Vue from 'vue'
import {
  // Directives
  vTooltip,
  vClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

Vue.directive('tooltip', vTooltip)
Vue.directive('close-popper', vClosePopper)

Vue.component('VDropdown', Dropdown)
Vue.component('VTooltip', Tooltip)
Vue.component('VMenu', Menu)
```

Add the default CSS:

```js
import 'floating-vue/dist/style.css'
```

## Nuxt 3

::: code-group

```bash [npm]
npm i floating-vue
```

```bash [yarn]
yarn add floating-vue
```

```bash [pnpm]
pnpm add floating-vue
```

:::

Add the `floating-vue/nuxt` module to your `nuxt.config` file:

```js
export default defineNuxtConfig({
  modules: [
    'floating-vue/nuxt'
  ]
})
```
