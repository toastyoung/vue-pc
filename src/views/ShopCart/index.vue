<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body" v-for="goods in cartList" :key="goods.id">
        <ul class="cart-list">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="!!goods.isChecked"
              @change="updateGoodsIsChecked(goods)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="goods.imgUrl" />
            <div class="item-msg">
              {{ goods.skuName }}
            </div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ goods.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins" @click="updateGoodsNum(goods, -1)">-</a>
            <input
              autocomplete="off"
              type="text"
              :value="goods.skuNum"
              class="itxt"
            />
            <a class="plus" @click="updateGoodsNum(goods, 1)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ goods.skuPrice * goods.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="delGoods(goods.skuId)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="isCheckedAll" />
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="delAllCheckedGoods">删除选中的商品</a>
        <a>移到我的关注</a>
        <a>清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ totalNum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  reqGetCartList,
  reqChangeIsChecked,
  reqAddCart,
  reqDelGoods,
} from "@/api/shopCart";

export default {
  name: "ShopCart",
  data() {
    return {
      cartList: [],
    };
  },
  async mounted() {
    const data = await reqGetCartList();
    this.cartList = data[0].cartInfoList;
  },
  methods: {
    // 更新商品选中状态
    async updateGoodsIsChecked(goods) {
      const isChecked = goods.isChecked === 1 ? 0 : 1;
      await reqChangeIsChecked(goods.skuId, isChecked);

      goods.isChecked = isChecked;
    },
    // 更新商品数量
    async updateGoodsNum(goods, num) {
      if (goods.skuNum <= 1 && num === -1) return;
      goods.skuNum += num;
      await reqAddCart(goods.skuId, num);
    },
    // 删除单个商品
    async delGoods(skuId) {
      await reqDelGoods(skuId);
      this.cartList = this.cartList.filter((goods) => goods.skuId !== skuId);
    },
    // 删除选中商品
    async delAllCheckedGoods() {
      for (let index = 0; index < this.cartList.length; index++) {
        const goods = this.cartList[index];
        if (goods.isChecked === 1) {
          await reqDelGoods(goods.skuId);
        }
        this.cartList = this.cartList.filter((goods) => !goods.isChecked);
      }
    },
  },
  computed: {
    //  全选
    isCheckedAll: {
      get() {
        return this.cartList.every((goods) => !!goods.isChecked);
      },
      async set(val) {
        const isChecked = val ? 1 : 0;
        for (let index = 0; index < this.cartList.length; index++) {
          const goods = this.cartList[index];
          if (goods.isChecked !== isChecked) {
            await reqChangeIsChecked(goods.skuId, isChecked);
          }
        }
        this.cartList.forEach((goods) => {
          goods.isChecked = isChecked;
        });
      },
    },
    totalNum() {
      return this.cartList
        .filter((goods) => !!goods.isChecked)
        .reduce((p, c) => {
          return p + c.skuNum;
        }, 0);
    },
    totalPrice() {
      return this.cartList
        .filter((goods) => !!goods.isChecked)
        .reduce((p, c) => {
          return p + c.skuPrice * c.skuNum;
        }, 0);
    },
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
        }

        .cart-list-con2 {
          width: 45%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>