<template>
  <header class="site-header">
    <div class="inner">
      <NuxtLink to="/" class="brand" aria-label="Nathalie Bibeau, filmmaker — home">
        <span class="title">Nathalie Bibeau</span>
        <span class="subtitle">Filmmaker</span>
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: linear-gradient(180deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%);
  color: var(--color-cream);
  padding: clamp(1.4rem, 3.5vw, 2.4rem) 0;
}

.inner {
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

.brand {
  display: inline-flex;
  flex-direction: column;
  gap: 0.45rem;
  text-decoration: none;
  color: inherit;
}

.title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.55rem, 3.4vw, 2.35rem);
  line-height: 0.95;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.subtitle {
  font-family: var(--font-meta);
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0.88;
}
</style>
