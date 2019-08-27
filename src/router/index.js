import Vue from 'vue'
import Router from 'vue-router'
import StartRooms from '@/components/StartRooms'
import AllRooms from '@/components/AllRooms'
import Search from '@/components/Search'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'StartRooms',
      component: StartRooms,
      props: true
    },
    {
      path: '/all-rooms',
      name: 'AllRooms',
      component: AllRooms,
      props: true
    },
    { 
      path: '/search',
      name: 'Search',
      component: Search,
      props: true
    },
    {
      path: '/rooms/:roomId',
      name: 'details',
      component: Details,
      props: true
    }
  ]
})
