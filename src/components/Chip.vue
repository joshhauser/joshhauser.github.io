<script setup lang="ts">
  import Icon from '@/components/Icon.vue';

  const props = defineProps({
    label: {
      type: String,
      required: true,
      default: () => 'Chip label',
    },
    icon: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <div class="chip flex gap-2 py-1 px-3 items-center">
    <Icon v-if="props.icon" :name="props.icon" :size="16" />
    <span class="font-bold">{{ label }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .chip {
    border: 1px solid white;
    border-radius: 8px;
    font-size: 8pt;
    color: white;
  }
</style>
