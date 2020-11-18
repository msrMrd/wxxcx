// pages/user/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello MsrLi',
    name: '嘻嘻',   //直接可以写上去
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  ALogin: function (e) {
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
    wx.login({
      success (res) {
        console.log(res);

        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://www.2004shop.com/wx_dl',
            data: {
              code: res.code
            },
            success:function(e){
                console.log(e);
                wx.setStorage({
                  key:"atoken",
                  data:e.data.data.token,
                })
                let token=wx.getStorage({
                  key: 'token',
                  success(res){
                    console.log(res.data);
                  }
                })
              
            }
          })
         
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      names:"咪咪",
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})