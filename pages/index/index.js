import Toast from 'tdesign-miniprogram/toast/index';
const calcListMap = {
  "BUCK": [
    // { "title": "输入纹波", "tags": ["BUCK"], "page": "/pages/buck/deltavin/deltavin" },
    { "title": "输出纹波", "tags": ["BUCK"], "page": "/pages/buck/deltavout/deltavout" },
    { "title": "电感纹波电流", "tags": ["BUCK"], "page": "/pages/buck/deltail/deltail" },
    { "title": "输出电感", "tags": ["BUCK"], "page": "/pages/buck/lout/lout" }],
  "RSS0508IRH/HRH": [
    { "title": "欠压保护", "tags": ["DC-DC"], "page": "/pages/0508/uvlo/uvlo" },
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/0508/startup/startup" },
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/0508/vout/vout" },
    { "title": "开关频率设置", "tags": ["DC-DC"], "page": "/pages/0508/freq/freq" }
  ],
  "RSS1206HRH/IRH": [
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/1206/startup/startup" },
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/1206/vout/vout" },
    { "title": "开关频率设置", "tags": ["DC-DC"], "page": "/pages/1206/freq/freq" }
  ],
  "RSHF4644ARH": [
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/4644/vout/vout" },
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/4644/startup/startup" }
  ],
  "RSHJ2630ARH": [
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/2630/vout/vout" },
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/2630/startup/startup" }
  ],
  "RSS2600IRH": [
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/2600/vout/vout" },
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/2600/startup/startup" },
    { "title": "开关频率设置", "tags": ["DC-DC"], "page": "/pages/2600/freq/freq" }
  ],
  "RSW1101IRH/HRH": [
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/1101/startup/startup" },
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/1101/vout/vout" },
    { "title": "过流保护", "tags": ["DC-DC"], "page": "/pages/1101/oc/oc" }
  ],
  "RSSW0706IRH/HRH": [
    { "title": "过流保护", "tags": ["电子保险丝"], "page": "/pages/0706/oc/oc" },
    { "title": "电流采样", "tags": ["电子保险丝"], "page": "/pages/0706/cs/cs" },
    { "title": "输出上升时间", "tags": ["电子保险丝"], "page": "/pages/0706/startup/startup" },
  ],
  "RSSW0702IRH": [
    { "title": "输出上升时间", "tags": ["电子保险丝"], "page": "/pages/0702/startup/startup" },
    { "title": "过流保护", "tags": ["电子保险丝"], "page": "/pages/0702/oc/oc" },
    { "title": "电流采样", "tags": ["电子保险丝"], "page": "/pages/0702/cs/cs" },
    { "title": "过流保护时间", "tags": ["电子保险丝"], "page": "/pages/0702/octime/octime" },
  ],
  "频率周期": [
    { "title": "频率周期", "tags": ["通用工具"], "page": "/pages/freq/f2s/f2s" },
  ]
}

Page({
  data: {
    imgSrcs: [],
    tabList: [],
    goodsList: [],
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: '500',
    interval: 5000,
    navigation: { type: 'dots' },
    swiperImageProps: { mode: 'scaleToFill' },
    tabIndex: 0,
  },

  onShow() {
    // this.getTabBar().init();
  },
  onShareAppMessage() {

  },
  onLoad() {
    this.init();
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.loadHomePage();
  },

  loadHomePage() {
    wx.stopPullDownRefresh();
    let tabList = [
      { "text": "RSSW0702IRH", "key": 0 },
      { "text": "RSHF4644ARH", "key": 1 },
      { "text": "RSS2600IRH", "key": 2 },
      { "text": "RSW1101IRH/HRH", "key": 3 },
      { "text": "RSHJ2630ARH", "key": 4 },
      { "text": "RSS0508IRH/HRH", "key": 5 },
      { "text": "RSS1206HRH/IRH", "key": 6 },
      { "text": "RSSW0706IRH/HRH", "key": 7 },
      { "text": "BUCK", "key": 8 },
      { "text": "频率周期", "key": 9 },
    ];
    // let index = 0;
    // for (let key in calcListMap) {
    //   tabList.push({
    //     text: key,
    //     key: index,
    //   });
    //   index++;
    // }
    this.setData({
      pageLoading: true,
      tabList,
      imgSrcs: "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-mp/activity/banner.png",
      pageLoading: false,
    });

    this.loadCalcList(tabList[0]["text"], true)
  },

  tabChangeHandle(e) {
    this.tabIndex = e.detail;
    this.loadCalcList(this.tabIndex.label, true);
  },

  async loadCalcList(label, fresh) {
    if (fresh) {
      wx.pageScrollTo({
        scrollTop: 0,
      });
    }
    this.setData({
      goodsList: calcListMap[label],
    });

  },

  goodListClickHandle(e) {
    const { index } = e.detail;
    wx.navigateTo({
      url: this.data.goodsList[index]["page"],
    });
  },

  goodListAddCartHandle() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '点击加入购物车',
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
