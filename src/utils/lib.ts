import { IHistoryData } from "./types";

export const handleGenerateCurrencyHistoryData = (data: IHistoryData[]) =>
	data.map((item) => {
		const currentItemDate = new Date(+item.time);
		const numberDays = currentItemDate.getDate();
		const numberMonths = currentItemDate.getMonth();
		const currentYear = currentItemDate.getFullYear();

		return {
			...item,
			time: `${numberDays}-${numberMonths}-${currentYear}`,
		};
	});
