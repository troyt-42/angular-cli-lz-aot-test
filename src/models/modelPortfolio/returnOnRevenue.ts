export interface ReturnOnRevenue {
  readonly last60Months: string;
  readonly last120Months: string;
  readonly inception: string;
}

export function createDefaultReturnOnRevenue(): ReturnOnRevenue {
  return {
    last60Months: null,
    last120Months: null,
    inception: null
  };
}