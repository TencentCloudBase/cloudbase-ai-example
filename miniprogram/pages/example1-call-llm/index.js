Page({
	data: {
		inputValue: "",
		outputValue: "",
		autosize: {
			maxHeight: 800,
			minHeight: 20,
		},
		pending: false
	},
	async onLoad() {
		wx.setNavigationBarTitle({
			title: "示例1：调用大模型文本生成"
		})
	},
	handleInput(e) {
		this.setData({
			inputValue: e.detail.value
		})
	},
	async callAI() {
		const hy = wx.cloud.extend.AI.createModel("deepseek");
		this.setData({
			pending: true
		})

		try {
			const res = await hy.streamText({
				data: {
					model: "deepseek-r1", // 指定具体的模型
					messages: [{
						role: "user",
						content: this.data.inputValue // 用户对话的内容
					}, ],
				},
			});

			this.setData({
				outputValue: "",
				pending: false
			})
			// 由于大模型的返回结果是流式的，所以我们这里需要循环接收完整的响应文本。
			for await (let str of res.textStream) {
				this.setData({
					outputValue: this.data.outputValue + str
				})
			}
		} catch (e) {
			this.setData({ pending: false })
			console.error(e)
		}
	}
});