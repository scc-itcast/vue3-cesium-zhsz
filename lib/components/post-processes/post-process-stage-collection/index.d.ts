import type { PropType, VNode } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import type { VcPostProcessStageProps } from '../post-process-stage';
export declare const postProcessStageCollectionProps: {
    postProcesses: {
        type: PropType<VcPostProcessStageProps[]>;
        default: () => any[];
    };
};
declare const _default: import("vue").DefineComponent<{
    postProcesses: {
        type: PropType<VcPostProcessStageProps[]>;
        default: () => any[];
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    postProcesses: {
        type: PropType<VcPostProcessStageProps[]>;
        default: () => any[];
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    postProcesses: VcPostProcessStageProps[];
}>;
export default _default;
export declare type VcPostProcessStageCollectionProps = {
    /**
     * Specify the post-processing collection. The props are consistent with [`vc-post-process-stage`](https://zouyaoji.top/vue-cesium/#/en-US/component/post-processes/vc-post-process-stage#props).
     */
    postProcesses?: Array<VcPostProcessStageProps>;
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
export declare type VcPostProcessStageCollectionRef = VcComponentPublicInstance<VcPostProcessStageCollectionProps>;
export declare type VcPostProcessStageCollectionSlots = {
    /**
     * Slot for vc-post-process-stage-scan, vc-post-process-stage
     */
    default: () => VNode[];
};
