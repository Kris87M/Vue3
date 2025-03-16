<template>
  <div class="result-box">

    <!-- text between -->
    <p
      v-text="'And the result...'" />

    <!-- mixture effect -->
    <flask-item
    class="result-box__flask"
      :size="15"
      :color="mixtureEffectFill"
      :amount="100"
      :buttons-visible="false" />

    <!-- refresh btn -->
    <button-item
    @click="$emit('refresh')"
      icon="sync"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      class="refresh-btn">
    </button-item>

  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import ButtonItem from './shared/ButtonItem.vue'

export default {
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    }
  },
  components: {
    FlaskItem,
    ButtonItem
  }
}
</script>

<style lang="scss">
  .result-box {
    text-align: center;
    margin: 3rem auto;

    &__flask {
      margin: 3rem auto;
    }
  }
</style>
