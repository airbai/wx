var app=getApp();
Page( {
    data: {
        loading:{
            hidden:false
        }
    },
    onReady: function() {
        //初始化数据
        this.getData();
    },
    //加载数据
    getData:function(callback){
        var self = this;
        self.setData( {
            loading:{
                hidden:false
            }
        });
        wx.request( {
            url: 'http://m.jiajuol.com/partner/weixin/subject/subject_info.php',
            data: {
                subject_id:app.globalData.caseId
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function( res ) {
                console.log(res);
                self.setData( {
                    data:res.data.data,
                    loading:{
                        hidden:true
                    }
                });
            }
        })
    },
    yuyue:function(){
        wx.navigateTo({
           url: '../yuyue/yuyue'
        });
    }
})