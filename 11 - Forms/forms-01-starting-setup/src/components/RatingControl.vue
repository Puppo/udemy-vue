<template>
    <ul>
        <li :class="poorActive"><button type="button" @click="active('poor')">Poor</button></li>
        <li :class="averageActive"><button type="button" @click="active('average')">Average</button></li>
        <li :class="greatActive"><button type="button" @click="active('great')">Great</button></li>
    </ul>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
        poorActive() {
            return this.modelValue === 'poor' ? 'active' : ''
        },
        averageActive() {
            return this.modelValue === 'average' ? 'active' : ''
        },
        greatActive() {
            return this.modelValue === 'great' ? 'active' : ''
        }
    },
    methods: {
        active(opt) {
            this.$emit('update:modelValue', opt)
        }
    }
}
</script>

<style scoped>
.active {
    border-color: #a00078;
}

.active button {
    color: #a00078
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>