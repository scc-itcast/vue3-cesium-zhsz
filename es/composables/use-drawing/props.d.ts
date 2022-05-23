import type { VcPointProps } from 'vue-cesium/es/components/primitive-collections';
import type { VcDrawTipOpts, VcEditorOpts, VcDrawingPreRenderDatas } from 'vue-cesium/es/utils/drawing-types';
import type { VcActionTooltipProps } from 'vue-cesium/es/utils/types';
import type { PropType } from 'vue';
export declare const useDrawingActionProps: {
    show: BooleanConstructor;
    editable: BooleanConstructor;
    drawtip: PropType<VcDrawTipOpts>;
    pointOpts: PropType<VcPointProps>;
    editorOpts: PropType<VcEditorOpts>;
    mode: NumberConstructor;
    preRenderDatas: PropType<VcDrawingPreRenderDatas>;
    disableDepthTest: BooleanConstructor;
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const useDrawingFabProps: {
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    mode: {
        type: PropType<0 | 1>;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    editable: {
        type: BooleanConstructor;
    };
    clampToGround: {
        type: BooleanConstructor;
    };
    clearActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
};
