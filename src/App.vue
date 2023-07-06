<template>
 <router-view></router-view>

  <!-- <user-list></user-list>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition  
      :class="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCanel"
      @leave-canecelled="leaveCancel"
      ><p v-if="paraIsVisible"
      >This is only sometime visible ...</p>
    </transition>
      
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal 
        @close="close" 
        :open="dialogIsVisible"
>
    <h2>This is a test dialog!</h2>
    <button 
    v-focus
    class="close-btn" 
    @click="close"
    >Close</button>
    
    <div>
      <form @submit.prevent="submitForm">
        <fieldset>
          <legend>Personalia:</legend>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"><br><br>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname"><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"><br><br>
          <label for="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday"><br><br>
          <input type="submit" value="Submit">
        </fieldset>
        </form>
      </div>
  </base-modal>
 
  <div class="container">
    <button @click="open">Show Dialog</button>
  </div> -->
  <!-- <div class="container">
    <button @click="show = !show">Toggle</button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>
  </div> -->

  <!-- <div class="container">
    <transition name="fade-button" mode="out-in">
    <button @click="showUsers" v-if="!usersAreVisible">Show User</button>
    <button @click="hideUsers" v-else>Hide User</button>
  </transition>
  </div> -->
  
</template>  

<!-- <script>
export default {
  components: {
    
  },
  name: 'App',
  directives: {
    focus: {
    // directive definition
      inserted: function(el) {
        el.focus();
      },
    },
  },
  data() {
    return {
       initialFocus: null,
       dialogIsVisible: false,
       scrollY: window.scrollY,
       storedY: null,

       animatedBlock: false,
       paraIsVisible: false,
      //  show: false
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
      };
  },
  // mounnted() {
  //   window.addEventListener('scroll', this.getWindowOffset);
  // },
  // beforeDestory(){
  //   window.removeEventListener('scroll', this.getWindowOffset)
  // },
  methods: {
    enterCanel(el){
      console.log(el)
         clearInterval(this.enterInterval)
    },
    leaveCancel(el){
      console.log(el)
      clearInterval(this.leaveInterval)
    },
    beforeEnter(el){
      console.log('beforeEnter');
      console.log(el)
      el.style.opacity = 0;
    },
    enter(el, done){
      console.log('Enter');
      console.log(el);
      let round = 1
      this.enterInterval = setInterval(() =>{
        el.style.opacity =round * 0.01;
        round++;
        if(round > 100){
          setInterval(this.enterInterval)
          done()
        }
      },20)
    },
    afterEnter(el){
      console.log('afterEnter');
      console.log(el)
    },
    beforeLeave(el){
      console.log('beforLeave');
      console.log(el)
      el.style.opacity = 1;
    },
    leave(el, done){
      console.log('Leave');
      console.log(el);
      let round = 1
      this.leaveInterval = setInterval(() =>{
        el.style.opacity = 1-round * 0.01
        round++;
        if(round > 100){
          setInterval(this.leaveInterval)
          done()
        }
      },20)
    },
    afterLeave(el){
      console.log('afterLeave');
      console.log(el)
    },
    showUsers(){
      this.usersAreVisible = true;
    },
    hideUsers(){
      this.usersAreVisible = false;
    },
    toggleParagraph(){
      this.paraIsVisible = !this.paraIsVisible
    },
    animateBlock(){
      this.animatedBlock = true
    },
    open(e) {
      this.initialFocus = e.target;
      this.dialogIsVisible = true;
    },
    close() {
      this.dialogIsVisible = false;
      this.initialFocus.focus();
    },
    checkKeyEvent(event) {
      // close modal and return early if escape
      if (event.key === 'Escape') {
        this.modalOpen = false;
        return;
      }
      const focusableList = this.$refs.modalContainer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      // escape early if only 1 or no elements to focus
      if (focusableList.length < 2 && event.key === 'Tab') {
        event.preventDefault();
        return;
      }
      const last = focusableList.length - 1;
      if (
        event.key === 'Tab' &&
        event.shiftKey === false &&
        event.target === focusableList[last]
      ) {
        event.preventDefault();
        focusableList[0].focus();
      } else if (
        event.key === 'Tab' &&
        event.shiftKey === true &&
        event.target === focusableList[0]
      ) {
        event.preventDefault();
        focusableList[last].focus();
      }
    },
    getWindowOffset() {
      this.scrollY = window.scrollY;
    },
  

    hideDialog() {
      this.dialogIsVisible = false;
    },
    submitForm(){
      console.log('Form-submitted')
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
  margin-bottom: 3px;
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
  /* transition: transform 0.3s ease-out; */
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
fieldset {
  border: 0;
}
legend{
  font-weight: bold;
}
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 10px;
  font-size: 18px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}
.v-enter-active,
.v-leave-active{
  /* transition: all 0.3s ease;  */
  animation: slide-scale 0.3s ease-out;
} 
/* .v-enter-from,
.v-leave-to{ */
  /* opacity: 0;
  transform: translateY(30px); */
/* } */

/* .v-leave-from,
.v-enter-to{ */
 /* opacity: 1;
 transform: translateY(0px); */
 
/* } */

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}


.fade-button-enter-from, 
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active{
  transition: opacity 0.3s ease-out;
}
.fade-button-laeve-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
</style> -->