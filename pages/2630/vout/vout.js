Page({
  data: {
    Vout: 1.8,
    Rfb: 30.58,

    VoutResult: 1.80,
    RfbResult: 30.58,
  },

  compute_click() {
    const Vout = Number(this.data.Vout);
    const Rfb = Number(this.data.Rfb);

    const VoutResult = 0.605 * (60.4 + Rfb) / Rfb;
    const RfbResult = 0.605 * 60.4 / (Vout - 0.605);


    this.setData({
      VoutResult: VoutResult.toFixed(2),
      RfbResult: RfbResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '2630 输出电压'
        })
      }, 2000)
    })
    return {
      title: '2630 输出电压',
      path: '/pages/2630/vout/vout',
      promise
    }
  }
});
