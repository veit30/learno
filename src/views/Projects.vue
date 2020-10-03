<template>
  <div class="projects">
    <ProjectCard v-for="project in projects" :key="project.id" :name="project.name" :type="project.type" :description="project.description"></ProjectCard>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    }
  },
  computed: {
    ...mapGetters(['getProjects'])
  },
  created() {
    this.projects = this.getProjects;
  }
}
</script>

<style lang="scss" scoped>
  .projects {
    display: flex;
    flex-flow: row wrap;
  }
</style>
