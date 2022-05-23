import type { VcComponentInternalInstance } from 'vue-cesium/es/utils/types';
import type { VcTooltipRef } from 'vue-cesium/es/components/ui';
export default function (props: any, { emit }: {
    emit: any;
}, vcInstance: VcComponentInternalInstance): {
    heading: import("vue").Ref<number>;
    orbitCursorAngle: import("vue").Ref<number>;
    orbitCursorOpacity: import("vue").Ref<number>;
    handleDoubleClick: (e: any) => boolean;
    handleMouseDown: (e: MouseEvent | TouchEvent) => boolean;
    resetRotater: () => void;
    onTooltipBeforeShow: (e: any) => void;
    viewerChange: () => void;
    load: (viewer: any) => Promise<boolean>;
    unload: () => Promise<boolean>;
    iconOuterTooltipRef: import("vue").Ref<VcTooltipRef>;
    iconInnerTooltipRef: import("vue").Ref<VcTooltipRef>;
};
