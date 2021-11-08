import VueRouter from "vue-router";
import Vue from "vue";

import Index from '../pages/index.vue'
import Lost from '../pages/lost/index.vue'
import NotFound from '../pages/404/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        name: 'Index',
        path: '/',
        component: Index,
    },
    {
        name: 'Lost',
        path: '/lost',
        component: Lost
    },
    {
        name: 'NotFound',
        path: '*',
        component: NotFound
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
