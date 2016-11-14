var app=getApp();
Page( {
    data: {
        loading:{
            hidden:false,
            txt:"加载中"
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
                hidden:false,
                txt:"加载中"
            }
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
        app.yuyue();
    }
})