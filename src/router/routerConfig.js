export default [
    {
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "about" */ '@/views/Home.vue')
    }, {
      path: '/rank',
      name: 'rank',
      component: () => import( /* webpackChunkName: "about" */ '@/views/Rank.vue')
    }, {
      path: '/rankMusic',
      name: 'rankMusic',
      component: () => import( /* webpackChunkName: "about" */ '@/views/RankMusic.vue')
    }
]


