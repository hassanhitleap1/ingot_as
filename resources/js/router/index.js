import Vue from 'vue';
import VueRouter from 'vue-router';

function loggedIn(){
    return localStorage.getItem('token')
}

Vue.use(VueRouter);

const route =  new VueRouter({
    mode: 'history',
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=>import("../views/Home"),
            meta: {requiresAuth: true}
        },


        {
            path: '/clients',
            name: 'clients',
            component: ()=>import("../views/clients/Index"),
            meta: {requiresAuth: true}

        },
        {
            name: 'clients.create',
            path: '/clients/create',
            component:  ()=>import("../views/clients/Create"),
            meta: {requiresAuth: true}
        },
        {
            name: 'clients.edit',
            path: '/clients/:id/edit',
            component:  ()=>import("../views/clients/Edit"),
            meta: {requiresAuth: true}
        },
        
        {
            path: '/transactions',
            name: 'transactions',
            component: ()=>import("../views/transactions/Index"),
            meta: {requiresAuth: true}

        },
        {
            path: '/login',
            name: 'login',
            component:()=>import("../views/Login"),
        },


    ]
});

route.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {

        if (!loggedIn()) {
            next({
                name: 'login',
                path:'/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            next({
                path: '/',
                name:'home',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});
export default route;
