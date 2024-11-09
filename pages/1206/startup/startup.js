Page({
  data: {
    Css: 10,

    tss: 2.72,
  },

  compute_click() {
    const Css = Number(this.data.Css);

    const tss = Css * 0.789 / 2.9;

    this.setData({
      tss: tss.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '1206 缓启动时间'
        })
      }, 2000)
    })
    return {
      title: '1206 缓启动时间',
      path: '/pages/1206/startup/startup',
      promise
    }
  }
});
