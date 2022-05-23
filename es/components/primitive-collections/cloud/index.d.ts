import type { PropType } from 'vue';
import type { VcCartesian2, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
import { makeCartesian2, makeCartesian3 } from 'vue-cesium/es/utils/cesium-helpers';
export declare const cumulusCloudProps: {
    slice: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    scale: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
            deep: boolean;
        };
    };
    maximumSize: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
    color: {
        type: PropType<VcColor>; /**
         * Specify the Cartesian position of this cumulus cloud.
         */
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeColor;
        };
    };
    brightness: {
        type: NumberConstructor;
        default: number;
    };
};
declare const _default: import("vue").DefineComponent<{
    slice: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    scale: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
            deep: boolean;
        };
    };
    maximumSize: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
    color: {
        type: PropType<VcColor>; /**
         * Specify the Cartesian position of this cumulus cloud.
         */
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeColor;
        };
    };
    brightness: {
        type: NumberConstructor;
        default: number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    slice: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    scale: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
            deep: boolean;
        };
    };
    maximumSize: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
    color: {
        type: PropType<VcColor>; /**
         * Specify the Cartesian position of this cumulus cloud.
         */
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeColor;
        };
    };
    brightness: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
}, {
    slice: number;
    show: boolean;
    color: VcColor;
    brightness: number;
}>;
export default _default;
export declare type VcCumulusCloudProps = {
    /**
     * Specify the brightness of the cloud. This can be used to give clouds a darker, grayer appearance.
     */
    brightness?: number;
    /**
     * Specify the color of the cloud.
     * Default Value: white
     */
    color?: VcColor;
    /**
     * Specify the maximum size of the cumulus cloud rendered on the billboard. This defines a maximum ellipsoid volume that the cloud can appear in. Rather than guaranteeing a specific size, this specifies a boundary for the cloud to appear in, and changing it can affect the shape of the cloud.
     */
    maximumSize?: VcPosition;
    /**
     * Specify the Cartesian position of this cumulus cloud.
     */
    position?: VcPosition;
    /**
     * Specify the scale of the cumulus cloud billboard in meters. The scale property will affect the size of the billboard, but not the cloud's actual appearance.
     */
    scale?: VcCartesian2;
    /**
     * Determines if this cumulus cloud will be shown. Use this to hide or show a cloud, instead of removing it and re-adding it to the collection.
     * Default Value: true
     */
    show?: boolean;
    /**
     * If slice is set to a negative number, the cloud will not render a cross-section. Instead, it will render the outside of the ellipsoid that is visible. For clouds with small values of `maximumSize.z`, this can produce good-looking results, but for larger clouds, this can result in a cloud that is undesirably warped to the ellipsoid volume.
     * Default Value: -1.0
     */
    slice?: number;
    /**
     * Triggers before the VcCumulusCloud is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcCumulusCloud is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcCumulusCloud is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcCumulusCloudRef = VcComponentPublicInstance<VcCumulusCloudProps>;
