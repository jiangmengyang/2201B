import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
    path: '/',
		redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
		children:[
			//
			{
				// 角色列表
				path: '/Userlist',
				name: 'Userlist',
				component: () =>
					import('../views/Userlist.vue')
			},
			{
				// 角色列表
				path: '/rolelist',
				name: 'Rolelist',
				component: () =>
					import('../views/Rolelist.vue')
			},{
				// 权限列表
				path: '/jurisdictionlist',
				name: 'Jurisdictionlist',
				component: () =>
					import('../views/Jurisdictionlist.vue')
			},
		]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
	{
    path: '/login',
    name: 'Login',
    component: () =>
      import('../views/Login.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
