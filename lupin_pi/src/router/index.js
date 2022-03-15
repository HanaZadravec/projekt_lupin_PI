import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/coins",
    name: "Coins",
    component: () =>
      import(/* webpackChunkName: "coins" */ "../views/Coins.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/paintings",
    name: "Paintings",
    component: () =>
      import(/* webpackChunkName: "paintings" */ "../views/Paintings.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/sculptures",
    name: "Sculptures",
    component: () =>
      import(/* webpackChunkName: "sculptures" */ "../views/Sculptures.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/comics",
    name: "Comics",
    component: () =>
      import(/* webpackChunkName: "comics" */ "../views/Comics.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/Books.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/maps",
    name: "Maps",
    component: () => import(/* webpackChunkName: "maps" */ "../views/Maps.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/raresignatures",
    name: "Rare signatures",
    component: () =>
      import(
        /* webpackChunkName: "raresignatures" */ "../views/Raresignatures.vue"
      ),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/productssignedbycelebrities",
    name: "Products signed by celebrities",
    component: () =>
      import(
        /* webpackChunkName: "products signed by celebrities" */ "../views/Productssignedbycelebrities.vue"
      ),
    meta: {
      needsUser: true,
    },
  },

  {
    path: "/cards",
    name: "Cards",
    component: () =>
      import(/* webpackChunkName: "cards" */ "../views/Cards.vue"),
    meta: {
      needsUser: true,
    },
  },

  {
    path: "/changepass",
    name: "Change password",
    component: () =>
      import(/* webpackChunkName: "changepass" */ "../views/changepass.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/forgotpass",
    name: "Forgot password",
    component: () =>
      import(/* webpackChunkName: "forgotpass" */ "../views/forgotpass.vue"),
    meta: {
      needsUser: false,
    },
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/signup.vue"),
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/ourstory",
    name: "Our story",
    component: () =>
      import(/* webpackChunkName: "Our story" */ "../views/ourstory.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/ourteam",
    name: "Our team",
    component: () =>
      import(/* webpackChunkName: "Our team" */ "../views/ourteam.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/termsofservice",
    name: "Terms of service",
    component: () =>
      import(
        /* webpackChunkName: "Terms of service" */ "../views/termsofservice.vue"
      ),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/contact.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: () =>
      import(/* webpackChunkName: "Sponsors" */ "../views/sponsors.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "Sponsors" */ "../views/checkout.vue"),
    meta: {
      needsUser: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
