---
sidebar: auto
---

# Migration from floating-vue 5

floating-vue 6 rewrites the internals with the Composition API, renames "themes" to "presets" and adds accessibility defaults.

The rename is fully backward compatible, so most apps only need to check the [Accessibility defaults](#accessibility-defaults) section.

| floating-vue | NPM Tag | Vue compatibility |
| ------------ | ------- | ----------------- |
| 6.x          | latest  | 3.x               |
| 5.x          | v5      | 3.x               |
| 1.x          | vue2    | 2.x               |

## Breaking changes

### Node and dependencies

- Node 18 or later is required (`engines.node` is now `>=18`).
- `@floating-ui/dom` was bumped from `~1.1.1` to `~1.6.3`.
- The `vue-resize` dependency was removed (see [Resize observer](#resize-observer)).

The Vue peer range is unchanged: `^3.2.0`.

### Accessibility defaults

The three built-in presets now render a `role` attribute. In v5 they rendered none, so this changes the DOM of poppers using those presets, including tooltips created by the `v-tooltip` directive.

The built-in presets ship these default roles:

| Preset | `ariaRole` |
| --- | --- |
| `tooltip` | `tooltip` |
| `dropdown` | `dialog` |
| `menu` | `menu` |

Custom presets do not receive a role automatically. Extend one of these presets to inherit its role, or set `ariaRole` explicitly.

Three consequences to check:

- Tests and styles that match poppers using these presets — `getByRole`, DOM snapshots, `[role]` selectors — see a new attribute.
- Anything on the `dropdown` preset also renders `aria-modal="true"` while shown, so screen readers announce it as a modal dialog. If your dropdown is really a list of options, set the correct role.
- Anything on the `menu` preset installs arrow key navigation. <kbd>↓</kbd>, <kbd>↑</kbd>, <kbd>Home</kbd> and <kbd>End</kbd> are prevented and move focus between visible `[role="menuitem"]` descendants whenever there is at least one. Your own handlers for those keys inside the popper no longer run.

Override the role per popper, or pass `null` to render no attribute at all:

```html
<VDropdown aria-role="listbox" />
<VMenu :aria-role="null" />
```

You can also change it for a whole preset in the global config:

```js
app.use(FloatingVue, {
  presets: {
    menu: {
      ariaRole: null,
    },
  },
})
```

The two other new accessibility props, `focusTrap` and `restoreFocus`, are off by default — <kbd>Tab</kbd> still leaves the popper as it did in v5.

[Learn more](../guide/accessibility.md)

### SSR-generated popper IDs

Automatically generated popper IDs now appear only after client mount. This keeps server markup and initial client hydration identical. Set `ariaId` when an ID must be present in SSR output or is referenced by server-rendered markup:

```html
<VDropdown aria-id="account-menu" />
```

After client mount, generated IDs and `aria-describedby` still point to the displayed popper as before.

### `Popper` is no longer a factory

`Popper` used to be a function returning a component. It is now the component itself, so `Popper()` throws.

```js
// Before
components: { Popper: Popper() }
// After
components: { Popper }
```

[Learn more](../guide/custom-component.md)

### Component instance surface

`VDropdown`, `VMenu` and `VTooltip` now only expose `show`, `hide`, `dispose` and `onResize` on a template ref. Internals that used to be reachable are not anymore:

- `$refs.popper` and `$refs.popperContent`
- `finalTheme` and `themeClass`
- `getTargetNodes()`
- `recompute()` — it lives on the core `<Popper>` component only

`<PopperContent>` exposes nothing either, so `$refs.inner` and `$refs.arrow` are gone. Query `.v-popper__inner` / `.v-popper__arrow-container` on the DOM if you need those elements.

To recompute every popper at once, use the global helper instead:

```js
import { recomputeAllPoppers } from 'floating-vue'

recomputeAllPoppers()
```

### Resize observer

`vue-resize` was replaced by the native `ResizeObserver`. Nothing needs registering, but the output changed:

- The extra `<div class="resize-observer">` that `handleResize` rendered inside `.v-popper__inner` is gone. Structural selectors such as `.v-popper__inner > div:last-child`, `:only-child` or `:nth-child()` now match different elements.
- `dist/style.css` no longer ships the `.resize-observer` rules.
- On `<PopperContent>`, the `resize` event no longer carries a payload. The wrapper components already emitted none.
- Browsers without a native `ResizeObserver` lose resize detection instead of falling back to the old `<object>` technique.

### TypeScript

The package is compiled in strict mode and its public surface is pinned, so a few things that used to be `any` now type-check.

- `FloatingVueConfig` went from `any` to `Partial<Config>`. Unknown or misspelled keys passed to `app.use(FloatingVue, { … })` are now errors. Use [`defineFloatingVueConfig`](../api/#definefloatingvueconfig) and [`definePopperPreset`](../api/#definepopperpreset) to author config in its own file with the same checks.
- `TriggerEvent` moved from `components/PopperWrapper.vue` to `components/popperWrapperProps.ts`, and gained `'pointer'`. It is still re-exported from the package entry, so only deep imports break.
- `ariaId` is typed `string | null` and validated at runtime — passing anything else logs a Vue warning.
- `PopperInstance` is no longer exported from the package entry. Use `PopperApi`, which describes the popper logic (`state`, `runtime`, `props`, `emit`, `instance`), instead.
- `ComputePositionConfig` is no longer exported.

Import everything from `floating-vue` — deep imports into `floating-vue/dist/components/*` are not part of the public API.

### `v-tooltip` directive options

The directive no longer mutates the object you pass to it. It works on a shallow copy, so `placement`, `targetNodes` and `referenceNode` are not written back onto your object:

```js
// Before: the directive set options.placement to 'top'
// After: options is left untouched
const options = reactive({ content: 'Hi' })
```

Read the placement from the modifier or from your own state instead.

## Deprecations

Everything below still works. It is deprecated and will be removed in a future major, so you can migrate gradually.

### `themes` renamed to `presets`

The global config key is now `presets`, and the CSS class it produces went from `v-popper--theme-{name}` to `v-popper--preset-{name}`.

```js
// Before
app.use(FloatingVue, { themes: { 'info-tooltip': { $extend: 'tooltip' } } })
// After
app.use(FloatingVue, { presets: { 'info-tooltip': { $extend: 'tooltip' } } })
```

```css
/* Before */
.v-popper--theme-info-tooltip { /* ... */ }
/* After */
.v-popper--preset-info-tooltip { /* ... */ }
```

Both spellings keep working:

- `options.themes` is an alias reading and writing the same object as `options.presets`;
- every popper carries the `v-popper--theme-{name}` class next to `v-popper--preset-{name}`, so existing stylesheets still apply.

Passing a `themes` option to the plugin logs a deprecation warning.

[Learn more](../guide/presets.md)

### `theme` prop renamed to `preset`

To match the config key, the prop that selects a preset is now called `preset`:

```html
<!-- Before -->
<VDropdown theme="info-dropdown" />
<button v-tooltip="{ content: 'Hi', theme: 'info-tooltip' }" />

<!-- After -->
<VDropdown preset="info-dropdown" />
<button v-tooltip="{ content: 'Hi', preset: 'info-tooltip' }" />
```

`theme` is still accepted on every component and on the directive options. If both are set, `preset` wins.

The `vPopperTheme` component option used by preset components is renamed to `vPopperPreset`, with the same fallback.

### Options API mixins

Custom popper components should use the Composition API helpers:

- replace the `PopperMethods` mixin with the [`usePopperMethods`](../api/#usepoppermethods) composable;
- replace the `ThemeClass` mixin with the [`usePresetClass`](../api/#usepresetclass) composable.

Before:

```js
import { PopperMethods, ThemeClass } from 'floating-vue'

export default {
  mixins: [
    PopperMethods,
    ThemeClass(),
  ],
}
```

After:

```vue
<script setup>
import { computed, ref } from 'vue'
import { usePopperMethods, usePresetClass } from 'floating-vue'

const props = defineProps({
  preset: { type: String, default: 'dropdown' },
})

const popper = ref(null)
const presetClass = usePresetClass(computed(() => props.preset))

defineExpose(usePopperMethods(popper))
</script>
```

[Learn more](../guide/custom-component.md)
