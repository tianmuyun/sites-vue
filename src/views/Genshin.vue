<template>
  <div class="image-container">
    <img
      src="../assets/genshin.svg"
      alt="Genshin Impact"
      class="image"
      :class="{ rotate: shouldRotate }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const shouldRotate = ref(false);

onMounted(() => {
  const checkOrientation = () => {
    shouldRotate.value = window.innerWidth < window.innerHeight;
  };
  checkOrientation();
});
</script>
<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.image {
  max-width: 50%;
  max-height: 50%;
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
}
.image.rotate {
  transform: rotate(90deg); /* 旋转90度 */
}
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
