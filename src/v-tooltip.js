import Tooltip from 'tether-tooltip'

const positions = [
  'top-left',
  'left-top',
  'left-middle',
  'left-bottom',
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'right-bottom',
  'right-middle',
  'right-top',
  'top-right',
  'top-center',
]

function createTooltip (el, value, modifiers) {
  let position = 'top-center'
  for (const pos of positions) {
    if (modifiers[pos]) {
      position = pos
    }
  }
  position = position.replace('-', ' ')

  el._tooltip = new Tooltip({
    target: el,
    position,
    content: value,
    classes: 'vue-tooltip-theme',
  })
}

function destroyTooltip (el) {
  if (el._tooltip) {
    el._tooltip.destroy()
    delete el._tooltip
  }
}

export default {
  bind (el, { value, modifiers }) {
    destroyTooltip(el)
    if (value) {
      createTooltip(el, value, modifiers)
    }
  },
  update (el, { value, modifiers }) {
    if (!value) {
      destroyTooltip()
    } else if (el._tooltip) {
      el._tooltip.drop.content.innerHTML = value
    } else {
      createTooltip(el, value, modifiers)
    }
  },
  unbind (el) {
    destroyTooltip(el)
  },
}
