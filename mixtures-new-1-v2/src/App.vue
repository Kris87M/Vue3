<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />

      <!-- app-menu -->
       <app-menu />

      <!-- color mixin -->
      <color-mixin />

    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import AppMenu from './components/AppMenu.vue'
import ColorMixin from './components/ColorMixin'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu,
    ColorMixin
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
