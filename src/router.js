import Router from 'vue-router'
import Home from './pages/home/Home.vue'
import TodoDetail from './pages/home/TodoDetail.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/TodoDetail/:todoId',
      name: 'TodoDetail',
      component: TodoDetail
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
