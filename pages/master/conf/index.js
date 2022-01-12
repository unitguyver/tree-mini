// pages/master/conf/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
    menus: [
      {
        icon: "/static/images/app/logo.jpeg",
        label: "班级列表",
        path: ""
      },
      {
        icon: "/static/images/app/logo.jpeg",
        label: "老师列表",
        path: ""
      },
      {
        icon: "/static/images/app/logo.jpeg",
        label: "学院列表",
        path: ""
      },
      {
        icon: "/static/images/app/logo.jpeg",
        label: "待试听学员",
        path: ""
      },
      null,
      null
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})