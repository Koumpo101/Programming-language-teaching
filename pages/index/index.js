// index.js
// 获取应用实例
import { classData } from "../../data/jiaocheng"

Page({
  data: {
    classData: classData
  },
  onLoad() {
  },
  //点击跳转
  toClassInfo(item) {
    wx.navigateTo({
      url: "/pages/classInfo/classInfo"
    })
    let Obj = JSON.stringify(item.currentTarget.dataset.children)
    wx.setStorageSync('classInfo', Obj)
  }
})
