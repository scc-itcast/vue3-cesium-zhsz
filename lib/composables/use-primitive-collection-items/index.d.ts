/**
 * for
 * Billboard
 * Label
 * PointPrimitive
 * Polyline
 */
import { VcComponentInternalInstance } from 'vue-cesium/es/utils/types';
export declare type CollectionItem = Cesium.Billboard | Cesium.Label | Cesium.PointPrimitive | Cesium.Polyline;
export default function (props: any, ctx: any, vcInstance: VcComponentInternalInstance): {
    transformProps: <T>(props: T, childProps?: any) => T;
    unwatchFns: import("vue").WatchStopHandle[];
    setPropsWatcher: (register: any) => void;
    $services: import("vue-cesium/es/utils/types").VcViewerProvider;
};
