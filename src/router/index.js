import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventsView from '../views/EventsView.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home',
    },
  },

  {
    path: "/events",
    name: "Events",
    component: EventsView,
    meta: {
      title: 'Events',
    },
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login',
    },
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register',
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) =>{
  document.title = `${to.meta.title} | Hostel`;
  next();
});

export default router;
