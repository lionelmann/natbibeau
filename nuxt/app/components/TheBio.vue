<template>
  <section class="bio" aria-label="Biography">
    <div ref="innerEl" class="inner" :class="{ in: isIn }">
      <p class="eyebrow">About</p>
      <p>
        Nathalie Bibeau is an award-winning filmmaker known for an empathetic
        approach to storytelling. Her feature documentary
        <em>The Walrus and the Whistleblower</em> won the
        <a
          class="bio-link"
          href="https://www.hollywoodreporter.com/movies/movie-news/hot-docs-walrus-whistleblower-wins-top-audience-award-1297431/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Top Audience Award
        </a>
        at the 2020 Hot Docs International Film Festival, played in the Winners’
        Circle at DOC NYC, earned three Canadian Screen Award nominations, and
        screened at more than twenty festivals worldwide.
      </p>

      <p>
        In 2022 she series-directed and showran
        <em>The Unsolved Murder of Beverly Lynn Smith</em>, the first Amazon
        Original documentary series produced in Canada.
      </p>

      <p>
        Earlier, Nathalie volunteered with War Child in Ethiopia and worked for
        the Department of Foreign Affairs in Lithuania. She holds a B.A. in
        History from McGill University and an M.A. in Russian Intellectual
        History from the University of Toronto. She is a mother of two and is
        fluent in French, English, and Swedish.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const innerEl = ref(null);
const isIn = ref(false);
let io;

onMounted(() => {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
    isIn.value = true;
    return;
  }

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          isIn.value = true;
          io?.disconnect();
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  if (innerEl.value) io.observe(innerEl.value);
});

onBeforeUnmount(() => {
  io?.disconnect();
});
</script>

<style scoped>
.bio {
  background: linear-gradient(180deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%);
  color: var(--color-cream);
  padding: var(--section-y) 0;
}

.inner {
  max-width: 40rem;
  margin: 0 auto;
  padding: 0 var(--gutter);
  font-size: clamp(1.02rem, 1.5vw, 1.125rem);
  line-height: 1.75;
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
}

.inner.in {
  opacity: 1;
  transform: translateY(0);
}

.eyebrow {
  font-family: var(--font-meta);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin-bottom: 1.4rem;
  opacity: 0.75;
}

.inner p + p {
  margin-top: 1.35rem;
}

.bio-link {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.18em;
  text-decoration-thickness: 1px;
}

.bio-link:hover,
.bio-link:focus-visible {
  text-decoration-thickness: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .inner {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
