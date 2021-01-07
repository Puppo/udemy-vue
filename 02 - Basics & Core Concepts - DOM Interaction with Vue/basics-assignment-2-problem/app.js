var app = Vue.createApp({
    data() {
        return {
            example2: '',
            example3: '',
            example3Confirmed: '',
        }
    },
    methods: {
        onExample1Click() {
            alert('Click event')
        },
        onExample2Change(event) {
            this.example2 = event.target.value
        },
        onExample3Change(event) {
            this.example3 = event.target.value
        },
        onExample3Click() {
            this.example3Confirmed = this.example3
        }
    }
})

app.mount('#assignment')