import type { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
export declare const echartsOverlayProps: {
    options: {
        type: PropType<echarts.EChartsOption>;
        required: boolean;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    coordinateSystem: {
        type: StringConstructor;
        default: string;
    };
};
declare const emits: {
    mouseenter: (evt: MouseEvent) => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<echarts.EChartsOption>;
        required: boolean;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    coordinateSystem: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "click" | "mouseenter" | "mouseleave")[], "beforeLoad" | "ready" | "destroyed" | "click" | "mouseenter" | "mouseleave", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<echarts.EChartsOption>;
        required: boolean;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    coordinateSystem: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (...args: any[]) => any;
    onReady?: (...args: any[]) => any;
    onDestroyed?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onMouseenter?: (...args: any[]) => any;
    onMouseleave?: (...args: any[]) => any;
}, {
    autoHidden: boolean;
    coordinateSystem: string;
}>;
export default _default;
export declare type VcOverlayEchartsEmits = typeof emits;
export interface VcOverlayEchartsProps {
    /**
     * Specify the configuration items of the Echarts.
     */
    options: EChartsOption;
    /**
     * Specify whether Echart elements are automatically hidden when they are on the back of the viewer.
     * Default value: true
     */
    autoHidden?: boolean;
    /**
     * Specify div class of echart.
     */
    customClass?: string;
    /**
     * Specify the name of the custom coordinate system when Echart is initialized.
     * Default value: cesium
     */
    coordinateSystem?: string;
    /**
     * Triggers before the VcOverlayEcharts is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcOverlayEcharts is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcOverlayEcharts is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
}
export declare type VcOverlayEchartsRef = VcComponentPublicInstance<VcOverlayEchartsProps>;
