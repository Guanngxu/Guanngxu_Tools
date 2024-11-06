import { fetchHome } from '../../services/home/home';
import Toast from 'tdesign-miniprogram/toast/index';
const calcListMap = {
  "通用": [
    { "title": "BUCK 输入纹波", "tags": ["BUCK", "DC-DC"], "page": "/pages/buckvin/buckvin" },
    { "title": "BUCK 输出纹波", "tags": ["BUCK", "DC-DC"], "page": "/pages/buck/buck" }],
  "LDO": [
    { "title": "并联电阻计算器", "tags": ["电路基础"], "page": "/pages/resistor/resistor" },
    { "title": "输出电压计算（基准电压）", "tags": ["电路基础"], "page": "/pages/vout/vout" },
    { "title": "0508 欠压保护", "tags": ["芯片"], "page": "/pages/0508uvlo/0508uvlo" },
  ],
  "0706": [
    { "title": "过流保护", "tags": ["电子保险丝"], "page": "/pages/0706/oc/oc" },
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

    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({ swiper, tabList }) => {
      this.setData({
        tabList,
        imgSrcs: swiper,
        pageLoading: false,
      });
      this.loadCalcList("通用", true);
    });
  },

  tabChangeHandle(e) {
    this.tabIndex = e.detail;
    this.loadCalcList(this.tabIndex.label, true);
  },

  onReTry() {
    this.loadCalcList("通用", false);
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
