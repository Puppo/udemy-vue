<template>
    <button @click="inc({ value: 10 })">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        // addOne() {
        //     this.$store.commit('increment')
        // }
        // ...mapActions(['increment'])
        ...mapActions('numbers', {
            inc: 'increment'
        })
    }
}
</script>