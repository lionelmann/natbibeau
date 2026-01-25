<!-- components/TheBio.vue -->
<template>
  <section class="bio" aria-label="Biography">
    <div
      ref="innerEl"
      class="inner"
      :class="{ in: isIn }"
    >
      <p>
        Nathalie Bibeau is an award-winning filmmaker known for her empathetic
        approach to storytelling. Her feature documentary,
        <em>The Walrus and the Whistleblower</em>, won the
        <a
          class="bio-link"
          href="https://www.hollywoodreporter.com/movies/movie-news/hot-docs-walrus-whistleblower-wins-top-audience-award-1297431/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Top Audience Award (text highlight only)"
        >
          <b>Top Audience Award</b>
        </a>
        at the 2020 Hot Docs International Film Festival and played in the
        Winners' Circle at DOC NYC. It was nominated for three Canadian Screen
        Awards and traveled to over twenty other festivals worldwide, winning
        the Best Documentary Feature Award at three of them.
      </p>

      <p>
        In 2022, she released the four-part series,
        <em>The Unsolved Murder of Beverly Lynn Smith</em>, series directing and
        showrunning the first Amazon Original documentary series in Canada.
      </p>

      <p>
        In previous lives, Nathalie has volunteered for War Child in Ethiopia
        and worked for the Department of Foreign Affairs in Lithuania. She holds
        a B.A. in History from McGill University and an M.A. in Russian
        Intellectual History from the University of Toronto. She is a mother of
        two and is fluent in French, English and Swedish.
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
  // Respect reduced motion
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
    isIn.value = true;
    return;
  }

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          isIn.value = true;
          io?.disconnect(); // reveal once
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  if (innerEl.value) io.observe(innerEl.value);
});

onBeforeUnmount(() => {
  io?.disconnect();
});
</script>

<style scoped>
.bio {
  background: #843322; /* matches header/footer band */
  padding: clamp(56px, 6vw, 92px) 0;
}

/* Base (before reveal) */
.inner {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 48px;
  color: #fefcde;
  font-size: 18px;
  line-height: 1.55;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 700ms ease, transform 700ms ease;
  will-change: opacity, transform;
}

/* Revealed */
.inner.in {
  opacity: 1;
  transform: translateY(0);
}

.inner p + p {
  margin-top: 28px;
}

em {
  font-style: italic;
}

.bio-link {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}

.bio-link:hover,
.bio-link:focus-visible {
  text-decoration-thickness: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .inner {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
