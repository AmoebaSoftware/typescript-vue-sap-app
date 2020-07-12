import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// const FundamentalVue = require("../node_modules/fundamental-vue");
import FundamentalVue from "fundamental-vue";

Vue.config.productionTip = false;
Vue.use(FundamentalVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
