const is = require("herculex/dist/utils/is");

Page({
  data: {
    tosContent:[
      {
        title:"User Account",
        content:["1.1 In order to use certain features of the App, you may need to create a user account. You agree to provide accurate and complete information when creating your account. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account." , "1.2 You must be at least 18 years old to create an account and use the App. If you are under 18 years old, you must have the consent of a parent or legal guardian to use the App."]
      },
      {
        title:"Food Ordering",
        content:['2.1 The App allows you to place orders for food from various restaurants or food establishments ("Partners"). We act as an intermediary to facilitate the ordering process between you and the Partners.', '2.2 The availability of food items, prices, and delivery services offered by the Partners are subject to change without notice. We do not guarantee the availability or accuracy of the information provided by the Partners.','2.3 You are solely responsible for ensuring the accuracy of your order details, including delivery address, contact information, and food preferences. We are not liable for any incorrect or incomplete information provided by you.', '2.4 Payment for the food orders will be processed through the App. We may collect and store your payment information securely. By placing an order, you authorize us to charge the applicable amount to your chosen payment method.','2.5 Any issues or disputes regarding the quality, accuracy, or delivery of the food should be resolved directly with the Partner. We are not responsible for the actions or omissions of the Partners.']
      }
      
    ],
    agree:false
  },
  onLoad() {
    my.hideBackHome()
    const isTosAccepted = my.getStorageSync({
      key:"termOfServiceAccepted"
    }).data
    
    if(isTosAccepted){
      my.switchTab({
        url:"/pages/tabBar/Home/Home"
      })
    }
  },
  onChangeCheckBox(e){
    if(this.data.agree){
      this.setData({
        agree:false
      })
    } else{
      this.setData({
        agree:true
      })
    }
   
  },
  onAcceptTos(e){
    console.log("sasasa")
    my.setStorageSync({
      key:"termOfServiceAccepted",
      "data":true
    })
    my.switchTab({
      url:"/pages/tabBar/Home/Home"
    })
  }
});
