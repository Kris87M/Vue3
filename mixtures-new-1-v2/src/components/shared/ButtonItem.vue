<template>
  <button
    :style="btnStyles"
    class="btn">

  <!-- icon -->
  <span
    v-if="icon"
    :class="`${iconSet} ${icon}`" />

    <!-- text -->
    <slot></slot>

  </button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    iconSet: {
      type: String,
      default: 'pi'
    },
    text: {
      type: String
    },
    fontSize: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 2
    },
    movement: {
      type: Number,
      default: 0.5
    }
  },
  computed: {
    btnStyles () {
      return {
        width: `${this.size}rem`,
        height: `${this.size}rem`,
        fontSize: `${this.fontSize}rem`,
        '--movement': `${this.movement}rem`
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.btn {
  margin: 0.5rem;
  background-color: $btn-bg-color;
  background-image: $btn-bg-gradient;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  box-shadow: $shadow;
  transition: .3s;
  outline: none;
  font-size: 1.5rem;
  color: $text-color;
    &:hover {
      margin-top: var(--movement);
    }
}
</style>
