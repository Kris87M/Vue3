<template>
  <p v-if="booksAmount === 0">Go get some books!</p>
  <p v-else-if="booksAmount === 1">One single book!</p>
  <p v-else-if="booksAmount <= 5">Not too many of them…</p>
  <p v-else>{{ booksAmount }} books</p>
</template>

<script>
export default {
  name: 'BooksLengthMsg',
  props: {
    booksAmount: {
      type: Number,
      required: true
    }
  }
}
</script>
