Vue.createApp({
    data: function () {
        return {
            enteredValue: '',
            goals: []
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue = '';
        }
    }
}).mount(document.getElementById('app'))

// const input = document.querySelector('input')
// const button = document.querySelector('button')
// const elList = document.querySelector('ul')


// function addGoal() {
//     const enteredValue = input.value;
//     const listItemEl = document.createElement('li')
//     listItemEl.innerText = enteredValue
//     elList.appendChild(listItemEl)
//     input.value = '';
// }

// button.addEventListener('click', addGoal)