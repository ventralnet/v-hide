import Vue from 'vue';
import VHideExampleVue from './VHideExample.vue';
import './lib/vHide';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(VHideExampleVue),
}).$mount('#app');
