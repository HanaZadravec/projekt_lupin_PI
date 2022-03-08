import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";
import "vue-search-select/dist/VueSearchSelect.css";
import VueCountdownTimer from "vuejs-countdown-timer";
import store from "@/index.js";

Vue.use(VueCountdownTimer);
Vue.config.productionTip = false;
Vue.use(Croppa);

export const eventbus = new Vue();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
