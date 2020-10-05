<template>
  <div id="project-items">
    <div class="item" v-for="item in project.items" :key="item.id">
      <InfoCard v-if="item.type === 'info'" :item="item"></InfoCard>
      <InputCard v-if="item.type === 'input'" :item="item"></InputCard>
      <QuizCard v-if="item.type === 'quiz'" :item="item"></QuizCard>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoCard from '@/components/InfoCard.vue'
import QuizCard from '@/components/QuizCard.vue'
import InputCard from '@/components/InputCard.vue'
export default {
  name: "Project",
  data() {
    return {
      project: {}
    }
  },
  components: {
    InfoCard,
    QuizCard,
    InputCard
  },
  computed: {
    ...mapGetters(['getProjectById'])
  },
  created() {
    console.log(this.$route.params.id);
    this.project = this.getProjectById(this.$route.params.id)
    console.log(this.project);
    // this.$watch(
    //   () => this.$route.params,
    //   (toParams, previousParams) => {
    //     // react to route changes...
    //   }
    // )
  }
}
</script>

<style lang="scss" scoped>
</style>
