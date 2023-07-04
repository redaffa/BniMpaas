Page({
  data: {
    burgerCategoriesArray: [],
    fetchCategoriesLoading: true,
    offset: 0,
    access_token: "",
    refreshToken: "",
    "test": "sadasdasdasdas"
  },
  async onLoad() {
    await this.loader()
    let token = my.getStorageSync({
      "key": "access_token"
    }).data
    let refreshToken = my.getStorageSync({
      "key": "refreshToken"
    }).data
    this.setData({
      access_token: token,
      refreshToken: refreshToken
    })
    if (!refreshToken) {
      my.reLaunch({
        url: "/pages/Login/Login"
      })
    }
    await this.fetchBurgerCategories()
    my.hideLoading()
  },
  async fetchBurgerCategories() {
    try {
      my.httpRequest({
        url: `http://localhost:3000/categories?offset=${this.data.offset}`,
        method: 'GET',
        headers: {
          access_token: this.data.access_token
        },
        success: (result) => {
          this.setData({
            burgerCategoriesArray: result.data,
            fetchCategoriesLoading: false
          })

        },
        fail: (err) => {
          my.request({
            url: "http://localhost:3000/refreshToken",
            method: "POST",
            headers: {
              access_token: this.data.access_token,
              refresh_token: this.data.refreshToken
            },
            success: async (result) => {
              this.setData({
                access_token: result.data.access_token
              })
              my.setStorageSync({
                key: "access_token",
                data: result.data.access_token
              })
              await this.fetchBurgerCategories()
            },
            fail: async (err) => {
              my.removeStorage({
                key: "access_token",
                success: (result) => {
                  my.removeStorage({
                    key: "refreshToken",
                    success: () => {
                      my.reLaunch({
                        url: "/pages/Login/Login"
                      })
                    }
                  })
                },
                fail: () => {

                }
              })
            }
          })
        },
        complete: () => {
          this.setData({
            fetchCategoriesLoading: false
          })
        }
      });
    } catch (err) {
      console.log(err)
    }
  },
  onChangeUrl(category) {
    my.navigateTo({
      url: `/pages/menus-page/menus-page?id=` + category.id + "&title=" + category.name
    })
  },
  async onPullDownRefresh(e) {
    try {
      my.showLoading({
        content: "Loading"
      })
      await this.fetchBurgerCategories()
      let token = my.getStorageSync({
        "key": "refreshToken"
      }).data
      console.log(token)
      if (!token) {
        my.reLaunch({
          url: "/pages/Login/Login"
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      my.stopPullDownRefresh();
      my.hideLoading()
    }

  },
  async loader() {
    my.showLoading({
      content: "LOADING"
    })
  }
});