var statusBarDefaultProps = {
  gridFileUrl: {
    type: String,
    default: "https://zouyaoji.top/vue-cesium/SampleData/WW15MGH.DAC"
  },
  proj4Projection: {
    type: String,
    default: "+proj=utm +ellps=GRS80 +units=m +no_defs"
  },
  projectionUnits: {
    type: String,
    default: "m"
  },
  proj4longlat: {
    type: String,
    default: "+proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees +no_defs"
  },
  position: {
    type: String,
    default: "bottom-right",
    validator: (v) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  color: {
    type: String,
    default: "#fff"
  },
  background: {
    type: String,
    default: "#3f4854"
  },
  showCameraInfo: {
    type: Boolean,
    default: true
  },
  showMouseInfo: {
    type: Boolean,
    default: true
  },
  showPerformanceInfo: {
    type: Boolean,
    default: true
  },
  useProjection: {
    type: Boolean,
    default: true
  },
  tooltip: {
    type: [Boolean, Object],
    default: () => ({
      delay: 500,
      anchor: "bottom middle",
      offset: [0, 20],
      tip: void 0
    })
  }
};

export { statusBarDefaultProps as default };
//# sourceMappingURL=defaultProps.mjs.map
