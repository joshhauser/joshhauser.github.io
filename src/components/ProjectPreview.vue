<script setup lang="ts">
  import type { PropType } from 'vue';
  import Chip from './Chip.vue';

  const props = defineProps({
    project: {
      type: Object as PropType<any>,
    },
  });
</script>

<template>
  <div class="project-preview card bg-base-100 w-full md:w-85 shadow-sm">
    <figure>
      <img
        :src="props.project.thumbnailSource"
        :alt="props.project.title + ' thumbnail'"
      />
    </figure>
    <div class="card-body p-4">
      <h2 class="card-title font-bold text-xl">{{ props.project.title }}</h2>
      <div class="flex gap-2">
        <Chip
          v-for="tech in props.project.techs"
          :label="tech"
          :icon="'Candy'"
        />
      </div>
      <div class="divider m-0"></div>
      <p>
        {{ props.project.shortDescription }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .project-preview {
    max-width: 100%;
  }
</style>
