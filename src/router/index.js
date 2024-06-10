import HomePage from "@/views/HomePage.vue";
import ContactPage from "@/views/ContactPage.vue";
import MenuPage from "@/views/MenuPage.vue";
import OrderPage from "@/views/OrderPage.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import MealPage from "@/views/MealPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AboutPage from "@/views/AboutPage.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "SignIn",
    path: "/signin",
    component: SignIn,
  },
  {
    name: "SignUp",
    path: "/signup",
    component: SignUp,
  },
  {
    name: "MenuPage",
    path: "/menu",
    component: MenuPage,
  },
  {
    name: "OrderPage",
    path: "/order",
    component: OrderPage,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "MealPage",
    path: "/:mealid",
    component: MealPage,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "AboutPage",
    path: "/about",
    component: AboutPage,
  },
  {
    name: "ContactPage",
    path: "/contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("sign in to get acces");
      next("/");
    }
  } else {
    next();
  }
});
export default router;
