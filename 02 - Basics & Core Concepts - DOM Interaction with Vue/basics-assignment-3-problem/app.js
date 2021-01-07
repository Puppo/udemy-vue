const app = Vue.createApp({
    data() {
        return {
            value: 0
        }
    },
    methods: {
        add(value) {
            this.value += value
        },
    },
    computed: {
        result() {
            return this.value > 37 ? "Too much!" : "Not there yet"
        }
    },
    watch: {
        value() {
            const self = this;
            setTimeout(() => {
                self.value = 0
            }, 5000);
        }
    }
})

app.mount('#assignment')