Page({
  data: {
    R1: 48.5,
    R2: 5.5,

    VovpResult: 10.80,
    VreResult: 9.82,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const Vpgthr = 1.1;
    const Vpgthf = 1.0;

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
          title: 'RSSW2815K2RH PG阈值设定'
        })
      }, 2000)
    })
    return {
      title: 'RSSW2815K2RH PG阈值设定',
      path: '/pages/2815/pgth/pgth',
      promise
    }
  }
});
