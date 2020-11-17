//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello MsrLi',
    name: '嘻嘻',   //直接可以写上去
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
let _this=(this);    //声明一个对象
    //发起网络请求
wx.request({
    url:"http://www.2004shop.com/weba",   //api  本地项目
    data:{
      x:'xxx',
      y:'yyy'
    },
    header:{
      'content-type':'application/json"'  //默认值
    },
    success(res){
        console.log(res);
      _this.setData({
        jj:res.data.tel,
        kk:res.data.name,
        aa:res.data.sex
      })
      }
}),
wx.request({
  url:"http://www.2004shop.com/viewa",   //api  本地项目
  success:function(res){
      console.log(res);
    _this.setData({
      goods:res.data
    })
    },
    fail:function(){
      console.log("请求失败");
    }
})
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      names:"咪咪",
    })
  }
})
 