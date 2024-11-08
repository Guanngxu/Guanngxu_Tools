Page({
  data: {
    Rtop: 10,
    Rbot: 10,
    Vovpr: 10,
    Vovpf: 10,

    VINovpr: 3.10,
    VINovpf: 77.47,
  },

  compute_click() {
    const Rtop = Number(this.data.Rtop);
    const Rbot = Number(this.data.Rbot);
    const Vovpr = Number(this.data.Vovpr);
    const Vovpf = Number(this.data.Vovpf);

    const VINovpr = Vovpr * (Rtop + Rbot) / Rbot;
    const VINovps = Vovpf * (Rtop + Rbot) / Rbot;

    this.setData({
      RlimResult: RlimResult.toFixed(2),
      IlimResult: IlimResult.toFixed(2),
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
      path: '/pages/0706/cs/cs',
      promise
    }
  }
});
