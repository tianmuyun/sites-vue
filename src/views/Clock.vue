<template>
  <div class="main">
    <div class="clock">
      <div class="content">
        <div class="hand hour-hand" ref="hourHand"></div>
        <div class="hand minute-hand" ref="minuteHand"></div>
        <div class="hand second-hand" ref="secondHand"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const hourHand = ref(null);
const minuteHand = ref(null);
const secondHand = ref(null);

let intervalId;

const updateClock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegree = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteDegree = minutes * 6 + (seconds / 60) * 6;
  const secondDegree = seconds * 6;

  if (hourHand.value)
    hourHand.value.style.transform = `translate(-50%, -100%) rotate(${hourDegree}deg)`;
  if (minuteHand.value)
    minuteHand.value.style.transform = `translate(-50%, -100%) rotate(${minuteDegree}deg)`;
  if (secondHand.value)
    secondHand.value.style.transform = `translate(-50%, -100%) rotate(${secondDegree}deg)`;
};

onMounted(() => {
  intervalId = setInterval(updateClock, 1000);
  updateClock();
});

onUnmounted(() => {
  clearInterval(intervalId); // 清除定时器
});
</script>

<style scoped>
/* 设置页面背景和整体布局 */
.main {
  margin: 0; /* 清除默认的页面外边距 */
  padding: 0; /* 清除默认的页面内边距 */
  display: flex; /* 使用 Flexbox 布局，将内容居中 */
  justify-content: center; /* 在水平轴上居中对齐时钟容器 */
  align-items: center; /* 在垂直轴上居中对齐时钟容器 */
  height: 100vh; /* 页面高度设置为视口高度，使时钟在整个屏幕上居中 */
  background-color: #282c34; /* 设置页面背景色为深色调 */
}

/* 时钟的容器 */
.clock {
  position: relative; /* 使时钟容器能够定位其内部元素 */
  width: 400px; /* 时钟容器的宽度为 400px */
  height: 400px; /* 时钟容器的高度为 400px */
  border: 10px solid #fff; /* 时钟容器外框为 10px 白色实线 */
  border-radius: 50%; /* 使容器变为圆形 */
  display: flex; /* 使用 Flexbox 布局，将指针居中 */
  justify-content: center; /* 水平居中对齐时钟指针 */
  align-items: center; /* 垂直居中对齐时钟指针 */
  background-color: #222; /* 时钟容器背景色为深灰色 */
}

/* 表盘刻度 */
.content {
  position: relative; /* 使刻度和指针元素能够相对于表盘定位 */
  width: 100%; /* 设置表盘刻度容器的宽度为 100%（占满父元素） */
  height: 100%; /* 设置表盘刻度容器的高度为 100%（占满父元素） */
}

/* 时钟指针基础样式 */
.hand {
  position: absolute; /* 所有指针都使用绝对定位，基于时钟容器定位 */
  background-color: #fff; /* 默认指针的颜色为白色 */
  border-radius: 50%; /* 使指针呈现圆形的边缘 */
  transform-origin: 50% 100%; /* 设置旋转中心点为指针底部中心 */
  top: 50%; /* 垂直方向上把指针放置在容器的中间 */
  left: 50%; /* 水平方向上把指针放置在容器的中间 */
  transform: translate(-50%, -100%); /* 使用 transform 使指针从时钟中心旋转 */
}

/* 时针的样式 */
.hour-hand {
  width: 8px; /* 时针宽度为 8px */
  height: 20%; /* 时针高度为 60px */
  background-color: #fff; /* 时针的颜色为白色 */
  z-index: 3; /* 设置时针的层级为 3，确保它显示在其他指针之上 */
}

/* 分针的样式 */
.minute-hand {
  width: 6px; /* 分针宽度为 6px */
  height: 30%; /* 分针高度为 80px */
  background-color: #a6a6a6; /* 分针的颜色为浅灰色 */
  z-index: 2; /* 设置分针的层级为 2，确保它在时针下面，秒针上面 */
}

/* 秒针的样式 */
.second-hand {
  width: 4px; /* 秒针宽度为 2px */
  height: 40%; /* 秒针高度为 90px */
  background-color: #f00; /* 秒针的颜色为红色 */
  z-index: 1; /* 设置秒针的层级为 1，确保它在其他指针下方 */
}
</style>
