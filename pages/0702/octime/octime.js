Page({
  data: {
    Cilt: 1000,
    Ton: 1,

    CiltResult: 900.90,
    TonResult: 1.11,
  },

  compute_click() {
    const Cilt = Number(this.data.Cilt);
    const Ton = Number(this.data.Ton);

    const TonResult = 1.11 * Cilt / 1000;
    const CiltResult = Ton * 1000 / 1.11;

    this.setData({
      TonResult: TonResult.toFixed(2),
      CiltResult: CiltResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '0702 过流保护时间'
        })
      }, 2000)
    })
    return {
      title: '0702 过流保护时间',
      path: '/pages/0702/octime/octime',
      promise
    }
  }
});
