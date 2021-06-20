import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

// toast
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);

Vue.config.productionTip = false;

Vue.prototype.$apiURL = "http://localhost:8000/api";

Vue.prototype.$userId = JSON.parse(localStorage.getItem("TweetJobs_UserId"));

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
