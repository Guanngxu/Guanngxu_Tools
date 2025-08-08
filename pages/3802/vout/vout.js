Page({
  data: {
    Vout: 5,
    Rfb1: 5.1,
    Rfb2: 0.964,

    VoutResult: 5,
    Ratio: "5.29 : 1",
  },

  compute_click() {
    const Vout = Number(this.data.Vout);
    const Rfb1 = Number(this.data.Rfb1);
    const Rfb2 = Number(this.data.Rfb2);


    const VoutResult = 0.795 * (Rfb1 + Rfb2) / Rfb2;
    const Ratio = ((Vout - 0.795) / 0.795).toFixed(2) + " : 1";


    this.setData({
      VoutResult: VoutResult.toFixed(2),
      Ratio,
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSS3802QRH/IRH 输出电压'
        })
      }, 2000)
    })
    return {
      title: 'RSS3802QRH/IRH 输出电压',
      path: '/pages/3802/vout/vout',
      promise
    }
  }
});
