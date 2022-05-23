import type { ComponentPublicInstance, ExtractPropTypes, PropType, VNode } from 'vue';
import { validatePosition, validateOffset } from 'vue-cesium/es/utils/private/position-engine';
import { LooseDictionary } from 'vue-cesium/es/utils/types';
export declare const tooltipProps: {
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
        type: PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof validatePosition;
    };
    self: {
        type: PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof validatePosition;
    };
    offset: {
        type: ArrayConstructor;
        default: () => number[];
        validator: typeof validateOffset;
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
};
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof validatePosition;
    };
    self: {
        type: PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof validatePosition;
    };
    offset: {
        type: ArrayConstructor;
        default: () => number[];
        validator: typeof validateOffset;
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
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
        type: PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof validatePosition;
    };
    self: {
        type: PropType<"top left" | "top middle" | "top right" | "top start" | "top end" | "center left" | "center middle" | "center right" | "center start" | "center end" | "bottom left" | "bottom middle" | "bottom right" | "bottom start" | "bottom end">;
        default: string;
        validator: typeof validatePosition;
    };
    offset: {
        type: ArrayConstructor;
        default: () => number[];
        validator: typeof validateOffset;
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
}>;
export default _default;
export interface VcTooltipProps {
    /**
     * One of VueCesium's embedded transitions.
     * Default value: jump-down
     */
    transitionShow?: string | undefined;
    /**
     * One of VueCesium's embedded transitions.
     * Default value: jump-up
     */
    transitionHide?: string | undefined;
    /**
     * Transition duration (in milliseconds, without unit).
     * Default value: 300
     */
    transitionDuration?: string | number | undefined;
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive.
     */
    modelValue?: boolean;
    /**
     * The maximum height of the Tooltip; Size in CSS units, including unit name.
     */
    maxHeight?: string | undefined;
    /**
     * The maximum width of the Tooltip; Size in CSS units, including unit name.
     */
    maxWidth?: string | undefined;
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target.
     * Default value: bottom middle
     */
    anchor?: 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end' | undefined;
    /**
     * Two values setting the Tooltip's own position relative to its target.
     * Default value: top middle
     */
    self?: 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end' | undefined;
    /**
     * An array of two numbers to offset the Tooltip horizontally and vertically in pixels.
     * Default value: [14, 14]
     */
    offset?: any[] | undefined;
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one.
     */
    scrollTarget?: string | undefined;
    /**
     * Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists).
     * Default value: true
     */
    target?: boolean | string | undefined;
    /**
     * Skips attaching events to the target DOM element (that trigger the element to get shown).
     */
    noParentEvent?: boolean | undefined;
    /**
     * Configure Tooltip to appear with delay.
     */
    delay?: number | undefined;
    /**
     * Configure Tooltip to disappear with delay.
     */
    hideDelay?: number | undefined;
    tip?: string | undefined;
    persistent?: boolean;
    contextMenu?: boolean;
    /**
     * Emitted when showing/hidden state changes; Is also used by v-model.
     * @param value New state (showing/hidden)
     */
    'onUpdate:modelValue'?: (value: boolean) => void;
    /**
     * Emitted after component has triggered show()
     * @param evt JS event object
     */
    onShow?: (evt: LooseDictionary) => void;
    /**
     * Emitted when component triggers show() but before it finishes doing it
     * @param evt JS event object
     */
    onBeforeShow?: (evt: LooseDictionary) => void;
    /**
     * Emitted after component has triggered hide()
     * @param evt JS event object
     */
    onHide?: (evt: LooseDictionary) => void;
    /**
     * Emitted when component triggers hide() but before it finishes doing it
     * @param evt JS event object
     */
    onBeforeHide?: (evt: LooseDictionary) => void;
}
export interface VcTooltipSlots {
    /**
     * Default slot in the devland unslotted content of the component
     */
    default: () => VNode[];
}
export interface VcTooltipRef extends ComponentPublicInstance<VcTooltipProps> {
    /**
     * Triggers component to show
     * @param evt JS event object
     */
    show: (evt?: LooseDictionary) => void;
    /**
     * Triggers component to hide
     * @param evt JS event object
     */
    hide: (evt?: LooseDictionary) => void;
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle: (evt?: LooseDictionary) => void;
    /**
     * There are some custom scenarios for which cannot automatically reposition the tooltip without significant performance drawbacks so the optimal solution is for you to call this method when you need it
     */
    updatePosition: () => void;
}
