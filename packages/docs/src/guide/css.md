# CSS

To customize the style of your poppers, you have many CSS classes available.

## Theme classes

Each [theme](./themes.md) has a corresponding CSS class:

```js
(themeName) => `v-popper--theme-${themeName}`
```

For example, the `info-tooltip` theme will have the CSS class `v-popper--theme-info-tooltip`.

If a theme extends another theme, the CSS class of this parent theme will also be included. For example:

```js
Vue.use(VTooltip, {
  themes: {
    'info-tooltip': {
      $extend: 'tooltip',
    },
  },
})
```

The `themeClasses` will be:

```js
[
  'v-popper--theme-info-tooltip',
  'v-popper--theme-tooltip',
]
```

This works for any level of inheritance:

```js
Vue.use(VTooltip, {
  themes: {
    'info-tooltip': {
      $extend: 'tooltip',
    },
    'other-tooltip': {
      $extend: 'info-tooltip',
    }
  },
})
```

The `themeClasses` will be:

```js
[
  'v-popper--theme-other-tooltip',
  'v-popper--theme-info-tooltip',
  'v-popper--theme-tooltip',
]
```

You can prevent a theme from including the parent classes with `$resetCss`:

```js
Vue.use(VTooltip, {
  themes: {
    'info-tooltip': {
      $extend: 'tooltip',
      $resetCss: true,
    },
  },
})
```

The `themeClasses` will be:

```js
[
  'v-popper--theme-info-tooltip',
]
```

## Main content

By default, the popper components will have the `v-popper` class plus the associated `themeClasses`.

Dynamic class:

- `v-popper--shown`: when the popper is shown.

HTML result:

```html
<div class="v-popper"> <!-- themeClasses, 'v-popper--shown' -->
  <!-- Default slot -->
</div>
```

## Popper content

By default, multiple elements are mounted in the popper content:

- `popper`: the root element of the popper. This will be positioned by popperjs.
  - `wrapper`: an intermediary element to allow transforming both the content and the arrow (useful for zoom transitions).
    - `inner`: the main popper content. Ideal target for main styles such as background, border, text color...
    - `arrow-container`: contains the arrow graphics. This will be positioned by popperjs.
      - `arrow-outer`: the bigger arrow. Visible by default. If you want a border, should use the border color - otherwise, should use the background color.
      - `arrow-inner`: the smaller arrow, useful to simulate a border. Hidden by default. The default `dropdown` theme makes it visible to display the default border. Should use the background color.


HTML result:

```html
<div class="v-popper__popper"> <!-- themeClasses,
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
.v-popper--theme-dropdown .v-popper__inner {
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
.v-popper--theme-my-theme .v-popper__inner {
  background: #fff;
  color: black;
  padding: 24px;
  border-radius: 6px;
  border: 1px solid #ddd;
  box-shadow: 0 6px 30px rgba(0, 0, 0, .1);
}

.v-popper--theme-my-theme .v-popper__arrow-inner {
  visibility: visible;
  border-color: #fff;
}

.v-popper--theme-my-theme .v-popper__arrow-outer {
  border-color: #ddd;
}

/* Transition */

.v-popper--theme-my-theme.v-popper__popper--hidden {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.v-popper--theme-my-theme.v-popper__popper--shown {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}

.v-popper--theme-my-theme.v-popper__popper--skip-transition {
  transition: none !important;
}
```

## Advanced transitions

The `popper` lement also has dynamic classes working similarly to the Vue transition system:

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
| `v-popper__popper--hidden-from` | false | false |
| `v-popper__popper--hidden-to` | false | false |

Hidding:

| Class | Frame 1 | Frame 2 |
| ----- | ------- | ------- |
| `v-popper__popper--show-from` | false | false |
| `v-popper__popper--show-to` | false | false |
| `v-popper__popper--hidden-from` | **true** | false |
| `v-popper__popper--hidden-to` | false | **true** |

#### Zoom show only example

```vue
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

```vue
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
