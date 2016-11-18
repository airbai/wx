var app=getApp();
Page({
    data: {
        data:null,
        current:0,
        indicatorDots: false,
        autoplay: false,
        duration:500
    },
    onReady:function(){
        console.log(app.globalData.picData);
        this.setData({
            data:app.globalData.picData.data,
            current:app.globalData.picData.current
        })
    },
    onUnload:function(){
        //生命周期结束清空数据
        app.globalData.picData=null;
    },
    swiperChange: function(e) {
        // console.log(e.detail.current)
        this.setData({
            current:e.detail.current
        })
    }
})