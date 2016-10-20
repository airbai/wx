var app=getApp();
Page({
    data: {

    },
    onReady: function() {
        var self=this;
        wx.request( {
            url: 'http://m.jiajuol.com/partner/weixin/designer/designer_info.php',
            data: {
                designer_id:app.globalData.designerId
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function( res ) {
                console.log(res)
                self.setData({
                    data:res.data.data
                })
            }
        })
    }
})