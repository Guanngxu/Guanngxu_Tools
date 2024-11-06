Page({
  data: {
    Ilim: 4,
    Rlim: 100,

    IlimResult: 3.10,
    RlimResult: 77.5,
  },

  compute_click() {
    const Ilim = Number(this.data.Ilim);
    const Rlim = Number(this.data.Rlim);

    const RlimResult = 5.08 * 61000 / (Ilim * 1000);
    const IlimResult = 5.08 * 61000 / (Rlim * 1000);

    this.setData({
      RlimResult: RlimResult.toFixed(2),
      IlimResult: IlimResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '0706 电流采样'
        })
      }, 2000)
    })
    return {
      title: '0706 电流采样',
      path: '/pages/0706/cs/cs',
      promise
    }
  }
});
