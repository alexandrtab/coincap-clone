import axios from "axios";

const BASE_URL = "https://api.coincap.io/v2/";

export const instance = axios.create({
	baseURL: BASE_URL,
});
