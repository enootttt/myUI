<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo />
    <m-card
      imgSrc="js.png"
      summary="前端高手养成计划-从前端到后端，全栈开发大型项目"
    />
    <br />
    <m-card
      imgSrc="vuesrc.png"
      summary="基于 Vue3 ，打造前台+中台通用提效解决方案"
    >
      <template #footer>
        <div class="footer">
          <div class="level">高级 · 362人报名</div>
          <div class="price">￥499.00</div>
        </div>
      </template>
    </m-card>
    <br />
    <m-card imgSrc="tiao.png" :width="370" :imgHeight="90">
      前端框架及项目面试 聚焦Vue3/React/Webpack
      <template #footer>
        <div class="footer-spring">
          <div class="level">4步骤 · 6门课</div>
          <div class="level">10965收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
