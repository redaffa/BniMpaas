Page({
  data: {
    loginFormValue:{
      email:"",
      password:""
    },
    "access_token":""
  },
  async formLoginHandler(e){
    try {
      console.log(e.detail.value,"<<<<<<<<<<<<")
     await my.httpRequest({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: e.detail.value,
        success: (result) => {
          console.log(result)
          this.setData({
            loginFormValue: e.target.value
          })
          my.setStorage({
            "key" : "refreshToken",
            "data": result.data.refreshToken
          })
          my.switchTab({
            url:"/pages/tabBar/Home/Home"
          })
        },
        fail: (err) => {
          console.log(err)
          console.log("masokga")
        },
        complete: () => {
          
        }
      });
    } catch (error) {
      console.log(error)
    }

  },
  async onLoad(){
    my.hideBackHome()
    let token = my.getStorageSync({
      "key":"refreshToken",
      success: (result)=>{
        console.log(result)
        this.setData({
          refreshToken : result.data
        })
      
      }
    }).data
    console.log(token)
    if(token){
      my.switchTab({url:"/pages/tabBar/Home/Home"})
    }
  }
});
