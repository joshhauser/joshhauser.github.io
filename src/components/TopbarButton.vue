<script setup lang="ts">
  import Icon from '@/components/Icon.vue';

  const props = defineProps({
    label: {
      type: String,
      required: true,
      default: () => 'Button',
    },
    icon: {
      type: String,
      required: false,
    },
    iconColor: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
      default: () => '#',
    },
  });
</script>

<template>
  <a :href="props.link">
    <Icon v-if="props.icon" :name="props.icon" :color="props.iconColor" />
    <span class="label">{{ props.label }}</span>
  </a>
</template>

<style lang="scss" scoped>
  .label {
    color: white;
  }
</style>
