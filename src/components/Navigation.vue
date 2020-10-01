<template>
  <div id="header" class="shadow">
    <div class="logo">
      <h1>Learno</h1>
    </div>
    <div class="nav">
      <div id="header">
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

  #header {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    margin: 0;
    background-color: #fff;
  }

  .logo {

  }

  .shadow {
    -webkit-box-shadow: 0 0 10px #ffe7e0;
       -moz-box-shadow: 0 0 10px #ffe7e0;
            box-shadow: 0 0 10px #ffe7e0;
  }

  h1 {
    margin: 20px 0;
  }

</style>
