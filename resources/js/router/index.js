import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import Home from '../views/Home.vue';

import MealList from "../views/MealList.vue";

const routes = [
    { path: '/', component: DefaultLayout, children: [
            { path: '/', name: 'home', component: Home },
            { path: '/by-letter/:letter?', name: 'byLetter', component: MealList }
        ] 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;