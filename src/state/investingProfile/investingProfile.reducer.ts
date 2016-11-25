import {Action} from '@ngrx/store';

import {InvestingProfileActions} from './investingProfile.actions';
import {InvestingProfile, createDefaultInvestingProfile} from '../../models/investingProfile/investingProfile';
import {updateObject} from '../util';

export const investingProfileReducer =
  (state: InvestingProfile = createDefaultInvestingProfile(), action: Action): InvestingProfile => {

    switch (action.type) {
      case InvestingProfileActions.INVESTING_PROFILE_RETRIEVE:
        return updateObject(state, {
          isLoading: true,
          isReceived: false,
          error: null
        });

      case InvestingProfileActions.INVESTING_PROFILE_RETRIEVE_SUCCESS:
        return updateObject(state, {
          isLoading: false,
          isReceived: true,
          error: null,
          code: action.payload.code,
          name: action.payload.name,
          title: action.payload.title,
          conservativeRanking: action.payload.conservativeRanking,
          investorInterestPercentage: action.payload.investorInterestPercentage,
          mapImage: action.payload.mapImage,
          riskDescription: action.payload.riskDescription,
          assetAllocationDescription: action.payload.assetAllocationDescription,
          descriptions: action.payload.descriptions,
          timeHorizon: action.payload.timeHorizon,
          risks: action.payload.risks,
          objectives: action.payload.objectives,
          assetAllocations: action.payload.assetAllocations,
          alternativeProfiles: action.payload.alternativeProfiles
        });

      case InvestingProfileActions.INVESTING_PROFILE_RETRIEVE_ERROR:
        return updateObject(state, {
          isLoading: false,
          isReceived: false,
          error: action.payload
        });

      default:
        return state;
    }
  };
