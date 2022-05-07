import { createRouter, createWebHistory } from 'vue-router'
import PageThreadShow from '@/components/PageThreadShow.vue'
import PageHome from '@/components/PageHome'
import PageNotFound from '@/components/PageNotFound'
import { createApp } from 'vue'
import App from '../App.vue'
import sourceData from '@/data.json'

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
    props: true, 
    beforeEnter (to, from, next) {
      const threadExists = sourceData.threads.find(thread =>thread.id === to.params.id)
      if(threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: {pathMatch: to.path.substring(1).split('/')},
          query: to.query,
          hash: to.hash
        })
      }
    }
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
