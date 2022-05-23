'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getMars3dConfig(libpath) {
  const libsConfig = {
    "font-awesome": [libpath + "fonts/font-awesome/css/font-awesome.min.css"],
    haoutil: [libpath + "hao/haoutil.js"],
    turf: [libpath + "turf/turf.min.js"],
    "mars3d-space": [
      libpath + "mars3d/plugins/space/mars3d-space.js"
    ],
    "mars3d-echarts": [
      libpath + "echarts/echarts.min.js",
      libpath + "echarts/echarts-gl.min.js",
      libpath + "mars3d/plugins/echarts/mars3d-echarts.js"
    ],
    "mars3d-mapv": [
      libpath + "mapV/mapv.min.js",
      libpath + "mars3d/plugins/mapv/mars3d-mapv.js"
    ],
    "mars3d-heatmap": [
      libpath + "mars3d/plugins/heatmap/heatmap.min.js",
      libpath + "mars3d/plugins/heatmap/mars3d-heatmap.js"
    ],
    "mars3d-wind": [
      libpath + "mars3d/plugins/wind/netcdfjs.js",
      libpath + "mars3d/plugins/wind/mars3d-wind.js"
    ],
    mars3d: [
      libpath + "Cesium/Widgets/widgets.css",
      libpath + "Cesium/Cesium.js",
      libpath + "mars3d/mars3d.css",
      libpath + "mars3d/mars3d.js"
    ]
  };
  return libsConfig;
}

exports.getMars3dConfig = getMars3dConfig;
//# sourceMappingURL=loadUtil.js.map
