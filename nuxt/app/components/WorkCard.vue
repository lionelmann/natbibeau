<template>
  <article class="work-card" :class="{ reverse: isReversed }">
    <!-- IMAGE -->
    <div class="media">
      <img :src="img" :alt="imgAlt || title" loading="lazy" />
    </div>

    <!-- TEXT -->
    <div class="content">
      <h2 class="title">{{ title }}</h2>

      <div class="meta">
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

  metaLines: {
    type: Array,
    default: () => [],
  },

  description: String,

  credits: {
    type: Array,
    default: () => [],
  },

  recognition: {
    type: Array,
    default: () => [],
  },

  index: {
    type: Number,
    default: 0,
  },
});

const isReversed = computed(() => props.index % 2 === 1);
</script>

<style scoped>
.work-card {
  display: grid;
  grid-template-columns: 1.3fr 2fr; /* media always 1fr, content always 2fr */
  grid-template-areas: "media content";
  gap: clamp(28px, 4vw, 56px);
  align-items: start;
  padding: clamp(36px, 5vw, 48px) 0 clamp(56px, 8vw, 96px) 0;
}


/* Reverse: swap both placement AND column widths */
.work-card.reverse {
  grid-template-columns: 2fr 1.3fr; /* content is still 2fr, media is still 1fr */
  grid-template-areas: "content media";
}


/* IMAGE */
.media {
  grid-area: media;
  width: 100%;
  aspect-ratio: 2 / 3; /* poster ratio */
  overflow: hidden;
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* TEXT */
.content {
  grid-area: content;
  color: #1c1c1c;
}

.title {
  font-size: clamp(28px, 5vw, 46px);
  line-height: 1.05;
  margin-bottom: 12px;
  color: #843322;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.meta {
  margin: 24px 0;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #3a3a32;
}

.meta-line {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  
}

.description {
  margin: 18px 0 22px;
  font-size: 16px;
  line-height: 1.4;
  max-width: 48ch;
}

/* Credits / Recognition */
.block {
  margin-top: 22px;
}

.block-title {
  font-size: 24px;
  font-weight: 500;
  color: #843322;
  margin-bottom: 8px;
}

.list-item {
  font-size: 15px;
  line-height: 1.3;
}

.list-item + .list-item {
  margin-top: 4px;
}

.label {
  font-weight: 800;
}

.value {
  font-weight: 400;
}

/* Responsive */
@media (max-width: 860px) {
  .work-card {
    grid-template-columns: 1fr;
    grid-template-areas:
      "media"
      "content";
    gap: 22px;
  }

  .work-card.reverse {
    grid-template-columns: 1fr;
    grid-template-areas:
      "media"
      "content";
  }

  .media {
    max-width: 320px;
    margin: 0 auto;
    width: 100%;
  }

  .description {
    max-width: none;
  }

  .block-title {
    font-size: 20px;
  }
}
</style>
