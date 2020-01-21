<p align="center">
<img src="./logo.png" alt="v-tooltip logo"/>
</p>

<h1 align="center">v-tooltip</h1>

<p align="center">
<a href="https://www.npmjs.com/package/v-tooltip"><img src="https://img.shields.io/npm/v/v-tooltip.svg"/> <img src="https://img.shields.io/npm/dm/v-tooltip.svg"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg"/></a>
</p>

<p align="center">
Easy tooltips, popovers and dropdowns with <a href="https://github.com/FezVrasta/popper.js">Popper.js</a>
</p>

<p align="center">
  <a href="https://www.patreon.com/akryum" target="_blank">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
  </a>
</p>

## Sponsors

### Gold

<p align="center">
  <a href="https://www.sumcumo.com/en/" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/570728242399674380/logo-sumcumo.png" alt="sum.cumo logo" width="400px">
  </a>
</p>

### Silver

<p align="center">
  <a href="https://vueschool.io/" target="_blank">
    <img src="https://vueschool.io/img/logo/vueschool_logo_multicolor.svg" alt="VueSchool logo" width="200px">
  </a>

  <a href="https://www.vuemastery.com/" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/557267759130607630/Vue-Mastery-Big.png" alt="Vue Mastery logo" width="200px">
  </a>
</p>

### Bronze

<p align="center">
  <a href="https://vuetifyjs.com" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/537832759985700914/537832771691872267/Horizontal_Logo_-_Dark.png" width="100">
  </a>

  <a href="https://www.frontenddeveloperlove.com/" target="_blank" title="Frontend Developer Love">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/557267744249085953/frontend_love-logo.png" width="56">
  </a>
</p>

<br>
<br>
<br>

**Useful Links**

- [JSFiddle](https://jsfiddle.net/Akryum/gwL37q10/)

<br>

**Table of Contents**

- [Getting started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
  - [Directive](#directive)
    - [Object notation](#object-notation)
    - [Themes](#themes)
    - [All options](#all-options)
    - [Async content](#async-content)
    - [Tooltip auto-hiding](#tooltip-auto-hiding)
    - [Disabling tooltips](#disabling-tooltips)
  - [Component](#component)
    - [Popover Component Reference](#popover-component-reference)
    - [Close directive](#close-directive)
    - [Tooltip component](#tooltip-component)
  - [Global options](#global-options)
  - [Composition](#composition)

<br>

# Getting started

This package offers two different usages: [directive](#directive) or [component](#component). You can use them to create tooltips, popovers or all kinds of dropdowns.

1. Install the plugin:

```
npm install --save v-tooltip@alpha
```

or

```
yarn add v-tooltip@alpha
```

2. Add the plugin into your app:

```javascript
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```

3. Add the default style:

```js
import 'v-tooltip/dist/v-tooltip.css'
```

[More info on installation](#installation)

4. Use the `v-tooltip` directive:

```html
<button v-tooltip="'You have ' + count + ' new messages.'">
```

[More info on the directive](#directive)

5. Use the `VDropdown` component:

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

[More info on the component](#component)

<br>

# Installation

## Npm

```
npm install --save v-tooltip@alpha
```

or

```
yarn add v-tooltip@alpha
```

Install the plugin into Vue:

```javascript
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```

Or use the directives and components directly:

```javascript
import Vue from 'vue'
import { VTooltip, VDropdown, VClosePopper } from 'v-tooltip'

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popper', VClosePopper)
Vue.component('VDropdown', VDropdown)
```

Add the default CSS:

```js
import 'v-tooltip/dist/v-tooltip.css'
```

## Browser

Include [v-tooltip](/dist/v-tooltip.min.js) in the page:

```html
<script src="https://unpkg.com/v-tooltip@alpha"></script>
```

Also include the default CSS:

```html
<link rel="stylsheet" href="https://unpkg.com/v-tooltip@alpha/dist/v-tooltip.css">
```

**If Vue is detected in the Page, the plugin is installed automatically.**

Manually install the plugin into Vue:

```javascript
Vue.use(VTooltip)
```

Or use the directives and components directly:

```javascript
Vue.directive('tooltip', VTooltip.VTooltip)
Vue.directive('close-popper', VTooltip.VClosePopper)
Vue.component('VDropdown', VTooltip.VDropdown)
```

# Usage

## Directive

In the template, use the `v-tooltip` directive:

```html
<button v-tooltip="'You have ' + count + ' new messages.'">
```

Of course, you can use a reactive property:

```html
<button v-tooltip="tooltipContent">
```

You can specify the tooltip position as a modifier:

```html
<button v-tooltip.bottom-start="'You have ' + count + ' new messages.'">
```

The available positions are:

 - `'auto'`
 - `'auto-start'`
 - `'auto-end'`
 - `'top'`
 - `'top-start'`
 - `'top-end'`
 - `'right'`
 - `'right-start'`
 - `'right-end'`
 - `'bottom'`
 - `'bottom-start'`
 - `'bottom-end'`
 - `'left'`
 - `'left-start'`
 - `'left-end'`

### Object notation

You can use an object instead of a simple string:

```html
<button v-tooltip="{ content: 'You have ' + count + ' new messages.' }">
```

### HTML content

By default, content is displayed as text to help prevent XSS attacks. If the tooltip content is deemed safe, you can turn on HTML with the `contentHtml` option:

```html
<button v-tooltip="{ content: '<b>Bold</b>', contentHtml: true }">
```

### Themes

To customize your tooltips and other popovers, you can create themes:

```js
Vue.use(VTooltip, {
  themes: {
    'info-tooltip': {
      $extend: 'tooltip',
      // Other options (see the 'Global options' section)
    }
  }
})
```

Here, `$extend: 'tooltip'` extends the `tooltip` theme defined by default inside `v-tooltip`, so all its options and CSS classes are inherited.

If you don't want to inherit the CSS classes, use `$resetCss`:

```js
Vue.use(VTooltip, {
  themes: {
    'info-tooltip': {
      $extend: 'tooltip',
      $resetCss: true
    }
  }
})
```

To use the new theme, specify it on the directive:

```html
<button v-tooltip="{
  content: 'You have ' + count + ' new messages.',
  theme: 'info-tooltip'
}">
```

Then you can customize the CSS for this theme:

```css
.v-popper--theme-info-tooltip {
  $color: rgba(#004499, .9);

  .v-popper__inner {
    background: $color;
    color: white;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(black, .1);
    max-width: 250px;
  }

  .v-popper__arrow {
    border-color: $color;
  }
}
```

### All options

```html
<button v-tooltip="options">
```

- `content` - HTML text to be displayed in the tooltip. Can also be a function that returns the content or a Promise.
- `contentHtml` - Boolean: allow HTML tooltip content.
- `loadingContent` - Same as `content`, used when the actual tooltip content is loading *(see Async content example below)*.
- `theme` - The popper theme applied to the tooltip (default: `'tooltip'`) *(see above)*
- `placement` - Popper placement (default: `'top'`) *(see above)*
- `trigger` - Events triggering the tooltip: `'hover'`, `'click'`, `'focus'`, `'touch'` or `'manual'` (`'manual'` can't be combined with any other event). Example: `trigger: ['hover', 'focus']` or `trigger: 'hover focus'`.
- `triggerShow` / `triggerHide` - Override the trigger events for showing or hiding. Can also be a function that gets the `trigger` list, and should return the new list -- for example: `triggerHide: events => [...events, 'click']`.
- `delay` - Show/Hide delay, or object: `{ show: 500, hide: 100 }` (ms).
- `open` - Boolean to manually open or hide the tooltip.
- `offset` - Offset of the position (px).
- `container` - Selector: Container where the tooltip will be appended (e.g. `'body'`).
- `boundariesElement` - DOM element for the popper position and size boundaries.
- `autoHide` - Boolean: automatically close the tooltip on mouseover.
- `disabled` - Boolean to disable the tooltip. If it was already open, it will be closed.
- `handleResize` - Boolean to automatically update the popper position when content size changes.
- `openGroup` - If set, will close all the open tooltips that have a different `open-group` value or an unset value.
- `instantMove` - Boolean: skip delay & CSS transitions when another tooltip is open, so that the tooltip appear to instanly move to the new position.
- `disposeTimeout` - Number of ms after hide when the popper instance is destroyed.
- `popperOptions` - Other Popper.js options.

You can change the default values in the [Global options](#global-options).

### Async content

The `content` option accepts a function that returns a promise:

```html
<button
  v-tooltip="{
    content: asyncMethod,
    loadingContent: 'Please wait...',
  }"
>Hover me!</button>
```

You can style the tooltip content when it's loading:

```css
.v-popper--tooltip-loading {
  .v-popper__inner {
    color: #77aaff;
  }
}
```

To pass custom arguments to the async method, use an arrow function:

```html
<button
  v-tooltip="{
    content: () => asyncMethod('foo', 'bar'),
  }"
>Hover me!</button>
```

### Manual trigger example

Use the `trigger` and `show` options:

```html
<button
  v-tooltip="{
    content: 'Tooltip content here',
    show: isOpen,
    trigger: 'manual',
  }"
>A button</button>
```

### Tooltip auto-hiding

By default, if `trigger` contains `'hover'`, the tooltip is automatically hidden on hover or click. To disable this, set the `autoHide` option to `false` on the `tooltip` theme:

```javascript
VTooltip.options.themes.tooltip.autoHide = false
```

### Disabling tooltips

On mobile, you can disable the tooltips with the `disabled` property on the `tooltip` theme:

```javascript
VTooltip.options.themes.tooltip.disabled = window.innerWidth < 768
```

## Component

If you need to display components inside the tooltip (or popover/dropdown, technically it's the same :smile:), use the `VDropdown` component:

```html
<VDropdown
  offset="16"
>
  <!-- This will be the popover target (for the events and position) -->
  <button>Click me</button>

  <!-- This will be the content of the popover -->
  <template #popper>
    <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
    <p>
      {{ msg }}
    </p>

    <!-- You can put other components too -->
    <ExampleComponent char="=" />
  </template>
</VDropdown>
```

As shown in the above example, the popper content must be passed to the `popper` slot.

### Popover Component Reference

**Props:**

- `theme` - The popper theme applied to the dropdown  (default: `'dropdown'`) *(see above)*
- `placement` - Popper placement (default: `'bottom'`) *(see above)*
- `trigger` - Events triggering the dropdown: `'hover'`, `'click'`, `'focus'`, `'touch'` or `'manual'` (`'manual'` can't be combined with any other event). Example: `:trigger="['hover', 'focus']"` or `trigger="hover focus"`.
- `triggerShow` / `triggerHide` - Override the trigger events for showing or hiding. Can also be a function that gets the `trigger` list, and should return the new list -- for example: `triggerHide: events => [...events, 'click']`.
- `delay` - Show/Hide delay, or object: `{ show: 500, hide: 100 }` (ms).
- `open` - Boolean that shows or hide the dropdown.
- `offset` - Offset of the position (px).
- `container` - Selector: Container where the dropdown will be appended (e.g. `'body'`).
- `boundariesElement` - DOM element for the popper position and size boundaries.
- `autoHide` - Hide the dropdown if clicked outside.
- `disabled` - Boolean that disables the dropdown. If it was already open, it will be closed.
- `handleResize` - Automatically update the dropdown position if its size changes.
- `openGroup` - If set, will close all the open popovers that have a different `open-group` value or unset.
- `instantMove` - Boolean: skip delay & CSS transitions when another popper is open, so that the popper appear to instanly move to the new position.
- `disposeTimeout` - Number of ms after hide when the popper instance is destroyed.
- `popperOptions` - Other Popper.js options.

You can change the default values in the [Global options](#global-options).

**Slots:**

- `default`: Content put in the trigger part of the dropdown, typically a button.
- `popper`: Content pu inside the popper of the dropdown.

**Events:**

- `update:open(Boolean)` - This allow you to use the `.sync` modifier on the `open` prop.
- `show`
- `apply-show` - Emitted after the show delay
- `hide`
- `apply-hide` - Emitted after the hide delay
- `dispose`
- `auto-hide` - Emitted when the dropdown is closed if clicked outside.
- `close-directive` - Emitted when the dropdown is closed with the [Close directive](#close-directive).
- `close-group` - Emitted when the dropdown is closed because a dropdown of another `open-group` was shown.
- `resize` - Emitted when the content size changes. You must set the `handleResize` prop to `true`.

### Disable popover

```html
<VDropdown :disabled="isDisabled"></VDropdown>
```

```js
data () {
  return {
    isDisabled: true,
  }
}
```

### Close directive

Use the `v-close-popper` directive on an element inside the dropdown to close it when the element is clicked (or touched on mobile):

```html
<VDropdown>
  <button>Click me</button>

  <template #popper>
    <a v-close-popper>Close</a>
  </template>
</VDropdown>
```

You can also set it to true or false to enable or disable the directive (enabled by default):

```html
<a v-close-popper="false">Close</a>
<a v-close-popper="true">Close</a>
```

You can also use a property:

```html
<a v-close-popper="myBooleanProp">Close</a>
```

```js
data () {
  return {
    myBooleanProp: true,
  }
}
```

Close all the dropdowns in the page with the `all` modifier:

```html
<a v-close-popper.all>Close All</a>
```

### Tooltip component

By default, a `VTooltip` component is also registered. You can write the following:

```html
<button
  v-tooltip.top="msg"
  class="tooltip-target"
  title="Fallback title"
>
  Hover me
</button>
```

as the equivalent using the `VTooltip` component instead of the `v-tooltip` directive:

```html
<VTooltip
  :disabled="!msg"
  placement="top"
  title="Fallback title"
>
  <button class="tooltip-target">
    Hover me
  </button>

  <template #popper>
    {{ msg }}
  </template>
</VTooltip>
```

## Global options

The default global options are:

```js
export const config = {
  // Disable popper components
  disabled: false,
  // Default position offset (px)
  offset: 0,
  // Default container where the tooltip will be appended
  container: 'body',
  // Element used to compute position and size boundaries
  boundariesElement: undefined,
  // Skip delay & CSS transitions when another popper is open, so that the popper appear to instanly move to the new position.
  instantMove: false,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Options passed to Popper constructor
  popperOptions: {},
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: 'top',
      // Default events that trigger the tooltip
      trigger: ['hover', 'focus', 'touch'],
      // Close tooltip on click on tooltip target
      triggerHide: events => [...events, 'click'],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0,
      },
      // Update popper on content resize
      handleResize: false,
      // Enable HTML content in directive
      contentHtml: false,
      // Displayed when tooltip content is loading
      loadingContent: '...',
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: 'bottom',
      // Default events that trigger the dropdown
      trigger: ['click'],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: true,
      // Hide on clock outside
      autoHide: true,
    },
  },
}
```

You can change the options during install with the arguments:

```javascript
import VTooltip from 'v-tooltip'
Vue.use(VTooltip, options)
```

Or directly on `VTooltip`:

```javascript
import VTooltip from 'v-tooltip'
VTooltip.options.offset = 12
```

For a specific theme:


```js
import VTooltip from 'v-tooltip'
VTooltip.options.themes.dropdown.offset = 12
```

## Composition

### Custom theme

```js
Vue.use(VTooltip, {
  themes: {
    'info-dropdown': {
      $extend: 'dropdown',
      // Other options (see the 'Global options' section)
      placement: 'right',
      delay: 300
    }
  }
})
```

```vue
<script>
import { PopperWrapper } from 'v-tooltip'

export default {
  ...PopperWrapper,
  name: 'VInfoDropdown',
  vPopperTheme: 'info-dropdown',
}
</script>

<style>
.v-popper--theme-info-dropdown .v-popper__inner {
  background: #004499;
}

.v-popper--theme-info-dropdown .v-popper__arrow {
  border-color: #004499;
}
</style>
```

### Custom dropdown/tooltip component

```vue
<template>
  <Popper
    ref="popper"
    v-slot="{
      popperId,
      isOpen,
      trigger,
      autoHide,
      hide,
      handleResize,
      onResize,
    }"
    v-bind="$attrs"
    :theme="theme"
    :target-node="() => $refs.trigger"
    :popper-node="() => $refs.popperContent.$el"
    :arrow-node="() => $refs.popperContent.$refs.arrow"
    v-on="$listeners"
  >
    <div
      class="v-popper"
      :class="[
        themeClass,
        {
          'v-popper--open': isOpen,
        },
      ]"
    >
      <div
        ref="trigger"
        :aria-describedby="popperId"
        :tabindex="trigger.indexOf('focus') !== -1 ? 0 : undefined"
        class="v-popper__trigger"
        style="display: inline-block;"
      >
        <slot />
      </div>

      <PopperContent
        ref="popperContent"
        :popper-id="popperId"
        :theme="theme"
        :is-open="isOpen"
        :auto-hide="autoHide"
        :handle-resize="handleResize"
        @hide="hide"
        @resize="onResize"
      >
        <slot name="popper" />
      </PopperContent>
    </div>
  </Popper>
</template>

<script>
import {
  Popper,
  PopperContent,
  PopperMethods,
  ThemeClass
} from 'v-tooltip'

export default {
  name: 'MyPopper',

  components: {
    Popper,
    PopperContent,
  },

  mixins: [
    PopperMethods,
    ThemeClass,
  ],

  inheritAttrs: false,

  props: {
    theme: {
      type: String,
      default () {
        return this.$options.vPopperTheme
      },
    },
  },
}
</script>

```

---

LICENCE MIT - Created by Guillaume CHAU (@Akryum)
