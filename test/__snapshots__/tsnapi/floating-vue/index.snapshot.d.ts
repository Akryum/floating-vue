// #region Types
export type Placement = 'auto-end' | 'auto-start' | 'auto' | Placement$1;
export type TriggerEvent = 'click' | 'focus' | 'hover' | 'touch';
// #endregion

// #region Functions
export declare function createTooltip(_: any, _: any, _: any): {
    hide(): void;
    item: {
        id: number;
        options: Ref<any, any>;
        shown: Ref<boolean, boolean>;
    };
    options: Ref<any, any>;
    show(): void;
};
export declare function destroyTooltip(_: any): void;
export declare function hideAllPoppers(): void;
export declare function install(_: any, _?: FloatingVueConfig): void;
export declare function recomputeAllPoppers(): void;
// #endregion

// #region Variables
export declare const Dropdown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: any;
        type: import("vue").PropType<((event: Event) => boolean) | boolean>;
    };
    autoMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoSize: {
        default: any;
        type: import("vue").PropType<"max" | "min" | boolean>;
    };
    boundary: {
        default: any;
        type: any[];
    };
    computeTransformOrigin: {
        default: any;
        type: BooleanConstructor;
    };
    container: {
        default: any;
        type: any[];
    };
    delay: {
        default: any;
        type: import("vue").PropType<{
            hide: number;
            show: number;
        } | number | string>;
    };
    disabled: {
        default: any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: any;
        type: NumberConstructor;
    };
    distance: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: any;
        type: BooleanConstructor;
    };
    flip: {
        default: any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    instantMove: {
        default: any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: any;
        type: import("vue").PropType<Placement>;
    };
    popperClass: {
        default: any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperShowTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperTriggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
    positioningDisabled: {
        default: any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: import("vue").PropType<() => Element>;
    };
    shift: {
        default: any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    skidding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: any;
        type: import("vue").PropType<"absolute" | "fixed">;
    };
    theme: {
        default: any;
        type: StringConstructor;
    };
    triggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
}>, {}, {}, {
    finalTheme(): string;
}, {
    getTargetNodes(): unknown[];
}, {
    computed: {
        themeClass(): string[];
    };
} | {
    methods: {
        dispose(...args: any[]): any;
        hide(...args: any[]): any;
        onResize(...args: any[]): any;
        show(...args: any[]): any;
    };
}, import("vue").ComponentOptionsMixin, {
    'apply-hide': () => true;
    'apply-show': () => true;
    'auto-hide': () => true;
    'close-directive': () => true;
    'close-group': () => true;
    'update:shown': (_shown: boolean) => true;
    hide: () => true;
    resize: () => true;
    show: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: any;
        type: import("vue").PropType<((event: Event) => boolean) | boolean>;
    };
    autoMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoSize: {
        default: any;
        type: import("vue").PropType<"max" | "min" | boolean>;
    };
    boundary: {
        default: any;
        type: any[];
    };
    computeTransformOrigin: {
        default: any;
        type: BooleanConstructor;
    };
    container: {
        default: any;
        type: any[];
    };
    delay: {
        default: any;
        type: import("vue").PropType<{
            hide: number;
            show: number;
        } | number | string>;
    };
    disabled: {
        default: any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: any;
        type: NumberConstructor;
    };
    distance: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: any;
        type: BooleanConstructor;
    };
    flip: {
        default: any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    instantMove: {
        default: any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: any;
        type: import("vue").PropType<Placement>;
    };
    popperClass: {
        default: any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperShowTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperTriggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
    positioningDisabled: {
        default: any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: import("vue").PropType<() => Element>;
    };
    shift: {
        default: any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    skidding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: any;
        type: import("vue").PropType<"absolute" | "fixed">;
    };
    theme: {
        default: any;
        type: StringConstructor;
    };
    triggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
}>> & Readonly<{
    "onApply-hide"?: () => any;
    "onApply-show"?: () => any;
    "onAuto-hide"?: () => any;
    "onClose-directive"?: () => any;
    "onClose-group"?: () => any;
    "onUpdate:shown"?: (_shown: boolean) => any;
    onHide?: () => any;
    onResize?: () => any;
    onShow?: () => any;
}>, {
    ariaId: any;
    arrowOverflow: boolean;
    arrowPadding: number | string;
    autoBoundaryMaxSize: boolean;
    autoHide: ((event: Event) => boolean) | boolean;
    autoMaxSize: boolean;
    autoMinSize: boolean;
    autoSize: "max" | "min" | boolean;
    boundary: Date;
    computeTransformOrigin: boolean;
    container: Date;
    delay: {
        hide: number;
        show: number;
    } | number | string;
    disabled: boolean;
    disposeTimeout: number;
    distance: number | string;
    eagerMount: boolean;
    flip: boolean;
    handleResize: boolean;
    hideTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    instantMove: boolean;
    noAutoFocus: boolean;
    overflowPadding: number | string;
    placement: Placement;
    popperClass: Record<string, any> | string | unknown[];
    popperHideTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    popperShowTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    popperTriggers: TriggerEvent[];
    positioningDisabled: boolean;
    preventOverflow: boolean;
    referenceNode: () => Element;
    shift: boolean;
    shiftCrossAxis: boolean;
    showGroup: string;
    shown: boolean;
    showTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    skidding: number | string;
    strategy: "absolute" | "fixed";
    theme: string;
    triggers: TriggerEvent[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const HIDE_EVENT_MAP: {
    click: string;
    focus: string;
    hover: string;
    pointer: string;
    touch: string;
};
export declare const Menu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: any;
        type: import("vue").PropType<((event: Event) => boolean) | boolean>;
    };
    autoMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoSize: {
        default: any;
        type: import("vue").PropType<"max" | "min" | boolean>;
    };
    boundary: {
        default: any;
        type: any[];
    };
    computeTransformOrigin: {
        default: any;
        type: BooleanConstructor;
    };
    container: {
        default: any;
        type: any[];
    };
    delay: {
        default: any;
        type: import("vue").PropType<{
            hide: number;
            show: number;
        } | number | string>;
    };
    disabled: {
        default: any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: any;
        type: NumberConstructor;
    };
    distance: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: any;
        type: BooleanConstructor;
    };
    flip: {
        default: any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    instantMove: {
        default: any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: any;
        type: import("vue").PropType<Placement>;
    };
    popperClass: {
        default: any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperShowTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperTriggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
    positioningDisabled: {
        default: any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: import("vue").PropType<() => Element>;
    };
    shift: {
        default: any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    skidding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: any;
        type: import("vue").PropType<"absolute" | "fixed">;
    };
    theme: {
        default: any;
        type: StringConstructor;
    };
    triggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
}>, {}, {}, {
    finalTheme(): string;
}, {
    getTargetNodes(): unknown[];
}, {
    computed: {
        themeClass(): string[];
    };
} | {
    methods: {
        dispose(...args: any[]): any;
        hide(...args: any[]): any;
        onResize(...args: any[]): any;
        show(...args: any[]): any;
    };
}, import("vue").ComponentOptionsMixin, {
    'apply-hide': () => true;
    'apply-show': () => true;
    'auto-hide': () => true;
    'close-directive': () => true;
    'close-group': () => true;
    'update:shown': (_shown: boolean) => true;
    hide: () => true;
    resize: () => true;
    show: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: any;
        type: import("vue").PropType<((event: Event) => boolean) | boolean>;
    };
    autoMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoSize: {
        default: any;
        type: import("vue").PropType<"max" | "min" | boolean>;
    };
    boundary: {
        default: any;
        type: any[];
    };
    computeTransformOrigin: {
        default: any;
        type: BooleanConstructor;
    };
    container: {
        default: any;
        type: any[];
    };
    delay: {
        default: any;
        type: import("vue").PropType<{
            hide: number;
            show: number;
        } | number | string>;
    };
    disabled: {
        default: any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: any;
        type: NumberConstructor;
    };
    distance: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: any;
        type: BooleanConstructor;
    };
    flip: {
        default: any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    instantMove: {
        default: any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: any;
        type: import("vue").PropType<Placement>;
    };
    popperClass: {
        default: any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperShowTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperTriggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
    positioningDisabled: {
        default: any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: import("vue").PropType<() => Element>;
    };
    shift: {
        default: any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    skidding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: any;
        type: import("vue").PropType<"absolute" | "fixed">;
    };
    theme: {
        default: any;
        type: StringConstructor;
    };
    triggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
}>> & Readonly<{
    "onApply-hide"?: () => any;
    "onApply-show"?: () => any;
    "onAuto-hide"?: () => any;
    "onClose-directive"?: () => any;
    "onClose-group"?: () => any;
    "onUpdate:shown"?: (_shown: boolean) => any;
    onHide?: () => any;
    onResize?: () => any;
    onShow?: () => any;
}>, {
    ariaId: any;
    arrowOverflow: boolean;
    arrowPadding: number | string;
    autoBoundaryMaxSize: boolean;
    autoHide: ((event: Event) => boolean) | boolean;
    autoMaxSize: boolean;
    autoMinSize: boolean;
    autoSize: "max" | "min" | boolean;
    boundary: Date;
    computeTransformOrigin: boolean;
    container: Date;
    delay: {
        hide: number;
        show: number;
    } | number | string;
    disabled: boolean;
    disposeTimeout: number;
    distance: number | string;
    eagerMount: boolean;
    flip: boolean;
    handleResize: boolean;
    hideTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    instantMove: boolean;
    noAutoFocus: boolean;
    overflowPadding: number | string;
    placement: Placement;
    popperClass: Record<string, any> | string | unknown[];
    popperHideTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    popperShowTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    popperTriggers: TriggerEvent[];
    positioningDisabled: boolean;
    preventOverflow: boolean;
    referenceNode: () => Element;
    shift: boolean;
    shiftCrossAxis: boolean;
    showGroup: string;
    shown: boolean;
    showTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    skidding: number | string;
    strategy: "absolute" | "fixed";
    theme: string;
    triggers: TriggerEvent[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const options: any;
export declare const placements: Placement[];
export declare const Popper: () => import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    autoMaxSize: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: (props: any) => any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: (props: any) => any;
        type: (BooleanConstructor | FunctionConstructor)[];
    };
    autoSize: {
        default: (props: any) => any;
        type: (BooleanConstructor | StringConstructor)[];
    };
    boundary: {
        default: (props: any) => any;
        type: any[];
    };
    computeTransformOrigin: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    container: {
        default: (props: any) => any;
        type: any[];
    };
    delay: {
        default: (props: any) => any;
        type: (NumberConstructor | ObjectConstructor | StringConstructor)[];
    };
    disabled: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: (props: any) => any;
        type: NumberConstructor;
    };
    distance: {
        default: (props: any) => any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    flip: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: (props: any) => any;
        type: (ArrayConstructor | FunctionConstructor)[];
    };
    instantMove: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: (props: any) => any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: (props: any) => any;
        type: StringConstructor;
        validator: (value: Placement) => boolean;
    };
    popperClass: {
        default: (props: any) => any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: (props: any) => any;
        type: (ArrayConstructor | FunctionConstructor)[];
    };
    popperNode: {
        required: true;
        type: FunctionConstructor;
    };
    popperShowTriggers: {
        default: (props: any) => any;
        type: (ArrayConstructor | FunctionConstructor)[];
    };
    popperTriggers: {
        default: (props: any) => any;
        type: ArrayConstructor;
    };
    positioningDisabled: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: FunctionConstructor;
    };
    shift: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: (props: any) => any;
        type: (ArrayConstructor | FunctionConstructor)[];
    };
    skidding: {
        default: (props: any) => any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: (props: any) => any;
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    targetNodes: {
        required: true;
        type: FunctionConstructor;
    };
    theme: {
        required: true;
        type: StringConstructor;
    };
    triggers: {
        default: (props: any) => any;
        type: ArrayConstructor;
    };
}>, {}, {
    classes: {
        hideFrom: boolean;
        hideTo: boolean;
        showFrom: boolean;
        showTo: boolean;
    };
    containsGlobalTarget: boolean;
    isDisposed: boolean;
    isMounted: boolean;
    isShown: boolean;
    lastAutoHide: boolean;
    mouseDownContains: boolean;
    pendingHide: boolean;
    randomId: string;
    result: {
        arrow: {
            centerOffset: number;
            x: number;
            y: number;
        };
        placement: string;
        strategy: string;
        transformOrigin: any;
        x: number;
        y: number;
    };
    shownChildren: Set<unknown>;
    skipTransition: boolean;
}, {
    hasPopperShowTriggerHover(): any;
    parentPopper(): any;
    popperId(): any;
    shouldMountContent(): any;
    slotData(): {
        attrs: any;
        autoHide: any;
        classes: any;
        handleResize: any;
        hide: any;
        isShown: any;
        onResize: any;
        popperId: any;
        result: any;
        shouldMountContent: any;
        show: any;
        skipTransition: any;
    };
}, {
    $_addEventListeners(): void;
    $_applyAttrsToTarget(attrs: any): void;
    $_applyHide(skipTransition?: boolean): Promise<void>;
    $_applyShow(skipTransition?: boolean): Promise<void>;
    $_applyShowEffect(): Promise<void>;
    $_autoShowHide(): void;
    $_computeDelay(type: "hide" | "show"): number;
    $_computePosition(): Promise<void>;
    $_detachPopperNode(): void;
    $_ensureTeleport(): void;
    $_handleGlobalClose(event: any, touch?: boolean): void;
    $_isAimingPopper(): boolean;
    $_refreshListeners(): void;
    $_registerEventListeners(targetNodes: Element[], eventType: string, handler: (event: Event) => void): void;
    $_registerTriggerListeners(targetNodes: Element[], eventMap: Record<string, string>, commonTriggers: any, customTrigger: any, handler: (event: Event) => void): void;
    $_removeEventListeners(filterEventType?: string): void;
    $_scheduleHide(_event: any, skipDelay?: boolean): void;
    $_scheduleShow(_event: any, skipDelay?: boolean): void;
    $_swapTargetAttrs(attrFrom: any, attrTo: any): void;
    $_updateParentShownChildren(value: any): void;
    dispose(): void;
    hide({ event, skipDelay }?: {
        event?: any;
        skipDelay?: boolean;
    }): void;
    init(): void;
    onResize(): Promise<void>;
    show({ event, skipDelay, force }?: {
        event?: any;
        force?: boolean;
        skipDelay?: boolean;
    }): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'apply-hide': () => true;
    'apply-show': () => true;
    'auto-hide': () => true;
    'close-directive': () => true;
    'close-group': () => true;
    'update:shown': (_shown: boolean) => true;
    hide: () => true;
    resize: () => true;
    show: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    autoMaxSize: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: (props: any) => any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: (props: any) => any;
        type: (BooleanConstructor | FunctionConstructor)[];
    };
    autoSize: {
        default: (props: any) => any;
        type: (BooleanConstructor | StringConstructor)[];
    };
    boundary: {
        default: (props: any) => any;
        type: any[];
    };
    computeTransformOrigin: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    container: {
        default: (props: any) => any;
        type: any[];
    };
    delay: {
        default: (props: any) => any;
        type: (NumberConstructor | ObjectConstructor | StringConstructor)[];
    };
    disabled: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: (props: any) => any;
        type: NumberConstructor;
    };
    distance: {
        default: (props: any) => any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    flip: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: (props: any) => any;
        type: (ArrayConstructor | FunctionConstructor)[];
    };
    instantMove: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: (props: any) => any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: (props: any) => any;
        type: StringConstructor;
        validator: (value: Placement) => boolean;
    };
    popperClass: {
        default: (props: any) => any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: (props: any) => any;
        type: (ArrayConstructor | FunctionConstructor)[];
    };
    popperNode: {
        required: true;
        type: FunctionConstructor;
    };
    popperShowTriggers: {
        default: (props: any) => any;
        type: (ArrayConstructor | FunctionConstructor)[];
    };
    popperTriggers: {
        default: (props: any) => any;
        type: ArrayConstructor;
    };
    positioningDisabled: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: FunctionConstructor;
    };
    shift: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: (props: any) => any;
        type: (ArrayConstructor | FunctionConstructor)[];
    };
    skidding: {
        default: (props: any) => any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: (props: any) => any;
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    targetNodes: {
        required: true;
        type: FunctionConstructor;
    };
    theme: {
        required: true;
        type: StringConstructor;
    };
    triggers: {
        default: (props: any) => any;
        type: ArrayConstructor;
    };
}>> & Readonly<{
    "onApply-hide"?: () => any;
    "onApply-show"?: () => any;
    "onAuto-hide"?: () => any;
    "onClose-directive"?: () => any;
    "onClose-group"?: () => any;
    "onUpdate:shown"?: (_shown: boolean) => any;
    onHide?: () => any;
    onResize?: () => any;
    onShow?: () => any;
}>, {
    ariaId: any;
    arrowOverflow: boolean;
    arrowPadding: number | string;
    autoBoundaryMaxSize: boolean;
    autoHide: boolean | Function;
    autoMaxSize: boolean;
    autoMinSize: boolean;
    autoSize: boolean | string;
    boundary: Date;
    computeTransformOrigin: boolean;
    container: Date;
    delay: number | Record<string, any> | string;
    disabled: boolean;
    disposeTimeout: number;
    distance: number | string;
    eagerMount: boolean;
    flip: boolean;
    handleResize: boolean;
    hideTriggers: Function | unknown[];
    instantMove: boolean;
    noAutoFocus: boolean;
    overflowPadding: number | string;
    placement: string;
    popperClass: Record<string, any> | string | unknown[];
    popperHideTriggers: Function | unknown[];
    popperShowTriggers: Function | unknown[];
    popperTriggers: unknown[];
    positioningDisabled: boolean;
    preventOverflow: boolean;
    referenceNode: Function;
    shift: boolean;
    shiftCrossAxis: boolean;
    showGroup: string;
    shown: boolean;
    showTriggers: Function | unknown[];
    skidding: number | string;
    strategy: string;
    triggers: unknown[];
}, {}, {}, {}, string, () => {
    "__floating-vue__popper": {
        parentPopper: any;
    };
}, true, {}, any>;
export declare const PopperContent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    autoHide: BooleanConstructor;
    classes: ObjectConstructor;
    handleResize: BooleanConstructor;
    mounted: BooleanConstructor;
    popperId: StringConstructor;
    result: ObjectConstructor;
    shown: BooleanConstructor;
    skipTransition: BooleanConstructor;
    theme: StringConstructor;
}>, {}, {}, {}, {
    toPx(value: any): string;
}, {
    computed: {
        themeClass(): string[];
    };
}, import("vue").ComponentOptionsMixin, ("hide" | "resize")[], "hide" | "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    autoHide: BooleanConstructor;
    classes: ObjectConstructor;
    handleResize: BooleanConstructor;
    mounted: BooleanConstructor;
    popperId: StringConstructor;
    result: ObjectConstructor;
    shown: BooleanConstructor;
    skipTransition: BooleanConstructor;
    theme: StringConstructor;
}>> & Readonly<{
    onHide?: (...args: any[]) => any;
    onResize?: (...args: any[]) => any;
}>, {
    autoHide: boolean;
    handleResize: boolean;
    mounted: boolean;
    shown: boolean;
    skipTransition: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const PopperMethods: {
    methods: {
        dispose(...args: any[]): any;
        hide(...args: any[]): any;
        onResize(...args: any[]): any;
        show(...args: any[]): any;
    };
};
export declare const PopperWrapper: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    autoMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: any;
        type: BooleanConstructor;
    };
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: any;
        type: PropType<((event: Event) => boolean) | boolean>;
    };
    autoSize: {
        default: any;
        type: PropType<"max" | "min" | boolean>;
    };
    boundary: {
        default: any;
        type: any[];
    };
    computeTransformOrigin: {
        default: any;
        type: BooleanConstructor;
    };
    container: {
        default: any;
        type: any[];
    };
    delay: {
        default: any;
        type: PropType<{
            hide: number;
            show: number;
        } | number | string>;
    };
    disabled: {
        default: any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: any;
        type: NumberConstructor;
    };
    distance: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: any;
        type: BooleanConstructor;
    };
    flip: {
        default: any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: any;
        type: PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    instantMove: {
        default: any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: any;
        type: PropType<Placement>;
    };
    popperClass: {
        default: any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: any;
        type: PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperShowTriggers: {
        default: any;
        type: PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperTriggers: {
        default: any;
        type: PropType<Array<TriggerEvent>>;
    };
    positioningDisabled: {
        default: any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: PropType<() => Element>;
    };
    shift: {
        default: any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: any;
        type: PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    skidding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: any;
        type: PropType<"absolute" | "fixed">;
    };
    theme: {
        default: any;
        type: StringConstructor;
    };
    triggers: {
        default: any;
        type: PropType<Array<TriggerEvent>>;
    };
}>, {}, {}, {
    finalTheme(): string;
}, {
    getTargetNodes(): unknown[];
}, {
    computed: {
        themeClass(): string[];
    };
} | {
    methods: {
        dispose(...args: any[]): any;
        hide(...args: any[]): any;
        onResize(...args: any[]): any;
        show(...args: any[]): any;
    };
}, import("vue").ComponentOptionsMixin, {
    'apply-hide': () => true;
    'apply-show': () => true;
    'auto-hide': () => true;
    'close-directive': () => true;
    'close-group': () => true;
    'update:shown': (_shown: boolean) => true;
    hide: () => true;
    resize: () => true;
    show: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    autoMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: any;
        type: BooleanConstructor;
    };
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: any;
        type: PropType<((event: Event) => boolean) | boolean>;
    };
    autoSize: {
        default: any;
        type: PropType<"max" | "min" | boolean>;
    };
    boundary: {
        default: any;
        type: any[];
    };
    computeTransformOrigin: {
        default: any;
        type: BooleanConstructor;
    };
    container: {
        default: any;
        type: any[];
    };
    delay: {
        default: any;
        type: PropType<{
            hide: number;
            show: number;
        } | number | string>;
    };
    disabled: {
        default: any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: any;
        type: NumberConstructor;
    };
    distance: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: any;
        type: BooleanConstructor;
    };
    flip: {
        default: any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: any;
        type: PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    instantMove: {
        default: any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: any;
        type: PropType<Placement>;
    };
    popperClass: {
        default: any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: any;
        type: PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperShowTriggers: {
        default: any;
        type: PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperTriggers: {
        default: any;
        type: PropType<Array<TriggerEvent>>;
    };
    positioningDisabled: {
        default: any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: PropType<() => Element>;
    };
    shift: {
        default: any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: any;
        type: PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    skidding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: any;
        type: PropType<"absolute" | "fixed">;
    };
    theme: {
        default: any;
        type: StringConstructor;
    };
    triggers: {
        default: any;
        type: PropType<Array<TriggerEvent>>;
    };
}>> & Readonly<{
    "onApply-hide"?: () => any;
    "onApply-show"?: () => any;
    "onAuto-hide"?: () => any;
    "onClose-directive"?: () => any;
    "onClose-group"?: () => any;
    "onUpdate:shown"?: (_shown: boolean) => any;
    onHide?: () => any;
    onResize?: () => any;
    onShow?: () => any;
}>, {
    ariaId: any;
    arrowOverflow: boolean;
    arrowPadding: number | string;
    autoBoundaryMaxSize: boolean;
    autoHide: ((event: Event) => boolean) | boolean;
    autoMaxSize: boolean;
    autoMinSize: boolean;
    autoSize: "max" | "min" | boolean;
    boundary: Date;
    computeTransformOrigin: boolean;
    container: Date;
    delay: {
        hide: number;
        show: number;
    } | number | string;
    disabled: boolean;
    disposeTimeout: number;
    distance: number | string;
    eagerMount: boolean;
    flip: boolean;
    handleResize: boolean;
    hideTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    instantMove: boolean;
    noAutoFocus: boolean;
    overflowPadding: number | string;
    placement: Placement;
    popperClass: Record<string, any> | string | unknown[];
    popperHideTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    popperShowTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    popperTriggers: TriggerEvent[];
    positioningDisabled: boolean;
    preventOverflow: boolean;
    referenceNode: () => Element;
    shift: boolean;
    shiftCrossAxis: boolean;
    showGroup: string;
    shown: boolean;
    showTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    skidding: number | string;
    strategy: "absolute" | "fixed";
    theme: string;
    triggers: TriggerEvent[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const SHOW_EVENT_MAP: {
    click: string;
    focus: string;
    hover: string;
    pointer: string;
    touch: string;
};
export declare const ThemeClass: (prop?: string) => {
    computed: {
        themeClass(): string[];
    };
};
export declare const Tooltip: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: any;
        type: import("vue").PropType<((event: Event) => boolean) | boolean>;
    };
    autoMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoSize: {
        default: any;
        type: import("vue").PropType<"max" | "min" | boolean>;
    };
    boundary: {
        default: any;
        type: any[];
    };
    computeTransformOrigin: {
        default: any;
        type: BooleanConstructor;
    };
    container: {
        default: any;
        type: any[];
    };
    delay: {
        default: any;
        type: import("vue").PropType<{
            hide: number;
            show: number;
        } | number | string>;
    };
    disabled: {
        default: any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: any;
        type: NumberConstructor;
    };
    distance: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: any;
        type: BooleanConstructor;
    };
    flip: {
        default: any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    instantMove: {
        default: any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: any;
        type: import("vue").PropType<Placement>;
    };
    popperClass: {
        default: any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperShowTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperTriggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
    positioningDisabled: {
        default: any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: import("vue").PropType<() => Element>;
    };
    shift: {
        default: any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    skidding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: any;
        type: import("vue").PropType<"absolute" | "fixed">;
    };
    theme: {
        default: any;
        type: StringConstructor;
    };
    triggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
}>, {}, {}, {
    finalTheme(): string;
}, {
    getTargetNodes(): unknown[];
}, {
    computed: {
        themeClass(): string[];
    };
} | {
    methods: {
        dispose(...args: any[]): any;
        hide(...args: any[]): any;
        onResize(...args: any[]): any;
        show(...args: any[]): any;
    };
}, import("vue").ComponentOptionsMixin, {
    'apply-hide': () => true;
    'apply-show': () => true;
    'auto-hide': () => true;
    'close-directive': () => true;
    'close-group': () => true;
    'update:shown': (_shown: boolean) => true;
    hide: () => true;
    resize: () => true;
    show: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    ariaId: {
        default: any;
    };
    arrowOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    arrowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    autoBoundaryMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoHide: {
        default: any;
        type: import("vue").PropType<((event: Event) => boolean) | boolean>;
    };
    autoMaxSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoMinSize: {
        default: any;
        type: BooleanConstructor;
    };
    autoSize: {
        default: any;
        type: import("vue").PropType<"max" | "min" | boolean>;
    };
    boundary: {
        default: any;
        type: any[];
    };
    computeTransformOrigin: {
        default: any;
        type: BooleanConstructor;
    };
    container: {
        default: any;
        type: any[];
    };
    delay: {
        default: any;
        type: import("vue").PropType<{
            hide: number;
            show: number;
        } | number | string>;
    };
    disabled: {
        default: any;
        type: BooleanConstructor;
    };
    disposeTimeout: {
        default: any;
        type: NumberConstructor;
    };
    distance: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    eagerMount: {
        default: any;
        type: BooleanConstructor;
    };
    flip: {
        default: any;
        type: BooleanConstructor;
    };
    handleResize: {
        default: any;
        type: BooleanConstructor;
    };
    hideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    instantMove: {
        default: any;
        type: BooleanConstructor;
    };
    noAutoFocus: {
        default: any;
        type: BooleanConstructor;
    };
    overflowPadding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    placement: {
        default: any;
        type: import("vue").PropType<Placement>;
    };
    popperClass: {
        default: any;
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
    };
    popperHideTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperShowTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    popperTriggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
    positioningDisabled: {
        default: any;
        type: BooleanConstructor;
    };
    preventOverflow: {
        default: any;
        type: BooleanConstructor;
    };
    referenceNode: {
        default: any;
        type: import("vue").PropType<() => Element>;
    };
    shift: {
        default: any;
        type: BooleanConstructor;
    };
    shiftCrossAxis: {
        default: any;
        type: BooleanConstructor;
    };
    showGroup: {
        default: any;
        type: StringConstructor;
    };
    shown: {
        default: boolean;
        type: BooleanConstructor;
    };
    showTriggers: {
        default: any;
        type: import("vue").PropType<((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | Array<TriggerEvent>>;
    };
    skidding: {
        default: any;
        type: (NumberConstructor | StringConstructor)[];
    };
    strategy: {
        default: any;
        type: import("vue").PropType<"absolute" | "fixed">;
    };
    theme: {
        default: any;
        type: StringConstructor;
    };
    triggers: {
        default: any;
        type: import("vue").PropType<Array<TriggerEvent>>;
    };
}>> & Readonly<{
    "onApply-hide"?: () => any;
    "onApply-show"?: () => any;
    "onAuto-hide"?: () => any;
    "onClose-directive"?: () => any;
    "onClose-group"?: () => any;
    "onUpdate:shown"?: (_shown: boolean) => any;
    onHide?: () => any;
    onResize?: () => any;
    onShow?: () => any;
}>, {
    ariaId: any;
    arrowOverflow: boolean;
    arrowPadding: number | string;
    autoBoundaryMaxSize: boolean;
    autoHide: ((event: Event) => boolean) | boolean;
    autoMaxSize: boolean;
    autoMinSize: boolean;
    autoSize: "max" | "min" | boolean;
    boundary: Date;
    computeTransformOrigin: boolean;
    container: Date;
    delay: {
        hide: number;
        show: number;
    } | number | string;
    disabled: boolean;
    disposeTimeout: number;
    distance: number | string;
    eagerMount: boolean;
    flip: boolean;
    handleResize: boolean;
    hideTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    instantMove: boolean;
    noAutoFocus: boolean;
    overflowPadding: number | string;
    placement: Placement;
    popperClass: Record<string, any> | string | unknown[];
    popperHideTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    popperShowTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    popperTriggers: TriggerEvent[];
    positioningDisabled: boolean;
    preventOverflow: boolean;
    referenceNode: () => Element;
    shift: boolean;
    shiftCrossAxis: boolean;
    showGroup: string;
    shown: boolean;
    showTriggers: ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>) | TriggerEvent[];
    skidding: number | string;
    strategy: "absolute" | "fixed";
    theme: string;
    triggers: TriggerEvent[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const TooltipDirective: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    content: {
        default: any;
        type: (FunctionConstructor | NumberConstructor | StringConstructor)[];
    };
    html: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    loadingContent: {
        default: (props: any) => any;
        type: StringConstructor;
    };
    targetNodes: {
        required: true;
        type: FunctionConstructor;
    };
    theme: {
        default: string;
        type: StringConstructor;
    };
}>, {}, {
    asyncContent: string;
}, {
    finalContent(): string;
    isContentAsync(): boolean;
    loading(): boolean;
}, {
    fetchContent(force: boolean): void;
    onHide(): void;
    onResult(fetchId: any, result: any): void;
    onShow(): void;
}, {
    methods: {
        dispose(...args: any[]): any;
        hide(...args: any[]): any;
        onResize(...args: any[]): any;
        show(...args: any[]): any;
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        default: any;
        type: (FunctionConstructor | NumberConstructor | StringConstructor)[];
    };
    html: {
        default: (props: any) => any;
        type: BooleanConstructor;
    };
    loadingContent: {
        default: (props: any) => any;
        type: StringConstructor;
    };
    targetNodes: {
        required: true;
        type: FunctionConstructor;
    };
    theme: {
        default: string;
        type: StringConstructor;
    };
}>> & Readonly<{}>, {
    content: Function | number | string;
    html: boolean;
    loadingContent: string;
    theme: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const vClosePopper: {
    beforeMount(el: any, { value, modifiers }: {
        modifiers: any;
        value: any;
    }): void;
    beforeUnmount(el: any): void;
    updated(el: any, { value, oldValue, modifiers }: {
        modifiers: any;
        oldValue: any;
        value: any;
    }): void;
};
/** @deprecated */
export declare const VClosePopper: {
    beforeMount(el: any, { value, modifiers }: {
        modifiers: any;
        value: any;
    }): void;
    beforeUnmount(el: any): void;
    updated(el: any, { value, oldValue, modifiers }: {
        modifiers: any;
        oldValue: any;
        value: any;
    }): void;
};
export declare const vTooltip: {
    beforeMount: typeof bind;
    beforeUnmount(el: any): void;
    updated: typeof bind;
};
/** @deprecated */
export declare const VTooltip: {
    beforeMount: typeof bind;
    beforeUnmount(el: any): void;
    updated: typeof bind;
};
// #endregion

// #region Default Export
declare const _default: {
    install: typeof install;
    options: any;
    version: string;
};
export default _default
// #endregion

// #region Referenced (internal)
type FloatingVueConfig = any;
// #endregion
