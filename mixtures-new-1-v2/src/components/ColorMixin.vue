<template>
  <div>
    <mixtures-list />
    <result-box />
  </div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'

export default {
  name: 'ColorMixin',
  components: {
    MixturesList,
    ResultBox
  }
}
</script>
