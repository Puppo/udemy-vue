import { createRouter, createWebHistory } from 'vue-router'

import TeamList from './pages/TeamsList.vue'
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersList from './pages/UsersList.vue'
import UserFooter from './pages/UserFooter.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        name: 'teams',
        path: '/teams',
        meta: { needsAuth: true },
        components: {
            default: TeamList,
            footer: TeamsFooter
        },
        children: [{
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true
        }]
    }, {
        path: '/users',
        components: {
            default: UsersList,
            footer: UserFooter
        },
        beforeEnter(to, from, next) {
            console.log('route beforeEnter', to, from);
            next()
        }
    },
    // {
    //     path: '/teams/:teamId',
    //     component: TeamMembers,
    //     props: true
    // }, 
    {
        path: '/',
        redirect: '/teams'
    }, {
        path: '/:notfound(.*)',
        component: NotFound
    }],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition
        }
        return {
            left: 0,
            top: 0
        };
    }
})

router.beforeEach(function (to, from, next) {
    console.log('Global beforeEach', to, from);
    if (to.meta.needsAuth) {
        console.log('check auth');
        next()
    } else {
        next();
    }
})

router.afterEach(function (to, from) {
    // send analytics
    console.log('Global afterEach', to, from);
})

export { router }