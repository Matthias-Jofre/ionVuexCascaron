import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
// import HomePage from '../views/HomePage.vue'
import Users from './pages/UsersPage'

const routes = [
  {
    path: "/",
    redirect: "/users",
  },
  {
    path: "/users",
    component: Users,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
