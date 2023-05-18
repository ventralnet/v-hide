import Vue from 'vue';

const updateNode = (el, binding) => {
  const isHide = binding.value;
  el.style.visibility = isHide ? 'hidden' : 'visible';
};

const directiveDefinition = {
  bind: updateNode,
  update: updateNode,
};

Vue.directive('hide', directiveDefinition);

module.exports = directiveDefinition;
