export default interface SavingsRate {
  takeHomePay: number;
  preTaxContributions: number;
  afterTaxContributions: number;
  total: number;
}

export const NewSavingsRate: SavingsRate = {
  takeHomePay: 0,
  preTaxContributions: 0,
  afterTaxContributions: 0,
  total: 0,
};
