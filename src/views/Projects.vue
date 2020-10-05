<template>
  <div class="projects">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" @open-context="showContext"></ProjectCard>
    <div id="new-project" @click="showProjectModal = true">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
    </div>
    <transition name="welcome" mode="out-in" appear>
      <ProjectModal v-if="showProjectModal" @close="showProjectModal = false" @new-project="newProject"></ProjectModal>
    </transition>
  </div>
  <ProjectContextMenu
    v-if="showContextMenu"
    :position="contextPosition"
    :options="['Edit','Delete']"
    @option-clicked="optionClicked"
    @close="showContextMenu = false">
  </ProjectContextMenu>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import { mapGetters, mapMutations } from 'vuex'
import ProjectModal from '@/components/ProjectModal.vue'
import ProjectContextMenu from '@/components/ProjectContextMenu.vue'
export default {
  name: 'Projects',
  components: {
    ProjectCard,
    ProjectModal,
    ProjectContextMenu
  },
  data() {
    return {
      projects: [],
      showProjectModal: false,
      showContextMenu: false,
      contextPosition: {
        top: 0,
        left: 0
      }
    }
  },
  computed: {
    ...mapGetters(['getProjects'])
  },
  created() {
    this.projects = this.getProjects;
  },
  methods: {
    ...mapMutations(['addProject']),
    newProject(event, title, description) {
      this.addProject({title, description})
    },
    optionClicked(event, option) {
      console.log(option);
    },
    showContext(event) {
      this.contextPosition = {
        top: event.pageY + "px",
        left: event.pageX + "px"
      }
      this.showContextMenu = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/scss/colors';
  .projects {
    display: flex;
    flex-flow: row wrap;
  }

  #new-project {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    min-width: 350px;
    max-width: 350px;
    min-height: 180px;
    margin: 20px;
    border-radius: 20px;
    background-color: #fff;
    cursor: pointer;
    svg {
      width: 80px;
      path {
        color: $color-font-main-light;
      }
    }
    &:hover {
      svg path {
        color: $color-font-main-light-hover;
      }
    }
  }

  .welcome-enter {
    transform: translateX(10px);
    opacity: 0;
  }

  .welcome-leave-to {
    opacity: 0;
  }

  .welcome-enter-active {
    // animation: go 3s ease;
    // .modal-mask {
    //   animation: blurin 2s ease;
    // }
  }

  .welcome-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  @keyframes go {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes blurin {
    from {
      backdrop-filter: blur(0px);
    }
    50% {
      backdrop-filter: blur(5px);
    }
    to {
      backdrop-filter: blur(10px);
    }
  }

  // .modal-enter {
  //   opacity: 0;
  // }
  //
  // .modal-leave-active {
  //   opacity: 0;
  // }
  //
  // .modal-enter .modal-container,
  // .modal-leave-active .modal-container {
  //   -webkit-transform: scale(1.1);
  //   transform: scale(1.1);
  // }
</style>
