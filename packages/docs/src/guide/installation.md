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
npm i -S v-tooltip@next
```
</code-block>

<code-block title="yarn">
```shell
yarn add v-tooltip@next
```
</code-block>
</code-group>

Install the plugin into Vue:

```javascript
import Vue from 'vue'
import VTooltipPlugin from 'v-tooltip'

Vue.use(VTooltipPlugin)
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
} from 'v-tooltip'

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popper', VClosePopper)

Vue.component('VDropdown', Dropdown)
Vue.component('VTooltip', Tooltip)
Vue.component('VMenu', Menu)
```

Add the default CSS:

```js
import 'v-tooltip/dist/v-tooltip.css'
```

## Browser

Include [v-tooltip](/dist/v-tooltip.min.js) in the page:

```vue
<script src="https://unpkg.com/v-tooltip@^3.0.0-alpha.1"></script>
```

Also include the default CSS:

```vue
<link rel="stylsheet" href="https://unpkg.com/v-tooltip@^3.0.0-alpha.1/dist/v-tooltip.css">
```

**If Vue is detected in the Page, the plugin is installed automatically.**

Manually install the plugin into Vue:

```javascript
Vue.use(VTooltip)
```

Or use the directives and components directly:

```javascript
// Directives
Vue.directive('tooltip', VTooltip.VTooltip)
Vue.directive('close-popper', VTooltip.VClosePopper)
// Components
Vue.component('VDropdown', VTooltip.Dropdown)
Vue.component('VTooltip', VTooltip.Tooltip)
Vue.component('VMenu', VTooltip.Menu)
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
