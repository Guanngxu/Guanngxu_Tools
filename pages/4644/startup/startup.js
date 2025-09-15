Page({
	data: {
		Css: 10,
    ChannelVout: 1,

		tss: 2.39,
	},

	compute_click() {
    const Css = Number(this.data.Css);
    const ChannelVout = Number(this.data.ChannelVout);

    let tmp_tss = Css * 0.597 / 2.5 / ChannelVout;
    const tss = tmp_tss > 1.2 ? tmp_tss : 1.2;

		this.setData({
			tss: tss.toFixed(2),
		})
	},

	onShareAppMessage() {
		const promise = new Promise(resolve => {
			setTimeout(() => {
				resolve({
					title: 'RSHF4644ARH 缓启动时间'
				})
			}, 2000)
		})
		return {
			title: 'RSHF4644ARH 缓启动时间',
			path: '/pages/4644/startup/startup',
			promise
		}
	}
});
