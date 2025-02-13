Page({
  data: {
    R1: 100,
    R2: 25,

    VovpResult: 3.02,
    VreResult: 2.81,
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
          title: 'RSSW0706IRH/HRH PG阈值设定'
        })
      }, 2000)
    })
    return {
      title: 'RSSW0706IRH/HRH PG阈值设定',
      path: '/pages/0706/pgth/pgth',
      promise
    }
  }
});
