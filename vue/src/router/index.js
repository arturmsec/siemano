import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/formularz',
      name: 'formularz',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/forms/FormView.vue')
    },
    {
      path: '/formularz2',
      name: 'formularz2',
      component: () => import('../views/forms/FormView2.vue')
    },
    {
      path: '/adminpanel',
      name: 'adminpanel',
      component: () => import('../views/AdminPanelView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('../views/RegistryView.vue')
    },
  ]
})

export default router
