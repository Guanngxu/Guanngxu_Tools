Page({
  data: {
    Fsw: 500,
    RT: 95.277,

    FswResult: 500,
    RTResult: 95.28,
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
          title: 'RSHF2000ARH 开关频率设置'
        })
      }, 2000)
    })
    return {
      title: 'RSHF2000ARH 开关频率设置',
      path: '/pages/2000/freq/freq',
      promise
    }
  }
});
