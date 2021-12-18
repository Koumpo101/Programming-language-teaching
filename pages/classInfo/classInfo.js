// pages/classInfo/classInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classInfo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let Obj = JSON.parse(wx.getStorageSync('classInfo'))
    this.setData({
      classInfo: Obj
    })
  },

})