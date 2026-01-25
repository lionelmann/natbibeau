<!-- components/TheHeader.vue -->
<template>
  <header class="site-header">
    <div class="inner">
      <NuxtLink to="/" class="brand" aria-label="Go to homepage">
        <span class="title">NATHALIE BIBEAU</span>
        <span class="subtitle">Filmmaker</span>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
// No script needed for this static header.
</script>

<style scoped>
.site-header {
  background: #843322; /* sampled from the screenshot */
  min-height: 108px;
  display: flex;
  align-items: center;
}

.inner {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px; /* left inset seen in screenshot */
}

.brand {
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  color: #fefcde; /* warm off-white from screenshot */
}

.title {
  font-family: inherit;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 22px;
  line-height: 1.1;
}

.subtitle {
  font-family: inherit;
  font-weight: 400;
  font-size: clamp(13px, 1.2vw, 15px);
  line-height: 1.1;
  opacity: 0.95;
}

</style>
