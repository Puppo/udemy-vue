import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import AllCorse from './pages/AllCorse.vue';
import CourseGoals from './pages/CourseGoals.vue';
import BaseModal from './components/BaseModal.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: AllCorse
    }, {
        path: '/goals',
        component: CourseGoals
    }]
})


const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router)

router.isReady().then(function () {
    app.mount('#app');
})
