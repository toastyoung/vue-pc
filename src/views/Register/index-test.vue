<template>
  <div class="register">
    <div class="register-top">
      <h3>注册新用户</h3>
      <p>
        我有账号，去
        <router-link to="/login"><a>登录</a></router-link>
      </p>
    </div>
    <div class="register-main">
      <form class="register-form">
        <div class="register-content">
          手机号：<input
            type="text"
            placeholder="请输入您的手机号"
            v-model="phone"
            @input="phoneCheck"
            @blur="phoneCheck"
          />
          <span>{{ phoneTip }}</span>
        </div>
        <div class="register-content register-code">
          验证码：<input
            type="text"
            placeholder="请输入验证码"
            v-model="code"
          />
          <span>xxx</span>
          <button>发送验证码</button>
        </div>
        <div class="register-content">
          登录密码：<input
            type="password"
            placeholder="请输入您的密码"
            v-model="password"
          />
          <span>我xx</span>
        </div>
        <div class="register-content">
          确认密码：<input
            type="password"
            placeholder="请输入确认密码"
            v-model="rePassword"
          />
          <span>xxx</span>
        </div>
        <div class="register-rules">
          <input type="radio" />
          同意协议并注册《尚品汇用户协议》
          <span>请同意用户协议 </span>
        </div>
        <button type="submit" class="btn">完成注册</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rigister",
  data() {
    return {
      phone: "",
      phoneTip: "",
      code: "",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    phoneCheck() {
      const phoneReg = /^1[3-9]\d{9}$/;
      const { phone } = this;
      clearTimeout(timer);
      let timer = setTimeout(() => {
        if (!phoneReg.test(phone)) {
          if (!phone.trim()) {
            this.phoneTip = "请输入手机号";
          } else {
            this.phoneTip = "请输入合法手机号";
          }
        } else {
          this.phoneTip = "";
        }
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 1200px;
  height: 450px;
  margin: 0 auto;
  border: 1px solid #dfdfdf;
}
.register-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  height: 30px;
  background-color: #ececec;
  h3 {
    font-size: 20px;
  }
  p {
    color: #000;
    font-size: 14px;
    font-weight: 700;
    a {
      color: red;
    }
  }
}
.register-main {
  text-align: center;
  margin-top: 40px;
}
.register-form {
  display: inline-block;
  width: 360px;
  height: 350px;
  text-align: right;
  font-size: 14px;
  margin-left: -20px;
  .register-code {
    position: relative;
    button {
      position: absolute;
      top: 10px;
      width: 64px;
      height: 20px;
      font-size: 12px;
      background-color: #eeeeee;
      border: 1px solid #d0d0d0;
      color: #333;
    }
  }
  .register-content input {
    width: 270px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #999999;
    font-size: 12px;
    padding: 8px;
  }
  span {
    display: block;
    width: 300px;
    height: 14px;
    margin-left: 100px;
    margin-bottom: 2px;
    text-align: left;
    font-size: 12px;
    color: red;
  }
  .register-rules {
    text-align: left;
    margin-left: 100px;
    font-size: 12px;
    span {
      margin: 0;
    }
  }
  .btn {
    width: 270px;
    height: 36px;
    font-size: 16px;
    color: #fff;
    background-color: red;
  }
}
</style>