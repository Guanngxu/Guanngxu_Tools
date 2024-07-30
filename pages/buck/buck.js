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
    const Vin = Number(this.data.Vin);
    const Vout = Number(this.data.Vout);
    const ESR = Number(this.data.ESR);
    const Cout = Number(this.data.Cout);
    const diffVinVout = Vin - Vout;
    const curL = Number(this.data.PowerL) * 0.000001;
    const curf = Number(this.data.Switchf) * 1000;

    const Iripple = (diffVinVout * Vout) / (curL * Vin * curf);
    const Vout_rippleESR = ESR * Iripple;
    const Vout_rippleC = Iripple / 8 / curf / (Cout / 1000000) * 1000;
    const Vout_ripple = Vout_rippleESR + Vout_rippleC;

    this.setData({
      Iripple: Iripple.toFixed(2),
      Vout_rippleESR: Vout_rippleESR.toFixed(2),
      Vout_rippleC: Vout_rippleC.toFixed(2),
      Vout_ripple: Vout_ripple.toFixed(2)
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'BUCK 输出纹波'
        })
      }, 2000)
    })
    return {
      title: 'BUCK 输出纹波',
      path: '/pages/buck/buck',
      promise
    }
  }
});
