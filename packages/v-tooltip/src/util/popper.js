export function applyModifier (modifiers, name, options) {
  let modifier = modifiers.find(m => m.name === name)
  if (!modifier) {
    modifier = {
      name,
      options: {},
    }
    modifiers.push(modifier)
  }
  Object.assign(modifier.options, options)
}
