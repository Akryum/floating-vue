# Configuration

The global configuration allows you to set default values for all [available props](../api/) so you don't have to specify every one of them when using the popper directive or components.

It also describes the available [themes](./themes.md).

You can change the configuration options during install with the arguments:

```javascript
import VTooltip from 'v-tooltip'
app.use(VTooltip, options)
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

## Default values

The default global options are:

```js
export const config = {
  // Disable popper components
  disabled: false,
  // Default position offset [skidding, distance] (px)
  offset: [0, 5],
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
  // Popperjs modifiers
  modifiers: [],
  // Other options passed to Popperjs constructor
  popperOptions: {},
  // Themes
  themes: {
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
