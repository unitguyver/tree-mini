import fake from "../fake/index";

/**
 * app.query - 网络请求的封装
 * @param {queryData:object}
 * @returns {Promise<Object>} Promise异步函数
 * @desc 如果接口需要登录才能使用、跳转到登录页 
 */
export default function query(queryData = {
  url = "/",                                // 请求地址
  method = "get",                           // 请求方式（get|post）
  header = {                                // 请求头（'content-type'：'application/json'|'application/x-www-form-urlencoded; charset=UTF-8'）
    'content-type': 'application/json'
  },
} = {}){
  const {url} = queryData;
  if(/^https?\:\/\//.test(url)){
    // 绝对地址
  }else{
    // 相对地址、需要拼接地址头部

    // 假数据
    if(/^\/fake/.test(url)){
      return new Promise((resolve, reject) => {
        if(fake[url]){
          const data = fake[url](queryData);
          resolve(data);
        }else{
          reject({
            code: -1, data: null, msg: '网路连接失败'
          })
        }
      })
    }
  }

  return new Promise((resolve, reject) => {
    wx.request(Object.assign(queryData, {
      success(response){
        if(response.data.code === 200){
          resolve(response.data);
        }else{
          wx.showToast({
            title: response.data.msg || '出错了', 
            duration: 2000, 
            icon: 'none'
          });
          reject(response.data);
        }
      },
      fail(){
        wx.showToast({
          title: '网路连接失败', duration: 2000, icon: 'none'
        })
        reject({
          code: -1, data: null, msg: '网路连接失败'
        })
      }
    }))
  })
}