var defaultProps = {
  cesiumPath: String,
  animation: {
    type: Boolean,
    default: false
  },
  baseLayerPicker: {
    type: Boolean,
    default: false
  },
  fullscreenButton: {
    type: Boolean,
    default: false
  },
  vrButton: {
    type: Boolean,
    default: false
  },
  geocoder: {
    type: [Boolean, Array],
    default: false
  },
  homeButton: {
    type: Boolean,
    default: false
  },
  infoBox: {
    type: Boolean,
    default: true
  },
  sceneModePicker: {
    type: Boolean,
    default: false
  },
  selectionIndicator: {
    type: Boolean,
    default: true
  },
  timeline: {
    type: Boolean,
    default: false
  },
  navigationHelpButton: {
    type: Boolean,
    default: false
  },
  navigationInstructionsInitiallyVisible: {
    type: Boolean,
    default: false
  },
  scene3DOnly: {
    type: Boolean,
    default: false
  },
  shouldAnimate: {
    type: Boolean,
    default: false
  },
  clockViewModel: Object,
  selectedImageryProviderViewModel: Object,
  imageryProviderViewModels: Array,
  selectedTerrainProviderViewModel: Object,
  terrainProviderViewModels: Array,
  imageryProvider: Object,
  terrainProvider: Object,
  skyBox: {
    type: [Object, Boolean],
    default: () => void 0
  },
  skyAtmosphere: {
    type: [Object, Boolean],
    default: () => void 0
  },
  fullscreenElement: {
    type: [String, Element]
  },
  useDefaultRenderLoop: {
    type: Boolean,
    default: true
  },
  targetFrameRate: Number,
  showRenderLoopErrors: {
    type: Boolean,
    default: true
  },
  useBrowserRecommendedResolution: {
    type: Boolean,
    default: true
  },
  automaticallyTrackDataSourceClocks: {
    type: Boolean,
    default: true
  },
  contextOptions: Object,
  sceneMode: {
    type: Number,
    default: 3
  },
  mapProjection: Object,
  globe: {
    type: [Object, Boolean],
    default: () => void 0
  },
  orderIndependentTranslucency: {
    type: Boolean,
    default: true
  },
  creditContainer: [String, Element],
  creditViewport: [String, Element],
  dataSources: Object,
  terrainExaggeration: {
    type: Number,
    default: 1
  },
  shadows: {
    type: Boolean,
    default: false
  },
  terrainShadows: {
    type: Number,
    default: 3
  },
  mapMode2D: {
    type: Number,
    default: 1
  },
  projectionPicker: {
    type: Boolean,
    default: false
  },
  requestRenderMode: {
    type: Boolean,
    default: false
  },
  maximumRenderTimeChange: {
    type: Number,
    default: 0
  },
  debugShowFramesPerSecond: {
    type: Boolean,
    default: false
  },
  showCredit: {
    type: Boolean,
    default: true
  },
  accessToken: String,
  camera: {
    type: Object,
    default: () => ({
      position: {
        lng: 105,
        lat: 29.999999999999993,
        height: 19059568497290563e-9
      },
      heading: 360,
      pitch: -90,
      roll: 0
    })
  },
  navigation: {
    type: Boolean,
    default: false
  },
  TZCode: {
    type: String
  },
  UTCOffset: {
    type: Number
  },
  removeCesiumScript: {
    type: Boolean,
    default: true
  },
  autoSortImageryLayers: {
    type: Boolean,
    default: true
  },
  enableMouseEvent: {
    type: Boolean,
    default: true
  },
  skeleton: {
    type: [Boolean, Object],
    default: () => ({
      dark: false,
      animation: "wave",
      square: true,
      bordered: true,
      color: void 0
    })
  },
  touchHoldArg: {
    type: String,
    default: "1000"
  }
};

export { defaultProps as default };
//# sourceMappingURL=defaultProps.mjs.map
