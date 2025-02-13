Page({
  data: {
    Vout: 3.3,
    Rfb1: 1.1,
    Rfb2: 3,

    VoutResult: 1.50,
    Ratio: "2.00 : 1",
  },

  compute_click() {
    const Vout = Number(this.data.Vout);
    const Rfb1 = Number(this.data.Rfb1);
    const Rfb2 = Number(this.data.Rfb2);


    const VoutResult = 1.1 * (Rfb1 + Rfb2) / Rfb2;
    const Ratio = ((Vout - 1.1) / 1.1).toFixed(2) + " : 1";


    this.setData({
      VoutResult: VoutResult.toFixed(2),
      Ratio,
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSW1201AORH/IRH 输出电压'
        })
      }, 2000)
    })
    return {
      title: 'RSW1201AORH/IRH 输出电压',
      path: '/pages/1201A/vout/vout',
      promise
    }
  }
});
