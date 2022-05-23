const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const vcKey = hasSymbol ? Symbol("VueCesium") : "VueCesium";
const fabKey = hasSymbol ? Symbol("_vc_f_") : "_vc_f_";
const measurementKey = hasSymbol ? Symbol("_vc_measurement_") : "_vc_measurement_";
const configProviderContextKey = Symbol();

export { configProviderContextKey, fabKey, measurementKey, vcKey };
//# sourceMappingURL=config.mjs.map
