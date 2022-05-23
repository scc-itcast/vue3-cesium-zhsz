import type { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
import type { VcCumulusCloudProps } from '../cloud';
export declare const cloudCollectionProps: {
    noiseDetail: {
        type: NumberConstructor;
        default: number;
    };
    noiseOffset: {
        type: PropType<VcPosition>;
    };
    debugBillboards: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugEllipsoids: {
        type: BooleanConstructor;
        default: boolean;
    };
    clouds: {
        type: PropType<VcCumulusCloudProps[]>;
        default: () => any[];
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    noiseDetail: {
        type: NumberConstructor;
        default: number;
    };
    noiseOffset: {
        type: PropType<VcPosition>;
    };
    debugBillboards: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugEllipsoids: {
        type: BooleanConstructor;
        default: boolean;
    };
    clouds: {
        type: PropType<VcCumulusCloudProps[]>;
        default: () => any[];
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    noiseDetail: {
        type: NumberConstructor;
        default: number;
    };
    noiseOffset: {
        type: PropType<VcPosition>;
    };
    debugBillboards: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugEllipsoids: {
        type: BooleanConstructor;
        default: boolean;
    };
    clouds: {
        type: PropType<VcCumulusCloudProps[]>;
        default: () => any[];
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
    noiseDetail: number;
    debugBillboards: boolean;
    debugEllipsoids: boolean;
    clouds: VcCumulusCloudProps[];
}>;
export default _default;
export declare type VcCollectionCloudProps = {
    /**
     * Whether to display the clouds.
     * Default value: true
     */
    show?: boolean;
    /**
     * Desired amount of detail in the noise texture.
     * Default value: 16.0
     */
    noiseDetail?: number;
    /**
     * Desired translation of data in noise texture.
     * Default value: {x: 0, y: 0, z: 0}
     */
    noiseOffset?: VcPosition;
    /**
     * For debugging only. Determines if the billboards are rendered with an opaque color.
     * Default value: false
     */
    debugBillboards?: boolean;
    /**
     * For debugging only. Determines if the clouds will be rendered as opaque ellipsoids.
     * Default value: false
     */
    debugEllipsoids?: boolean;
    /**
     * Specifies an array of cumulus collections. The array object structure is the same as the [vc-cumulus-cloud](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-cloud#vccumuluscloud-props) component properties.
     */
    clouds?: Array<VcCumulusCloudProps>;
    /**
     * Triggers before the VcCollectionCloud is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcCollectionCloud is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcCollectionCloud is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcCollectionCloudRef = VcComponentPublicInstance<VcCollectionCloudProps>;
