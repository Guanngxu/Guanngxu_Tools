Page({
  data: {
    Vout: 3.3,
    Rfb: 13.3,

    VoutResult: 3.31,
    RfbResult: 13.34,
  },

  compute_click() {
    const Vout = Number(this.data.Vout);
    const Rfb = Number(this.data.Rfb);

    const VoutResult = 0.597 * (60.4 + Rfb) / Rfb;
    const RfbResult = 0.597 * 60.4 / (Vout - 0.597);


    this.setData({
      VoutResult: VoutResult.toFixed(2),
      RfbResult: RfbResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '4644 输出电压'
        })
      }, 2000)
    })
    return {
      title: '4644 输出电压',
      path: '/pages/4644/vout/vout',
      promise
    }
  }
});
