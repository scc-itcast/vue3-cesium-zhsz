import type { PropType, VNode } from 'vue';
import type { VcColorSegments, HeatmapConfiguration, VcComponentInternalInstance, VcComponentPublicInstance, VcHeatMapData, VcRectangle, VcReadyObject } from 'vue-cesium/es/utils/types';
import { makeRectangle } from 'vue-cesium/es/utils/cesium-helpers';
export declare const heatmapOverlayProps: {
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    data: PropType<VcHeatMapData[]>;
    options: PropType<HeatmapConfiguration>;
    type: {
        type: PropType<"primitive" | "entity" | "imagery-layer">;
        default: string;
    };
    segments: {
        type: PropType<VcColorSegments[]>;
        default: () => any[];
    };
    projection: {
        type: PropType<"3857" | "4326">;
        default: string;
    };
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeRectangle;
        };
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    data: PropType<VcHeatMapData[]>;
    options: PropType<HeatmapConfiguration>;
    type: {
        type: PropType<"primitive" | "entity" | "imagery-layer">;
        default: string;
    };
    segments: {
        type: PropType<VcColorSegments[]>;
        default: () => any[];
    };
    projection: {
        type: PropType<"3857" | "4326">;
        default: string;
    };
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeRectangle;
        };
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    data: PropType<VcHeatMapData[]>;
    options: PropType<HeatmapConfiguration>;
    type: {
        type: PropType<"primitive" | "entity" | "imagery-layer">;
        default: string;
    };
    segments: {
        type: PropType<VcColorSegments[]>;
        default: () => any[];
    };
    projection: {
        type: PropType<"3857" | "4326">;
        default: string;
    };
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeRectangle;
        };
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    show: boolean;
    type: "primitive" | "entity" | "imagery-layer";
    min: number;
    max: number;
    segments: VcColorSegments[];
    projection: "3857" | "4326";
}>;
export default _default;
export interface VcOverlayHeatmapProps {
    /**
     * Specify whether to display the heatmap overlay.
     * Default value: true
     */
    show?: boolean;
    /**
     * Specify a rectangle with north, south, east and west properties.
     */
    rectangle?: VcRectangle;
    /**
     * Specify the minimum value of the heat map data.
     * Default value: 0
     */
    min?: number;
    /**
     * Specify the maximum value of the heat map data.
     * Default value: 100
     */
    max?: number;
    data?: Array<VcHeatMapData>;
    /**
     * Specify the heatmap configs.
     */
    options?: HeatmapConfiguration;
    /**
     * Specify the render type of heat map object.
     * Default value: primitive
     */
    type?: 'primitive' | 'entity' | 'imagery-layer';
    /**
     * Specify the color segment of the heatmap.
     */
    segments?: Array<VcColorSegments>;
    /**
     * Specify the projection.
     * Default value: 3857
     */
    projection?: '3857' | '4326';
    /**
     * Triggers before the VcOverlayHeatmap is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcOverlayHeatmap is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcOverlayHeatmap is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
}
export declare type VcOverlayHeatmapRef = VcComponentPublicInstance<VcOverlayHeatmapProps>;
