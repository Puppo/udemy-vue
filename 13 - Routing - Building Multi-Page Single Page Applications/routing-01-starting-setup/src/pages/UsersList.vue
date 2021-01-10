<template>
<button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem';

export default {
  data() {
    return { changesSave: false }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next) {
    console.log('userList beforeRouteEnter', to, from);
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('userList beforeRouteLeave', to, from);

    if (this.changesSave) {
      next();
    } else {
      const userWantToLeave = confirm('Are you sure? You got unsaved changes!')
      next(userWantToLeave)
    }
  },
  methods: {
    saveChanges() {
      this.changesSave = true
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>