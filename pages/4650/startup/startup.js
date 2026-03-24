Page({
	data: {
		Css: 10,
    ChannelVout: 1,

		tss: 4.80,
	},

	compute_click() {
    const Css = Number(this.data.Css);
    const ChannelVout = Number(this.data.ChannelVout);

    const tss = Css * 0.6 / 1.25 / ChannelVout;

		this.setData({
			tss: tss.toFixed(2),
		})
	},

	onShareAppMessage() {
		const promise = new Promise(resolve => {
			setTimeout(() => {
				resolve({
					title: 'RSHP4650SRH 缓启动时间'
				})
			}, 2000)
		})
		return {
			title: 'RSHP4650SRH 缓启动时间',
			path: '/pages/4650/startup/startup',
			promise
		}
	}
});
