Page({
  data: {
    R1: 100,
    R2: 25,

    VovpResult: 6.51,
    VreResult: 6.06,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const Vpgthr = 0.603;
    const Vpgthf = 0.562;

    const VreResult = Vpgthf * (R1 + R2) / R2;
    const VovpResult = Vpgthr * (R1 + R2) / R2;


    this.setData({
      VovpResult: VovpResult.toFixed(2),
      VreResult: VreResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW0702IRH PG过压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSSW0702IRH PG过压保护',
      path: '/pages/0702/pgovp/pgovp',
      promise
    }
  }
});
