import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/components/Template'
import GoldenBlockchain from '@/components/GoldenBlockchain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoldenBlockchain',
      component: GoldenBlockchain
    },
    {
      path: '/golden-blockchain',
      name: 'GoldenBlockchain',
      component: GoldenBlockchain
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ]
})
