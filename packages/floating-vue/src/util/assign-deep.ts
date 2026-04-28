/**
 * Recursively merges enumerable own properties of `from` into `to`.
 */
export function assign (to: Record<string, any>, from: Record<string, any>) {
  for (const key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (typeof from[key] === 'object' && to[key]) {
        assign(to[key], from[key])
      } else {
        to[key] = from[key]
      }
    }
  }
}
