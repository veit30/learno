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

<style>
@import './scss/_fonts.scss';
@import './scss/_colors.scss';
@import './scss/_general.scss';
</style>
