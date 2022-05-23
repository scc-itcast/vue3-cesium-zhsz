import type { VcCallbackPropertyFunction, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcMaterial, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const cylinderGraphicsProps: {
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    slices: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    numberOfVerticalLines: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    outline: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    material: {
        type: import("vue").PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeMaterial;
        };
    };
    fill: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    bottomRadius: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    topRadius: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    length: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    slices: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    numberOfVerticalLines: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    outline: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    material: {
        type: import("vue").PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeMaterial;
        };
    };
    fill: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    bottomRadius: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    topRadius: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    length: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    slices: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    numberOfVerticalLines: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    outline: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    material: {
        type: import("vue").PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeMaterial;
        };
    };
    fill: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    bottomRadius: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    topRadius: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    length: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onDefinitionChanged?: (property: Cesium.Property) => any;
}, {
    fill: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    show: boolean;
    material: VcMaterial;
    outline: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    outlineColor: VcColor;
    outlineWidth: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    numberOfVerticalLines: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    slices: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGraphicsCylinderProps = {
    /**
     * A boolean Property specifying the visibility of the corridor.
     * Default value: true
     */
    show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * 	A numeric Property specifying the length of the cylinder.
     */
    length?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the radius of the top of the cylinder.
     */
    topRadius?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the radius of the bottom of the cylinder.
     */
    bottomRadius?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the height from the entity position is relative to.
     * Default value: HeightReference.NONE
     */
    heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A boolean Property specifying whether the cylinder is filled with the provided material.
     * Default value: true
     */
    fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the material used to fill the cylinder.
     * Default value: white
     */
    material?: VcMaterial;
    /**
     * A boolean Property specifying whether the cylinder is outlined.
     * Default value: false
     */
    outline?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the Color of the outline.
     * Default value: black
     */
    outlineColor?: VcColor;
    /**
     * A numeric Property specifying the width of the outline.
     * Default value: 1.0
     */
    outlineWidth?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline.
     * Default value: 16
     */
    numberOfVerticalLines?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * The number of edges around the perimeter of the cylinder.
     * Default value: 128
     */
    slices?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * An enum Property specifying whether the corridor casts or receives shadows from light sources.
     * Default value: Cesium.ShadowMode.DISABLED
     */
    shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying at what distance from the camera that this corridor will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * Triggers before the VcGraphicsCylinder is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGraphicsCylinder is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGraphicsCylinder is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
};
export declare type VcGraphicsCylinderRef = VcComponentPublicInstance<VcGraphicsCylinderProps>;
