import { defineComponent, ref, computed, h, provide } from 'vue';
import useModelToggle, { useModelToggleEmits } from '../../../composables/private/use-model-toggle.mjs';
import { hMergeSlot, hSlot } from '../../../utils/private/render.mjs';
import { fabKey } from '../../../utils/config.mjs';
import useFab from './use-fab.mjs';
import Btn from '../btn/index.mjs';
import Icon from '../icon/index.mjs';
import defaultProps from './defaultProps.mjs';

const fabProps = defaultProps;
var Fab = defineComponent({
  name: "VcFab",
  props: fabProps,
  emits: useModelToggleEmits,
  setup(props, { slots }) {
    const triggerRef = ref(null);
    const showing = ref(props.modelValue === true);
    const { formClass, labelProps } = useFab(props, showing);
    const hideOnRouteChange = computed(() => props.persistent !== true);
    const { hide, toggle } = useModelToggle({
      showing,
      hideOnRouteChange
    });
    const slotScope = computed(() => ({ opened: showing.value }));
    const classes = computed(() => `vc-fab z-fab row inline justify-center vc-fab--align-${props.verticalActionsAlign} ${formClass.value}` + (showing.value === true ? " vc-fab--opened" : " vc-fab--closed"));
    const actionClass = computed(() => `vc-fab__actions flex no-wrap inline vc-fab__actions--${props.direction} vc-fab__actions--${showing.value === true ? "opened" : "closed"}`);
    const iconHolderClass = computed(() => `vc-fab__icon-holder  vc-fab__icon-holder--${showing.value === true ? "opened" : "closed"}`);
    function getIcon(kebab, camel) {
      const slotFn = slots[kebab];
      const classes2 = `q-fab__${kebab} absolute-full`;
      return slotFn === void 0 ? h(Icon, { class: classes2, name: props[kebab] }) : h("div", { class: classes2 }, slotFn(slotScope.value));
    }
    function getTriggerContent() {
      const child = [];
      props.hideIcon !== true && child.push(h("div", { class: iconHolderClass.value }, [getIcon("icon", "icon"), getIcon("active-icon", "activeIcon")]));
      if (props.label !== "" || slots.label !== void 0) {
        child[labelProps.value.action](h("div", labelProps.value.data, slots.label !== void 0 ? slots.label(slotScope.value) : [props.label]));
      }
      return hMergeSlot(slots.tooltip, child);
    }
    provide(fabKey, {
      showing,
      onChildClick(evt) {
        props.hideActionOnClick && hide(evt);
        if (triggerRef.value !== null) {
          triggerRef.value.$el.focus();
        }
      }
    });
    return () => h("div", {
      class: classes.value
    }, [
      h(Btn, {
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
      h("div", { class: actionClass.value }, hSlot(slots.default))
    ]);
  }
});

export { Fab as default, fabProps };
//# sourceMappingURL=fab.mjs.map
