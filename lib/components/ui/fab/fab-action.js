'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var config = require('../../../utils/config.js');
var render = require('../../../utils/private/render.js');
var index$1 = require('../btn/index.js');
var index = require('../icon/index.js');
var useFab = require('./use-fab.js');
var defaultPropsAction = require('./defaultPropsAction.js');

const fabActionProps = defaultPropsAction["default"];
var FabAction = vue.defineComponent({
  name: "VcFabAction",
  props: fabActionProps,
  emits: ["click"],
  setup(props, { slots, emit }) {
    const $fab = vue.inject(config.fabKey);
    const { formClass, labelProps } = useFab["default"](props, $fab == null ? void 0 : $fab.showing);
    const classes = vue.computed(() => {
      let align = void 0;
      if (props.anchor) {
        align = defaultPropsAction.anchorMap[props.anchor];
      }
      return formClass.value + (align !== void 0 ? ` ${align}` : "");
    });
    const isDisabled = vue.computed(() => {
      var _a;
      return props.disable === true || ((_a = $fab == null ? void 0 : $fab.showing) == null ? void 0 : _a.value) !== true;
    });
    function click(e) {
      var _a;
      (_a = $fab == null ? void 0 : $fab.onChildClick) == null ? void 0 : _a.call($fab, e);
      emit("click", e);
    }
    function getContent() {
      const child = [];
      props.icon !== "" && child.push(vue.h(index["default"], { name: props.icon }));
      props.label !== "" && child[labelProps.value.action](vue.h("div", labelProps.value.data, [props.label]));
      return render.hMergeSlot(slots.default, child);
    }
    const vm = vue.getCurrentInstance();
    Object.assign(vm == null ? void 0 : vm.proxy, { click });
    return () => vue.h(index$1["default"], {
      class: classes.value,
      ...props,
      noWrap: true,
      stack: props.stacked,
      icon: void 0,
      label: void 0,
      noCaps: true,
      fabMini: true,
      disable: isDisabled.value,
      size: props.size,
      onClick: click
    }, getContent);
  }
});

exports["default"] = FabAction;
exports.fabActionProps = fabActionProps;
//# sourceMappingURL=fab-action.js.map
