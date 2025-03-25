<script setup lang="ts">
  import Carousel from '@/components/Carousel.vue';
  import ProjectPreview from '@/components/ProjectPreview.vue';

  const project: any = {
    title: 'Projet',
    thumbnailSource: '/src/assets/imgs/thumbnail_placeholder.png',
    shortDescription: 'Un exemple de projet',
    description:
      "Un exemple de projet décrit de manière beaucoup plus longue mais simplement pour avoir un truc à tester parce que je veux quelque chose de mieux qu'un Lorem Ipsum",
    techs: ['Vue', 'Python', 'FastAPI'],
  };
</script>

<template>
  <div id="projects" class="pt-5 flex flex-col">
    <h1 class="text-center text-5xl font-bold">Projets</h1>
    <Carousel :carousel-elements="[project, project, project, project]">
      <template #slideContent="slotProps">
        <ProjectPreview :project="slotProps.carouselElement" />
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
  #projects {
    height: 100%;
    background-color: rgb(29, 29, 29);
  }

  .projects-carousel {
    flex: 1 1 auto;
  }
</style>
