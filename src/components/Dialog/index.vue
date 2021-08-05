<template>
  <!-- .self只有当前绑定事件的元素，才能触发/// 给子元素添加阻止事件冒泡i@click.stop -->
  <div class="dialog-wrapper" v-show="visible" @click.self="close">
    <div class="dialog" :style="{ width }">
      <div class="dialog-header">
        <span class="dialog-header-title">{{ title }}</span>
        <button class="dialog-header-close" @click="close">X</button>
      </div>
      <div class="dialog-body">
        <slot />
      </div>
      <div class="dialog-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dialog",
  props: {
    title: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "50%",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
  watch: {
    visible: {
      handler(visible) {
        if (visible) {
          document.documentElement.style.overflow = "hidden";
          return;
        }
        document.documentElement.style.overflow = "auto";
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.dialog-wrapper {
  z-index: 2013;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  margin-top: 15vh;
}
.dialog-header {
  padding: 20px 20px 10px;
}
.dialog-header-title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
.dialog-header-close {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: #909399;
}
.dialog-body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.dialog-body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.dialog-footer {
  padding: 10px 20px 20px;
  text-align: center;
  box-sizing: border-box;
  button {
    margin-right:10px;
  }
}
</style>