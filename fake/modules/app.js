export default {
  getPhone(){
    return {
      phone: '132173542601'
    }
  },
  getCode(){
    return {
      code: '1234'
    }
  },
  login({data}){
    return {
      role: data.role, 
      userInfo: {
        phone: data.phone
      }};
  }
}