Page({
  data: {
    keyword: '',
    // 精简后的料号平铺列表
    rawComponentList: [
      { id: '0508', name: 'RSS0508HRH' },
      { id: '1101', name: 'RSW1101HRH' },
      { id: '3301', name: 'RSW3301HRH' },
      { id: '4644', name: 'RSHF4644ARH' }
    ],
    // 页面实际渲染的数据
    displayList: []
  },

  onLoad() {
    this.setData({ displayList: this.data.rawComponentList });
  },

  onSearchChange(e) {
    const keyword = e.detail.value.toLowerCase().trim();
    this.setData({ keyword });

    if (!keyword) {
      this.setData({ displayList: this.data.rawComponentList });
      return;
    }

    const filteredList = this.data.rawComponentList.filter(item => 
      item.id.toLowerCase().includes(keyword) || 
      item.name.toLowerCase().includes(keyword)
    );

    this.setData({ displayList: filteredList });
  },

  onSearchCancel() {
    this.setData({ 
      keyword: '', 
      displayList: this.data.rawComponentList 
    });
  },

  // 严格按照要求的跳转逻辑
  goToDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/tools/static/${id}/index`
    });
  }
});