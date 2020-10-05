<template>
  <div class="project-card">
    <div id="edit-button">
      <div @click.stop="$emit('open-context', $event)">
        <p class="noselect secondary-text">...</p>
      </div>
    </div>
    <div id="project-info">
      <h1 class="noselect" @click='openProject'>{{ project.name }}</h1>
      <p class="noselect" :class="{ 'secondary-text': project.description === '' }">{{ project.description === "" ? "No description" : project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['project'],
  methods: {
    openContextMenu() {
      console.log('Open context menu here');
    },
    openProject() {
      this.$router.push('/project/'+this.project.id)
      console.log("redirecting");
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/scss/colors';
  .project-card {
    flex: 1 0 0;
    min-width: 350px;
    margin: 20px;
    border-radius: 20px;
    background-color: #fff;
  }

  #edit-button {
    display: flex;
    justify-content: flex-end;
    text-align: center;
    min-width: 350px;
    font-size: 2em;
    div {
      position: relative;
      top: 10px;
      right: 20px;
      cursor: pointer;
      &:hover p {
        color: $color-font-main-light-hover;
      }
      min-width: 30px;
      min-height: 30px;
    }
    p {
      line-height: 50%;
    }
  }

  #project-info {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    max-width: 300px;
    min-height: 150px;
    position: relative;
    top: -16px;
    p {
      margin: 4px 0px 0px 20px;
    }
    h1 {
      cursor: pointer;
      margin: 0px 0px 0 20px;
    }
  }

  .secondary-text {
    color: $color-font-main-light;
  }


</style>
