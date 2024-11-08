Page({
  data: {
    Vin: 6.3,
    Vout: 3.3,
    Iout: 8,
    rL: 0.2,
    fs: 500,

    Lout: 1.96,
  },

  compute_click() {
    const Vin = Number(this.data.Vin);
    const Vout = Number(this.data.Vout);
    const Iout = Number(this.data.Iout);
    const rL = Number(this.data.rL);
    const fs = Number(this.data.fs);

    const Lout = Vout * (1 - Vout / Vin) / Iout / rL / fs / 1000;

    this.setData({
      Lout: Lout.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '0508 输出电感设计'
        })
      }, 2000)
    })
    return {
      title: '0508 输出电感设计',
      path: '/pages/0508/lout/lout',
      promise
    }
  }
});
