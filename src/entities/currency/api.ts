import { instance } from "../../shared/api/instances";

export const handleGetCurrenciesData = async (limit: number) => {
	const response = await instance.get(`assets?limit=${limit}`);

	return response.data.data;
};

export const handleGetCurrencyHistory = async (id: string) => {
	const response = await instance.get(`assets/${id}/history?interval=d1`);

	return response.data.data;
};
