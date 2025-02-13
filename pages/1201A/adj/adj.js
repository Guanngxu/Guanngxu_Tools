Page({
  data: {
    time: 100,
    Rfb1: 1.1,
    Rfb2: 1,

    CadjResult: 47.62,
  },

  compute_click() {
    const time = Number(this.data.time);
    const Rfb1 = Number(this.data.Rfb1);
    const Rfb2 = Number(this.data.Rfb2);


    const CadjResult = time / (Rfb1 + Rfb2);


    this.setData({
      CadjResult: CadjResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSW1201AORH/IRH 时间常数'
        })
      }, 2000)
    })
    return {
      title: 'RSW1201AORH/IRH 时间常数',
      path: '/pages/1201A/adj/adj',
      promise
    }
  }
});
