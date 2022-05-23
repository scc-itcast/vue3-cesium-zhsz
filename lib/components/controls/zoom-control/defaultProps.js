'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usePosition = require('../../../composables/private/use-position.js');
var util = require('../../../utils/util.js');

const defaultProps = {
  enableResetButton: {
    type: Boolean,
    default: true
  },
  zoomAmount: {
    type: Number,
    default: 2
  },
  duration: {
    type: Number,
    default: 0.5
  },
  durationReset: {
    type: Number
  },
  defaultResetView: {
    type: Object,
    default: () => {
      return {
        position: {
          lng: 105,
          lat: 30,
          height: 190595685e-1
        }
      };
    }
  },
  overrideViewerCamera: {
    type: Boolean,
    default: false
  },
  ...usePosition.positionProps,
  background: {
    type: String,
    default: "#3f4854"
  },
  border: {
    type: String,
    default: "solid 1px rgba(255, 255, 255, 0.2)"
  },
  borderRadius: {
    type: String,
    default: "100px"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (v) => ["vertical", "horizontal"].includes(v)
  },
  zoomInOptions: {
    type: Object,
    default: () => ({
      icon: "vc-icons-zoom-in",
      size: "24px",
      color: "#fff",
      background: "transparent",
      round: true,
      flat: true,
      label: void 0,
      stack: false,
      tooltip: {
        delay: 500,
        anchor: "bottom middle",
        offset: [0, 20],
        tip: void 0
      }
    })
  },
  zoomOutOptions: {
    type: Object,
    default: () => ({
      icon: "vc-icons-zoom-out",
      size: "24px",
      color: "#fff",
      background: "transparent",
      round: true,
      flat: true,
      label: void 0,
      stack: false,
      tooltip: {
        delay: 500,
        anchor: "bottom middle",
        offset: [0, 20],
        tip: void 0
      }
    })
  },
  zoomResetOptions: {
    type: Object,
    default: () => ({
      icon: "vc-icons-reset",
      size: "24px",
      color: "#fff",
      background: "transparent",
      round: true,
      flat: true,
      label: void 0,
      stack: false,
      tooltip: {
        delay: 500,
        anchor: "bottom middle",
        offset: [0, 20],
        tip: void 0
      }
    })
  }
};
const defaultOptions = util.getDefaultOptionByProps(defaultProps);

exports.defaultOptions = defaultOptions;
exports.defaultProps = defaultProps;
//# sourceMappingURL=defaultProps.js.map
