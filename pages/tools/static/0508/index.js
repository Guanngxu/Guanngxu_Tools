Page({
  data: {
    // 器件外形图地址（请替换为实际图片 URL）
    chipImageUrl: 'https://7368-shengyukeji-cloud-d3dq2p5afa2844-1423120384.tcb.qcloud.la/器件管脚定义/0508引脚图.png',
    
    // 合并后的数据源
    benchmarkData: [
      // --- 常规必测项 ---
      { id: 1, testItem: '2脚对GND', impedance: '30M', voltage: '0.56' },
      { id: 2, testItem: '3脚对GND', impedance: '16M', voltage: '0.539' },
      { id: 3, testItem: '4脚对GND', impedance: '6.3M', voltage: '0.61' },
      { id: 4, testItem: '5脚对GND', impedance: '1M', voltage: '0.422' },
      { id: 5, testItem: '6.7脚对PGND', impedance: 'OL', voltage: '0.58' },
      { id: 6, testItem: '8.9.10脚对GND', impedance: '-', voltage: '-' },
      { id: 7, testItem: '11.12.13.14.15脚对PGND', impedance: '3M', voltage: '0.33' },
      { id: 8, testItem: '16脚对GND', impedance: 'OL', voltage: '0.66' },
      { id: 9, testItem: '17脚对GND', impedance: '12M', voltage: '0.61' },
      { id: 10, testItem: '18脚对GND', impedance: '12M', voltage: '0.58' },
      { id: 11, testItem: '19脚对GND', impedance: 'OL', voltage: '0.62' },
      { id: 12, testItem: '20脚对GND', impedance: 'OL', voltage: '0.53' },
      { id: 13, testItem: 'PVIN对外壳', impedance: '无穷', voltage: '-'},
      { id: 14, testItem: 'PH对外壳', impedance: '12M', voltage: '-'},
      { id: 15, testItem: 'PVIN对PH', impedance: '无穷', voltage: '-'},
      { id: 16, testItem: 'GND到外壳', impedance: '5', voltage: '-'},
    ]
  },

  onPreviewImage() {
    wx.previewImage({
      urls: [this.data.chipImageUrl],
      current: this.data.chipImageUrl
    });
  }
});