import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [{
  path:'/hello',
  name:'hello',
  component:require('../views/home/index.vue').default
}]


export default new Router({
  routes
})