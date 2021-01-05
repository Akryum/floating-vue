# Getting started

v-tooltip is a library helping you add tooltips, dropdowns and other poppers into your Vue application.

## Sponsors

Thank you to my sponsors allowing me to spend more time on Open Source projects! 🙏️

<sponsor-button/>

[![sponsors logos](https://guillaume-chau.info/sponsors.png)](https://guillaume-chau.info/sponsors)

## Quick start

1. Install the package:

```shell
npm i -S v-tooltip@next
```

Or

```shell
yarn add v-tooltip@next
```

2. Add the plugin into your app:

```js
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```

3. Add the default style:

```js
import 'v-tooltip/dist/v-tooltip.css'
```

[More info on installation](./installation.md)

4. Use the `v-tooltip` directive:

```vue
<button v-tooltip="'You have ' + count + ' new messages.'">
```

[More info on the directive](./directive.md)

5. Use the `VDropdown` or `VMenu` component:

```vue
<VDropdown>
  <!-- This will be the popover target (for the events and position) -->
  <button>Click me</button>
  <!-- This will be the content of the popover -->
  <template #popper>
    <MyAwesomeComponent/>
  </template>
</VDropdown>
```

[More info on the component](./component.md)
