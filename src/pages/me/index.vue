<!--
 * @Created: gongyu
 * @Date: 2023-10-13 08:14:31
 * @LastEditTime: 2023-10-13 12:06:35
 * @Descripttion: 我的页面
-->
<script setup lang="ts">
import {} from "vue";
import UserInfo from "@/components/userInfo/index.vue";

</script>

<template>
  <view class="me-page">
    <UserInfo class="user-info__wrap" />

    <view class="my-service__wrap w-670">
      <view class="title-text">我的服务</view>
      <nut-cell title="Text 文字提示" is-link></nut-cell>
    </view>
  </view>
</template>

<style lang="less">
.me-page {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .user-info__wrap {
    margin-top: 40px;
  }
  .my-service__wrap {
    width: 670px;
    margin-top: 40px;
    .title-text {
      font-weight: bold;
      font-size: 36px;
      color: #333333
    }
  }
}
</style>
