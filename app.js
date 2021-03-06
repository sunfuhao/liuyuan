/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 */
const wechat = require('./utils/wechat.js')
const api = require('./utils/api.js')
App({
    /**
     * Global shared
     * 可以定义任何成员，用于在整个应用中共享
     */
    data: {
        version: '0.1.0',
        currentCity: 'shenzhen'
    },

    /**
     *  API
     */
    wechat: wechat,
    api: api,

    /**
     * 生命周期函数--监听小程序初始化
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function() {

        wx.login({
              success: function(res) {
                var code = res.code;
                if (code) {
                    console.log('获取用户登录凭证：' + code);
                    wx.request({
                        url : 'http://localhost:3000/api/getWxCode',
                        data: {
                        code: res.code
                        },
                        success: function(res){
                            // if(res.data.status == 100){
                            //   self.setData({
                            //     openid: res.data.openid
                            //   })
                            // }
                        },
                        fail: function(){

                        }
                    })
                } else {
                  console.log('获取用户登录态失败：' + res.errMsg);
                }
              }
        });
        //调用API从本地缓存中获取数据


    },
    globalData: {
        userInfo: null,
        toTime: function(value) {
            var value = parseInt(value);
            console.log(value)
            return (Math.floor(value / 60) + ":" + Math.floor(value % 60 + ":"));
        }
    },

    /**
     * 生命周期函数--监听小程序显示
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow() {
        console.log(' ========== Application is showed ========== ')
    },
    /**
     * 生命周期函数--监听小程序隐藏
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide() {
        console.log(' ========== Application is hid ========== ')
    }
})