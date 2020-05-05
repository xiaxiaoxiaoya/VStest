import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
export default [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {path:"/",redirect:"/Home"},
  ];