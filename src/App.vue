<template>
  <GamesCollection/>
</template>

<script>
import GamesCollection from './components/GamesCollection.vue';

export default {
  name: 'App',
  components: {
    GamesCollection,
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  cursor: url('./assets/cursor.png') 16 16, auto;
}
</style>
