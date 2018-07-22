import Vue from 'vue'
import Router from 'vue-router'
import Semana from '@/components/Semana'
import TreinoDia from '@/components/TreinoDia'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Semana',
      component: Semana
    },
    {
      path: '/treinodia/:diasemana',
      name: 'TreinoDia',
      component: TreinoDia
    }
  ]
})
