import {Loadable} from '../loadable';
import {AlternativeProfile} from './alternativeProfile';
import {InvestingProfileSupport, createDefaultInvestingProfileSupport} from './investingProfileSupport';
import {updateObject} from '../../state/util';

export interface InvestingProfile extends Loadable, InvestingProfileSupport {
  readonly alternativeProfiles: Array<AlternativeProfile>;
}

export function createDefaultInvestingProfile(): InvestingProfile {
  return updateObject(createDefaultInvestingProfileSupport(), {
    isLoading: false,
    isReceived: false,
    error: null,
    alternativeProfiles: []
  });
}

export function getSelectableInvestingProfiles(investingProfile: InvestingProfile): Array<InvestingProfileSupport> {
  if (!investingProfile) {
    return [];
  }

  return (<InvestingProfileSupport[]>[investingProfile]).concat(
    investingProfile.alternativeProfiles
  ).sort((investingProfile1, investingProfile2) =>
    investingProfile2.conservativeRanking - investingProfile1.conservativeRanking
  );
}