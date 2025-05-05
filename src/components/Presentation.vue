<template>
  <div id="presentation" class="presentation flex justify-center items-center">
    <div
      class="presentation-content flex flex-col items-center w-full lg:w-4/5 h-full lg:h-[90%] justify-center lg:rounded-3xl"
    >
      <div
        class="presentation-title text-5xl md:text-7xl w-full font-bold text-center my-4 text-pretty"
      >
        ACCRO À LA <span class="highlighted">TECHNOLOGIE</span>
      </div>
      <div class="presentation-catchphrase text-center text-xl w-full mb-8">
        J'aime apprendre, et aller toujours plus loin pour concrétiser vos idées
        avec mon clavier.
      </div>
      <div class="presentation-stats grid sm:grid-cols-3 gap-[8vw]">
        <!-- TODO: replace with Stat component from DaisyUI -->
        <div class="presentation-stat text-center">
          <p class="presentation-stat-number text-6xl font-bold">4</p>
          <p class="presentation-stat-label text-lg font-semibold">
            années
            <br />
            d'expérience
          </p>
        </div>
        <div class="presentation-stat text-center">
          <p class="presentation-stat-number text-6xl font-bold">6</p>
          <p class="presentation-stat-label text-lg font-semibold">
            clients
            <br />
            satisfaits
          </p>
        </div>
        <div class="presentation-stat text-center">
          <p class="presentation-stat-number text-6xl font-bold">8</p>
          <p class="presentation-stat-label text-lg font-semibold">
            projets
            <br />
            réalisés
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .presentation {
    height: 100%;

    &-content {
      background-color: #3a3a3a;
    }

    &-title {
      .highlighted {
        color: #a6d189;
      }
    }
  }
</style>
