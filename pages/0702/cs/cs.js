Page({
  data: {
    Vcs: 2,
    Rcs: 15,

    Iout: 1.36,
  },

  compute_click() {
    const Vcs = Number(this.data.Vcs);
    const Rcs = Number(this.data.Rcs);

    const Iout = Vcs * 10200 / Rcs / 1000;

    this.setData({
      Iout: Iout.toFixed(2)
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW0702IRH 电流采样'
        })
      }, 2000)
    })
    return {
      title: 'RSSW0702IRH 电流采样',
      path: '/pages/0702/cs/cs',
      promise
    }
  }
});
