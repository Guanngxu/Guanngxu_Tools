Page({
  data: {
    R1: 555.10,
    R2: 26.04,
    VStart: 23,
    VStop: 19,

    VStartResult: 23,
    VStopResult: 19,
    R1Result: 555.10,
    R2Result: 26.04,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const VStart = Number(this.data.VStart);
    const VStop = Number(this.data.VStop);

    const R1Result = 1000000 * (VStart * (1.15 / 1.18) - VStop) / (6 * (1 - 1.15 / 1.18) + 6)
    const R2Result = (R1Result * 1.15) / (VStop - 1.15 + R1Result * (6 + 6) / 1000000)
    const VStopResult = R1 * 1.15 / R2 + 1.15 - R1 * (6 + 6) / 1000;
    const VStartResult = (VStopResult + R1 * 1000 * (6 / 1000000 * (1 - 1.15 / 1.18) + 6 / 1000000)) * 1.18 / 1.15;

    this.setData({
      VStartResult: VStartResult.toFixed(2),
      VStopResult: VStopResult.toFixed(2),
      R1Result: (R1Result / 1000).toFixed(2),
      R2Result: (R2Result / 1000).toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSMH1212ARH 欠压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSMH1212ARH 欠压保护',
      path: '/pages/1212/uvlo/uvlo',
      promise
    }
  }
});
