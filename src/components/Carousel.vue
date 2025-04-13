<script setup lang="ts">
  import { onMounted, ref, type PropType } from 'vue';

  const props = defineProps({
    carouselElements: {
      type: Array as PropType<any[]>,
      required: true,
      default: [],
    },
  });

  const currentSlideId = ref<number>(0);
</script>

<template>
  <div class="carousel-container flex justify-center items-center">
    <div class="w-3/4 h-[80%] md:h-fit carousel">
      <template v-for="(element, index) in props.carouselElements">
        <div :id="'slide' + index" class="relative w-full carousel-item">
          <slot name="slideContent" :carouselElement="element"></slot>
          <div
            class="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              v-if="index > 0"
              :href="'#slide' + (index - 1)"
              class="btn btn-circle mr-auto bg-white text-black"
              @click="currentSlideId--"
              >❮</a
            >
            <a
              v-if="index < carouselElements.length - 1"
              :href="'#slide' + (index + 1)"
              class="btn btn-circle ml-auto bg-white text-black"
              @click="currentSlideId++"
              >❯</a
            >
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .carousel-container {
    flex: 1 1 auto;

    .btn {
      border: unset;
    }
  }
</style>
