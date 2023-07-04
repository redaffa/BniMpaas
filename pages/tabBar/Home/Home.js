const app = getApp()
Page({
  data: {
    "refreshToken": "",
    "access_token": "",
    burgerPromotionImage:[
      {
        imgUrl:"https://cdn.sanity.io/images/czqk28jt/prod_bk_us/28fdffe08898fa7833268198d3885710ba8c8ebc-2000x1000.jpg?w=1800&q=80&fit=max&auto=format"
      },
      {
        imgUrl:"https://cdn.sanity.io/images/czqk28jt/prod_bk_us/0d8428c866a64d23c6e3381e3709902b722e3d98-2000x1000.png?w=1800&q=80&fit=max&auto=format"
      }
    ],
      listOfHomeMenus:[
        {
          name:"Dine in",
          img:"/image/dine_in-removebg-preview.png"
        },
        {
          name:"Take Away",
          img:"/image/pngtree-illustration-of-burger-take-away-vector-design-food-logo-png-image_7963594-removebg-preview.png"
        },
        {
          name:"Delivery",
          img:"/image/burgerking-delivery-content-2018-removebg-preview.png"
        },
        {
          name:"Shake N'Win",
          img:"/image/output-onlinegiftools.gif"
        }
      ],
      "name":""
  },
   async onLoad() {
    const isTosAccepted = my.getStorageSync({
      key:"termOfServiceAccepted"
    }).data
    console.log(isTosAccepted)
    if(!isTosAccepted){
      my.navigateTo({
        url:"/pages/term-of-condition-page/term-of-condition-page"
      })
    }
  
    let token = my.getStorageSync({
      "key":"refreshToken"
    }).data
    this.setData({
      refreshToken : token,
      name:app.globalData.userLoginName
    })
    if(!token){
      my.redirectTo({url:"/pages/Login/Login"})
    }
  },
  onGoTo(name){
    let profile;
    console.log(name)
    if(name.target){
      profile =  name.target.dataset.profile
    }
    if(name === "Delivery"){
      my.navigateTo({
        url:"/pages/categories-page/categories-page"
      })
    }
    if(profile === "profile"){
      my.switchTab({
        url:"/pages/profile-page/profile-page"
      })
    }
  },
  async onPullDownRefresh(){
    try {
      console.log("masuk refresh")
      my.showLoading({
        content:"Loading"
      })
      setTimeout(()=>{
        console.log("cok")
      },2000)
      let refreshToken = my.getStorageSync({
        "key":"refreshToken"
      }).data
      if(!refreshToken){
        my.reLaunch({url:"/pages/Login/Login"})
      }
    } catch (error) {
      console.log(error)
    } finally{
      my.stopPullDownRefresh()
      my.hideLoading()
    }
  
  }
});
