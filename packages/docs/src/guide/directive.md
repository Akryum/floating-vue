# Directive

In the template, use the `v-tooltip` directive:

```vue
<button v-tooltip="'You have ' + count + ' new messages.'">
```

You can use a reactive property for the tooltip content:

```vue
<button v-tooltip="tooltipContent">
```

## Placement modifier

You can specify the tooltip placement as a modifier:

```vue
<button v-tooltip.bottom-start="'You have ' + count + ' new messages.'">
```

<TooltipPlacement />

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

<TooltipHtml />

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

<TooltipAsync />

To pass custom arguments to the async method, use an arrow function:

```vue
<button
  v-tooltip="{
    content: () => asyncMethod('foo', 'bar'),
  }"
>Hover me!</button>
```

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
import FloatingVue from 'floating-vue'

FloatingVue.options.themes.tooltip.disabled = window.innerWidth <= 768
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
