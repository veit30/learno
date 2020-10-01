<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="quiz-container">
      <Quiz></Quiz>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from '@/components/Quiz.vue'
export default {
  name: 'Home',
  components: {
    Quiz
  },
}
</script>

<style lang="scss" scoped>
  .quiz-container {
    display: flex;
    justify-content: center;
  }
</style>
