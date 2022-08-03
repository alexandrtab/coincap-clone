import { instance } from "../../shared/api/instances";

export const handleGetCurrenciesData = async (limit) => {
  const response = await instance.get(`assets?limit=${limit}`);

return response.data.data;
};

export const handleGetCurrencyHistory = async (id) => {
  const response = await instance.get(`assets/${id}/history?interval=d1`);

return response.data.data;
};
