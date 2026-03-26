Page({
  data: {
    R1: 100,
    R2: 38,

    VStartResult: 3.99,
    VStopResult: 3.63,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const Venh = 1.1;
    const Venl = 1.0;

    const VStartResult = Venh * (R1 + R2) / R2;
    const VStopResult = Venl * (R1 + R2) / R2;

    this.setData({
      VStartResult: VStartResult.toFixed(2),
      VStopResult: VStopResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW2815K2RH 输入欠压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSSW2815K2RH 输入欠压保护',
      path: '/pages/2815/uvlo/uvlo',
      promise
    }
  }
});
