# Installation

## Compatibility

| v-tooltip | NPM Tag | Vue compatibility |
| --------- | ------- | ----------------- |
| 2.x       | latest  | 2.x               |
| 3.x       | next    | 2.x               |
| 4.x       | vue3    | 3.x               |

## Node

<code-group>
<code-block title="npm">
```shell
npm i -S v-tooltip@vue3
```
</code-block>

<code-block title="yarn">
```shell
yarn add v-tooltip@vue3
```
</code-block>
</code-group>

Install the plugin into your Vue app:

```javascript
import { createApp } from 'vue'
import VTooltipPlugin from 'v-tooltip'
import App from './App.vue'

const app = createApp(App)
app.use(VTooltipPlugin)
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
} from 'v-tooltip'

app.directive('tooltip', VTooltip)
app.directive('close-popper', VClosePopper)

app.component('VDropdown', Dropdown)
app.component('VTooltip', Tooltip)
app.component('VMenu', Menu)
```

Add the default CSS:

```js
import 'v-tooltip/dist/v-tooltip.css'
```

## Browser

Include [v-tooltip](/dist/v-tooltip.min.js) in the page:

```vue
<script src="https://unpkg.com/v-tooltip@^4.0.0-alpha.1"></script>
```

Also include the default CSS:

```vue
<link rel="stylsheet" href="https://unpkg.com/v-tooltip@^4.0.0-alpha.1/dist/v-tooltip.css">
```

Install the plugin into your Vue app:

```javascript
app.use(VTooltip)
```

Or use the directives and components directly:

```javascript
// Directives
app.directive('tooltip', VTooltip.VTooltip)
app.directive('close-popper', VTooltip.VClosePopper)
// Components
app.component('VDropdown', VTooltip.Dropdown)
app.component('VTooltip', VTooltip.Tooltip)
app.component('VMenu', VTooltip.Menu)
```

## Vue 3

v-tooltip v3 is compatible with Vue 2. For Vue 3, use v-tooltip v4 instead:

<code-group>
<code-block title="npm">
```shell
npm i -S v-tooltip@vue3
```
</code-block>

<code-block title="yarn">
```shell
yarn add v-tooltip@vue3
```
</code-block>
</code-group>

Install the plugin into Vue:

```javascript
import VTooltipPlugin from 'v-tooltip'

app.use(VTooltipPlugin)
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
} from 'v-tooltip'

app.directive('tooltip', VTooltip)
app.directive('close-popper', VClosePopper)

app.component('VDropdown', Dropdown)
app.component('VTooltip', Tooltip)
app.component('VMenu', Menu)
```

Add the default CSS:

```js
import 'v-tooltip/dist/v-tooltip.css'
```

## Nuxt 3

<code-group>
<code-block title="npm">
```shell
npm i -S v-tooltip@vue3
```
</code-block>

<code-block title="yarn">
```shell
yarn add v-tooltip@vue3
```
</code-block>
</code-group>

Add the `v-tooltip/nuxt` module to your Nuxt config file:

```js
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'v-tooltip/nuxt',
  ],
})
```
