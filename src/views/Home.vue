<script setup lang="ts">
  import Hero from '@/components/Hero.vue';
  import Presentation from '@/components/Presentation.vue';
  import Projects from '@/components/Projects.vue';
</script>

<template>
  <div class="content">
    <Hero />
    <Presentation />
    <Projects />
  </div>
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
