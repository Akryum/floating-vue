# Getting started

floating-vue is a library helping you add tooltips, dropdowns and other poppers into your Vue application.

[Looking for the old docs?](../legacy/v2/)

## Sponsors

Thank you to my sponsors allowing me to spend more time on Open Source projects! 🙏️

<sponsor-button/>

<p align="center">
  <a href="https://guillaume-chau.info/sponsors/" target="_blank">
    <img src='https://akryum.netlify.app/sponsors.svg'/>
  </a>
</p>

## Quick start

1. Install the package:

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

2. Add the plugin into your app:

```js
import FloatingVue from 'floating-vue'

app.use(FloatingVue)
```

3. Add the default style:

```js
import 'floating-vue/dist/style.css'
```

[Learn more about installation](./installation.md)

4. Use the `v-tooltip` directive:

```html
<button v-tooltip="'You have ' + count + ' new messages.'">
```

<TooltipSimpleExample />

[Learn more about the directive](./directive.md)

5. Use the `VDropdown` or `VMenu` component:

```html
<VDropdown>
  <!-- This will be the popover target (for the events and position) -->
  <button>Click me</button>
  <!-- This will be the content of the popover -->
  <template #popper>
    <MyAwesomeComponent/>
  </template>
</VDropdown>
```

<DropdownSimpleExample />

[Learn more about the component](./component.md)
