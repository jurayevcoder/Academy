import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/students',
          name: 'students',
          component: () => import('../views/Students/Students.vue')
        },
        {
          path: '/teacher',
          name: 'teacher',
          component: () => import('../views/Teachers/Teachers.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    }

    // {
    //   path: '/groups',
    //   name: 'groups',
    //   component: () => import('')
    // },
    // {
    //   path: '/sciences',
    //   name: 'sciences',
    //   component: () => import('')
    // },
    // {
    //   path: '/users',
    //   name: 'users',
    //   component: () => import('')
    // },
    // {
    //   path: '/question-answer',
    //   name: 'question-answer',
    //   component: () => import('')
    // },
    // {
    //   path: '/statistic',
    //   name: 'statistic',
    //   component: () => import('')
    // },
  ]
})

export default router
