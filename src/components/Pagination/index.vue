<template>
  <div class="pagination">
    <button
      @click="myCurrentPage--"
      :disabled="myCurrentPage <= 1"
      :class="{ disabled: myCurrentPage <= 1 }"
    >
      <span class="iconfont icon-arrow-left"></span>
    </button>
    <button @click="myCurrentPage = 1" :class="{ active: myCurrentPage === 1 }">
      1
    </button>
    <button><span class="iconfont icon-ellipsis"></span></button>
    <button
      v-for="(item, index) in startEnd.end - startEnd.start + 1"
      :key="item"
      :class="{ active: myCurrentPage === index + startEnd.start }"
      @click="myCurrentPage = index + startEnd.start"
    >
      {{ index + startEnd.start }}
    </button>
    <button><span class="iconfont icon-ellipsis"></span></button>
    <button
      @click="myCurrentPage = totalPages"
      :class="{ active: myCurrentPage === totalPages }"
    >
      {{ totalPages }}
    </button>
    <button
      @click="myCurrentPage++"
      :disabled="myCurrentPage >= totalPages"
      :class="{ disabled: myCurrentPage >= totalPages }"
    >
      <span class="iconfont icon-arrow-right"></span>
    </button>
    <select>
      <option  v-for="size in pageSizes" :key="size" :value="size">
        每页 {{ size }} 条
      </option>
    </select>
    <span class="total">总数：{{ total }} 条</span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      myCurrentPage: this.currentPage,
    };
  },
  props: {
    // 当前页
    currentPage: {
      type: Number,
      default: 11,
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 5,
    },
    // 可选的每页条数
    pageSizes: {
      type: Array,
      default: () => [5, 10, 15, 20],
    },
    total: {
      type: Number,
      default: 20,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      const { totalPages, myCurrentPage } = this;
      if (totalPages <= 2) {
        return {
          start: 0,
          end: -1,
        };
      }
      if (totalPages <= 7) {
        return {
          start: 2,
          end: totalPages - 1,
        };
      }

      let start = myCurrentPage - 2;
      if (start < 2) start = 2;
      if (start > totalPages - 5) start = totalPages - 5;
      let end = start + 4;

      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  align-items: center;
  button {
    width: 28px;
    height: 28px;
    border: none;
    outline: none;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
    margin: 0 5px;
    cursor: pointer;
    &.disabled {
      cursor: not-allowed;
      color: #c0c4cc;
    }
    &.active {
      background-color: #409eff;
      color: #fff;
    }
  }
  select {
    margin: 0 10px;
    height: 28px;
    outline: none;
  }
}
.total {
  font-size: 16px;
}
</style>