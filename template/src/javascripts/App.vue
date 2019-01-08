<template lang="pug">
div
  img(src='../images/home.svg')
  p Hello World!
  TestComponent
</template>

<script>
// components
import TestComponent from './components/TestComponent.vue';

export default {
  components: {
    TestComponent
  }
};
</script>

<style lang="scss" scoped>
//
</style>
