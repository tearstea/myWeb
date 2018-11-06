import Vue from 'vue'
import Router from 'vue-router'
// import Test from './views/Test.vue'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'test',
    //   component: Test
    // },
    //  打开页面，可以直接定位到某一个页面
    {
      path: '/',
      redirect: '/general'
    },
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/Home.vue'], resolve),
      // 也可以先引入，再添加组件
      // component: Home,
      meta: {
        title: '总括'
      },
      children: [{
          path: '/general',
          component: resolve => require(['@/components/page/General.vue'], resolve),
          meta: {
            title: '社交常用'
          }
        },
        {
          path: '/internet',
          component: resolve => require(['@/components/page/Internet.vue'], resolve),
          meta: {
            title: 'IT互联'
          },
          // children:[
          //   {
          //     path: '/first',
          //     component: resolve => require(['@/components/page/InterPage/First.vue'], resolve),
          //     meta: { title: 'IT互联' },
          //   }
          // ]
        },
        {
          path: '/thesaurus',
          component: resolve => require(['@/components/page/Thesaurus.vue'], resolve),
          meta: {
            title: '知识宝库'
          }
        },
        {
          path: '/learning',
          component: resolve => require(['@/components/page/Learning.vue'], resolve),
          meta: {
            title: '学习在线'
          }
        },
        {
          path: '/naturalscience',
          component: resolve => require(['@/components/page/NaturalScience.vue'], resolve),
          meta: {
            title: '自然科学'
          }
        },
        {
          path: '/socialsciences',
          component: resolve => require(['@/components/page/SocialSciences.vue'], resolve),
          meta: {
            title: '社会科学'
          }
        },
        {
          path: '/fighting',
          component: resolve => require(['@/components/page/Fighting.vue'], resolve),
          meta: {
            title: '职场商战'
          }
        },
        {
          path: '/film',
          component: resolve => require(['@/components/page/Film.vue'], resolve),
          meta: {
            title: '经典影视'
          }
        },
        {
          path: '/life',
          component: resolve => require(['@/components/page/Life.vue'], resolve),
          meta: {
            title: '百味生活'
          }
        },
        {
          path: '/navigation',
          component: resolve => require(['@/components/page/Navigation.vue'], resolve),
          meta: {
            title: '导航网站'
          }
        },
        {
          path: '/myshare',
          component: resolve => require(['@/components/page/MyShare.vue'], resolve),
          meta: {
            title: '站长分享'
          }
        },
        {
          path: '/about',
          component: resolve => require(['@/components/common/About.vue'], resolve),
          meta: {
            title: '关于'
          }
        },
        {
          path: '/law',
          component: resolve => require(['@/components/common/Law.vue'], resolve),
          meta: {
            title: '法律声明'
          }
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/404',
      component: resolve => require(['@/components/page/404.vue'], resolve),
    },
 
    {
        path: '*',
        redirect: '/404'
    }
  ]
})