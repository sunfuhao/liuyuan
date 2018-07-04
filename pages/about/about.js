var app = getApp();
Page({
  data: {
    list: [],
    content: [],
    
  },
  onLoad: function (e) {
    this.live_content(e.schid);
    this.setData({
      schid: e.schid,
      liveid: e.liveid
    });

  },

  //获取详情数据
  live_content: function (schid) {
    var that = this;
    var params = {
      schid: schid
    };
    app.api.detail(params)
      .then(res => {
        console.log(res.data, 222233);
        that.setData({
          content: res.data,
          userpower: res.data.power
        });
      })
      .catch(e => {
        console.error(e)
      });
  },

  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu);
    this.setData({
      userpower: 1
    })
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200,  //动画时长  
      timingFunction: "linear", //线性  
      delay: 0  //0则不延迟  
    });

    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;

    // 第3步：执行第一组动画  
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画  
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })

      //关闭  
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  }
})