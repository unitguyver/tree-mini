// app.js
import {formatTime} from "./utils/util";

App({
  /**
   * 入口：从缓存获取当前用户角色、判断是否需要登录
   */
  onLaunch() {
    this.dbset('role', 'master');
    this.dbset('userInfo', {
      avater: '/static/images/app/logo.jpeg',
      name: '张三',
      school: '西直门',
      date: formatTime(new Date())
    })
  },
  /**
   * 页面跳转
   * @param {url:string} 跳转到地址
   * @param {params:object} 路由参数 
   */
  push(url, params = null) {
    url = `/pages${url}/index`;
    if (params) {
      let suffix = '';
      for (let key in params) {
        suffix += suffix ? "&" : "?";
        suffix += key + "=" + params[key];
      }
      url += suffix;
    }
    console.log(url)
    wx.navigateTo({url})
  },
  globalData: {
    role: "",//校长:master|家长:parent|教师:teacher|教务:admin
    userInfo: null
  },
  dbset(key, value){
    wx.setStorageSync(key, value);
    this.globalData[key] = value;
  },
  dbget(key){
    return wx.getStorageSync(key);
  }
})
