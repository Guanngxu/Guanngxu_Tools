Page({
  data: {
    Iclm: 3.73,
    Rclm: 100,

    IclmResult: 3.73,
    RclmResult: 100,
  },

  compute_click() {
    const Iclm = Number(this.data.Iclm);
    const Rclm = Number(this.data.Rclm);

    const RclmResult = 27 / (4 -Iclm);
    const IclmResult = 4 - 27 / Rclm;

    this.setData({
      RclmResult: RclmResult.toFixed(2),
      IclmResult: IclmResult.toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSW1102IRH 过流保护'
        })
      }, 2000)
    })
    return {
      title: 'RSW1102IRH 过流保护',
      path: '/pages/1102/oc/oc',
      promise
    }
  }
});
