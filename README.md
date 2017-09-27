# v-tooltip

[![npm](https://img.shields.io/npm/v/v-tooltip.svg) ![npm](https://img.shields.io/npm/dm/v-tooltip.svg)](https://www.npmjs.com/package/v-tooltip)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Easy tooltips with [Tooltip.js](https://github.com/FezVrasta/popper.js#tooltipjs)

[Demo](https://akryum.github.io/v-tooltip/)

[JSFiddle](https://jsfiddle.net/Akryum/tsjco74e/)

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

Include [popper.js & tooltip.js](https://popper.js.org/) with [v-tooltip](/dist/v-tooltip.browser.js) in the page.

Install the plugin into Vue:

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

- `content` - HTML text to be displayed in the tooltip
- `classes` - *(see above)*
- `delay` - Show/Hide delay (ms)
- `placement` - *(see above)*
- `trigger` - Events triggering the tooltip separated with spaces: `'hover'`, `'click'`, `'focus'` or `'manual'` (`'manual'` can't be combined with any other event)
- `offset` - Offset of the position (px)
- `container` - Selector: Container where the tooltip will be appended (e.g. `'body'`)
- `boundariesElement` - DOM element for the tooltip boundaries
- `popperOptions` - Other Popper.js options

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
  autoHide: true,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
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

# Example Style

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
