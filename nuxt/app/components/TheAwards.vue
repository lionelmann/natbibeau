<script setup>
const props = defineProps({
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
      { src: "/images/award-env.avif", alt: "Environmental Award nominee" },
      { src: "/images/award-doxa.avif", alt: "DOXA Documentary Film Festival 2020" },
      { src: "/images/award-goldenhorse.avif", alt: "Taipei Golden Horse Film Festival 2020" },
      { src: "/images/award-hotsprings.avif", alt: "Hot Springs Documentary Film Festival 2020" },
      { src: "/images/award-film.avif", alt: "Festival selection" },
    ],
  },
  borderColor: { type: String, default: "var(--color-burgundy)" },
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
  background: color-mix(in srgb, var(--color-paper) 70%, white);
  border-bottom: 1px solid v-bind(borderColor);
  padding: clamp(1.1rem, 2.5vw, 1.85rem) 0;
}

.inner {
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(0.75rem, 1.8vw, 1.35rem);
  align-items: center;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(2.5rem, 5.5vw, 4.5rem);
  opacity: 0;
  transform: translateY(6px);
  animation: reveal 0.55s var(--ease-out) forwards;
  animation-delay: calc(var(--i) * 45ms);
}

.img {
  width: 100%;
  height: auto;
  max-height: 4.5rem;
  object-fit: contain;
  display: block;
  transition: filter 0.25s ease, transform 0.25s ease;
}

@media (hover: hover) {
  .item:hover .img {
    filter: contrast(1.06);
    transform: translateY(-1px);
  }
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .item {
    opacity: 1;
    transform: none;
    animation: none;
  }
}

@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.65rem 0.75rem;
  }

  .img {
    max-height: 3.25rem;
  }
}
</style>
