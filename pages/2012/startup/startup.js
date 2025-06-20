Page({
  data: {
    Css: 10,

    tss: 5.44,
  },

  compute_click() {
    const Css = Number(this.data.Css);

    const tss = (Css + 10) * 0.789 / 2.9;

    this.setData({
      tss: tss.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSHJ2012ARH 缓启动时间'
        })
      }, 2000)
    })
    return {
      title: 'RSHJ2012ARH 缓启动时间',
      path: '/pages/2012/startup/startup',
      promise
    }
  }
});
