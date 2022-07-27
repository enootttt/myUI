<template>
  <div id="app" class="input-wrapper">
    <m-input placeholder="请输入姓名" v-model="msg" type="textarea"></m-input>
    <m-input 
      placeholder="请输入姓名" 
      clearable
      center
    >
      <template #prepend>https://</template>
    </m-input>
    <m-input 
      placeholder="请输入姓名" 
      v-model="msg"
      clearable
      center
    >
      <template #append>.com</template>
    </m-input>
    <m-input 
      placeholder="请输入姓名" 
      v-model="msg"
      clearable
      center
    >
      <template #prepend>https://</template>
      <template #append>.com</template>
    </m-input>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import mInput from '../docs/.vuepress/components/m-input.vue';
export default {
  components: { mInput },
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
  margin: 100px auto;
}
</style>
