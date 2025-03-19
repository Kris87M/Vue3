<template>
  <header>
    <h1
      class="heading"
      v-text="'RGB Color Mixture'" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="scss">
.heading {
  font-size: 3rem;
  background-color: $background-main;
  background-image: $heading-img;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
