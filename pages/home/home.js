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
	],
	"4644": [
		{ "title": "输出电压", "tags": ["DC-DC"], "page": "/pages/4644/vout/vout" },
		{ "title": "缓启动时间", "tags": ["DC-DC"], "page": "/pages/4644/startup/startup" }
	],
	"0706": [
		{ "title": "过流保护", "tags": ["电子保险丝"], "page": "/pages/0706/oc/oc" },
		{ "title": "电流采样", "tags": ["电子保险丝"], "page": "/pages/0706/cs/cs" },
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
		let tabList = [];
		let index = 0;
		for (let key in calcListMap) {
			tabList.push({
				text: key,
				key: index,
			});
			index++;
		}
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
