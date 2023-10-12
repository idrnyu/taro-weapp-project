<!--
 * @Created: gongyu
 * @Date: 2023-10-10 12:50:26
 * @LastEditTime: 2023-10-12 15:20:53
 * @Descripttion: xxx
-->
<template>
  <view class="index">
    <view class="btn">
      <nut-button type="primary" @click="handleClick()">点我</nut-button>
    </view>
    <button :open-type="PhoneNumberOpenType" @getphonenumber="test">
      一键登录
    </button>
    <button open-type="chooseAvatar" @chooseavatar="test1" class="get-avatar">
      <image :src="src" alt="" />
      <text class="desc">点击获取微信头像</text>
    </button>
    <nut-input type="nickname" placeholder="请输入昵称" />
  </view>
</template>

<script>
import { reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";
export default {
  name: "Index",
  setup() {
    const state = reactive({
      PhoneNumberOpenType: Taro.getPrivacySetting
        ? "getPhoneNumber|agreePrivacyAuthorization"
        : "getPhoneNumber",
      src: "",
    });

    const handleClick = async () => {
      const res = await Taro.login();
      console.log(res);
    };

    const test = (e) => {      
      console.log(e);
      if (e.detail.errMsg) {
        Taro.showToast({
          title: "获取失败",
          icon: "error",
          duration: 2000,
        });
      }
    };
    const test1 = (e) => {
      console.log(e);
      state.src = e.detail.avatarUrl;
    };

    const handleGetPhone = (e) => {
      console.log(e);
      // onClose();
      if (e.detail.errMsg !== "getPhoneNumber:ok") {
        return;
      }
      // 下面写登录等逻辑
      console.log(e);
    };

    return {
      ...toRefs(state),
      handleClick,
      test,
      test1,
      handleGetPhone,
    };
  },
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .get-avatar {
    position: relative;
    .desc {
      font-size: 0.75rem;
      position: absolute;
      color: #ccc;
      top: 0;
      left: 0;
    }
  }
}
</style>
