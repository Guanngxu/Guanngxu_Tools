Page({
  data: {
    Fsw: 500,
    RT: 100,

    FswResult: 501.01,
    RTResult: 100.22,
  },

  compute_click() {
    const Fsw = Number(this.data.Fsw);
    const RT = Number(this.data.RT);

    const RTResult = 87667 * Math.pow(Fsw, -1.09);
    const FswResult = Math.pow((RT / 87667), 1 / -1.09);


    this.setData({
      RTResult: RTResult.toFixed(2),
      FswResult: FswResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '2600 开关频率设置'
        })
      }, 2000)
    })
    return {
      title: '2600 开关频率设置',
      path: '/pages/2600/freq/freq',
      promise
    }
  }
});
