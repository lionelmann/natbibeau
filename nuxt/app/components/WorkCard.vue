<template>
  <article class="work" :class="{ reverse: isReversed }">
    <div class="media">
      <img :src="img" :alt="imgAlt || title" loading="lazy" />
    </div>

    <div class="content">
      <h2 class="title">{{ title }}</h2>

      <div v-if="metaLines?.length" class="meta">
        <p v-for="(line, i) in metaLines" :key="i" class="meta-line">
          {{ line }}
        </p>
      </div>

      <p v-if="description" class="description">
        {{ description }}
      </p>

      <div v-if="credits?.length" class="block">
        <h3 class="block-title">Credits</h3>
        <ul class="list">
          <li v-for="(item, i) in credits" :key="i" class="list-item">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}</span>
          </li>
        </ul>
      </div>

      <div v-if="recognition?.length" class="block">
        <h3 class="block-title">Recognition</h3>
        <ul class="list">
          <li v-for="(item, i) in recognition" :key="i" class="list-item">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  img: String,
  imgAlt: String,
  metaLines: { type: Array, default: () => [] },
  description: String,
  credits: { type: Array, default: () => [] },
  recognition: { type: Array, default: () => [] },
  index: { type: Number, default: 0 },
});

const isReversed = computed(() => props.index % 2 === 1);
</script>

<style scoped>
.work {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.35fr);
  grid-template-areas: "media content";
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: start;
  padding: clamp(2.5rem, 6vw, 4.5rem) 0;
  border-bottom: 1px solid var(--color-rule);
}

.work:last-child {
  border-bottom: 0;
}

.work.reverse {
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.92fr);
  grid-template-areas: "content media";
}

.media {
  grid-area: media;
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  background: #111;
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.8s var(--ease-out);
}

@media (hover: hover) {
  .work:hover .media img {
    transform: scale(1.03);
  }
}

.content {
  grid-area: content;
  color: var(--color-ink);
  padding-top: 0.25rem;
}

.title {
  font-size: clamp(1.85rem, 3.8vw, 2.85rem);
  color: var(--color-burgundy);
  font-weight: 600;
  max-width: 18ch;
  letter-spacing: -0.02em;
}

.meta {
  margin: 1.25rem 0 1.1rem;
  font-family: var(--font-meta);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink-soft);
  line-height: 1.55;
}

.description {
  margin: 0 0 1.5rem;
  font-size: 1.02rem;
  line-height: 1.7;
  max-width: var(--measure);
  color: var(--color-ink);
}

.block {
  margin-top: 1.5rem;
  padding-top: 1.15rem;
  border-top: 1px solid var(--color-rule);
}

.block-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--color-burgundy);
  margin-bottom: 0.7rem;
  letter-spacing: -0.01em;
  text-transform: none;
}

.list-item {
  font-size: 0.95rem;
  line-height: 1.45;
  display: grid;
  grid-template-columns: minmax(7.5rem, 11rem) 1fr;
  gap: 0.65rem 1rem;
}

.list-item + .list-item {
  margin-top: 0.45rem;
}

.label {
  font-family: var(--font-meta);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-ink-soft);
}

.value {
  font-weight: 400;
}

@media (max-width: 860px) {
  .work,
  .work.reverse {
    grid-template-columns: 1fr;
    grid-template-areas:
      "media"
      "content";
    gap: 1.35rem;
  }

  .media {
    max-width: 22rem;
    margin: 0 auto;
  }

  .title {
    max-width: none;
  }

  .list-item {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .media img {
    transition: none;
  }
}
</style>
