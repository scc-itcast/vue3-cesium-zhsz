import { getCurrentInstance, inject } from 'vue';
import useLog from '../private/use-log.mjs';
import { vcKey } from '../../utils/config.mjs';

function useVueCesium() {
  const instance = getCurrentInstance();
  const logger = useLog(void 0);
  if (instance) {
    return inject(vcKey) || instance.appContext.config.globalProperties.$VueCesium;
  } else {
    logger.warn("VueCesium useVueCesium() can only be used inside setup().");
  }
}

export { useVueCesium as default };
//# sourceMappingURL=index.mjs.map
