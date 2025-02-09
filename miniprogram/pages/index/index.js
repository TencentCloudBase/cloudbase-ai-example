Page({
  data: {
  },
  async onLoad() {},
  gotoPage(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }
});