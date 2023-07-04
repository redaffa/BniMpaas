Page({
  data: {
    profileList: [{
        name: "Edit Profile"
      },
      {
        name: "FAQ"
      },
      {
        name: "Activities"
      },
      {
        name: "Contact Us"
      },
      {
        name: "Learn about BK App"
      },
      {
        name: "Privacy Policy"
      },
      {
        name: "Logout"
      }
    ]
  },
  onLoad() {},
  onProfileListTapped(e) {
    const {
      name
    } = e.target.dataset
    if (name === "Logout") {
      my.removeStorageSync({
        key: "access_token"
      })
      my.removeStorageSync({
        key: "refreshToken"
      })
      my.reLaunch({
        url: "/pages/Login/Login"
      })
    }
  }

});