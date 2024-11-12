Page({
  data: {
    Css: 10,
    Vout: 3.3,

    tss: 14.19,
  },

  compute_click() {
    const Css = Number(this.data.Css);
    const Vout = Number(this.data.Vout);

    const tss = (Css + 0.75) * Vout / 2.5;

    this.setData({
      tss: tss.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW0706IRH/HRH 输出上升时间'
        })
      }, 2000)
    })
    return {
      title: 'RSSW0706IRH/HRH 输出上升时间',
      path: '/pages/0706/startup/startup',
      promise
    }
  }
});
