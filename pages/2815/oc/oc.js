Page({
  data: {
    Ilim: 12,
    Rlim: 16.67,

    IlimResult: 12,
    RlimResult: 16.67,
  },

  compute_click() {
    const Ilim = Number(this.data.Ilim);
    const Rlim = Number(this.data.Rlim);

    const RlimResult = 4 / Ilim / 20 * 1000;
    const IlimResult = 4 / Rlim / 20 * 1000;

    this.setData({
      RlimResult: RlimResult.toFixed(2),
      IlimResult: IlimResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW2815K2RH 过流保护'
        })
      }, 2000)
    })
    return {
      title: 'RSSW2815K2RH 过流保护',
      path: '/pages/2815/oc/oc',
      promise
    }
  }
});
