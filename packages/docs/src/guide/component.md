# Component

For more advanced use cases such as dropdowns, you can use the components instead of the `v-tooltip` directive.

## Dropdown

The most basic component included by default is the `VDropdown` component:

```vue
<VDropdown
  :offset="[0, 16]"
>
  <!-- This will be the popover reference (for the events and position) -->
  <button>Click me</button>

  <!-- This will be the content of the popover -->
  <template #popper>
    <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
    <p>
      {{ msg }}
    </p>

    <!-- You can put other components too -->
    <ExampleComponent char="=" />
  </template>
</VDropdown>
```

As shown in the above example, the popper content must be passed to the `popper` slot.

The `VDropdown` uses the `dropdown` theme.

<DropdownSimpleExample />

## Tooltip

If you want to display a tooltip with components and more advanced content, you can use the `VTooltip` component that uses the `tooltip` theme (just like the `v-tooltip` directive).

```vue
<VTooltip>
  <a>Sponsor me</a>

  <template #popper>
    Help me fund my Open Source work!
  </template>
</VTooltip>
```

<TooltipComponentExample />

## Hover Menu

There is a `VMenu` variant with the `menu` theme which extends the `dropdown` theme. It overrides `triggers` and `delay` to be usable on mouse over.

```vue
<VMenu>
  <button>Documentation</button>

  <template #popper>
    <button>Guide</button>
    <button>API Reference</button>
  </template>
</VMenu>
```

<MenuSimpleExample />

## Triggers

Triggering a popper means either showing it or hiding it. A trigger describes events that should toggle the popper visibility.

These are the available triggers:

- `click`
- `hover` (uses `mouseenter` and `mouseleave`)
- `focus` (uses `focus` and `blur`)
- `touch` (uses `touchstart` and `touchend`)

Those events will be listened on the elements in the default slot inside the popper component (the reference elements).

To customize how the popper is shown or hidden, use the `triggers` prop. It must be an array of triggers from the list above.

```vue
<VDropdown
  :triggers="['hover', 'focus']"
>
```

If you want to manually trigger the popper, use an empty array: `:triggers="[]"` and the `shown` prop:

```vue
<VDropdown
  :triggers="[]"
  :shown="isOpen"
  :autoHide="false"
>
```

::: tip
If `autoHide` is `true`, the popper will be hidden when clicked outside of it. That's why it's forced to `false` in the previous snippet.
:::

You can specify different triggers for the showing or hiding action of the popper with the `showTriggers`
 and `hideTriggers` props:

```vue
<VDropdown
  :showTriggers="['hover']"
  :hideTriggers="['click']"
>
```

Using functions allows you to reuse the `triggers` list:

```vue
<VDropdown
  :triggers="['focus']"
  :showTriggers="triggers => [...triggers, 'hover']"
  :hideTriggers="triggers => [...triggers, 'click']"
>
```

You can also use the `popperTriggers`, `popperShowTriggers` and `popperHideTriggers` props which will add the event listeners on the popper container itself (instead of the reference elements).

This can be useful if you want to popper to stay open when the mouse hovers it:

```vue
<VDropdown
  :triggers="['hover']"
  :popperTriggers="['hover']"
>
```

## Offset

Offsetting the popper means moving it relative to its computed position on the page. You can do this with the `offset` prop which must be an array of the form `[skidding, distance]`.

This example will move the popper away from the reference by `64` pixels:

```vue
<VDropdown
  :offset="[0, 64]"
>
```

<OffsetExample :offset="[0, 64]" info="(Distance)"/>

This example will move the popper `32` pixels alongside the reference:

```vue
<VDropdown
  :offset="[32, 0]"
>
```

<OffsetExample :offset="[32, 0]" info="(Skidding)"/>

You can also use negative value, since it's a relative offset.

```vue
<VDropdown
  :offset="[-16, 32]"
>
```

<OffsetExample :offset="[-16, 32]" info="(Negative skidding and positive distance)"/>

## Disable popper

Disabling a popper will prevent it from being shown.

```vue
<VDropdown :disabled="isDisabled"></VDropdown>
```

```js
data () {
  return {
    isDisabled: true,
  }
}
```

## Close directive

Use the `v-close-popper` directive on an element inside the dropdown to close it when the element is clicked (or touched on mobile):

```vue
<VDropdown>
  <button>Click me</button>

  <template #popper>
    <a v-close-popper>Close</a>
  </template>
</VDropdown>
```

You can also set it to true or false to enable or disable the directive (enabled by default):

```vue
<a v-close-popper="false">Close</a>
<a v-close-popper="true">Close</a>
```

You can also use a property:

```vue
<a v-close-popper="myBooleanProp">Close</a>
```

```js
data () {
  return {
    myBooleanProp: true,
  }
}
```

Close all the poppers in the page with the `all` modifier:

```vue
<a v-close-popper.all>Close All</a>
```

## Modifiers

Modifiers should now always be specified with the `modifiers` prop instead of the `popperOptions` because additional processing is done on them before passing them to PopperJS.

`modifiers` is an array of objects configuring the PopperJS modifiers, [learn more here](https://popper.js.org/docs/v2/modifiers/).

Example:

```html
<VDropdown
  :modifiers="[
    {
      name: 'flip',
      enabled: false,
    },
  ]"
/>
```
