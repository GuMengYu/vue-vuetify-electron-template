// types
import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import About from '@/pages/About.vue'
import FourOhFour from '@/pages/errors/FourOhFour.vue'
import Home from '@/pages/Home.vue'
import Main from '@/pages/Main.vue'
import Playground from '@/pages/Playground.vue'
import Setting from '@/pages/setting/Setting.vue'
const routes: RouteRecordRaw[] = [
  {
    path: 'home/',
    name: 'home',
    component: Home,
    meta: { keepAlive: true },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { keepAlive: true },
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/playground',
    name: 'playground',
    component: Playground,
  },
]

export function useRouter(app: App) {
  const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: (to, from, savedPosition) => savedPosition || ({ x: 0, y: 0 } as any),
    routes: [
      {
        path: '/',
        name: 'Main',
        component: Main,
        children: routes,
        redirect: { path: '/home' },
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'FourOhFour',
        component: FourOhFour,
      },
    ],
  })
  // router.beforeEach(({ meta }, from, next) => {
  //   next()
  //   // const logged = store.getters['settings/logged'];
  //   // if (meta.needLogin && !logged) {
  //   //   store.commit('app/showLogin', true);
  //   // } else {

  //   // }
  // })
  // router.afterEach((to, from, failed) => {
  //   console.log(failed)
  // })
  app.use(router)
}
