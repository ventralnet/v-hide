const updateNode = (el, binding) => {
  const isHide = binding.value;
  el.style.visibility = isHide ? 'hidden' : 'visible';
};

const directiveDefinition = {
  beforeMount: updateNode,
  updated: updateNode,
};

export default directiveDefinition;

