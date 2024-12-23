Page({
	data: {
		PSRR: 45,
		factor: 177.83,
	},

	compute_click() {
		const PSRR = Number(this.data.PSRR);

		const factor = Math.pow(10, (PSRR / 20));

		this.setData({
			factor: factor.toFixed(2),
		})
	},

	onShareAppMessage() {
		const promise = new Promise(resolve => {
			setTimeout(() => {
				resolve({
					title: 'PSRR 衰减系数'
				})
			}, 2000)
		})
		return {
			title: 'PSRR 衰减系数',
			path: '/pages/tools/psrr/psrr',
			promise
		}
	}
});
