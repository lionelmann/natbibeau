<script setup>
defineProps({
  title: { type: String, default: "Upcoming Projects" },
  leftSrc: { type: String, required: true },
  rightSrc: { type: String, required: true },
  leftAlt: { type: String, default: "" },
  rightAlt: { type: String, default: "" },
});
</script>

<template>
  <section class="upcoming-header" aria-label="Upcoming projects">
    <div class="inner">
      <div class="photos" aria-hidden="true">
        <figure class="photo">
          <img :src="leftSrc" :alt="leftAlt || title" loading="lazy" />
        </figure>
        <figure class="photo">
          <img :src="rightSrc" :alt="rightAlt || title" loading="lazy" />
        </figure>
      </div>

      <p class="eyebrow">In development</p>
      <h2 class="title">Upcoming Projects</h2>
    </div>
  </section>
</template>

<style scoped>
.upcoming-header {
  padding: clamp(3rem, 8vw, 5.5rem) 0 0;
}

.inner {
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

.photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(0.65rem, 1.5vw, 1.1rem);
}

.photo {
  margin: 0;
  overflow: hidden;
  background: #111;
}

.photo img {
  display: block;
  width: 100%;
  height: clamp(11rem, 28vw, 22rem);
  object-fit: cover;
  object-position: center;
  filter: grayscale(1) contrast(1.05);
  transition: filter 0.5s var(--ease-out), transform 0.8s var(--ease-out);
}

@media (hover: hover) {
  .photo:hover img {
    filter: grayscale(0.35) contrast(1.05);
    transform: scale(1.02);
  }
}

.eyebrow {
  margin-top: clamp(1.5rem, 3vw, 2.25rem);
  font-family: var(--font-meta);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-ink-soft);
}

.title {
  margin: 0.55rem 0 0;
  font-family: var(--font-display);
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(2rem, 8vw, 5.5rem);
  line-height: 0.92;
  letter-spacing: 0.02em;
  color: var(--color-burgundy);
  text-align: center;
  padding-bottom: clamp(1.5rem, 3vw, 2.5rem);
}

@media (max-width: 520px) {
  .photos {
    grid-template-columns: 1fr;
  }

  .photo img {
    height: clamp(10rem, 45vw, 14rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .photo img {
    transition: none;
  }
}
</style>
