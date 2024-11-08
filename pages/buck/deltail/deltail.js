Page({
  data: {
    Vin: 6.3,
    Vout: 3.3,
    Lout: 2.2,
    fs: 500,

    deltaIL: 1.43,
  },

  compute_click() {
    const Vin = Number(this.data.Vin);
    const Vout = Number(this.data.Vout);
    const Lout = Number(this.data.Lout);
    const fs = Number(this.data.fs);

    const deltaIL = Vout * (1 - Vout / Vin) / Lout / fs * 1000000 / 1000;

    this.setData({
      deltaIL: deltaIL.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'BUCK 电路输出电感纹波电流'
        })
      }, 2000)
    })
    return {
      title: 'BUCK 电路输出电感纹波电流',
      path: '/pages/buck/deltail/deltail',
      promise
    }
  }
});
