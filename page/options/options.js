// page/options/options.js
Page({
  data:{
    // 定义页面的跳转
    config:[
      {
        "url": "/page/about/about",///page/backup/backup
        "name":"数据备份",
      //  "desc":"备份/恢复",
        "color":"mainWhite",
        "typed" :"cloud"
      },
      {
        "url": "/page/about/about",///page/book/book
        "name":"使用指南",
      //  "desc":"教你使用动态口令牌",
        "color":"mainWhite",
         "typed" :"other"
      },
      {
        "url": "/page/about/about",
        "name":"关于我们",
      //  "desc":"关于SSH动态口令牌",
        "color":"mainWhite",
         "typed" :"backup"
      },
      {
        "url": "/page/about/about",///page/feedback/feedback
        "name":"建议反馈",
      //  "desc":"倾听来自您的意见",
        "color":"mainWhite",
        "typed" :"about"
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})