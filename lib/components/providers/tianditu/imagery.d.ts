import type { PropType } from 'vue';
import type { ProjectionTransforms, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const tiandituImageryProviderProps: {
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
    mapStyle: {
        type: PropType<"cia_c" | "cia_w" | "cta_c" | "cta_w" | "cva_c" | "cva_w" | "ela_c" | "ela_w" | "eva_c" | "eva_w" | "img_c" | "img_w" | "ter_c" | "ter_w" | "vec_c" | "vec_w" | "ibo_c" | "ibo_w">;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
    protocol: {
        type: StringConstructor;
        default: string;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    url: PropType<string | Cesium.Resource>;
};
declare const _default: import("vue").DefineComponent<{
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
    mapStyle: {
        type: PropType<"cia_c" | "cia_w" | "cta_c" | "cta_w" | "cva_c" | "cva_w" | "ela_c" | "ela_w" | "eva_c" | "eva_w" | "img_c" | "img_w" | "ter_c" | "ter_w" | "vec_c" | "vec_w" | "ibo_c" | "ibo_w">;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
    protocol: {
        type: StringConstructor;
        default: string;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    url: PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
    mapStyle: {
        type: PropType<"cia_c" | "cia_w" | "cta_c" | "cta_w" | "cva_c" | "cva_w" | "ela_c" | "ela_w" | "eva_c" | "eva_w" | "img_c" | "img_w" | "ter_c" | "ter_w" | "vec_c" | "vec_w" | "ibo_c" | "ibo_w">;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
    protocol: {
        type: StringConstructor;
        default: string;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    url: PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    projectionTransforms: ProjectionTransforms;
    minimumLevel: number;
    mapStyle: "cia_c" | "cia_w" | "cta_c" | "cta_w" | "cva_c" | "cva_w" | "ela_c" | "ela_w" | "eva_c" | "eva_w" | "img_c" | "img_w" | "ter_c" | "ter_w" | "vec_c" | "vec_w" | "ibo_c" | "ibo_w";
    protocol: string;
}>;
export default _default;
export declare type VcImageryProviderTiandituProps = {
    /**
     * The minimum tile level to request, or undefined if there is no minimum.
     * Default value: 0
     */
    minimumLevel?: number;
    /**
     * The maximum tile level to request, or undefined if there is no maximum.
     * Default value: 20
     */
    maximumLevel?: number;
    /**
     * The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider.
     */
    rectangle?: VcRectangle;
    /**
     * The map type of Tianditu service.
     * Default value: 'img_w'
     */
    mapStyle?: 'cia_c' | 'cia_w' | 'cta_c' | 'cta_w' | 'cva_c' | 'cva_w' | 'ela_c' | 'ela_w' | 'eva_c' | 'eva_w' | 'img_c' | 'img_w' | 'ter_c' | 'ter_w' | 'vec_c' | 'vec_w' | 'ibo_c' | 'ibo_w';
    /**
     * Tianditu application key.
     */
    token?: string;
    /**
     * Specify the request protocol type. Can be https or http.
     * Default value: 'https'
     */
    protocol?: string;
    /**
     * A credit for the data source, which is displayed on the canvas.
     */
    credit?: string | Cesium.Credit;
    /**
     * Specify the projection transformation parameters.
     * Default value: false
     */
    projectionTransforms?: ProjectionTransforms;
    /**
     * Triggers before the VcImageryProviderTianditu is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderTianditu is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderTianditu is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the imagery provider encounters an asynchronous error.
     */
    onErrorEvent?: (evt: Cesium.TileProviderError) => void;
    /**
     * Triggers when the provider is ready for use.
     */
    onReadyPromise?: (evt: boolean, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void;
};
export declare type VcImageryProviderTiandituRef = VcComponentPublicInstance<VcImageryProviderTiandituProps>;
