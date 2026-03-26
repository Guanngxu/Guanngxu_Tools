Page({
  data: {
    Cout: 1,
    Iinrush: 1,

    Csr: 5,
  },

  compute_click() {
    const Cout = Number(this.data.Cout);
    const Iinrush = Number(this.data.Iinrush);

    const Csr = 5 / Iinrush * Cout;

    this.setData({
      Csr: Csr.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSSW2815K2RH SR 电容'
        })
      }, 2000)
    })
    return {
      title: 'RSSW2815K2RH SR 电容',
      path: '/pages/2815/startup/startup',
      promise
    }
  }
});
