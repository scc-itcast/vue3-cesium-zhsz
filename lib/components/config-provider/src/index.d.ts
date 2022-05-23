import { PropType, VNode } from 'vue';
import { Language } from 'vue-cesium/es/locale';
declare const _default: import("vue").DefineComponent<{
    locale: {
        type: PropType<Language>;
        default: () => Language;
    };
    cesiumPath: {
        type: StringConstructor;
        default: string;
    };
    accessToken: {
        type: StringConstructor;
        default: string;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    locale: {
        type: PropType<Language>;
        default: () => Language;
    };
    cesiumPath: {
        type: StringConstructor;
        default: string;
    };
    accessToken: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    locale: Language;
    cesiumPath: string;
    accessToken: string;
}>;
export default _default;
export declare type VcConfigProviderProps = {
    /**
     * Locale Object.
     */
    locale?: Language;
    /**
     * CesiumJS path for vue-cesium.
     * Default value: https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js
     */
    cesiumPath?: string;
    /**
     * Cesium Ion defaultAccessToken
     * Default value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGE2MjZlOC1mMzhiLTRkZjQtOWEwZi1jZTE0MWY0YzhlMTAiLCJpZCI6MjU5LCJpYXQiOjE2NDM3MjU1NzZ9.ptZ5tVXvMmuWRC0WhjtYTg-17nQh14fgxBsx0HJiVXQ
     */
    accessToken?: string;
};
export interface VcConfigProviderSlots {
    /**
     * This is where vc-viewer may go into
     */
    default: () => VNode[];
}
