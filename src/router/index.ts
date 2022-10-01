import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login",
    },
    component: () =>
      import(
        /* webpackChunkName: "login" */
        "../views/LoginView.vue"
      ),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      requiresAuth: true,
      title: "Dashboard",
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */
        "../views/dashboard/DashboardView.vue"
      ),
  },
  {
    path: "/dashboard/staff",
    name: "dashboard-staff",
    meta: {
      requiresAuth: true,
      title: "Staff",
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboardStaff" */
        "../views/dashboard/StaffView.vue"
      ),
  },
  {
    path: "/dashboard/customer",
    name: "dashboard-customer",
    meta: {
      requiresAuth: true,
      title: "Customer",
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboardCustomer" */
        "../views/dashboard/CustomerView.vue"
      ),
  },
  {
    path: "/dashboard/product",
    name: "dashboard-product",
    meta: {
      requiresAuth: true,
      title: "Product",
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboardProduct" */
        "../views/dashboard/ProductView.vue"
      ),
  },
  {
    path: "/dashboard/claim",
    name: "dashboard-claim",
    meta: {
      requiresAuth: true,
      title: "Claim",
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboardClaim" */
        "../views/dashboard/ClaimView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  window.document.title = `${to.meta!.title} - Tictag`;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const loggedIn = localStorage.getItem("user");
    if (!loggedIn) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
