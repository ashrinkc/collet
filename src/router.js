import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Landlords from "./views/Landlord.vue";
import Tenant from "./views/Tenant.vue";
import Agent from "./views/Agent.vue";
import Corporate from "./views/Corporate.vue";
import Contact from "./views/Contact.vue";
import Houses from "./views/Homes.vue";
import FAQ from "./views/Faq.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/landlords",
      name: "landlords",
      component: Landlords
    },
    {
      path: "/tenant",
      name: "tenant",
      component: Tenant
    },
    {
      path: "/agent",
      name: "agent",
      component: Agent
    },
    {
      path: "/corporate",
      name: "corporate",
      component: Corporate
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/houses",
      name: "houses",
      component: Houses
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ
    }
  ]
});
