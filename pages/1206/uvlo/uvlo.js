Page({
  data: {
    R1: 9.49,
    R2: 3.71,
    VStart: 4.10,
    VStop: 3.75,

    VStartResult: 4.10,
    VStopResult: 3.75,
    R1Result: 9.49,
    R2Result: 3.75,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const VStart = Number(this.data.VStart);
    const VStop = Number(this.data.VStop);
    const Ienh = 3.12;
    const Ien = 3.11;
    const Venr = 1.16;
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
          title: 'RSS1206HRH/IRH 输入欠压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSS1206HRH/IRH 输入欠压保护',
      path: '/pages/1206/uvlo/uvlo',
      promise
    }
  }
});
