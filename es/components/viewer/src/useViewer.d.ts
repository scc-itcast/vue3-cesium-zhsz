import { VNode } from 'vue';
import type { VcComponentInternalInstance, VcCamera, VcReadyObject, VcComponentPublicInstance, VcTerrainProvider, VcDatasource, ViewerWidgetResizedEvent, VcContextOptions, VcViewerProvider } from 'vue-cesium/es/utils/types';
import { VcSkeletonProps } from '../../ui/skeleton';
export declare const viewerProps: {
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
    contextOptions: import("vue").PropType<VcContextOptions>;
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
        type: import("vue").PropType<VcCamera>;
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
        type: import("vue").PropType<boolean | VcSkeletonProps>;
        default: () => VcSkeletonProps;
    };
    touchHoldArg: {
        type: StringConstructor;
        default: string;
    };
};
export default function (props: VcViewerProps, ctx: any, vcInstance: VcComponentInternalInstance): {
    isReady: import("vue").Ref<boolean>;
    load: () => Promise<boolean | VcReadyObject>;
    unload: () => Promise<boolean>;
    reload: () => Promise<boolean | VcReadyObject>;
    getServices: () => VcViewerProvider;
    viewerRef: import("vue").Ref<HTMLElement>;
    creatingPromise: Promise<VcReadyObject>;
};
export interface VcViewerProps {
    /**
     * If set to false, the Animation widget will not be created.
     * Default value: false
     */
    animation?: boolean;
    /**
     * If set to false, the BaseLayerPicker widget will not be created.
     * Default value: false
     */
    baseLayerPicker?: boolean;
    /**
     * 	If set to false, the FullscreenButton widget will not be created.
     * Default value: false
     */
    fullscreenButton?: boolean;
    /**
     * If set to true, the VRButton widget will be created.
     * Default value: false
     */
    vrButton?: boolean;
    /**
     * If set to false, the Geocoder widget will not be created.
     * Default value: false
     */
    geocoder?: boolean | Array<Cesium.GeocoderService>;
    /**
     * If set to false, the HomeButton widget will not be created.
     * Default value: false
     */
    homeButton?: boolean;
    /**
     * If set to false, the InfoBox widget will not be created.
     * Default value: false
     */
    infoBox?: boolean;
    /**
     * If set to false, the SceneModePicker widget will not be created.
     * Default value: false
     */
    sceneModePicker?: boolean;
    /**
     * If set to false, the SelectionIndicator widget will not be created.
     * Default value: false
     */
    selectionIndicator?: boolean;
    /**
     * If set to false, the Timeline widget will not be created.
     * Default value: false
     */
    timeline?: boolean;
    /**
     * If set to false, the navigation help button will not be created.
     * Default value: false
     */
    navigationHelpButton?: boolean;
    /**
     * True if the navigation instructions should initially be visible, or false if the should not be shown until the user explicitly clicks the button.
     * Default value: false
     */
    navigationInstructionsInitiallyVisible?: boolean;
    /**
     * When true, each geometry instance will only be rendered in 3D to save GPU memory.
     * Default value: false
     */
    scene3DOnly?: boolean;
    /**
     * true if the clock should attempt to advance simulation time by default, false otherwise. This option takes precedence over setting clockViewModel.
     * Default value: false
     */
    shouldAnimate?: boolean;
    /**
     * The clock view model to use to control current time.
     */
    clockViewModel?: Cesium.ClockViewModel;
    /**
     * The view model for the current base imagery layer, if not supplied the first available base layer is used. This value is only valid if `baseLayerPicker` is set to true.
     */
    selectedImageryProviderViewModel?: Cesium.ProviderViewModel;
    /**
     * The array of ProviderViewModels to be selectable from the BaseLayerPicker. This value is only valid if `baseLayerPicker` is set to true.
     */
    imageryProviderViewModels?: Array<Cesium.ProviderViewModel>;
    /**
     * The view model for the current base terrain layer, if not supplied the first available base layer is used. This value is only valid if `baseLayerPicker` is set to true.
     */
    selectedTerrainProviderViewModel?: Cesium.ProviderViewModel;
    /**
     * The array of ProviderViewModels to be selectable from the BaseLayerPicker. This value is only valid if `baseLayerPicker` is set to true.
     */
    terrainProviderViewModels?: Array<Cesium.ProviderViewModel>;
    /**
     * The imagery provider to use. This value is only valid if `baseLayerPicker` is set to false.
     */
    imageryProvider?: Cesium.ImageryProvider;
    /**
     * The terrain provider to use
     */
    terrainProvider?: Cesium.TerrainProvider;
    /**
     * The skybox used to render the stars. When undefined, the default stars are used. If set to false, no skyBox, Sun, or Moon will be added.
     * Default value: undefined
     */
    skyBox?: Cesium.SkyBox | false;
    /**
     * Blue sky, and the glow around the Earth's limb. Set to false to turn it off.
     */
    skyAtmosphere?: Cesium.SkyAtmosphere | false;
    /**
     * The element or id to be placed into fullscreen mode when the full screen button is pressed.
     */
    fullscreenElement?: string | Element;
    /**
     * True if this widget should control the render loop, false otherwise.
     * Default value: true
     */
    useDefaultRenderLoop?: boolean;
    /**
     * The target frame rate when using the default render loop.
     */
    targetFrameRate?: number;
    /**
     * If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs.
     * Default value: true
     */
    showRenderLoopErrors?: boolean;
    /**
     * If true, render at the browser's recommended resolution and ignore window.devicePixelRatio.
     * Default value: true
     */
    useBrowserRecommendedResolution?: boolean;
    /**
     * If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource's clock changes. Set this to false if you want to configure the clock independently.
     * Default value: true
     */
    automaticallyTrackDataSourceClocks?: boolean;
    /**
     * Context and WebGL creation properties corresponding to options passed to Scene.
     */
    contextOptions?: VcContextOptions;
    /**
     * The initial scene mode.
     * Default value: 3
     */
    sceneMode?: Cesium.SceneMode;
    /**
     * The map projection to use in 2D and Columbus View modes.
     */
    mapProjection?: Cesium.MapProjection;
    /**
     * The globe to use in the scene. If set to false, no globe will be added.
     */
    globe?: Cesium.Globe | false;
    /**
     * If true and the configuration supports it, use order independent translucency.
     * Default value: true
     */
    orderIndependentTranslucency?: boolean;
    /**
     * The DOM element or ID that will contain the CreditDisplay. If not specified, the credits are added to the bottom of the widget itself.
     */
    creditContainer?: string | Element;
    /**
     * The DOM element or ID that will contain the credit pop up created by the CreditDisplay. If not specified, it will appear over the widget itself.
     */
    creditViewport?: string | Element;
    /**
     * The collection of data sources visualized by the widget. If this parameter is provided, the instance is assumed to be owned by the caller and will not be destroyed when the viewer is destroyed.
     */
    dataSources?: Cesium.DataSourceCollection;
    /**
     * A scalar used to exaggerate the terrain. Defaults to 1.0 (no exaggeration). A value of 2.0 scales the terrain by 2x. A value of 0.0 makes the terrain completely flat. Note that terrain exaggeration will not modify any other primitive as they are positioned relative to the ellipsoid.
     * Default value: 1.0
     */
    terrainExaggeration?: number;
    /**
     * Determines if shadows are cast by light sources.
     * Default value: false
     */
    shadows?: boolean;
    /**
     * Determines if the terrain casts or receives shadows from light sources.
     * Default value: 3
     */
    terrainShadows?: Cesium.ShadowMode;
    /**
     * Determines if the 2D map is rotatable or can be scrolled infinitely in the horizontal direction.
     * Default value: 1
     */
    mapMode2D?: Cesium.MapMode2D;
    /**
     * If set to true, the ProjectionPicker widget will be created.
     * Default value: false
     */
    projectionPicker?: boolean;
    /**
     * If true, rendering a frame will only occur when needed as determined by changes within the scene. Enabling reduces the CPU/GPU usage of your application and uses less battery on mobile, but requires using Scene#requestRender to render a new frame explicitly in this mode. This will be necessary in many cases after making changes to the scene in other parts of the API. See Improving Performance with Explicit Rendering.
     * Default value: false
     */
    requestRenderMode?: boolean;
    /**
     * If requestRenderMode is true, this value defines the maximum change in simulation time allowed before a render is requested. See Improving Performance with Explicit Rendering.
     * Default value: 0.0
     */
    maximumRenderTimeChange?: number;
    /**
     * Specify the web service address of the CesiumJS library used to initialize the `vc-viewer` component.
     */
    cesiumPath?: string;
    /**
     * Specify the default [Cesium ion](https://cesium.com/ion/) access token.
     */
    accessToken?: string;
    /**
     * Specify the viewer camera
     */
    camera?: VcCamera;
    /**
     * Specify whether to display the default Logo and loading data copyright information.
     * Default value: true
     */
    showCredit?: boolean;
    /**
     * Specify whether to display frames per second and time between frames.This property is for debugging only; it is not for production use.
     * Default value: false
     */
    debugShowFramesPerSecond?: boolean;
    /**
     * Specify whether to display navigation control. for supermap webgl iclient only.
     * Default value: false
     */
    navigation?: boolean;
    /**
     * The time zone code used for timeline date formatting. By default, it is formatted as local time. If you want to display it as UTC universal time, set `UTCoffset` to `new Date().getTimezoneOffset()`
     */
    TZCode?: string;
    /**
     * The time difference (minutes) between local time and UTC time.
     */
    UTCOffset?: number;
    /**
     * Specify whether to remove the CesiumJS script tag when `vc-viewer` is destroyed.
     * Default value: true
     */
    removeCesiumScript?: boolean;
    /**
     * Specify whether to automatically sort imageLayers according to the layer's `sortOrder` property when adding imagelayer.
     * Default value: true
     */
    autoSortImageryLayers?: boolean;
    /**
     * Specifiy whether to trigger mouse events.
     * Default value: true
     */
    enableMouseEvent?: boolean;
    /**
     * Specify whether to show the skeleton background during `vc-viewer` initialization.
     * Default value: true
     */
    skeleton?: boolean | VcSkeletonProps;
    /**
     * x:y:z, where x is the amount of time to wait (in milliseconds), y is the touch event sensitivity (in pixels) and z is the mouse event sensitivity (in pixels).
     * Default value: 1000
     */
    touchHoldArg?: string;
    /**
     * Triggers before the VcViewer is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcViewer is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcViewer is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when CesiumJS is successfully loaded.
     */
    onCesiumReady?: (payload: typeof Cesium) => void;
    /**
     * Triggers when a component changes on vc-viewer.
     */
    onViewerWidgetResized?: (payload: ViewerWidgetResizedEvent) => void;
    /**
     * Triggers when the selected entity changes.
     */
    onSelectedEntityChanged?: (entity: Cesium.Entity) => void;
    /**
     * Triggers when the tracked entity changes.
     */
    onTrackedEntityChanged?: (entity: Cesium.Entity) => void;
    /**
     * Triggers when a layer is added to the collection. Event handlers are passed the layer that was added and the index at which it was added.
     */
    onLayerAdded?: (imageryLayer: Cesium.ImageryLayer, index: number) => void;
    /**
     * Triggers when a layer changes position in the collection. Event handlers are passed the layer that was moved, its new index after the move, and its old index prior to the move.
     */
    onLayerMoved?: (imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number) => void;
    /**
     * Triggers when a layer is removed from the collection. Event handlers are passed the layer that was removed and the index from which it was removed.
     */
    onLayerRemoved?: (imageryLayer: Cesium.ImageryLayer, index: number) => void;
    /**
     * Triggers when a layer is shown or hidden by setting the ImageryLayer#show property. Event handlers are passed a reference to this layer, the index of the layer in the collection, and a flag that is true if the layer is now shown or false if it is now hidden.
     */
    onLayerShownOrHidden?: (imageryLayer: Cesium.ImageryLayer, index: number, show: boolean) => void;
    /**
     * Triggers when a data source is added to the collection. Event handlers are passed the data source that was added.
     */
    onDataSourceAdded?: (collection: Cesium.DataSourceCollection, dataSource: VcDatasource) => void;
    /**
     * Triggers when a data source changes position in the collection. Event handlers are passed the data source that was moved, its new index after the move, and its old index prior to the move.
     */
    onDataSourceMoved?: (dataSource: VcDatasource, newIndex: number, oldIndex: number) => void;
    /**
     * Triggers when a data source is removed from the collection. Event handlers are passed the data source that was removed.
     */
    onDataSourceRemoved?: (collection: Cesium.DataSourceCollection, dataSource: VcDatasource) => void;
    /**
     * Triggers when when entities are added or removed from the collection. The generated event is a EntityCollection.collectionChangedEventCallback.
     */
    onCollectionChanged?: (collection: Cesium.EntityCollection, addedArray: Array<Cesium.Entity>, removedArray: Array<Cesium.Entity>, changedArray: Array<Cesium.Entity>) => void;
    /**
     * Triggers at the completion of a scene transition.
     */
    onMorphComplete?: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => void;
    /**
     * Triggers at the beginning of a scene transition.
     */
    onMorphStart?: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => void;
    /**
     * Triggers immediately after the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.
     */
    onPostRender?: (scene: Cesium.Scene, time: Cesium.JulianDate) => void;
    /**
     * Triggers after the scene is updated and immediately before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.
     */
    onPreRender?: (scene: Cesium.Scene, time: Cesium.JulianDate) => void;
    /**
     * Triggers immediately after the scene is updated and before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.
     */
    onPostUpdate?: (scene: Cesium.Scene, time: Cesium.JulianDate) => void;
    /**
     * Triggers before the scene is updated or rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.
     */
    onPreUpdate?: (scene: Cesium.Scene, time: Cesium.JulianDate) => void;
    /**
     * Triggers when an error is thrown inside the render function. The Scene instance and the thrown error are the only two parameters passed to the event handler. By default, errors are not rethrown after this event is raised, but that can be changed by setting the rethrowRenderErrors property.
     */
    onRenderError?: (scene: Cesium.Scene, error: any) => void;
    /**
     * Triggers when the terrain provider is changed.
     */
    onTerrainProviderChanged?: (provider: VcTerrainProvider) => void;
    /**
     * Triggers when the camera has changed by percentageChanged.
     */
    onChanged?: (percent: number) => void;
    /**
     * Triggers when the camera has stopped moving.
     */
    onMoveEnd?: () => void;
    /**
     * Triggers when the camera starts to move.
     */
    onMoveStart?: () => void;
    /**
     * Triggers when Clock#stopTime is reached.
     */
    onOnStop?: (clock: Cesium.Clock) => void;
    /**
     * Triggers when Clock#tick is called.
     */
    onOnTick?: (clock: Cesium.Clock) => void;
    /**
     * Triggers when the terrain provider encounters an asynchronous error. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.
     */
    onErrorEvent?: (tileProviderError: any) => void;
    /**
     * Triggers when the user clicks the camera icon.
     */
    onCameraClicked?: (viewModel: Cesium.InfoBoxViewModel) => void;
    /**
     * Triggers when the user closes the info box.
     */
    onCloseClicked?: (viewModel: Cesium.InfoBoxViewModel) => void;
    /**
     * Triggers when the mouse left button clicked.
     */
    onLeftClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggered when the mouse left button double clicked.
     */
    onLeftDoubleClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggered when the mouse left button down.
     */
    onLeftDown?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggered when the mouse left button up.
     */
    onLeftUp?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggers when the mouse middle button clicked.
     */
    onMiddleClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggers when the mouse middle button down.
     */
    onMiddleDown?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggers when the mouse middle button up.
     */
    onMiddleUp?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggers when the mouse move.
     */
    onMouseMove?: (mouseClickEvent: {
        startPosition: Cesium.Cartesian2;
        endPosition: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggers when the start of a two-finger on a touch surface.
     */
    onPinchStart?: (touch2StartEvent: {
        position1: Cesium.Cartesian2;
        position2: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggers when a change of a two-finger on a touch surface.
     */
    onPinchMove?: (touchPinchMovementEvent: {
        distance: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
        angleAndHeight: {
            startPosition: Cesium.Cartesian2;
            endPosition: Cesium.Cartesian2;
        };
    }) => void;
    /**
     * Triggers when end of a two-finger on a touch surface.
     */
    onPinchEnd?: () => void;
    /**
     * Triggers when the mouse right click.
     */
    onRightClick?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggers when the mouse right button down.
     */
    onRightDown?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggers when the mouse right button up.
     */
    onRightUp?: (mouseClickEvent: {
        position: Cesium.Cartesian2;
    }) => void;
    /**
     * Triggers when the mouse wheel.
     */
    onWheel?: (delta: number) => void;
    /**
     * Triggers when an imagery layer is added, shown, hidden, moved, or removed.
     */
    onImageryLayersUpdatedEvent?: () => void;
    /**
     * 	Triggers when the length of the tile load queue has changed since the last render frame. When the load queue is empty, all terrain and imagery for the current view have been loaded. The event passes the new length of the tile load queue.
     */
    onTileLoadProgressEvent?: (length: number) => void;
    onTouchEnd?: (evt: any) => void;
}
export interface VcViewerSlots {
    /**
     * Default slot content of the component
     */
    default: () => VNode[];
}
export declare type VcViewerRef = VcComponentPublicInstance<VcViewerProps>;
