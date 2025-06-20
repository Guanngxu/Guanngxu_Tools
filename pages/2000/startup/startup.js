Page({
  data: {
    Css: 10,

    tss: 5.66,
  },

  compute_click() {
    const Css = Number(this.data.Css);

    const tss = (Css + 10) * 0.792 / 2.8;

    this.setData({
      tss: tss.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSHF2000ARH 缓启动时间'
        })
      }, 2000)
    })
    return {
      title: 'RSHF2000ARH 缓启动时间',
      path: '/pages/2000/startup/startup',
      promise
    }
  }
});
