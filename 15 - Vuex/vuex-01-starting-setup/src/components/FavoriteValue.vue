<template>
    <h3>{{counter}}</h3>
    We do more...
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters('numbers', {
            counter: 'finalCounter'
        })
    }
}
</script>