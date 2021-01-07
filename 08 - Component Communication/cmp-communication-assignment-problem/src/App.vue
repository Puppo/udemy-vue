<template>
    <user-data
        @save="saveData"
    ></user-data>

    <active-user
        :name="name"
        :age="age"
    ></active-user>
</template>

<script>

export default {
  data() {
      return {
        name: '',
        age: 0
      }
  },
  methods: {
    saveData(name, age) {
        this.name = name;
        this.age = age;
    }
  }
}
</script>