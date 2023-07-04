Page({
  data: {
    listOfMenusArray:[],
    categoryTitle:"",
    basicVisible:false,
    burgerMenu:{},
    menuLoading:false
  },
  async onLoad(query) {
    let token = my.getStorageSync({
      "key":"refreshToken"
    }).data
    console.log(token)
    if(!token){
      my.reLaunch({url:"/pages/Login/Login"})
    }
    const {id,title} = query 
      console.log(query)
    this.setData({
      categoryTitle:title
    })
    await this.fetchMenu(id)
  },
  async fetchMenu(id){
    this.setData({
      "menuLoading" : true
    })
    await my.httpRequest({
      url: 'http://localhost:3000/items-category/'+ id,
      method: 'GET',
      success: (result) => {
        this.setData({
          listOfMenusArray:result.data
        })
        this.setData({
          "menuLoading" : false
        })
      },
      fail: (err) => {
        console.log(err)
        this.setData({
          "menuLoading" : false
        })
      }
    });
  },
  handlePopupClose(){
    this.setData({
      basicVisible:false
    })
  },
  onHandlePopUpOpen(menu){
    this.setData({
      basicVisible:true,
      burgerMenu:menu
    })
  },
  goToWebview(e){
    const {link} = e.target.dataset
    my.navigateTo({
      url:"/pages/Webview/Webview?link=" + link
    })
  }
});
