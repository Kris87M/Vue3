<template>
  <div class="mixtures">
    <flask-item
    :key="index"
    v-for="(color, index) in colors"
    :amount="100"
    :color=color
    :buttons-visible=false
    :trash-visible="true"
    @click="removeColor(index)"/>
  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MyColorsList',
  components: {
    FlaskItem
  },
  computed: mapGetters({ colors: 'RGBColors' }),
  methods: {
    ...mapMutations({ removeColorMutation: 'REMOVE_COLOR' }),
    removeColor (index) {
      this.removeColorMutation(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.mixtures {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
