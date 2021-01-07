const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            visible: true
        }
    },
    computed: {
        isTaskVisible() {
            return this.visible
        },
        buttonCaption() {
            return (this.isTaskVisible ? 'Hide' : 'Show') + ' List'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue)
            this.enteredTaskValue = ''
        },
        toggle() {
            this.visible = !this.visible
        }
    }
})

app.mount('#assignment')