import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
// import HomePage from '../views/HomePage.vue'
import Users from '../pages/UsersPage'
import Registro from '../pages/RegistroPage'

const routes = [
  {
    path: "/",
    redirect: "/users",
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/registro",
    component: Registro,
  },
  {
    path: '/panel',
    component: () => import('../pages/SplitPane.vue'),
    children: [
      {
        path: ':id',
        name: 'entry',
        component: () => import('../pages/FolderPage.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
