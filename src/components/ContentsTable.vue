<script lang="ts" setup>
  import type { ContentsTableItem } from '@/models/contents-table-item.model';
  import type { PropType } from 'vue';

  const props = defineProps({
    tableItems: {
      type: Array as PropType<ContentsTableItem[]>,
      required: true,
    },
  });
</script>

<template>
  <ul>
    <li v-for="item in props.tableItems">
      <a class="contents-table-link" :href="'#' + item.label.toLowerCase()">{{
        item.label
      }}</a>
      <ContentsTable v-if="item.children" :tableItems="item.children" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .contents-table-link {
    &.active {
      box-shadow:
        oklch(0 0 0 / 0.01) 0px 1px,
        oklch(1 0 0 / 0.01) 0px -1px;
      background-color: #2e353a;
    }
  }
</style>
