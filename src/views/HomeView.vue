<template>
  <Application>
    <div style="height: 1000px;">
      <div class="mb-4">Content will goes here</div>

      <div class="flex flex-row gap-2">
        <JButton v-for="i of 10" :key="i" @click="coba(i)">
          <template #text>Click here! ({{ i }})</template>
        </JButton>
      </div>
    </div>
  </Application>
</template>

<script>
// @ is an alias to /src
import Application from '@/layouts/Application.vue'

export default {
  name: 'HomeView',
  components: {
    Application
  },

  methods: {
    coba(i) {
      alert(i);
    },
  },
}
</script>
