export const getTopCurrencies = (currency) => {
  if (currency?.length) {
    return currency.slice(0, 3);
  }
};
