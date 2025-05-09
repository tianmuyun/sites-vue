<template>
  <div class="header">
    <h1>PNG/JPG to WebP</h1>
  </div>
  <div class="main">
    <div class="img" v-if="webpUrl">
      <img :src="webpUrl" alt="WebP Image" class="webp-image" />
    </div>
    <div class="aside">
      <!-- 隐藏的文件输入框 -->
      <input
        type="file"
        ref="fileInput"
        @change="onFileChange"
        accept="image/png, image/jpeg"
        class="file-input"
        style="display: none"
      />
      <button @click="triggerFileInput" class="btn">选择图片</button>
      <div v-if="fileName" class="image-info">
        <p><strong>文件名称：</strong>{{ fileName }}</p>
      </div>
      <div v-if="imageInfo" class="image-info">
        <p><strong>图片尺寸：</strong></p>
        <p>宽度: {{ imageInfo.width }} px</p>
        <p>高度: {{ imageInfo.height }} px</p>
      </div>
      <button v-if="webpUrl" @click="downloadWebP" class="btn">
        下载 WebP 图片
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 使用ref来存储数据
const webpUrl = ref(null); // 存储转换后的 WebP 图片 URL
const imageInfo = ref(null); // 存储图片尺寸信息
const fileName = ref(null); // 存储图片文件名称
// 使用ref获取文件输入框的引用
const fileInput = ref(null);

// 触发文件选择框的点击事件
const triggerFileInput = () => {
  fileInput.value.click(); // 使用 ref 获取文件输入框并触发点击事件
};

// 处理图片上传
const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
    fileName.value = file.name; // 获取并显示文件名称
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.onload = () => {
        imageInfo.value = {
          width: image.width, // 获取图片宽度
          height: image.height, // 获取图片高度
        };
        convertToWebP(image);
      };
      image.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert("请选择 PNG 或 JPG 格式的图片");
  }
};

// 将图片转换为 WebP 格式
const convertToWebP = (image) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  // 设置 Canvas 尺寸为图片尺寸
  canvas.width = image.width;
  canvas.height = image.height;
  // 将图片绘制到 Canvas 上
  ctx.drawImage(image, 0, 0);
  // 转换为 WebP 格式
  const webp = canvas.toDataURL("image/webp");
  webpUrl.value = webp; // 设置转换后的 WebP 图片 URL
};

// 下载 WebP 图片
const downloadWebP = () => {
  const link = document.createElement("a");
  link.href = webpUrl.value;
  link.download = fileName.value.match(/(.*)\.(jpg|png|gif)/)[1]; + ".webp";
  link.click();
};
</script>

<style scoped>
/* Header部分样式 */
.header {
  background: #4f46e5; /* 渐变背景色从蓝紫到蓝色 */
  color: white; /* 文字颜色为白色 */
  padding: 10px 0; /* 上下内边距为30px，增加头部的高度 */
  text-align: center; /* 标题居中显示 */
  font-size: 1.2rem; /* 字体大小为1.2rem，增大标题文字 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 给header增加阴影效果，提升立体感 */
}

/* 主体内容区 */
.main {
  display: flex; /* 使用Flex布局来水平排列左右内容 */
  justify-content: space-between; /* 保证主内容和侧边栏之间有空隙 */
  padding: 20px; /* 主体区域内边距 */
}

/* 图片展示区域 */
.img {
  width: 65%; /* 图片区域占据主体宽度的65% */
  text-align: center; /* 图片居中 */
}

.webp-image {
  max-width: 100%; /* 确保图片不会超出容器 */
  border-radius: 8px; /* 图片四个角圆滑 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 图片外加阴影，提升视觉效果 */
  transition: transform 0.3s ease; /* 添加平滑过渡效果 */
}

.webp-image:hover {
  transform: scale(1.05); /* 鼠标悬停时图片略微放大 */
}

/* 侧边栏部分样式 */
.aside {
  width: 30%; /* 侧边栏占据主体宽度的30% */
  padding: 20px; /* 侧边栏内边距 */
  background-color: #f4f4f9; /* 背景颜色为浅灰色 */
  border-radius: 8px; /* 边框圆角 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 侧边栏阴影 */
}

.file-input {
  width: 100%; /* 文件输入框占满整个容器宽度 */
  padding: 10px; /* 内边距让输入框更大 */
  border: 1px solid #d1d5db; /* 细边框 */
  border-radius: 4px; /* 边框圆角 */
  font-size: 1rem; /* 输入框字体大小 */
  background-color: #ffffff; /* 背景白色 */
  margin-bottom: 15px; /* 下方留白 */
  cursor: pointer; /* 鼠标悬停时显示点击手型 */
}

.file-input:hover {
  border-color: #3b82f6; /* 鼠标悬停时边框颜色变化 */
}

/* 图片信息区域样式 */
.image-info {
  background-color: #ffffff; /* 背景白色 */
  padding: 10px 15px; /* 内边距 */
  border-radius: 8px; /* 边框圆角 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* 轻微阴影效果 */
  margin-bottom: 10px; /* 下方留白 */
  margin-top: 10px; /* 上方留白 */
}

.image-info p {
  margin: 5px 0; /* 图片信息段落上下间距 */
  font-size: 1rem; /* 字体大小 */
}

/* 下载按钮样式 */
.btn {
  width: 100%; /* 按钮宽度占满父容器 */
  padding: 12px; /* 内边距 */
  background-color: #4f46e5; /* 按钮背景色 */
  color: white; /* 按钮文字颜色 */
  font-size: 1rem; /* 字体大小 */
  border: none; /* 去掉边框 */
  border-radius: 4px; /* 圆角边框 */
  cursor: pointer; /* 鼠标悬停时为点击手型 */
  transition: background-color 0.3s ease; /* 背景颜色变化的平滑过渡 */
}

.btn:hover {
  background-color: #3b82f6; /* 鼠标悬停时按钮背景颜色变化 */
}

.btn:disabled {
  background-color: #d1d5db; /* 禁用状态下的按钮颜色 */
  cursor: not-allowed; /* 禁用状态下的鼠标 */
}
</style>
