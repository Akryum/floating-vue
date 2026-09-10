/**
 * Vue 3.2's `defineComponent` types do not infer values passed to `expose()`.
 * This keeps component options intact while adding those values to ref types.
 */
export type ComponentWithExposedMethods<
  Component extends abstract new (...args: never[]) => object,
  Exposed extends object,
> = Omit<Component, never> & {
  new (...args: ConstructorParameters<Component>): InstanceType<Component> & Exposed
}
