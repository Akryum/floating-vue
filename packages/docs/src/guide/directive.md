# Directive

In the template, use the `v-tooltip` directive:

```vue
<button v-tooltip="'You have ' + count + ' new messages.'">
```

Of course, you can use a reactive property:

```vue
<button v-tooltip="tooltipContent">
```

You can specify the tooltip placement as a modifier:

```vue
<button v-tooltip.bottom-start="'You have ' + count + ' new messages.'">
```

The available placements are:

 - `'auto'`
 - `'auto-start'`
 - `'auto-end'`
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

<tooltip-placement />

## Object notation

You can use an object instead of a simple string:

```vue
<button v-tooltip="{ content: 'You have ' + count + ' new messages.' }">
```

In this object, you can put any [component props](./component.md) plus the additional options below.

## HTML content

By default, content is displayed as text to help prevent XSS attacks. If the tooltip content is deemed safe, you can turn on HTML with the `html` option:

```vue
<button v-tooltip="{ content: '<b>Bold</b>', html: true }">
```

<tooltip-html/>

## Async content

The `content` option accepts a function that returns a promise:

```vue
<button
  v-tooltip="{
    content: asyncMethod,
    loadingContent: 'Please wait...',
  }"
>Hover me!</button>
```

You can style the tooltip content when it's loading:

```css
.v-popper--tooltip-loading .v-popper__inner {
  color: #77aaff;
}
```

<tooltip-async />

To pass custom arguments to the async method, use an arrow function:

```vue
<button
  v-tooltip="{
    content: () => asyncMethod('foo', 'bar'),
  }"
>Hover me!</button>
```

## Arrow padding

If you use tooltips that are positionned on the edge of the reference, you may need to specify an "arrow padding". This padding will prevent the arrow from glitch out of the tooltip:

```vue
<button v-tooltip="{
  content: 'Hello',
}">
```

<arrow-padding />

To fix this, specify the `padding` option of the `arrow` modifier. In the following example, we prevent the arrow from going to the edges of the tooltip with a 8px limit:

```vue
<button v-tooltip="{
  content: 'Hello',
  modifiers: [
    { name: 'arrow', options: { padding: 8 } },
  ],
}">
```

<arrow-padding :padding="8" />

## Manual trigger example

Use the `triggers` and `shown` options from the [popper component](./component.md):

```vue
<button
  v-tooltip="{
    content: 'Tooltip content here',
    shown: isOpen,
    triggers: [],
  }"
>A button</button>
```

## Disabling tooltips

On mobile, you can disable the tooltips with the `disabled` prop on the `tooltip` theme:

```javascript
VTooltip.options.themes.tooltip.disabled = window.innerWidth <= 768
```

You can still override this value, just like you would for any other prop which has a default value in the [configuration](./config.md):

```vue
<button
  v-tooltip="{
    content: 'Tooltip content here',
    disabled: false,
  }"
>A button</button>
```
