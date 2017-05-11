
function convertToArray (value) {
  if (typeof value === 'string') {
    value = value.split(' ')
  }
  return value
}

export function addClasses (el, classes) {
  classes = convertToArray(classes)
  classes.forEach(c => {
    el.classList.add(c)
  })
}

export function removeClasses (el, classes) {
  classes = convertToArray(classes)
  classes.forEach(c => {
    el.classList.remove(c)
  })
}

export function replaceClasses (el, newClasses, oldClasses) {
  removeClasses(el, oldClasses)
  addClasses(el, newClasses)
}
