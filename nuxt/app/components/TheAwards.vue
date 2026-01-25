<!-- components/TheAwards.vue -->
<script setup>
const props = defineProps({
  /**
   * If you pass an array, it should look like:
   * [{ src: "/images/award-hotdocs.avif", alt: "Hot Docs Audience Award 2020" }, ...]
   */
  awards: {
    type: Array,
    default: () => [
      { src: "/images/award-hotdocs2020_cropped_processed_by_imagy.avif", alt: "Hot Docs Audience Award 2020" },
      { src: "/images/award-newport_cropped_processed_by_imagy.avif", alt: "Newburyport Documentary Film Festival 2020" },
      { src: "/images/award-nyc_cropped_processed_by_imagy.avif", alt: "DOC NYC 2020" },
      { src: "/images/award-stream_cropped_processed_by_imagy.avif", alt: "FIN Stream 2020" },
      { src: "/images/Buffalo_laurels.png", alt: "Buffalo International Film Festival 2020" },
      { src: "/images/Calgary_laurels.png", alt: "CIFF Official Selection" },
      { src: "/images/award-forestcity.avif", alt: "Forest City Film Festival 2020" },
      { src: "/images/award-env.avif", alt: "Nominee" },
      { src: "/images/award-doxa.avif", alt: "DOXA Documentary Film Festival 2020" },
      { src: "/images/award-goldenhorse.avif", alt: "Taipei Golden Horse Film Festival 2020" },
      { src: "/images/award-hotsprings.avif", alt: "Hot Docs 2020" },
      { src: "/images/award-film.avif", alt: "Hot Springs Documentary Film Festival 2020" },
    ],
  },

  maxWidth: { type: String, default: "1344px" },
  background: { type: String, default: "#f4eddc" }, // warm paper tone
  borderColor: { type: String, default: "#a33a2a" }, // thin red line like your reference
});
</script>

<template>
  <section class="awards" aria-label="Awards and festival selections">
    <div class="inner">
      <ul class="grid">
        <li
          v-for="(a, i) in awards"
          :key="i"
          class="item"
          :style="{ '--i': i }"
        >
          <img
            class="img"
            :src="a.src"
            :alt="a.alt || ''"
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.awards {
  background: #fbf9dc;
  border-bottom: 2px solid v-bind(borderColor);
  padding: clamp(18px, 3vw, 34px) 0; /* a bit more breathing room than the ref */
}

.inner {
  margin: 0 auto;
  padding: 0 clamp(16px, 3vw, 28px);
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(12px, 2vw, 22px);
  align-items: center;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(44px, 6vw, 78px);
  opacity: 0;
  transform: translateY(8px);
  animation: reveal 0.6s ease-out forwards;
  animation-delay: calc(var(--i) * 60ms);
  transition: transform 0.25s ease, filter 0.25s ease;
  will-change: transform;
}

.img {
  width: 100%;
  height: auto;
  max-height: 78px;
  object-fit: contain;
  display: block;
  transition: filter 0.25s ease;
}


@media (hover: hover) {
  .item:hover {
    transform: translateY(-2px);
  }
  .item:hover .img {
    filter: contrast(1.05) saturate(1.05);
  }
}

/* Keyframes for reveal */
@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .item {
    opacity: 1;
    transform: none;
    animation: none;
    transition: none;
  }

  .img {
    transition: none;
  }
}

/* Responsive */
@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .img {
    max-height: 74px;
  }
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .img {
    max-height: 64px;
  }
}

@media (max-width: 420px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
