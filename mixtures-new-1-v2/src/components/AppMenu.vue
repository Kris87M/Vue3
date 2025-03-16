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
    icon: 'pi pi-home'
  },
  {
    label: 'Mixin',
    icon: 'pi pi-star'
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle'
  }
])
</script>

<style scoped>
  .menu-bar {
    border-radius: 1rem;
    box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
</style>
