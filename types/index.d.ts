import Vue, { VueConstructor, DirectiveOptions, PluginFunction } from 'vue';

declare const vToolTip: PluginFunction<any>;
export default vToolTip;

export const VPopover: VueConstructor<Vue>;
export const VClosePopover: DirectiveOptions;
export const VTooltip: DirectiveOptions;