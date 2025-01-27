import { createRouter, createWebHistory } from "vue-router";

const routes = [ 
  {
    // path: '/',
    // name: '',
    // component: () => import('../components/Home.vue'),
    // meta: {title: ''}
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

