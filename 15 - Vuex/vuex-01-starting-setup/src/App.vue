<template>
  <base-container v-if="isAuthenticated" title="Vuex">
    <TheCounter />
    <FavoriteValue />
    <br /> 
    <button @click="addCounter">Add 10</button>
    <ChangeCounter />
  </base-container>

  <base-container title="Auth">
    <UserAuth />
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    addCounter() {
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>