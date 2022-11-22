import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/home',
        name: 'homee',
        component: () => import('../views/home.vue')
        
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/user'}, {name: '用户列表', path: '/yhlb'}]
        }
      },
      {
        path: '/business',
        name: 'business',
        component: () => import('../views/business.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/'}, {name: '用户列表', path: '/'}, {name: '商家列表', path: '/'}]
        }
      },
      {
        path: '/food',
        name: 'food',
        component: () => import('../views/food.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/'}, {name: '用户列表', path: '/'}, {name: '商家列表', path: '/'},{name: '食品列表', path: '/'}]
        }
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/'}, {name: '用户列表', path: '/'}, {name: '商家列表', path: '/'},{name: '食品列表', path: '/'},{name: '订单列表', path: '/'}]
        }
      },
      {
        path: '/Administration',
        name: 'Administration',
        component: () => import('../views/Administration.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/'}, {name: '用户列表', path: '/'}, {name: '商家列表', path: '/'},{name: '食品列表', path: '/'},{name: '订单列表', path: '/'},{name: '管理员列表', path: '/'}]
        }
      },
      {
        path: '/add',
        name: 'add',
        component: () => import('../views/add.vue'),
        meta:{
          title:[{name: '添加数据', path: '/'}, {name: '添加商铺', path: '/tjdp'}, {name: '添加商品', path: '/'}]
        }
      },
      {
        path: '/add2',
        name: 'add2',
        component: () => import('../views/add2.vue'),
        meta:{
          title:[{name: '添加数据', path: '/'}, {name: '添加商铺', path: '/tjdp'}, {name: '添加商品', path: '/'}]
        }
      },
      {
        path: '/user2',
        name: 'user2',
        component: () => import('../views/user2.vue'),
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('../views/edit.vue'),
      },
      {
        path: '/Administration2',
        name: 'Administration2',
        component: () => import('../views/Administration2.vue'),
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../views/explain.vue'),
      },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
