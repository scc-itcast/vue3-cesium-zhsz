import { useFabProps } from './use-fab.mjs';

const anchorMap = {
  start: "self-end",
  center: "self-center",
  end: "self-start"
};
const anchorValues = Object.keys(anchorMap);
const defaultProps = {
  ...useFabProps,
  icon: {
    type: String,
    default: ""
  },
  stacked: Boolean,
  anchor: {
    type: String,
    validator: (v) => anchorValues.includes(v)
  },
  to: [String, Object],
  replace: Boolean
};

export { anchorMap, defaultProps as default };
//# sourceMappingURL=defaultPropsAction.mjs.map
