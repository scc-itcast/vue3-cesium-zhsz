import { useFabProps } from './use-fab.mjs';
import { useModelToggleProps } from '../../../composables/private/use-model-toggle.mjs';

const directions = ["up", "right", "down", "left"];
const alignValues = ["left", "center", "right"];
const defaultProps = {
  ...useFabProps,
  ...useModelToggleProps,
  icon: String,
  activeIcon: String,
  hideActionOnClick: {
    type: Boolean,
    default: true
  },
  hideIcon: Boolean,
  hideLabel: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: "right",
    validator: (v) => directions.includes(v)
  },
  persistent: Boolean,
  stacked: Boolean,
  verticalActionsAlign: {
    type: String,
    default: "center",
    validator: (v) => alignValues.includes(v)
  }
};

export { defaultProps as default };
//# sourceMappingURL=defaultProps.mjs.map
