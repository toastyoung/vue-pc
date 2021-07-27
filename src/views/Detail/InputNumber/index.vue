<template>
  <div class="controls">
    <input
      autocomplete="off"
      class="itxt"
      :value="currentValue"
      @keyup.enter="setCurrentValue"
      @blur="setCurrentValue"
    />
    <a href="javascript:" class="plus" @click="add">+</a>
    <a href="javascript:" class="mins" @click="subtract">-</a>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    },
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  methods: {
    add() {
      if (this.currentValue >= this.max) return;
      this.currentValue++;
    },
    subtract() {
      if (this.currentValue <= this.min) return;
      this.currentValue--;
    },
    setCurrentValue(e) {
      this.currentValue = e.target.value;
    },
  },
  watch: {
    currentValue(newVal, oldVal) {
      const { min, max } = this;
      let currentValue = +newVal;

      if (Number.isNaN(currentValue)) {
        currentValue = oldVal;
      }

      if (currentValue > max) {
        currentValue = max;
      }
      if (currentValue < min) {
        currentValue = min;
      }
      this.currentValue = currentValue;
      this.$emit("input", currentValue);
    },
  },
};
</script>

<style lang="less" scoped>
.controls {
  width: 72px;
  position: relative;
  float: left;
  margin-right: 15px;

  .itxt {
    width: 64px;
    height: 37px;
    border: 1px solid #ddd;
    color: #555;
    float: left;
    border-right: 0;
    text-align: center;
    outline: none;
  }

  .plus,
  .mins {
    width: 15px;
    text-align: center;
    height: 17px;
    line-height: 17px;
    background: #f1f1f1;
    color: #666;
    position: absolute;
    right: -8px;
    border: 1px solid #ccc;
  }

  .mins {
    right: -8px;
    top: 19px;
    border-top: 0;
  }

  .plus {
    right: -8px;
  }
}
</style>