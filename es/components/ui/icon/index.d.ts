import { VNode, ComponentPublicInstance } from 'vue';
export declare const iconProps: {
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
};
declare const _default: import("vue").DefineComponent<{
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
}>;
export default _default;
export interface VcIconProps {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl).
     */
    size?: string;
    /**
     * HTML tag to render, unless no icon is supplied or it's an svg icon.
     * Default value: i
     */
    tag?: string;
    /**
     * Name of the icon, following VueCesium convention.
     */
    name?: string;
    /**
     * Color name for component from the css color palette.
     */
    color?: string;
    hoverColor?: string;
    /**
     * Useful if icon is on the left side of something: applies a standard margin on the right side of Icon.
     */
    left?: boolean;
    /**
     * Useful if icon is on the right side of something: applies a standard margin on the left side of Icon.
     */
    right?: boolean;
}
export interface VcIconSlots {
    /**
     * Suggestions: VcTooltip
     */
    default: () => VNode[];
}
export declare type VcIconRef = ComponentPublicInstance<VcIconProps>;
