<template>
  <transition
    name="custom-transition"
    mode="out-in"
    enter-active-class="animate__animated animate__fadeInLeft animate__faster"
    leave-active-class="animate__animated animate__fadeOutLeft animate__faster">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFadeAnimation'
}
</script>
