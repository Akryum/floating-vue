# v-tooltip

[![npm](https://img.shields.io/npm/v/v-tooltip.svg) ![npm](https://img.shields.io/npm/dm/v-tooltip.svg)](https://www.npmjs.com/package/v-tooltip)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Easy tooltips with [tether-tooltip](https://github.com/HubSpot/tooltip)

[Demo](https://akryum.github.io/vue-tooltip/)

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

See the available positions in the [tether-tooltip documentation](http://github.hubspot.com/tooltip/#changing-the-positioning).

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

## Global options

The default global options are:

```javascript
{
  // Applied to the tooltip element
  // (replaced by the `classes` option of the object notation)
  defaultClass: 'vue-tooltip-theme',

  // Any valid tether option.
  tetherOptions: {
    constraints: [
      {
        to: 'window',
        attachment: 'together',
        pin: true,
      },
    ],
  },
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
  display: none;
  opacity: 0;
  transition: opacity .15s;
  pointer-events: none;
  padding: 4px;
  z-index: 10000;

  .tooltip-content {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  &.tooltip-open-transitionend {
    display: block;
  }

  &.tooltip-after-open {
    opacity: 1;
  }
}
```

## CSS

```css
.tooltip {
  display: none;
  opacity: 0;
  transition: opacity .15s;
  pointer-events: none;
  padding: 4px;
  z-index: 10000;
}

.tooltip .tooltip-content {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip.tooltip-open-transitionend {
  display: block;
}

.tooltip.tooltip-after-open {
  opacity: 1;
}
```


---

LICENCE ISC - Created by Guillaume CHAU (@Akryum)
