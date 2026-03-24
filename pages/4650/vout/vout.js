Page({
  data: {
    Vout: 1.0,
    Rfb: 90.6,

    VoutResult: 1.0,
    RfbResult: 90.6,
  },

  compute_click() {
    const Vout = Number(this.data.Vout);
    const Rfb = Number(this.data.Rfb);

    const VoutResult = 0.60 * (60.4 + Rfb) / Rfb;
    const RfbResult = 0.60 * 60.4 / (Vout - 0.60);


    this.setData({
      VoutResult: VoutResult.toFixed(2),
      RfbResult: RfbResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSHP4650SRH 输出电压'
        })
      }, 2000)
    })
    return {
      title: 'RSHP4650SRH 输出电压',
      path: '/pages/4650/vout/vout',
      promise
    }
  }
});
