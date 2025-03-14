<template>
  <div class="floatingWindow">
    <p>
      X: <span class="num">{{ mouseX }}</span> px
    </p>
    <p>
      Y: <span class="num">{{ mouseY }}</span> px
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);

const updateMousePosition = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

// 监听鼠标移动事件
onMounted(() => {
  window.addEventListener("mousemove", updateMousePosition);
});
</script>

<style scoped>
.floatingWindow {
  text-align: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e0e0e0;
  padding: 20px;
  z-index: 9999;
  width: 120px;
  font-size: 18px;
}
.floatingWindow p {
  margin: 0%;
  padding: 0%;
}
.num {
  display: inline-block;
  min-width: 60px;
  text-align: right;
}
</style>
