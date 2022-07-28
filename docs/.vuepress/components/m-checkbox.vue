<template>
  <label class="r-checkbox">
    <span class="r-checkbox--outer">
      <span class="r-checkbox--inner" :class="{'is-checked': isChecked}"></span>
        <input type="checkbox" class="r-checkbox-native" :value="label" v-model="CKValue" />
      </span>
    
    <span class="checkbox__lable input-nofont">
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  name: 'm-checkbox',
  props: {
    label: {
      type: String
    },
    value: {
      type: [Boolean, Array]
    },
  },
  computed: {
    isChecked() {
      if(this.isGroup){
        return this.CkGroup.value.includes(this.label)
      }else{
        if(typeof this.value === 'boolean'){
          return this.value
        }
        return this.value.includes(this.label)
      }
    },
    CKValue: {
      get(){
        return this.value
      },
      set(value){
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss">
@import './checkbox.scss';
</style>