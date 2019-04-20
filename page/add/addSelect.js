// page/add/addSelect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  addServer: function (e) {
    wx.scanCode({
      success: function (res) {
        /** 
         * url decode 
         */
        var source = decodeURIComponent(res.result);
        var data = source.split("otpauth://totp/")[1];
        /**
         * 数据截断
         */
        var isHaveIssuer = data.split("?")[0].indexOf(":") != -1 && data.split("?")[0].indexOf(":") != 0;
        if (isHaveIssuer) {
          console.log(data);
          var username = data.split("?")[0].split(":")[1];
        } else {

          console.log(data);
          var username = data.split("?")[0];
        }
        var issuer = data.split("issuer=")[1];
        var secret = data.split("?")[1].split("&")[0].split("=")[1]

        wx.navigateTo({
          url: '../add/add?secret=' + secret + "&name=" + issuer + "&username=" + username
        })

      },
      fail: function (res) {
        if (res.errMsg == 'scanCode:fail cancel') {

        } else {
          wx.showModal({
            "title": "扫描失败",
            "content": "您可能扫描了错误的二维码，请重新扫描！",
            "showCancel": false,
            "success": function (e) {
            }
          })
        }
      }
    })
  },
})