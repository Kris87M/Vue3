<template>
  <div class="page">
    <PageTitle>
      Color
      <p>You've picked a great color!</p>
    </PageTitle>
    <flask-item
    class="result-box__flask"
      :size="15"
      :color="linkColors"
      :amount="100"
      :buttons-visible="false" />
    <div class="share__container">
      <span class="pi pi-share-alt"></span>
      <InputText
        class="share__input"
        type="text"
        v-model="currentPath"
        readonly
        variant="filled"
        :style="{ width: currentPath.length + 'ch' }"/>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import FlaskItem from '@/components/shared/FlaskItem.vue'
import InputText from 'primevue/inputtext'

export default {
  name: 'ColorPage',
  beforeMount () {
    const { red, green, blue } = this.$route.params
    if (!red || !green || !blue) {
      this.$router.push('/')
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
  components: {
    PageTitle,
    FlaskItem,
    InputText
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
