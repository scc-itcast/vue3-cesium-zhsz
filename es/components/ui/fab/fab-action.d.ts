import { ComponentPublicInstance } from 'vue';
import type { VNode, ExtractPropTypes } from 'vue';
import { LooseDictionary } from 'vue-cesium/es/utils/types';
export declare const fabActionProps: {
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
};
declare const _default: import("vue").DefineComponent<{
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}>;
export default _default;
export interface VcFabActionProps {
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
     * Remove shadow
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
     * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
     */
    icon?: string | undefined;
    /**
     * How to align the Fab Action relative to Fab expand side; By default it uses the align specified in QFab.
     */
    anchor?: 'start' | 'center' | 'end' | undefined;
    /**
     * Equivalent to Vue Router <router-link> 'to' property.
     */
    to?: string | any | undefined;
    /**
     * Equivalent to Vue Router <router-link> 'replace' property.
     */
    replace?: boolean | undefined;
    /**
     * Emitted when user clicks/taps on the component.
     * @param evt JS event object
     */
    onClick?: (evt: any) => void;
}
export interface VcFabActionSlots {
    /**
     * Suggestion for this slot: VcTooltip
     */
    default: () => VNode[];
    /**
     * Slot for icon; Suggestion: VcIcon
     */
    icon: () => VNode[];
    /**
     * Slot for label
     */
    label: () => VNode[];
}
export interface VcFabActionRef extends ComponentPublicInstance<VcFabActionProps> {
    /**
     * Emulate click on VcFabAction
     * @param evt JS event object
     */
    click: (evt?: LooseDictionary) => void;
}
