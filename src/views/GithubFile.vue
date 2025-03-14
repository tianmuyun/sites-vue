<script setup>
import { ref } from "vue";
const inputUrl = ref("");
const githubLink = ref("");
const rawLink = ref("");
const jsdelivrLink = ref("");
const showResult = ref(false);

const convertLinks = () => {
  showResult.value = false;
  githubLink.value = "";
  rawLink.value = "";
  jsdelivrLink.value = "";
  if (!inputUrl.value) {
    alert("请输入链接");
    return;
  }
  const githubRegex =
    /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/;
  const githubMatch = inputUrl.value.match(githubRegex);
  const rawRegex =
    /https:\/\/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/(.+)/;
  const rawMatch = inputUrl.value.match(rawRegex);
  if (githubMatch) {
    const username = githubMatch[1];
    const repo = githubMatch[2];
    const branch = githubMatch[3];
    const filePath = githubMatch[4];
    githubLink.value = `https://github.com/${username}/${repo}/blob/${branch}/${filePath}`;
    rawLink.value = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${filePath}`;
    jsdelivrLink.value = `https://gcore.jsdelivr.net/gh/${username}/${repo}@${branch}/${filePath}`;
  } else if (rawMatch) {
    const username = rawMatch[1];
    const repo = rawMatch[2];
    const branch = rawMatch[3];
    const filePath = rawMatch[4];
    githubLink.value = `https://github.com/${username}/${repo}/blob/${branch}/${filePath}`;
    rawLink.value = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${filePath}`;
    jsdelivrLink.value = `https://gcore.jsdelivr.net/gh/${username}/${repo}@${branch}/${filePath}`;
  } else {
    alert("链接无效");
    resultDiv.style.display = "none";
    return;
  }
  showResult.value = true;
};
</script>

<template>
  <div class="container">
    <h1>GitHub仓库文件链接转换</h1>
    <div class="input-group">
      <label for="inputUrl">请输入链接：</label>
      <input
        type="text"
        id="inputUrl"
        v-model="inputUrl"
        placeholder="例如: GitHub仓库文件链接或直链"
      />
      <button @click="convertLinks">转换链接</button>
    </div>
    <div v-if="showResult" class="result">
      <h3>转换结果：</h3>
      <p v-if="githubLink">
        GitHub仓库链接
        <a :href="githubLink" target="_blank">{{ githubLink }}</a>
      </p>
      <p v-if="rawLink">
        GitHub直链
        <a :href="rawLink" target="_blank">{{ rawLink }}</a>
      </p>
      <p v-if="jsdelivrLink">
        jsDelivr代理链接
        <a :href="jsdelivrLink" target="_blank">{{ jsdelivrLink }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
.input-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
.result {
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.result h3 {
  margin-top: 0;
  color: #555;
}
.result p {
  margin: 5px 0;
}
</style>
