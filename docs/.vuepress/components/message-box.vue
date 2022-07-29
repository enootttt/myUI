<template>
  <div :class="{mask: visible}">
    <transition name="message-fade">
      <div class="r-message-box" v-if="visible">
        <div class="r-message-box__header">{{ title }}</div>
        <div class="r-message-box__content">{{ content }}</div>
        <div class="r-message-box__footer">
          <template v-if="type === 'confirm'">
            <m-button size="small" @click="clickHandle('cancel')">取消</m-button>
          </template>
          <m-button type="primary" size="small" @click="clickHandle('confirm')"
            >确定</m-button
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'm-message-box',
  props: {
    title: {
      type: String,
      default: "温馨提示",
    },
    content: {
      type: String,
      default: "",
    },
    onOk: Function,
    onCancel: Function,
    type: {
      type: String,
      default: 'confirm'
    }
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.createElement();
  },
  methods: {
    clickHandle(type) {
      if (type === "cancel") {
        this.onCancel();
      } else {
        this.onOk();
      }
      this.close();
    },
    createElement() {
      this.visible = true;
      document.body.appendChild(this.$el);
    },
    close() {
      this.visible = false;
    },
    destroyElement() {
      this.$destroy();
    },
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    },
  },
};
</script>

<style lang="scss">
@import './message-box.scss';
</style>