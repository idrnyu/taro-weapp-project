/*
 * @Created: gongyu
 * @Date: 2023-10-10 11:47:15
 * @LastEditTime: 2023-10-13 11:51:06
 * @Descripttion: 小程序基础配置 app.json
 */
export default defineAppConfig({
  __usePrivacyCheck__: true,
  pages: [
    'pages/index/index',
    'pages/me/index',
    'pages/me/index-2',
  ],
  tabBar: {
    color: '#ccc',
    selectedColor: '#ff5a00',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/nav-bar/home-not-active.png',
        selectedIconPath: 'assets/nav-bar/home-actived.png',
      },
      {
        pagePath: 'pages/me/index',
        text: '我的',
        iconPath: 'assets/nav-bar/me-not-active.png',
        selectedIconPath: 'assets/nav-bar/me-actived.png'
      },
      {
        pagePath: 'pages/me/index-2',
        text: '我的2',
        iconPath: 'assets/nav-bar/me-not-active.png',
        selectedIconPath: 'assets/nav-bar/me-actived.png'
      },
    ]
  },
  subpackages: [
    {
      root: 'packages/activities',
      name: 'activities',
      pages: ['checking'],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '魔大师会员中心',
    navigationBarTextStyle: 'black',
  }
})
