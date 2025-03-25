<template>
  <!-- mixtures -->
  <ul class="mixtures">
    <flask-item
      v-for="(mixture, index) in getMixtures"
      :key="index"
      :variant="mixture.variant"
      :amount="mixture.amount"
      :index="index"/>
  </ul>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import { mapGetters } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Mixtures',
  computed: {
    ...mapGetters(['getMixtures'])
  },
  components: { FlaskItem }
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
