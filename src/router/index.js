import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "../views/Dashboard"
import Cart from "../views/Cart"
import DetailsProduct from "../views/DetailsProduct"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: '/details/:id',
        props: true,
        name: "DetailsProduct",
        component: DetailsProduct
    }
]

const router = new VueRouter({
    routes,
});

export default router;