<template>
    <form @submit.prevent @submit="submitForm()">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName">
        </div>

        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone">
        </div>

        <div>
            <label>E-mail</label>
            <input type="email" v-model="enteredEmail">
        </div>

        <div>
            <button type="submit">Add Friend</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        }
    },
    emits: {
        'add': function(data) {
            return data
        }
    },
    methods: {
        submitForm() {
            this.$emit('add', this.enteredName, this.enteredPhone, this.enteredEmail)
        }
    }
}
</script>