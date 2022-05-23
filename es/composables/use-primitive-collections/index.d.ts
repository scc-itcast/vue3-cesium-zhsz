/**
 * for
 * PrimitiveCollection
 * BillboardCollection
 * LabelCollection
 * PointPrimitiveCollection
 * PolylineCollection
 */
import { VcComponentInternalInstance } from 'vue-cesium/es/utils/types';
export declare type Collection = Cesium.PrimitiveCollection | Cesium.BillboardCollection | Cesium.LabelCollection | Cesium.PointPrimitiveCollection | Cesium.PolylineCollection;
export default function (props: any, ctx: any, vcInstance: VcComponentInternalInstance): {
    transformProps: <T>(props: T, childProps?: any) => T;
    transformProp: (prop: any, value: any, childProps?: any) => any;
    unwatchFns: import("vue").WatchStopHandle[];
    setPropsWatcher: (register: any) => void;
};
