Page({
  data: {
    freq: 1,
    period: 1,

    periodResult: "1ms",
    freqResult: "1kHz",

    freqOptionsValue: "kHz",
    periodOptionsValue: "ms",
    freqOptions: [{ "value": "Hz", "label": "Hz" },{ "value": "kHz", "label": "kHz" }, { "value": "MHz", "label": "MHz" }],
    periodOptions: [{ "value": "s", "label": "s" },{ "value": "ms", "label": "ms" }, { "value": "us", "label": "us" }, { "value": "ns", "label": "ns" }],

  },

  freqOptionChange(e) {
    this.setData({
      'freqOptionsValue': e.detail.value,
    });
  },

  periodOptionChange(e) {
    this.setData({
      'periodOptionsValue': e.detail.value,
    });
  },

  compute_click() {
    let freq = Number(this.data.freq);
    let period = Number(this.data.period);

    let periodResult = 0;
    let freqResult = 0;

    if(this.data.periodOptionsValue == "ns") {
      freqResult = 1 / period * 1000000000;
    } else if(this.data.periodOptionsValue == "us") {
      freqResult = 1 / period * 1000000;
    } else if(this.data.periodOptionsValue == "ms") {
      freqResult = 1 / period * 1000;
    } else {
      freqResult = 1 / period;
    }

    if(freqResult >= 1000000) {
      freqResult = freqResult / 1000000 + "MHz";
    } else if(freqResult >= 1000) {
      freqResult = freqResult / 1000 + "kHz";
    } else {
      freqResult = freqResult + "Hz";
    }

    if(this.data.freqOptionsValue == "kHz") {
      freq *= 1000;
    } else if(this.data.freqOptionsValue == "MHz") {
      freq *= 1000000;
    }

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
      periodResult = 1 / freq;
      if(periodResult < 1) {
        periodResult = periodResult * 1000 + "ms"
       } else {
        periodResult = periodResult + "s"
       }
    }

    this.setData({
      periodResult: periodResult,
      freqResult: freqResult
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
