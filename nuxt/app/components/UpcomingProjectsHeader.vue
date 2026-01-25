<script setup>
const props = defineProps({
  title: { type: String, default: "UPCOMING PROJECTS" },

  // Nuxt 4: put these in /public (ex: /images/upcoming-left.jpg)
  leftSrc: { type: String, required: true },
  rightSrc: { type: String, required: true },
  leftAlt: { type: String, default: "" },
  rightAlt: { type: String, default: "" },

  // optional: control the max content width (matches your other sections)
  maxWidth: { type: String, default: "1366px" },
});
</script>

<template>
  <section class="upcoming-header" aria-label="Section header">
    <div class="inner" :style="{ maxWidth: maxWidth }">

      <div class="photos" aria-hidden="true">
        <figure class="photo">
          <img :src="leftSrc" :alt="leftAlt || title" loading="lazy" />
        </figure>

        <figure class="photo">
          <img :src="rightSrc" :alt="rightAlt || title" loading="lazy" />
        </figure>
      </div>

      <h2 class="title">
        UPCOMING PROJECTS
      </h2>
    </div>
  </section>
</template>

<style scoped>
.upcoming-header {
  background: #fbf9dc;
  padding: 96px 0;
 
}
/* align with site container patterns */
.inner {
  margin: 0 auto;
}

.photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(14px, 1.8vw, 22px);
}

.photo {
  margin: 0;
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
  /* subtle lift without looking like a “card” */
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}

.photo img {
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  filter: grayscale(100%);
}

.title {
    position: relative;
    margin: clamp(-32px, -2.6vw, -40px) 0 0;
    letter-spacing: 0.01em;
    font-family: "BauhausHeavy";

    text-transform: uppercase;
    font-size: clamp(32px, 9vw, 128px);
    line-height: 0.92;
    color: #7a2f1e;
    word-break: keep-all;
    hyphens: none;
    text-align: center;
    padding-bottom: 48px;
    
}

@media (max-width: 800px) {
  .photos {
    grid-template-columns: 1fr;
  }

  .photo img {
    height: clamp(180px, 42vw, 320px);
  }

  .title {
    margin-top: clamp(18px, -3.2vw, -28px);
    font-size: 50px;
  }
}
</style>
