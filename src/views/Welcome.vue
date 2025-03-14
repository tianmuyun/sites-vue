<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="cover">
    <h1>Welcome to My Site</h1>
    <RouterLink to="/" class="exploreBtn">start</RouterLink>
  </div>
</template>

<style scoped>
.cover {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #4a90e2, #9013fe);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  transition: opacity 0.5s ease;
}

.cover h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.exploreBtn {
  padding: 10px 20px;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  background-color: #4a90e2;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
  text-decoration: none;
}

.exploreBtn:hover {
  transform: scale(1.1);
  background-color: #357abd;
}
</style>
