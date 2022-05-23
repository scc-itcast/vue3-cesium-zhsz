import { ComponentPublicInstance } from 'vue';
import type { VNode, ExtractPropTypes } from 'vue';
import { LooseDictionary } from 'vue-cesium/es/utils/types';
export declare const fabProps: {
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
};
declare const _default: import("vue").DefineComponent<{
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}>;
export default _default;
export interface VcFabProps {
    /**
     * Define the button HTML DOM type.
     * Default value: a
     */
    type?: 'a' | 'submit' | 'button' | 'reset' | undefined;
    /**
     * Use 'outline' design for Fab button.
     */
    outline?: boolean | undefined;
    /**
     * Use 'push' design for Fab button.
     */
    push?: boolean | undefined;
    /**
     * Use 'flat' design for Fab button.
     */
    flat?: boolean | undefined;
    /**
     * Remove shadow.
     */
    unelevated?: boolean | undefined;
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set.
     */
    padding?: string | undefined;
    /**
     * Color name for component from the css color palette.
     */
    color?: string | undefined;
    /**
     * Overrides text color (if needed); Color name from the css color palette.
     */
    textColor?: string | undefined;
    /**
     * Apply the glossy effect over the button.
     */
    glossy?: boolean | undefined;
    /**
     * Display label besides the FABs, as external content.
     */
    externalLabel?: boolean | undefined;
    /**
     * The label that will be shown when Fab is extended.
     */
    label?: string | number | undefined;
    /**
     * Position of the label around the icon.
     */
    labelPosition?: 'top' | 'right' | 'bottom' | 'left' | undefined;
    /**
     * Hide the label; Useful for animation purposes where you toggle the visibility of the label.
     */
    hideLabel?: boolean | undefined;
    /**
     * Class definitions to be attributed to the label container.
     */
    labelClass?: any[] | string | any | undefined;
    /**
     * Style definitions to be attributed to the label container.
     */
    labelStyle?: any[] | string | any | undefined;
    /**
     * Apply a rectangle aspect to the FAB.
     */
    square?: boolean | undefined;
    /**
     * Put component in disabled mode.
     */
    disable?: boolean | undefined;
    /**
     * Tabindex HTML attribute value.
     */
    tabindex?: number | string | undefined;
    /**
     * Controls state of fab actions (showing/hidden); Works best with v-model directive, otherwise use along listening to 'update:modelValue' event.
     */
    modelValue?: boolean;
    /**
     * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
     */
    icon?: string | undefined;
    /**
     * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
     */
    activeIcon?: string | undefined;
    /**
     * Hide the icon (don't use any).
     */
    hideIcon?: boolean | undefined;
    /**
     * Direction to expand Fab Actions to.
     * Default value: right
     */
    direction?: 'up' | 'right' | 'down' | 'left' | undefined;
    /**
     * The side of the Fab where Fab Actions will expand (only when direction is 'up' or 'down').
     * Default value: center
     */
    verticalActionsAlign?: 'left' | 'center' | 'right' | undefined;
    /**
     * By default, Fab Actions are hidden when user navigates to another route and this prop disables this behavior.
     */
    persistent?: boolean | undefined;
    /**
     * Emitted when fab actions are shown/hidden; Captured by v-model directive.
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
export interface VcFabSlots {
    /**
     * This is where VcFabActions may go into
     */
    default: () => VNode[];
    /**
     * Slot specifically designed for a VcTooltip
     */
    tooltip: () => VNode[];
    /**
     * Slot for icon shown when FAB is closed; Suggestion: VcIcon
     * @param scope
     */
    icon: (scope: {
        /**
         * FAB is opened
         */
        opened: boolean;
    }) => VNode[];
    /**
     * Slot for icon shown when FAB is opened; Suggestion: VcIcon
     * @param scope
     */
    'active-icon': (scope: {
        /**
         * FAB is opened
         */
        opened: boolean;
    }) => VNode[];
    /**
     * Slot for label
     * @param scope
     */
    label: (scope: {
        /**
         * FAB is opened
         */
        opened: boolean;
    }) => VNode[];
}
export interface VcFabRef extends ComponentPublicInstance<VcFabProps> {
    /**
     * Expands fab actions list
     * @param evt JS event object
     */
    show: (evt?: LooseDictionary) => void;
    /**
     * Collapses fab actions list
     * @param evt JS event object
     */
    hide: (evt?: LooseDictionary) => void;
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle: (evt?: LooseDictionary) => void;
}
