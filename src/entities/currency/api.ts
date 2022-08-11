import { ICurrency } from "../../pages/Currency/types";
import { instance } from "../../shared/api/instances";
import { IHistoryData } from "../../utils/types";

export const handleGetCurrenciesData = async (limit: number): Promise<ICurrency[]> => {
	const response = await instance.get(`assets?limit=${limit}`);

	return response.data.data;
};

export const handleGetCurrencyHistory = async (id: number): Promise<IHistoryData[]> => {
	const response = await instance.get(`assets/${id}/history?interval=d1`);

	return response.data.data;
};
