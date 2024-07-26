Page({
  data: {
    Vin: 5,
    Vout: 1,
    Switchf: 1000,
    ESR: 200,
    Cout: 100,
    PowerL: 1.8,

    Iripple: 0,
    Vout_rippleESR: 0,
    Vout_rippleC: 0,
    Vout_ripple: 0
  },

  compute_click() {
    const diffVinVout = this.data.Vin - this.data.Vout;
    let curL = this.data.PowerL * 0.000001;
    let curf = this.data.Switchf * 1000;

    const Iripple = (diffVinVout * this.data.Vout) / (curL * this.data.Vin * curf);
    const Vout_rippleESR = this.data.ESR * Iripple;
    const Vout_rippleC = Iripple / 8 / curf / (this.data.Cout / 1000000) * 1000;
    const Vout_ripple = Vout_rippleESR + Vout_rippleC;

    this.setData({
      Iripple,
      Vout_rippleESR,
      Vout_rippleC,
      Vout_ripple
    })
  }
});
