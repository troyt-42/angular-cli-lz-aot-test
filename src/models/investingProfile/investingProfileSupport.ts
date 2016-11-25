import {TimeHorizon, createDefaultTimeHorizon} from './timeHorizon';
import {RiskRule} from './riskRule';
import {Objective} from './objective';
import {AssetAllocatable} from '../assetAllocatable';

export interface InvestingProfileSupport extends AssetAllocatable {
  readonly code: string;
  readonly name: string;
  readonly title: string;
  readonly descriptions: Array<string>;
  readonly conservativeRanking: number;
  readonly investorInterestPercentage: number;
  readonly mapImage: string;
  readonly timeHorizon: TimeHorizon;
  readonly risks: Array<RiskRule>;
  readonly riskDescription: string;
  readonly objectives: Array<Objective>;
}

export function createDefaultInvestingProfileSupport(): InvestingProfileSupport {
  return {
    code: null,
    name: null,
    title: null,
    descriptions: [],
    conservativeRanking: null,
    investorInterestPercentage: null,
    mapImage: null,
    timeHorizon: createDefaultTimeHorizon(),
    risks: [],
    riskDescription: null,
    objectives: [],
    assetAllocations: [],
    assetAllocationDescription: null
  };
}

export function isPrimaryInvestingProfile(investingProfile: InvestingProfileSupport) {
  return !!investingProfile ?
    !!((<any>investingProfile).alternativeProfiles) :
    false;
}