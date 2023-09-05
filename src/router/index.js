import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import liberayBlog from '../views/liberayBlog.vue'
import HistoreBlog from '../views/HistoreBlog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/item/:id',    
      name: 'liberay',
      component: liberayBlog
    },
    // {
    //   path:'/item/:id',
    //   name:'histore',
    //   component: HistoreBlog
    // }
    
  ]
})

export default router
