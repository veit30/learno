<template>
  <div class="">
    <label for="project-name">Name:</label>
    <input type="text" name="project-name" value="">
    <label for="type">Type:</label>
    <input type="radio" name="type" value="quiz">
    <label for="type">Quiz</label>
    <input type="radio" name="type" value="cards">
    <label for="type">Register cards</label>
    <label for="description">Description:</label>
    <input type="text" name="description" value="">
    <div id="checkmark"></div>
  </div>
</template>

<script>
export default {
  name: 'NewProjectForm',
  components: {

  }
}
</script>

<style lang="scss" scoped>

</style>
