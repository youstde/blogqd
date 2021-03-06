import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const loginIn = r => require.ensure([], () => r(require('../page/sign/loginIn')), 'loginIn')
const loginUp = r => require.ensure([], () => r(require('../page/sign/loginUp')), 'loginUp')
const write = r => require.ensure([], () => r(require('../page/write/write')), 'write')
const articleDetail = r => require.ensure([], () => r(require('../page/articleDetail/articleDetail')), 'articleDetail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [

      ]
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: loginIn
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: loginUp
    },
    {
      path: '/write',
      name: 'write',
      component: write
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: articleDetail
    }
  ]
})
