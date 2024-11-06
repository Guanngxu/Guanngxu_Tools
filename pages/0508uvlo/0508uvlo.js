Page({
  data: {
    R1: 10,
    R2: 3.9,

    VStart: 4,
    VStop: 3,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);

    const VStop = R1 * 0.99 / R2 + 0.99 - R1 * (2.9 + 3.3) / 1000000;
    const VStart = (R1 * (2.9 * (1 - 0.99 / 1.1) + 3.3) / 1000000 + VStop) / (0.99 / 1.1);

    this.setData({
      VStart: VStart.toFixed(2),
      VStop: VStop.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '0508 欠压保护'
        })
      }, 2000)
    })
    return {
      title: '0508 欠压保护',
      path: '/pages/0508uvlo/0508uvlo',
      promise
    }
  }
});