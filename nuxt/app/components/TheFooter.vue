<template>
  <footer class="site-footer">
    <a
      href="mailto:nat.bibeau@gmail.com"
      class="email"
    >
      nat.bibeau@gmail.com
    </a>
  </footer>
</template>

<script setup>
// Static footer — no logic required
</script>

<style scoped>
.site-footer {
  background: #843322; /* same tone as header for visual continuity */
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.email {
  color: #fefcde; /* same off-white as header text */
  text-decoration: none;
  font-size: clamp(14px, 1.5vw, 16px);
  letter-spacing: 0.05em;
  line-height: 1;
}

.email:hover {
  text-decoration: underline;
}

/* Mobile tightening without changing proportions */
@media (max-width: 640px) {
  .site-footer {
    min-height: 96px;
  }
}
</style>
