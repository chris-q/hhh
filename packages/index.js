import diButton from './mybutton/index.js';

const components = [
  diButton
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  diButton
};
