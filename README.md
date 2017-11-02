<h1 align="center">v-tooltip</h1>

<p align="center">
<img src="https://raw.githubusercontent.com/Akryum/v-tooltip/master/v-tooltip.png" width="247" height="172" alt="Screenshot"/>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/v-tooltip"><img src="https://img.shields.io/npm/v/v-tooltip.svg"/> <img src="https://img.shields.io/npm/dm/v-tooltip.svg"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg"/></a>
</p>

<p align="center">
Easy tooltips, popovers and dropdown with <a href="https://github.com/FezVrasta/popper.js">Popper.js</a>
</p>

<br>

**Useful Links**

- [Live Demo](https://akryum.github.io/v-tooltip/)
- [JSFiddle](https://jsfiddle.net/Akryum/tsjco74e/)

<br>

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
  - [Object notation](#object-notation)
  - [Dynamic CSS classes](#dynamic-css-classes)
  - [Other options](#other-options)
  - [Popover and Dropdown](#popover)
  - [Global options](#global-options)
  - [Tooltip auto-hiding](#tooltip-auto-hiding)
  - [Disabling tooltips](#disabling-tooltips)
- [Style Examples](#style-examples)

<br>

# Installation

## Npm

```
npm install --save v-tooltip
```

Install the plugin into Vue:

```javascript
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```

Or use the directive directly:

```javascript
import Vue from 'vue'
import { VTooltip } from 'v-tooltip'

Vue.directive('tooltip', VTooltip)
```

## Browser

Include [popper.js](https://popper.js.org/) with [v-tooltip](/dist/v-tooltip.browser.js) in the page.

```html
<script src="https://unpkg.com/popper.js"></script>
<script src="https://unpkg.com/v-tooltip"></script>
```

**If Vue is detected in the Page, the plugin is installed automatically.**

Manually install the plugin into Vue:

```javascript
Vue.use(VTooltip)
```

Or use the directive directly:

```javascript
Vue.directive('tooltip', VTooltip.VTooltip)
```

# Usage

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
<button v-tooltip.bottom-left="'You have ' + count + ' new messages.'">
```

The available positions are:

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

## Object notation

You can use an object instead of a simple string:

```html
<button v-tooltip="{ content: 'You have ' + count + ' new messages.' }">
```

## Dynamic CSS classes

You can set the tooltip css classes dynamically with the object notation:

```html
<button v-tooltip="{ content: 'You have ' + count + ' new messages.', classes: ['a', 'b'] }">
```

This will replace the default CSS classe with 'a b' on the tooltip element.

You can also use the standard class notation:

```html
<button v-tooltip="{ content: 'You have ' + count + ' new messages.', classes: 'a b' }">
```

Or a reactive property:

```html
<button v-tooltip="{ content: 'You have ' + count + ' new messages.', classes: tooltipClasses }">
```

## Other options

```html
<button v-tooltip="options">
```

- `content` - HTML text to be displayed in the tooltip.
- `classes` - *(see above)*
- `delay` - Show/Hide delay, or object: `{ show: 500, hide: 100 }` (ms).
- `placement` - *(see above)*
- `trigger` - Events triggering the tooltip separated with spaces: `'hover'`, `'click'`, `'focus'` or `'manual'` (`'manual'` can't be combined with any other event).
- `offset` - Offset of the position (px).
- `container` - Selector: Container where the tooltip will be appended (e.g. `'body'`).
- `boundariesElement` - DOM element for the tooltip boundaries.
- `popperOptions` - Other Popper.js options.

## Popover

If you need to display components inside the tooltip (or popover/dropdown, technically it's the same :smile:), use the `v-popover` component:

```html

<v-popover
  offset="16"
>
  <!-- This will be the popover target (for the events and position) -->
  <button class="tooltip-target b3">Click me</button>

  <!-- This will be the content of the popover -->
  <template slot="popover">
    <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
    <p>
      {{ msg }}
    </p>

    <!-- You can put other components too -->
    <ExampleComponent char="=" />
  </template>
</v-popover>
```

By default, the popover will have the `tooltip` and `popover` classes, so you can easily override [the style](#style-examples):

```scss
.tooltip {
  // ...

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }
}
```

**Props:**

- `open` - Boolean that shows or hide the popover.
- `placement` - *(see above)*
- `delay` - *(see above)*
- `trigger` - *(see above)*
- `offset` - *(see above)*
- `container` - *(see above)*
- `boundariesElement` - *(see above)*
- `popperOptions` - *(see above)*
- `popoverClass` - Classes applied to the popover element.
- `autoHide` - Hide the popover if clicked outside.
- `handleResize` - Automatically update the popover position if its size changes.

**Events:**

- `update:open(Boolean)` - This allow you to use the `.sync` modifier on the `open` prop.
- `show`
- `hide`
- `dispose`
- `auto-hide` - Emitted when the popover is closed if clicked outside.
- `resize` - Emitted when the content size changes. You must set the `handleResize` prop to `true`.

## Global options

The default global options are:

```javascript
{
	// Default tooltip placement relative to target element
	defaultPlacement: 'top',
	// Default CSS classes applied to the tooltip element
	defaultClass: 'vue-tooltip-theme',
	// Default HTML template of the tooltip element
	// It must include `tooltip` & `tooltip-inner` CSS classes
	defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	// Delay (ms)
	defaultDelay: 0,
	// Default events that trigger the tooltip
	defaultTrigger: 'hover focus',
	// Default position offset (px)
	defaultOffset: 0,
	// Default container where the tooltip will be appended
	defaultContainer: 'body',
	defaultBoundariesElement: undefined,
	defaultPopperOptions: {},
	// Hide on mouseover tooltip
	autoHide: true,
	// Auto destroy tooltip DOM nodes (ms)
	disposeTimeout: 5000,
	// Options for popover
	popover: {
		defaultPlacement: 'bottom',
		defaultClass: 'vue-popover-theme',
		defaultDelay: 0,
		defaultTrigger: 'click',
		defaultOffset: 0,
		defaultContainer: 'body',
		defaultBoundariesElement: undefined,
		defaultPopperOptions: {},
		// Hides if clicked outside of popover
		defaultAutoHide: true,
		// Update popper on content resize
		defaultHandleResize: true,
	},
}
```

You can change the options during install with the arguments:

```javascript
Vue.use(VTooltip, options)
```

Or directly on the directive definition:

```javascript
// Set custom CSS class
VTooltip.options.defaultClass = 'my-tooltip'
```

## Tooltip auto-hiding

By default, if `trigger` contains `'hover'`, the tooltip is automatically hidden on hover or click. To disable this, set the `autoHide` option to `false`:

```javascript
VTooltip.options.autoHide = false
```

## Disabling tooltips

On mobile, you can disable the tooltips with the `VTooltip.enabled` property:

```javascript
VTooltip.enabled = window.innerWidth > 768
```

# Style Examples

## Sass / Less

```less
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
```

## CSS

```css
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
```


---

LICENCE ISC - Created by Guillaume CHAU (@Akryum)
