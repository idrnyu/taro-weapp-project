<!--
 * @Created: gongyu
 * @Date: 2023-10-10 11:47:15
 * @LastEditTime: 2023-10-13 11:29:15
 * @Descripttion: 用户信息展示组件
-->

<script setup lang="ts">
import { ref } from "vue";
import Taro from "@tarojs/taro";
import { My, Order } from "@nutui/icons-vue-taro";

const isLogin = ref(true);
const ragreementVisable = ref(false);

const copyUserId = () => {
  console.log("copy user id");
  Taro.showToast({
    title: "复制成功@TODO",
    icon: "success",
    duration: 2000,
  });
};
</script>

<template>
  <view class="user-auth__wrap w-670" @click="ragreementVisable = true">
    <view class="not-auth user-content" v-if="!isLogin">
      <nut-avatar class="not-auth__avatar" bg-color="#FFF" src=""
        ><My color="#000"
      /></nut-avatar>
      <text class="not-auth__placeholder">点击登录魔大师</text>
    </view>
    <view class="use-auth user-content" v-if="isLogin">
      <nut-avatar class="use-auth__avatar" bg-color="#FFF" src=""
        ><My color="#000"
      /></nut-avatar>
      <view class="use-auth__user-info">
        <view class="user-name">魔大师用户1</view>
        <view class="user-id">
          <text>NO.MDS00011122204</text>
          <Order color="#3a3b3a" class="copy-id-btn" @click="copyUserId" />
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="less">
@import './index.scss';
</style>
