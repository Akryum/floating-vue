# Accessibility

floating-vue applies a few ARIA attributes for you, and offers three props to control keyboard behavior: [`ariaRole`](../api/#ariarole), [`focusTrap`](../api/#focustrap) and [`restoreFocus`](../api/#restorefocus).

## Attributes applied automatically

While a popper is shown, the trigger element gets `aria-describedby` pointing at the popper id (see the [`ariaId`](../api/#ariaid) prop to control that id). The popper element itself gets:

- `role`, from the [`ariaRole`](../api/#ariarole) prop;
- `aria-modal="true"` when the role is `dialog`;
- `aria-hidden`, reflecting the shown state.

## Default roles

Each [preset](./presets.md) sets a default role:

| Preset | `ariaRole` |
| --- | --- |
| `tooltip` | `tooltip` |
| `dropdown` | `dialog` |
| `menu` | `menu` |

Override it per popper when the content says otherwise — a dropdown wrapping a list of options is a `listbox`, not a `dialog`:

```html
<VDropdown aria-role="listbox">
  <button>Pick one</button>

  <template #popper>
    <div role="option">Option A</div>
    <div role="option">Option B</div>
  </template>
</VDropdown>
```

Pass `null` to omit the attribute entirely.

## Menu keyboard navigation

When `ariaRole` is `menu` — which is the default for `VMenu` — floating-vue installs arrow key navigation over the descendants with `role="menuitem"`:

- <kbd>↓</kbd> / <kbd>↑</kbd>: move to the next / previous item, wrapping around;
- <kbd>Home</kbd> / <kbd>End</kbd>: move to the first / last item.

Only visible items participate, so items hidden with `v-show` are skipped.

```html
<VMenu>
  <button>Menu</button>

  <template #popper>
    <button role="menuitem">Rename</button>
    <button role="menuitem">Duplicate</button>
    <button role="menuitem">Delete</button>
  </template>
</VMenu>
```

## Focus trap

For a popper that behaves like a modal, enable `focusTrap` so <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> cycle inside the popper instead of moving to the rest of the page. Pair it with `restoreFocus` so focus returns to the trigger on close:

```html
<VDropdown
  focus-trap
  restore-focus
>
  <button>Edit</button>

  <template #popper>
    <input>
    <button v-close-popper>Save</button>
  </template>
</VDropdown>
```

Both are off by default: trapping focus in a popper the user did not deliberately open is disorienting, so only enable them for poppers with interactive content.

::: tip
`restoreFocus` is a no-op if the previously focused element was removed from the document in the meantime.
:::

## Auto focus

By default the popper element itself receives focus when shown. Use [`noAutoFocus`](../api/#noautofocus) to opt out — for example on a tooltip, where moving focus away from the trigger would be unexpected.
