Page({
  data: {
    Ilim: 1.5,
    Rlim: 47,

    IlimResult: 1.62,
    RlimResult: 50.66,
  },

  compute_click() {
    const Ilim = Number(this.data.Ilim);
    const Rlim = Number(this.data.Rlim);

    const RlimResult = 7.45 * 10200 / Ilim / 1000;
    const IlimResult = 7.45 * 10200 / Rlim / 1000;

    this.setData({
      RlimResult: RlimResult.toFixed(2),
      IlimResult: IlimResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW0702IRH 过流保护'
        })
      }, 2000)
    })
    return {
      title: 'RSSW0702IRH 过流保护',
      path: '/pages/0702/oc/oc',
      promise
    }
  }
});
