const calcListMap = [
  {
    "title": "RSHF4644ARH",
    "items": [
      { "title": "输出电压", "page": "/pages/4644/vout/vout" },
      { "title": "缓启动时间", "page": "/pages/4644/startup/startup" },
      { "title": "输入欠压保护", "page": "/pages/4644/uvlo/uvlo" }
    ]
  },
  {
    "title": "RSSW0702IRH",
    "items": [
      { "title": "输出上升时间", "page": "/pages/0702/startup/startup" },
      { "title": "过流保护", "page": "/pages/0702/oc/oc" },
      { "title": "电流采样", "page": "/pages/0702/cs/cs" },
      { "title": "过流保护时间", "page": "/pages/0702/octime/octime" },
      { "title": "输入欠压保护", "page": "/pages/0702/uvlo/uvlo" },
      { "title": "输出过压保护", "page": "/pages/0702/ovp/ovp" },
    ]
  },
  {
    "title": "RSS2600IRH",
    "items": [
      { "title": "输出电压", "page": "/pages/2600/vout/vout" },
      { "title": "缓启动时间", "page": "/pages/2600/startup/startup" },
      { "title": "开关频率设置", "page": "/pages/2600/freq/freq" },
      { "title": "输入欠压保护", "page": "/pages/2600/uvlo/uvlo" }
    ]
  },
  {
    "title": "RSW1101IRH/HRH",
    "items": [
      { "title": "缓启动时间", "page": "/pages/1101/startup/startup" },
      { "title": "输出电压", "page": "/pages/1101/vout/vout" },
      { "title": "过流保护", "page": "/pages/1101/oc/oc" }
    ]
  },
  {
    "title": "RSHJ2630ARH",
    "items": [
      { "title": "输出电压", "page": "/pages/2630/vout/vout" },
      { "title": "缓启动时间", "page": "/pages/2630/startup/startup" },
      { "title": "开关频率设置", "page": "/pages/2630/freq/freq" },
      { "title": "输入欠压保护", "page": "/pages/2630/uvlo/uvlo" }
    ]
  },
  {
    "title": "RSS0508IRH/HRH",
    "items": [
      { "title": "输入欠压保护", "page": "/pages/0508/uvlo/uvlo" },
      { "title": "缓启动时间", "page": "/pages/0508/startup/startup" },
      { "title": "输出电压", "page": "/pages/0508/vout/vout" },
      { "title": "开关频率设置", "page": "/pages/0508/freq/freq" }
    ]
  },
  {
    "title": "RSS1206HRH/IRH",
    "items": [
      { "title": "缓启动时间", "page": "/pages/1206/startup/startup" },
      { "title": "输出电压", "page": "/pages/1206/vout/vout" },
      { "title": "开关频率设置", "page": "/pages/1206/freq/freq" },
      { "title": "输入欠压保护", "page": "/pages/1206/uvlo/uvlo" }
    ]
  },
  {
    "title": "RSSW0706IRH/HRH",
    "items": [
      { "title": "过流保护", "page": "/pages/0706/oc/oc" },
      { "title": "电流采样", "page": "/pages/0706/cs/cs" },
      { "title": "输出上升时间", "page": "/pages/0706/startup/startup" },
    ]
  },
  {
    "title": "RSMH1212ARH",
    "items": [
      { "title": "输入欠压保护", "page": "/pages/1212/uvlo/uvlo" }
    ]
  },
  {
    "title": "RSS3802QRH/IRH",
    "items": [
      { "title": "输出过压保护", "page": "/pages/3802/ovp/ovp" },
      { "title": "输入欠压保护", "page": "/pages/3802/uvlo/uvlo" }
    ]
  },
  {
    "title": "BUCK 电路计算",
    "items": [
      { "title": "输出纹波", "page": "/pages/buck/deltavout/deltavout" },
      { "title": "电感纹波电流", "page": "/pages/buck/deltail/deltail" },
      { "title": "输出电感", "page": "/pages/buck/lout/lout" }
    ]
  },
  {
    "title": "其它工具",
    "items": [
      { "title": "频率周期换算", "page": "/pages/tools/freq/freq" },
      { "title": "PSRR衰减系数", "page": "/pages/tools/psrr/psrr" },
    ]
  },
]

Page({
  data: {
    sideBarIndex: 0,
    calcListMap: calcListMap,
    goodsList: calcListMap[0]["items"]
  },

  onSideBarChange(e) {
    const { value } = e.detail;
    console.info("value", value)
    this.setData({ sideBarIndex: value, goodsList: calcListMap[value]["items"]});
  },

  onShareAppMessage() {
  },

  goodListClickHandle(e) {
    const { index } = e.detail;
    wx.navigateTo({
      url: this.data.goodsList[index]["page"],
    });
  },

  navToSearchPage() {
    // wx.navigateTo({ url: '/pages/goods/search/index' });
  },

  navToActivityDetail({ detail }) {
    const { index: promotionID = 0 } = detail || {};
    wx.navigateTo({
      url: `/pages/promotion-detail/index?promotion_id=${promotionID}`,
    });
  },
});
