import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "./HelloWorld";
import Login from "./login";
import App from "../App";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "App",
      component: App
    },
    {
      path: "/helloworld",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
