import { state } from './state'

export function storeValue (key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    state.error = `Couldn't save ${key}: ${e.message}`
  }
}

export function loadValue (key, handler) {
  const raw = localStorage.getItem(key)
  if (raw != null) {
    try {
      handler(JSON.parse(raw))
    } catch (e) {
      state.error = `Couldn't load ${key}: ${e.message}`
    }
  }
}
