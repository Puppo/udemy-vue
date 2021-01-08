import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';
import ActiveGoal from './components/ActiveGoal.vue'
import ManageGoal from './components/ManageGoal.vue'

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
app.component('active-goal', ActiveGoal);
app.component('manage-goal', ManageGoal);

app.mount('#app');
