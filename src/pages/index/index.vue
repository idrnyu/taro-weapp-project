<!--
 * @Created: gongyu
 * @Date: 2023-10-10 11:47:15
 * @LastEditTime: 2023-10-12 17:38:32
 * @Descripttion: xxx
-->
<script setup lang="ts">
import {} from "vue";
import { My, Order } from "@nutui/icons-vue-taro";

definePageConfig({
  navigationBarTitleText: "首页",
});
</script>

<template>
  <view class="hmoe-page">
    <view class="user-auth__wrap">
      <view class="not-auth user-content" v-if="false">
        <nut-avatar class="not-auth__avatar" bg-color="#FFF" src=""
          ><My color="#000"
        /></nut-avatar>
        <text class="not-auth__placeholder">点击登录魔大师</text>
      </view>
      <view class="use-auth user-content" v-if="true">
        <nut-avatar class="use-auth__avatar" bg-color="#FFF" src=""
          ><My color="#000"
        /></nut-avatar>
        <view class="use-auth__user-info">
          <view class="user-name">魔大师用户1</view>
          <view class="user-id">
            <text>NO.MDS00011122204</text>
            <Order color="#3a3b3a" class="copy-id-btn" />
          </view>
        </view>
      </view>
    </view>
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
    </view>
  </view>
</template>

<style lang="scss">
@import './index.scss';
</style>
