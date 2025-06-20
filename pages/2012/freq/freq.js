Page({
  data: {
    Fsw: 330,
    RT: 147.69,

    FswResult: 330,
    RTResult: 147.69,
  },

  compute_click() {
    const Fsw = Number(this.data.Fsw);
    const RT = Number(this.data.RT);

    const RTResult = 67009 * Math.pow(Fsw, -1.0549);
    const FswResult = Math.pow((RT / 67009), 1 / -1.0549);


    this.setData({
      RTResult: RTResult.toFixed(2),
      FswResult: FswResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSHJ2012ARH 开关频率设置'
        })
      }, 2000)
    })
    return {
      title: 'RSHJ2012ARH 开关频率设置',
      path: '/pages/2012/freq/freq',
      promise
    }
  }
});
