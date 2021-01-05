# Installation

## Node

```
npm install --save v-tooltip@next
```

or

```
yarn add v-tooltip@next
```

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
<script src="https://unpkg.com/v-tooltip@alpha"></script>
```

Also include the default CSS:

```vue
<link rel="stylsheet" href="https://unpkg.com/v-tooltip@alpha/dist/v-tooltip.css">
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
