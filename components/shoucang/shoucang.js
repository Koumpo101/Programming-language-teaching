// components/shoucang/shoucang.js
import { classData } from "../../data/jiaocheng"
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    classData: []
  },
  lifetimes: {
    attached() {
      let arr = classData.slice(8, 13)
      this.setData({
        classData: arr
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击跳转
    toClassInfo(item) {
      wx.navigateTo({
        url: "../../pages/classInfo/classInfo"
      })
      let Obj = JSON.stringify(item.currentTarget.dataset.children)
      wx.setStorageSync('classInfo', Obj)
    }
  }
})
