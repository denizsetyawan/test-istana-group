import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import ProductList from "../views/ProductList.vue";
import OrderForm from "../views/OrderForm.vue";
import OrderHistory from "../views/OrderHistory.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/products", component: ProductList },
  { path: "/order", component: OrderForm },
  { path: "/history", component: OrderHistory },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔐 Navigation Guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  // Jika sudah login dan buka login
  if (token && (to.path === "/" || to.path === "/login")) {
    return next("/products");
  }

  // Jika belum login dan buka page selain login
  if (!token && to.path !== "/" && to.path !== "/login") {
    return next("/");
  }

  next();
});

export default router;
