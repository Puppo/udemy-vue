<template>
    <div>
        Manage Goal
        <input type="text" ref="goal" >
        <button @click="save">Save</button>

        <teleport to="body">
            <ErrorAlert v-if="isErrorAlert">
                <h2>Invalid</h2>
                <p>Goal required!</p>
                <button @click="confirm">Ok</button>
            </ErrorAlert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert'
export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            isErrorAlert: false
        }
    },
    methods: {
        save() {
            const enteredValue = this.$refs.goal.value
            this.isErrorAlert = !enteredValue
        },
        confirm() {
            this.isErrorAlert = false
        }
    }
}
</script>