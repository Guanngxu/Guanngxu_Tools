Page({
  data: {
    Vbase: 0.6,
    TopR: 10,
    BottomR: 10,

    Vout: 0
  },

  compute_click() {
    const Vbase = Number(this.data.Vbase);
    const TopR = Number(this.data.TopR);
    const BottomR = Number(this.data.BottomR);

    const Vout = Vbase * (TopR + BottomR) / BottomR;

    this.setData({
      Vout: Vout.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'BUCK 输出纹波'
        })
      }, 2000)
    })
    return {
      title: 'BUCK 输出纹波',
      path: '/pages/buck/buck',
      promise
    }
  }
});
