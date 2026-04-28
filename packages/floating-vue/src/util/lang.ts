/**
 * Removes the first occurrence of `item` from `array` in place.
 */
export function removeFromArray<T> (array: T[], item: T) {
  const index = array.indexOf(item)
  if (index !== -1) {
    array.splice(index, 1)
  }
}
