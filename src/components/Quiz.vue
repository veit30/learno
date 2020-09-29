<template>
  <div class="quiz">
    <div v-for="">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QuizCard from '@/components/QuizCard.vue'

export default {
  name: 'Quiz',
  components: {
    QuizCard
  },
  data: {
    return {
      questions: []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
