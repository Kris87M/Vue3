<template>
  <div>
    <ul>
      <li :key="index" v-for="(book, index) in books">
        {{ book.title }}, {{ book.price }}
        <button @click="$emit('remove', index)">Remove</button>
      </li>
    </ul>
    <p v-show="!books.length">No books...</p>
  </div>
</template>

<script>
export default {
  name: 'BooksList',
  props: {
    books: {
      type: Array,
      required: true
    }
  }
}
</script>
