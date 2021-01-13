<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <div class="container">
    <div class="block" :class="{ animate: isBlockAnimate }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled">
      <p v-if="isParagraphVisible">This is only visible sometimes....</p>
    </transition>
    <button @click="paragraphToggle">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUser" v-if="!isUserVisible">Show User</button>
      <button @click="hideUser" v-else>Hide User</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <div class="container">
    <ListData />
  </div>
</template>  

<script>
import ListData from './components/ListData'

export default {
  components: { ListData },
  data() {
    return {
      isBlockAnimate: false,
      dialogIsVisible: false,
      isParagraphVisible: true,
      isUserVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    animateBlock() {
      this.isBlockAnimate = !this.isBlockAnimate
    },
    paragraphToggle() {
      this.isParagraphVisible = !this.isParagraphVisible
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    hideUser() {
      this.isUserVisible = false;
    },
    showUser() {
      this.isUserVisible = true;
    },
    beforeEnter(el) {
      console.log('beforeEnter', el)
      el.style.opacity = 0
    },
    enter(el, done) {
      console.log('enter', el)
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01
        round++
        if (round > 100) {
          clearInterval(this.enterInterval)
          this.enterInterval = null
          done()
        }
      }, 20)
    },
    afterEnter(el) {
      console.log('afterEnter', el)
    },
    beforeLeave(el) {
      console.log('beforeLeave', el)
    },
    leave(el, done) {
      console.log('leave', el)
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - (round * 0.01)
        round++
        if (round > 100) {
          clearInterval(this.leaveInterval)
          this.leaveInterval = null;
          done()
        }
      }, 20)
    },
    afterLeave(el) {
      console.log('afterLeave', el)
    },
    enterCancelled() {
      clearInterval(this.enterInterval)
      this.enterInterval = null
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval)
      this.leaveInterval = null;
    }
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide-scale 0.3s ease-out forwards;
}

.fade-button-enter-from {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-enter-to {
  opacity: 1;
}

.router-enter-from {

}
.router-enter-active {
  animation: slide-scale 0.4s ease-out;
}
.router-enter-to {

}

.router-leave-to {
  
}

.router-leave-active {
  animation: slide-scale 0.4s ease-in;
}

.router-leave-from {
  
}

@keyframes slide-scale {
  0% {
    transform: translateX(0);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px);
  }
}
</style>