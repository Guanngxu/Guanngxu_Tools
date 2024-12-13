Page({
  data: {
    R1: 10,
    R2: 3.9,

    VStart: 4.13,
    VStop: 3.81,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);

    const VStop = R1 * 1.07 / R2 + 1.07 - R1 * (3.11 + 3.12) / 1000000;
    const VStart = (R1 * (3.11 * (1 - 1.07 / 1.1) + 3.12) / 1000000 + VStop) / (1.07 / 1.16);

    this.setData({
      VStart: VStart.toFixed(2),
      VStop: VStop.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSS1206HRH/IRH 欠压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSS1206HRH/IRH 欠压保护',
      path: '/pages/1206/uvlo/uvlo',
      promise
    }
  }
});
