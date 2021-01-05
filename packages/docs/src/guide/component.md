# Component

For more advanced use cases such as dropdowns, you can use the components instead of the `v-tooltip` directive.

## Dropdown

The most basic component included by default is the `VDropdown` component:

```vue
<VDropdown
  :offset="[0, 16]"
>
  <!-- This will be the popover target (for the events and position) -->
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

## Tooltip

If you want to display a tooltip with components and more advanced content, you can use the `VTooltip` component that uses the `tooltip` theme (just like the `v-tooltip` directive).

```vue
<VTooltip>
  <button>Sponsor me</button>

  <template #popper>
    Help me fund my Open Source work!
  </template>
</VTooltip>
```

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

## Triggers

TODO

## Offset

TODO

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

Close all the dropdowns in the page with the `all` modifier:

```vue
<a v-close-popper.all>Close All</a>
```
