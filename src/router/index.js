import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import KuotaView from "../views/KuotaView.vue";
import SearchView from "../views/SearchView.vue";
import DaftarView from "../views/DaftarView.vue";
import SopView from "../views/SopView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kuota",
      name: "kuota",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: KuotaView,
    },
    {
      path: "/search",
      name: "search",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SearchView,
    },
    {
      path: "/daftar",
      name: "daftar",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DaftarView,
    },
    {
      path: "/sop",
      name: "sop",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SopView,
    },
  ],
});

export default router;
