const priceFormatter = (currency: string) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency,
});

export const formatAsPrice = (price: number, currency: string) => priceFormatter(currency).format(price);
