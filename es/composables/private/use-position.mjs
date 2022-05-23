import { computed, ref } from 'vue';

const positionProps = {
  position: {
    type: String,
    default: "top-right",
    validator: (v) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  }
};
function usePosition(props, $services) {
  const attach = computed(() => {
    const pos = props.position;
    return {
      top: pos.indexOf("top") > -1,
      right: pos.indexOf("right") > -1,
      bottom: pos.indexOf("bottom") > -1,
      left: pos.indexOf("left") > -1,
      vertical: pos === "top" || pos === "bottom",
      horizontal: pos === "left" || pos === "right"
    };
  });
  const top = ref(0);
  const right = ref(0);
  const left = ref(0);
  const bottom = ref(0);
  const style = computed(() => {
    let posX = 0;
    let posY = 0;
    const side = attach.value;
    const dir = 1;
    if (side.top === true && top.value !== 0) {
      posY = `${top.value}px`;
    } else if (side.bottom === true && bottom.value !== 0) {
      posY = `${-bottom.value}px`;
    }
    if (side.left === true && left.value !== 0) {
      posX = `${dir * left.value}px`;
    } else if (side.right === true && right.value !== 0) {
      posX = `${-dir * right.value}px`;
    }
    const css = {
      transform: `translate(${posX}, ${posY})`
    };
    if (props.offset) {
      css.margin = `${props.offset[1]}px ${props.offset[0]}px`;
    }
    if (side.vertical === true) {
      if (left.value !== 0) {
        css["right"] = `${left.value}px`;
      }
      if (right.value !== 0) {
        css["left"] = `${right.value}px`;
      }
    } else if (side.horizontal === true) {
      if (top.value !== 0) {
        css.top = `${top.value}px`;
      }
      if (bottom.value !== 0) {
        css.bottom = `${bottom.value}px`;
      }
    }
    return css;
  });
  const classes = computed(() => `absolute absolute-${props.position}`);
  return {
    attach,
    style,
    classes
  };
}

export { usePosition as default, positionProps };
//# sourceMappingURL=use-position.mjs.map
