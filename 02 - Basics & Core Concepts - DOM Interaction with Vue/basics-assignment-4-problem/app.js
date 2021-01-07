const app = Vue.createApp({
    data() {
        return {
            cssClass: '',
            visible: true,
            backgroundColor: ''
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible
        }
    },
    computed: {
        pClass1() {
            return { [this.cssClass]: true }
        },
        pClass2() {
            return { 'active': this.visible, 'hidden': !this.visible }
        },
        pStyle2() {
            return { backgroundColor: this.backgroundColor }
        }
    }
})

app.mount('#assignment')