Page({
  data: {
    Icl: 4,
    Rpcl: 10,

    IclResult: 3.23,
    RpclResult: 7.94,
  },

  compute_click() {
    const Icl = Number(this.data.Icl);
    const Rpcl = Number(this.data.Rpcl);

    const RpclResult = 35380 / (Math.pow(Icl, 1.078)) / 1000;
    const IclResult = Math.pow((35380 / Rpcl / 1000), 1 / 1.078);

    this.setData({
      RpclResult: RpclResult.toFixed(2),
      IclResult: IclResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSW1101IRH/HRH 过流保护'
        })
      }, 2000)
    })
    return {
      title: 'RSW1101IRH/HRH 过流保护',
      path: '/pages/1101/cs/cs',
      promise
    }
  }
});
