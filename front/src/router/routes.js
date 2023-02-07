
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/infos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/infos', component: () => import('src/components/InfoProduct.vue')}
    ]
  },

  {
    path: '/register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/register', component: () => import('src/components/Auth/registerPage.vue')}
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
