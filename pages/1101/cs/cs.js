Page({
  data: {
    VBIAS: 5,
    Rcs: 470,
    Vcs: 0.42,

    IloadResult: 0.45,
  },

  compute_click() {
    const VBIAS = Number(this.data.VBIAS);
    const Rcs = Number(this.data.Rcs);
    const Vcs = Number(this.data.Vcs);

    const Ioffset = 0.037;
    const CSR = 50000;

    const IloadResult = (VBIAS - Vcs) / Rcs / 1000 * CSR - Ioffset;

    this.setData({
      IloadResult: IloadResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSW1101IRH/HRH 电流采样'
        })
      }, 2000)
    })
    return {
      title: 'RSW1101IRH/HRH 电流采样',
      path: '/pages/1101/cs/cs',
      promise
    }
  }
});
