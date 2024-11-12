Page({
  data: {
    Ilim: 4,
    Rlim: 100,

    IlimResult: 3.10,
    RlimResult: 77.47,
  },

  compute_click() {
    const Ilim = Number(this.data.Ilim);
    const Rlim = Number(this.data.Rlim);

    const RlimResult = 5.08 * 61000 / Ilim / 1000;
    const IlimResult = 5.08 * 61000 / Rlim / 1000;

    this.setData({
      RlimResult: RlimResult.toFixed(2),
      IlimResult: IlimResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW0706IRH/HRH 过流保护'
        })
      }, 2000)
    })
    return {
      title: 'RSSW0706IRH/HRH 过流保护',
      path: '/pages/0706/cs/cs',
      promise
    }
  }
});
