// pages/result/r.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    results: [],
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var result = JSON.parse(options.id);
    var results = [];
    wx.request({
      url: 'https://www.jnshu.com/a/occupation/list',
      success: function(Data){
        var allDate = Data.data.data.occupations;
        for (var i in allDate) {
          for (var o in result){
            if (allDate[i].id == result[o]) {
              results.push(allDate[i]);
            }
          }
        }
        for (var a in results){
          if (results[a].salary !== '' || results[a].salary !== undefined){
            results[a].salary = JSON.parse(results[a].salary);
          }
        }
        _this.setData({
          results: results
        })
        console.log(_this.data)
      }
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
  
  },

  swiperTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },
  clickTab: function(e) {
    if(this.data.currentTab === e.target.dataset.current){
      return false;
    }else{
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  }

})