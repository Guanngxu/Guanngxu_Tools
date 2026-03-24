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
					title: 'RSHO4630SRH 缓启动时间'
				})
			}, 2000)
		})
		return {
			title: 'RSHO4630SRH 缓启动时间',
			path: '/pages/4630/startup/startup',
			promise
		}
	}
});
