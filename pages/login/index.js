import api from "../../api/index";
const app = getApp()

Page({
  data: {
    phone: '',
    code: ''
  },
  
  onLoad() {
    const role = app.dbget('role');
    if(role){
      app.push(`/${role}/home`);
    }
  },
  
  getPhone(){
    wx.login({
      success: (res) =>{
        if(res.code){
          api.getPhone().then(({phone}) => {
            this.setData({
              phone: phone
            })
          })
        }
      }
    })
  },

  getCode(){
    api.getCode().then(({code}) => {
      wx.showToast({
        title: code, duration: 2000, icon: 'none'
      })
    })
  },

  login(){
    api.login({
      data: {
        phone: this.data.phone,
        role: 'master',
        code: this.data.code
      }
    }).then(({role, userInfo}) => {
      app.dbset('role', role);
      app.dbset('userInfo', userInfo);
      console.log(role)
      app.push(`/${role}/home`)
    })
  }
})
