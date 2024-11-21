<template>
  <div id="app">
    <PinterestDownloader />
  </div>
</template>

<script>
import PinterestDownloader from './components/PinterestDownloader.vue'

export default {
  name: 'App',
  components: {
    PinterestDownloader
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>