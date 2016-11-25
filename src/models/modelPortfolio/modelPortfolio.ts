import {Loadable} from '../loadable';
import {AssetAllocatable} from '../assetAllocatable';
import {ReturnOnRevenue, createDefaultReturnOnRevenue} from './returnOnRevenue';
import {Fund} from './fund';

export interface ModelPortfolio extends Loadable, AssetAllocatable {
  readonly modelSysId: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly ror: ReturnOnRevenue;
  readonly investmentList: Array<Fund>;
}

export function createDefaultModelPortfolio(): ModelPortfolio {
  return {
    isLoading: false,
    isReceived: false,
    error: null,
    modelSysId: null,
    shortDescription: null,
    description: null,
    ror: createDefaultReturnOnRevenue(),
    investmentList: [],
    assetAllocations: []
  };
}