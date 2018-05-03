import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

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
      path:'/SignUp',
      name:'SignUp',
      component:SignUp
  },
  {
      path:'/SignIn',
      name:'SignIn',
      component:SignIn
  }
  ]
})
