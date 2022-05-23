import Entity from './src/index.mjs';
export { entityProps } from './src/index.mjs';

Entity.install = (app) => {
  app.component(Entity.name, Entity);
};
const _Entity = Entity;
const VcEntity = _Entity;

export { VcEntity, _Entity as default };
//# sourceMappingURL=index.mjs.map
