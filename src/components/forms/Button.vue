<template>
  <button class="border border-gray-400 border-solid rounded bg-gray-400 px-4 py-2">
    <slot name="text"></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
  }
</script>