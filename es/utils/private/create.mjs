import { markRaw, defineComponent } from 'vue';

const createComponent = (raw) => markRaw(defineComponent(raw));
const createDirective = (raw) => markRaw(raw);

export { createComponent, createDirective };
//# sourceMappingURL=create.mjs.map
