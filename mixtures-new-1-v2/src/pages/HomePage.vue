<template>
  <div class="page">
    <h1>Home</h1>
    <Message severity="warn" class="animate__animated animate__shakeY animate__delay-2s">
      Warning! This app is still in development...
    </Message>
  </div>
</template>

<script>
import Message from 'primevue/message'

export default {
  name: 'HomePage',
  components: {
    Message
  }
}
</script>
