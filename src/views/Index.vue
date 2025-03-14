<script setup>
import { RouterLink } from 'vue-router';
const routerList = {
  clock: "/clock",
  towebp: "/towebp",
  genshin: "/genshin",
  githubfile: "/githubfile",
  welcome: "/welcome",
  personal: "/personal",
  post: "/post",
};
</script>
<template>
  <div v-for="(path, name) in routerList" :key="name" class="link">
    <RouterLink :to="path">{{ name }}</RouterLink>
  </div>
</template>

<style scoped>
.link {
  margin: 20px;
  font-size: 24px;
  color: blue;
}
</style>
