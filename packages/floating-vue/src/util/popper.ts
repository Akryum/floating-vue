export function applyModifier (modifiers, name, data) {
  let modifier = modifiers.find(m => m.name === name)

  if (!modifier) {
    modifier = {
      name,
    }
    modifiers.push(modifier)
  }

  for (const key in data) {
    if (key === 'options') {
      if (!modifier.options) {
        modifier.options = {}
      }
      Object.assign(modifier.options, data.options)
    } else {
      modifier[key] = data[key]
    }
  }
}
