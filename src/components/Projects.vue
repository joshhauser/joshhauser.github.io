<script setup lang="ts">
  import Carousel from '@/components/Carousel.vue';
  import ProjectPreview from '@/components/ProjectPreview.vue';
  import { onMounted, ref, watch } from 'vue';

  const project: any = {
    title: 'Projet',
    thumbnailSource: '/src/assets/imgs/thumbnail_placeholder.png',
    shortDescription: 'Un exemple de projet',
    description:
      "Un exemple de projet décrit de manière beaucoup plus longue mais simplement pour avoir un truc à tester parce que je veux quelque chose de mieux qu'un Lorem Ipsum",
    techs: ['Vue', 'Python', 'FastAPI'],
  };

  const projects = [project, project, project];
  const slides = ref<Array<any[]>>([]);
  const viewportWidth = ref<number>(0);

  const setupSlides = (elementPerSlide: number = 3) => {
    slides.value = [];
    let slide = [];

    for (const index in projects) {
      const element = projects[index];

      if (slide.length < elementPerSlide) {
        slide.push(element);
      } else {
        slides.value.push(slide);
        slide = [element];
      }
    }

    slides.value.push(slide);
  };

  const onWindowResize = (event: any) => {
    viewportWidth.value = window.innerWidth;
  };

  watch(viewportWidth, () => {
    console.log(viewportWidth.value);
    if (viewportWidth.value > 1430) {
      setupSlides(3);
    } else if (viewportWidth.value < 1430 && viewportWidth.value > 950) {
      setupSlides(2);
    } else {
      setupSlides(1);
    }
  });

  onMounted(() => {
    setupSlides();
    viewportWidth.value = window.innerWidth;
    window.addEventListener('resize', onWindowResize);
  });
</script>

<template>
  <div id="projects" class="pt-5 flex flex-col">
    <h1 class="text-center text-5xl font-bold">Projets</h1>
    <Carousel :carousel-elements="slides">
      <template #slideContent="slotProps">
        <div class="w-full flex justify-around flex-wrap">
          <ProjectPreview
            v-for="project of slotProps.carouselElement"
            :project="project"
          />
        </div>
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
