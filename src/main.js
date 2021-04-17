import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

Vue.config.productionTip = false;

Vue.prototype.$apiURL = "http://localhost:8000/api";

Vue.prototype.$userId = JSON.parse(localStorage.getItem("TweetJobs_UserId"));

new Vue({
    router,
    render: function(h) {
        return h(App);
    },
}).$mount("#app");
