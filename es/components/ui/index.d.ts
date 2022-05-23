import { App } from 'vue';
import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
export declare const VcBtn: SFCWithInstall<import("vue").DefineComponent<{
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    darkPercentage: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    label: (StringConstructor | NumberConstructor)[];
    icon: StringConstructor;
    iconRight: StringConstructor;
    round: BooleanConstructor;
    outline: BooleanConstructor;
    flat: BooleanConstructor;
    unelevated: BooleanConstructor;
    rounded: BooleanConstructor;
    push: BooleanConstructor;
    glossy: BooleanConstructor;
    size: StringConstructor;
    fab: BooleanConstructor;
    fabMini: BooleanConstructor;
    padding: StringConstructor;
    color: StringConstructor;
    textColor: StringConstructor;
    noCaps: BooleanConstructor;
    noWrap: BooleanConstructor;
    dense: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    align: {
        default: string;
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    stack: BooleanConstructor;
    stretch: BooleanConstructor;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    disable: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "keydown" | "touchstart" | "mousedown" | "keyup")[], "mousedown" | "click" | "keydown" | "touchstart" | "keyup", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    darkPercentage: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    label: (StringConstructor | NumberConstructor)[];
    icon: StringConstructor;
    iconRight: StringConstructor;
    round: BooleanConstructor;
    outline: BooleanConstructor;
    flat: BooleanConstructor;
    unelevated: BooleanConstructor;
    rounded: BooleanConstructor;
    push: BooleanConstructor;
    glossy: BooleanConstructor;
    size: StringConstructor;
    fab: BooleanConstructor;
    fabMini: BooleanConstructor;
    padding: StringConstructor;
    color: StringConstructor;
    textColor: StringConstructor;
    noCaps: BooleanConstructor;
    noWrap: BooleanConstructor;
    dense: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    align: {
        default: string;
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    stack: BooleanConstructor;
    stretch: BooleanConstructor;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    disable: BooleanConstructor;
}>> & {
    onMousedown?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onTouchstart?: (...args: any[]) => any;
    onKeydown?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
}, {
    push: boolean;
    type: string;
    outline: boolean;
    round: boolean;
    flat: boolean;
    unelevated: boolean;
    glossy: boolean;
    disable: boolean;
    stack: boolean;
    percentage: number;
    darkPercentage: boolean;
    rounded: boolean;
    fab: boolean;
    fabMini: boolean;
    noCaps: boolean;
    noWrap: boolean;
    dense: boolean;
    ripple: boolean | Record<string, any>;
    align: string;
    stretch: boolean;
    loading: boolean;
}>>;
export declare const VcIcon: SFCWithInstall<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    name: StringConstructor;
    color: StringConstructor;
    hoverColor: StringConstructor;
    left: BooleanConstructor;
    right: BooleanConstructor;
    size: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    name: StringConstructor;
    color: StringConstructor;
    hoverColor: StringConstructor;
    left: BooleanConstructor;
    right: BooleanConstructor;
    size: StringConstructor;
}>>, {
    right: boolean;
    left: boolean;
    tag: string;
}>>;
export declare const VcSpinnerBall: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerBars: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerDots: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerGears: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerHourglass: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerIos: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerOrbit: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerOval: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerPuff: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerRings: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinnerTail: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
}>>;
export declare const VcSpinner: SFCWithInstall<import("vue").DefineComponent<{
    thickness: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    thickness: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
}>>, {
    size: string | number;
    thickness: number;
}>>;
export declare const VcTooltip: SFCWithInstall<import("vue").DefineComponent<{
    maxHeight: {
        type: StringConstructor;
        default: any;
    };
    maxWidth: {
        type: StringConstructor;
        default: any;
    };
    transitionShow: {
        type: StringConstructor;
        default: string;
    };
    transitionHide: {
        type: StringConstructor;
        default: string;
    };
    anchor: {
        type: import("vue").PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof import("../../utils/private/position-engine").validatePosition;
    };
    self: {
        type: import("vue").PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof import("../../utils/private/position-engine").validatePosition;
    };
    offset: {
        type: ArrayConstructor;
        default: () => number[];
        validator: typeof import("../../utils/private/position-engine").validateOffset;
    };
    scrollTarget: StringConstructor;
    delay: {
        type: NumberConstructor;
        default: number;
    };
    hideDelay: {
        type: NumberConstructor;
        default: number;
    };
    persistent: {
        type: BooleanConstructor;
    };
    transitionDuration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
    target: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    noParentEvent: BooleanConstructor;
    contextMenu: BooleanConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    maxHeight: {
        type: StringConstructor;
        default: any;
    };
    maxWidth: {
        type: StringConstructor;
        default: any;
    };
    transitionShow: {
        type: StringConstructor;
        default: string;
    };
    transitionHide: {
        type: StringConstructor;
        default: string;
    };
    anchor: {
        type: import("vue").PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof import("../../utils/private/position-engine").validatePosition;
    };
    self: {
        type: import("vue").PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof import("../../utils/private/position-engine").validatePosition;
    };
    offset: {
        type: ArrayConstructor;
        default: () => number[];
        validator: typeof import("../../utils/private/position-engine").validateOffset;
    };
    scrollTarget: StringConstructor;
    delay: {
        type: NumberConstructor;
        default: number;
    };
    hideDelay: {
        type: NumberConstructor;
        default: number;
    };
    persistent: {
        type: BooleanConstructor;
    };
    transitionDuration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
    target: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    noParentEvent: BooleanConstructor;
    contextMenu: BooleanConstructor;
}>> & {
    [x: string & `on${string}`]: (...args: any[]) => any;
}, {
    anchor: "top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end";
    maxHeight: string;
    offset: unknown[];
    modelValue: boolean;
    persistent: boolean;
    transitionShow: string;
    transitionHide: string;
    transitionDuration: string | number;
    maxWidth: string;
    self: "top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end";
    target: string | boolean;
    noParentEvent: boolean;
    delay: number;
    hideDelay: number;
    contextMenu: boolean;
}>>;
export declare const VcAjaxBar: SFCWithInstall<import("vue").DefineComponent<{
    position: {
        type: StringConstructor;
        default: string;
        validator: (val: any) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    skipHijack: BooleanConstructor;
    reverse: BooleanConstructor;
    positioning: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    hijackFilter: FunctionConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("start" | "stop")[], "start" | "stop", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: StringConstructor;
        default: string;
        validator: (val: any) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    skipHijack: BooleanConstructor;
    reverse: BooleanConstructor;
    positioning: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    hijackFilter: FunctionConstructor;
}>> & {
    onStop?: (...args: any[]) => any;
    onStart?: (...args: any[]) => any;
}, {
    reverse: boolean;
    positioning: string;
    position: string;
    size: string;
    skipHijack: boolean;
}>>;
export declare const VcSkeleton: SFCWithInstall<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (v: string) => boolean;
        default: string;
    };
    animation: {
        type: import("vue").PropType<"blink" | "none" | "fade" | "wave" | "pulse" | "pulse-x" | "pulse-y">;
        validator: (v: string) => boolean;
        default: string;
    };
    square: BooleanConstructor;
    bordered: BooleanConstructor;
    size: import("vue").PropType<string>;
    width: StringConstructor;
    height: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (v: string) => boolean;
        default: string;
    };
    animation: {
        type: import("vue").PropType<"blink" | "none" | "fade" | "wave" | "pulse" | "pulse-x" | "pulse-y">;
        validator: (v: string) => boolean;
        default: string;
    };
    square: BooleanConstructor;
    bordered: BooleanConstructor;
    size: import("vue").PropType<string>;
    width: StringConstructor;
    height: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    type: string;
    square: boolean;
    animation: "blink" | "none" | "fade" | "wave" | "pulse" | "pulse-x" | "pulse-y";
    dark: boolean;
    tag: string;
    bordered: boolean;
}>>;
export declare const VcFab: SFCWithInstall<import("vue").DefineComponent<{
    icon: StringConstructor;
    activeIcon: StringConstructor;
    hideActionOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideIcon: BooleanConstructor;
    hideLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    persistent: BooleanConstructor;
    stacked: BooleanConstructor;
    verticalActionsAlign: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    outline: BooleanConstructor;
    push: BooleanConstructor;
    flat: BooleanConstructor;
    unelevated: BooleanConstructor;
    color: StringConstructor;
    textColor: StringConstructor;
    glossy: BooleanConstructor;
    square: BooleanConstructor;
    padding: StringConstructor;
    size: StringConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    externalLabel: BooleanConstructor;
    labelClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    labelStyle: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    disable: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: StringConstructor;
    activeIcon: StringConstructor;
    hideActionOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideIcon: BooleanConstructor;
    hideLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    persistent: BooleanConstructor;
    stacked: BooleanConstructor;
    verticalActionsAlign: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    outline: BooleanConstructor;
    push: BooleanConstructor;
    flat: BooleanConstructor;
    unelevated: BooleanConstructor;
    color: StringConstructor;
    textColor: StringConstructor;
    glossy: BooleanConstructor;
    square: BooleanConstructor;
    padding: StringConstructor;
    size: StringConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    externalLabel: BooleanConstructor;
    labelClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    labelStyle: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    disable: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
}>> & {
    [x: string & `on${string}`]: (...args: any[]) => any;
}, {
    push: boolean;
    type: string;
    outline: boolean;
    hideActionOnClick: boolean;
    flat: boolean;
    unelevated: boolean;
    glossy: boolean;
    externalLabel: boolean;
    label: string | number;
    labelPosition: string;
    hideLabel: boolean;
    square: boolean;
    disable: boolean;
    modelValue: boolean;
    hideIcon: boolean;
    direction: string;
    verticalActionsAlign: string;
    persistent: boolean;
    stacked: boolean;
}>>;
export declare const VcFabAction: SFCWithInstall<import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    stacked: BooleanConstructor;
    anchor: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    to: (ObjectConstructor | StringConstructor)[];
    replace: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    outline: BooleanConstructor;
    push: BooleanConstructor;
    flat: BooleanConstructor;
    unelevated: BooleanConstructor;
    color: StringConstructor;
    textColor: StringConstructor;
    glossy: BooleanConstructor;
    square: BooleanConstructor;
    padding: StringConstructor;
    size: StringConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    externalLabel: BooleanConstructor;
    hideLabel: {
        type: BooleanConstructor;
    };
    labelClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    labelStyle: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    disable: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    stacked: BooleanConstructor;
    anchor: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    to: (ObjectConstructor | StringConstructor)[];
    replace: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    outline: BooleanConstructor;
    push: BooleanConstructor;
    flat: BooleanConstructor;
    unelevated: BooleanConstructor;
    color: StringConstructor;
    textColor: StringConstructor;
    glossy: BooleanConstructor;
    square: BooleanConstructor;
    padding: StringConstructor;
    size: StringConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    externalLabel: BooleanConstructor;
    hideLabel: {
        type: BooleanConstructor;
    };
    labelClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    labelStyle: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    disable: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    replace: boolean;
    push: boolean;
    type: string;
    outline: boolean;
    flat: boolean;
    unelevated: boolean;
    glossy: boolean;
    externalLabel: boolean;
    label: string | number;
    labelPosition: string;
    hideLabel: boolean;
    square: boolean;
    disable: boolean;
    icon: string;
    stacked: boolean;
}>>;
export * from './ajax-bar';
export * from './btn';
export * from './fab/fab';
export * from './fab/fab-action';
export * from './icon';
export * from './skeleton';
export * from './spinner';
export * from './tooltip';
