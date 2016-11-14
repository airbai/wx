//app.js
App({
	// 接口地址
	api:{
		yuyue:"https://www.jiajuol.com/api/0200/crm_apply.php",//提交预约
		condition:"https://api.jiajuol.com/partner/weixin/common/condition_list.php",//提交页面 获取面积、预算
		subjectList:"https://api.jiajuol.com/partner/weixin/subject/subject_list.php",//案例列表
		subjectInfo:"https://api.jiajuol.com/partner/weixin/subject/subject_info.php",//案例详情
		designerInfo:"https://m.jiajuol.com/partner/weixin/designer/designer_info.php",//设计师详情
		picList:"https://api.jiajuol.com/partner/weixin/pic_list/pic_list.php",//图库列表
	},
	// 获取用户信息
	getUserInfo: function(cb) {
		var that = this
		if (this.globalData.userInfo) {
			typeof cb == "function" && cb(this.globalData.userInfo)
		} else {
			//调用登录接口
			wx.login({
				success: function() {
					wx.getUserInfo({
						success: function(res) {
							that.globalData.userInfo = res.userInfo
							typeof cb == "function" && cb(that.globalData.userInfo)
						}
					})
				}
			})
		}
	},
	//跳转预约页面
	yuyue:function(){
        wx.navigateTo({
           url: '../yuyue/yuyue'
        });
    },
    // 全局变量
	globalData: {
		caseId: 1000098, //案例ID 1000098 多张户型图 1000089 单张户型图 1000090 无户型图
		designerId:2195 //设计师id
	}
})