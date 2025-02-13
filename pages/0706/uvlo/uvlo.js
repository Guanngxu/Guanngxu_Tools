Page({
  data: {
    R1: 100,
    R2: 36,

    VStartResult: 4.12,
    VStopResult: 3.82,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const Vihen = 1.09;
    const Vilen = 1.01;

    const VStartResult = Vihen * (R1 + R2) / R2;
    const VStopResult = Vilen * (R1 + R2) / R2;

    this.setData({
      VStartResult: VStartResult.toFixed(2),
      VStopResult: VStopResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW0706IRH/HRH 输入欠压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSSW0706IRH/HRH 输入欠压保护',
      path: '/pages/0706/uvlo/uvlo',
      promise
    }
  }
});
