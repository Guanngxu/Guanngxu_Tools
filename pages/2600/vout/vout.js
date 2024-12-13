Page({
  data: {
    Vout: 1.0,
    Rfb1: 10,
    Rfb2: 15.2,

    VoutResult: 1.0,
    Ratio: "3.17 : 1",
  },

  compute_click() {
    const Vout = Number(this.data.Vout);
    const Rfb1 = Number(this.data.Rfb1);
    const Rfb2 = Number(this.data.Rfb2);


    const VoutResult = 0.605 * (Rfb1 + Rfb2) / Rfb2;
    const Ratio = ((Vout - 0.605) / 0.605).toFixed(2) + " : 1";


    this.setData({
      VoutResult: VoutResult.toFixed(2),
      Ratio,
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSS2600IRH 输出电压'
        })
      }, 2000)
    })
    return {
      title: 'RSS2600IRH 输出电压',
      path: '/pages/2600/vout/vout',
      promise
    }
  }
});
