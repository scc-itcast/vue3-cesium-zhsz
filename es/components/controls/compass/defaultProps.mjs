import { positionProps } from '../../../composables/private/use-position.mjs';
import { getDefaultOptionByProps } from '../../../utils/util.mjs';

const defaultProps = {
  enableCompassOuterRing: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 1.5
  },
  ...positionProps,
  outerOptions: {
    type: Object,
    default: () => ({
      icon: "vc-icons-compass-outer",
      size: "96px",
      color: "#3f4854",
      background: "transparent",
      tooltip: {
        delay: 1e3,
        anchor: "bottom middle",
        offset: [0, 20],
        tip: void 0
      }
    })
  },
  innerOptions: {
    type: Object,
    default: () => ({
      icon: "vc-icons-compass-inner",
      size: "24px",
      color: "#3f4854",
      background: "#fff",
      tooltip: {
        delay: 1e3,
        anchor: "bottom middle",
        offset: [0, 20],
        tip: void 0
      }
    })
  },
  markerOptions: {
    type: Object,
    default: () => ({
      icon: "vc-icons-compass-rotation-marker",
      size: "96px",
      color: "#1976D2"
    })
  }
};
const defaultOptions = getDefaultOptionByProps(defaultProps);

export { defaultOptions, defaultProps };
//# sourceMappingURL=defaultProps.mjs.map
