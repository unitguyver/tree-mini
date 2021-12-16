// app.js
import query from "./utils/query";

App({
  /**
   * 入口：从缓存获取当前用户角色、判断是否需要登录
   */
  onLaunch() {
    // 
  },
  query,
  /**
   * 页面跳转
   * @param {opt.url} 跳转到地址
   * @param {opt.params} 路由参数 
   */
  navigateTo(opt) {
    let params = "";
    if (opt.params) {
      for (let key in opt.params) {
        params += params ? "&" : "?";
        params += key + "=" + opt.params[key];
      }
    }
    wx.navigateTo({
      url: opt.url + params,
    })
  },
  globalData: {
    role: "",//校长:master|家长:parent|教师:teacher|教务:admin
    userInfo: null
  }
})
