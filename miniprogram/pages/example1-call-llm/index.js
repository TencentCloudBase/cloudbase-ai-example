Page({
  data: {
    inputValue: "",
    outputValue: "",
    autosize: {
      maxHeight: 800,
      minHeight: 20,
    },
  },
  async onLoad() {
    wx.setNavigationBarTitle({
      title: "示例1：调用大模型文本生成"
    })
  },
  handleInput(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  async callAI() {
    const hy = wx.cloud.extend.AI.createModel("hunyuan-exp");
    const res = await hy.streamText({
      data: {
        model: "hunyuan-lite", // 指定具体的模型
        messages: [{
          role: "user",
          content: this.data.inputValue // 用户对话的内容
        }, ],
      },
    });

    // 清空之前的值
    this.setData({
      outputValue1: ""
    })
    // 由于大模型的返回结果是流式的，所以我们这里需要循环接收完整的响应文本。
    for await (let str of res.textStream) {
      this.setData({
        outputValue1: this.data.outputValue1 + str
      })
    }
  }
});