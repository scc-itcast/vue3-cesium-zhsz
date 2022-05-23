import proj4 from 'proj4';

function prettifyProjection(longitude, latitude, proj4Projection, proj4longlat, projectionUnits) {
  const zone = 1 + Math.floor((longitude + 180) / 6);
  const projection = proj4Projection + " +zone=" + zone + (latitude < 0 ? " +south" : "");
  const projPoint = proj4(proj4longlat, projection, [longitude, latitude]);
  return {
    utmZone: zone + (latitude < 0 ? "S" : "N"),
    north: projPoint[1].toFixed(2) + projectionUnits,
    east: projPoint[0].toFixed(2) + projectionUnits
  };
}

export { prettifyProjection as default };
//# sourceMappingURL=prettifyProjection.mjs.map
