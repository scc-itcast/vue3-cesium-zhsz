import { VcBtn, VcTooltip } from '../../components/ui/index.mjs';
import { VcOverlayHtml } from '../../components/overlays/index.mjs';
import { VcPolygon, VcCollectionPoint, VcCollectionLabel, VcCollectionPrimitive } from '../../components/primitive-collections/index.mjs';
import { VcPrimitiveGroundPolyline, VcPrimitive } from '../../components/primitives/index.mjs';
import { VcGeometryInstance } from '../../components/geometry-instance/index.mjs';
import { VcGeometryGroundPolyline, VcGeometryPolyline, VcGeometryEllipsoidOutline } from '../../components/geometries/index.mjs';
import { VcPostProcessStage } from '../../components/post-processes/index.mjs';
import { useLocale } from '../use-locale/index.mjs';
import '../../shared/index.mjs';
import { makeCartesian3Array, getGeodesicDistance, getPolylineSegmentHeading, getPolylineSegmentPitch, getHeadingPitchRoll, getPolylineSegmentEndpoint, makeCartesian3, getFirstIntersection, calculateAreaByPostions, makeCartesian2 } from '../../utils/cesium-helpers.mjs';
import '../../utils/util.mjs';
import { getCurrentInstance, ref, computed, nextTick, h } from 'vue';
import useCommon from '../use-common/index.mjs';
import useDrawingAction from './use-drawing-action.mjs';
import { platform } from '../../utils/platform.mjs';
import DrawStatus from '../../shared/src/DrawStatus.mjs';
import { isUndefined } from 'lodash-unified';
import MeasureUnits from '../../shared/src/MeasureUnits.mjs';

function useDrawingSegment(props, ctx, cmpName, fs) {
  const instance = getCurrentInstance();
  const commonState = useCommon(props, ctx, instance);
  if (commonState === void 0) {
    return;
  }
  const { t } = useLocale();
  const $services = commonState.$services;
  const { emit } = ctx;
  const innerRadii = ref({ x: 0.01, y: 0.01, z: 0.01 });
  let lightCamera, shadowMap;
  if (cmpName === "VcAnalysisViewshed") {
    lightCamera = new Cesium.Camera($services.viewer.scene);
    lightCamera.frustum.near = 1;
    lightCamera.frustum.far = 400;
    lightCamera.frustum.fov = Cesium.Math.PI / 3;
    lightCamera.frustum.aspectRatio = 3;
    shadowMap = new Cesium.ShadowMap({
      context: $services.viewer.scene.context,
      lightCamera,
      enabled: true,
      isPointLight: true,
      pointLightRadius: 400,
      cascadesEnabled: false,
      size: 2048,
      softShadows: true,
      normalOffset: false,
      fromLightSource: false
    });
  }
  const {
    drawingType,
    drawTip,
    drawTipOpts,
    drawStatus,
    canShowDrawTip,
    drawTipPosition,
    showEditor,
    editorPosition,
    mouseoverPoint,
    editingPoint,
    primitiveCollectionRef,
    editorType,
    onMouseoverPoints,
    onMouseoutPoints,
    onMouseenterEditor,
    onMouseleaveEditor,
    onPrimitiveCollectionReady,
    onVcCollectionPointReady,
    onVcCollectionLabelReady,
    onVcPrimitiveReady
  } = useDrawingAction(props, ctx, instance, cmpName, $services);
  const renderDatas = ref([]);
  if (props.preRenderDatas && props.preRenderDatas.length) {
    props.preRenderDatas.forEach((preRenderData) => {
      const segmentDrawing = {
        positions: makeCartesian3Array(preRenderData),
        show: true,
        drawStatus: DrawStatus.AfterDraw,
        distance: 0,
        labels: [],
        pointOpts: {},
        labelOpts: {},
        labelsOpts: {},
        polylineOpts: {},
        primitiveOpts: {},
        polygonOpts: {}
      };
      cmpName === "VcMeasurementVertical" && Object.assign(segmentDrawing, {
        draggingPlane: new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0),
        surfaceNormal: new Cesium.Cartesian3()
      });
      renderDatas.value.push(segmentDrawing);
    });
  }
  let restorePosition;
  const computedRenderDatas = computed(() => {
    const polylines = [];
    const { Cartesian3, Cartographic, Rectangle, createGuid, defined, Math: CesiumMath, Ray } = Cesium;
    const { viewer } = $services;
    renderDatas.value.forEach((polylineSegment) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
      const startPosition = polylineSegment.positions[0];
      const endPosition = polylineSegment.positions[1];
      if (Cartesian3.equals(startPosition, endPosition)) {
        return;
      }
      const labels = [];
      const distances = [];
      const angles = [];
      const distance = ((_a = props.polylineOpts) == null ? void 0 : _a.arcType) === 0 ? Cartesian3.distance(startPosition, endPosition) : getGeodesicDistance(startPosition, endPosition, $services.viewer.scene.globe.ellipsoid);
      const labelPosition = Cartesian3.midpoint(startPosition, endPosition, {});
      const heading = getPolylineSegmentHeading(startPosition, endPosition);
      const pitch = getPolylineSegmentPitch(startPosition, endPosition);
      polylineSegment.points = polylineSegment.positions.map((v) => {
        return {
          position: v
        };
      });
      const polyline = {
        ...polylineSegment,
        distance,
        heading,
        pitch
      };
      const labelOpts = Object.assign({}, props.labelOpts, polyline.labelOpts);
      if (cmpName === "VcDrawingRectangle" || cmpName === "VcMeasurementRectangle") {
        const startCartographic = Cartographic.fromCartesian(startPosition, viewer.scene.globe.ellipsoid);
        const endCartographic = Cartographic.fromCartesian(endPosition, viewer.scene.globe.ellipsoid);
        const height = startCartographic.height;
        !props.clampToGround && (endCartographic.height = height);
        const rectangle = Rectangle.fromCartesianArray(polylineSegment.positions, viewer.scene.globe.ellipsoid);
        const rectangleArr = [
          rectangle.west,
          rectangle.north,
          height,
          rectangle.east,
          rectangle.north,
          height,
          rectangle.east,
          rectangle.south,
          height,
          rectangle.west,
          rectangle.south,
          height,
          rectangle.west,
          rectangle.north,
          height
        ];
        const polygonPositions = Cartesian3.fromRadiansArrayHeights(rectangleArr, viewer.scene.globe.ellipsoid);
        Object.assign(polyline, {
          polygonPositions,
          height
        });
      } else if (cmpName === "VcDrawingRegular" || cmpName === "VcMeasurementRegular") {
        const startPosition2 = polylineSegment.positions[0];
        const endPosition2 = polylineSegment.positions[1];
        const hpr = getHeadingPitchRoll(startPosition2, endPosition2, viewer.scene);
        if (!isUndefined(hpr) && defined(hpr)) {
          const polygonPositions = [];
          const startCartographic = Cartographic.fromCartesian(startPosition2, viewer.scene.globe.ellipsoid);
          const endCartographic = Cartographic.fromCartesian(endPosition2, viewer.scene.globe.ellipsoid);
          !props.clampToGround && (endCartographic.height = startCartographic.height);
          polygonPositions.push(Cartographic.toCartesian(endCartographic, viewer.scene.globe.ellipsoid));
          for (let i = 0; i < (props.edge || 4) - 1; i++) {
            const position = getPolylineSegmentEndpoint(startPosition2, hpr[0] += Math.PI * 2 / (props.edge || 4), distance, viewer.scene.globe.ellipsoid);
            polygonPositions.push(position);
          }
          Object.assign(polyline, {
            polygonPositions,
            height: startCartographic.height
          });
        }
      } else if (cmpName === "VcAnalysisViewshed") {
        const viewPosition = makeCartesian3(startPosition);
        lightCamera.position = viewPosition;
        lightCamera.frustum.near = 1e-3 * distance;
        lightCamera.frustum.far = distance;
        const hr = CesiumMath.toRadians(props.ellipsoidOpts.horizontalViewAngle);
        const vr = CesiumMath.toRadians(props.ellipsoidOpts.verticalViewAngle);
        const aspectRatio = polyline.distance * Math.tan(hr / 2) * 2 / (distance * Math.tan(vr / 2) * 2);
        lightCamera.frustum.fov = hr > vr ? hr : vr;
        lightCamera.frustum.aspectRatio = aspectRatio;
        lightCamera.setView({
          destination: viewPosition,
          orientation: {
            heading: CesiumMath.toRadians(heading || 0),
            pitch: CesiumMath.toRadians(pitch || 0),
            roll: 0
          }
        });
        shadowMap._pointLightRadius = distance;
        viewer.scene.shadowMap = shadowMap;
      } else if (cmpName === "VcAnalysisSightline") {
        if (props.sightlineType === "segment") {
          const positionsNew = [];
          positionsNew.push(startPosition);
          const objectsToExclude = [];
          const primitiveCollection = primitiveCollectionRef.value.cesiumObject._primitives;
          primitiveCollection.forEach((primitive) => {
            if (primitive instanceof Cesium.PointPrimitiveCollection) {
              objectsToExclude.push(...primitive._pointPrimitives);
            }
            if (primitive instanceof Cesium.Primitive) {
              objectsToExclude.push(primitive);
            }
          });
          const intersection = getFirstIntersection(startPosition, endPosition, $services.viewer, objectsToExclude);
          if (defined(intersection)) {
            positionsNew.push(intersection);
          }
          positionsNew.push(endPosition);
          let distance2 = 0;
          const distances2 = [];
          for (let i = 0; i < positionsNew.length - 1; i++) {
            const s = Cartesian3.distance(positionsNew[i], positionsNew[i + 1]);
            distances2.push(s);
            distance2 = distance2 + s;
          }
          Object.assign(polyline, {
            positions: positionsNew,
            distance: distance2
          });
        } else if (props.sightlineType === "circle") {
        }
      } else {
        labels.push({
          position: labelPosition,
          id: createGuid(),
          text: MeasureUnits.distanceToString(distance, (_b = props.measureUnits) == null ? void 0 : _b.distanceUnits, props.locale, (_c = props.decimals) == null ? void 0 : _c.distance),
          ...labelOpts
        });
      }
      if (polyline.polygonPositions && polyline.polygonPositions.length) {
        const labelsOpts = Object.assign({}, props.labelsOpts, polyline.labelsOpts);
        const positions = polyline.polygonPositions.slice();
        props.loop && positions.length > 2 && positions.push(positions[0]);
        for (let i = 0; i < positions.length - 1; i++) {
          let s = 0;
          if (((_d = props.polylineOpts) == null ? void 0 : _d.arcType) === 0) {
            s = getGeodesicDistance(positions[i], positions[i + 1], $services.viewer.scene.globe.ellipsoid);
          } else {
            s = Cartesian3.distance(positions[i], positions[i + 1]);
          }
          distances.push(s);
          if (s > 0 && positions.length > 2 && props.showDistanceLabel) {
            labels.push({
              text: MeasureUnits.distanceToString(s, (_e = props.measureUnits) == null ? void 0 : _e.distanceUnits, props.locale, (_f = props.decimals) == null ? void 0 : _f.distance),
              position: Cartesian3.midpoint(positions[i], positions[i + 1], {}),
              id: createGuid(),
              ...labelsOpts
            });
          }
          if (positions.length > 2 && props.showAngleLabel) {
            if (i > 0 || props.loop) {
              const point0 = positions[i === 0 ? positions.length - 2 : i - 1];
              const point1 = positions[i];
              const point2 = positions[i + 1];
              const diffrence1 = Cartesian3.subtract(point0, point1, {});
              const diffrence2 = Cartesian3.subtract(point2, point1, {});
              let angle = 0;
              if (!(Cartesian3.ZERO.equals(diffrence1) || Cartesian3.ZERO.equals(diffrence2))) {
                angle = Cartesian3.angleBetween(diffrence1, diffrence2);
              }
              angles.push(angle);
              labels.push({
                text: MeasureUnits.angleToString(angle, (_g = props.measureUnits) == null ? void 0 : _g.angleUnits, props.locale, (_h = props.decimals) == null ? void 0 : _h.angle),
                position: point1,
                id: createGuid(),
                ...labelsOpts
              });
            }
          }
        }
        const area = calculateAreaByPostions(positions);
        labels.push({
          text: MeasureUnits.areaToString(area, (_i = props.measureUnits) == null ? void 0 : _i.areaUnits, props.locale, (_j = props.decimals) == null ? void 0 : _j.area),
          position: polylineSegment.positions[0],
          id: createGuid(),
          ...labelOpts
        });
      }
      if (props.showComponentLines) {
        Object.assign(polyline, {
          xyPolylinePositions: [new Cartesian3(), new Cartesian3(), new Cartesian3()],
          xyBoxPositions: [new Cartesian3(), new Cartesian3(), new Cartesian3()],
          xDistance: 0,
          yDistance: 0,
          xAngle: 0,
          yAngle: 0
        });
        updateComponents(polyline);
        labels.push({
          position: polyline.xLabelPosition,
          id: createGuid(),
          text: MeasureUnits.distanceToString(polyline.xDistance || 0, (_k = props.measureUnits) == null ? void 0 : _k.distanceUnits, props.locale, (_l = props.decimals) == null ? void 0 : _l.distance),
          ...props.xLabelOpts
        });
        labels.push({
          position: polyline.yLabelPosition,
          id: createGuid(),
          text: MeasureUnits.distanceToString(polyline.yDistance || 0, (_m = props.measureUnits) == null ? void 0 : _m.distanceUnits, props.locale, (_n = props.decimals) == null ? void 0 : _n.distance),
          ...props.yLabelOpts
        });
        labels.push({
          position: polyline.xAnglePosition,
          id: createGuid(),
          text: MeasureUnits.angleToString(polyline.xAngle || 0, (_o = props.measureUnits) == null ? void 0 : _o.angleUnits, props.locale, (_p = props.decimals) == null ? void 0 : _p.angle),
          ...props.xAngleLabelOpts
        });
        labels.push({
          position: polyline.yAnglePosition,
          id: createGuid(),
          text: MeasureUnits.angleToString(polyline.yAngle || 0, (_q = props.measureUnits) == null ? void 0 : _q.angleUnits, props.locale, (_r = props.decimals) == null ? void 0 : _r.angle),
          ...props.yAngleLabelOpts
        });
      }
      Object.assign(polyline, {
        labels
      });
      polyline.positionsDegreesArray = polyline.positions.map((v) => {
        const cart = Cesium.Cartographic.fromCartesian(v, viewer.scene.globe.ellipsoid);
        return [CesiumMath.toDegrees(cart.longitude), CesiumMath.toDegrees(cart.latitude), cart.height];
      });
      ((_s = polyline == null ? void 0 : polyline.polygonPositions) == null ? void 0 : _s.length) && (polyline.polygonPositionsDegreesArray = polyline.polygonPositions.map((v) => {
        const cart = Cesium.Cartographic.fromCartesian(v, viewer.scene.globe.ellipsoid);
        return [CesiumMath.toDegrees(cart.longitude), CesiumMath.toDegrees(cart.latitude), cart.height];
      }));
      polylines.push(polyline);
    });
    return polylines;
  });
  instance.createCesiumObject = async () => {
    return primitiveCollectionRef;
  };
  instance.mount = async () => {
    const { viewer } = $services;
    if (props.autoUpdateLabelPosition) {
      cmpName === "VcMeasurementDistance" && viewer.scene.preRender.addEventListener(updateLabelPosition);
      (cmpName === "VcMeasurementRegular" || cmpName === "VcMeasurementRectangle") && viewer.scene.preRender.addEventListener(updateLabelPositionPolygon);
    }
    return true;
  };
  instance.unmount = async () => {
    const { viewer } = $services;
    if (props.autoUpdateLabelPosition) {
      cmpName === "VcMeasurementDistance" && viewer.scene.preRender.removeEventListener(updateLabelPosition);
      (cmpName === "VcMeasurementRegular" || cmpName === "VcMeasurementRectangle") && viewer.scene.preRender.removeEventListener(updateLabelPositionPolygon);
    }
    return true;
  };
  const getHeightPosition = (polyline, movement) => {
    const { defined, SceneMode, Cartesian3, IntersectionTests, Plane, SceneTransforms, Ray } = Cesium;
    const { viewer } = $services;
    const scene = viewer.scene;
    const camera = scene.camera;
    const direction = camera.direction;
    const ellipsoid = scene.frameState.mapProjection.ellipsoid;
    const positions = polyline.positions;
    const p1 = positions[0];
    let startPoint = p1;
    let endPoint = positions[1];
    let draggingPlane = polyline.draggingPlane;
    let surfaceNormal = polyline.surfaceNormal;
    let normal = surfaceNormal;
    if (scene.mode === SceneMode.COLUMBUS_VIEW) {
      normal = Cartesian3.UNIT_X;
      const startPointCartographic = ellipsoid.cartesianToCartographic(p1, {});
      startPoint = scene.mapProjection.project(startPointCartographic, {});
      Cartesian3.fromElements(startPoint.z, startPoint.x, startPoint.y, startPoint);
    }
    let forward = Cartesian3.cross(normal, direction, {});
    forward = Cartesian3.cross(normal, forward, forward);
    forward = Cartesian3.normalize(forward, forward);
    draggingPlane = Plane.fromPointNormal(startPoint, forward, draggingPlane);
    const ray = camera.getPickRay(movement, new Ray());
    endPoint = IntersectionTests.rayPlane(ray, draggingPlane, {});
    if (defined(endPoint)) {
      if (scene.mode === SceneMode.COLUMBUS_VIEW) {
        endPoint = Cartesian3.fromElements(endPoint.y, endPoint.z, endPoint.x, endPoint);
        const endPointCartographic = scene.mapProjection.unproject(endPoint, {});
        endPoint = ellipsoid.cartographicToCartesian(endPointCartographic, endPoint);
      }
      if (SceneTransforms.wgs84ToWindowCoordinates(scene, positions[0], {}).y < movement.y) {
        surfaceNormal = Cartesian3.negate(surfaceNormal, {});
      }
      let diffrence = Cartesian3.subtract(endPoint, p1, {});
      diffrence = Cartesian3.projectVector(diffrence, surfaceNormal, diffrence);
      endPoint = Cartesian3.add(p1, diffrence, endPoint);
      return endPoint;
    }
  };
  const updateComponents = (polyline) => {
    const { Cartesian3, Math: CesiumMath, defined } = Cesium;
    const { viewer } = $services;
    const ellipsoid = viewer.scene.frameState.mapProjection.ellipsoid;
    const startPosition = polyline.positions[0];
    const endPosition = polyline.positions[1];
    const startCartographic = ellipsoid.cartesianToCartographic(startPosition, {});
    if (!defined(startCartographic)) {
      return;
    }
    const endCartographic = ellipsoid.cartesianToCartographic(endPosition, {});
    const startHeight = startCartographic.height;
    const endHeight = endCartographic.height;
    let startPoint, endPoint, height1, height2;
    if (startHeight < endHeight) {
      startPoint = startPosition;
      endPoint = endPosition;
      height2 = endHeight;
      height1 = startHeight;
    } else {
      startPoint = endPosition;
      endPoint = startPosition;
      height2 = startHeight;
      height1 = endHeight;
    }
    const xyPolylinePositions = polyline.xyPolylinePositions;
    if (xyPolylinePositions === void 0) {
      return;
    }
    xyPolylinePositions[0] = startPoint;
    xyPolylinePositions[2] = endPoint;
    let normal = ellipsoid.geodeticSurfaceNormal(startPoint, {});
    normal = Cartesian3.multiplyByScalar(normal, height2 - height1, normal);
    const xyPoint = Cartesian3.add(startPoint, normal, xyPolylinePositions[1]);
    if (!(Cartesian3.equalsEpsilon(xyPoint, endPoint, CesiumMath.EPSILON10) && Cartesian3.equalsEpsilon(xyPoint, startPoint, CesiumMath.EPSILON10))) {
      let diffrenceX = Cartesian3.subtract(endPoint, xyPoint, {});
      let diffrenceY = Cartesian3.subtract(startPoint, xyPoint, {});
      const distanceMin = Math.min(Cartesian3.magnitude(diffrenceX), Cartesian3.magnitude(diffrenceY));
      const factor = 15 < distanceMin ? 0.15 * distanceMin : 0.25 * distanceMin;
      diffrenceX = Cartesian3.normalize(diffrenceX, diffrenceX);
      diffrenceY = Cartesian3.normalize(diffrenceY, diffrenceY);
      diffrenceX = Cartesian3.multiplyByScalar(diffrenceX, factor, diffrenceX);
      diffrenceY = Cartesian3.multiplyByScalar(diffrenceY, factor, diffrenceY);
      const xyBoxPositions = polyline.xyBoxPositions;
      if (xyBoxPositions === void 0) {
        return;
      }
      Cartesian3.add(xyPoint, diffrenceX, xyBoxPositions[0]);
      Cartesian3.add(xyBoxPositions[0], diffrenceY, xyBoxPositions[1]);
      Cartesian3.add(xyPoint, diffrenceY, xyBoxPositions[2]);
      polyline.xLabelPosition = Cartesian3.midpoint(xyPoint, endPoint, {});
      polyline.yLabelPosition = Cartesian3.midpoint(startPoint, xyPoint, {});
      polyline.xAnglePosition = endPoint;
      polyline.yAnglePosition = startPoint;
      const diffrence1 = Cartesian3.subtract(xyPoint, endPoint, {});
      const diffrence2 = Cartesian3.subtract(xyPoint, startPoint, {});
      let diffrence3 = Cartesian3.subtract(endPoint, startPoint, {});
      polyline.yAngle = Cartesian3.angleBetween(diffrence2, diffrence3);
      diffrence3 = Cartesian3.negate(diffrence3, diffrence3);
      polyline.xAngle = Cartesian3.angleBetween(diffrence1, diffrence3);
      polyline.xDistance = Cartesian3.magnitude(diffrence1);
      polyline.yDistance = Cartesian3.magnitude(diffrence2);
    }
  };
  const updateLabelPositionPolygon = () => {
    computedRenderDatas.value.forEach((polyline, index) => {
      var _a;
      const positions = polyline.polygonPositions;
      if (!(positions.length < 2)) {
        const { defined, SceneTransforms, Cartesian2, HorizontalOrigin } = Cesium;
        const { viewer } = $services;
        const scene = viewer.scene;
        let startPosition = polyline.positions[0];
        const positionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, startPosition, {});
        let startPositionWindow = defined(positionWindow) ? Cartesian2.clone(positionWindow, {}) : Cartesian2.fromElements(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, {});
        let startY = startPositionWindow.y;
        const primitiveCollection = (_a = primitiveCollectionRef.value) == null ? void 0 : _a.cesiumObject;
        const labelCollection = primitiveCollection._primitives.filter((v) => v instanceof Cesium.LabelCollection);
        const labels = labelCollection[index]._labels;
        const labelTotalLength = labels[labels.length - 1];
        for (let i = 1; i < positions.length; i++) {
          const positionWindow2 = SceneTransforms.wgs84ToWindowCoordinates(scene, positions[i], {});
          if (defined(positionWindow2)) {
            const l = (startPositionWindow.y - positionWindow2.y) / (positionWindow2.x - startPositionWindow.x);
            const label = labels[i - 1];
            if (label && label !== labelTotalLength) {
              label.horizontalOrigin = 0 < l ? HorizontalOrigin.LEFT : HorizontalOrigin.RIGHT;
            }
            if (positionWindow2.y < startY) {
              startY = positionWindow2.y;
              startPosition = positions[i];
            }
            startPositionWindow = Cartesian2.clone(positionWindow2, startPositionWindow);
          }
          polyline.drawStatus === DrawStatus.AfterDraw && (labelTotalLength.position = startPosition);
        }
      }
    });
  };
  const updateLabelPosition = () => {
    computedRenderDatas.value.forEach((polyline, index) => {
      var _a, _b, _c;
      const { defined, SceneTransforms, HorizontalOrigin } = Cesium;
      const { viewer } = $services;
      const scene = viewer.scene;
      const primitiveCollection = (_a = primitiveCollectionRef.value) == null ? void 0 : _a.cesiumObject;
      const positions = polyline.positions;
      const startPosition = positions[0];
      const endPosition = positions[1];
      const startPositionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, startPosition, {});
      const endPositionWindow = SceneTransforms.wgs84ToWindowCoordinates(scene, endPosition, {});
      if (defined(startPositionWindow) && defined(endPositionWindow)) {
        const labelCollection = primitiveCollection._primitives.filter((v) => v instanceof Cesium.LabelCollection);
        if (labelCollection.length) {
          const label = labelCollection[index].get(0);
          let yLabel, xAngleLabel, yPixelOffset, xPixelOffset;
          if (props.showComponentLines) {
            yLabel = labelCollection[index].get(2);
            xAngleLabel = labelCollection[index].get(3);
            yPixelOffset = makeCartesian2((_b = props.yLabelOpts) == null ? void 0 : _b.pixelOffset);
            xPixelOffset = makeCartesian2((_c = props.xAngleLabelOpts) == null ? void 0 : _c.pixelOffset);
          }
          if ((startPositionWindow.y - endPositionWindow.y) / (endPositionWindow.x - startPositionWindow.x) > 0) {
            if (!isUndefined(yLabel) && !isUndefined(yPixelOffset)) {
              yPixelOffset.x = -9;
              yLabel.pixelOffset = yPixelOffset;
              yLabel.horizontalOrigin = HorizontalOrigin.RIGHT;
            }
            if (!isUndefined(xAngleLabel) && !isUndefined(xPixelOffset)) {
              xPixelOffset.x = 12;
              xAngleLabel.pixelOffset = xPixelOffset;
              xAngleLabel.horizontalOrigin = HorizontalOrigin.LEFT;
            }
            label.horizontalOrigin = HorizontalOrigin.LEFT;
          } else {
            if (!isUndefined(yLabel) && !isUndefined(yPixelOffset)) {
              yPixelOffset.x = 9;
              yLabel.pixelOffset = yPixelOffset;
              yLabel.horizontalOrigin = HorizontalOrigin.LEFT;
            }
            if (!isUndefined(xAngleLabel) && !isUndefined(xPixelOffset)) {
              xPixelOffset.x = -12;
              xAngleLabel.pixelOffset = xPixelOffset;
              xAngleLabel.horizontalOrigin = HorizontalOrigin.RIGHT;
            }
            label.horizontalOrigin = HorizontalOrigin.RIGHT;
          }
        }
      }
    });
  };
  const makeHeightPositions = (polyline, position) => {
    const { defined, defaultValue, Cartesian3 } = Cesium;
    const { viewer } = $services;
    const scene = viewer.scene;
    const positions = polyline.positions;
    positions[0] = position;
    const ellipsoid = scene.frameState.mapProjection.ellipsoid;
    const postionCartographic = ellipsoid.cartesianToCartographic(position, {});
    const globe = scene.globe;
    postionCartographic.height = defined(globe) ? defaultValue(globe.getHeight(postionCartographic), 0) : 0;
    positions[1] = ellipsoid.cartographicToCartesian(postionCartographic, {});
    polyline.distance = Cartesian3.distance(positions[0], positions[1]);
    polyline.labelPosition = Cartesian3.midpoint(positions[0], positions[1], {});
  };
  const startNew = () => {
    const { Cartesian3, Plane } = Cesium;
    const polyline = {
      positions: [new Cartesian3(), new Cartesian3()],
      show: false,
      drawStatus: DrawStatus.BeforeDraw,
      distance: 0,
      labels: [],
      pointOpts: {},
      labelOpts: {},
      labelsOpts: {},
      polylineOpts: {},
      primitiveOpts: {},
      polygonOpts: {}
    };
    if (cmpName === "VcAnalysisViewshed") {
      clear();
    }
    cmpName === "VcMeasurementVertical" && Object.assign(polyline, {
      draggingPlane: new Plane(Cartesian3.UNIT_X, 0),
      surfaceNormal: new Cartesian3()
    });
    renderDatas.value.push(polyline);
    drawStatus.value = DrawStatus.BeforeDraw;
    canShowDrawTip.value = true;
    drawTip.value = drawTipOpts.value.drawingTipStart;
  };
  const stop = (removeLatest = true) => {
    if (removeLatest && drawStatus.value === DrawStatus.Drawing) {
      renderDatas.value.pop();
    }
    const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1;
    const polyline = renderDatas.value[index];
    if (polyline) {
      polyline.drawStatus = DrawStatus.AfterDraw;
    }
    drawStatus.value = DrawStatus.AfterDraw;
    canShowDrawTip.value = false;
    drawTipPosition.value = [0, 0, 0];
  };
  const handleMouseClick = (movement, options) => {
    var _a;
    const { viewer, drawingFabInstance, selectedDrawingActionInstance, getWorldPosition } = $services;
    const drawingFabInstanceVm = drawingFabInstance == null ? void 0 : drawingFabInstance.proxy;
    if (options.button === 2 && options.ctrl) {
      const drawingsOption = drawingFabInstanceVm.getDrawingActionInstance(drawingType);
      drawingFabInstanceVm.toggleAction(drawingsOption);
      nextTick(() => {
        emit("drawEvt", {
          name: drawingType,
          finished: true,
          windowPoistion: movement,
          type: "cancel"
        }, viewer);
      });
      return;
    }
    if (drawStatus.value === DrawStatus.AfterDraw) {
      startNew();
    }
    const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1;
    const polyline = renderDatas.value[index];
    const positions = polyline.positions;
    if (options.button === 2 && editingPoint.value) {
      drawingFabInstanceVm.editingActionName = void 0;
      polyline.positions[editingPoint.value._index] = restorePosition;
      drawStatus.value = DrawStatus.AfterDraw;
      polyline.drawStatus = DrawStatus.AfterDraw;
      editingPoint.value = void 0;
      drawTip.value = drawTipOpts.value.drawingTipStart;
      if (cmpName === "VcMeasurementHeight") {
        makeHeightPositions(polyline, restorePosition);
      }
      nextTick(() => {
        emit("drawEvt", Object.assign({
          name: drawingType,
          index,
          renderDatas,
          finished: true,
          windowPoistion: movement,
          type: "cancel"
        }, computedRenderDatas.value[index]), viewer);
      });
      return;
    }
    if (options.button !== 0) {
      return;
    }
    const { defined } = Cesium;
    let type = "new";
    let emitPosition;
    let finished = false;
    const scene = viewer.scene;
    if (drawStatus.value === DrawStatus.BeforeDraw) {
      const position = getWorldPosition(scene, movement, {});
      if (!defined(position)) {
        return;
      }
      positions[0] = position;
      positions[1] = position;
      polyline.show = true;
      drawStatus.value = DrawStatus.Drawing;
      polyline.drawStatus = DrawStatus.Drawing;
      drawTip.value = drawTipOpts.value.drawingTipEnd;
      emitPosition = position;
      finished = false;
      if (cmpName === "VcMeasurementVertical") {
        const ellipsoid = scene.frameState.mapProjection.ellipsoid;
        polyline.surfaceNormal = ellipsoid.geodeticSurfaceNormal(position, polyline.surfaceNormal);
      }
      if (cmpName === "VcMeasurementHeight") {
        makeHeightPositions(polyline, position);
        finished = true;
        polyline.drawStatus = DrawStatus.AfterDraw;
        drawStatus.value = DrawStatus.AfterDraw;
        drawTip.value = drawTipOpts.value.drawingTipStart;
        if (props.mode === 1) {
          drawingFabInstanceVm.toggleAction(selectedDrawingActionInstance);
        }
      }
    } else {
      polyline.drawStatus = DrawStatus.AfterDraw;
      drawStatus.value = DrawStatus.AfterDraw;
      if (editingPoint.value) {
        if (platform().hasTouch === true) {
          const position = getWorldPosition(scene, movement, {});
          if (defined(position)) {
            const positions2 = polyline.positions;
            positions2.splice(editingPoint.value._index, 1, position);
            editingPoint.value.pixelSize = ((_a = props.pointOpts) == null ? void 0 : _a.pixelSize) * 1;
          }
        }
        editingPoint.value = void 0;
        drawingFabInstanceVm.editingActionName = void 0;
        canShowDrawTip.value = false;
        drawTipPosition.value = [0, 0, 0];
        type = editorType.value;
        if (selectedDrawingActionInstance) {
          drawTip.value = drawTipOpts.value.drawingTipStart;
          canShowDrawTip.value = true;
        }
      } else {
        if (platform().hasTouch === true) {
          const position = getWorldPosition(scene, movement, {});
          if (defined(position)) {
            const positions2 = polyline.positions;
            positions2[1] = position;
          }
        }
        if (props.mode === 1) {
          drawingFabInstanceVm.toggleAction(selectedDrawingActionInstance);
        }
      }
      finished = true;
      emitPosition = polyline.positions[1];
    }
    nextTick(() => {
      emit("drawEvt", Object.assign({
        index,
        renderDatas,
        name: drawingType,
        finished,
        position: emitPosition,
        windowPoistion: movement,
        type
      }, computedRenderDatas.value[index]), viewer);
    });
  };
  const handleMouseMove = (movement) => {
    const { viewer, getWorldPosition } = $services;
    const scene = viewer.scene;
    const position = getWorldPosition(scene, movement, {});
    const { defined, Cartographic } = Cesium;
    if (!defined(position)) {
      return;
    }
    drawTipPosition.value = position;
    if (drawStatus.value !== DrawStatus.Drawing) {
      return;
    }
    if (cmpName === "VcMeasurementVertical" && scene.mode === Cesium.SceneMode.SCENE2D) {
      return;
    }
    const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1;
    const polyline = renderDatas.value[index];
    if (cmpName === "VcMeasurementVertical") {
      const heightPostion = getHeightPosition(polyline, movement);
      if (!isUndefined(heightPostion) && defined(heightPostion)) {
        const positions = polyline.positions;
        positions[editingPoint.value ? editingPoint.value._index : 1] = heightPostion;
      }
    } else if (cmpName === "VcMeasurementHeight") {
      makeHeightPositions(polyline, position);
    } else if (cmpName === "VcDrawingRectangle" || cmpName === "VcDrawingRegular" || cmpName === "VcMeasurementRegular" || cmpName === "VcMeasurementRectangle") {
      const positions = polyline.positions;
      const startPosition = positions[0];
      const startCartographic = Cartographic.fromCartesian(startPosition, viewer.scene.globe.ellipsoid);
      const endCartographic = Cartographic.fromCartesian(position, viewer.scene.globe.ellipsoid);
      !props.clampToGround && (endCartographic.height = startCartographic.height);
      positions[editingPoint.value ? editingPoint.value._index : 1] = Cartographic.toCartesian(endCartographic, viewer.scene.globe.ellipsoid);
    } else if (cmpName === "VcAnalysisSightline") {
      const positions = polyline.positions;
      if (editingPoint.value) {
        const index2 = editingPoint.value._index > 0 ? 1 : 0;
        positions[index2] = position;
      } else {
        positions[1] = position;
      }
    } else {
      const positions = polyline.positions.slice();
      positions[editingPoint.value ? editingPoint.value._index : 1] = position;
      polyline.positions = positions;
    }
    nextTick(() => {
      emit("drawEvt", Object.assign({
        index,
        renderDatas,
        name: drawingType,
        finished: false,
        position: polyline.positions[1],
        windowPoistion: movement,
        type: editingPoint.value ? editorType : "new"
      }, computedRenderDatas.value[index]), viewer);
    });
  };
  const onEditorClick = (e) => {
    var _a, _b, _c;
    editorPosition.value = [0, 0, 0];
    showEditor.value = false;
    if (!props.editable) {
      return;
    }
    editorType.value = e;
    const { viewer, drawingFabInstance } = $services;
    if (e === "move") {
      drawTip.value = drawTipOpts.value.drawingTipEditing;
      drawStatus.value = DrawStatus.Drawing;
      editingPoint.value = mouseoverPoint.value;
      restorePosition = renderDatas.value[editingPoint.value._vcPolylineIndx].positions[editingPoint.value._index];
      canShowDrawTip.value = true;
      const drawingFabInstanceVm = drawingFabInstance == null ? void 0 : drawingFabInstance.proxy;
      drawingFabInstanceVm.editingActionName = drawingType;
    } else if (e === "remove") {
      const index = mouseoverPoint.value._vcPolylineIndx;
      const polyline = renderDatas.value[index];
      polyline.positions.splice(mouseoverPoint.value._index, 1);
    } else if (e === "removeAll") {
      const index = mouseoverPoint.value._vcPolylineIndx;
      renderDatas.value.splice(index, 1);
    } else {
      const index = mouseoverPoint.value._vcPolylineIndx;
      const polyline = renderDatas.value[index];
      (_c = (_b = (_a = props.editorOpts) == null ? void 0 : _a[e]) == null ? void 0 : _b.callback) == null ? void 0 : _c.call(_b, index, polyline);
    }
    emit("editorEvt", {
      type: e,
      renderDatas,
      name: drawingType,
      index: mouseoverPoint.value._vcPolylineIndx
    }, viewer);
  };
  const clear = () => {
    renderDatas.value = [];
    stop();
  };
  const publicMethods = { computedRenderDatas, renderDatas, startNew, stop, clear, handleMouseClick, handleMouseMove };
  Object.assign(instance.proxy, publicMethods);
  return () => {
    var _a, _b, _c;
    const {
      ColorGeometryInstanceAttribute,
      createGuid,
      Math: CesiumMath,
      Matrix4,
      Cartesian3,
      Transforms,
      HeadingPitchRoll,
      PerInstanceColorAppearance,
      Cartesian4,
      Cartesian2
    } = Cesium;
    const children = [];
    computedRenderDatas.value.forEach((polyline, index) => {
      var _a2;
      const isRegular = cmpName === "VcDrawingRectangle" || cmpName === "VcDrawingRegular" || cmpName === "VcMeasurementRegular" || cmpName === "VcMeasurementRectangle";
      const positions = isRegular ? (_a2 = polyline.polygonPositions) == null ? void 0 : _a2.slice() : polyline.positions;
      isRegular && (positions == null ? void 0 : positions.push(positions[0]));
      const polylineOpts = Object.assign({}, props.polylineOpts, polyline.polylineOpts);
      props.clampToGround && delete polylineOpts.arcType;
      const primitiveOpts = Object.assign({}, props.primitiveOpts, polyline.primitiveOpts);
      if ((positions == null ? void 0 : positions.length) && (positions == null ? void 0 : positions.length) > 1) {
        children.push(h(props.clampToGround ? VcPrimitiveGroundPolyline : VcPrimitive, {
          show: polyline.show && primitiveOpts.show || props.editable || polyline.drawStatus === DrawStatus.Drawing,
          ...primitiveOpts,
          onReady: (readyObject) => {
            var _a3;
            (_a3 = primitiveOpts == null ? void 0 : primitiveOpts.onReady) == null ? void 0 : _a3.call(primitiveOpts, readyObject);
            readyObject.cesiumObject._vcPolylineIndex = index;
          }
        }, () => h(VcGeometryInstance, {
          id: createGuid()
        }, () => h(props.clampToGround ? VcGeometryGroundPolyline : VcGeometryPolyline, {
          positions,
          ...polylineOpts
        }))));
        if (cmpName === "VcAnalysisViewshed") {
          const { viewer } = $services;
          const modelMatrix = Matrix4.fromTranslationQuaternionRotationScale(polyline.positions[0], Transforms.headingPitchRollQuaternion(polyline.positions[0], HeadingPitchRoll.fromDegrees(polyline.heading - props.ellipsoidOpts.horizontalViewAngle, polyline.pitch, 0), viewer.scene.globe.ellipsoid), new Cartesian3(1, 1, 1));
          const color = ColorGeometryInstanceAttribute.fromColor(props.ellipsoidOpts.color);
          children.push(h(VcPostProcessStage, {
            fragmentShader: fs,
            uniforms: {
              shadowMap_textureCube: function() {
                shadowMap.update(viewer.scene.frameState);
                return shadowMap._shadowMapTexture;
              },
              shadowMap_matrix: function() {
                shadowMap.update(viewer.scene.frameState);
                return shadowMap._shadowMapMatrix;
              },
              shadowMap_lightPositionEC: function() {
                shadowMap.update(viewer.scene.frameState);
                return shadowMap._lightPositionEC;
              },
              shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness: function() {
                shadowMap.update(viewer.scene.frameState);
                const bias = shadowMap._pointBias;
                return Cartesian4.fromElements(bias.normalOffsetScale, shadowMap._distance, shadowMap.maximumDistance, 0, new Cartesian4());
              },
              shadowMap_texelSizeDepthBiasAndNormalShadingSmooth: function() {
                shadowMap.update(viewer.scene.frameState);
                const bias = shadowMap._pointBias;
                const scratchTexelStepSize = new Cartesian2();
                const texelStepSize = scratchTexelStepSize;
                texelStepSize.x = 1 / shadowMap._textureSize.x;
                texelStepSize.y = 1 / shadowMap._textureSize.y;
                return Cartesian4.fromElements(texelStepSize.x, texelStepSize.y, bias.depthBias, bias.normalShadingSmooth, new Cartesian4());
              },
              camera_projection_matrix: lightCamera.frustum.projectionMatrix,
              camera_view_matrix: lightCamera.viewMatrix,
              vc_viewDistance: function() {
                return polyline.distance;
              },
              vc_visibleAreaColor: props.visibleAreaColor || Cesium.Color.LIME,
              vc_invisibleAreaColor: props.invisibleAreaColor || Cesium.Color.RED
            }
          }));
          const radii = { x: polyline.distance, y: polyline.distance, z: polyline.distance };
          children.push(h(VcPrimitive, {
            show: polyline.show && props.ellipsoidOpts.show || props.editable || polyline.drawStatus === DrawStatus.Drawing,
            enableMouseEvent: props.enableMouseEvent,
            appearance: new PerInstanceColorAppearance({
              flat: true
            }),
            asynchronous: false
          }, () => [
            h(VcGeometryInstance, {
              id: createGuid(),
              modelMatrix,
              attributes: {
                color
              }
            }, () => h(VcGeometryEllipsoidOutline, {
              radii,
              minimumClock: CesiumMath.toRadians(-props.ellipsoidOpts.horizontalViewAngle / 2),
              maximumClock: CesiumMath.toRadians(props.ellipsoidOpts.horizontalViewAngle / 2),
              minimumCone: CesiumMath.toRadians(props.ellipsoidOpts.verticalViewAngle + 7.75),
              maximumCone: CesiumMath.toRadians(180 - props.ellipsoidOpts.verticalViewAngle - 7.75),
              subdivisions: 256,
              stackPartitions: 64,
              slicePartitions: 64
            }))
          ]));
          children.push(h(VcPrimitive, {
            show: polyline.show && props.ellipsoidOpts.show || props.editable || polyline.drawStatus === DrawStatus.Drawing,
            enableMouseEvent: props.enableMouseEvent,
            appearance: new PerInstanceColorAppearance({
              flat: true
            }),
            asynchronous: false
          }, () => h(VcGeometryInstance, {
            id: createGuid(),
            modelMatrix,
            attributes: {
              color
            }
          }, () => h(VcGeometryEllipsoidOutline, {
            radii,
            innerRadii: innerRadii.value,
            minimumClock: CesiumMath.toRadians(-props.ellipsoidOpts.horizontalViewAngle / 2),
            maximumClock: CesiumMath.toRadians(props.ellipsoidOpts.horizontalViewAngle / 2),
            minimumCone: CesiumMath.toRadians(props.ellipsoidOpts.verticalViewAngle + 7.75),
            maximumCone: CesiumMath.toRadians(180 - props.ellipsoidOpts.verticalViewAngle - 7.75),
            subdivisions: 128,
            stackPartitions: 10,
            slicePartitions: 8
          }))));
        }
      }
      if (polyline.polygonPositions && polyline.polygonPositions.length > 2) {
        const polygonOpts = Object.assign({}, props == null ? void 0 : props.polygonOpts, polyline == null ? void 0 : polyline.polygonOpts);
        children.push(h(VcPolygon, {
          positions,
          show: polyline.show && (polygonOpts == null ? void 0 : polygonOpts.show),
          ...polygonOpts,
          onReady: (readyObject) => {
            var _a3;
            onVcPrimitiveReady(readyObject);
            (_a3 = polygonOpts == null ? void 0 : polygonOpts.onReady) == null ? void 0 : _a3.call(polygonOpts, readyObject);
            readyObject.cesiumObject._vcPolylineIndex = index;
          }
        }));
      }
      if (polyline.xyPolylinePositions && polyline.xyPolylinePositions.length > 1) {
        children.push(h(VcPrimitive, {
          show: polyline.show && primitiveOpts || props.editable || polyline.drawStatus === DrawStatus.Drawing,
          ...primitiveOpts,
          onReady: (readyObject) => {
            var _a3;
            (_a3 = primitiveOpts == null ? void 0 : primitiveOpts.onReady) == null ? void 0 : _a3.call(primitiveOpts, readyObject);
            readyObject.cesiumObject._vcPolylineIndex = index;
          }
        }, () => h(VcGeometryInstance, {
          id: createGuid()
        }, () => h(VcGeometryPolyline, {
          positions: polyline.xyPolylinePositions,
          ...polylineOpts
        }))));
      }
      if (polyline.xyBoxPositions && polyline.xyBoxPositions.length > 1) {
        children.push(h(VcPrimitive, {
          show: polyline.show && primitiveOpts || props.editable || polyline.drawStatus === DrawStatus.Drawing,
          ...primitiveOpts
        }, () => h(VcGeometryInstance, {
          id: createGuid()
        }, () => h(VcGeometryPolyline, {
          positions: polyline.xyBoxPositions,
          ...polylineOpts
        }))));
      }
      const polylinePointOpts = Object.assign({}, props.pointOpts, polyline.pointOpts);
      children.push(h(VcCollectionPoint, {
        enableMouseEvent: props.enableMouseEvent,
        show: polyline.show,
        points: polyline.points.map((point, subIndex) => {
          const position = point.position;
          const pointOpts = Object.assign({}, polylinePointOpts, point);
          return {
            position,
            id: createGuid(),
            _vcPolylineIndx: index,
            ...pointOpts,
            show: ((pointOpts == null ? void 0 : pointOpts.show) || props.editable || polyline.drawStatus === DrawStatus.Drawing) && (cmpName === "VcAnalysisSightline" && polyline.positions.length === 3 ? subIndex !== 1 : true)
          };
        }),
        onMouseover: onMouseoverPoints,
        onMouseout: onMouseoutPoints,
        onReady: onVcCollectionPointReady
      }));
      cmpName.includes("VcMeasurement") && children.push(h(VcCollectionLabel, {
        enableMouseEvent: props.enableMouseEvent,
        show: polyline.show,
        labels: polyline.labels,
        onReady: onVcCollectionLabelReady
      }));
    });
    if (((_a = props.drawtip) == null ? void 0 : _a.show) && canShowDrawTip.value) {
      const { viewer } = $services;
      children.push(h(VcOverlayHtml, {
        position: drawTipPosition.value,
        pixelOffset: (_b = props.drawtip) == null ? void 0 : _b.pixelOffset,
        teleport: {
          to: viewer.container
        }
      }, () => h("div", {
        class: "vc-drawtip vc-tooltip--style"
      }, drawTip.value)));
    }
    if (showEditor.value) {
      const buttons = [];
      if (mouseoverPoint.value) {
        const editorOpts = props.editorOpts;
        for (const key in editorOpts) {
          if (!Array.isArray(editorOpts[key]) && typeof editorOpts[key] !== "number") {
            const opts = {
              ...editorOpts[key]
            };
            delete opts.color;
            buttons.push(h(VcBtn, {
              style: { color: editorOpts[key].color, background: editorOpts[key].background },
              ...opts,
              onclick: onEditorClick.bind(void 0, key)
            }, () => h(VcTooltip, {
              ...editorOpts[key].tooltip
            }, () => {
              var _a2;
              return h("strong", null, ((_a2 = editorOpts[key].tooltip) == null ? void 0 : _a2.tip) || t(`vc.measurement.editor.${key}`));
            })));
          }
        }
      }
      const { viewer } = $services;
      children.push(h(VcOverlayHtml, {
        position: editorPosition.value,
        pixelOffset: (_c = props.editorOpts) == null ? void 0 : _c.pixelOffset,
        teleport: {
          to: viewer.container
        },
        onMouseenter: onMouseenterEditor,
        onMouseleave: onMouseleaveEditor
      }, () => h("div", {
        class: "vc-editor"
      }, buttons)));
    }
    return h(VcCollectionPrimitive, {
      ref: primitiveCollectionRef,
      show: props.show,
      onReady: onPrimitiveCollectionReady
    }, () => children);
  };
}

export { useDrawingSegment as default };
//# sourceMappingURL=use-drawing-segment.mjs.map
