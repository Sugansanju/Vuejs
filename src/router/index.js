import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import Bootstrap from '@/components/Bootstrap'
import Teacher from '@/components/Teacher'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
  },
  {
      path:'/Home',
      name:'Home',
      component: Home
  },
  {
      path:'/Bootstrap',
      name:'Bootstrap',
      component: Bootstrap
  },
  {
      path:'/SignUp',
      name:'SignUp',
      component:SignUp
  },
  {
      path:'/Teacher',
      name:'Teacher',
      component: Teacher
  },
  {
      path:'/SignIn',
      name:'SignIn',
      component:SignIn
  }
  ]
})
