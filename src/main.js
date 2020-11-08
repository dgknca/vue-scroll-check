import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
