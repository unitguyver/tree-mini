import query from "../query";

export default {
  getPhone(opts = {}){
    return query({
      url: "/fake/app/getPhone",
      method: "post",
      ...opts
    })
  },
  getCode(opts = {}){
    return query({
      url: '/fake/ap/getCode',
      method: "post",
      ...opts
    })
  },
  login(opts = {}){
    return query({
      url: "/fake/app/login",
      method: "post",
      ...opts
    })
  }
}