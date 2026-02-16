<script setup lang="ts">
  import { ref, type PropType } from 'vue';

  const props = defineProps({
    carouselElements: {
      type: Array as PropType<any[]>,
      required: true,
      default: [],
    },
    showButtons: {
      type: Boolean,
      required: false,
      default: true,
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
  });

  const currentSlideId = ref<number>(0);
</script>

<template>
  <div class="carousel-container flex flex-col justify-center items-center">
    <div
      :class="{ 'w-3/4': !fullWidth, 'w-full': fullWidth }"
      class="md:h-fit carousel"
    >
      <template v-for="(element, index) in props.carouselElements" :key="index">
        <div :id="'slide' + index" class="relative w-full carousel-item">
          <slot name="slideContent" :carouselElement="element"></slot>
          <!-- TODO: replace with better mechanism-->
          <div
            class="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2"
            v-if="props.showButtons"
          >
            <a
              v-if="index > 0"
              :href="'#slide' + (index - 1)"
              class="btn btn-circle mr-auto text-black"
              @click="currentSlideId--"
              >❮</a
            >
            <a
              v-if="index < carouselElements.length - 1"
              :href="'#slide' + (index + 1)"
              class="btn btn-circle ml-auto text-black"
              @click="currentSlideId++"
              >❯</a
            >
          </div>
        </div>
      </template>
    </div>
    <!-- <div class="mt-3 h-3 w-3/4 slide-indicators flex justify-center gap-3">
      <div
        v-for="(element, index) of props.carouselElements"
        :class="{ active: currentSlideId == index }"
        class="slide-indicator-dot"
      ></div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
  .carousel-container {
    flex: 1 1 auto;

    .btn {
      border: unset;
      background-color: white;
    }

    .slide-indicators {
      .slide-indicator-dot {
        height: 5px;
        width: 5px;
        border-radius: 100%;
        background-color: rgb(204, 203, 203);

        &.active {
          background-color: red;
        }
      }
    }
  }
</style>
