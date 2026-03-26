Page({
  data: {
    Vcs: 2,
    Rcs: 10,

    Iout: 10.00,
  },

  compute_click() {
    const Vcs = Number(this.data.Vcs);
    const Rcs = Number(this.data.Rcs);

    const Iout = Vcs / 20 / Rcs * 1000;

    this.setData({
      Iout: Iout.toFixed(2)
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW2815K2RH 电流采样'
        })
      }, 2000)
    })
    return {
      title: 'RSSW2815K2RH 电流采样',
      path: '/pages/2815/cs/cs',
      promise
    }
  }
});
