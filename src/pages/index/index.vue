<!--
 * @Created: gongyu
 * @Date: 2023-10-10 11:47:15
 * @LastEditTime: 2023-10-13 11:27:43
 * @Descripttion: 首页
-->
<script setup lang="ts">
import { ref } from "vue";
import Taro from "@tarojs/taro";

import UserInfo from "@/components/userInfo/index.vue";

// definePageConfig({
//   navigationBarTitleText: "首页",
// });

const isLogin = ref(true);

const toActivitiesPage = (activitiesId) => {
  Taro.navigateTo({
    url: `/packages/activities/checking?activitiesId=${activitiesId}`,
  });
};

const scanQrCode = () => {
  Taro.scanCode({
    // onlyFromCamera: true,  // 只允许相机扫码 否则可相册图片
    scanType: ["qrCode"],
    success: (res) => {
      console.log(res);
      if (res.result === "https://www.baidu.com/") {
        const activitiesId = Math.floor(Math.random() * 3);
        toActivitiesPage(activitiesId);
      } else {
        Taro.showModal({
          title: "扫码提示",
          content: "无此商品信息，请确认！（备注说明：提示内容由接口返回展示）",
          confirmText: "知道了~",
          showCancel: false,
        });
      }
    },
    fail: (res) => {
      console.log(res);
    },
  }).catch((e) => console.log(e));
};
</script>

<template>
  <view class="hmoe-page">
    <UserInfo class="user-info__wrap"/>
    <view class="qr-code-step__wrap">
      <view class="qr-code-step__text t-c">
        <text>简单三步轻松得优惠</text>
      </view>
      <view class="qr-code-step__hint">
        <view class="step-hint t-c">
          <view class="step-hint__icon">2</view>
          <text class="step-hint__text">微信扫描包装二维码</text>
        </view>
        <view class="step-hint t-c">
          <view class="step-hint__icon">2</view>
          <text class="step-hint__text">填写包装内验证码</text>
        </view>
        <view class="step-hint t-c">
          <view class="step-hint__icon">2</view>
          <text class="step-hint__text">参与活动得优惠</text>
        </view>
      </view>
      <view class="qr-code__wrap">
        <view class="not-auth__btn" v-if="!isLogin">未登录</view>
        <nut-button
          size="large"
          type="info"
          class="qr-code__btn"
          v-if="isLogin"
          @click="scanQrCode"
          >立即扫码</nut-button
        >
      </view>
    </view>
  </view>
</template>

<style lang="scss">
@import "./index.scss";
</style>
