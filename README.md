# v-tooltip

[![npm](https://img.shields.io/npm/v/v-tooltip.svg) ![npm](https://img.shields.io/npm/dm/v-tooltip.svg)](https://www.npmjs.com/package/v-tooltip)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Easy tooltips with [tooltip.js](https://github.com/HubSpot/tooltip)

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

Vue.directive('my-tooltip', VTooltip)
```

## Browser

Include [Tether](http://tether.io/), [Drop](http://github.hubspot.com/drop/), [Tooltip](http://github.hubspot.com/tooltip/) and [v-tooltip](/dist/v-tooltip.browser.js) in the page.

Install the plugin into Vue:

```javascript
Vue.use(VTooltip)
```

Or use the directive directly:

```javascript
Vue.directive('my-tooltip', VTooltip.VTooltip)
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
}
```

You can change the options during install with the arguments:

```javascript
Vue.use(VTooltip, options)
```

Or directly on the directive definition:

```javascript
VTooltip.options.defaultClass = 'my-tooltip'
```

See the [tether documentation](http://tether.io/) for more info on `tetherOptions`.

# Example Style

## Sass / Less

```less
.tooltip {
  display: block !important;
  pointer-events: none;
  padding: 4px;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow{
    display: none;
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
  pointer-events: none;
  padding: 4px;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip tooltip-arrow{
  display: none;
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
