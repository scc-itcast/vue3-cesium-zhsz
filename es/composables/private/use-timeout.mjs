import { onBeforeUnmount } from 'vue';

function useTimeout() {
  let timer;
  onBeforeUnmount(() => {
    clearTimeout(timer);
  });
  return {
    registerTimeout(fn, delay) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    },
    removeTimeout() {
      clearTimeout(timer);
    }
  };
}

export { useTimeout as default };
//# sourceMappingURL=use-timeout.mjs.map
