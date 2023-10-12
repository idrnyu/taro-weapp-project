/*
 * @Created: gongyu
 * @Date: 2023-10-10 11:47:15
 * @LastEditTime: 2023-10-11 08:57:58
 * @Descripttion: xxx
 */
export default defineAppConfig({
  __usePrivacyCheck__: true,
  pages: [
    'pages/index/index',
    'pages/me/index',
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
        // iconPath: 
        // selectedIconPath:
      },
      {
        pagePath: 'pages/me/index',
        text: '首页2',
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
