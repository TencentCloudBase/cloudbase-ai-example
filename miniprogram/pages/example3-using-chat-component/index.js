Page({
	data: {
		bot: {
			botId: "" // 填入Agent ID，如 "bot-9a2165dd"，可前往 https://tcb.cloud.tencent.com/dev?#/ai?tab=agent 创建 Agent
		}
	},
	async onLoad() {
		wx.setNavigationBarTitle({
			title: "示例3：使用云开发 AI 对话组件"
		})
		if (!this.data.bot.botId) {
			throw new Error("未填入对话所需的 Agent ID，请遵循以下步骤：\n 1. 前往 https://tcb.cloud.tencent.com/dev?#/ai?tab=agent 创建 Agent，得到 Agent ID\n 2. 在 pages/example3-using-chat-component/index.js 中填入 Agent ID\n")
		}
	}
});