---
sidebar: auto
---

# API Reference

## Directive options

```vue
<button v-tooltip="{
  /* options */
}">
```

- `content`: HTML text to be displayed in the tooltip. Can also be a function that returns the content or a Promise.
- `html`: Boolean: allow HTML tooltip content.
- `loadingContent`: Same as `content`, used when the actual tooltip content is loading *(see Async content example below)*.

The directive also support all the [Component props](#component-props).

## Component props

- `theme`: The popper theme applied to the popper  (default: `'dropdown'`)
- `placement`: Popper placement (default: `'bottom'`)
- `strategy`: Either `absolute` or `fixed` (default: `absolute`). If your reference element is in a fixed container, use the `fixed` strategy.
- `triggers`: Array of events triggering the popper: either `'hover'`, `'click'`, `'focus'` and/or `'touch'`. Example: `:triggers="['hover', 'focus']"`. If you want to manually trigger the popper, use an empty array: `:triggers="[]"`
- `showTriggers` / `hideTriggers`: Override the trigger events for showing or hiding. Can also be a function that gets the `triggers` list, and should return the new list -- for example: `:hideTriggers="triggers => [...triggers, 'click']"`.
- `popperTriggers`: Array of events triggering the popper applied on the popper container itself: either `'hover'`, `'click'`, `'focus'` and/or `'touch'`. For example, it's useful when triggering on `hover` so that the popper stay open when mouse hovering it: `:popperTriggers="['hover']"`.
- `popperShowTriggers` / `popperHideTriggers`: Override the trigger events for showing or hiding on the popper container itself. Can also be a function that gets the `triggers` list, and should return the new list -- for example: `:popperHideTriggers="triggers => [...triggers, 'click']"`.
- `delay`: Show/Hide delay, or object: `{ show: 500, hide: 100 }` (ms).
- `shown`: Boolean that shows or hide the popper.
- `offset`: An array to modify the position of the popper with relative pixels: `[skidding, distance]`
- `container`: Selector: Container where the popper will be appended (e.g. `'body'`).
- `boundary`: DOM element for the popper position and size boundaries.
- `autoHide`: Hide the popper if clicked outside.
- `disabled`: Boolean that disables the popper. If it was already open, it will be closed.
- `handleResize`: Automatically update the popper position if its size changes.
- `showGroup`: If set, will close all the open popovers that have a different or unset `showGroup` value.
- `instantMove`: Boolean: skip delay & CSS transitions when another popper is open, so that the popper appear to instanly move to the new position.
- `eagerMount`: Boolean: mount the popper content without waiting for the popper to be displayed.
- `disposeTimeout`: Number of ms after hide when the popper instance is destroyed.
- `ariaId`: Id used for the `aria-describedby` attribute. By default a random id.
- `modifiers`: Array of Popper.js [modifier objects](https://popper.js.org/docs/v2/modifiers/).
- `popperOptions`: Other Popper.js options.

## Component slots

- `default`: Content put in the trigger part of the popper, typically a button.
- `popper`: Content put inside the popper of the popper.
  - Props:
    - `shown`: boolean indicating if the popper is shown
    - `hide`: method to hide the popper

## Component events

- `update:shown(Boolean)` - This allow you to use the `.sync` modifier on the `show` prop.
- `show`
- `apply-show` - Emitted after the show delay
- `hide`
- `apply-hide` - Emitted after the hide delay
- `dispose`
- `auto-hide` - Emitted when the popper is closed if clicked outside.
- `close-directive` - Emitted when the popper is closed with the [Close directive](#close-directive).
- `close-group` - Emitted when the popper is closed because a popper of another `showGroup` was shown.
- `resize` - Emitted when the content size changes. You must set the `handleResize` prop to `true`.
