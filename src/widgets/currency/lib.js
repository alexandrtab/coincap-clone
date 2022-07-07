export const handleGenerateCurrencyHistoryData = (data) => {
	return data.map((item) => {
		const currentItemDate = new Date(item.time);
		const numberDays = currentItemDate.getDate();
		const numberMonths = currentItemDate.getMonth();
		const currentYear = currentItemDate.getFullYear();

		return {
			...item,
			time: `${numberDays}-${numberMonths}-${currentYear}`,
		};
	});
};
