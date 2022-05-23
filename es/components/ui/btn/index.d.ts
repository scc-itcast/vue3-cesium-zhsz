import { ComponentPublicInstance } from 'vue';
import type { VNode } from 'vue';
import { LooseDictionary } from 'vue-cesium/es/utils/types';
export declare const btnProps: {
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
};
declare const _default: import("vue").DefineComponent<{
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
}>;
export default _default;
export interface VcBtnProps {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl).
     */
    size?: string | undefined;
    /**
     * 1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag.
     * Default value: button
     */
    type?: string | undefined;
    /**
     * Equivalent to Vue Router <router-link> 'to' property; Superseeded by 'href' prop if used.
     */
    to?: string | any | undefined;
    /**
     * Equivalent to Vue Router <router-link> 'replace' property; Superseeded by 'href' prop if used.
     */
    replace?: boolean | undefined;
    /**
     * Native <a> link href attribute; Has priority over the 'to' and 'replace' props.
     */
    href?: string | undefined;
    /**
     * Native <a> link target attribute; Use it only with 'to' or 'href' props.
     */
    target?: string | undefined;
    /**
     * The text that will be shown on the button.
     */
    label?: string | number | undefined;
    /**
     * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
     */
    icon?: string | undefined;
    /**
     * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
     */
    iconRight?: string | undefined;
    /**
     * Use 'outline' design.
     */
    outline?: boolean | undefined;
    /**
     * Use 'flat' design.
     */
    flat?: boolean | undefined;
    /**
     * Remove shadow.
     */
    unelevated?: boolean | undefined;
    /**
     * Applies a more prominent border-radius for a squared shape button.
     */
    rounded?: boolean | undefined;
    /**
     * Use 'push' design.
     */
    push?: boolean | undefined;
    /**
     * Applies a glossy effect.
     */
    glossy?: boolean | undefined;
    /**
     * Makes button size and shape to fit a Floating Action Button.
     */
    fab?: boolean | undefined;
    /**
     * Makes button size and shape to fit a small Floating Action Button
     */
    fabMini?: boolean | undefined;
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set.
     */
    padding?: string | undefined;
    /**
     * Color name for component from the css Color Palette.
     */
    color?: string | undefined;
    /**
     * Overrides text color (if needed); Color name from the css Color Palette.
     */
    textColor?: string | undefined;
    /**
     * Avoid turning label text into caps (which happens by default).
     */
    noCaps?: boolean | undefined;
    /**
     * Avoid label text wrapping.
     */
    noWrap?: boolean | undefined;
    /**
     * Dense mode; occupies less space.
     */
    dense?: boolean | undefined;
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object).
     * Default value: true
     */
    ripple?: boolean | any | undefined;
    /**
     * Tabindex HTML attribute value.
     */
    tabindex?: number | string | undefined;
    /**
     * Label or content alignment.
     * Default value: center
     */
    align?: 'left' | 'right' | 'center' | 'around' | 'between' | 'evenly' | undefined;
    /**
     * Stack icon and label vertically instead of on same line (like it is by default).
     */
    stack?: boolean | undefined;
    /**
     * When used on flexbox parent, button will stretch to parent's height.
     */
    stretch?: boolean | undefined;
    /**
     * Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot).
     */
    loading?: boolean | undefined;
    /**
     * Put component in disabled mode.
     */
    disable?: boolean | undefined;
    /**
     * Makes a circle shaped button.
     */
    round?: boolean | undefined;
    /**
     * Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background.
     */
    percentage?: number | undefined;
    /**
     * Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props.
     */
    darkPercentage?: boolean | undefined;
    background?: string | undefined;
    /**
     * Emitted when component is clicked (activated)
     * @param evt JS event object; If you want to cancel navigation set synchronously 'evt.navigate' to false
     * @param navigateFn When you need to control the time at which the button should trigger the route navigation then set 'evt.navigate' to false and call this function; Useful if you have async work to be done before the actual route navigation
     */
    onClick?: (evt: LooseDictionary, navigateFn: () => void) => void;
}
export interface VcBtnSlots {
    /**
     * Use for custom content, instead of relying on 'icon' and 'label' props
     */
    default: () => VNode[];
    /**
     * Override the default VcSpinner when in 'loading' state
     */
    loading: () => VNode[];
}
export interface VcBtnRef extends ComponentPublicInstance<VcBtnProps> {
    /**
     * Emulate click on VcBtn
     * @param evt JS event object
     */
    click: (evt?: LooseDictionary) => void;
}
