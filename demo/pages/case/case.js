var app=getApp();
Page({
    data: {
        data:[],//数据
        hidden: true,//loading开关
        disabled:false,//加载更多按钮状态
        loading:false,//加载更多按钮loading
        page:1,//当前页码
        moreTxt:'点击加载更多'
    },
    onReady: function() {
        //初始化数据
        var self=this;
        this.getData(function(d){
            self.dataFormat(d)
        });
    },
    //数据处理
    dataFormat:function(d){
        console.log( d.data );
        if(d.data.status=="1"){
            if(d.data.data){
                var datas=this.data.data.concat(d.data.data),flag=d.data.data.length<10;
                this.setData({
                    hidden: true,
                    data:datas,
                    disabled:flag?true:false,
                    moreTxt:flag?"已加载全部数据":"点击加载更多"
                });
            }else{
                this.setData({
                    disabled: true,
                    hidden:true,
                    moreTxt:"已加载全部数据"
                });  
            }
        }else{
            console.log('接口异常！')
        }
    },
    //加载数据
    getData:function(callback){
        var self = this;
        self.setData( {
            hidden: false
        });
        wx.request( {
            url: 'http://m.jiajuol.com/partner/weixin/subject/subject_list.php',
            data: {
                page:self.data.page,
                house_type:0,
                house_style:0,
                house_area:0
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function( res ) {
                callback(res)
                // self.dataFormat(res);
            }
        })
    },
    //加载更多
    getMore:function(){
        var self=this;
        self.data.page++;
        self.getData(function(d){
            self.dataFormat(d)
        });
    },
    //跳转详情
    goto:function(event){
        app.globalData.caseId=event.currentTarget.dataset.gid;
        wx.navigateTo({
          url: '../case-detaile/detaile'
        });
    }
})