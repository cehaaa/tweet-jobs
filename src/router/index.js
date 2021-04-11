import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login"),
    },
    {
        path: "/tweet",
        name: "Tweet App",
        component: () => import("@/views/user/TweetApp"),
        children: [
            {
                path: "home",
                component: () => import("@/views/user/Home"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
