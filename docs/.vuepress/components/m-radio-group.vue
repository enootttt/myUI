<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-radio-group',
  props: {
    value: {
      type: [String, Number]
    }
  },
  provide() {
    return {
      RadioGroup: this
    }
  }
}
</script>