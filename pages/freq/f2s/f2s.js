Page({
  data: {
    freq: 1,
    Rlim: 47,

    periodResult: "1ms",

    freqOptionsValue: "kHz",
    freqOptions: [{ "value": "Hz", "label": "Hz" },{ "value": "kHz", "label": "kHz" }, { "value": "MHz", "label": "MHz" }]
  },

  freqOptionChange(e) {
    this.setData({
      'freqOptionsValue': e.detail.value,
    });
  },

  compute_click() {
    let freq = Number(this.data.freq);

    if(this.data.freqOptionsValue == "kHz") {
      freq *= 1000;
    } else if(this.data.freqOptionsValue == "MHz") {
      freq *= 1000000;
    }

    let periodResult = 0;

    if(freq >= 1000000000) {
      periodResult = 1 * 1000000000 / freq;
      if(periodResult < 1) {
       periodResult = periodResult * 1000 + "ps"
      } else {
       periodResult = periodResult + "ns"
      }
    } else if(freq >= 1000000) {
      periodResult = 1 * 1000000 / freq;
      if(periodResult < 1) {
        periodResult = periodResult * 1000 + "ns"
       } else {
        periodResult = periodResult + "us"
       }
    } else if (freq >= 1000) {
      periodResult = 1 * 1000 / freq;
      if(periodResult < 1) {
        periodResult = periodResult * 1000 + "us"
       } else {
        periodResult = periodResult + "ms"
       }
    } else {
      periodResult = 1 / freq + "s";
    }

    this.setData({
      periodResult: periodResult,
    })
  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '频率周期换算'
        })
      }, 2000)
    })
    return {
      title: '频率周期换算',
      path: '/pages/freq/f2s/f2s',
      promise
    }
  }
});
