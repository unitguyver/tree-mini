const app = getApp();

// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    home: {
      type: String,
      value: ''
    },
    conf: {
      type: String,
      value: ''
    },
    tree: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goHome(){
      if(this.data.home){
        app.push(this.data.home);
      }
    },
    goConf(){
      if(this.data.conf){
        app.push(this.data.conf);
      }
    },
    openTree(){
      app.push('/tree');
    }
  }
})
