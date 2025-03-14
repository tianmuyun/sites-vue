<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const loading = ref(true);

const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
    } finally {
        loading.value = false;
    }
};

onMounted(fetchPosts);
</script>

<template>
    <header>
        <h1>Post List</h1>
    </header>

    <div class="container" v-if="posts.length">
        <div v-if="loading">Loading...</div>
        <div class="card" v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>
