Page({
  data: {
    Vout: 3.3,
    Rfb1: 10,
    Rfb2: 3.14,

    VoutResult: 3.3,
    Ratio: "3.17 : 1",
  },

  compute_click() {
    const Vout = Number(this.data.Vout);
    const Rfb1 = Number(this.data.Rfb1);
    const Rfb2 = Number(this.data.Rfb2);


    const VoutResult = 0.789 * (Rfb1 + Rfb2) / Rfb2;
    const Ratio = ((Vout - 0.789) / 0.792).toFixed(2) + " : 1";


    this.setData({
      VoutResult: VoutResult.toFixed(2),
      Ratio,
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSS1206HRH/IRH 输出电压'
        })
      }, 2000)
    })
    return {
      title: 'RSS1206HRH/IRH 输出电压',
      path: '/pages/1206/vout/vout',
      promise
    }
  }
});
