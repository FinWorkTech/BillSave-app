import { createRouter, createWebHistory } from "vue-router";

const routes = [ 
  {
    path: '/home',
    name: 'home',
    component: () => import('../../public/pages/home.component.vue'),
    meta: {title: 'Home'}
  },
  
  {
    path: '/portfolios',
    name: 'portfolios',
    component: () => import('../../features/portfolio/presentation/pages/portfolio-view.component.vue'),
    meta: {title: 'Portfolios'}
  },

  {
    path: '/',
    redirect: '/home'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const baseTitle = 'BillSave';
  document.title = `${baseTitle} | ${to.meta.title}`
  next();
});

export default router;

