Page({
  data: {
    R1: 84.09,
    R2: 27.88,
    Vovp: 5.5,
    Vre: 5.2,

    VovpResult: 5.5,
    VreResult: 5.2,
    R1Result: 84.09,
    R2Result: 27.88,
  },

  compute_click() {
    const R1 = Number(this.data.R1);
    const R2 = Number(this.data.R2);
    const Vovp = Number(this.data.Vovp);
    const Vre = Number(this.data.Vre);
    const ovthf = 1.23;
    const ovthr = 1.24;
    const Iovp = 3.1 / 1000000;
    const Iovph = 3.08 / 1000000;

    // 临时变量
    const _2ovthf_ovthr = 2 * ovthf - ovthr;
    const _2Vre_Vovp = (R1 / R2 + 1) * _2ovthf_ovthr;


    const R1Result = ((Vovp / (2 * Vre - Vovp) * _2ovthf_ovthr - ovthr) * (2 * Vre - Vovp)) / ((Iovp + Iovph) * _2ovthf_ovthr);
    const R2Result = R1Result / ((2 * Vre - Vovp) / _2ovthf_ovthr - 1);

    const VovpResult = ((R1 * 1000 * _2ovthf_ovthr * (Iovp + Iovph)) + (ovthr * _2Vre_Vovp)) / _2ovthf_ovthr;
    const VreResult = (VovpResult + _2Vre_Vovp) / 2;


    this.setData({
      VovpResult: VovpResult.toFixed(2),
      VreResult: VreResult.toFixed(2),
      R1Result: (R1Result / 1000).toFixed(2),
      R2Result: (R2Result / 1000).toFixed(2),
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'RSS3802QRH/IRH 输出过压保护'
        })
      }, 2000)
    })
    return {
      title: 'RSS3802QRH/IRH 输出过压保护',
      path: '/pages/3802/ovp/ovp',
      promise
    }
  }
});
