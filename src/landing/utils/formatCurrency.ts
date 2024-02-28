export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'KZT',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }).format(value)
}
