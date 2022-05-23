'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const vcKey = hasSymbol ? Symbol("VueCesium") : "VueCesium";
const fabKey = hasSymbol ? Symbol("_vc_f_") : "_vc_f_";
const measurementKey = hasSymbol ? Symbol("_vc_measurement_") : "_vc_measurement_";
const configProviderContextKey = Symbol();

exports.configProviderContextKey = configProviderContextKey;
exports.fabKey = fabKey;
exports.measurementKey = measurementKey;
exports.vcKey = vcKey;
//# sourceMappingURL=config.js.map
