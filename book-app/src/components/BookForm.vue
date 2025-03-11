<template>
  <form @submit.prevent="handleSubmit">
    <label>
      Title:
      <input v-model="form.title" type="text" name="title">
    </label>
    <label>
      price:
      <input v-model.number="form.price" type="number" name="price">
    </label>
    <button>Add book</button>
  </form>
</template>

<script>
export default {
  name: 'BookForm',
  data: () => ({
    form: {
      title: '',
      price: 0
    }
  }),
  methods: {
    handleSubmit () {
      this.$emit('add', this.form)
      this.form = { title: '', price: 0 }
    }
  }
}
</script>
