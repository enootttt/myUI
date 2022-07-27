<template>
  <button
    class="r-button"
    :class="styleClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "m-button",
  props: {
    type: {
      type: String,
      default: "",
      Validator: (value) => {
        return ["primary", "success", "warning", "danger"].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
  },
  computed: {
    styleClass() {
      return {
        [`r-button--${this.type}`]: this.type,
        ["is-round"]: this.round,
        "is-disabled": this.disabled
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit("click")
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './button.scss';
</style>