/*
 * @Created: gongyu
 * @Date: 2023-10-10 11:47:15
 * @LastEditTime: 2023-10-12 15:43:40
 * @Descripttion: xxx
 */
import Taro from "@tarojs/taro";
import { createApp } from 'vue'
import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})


Taro.getSystemInfo().then((res) => {
  console.log(res)

  // 计算1rem等于多少px
  const remToPx = res.screenWidth / 10;
  console.log(`1rem = ${remToPx}px;`);
  console.log(`屏幕宽度：${res.screenWidth}px;`, `设计稿元素大小 * (750 / 设计稿宽度) = rpx; 750是微信小程序固定值`)

  // 105/16px
  console.log(`font-size: ${res.fontSizeSetting}px;`, `设计稿元素大小/${res.fontSizeSetting}px=写到style的实际rem大小`);
});

export default App
