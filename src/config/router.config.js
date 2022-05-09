// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
// import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/bigscreen/index',
    meta: { title: '首页' },
    component: () => import('@/views/bigscreen/index')
  },
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/bigscreen/index'
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/channel',
    name: 'channel',
    component: () => import(/* webpackChunkName: "user" */ '@/views/bigscreen/channel/index')
  },
  {
    path: '/citymanage',
    meta: { title: '全地市经营' },
    component: () => import('@/views/bigscreen/citymanage')
  },
  {
    path: '/keyStrategy',
    name: 'keyStrategy',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/keyStrategy/index')
  },
  {
    path: '/ecologyOperations/index',
    name: 'ecologyOperations/index',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/ecologyOperations/index')
  },
  {
    path: '/ecologyOperations/components1',
    name: 'ecologyOperations/components1',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/ecologyOperations/components/components1')
  },
  {
    path: '/ecologyOperations/components2',
    name: 'ecologyOperations/components2',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/ecologyOperations/components/components2')
  },
  {
    path: '/ecologyOperations/components3',
    name: 'ecologyOperations/components3',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/ecologyOperations/components/components3')
  },
  {
    path: '/ecologyOperations/components4',
    name: 'ecologyOperations/components4',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/ecologyOperations/components/components4')
  },
  {
    path: '/ecologyOperations/components5',
    name: 'ecologyOperations/components5',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/ecologyOperations/components/components5')
  },
  {
    path: '/ecologyOperations/components6',
    name: 'ecologyOperations/components6',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/ecologyOperations/components/components6')
  },
  {
    path: '/ecologyOperations/components7',
    name: 'ecologyOperations/components7',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/ecologyOperations/components/components7')
  },
  {
    path: '/ecologyOperations/components8',
    name: 'ecologyOperations/components8',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/ecologyOperations/components/components8')
  },
  {
    path: '/StrategyFullView',
    name: 'StrategyFullView',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/StrategyFullView/index')
  },
  {
    path: '/fiveOperationfull',
    name: 'fiveOperationfull',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/StrategyFullView/components/fiveOperation')
  },
  {
    path: '/sandtable',
    name: 'sandtable',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/sandtable/index')
  },
  {
    path: '/fiveoperationkey',
    name: 'fiveoperationkey',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/keyStrategy/components/main/fiveoperation')
  },
  {
    path: '/flowproduct',
    name: 'flowproduct',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/keyStrategy/components/main/flowproduct')
  },
  {
    path: '/ecologyOperations',
    name: 'ecologyOperations',
    component: () => import(
      '@/views/gzBigScreen/StrategyFullView/components/main/ecologyOperations'
      )
  },
  {
    path: '/familyShop',
    name: 'familyShop',
    component: () => import(
      '@/views/gzBigScreen/StrategyFullView/components/main/familyShop'
      )
  },
  {
    path: '/flowOperations',
    name: 'flowOperations',
    component: () => import(
      '@/views/gzBigScreen/StrategyFullView/components/main/flowOperations'
      )
  },
  {
    path: '/fiveGOperation',
    name: 'fiveGOperation',
    component: () => import(
      '@/views/gzBigScreen/StrategyFullView/components/main/fiveGOperation'
      )
  },
  {
    path: '/loadIndex',
    name: 'loadIndex',
    component: () => import(
      '@/views/gzBigScreen/StrategyFullView/components/main/loadIndex.vue'
      )
  },
  {
    path: '/getNew',
    name: 'getNew',
    component: () => import(
      '@/views/gzBigScreen/StrategyFullView/components/main/getNew'
      )
  },
  {
    path: '/selectFlowDialog',
    name: 'selectFlowDialog',
    component: () => import(
      '@/views/gzBigScreen/StrategyFullView/components/main/selectFlowDialog'
      )
  },
  {
    path: '/index_keepRetain',
    name: 'index_keepRetain',
    component: () => import(
      '@/views/gzBigScreen/StrategyFullView/components/main/index_keepRetain'
      )
  },
  {
    path: '/',
    name: 'index',
    redirect: '/sandtable',
    component: () => import(/* webpackChunkName: "user" */ '@/views/gzBigScreen/sandtable/index')
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
