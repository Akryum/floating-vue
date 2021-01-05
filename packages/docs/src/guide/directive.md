# Directive

In the template, use the `v-tooltip` directive:

```vue
<button v-tooltip="'You have ' + count + ' new messages.'">
```

Of course, you can use a reactive property:

```vue
<button v-tooltip="tooltipContent">
```

You can specify the tooltip position as a modifier:

```vue
<button v-tooltip.bottom-start="'You have ' + count + ' new messages.'">
```

The available positions are:

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

## Object notation

You can use an object instead of a simple string:

```vue
<button v-tooltip="{ content: 'You have ' + count + ' new messages.' }">
```

## HTML content

By default, content is displayed as text to help prevent XSS attacks. If the tooltip content is deemed safe, you can turn on HTML with the `html` option:

```vue
<button v-tooltip="{ content: '<b>Bold</b>', html: true }">
```

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
.v-popper--tooltip-loading {
  .v-popper__inner {
    color: #77aaff;
  }
}
```

To pass custom arguments to the async method, use an arrow function:

```vue
<button
  v-tooltip="{
    content: () => asyncMethod('foo', 'bar'),
  }"
>Hover me!</button>
```

## Manual trigger example

Use the `trigger` and `show` options:

```vue
<button
  v-tooltip="{
    content: 'Tooltip content here',
    show: isOpen,
    trigger: 'manual',
  }"
>A button</button>
```

## Disabling tooltips

On mobile, you can disable the tooltips with the `disabled` property on the `tooltip` theme:

```javascript
VTooltip.options.themes.tooltip.disabled = window.innerWidth <= 768
```
