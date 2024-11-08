Page({
  data: {
    Css: 10,

    tss: 2.83,
  },

  compute_click() {
    const Css = Number(this.data.Css);

    const tss = Css * 0.792 / 2.8;

    this.setData({
      tss: tss.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '0508 缓启动时间'
        })
      }, 2000)
    })
    return {
      title: '0508 缓启动时间',
      path: '/pages/0508/startup/startup',
      promise
    }
  }
});
