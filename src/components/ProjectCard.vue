<template>
  <div class="project-card" @click="redirectToProject">
    <div id="edit-button">
      <div @click.stop="openContextMenu">
        <p class="noselect secondary-text">...</p>
      </div>
    </div>
    <div id="project-info">
      <h1 class="noselect">{{ name }}</h1>
      <p class="noselect" :class="{ 'secondary-text': description === '' }">{{ description === "" ? "No description" : description }}</p>
    </div>
    <div id="project-type">
      <div>
        <h2 class="secondary-text noselect">{{ type === "quiz" ? "Quiz" : "Register" }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['name','type','description'],
  methods: {
    openContextMenu() {
      console.log('Open context menu here');
    },
    redirectToProject() {
      console.log("redirecting");
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/scss/colors';
  .project-card {
    flex: 1 0 0;
    cursor: pointer;
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
      margin: 0px 0px 0 20px;
    }
  }

  #project-type {
    display: flex;
    justify-content: flex-end;
    text-align: center;
    div {
      position: relative;
      bottom: 20px;
      right: 20px;
    }
    h2 {
      font-size: 1.5em;
      line-height: 50%;
    }
  }

  .secondary-text {
    color: $color-font-main-light;
  }





</style>
