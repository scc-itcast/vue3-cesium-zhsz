import { PropType } from 'vue';
import { VcTooltipProps } from '../../ui';
declare const _default: {
    gridFileUrl: {
        type: StringConstructor;
        default: string;
    };
    proj4Projection: {
        type: StringConstructor;
        default: string;
    };
    projectionUnits: {
        type: StringConstructor;
        default: string;
    };
    proj4longlat: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    showCameraInfo: {
        type: PropType<boolean>;
        default: boolean;
    };
    showMouseInfo: {
        type: PropType<boolean>;
        default: boolean;
    };
    showPerformanceInfo: {
        type: PropType<boolean>;
        default: boolean;
    };
    useProjection: {
        type: PropType<boolean>;
        default: boolean;
    };
    tooltip: {
        type: PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
};
export default _default;
