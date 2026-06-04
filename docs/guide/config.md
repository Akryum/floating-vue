# Configuration

The global configuration allows you to set default values for all [available props](../api/) so you don't have to specify every one of them when using the popper directive or components.

It also describes the available [theme presets](./themes.md).

You can change the configuration options during install with the arguments:

```javascript
import FloatingVue from 'floating-vue'
Vue.use(FloatingVue, options)
```

For TypeScript projects, use `defineFloatingVueConfig` and `definePopperPreset` to get autocomplete and excess-property checks:

```ts
import FloatingVue, { defineFloatingVueConfig, definePopperPreset } from 'floating-vue'

app.use(FloatingVue, defineFloatingVueConfig({
  presets: {
    custom: definePopperPreset({
      $extend: 'dropdown',
      arrowSize: 14,
    }),
  },
}))
```

Or directly on `FloatingVue`:

```javascript
import FloatingVue from 'floating-vue'
FloatingVue.options.distance = 12
```

For a specific theme preset:


```js
import FloatingVue from 'floating-vue'
FloatingVue.options.presets.dropdown.distance = 12
```

## Default values

The default global options are:

```js
export const config: FloatingVueConfig = {
  // Disable popper components
  disabled: false,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: 'body',
  // Element used to compute position and size boundaries
  boundary: undefined,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: false,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: 'absolute',
  // Prevent overflow
  preventOverflow: true,
  // Flip to the opposite placement if needed
  flip: true,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: true,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Arrow size (px). Keep undefined to use the default CSS variables.
  arrowSize: undefined,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: true,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: false,
  // Theme presets
  presets: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: 'top',
      // Default events that trigger the tooltip
      triggers: ['hover', 'focus', 'touch'],
      // Close tooltip on click on tooltip target
      hideTriggers: events => [...events, 'click'],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0,
      },
      // Update popper on content resize
      handleResize: false,
      // Enable HTML content in directive
      html: false,
      // Displayed when tooltip content is loading
      loadingContent: '...',
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: 'bottom',
      // Default events that trigger the dropdown
      triggers: ['click'],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: true,
      // Hide on click outside
      autoHide: true,
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover', 'focus'],
      delay: {
        show: 0,
        hide: 400,
      },
    },
  },
}
```
