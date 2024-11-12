Page({
  data: {
    Css: 10,

    tss: 2.02,
  },

  compute_click() {
    const Css = Number(this.data.Css);

    const tss = Css * 0.605 / 3;

    this.setData({
      tss: tss.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSS2600IRH 缓启动时间'
        })
      }, 2000)
    })
    return {
      title: 'RSS2600IRH 缓启动时间',
      path: '/pages/2600/startup/startup',
      promise
    }
  }
});
