Page({
  data: {
    Css: 10,

    tss: 2.65,
  },

  compute_click() {
    const Css = Number(this.data.Css);

    const tss = Css * 0.795 / 3;

    this.setData({
      tss: tss.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSS3802QRH/IRH 闭环缓启动时间'
        })
      }, 2000)
    })
    return {
      title: 'RSS3802QRH/IRH 闭环缓启动时间',
      path: '/pages/3802/startup/startup',
      promise
    }
  }
});
