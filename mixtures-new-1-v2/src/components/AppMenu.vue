<template>
    <div class="card">
        <Menubar :model="items" class="menu-bar"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    to: '/'
  },
  {
    label: 'Mixin',
    icon: 'pi pi-star',
    to: '/mixin'
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle',
    to: '/about'
  },
  {
    label: 'My colors',
    icon: 'pi pi-palette',
    to: '/my-colors'
  }
])
</script>

<style scoped lang="scss">
  .menu-bar {
    border-radius: 1rem;
    box-shadow: $shadow;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
</style>
