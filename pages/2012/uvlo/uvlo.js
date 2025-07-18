Page({
  data: {
    R1: 9.49,
    R2: 3.71,
    VStart: 4.10,
    VStop: 3.75,

    VStartResult: 4.06,
    VStopResult: 3.74,
    R1Result: 9.49,
    R2Result: 3.75,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const VStart = Number(this.data.VStart);
    const VStop = Number(this.data.VStop);
    const Ienh = 3.3;
    const Ien = 3.3;
    const Venr = 1.15;
    const Venf = 1.07;

    // const R1Result = 1000000 * (VStart * (Venf / Venr) - VStop) / (Ien * (1 - Venf / Venr) + Ienh)
    // const R2Result = (R1Result * Venf) / (VStop - Venf + R1Result * (Ien + Ienh) / 1000000)
    const VStopResult = R1 * Venf / R2 + Venf - R1 * (Ien + Ienh) / 1000;
    const VStartResult = (VStopResult + R1 * 1000 * (Ien / 1000000 * (1 - Venf / Venr) + Ienh / 1000000)) * Venr / Venf;

    this.setData({
      VStartResult: VStartResult.toFixed(2),
      VStopResult: VStopResult.toFixed(2),
      // R1Result: (R1Result / 1000).toFixed(2),
      // R2Result: (R2Result / 1000).toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSHJ2012ARH 输入欠压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSHJ2012ARH 输入欠压保护',
      path: '/pages/2012/uvlo/uvlo',
      promise
    }
  }
});
