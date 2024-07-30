Page({
  data: {
    Vin: 5,
    Vout: 1,
    Iout: 1,
    Switchf: 1000,
    ESR: 200,
    Cin: 100,
    PowerL: 1.8,

    Iripple: 0,
    Vin_rippleESR: 0,
    Vin_rippleC: 0,
    Vin_ripple: 0
  },

  compute_click() {
    const Vin = Number(this.data.Vin);
    const Vout = Number(this.data.Vout);
    const Iout = Number(this.data.Iout);
    const ESR = Number(this.data.ESR);
    const Cin = Number(this.data.Cin);
    const diffVinVout = Vin - Vout;
    const curL = Number(this.data.PowerL) * 0.000001;
    const curf = Number(this.data.Switchf) * 1000;

    const Iripple = (diffVinVout * Vout) / (curL * Vin * curf);
    const Vin_rippleESR = ESR * (Iripple / 2 + Iout);
    const Vin_rippleC = ((diffVinVout / Vin) * (Vout * Iout) / (Cin * Vin * curf));
    const Vin_ripple = Vin_rippleESR + Vin_rippleC;

    this.setData({
      Iripple: Iripple.toFixed(2),
      Vin_rippleESR: Vin_rippleESR.toFixed(2),
      Vin_rippleC: Vin_rippleC.toFixed(2),
      Vin_ripple: Vin_ripple.toFixed(2)
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
