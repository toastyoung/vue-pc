import { extend } from "vee-validate";
import { phoneReg, passwordReg } from "@/utils/regs";
import { required } from "vee-validate/dist/rules";

extend("phone", {
  validate(val) {
    return phoneReg.test(val);
  },
  message: "手机号不符合规范",
});

extend("password", {
  validate(val) {
    return passwordReg.test(val);
  },
  message: "密码不符合规范",
});

extend("required", {
  ...required,
  message: "请输入内容",
});
