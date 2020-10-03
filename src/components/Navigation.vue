<template>
  <div id="header" class="shadow">
    <div class="logo">
      <router-link to="/"><h1>Learno</h1></router-link>
      <!-- <h1>Learno</h1> -->
    </div>
    <div class="nav">
      <div class="link">
        <router-link to="/projects">Projects</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Navigation',
  components: {

  },
}
</script>

<style lang="scss" scoped>
  @import '~@/scss/_colors.scss';
  #header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    margin: 0;
    background-color: #fff;
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin: 0 20px;
  }

  .link {
    margin: 20px;
  }

  .shadow {
    -webkit-box-shadow: 0 0 10px #ffe7e0;
       -moz-box-shadow: 0 0 10px #ffe7e0;
            box-shadow: 0 0 10px #ffe7e0;
  }

  h1 {
    margin: 20px 0;
  }

  a {
    &:hover {
      color: $color-link-hover;
      h1 {
        color: $color-link-hover;
      }
    }
  }

</style>
