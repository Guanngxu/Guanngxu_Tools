Page({
  data: {
    R1: 10,
    R2: 10,

    R_Result: 5,
  },
  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);

    const R_Result = (R1 * R2) / (R1 + R2);
    this.setData({
      R_Result: R_Result.toFixed(2)
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '并联电阻计算器'
        })
      }, 2000)
    })
    return {
      title: '并联电阻计算器',
      path: '/pages/resistor/resistor',
      promise
    }
  }
});
