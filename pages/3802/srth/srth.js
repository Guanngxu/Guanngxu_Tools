Page({
  data: {
    R1: 208.05,
    R2: 3.38,
    Vsren: 99.91,
    Vsrdis: 89.93,

    VsrenResult: 99.91,
    VsrdisResult: 89.93,
    R1Result: 208.05,
    R2Result: 3.38,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const Vsren = Number(this.data.Vsren);
    const Vsrdis = Number(this.data.Vsrdis);
    const Vref = 5; // 5V

    const R1Result = (Vsren - Vsrdis) * Vref / (3 / 1000000 * (2 * Vsrdis - Vsren));
    const R2Result = (Vsren / 1000 * R1Result) / (Vref - Vsren / 1000 + ((2 * Vref * (Vsren - Vsrdis)) / (2 * Vsrdis - Vsren)));

    const VsrenResult = 1000 * (Vref * (R2 / (R1 + R2)) + 6 * (R1 * R2 * 1000) / (R1 + R2) / 1000000)
    const VsrdisResult = 1000 * (Vref * (R2 / (R1 + R2)) + 3 * (R1 * R2 * 1000) / (R1 + R2) / 1000000)

    this.setData({
      VsrenResult: VsrenResult.toFixed(2),
      VsrdisResult: VsrdisResult.toFixed(2),
      R1Result: (R1Result / 1000).toFixed(2),
      R2Result: (R2Result / 1000).toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSS3802QRH/IRH SR_TH门限电压'
        })
      }, 2000)
    })
    return {
      title: 'RSS3802QRH/IRH SR_TH门限电压',
      path: '/pages/3802/srth/srth',
      promise
    }
  }
});
