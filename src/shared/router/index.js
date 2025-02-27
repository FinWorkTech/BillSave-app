import { createRouter, createWebHistory } from "vue-router";
import { authenticationGuard } from "@features/iam/presentation/guard/authentication.guard.js";

const defaultMeta = { showToolbar: true };

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@public/pages/home.component.vue"),
    meta: { title: "Home", ...defaultMeta },
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("@features/iam/presentation/pages/sign-up-view.component.vue"),
    meta: { title: "Sign Up", showToolbar: false },
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("@features/iam/presentation/pages/sign-in-view.component.vue"),
    meta: { title: "Sign In", showToolbar: false },
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("@features/reporting/presentation/pages/report-view.component.vue"),
    meta: { title: "Reports", ...defaultMeta },
  },
  {
    path: "/portfolios",
    children: [
      {
        path: "",
        name: "Portfolios",
        component: () =>
          import("@features/portfolio/presentation/pages/portfolio-view.component.vue"),
        meta: { title: "Portfolios", ...defaultMeta },
      },
      {
        path: "create",
        name: "CreatePortfolio",
        component: () =>
          import("@features/portfolio/presentation/pages/portfolio-create-view.component.vue"),
        meta: { title: "Create Portfolio", ...defaultMeta },
      },
      {
        path: ":portfolioId",
        children: [
          {
            path: "edit", 
            name: "EditPortfolio",
            component: () =>
              import("@features/portfolio/presentation/pages/portfolio-create-view.component.vue"),
            meta: { title: "Edit Portfolio", ...defaultMeta },
          },
          {
            path: "documents",
            name: "Documents",
            component: () =>
              import("@features/sales/presentation/pages/document-view.component.vue"),
            meta: { title: "Documents", ...defaultMeta },
          },
          {
            path: "documents/create",
            name: "CreateDocument",
            component: () =>
              import("@features/sales/presentation/pages/document-create-view.component.vue"),
            meta: { title: "Create Document", ...defaultMeta },
          },
          {
            path: "documents/:documentId/edit",
            name: "EditDocument",
            component: () =>
              import("@features/sales/presentation/pages/document-create-view.component.vue"),
            meta: { title: "Edit Document", ...defaultMeta },
          }
        ],
      },
    ],
  },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Actualiza el título dinámicamente
router.beforeEach((to, from, next) => {
  const baseTitle = "BillSave";
  document.title = `${baseTitle} | ${to.meta.title || "Default"}`;

  authenticationGuard(to, from, next);
});

export default router;
