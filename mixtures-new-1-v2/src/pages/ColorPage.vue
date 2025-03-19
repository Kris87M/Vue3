<template>
  <div class="page">
    <PageTitle>
      Color
    </PageTitle>

    <Message v-if="showAlert" severity="error">
      This color is invalid! It's not RGB format...
    </Message>

    <div v-if="!showAlert">
      <p>You've picked a great color!</p>
      <flask-item
        class="result-box__flask"
        :size="15"
        :color="linkColors"
        :amount="100"
        :buttons-visible="false"
      />
      <div class="share__container">
        <span class="pi pi-share-alt" />
        <InputText
          class="share__input"
          type="text"
          v-model="currentPath"
          readonly
          variant="filled"
          :style="{ width: currentPath.length + 'ch' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import FlaskItem from '@/components/shared/FlaskItem.vue'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

export default {
  name: 'ColorPage',
  data: () => ({
    showAlert: false
  }),
  beforeMount () {
    const { red, green, blue } = this.$route.params
    if (!red || !green || !blue) {
      this.$router.push('/')
    } else if (
      this.isInvalidColor(parseInt(red)) ||
      this.isInvalidColor(parseInt(green)) ||
      this.isInvalidColor(parseInt(blue))
    ) {
      this.showAlert = true
    }
  },
  computed: {
    linkColors () {
      const redCol = parseInt(this.$route.params.red)
      const greenCol = parseInt(this.$route.params.green)
      const blueCol = parseInt(this.$route.params.blue)
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    currentPath () {
      return window.location.origin + this.$route.path
    }
  },
  methods: {
    isInvalidColor (value) {
      console.log(value)
      return isNaN(value) || value < 0 || value > 255
    }
  },
  components: {
    PageTitle,
    FlaskItem,
    InputText,
    Message
  }
}
</script>

<style scoped>
.pi-share-alt {
  font-size: 1.5rem;
}

.share__container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.share__input {
  text-align: center;
  min-width: 150px;
  max-width: 100%;
  padding: 10px;
}
</style>
