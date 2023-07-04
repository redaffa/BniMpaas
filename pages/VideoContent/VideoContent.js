const app = getApp()
Page({
  data: {
    listOfYoutubeVideos:[],
    maxResult:10,
    paginationLoading:false
  },
  async onLoad() {
    my.showLoading({
      content:"Loading"
    })
    await app.onCheckRefreshToken()
    await this.fetchYoutubeVideo()
    my.hideLoading()
  },
 async fetchYoutubeVideo(){
    try {
       my.request({
        url: 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Burger%20King%20So%20Good&key=AIzaSyC7lAUlWatKXH3v9byjDdh95A_Yu4ysSbI&maxResults='+ this.data.maxResult,
        method: 'GET',
        success: (result) => {
          this.setData({
            listOfYoutubeVideos:result.data.items
          })
        },
        fail: (error) => {
          console.log(error)
        }
      });
    } catch (error) {
      
    }
  },
  goToWebview(e){
    const {link} = e.target.dataset
    my.navigateTo({
      url:"/pages/Webview/Webview?link=https://www.youtube.com/embed/" + link
    })
  },
  async onReachBottom(){
    try {
      this.setData({
        maxResult: this.data.maxResult + 5,
        paginationLoading: true
      })
      await this.fetchYoutubeVideo()
      this.setData({
        paginationLoading:false
      })
    } catch (err) {
      console.log(err)
    }
  },
  async onPullDownRefresh(){
    try {
      my.showLoading({
        content:"Loading"
      })
      this.setData({
        maxResult:10
      })
      await this.fetchYoutubeVideo()
    } catch (error) {
      console.log(error)
    } finally{
      my.stopPullDownRefresh()
      my.hideLoading()
    }
  }
});
