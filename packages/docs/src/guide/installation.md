# Installation

## Compatibility

| floating-vue | NPM Tag | Vue compatibility |
| ------------ | ------- | ----------------- |
| 2.x          | latest  | 3.x               |
| 1.x          | vue2    | 2.x               |

## Node

<code-group>
<code-block title="npm">
```shell
npm i -S floating-vue
```
</code-block>

<code-block title="yarn">
```shell
yarn add floating-vue
```
</code-block>
</code-group>

Install the plugin into Vue:

```javascript
import FloatingVue from 'floating-vue'

app.use(FloatingVue)
```

Or use the directives and components directly:

```javascript
import {
  // Directives
  VTooltip,
  VClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

app.directive('tooltip', VTooltip)
app.directive('close-popper', VClosePopper)

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

```vue
<script src="https://unpkg.com/floating-vue@^2.0.0-beta.1"></script>
```

Also include the default CSS:

```vue
<link rel="stylsheet" href="https://unpkg.com/floating-vue@^2.0.0-beta.1/dist/style.css" />
```

Install the plugin into your app:

```javascript
app.use(FloatingVue)
```

Or use the directives and components directly:

```javascript
// Directives
app.directive('tooltip', FloatingVue.VTooltip)
app.directive('close-popper', FloatingVue.VClosePopper)
// Components
app.component('VDropdown', FloatingVue.Dropdown)
app.component('VTooltip', FloatingVue.Tooltip)
app.component('VMenu', FloatingVue.Menu)
```

## Vue 2

floating-vue v2 is compatible with Vue 3. For Vue 2, use floating-vue v1 instead:

<code-group>
<code-block title="npm">
```shell
npm i -S floating-vue@vue2
```
</code-block>

<code-block title="yarn">
```shell
yarn add floating-vue@vue2
```
</code-block>
</code-group>

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
  VTooltip,
  VClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popper', VClosePopper)

Vue.component('VDropdown', Dropdown)
Vue.component('VTooltip', Tooltip)
Vue.component('VMenu', Menu)
```

Add the default CSS:

```js
import 'floating-vue/dist/style.css'
```

## Nuxt 3

<code-group>
<code-block title="npm">
```shell
npm i -S floating-vue
```
</code-block>

<code-block title="yarn">
```shell
yarn add floating-vue
```
</code-block>
</code-group>

Add the `floating-vue/nuxt` module to your Nuxt config file:

```js
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'floating-vue/nuxt',
  ],
})
```
