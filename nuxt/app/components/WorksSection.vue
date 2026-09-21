<template>
  <section class="works">
    <div class="inner">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.works {
  background: transparent;
}

.inner {
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 0 var(--gutter);
}
</style>
