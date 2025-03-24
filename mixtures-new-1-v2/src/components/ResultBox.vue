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

    <!-- color set -->
     <p>{{mixtureEffectFill}}</p>
     <p>{{`There are ${amount} colors in your pocket`}}</p>

    <!-- refresh btn -->
    <button-item
    @click="$emit('refresh')"
      icon="pi-sync"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      class="refresh-btn">
    </button-item>

    <!-- question mark btn to show modal -->
    <button-item
      @click="showModal"
      icon="pi-question"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      class="question-btn" />

    <!-- share btn -->
    <router-link :to="link">
      <button-item
        icon="pi-share-alt"
        :size="4"
        :movement="-0.5"
        :font-size="1.5"
      />
     </router-link>

     <!-- save btn  -->
    <button-item
    @click="saveColor"
    icon="pi pi-pencil"
    :size="4"
    :font-size="1.5"/>

    <!-- Modal item -->
    <fade-animation>
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
          <button-item icon="pi-thumbs-up" />
        </template>

      </modal-item>
    </fade-animation>
  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import ButtonItem from './shared/ButtonItem.vue'
import modalMixin from '@/mixins/ModalMixin'
import ModalItem from './shared/ModalItem.vue'
import FadeAnimation from './shared/FadeAnimation.vue'
import { mapActions, mapGetters } from 'vuex'

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
    },
    link () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `/color/${redCol}/${greenCol}/${blueCol}`
    },
    ...mapGetters({ amount: 'ColorsAmount' })
  },
  components: {
    FlaskItem,
    ButtonItem,
    ModalItem,
    FadeAnimation
  },
  mixins: [modalMixin],
  methods: {
    saveColor () {
      this.addColor(this.mixtures)
    },
    ...mapActions(['addColor'])
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
