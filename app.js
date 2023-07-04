

App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  globalData:{
    userLoginName:"Daffa"
  },
  async onCheckRefreshToken(){
    try {
      const refreshToken = my.getStorageSync({
        key:"refreshToken"
      }).data
      await my.request({
        url:"http://localhost:3000/refreshToken",
        method:"POST",
        headers:{
          refresh_token : refreshToken
        },
        success: (result)=>{
          my.setStorageSync({
            "key" : "access_token",
            data : result.data.access_token
          })
        },
        fail : (err)=>{
          my.reLaunch({
            url:"/pages/Login/Login"
          })
        }
      })
    } catch (err) {
     
    }
  }
});
