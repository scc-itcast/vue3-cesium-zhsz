function getFullscreenQuad() {
  const GeometryAttributes = Cesium.GeometryAttributes;
  const fullscreenQuad = new Cesium.Geometry({
    attributes: new GeometryAttributes({
      position: new Cesium.GeometryAttribute({
        componentDatatype: Cesium.ComponentDatatype.FLOAT,
        componentsPerAttribute: 3,
        values: new Float32Array([
          -1,
          -1,
          0,
          1,
          -1,
          0,
          1,
          1,
          0,
          -1,
          1,
          0
        ])
      }),
      st: new Cesium.GeometryAttribute({
        componentDatatype: Cesium.ComponentDatatype.FLOAT,
        componentsPerAttribute: 2,
        values: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
      })
    }),
    indices: new Uint32Array([3, 2, 0, 0, 2, 1])
  });
  return fullscreenQuad;
}
function createTexture(options, typedArray) {
  if (Cesium.defined(typedArray)) {
    const source = {};
    source.arrayBufferView = typedArray;
    options.source = source;
  }
  const texture = new Cesium.Texture(options);
  return texture;
}
function createFramebuffer(context, colorTexture, depthTexture) {
  const framebuffer = new Cesium.Framebuffer({
    context,
    colorTextures: [colorTexture],
    depthTexture
  });
  return framebuffer;
}
function createRawRenderState(options) {
  const translucent = true;
  const closed = false;
  const existing = {
    viewport: options.viewport,
    depthTest: options.depthTest,
    depthMask: options.depthMask,
    blending: options.blending
  };
  const rawRenderState = Cesium.Appearance.getDefaultRenderState(translucent, closed, existing);
  return rawRenderState;
}
function viewRectangleToLonLatRange(viewRectangle) {
  const range = {};
  const postiveWest = Cesium.Math.mod(viewRectangle.west, Cesium.Math.TWO_PI);
  const postiveEast = Cesium.Math.mod(viewRectangle.east, Cesium.Math.TWO_PI);
  const width = viewRectangle.width;
  let longitudeMin;
  let longitudeMax;
  if (width > Cesium.Math.THREE_PI_OVER_TWO) {
    longitudeMin = 0;
    longitudeMax = Cesium.Math.TWO_PI;
  } else {
    if (postiveEast - postiveWest < width) {
      longitudeMin = postiveWest;
      longitudeMax = postiveWest + width;
    } else {
      longitudeMin = postiveWest;
      longitudeMax = postiveEast;
    }
  }
  range.lon = {
    min: Cesium.Math.toDegrees(longitudeMin),
    max: Cesium.Math.toDegrees(longitudeMax)
  };
  const south = viewRectangle.south;
  const north = viewRectangle.north;
  const height = viewRectangle.height;
  const extendHeight = height > Cesium.Math.PI / 12 ? height / 2 : 0;
  let extendedSouth = Cesium.Math.clampToLatitudeRange(south - extendHeight);
  let extendedNorth = Cesium.Math.clampToLatitudeRange(north + extendHeight);
  if (extendedSouth < -Cesium.Math.PI_OVER_THREE) {
    extendedSouth = -Cesium.Math.PI_OVER_TWO;
  }
  if (extendedNorth > Cesium.Math.PI_OVER_THREE) {
    extendedNorth = Cesium.Math.PI_OVER_TWO;
  }
  range.lat = {
    min: Cesium.Math.toDegrees(extendedSouth),
    max: Cesium.Math.toDegrees(extendedNorth)
  };
  return range;
}

export { createFramebuffer, createRawRenderState, createTexture, getFullscreenQuad, viewRectangleToLonLatRange };
//# sourceMappingURL=util.mjs.map
