import query from "../query";

export default {
  getMasterCards(opts={}){
    return query({
      url: "/fake/master/getCards",
      method: "get",
      ...opts
    })
  }
}