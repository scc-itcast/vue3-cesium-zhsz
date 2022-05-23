import { VcPrimitiveGroundPolyline, VcPrimitive } from '../../components/primitives/index.mjs';
import { VcGeometryInstance } from '../../components/geometry-instance/index.mjs';
import { VcGeometryGroundPolyline, VcGeometryPolyline } from '../../components/geometries/index.mjs';
import { VcOverlayHtml } from '../../components/overlays/index.mjs';
import { VcCollectionPoint, VcCollectionLabel, VcPolygon, VcCollectionPrimitive } from '../../components/primitive-collections/index.mjs';
import { VcBtn, VcTooltip } from '../../components/ui/index.mjs';
import { useLocale } from '../use-locale/index.mjs';
import '../../shared/index.mjs';
import { makeCartesian3Array, getFirstIntersection, getGeodesicDistance, calculateAreaByPostions } from '../../utils/cesium-helpers.mjs';
import { getCurrentInstance, ref, computed, nextTick, h } from 'vue';
import useCommon from '../use-common/index.mjs';
import useDrawingAction from './use-drawing-action.mjs';
import { platform } from '../../utils/platform.mjs';
import DrawStatus from '../../shared/src/DrawStatus.mjs';
import MeasureUnits from '../../shared/src/MeasureUnits.mjs';

function useDrawingPolyline(props, ctx, cmpName) {
  const instance = getCurrentInstance();
  const commonState = useCommon(props, ctx, instance);
  if (commonState === void 0) {
    return;
  }
  const { t } = useLocale();
  const $services = commonState.$services;
  const { emit } = ctx;
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
  let lastClickPosition;
  let restorePosition;
  const mouseDelta = 10;
  const renderDatas = ref([]);
  if (props.preRenderDatas && props.preRenderDatas.length) {
    props.preRenderDatas.forEach((preRenderData) => {
      const polylineDrawing = {
        show: true,
        positions: makeCartesian3Array(preRenderData),
        tempPositions: [],
        drawStatus: DrawStatus.AfterDraw,
        loop: props.loop,
        distance: 0,
        area: 0,
        distances: [],
        labels: [],
        angles: [],
        polylineOpts: {},
        pointOpts: {},
        labelOpts: {},
        labelsOpts: {},
        primitiveOpts: {},
        polygonOpts: {}
      };
      renderDatas.value.push(polylineDrawing);
    });
  }
  const computedRenderDatas = computed(() => {
    const { Cartesian3, createGuid, defined, Math: CesiumMath } = Cesium;
    const polylines = [];
    const { viewer } = $services;
    renderDatas.value.forEach((polyline, index) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const labels = [];
      const distances = [];
      const angles = [];
      let distance = 0;
      const dashedLines = [];
      polyline.points = polyline.positions.map((v) => {
        return {
          position: v
        };
      });
      const positions = polyline.positions.slice();
      if (cmpName === "VcAnalysisSightline") {
        const observationPoint = positions.shift();
        const destinationPoints = positions;
        observationPoint && destinationPoints.forEach((destinationPoint) => {
          const positionsNew = [];
          positionsNew.push(observationPoint);
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
          const intersection = getFirstIntersection(observationPoint, destinationPoint, $services.viewer, objectsToExclude);
          if (defined(intersection)) {
            positionsNew.push(intersection);
          }
          positionsNew.push(destinationPoint);
          let distance2 = 0;
          const distances2 = [];
          for (let i = 0; i < positionsNew.length - 1; i++) {
            const s = Cartesian3.distance(positionsNew[i], positionsNew[i + 1]);
            distances2.push(s);
            distance2 = distance2 + s;
          }
          polylines.push({
            ...polyline,
            positions: positionsNew,
            distance: distance2,
            distances: distances2
          });
        });
      } else {
        props.loop && positions.length > 2 && positions.push(positions[0]);
        for (let i = 0; i < positions.length - 1; i++) {
          let s = 0;
          if (((_a = props.polylineOpts) == null ? void 0 : _a.arcType) === 0) {
            s = getGeodesicDistance(positions[i], positions[i + 1], $services.viewer.scene.globe.ellipsoid);
          } else {
            s = Cartesian3.distance(positions[i], positions[i + 1]);
          }
          distances.push(s);
          distance = distance + s;
          const polylineLabelsOpts = Object.assign({}, props.labelsOpts, polyline.labelsOpts);
          if (s > 0 && positions.length > 2 && props.showDistanceLabel) {
            labels.push({
              text: MeasureUnits.distanceToString(s, (_b = props.measureUnits) == null ? void 0 : _b.distanceUnits, props.locale, (_c = props.decimals) == null ? void 0 : _c.distance),
              position: Cartesian3.midpoint(positions[i], positions[i + 1], {}),
              id: createGuid(),
              ...polylineLabelsOpts
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
                text: MeasureUnits.angleToString(angle, (_d = props.measureUnits) == null ? void 0 : _d.angleUnits, props.locale, (_e = props.decimals) == null ? void 0 : _e.angle),
                position: point1,
                id: createGuid(),
                ...polylineLabelsOpts
              });
            }
          }
          if (props.showDashedLine) {
            dashedLines.push({
              positions: [positions[i], getEndPostion(positions[i])]
            });
            if (i === positions.length - 2) {
              dashedLines.push({
                positions: [positions[i + 1], getEndPostion(positions[i + 1])]
              });
            }
          }
        }
        const area = calculateAreaByPostions(positions);
        const polylineLabelOpts = Object.assign({}, props.labelOpts, polyline.labelOpts);
        if (cmpName.includes("Area")) {
          labels.push({
            text: MeasureUnits.areaToString(area, (_f = props.measureUnits) == null ? void 0 : _f.areaUnits, props.locale, (_g = props.decimals) == null ? void 0 : _g.area),
            position: positions[positions.length - 1],
            id: createGuid(),
            ...polylineLabelOpts
          });
        } else {
          labels.push({
            text: MeasureUnits.distanceToString(distance, (_h = props.measureUnits) == null ? void 0 : _h.distanceUnits, props.locale, (_i = props.decimals) == null ? void 0 : _i.distance),
            position: positions[positions.length - 1],
            id: createGuid(),
            ...polylineLabelOpts
          });
        }
        polyline.positionsDegreesArray = polyline.positions.map((v) => {
          const cart = Cesium.Cartographic.fromCartesian(v, viewer.scene.globe.ellipsoid);
          return [CesiumMath.toDegrees(cart.longitude), CesiumMath.toDegrees(cart.latitude), cart.height];
        });
        polylines.push({
          ...polyline,
          labels,
          distance,
          distances,
          area,
          angles,
          dashedLines
        });
      }
    });
    return polylines;
  });
  instance.mount = async () => {
    const { viewer } = $services;
    props.autoUpdateLabelPosition && cmpName.includes("VcMeasurement") && viewer.scene.preRender.addEventListener(updateLabelPosition);
    return true;
  };
  instance.unmount = async () => {
    const { viewer } = $services;
    props.autoUpdateLabelPosition && cmpName.includes("VcMeasurement") && viewer.scene.preRender.removeEventListener(updateLabelPosition);
    return true;
  };
  const getEndPostion = (position) => {
    const { defined, defaultValue } = Cesium;
    const { viewer } = $services;
    const scene = viewer.scene;
    const globe = scene.globe;
    const ellipsoid = scene.frameState.mapProjection.ellipsoid;
    const positionCartographic = ellipsoid.cartesianToCartographic(position);
    positionCartographic.height = defined(globe) ? defaultValue(globe.getHeight(positionCartographic), 0) : 0;
    return ellipsoid.cartographicToCartesian(positionCartographic);
  };
  const updateLabelPosition = () => {
    computedRenderDatas.value.forEach((polyline, index) => {
      var _a;
      const positions = polyline.positions;
      if (!(positions.length < 2)) {
        const { defined, SceneTransforms, Cartesian2, HorizontalOrigin } = Cesium;
        const { viewer } = $services;
        const scene = viewer.scene;
        let startPosition = positions[0];
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
            if (labels[i - 1] !== labelTotalLength) {
              labels[i - 1].horizontalOrigin = 0 < l ? HorizontalOrigin.LEFT : HorizontalOrigin.RIGHT;
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
  const startNew = () => {
    const polyline = {
      show: false,
      positions: [],
      tempPositions: [],
      drawStatus: DrawStatus.BeforeDraw,
      loop: props.loop,
      distance: 0,
      area: 0,
      distances: [],
      labels: [],
      angles: [],
      polylineOpts: {},
      pointOpts: {},
      labelOpts: {},
      labelsOpts: {},
      primitiveOpts: {},
      polygonOpts: {}
    };
    if (cmpName === "VcMeasurementHorizontal") {
      const { Cartesian3, Plane } = Cesium;
      Object.assign(polyline, {
        dashedLines: [],
        heightPlane: new Plane(Cartesian3.UNIT_X, 0),
        heightPlaneCV: new Plane(Cartesian3.UNIT_X, 0),
        height: 0,
        firstMove: false,
        tempNextPos: new Cartesian3()
      });
    }
    drawStatus.value = DrawStatus.BeforeDraw;
    renderDatas.value.push(polyline);
    canShowDrawTip.value = true;
    drawTip.value = drawTipOpts.value.drawingTipStart;
  };
  const stop = (removeLatest = true) => {
    if (removeLatest && drawStatus.value === DrawStatus.Drawing) {
      renderDatas.value.pop();
    }
    const index = editingPoint.value ? editingPoint.value._vcPolylineIndex : renderDatas.value.length - 1;
    const polyline = renderDatas.value[index];
    if (polyline) {
      polyline.positions = polyline.tempPositions;
      polyline.drawStatus = DrawStatus.AfterDraw;
    }
    drawStatus.value = DrawStatus.AfterDraw;
    canShowDrawTip.value = false;
    drawTipPosition.value = [0, 0, 0];
  };
  const handleMouseClick = (movement, options) => {
    var _a;
    const { viewer, drawingFabInstance, getWorldPosition, selectedDrawingActionInstance } = $services;
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
    const { defined, Cartesian2, Plane, Cartesian3 } = Cesium;
    const index = editingPoint.value ? editingPoint.value._vcPolylineIndex : renderDatas.value.length - 1;
    const polyline = renderDatas.value[index];
    const tempPositions = polyline.tempPositions;
    if (options.button === 2 && editingPoint.value) {
      if (editorType.value === "insert") {
        polyline.positions.splice(editingPoint.value._index, 1);
      } else {
        polyline.positions[editingPoint.value._index] = restorePosition;
      }
      drawStatus.value = DrawStatus.AfterDraw;
      polyline.drawStatus = DrawStatus.AfterDraw;
      editingPoint.value = void 0;
      drawTip.value = drawTipOpts.value.drawingTipStart;
      drawingFabInstanceVm.editingActionName = void 0;
      canShowDrawTip.value = defined(selectedDrawingActionInstance);
      nextTick(() => {
        emit("drawEvt", Object.assign({
          index,
          name: drawingType,
          renderDatas,
          finished: true,
          windowPoistion: movement,
          type: "cancel"
        }, computedRenderDatas.value[index]), viewer);
      });
      return;
    }
    lastClickPosition = lastClickPosition || new Cesium.Cartesian2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
    if (Cartesian2.magnitude(Cartesian2.subtract(lastClickPosition, movement, {})) < mouseDelta) {
      return;
    }
    if (options.button === 2 && drawStatus.value === DrawStatus.Drawing) {
      if (tempPositions.length > 1) {
        tempPositions.pop();
        handleMouseMove(movement);
      }
    }
    if (options.button !== 0) {
      return;
    }
    const scene = viewer.scene;
    const position = getWorldPosition(scene, movement, {});
    if (!defined(position)) {
      return;
    }
    let finished = false;
    let type = "new";
    if (cmpName === "VcMeasurementHorizontal") {
      if (editingPoint.value) {
        drawStatus.value = DrawStatus.AfterDraw;
        editingPoint.value = void 0;
        finished = true;
        type = editorType.value;
        drawTip.value = drawTipOpts.value.drawingTipStart;
      } else if (tempPositions.length === 0) {
        const ellipsoid = scene.frameState.mapProjection.ellipsoid;
        tempPositions.push(position);
        polyline.positions = tempPositions;
        polyline.heightPlane = Plane.fromPointNormal(position, ellipsoid.geodeticSurfaceNormal(position, {}), polyline.heightPlane);
        const positionCartographic = ellipsoid.cartesianToCartographic(position, {});
        const positionProject = scene.mapProjection.project(positionCartographic, {});
        const positionCV = Cartesian3.fromElements(positionProject.z, positionProject.x, positionProject.y, positionProject);
        polyline.heightPlaneCV = Plane.fromPointNormal(positionCV, Cartesian3.UNIT_X, polyline.heightPlaneCV);
        polyline.height = positionCartographic.height;
        polyline.firstMove = true;
        polyline.drawStatus = DrawStatus.Drawing;
        polyline.show = true;
        drawStatus.value = DrawStatus.Drawing;
      } else {
        tempPositions.push(polyline.tempNextPos);
        polyline.positions = tempPositions;
        polyline.firstMove = true;
      }
      drawTip.value = drawTipOpts.value.drawingTipEnd;
    } else {
      if (editingPoint.value) {
        if (platform().hasTouch === true) {
          const position2 = getWorldPosition(scene, movement, {});
          if (defined(position2)) {
            const positions = polyline.positions;
            positions.splice(editingPoint.value._index, 1, position2);
            editingPoint.value.pixelSize = ((_a = props.pointOpts) == null ? void 0 : _a.pixelSize) * 1;
          }
        }
        drawStatus.value = DrawStatus.AfterDraw;
        editingPoint.value = void 0;
        finished = true;
        type = editorType.value;
        drawTip.value = drawTipOpts.value.drawingTipStart;
      } else {
        tempPositions.push(position);
        polyline.positions = tempPositions;
        polyline.show = true;
        polyline.drawStatus = DrawStatus.Drawing;
        drawStatus.value = DrawStatus.Drawing;
        canShowDrawTip.value = true;
        drawTip.value = drawTipOpts.value.drawingTipEnd;
      }
      if (type !== "new") {
        drawingFabInstanceVm.editingActionName = void 0;
        canShowDrawTip.value = defined(selectedDrawingActionInstance);
      }
    }
    Cartesian2.clone(movement, lastClickPosition);
    nextTick(() => {
      emit("drawEvt", Object.assign({
        index,
        name: drawingType,
        renderDatas,
        finished,
        position: cmpName === "VcMeasurementHorizontal" ? polyline.positions[polyline.positions.length - 1] : position,
        windowPoistion: movement,
        type
      }, computedRenderDatas.value[index]), viewer);
    });
  };
  const handleMouseMove = (movement, options) => {
    const { viewer, getWorldPosition } = $services;
    const scene = viewer.scene;
    const position = getWorldPosition(scene, movement, {});
    const { defined } = Cesium;
    if (!defined(position)) {
      return;
    }
    drawTipPosition.value = position;
    if (drawStatus.value !== DrawStatus.Drawing) {
      return;
    }
    const index = editingPoint.value ? editingPoint.value._vcPolylineIndex : renderDatas.value.length - 1;
    const polyline = renderDatas.value[index];
    let type = "new";
    if (cmpName === "VcMeasurementHorizontal") {
      const { SceneMode, IntersectionTests, Cartesian3 } = Cesium;
      const ellipsoid = scene.frameState.mapProjection.ellipsoid;
      const positions = polyline.positions;
      const cameraRay = scene.camera.getPickRay(movement);
      let intersectionPosition, unprojectPosition;
      if (scene.mode === SceneMode.SCENE3D && polyline.heightPlane) {
        intersectionPosition = IntersectionTests.rayPlane(cameraRay, polyline.heightPlane);
      } else if (scene.mode === SceneMode.COLUMBUS_VIEW && polyline.heightPlaneCV) {
        intersectionPosition = IntersectionTests.rayPlane(cameraRay, polyline.heightPlaneCV);
        intersectionPosition = Cartesian3.fromElements(intersectionPosition.y, intersectionPosition.z, intersectionPosition.x, intersectionPosition);
        unprojectPosition = scene.mapProjection.unproject(intersectionPosition);
        intersectionPosition = ellipsoid.cartographicToCartesian(unprojectPosition);
      } else {
        intersectionPosition = scene.camera.pickEllipsoid(movement, ellipsoid);
        if (defined(intersectionPosition)) {
          const cartographicPosition = ellipsoid.cartesianToCartographic(intersectionPosition);
          cartographicPosition.height = polyline.height || 0;
          intersectionPosition = ellipsoid.cartographicToCartesian(cartographicPosition, intersectionPosition);
        }
      }
      if (!defined(intersectionPosition)) {
        return;
      }
      if (!polyline.firstMove && (options == null ? void 0 : options.shift)) {
        const lastPosition = positions[positions.length - 2];
        const tempNextPos = polyline.tempNextPos;
        const d1 = Cartesian3.subtract(tempNextPos, lastPosition, {});
        let d2 = Cartesian3.subtract(intersectionPosition, lastPosition, {});
        d2 = Cartesian3.projectVector(d2, d1, d2);
        intersectionPosition = Cartesian3.add(lastPosition, d2, intersectionPosition);
      }
      if (editingPoint.value) {
        const positions2 = polyline.positions;
        positions2.splice(editingPoint.value._index, 1, intersectionPosition);
        type = editorType.value;
      } else {
        const tempPositions = polyline.tempPositions.slice();
        tempPositions.push(intersectionPosition);
        polyline.positions = tempPositions;
        polyline.firstMove = false;
        polyline.tempNextPos = Object.assign(intersectionPosition);
        drawTip.value = drawTipOpts.value.drawingTipEnd;
      }
    } else {
      if (editingPoint.value) {
        const positions = polyline.positions;
        positions.splice(editingPoint.value._index, 1, position);
        type = editorType.value;
      } else {
        const tempPositions = polyline.tempPositions.slice();
        tempPositions.push(position);
        polyline.positions = tempPositions;
      }
    }
    nextTick(() => {
      emit("drawEvt", Object.assign({
        index,
        name: drawingType,
        renderDatas,
        finished: false,
        position: cmpName === "VcMeasurementHorizontal" ? polyline.positions[polyline.positions.length - 1] : position,
        windowPoistion: movement,
        type
      }, computedRenderDatas.value[index]), viewer);
    });
  };
  const handleDoubleClick = (movement) => {
    const { drawingFabInstance, selectedDrawingActionInstance, viewer } = $services;
    if (drawStatus.value === DrawStatus.Drawing) {
      const index = editingPoint.value ? editingPoint.value._vcPolylineIndex : renderDatas.value.length - 1;
      const polyline = renderDatas.value[index];
      stop(false);
      drawTip.value = drawTipOpts.value.drawingTipStart;
      nextTick(() => {
        emit("drawEvt", Object.assign({
          index,
          name: drawingType,
          renderDatas,
          finished: true,
          position: polyline.positions[polyline.positions.length - 1],
          windowPoistion: movement,
          type: "new"
        }, computedRenderDatas.value[index]), viewer);
        if (props.mode === 1) {
          const drawingFabInstanceVm = drawingFabInstance == null ? void 0 : drawingFabInstance.proxy;
          drawingFabInstanceVm.toggleAction(selectedDrawingActionInstance);
        }
      });
    }
  };
  const getPointIndexes = () => {
    let polylineIndex = editingPoint.value._vcPolylineIndex;
    let pointIndex = editingPoint.value._index;
    if (cmpName === "VcAnalysisSightline") {
      for (let i = 0; i < renderDatas.value.length; i++) {
        const polyline = renderDatas.value[i];
        for (let j = 0; j < polyline.positions.length; j++) {
          const position = polyline.positions[j];
          if (editingPoint.value.position.equals(position)) {
            polylineIndex = i;
            pointIndex = j;
          }
        }
      }
    }
    return [polylineIndex, pointIndex];
  };
  const onEditorClick = (e) => {
    var _a, _b, _c;
    editorPosition.value = [0, 0, 0];
    showEditor.value = false;
    if (!props.editable) {
      return;
    }
    const { viewer, drawingFabInstance } = $services;
    const drawingFabInstanceVm = drawingFabInstance == null ? void 0 : drawingFabInstance.proxy;
    editorType.value = e;
    if (e === "move") {
      drawTip.value = drawTipOpts.value.drawingTipEditing;
      drawStatus.value = DrawStatus.Drawing;
      editingPoint.value = mouseoverPoint.value;
      canShowDrawTip.value = true;
      const indexes = getPointIndexes();
      editingPoint.value._vcPolylineIndex = indexes[0];
      editingPoint.value._index = indexes[1];
      restorePosition = renderDatas.value[indexes[0]].positions[indexes[1]];
      drawingFabInstanceVm.editingActionName = drawingType;
    } else if (e === "insert") {
      const index = mouseoverPoint.value._vcPolylineIndex;
      const polyline = renderDatas.value[index];
      polyline.positions.splice(mouseoverPoint.value._index, 0, mouseoverPoint.value.position);
      editingPoint.value = mouseoverPoint.value;
      canShowDrawTip.value = true;
      drawStatus.value = DrawStatus.Drawing;
      drawTip.value = drawTipOpts.value.drawingTipEditing;
      drawingFabInstanceVm.editingActionName = drawingType;
    } else if (e === "remove") {
      const index = mouseoverPoint.value._vcPolylineIndex;
      const polyline = renderDatas.value[index];
      polyline.positions.length > 2 && polyline.positions.splice(mouseoverPoint.value._index, 1);
    } else if (e === "removeAll") {
      const index = mouseoverPoint.value._vcPolylineIndex;
      renderDatas.value.splice(index, 1);
    } else {
      const index = mouseoverPoint.value._vcPolylineIndex;
      const polyline = renderDatas.value[index];
      (_c = (_b = (_a = props.editorOpts) == null ? void 0 : _a[e]) == null ? void 0 : _b.callback) == null ? void 0 : _c.call(_b, index, polyline);
    }
    emit("editorEvt", {
      type: e,
      renderDatas,
      name: drawingType,
      index: mouseoverPoint.value._vcPolylineIndex
    }, viewer);
  };
  const clear = () => {
    renderDatas.value = [];
    stop();
  };
  const publicMethods = {
    computedRenderDatas,
    renderDatas,
    startNew,
    stop,
    clear,
    handleMouseClick,
    handleMouseMove,
    handleDoubleClick
  };
  Object.assign(instance.proxy, publicMethods);
  return () => {
    var _a, _b;
    const { createGuid, Cartesian3 } = Cesium;
    const children = [];
    const points = [];
    computedRenderDatas.value.forEach((polyline, index) => {
      var _a2, _b2;
      const positions = polyline.positions.slice();
      if (positions.length > 1) {
        polyline.loop && positions.push(positions[0]);
        const polylineOpts = Object.assign({}, props.polylineOpts, polyline.polylineOpts);
        props.clampToGround && delete polylineOpts.arcType;
        const primitiveOpts = Object.assign({}, props.primitiveOpts, polyline.primitiveOpts);
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
      }
      const dashLineOpts = Object.assign({}, props.dashLineOpts, polyline.dashLineOpts);
      const dashLinePrimitiveOpts = Object.assign({}, props.dashLinePrimitiveOpts, polyline.dashLinePrimitiveOpts);
      (_a2 = polyline.dashedLines) == null ? void 0 : _a2.forEach((dashedLine) => {
        children.push(h(VcPrimitive, {
          show: polyline.show && props.dashLinePrimitiveOpts.show || props.editable || polyline.drawStatus === DrawStatus.Drawing,
          ...dashLinePrimitiveOpts
        }, () => h(VcGeometryInstance, {
          id: createGuid()
        }, () => h(VcGeometryPolyline, {
          positions: dashedLine.positions,
          ...dashLineOpts
        }))));
      });
      const polylinePointOpts = Object.assign({}, props.pointOpts, polyline.pointOpts);
      children.push(h(VcCollectionPoint, {
        enableMouseEvent: props.enableMouseEvent,
        show: polyline.show,
        points: polyline.points.map((point, subIndex) => {
          var _a3;
          const position = point.position;
          let includes = false;
          for (let i = 0; i < points.length; i++) {
            Cartesian3.equals(position, points[i]) && (includes = true);
          }
          const show = (((_a3 = props.pointOpts) == null ? void 0 : _a3.show) || props.editable || polyline.drawStatus === DrawStatus.Drawing) && (cmpName === "VcAnalysisSightline" && polyline.positions.length === 3 ? subIndex !== 1 : true) && !includes;
          if (cmpName === "VcAnalysisSightline") {
            points.push(position);
          }
          const pointOpts = Object.assign({}, polylinePointOpts, point);
          return {
            position,
            id: createGuid(),
            _vcPolylineIndex: index,
            show,
            ...pointOpts
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
      if (positions.length > 2 && (cmpName.includes("Polygon") || cmpName.includes("Area"))) {
        const polygonOpts = Object.assign({}, props.polygonOpts, polyline.polygonOpts);
        children.push(h(VcPolygon, {
          positions,
          clampToGround: props.clampToGround,
          show: polyline.show && ((_b2 = props.polygonOpts) == null ? void 0 : _b2.show),
          ...polygonOpts,
          onReady: (readyObject) => {
            var _a3;
            onVcPrimitiveReady(readyObject);
            (_a3 = polygonOpts == null ? void 0 : polygonOpts.onReady) == null ? void 0 : _a3.call(polygonOpts, readyObject);
            readyObject.cesiumObject._vcPolylineIndex = index;
          }
        }));
      }
    });
    if (((_a = props.drawtip) == null ? void 0 : _a.show) && canShowDrawTip.value) {
      const { viewer } = $services;
      children.push(h(VcOverlayHtml, {
        position: drawTipPosition.value,
        pixelOffset: props.drawtip.pixelOffset,
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
              onclick: onEditorClick.bind("polyline", key)
            }, () => h(VcTooltip, {
              ...editorOpts[key].tooltip
            }, () => {
              var _a2;
              return h("strong", null, ((_a2 = editorOpts[key].tooltip) == null ? void 0 : _a2.tip) || t(`vc.drawing.editor.${key}`));
            })));
          }
        }
      }
      const { viewer } = $services;
      children.push(h(VcOverlayHtml, {
        position: editorPosition.value,
        pixelOffset: (_b = props.editorOpts) == null ? void 0 : _b.pixelOffset,
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

export { useDrawingPolyline as default };
//# sourceMappingURL=use-drawing-polyline.mjs.map
