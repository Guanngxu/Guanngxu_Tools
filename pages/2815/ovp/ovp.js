Page({
  data: {
    R1: 47,
    R2: 51,

    VovpResult: 6.51,
    VreResult: 6.05,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const Vovpr = 1.1;
    const Vovpf = 1.06;

    const VreResult = Vovpf * (R1 + R2) / R2;
    const VovpResult = Vovpr * (R1 + R2) / R2;


    this.setData({
      VovpResult: VovpResult.toFixed(2),
      VreResult: VreResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW2815K2RH 输出过压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSSW2815K2RH 输出过压保护',
      path: '/pages/2815/ovp/ovp',
      promise
    }
  }
});
