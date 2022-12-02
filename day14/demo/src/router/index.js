import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    children:[
      {
        path:'news',
        name: 'News',
        component: () => import('../views/News.vue'),
        meta:{title:'新闻'},
        beforeEnter: (to, from, next) => {
          console.log('独享路由守卫',to,from)
          if(to.meta.isAuth){
            if(localStorage.getItem('school')==='atguigu'){
              next()
            }else{
              alert('学校名不对，无权限查看')
            }
          }else{
            next()
          }
        },
        children:[{
          path:'banner',
           name: 'Banner',
            component: () => import('../views/Banner.vue'),
        }]
      },{
        path:'message',
        name: 'Message',
        component: () => import('../views/Message.vue'),
        meta:{title:'消息'},

        children:[{
          path:'detail',
           name: 'Detail',
            component: () => import('../views/Detail.vue'),
            meta:{title:'详情'},
            props:{a:1,b:'hello'}
        }]
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})
// 全局前置路由守卫

router.beforeEach((to,from,next)=>{
  console.log('前置路由守卫',to,from)
  if(to.meta.isAuth){
    if(localStorage.getItem('school')==='atguigu'){
      next()
    }else{
      alert('校名不对，无权限查看')
    }
  }else{
    next()
  }
})

//全局后置路由守卫

router.afterEach((to,from)=>{
  console.log('后置路由守卫',to,from)
  document.title=to.meta.title||'硅谷系统'
})

export default router
