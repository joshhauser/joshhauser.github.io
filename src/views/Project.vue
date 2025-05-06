<script setup lang="ts">
  import Carousel from '@/components/Carousel.vue';

  import ContentsTable from '@/components/ContentsTable.vue';
  import projectsData from '@/data/projects.json';
  import { onMounted, onUpdated, ref, useTemplateRef } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { renderMarkdown } from '@/utils/rendering';

  const route = useRoute();
  const router = useRouter();

  const project = ref<any | undefined>(undefined);
  const contentsTableItems = [
    {
      label: 'Description',
    },
  ];
  const contentDiv = useTemplateRef('content');

  onMounted(() => {
    project.value = projectsData[Number(route.params.id) - 1];
    if (project.value == undefined) {
      router.push({ name: 'home' });
    }

    if (project.value.resources) {
      contentsTableItems.push({ label: 'Ressources' });
    }

    if (project.value.gallery) {
      contentsTableItems.push({ label: 'Galerie' });
    }
  });

  onUpdated(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.contents-table-link');

    contentDiv.value?.addEventListener('scroll', (event) => {
      let current: string | null = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (
          contentDiv.value?.scrollTop! >=
          sectionTop - window.innerHeight / 2
        ) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  });
</script>

<template>
  <div ref="content" class="content flex justify-center">
    <div v-if="project" class="lg:w-[50%] mt-5 flex flex-col">
      <p class="text-4xl">
        {{ project.title }}
      </p>
      <div class="divider"></div>
      <div class="grid grid-cols-6 gap-5 pb-10">
        <div class="col-span-5 flex flex-col gap-3">
          <section id="description">
            <p class="text-3xl mb-3">Description</p>
            <div v-html="renderMarkdown(project.description)"></div>
          </section>
          <section v-if="project.resources" id="ressources">
            <p class="text-3xl mb-3">Ressources</p>
            <ul class="resources-list">
              <li v-for="resource in project.resources">{{ resource }}</li>
            </ul>
          </section>
          <section v-if="project.gallery" id="galerie">
            <p class="text-3xl mb-3">Galerie</p>
            <Carousel
              :carousel-elements="project.gallery"
              :show-buttons="project.gallery.length > 1"
              :full-width="true"
            >
              <template #slideContent="slotProps">
                <div class="w-full flex justify-around flex-wrap">
                  <figure>
                    <img :src="slotProps.carouselElement.src" class="mt-2" />
                    <figcaption class="mt-3 text-center">
                      {{ slotProps.carouselElement.caption }}
                    </figcaption>
                  </figure>
                </div>
              </template>
            </Carousel>
          </section>
        </div>

        <div class="contents-table">
          <div class="sticky top-3 menu bg-base-200 rounded-box w-56">
            <p class="text-2xl ml-2 mb-2">Sommaire</p>
            <ContentsTable :tableItems="contentsTableItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/scss/variables' as vars;

  .content {
    height: calc(100vh - vars.$topbar-height);
    overflow-y: auto;
    margin-top: vars.$topbar-height;
    scroll-behavior: smooth;
  }
</style>

<style>
  #description,
  #ressources {
    ul {
      list-style: disc;
      margin-left: 30px;
    }
  }
</style>
