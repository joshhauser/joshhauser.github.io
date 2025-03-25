<script setup lang="ts">
  import Typewriter from 'typewriter-effect/dist/core';
  import { onMounted } from 'vue';

  let typed;
  let typewriter;
  const techs = ['Java', 'Python', 'JavaScript', 'NodeJS'];

  onMounted(() => {
    typed = document.getElementById('typewriter');

    typewriter = new Typewriter(typed, {
      delay: 100,
      loop: true,
    });

    for (const tech of techs) {
      typewriter
        .typeString(`<b class="typed-skill">${tech}</b>`)
        .pauseFor(1000)
        .deleteAll()
        .start();
    }
  });
</script>

<template>
  <div class="hero" id="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-6xl font-bold">Joshua HAUSER</h1>
        <div class="typewriting">
          <span>Développeur&nbsp;</span><span id="typewriter"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hero {
    height: 100%;
    background-image: url('@/assets/imgs/hero_bg.jpg');

    .hero-overlay {
      backdrop-filter: blur(5px);
    }

    .typewriting {
      font-size: 18pt;
    }
  }
</style>
