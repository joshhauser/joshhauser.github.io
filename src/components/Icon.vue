<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import * as lucideIcons from 'lucide-vue-next';
  import * as simpleIcons from 'simple-icons';

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    size: Number,
    color: String,
    strokeWidth: {
      type: Number,
      default: () => 2,
    },
    defaultClass: String,
  });

  const icon = ref();

  onMounted(() => {
    icon.value = lucideIcons[props.name];
  });
</script>

<template>
  <component
    v-if="icon"
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
  <div v-else>
    <div
      class="simple-icon"
      :style="{ fill: color }"
      v-html="simpleIcons[props.name]?.svg"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
  .simple-icon {
    height: 24px;
    width: 24px;
  }
</style>
