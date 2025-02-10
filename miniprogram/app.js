// app.js
App({
	onLaunch: function () {
		const envID = "" // 填入云开发环境ID
		if (!wx.cloud) {
			console.error('请使用 2.2.3 或以上的基础库以使用云能力');
		} else {
			wx.cloud.init({
				env: envID,
				traceUser: true,
			});

			require.async('./components/agent-ui/index.js').then(module => {
				module.clientSDK.init({
					envID: envID,
					appConfig: {}
				})
			})
		}

		this.globalData = {};
	}
});



