export interface Fund {
  readonly invDesc: string;
  readonly invMgtCd: string;
  readonly invFundNum: string;
  readonly invSymbol: string;
  readonly invPercent: number;
  readonly feePercent: number;
}