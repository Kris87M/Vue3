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
      @click="refresh"
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
  computed: {
    ...mapGetters(['getMixtures', 'ColorsAmount']),
    mixtureEffectFill () {
      const [red, green, blue] = this.getMixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${red}, ${green}, ${blue})`
    },
    link () {
      const [red, green, blue] = this.getMixtures.map(item => Math.floor(item.amount * 2.5))
      return `/color/${red}/${green}/${blue}`
    },
    amount () {
      return this.ColorsAmount
    }
  },
  methods: {
    ...mapActions(['addColor', 'resetMixtures']),
    refresh () {
      this.resetMixtures()
    },
    saveColor () {
      this.addColor(this.getMixtures)
    }
  },
  components: {
    FlaskItem,
    ButtonItem,
    ModalItem,
    FadeAnimation
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
