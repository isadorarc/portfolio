<template>
  <div class=" ">
    <main
      class="flex min-h-screen max-w-md pt-8 justify-center items-center py-14 md:max-w-4xl md:ml-28 md:pt-5"
    >
      <!-- <main
      class="flex min-h-screen max-w-md pt-8 flex-col items-start py-8 md:max-w-2xl md:ml-28 md:pt-20"
    > -->
      <div
        class="flex flex-col gap-1 md:gap-2 z-10 text-gray-800 px-6 w-sm items-start justify-between"
      >
        <div class="flex flex-wrap gap-1 md:flex md:gap-40 items-baseline">
          <h1 class="text-3xl font-robotomono">isadora reig</h1>
          <a class="text-gray-600 text-sm" href="mailto:isadorareca@gmail.com"
            >contact</a
          >
        </div>
        <div
          class="flex font-light flex-col gap-2 py-2 max-w-lg text-gray-600 text-sm mb-2"
        >
          <p>
            Developer and artist based in Barcelona with a diverse background in
            tech, psychology and creative fields like: creative programming,
            symbolism and experimental music.
          </p>
          <p>
            <!-- <a
              className="text-main-blue/90 "
              href="https://el.media.mit.edu/logo-foundation/what_is_logo/logo_primer.html"
              target="_blank"
              rel="noopener noreferrer"
              >Logo language</a >,-->
          </p>
          <p></p>
        </div>
        <div
          class="flex flex-wrap md:flex-nowrap mt-2 ml-0 text-sm md:w-full items-center gap-2 md:mt-10"
        >
          <a
            class="md:w-auto w-1/2 bg-white/20 text-center backdrop-blur-2xl border border-black/50 p-1 md:p-2 md:px-4 md:hover:bg-white/40 md:hover:border md:hover:border-white/60"
            href="https://github.com/isadorarc"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </a>
          <!-- <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            class="md:w-auto w-1/2 bg-white/20 text-center backdrop-blur-2xl border border-black/50 p-1 md:p-2 md:px-4 md:hover:bg-white/40 md:hover:border md:hover:border-white/60"
            >UX/UI</a
          > -->
          <a
            class="w-1/2 md:w-auto bg-white/20 text-center backdrop-blur-2xl border border-black/50 p-1 md:p-2 md:px-4 md:hover:bg-white/40 md:hover:border md:hover:border-white/60"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            sessions
          </a>
          <button
            @click="showPlayground"
            class="w-1/2 md:w-auto bg-secondary-green/40 border border-white text-white/90 text-center p-1 md:p-2 md:hover:border md:hover:bg-main-blue/80 md:hover:border-white/0"
          >
            MUSIC
          </button>
        </div>
        <div
          class="mt-4 text-sm font-mono text-secondary-green text-md md:w-full"
        >
          <button @click="toggleLinks">
            <span class="text-secondary-green/80 hover:text-main-blue"
              >links i recently enjoyed</span
            >
          </button>
        </div>
        <div
          class="mt-4 text-sm font-mono text-secondary-green text-md md:w-full"
        >
          <!-- <button @click="toggleLinks">
            <span class="text-secondary-green/80 hover:text-main-blue"
              >links i like</span
            >
          </button> -->
        </div>
      </div>

      <links v-if="showLinks" />
      <playground v-if="showPlaygroundMsg" />
    </main>

    <p5 />
  </div>
</template>

<script>
import p5 from "./components/p5.vue";
import links from "./components/links.vue";
import playground from "./components/playground.vue";

export default {
  name: "app",
  components: {
    links,
    p5,
    playground,
  },
  data() {
    return {
      showLinks: false,
      showPlaygroundMsg: false,
    };
  },
  methods: {
    toggleLinks() {
      this.showLinks = !this.showLinks;
      this.showPlaygroundMsg = false;
    },
    showPlayground() {
      this.showLinks = false;
      this.showPlaygroundMsg = !this.showPlaygroundMsg;
    },
  },
};
</script>

<style lang="scss" scoped></style>
