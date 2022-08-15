import { historyDataMock } from "../__mocks__/historyMock";
import { handleGenerateCurrencyHistoryData } from "../lib";

describe("Generating history data", () => {
	test("should return not empty data", () => {
		const filteredData = handleGenerateCurrencyHistoryData(historyDataMock);

		expect(filteredData).not.toBeNull();
	});
	test("should filter callback be called", () => {
		const filterHistoryCallbackMock = jest.fn(history => handleGenerateCurrencyHistoryData(history));

		filterHistoryCallbackMock(historyDataMock);

		expect(filterHistoryCallbackMock.mock.calls.length).toBe(1);
	});
	test("should data be equal to snapshot", () => {
		const filteredData = handleGenerateCurrencyHistoryData(historyDataMock);

		expect(filteredData).toMatchSnapshot();
	});
});
