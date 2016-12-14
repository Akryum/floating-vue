# v-tooltip
**Compatible with Vue 2.0+**

Easy tooltips with [tether-tooltip](https://github.com/HubSpot/tooltip)

```
npm install --save v-tooltip
```

Use the plugin:

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

In the template:

```html
<button v-tooltip="'You have ' + count + ' new messages.'">
```

You can specify the tooltip position as a modifier:

```html
<button v-tooltip.bottom-left="'You have ' + count + ' new messages.'">
```

See the available positions in the [tether-tooltip documentation](http://github.hubspot.com/tooltip/#changing-the-positioning).

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
