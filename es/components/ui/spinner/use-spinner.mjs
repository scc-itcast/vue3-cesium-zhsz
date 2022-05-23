import { computed } from 'vue';
import { useSizeDefaults } from '../../../composables/private/use-size.mjs';

const useSpinnerProps = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function useSpinner(props) {
  return {
    cSize: computed(() => props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size),
    classes: computed(() => "vc-spinner" + (props.color ? ` text-${props.color}` : ""))
  };
}

export { useSpinner as default, useSpinnerProps };
//# sourceMappingURL=use-spinner.mjs.map
