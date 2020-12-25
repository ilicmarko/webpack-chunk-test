import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'page1',
      path: '/page-1',
      component: () => import(/* webpackChunkName: "common" */ '@/pages/Page1.vue'),
    },
    {
      name: 'page2',
      path: '/page-2',
      component: () => import(/* webpackChunkName: "page2" */ '@/pages/Page2.vue'),
    },
    {
      name: 'page3',
      path: '/page-3',
      component: () => import(/* webpackChunkName: "common" */ '@/pages/Page3.vue'),
    },
  ],
});
