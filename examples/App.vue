<template>
  <div id="app" class="input-wrapper">
    <!-- <div>
      <m-input placeholder="请输入姓名" clearable></m-input>
      <m-input placeholder="请输入姓名" v-model="msg" type="textarea"></m-input>
      <m-input placeholder="请输入姓名" v-model="msg" clearable center>
        <template #prepend>https://</template>
      </m-input>
      <m-input placeholder="请输入姓名" v-model="msg" clearable center>
        <template #append>.com</template>
      </m-input>
      <m-input placeholder="请输入姓名" v-model="msg" clearable center>
        <template #prepend>https://</template>
        <template #append>.com</template>
      </m-input>
      <h1>{{ msg }}</h1>
      <div class="input-number-container">
        <m-inputnumber
          v-model="count"
          :step="0.2"
          :max="10"
          :min="1"
          :precision="2"
          >1</m-inputnumber
        >
        <m-inputnumber :value="1"></m-inputnumber>
      </div>
    </div> -->
    <!-- <input type="radio" value="one" :checked="picked === 'one'" @change="picked=$event.target.value">One
    <input type="radio" value="two" v-model="picked">Two
    <div>
      {{ picked }}
    </div> -->
    <!-- <m-radio label="男" v-model="sex">男</m-radio>
    <m-radio label="女" v-model="sex">女</m-radio>
    <m-radio-group v-model="group_sex">
      <m-radio label="男">男</m-radio>
      <m-radio label="女">女</m-radio>
    </m-radio-group>

    <m-checkbox v-model="checked" label="篮球">篮球</m-checkbox>
    <p>是否选中: {{ checked ? "选中" : "未选中" }}</p>

    <m-checkbox v-model="hobby" label="篮球">篮球</m-checkbox>
    <m-checkbox v-model="hobby" label="足球">足球</m-checkbox>
    <m-checkbox v-model="hobby" label="排球">排球</m-checkbox>
    <p>您选中的爱好是: {{ hobby }}</p> -->

    <m-tag text="你好" type="danger" close></m-tag>
  </div>
</template>

<script>
// import mInput from "../docs/.vuepress/components/m-input.vue";
export default {
  // components: { mInput },
  name: "App",
  data() {
    return {
      msg: "hello word",
      count: 5,
      picked: "",
      sex: "男",
      group_sex: "女",
      checked: true,
      hobby: ["排球"],
    };
  }
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

.input-number-container {
  width: 300px;
  margin: 100px auto;
}
</style>
