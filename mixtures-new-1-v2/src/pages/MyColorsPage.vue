<template>
  <div class="page">
    <h1>My colors</h1>
    <my-colors-list />
  </div>
</template>

<script>
import MyColorsList from '@/components/MyColorsList.vue'

export default {
  name: 'MyColorsPage',
  components: {
    MyColorsList
  }
}
</script>
