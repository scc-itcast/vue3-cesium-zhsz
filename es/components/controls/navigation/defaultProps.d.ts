import type { ExtractPropTypes, PropType } from 'vue';
import { VcCompassProps } from '../compass';
import { VcZoomControlProps } from '../zoom-control';
import { VcPrintProps } from '../print';
import { VcMyLocationProps } from '../my-location';
import { VcStatusBarProps } from '../status-bar';
import { VcDistanceLegendProps } from '../distance-legend';
export interface VcNavigationOtherOpts {
    position?: string;
    offset?: Array<number>;
    statusBarOpts?: VcStatusBarProps;
    distancelegendOpts?: VcDistanceLegendProps;
}
declare const defaultProps: {
    compassOpts: {
        type: PropType<false | VcCompassProps>;
        default: () => VcCompassProps;
    };
    zoomOpts: {
        type: PropType<false | VcZoomControlProps>;
        default: () => VcZoomControlProps;
    };
    printOpts: {
        type: PropType<false | VcPrintProps>;
        default: () => VcPrintProps;
    };
    locationOpts: {
        type: PropType<false | VcMyLocationProps>;
        default: () => VcMyLocationProps;
    };
    otherOpts: {
        type: PropType<false | VcNavigationOtherOpts>;
        default: () => VcNavigationOtherOpts;
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
};
export declare type VcNavigationProps = ExtractPropTypes<typeof defaultProps>;
declare const defaultOptions: VcNavigationProps;
export { defaultProps, defaultOptions };
