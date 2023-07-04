Page({
  data: {},
  onLoad() {
    setTimeout(()=>{
      this.goIntoHome()
    },2000)
  },
  goIntoHome(){
    my.redirectTo({
      url:"/pages/term-of-condition-page/term-of-condition-page"
    })
  }
});
