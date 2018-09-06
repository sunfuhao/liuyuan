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
})