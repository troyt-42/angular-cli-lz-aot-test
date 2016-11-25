import {ServicePackageFeature} from './feature';

const MONTHS_PER_YEAR: number = 12;

export interface ServicePackage {
  readonly name: string;
  readonly descriptions: Array<string>;
  readonly feePercentage: number;
  readonly features: Array<ServicePackageFeature>;
  readonly detailsUrl: string;
}

export function createDefaultServicePackage(): ServicePackage {
  return {
    name: null,
    descriptions: [],
    feePercentage: null,
    features: [],
    detailsUrl: null,
  };
}

export function calculateMonthlyFee(servicePackage: ServicePackage, yearlyAmount: number): number {
  if (!servicePackage) {
    throw new Error('Requires a valid service package');
  }

  if (servicePackage.feePercentage < 0) {
    throw new Error('The fee percentage must be greater than 0');
  }

  return servicePackage.feePercentage * yearlyAmount / 100 / MONTHS_PER_YEAR;
}