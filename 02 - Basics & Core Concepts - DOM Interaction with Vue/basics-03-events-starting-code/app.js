const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
    };
  },
  watch: {
    name(name) {
      if (name) {
        this.fullName = name + ' Del Puppo'
      } else {
        this.fullName = ''
      }
    }
  },
  computed: {
    // fullName() {
    //   if (this.name) {
    //     return this.name + ' Del Puppo'
    //   }
    //   return ''
    // }
  },
  methods: {
    add(value) {
      this.counter = this.counter + (+value);
    },
    resetInput() {
      this.name = ''
    },
    submit() {
      alert('Submitted')
    }
  }
});

app.mount('#events');
