<template>
  <div id="app">

    <!-- heading -->
    <header>
      <h1>Books<span>.app</span></h1>
    </header>

    <!-- books list -->
    <ul>
    </ul>

    <!-- no books message -->
    <p>No books...</p>

    <!-- add book form -->
    <form>
      <label>
        Title:
        <input type="text" name="title">
      </label>
      <label>
        price:
        <input type="number" name="price">
      </label>
      <button>Add book</button>
    </form>

  </div>
</template>

<script>
export default {
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
  })
}
</script>
