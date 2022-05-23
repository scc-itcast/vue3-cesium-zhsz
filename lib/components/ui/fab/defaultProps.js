'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useFab = require('./use-fab.js');
var useModelToggle = require('../../../composables/private/use-model-toggle.js');

const directions = ["up", "right", "down", "left"];
const alignValues = ["left", "center", "right"];
const defaultProps = {
  ...useFab.useFabProps,
  ...useModelToggle.useModelToggleProps,
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

exports["default"] = defaultProps;
//# sourceMappingURL=defaultProps.js.map
