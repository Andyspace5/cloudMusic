import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from '@/router/routerConfig'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routerConfig
})
