<template>
  <section class="hero" aria-label="Featured still">
    <div class="frame">
      <img
        src="/images/hero.jpg"
        alt="Still from Nathalie Bibeau’s work"
        width="1920"
        height="1080"
      />
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--color-burgundy-deep);
  overflow: hidden;
}

.frame {
  position: relative;
  width: 100%;
  max-height: min(78vh, 860px);
  overflow: hidden;
}

.frame::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(94, 33, 22, 0.12) 0%,
    transparent 35%,
    rgba(26, 21, 18, 0.22) 100%
  );
  pointer-events: none;
}

.frame img {
  width: 100%;
  height: 100%;
  max-height: min(78vh, 860px);
  object-fit: cover;
  object-position: center 30%;
  display: block;
  animation: hero-in 1.2s var(--ease-out) both;
}

@keyframes hero-in {
  from {
    opacity: 0.35;
    transform: scale(1.04);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .frame img {
    animation: none;
  }
}
</style>
