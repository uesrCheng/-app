import Vue from 'vue'
import Router from 'vue-router'
import yhMain from '@/components/Pages/yhMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: yhMain
    },
    {
    	path:'/yhMain',
    	name:'yhMain',
    	component: yhMain
    }
  ]
})
