<template>
  <div>
    <ul class="books-list">
      <li
        :key="index" v-for="(book, index) in books"
        class="books-list__item"
        :class="{ 'books-list__item--promotion': book.price < 20 }">
        {{ book.title }}, {{ book.price }}
        <button
          @click="$emit('remove', index)"
          class="books-list__btn"
          v-text="'Remove'" />
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

<style lang="scss" scoped>
.books-list {
  font-size: 1rem;
  list-style-type: none;
  margin: 1rem 0;
  padding: 1rem;
  color: #637892;
  font-weight: 700;

  &__item {
    padding: 1rem 0;
    border-bottom: .0625rem dashed rgba(0,0,0,.1);

    &--promotion {
      font-size: 1.5rem;
      text-decoration: underline;
    }
  }

  &__btn {
    color: #fff;
    box-shadow: 0 10px 40px 0 rgba(76,104,239,.35), 0 0 20px 0 rgba(76,104,239,.05);
    border-radius: .3rem;
    border: none;
    font-family: inherit;
    text-transform: uppercase;
    font-weight: 700;
    min-width: 6rem;
    text-align: center;
    cursor: pointer;
    transition: .2s;
    background: #ea2027;
    color: #fff;
    padding: .5rem 1rem;
    font-size: .6rem;
    margin: 0 .5rem;

    &:hover {
      box-shadow: 0 20px 40px 0 rgba(76,104,239,.35);
    }
  }
}
</style>
