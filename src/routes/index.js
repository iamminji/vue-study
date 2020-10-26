import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import ToDo from "../components/ToDo";
import Example from "../components/Example";

Vue.use(Router);

export const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/example',
            name: 'example',
            component: Example
        },
        {
            path: '/todo',
            name: 'todo',
            component: ToDo
        }
    ]
})