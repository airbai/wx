var app=getApp();
Page({
    data: {
        data:[],//数据
        loading:{
            hidden:false,
            txt:"加载中"
        },
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
    },
    //数据处理
    dataFormat:function(d){
        console.log( d.data );
        if(d.data.status=="1"){
            if(d.data.data){
                var datas=this.data.data.concat(d.data.data),flag=d.data.data.length<20;
                this.setData({
                    loading:{
                        hidden:true,
                    },
                    data:datas,
                    disabled:flag?true:false,
                    moreTxt:flag?"已加载全部数据":"点击加载更多",
                    hasMore:true
                });
            }else{
                this.setData({
                    loading:{
                        hidden:true,
                    },
                    disabled: true,
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
            loading:{
                hidden:false,
                txt:"加载中"
            }
        });
        wx.request( {
            url: 'http://m.jiajuol.com/partner/weixin/pic_list/pic_list.php',
            data: {
                page:self.data.page,
                style_id:0,
                space_id:0,
                section_id:0
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
    }
})