<template>
  <div id="app" class="input-wrapper">
    <m-input 
      placeholder="请输入姓名" 
      v-model="msg"
    ></m-input>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "hello word",
    };
  },
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

.input-wrapper {
  width: 480px;
}
</style>
