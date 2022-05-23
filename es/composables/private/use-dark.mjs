import { computed } from 'vue';

const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function useDark(props) {
  return computed(() => props.dark);
}

export { useDark as default, useDarkProps };
//# sourceMappingURL=use-dark.mjs.map
