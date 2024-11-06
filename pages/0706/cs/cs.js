Page({
  data: {
    Vcs: 4,
    Rcs: 100,

    Iout: 3.10,
  },

  compute_click() {
    const Vcs = Number(this.data.Vcs);
    const Rcs = Number(this.data.Rcs);

    const Iout = Vcs * 61000 / (Rcs * 1000);

    this.setData({
      Iout: Iout.toFixed(2)
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '0706 过流保护'
        })
      }, 2000)
    })
    return {
      title: '0706 过流保护',
      path: '/pages/0706/oc/oc',
      promise
    }
  }
});
