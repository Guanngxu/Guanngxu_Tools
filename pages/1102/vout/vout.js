Page({
  data: {
    Rref: 10,
    Rss_set: 10,

    IrefResult: 100,
    VosnsResult: 1
  },

  compute_click() {
    const Rref = Number(this.data.Rref);
    const Rss_set = Number(this.data.Rss_set);

    const IrefResult = 1000 / Rref;
    const VosnsResult = IrefResult * Rss_set * 1000 / 1000000;

    this.setData({
      VosnsResult: VosnsResult.toFixed(2),
      IrefResult: IrefResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSW1102IRH 输出电压'
        })
      }, 2000)
    })
    return {
      title: 'RSW1102IRH 输出电压',
      path: '/pages/1102/vout/vout',
      promise
    }
  }
});
