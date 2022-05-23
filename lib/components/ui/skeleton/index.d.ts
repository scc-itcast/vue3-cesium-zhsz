import { VNode, ComponentPublicInstance } from 'vue';
import type { PropType } from 'vue';
export declare const skeletonTypes: string[];
export declare const skeletonAnimations: string[];
export declare const skeletonProps: {
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
        type: PropType<"blink" | "none" | "fade" | "wave" | "pulse" | "pulse-x" | "pulse-y">;
        validator: (v: string) => boolean;
        default: string;
    };
    square: BooleanConstructor;
    bordered: BooleanConstructor;
    size: PropType<string>;
    width: StringConstructor;
    height: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: any;
    };
};
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<"blink" | "none" | "fade" | "wave" | "pulse" | "pulse-x" | "pulse-y">;
        validator: (v: string) => boolean;
        default: string;
    };
    square: BooleanConstructor;
    bordered: BooleanConstructor;
    size: PropType<string>;
    width: StringConstructor;
    height: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: any;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        type: PropType<"blink" | "none" | "fade" | "wave" | "pulse" | "pulse-x" | "pulse-y">;
        validator: (v: string) => boolean;
        default: string;
    };
    square: BooleanConstructor;
    bordered: BooleanConstructor;
    size: PropType<string>;
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
}>;
export default _default;
export interface VcSkeletonProps {
    /**
     * Notify the component that the background is a dark color.
     */
    dark?: boolean | undefined;
    /**
     * Type of skeleton placeholder.
     * Default value: rect
     */
    type?: 'text' | 'rect' | 'circle' | 'VcBtn' | 'VcBadge' | 'VcChip' | 'VcToolbar' | 'VcCheckbox' | 'VcRadio' | 'VcToggle' | 'VcSlider' | 'VcRange' | 'VcInput' | 'VcAvatar' | undefined;
    /**
     * The animation effect of the skeleton placeholder.
     * Default value: wave
     */
    animation?: 'wave' | 'pulse' | 'pulse-x' | 'pulse-y' | 'fade' | 'blink' | 'none' | undefined;
    /**
     * Animation speed (in milliseconds, without unit).
     * Default value: 300
     */
    animationSpeed?: string | number | undefined;
    /**
     * Removes border-radius so borders are squared.
     */
    square?: boolean | undefined;
    /**
     * Applies a default border to the component.
     */
    bordered?: boolean | undefined;
    /**
     * Size in CSS units, including unit name; Overrides 'height' and 'width' props and applies the value to both height and width.
     */
    size?: string | undefined;
    /**
     * Width in CSS units, including unit name; Apply custom width; Use this prop or through CSS; Overridden by 'size' prop if used.
     */
    width?: string | undefined;
    /**
     * Height in CSS units, including unit name; Apply custom height; Use this prop or through CSS; Overridden by 'size' prop if used.
     */
    height?: string | undefined;
    /**
     * HTML tag to use.
     * Default value: div
     */
    tag?: string | undefined;
    color?: string;
}
export interface VcSkeletonSlots {
    /**
     * Default slot in the devland unslotted content of the component
     */
    default: () => VNode[];
}
export declare type VcSkeletonRef = ComponentPublicInstance<VcSkeletonProps>;
