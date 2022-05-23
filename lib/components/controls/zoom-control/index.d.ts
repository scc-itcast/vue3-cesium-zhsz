import type { ExtractPropTypes, VNode } from 'vue';
import type { VcCamera, VcComponentInternalInstance, VcZoomEvt, VcBtnTooltipProps, VcReadyObject, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
declare const emits: {
    zoomEvt: (evt: VcZoomEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
export declare const zoomControlProps: {
    background: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: string) => boolean;
    };
    zoomInOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomOutOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomResetOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomAmount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    durationReset: {
        type: NumberConstructor;
    };
    defaultResetView: {
        type: import("vue").PropType<VcCamera>;
        default: () => VcCamera;
    };
    overrideViewerCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    background: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: string) => boolean;
    };
    zoomInOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomOutOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomResetOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomAmount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    durationReset: {
        type: NumberConstructor;
    };
    defaultResetView: {
        type: import("vue").PropType<VcCamera>;
        default: () => VcCamera;
    };
    overrideViewerCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    zoomEvt: (evt: VcZoomEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    background: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: string) => boolean;
    };
    zoomInOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomOutOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomResetOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomAmount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    durationReset: {
        type: NumberConstructor;
    };
    defaultResetView: {
        type: import("vue").PropType<VcCamera>;
        default: () => VcCamera;
    };
    overrideViewerCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onZoomEvt?: (evt: VcZoomEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    direction: "horizontal" | "vertical";
    duration: number;
    background: string;
    border: string;
    borderRadius: string;
    zoomInOptions: VcBtnTooltipProps;
    zoomOutOptions: VcBtnTooltipProps;
    zoomResetOptions: VcBtnTooltipProps;
    enableResetButton: boolean;
    zoomAmount: number;
    defaultResetView: VcCamera;
    overrideViewerCamera: boolean;
}>;
export default _default;
export declare type VcZoomControlEmits = typeof emits;
export declare type VcZoomControlProps = {
    /**
     * Specify the position of the VcZoomControl.
     * Default value: top-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcZoomControl horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify whether to enable the reset button.
     * Default value: true
     */
    enableResetButton?: boolean;
    /**
     * Specify the zoom amount of zoom in and zoom out.
     * Default value: 2
     */
    zoomAmount?: number;
    /**
     * Specify the time of the zoom-in and zoom-out process, in seconds.
     * Default value: 0.5
     */
    duration?: number;
    /**
     * Specify the time to reset to the default camera position, in seconds.
     * Default value: 1.5
     */
    durationReset?: number;
    /**
     * Specify the reset camera view.
     * Default value:
     * {
     *    position: {
     *      lng: 105,
     *      lat: 30,
     *      height: 19059568.5
     *    }
     * }
     */
    defaultResetView?: VcCamera;
    /**
     * Specify whether to override the camera attribute on the vc-viewer during initialization.
     * Default value: false
     */
    overrideViewerCamera?: boolean;
    /**
     * Specifies the css background of the VcZoomControl.
     * Default value: #3f4854
     */
    background?: string;
    /**
     * Specifies the css border of the VcZoomControl.
     * Default value: solid 1px rgba(255, 255, 255, 0.2)
     */
    border?: string;
    /**
     * Specifies the css border radius of the VcZoomControl.
     * Default value: 100px
     */
    borderRadius?: string;
    /**
     * Specify the direction of the VcZoomControl.
     * Default value: vertical
     */
    direction?: 'vertical' | 'horizontal';
    /**
     * Specify the zoom in parameters.
     */
    zoomInOptions?: VcBtnTooltipProps;
    /**
     * Specify the zoom out parameters.
     */
    zoomOutOptions?: VcBtnTooltipProps;
    /**
     * Specify the reset button parameters.
     */
    zoomResetOptions?: VcBtnTooltipProps;
    /**
     * Triggers before the VcZoomControl is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcZoomControl is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcZoomControl is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * 	Triggers when the VcZoomControl is operated.
     */
    onZoomEvt?: (evt: VcZoomEvt) => void;
};
export declare type VcZoomControlRef = VcComponentPublicInstance<VcZoomControlProps>;
