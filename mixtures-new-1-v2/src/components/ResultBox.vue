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
      icon="fa-sync"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      class="refresh-btn">
    </button-item>

    <!-- question mark btn to show modal -->
    <button-item
      @click="showModal"
      icon="fa-question"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      class="question-btn" />

    <!-- Modal item -->
    <modal-item
      v-if="modalVisible"
      @cancel="hideModal">

      <template v-slot:header>
        About the App
      </template>

      <template v-slot:body>
        Mix three colors to create the perfect one!
      </template>

      <template v-slot:footer>
        <button-item icon="fa-thumbs-up" />
      </template>

    </modal-item>

  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import ButtonItem from './shared/ButtonItem.vue'
import modalMixin from '@/mixins/ModalMixin'
import ModalItem from './shared/ModalItem.vue'

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
    ButtonItem,
    ModalItem
  },
  mixins: [modalMixin]
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
