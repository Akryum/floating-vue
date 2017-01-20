
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

const MIRROR_ATTACH = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
  middle: 'middle',
  center: 'center',
}

export function mirrorAttachment (attachment) {
  var dropAttach = attachment.split(' ')
  dropAttach[0] = MIRROR_ATTACH[dropAttach[0]]
  dropAttach = dropAttach.join(' ')
  return dropAttach
}

export function sortAttach (str) {
  var list = str.split(' ')

  var first = list[0]
  var second = list[1]

  if (['left', 'right'].indexOf(first) >= 0) {
    var _ref = [second, first]
    first = _ref[0]
    second = _ref[1]
  }
  return [first, second].join(' ')
}

export function getTetherAttachments (position) {
  const dropAttach = mirrorAttachment(position)
  return {
    attachment: sortAttach(dropAttach),
    targetAttachment: sortAttach(position),
  }
}
