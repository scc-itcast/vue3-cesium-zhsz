import { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const tiandituTerrainProviderProps: {
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: PropType<string[]>;
        default: () => string[];
    };
    pluginPath: {
        type: StringConstructor;
        default: string;
    };
    dataType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    tileType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
};
declare const _default: import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: PropType<string[]>;
        default: () => string[];
    };
    pluginPath: {
        type: StringConstructor;
        default: string;
    };
    dataType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    tileType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: PropType<string[]>;
        default: () => string[];
    };
    pluginPath: {
        type: StringConstructor;
        default: string;
    };
    dataType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    tileType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    url: string;
    subdomains: string[];
    pluginPath: string;
    dataType: string;
    tileType: string;
}>;
export default _default;
export declare type VcTerrainProviderTiandituProps = {
    /**
     * Specify the service address.
     * Default value: https://{s}.tianditu.gov.cn
     */
    url?: string;
    /**
     * Specify the polling subdomain name.
     * Default value: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']
     */
    subdomains?: Array<string>;
    /**
     * Specify the address of the Tiantu terrain plugin library.
     * Default value: https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js
     */
    pluginPath?: string;
    /**
     * Specify the data type.
     * Default value: init
     */
    dataType?: 'int' | 'float';
    /**
     * Specify the tile type.
     * Default value: heightmap
     */
    tileType?: 'heightmap' | 'quantized-mesh';
    /**
     * Specify the Tiantu service secret key.
     */
    token?: string;
    /**
     * Triggers before the VcTerrainProviderTianditu is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcTerrainProviderTianditu is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcTerrainProviderTianditu is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the terrain provider encounters an asynchronous error.
     */
    onErrorEvent?: (evt: Cesium.TileProviderError) => void;
    /**
     * Triggers when the provider is ready for use.
     */
    onReadyPromise?: (evt: boolean, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void;
};
export declare type VcTerrainProviderTiandituRef = VcComponentPublicInstance<VcTerrainProviderTiandituProps>;
