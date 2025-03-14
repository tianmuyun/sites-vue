<template>
  <header>
    <h1>欢迎来到XXX的个人主页</h1>
  </header>
  <div class="container">
    <div class="card">
      <h2>关于XXX</h2>
      <p>喵喵喵</p>
    </div>
    <div class="card">
      <h2>项目</h2>
      <p>项目 1 : XXX</p>
      <p>项目 2 : XXX</p>
    </div>
    <div class="card">
      <h2>联系我</h2>
      <p>电子邮件: xxx@xxx.com</p>
      <p>社交媒体: xxx</p>
    </div>
  </div>
  <footer>
    <p>© 2024 xxx. 版权所有.</p>
  </footer>
</template>

<style scoped>

header {
  background:#4f46e5;
  color:#fff;
  padding:20px 0;
  text-align:center
}
.container {
  background-color:#f0f0f0;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:20px;
  margin:auto
}
.card {
  background:#fff;
  border-radius:8px;
  box-shadow:0 2px 10px #0000001a;
  margin:15px 0;
  padding:20px;
  width:80%;
  transition:transform .2s
}
.card:hover {
  transform:scale(1.05)
}
h1 {
  font-size:36px
}
h2 {
  font-size:24px;
  margin:10px 0;
  color:#4f46e5
}
p {
  line-height:1.6;
  font-size:18px
}
footer {
  text-align:center;
  padding:10px 0;
  background:#4f46e5;
  color:#fff;
  position:relative;
  bottom:0;
  width:100%
}
</style>