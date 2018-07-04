var app = getApp();
Page({
    data: {
        list: [],
        footer: 100,
        mode: "scaleToFill",
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        arr: ['http://t10.baidu.com/it/u=3994952046,3665680125&fm=173&s=51127591107D5B8E227865F30300D0B3&w=640&h=396&img.JPEG','http://t10.baidu.com/it/u=3231088869,2392068320&fm=173&s=A51216D18D034A4F5CBAEFD9030080BF&w=640&h=446&img.JPEG']
    },
    onLoad: function() {
        this.nab_schedule("") //初始化数据
    },
    //ajax 列表请求
    nab_schedule: function(param) {
        var that = this;
        var params = {
            date: param
        };
        app.api.test()
            .then(res => {
              console.log(typeof res.data,22222)
                that.setData({
                  list: res.data
                });
            })
            .catch(e => {
                console.error(e)
            });

    },

    //选择日期
    selectDate: function(e) {
        this.nab_schedule(e.target.dataset.time);
    },

    //  点击日期组件确定事件  
    bindDateChange: function(e) {
        this.nab_schedule(e.detail.value);
    },



    loadMore: function(e) {},
    upper: function(e) {
        //console.log(e)
    },
    lower: function(e) {
        // console.log(e)
    },
    scroll: function(e) {
        // console.log(e)
    }

})