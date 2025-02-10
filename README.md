# 云开发 AI 调用示例项目

![](https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/fc336e5e-76b2-4f6f-920a-2998baed2478.png)

## 快速开始
### 1. 开通云开发，获取环境ID

打开微信开发工具，点击上方「云开发」按钮，开通云开发

![](https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/60c8370c-2d59-4776-b329-c946e9eabe94.png)

在云开发控制台中，获取到环境 ID

![](https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/af1b8049-679b-4029-b09f-29680926380c.jpg)

### 2. 在 `miniprogram/app.js` 中配置环境ID

```js
App({
	onLaunch: function () {
		const envID = "<此处填入云开发环境ID>"
		// ……
	}
});

```

### 3. 创建 Agent（智能体），获得 Agent ID

进入 [云开发平台 AI+ 能力](https://tcb.cloud.tencent.com/dev?#/ai?tab=agent) ，创建一个新的 Agent。

![](https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/15f24570-7f13-42ed-880a-1a4b2c1512c4.png)

点击页面中上方的「复制 ID」，我们会获得一个 `bot-id`，即 Agent ID 唯一标识，在下面的代码中会用到。


### 4. 将 Agent ID 填入示例2和示例3

在以下两个文件中填入第 3 步里获取到的 Agent ID：

- `example2-chat-with-agent/index.js`
- `example3-using-chat-component/index.js`

随后即可使用示例 Demo

## 问题反馈

如您有任何模板使用问题，欢迎提交 Issue，或者加入用户交流群

![](https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/c6420fe5-ac41-4178-808f-de846c63250c.png)
