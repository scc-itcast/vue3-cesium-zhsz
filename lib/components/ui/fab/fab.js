'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useModelToggle = require('../../../composables/private/use-model-toggle.js');
var render = require('../../../utils/private/render.js');
var config = require('../../../utils/config.js');
var useFab = require('./use-fab.js');
var index$1 = require('../btn/index.js');
var index = require('../icon/index.js');
var defaultProps = require('./defaultProps.js');

const fabProps = defaultProps["default"];
var Fab = vue.defineComponent({
  name: "VcFab",
  props: fabProps,
  emits: useModelToggle.useModelToggleEmits,
  setup(props, { slots }) {
    const triggerRef = vue.ref(null);
    const showing = vue.ref(props.modelValue === true);
    const { formClass, labelProps } = useFab["default"](props, showing);
    const hideOnRouteChange = vue.computed(() => props.persistent !== true);
    const { hide, toggle } = useModelToggle["default"]({
      showing,
      hideOnRouteChange
    });
    const slotScope = vue.computed(() => ({ opened: showing.value }));
    const classes = vue.computed(() => `vc-fab z-fab row inline justify-center vc-fab--align-${props.verticalActionsAlign} ${formClass.value}` + (showing.value === true ? " vc-fab--opened" : " vc-fab--closed"));
    const actionClass = vue.computed(() => `vc-fab__actions flex no-wrap inline vc-fab__actions--${props.direction} vc-fab__actions--${showing.value === true ? "opened" : "closed"}`);
    const iconHolderClass = vue.computed(() => `vc-fab__icon-holder  vc-fab__icon-holder--${showing.value === true ? "opened" : "closed"}`);
    function getIcon(kebab, camel) {
      const slotFn = slots[kebab];
      const classes2 = `q-fab__${kebab} absolute-full`;
      return slotFn === void 0 ? vue.h(index["default"], { class: classes2, name: props[kebab] }) : vue.h("div", { class: classes2 }, slotFn(slotScope.value));
    }
    function getTriggerContent() {
      const child = [];
      props.hideIcon !== true && child.push(vue.h("div", { class: iconHolderClass.value }, [getIcon("icon", "icon"), getIcon("active-icon", "activeIcon")]));
      if (props.label !== "" || slots.label !== void 0) {
        child[labelProps.value.action](vue.h("div", labelProps.value.data, slots.label !== void 0 ? slots.label(slotScope.value) : [props.label]));
      }
      return render.hMergeSlot(slots.tooltip, child);
    }
    vue.provide(config.fabKey, {
      showing,
      onChildClick(evt) {
        props.hideActionOnClick && hide(evt);
        if (triggerRef.value !== null) {
          triggerRef.value.$el.focus();
        }
      }
    });
    return () => vue.h("div", {
      class: classes.value
    }, [
      vue.h(index$1["default"], {
        ref: triggerRef,
        class: formClass.value,
        ...props,
        noWrap: true,
        stack: props.stacked,
        align: void 0,
        icon: void 0,
        label: void 0,
        noCaps: true,
        fab: true,
        flat: props.flat,
        size: props.size,
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true",
        onClick: toggle
      }, getTriggerContent),
      vue.h("div", { class: actionClass.value }, render.hSlot(slots.default))
    ]);
  }
});

exports["default"] = Fab;
exports.fabProps = fabProps;
//# sourceMappingURL=fab.js.map
