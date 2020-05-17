<template>
  <div>test, {{ name }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'test',
  data() {
    return {
      name: 'hhh'
    }
  }
})
</script>

<style></style>
