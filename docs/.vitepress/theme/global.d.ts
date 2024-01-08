import { Dropdown, Tooltip, Menu } from 'floating-vue'

declare module 'vue' {
  export interface GlobalComponents {
    VDropdown: typeof Dropdown
    VTooltip: typeof Tooltip
    VMenu: typeof Menu
  }
}
