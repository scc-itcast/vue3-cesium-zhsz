import type { ExtractPropTypes, PropType } from 'vue';
import type { VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare type VcPostProcessStageScanOpts = {
    position?: VcPosition;
    radius: number;
    interval: number;
    color: VcColor;
};
export declare const postProcessStageScanProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    options: PropType<VcPostProcessStageScanOpts>;
};
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    options: PropType<VcPostProcessStageScanOpts>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    options: PropType<VcPostProcessStageScanOpts>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    type: string;
}>;
export default _default;
export declare type VcPostProcessStageScanProps = {
    /**
     * Specify the scan type, optional values are'radar','circle'.
     */
    type?: 'radar' | 'circle';
    /**
     * Specify optional parameters.
     */
    options?: VcPostProcessStageScanOpts;
    /**
     * Triggers before the component is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the component is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the component is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcPostProcessStageScanRef = VcComponentPublicInstance<VcPostProcessStageScanProps>;
