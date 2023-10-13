<script setup lang="ts">
import {} from "vue";
import Taro, { useRouter } from "@tarojs/taro";

definePageConfig({
  navigationBarTitleText: "抽奖活动标题",
});

const router = useRouter();

console.log(router.params.activitiesId);

if (router.params.activitiesId === '0') {
  Taro.showModal({
    title: "温馨提示",
    content: "当前无抽奖活动",
    confirmText: "返回",
    showCancel: false,
    success: () => {
      Taro.navigateBack();
    }
  });
}
</script>

<template>
  <view>test</view>
</template>

<style scoped lang="less"></style>
