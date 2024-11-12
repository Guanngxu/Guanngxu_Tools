Page({
  data: {
    Vout: 3.3,
    Rfb1: 10,
    Rfb2: 2.25,

    VoutResult: 3.29,
    Ratio: "4.45 : 1",
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
          title: 'RSW1101IRH/HRH 输出电压'
        })
      }, 2000)
    })
    return {
      title: 'RSW1101IRH/HRH 输出电压',
      path: '/pages/1101/vout/vout',
      promise
    }
  }
});
