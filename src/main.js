import Vue from "vue";
import App from "./App.vue";
import "./plagins/elements";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  /* eslint-disable */
  // router,
  // store,
  /* eslint-disable */
  store,
  render: (h) => h(App),
}).$mount("#app");
