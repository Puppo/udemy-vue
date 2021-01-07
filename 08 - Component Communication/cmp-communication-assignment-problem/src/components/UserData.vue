<template>
    <form @submit.prevent @submit="submitForm">
        <h1>User Data</h1>
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName" />
        </div>
        <div>
            <label>Age</label>
            <input type="number" v-model="enteredAge" />
        </div>

        <div>
            <button type="submit">Save User</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    emits: {
        save: function(name, age) {
            return name && age;
        }
    },
    methods: {
        submitForm() {
            this.$emit('save', this.enteredName, +this.enteredAge)
        }
    }
}
</script>