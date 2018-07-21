import Vue from 'vue'
import Router from 'vue-router'
import Swiper from '@/components/swiper'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
