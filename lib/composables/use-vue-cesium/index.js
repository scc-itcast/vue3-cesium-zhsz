'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useLog = require('../private/use-log.js');
var config = require('../../utils/config.js');

function useVueCesium() {
  const instance = vue.getCurrentInstance();
  const logger = useLog["default"](void 0);
  if (instance) {
    return vue.inject(config.vcKey) || instance.appContext.config.globalProperties.$VueCesium;
  } else {
    logger.warn("VueCesium useVueCesium() can only be used inside setup().");
  }
}

exports["default"] = useVueCesium;
//# sourceMappingURL=index.js.map
