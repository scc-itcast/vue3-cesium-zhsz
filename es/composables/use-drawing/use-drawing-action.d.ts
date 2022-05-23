import type { VcReadyObject, VcComponentInternalInstance, VcComponentPublicInstance, VcDrawingProvider, VcPickEvent } from 'vue-cesium/es/utils/types';
export default function (props: any, ctx: any, instance: VcComponentInternalInstance, cmpName: string, $services: VcDrawingProvider): {
    drawingType: string;
    drawTip: import("vue").Ref<string>;
    drawTipOpts: import("vue").Ref<{
        show?: boolean;
        pixelOffset?: [number, number];
        drawingTipStart?: string;
        drawingTipEnd?: string;
        drawingTipEditing?: string;
    }>;
    drawStatus: import("vue").Ref<number>;
    canShowDrawTip: import("vue").Ref<boolean>;
    drawTipPosition: import("vue").Ref<number[] | {
        x: number;
        y: number;
        z: number;
        clone: (result?: Cesium.Cartesian3) => Cesium.Cartesian3;
        equals: (right?: Cesium.Cartesian3) => boolean;
        equalsEpsilon: (right?: Cesium.Cartesian3, relativeEpsilon?: number, absoluteEpsilon?: number) => boolean;
        toString: () => string;
    }>;
    showEditor: import("vue").Ref<boolean>;
    editorPosition: import("vue").Ref<number[] | {
        x: number;
        y: number;
        z: number;
        clone: (result?: Cesium.Cartesian3) => Cesium.Cartesian3;
        equals: (right?: Cesium.Cartesian3) => boolean;
        equalsEpsilon: (right?: Cesium.Cartesian3, relativeEpsilon?: number, absoluteEpsilon?: number) => boolean;
        toString: () => string;
    }>;
    mouseoverPoint: any;
    editingPoint: any;
    primitiveCollectionRef: import("vue").Ref<VcComponentPublicInstance<{}>>;
    editorType: import("vue").Ref<string>;
    onMouseoverPoints: (e: VcPickEvent) => void;
    onMouseoutPoints: (e: VcPickEvent) => void;
    onMouseenterEditor: (evt: any) => void;
    onMouseleaveEditor: (evt: any) => void;
    onPrimitiveCollectionReady: (readyObj: VcReadyObject) => void;
    onVcCollectionPointReady: (e: VcReadyObject) => void;
    onVcPrimitiveReady: (e: VcReadyObject) => void;
    onVcCollectionLabelReady: (e: VcReadyObject) => void;
};
