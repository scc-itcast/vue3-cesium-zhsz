function prettifyCoordinates(longitude, latitude, options) {
  const result = {
    latitude: "",
    longitude: "",
    elevation: ""
  };
  const { defaultValue, defined } = Cesium;
  const optionsDefaulted = defaultValue(options, {});
  const digits = defaultValue(optionsDefaulted.digits, 5);
  result.latitude = Math.abs(latitude).toFixed(digits) + "\xB0" + (latitude < 0 ? "S" : "N");
  result.longitude = Math.abs(longitude).toFixed(digits) + "\xB0" + (longitude < 0 ? "W" : "E");
  if (defined(optionsDefaulted.height)) {
    result.elevation = Math.round(optionsDefaulted.height) + (defined(optionsDefaulted.errorBar) ? "\xB1" + Math.round(optionsDefaulted.errorBar) : "") + "m";
  } else {
    result.elevation = "";
  }
  return result;
}

export { prettifyCoordinates as default };
//# sourceMappingURL=prettifyCoordinates.mjs.map
