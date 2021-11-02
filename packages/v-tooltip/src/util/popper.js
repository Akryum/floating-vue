export function applyModifier (modifiers, name, options) {
  let modifier = modifiers.find(m => m.name === name)
  if (!modifier) {
    modifier = {
      name,
      options: {},
    }
    modifiers.push(modifier)
  } else if (!modifier.options) {
    modifier.options = {}
  }
  Object.assign(modifier.options, options)
}
