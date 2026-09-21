<template>
  <section class="works">
    <div class="inner">
      <slot />
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.works {
  background: #fbf9dc; /* pale yellow */
}

.inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 48px);
}
</style>
