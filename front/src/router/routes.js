const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/infos",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/infos",
        component: () => import("src/components/InfoProduct.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/login",
        component: () => import("src/components/loginPage.vue"),
      },
    ],
  },
  {
    path: "/basket",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/basket",
        component: () => import("src/components/basketPage.vue"),
      },
    ],
  },
  {
    path: "/commandSuccess",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/commandSuccess",
        component: () => import("src/components/commandSuccess.vue"),
      },
    ],
  },

  {
    path: "/infos",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/infos",
        component: () => import("src/components/InfoProduct.vue"),
      },
    ],
  },

  {
    path: "/register",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/register",
        component: () => import("src/components/registerPage.vue"),
      },
    ],
  },

  {
    path: "/add",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/add",
        component: () => import("src/components/addProduct.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
