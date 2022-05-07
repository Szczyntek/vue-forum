import { createRouter, createWebHistory } from 'vue-router'
import PageThreadShow from '@/components/PageThreadShow.vue'
import PageHome from '@/components/PageHome'
import PageNotFound from '@/components/PageNotFound'
import { createApp } from 'vue'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const forumApp = createApp(App)
forumApp.use(router)
forumApp.mount('#app')
export default router
