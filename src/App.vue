<template>
  <GamesCollection/>
</template>

<script>
import GamesCollection from './components/GamesCollection.vue';

export default {
  name: 'App',
  components: {
    GamesCollection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
