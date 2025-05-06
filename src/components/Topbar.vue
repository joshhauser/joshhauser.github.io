<script setup lang="ts">
  import type { MenuItem } from '@/models/menu-item.model';
  import TopbarMenu from './TopbarMenu.vue';

  const iconColor: string = 'white';

  const menu: MenuItem[] = [
    {
      label: 'Accueil',
      icon: 'Home',
      iconColor: iconColor,
      link: '/#hero',
    },
    {
      label: 'Présentation',
      icon: 'CircleUser',
      iconColor: iconColor,
      link: '/#presentation',
    },
    {
      label: 'Projets',
      icon: 'Code',
      iconColor: iconColor,
      link: '/#projects',
    },
  ];
</script>

<template>
  <div class="topbar flex items-center justify-center items-center">
    <div class="grid grid-cols-2 w-6xl">
      <div
        class="avatar-container flex items-center"
        @click="$router.push({ name: 'home' })"
      >
        <!-- Ca c'est ma tronche -->
        <img src="@/assets/imgs/avatar.png" alt="3D avatar" />
      </div>
      <div class="menu w-full">
        <TopbarMenu :menu-items="menu" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/scss/variables' as vars;

  .topbar {
    position: fixed;
    background-color: rgb(22, 22, 22);
    top: 0;
    left: 0;
    right: 0;
    height: vars.$topbar-height;
    z-index: 1;
    box-shadow: 0px 2px 2px rgb(37, 37, 37);

    .avatar-container {
      max-height: 100%;

      &:hover {
        cursor: pointer;
      }

      img {
        max-height: 50px;
      }
    }
  }
</style>
