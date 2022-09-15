<template>
  <span>
    <div class="r-tag" :class="StyleClass">
      {{ text }}
      <i v-if="close" class="close" @click="closeg">&nbsp;x&nbsp;</i>
    </div>
  </span>
</template>

<script>
export default {
  name: 'm-tag',
  computed: {
    StyleClass() {
      return {
        [`r-tag-${this.type}`]: this.type
      }
    }
  },
  props: {
    text: {
      type: String,
      default: '标签'
    },
    type: {
      type: String,
      default: ''
    },
    close: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    closeg(e) {
      e.target.click()
    }
  }
}
</script>

<style>
  @import url('./tag.scss');
</style>