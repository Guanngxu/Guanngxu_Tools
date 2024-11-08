Page({
	data: {
		Css: 10,

		tss: 2.39,
	},

	compute_click() {
		const Css = Number(this.data.Css);

		const tss = Css * 0.597 / 2.5;

		this.setData({
			tss: tss.toFixed(2),
		})
	},

	onShareAppMessage() {
		const promise = new Promise(resolve => {
			setTimeout(() => {
				resolve({
					title: '4644 缓启动时间'
				})
			}, 2000)
		})
		return {
			title: '4644 缓启动时间',
			path: '/pages/4644/startup/startup',
			promise
		}
	}
});
