<template>
  <Navigation></Navigation>
  <router-view/>
</template>


<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  },
}
</script>

<style lang="scss">
@import '~@/scss/globals.scss';
</style>
