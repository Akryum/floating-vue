# CSS

To customize the style of your poppers, you have many CSS classes available.

## Preset classes

Each [preset](./presets.md) has a corresponding CSS class:

```js
(presetName) => `v-popper--preset-${presetName}`
```

For example, the `info-tooltip` preset will have the CSS class `v-popper--preset-info-tooltip`.

::: warning `v-popper--theme-*` is deprecated
Every preset class below is also emitted with the older `v-popper--theme-{presetName}` spelling,
so stylesheets written before the rename keep working. The lists on this page only show the
current spelling. The old one will be removed in a future major.
:::

If a preset extends another preset, the CSS class of this parent preset will also be included. For example:

```js
import FloatingVue from 'floating-vue'

app.use(FloatingVue, {
  presets: {
    'info-tooltip': {
      $extend: 'tooltip',
    },
  },
})
```

The preset classes will be:

```js
[
  'v-popper--preset-info-tooltip',
  'v-popper--preset-tooltip',
]
```

This works for any level of inheritance:

```js
import FloatingVue from 'floating-vue'

app.use(FloatingVue, {
  presets: {
    'info-tooltip': {
      $extend: 'tooltip',
    },
    'other-tooltip': {
      $extend: 'info-tooltip',
    }
  },
})
```

The preset classes will be:

```js
[
  'v-popper--preset-other-tooltip',
  'v-popper--preset-info-tooltip',
  'v-popper--preset-tooltip',
]
```

You can prevent a preset from including the parent classes with `$resetCss`:

```js
import FloatingVue from 'floating-vue'

app.use(FloatingVue, {
  presets: {
    'info-tooltip': {
      $extend: 'tooltip',
      $resetCss: true,
    },
  },
})
```

The preset classes will be:

```js
[
  'v-popper--preset-info-tooltip',
]
```

## Main content

By default, the popper components will have the `v-popper` class plus the associated preset classes.

Dynamic class:

- `v-popper--shown`: when the popper is shown.

HTML result:

```html
<div class="v-popper"> <!-- preset classes, 'v-popper--shown' -->
  <!-- Default slot -->
</div>
```

## CSS variables

The default stylesheet exposes CSS custom properties for common popper styling. You can override them on `:root`, an ancestor, a preset class, or a specific popper class.

```css
.v-popper--preset-large-tooltip {
  --v-popper-arrow-size: 14px;
}
```

Overriding these tokens is the preferred way to restyle the built-in presets — it survives library updates, unlike overriding the `.v-popper__inner` rules themselves.

### Layout

| Variable | Default |
| --- | --- |
| `--v-popper-zindex` | `10000` |
| `--v-popper-transition-duration` | `.15s` |

### Tooltip preset

Applied under `.v-popper--preset-tooltip`.

| Variable | Default |
| --- | --- |
| `--v-popper-tooltip-background` | `rgba(0, 0, 0, .8)` |
| `--v-popper-tooltip-color` | `white` |
| `--v-popper-tooltip-radius` | `6px` |
| `--v-popper-tooltip-padding` | `7px 12px 6px` |

The arrow color follows `--v-popper-tooltip-background`.

### Dropdown preset

Applied under `.v-popper--preset-dropdown` — and therefore under `menu`, which extends it.

| Variable | Default |
| --- | --- |
| `--v-popper-dropdown-background` | `#fff` |
| `--v-popper-dropdown-color` | `black` |
| `--v-popper-dropdown-radius` | `6px` |
| `--v-popper-dropdown-border-color` | `#ddd` |
| `--v-popper-dropdown-shadow` | `0 6px 30px rgba(0, 0, 0, .1)` |

The arrow fill follows `--v-popper-dropdown-background` and its border follows `--v-popper-dropdown-border-color`.

### Arrow

Arrow sizing can also be controlled with the `arrowSize` option, which derives all three sizes at once:

```html
<VDropdown :arrow-size="14" />
```

For lower-level arrow control, use:

- `--v-popper-arrow-size` (`10px`): arrow positioning box size.
- `--v-popper-arrow-inner-size` (`7px`): inner arrow border width.
- `--v-popper-arrow-outer-size` (`6px`): outer arrow border width.
- `--v-popper-arrow-inner-horizontal-offset` and `--v-popper-arrow-outer-horizontal-offset`: horizontal offsets for top and bottom placements.
- `--v-popper-arrow-inner-top-offset`, `--v-popper-arrow-inner-bottom-offset`, and `--v-popper-arrow-outer-bottom-offset`: vertical offsets for top and bottom placements.
- `--v-popper-arrow-inner-vertical-offset` and `--v-popper-arrow-outer-vertical-offset`: vertical offsets for left and right placements.
- `--v-popper-arrow-inner-right-offset`, `--v-popper-arrow-outer-right-offset`, `--v-popper-arrow-container-left-offset`, and `--v-popper-arrow-inner-left-offset`: horizontal offsets for left and right placements.

## Styling contract

The default stylesheet treats these selectors and CSS variables as public extension points:

| Surface | Stable/public API | Notes |
| --- | --- | --- |
| Preset classes | `v-popper--preset-{name}` | Added to the popper root. Parent preset classes are included unless the preset uses `$resetCss`. |
| Reference classes | `v-popper`, `v-popper--shown` | Added around component default slots. |
| Popper structure | `v-popper__popper`, `v-popper__wrapper`, `v-popper__inner`, `v-popper__arrow-container`, `v-popper__arrow-outer`, `v-popper__arrow-inner` | Safe targets for custom preset CSS. |
| Dynamic classes | `v-popper__popper--shown`, `v-popper__popper--hidden`, `v-popper__popper--skip-transition`, `v-popper__popper--arrow-overflow`, `v-popper__popper--no-positioning`, transition frame classes | Safe for state-specific styles. |
| CSS variables | Documented `--v-popper-*` variables | Safe to override on `:root`, ancestors, preset classes, or `popperClass`. |

## Popper content

By default, multiple elements are mounted in the popper content:

- `popper`: the root element of the popper. This is positioned by Floating UI.
  - `wrapper`: an intermediary element to allow transforming both the content and the arrow (useful for zoom transitions).
    - `inner`: the main popper content. Ideal target for main styles such as background, border, text color...
    - `arrow-container`: contains the arrow graphics. This is positioned by Floating UI.
      - `arrow-outer`: the bigger arrow. Visible by default. If you want a border, should use the border color - otherwise, should use the background color.
      - `arrow-inner`: the smaller arrow, useful to simulate a border. Hidden by default. The default `dropdown` preset makes it visible to display the default border. Should use the background color.


HTML result:

```html
<div class="v-popper__popper"> <!-- preset classes,
                                    props.popperClass,
                                    'v-popper__popper--shown',
                                    'v-popper__popper--hidden',
                                    'v-popper__popper--skip-transition',
                                    'v-popper__popper--arrow-overflow',
                                    'v-popper__popper--no-positioning',
                                    'v-popper__popper--show-from',
                                    'v-popper__popper--show-to',
                                    'v-popper__popper--hide-from',
                                    'v-popper__popper--hide-to' -->
  <div class="v-popper__wrapper">
    <div class="v-popper__inner">
      <div>
        <!-- Popper slot -->
      </div>
    </div>

    <div class="v-popper__arrow-container">
      <div class="v-popper__arrow-outer" />
      <div class="v-popper__arrow-inner" />
    </div>
  </div>
</div>
```

You probably want to put a default padding on all dropdowns and menus:

```css
.v-popper--preset-dropdown .v-popper__inner {
  padding: 6px;
}
```

The `popper` element has several dynamic classes:

- `v-popper__popper--shown`: the popper is shown.
- `v-popper__popper--hidden`: the popper is hidden.
- `v-popper__popper--skip-transition`: the transition should be skipped.
- `v-popper__popper--arrow-overflow`: the arrow is overflowing past the reference, and should probably be hidden.
- `v-popper__popper--no-positioning`: positioning is disabled with `positioningDisabled` prop.


Full example style:

```css
.v-popper--preset-my-preset .v-popper__inner {
  background: #fff;
  color: black;
  padding: 24px;
  border-radius: 6px;
  border: 1px solid #ddd;
  box-shadow: 0 6px 30px rgba(0, 0, 0, .1);
}

.v-popper--preset-my-preset .v-popper__arrow-inner {
  visibility: visible;
  border-color: #fff;
}

.v-popper--preset-my-preset .v-popper__arrow-outer {
  border-color: #ddd;
}

/* Transition */

.v-popper--preset-my-preset.v-popper__popper--hidden {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.v-popper--preset-my-preset.v-popper__popper--shown {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}

.v-popper--preset-my-preset.v-popper__popper--skip-transition {
  transition: none !important;
}
```

## Advanced transitions

The `popper` element also has dynamic classes working similarly to the Vue transition system:

- `v-popper__popper--show-from`: (for advanced transition) initial style when shown.
- `v-popper__popper--show-to`: (for advanced transition) final style when shown.
- `v-popper__popper--hide-from`: (for advanced transition) initial style when hidden.
- `v-popper__popper--hide-to`: (for advanced transition) final style when hidden.

They allow you to create advanced transitions.

Showing:

| Class | Frame 1 | Frame 2 |
| ----- | ------- | ------- |
| `v-popper__popper--show-from` | **true** | false |
| `v-popper__popper--show-to` | false | **true** |
| `v-popper__popper--hide-from` | false | false |
| `v-popper__popper--hide-to` | false | false |

Hiding:

| Class | Frame 1 | Frame 2 |
| ----- | ------- | ------- |
| `v-popper__popper--show-from` | false | false |
| `v-popper__popper--show-to` | false | false |
| `v-popper__popper--hide-from` | **true** | false |
| `v-popper__popper--hide-to` | false | **true** |

#### Zoom show only example

```html
<VDropdown compute-transform-origin />
```

```css
.v-popper__popper.v-popper__popper--show-from .v-popper__wrapper {
  transform: scale(.5);
}

.v-popper__popper.v-popper__popper--show-to .v-popper__wrapper {
  transform: none;
  transition: transform .15s;
}
```

<ZoomShowOnlyExample />

## Tooltip directive

The `v-tooltip` directive adds the `v-popper--has-tooltip` to the target element. For example:

```html
<button v-tooltip="'Some info'">
  Click me
</button>
```

Result:

```html
<button class="v-popper--has-tooltip">
  Click me
</button>
```

The popper content root element also has the following dynamic classes:

- `v-popper--tooltip-loading`: the tooltip content is loading (when the `content` is a function that returns a promise). Example result:

```html
<div class="v-popper__popper v-popper--tooltip-loading">
  <div class="v-popper__wrapper">
    <div class="v-popper__inner">
      <div>
        <!-- Tooltip text here -->
      </div>
    </div>

    <div class="v-popper__arrow-container">
      <div class="v-popper__arrow-outer" />
      <div class="v-popper__arrow-inner" />
    </div>
  </div>
</div>
```

## `data-popper-shown`

When the popper is shown, the target elements automatically get the `popper-shown` data property:

```html
<!-- Popper is shown -->
<button data-popper-shown="">
  Click me
</button>
```

You can for example use this to style it with CSS:

```css
button[data-popper-shown] {
  background: #f00;
}
```
