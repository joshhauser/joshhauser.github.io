<script setup lang="ts">
  import projectsData from '@/data/projects.json';
</script>

<template>
  <div class="content">{{ projectsData }}</div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/scss/variables' as vars;

  .content {
    height: calc(100vh - vars.$topbar-height);
    overflow-y: auto;
    margin-top: vars.$topbar-height;
    scroll-behavior: smooth;
  }
</style>
