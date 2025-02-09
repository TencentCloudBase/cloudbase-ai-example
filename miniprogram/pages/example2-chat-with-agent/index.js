Page({
  data: {
    inputValue: "",
    pendingOutput: "",
    messages: [],
    autosize: {
      maxHeight: 800,
      minHeight: 20,
    },
  },
  async onLoad() {
    wx.setNavigationBarTitle({
      title: "示例2：调用 Agent（智能体）实现对话"
    })
  },
  handleInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  async callAgent() {
    const botId = "" // 需填入Agent ID, 如 "bot-9a2165dd"
    if (!botId) {
      throw new Error("未填入对话所需的 Agent ID，请遵循以下步骤：\n 1. 前往 https://tcb.cloud.tencent.com/dev?#/ai?tab=agent 创建 Agent，得到 Agent ID\n 2. 在 pages/example2-chat-with-agent/index.js 中填入 Agent ID\n")
    }
    const inputValue = this.data.inputValue
    // 发送成功，清理输入框
    this.setData({
      inputValue: ""
    })
    this.addMessage('user', inputValue)
    const res = await wx.cloud.extend.AI.bot.sendMessage({
      data: {
        botId: botId, // 第2步中获取的Agent唯一标识
        msg: inputValue, // 用户的输入
        history: this.data.messages.map(message => ({ role: message.type, content: message.content }))
      },
    });


    for await (let x of res.textStream) {
      this.setData({
        pendingOutput: this.data.pendingOutput + x
      })
    }

    this.addMessage('assistant', this.data.pendingOutput)
    this.setData({
      pendingOutput: ''
    })
  },

  addMessage(type, content) {
    this.setData({
      messages: [...this.data.messages, {
        type,
        content
      }]
    })
  }
});