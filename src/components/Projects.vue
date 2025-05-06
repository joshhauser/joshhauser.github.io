<script setup lang="ts">
  import Carousel from '@/components/Carousel.vue';
  import ProjectPreview from '@/components/ProjectPreview.vue';
  import { onMounted, ref, watch } from 'vue';
  import projectsData from '@/data/projects.json';

  const projects: any[] = [];

  const slides = ref<Array<any[]>>([]);
  const viewportWidth = ref<number>(0);
  let elementsPerSlide: number = 3;

  const setupSlides = (elementPerSlide: number = 3) => {
    slides.value = [];
    let slide: any[] = [];

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

  const setupProjectsPreviews = () => {
    for (const project of projectsData) {
      projects.push({
        title: project.title,
        thumbnailSource: project.thumbnailPath,
        shortDescription: project.shortDescription,
        techs: project.techs,
      });
    }
  };

  const onWindowResize = (event: any) => {
    viewportWidth.value = window.innerWidth;
  };

  watch(viewportWidth, () => {
    let _elementsPerSlide = elementsPerSlide;

    if (viewportWidth.value > 1430) {
      _elementsPerSlide = 3;
    } else if (viewportWidth.value < 1430 && viewportWidth.value > 950) {
      _elementsPerSlide = 2;
    } else {
      _elementsPerSlide = 1;
    }

    if (_elementsPerSlide != elementsPerSlide) {
      elementsPerSlide = _elementsPerSlide;
      setupSlides(_elementsPerSlide);
    }
  });

  onMounted(() => {
    setupProjectsPreviews();
    setupSlides();

    viewportWidth.value = window.innerWidth;
    window.addEventListener('resize', onWindowResize);
  });
</script>

<template>
  <div id="projects" class="pt-5 flex flex-col">
    <h1 class="text-center text-5xl font-bold">Projets personnels</h1>
    <Carousel :carousel-elements="slides" :show-buttons="elementsPerSlide > 1">
      <template #slideContent="slotProps">
        <div class="w-full flex justify-around flex-wrap">
          <ProjectPreview
            v-for="(project, index) of slotProps.carouselElement"
            :project="project"
            @click="
              $router.push({ name: 'projects', params: { id: index + 1 } })
            "
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
