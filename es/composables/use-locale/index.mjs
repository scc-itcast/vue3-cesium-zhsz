import { unref, computed, isRef, ref } from 'vue';
import defaultLang from '../../locale/lang/zh-hans.mjs';
import { get } from 'lodash-unified';
import { useGlobalConfig } from '../use-global-config/index.mjs';

const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a;
  return `${(_a = option == null ? void 0 : option[key]) != null ? _a : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const useLocale = () => {
  const locale = useGlobalConfig("locale");
  return buildLocaleContext(computed(() => locale.value || defaultLang));
};

export { buildLocaleContext, buildTranslator, translate, useLocale };
//# sourceMappingURL=index.mjs.map
