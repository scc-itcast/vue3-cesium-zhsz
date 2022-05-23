'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usePosition = require('../../../composables/private/use-position.js');

var locationDefaultProps = {
  geolocation: {
    type: Object,
    default: () => ({
      enableHighAccuracy: true,
      timeout: 5e3,
      maximumAge: 0
    })
  },
  amap: Object,
  id: {
    type: String,
    default: "My Location"
  },
  pointColor: {
    type: [Array, Object, String],
    default: "#08ABD5"
  },
  pixelSize: {
    type: Number,
    default: 25 / 2
  },
  outlineWidth: {
    type: Number,
    default: 3
  },
  outlineColor: {
    type: [Array, Object, String],
    default: "#ffffff"
  },
  level: {
    type: Number,
    default: 6
  },
  duration: {
    type: Number,
    default: 3
  },
  factor: {
    type: Number,
    default: 0.01
  },
  maximumHeight: Number,
  hpr: {
    type: Array,
    default: () => [0, 0, 3e3]
  },
  customAPI: Function,
  description: Function,
  ...usePosition.positionProps,
  icon: {
    type: String,
    default: "vc-icons-geolocation"
  },
  size: {
    type: String,
    default: "24px"
  },
  color: {
    type: String,
    default: "#3f4854"
  },
  background: {
    type: String,
    default: "#fff"
  },
  round: {
    type: Boolean,
    default: true
  },
  flat: {
    type: Boolean,
    default: false
  },
  label: String,
  stack: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: [Boolean, Object],
    default: () => ({
      delay: 500,
      anchor: "bottom middle",
      offset: [0, 20],
      tip: void 0
    })
  },
  loadingType: {
    type: String,
    default: "puff"
  }
};

exports["default"] = locationDefaultProps;
//# sourceMappingURL=defaultProps.js.map
