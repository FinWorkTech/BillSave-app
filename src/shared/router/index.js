import { createRouter, createWebHistory } from "vue-router";
import PortfolioListView from "../../features/portfolio/presentation/pages/portfolio-list-view.component.vue";
import PortfolioForm from "../../features/portfolio/presentation/components/portfolio-form.component.vue";


const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: null,
  },
  {
    path: "/portafolio-list-view",
    name: "PortfolioListView",
    component: PortfolioListView,
  },
  {
    path: "/portafolio-form",
    name: "PortfolioForm",
    component: PortfolioForm,
  },
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

