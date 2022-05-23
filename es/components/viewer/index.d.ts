import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _Viewer: SFCWithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<boolean | Cesium.GeocoderService[]>;
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
    clockViewModel: import("vue").PropType<Cesium.ClockViewModel>;
    selectedImageryProviderViewModel: import("vue").PropType<Cesium.ProviderViewModel>;
    imageryProviderViewModels: import("vue").PropType<Cesium.ProviderViewModel[]>;
    selectedTerrainProviderViewModel: import("vue").PropType<Cesium.ProviderViewModel>;
    terrainProviderViewModels: import("vue").PropType<Cesium.ProviderViewModel[]>;
    imageryProvider: import("vue").PropType<Cesium.ImageryProvider>;
    terrainProvider: import("vue").PropType<Cesium.TerrainProvider>;
    skyBox: {
        type: import("vue").PropType<false | Cesium.SkyBox>;
        default: () => any;
    };
    skyAtmosphere: {
        type: import("vue").PropType<false | Cesium.SkyAtmosphere>;
        default: () => any;
    };
    fullscreenElement: {
        type: import("vue").PropType<string | Element>;
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
    contextOptions: import("vue").PropType<import("vue-cesium/es/utils/types").VcContextOptions>;
    sceneMode: {
        type: NumberConstructor;
        default: number;
    };
    mapProjection: import("vue").PropType<Cesium.MapProjection>;
    globe: {
        type: import("vue").PropType<false | Cesium.Globe>;
        default: () => any;
    };
    orderIndependentTranslucency: {
        type: BooleanConstructor;
        default: boolean;
    };
    creditContainer: import("vue").PropType<string | Element>;
    creditViewport: import("vue").PropType<string | Element>;
    dataSources: import("vue").PropType<Cesium.DataSourceCollection>;
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCamera>;
        default: () => import("vue-cesium/es/utils/types").VcCamera;
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
        type: import("vue").PropType<boolean | import("..").VcSkeletonProps>;
        default: () => import("..").VcSkeletonProps;
    };
    touchHoldArg: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    cesiumReady: (payload: typeof Cesium) => boolean;
    viewerWidgetResized: (payload: import("vue-cesium/es/utils/types").ViewerWidgetResizedEvent) => boolean;
    selectedEntityChanged: (entity: Cesium.Entity) => boolean;
    trackedEntityChanged: (entity: Cesium.Entity) => boolean;
    layerAdded: (imageryLayer: Cesium.ImageryLayer, index: number) => boolean;
    layerMoved: (imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number) => boolean;
    layerRemoved: (imageryLayer: Cesium.ImageryLayer, index: number) => boolean;
    layerShownOrHidden: (imageryLayer: Cesium.ImageryLayer, index: number, show: boolean) => boolean;
    dataSourceAdded: (collection: Cesium.DataSourceCollection, dataSource: import("vue-cesium/es/utils/types").VcDatasource) => boolean;
    dataSourceMoved: (dataSource: import("vue-cesium/es/utils/types").VcDatasource, newIndex: number, oldIndex: number) => boolean;
    dataSourceRemoved: (collection: Cesium.DataSourceCollection, dataSource: import("vue-cesium/es/utils/types").VcDatasource) => boolean;
    collectionChanged: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => boolean;
    morphComplete: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => boolean;
    morphStart: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => boolean;
    postRender: (scene: Cesium.Scene, time: Cesium.JulianDate) => boolean;
    preRender: (scene: Cesium.Scene, time: Cesium.JulianDate) => boolean;
    postUpdate: (scene: Cesium.Scene, time: Cesium.JulianDate) => boolean;
    preUpdate: (scene: Cesium.Scene, time: Cesium.JulianDate) => boolean;
    renderError: (scene: Cesium.Scene, error: any) => boolean;
    terrainProviderChanged: (provider: import("vue-cesium/es/utils/types").VcTerrainProvider) => boolean;
    changed: (percent: number) => boolean;
    moveEnd: () => boolean;
    moveStart: () => boolean;
    onStop: (clock: Cesium.Clock) => boolean;
    onTick: (clock: Cesium.Clock) => boolean;
    errorEvent: (tileProviderError: any) => boolean;
    cameraClicked: (viewModel: Cesium.InfoBoxViewModel) => boolean;
    closeClicked: (viewModel: Cesium.InfoBoxViewModel) => boolean;
    leftClick: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    leftDoubleClick: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    leftDown: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    leftUp: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    middleClick: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    middleDown: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    middleUp: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    mouseMove: (mouseClickEvent: {
        startPosition: Cesium.Cartesian2;
        endPosition: Cesium.Cartesian2;
    }) => boolean;
    pinchStart: (touch2StartEvent: {
        position1: Cesium.Cartesian2;
        position2: Cesium.Cartesian2;
    }) => boolean;
    pinchMove: (touchPinchMovementEvent: {
        distance: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
        angleAndHeight: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
    }) => boolean;
    pinchEnd: () => boolean;
    rightClick: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    rightDown: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    rightUp: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    wheel: (delta: number) => boolean;
    imageryLayersUpdatedEvent: () => boolean;
    tileLoadProgressEvent: (length: number) => boolean;
    touchEnd: (evt: any) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<boolean | Cesium.GeocoderService[]>;
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
    clockViewModel: import("vue").PropType<Cesium.ClockViewModel>;
    selectedImageryProviderViewModel: import("vue").PropType<Cesium.ProviderViewModel>;
    imageryProviderViewModels: import("vue").PropType<Cesium.ProviderViewModel[]>;
    selectedTerrainProviderViewModel: import("vue").PropType<Cesium.ProviderViewModel>;
    terrainProviderViewModels: import("vue").PropType<Cesium.ProviderViewModel[]>;
    imageryProvider: import("vue").PropType<Cesium.ImageryProvider>;
    terrainProvider: import("vue").PropType<Cesium.TerrainProvider>;
    skyBox: {
        type: import("vue").PropType<false | Cesium.SkyBox>;
        default: () => any;
    };
    skyAtmosphere: {
        type: import("vue").PropType<false | Cesium.SkyAtmosphere>;
        default: () => any;
    };
    fullscreenElement: {
        type: import("vue").PropType<string | Element>;
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
    contextOptions: import("vue").PropType<import("vue-cesium/es/utils/types").VcContextOptions>;
    sceneMode: {
        type: NumberConstructor;
        default: number;
    };
    mapProjection: import("vue").PropType<Cesium.MapProjection>;
    globe: {
        type: import("vue").PropType<false | Cesium.Globe>;
        default: () => any;
    };
    orderIndependentTranslucency: {
        type: BooleanConstructor;
        default: boolean;
    };
    creditContainer: import("vue").PropType<string | Element>;
    creditViewport: import("vue").PropType<string | Element>;
    dataSources: import("vue").PropType<Cesium.DataSourceCollection>;
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCamera>;
        default: () => import("vue-cesium/es/utils/types").VcCamera;
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
        type: import("vue").PropType<boolean | import("..").VcSkeletonProps>;
        default: () => import("..").VcSkeletonProps;
    };
    touchHoldArg: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onCollectionChanged?: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => any;
    onErrorEvent?: (tileProviderError: any) => any;
    onOnStop?: (clock: Cesium.Clock) => any;
    onChanged?: (percent: number) => any;
    onCesiumReady?: (payload: typeof Cesium) => any;
    onViewerWidgetResized?: (payload: import("vue-cesium/es/utils/types").ViewerWidgetResizedEvent) => any;
    onSelectedEntityChanged?: (entity: Cesium.Entity) => any;
    onTrackedEntityChanged?: (entity: Cesium.Entity) => any;
    onLayerAdded?: (imageryLayer: Cesium.ImageryLayer, index: number) => any;
    onLayerMoved?: (imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number) => any;
    onLayerRemoved?: (imageryLayer: Cesium.ImageryLayer, index: number) => any;
    onLayerShownOrHidden?: (imageryLayer: Cesium.ImageryLayer, index: number, show: boolean) => any;
    onDataSourceAdded?: (collection: Cesium.DataSourceCollection, dataSource: import("vue-cesium/es/utils/types").VcDatasource) => any;
    onDataSourceMoved?: (dataSource: import("vue-cesium/es/utils/types").VcDatasource, newIndex: number, oldIndex: number) => any;
    onDataSourceRemoved?: (collection: Cesium.DataSourceCollection, dataSource: import("vue-cesium/es/utils/types").VcDatasource) => any;
    onMorphComplete?: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => any;
    onMorphStart?: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => any;
    onPostRender?: (scene: Cesium.Scene, time: Cesium.JulianDate) => any;
    onPreRender?: (scene: Cesium.Scene, time: Cesium.JulianDate) => any;
    onPostUpdate?: (scene: Cesium.Scene, time: Cesium.JulianDate) => any;
    onPreUpdate?: (scene: Cesium.Scene, time: Cesium.JulianDate) => any;
    onRenderError?: (scene: Cesium.Scene, error: any) => any;
    onTerrainProviderChanged?: (provider: import("vue-cesium/es/utils/types").VcTerrainProvider) => any;
    onMoveEnd?: () => any;
    onMoveStart?: () => any;
    onOnTick?: (clock: Cesium.Clock) => any;
    onCameraClicked?: (viewModel: Cesium.InfoBoxViewModel) => any;
    onCloseClicked?: (viewModel: Cesium.InfoBoxViewModel) => any;
    onLeftClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onLeftDoubleClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onLeftDown?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onLeftUp?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onMiddleClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onMiddleDown?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onMiddleUp?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onMouseMove?: (mouseClickEvent: {
        startPosition: Cesium.Cartesian2;
        endPosition: Cesium.Cartesian2;
    }) => any;
    onPinchStart?: (touch2StartEvent: {
        position1: Cesium.Cartesian2;
        position2: Cesium.Cartesian2;
    }) => any;
    onPinchMove?: (touchPinchMovementEvent: {
        distance: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
        angleAndHeight: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
    }) => any;
    onPinchEnd?: () => any;
    onRightClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onRightDown?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onRightUp?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onWheel?: (delta: number) => any;
    onImageryLayersUpdatedEvent?: () => any;
    onTileLoadProgressEvent?: (length: number) => any;
    onTouchEnd?: (evt: any) => any;
}, {
    navigation: boolean;
    shadows: boolean;
    enableMouseEvent: boolean;
    animation: boolean;
    showCredit: boolean;
    camera: import("vue-cesium/es/utils/types").VcCamera;
    shouldAnimate: boolean;
    baseLayerPicker: boolean;
    fullscreenButton: boolean;
    vrButton: boolean;
    geocoder: boolean | Cesium.GeocoderService[];
    homeButton: boolean;
    infoBox: boolean;
    sceneModePicker: boolean;
    selectionIndicator: boolean;
    timeline: boolean;
    navigationHelpButton: boolean;
    navigationInstructionsInitiallyVisible: boolean;
    scene3DOnly: boolean;
    skyBox: false | Cesium.SkyBox;
    skyAtmosphere: false | Cesium.SkyAtmosphere;
    useDefaultRenderLoop: boolean;
    showRenderLoopErrors: boolean;
    useBrowserRecommendedResolution: boolean;
    automaticallyTrackDataSourceClocks: boolean;
    sceneMode: number;
    globe: false | Cesium.Globe;
    orderIndependentTranslucency: boolean;
    terrainExaggeration: number;
    terrainShadows: number;
    mapMode2D: number;
    projectionPicker: boolean;
    requestRenderMode: boolean;
    maximumRenderTimeChange: number;
    debugShowFramesPerSecond: boolean;
    removeCesiumScript: boolean;
    autoSortImageryLayers: boolean;
    skeleton: import("..").VcSkeletonProps;
    touchHoldArg: string;
}>>;
export default _Viewer;
export declare const VcViewer: SFCWithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<boolean | Cesium.GeocoderService[]>;
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
    clockViewModel: import("vue").PropType<Cesium.ClockViewModel>;
    selectedImageryProviderViewModel: import("vue").PropType<Cesium.ProviderViewModel>;
    imageryProviderViewModels: import("vue").PropType<Cesium.ProviderViewModel[]>;
    selectedTerrainProviderViewModel: import("vue").PropType<Cesium.ProviderViewModel>;
    terrainProviderViewModels: import("vue").PropType<Cesium.ProviderViewModel[]>;
    imageryProvider: import("vue").PropType<Cesium.ImageryProvider>;
    terrainProvider: import("vue").PropType<Cesium.TerrainProvider>;
    skyBox: {
        type: import("vue").PropType<false | Cesium.SkyBox>;
        default: () => any;
    };
    skyAtmosphere: {
        type: import("vue").PropType<false | Cesium.SkyAtmosphere>;
        default: () => any;
    };
    fullscreenElement: {
        type: import("vue").PropType<string | Element>;
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
    contextOptions: import("vue").PropType<import("vue-cesium/es/utils/types").VcContextOptions>;
    sceneMode: {
        type: NumberConstructor;
        default: number;
    };
    mapProjection: import("vue").PropType<Cesium.MapProjection>;
    globe: {
        type: import("vue").PropType<false | Cesium.Globe>;
        default: () => any;
    };
    orderIndependentTranslucency: {
        type: BooleanConstructor;
        default: boolean;
    };
    creditContainer: import("vue").PropType<string | Element>;
    creditViewport: import("vue").PropType<string | Element>;
    dataSources: import("vue").PropType<Cesium.DataSourceCollection>;
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCamera>;
        default: () => import("vue-cesium/es/utils/types").VcCamera;
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
        type: import("vue").PropType<boolean | import("..").VcSkeletonProps>;
        default: () => import("..").VcSkeletonProps;
    };
    touchHoldArg: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    cesiumReady: (payload: typeof Cesium) => boolean;
    viewerWidgetResized: (payload: import("vue-cesium/es/utils/types").ViewerWidgetResizedEvent) => boolean;
    selectedEntityChanged: (entity: Cesium.Entity) => boolean;
    trackedEntityChanged: (entity: Cesium.Entity) => boolean;
    layerAdded: (imageryLayer: Cesium.ImageryLayer, index: number) => boolean;
    layerMoved: (imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number) => boolean;
    layerRemoved: (imageryLayer: Cesium.ImageryLayer, index: number) => boolean;
    layerShownOrHidden: (imageryLayer: Cesium.ImageryLayer, index: number, show: boolean) => boolean;
    dataSourceAdded: (collection: Cesium.DataSourceCollection, dataSource: import("vue-cesium/es/utils/types").VcDatasource) => boolean;
    dataSourceMoved: (dataSource: import("vue-cesium/es/utils/types").VcDatasource, newIndex: number, oldIndex: number) => boolean;
    dataSourceRemoved: (collection: Cesium.DataSourceCollection, dataSource: import("vue-cesium/es/utils/types").VcDatasource) => boolean;
    collectionChanged: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => boolean;
    morphComplete: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => boolean;
    morphStart: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => boolean;
    postRender: (scene: Cesium.Scene, time: Cesium.JulianDate) => boolean;
    preRender: (scene: Cesium.Scene, time: Cesium.JulianDate) => boolean;
    postUpdate: (scene: Cesium.Scene, time: Cesium.JulianDate) => boolean;
    preUpdate: (scene: Cesium.Scene, time: Cesium.JulianDate) => boolean;
    renderError: (scene: Cesium.Scene, error: any) => boolean;
    terrainProviderChanged: (provider: import("vue-cesium/es/utils/types").VcTerrainProvider) => boolean;
    changed: (percent: number) => boolean;
    moveEnd: () => boolean;
    moveStart: () => boolean;
    onStop: (clock: Cesium.Clock) => boolean;
    onTick: (clock: Cesium.Clock) => boolean;
    errorEvent: (tileProviderError: any) => boolean;
    cameraClicked: (viewModel: Cesium.InfoBoxViewModel) => boolean;
    closeClicked: (viewModel: Cesium.InfoBoxViewModel) => boolean;
    leftClick: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    leftDoubleClick: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    leftDown: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    leftUp: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    middleClick: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    middleDown: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    middleUp: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    mouseMove: (mouseClickEvent: {
        startPosition: Cesium.Cartesian2;
        endPosition: Cesium.Cartesian2;
    }) => boolean;
    pinchStart: (touch2StartEvent: {
        position1: Cesium.Cartesian2;
        position2: Cesium.Cartesian2;
    }) => boolean;
    pinchMove: (touchPinchMovementEvent: {
        distance: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
        angleAndHeight: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
    }) => boolean;
    pinchEnd: () => boolean;
    rightClick: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    rightDown: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    rightUp: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => boolean;
    wheel: (delta: number) => boolean;
    imageryLayersUpdatedEvent: () => boolean;
    tileLoadProgressEvent: (length: number) => boolean;
    touchEnd: (evt: any) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<boolean | Cesium.GeocoderService[]>;
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
    clockViewModel: import("vue").PropType<Cesium.ClockViewModel>;
    selectedImageryProviderViewModel: import("vue").PropType<Cesium.ProviderViewModel>;
    imageryProviderViewModels: import("vue").PropType<Cesium.ProviderViewModel[]>;
    selectedTerrainProviderViewModel: import("vue").PropType<Cesium.ProviderViewModel>;
    terrainProviderViewModels: import("vue").PropType<Cesium.ProviderViewModel[]>;
    imageryProvider: import("vue").PropType<Cesium.ImageryProvider>;
    terrainProvider: import("vue").PropType<Cesium.TerrainProvider>;
    skyBox: {
        type: import("vue").PropType<false | Cesium.SkyBox>;
        default: () => any;
    };
    skyAtmosphere: {
        type: import("vue").PropType<false | Cesium.SkyAtmosphere>;
        default: () => any;
    };
    fullscreenElement: {
        type: import("vue").PropType<string | Element>;
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
    contextOptions: import("vue").PropType<import("vue-cesium/es/utils/types").VcContextOptions>;
    sceneMode: {
        type: NumberConstructor;
        default: number;
    };
    mapProjection: import("vue").PropType<Cesium.MapProjection>;
    globe: {
        type: import("vue").PropType<false | Cesium.Globe>;
        default: () => any;
    };
    orderIndependentTranslucency: {
        type: BooleanConstructor;
        default: boolean;
    };
    creditContainer: import("vue").PropType<string | Element>;
    creditViewport: import("vue").PropType<string | Element>;
    dataSources: import("vue").PropType<Cesium.DataSourceCollection>;
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCamera>;
        default: () => import("vue-cesium/es/utils/types").VcCamera;
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
        type: import("vue").PropType<boolean | import("..").VcSkeletonProps>;
        default: () => import("..").VcSkeletonProps;
    };
    touchHoldArg: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onCollectionChanged?: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => any;
    onErrorEvent?: (tileProviderError: any) => any;
    onOnStop?: (clock: Cesium.Clock) => any;
    onChanged?: (percent: number) => any;
    onCesiumReady?: (payload: typeof Cesium) => any;
    onViewerWidgetResized?: (payload: import("vue-cesium/es/utils/types").ViewerWidgetResizedEvent) => any;
    onSelectedEntityChanged?: (entity: Cesium.Entity) => any;
    onTrackedEntityChanged?: (entity: Cesium.Entity) => any;
    onLayerAdded?: (imageryLayer: Cesium.ImageryLayer, index: number) => any;
    onLayerMoved?: (imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number) => any;
    onLayerRemoved?: (imageryLayer: Cesium.ImageryLayer, index: number) => any;
    onLayerShownOrHidden?: (imageryLayer: Cesium.ImageryLayer, index: number, show: boolean) => any;
    onDataSourceAdded?: (collection: Cesium.DataSourceCollection, dataSource: import("vue-cesium/es/utils/types").VcDatasource) => any;
    onDataSourceMoved?: (dataSource: import("vue-cesium/es/utils/types").VcDatasource, newIndex: number, oldIndex: number) => any;
    onDataSourceRemoved?: (collection: Cesium.DataSourceCollection, dataSource: import("vue-cesium/es/utils/types").VcDatasource) => any;
    onMorphComplete?: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => any;
    onMorphStart?: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => any;
    onPostRender?: (scene: Cesium.Scene, time: Cesium.JulianDate) => any;
    onPreRender?: (scene: Cesium.Scene, time: Cesium.JulianDate) => any;
    onPostUpdate?: (scene: Cesium.Scene, time: Cesium.JulianDate) => any;
    onPreUpdate?: (scene: Cesium.Scene, time: Cesium.JulianDate) => any;
    onRenderError?: (scene: Cesium.Scene, error: any) => any;
    onTerrainProviderChanged?: (provider: import("vue-cesium/es/utils/types").VcTerrainProvider) => any;
    onMoveEnd?: () => any;
    onMoveStart?: () => any;
    onOnTick?: (clock: Cesium.Clock) => any;
    onCameraClicked?: (viewModel: Cesium.InfoBoxViewModel) => any;
    onCloseClicked?: (viewModel: Cesium.InfoBoxViewModel) => any;
    onLeftClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onLeftDoubleClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onLeftDown?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onLeftUp?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onMiddleClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onMiddleDown?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onMiddleUp?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onMouseMove?: (mouseClickEvent: {
        startPosition: Cesium.Cartesian2;
        endPosition: Cesium.Cartesian2;
    }) => any;
    onPinchStart?: (touch2StartEvent: {
        position1: Cesium.Cartesian2;
        position2: Cesium.Cartesian2;
    }) => any;
    onPinchMove?: (touchPinchMovementEvent: {
        distance: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
        angleAndHeight: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
    }) => any;
    onPinchEnd?: () => any;
    onRightClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onRightDown?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onRightUp?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => any;
    onWheel?: (delta: number) => any;
    onImageryLayersUpdatedEvent?: () => any;
    onTileLoadProgressEvent?: (length: number) => any;
    onTouchEnd?: (evt: any) => any;
}, {
    navigation: boolean;
    shadows: boolean;
    enableMouseEvent: boolean;
    animation: boolean;
    showCredit: boolean;
    camera: import("vue-cesium/es/utils/types").VcCamera;
    shouldAnimate: boolean;
    baseLayerPicker: boolean;
    fullscreenButton: boolean;
    vrButton: boolean;
    geocoder: boolean | Cesium.GeocoderService[];
    homeButton: boolean;
    infoBox: boolean;
    sceneModePicker: boolean;
    selectionIndicator: boolean;
    timeline: boolean;
    navigationHelpButton: boolean;
    navigationInstructionsInitiallyVisible: boolean;
    scene3DOnly: boolean;
    skyBox: false | Cesium.SkyBox;
    skyAtmosphere: false | Cesium.SkyAtmosphere;
    useDefaultRenderLoop: boolean;
    showRenderLoopErrors: boolean;
    useBrowserRecommendedResolution: boolean;
    automaticallyTrackDataSourceClocks: boolean;
    sceneMode: number;
    globe: false | Cesium.Globe;
    orderIndependentTranslucency: boolean;
    terrainExaggeration: number;
    terrainShadows: number;
    mapMode2D: number;
    projectionPicker: boolean;
    requestRenderMode: boolean;
    maximumRenderTimeChange: number;
    debugShowFramesPerSecond: boolean;
    removeCesiumScript: boolean;
    autoSortImageryLayers: boolean;
    skeleton: import("..").VcSkeletonProps;
    touchHoldArg: string;
}>>;
export * from './src';
