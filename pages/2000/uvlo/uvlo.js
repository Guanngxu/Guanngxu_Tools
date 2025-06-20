Page({
  data: {
    R1: 8.64,
    R2: 3.37,
    VStart: 3.89,
    VStop: 3.47,

    VStartResult: 3.89,
    VStopResult: 3.47,
    R1Result: 8.64,
    R2Result: 3.37,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const VStart = Number(this.data.VStart);
    const VStop = Number(this.data.VStop);
    const Ienh = 3.3;
    const Ien = 2.9;
    const Venr = 1.10;
    const Venf = 0.99;

    // const uvlo = VStart - VStop;
    // if(uvlo > 0.4 || uvlo < 0.2) {
    //   wx.showModal({
    //     title: '提示',
    //     content: '启机电压与关机电压迟滞区间建议设置在 200mV 至 400mV 之间',
    //   })
    //   return ;
    // }

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
          title: 'RSHF2000ARH 输入欠压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSHF2000ARH 输入欠压保护',
      path: '/pages/2000/uvlo/uvlo',
      promise
    }
  }
});
