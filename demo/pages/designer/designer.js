var app=getApp();
Page({
    data: {
      tab:{
        tab1:false,
        tab2:true
      },
      data: {
        "id": "2195",
        "name": "\u8d75\u8fdc\u5f81",
        "pinyin": "zhaoyuanzheng",
        "mobile": "",
        "price": "100",
        "qq": "0",
        "province": "7",
        "city": "55",
        "description": "\u4e2a\u4eba\u5c65\u5386\uff1a\r\n\u9c81\u7f8e\u73af\u827a\u4e13\u4e1a\r\n\u5317\u4eac\u5efa\u7b51\u88c5\u9970\u534f\u4f1a\u52a9\u7406\u5de5\u7a0b\u5e08\r\n\u4e2d\u56fd\u5efa\u7b51\u88c5\u9970\u534f\u4f1a\u4f1a\u5458\r\n\u56fd\u5bb6\u6ce8\u518c\u5ba4\u5185\u8bbe\u8ba1\u5e08\r\n\r\n\u6848\u4f8b\u4f5c\u54c1\uff1a\r\n\u91d1\u5730\u957f\u9752\u6e7e\u3001\u91d1\u5730\u94ed\u4eac\u3001\u91d1\u5730\u94c2\u60a6\u3001\u534e\u6da6\u6a61\u6811\u6e7e\u3001\u534e\u6da6\u5949\u5929\u4e5d\u91cc\u3001\u65b0\u4e16\u754c\u82b1\u56ed\u3001\u4f0a\u4e3d\u96c5\u7279\u6e7e\u3001\u4fdd\u5229\u5341\u4e8c\u6a61\u6811\u3001\u8fdc\u6d0b\u548c\u5e73\u5e9c\u3001\u78a7\u6842\u56ed\u3002\r\n\r\n\u64c5\u957f\u98ce\u683c\uff1a  \u7f8e\u5f0f\uff0c\u6cd5\u5f0f\uff0c\u65b0\u4e2d\u5f0f\uff0c\u5962\u534e\uff0c\u6e2f\u5f0f",
        "add_date": "2016-05-10 21:28:38",
        "modi_date": "2016-05-20 11:02:30",
        "add_user": "zhangguangyao",
        "modi_user": "2195",
        "is_show": "yes",
        "import_type": "1",
        "work_years": "0",
        "case_num": "2",
        "transform_status": "0",
        "city_name": "\u6c88\u9633",
        "province_name": "\u8fbd\u5b81",
        "avatar": "http://i.carimg.com/store/605/042/000/71356ff4e44ec76d.jpg!zs",
        "subject_list": [{
          "subject_id": "1000076",
          "subject_name": "\u5962\u534e\u98ce\u683c\u8bbe\u8ba1\u51fa\u66f4\u9ad8\u54c1\u8d28\u7684\u7a7a\u95f4",
          "title_img": "http://i1.carimg.com/0/photo/127/035/000/742573e81c5d0802.jpg!hmm",
          "style_id": "2",
          "style_name": "\u6b27\u5f0f",
          "house_type_id": "7",
          "house_type_name": "\u4e09\u5c45\u5ba4",
          "price_id": "53",
          "price_name": "30-50\u4e07\u5de6\u53f3",
          "area_id": "3",
          "area_name": "181-320\u5e73\u7c73",
          "photo_num": "7"
        }, {
          "subject_id": "1000081",
          "subject_name": "\u6b27\u5f0f\u8bbe\u8ba1\u5e26\u7ed9\u5bb6\u4eba\u8212\u670d\u6e29\u99a8",
          "title_img": "http://i1.carimg.com/0/photo/201/035/000/768574401df458f2.jpg!hmm",
          "style_id": "2",
          "style_name": "\u6b27\u5f0f",
          "house_type_id": "16",
          "house_type_name": "\u522b\u5885",
          "price_id": "54",
          "price_name": "50-80\u4e07\u5de6\u53f3",
          "area_id": "3",
          "area_name": "181-320\u5e73\u7c73",
          "photo_num": "8"
        }]
      }
    },
    onReady: function() {
       this.getData();
    },
    getData:function(){
       var self=this;
        wx.request( {
            url:app.api.designerInfo,
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
    },
    tab:function(e){
      var n=e.currentTarget.dataset.index;
      if(n==1){
          this.setData({
              tab:{
                tab1:true,
                tab2:false
              }
          })
      }else{
        this.setData({
              tab:{
                tab1:false,
                tab2:true
              }
          })
      }
    },
    makePhoneCall:function(e){
      var tel_num=e.currentTarget.dataset.tel;
      wx.makePhoneCall({
        phoneNumber: tel_num
      })
    },
    yuyue:function(){
      app.yuyue();
    }
})