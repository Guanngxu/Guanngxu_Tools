Page({
  data: {
    R1: 208.33,
    R2: 3.39,
    Vsren: 100,
    Vsrdis: 90,

    VsrenResult: 100,
    VsrdisResult: 90,
    R1Result: 208.33,
    R2Result: 3.39,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const Vsren = Number(this.data.Vsren);
    const Vsrdis = Number(this.data.Vsrdis);
    const Vref = 5; // 5V


    const R1Result = (Vref * (Vsren - Vsrdis) / 1000) / (3 / 1000000 * (2 * Vsrdis - Vsren) / 1000)
    const R2Result = (Vref * (Vsren - Vsrdis) / 1000) / (3 / 1000000 * (Vref - 2 * Vsrdis / 1000 + Vsren / 1000))
    // const temp2Vsrdis_Vsren = Vref * (R2 / (R1 + R2))
    // const tempVsren_Vsrdis = (R1 * R2) / (R1 + R2)
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
