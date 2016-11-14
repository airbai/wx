var app=getApp();
Page({
    data: {
        data:[],//数据
        disabled:false,//加载更多按钮状态
        page:1,//当前页码
        hasMore:false,//加载更多按钮
        moreTxt:'点击加载更多'
    },
    onReady: function() {
        //初始化数据
        var self=this;
        this.getData(function(d){
            self.dataFormat(d)
        });
        wx.getNetworkType({
            success: function(res) {
                var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
                // console.log(networkType);
            }
        })
    },
    //数据处理
    dataFormat:function(d){
        console.log( d.data );
        if(d.data.status=="1"){
            if(d.data.data){
                var datas=this.data.data.concat(d.data.data),flag=d.data.data.length<10;
                this.setData({
                    data:datas,
                    disabled:flag?true:false,
                    moreTxt:flag?"已加载全部数据":"点击加载更多",
                    hasMore:true
                });

            }else{
                this.setData({
                    disabled: true,
                    moreTxt:"已加载全部数据"
                });  
            }
        }else{
            console.log('接口异常！')
        }
        wx.hideToast();
    },
    //加载数据
    getData:function(callback){
        var self = this;
        wx.showToast({
          title: '加载中...',
          icon: 'loading',
          duration:10000
        });
        wx.request( {
            url:app.api.subjectList,
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
                console.log('成功拉拉！！！！！！')
                // self.dataFormat(res);
            },
            error:function(){
                console.log('失败啦！！！')
            },
            fail:function(){
                console.log('error!!!!!!!!!!!!!!')
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
    //跳转案例详情
    goToDetaile:function(event){
        app.globalData.caseId=event.currentTarget.dataset.gid;
        wx.navigateTo({
          url: '../detaile/detaile'
        });
    },
    //跳转设计师详情
    goToDesigner:function(event){
        app.globalData.designerId=event.currentTarget.dataset.did;
        wx.navigateTo({
          url: '../designer/designer'
        });
    }
})