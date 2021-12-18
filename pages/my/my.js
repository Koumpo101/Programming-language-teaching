// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '', //用户信息
    loginShow: true, //登录页面的显隐
    userShow: true, //用户页面的显隐
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        userShow: false,
        loginShow: true,
        userInfo: wx.getStorageSync('userInfo')
      })
    } else {
      this.setData({
        loginShow: false,
        userShow: true
      })
    }
  },

  //获取用户信息
  getuserinfo(e) {
    wx.getUserProfile({
      desc: '用于展示用户昵称',
      success: (res) => {
        console.log('用户信息', res)
        wx.setStorageSync('userInfo', res.userInfo);
        this.setData({
          userShow: false,
          loginShow: true,
          userInfo: res.userInfo
        })
        wx.showToast({
          title: '登录成功！',
          icon: 'success',
        });
      }
    })
  },
})