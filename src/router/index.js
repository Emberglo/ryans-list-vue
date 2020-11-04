import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cars from '../pages/CarsPage.vue'
import Houses from '../pages/HousesPage.vue'
import Jobs from '../pages/JobsPage.vue'
import ActiveCar from '../pages/ActiveCarPage.vue'
import ActiveHouse from '../pages/ActiveHousePage.vue'
import ActiveJob from '../pages/ActiveJobPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/car/:carId',
    name: 'ActiveCar',
    component: ActiveCar
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/house/:houseId',
    name: 'ActiveHouse',
    component: ActiveHouse
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/job/:jobId',
    name: 'ActiveJob',
    component: ActiveJob
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
