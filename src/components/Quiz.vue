<template>
  <div class="quiz">
    <QuizCard v-for="q in questions" :key="q.id" :question="q" :answers="q.answers" :description="q.description"></QuizCard>
  </div>
</template>

<script>
// @ is an alias to /src
import QuizCard from '@/components/QuizCard.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'Quiz',
  components: {
    QuizCard
  },
  data() {
    return {
      questions: []
    }
  },
  computed: {
    ...mapGetters(['getProjectById'])
  },
  created() {
    let project = this.getProjectById(0);
    console.log(project);
    this.questions = project.questions;
  }
}

</script>

<style lang="scss" scoped>

  .quiz {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column wrap;
    width: 80%;
    margin-top: 20px;
  }

</style>
