<script setup lang="ts">
  import type { PropType } from 'vue';
  import { MenuItem } from '@/models/menu-item.model';
  import TopbarButton from './TopbarButton.vue';

  const props = defineProps({
    menuItems: {
      type: Array as PropType<MenuItem[]>,
    },
  });
</script>

<template>
  <ul class="menu rounded-box w-56 lg:menu-horizontal justify-end w-full gap-3">
    <li v-for="item in props.menuItems">
      <TopbarButton
        :label="item.label"
        :icon="item.icon"
        :icon-color="item.iconColor"
        :link="item.link"
      />
    </li>
  </ul>
</template>
