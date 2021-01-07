const app = Vue.createApp({
    data() {
        return {
            name: 'Luca Del Puppo',
            age: 28,
            imageUrl: 'https://picsum.photos/200'
        }
    },
    methods: {
        ageFive() {
            return this.age + 5
        }
    }
})

app.mount('#assignment')