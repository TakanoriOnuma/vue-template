<template lang="pug">
div
  img(src='../images/home.svg')
  p Hello World!
  TestComponent
  {{#isUseStore}}
  p counter
  button(@click="onDecrementButtonClick") -
  span(style="padding: 0 10px;") \{{ $store.state.count }}
  button(@click="onIncrementButtonClick") +
  {{/isUseStore}}
</template>

<script>
// components
import TestComponent from './components/TestComponent.vue';

export default {
  components: {
    TestComponent
  },
  {{#isUseStore}}
  methods: {
    onIncrementButtonClick() {
      this.$store.commit('increment');
    },
    onDecrementButtonClick() {
      this.$store.commit('decrement');
    }
  }
  {{/isUseStore}}
};
</script>

<style lang="scss" scoped>
//
</style>
