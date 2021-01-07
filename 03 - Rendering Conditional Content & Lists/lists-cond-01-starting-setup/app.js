const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    };
  },
  computed: {
    isGoalsEmpty() {
      return !this.goals || !this.goals.length
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
      this.enteredGoalValue = ''
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
