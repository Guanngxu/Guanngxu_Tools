Page({
  data: {
    Css: 10,

    tss: 2.42,
  },

  compute_click() {
    const Css = Number(this.data.Css);

    const tss = Css * 0.605 / 2.5;

    this.setData({
      tss: tss.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSW1101IRH/HRH 缓启动时间'
        })
      }, 2000)
    })
    return {
      title: 'RSW1101IRH/HRH 缓启动时间',
      path: '/pages/1101/startup/startup',
      promise
    }
  }
});
