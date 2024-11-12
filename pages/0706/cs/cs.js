Page({
  data: {
    Vcs: 4,
    Rcs: 100,

    Iout: 2.44,
  },

  compute_click() {
    const Vcs = Number(this.data.Vcs);
    const Rcs = Number(this.data.Rcs);

    const Iout = Vcs * 61000 / Rcs / 1000;

    this.setData({
      Iout: Iout.toFixed(2)
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW0706IRH/HRH 电流采样'
        })
      }, 2000)
    })
    return {
      title: 'RSSW0706IRH/HRH 电流采样',
      path: '/pages/0706/cs/cs',
      promise
    }
  }
});
