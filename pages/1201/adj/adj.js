Page({
  data: {
    time: 100,
    Rfb1: 1.86,
    Rfb2: 1,

    CadjResult: 34.97,
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
          title: 'RSW1201HRH/URH 时间常数'
        })
      }, 2000)
    })
    return {
      title: 'RSW1201HRH/URH 时间常数',
      path: '/pages/1201/adj/adj',
      promise
    }
  }
});
