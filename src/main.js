import Vue from 'vue';
import VHideExampleVue from '@/src/VHideExample.vue';
import '@/dist/vHide.umd';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(VHideExampleVue),
}).$mount('#app');
