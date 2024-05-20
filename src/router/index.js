import { createRouter, createWebHistory } from "vue-router";
import { appStore } from "../store/app";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: { authorized_role: 1, title: "Liste des tips" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const initApp = async () => {
  return axios.post(import.meta.env.VITE_INIT_APP_URL);
};

router.beforeEach(async (to, from, next) => {
  if (appStore.getState().loaded === false) {
    let response = await initApp();
    appStore.set({
      user_role: response.data.user_role,
      username: response.data.username,
      config: response.data.config,
      loaded: true,
    });
  }
  let role = appStore.getState().user_role;

  if (!to.meta.authorized_role) return next();

  if (to.meta.authorized_role !== role) {
    if (role >= to.meta.authorized_role) {
      return next();
    }
  } else {
    return next();
  }
});

router.afterEach((to, from) => {
  document.title = to.meta.title
    ? "Traveling Rat - " + to.meta.title
    : "Traveling Rat";
});

export default router;
