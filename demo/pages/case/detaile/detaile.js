var app=getApp();
Page( {
    data: {},
    onReady: function() {
        //初始化数据
        this.getData();
    },
    //加载数据
    getData:function(callback){
        var self=this;
        wx.showToast({
          title: '加载中...',
          icon: 'loading',
          duration:10000
        });
        wx.request( {
            url:app.api.subjectInfo,
            data: {
                subject_id:app.globalData.caseId
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function( res ) {
                // console.log(res);
                self.setData( {
                    data:res.data.data
                });
                wx.hideToast();
            }
        })
    },
    yuyue:function(){
        app.yuyue();
    }
})