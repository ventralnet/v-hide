import Vue from 'vue';

const updateNode = (el, binding) => {
  console.log(`the binding value is ${binding.value}`);
  const isHide = binding.value;
  el.style.visibility = isHide ? 'hidden' : 'visible';
};

const directiveDefinition = {
  bind: updateNode,
  update: updateNode,
};

console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');console.log('adding vue direcetive now');
Vue.directive('hide', directiveDefinition);

export default directiveDefinition;
