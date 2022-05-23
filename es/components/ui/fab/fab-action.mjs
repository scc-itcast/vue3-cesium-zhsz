import { defineComponent, inject, computed, h, getCurrentInstance } from 'vue';
import { fabKey } from '../../../utils/config.mjs';
import { hMergeSlot } from '../../../utils/private/render.mjs';
import Btn from '../btn/index.mjs';
import Icon from '../icon/index.mjs';
import useFab from './use-fab.mjs';
import defaultProps, { anchorMap } from './defaultPropsAction.mjs';

const fabActionProps = defaultProps;
var FabAction = defineComponent({
  name: "VcFabAction",
  props: fabActionProps,
  emits: ["click"],
  setup(props, { slots, emit }) {
    const $fab = inject(fabKey);
    const { formClass, labelProps } = useFab(props, $fab == null ? void 0 : $fab.showing);
    const classes = computed(() => {
      let align = void 0;
      if (props.anchor) {
        align = anchorMap[props.anchor];
      }
      return formClass.value + (align !== void 0 ? ` ${align}` : "");
    });
    const isDisabled = computed(() => {
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
      props.icon !== "" && child.push(h(Icon, { name: props.icon }));
      props.label !== "" && child[labelProps.value.action](h("div", labelProps.value.data, [props.label]));
      return hMergeSlot(slots.default, child);
    }
    const vm = getCurrentInstance();
    Object.assign(vm == null ? void 0 : vm.proxy, { click });
    return () => h(Btn, {
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

export { FabAction as default, fabActionProps };
//# sourceMappingURL=fab-action.mjs.map
