<template>
  <footer class="site-footer">
    <div class="inner">
      <p class="label">Contact</p>
      <a href="mailto:nat.bibeau@gmail.com" class="email">
        nat.bibeau@gmail.com
      </a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: linear-gradient(180deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%);
  color: var(--color-cream);
  padding: clamp(2.5rem, 6vw, 3.75rem) var(--gutter);
}

.inner {
  max-width: var(--page-max);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  text-align: center;
}

.label {
  font-family: var(--font-meta);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  opacity: 0.72;
}

.email {
  color: inherit;
  text-decoration: none;
  font-family: var(--font-meta);
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  letter-spacing: 0.08em;
}

.email:hover,
.email:focus-visible {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
</style>
