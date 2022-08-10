export const handleGenerateCurrencyHistoryData = (data: []) =>
	data.map((item: { time: string }) => {
		const currentItemDate = new Date(item.time);
		const numberDays = currentItemDate.getDate();
		const numberMonths = currentItemDate.getMonth();
		const currentYear = currentItemDate.getFullYear();

		return {
			...item,
			time: `${numberDays}-${numberMonths}-${currentYear}`,
		};
	});
