Page({
  data: {
    VStart: 4.5,
    VStopResult: 4.10,

    R1: 10.00,
    R2Result: 3.35,
  },

  compute_click() {
    const VStart = Number(this.data.VStart);
    const R1 = Number(this.data.R1);
    
    const Vrunrise = 1.13;
    const Vrundown = 1.03;
    // Vrundown 的典型值为 1.03
    // Vrunrise 的典型值为 1.13
    const R2Result = Vrunrise * R1 / (VStart - Vrunrise);
    const VStopResult = (R2Result + R1) / R2Result * Vrundown;

    this.setData({
      VStopResult: VStopResult.toFixed(2),
      R2Result: R2Result.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSHF4644ARH 输入欠压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSHF4644ARH 输入欠压保护',
      path: '/pages/4644/uvlo/uvlo',
      promise
    }
  }
});
