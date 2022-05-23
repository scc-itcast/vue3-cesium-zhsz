import type { VNode, PropType } from 'vue';
import type { VcBtnTooltipProps, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import { VcViewerProps } from 'vue-cesium/es/components/viewer';
export declare const overviewProps: {
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: Array<string>) => boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
    };
    toggleOpts: {
        type: PropType<VcBtnTooltipProps & {
            show: boolean;
        }>;
    };
    viewerOpts: {
        type: PropType<VcViewerProps>;
    };
};
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: string[]) => boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
    };
    toggleOpts: {
        type: PropType<VcBtnTooltipProps & {
            show: boolean;
        }>;
    };
    viewerOpts: {
        type: PropType<VcViewerProps>;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: string[]) => boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
    };
    toggleOpts: {
        type: PropType<VcBtnTooltipProps & {
            show: boolean;
        }>;
    };
    viewerOpts: {
        type: PropType<VcViewerProps>;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    height: string;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    width: string;
    border: string;
}>;
export default _default;
export declare type VcOverviewMapProps = {
    /**
     * Specify the position of the VcOverviewMap.
     * Default value: bottom-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcOverviewMap horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify the width of the overviewmap component.
     * Default value: 150px
     */
    width?: string;
    /**
     * Specify the height of the overviewmap component.
     * Default value: 150px
     */
    height?: string;
    /**
     * Specify the border of the overviewmap component.
     * Default value: solid 4px rgb(255, 255, 255)
     */
    border?: string;
    /**
     * Specify the border radius of the overviewmap component.
     */
    borderRadius?: string;
    /**
     * Specify the toggle button options of the overviewmap component.
     */
    toggleOpts?: VcBtnTooltipProps & {
        show: boolean;
    };
    /**
     * Specify the vc-viewer component options in the overviewmap component.
     */
    viewerOpts?: VcViewerProps;
    /**
     * Triggers before the VcOverviewMap is loaded.
     * @param instance
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcOverviewMap is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcOverviewMap is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export interface VcOverviewMapSlots {
    /**
     * Default slot content of the component
     */
    default: () => VNode[];
}
export declare type VcOverviewMapRef = VcComponentPublicInstance<VcOverviewMapProps>;
