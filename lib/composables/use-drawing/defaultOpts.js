'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const actionOptions = {
  externalLabel: false,
  label: "",
  labelPosition: "right",
  hideLabel: false,
  tabindex: void 0,
  disable: false,
  outline: false,
  push: false,
  flat: false,
  unelevated: false,
  color: "primary",
  textColor: void 0,
  glossy: false,
  labelClass: void 0,
  labelStyle: void 0,
  square: false,
  tooltip: {
    delay: 500,
    anchor: "bottom middle",
    offset: [0, 20],
    tip: void 0
  }
};
const polylinePrimitiveOptsDefault = {
  show: true,
  enableMouseEvent: true,
  asynchronous: false,
  classificationType: 2,
  appearance: {
    type: "PolylineMaterialAppearance",
    options: {
      material: {
        fabric: {
          type: "Color",
          uniforms: {
            color: "#51ff00"
          }
        }
      }
    }
  },
  depthFailAppearance: {
    type: "PolylineMaterialAppearance",
    options: {
      material: {
        fabric: {
          type: "PolylineDash",
          uniforms: {
            color: [255, 0, 0, 127]
          }
        }
      }
    }
  }
};
const pointOptsDefault = {
  show: true,
  color: "rgb(255,229,0)",
  pixelSize: 8,
  outlineColor: "black",
  outlineWidth: 1,
  disableDepthTestDistance: Number.POSITIVE_INFINITY
};
const billboardOptsDefault = {
  show: true,
  disableDepthTestDistance: Number.POSITIVE_INFINITY,
  verticalOrigin: 1,
  image: ""
};
const polylineOptsDefault = {
  width: 2,
  arcType: 0,
  ellipsoid: void 0
};
const polygonOptsDefault = {
  show: true,
  enableMouseEvent: true,
  asynchronous: false,
  classificationType: 2,
  appearance: {
    type: "MaterialAppearance",
    options: {
      material: {
        fabric: {
          type: "Color",
          uniforms: {
            color: [255, 165, 0, 125]
          }
        }
      },
      faceForward: true,
      renderState: {
        cull: {
          enabled: false
        },
        depthTest: {
          enabled: false
        }
      }
    }
  }
};
const labelOptsDefault = {
  show: true,
  font: "16px Arial Microsoft YaHei sans-serif",
  scale: 1,
  fillColor: "white",
  showBackground: true,
  backgroundColor: { x: 0.165, y: 0.165, z: 0.165, w: 0.8 },
  backgroundPadding: [7, 5],
  horizontalOrigin: 0,
  verticalOrigin: 1,
  pixelOffset: [0, -9],
  disableDepthTestDistance: Number.POSITIVE_INFINITY
};
const editorOptsDefault = {
  icon: "vc-icons-move",
  size: "24px",
  color: "#1296db",
  background: "#fff",
  round: true,
  flat: false,
  label: void 0,
  stack: false,
  dense: true,
  tooltip: {
    delay: 1e3,
    anchor: "bottom middle",
    offset: [0, 20]
  }
};
const pointDrawingDefault = {
  show: true,
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  editorOpts: {
    delay: 1e3,
    hideDelay: 1e3,
    pixelOffset: [16, -8],
    move: Object.assign({}, editorOptsDefault),
    remove: Object.assign({}, editorOptsDefault, {
      icon: "vc-icons-remove"
    })
  },
  heightReference: 1,
  disableDepthTest: false
};
const segmentDrawingDefault = {
  show: true,
  showComponentLines: false,
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: polylineOptsDefault,
  primitiveOpts: polylinePrimitiveOptsDefault,
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1e3,
    hideDelay: 1e3,
    move: Object.assign({}, editorOptsDefault),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: "vc-icons-delete"
    })
  },
  disableDepthTest: false
};
const polylineDrawingDefault = {
  show: true,
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: polylineOptsDefault,
  primitiveOpts: polylinePrimitiveOptsDefault,
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1e3,
    hideDelay: 1e3,
    move: Object.assign({}, editorOptsDefault),
    insert: Object.assign({}, editorOptsDefault, {
      icon: "vc-icons-insert"
    }),
    remove: Object.assign({}, editorOptsDefault, {
      icon: "vc-icons-remove"
    }),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: "vc-icons-delete"
    })
  },
  loop: false,
  disableDepthTest: false
};
const polygonDrawingDefault = {
  show: true,
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: polylineOptsDefault,
  primitiveOpts: Object.assign({}, polylinePrimitiveOptsDefault, {
    depthFailAppearance: {
      type: "PolylineMaterialAppearance",
      options: {
        material: {
          fabric: {
            type: "Color",
            uniforms: {
              color: "#51ff00"
            }
          }
        }
      }
    }
  }),
  polygonOpts: polygonOptsDefault,
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1e3,
    hideDelay: 1e3,
    move: Object.assign({}, editorOptsDefault),
    insert: Object.assign({}, editorOptsDefault, {
      icon: "vc-icons-insert"
    }),
    remove: Object.assign({}, editorOptsDefault, {
      icon: "vc-icons-remove"
    }),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: "vc-icons-delete"
    })
  },
  loop: true,
  disableDepthTest: false
};
const rectangleDrawingDefault = Object.assign({}, polygonDrawingDefault, {
  pointOpts: Object.assign({}, pointOptsDefault, {
    show: false
  }),
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1e3,
    hideDelay: 1e3,
    move: Object.assign({}, editorOptsDefault),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: "vc-icons-delete"
    })
  },
  edge: 4,
  regular: true,
  disableDepthTest: false
});
const circleDrawingDefault = Object.assign({}, rectangleDrawingDefault, {
  edge: 360
});
const regularDrawingDefault = Object.assign({}, rectangleDrawingDefault, {
  edge: 6
});
const clearActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-clear",
  color: "red"
});
const regularDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-drawing-regular"
});
const circleDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-drawing-circle"
});

exports.actionOptions = actionOptions;
exports.billboardOptsDefault = billboardOptsDefault;
exports.circleDrawingActionDefault = circleDrawingActionDefault;
exports.circleDrawingDefault = circleDrawingDefault;
exports.clearActionDefault = clearActionDefault;
exports.editorOptsDefault = editorOptsDefault;
exports.labelOptsDefault = labelOptsDefault;
exports.pointDrawingDefault = pointDrawingDefault;
exports.pointOptsDefault = pointOptsDefault;
exports.polygonDrawingDefault = polygonDrawingDefault;
exports.polylineDrawingDefault = polylineDrawingDefault;
exports.polylineOptsDefault = polylineOptsDefault;
exports.polylinePrimitiveOptsDefault = polylinePrimitiveOptsDefault;
exports.rectangleDrawingDefault = rectangleDrawingDefault;
exports.regularDrawingActionDefault = regularDrawingActionDefault;
exports.regularDrawingDefault = regularDrawingDefault;
exports.segmentDrawingDefault = segmentDrawingDefault;
//# sourceMappingURL=defaultOpts.js.map
