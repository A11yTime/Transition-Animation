import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoal from './pages/CourseGoal.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: AllUsers},
        {path: '/goals', component: CourseGoal }
    ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.mount('#app');
app.use(router);
