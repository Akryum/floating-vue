/**
 * Recursively merges enumerable own properties of `from` into `to`.
 */
export function assign<T extends object> (to: T, from: Partial<T>): T {
  for (const key of Object.keys(from) as Array<keyof T>) {
    const value = from[key]
    const target = to[key]

    if (isPlainObject(value) && isPlainObject(target)) {
      assign(target, value as Partial<typeof target>)
    } else {
      to[key] = value as T[typeof key]
    }
  }

  return to
}

/**
 * Narrows unknown values to mergeable object records.
 */
function isPlainObject (value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
