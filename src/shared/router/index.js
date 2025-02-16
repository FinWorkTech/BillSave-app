import { createRouter, createWebHistory } from "vue-router";

const routes = [ 
  {
    path: '/home',
    name: 'Home',
    component: () => import('../../public/pages/home.component.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/portfolios',
    children: [
      {
        path: '',
        name: 'Portfolios',
        component: () => import('../../features/portfolio/presentation/pages/portfolio-view.component.vue'),
        meta: { title: 'Portfolios' }
      },
      {
        path: 'create',
        name: 'CreatePortfolio',
        component: () => import('../../features/portfolio/presentation/pages/portfolio-create-view.component.vue'),
        meta: { title: 'Create Portfolio' }
      },
      {
        path: ':portfolioId/documents',
        name: 'Documents',
        component: () => import('../../features/sales/presentation/pages/document-view.component.vue'),
        meta: { title: 'Documents' },
      },
      {
        path: ':portfolioId/documents/create',
        name: 'CreateDocument',
        component: () => import('../../features/sales/presentation/pages/document-create-view.component.vue'),
        meta: { title: 'Create Document' }
      }
    ]
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
  document.title = `${baseTitle} | ${to.meta.title}`;
  next();
});

export default router;