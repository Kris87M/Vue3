<template>
  <h1 class="page-title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>

<style lang="scss">
.page-title {
  color: $text-color;
  margin: 2rem;
  font-size: 2rem;
}
</style>
