export function formatDate(date: Date): string {
  return date.toISOString();
}

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
