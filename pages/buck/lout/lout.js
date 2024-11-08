Page({
  data: {
    Vin: 6.3,
    Vout: 3.3,
    Iout: 8,
    fs: 500,
    rL: 0.2,

    Lout: 1.96,
  },

  compute_click() {
    const Vin = Number(this.data.Vin);
    const Vout = Number(this.data.Vout);
    const Iout = Number(this.data.Iout);
    const fs = Number(this.data.fs);
    const rL = Number(this.data.rL);

    const Lout = Vout * (1 - Vout / Vin) / Iout / fs / 1000 / rL * 1000000;

    this.setData({
      Lout: Lout.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'BUCK 电路输出电感'
        })
      }, 2000)
    })
    return {
      title: 'BUCK 电路输出电感',
      path: '/pages/buck/lout/lout',
      promise
    }
  }
});
