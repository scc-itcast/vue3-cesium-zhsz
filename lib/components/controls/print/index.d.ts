import type { VNode } from 'vue';
import type { VcPrintEvt, VcComponentInternalInstance, VcReadyObject, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
import { VcTooltipProps } from 'vue-cesium/es/components/ui';
declare const emits: {
    printEvt: (evt: VcPrintEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
export declare const printProps: {
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    screenshotName: StringConstructor;
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    showCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    printAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrintView: {
        type: BooleanConstructor;
        default: boolean;
    };
    downloadAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    screenshotName: StringConstructor;
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    showCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    printAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrintView: {
        type: BooleanConstructor;
        default: boolean;
    };
    downloadAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    printEvt: (evt: VcPrintEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    screenshotName: StringConstructor;
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    showCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    printAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrintView: {
        type: BooleanConstructor;
        default: boolean;
    };
    downloadAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onPrintEvt?: (evt: VcPrintEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    color: string;
    tooltip: false | VcTooltipProps;
    round: boolean;
    flat: boolean;
    icon: string;
    background: string;
    size: string;
    stack: boolean;
    showCredit: boolean;
    printAutomatically: boolean;
    showPrintView: boolean;
    downloadAutomatically: boolean;
}>;
export default _default;
export declare type VcPrintEmits = typeof emits;
export declare type VcPrintProps = {
    /**
     * Specify the position of the VcPrint.
     * Default value: top-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcPrint horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify whether to display the copyright information of the loaded data when printing pictures.
     * Default value: true
     */
    showCredit?: boolean;
    /**
     * Specify whether to print automatically. Need to set showPrintView to false.
     * Default value: false
     */
    printAutomatically?: boolean;
    /**
     * Specify whether to display the print preview.
     * Default value: true
     */
    showPrintView?: boolean;
    /**
     * Specify whether to download the printed pictures.
     * Default value: false
     */
    downloadAutomatically?: boolean;
    /**
     * Specify the icon of the VcPrint.
     * Default value: vc-icons-geolocation
     */
    icon?: string;
    /**
     * Specify the size of the VcPrint.
     * Default value: 24px
     */
    size?: string;
    /**
     * Specify the css color of the VcPrint.
     * Default value: #3f4854
     */
    color?: string;
    /**
     * Specify the css background of the VcPrint.
     * Default value: #fff
     */
    background?: string;
    /**
     * Makes a circle shaped VcPrint.
     */
    round?: boolean;
    /**
     * Use 'flat' design.
     */
    flat?: boolean;
    /**
     * The text that will be shown on the VcPrint.
     */
    label?: string;
    /**
     * Stack icon and label vertically instead of on same line.
     */
    stack?: boolean;
    /**
     * The tooltip parameter.
     */
    tooltip?: false | VcTooltipProps;
    /**
     * The screenshot name.
     */
    screenshotName?: string;
    /**
     * Triggers before the VcPrint is loaded.
     * @param instance
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcPrint is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcPrint is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the print button is clicked.
     */
    onPrintEvt?: (evt: VcPrintEvt) => void;
};
export declare type VcPrintRef = VcComponentPublicInstance<VcPrintProps>;
