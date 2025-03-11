<template>
  <p>Books amount: {{ booksAmount }}</p>
  <p>Books price: {{ totalPrice }}</p>
</template>

<script>
export default {
  name: 'BooksSummary',
  props: {
    booksAmount: {
      type: Number,
      required: true
    },
    books: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalPrice () {
      return this.books.reduce((sum, book) => sum + book.price, 0)
    }
  }
}
</script>
