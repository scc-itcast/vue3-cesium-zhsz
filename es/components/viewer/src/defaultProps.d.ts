import type { VcCamera, VcContextOptions } from 'vue-cesium/es/utils/types';
import type { PropType } from 'vue';
import { VcSkeletonProps } from '../../ui';
declare const _default: {
    cesiumPath: StringConstructor;
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    baseLayerPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreenButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    vrButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    geocoder: {
        type: PropType<boolean | Cesium.GeocoderService[]>;
        default: boolean;
    };
    homeButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    infoBox: {
        type: BooleanConstructor;
        default: boolean;
    };
    sceneModePicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectionIndicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    timeline: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigationHelpButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigationInstructionsInitiallyVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    scene3DOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    shouldAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    clockViewModel: PropType<Cesium.ClockViewModel>;
    selectedImageryProviderViewModel: PropType<Cesium.ProviderViewModel>;
    imageryProviderViewModels: PropType<Cesium.ProviderViewModel[]>;
    selectedTerrainProviderViewModel: PropType<Cesium.ProviderViewModel>;
    terrainProviderViewModels: PropType<Cesium.ProviderViewModel[]>;
    imageryProvider: PropType<Cesium.ImageryProvider>;
    terrainProvider: PropType<Cesium.TerrainProvider>;
    skyBox: {
        type: PropType<false | Cesium.SkyBox>;
        default: () => any;
    };
    skyAtmosphere: {
        type: PropType<false | Cesium.SkyAtmosphere>;
        default: () => any;
    };
    fullscreenElement: {
        type: PropType<string | Element>;
    };
    useDefaultRenderLoop: {
        type: BooleanConstructor;
        default: boolean;
    };
    targetFrameRate: NumberConstructor;
    showRenderLoopErrors: {
        type: BooleanConstructor;
        default: boolean;
    };
    useBrowserRecommendedResolution: {
        type: BooleanConstructor;
        default: boolean;
    };
    automaticallyTrackDataSourceClocks: {
        type: BooleanConstructor;
        default: boolean;
    };
    contextOptions: PropType<VcContextOptions>;
    sceneMode: {
        type: NumberConstructor;
        default: number;
    };
    mapProjection: PropType<Cesium.MapProjection>;
    globe: {
        type: PropType<false | Cesium.Globe>;
        default: () => any;
    };
    orderIndependentTranslucency: {
        type: BooleanConstructor;
        default: boolean;
    };
    creditContainer: PropType<string | Element>;
    creditViewport: PropType<string | Element>;
    dataSources: PropType<Cesium.DataSourceCollection>;
    terrainExaggeration: {
        type: NumberConstructor;
        default: number;
    };
    shadows: {
        type: BooleanConstructor;
        default: boolean;
    };
    terrainShadows: {
        type: NumberConstructor;
        default: number;
    };
    mapMode2D: {
        type: NumberConstructor;
        default: number;
    };
    projectionPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    requestRenderMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximumRenderTimeChange: {
        type: NumberConstructor;
        default: number;
    };
    debugShowFramesPerSecond: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    accessToken: StringConstructor;
    camera: {
        type: PropType<VcCamera>;
        default: () => VcCamera;
    };
    navigation: {
        type: BooleanConstructor;
        default: boolean;
    };
    TZCode: {
        type: StringConstructor;
    };
    UTCOffset: {
        type: NumberConstructor;
    };
    removeCesiumScript: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSortImageryLayers: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    skeleton: {
        type: PropType<boolean | VcSkeletonProps>;
        default: () => VcSkeletonProps;
    };
    touchHoldArg: {
        type: StringConstructor;
        default: string;
    };
};
export default _default;
