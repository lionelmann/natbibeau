<template>
  <article class="card" :class="{ reverse: isReversed }">
    <!-- TEXT -->
    <div class="content">
      <h2 class="title">
        {{ title }}
        <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
      </h2>

      <div v-if="metaLines?.length" class="meta">
        <p v-for="(line, i) in metaLines" :key="i">
          {{ line }}
        </p>
      </div>

      <div v-if="description?.length" class="desc">
        <p v-for="(p, i) in description" :key="i" class="desc-p">
          {{ p }}
        </p>
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
        <span v-else class="based-on-link">
          <em>{{ basedOn.text }}</em>
        </span>
        <span v-if="basedOn.by"> by {{ basedOn.by }}</span>.
      </p>
    </div>

    <!-- IMAGE -->
    <div class="media">
      <img :src="img" :alt="imgAlt || title" loading="lazy" />
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  subtitle: String, // e.g. "(working title)"
  img: String,
  imgAlt: String,

  metaLines: {
    type: Array,
    default: () => [],
  },

  // array of paragraphs for cleaner control
  description: {
    type: Array,
    default: () => [],
  },

  // optional “Based on…” line
  // { prefix, source, text, href, by }
  basedOn: {
    type: Object,
    default: () => ({}),
  },

  index: {
    type: Number,
    default: 0,
  },
});

const isReversed = computed(() => props.index % 2 === 1);
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 1fr 1.15fr; /* image slightly heavier like screenshot */
  gap: clamp(24px, 4vw, 64px);
  padding: clamp(32px, 5vw, 48px) 0;
}

.card.reverse .content {
  order: 2;
}
.card.reverse .media {
  order: 1;
}

/* TEXT */
.content {
  max-width: 56ch;
  color: #1c1c1c;
}

.title {
  font-size: clamp(28px, 5vw, 46px);
  line-height: 1.05;
  color: #843322;
  font-weight: 500;

  margin-bottom: 18px;
}

.subtitle {
  display: block;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #843322;
}

.meta {
  margin: 24px 0;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #3a3a32;
    line-height: 1.35;
}



.desc {
  margin-top: 10px;
}

.desc-p {
  font-size: 16px;
  line-height: 1.4;
}

.desc-p + .desc-p {
  margin-top: 14px;
}

.based-on {
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.55;
}

.based-on-source {
  font-weight: 700;
}

.based-on-link {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}

/* IMAGE */
.media {
  width: 100%;
  aspect-ratio: 16 / 9; /* upcoming stills are wide, not poster */
  overflow: hidden;
  background: #000;
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive */
@media (max-width: 900px) {
  .card {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 20px;
  }

  .card.reverse .content,
  .card.reverse .media {
    order: initial;
  }

  .content {
    max-width: none;
  }

  .title,
  .meta {
    text-align: left; /* better reading on mobile */
  }

  .media {
    aspect-ratio: 16 / 10;
  }
}
</style>
