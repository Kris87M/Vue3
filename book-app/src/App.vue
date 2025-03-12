<template>
  <div id="app" class="app">

    <!-- heading -->
    <header class="app__heading">
      <h1>Books<span>.app</span></h1>
    </header>

    <!-- books list -->
    <books-list @remove="removeBook" :books="books" />

    <!-- no books message -->
    <books-length-msg :booksAmount="books.length" />

    <!-- form -->
    <book-form @add="addBook" />

    <!-- books summary -->
    <books-summary :booksAmount="books.length" :books="books"/>

  </div>
</template>

<script>
import BooksList from './components/BookList'
import BooksLengthMsg from './components/BooksLengthMsg'
import BookForm from './components/BookForm'
import BooksSummary from './components/BooksSummary'

export default {
  components: { BooksList, BooksLengthMsg, BookForm, BooksSummary },
  name: 'App',
  data: () => ({
    books: [
      {
        title: 'The Catcher in the Rye',
        price: 20
      },
      {
        title: 'Of Mice and Men',
        price: 18
      }
    ]
  }),
  methods: {
    removeBook (index) {
      this.books.splice(index, 1)
    },
    addBook (book) {
      this.books.push({ ...book })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app {
    width: 100%;
    max-width: 1000px;
    padding: 2rem;
    margin: 0 auto;

    &__heading {
      font-size: 3rem;
      text-align: center;
      span {
        color: #5a58da;
      }
    }
  }
</style>
