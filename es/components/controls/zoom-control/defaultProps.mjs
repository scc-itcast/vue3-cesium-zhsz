import { positionProps } from '../../../composables/private/use-position.mjs';
import { getDefaultOptionByProps } from '../../../utils/util.mjs';

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
  ...positionProps,
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
const defaultOptions = getDefaultOptionByProps(defaultProps);

export { defaultOptions, defaultProps };
//# sourceMappingURL=defaultProps.mjs.map
