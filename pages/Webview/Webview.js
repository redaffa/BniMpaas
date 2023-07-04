Page({
  data: {
    webUrl:""
  },
  onLoad(query) {
    const {link} = query
    this.setData({
      webUrl: decodeURIComponent(link)
    })
  },
});
