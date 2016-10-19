//app.js
App({
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
	globalData: {
		caseId: 1000098 //案例ID 1000098 多张户型图 1000089 单张户型图 1000090 无户型图
	}
})