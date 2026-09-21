<template>
  <article class="project" :class="{ reverse: isReversed }">
    <div class="content">
      <h2 class="title">
        {{ title }}
        <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
      </h2>

      <div v-if="metaLines?.length" class="meta">
        <p v-for="(line, i) in metaLines" :key="i">{{ line }}</p>
      </div>

      <div v-if="description?.length" class="desc">
        <p v-for="(p, i) in description" :key="i" class="desc-p">{{ p }}</p>
      </div>

      <p v-if="basedOn?.text" class="based-on">
        {{ basedOn.prefix || "Based on the article in" }}
        <span class="based-on-source">{{ basedOn.source }}</span>,
        <a
          v-if="basedOn.href"
          class="based-on-link"
          :href="basedOn.href"
          target="_blank"
          rel="noopener"
        >
          <em>{{ basedOn.text }}</em>
        </a>
        <span v-else>
          <em>{{ basedOn.text }}</em>
        </span>
        <span v-if="basedOn.by"> by {{ basedOn.by }}</span>.
      </p>
    </div>

    <div class="media">
      <img :src="img" :alt="imgAlt || title" loading="lazy" />
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  img: String,
  imgAlt: String,
  metaLines: { type: Array, default: () => [] },
  description: { type: Array, default: () => [] },
  basedOn: { type: Object, default: () => ({}) },
  index: { type: Number, default: 0 },
});

const isReversed = computed(() => props.index % 2 === 1);
</script>

<style scoped>
.project {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: center;
  padding: clamp(2.25rem, 5vw, 3.75rem) 0;
  border-bottom: 1px solid var(--color-rule);
}

.project:last-child {
  border-bottom: 0;
}

.project.reverse .content {
  order: 2;
}

.project.reverse .media {
  order: 1;
}

.content {
  max-width: 34rem;
  color: var(--color-ink);
}

.title {
  font-size: clamp(1.7rem, 3.6vw, 2.65rem);
  color: var(--color-burgundy);
  font-weight: 700;
  margin-bottom: 1rem;
}

.subtitle {
  display: block;
  margin-top: 0.5rem;
  font-family: var(--font-meta);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.meta {
  margin: 0 0 1.1rem;
  font-family: var(--font-meta);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink-soft);
  line-height: 1.55;
}

.desc-p {
  font-size: 1.02rem;
  line-height: 1.7;
}

.desc-p + .desc-p {
  margin-top: 0.9rem;
}

.based-on {
  margin-top: 1rem;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--color-ink-soft);
}

.based-on-source {
  font-family: var(--font-meta);
  font-weight: 700;
  letter-spacing: 0.04em;
}

.based-on-link {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.media {
  width: 100%;
  aspect-ratio: 16 / 9;
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
  .project:hover .media img {
    transform: scale(1.03);
  }
}

@media (max-width: 900px) {
  .project {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .project.reverse .content,
  .project.reverse .media {
    order: initial;
  }

  .content {
    max-width: none;
  }

  .media {
    aspect-ratio: 16 / 10;
  }
}

@media (prefers-reduced-motion: reduce) {
  .media img {
    transition: none;
  }
}
</style>
