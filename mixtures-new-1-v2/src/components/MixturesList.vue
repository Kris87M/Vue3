<template>
  <!-- mixtures -->
  <ul class="mixtures">
    <mixture-item
      :key="index"
      v-for="(mixture, index) in mixtures"
      :mixture="mixture"
      @increment="$emit('increment', index)"
      @decrement="$emit('decrement', index)" />
  </ul>
</template>

<script>
import MixtureItem from './MixtureItem'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Mixtures',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  components: { MixtureItem }
}
</script>

<style scoped lang="scss">
.mixtures {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
</style>
