<template>
  <div class="input-number-inner">
    <m-input
      v-model="inputValue"
      center
      :disabled="disabled"
      @input="handleChange"
    >
      <div class="cursor-pointer" slot="prepend" :class="{'is-disabled': decreaseDisabled}" @click="handleClick('decrease')">
        <i class="input-nofont">-</i>
      </div>
      <div class="cursor-pointer" slot="append" :class="{'is-disabled': increaseDisabled}" @click="handleClick('increase')">
        <i class="input-nofont">+</i>
      </div>
    </m-input>
  </div>
</template>

<script>
export default {
  name: 'm-inputnumber',
  props: {
    value: {
      type: [Number, String],
      default: 1
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: +Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    disabled: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number
    }
  },
  computed: {
    inputValue: {
      get(){
        return this.value
      },
      set(newvalue){
        let { max, min } = this
        let limit = [
          {
            validate: (value) => !this.isNumber(value),
            res: this.inputValue
          },
          {
            validate: (value) => value >= max,
            res: max
          },
          {
            validate: (value) => value <= min,
            res: min
          },
          {
            validate: () => true,
            res: newvalue * 1
          }
        ]

        let _value = limit.find(v => v.validate(newvalue)).res
        this.$emit('input', _value.toFixed(this.precision))
      } 
    },
    decreaseDisabled(){
      return this.disabled || this.inputValue <= this.min
    },
    increaseDisabled(){
      return this.disabled || this.inputValue >= this.max
    }
  },
  methods: {
    handleClick(type){
      if(type === 'increase'){
        if(this.increaseDisabled) return
        this.inputValue = Number(this.inputValue) + this.step
      }else{
        if(this.decreaseDisabled) return
        this.inputValue = Number(this.inputValue) - this.step
      }
    },
    isNumber(num){
      return !isNaN(num * 1) && Object.prototype.toString.call(num * 1) === '[object Number]'
    },
    handleChange(e) {
      console.log(e);
      // 强制更新
      this.$forceUpdate()
    }
  }
}
</script>