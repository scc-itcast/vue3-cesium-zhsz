'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var mitt = require('mitt');
require('../../../composables/index.js');
var defaultProps = require('./defaultProps.js');
var mergeDescriptors = require('../../../utils/merge-descriptors.js');
var util = require('../../../utils/util.js');
var vm = require('../../../utils/private/vm.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var useLog = require('../../../composables/private/use-log.js');
var loadUtil = require('./loadUtil.js');
var index = require('../../../composables/use-global-config/index.js');
var index$1 = require('../../../composables/use-events/index.js');
var index$2 = require('../../../composables/use-locale/index.js');
var shared = require('@vue/shared');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var mitt__default = /*#__PURE__*/_interopDefaultLegacy(mitt);

const viewerProps = defaultProps["default"];
function useViewer(props, ctx, vcInstance) {
  let createResolve, reject;
  const creatingPromise = new Promise((_resolve, _reject) => {
    createResolve = _resolve;
    reject = _reject;
  });
  const viewerRef = vue.ref(null);
  const isReady = vue.ref(false);
  const vcMitt = mitt__default["default"]();
  const { emit } = ctx;
  const globalConfig = index.useGlobalConfig();
  const logger = useLog["default"](vcInstance);
  vcInstance.mounted = false;
  vcInstance.vcMitt = vcMitt;
  vcInstance.cesiumClass = "Viewer";
  vcInstance.children = [];
  const eventsState = index$1["default"](props, vcInstance, logger);
  const layout = vue.reactive({
    toolbarContainerRC: void 0,
    timelineContainerRC: void 0,
    animationContainerRC: void 0,
    bottomContainerRC: void 0
  });
  let loadLibs = [];
  logger.debug("viewer creating");
  const { t } = index$2.useLocale();
  vue.watch(() => props.selectionIndicator, (val) => {
    const { viewer, viewerElement } = vcInstance;
    const { defined, SelectionIndicator } = Cesium;
    let selectionIndicatorContainer;
    if (defined(viewer.selectionIndicator) && !viewer.selectionIndicator.isDestroyed() && !val) {
      selectionIndicatorContainer = viewer.selectionIndicator.container;
      viewerElement == null ? void 0 : viewerElement.removeChild(selectionIndicatorContainer);
      viewer.selectionIndicator.destroy();
      viewer._selectionIndicator = void 0;
    } else if (!defined(viewer.selectionIndicator) || viewer.selectionIndicator.isDestroyed()) {
      selectionIndicatorContainer = document.createElement("div");
      selectionIndicatorContainer.className = "cesium-viewer-selectionIndicatorContainer";
      viewerElement == null ? void 0 : viewerElement.appendChild(selectionIndicatorContainer);
      const selectionIndicator = new SelectionIndicator(selectionIndicatorContainer, viewer.scene);
      viewer._selectionIndicator = selectionIndicator;
    }
    viewer.viewerWidgetResized.raiseEvent({
      type: "selectionIndicator",
      status: val ? "added" : "removed",
      target: selectionIndicatorContainer
    });
  });
  vue.watch(() => props.infoBox, (val) => {
    var _a, _b;
    const { viewer, viewerElement } = vcInstance;
    const { defined, InfoBox } = Cesium;
    const events = ["cameraClicked", "closeClicked"];
    let infoBoxContainer;
    if (defined(viewer.infoBox) && !viewer.infoBox.isDestroyed() && !val) {
      const infoBoxViewModel = viewer.infoBox.viewModel;
      infoBoxViewModel && eventsState.bindEvents(infoBoxViewModel, events, false);
      infoBoxContainer = viewer.infoBox.container;
      viewerElement == null ? void 0 : viewerElement.removeChild(infoBoxContainer);
      viewer.infoBox.destroy();
      viewer._infoBox = void 0;
    } else if (!defined(viewer.infoBox) || viewer.infoBox.isDestroyed()) {
      infoBoxContainer = document.createElement("div");
      infoBoxContainer.className = "cesium-viewer-infoBoxContainer";
      viewerElement == null ? void 0 : viewerElement.appendChild(infoBoxContainer);
      const infoBox = new InfoBox(infoBoxContainer);
      const infoBoxViewModel = infoBox.viewModel;
      viewer._onInfoBoxCameraClicked && ((_a = viewer._eventHelper) == null ? void 0 : _a.add(infoBoxViewModel.cameraClicked, viewer._onInfoBoxCameraClicked, viewer));
      viewer._onInfoBoxClockClicked && ((_b = viewer._eventHelper) == null ? void 0 : _b.add(infoBoxViewModel.closeClicked, viewer._onInfoBoxClockClicked, viewer));
      infoBoxViewModel && eventsState.bindEvents(infoBoxViewModel, events, true);
      viewer._infoBox = infoBox;
    }
    viewer.forceResize();
    viewer.viewerWidgetResized.raiseEvent({
      type: "infoBox",
      status: val ? "added" : "removed",
      target: infoBoxContainer
    });
  });
  vue.watch(() => props.geocoder, (val) => {
    var _a;
    const { viewer } = vcInstance;
    const toolbar = viewer._toolbar;
    const { defined, Geocoder } = Cesium;
    let geocoderContainer;
    if (defined(viewer.geocoder) && !viewer.geocoder.isDestroyed() && !val) {
      geocoderContainer = viewer.geocoder.container;
      toolbar == null ? void 0 : toolbar.removeChild(geocoderContainer);
      viewer.geocoder.destroy();
      viewer._geocoder = void 0;
    } else if (!defined(viewer.geocoder) || viewer.geocoder.isDestroyed()) {
      geocoderContainer = document.createElement("div");
      geocoderContainer.className = "cesium-viewer-geocoderContainer";
      toolbar == null ? void 0 : toolbar.appendChild(geocoderContainer);
      const geocoder = new Geocoder({
        container: geocoderContainer,
        geocoderServices: defined(props.geocoder) && typeof props.geocoder !== "boolean" ? Array.isArray(props.geocoder) ? props.geocoder : [props.geocoder] : void 0,
        scene: viewer.scene
      });
      viewer._clearObjects && ((_a = viewer._eventHelper) == null ? void 0 : _a.add(geocoder.viewModel.search.beforeExecute, viewer._clearObjects, viewer));
      viewer._geocoder = geocoder;
      resizeToolbar(toolbar, geocoderContainer);
    }
    viewer.viewerWidgetResized.raiseEvent({
      type: "geocoder",
      status: val ? "added" : "removed",
      target: geocoderContainer
    });
  });
  vue.watch(() => props.homeButton, (val) => {
    var _a, _b;
    const { viewer } = vcInstance;
    const toolbar = viewer._toolbar;
    const { defined, HomeButton } = Cesium;
    if (defined(viewer.homeButton) && !viewer.homeButton.isDestroyed() && !val) {
      viewer.homeButton.destroy();
      viewer._homeButton = void 0;
    } else if (!defined(viewer.homeButton) || viewer.homeButton.isDestroyed()) {
      const homeButton = new HomeButton(toolbar, viewer.scene);
      if (defined(viewer.geocoder)) {
        (_a = viewer._eventHelper) == null ? void 0 : _a.add(homeButton.viewModel.command.afterExecute, function() {
          const viewModel = viewer.geocoder.viewModel;
          viewModel.searchText = "";
          viewModel.isSearchInProgress && viewModel.search();
        });
      }
      viewer._clearTrackedObject && ((_b = viewer._eventHelper) == null ? void 0 : _b.add(homeButton.viewModel.command.beforeExecute, viewer._clearTrackedObject, viewer));
      viewer._homeButton = homeButton;
      resizeToolbar(toolbar, homeButton);
    }
    viewer.viewerWidgetResized.raiseEvent({
      type: "homeButton",
      status: val ? "added" : "removed",
      target: toolbar
    });
  });
  vue.watch(() => props.sceneModePicker, (val) => {
    const { viewer } = vcInstance;
    const toolbar = viewer._toolbar;
    const { defined, DeveloperError, SceneModePicker } = Cesium;
    if (defined(viewer.sceneModePicker) && !viewer.sceneModePicker.isDestroyed() && !val) {
      viewer.sceneModePicker.destroy();
      viewer._sceneModePicker = void 0;
    } else if (!defined(viewer.sceneModePicker) || viewer.sceneModePicker.isDestroyed()) {
      if (props.sceneModePicker && props.scene3DOnly) {
        throw new DeveloperError("options.sceneModePicker is not available when options.scene3DOnly is set to true.");
      }
      if (!props.scene3DOnly && props.sceneModePicker) {
        const sceneModePicker = new SceneModePicker(toolbar, viewer.scene);
        viewer._sceneModePicker = sceneModePicker;
        resizeToolbar(toolbar, sceneModePicker);
      }
    }
    viewer.viewerWidgetResized.raiseEvent({
      type: "sceneModePicker",
      status: val ? "added" : "removed",
      target: toolbar
    });
  });
  vue.watch(() => props.projectionPicker, (val) => {
    const { viewer } = vcInstance;
    const toolbar = viewer._toolbar;
    const { defined, ProjectionPicker } = Cesium;
    if (defined(viewer.projectionPicker) && !viewer.projectionPicker.isDestroyed() && !val) {
      viewer.projectionPicker.destroy();
      viewer._projectionPicker = void 0;
    } else if (!defined(viewer.projectionPicker) || viewer.projectionPicker.isDestroyed()) {
      const projectionPicker = new ProjectionPicker(toolbar, viewer.scene);
      viewer._projectionPicker = projectionPicker;
      resizeToolbar(toolbar, projectionPicker);
    }
    viewer.viewerWidgetResized.raiseEvent({
      type: "projectionPicker",
      status: val ? "added" : "removed",
      target: toolbar
    });
  });
  vue.watch(() => props.baseLayerPicker, (val) => {
    const { viewer } = vcInstance;
    const toolbar = viewer._toolbar;
    const {
      defined,
      buildModuleUrl,
      DeveloperError,
      defaultValue,
      createDefaultImageryProviderViewModels,
      createDefaultTerrainProviderViewModels,
      BaseLayerPicker
    } = Cesium;
    if (defined(viewer.baseLayerPicker) && !viewer.baseLayerPicker.isDestroyed() && !val) {
      viewer.baseLayerPicker.destroy();
      viewer._baseLayerPicker = void 0;
      viewer.imageryLayers.remove(viewer.imageryLayers.get(viewer.imageryLayers.length - 1));
      const url = buildModuleUrl("Assets/Textures/NaturalEarthII");
      const baseLayer = viewer.imageryLayers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({
        url
      }));
      viewer.imageryLayers.lowerToBottom(baseLayer);
    } else if (!defined(viewer.baseLayerPicker) || viewer.baseLayerPicker.isDestroyed()) {
      const createBaseLayerPicker = (!Cesium.defined(viewer.scene.globe) || props.globe !== false) && (!Cesium.defined(viewer.baseLayerPicker) || props.baseLayerPicker !== false);
      if (createBaseLayerPicker && defined(props.imageryProvider)) {
        throw new DeveloperError(`options.imageryProvider is not available when using the BaseLayerPicker widget.
        Either specify options.selectedImageryProviderViewModel instead or set options.baseLayerPicker to false.`);
      }
      if (!createBaseLayerPicker && defined(props.selectedImageryProviderViewModel)) {
        throw new DeveloperError(`options.selectedImageryProviderViewModel is not available when not using the BaseLayerPicker widget.
        Either specify options.imageryProvider instead or set options.baseLayerPicker to true.`);
      }
      if (createBaseLayerPicker && defined(props.terrainProvider)) {
        throw new DeveloperError(`options.terrainProvider is not available when using the BaseLayerPicker widget.
        Either specify options.selectedTerrainProviderViewModel instead or set options.baseLayerPicker to false.`);
      }
      if (!createBaseLayerPicker && defined(props.selectedTerrainProviderViewModel)) {
        throw new DeveloperError(`options.selectedTerrainProviderViewModel is not available when not using the BaseLayerPicker widget.
        Either specify options.terrainProvider instead or set options.baseLayerPicker to true.`);
      }
      if (createBaseLayerPicker) {
        const imageryProviderViewModels = defaultValue(props.imageryProviderViewModels, createDefaultImageryProviderViewModels());
        const terrainProviderViewModels = defaultValue(props.terrainProviderViewModels, createDefaultTerrainProviderViewModels());
        const baseLayerPicker = new BaseLayerPicker(toolbar, {
          globe: viewer.scene.globe,
          imageryProviderViewModels,
          selectedImageryProviderViewModel: imageryProviderViewModels[0],
          terrainProviderViewModels,
          selectedTerrainProviderViewModel: terrainProviderViewModels[0]
        });
        const elements = toolbar == null ? void 0 : toolbar.getElementsByClassName("cesium-baseLayerPicker-dropDown");
        const baseLayerPickerDropDown = elements == null ? void 0 : elements[0];
        viewer._baseLayerPickerDropDown = baseLayerPickerDropDown;
        viewer._baseLayerPicker = baseLayerPicker;
        viewer.imageryLayers.raiseToTop(viewer.imageryLayers.get(0));
        resizeToolbar(toolbar, baseLayerPicker);
      }
    }
    viewer.viewerWidgetResized.raiseEvent({
      type: "baseLayerPicker",
      status: val ? "added" : "removed",
      target: toolbar
    });
  });
  vue.watch(() => props.navigationHelpButton, (val) => {
    const { viewer } = vcInstance;
    const toolbar = viewer._toolbar;
    const { defined, defaultValue, NavigationHelpButton } = Cesium;
    if (defined(viewer.navigationHelpButton) && !viewer.navigationHelpButton.isDestroyed() && !val) {
      viewer.navigationHelpButton.destroy();
      viewer._navigationHelpButton = void 0;
    } else if (!defined(viewer.navigationHelpButton) || viewer.navigationHelpButton.isDestroyed()) {
      let showNavHelp = true;
      try {
        if (defined(window.localStorage)) {
          const hasSeenNavHelp = window.localStorage.getItem("cesium-hasSeenNavHelp");
          if (defined(hasSeenNavHelp) && Boolean(hasSeenNavHelp)) {
            showNavHelp = false;
          } else {
            window.localStorage.setItem("cesium-hasSeenNavHelp", "true");
          }
        }
      } catch (e) {
      }
      const navigationHelpButton = new NavigationHelpButton({
        container: toolbar,
        instructionsInitiallyVisible: defaultValue(props.navigationInstructionsInitiallyVisible, showNavHelp)
      });
      viewer._navigationHelpButton = navigationHelpButton;
      resizeToolbar(toolbar, navigationHelpButton);
    }
    viewer.viewerWidgetResized.raiseEvent({
      type: "navigationHelpButton",
      status: val ? "added" : "removed",
      target: toolbar
    });
  });
  vue.watch(() => props.animation, (val) => {
    const { viewer, viewerElement } = vcInstance;
    const { defined, Animation, AnimationViewModel } = Cesium;
    let animationContainer;
    if (defined(viewer.animation) && !viewer.animation.isDestroyed() && !val) {
      animationContainer = viewer.animation.container;
      viewerElement == null ? void 0 : viewerElement.removeChild(animationContainer);
      viewer.animation.destroy();
      viewer._animation = void 0;
    } else if (!defined(viewer.animation) || viewer.animation.isDestroyed()) {
      animationContainer = document.createElement("div");
      animationContainer.className = "cesium-viewer-animationContainer";
      viewerElement == null ? void 0 : viewerElement.appendChild(animationContainer);
      const animation = new Animation(animationContainer, new AnimationViewModel(viewer.clockViewModel));
      animation.viewModel.dateFormatter = localeDateTimeFormatter;
      animation.viewModel.timeFormatter = localeTimeFormatter;
      viewer._animation = animation;
    }
    viewer.forceResize();
    viewer.viewerWidgetResized.raiseEvent({
      type: "animation",
      status: val ? "added" : "removed",
      target: animationContainer
    });
  });
  vue.watch(() => props.timeline, (val) => {
    var _a;
    const { viewer, viewerElement } = vcInstance;
    const { defined, Timeline } = Cesium;
    let timelineContainer;
    if (defined(viewer.timeline) && !viewer.timeline.isDestroyed() && !val) {
      timelineContainer = viewer.timeline.container;
      viewerElement == null ? void 0 : viewerElement.removeChild(timelineContainer);
      viewer.timeline.destroy();
      viewer._timeline = void 0;
    } else if (!defined(viewer.timeline) || viewer.timeline.isDestroyed()) {
      timelineContainer = document.createElement("div");
      timelineContainer.className = "cesium-viewer-timelineContainer";
      viewerElement == null ? void 0 : viewerElement.appendChild(timelineContainer);
      const timeline = new Timeline(timelineContainer, viewer.clock);
      timeline.makeLabel = (time) => {
        return localeDateTimeFormatter(time);
      };
      (_a = timeline.addEventListener) == null ? void 0 : _a.call(timeline, "settime", onTimelineScrubfunction, false);
      timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime);
      viewer._timeline = timeline;
    }
    viewer.forceResize();
    viewer.viewerWidgetResized.raiseEvent({
      type: "timeline",
      status: val ? "added" : "removed",
      target: timelineContainer
    });
  });
  vue.watch(() => props.fullscreenButton, (val) => {
    const { viewer, viewerElement } = vcInstance;
    const { defined, FullscreenButton } = Cesium;
    let fullscreenContainer;
    if (defined(viewer.fullscreenButton) && !viewer.fullscreenButton.isDestroyed() && !val) {
      fullscreenContainer = viewer.fullscreenButton.container;
      viewerElement == null ? void 0 : viewerElement.removeChild(fullscreenContainer);
      viewer.fullscreenButton.destroy();
      viewer._fullscreenButton = void 0;
    } else if (!defined(viewer.fullscreenButton) || viewer.fullscreenButton.isDestroyed()) {
      fullscreenContainer = document.createElement("div");
      fullscreenContainer.className = "cesium-viewer-fullscreenContainer";
      viewerElement == null ? void 0 : viewerElement.appendChild(fullscreenContainer);
      const fullscreenButton = new FullscreenButton(fullscreenContainer, viewerElement);
      viewer._fullscreenButton = fullscreenButton;
    }
    viewer.forceResize();
    viewer.viewerWidgetResized.raiseEvent({
      type: "fullscreenButton",
      status: val ? "added" : "removed",
      target: fullscreenContainer
    });
  });
  vue.watch(() => props.fullscreenElement, (val) => {
    const { viewer } = vcInstance;
    const { defined } = Cesium;
    if (!defined(viewer.fullscreenButton)) {
      return;
    }
    if (defined(val)) {
      viewer.fullscreenButton.viewModel.fullscreenElement = val;
    }
  });
  vue.watch(() => props.vrButton, (val) => {
    const { viewer, viewerElement } = vcInstance;
    const { defined, VRButton } = Cesium;
    let vrContainer;
    if (defined(viewer.vrButton) && !viewer.vrButton.isDestroyed() && !val) {
      vrContainer = viewer.vrButton.container;
      viewerElement == null ? void 0 : viewerElement.removeChild(vrContainer);
      viewer.vrButton.destroy();
      viewer._vrButton = void 0;
    } else if (!defined(viewer.vrButton) || viewer.vrButton.isDestroyed()) {
      vrContainer = document.createElement("div");
      vrContainer.className = "cesium-viewer-vrContainer";
      viewerElement == null ? void 0 : viewerElement.appendChild(vrContainer);
      const vrButton = new VRButton(vrContainer, viewer.scene, viewerElement);
      const viewModelCommand = vrButton.viewModel.command;
      vrButton.viewModel._command = function(VRButtonViewModel) {
        viewModelCommand();
        enableVRUI(viewer, VRButtonViewModel.isVRMode);
      };
      viewer._vrButton = vrButton;
    }
    viewer.forceResize();
    viewer.viewerWidgetResized.raiseEvent({
      type: "fullscreenButton",
      status: val ? "added" : "removed",
      target: vrContainer
    });
  });
  vue.watch(() => props.useDefaultRenderLoop, (val) => {
    vcInstance.viewer.useDefaultRenderLoop = val;
  });
  vue.watch(() => props.sceneMode, (val) => {
    const { SceneMode } = Cesium;
    if (SceneMode.COLUMBUS_VIEW === val || SceneMode.MORPHING === val || SceneMode.SCENE2D === val || SceneMode.SCENE3D === val) {
      vcInstance.viewer.scene.mode = val;
    }
  });
  vue.watch(() => props.shouldAnimate, (val) => {
    vcInstance.viewer.clock.shouldAnimate = val;
  });
  vue.watch(() => props.terrainExaggeration, (val) => {
    vcInstance.viewer._terrainExaggeration = val;
  });
  vue.watch(() => props.shadows, (val) => {
    vcInstance.viewer.scene.shadowMap.enabled = val;
  });
  vue.watch(() => props.terrainProvider, (val) => {
    val && (vcInstance.viewer.terrainProvider = val);
  });
  vue.watch(() => props.camera, (val) => {
    cesiumHelpers.setViewerCamera(vcInstance.viewer, val);
  }, { deep: true });
  vue.watch(() => props.imageryProvider, (val, oldVal) => {
    const { viewer } = vcInstance;
    const { defined } = Cesium;
    if (defined(val)) {
      for (let i = 0; i < viewer.imageryLayers.length; i++) {
        viewer.imageryLayers.get(i).imageryProvider === oldVal && viewer.imageryLayers.remove(viewer.imageryLayers[i]);
      }
      val && viewer.imageryLayers.addImageryProvider(val);
    }
  });
  vue.watch(() => props.showCredit, (val) => {
    const { viewer } = vcInstance;
    viewer.cesiumWidget.creditContainer.style.display = val ? "inline" : "none";
    viewer.viewerWidgetResized.raiseEvent({
      type: "credit",
      status: val ? "added" : "removed",
      target: viewer.cesiumWidget.creditContainer
    });
  });
  vue.watch(() => props.debugShowFramesPerSecond, (val) => {
    const { viewer } = vcInstance;
    viewer.scene.debugShowFramesPerSecond = val;
  });
  const beforeLoad = async function() {
    logger.debug("beforeLoad - viewer");
    const listener = vm.getInstanceListener(vcInstance, "beforeLoad");
    listener && emit("beforeLoad", vcInstance);
    globalConfig.value.__scriptPromise = globalConfig.value.__scriptPromise || getCesiumScript();
    await globalConfig.value.__scriptPromise;
  };
  const load = async function() {
    var _a, _b, _c;
    logger.debug("loading-viewer");
    if (vcInstance.mounted) {
      return false;
    }
    await beforeLoad();
    if (typeof Cesium === "undefined") {
      return false;
    }
    const { Ion, buildModuleUrl, TileMapServiceImageryProvider, Viewer, defined, Math: CesiumMath, Event } = Cesium;
    const accessToken = props.accessToken ? props.accessToken : globalConfig.value.accessToken;
    Ion.defaultAccessToken = accessToken;
    const {
      animation,
      baseLayerPicker,
      fullscreenButton,
      vrButton,
      geocoder,
      homeButton,
      infoBox,
      sceneModePicker,
      selectionIndicator,
      timeline,
      navigationHelpButton,
      navigationInstructionsInitiallyVisible,
      scene3DOnly,
      shouldAnimate,
      clockViewModel,
      selectedImageryProviderViewModel,
      imageryProviderViewModels,
      selectedTerrainProviderViewModel,
      terrainProviderViewModels,
      imageryProvider,
      terrainProvider,
      skyBox,
      skyAtmosphere,
      fullscreenElement,
      useDefaultRenderLoop,
      targetFrameRate,
      showRenderLoopErrors,
      useBrowserRecommendedResolution,
      automaticallyTrackDataSourceClocks,
      contextOptions,
      sceneMode,
      mapProjection,
      globe,
      orderIndependentTranslucency,
      creditContainer,
      creditViewport,
      dataSources,
      terrainExaggeration,
      shadows,
      terrainShadows,
      mapMode2D,
      projectionPicker,
      requestRenderMode,
      maximumRenderTimeChange,
      camera,
      navigation
    } = props;
    const url = buildModuleUrl("Assets/Textures/NaturalEarthII");
    let options = {
      animation,
      baseLayerPicker,
      fullscreenButton,
      vrButton,
      geocoder,
      homeButton,
      infoBox,
      sceneModePicker,
      selectionIndicator,
      timeline,
      navigationHelpButton,
      navigationInstructionsInitiallyVisible,
      scene3DOnly,
      shouldAnimate,
      clockViewModel,
      selectedImageryProviderViewModel,
      imageryProviderViewModels,
      selectedTerrainProviderViewModel,
      terrainProviderViewModels,
      imageryProvider: util.isEmptyObj(imageryProvider) ? new TileMapServiceImageryProvider({
        url
      }) : imageryProvider,
      terrainProvider,
      skyBox,
      skyAtmosphere,
      fullscreenElement: util.isEmptyObj(fullscreenElement) ? vm.$(viewerRef) : fullscreenElement,
      useDefaultRenderLoop,
      targetFrameRate,
      showRenderLoopErrors,
      useBrowserRecommendedResolution,
      automaticallyTrackDataSourceClocks,
      contextOptions,
      sceneMode,
      mapProjection,
      globe,
      orderIndependentTranslucency,
      creditContainer,
      creditViewport,
      dataSources,
      terrainExaggeration,
      shadows,
      terrainShadows,
      mapMode2D,
      projectionPicker,
      requestRenderMode,
      maximumRenderTimeChange,
      navigation
    };
    options = util.removeEmpty(options);
    if (Cesium.VERSION >= "1.83") {
      delete options.terrainExaggeration;
    }
    let viewer;
    if (globalThis.mars3d) {
      vcInstance.map = new mars3d.Map(vm.$(viewerRef).id, options);
      viewer = (_a = vcInstance.map) == null ? void 0 : _a._viewer;
    } else if (globalThis.DC) {
      vcInstance.dcViewer = new DC.Viewer(vm.$(viewerRef).id, options);
      viewer = (_b = vcInstance.dcViewer) == null ? void 0 : _b.delegate;
    } else if (globalThis.XE) {
      vcInstance.earth = new globalThis.XE.Earth(vm.$(viewerRef), options);
      viewer = (_c = vcInstance.earth) == null ? void 0 : _c.czm.viewer;
    } else {
      viewer = new Viewer(vm.$(viewerRef), options);
    }
    vcInstance.Cesium = Cesium;
    vcInstance.viewer = viewer;
    vcInstance.viewerElement = viewer._element;
    vcInstance.mounted = true;
    if (Cesium.VERSION >= "1.83") {
      viewer.scene.globe.terrainExaggeration = terrainExaggeration;
    }
    defined(camera) && cesiumHelpers.setViewerCamera(viewer, camera);
    const listener = vm.getInstanceListener(vcInstance, "update:camera");
    listener && viewer.camera.changed.addEventListener(() => {
      const cartographic = viewer.camera.positionCartographic;
      let cameraNew;
      if (shared.hasOwn(camera.position, "lng")) {
        cameraNew = {
          position: {
            lng: CesiumMath.toDegrees(cartographic.longitude),
            lat: CesiumMath.toDegrees(cartographic.latitude),
            height: cartographic.height
          },
          heading: CesiumMath.toDegrees(viewer.camera.heading || 360),
          pitch: CesiumMath.toDegrees(viewer.camera.pitch || -90),
          roll: CesiumMath.toDegrees(viewer.camera.roll || 0)
        };
      } else {
        cameraNew = {
          position: {
            x: viewer.camera.position.x,
            y: viewer.camera.position.y,
            z: viewer.camera.position.z
          },
          heading: viewer.camera.heading || 2 * Math.PI,
          pitch: viewer.camera.pitch || -Math.PI / 2,
          roll: viewer.camera.roll || 0
        };
      }
      emit("update:camera", cameraNew);
    });
    if (defined(viewer.animation)) {
      viewer.animation.viewModel.dateFormatter = localeDateTimeFormatter;
      viewer.animation.viewModel.timeFormatter = localeTimeFormatter;
    }
    if (defined(viewer.timeline)) {
      viewer.timeline.makeLabel = (time) => {
        return localeDateTimeFormatter(time);
      };
      viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime);
    }
    if (process.env.NODE_ENV !== "production") {
      if (props.logo) {
        logger.warn("'logo' is deprecated. Use `showCredit` prop instead. ");
      }
    }
    !props.showCredit && (viewer.cesiumWidget.creditContainer.style.display = "none");
    props.debugShowFramesPerSecond && (viewer.scene.debugShowFramesPerSecond = true);
    viewer.viewerWidgetResized = viewer.viewerWidgetResized || new Event();
    viewer.viewerWidgetResized.addEventListener(onViewerWidgetResized);
    viewer.imageryLayers.layerAdded.addEventListener(onImageryLayerAdded);
    eventsState.registerEvents(true);
    const readyObj = {
      Cesium,
      viewer,
      vm: vcInstance.proxy
    };
    if (globalThis.XE) {
      Object.assign(readyObj, {
        earth: vcInstance.earth
      });
    } else if (globalThis.mars3d) {
      Object.assign(readyObj, {
        map: vcInstance.map
      });
    } else if (globalThis.DC) {
      Object.assign(readyObj, {
        dcViewer: vcInstance.dcViewer
      });
    }
    const listenerReady = vm.getInstanceListener(vcInstance, "ready");
    listenerReady && emit("ready", readyObj);
    vcMitt == null ? void 0 : vcMitt.emit("ready", readyObj);
    vue.nextTick(() => {
      viewer.resize();
      onViewerWidgetResized({
        type: "viewer",
        status: "added",
        target: viewer.container
      });
      isReady.value = true;
    });
    logger.debug("loaded-viewer");
    Object.assign(vcInstance.proxy, {
      cesiumObject: viewer
    });
    return readyObj;
  };
  const unload = async function() {
    if (!vcInstance.mounted) {
      return false;
    }
    logger.debug("viewer---unloading");
    let unloadingResolve;
    globalConfig.value.__viewerUnloadingPromise = new Promise((resolve, reject2) => {
      unloadingResolve = resolve;
    });
    for (let i = 0; i < vcInstance.children.length; i++) {
      const vcChildCmp = vcInstance.children[i].proxy;
      await vcChildCmp.unload();
    }
    vcInstance.children.length = 0;
    const { viewer, earth, map, dcViewer } = vcInstance;
    if (globalThis.Cesium) {
      viewer.imageryLayers.layerAdded.removeEventListener(onImageryLayerAdded);
      eventsState.registerEvents(false);
    }
    viewer._vcPickScreenSpaceEventHandler && viewer._vcPickScreenSpaceEventHandler.destroy();
    viewer._vcViewerScreenSpaceEventHandler && viewer._vcViewerScreenSpaceEventHandler.destroy();
    viewer._vcPickScreenSpaceEventHandler = void 0;
    viewer._vcViewerScreenSpaceEventHandler = void 0;
    if (globalThis.XE) {
      earth && earth.destroy();
    } else if (globalThis.mars3d) {
      map && map.destroy();
    } else if (globalThis.DC) {
      dcViewer && dcViewer.destroy();
    } else {
      viewer && viewer.destroy();
    }
    vcInstance.viewer = void 0;
    vcInstance.mounted = false;
    const { removeCesiumScript } = props;
    if (removeCesiumScript && globalThis.Cesium) {
      const scripts = document.getElementsByTagName("script");
      const removeScripts = [];
      for (const script of scripts) {
        script.src.indexOf("/Cesium.js") > -1 && removeScripts.push(script);
        script.src.indexOf("/Workers/zlib.min.js") > -1 && removeScripts.push(script);
        if (globalThis.XE) {
          script.src.indexOf("/rxjs.umd.min.js") > -1 && removeScripts.push(script);
          script.src.indexOf("/XbsjCesium.js") > -1 && removeScripts.push(script);
          script.src.indexOf("/viewerCesiumNavigationMixin.js") > -1 && removeScripts.push(script);
          script.src.indexOf("/XbsjEarth.js") > -1 && removeScripts.push(script);
        }
        loadLibs.includes(script.src) && !removeScripts.includes(script) && removeScripts.push(script);
      }
      const links = document.getElementsByTagName("link");
      for (const link of links) {
        link.href.includes("Widgets/widgets.css") && !removeScripts.includes(link) && removeScripts.push(link);
        loadLibs.includes(link.href) && !removeScripts.includes(link) && removeScripts.push(link);
      }
      removeScripts.forEach((script) => {
        script.parentNode && script.parentNode.removeChild(script);
      });
      globalThis.Cesium && (globalThis.Cesium = void 0);
      globalThis.XbsjCesium && (globalThis.XbsjCesium = void 0);
      globalThis.XbsjEarth && (globalThis.XbsjEarth = void 0);
      globalThis.XE && (globalThis.XE = void 0);
      globalThis.mars3d && (globalThis.mars3d = void 0);
      globalThis.DC && (globalThis.DC = void 0);
      globalThis.DcCore && (globalThis.DcCore = void 0);
      globalConfig.value.__scriptPromise = void 0;
      loadLibs = [];
    }
    const listener = vm.getInstanceListener(vcInstance, "destroyed");
    listener && emit("destroyed", vcInstance);
    logger.debug("viewer---unloaded");
    unloadingResolve(true);
    globalConfig.value.__viewerUnloadingPromise = void 0;
    isReady.value = false;
    return true;
  };
  const reload = function() {
    return unload().then(() => {
      return load();
    });
  };
  const getCesiumScript = async function() {
    var _a;
    logger.debug("getCesiumScript");
    if (!globalThis.Cesium) {
      let cesiumPath = props.cesiumPath ? props.cesiumPath : globalConfig.value.cesiumPath;
      const dirName = util.dirname(cesiumPath);
      if (!(cesiumPath == null ? void 0 : cesiumPath.includes(".js"))) {
        if ((cesiumPath == null ? void 0 : cesiumPath.lastIndexOf("/")) !== (cesiumPath == null ? void 0 : cesiumPath.length) - 1) {
          cesiumPath += "/";
        }
        const libsConfig = loadUtil.getMars3dConfig(cesiumPath);
        const include = ((_a = globalConfig.value.cfg) == null ? void 0 : _a.include) || "mars3d";
        const arrInclude = include.split(",");
        const keys = {};
        for (let i = 0, len = arrInclude.length; i < len; i++) {
          const key = arrInclude[i];
          if (keys[key]) {
            continue;
          }
          keys[key] = true;
          loadLibs.push(...libsConfig[key]);
        }
      } else if (cesiumPath.includes("dc.base")) {
        loadLibs.push(cesiumPath);
        loadLibs.push(cesiumPath.replace("dc.base", "dc.core"));
        loadLibs.push(cesiumPath.replace("dc.base", "dc.core").replace(".js", ".css"));
      } else if (cesiumPath.includes("/XbsjEarth.js")) {
        loadLibs.push(cesiumPath);
      } else {
        loadLibs.push(cesiumPath);
        loadLibs.push(`${dirName}/Widgets/widgets.css`);
      }
      const secondaryLibs = loadLibs;
      if (!(cesiumPath == null ? void 0 : cesiumPath.includes(".js"))) {
        const primaryLib = loadLibs.find((v) => v.includes("Cesium.js"));
        await loadScript(primaryLib);
        secondaryLibs.splice(secondaryLibs.indexOf(primaryLib), 1);
      }
      const scriptLoadPromises = [];
      secondaryLibs.forEach((url) => {
        const cssExpr = new RegExp("\\.css");
        if (cssExpr.test(url)) {
          scriptLoadPromises.push(loadLink(url));
        } else {
          scriptLoadPromises.push(loadScript(url));
        }
      });
      return Promise.all(scriptLoadPromises).then(() => {
        if (globalThis.Cesium) {
          const listener = vm.getInstanceListener(vcInstance, "cesiumReady");
          listener && emit("cesiumReady", globalThis.Cesium);
          return globalThis.Cesium;
        } else if (globalThis.XE) {
          return globalThis.XE.ready().then(() => {
            const listener = vm.getInstanceListener(vcInstance, "cesiumReady");
            listener && emit("cesiumReady", globalThis.Cesium);
            return globalThis.Cesium;
          });
        } else if (globalThis.DC) {
          globalThis.DC.use(globalThis.DcCore.default || globalThis.DcCore);
          globalThis.DC.baseUrl = `${dirName}/resources/`;
          globalThis.DC.ready(() => {
            globalThis.Cesium = DC.Namespace.Cesium;
            const listener = vm.getInstanceListener(vcInstance, "cesiumReady");
            listener && emit("cesiumReady", globalThis.DC);
            return globalThis.Cesium;
          });
          return globalThis.Cesium;
        } else {
          reject(new Error("VueCesium ERROR: Error loading CesiumJS!"));
        }
      });
    } else {
      return Promise.resolve(globalThis.Cesium);
    }
  };
  const loadScript = (src) => {
    const $script = document.createElement("script");
    $script.async = true;
    $script.src = src;
    document.body.appendChild($script);
    return new Promise((resolve, reject2) => {
      $script.onload = () => {
        resolve(true);
      };
    });
  };
  const loadLink = (src) => {
    const $link = document.createElement("link");
    $link.rel = "stylesheet";
    $link.href = src;
    document.head.appendChild($link);
    return new Promise((resolve, reject2) => {
      $link.onload = () => {
        resolve(true);
      };
    });
  };
  const onViewerWidgetResized = (e) => {
    var _a, _b;
    const { viewer } = vcInstance;
    const toolbarElement = viewer._toolbar;
    if (toolbarElement !== void 0 && getComputedStyle(toolbarElement).visibility !== "hidden" && getComputedStyle(toolbarElement).display !== "none") {
      layout.toolbarContainerRC = toolbarElement.getBoundingClientRect();
    } else {
      layout.toolbarContainerRC = void 0;
    }
    const bottomContainer = viewer.bottomContainer;
    if (bottomContainer !== void 0 && getComputedStyle(bottomContainer).visibility !== "hidden" && getComputedStyle(bottomContainer).display !== "none") {
      layout.bottomContainerRC = bottomContainer.getBoundingClientRect();
    } else {
      layout.bottomContainerRC = void 0;
    }
    const timelineContainer = (_a = viewer.timeline) == null ? void 0 : _a.container;
    if (timelineContainer !== void 0 && getComputedStyle(timelineContainer).visibility !== "hidden" && getComputedStyle(timelineContainer).display !== "none") {
      layout.timelineContainerRC = timelineContainer.getBoundingClientRect();
    } else {
      layout.timelineContainerRC = void 0;
    }
    const animationContainer = (_b = viewer.animation) == null ? void 0 : _b.container;
    if (animationContainer !== void 0 && getComputedStyle(animationContainer).visibility !== "hidden" && getComputedStyle(animationContainer).display !== "none") {
      layout.animationContainerRC = animationContainer.getBoundingClientRect();
    } else {
      layout.animationContainerRC = void 0;
    }
    viewer.resize();
    const listener = vm.getInstanceListener(vcInstance, "viewerWidgetResized");
    listener && emit("viewerWidgetResized", e);
  };
  const onImageryLayerAdded = (layer) => {
    const viewer = vcInstance.viewer;
    const { autoSortImageryLayers } = props;
    if (viewer.baseLayerPicker) {
      viewer.imageryLayers.raiseToTop(layer);
    }
    const { defined } = Cesium;
    if (autoSortImageryLayers) {
      layer.sortOrder = defined(layer.sortOrder) ? layer.sortOrder : 9999;
      viewer.imageryLayers._layers.sort((a, b) => a.sortOrder - b.sortOrder);
      viewer.imageryLayers._update();
    }
  };
  const localeDateTimeFormatter = function(date, viewModel, ignoredate) {
    const { JulianDate } = Cesium;
    let TZCode;
    if (props.UTCOffset) {
      date = JulianDate.addMinutes(date, props.UTCOffset, new JulianDate());
      const offset = new Date().getTimezoneOffset() - props.UTCOffset;
      TZCode = offset === 0 ? "UTC" : "UTC+" + -(offset / 60);
    } else {
      TZCode = new Date().getTimezoneOffset() === 0 ? "UTC" : "UTC+" + -(new Date().getTimezoneOffset() / 60);
    }
    const jsDate = JulianDate.toDate(date);
    const timeString = jsDate.toLocaleString(t("name"), {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false
    }).replace(/,/g, "");
    const dateString = jsDate.toLocaleString(t("name"), {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).replace(/,/g, "");
    if (!ignoredate && (viewModel || jsDate.getHours() + jsDate.getMinutes() === 0)) {
      return dateString;
    }
    props.TZCode && (TZCode = props.TZCode);
    return ignoredate ? `${timeString} ${TZCode}` : `${dateString} ${timeString} ${TZCode}`;
  };
  const localeTimeFormatter = function(time, viewModel) {
    return localeDateTimeFormatter(time, viewModel, true);
  };
  const onTimelineScrubfunction = function(e) {
    const clock = e.clock;
    clock.currentTime = e.timeJulian;
    clock.shouldAnimate = false;
  };
  const enableVRUI = function(viewer, enabled) {
    const geocoder = viewer._geocoder;
    const homeButton = viewer._homeButton;
    const sceneModePicker = viewer._sceneModePicker;
    const projectionPicker = viewer._projectionPicker;
    const baseLayerPicker = viewer._baseLayerPicker;
    const animation = viewer._animation;
    const timeline = viewer._timeline;
    const fullscreenButton = viewer._fullscreenButton;
    const infoBox = viewer._infoBox;
    const selectionIndicator = viewer._selectionIndicator;
    const visibility = enabled ? "hidden" : "visible";
    const { defined } = Cesium;
    if (defined(geocoder)) {
      geocoder.container.style.visibility = visibility;
    }
    if (defined(homeButton)) {
      homeButton.container.style.visibility = visibility;
    }
    if (defined(sceneModePicker)) {
      sceneModePicker.container.style.visibility = visibility;
    }
    if (defined(projectionPicker)) {
      projectionPicker.container.style.visibility = visibility;
    }
    if (defined(baseLayerPicker)) {
      baseLayerPicker.container.style.visibility = visibility;
    }
    if (defined(animation)) {
      animation.container.style.visibility = visibility;
    }
    if (defined(timeline)) {
      timeline.container.style.visibility = visibility;
    }
    if (defined(fullscreenButton) && fullscreenButton.viewModel.isFullscreenEnabled) {
      fullscreenButton.container.style.visibility = visibility;
    }
    if (defined(infoBox)) {
      infoBox.container.style.visibility = visibility;
    }
    if (defined(selectionIndicator)) {
      selectionIndicator.container.style.visibility = visibility;
    }
    if (viewer._container) {
      const right = enabled || !defined(fullscreenButton) ? 0 : fullscreenButton.container.clientWidth;
      viewer._vrButton.container.style.right = right + "px";
      viewer.forceResize();
    }
  };
  const resizeToolbar = function(parent, child) {
    Array.prototype.slice.call(parent.children).forEach((element) => {
      switch (element.className) {
        case "cesium-viewer-geocoderContainer":
          element.customIndex = 1;
          break;
        case "cesium-button cesium-toolbar-button cesium-home-button":
          element.customIndex = 2;
          break;
        case "cesium-sceneModePicker-wrapper cesium-toolbar-button":
          element.customIndex = 3;
          break;
        case "cesium-projectionPicker-wrapper cesium-toolbar-button":
          element.customIndex = 4;
          break;
        case "cesium-button cesium-toolbar-button":
        case "cesium-baseLayerPicker-dropDown":
          element.customIndex = 5;
          break;
        case "cesium-navigationHelpButton-wrapper":
          element.customIndex = 6;
          break;
      }
    });
    const arr = [];
    Array.prototype.slice.call(parent.children).forEach((element) => {
      arr.push(element);
    });
    arr.sort(function(a, b) {
      return a.customIndex - b.customIndex;
    });
    for (let i = 0; i < arr.length; i++) {
      parent.appendChild(arr[i]);
    }
  };
  const getServices = function() {
    return mergeDescriptors.mergeDescriptors({}, {
      get layout() {
        return layout;
      },
      get vm() {
        return vcInstance;
      },
      get Cesium() {
        return vcInstance.Cesium;
      },
      get viewer() {
        return vcInstance.viewer;
      },
      get dataSources() {
        var _a;
        return (_a = vcInstance.viewer) == null ? void 0 : _a.dataSources;
      },
      get entities() {
        var _a;
        return (_a = vcInstance.viewer) == null ? void 0 : _a.entities;
      },
      get imageryLayers() {
        var _a;
        return (_a = vcInstance.viewer) == null ? void 0 : _a.imageryLayers;
      },
      get primitives() {
        var _a;
        return (_a = vcInstance.viewer) == null ? void 0 : _a.scene.primitives;
      },
      get groundPrimitives() {
        var _a;
        return (_a = vcInstance.viewer) == null ? void 0 : _a.scene.groundPrimitives;
      },
      get postProcessStages() {
        var _a;
        return (_a = vcInstance.viewer) == null ? void 0 : _a.postProcessStages;
      },
      get creatingPromise() {
        return creatingPromise;
      }
    });
  };
  Object.defineProperties(vcInstance, {
    cesiumObject: {
      enumerable: true,
      get: () => vcInstance.viewer
    }
  });
  vue.onMounted(async () => {
    var _a;
    try {
      logger.debug("viewer - onMounted");
      await ((_a = globalConfig.value) == null ? void 0 : _a.__viewerUnloadingPromise);
      createResolve(load());
    } catch (e) {
      reject(e);
    }
  });
  vue.onUnmounted(() => {
    logger.debug("viewer - onUnmounted");
    unload().then(() => {
      vcMitt.all.clear();
    });
  });
  return {
    isReady,
    load,
    unload,
    reload,
    getServices,
    viewerRef,
    creatingPromise
  };
}

exports["default"] = useViewer;
exports.viewerProps = viewerProps;
//# sourceMappingURL=useViewer.js.map
