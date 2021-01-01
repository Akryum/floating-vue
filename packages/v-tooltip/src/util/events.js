export const SHOW_EVENT_MAP = {
  hover: 'mouseenter',
  focus: 'focus',
  click: 'click',
  touch: 'touchstart',
}

export const HIDE_EVENT_MAP = {
  hover: 'mouseleave',
  focus: 'blur',
  click: 'click',
  touch: 'touchend',
}

const EVENTS = Object.keys(SHOW_EVENT_MAP)

export function getEvents (rawEvents) {
  let events = typeof rawEvents === 'string' ? rawEvents.split(/\s+/g) : rawEvents
  events = events.filter(trigger => EVENTS.indexOf(trigger) !== -1)
  return events
}
