import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TotemView from '../views/TotemView.vue'
import TotemDetails from '../views/TotemDetailsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomeView
    },
    {
      path: "/totems",
      component: TotemView
    },
    {
      path: "/totems/:id",
      component: TotemDetails
    }
  ]
})

export default router
