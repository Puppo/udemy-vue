<template>
    <button @click="login" v-if="!isAuthenticated">Login</button>
    <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    methods: {
        ...mapActions({
            login: 'login',
            logout: 'logout'
        })
    }
}
</script>