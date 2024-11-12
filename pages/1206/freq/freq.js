Page({
  data: {
    Fsw: 330,
    RT: 161.726,

    FswResult: 330,
    RTResult: 161.73,
  },

  compute_click() {
    const Fsw = Number(this.data.Fsw);
    const RT = Number(this.data.RT);

    const RTResult = 51545 * Math.pow(Fsw, -0.994);
    const FswResult = Math.pow((RT / 51545), 1 / -0.994);


    this.setData({
      RTResult: RTResult.toFixed(2),
      FswResult: FswResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSS1206HRH/IRH 开关频率设置'
        })
      }, 2000)
    })
    return {
      title: 'RSS1206HRH/IRH 开关频率设置',
      path: '/pages/1206/freq/freq',
      promise
    }
  }
});
