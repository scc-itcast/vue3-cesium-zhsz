import { App } from 'vue';
import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
export declare const VcPostProcessStage: SFCWithInstall<import("vue").DefineComponent<{
    name: StringConstructor;
    scissorRectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeBoundingRectangle;
        };
    };
    clearColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    fragmentShader: StringConstructor;
    uniforms: ObjectConstructor;
    textureScale: {
        type: NumberConstructor;
        default: number;
    };
    forcePowerOfTwo: {
        type: BooleanConstructor;
        default: boolean;
    };
    sampleMode: import("vue").PropType<number>;
    pixelFormat: import("vue").PropType<Cesium.PixelFormat>;
    pixelDatatype: import("vue").PropType<Cesium.PixelDatatype>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: StringConstructor;
    scissorRectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeBoundingRectangle;
        };
    };
    clearColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    fragmentShader: StringConstructor;
    uniforms: ObjectConstructor;
    textureScale: {
        type: NumberConstructor;
        default: number;
    };
    forcePowerOfTwo: {
        type: BooleanConstructor;
        default: boolean;
    };
    sampleMode: import("vue").PropType<number>;
    pixelFormat: import("vue").PropType<Cesium.PixelFormat>;
    pixelDatatype: import("vue").PropType<Cesium.PixelDatatype>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
}, {
    textureScale: number;
    forcePowerOfTwo: boolean;
}>>;
export declare const VcPostProcessStageScan: SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    options: import("vue").PropType<import("./post-process-stage-scan").VcPostProcessStageScanOpts>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    options: import("vue").PropType<import("./post-process-stage-scan").VcPostProcessStageScanOpts>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
}, {
    type: string;
}>>;
export declare const VcPostProcessStageCollection: SFCWithInstall<import("vue").DefineComponent<{
    postProcesses: {
        type: import("vue").PropType<import("./post-process-stage").VcPostProcessStageProps[]>;
        default: () => any[];
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    postProcesses: {
        type: import("vue").PropType<import("./post-process-stage").VcPostProcessStageProps[]>;
        default: () => any[];
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
}, {
    postProcesses: import("./post-process-stage").VcPostProcessStageProps[];
}>>;
export * from './post-process-stage';
export * from './post-process-stage-collection';
export * from './post-process-stage-scan';
