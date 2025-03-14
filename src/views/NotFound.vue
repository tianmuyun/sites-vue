<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="not-found">
        <h1>404 - 页面未找到</h1>
        <p>抱歉，您要找的页面不存在。</p>
        <RouterLink to="/">返回首页</RouterLink>
    </div>
</template>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px
}
</style>