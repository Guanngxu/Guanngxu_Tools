import Toast from 'tdesign-miniprogram/toast/index';
const calcListMap = {
  "BUCK": [
    { "title": "输入纹波", "tags": ["BUCK"], "page": "/pages/buck/deltavin/deltavin" },
    { "title": "输出纹波", "tags": ["BUCK"], "page": "/pages/buck/deltavout/deltavout" },
    { "title": "电感纹波电流", "tags": ["BUCK"], "page": "/pages/buck/deltail/deltail" },
    { "title": "输出电感", "tags": ["BUCK"], "page": "/pages/buck/lout/lout" }],
  "0508": [
    { "title": "欠压保护", "tags": ["DC-DC"], "page": "/pages/0508/uvlo/uvlo" },
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/0508/startup/startup" },
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/0508/vout/vout" },
    { "title": "开关频率设置", "tags": ["DC-DC"], "page": "/pages/0508/freq/freq" }
  ],
  "1206": [
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/1206/startup/startup" },
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/1206/vout/vout" },
    { "title": "开关频率设置", "tags": ["DC-DC"], "page": "/pages/1206/freq/freq" }
  ],
  "4644": [
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/4644/vout/vout" },
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/4644/startup/startup" }
  ],
  "2630": [
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/2630/vout/vout" },
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/2630/startup/startup" }
  ],
  "2600": [
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/2600/vout/vout" },
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/2600/startup/startup" },
    { "title": "开关频率设置", "tags": ["DC-DC"], "page": "/pages/2600/freq/freq" }
  ],
  "1101": [
    { "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/1101/startup/startup" },
    { "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/1101/vout/vout" },
    { "title": "过流保护", "tags": ["DC-DC"], "page": "/pages/1101/oc/oc" }
  ],
  "0706": [
    { "title": "过流保护", "tags": ["电子保险丝"], "page": "/pages/0706/oc/oc" },
    { "title": "电流采样", "tags": ["电子保险丝"], "page": "/pages/0706/cs/cs" },
    { "title": "输出上升时间", "tags": ["电子保险丝"], "page": "/pages/0706/startup/startup" },
  ],
  "0702": [
    { "title": "输出上升时间", "tags": ["电子保险丝"], "page": "/pages/0702/startup/startup" },
    { "title": "过流保护", "tags": ["电子保险丝"], "page": "/pages/0702/oc/oc" },
    { "title": "电流采样", "tags": ["电子保险丝"], "page": "/pages/0702/cs/cs" },
    { "title": "过流保护时间", "tags": ["电子保险丝"], "page": "/pages/0702/octime/octime" },
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
      { "text": "0702", "key": 0 },
      { "text": "4644", "key": 1 },
      { "text": "2600", "key": 2 },
      { "text": "1101", "key": 3 },
      { "text": "2630", "key": 4 },
      { "text": "0508", "key": 5 },
      { "text": "1206", "key": 6 },
      { "text": "0706", "key": 7 },
      { "text": "BUCK", "key": 8 },
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
