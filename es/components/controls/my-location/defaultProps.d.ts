import type { VcColor } from 'vue-cesium/es/utils/types';
import type { PropType } from 'vue';
import { VcTooltipProps } from '../../ui/tooltip';
declare const _default: {
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    loadingType: {
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
    geolocation: {
        type: PropType<PositionOptions>;
        default: () => PositionOptions;
    };
    /**
     *  refer https://developer.amap.com/api/jsapi-v2/documentation#geolocation
     *  {
     *    key: '',
     *    version: '2.0',
     *    options: {
     *      timeout: 5000,
     *      convert: false,
     *      noGeoLocation: 3,
     *      needAddress: true
     *      extensions: 'all'
     *    },
     *    transformToWGS84: true
     *  }
     */
    amap: PropType<{
        key: string;
        version: string;
        options: {
            timeout?: number;
            convert?: false;
            noGeoLocation?: 0 | 1 | 2 | 3;
            needAddress?: boolean;
            extensions?: 'all' | 'base';
        };
        transformToWGS84?: boolean;
    }>;
    id: {
        type: StringConstructor;
        default: string;
    };
    pointColor: {
        type: PropType<VcColor>;
        default: string;
    };
    pixelSize: {
        type: NumberConstructor;
        default: number;
    };
    outlineWidth: {
        type: NumberConstructor;
        default: number;
    };
    outlineColor: {
        type: PropType<VcColor>;
        default: string;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    factor: {
        type: NumberConstructor;
        default: number;
    };
    maximumHeight: NumberConstructor;
    hpr: {
        type: PropType<[number, number, number]>;
        default: () => number[];
    };
    customAPI: PropType<(errorCallback: any) => {
        lng: number;
        lat: number;
    }>;
    description: PropType<(position: any, detail: any) => string>;
};
export default _default;
