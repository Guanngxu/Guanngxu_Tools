Page({
  data: {
    VStart: 4.5,
    VStop: 4,

    R1Result: 10.00,
    R2Result: 3.47,
  },

  compute_click() {
    const VStart = Number(this.data.VStart);
    const VStop = Number(this.data.VStop);


    const R1Result = 10;
    // Vrundown 的典型值为 1.03
    // Vrunrise 的典型值为 1.13
    // const R2Result = 1.13 * 10 / (VStart - 1.13);
    const R2Result = 1.03 * 10 / (VStop - 1.03);

    this.setData({
      R1Result: R1Result.toFixed(2),
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
