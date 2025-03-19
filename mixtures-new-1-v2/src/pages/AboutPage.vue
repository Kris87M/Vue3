<template>
  <div class="page">
    <h1>About</h1>
    <p>This app was built with Vue.js</p>
    <img
      src="@/assets/vue.png"
      class="animate__animated"
      :class="[isAnimated ? 'animate__jackInTheBox' : '']"
      @animationend="isAnimated = false"
      @click="jackInTheBox"/>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data: () => ({
    isAnimated: false
  }),
  mounted () {
    this.isAnimated = true
  },
  methods: {
    jackInTheBox () {
      this.isAnimated = true
    }
  }
}
</script>
