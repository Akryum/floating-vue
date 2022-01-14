export function removeFromArray (array, item) {
  const index = array.indexOf(item)
  if (index !== -1) {
    array.splice(index, 1)
  }
}
