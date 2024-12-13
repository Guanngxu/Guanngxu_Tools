Page({
  data: {
    R1: 10,
    R2: 3.9,

    VStart: 4.31,
    VStop: 4.10,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);

    const VStop = R1 * 1.15 / R2 + 1.15 - R1 * (3 + 3) / 1000000;
    const VStart = (R1 * (3 * (1 - 1.15 / 1.1) + 3) / 1000000 + VStop) / (1.15 / 1.21);

    this.setData({
      VStart: VStart.toFixed(2),
      VStop: VStop.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSHJ2630ARH 欠压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSHJ2630ARH 欠压保护',
      path: '/pages/2630/uvlo/uvlo',
      promise
    }
  }
});
