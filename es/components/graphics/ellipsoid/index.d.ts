import type { VcCallbackPropertyFunction, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcMaterial, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const ellipsoidGraphicsProps: {
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    subdivisions: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    slicePartitions: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    stackPartitions: {
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
    maximumCone: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    minimumCone: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    maximumClock: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    minimumClock: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    innerRadii: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    radii: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
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
    subdivisions: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    slicePartitions: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    stackPartitions: {
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
    maximumCone: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    minimumCone: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    maximumClock: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    minimumClock: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    innerRadii: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    radii: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    subdivisions: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    slicePartitions: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    stackPartitions: {
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
    maximumCone: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    minimumCone: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    maximumClock: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    minimumClock: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    innerRadii: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    radii: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    fill: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    show: boolean;
    material: VcMaterial;
    outline: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    outlineColor: VcColor;
    outlineWidth: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    slicePartitions: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    stackPartitions: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    maximumCone: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    minimumCone: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    maximumClock: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    minimumClock: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    subdivisions: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGraphicsEllipsoidProps = {
    /**
     * A boolean Property specifying the visibility of the ellipsoid.
     * Default value: truec
     */
    show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A VcPosition Property specifying the radii of the ellipsoid.
     */
    radii?: VcPosition;
    /**
     * A VcPosition Property specifying the inner radii of the ellipsoid.
     */
    innerRadii?: VcPosition;
    /**
     * A Property specifying the minimum clock angle of the ellipsoid.
     * Default value: 0.0
     */
    minimumClock?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the maximum clock angle of the ellipsoid.
     * Default value: 2*PI
     */
    maximumClock?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the minimum cone angle of the ellipsoid.
     * Default value: 0.0
     */
    minimumCone?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the maximum cone angle of the ellipsoid.
     * Default value: PI
     */
    maximumCone?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the height from the entity position is relative to.
     * Default value: HeightReference.NONE
     */
    heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * 	A numeric Property specifying the altitude of the ellipse's extruded face relative to the ellipsoid surface.
     */
    extrudedHeight?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the extrudedHeight is relative to.
     * Default value: HeightReference.NONE
     */
    extrudedHeightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A boolean Property specifying whether the ellipsoid is filled with the provided material.
     * Default value: true
     */
    fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the material used to fill the ellipse.
     * Default value: white
     */
    material?: VcMaterial;
    /**
     * A boolean Property specifying whether the ellipsoid is outlined.
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
     * A Property specifying the number of stacks.
     * Default value: 64
     */
    stackPartitions?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the number of radial slices.
     * Default value: 64
     */
    slicePartitions?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the number of samples per outline ring, determining the granularity of the curvature.
     * Default value: 128
     */
    subdivisions?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * An enum Property specifying whether the ellipsoid casts or receives shadows from light sources.
     * Default value: Cesium.ShadowMode.DISABLED
     */
    shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying at what distance from the camera that this ellipsoid will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * Triggers before the VcGraphicsEllipsoid is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGraphicsEllipsoid is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGraphicsEllipsoid is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
};
export declare type VcGraphicsEllipsoidRef = VcComponentPublicInstance<VcGraphicsEllipsoidProps>;
