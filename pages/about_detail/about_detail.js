var app = getApp();
Page({
  data: {
    list: [],
    content: {},
    result:{},
    sexarr:['男','女'],
    sexobj:[{id:1,name:'男'},{id:2,name:'女'}],
    sexindex:1,
    nickname : ''
    
  },
  onLoad: function (e, content) {
    var that = this;
    this.userinfo(e)
    this.live_content(e.schid);
    this.setData({
      schid: e.schid,
      liveid: e.liveid
    });
  },
  //获取用户信息
  userinfo : function(e){
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        that.setData({
          userinfo: userInfo
        })
        if (userInfo.city != '' && that.data.content.housearea == '') {
          var housearea = "content.housearea"
          that.setData({
            [housearea]: userInfo.city
          })
        }
        if (userInfo.nickName != '' && that.data.content.nickname == '') {
          var nickName = "content.nickname"
          that.setData({
            [nickName]: userInfo.nickName
          })
        }
        if (userInfo.avatarUrl != '' && that.data.content.icon == '') {
          var avatarUrl = "content.icon"
          that.setData({
            [avatarUrl]: userInfo.avatarUrl
          })
        }
        if (userInfo.gender != '' && that.data.content.sex == '') {
          var gender = "content.sex"
          that.setData({
            [gender]: userInfo.gender
          })
        }
        // if (userInfo.gender != '') {
        //   var province = "content.province"
        //   that.setData({
        //     [province]: userInfo.gender
        //   })
        // }
        console.log(that.data.content)
     }
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
        that.setData({
          content: res.data,
          userpower: res.data.power,
          sexindex: res.data.sex
        });
        this.userinfo()
      })
      .catch(e => {
        console.error(e)
      });
  },
  bindPickerChange: function(e){
    this.setData({
      sexindex: parseInt(e.detail.value) + 1
    })
  },
  formBindsubmit: function(e){
    //提交表单
    var cansubmit = false;
    var subvalue = e.detail.value;
    if (subvalue.nickname && subvalue.age && subvalue.sex && subvalue.housearea && subvalue.currentarea  && subvalue.wechat){
      cansubmit = true;
    }
    if (cansubmit){
      console.log(e)
    }else{
      console.log('请检查带 ＊ 的内容是不是都填写了哦～')
    }
    
  },
  uploadPhoto() {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        // upload(that, tempFilePaths);
      }
    })
  },
  upload: function (page, path) {
    //上传图片
    wx.showToast({
      icon: "loading",
      title: "正在上传"
    }),
    wx.uploadFile({
      url: constant.SERVER_URL + "/FileUploadServlet",
      filePath: path[0],
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        'session_token': wx.getStorageSync('session_token')
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        page.setData({  //上传成功修改显示头像
          src: path[0]
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      }
    })
  }

})