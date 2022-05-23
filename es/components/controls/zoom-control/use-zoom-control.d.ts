import type { VcComponentInternalInstance, VcViewerProvider } from 'vue-cesium/es/utils/types';
import type { VcTooltipRef } from 'vue-cesium/es/components/ui';
export default function (props: any, { emit }: {
    emit: any;
}, vcInstance: VcComponentInternalInstance, $services: VcViewerProvider): {
    zoomIn: (e: any) => void;
    zoomOut: (e: any) => void;
    zoomReset: (e: any) => void;
    zoomInTooltipRef: import("vue").Ref<VcTooltipRef>;
    zoomOutTooltipRef: import("vue").Ref<VcTooltipRef>;
    resetTooltipRef: import("vue").Ref<VcTooltipRef>;
};
